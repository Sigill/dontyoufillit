// src/core/constants.ts
var DEFAULT_BALL_SPEED = 1;
var DEFAULT_BALL_ACCELERATION = -0.4;
var DEFAULT_BALL_RADIUS = 1 / 40;
var CANNON_Y_POSITION = -1 / 6;
var CANNON_BASE_HEIGHT = 1 / 15;
var CANNON_LENGTH = 1 / 15;
var CANON_ANGULAR_SPEED = Math.PI / 3;
var INITIAL_BALL_COUNTER = 3;
var COMBO_HIT_THRESHOLD = 5;

// src/core/utils.ts
function vectorLength(x, y) {
  return Math.sqrt(x * x + y * y);
}
function normalizeRadian(angle) {
  return (angle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
}
function solveQuadraticInPlace(a, b, c, roots, epsilon = 0) {
  if (Math.abs(a) <= epsilon) {
    if (Math.abs(b) <= epsilon) return 0;
    roots[0] = -c / b;
    return 1;
  }
  const delta = b ** 2 - 4 * a * c;
  if (delta < -epsilon) return 0;
  if (delta > epsilon) {
    const sqrtDelta = Math.sqrt(delta);
    const denom = 0.5 / a;
    roots[0] = (-b + sqrtDelta) * denom;
    roots[1] = (-b - sqrtDelta) * denom;
    return 2;
  }
  roots[0] = -b / (2 * a);
  return 1;
}
function precomputeAngle(angle) {
  return { value: angle, cos: Math.cos(angle), sin: Math.sin(angle) };
}
function updateAngle(angle, value) {
  angle.value = value;
  angle.cos = Math.cos(value);
  angle.sin = Math.sin(value);
}

// src/core/ball.ts
function makeMovingBall({
  radius = DEFAULT_BALL_RADIUS,
  x = 0.5,
  y = CANNON_Y_POSITION + CANNON_BASE_HEIGHT + CANNON_LENGTH,
  angle = precomputeAngle(Math.PI / 2),
  speed = DEFAULT_BALL_SPEED,
  acceleration = DEFAULT_BALL_ACCELERATION
} = {}) {
  return { radius, angle, x, y, speed, acceleration };
}
function makeCannonBall({
  radius = DEFAULT_BALL_RADIUS,
  angle,
  speed = DEFAULT_BALL_SPEED,
  acceleration = DEFAULT_BALL_ACCELERATION
}) {
  const precomputedAngle = precomputeAngle(angle);
  const x = 0.5 + precomputedAngle.cos * CANNON_LENGTH;
  const y = CANNON_Y_POSITION + CANNON_BASE_HEIGHT + precomputedAngle.sin * CANNON_LENGTH;
  return makeMovingBall({ radius, angle: precomputedAngle, x, y, speed, acceleration });
}
function computeExpandedRadius({ x, y }, staticBalls) {
  let minRadius = Number.MAX_VALUE, available, o;
  for (let i = 0; i < staticBalls.length; ++i) {
    o = staticBalls[i];
    available = vectorLength(x - o.x, y - o.y) - o.radius;
    if (minRadius > available) minRadius = available;
  }
  available = x;
  if (minRadius > available) minRadius = available;
  available = 1 - x;
  if (minRadius > available) minRadius = available;
  available = Math.abs(y);
  if (minRadius > available) minRadius = available;
  available = Math.abs(1 - y);
  if (minRadius > available) minRadius = available;
  return Math.abs(minRadius);
}

// src/core/physics/collision/walls.ts
function makeWall({ x0, y0, x1, y1, sigma }) {
  const angle = Math.atan2(y1 - y0, x1 - x0);
  return { x0, y0, x1, y1, sigma, angle: precomputeAngle(angle) };
}
var GameWalls = {
  top: makeWall({ x0: 0, y0: 1, x1: 1, y1: 1, sigma: 1 }),
  right: makeWall({ x0: 1, y0: 1, x1: 1, y1: 0, sigma: 1 }),
  bottom: makeWall({ x0: 1, y0: 0, x1: 0, y1: 0, sigma: 1 }),
  left: makeWall({ x0: 0, y0: 0, x1: 0, y1: 1, sigma: 1 })
};

// src/core/physics/collision/ball-ball-collision-solver.ts
var ROOTS1 = new Float64Array(2);
var ROOTS2 = new Float64Array(2);
function computeCollisionWithBall(ball, staticBall, t0, tMax, { epsilon = 1e-5 } = {}) {
  const dx = ball.x - staticBall.x;
  const dy = ball.y - staticBall.y;
  const k = dx * ball.angle.cos + dy * ball.angle.sin;
  const sumRadii = ball.radius + staticBall.radius;
  if (-k <= 0) {
    return void 0;
  }
  const l = Math.abs(dx * -ball.angle.sin + dy * ball.angle.cos);
  if (l > sumRadii) {
    return void 0;
  }
  const count1 = solveQuadraticInPlace(1, 2 * k, dx * dx + dy * dy - sumRadii ** 2, ROOTS1, epsilon);
  let minT = void 0;
  for (let i = 0; i < count1; i++) {
    const root1 = ROOTS1[i];
    const count2 = solveQuadraticInPlace(0.5 * ball.acceleration, ball.speed, -root1, ROOTS2, epsilon);
    for (let j = 0; j < count2; j++) {
      const t = ROOTS2[j];
      if (t >= t0 && t <= tMax) {
        if (minT === void 0 || t < minT) {
          minT = t;
        }
      }
    }
  }
  return minT;
}

// src/core/physics/collision/ball-wall-collision-solver.ts
var ROOTS = new Float64Array(2);
function computeCollisionWithWallSide({ x, y, angle, speed, acceleration, radius }, { x0, y0, sigma, angle: alpha }, t0, tMax, { epsilon = 1e-5 } = {}) {
  const sinAlphaBeta = Math.sin(alpha.value - angle.value);
  if (Math.abs(sinAlphaBeta) <= epsilon) {
    return;
  }
  const c0 = (x - x0) * alpha.sin - (y - y0) * alpha.cos;
  const count = solveQuadraticInPlace(0.5 * acceleration * sinAlphaBeta, speed * sinAlphaBeta, c0 - sigma * radius, ROOTS, epsilon);
  let minT = void 0;
  for (let i = 0; i < count; i++) {
    const t = ROOTS[i];
    if (t >= t0 && t <= tMax) {
      if (minT === void 0 || t < minT) {
        minT = t;
      }
    }
  }
  return minT;
}

// src/core/physics/collision/fixed-points.ts
function computeFixedPoints(ball, staticBalls, {
  epsilon = 1e-5,
  includeFixedPoints = false,
  includeState = false
} = {}) {
  let { x, y, speed } = ball;
  const angle = { ...ball.angle };
  let t0 = 0;
  const tMax = -ball.speed / ball.acceleration;
  const ballRadius = ball.radius;
  const ballAcceleration = ball.acceleration;
  const fixedPoints = includeFixedPoints ? [{ t: t0, x, y, speed, angle: { ...angle }, obstacles: [] }] : void 0;
  let hits = 0;
  let points = 0;
  let gameover = false;
  let out = false;
  const counters = new Int32Array(staticBalls.length);
  for (let i = 0; i < staticBalls.length; i++) {
    counters[i] = staticBalls[i].counter;
  }
  while (true) {
    const ballState = { x, y, angle, speed, acceleration: ballAcceleration, radius: ballRadius };
    let minT = tMax - t0;
    let winnerWall = void 0;
    let winnerBallIndex = -1;
    let tie = false;
    const computeParams = { epsilon };
    if (angle.cos > 0) {
      const t = computeCollisionWithWallSide(ballState, GameWalls.right, epsilon, minT + epsilon, computeParams);
      if (t !== void 0) {
        if (t < minT - epsilon) {
          minT = t;
          winnerWall = GameWalls.right;
          tie = false;
        } else if (t <= minT + epsilon) {
          tie = true;
        }
      }
    } else if (angle.cos < 0) {
      const t = computeCollisionWithWallSide(ballState, GameWalls.left, epsilon, minT + epsilon, computeParams);
      if (t !== void 0) {
        if (t < minT - epsilon) {
          minT = t;
          winnerWall = GameWalls.left;
          tie = false;
        } else if (t <= minT + epsilon) {
          tie = true;
        }
      }
    }
    if (angle.sin > 0) {
      const t = computeCollisionWithWallSide(ballState, GameWalls.top, epsilon, minT + epsilon, computeParams);
      if (t !== void 0) {
        if (t < minT - epsilon) {
          minT = t;
          winnerWall = GameWalls.top;
          tie = false;
        } else if (t <= minT + epsilon) {
          tie = true;
        }
      }
    } else if (angle.sin < 0 && y > ballRadius) {
      const t = computeCollisionWithWallSide(ballState, GameWalls.bottom, epsilon, minT + epsilon, computeParams);
      if (t !== void 0) {
        if (t < minT - epsilon) {
          minT = t;
          winnerWall = GameWalls.bottom;
          tie = false;
        } else if (t <= minT + epsilon) {
          tie = true;
        }
      }
    }
    for (let i = 0; i < staticBalls.length; i++) {
      if (counters[i] <= 0) continue;
      const b = staticBalls[i];
      const t = computeCollisionWithBall(ballState, b, epsilon, minT + epsilon, computeParams);
      if (t !== void 0) {
        if (t < minT - epsilon) {
          minT = t;
          winnerBallIndex = i;
          winnerWall = void 0;
          tie = false;
        } else if (t <= minT + epsilon) {
          tie = true;
        }
      }
    }
    if (tie) {
      console.error("Collision against multiple objects", { ball, staticBalls });
      throw new Error("Collision against multiple objects");
    }
    const t1 = winnerWall === void 0 && winnerBallIndex === -1 ? tMax : t0 + minT;
    const deltaT = t1 - t0;
    const movement = 0.5 * ballAcceleration * deltaT ** 2 + speed * deltaT;
    x += angle.cos * movement;
    y += angle.sin * movement;
    speed = winnerWall === void 0 && winnerBallIndex === -1 ? 0 : speed + ballAcceleration * deltaT;
    if (winnerWall !== void 0 || winnerBallIndex !== -1) {
      if (winnerWall !== void 0) {
        updateAngle(angle, normalizeRadian(2 * winnerWall.angle.value - angle.value));
      } else if (winnerBallIndex !== -1) {
        counters[winnerBallIndex] -= 1;
        hits += 1;
        if (counters[winnerBallIndex] === 0) {
          points += 1;
        }
        const b = staticBalls[winnerBallIndex];
        const theta = Math.atan2(y - b.y, x - b.x);
        updateAngle(angle, normalizeRadian(2 * (theta + Math.PI / 2) - angle.value));
      }
    }
    if (fixedPoints) {
      const obstacles = [];
      if (winnerWall) obstacles.push({ type: "wall", value: winnerWall });
      if (winnerBallIndex !== -1) obstacles.push({ type: "ball", value: staticBalls[winnerBallIndex] });
      fixedPoints.push({ t: t1, x, y, angle: { ...angle }, speed, obstacles });
    }
    if (winnerWall === void 0 && winnerBallIndex === -1 || winnerWall !== void 0 && winnerWall === GameWalls.bottom || winnerBallIndex !== -1 && y < ballRadius && angle.sin < 0) {
      gameover = winnerWall !== void 0 || winnerBallIndex !== -1;
      out = winnerWall === void 0 && winnerBallIndex === -1 && y <= 0;
      break;
    }
    t0 = t1;
  }
  const result = {
    fixedPoints,
    hits,
    points,
    gameover,
    out
  };
  if (includeState) {
    const remainingStaticBalls = [];
    for (let i = 0; i < staticBalls.length; i++) {
      if (counters[i] > 0) {
        remainingStaticBalls.push({ ...staticBalls[i], counter: counters[i] });
      }
    }
    return {
      ...result,
      state: {
        remainingStaticBalls,
        finalX: x,
        finalY: y
      }
    };
  }
  return result;
}

// src/core/evaluation/evaluate-move.ts
var OUT_PENALITY = -1e6;
var GAMEOVER_PENALITY = -1e5;
function evaluateMove(staticBalls, angle, {
  steps = [180],
  criteria = "hits",
  initialBallCounter = INITIAL_BALL_COUNTER,
  stats,
  includeState
} = {}) {
  if (stats) stats.value += 1;
  const ball = makeCannonBall({ angle });
  const result = computeFixedPoints(ball, staticBalls, {
    epsilon: 1e-10,
    includeFixedPoints: false,
    includeState: includeState || steps.length > 0
  });
  const { points, hits, gameover, out, state } = result;
  let nextStaticBalls = void 0;
  let reward = points;
  if (criteria === "hits") {
    reward = hits;
  } else if (criteria === "points") {
    reward = points;
  } else if (criteria === "points+combo") {
    reward = points + Math.max(0, hits - COMBO_HIT_THRESHOLD);
  }
  if (gameover) {
    reward += GAMEOVER_PENALITY;
  } else if (out) {
    reward += OUT_PENALITY;
  } else {
    if (steps.length > 0) {
      const { finalX, finalY, remainingStaticBalls } = state;
      nextStaticBalls = remainingStaticBalls;
      nextStaticBalls.push({
        counter: initialBallCounter,
        radius: computeExpandedRadius({ x: finalX, y: finalY }, nextStaticBalls),
        x: finalX,
        y: finalY
      });
      const best = findBestMove(nextStaticBalls, { steps, criteria, initialBallCounter, stats });
      reward += best.move.reward;
    }
  }
  return {
    reward,
    state: state === void 0 ? void 0 : nextStaticBalls === void 0 ? state : { nextStaticBalls }
  };
}
var TIME_OF_FLIGHT = -DEFAULT_BALL_SPEED / DEFAULT_BALL_ACCELERATION;
var DISTANCE_TRAVELLED = 0.5 * DEFAULT_BALL_ACCELERATION * TIME_OF_FLIGHT ** 2 + DEFAULT_BALL_SPEED * TIME_OF_FLIGHT;
var MIN_SAFE_ANGLE = Math.asin(
  -(CANNON_Y_POSITION + CANNON_BASE_HEIGHT + DEFAULT_BALL_RADIUS) / (CANNON_LENGTH + DISTANCE_TRAVELLED)
);
function findBestMove(staticBalls, {
  steps = [180],
  criteria = "hits",
  initialBallCounter = INITIAL_BALL_COUNTER,
  stats,
  includeState
} = {}) {
  const params = { steps: steps.slice(1), criteria, initialBallCounter, stats, includeState };
  let bestAngle = 0;
  let bestMove = { reward: -Infinity };
  const numSteps = steps[0];
  const stepAngle = Math.PI / (numSteps - 1);
  const minSafeStep = Math.ceil(MIN_SAFE_ANGLE / stepAngle);
  const maxSafeStep = numSteps - 1 - minSafeStep;
  for (let i = minSafeStep; i <= maxSafeStep; ++i) {
    const angle = i * stepAngle;
    const move = evaluateMove(staticBalls, angle, params);
    if (move.reward > bestMove.reward) {
      bestAngle = angle;
      bestMove = move;
    }
  }
  return { angle: bestAngle, move: bestMove };
}

// src/core/evaluation/evaluate-moves-webworker.worker.ts
onmessage = (e) => {
  const { staticBalls, angles, params } = e.data;
  const title = `[${self.name}] evaluating ${angles.length} angles`;
  console.time(title);
  const results = angles.map((angle) => evaluateMove(staticBalls, angle, params).reward);
  console.timeEnd(title);
  postMessage(results);
};
//# sourceMappingURL=evaluate-moves-webworker.worker.js.map

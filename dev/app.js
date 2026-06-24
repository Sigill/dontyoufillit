var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/stats.js/build/stats.min.js
var require_stats_min = __commonJS({
  "node_modules/stats.js/build/stats.min.js"(exports, module) {
    (function(f, e) {
      "object" === typeof exports && "undefined" !== typeof module ? module.exports = e() : "function" === typeof define && define.amd ? define(e) : f.Stats = e();
    })(exports, function() {
      var f = function() {
        function e(a2) {
          c.appendChild(a2.dom);
          return a2;
        }
        function u(a2) {
          for (var d = 0; d < c.children.length; d++) c.children[d].style.display = d === a2 ? "block" : "none";
          l = a2;
        }
        var l = 0, c = document.createElement("div");
        c.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
        c.addEventListener("click", function(a2) {
          a2.preventDefault();
          u(++l % c.children.length);
        }, false);
        var k = (performance || Date).now(), g = k, a = 0, r = e(new f.Panel("FPS", "#0ff", "#002")), h2 = e(new f.Panel("MS", "#0f0", "#020"));
        if (self.performance && self.performance.memory) var t = e(new f.Panel("MB", "#f08", "#201"));
        u(0);
        return { REVISION: 16, dom: c, addPanel: e, showPanel: u, begin: function() {
          k = (performance || Date).now();
        }, end: function() {
          a++;
          var c2 = (performance || Date).now();
          h2.update(c2 - k, 200);
          if (c2 > g + 1e3 && (r.update(1e3 * a / (c2 - g), 100), g = c2, a = 0, t)) {
            var d = performance.memory;
            t.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576);
          }
          return c2;
        }, update: function() {
          k = this.end();
        }, domElement: c, setMode: u };
      };
      f.Panel = function(e, f2, l) {
        var c = Infinity, k = 0, g = Math.round, a = g(window.devicePixelRatio || 1), r = 80 * a, h2 = 48 * a, t = 3 * a, v = 2 * a, d = 3 * a, m = 15 * a, n = 74 * a, p = 30 * a, q = document.createElement("canvas");
        q.width = r;
        q.height = h2;
        q.style.cssText = "width:80px;height:48px";
        var b = q.getContext("2d");
        b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif";
        b.textBaseline = "top";
        b.fillStyle = l;
        b.fillRect(0, 0, r, h2);
        b.fillStyle = f2;
        b.fillText(e, t, v);
        b.fillRect(d, m, n, p);
        b.fillStyle = l;
        b.globalAlpha = 0.9;
        b.fillRect(d, m, n, p);
        return { dom: q, update: function(h3, w) {
          c = Math.min(c, h3);
          k = Math.max(k, h3);
          b.fillStyle = l;
          b.globalAlpha = 1;
          b.fillRect(0, 0, r, m);
          b.fillStyle = f2;
          b.fillText(g(h3) + " " + e + " (" + g(c) + "-" + g(k) + ")", t, v);
          b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p);
          b.fillRect(d + n - a, m, a, p);
          b.fillStyle = l;
          b.globalAlpha = 0.9;
          b.fillRect(d + n - a, m, a, g((1 - h3 / w) * p));
        } };
      };
      return f;
    });
  }
});

// src/app/app.ts
var import_stats = __toESM(require_stats_min(), 1);

// src/sfx/sound-manager.ts
var bounceBuffer = {
  sampleRate: 22050,
  buffer: [
    // NaN,
    0.014692446852187681,
    0.038439287717492006,
    0.06205026887427673,
    0.07526719797363123,
    0.07231295760687802,
    0.052476169128783376,
    0.019345835618757728,
    -0.02055997705746955,
    -0.05942406607896442,
    -0.08976828326500878,
    -0.10587215896640098,
    -0.10477544510336759,
    -0.08693178683270521,
    -0.05593663900468795,
    -0.016954444906136075,
    0.023342887870328077,
    0.05805862256754502,
    0.08140686427850975,
    0.08973509277856936,
    0.08211246341975126,
    0.060412268268005526,
    0.02889642754610896,
    -0.006606971306150116,
    -0.03977466554924687,
    -0.06486239122119075,
    -0.07784010337620807,
    -0.0771070631557123,
    -0.06328580777351156,
    -0.039180332494862406,
    -0.009283151698609209,
    0.021057691036436756,
    0.04660681043013551,
    0.06315524961997136,
    0.06821781625211652,
    0.06139956695230661,
    0.04439512613164235,
    0.02074102398269888,
    -0.005272569654304801,
    -0.029207573367405298,
    -0.04707716509924238,
    -0.05610007440753175,
    -0.05515343933117375,
    -0.044893418625055456,
    -0.027553351062877766,
    -0.006474986751427611,
    0.014530773772441892,
    0.031872605388735264,
    0.042790044343387054,
    0.04581466978003026,
    0.04094875026500458,
    0.029526494526363297,
    0.01391711054115422,
    -0.002943129096392145,
    -0.01809736001598071,
    -0.02908673919765122,
    -0.03434863165914892,
    -0.03342971753704415,
    -0.026986868015672013,
    -0.016604035566552704,
    -0.004565004913143945,
    0.007013680705331051,
    0.01631778338544092,
    0.021976638628247665,
    0.023373707808403737,
    0.020720678700256016,
    0.014945175054002186,
    0.00744655443412395,
    -21771535509156528e-20,
    -0.006647854221285098,
    -0.01085772156206702,
    -0.01242509550568109,
    -0.011529718102004012,
    -0.008824965817110569,
    -0.005226735570136805,
    -0.001703753618066739,
    9428305067125919e-19,
    0.0022517822912689737,
    0.002184572520380266,
    0.0011026272870976112
  ]
};
var explosionBuffer = {
  sampleRate: 22050,
  buffer: [
    // null,
    -0.029445034930606614,
    -0.09662449651813247,
    -0.10955150098308368,
    -0.10791412980474846,
    -0.10248792492954249,
    0.2949790370472597,
    0.05329811197249523,
    -0.04644852130518197,
    -0.0668013515437092,
    -0.06690578149456253,
    -0.06187627070511079,
    0.12049132400388267,
    0.05949486858760725,
    -0.01648492133705934,
    -0.029499014439728244,
    -0.027365268886672973,
    -0.02115333208077446,
    0.008569621145538274,
    0.02111850109188693,
    3279148486603302e-19
  ]
};
var SoundManager = class {
  #audioContext;
  #bounceBuffer;
  #explodeBuffer;
  #nextPlayTime = 0;
  #initialized = false;
  // Staggering delay in seconds
  staggerDelay = 0.04;
  init() {
    if (this.#initialized) return;
    this.#initialized = true;
    this.#audioContext = new window.AudioContext();
    this.#bounceBuffer = this.#createBuffer(bounceBuffer.buffer, bounceBuffer.sampleRate);
    this.#explodeBuffer = this.#createBuffer(explosionBuffer.buffer, explosionBuffer.sampleRate);
  }
  #createBuffer(wave, sampleRate) {
    const buff = this.#audioContext.createBuffer(1, wave.length, sampleRate);
    const nowBuffering = buff.getChannelData(0);
    for (let i = 0; i < wave.length; i++) {
      nowBuffering[i] = wave[i];
    }
    return buff;
  }
  playCollisions(collisions) {
    if (!this.#audioContext || collisions.length === 0) return;
    if (this.#nextPlayTime < this.#audioContext.currentTime) {
      this.#nextPlayTime = this.#audioContext.currentTime;
    }
    for (const collision of collisions) {
      let buffer;
      if (collision.obstacle.type === "ball" && collision.obstacle.ball.counter === 0) {
        buffer = this.#explodeBuffer;
      } else {
        buffer = this.#bounceBuffer;
      }
      if (buffer) {
        this.#playSound(buffer, this.#nextPlayTime);
        this.#nextPlayTime += this.staggerDelay;
      }
    }
  }
  #playSound(buffer, time) {
    if (!this.#audioContext) return;
    const source = this.#audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(this.#audioContext.destination);
    source.start(time);
  }
};

// src/core/constants.ts
var DEFAULT_BALL_SPEED = 1;
var DEFAULT_BALL_ACCELERATION = -0.4;
var DEFAULT_BALL_RADIUS = 1 / 40;
var CANNON_Y_POSITION = -1 / 6;
var CANNON_BASE_HEIGHT = 1 / 15;
var CANNON_LENGTH = 1 / 15;
var CANON_ANGULAR_SPEED = Math.PI / 3;
var INITIAL_BALL_COUNTER = 3;
var LASER_BONUS_COST = 5;
var ORACLE_BONUS_COST = 5;
var COMBO_HIT_THRESHOLD = 5;

// src/sfx/vfx-manager.ts
function randomRange([min, max]) {
  return min + Math.random() * (max - min);
}
var explosion_invariants = {
  color: "white",
  countRange: [5, 8],
  durationRange: [300, 500],
  distanceRange: [5, 15]
};
var collision_invariants = {
  color: "black",
  countRange: [3, 5],
  radius: DEFAULT_BALL_RADIUS / 2,
  durationRange: [200, 300],
  distanceRange: [2, 8]
};
function computeContactPoint(ball, staticBall) {
  const dx = ball.x - staticBall.x;
  const dy = ball.y - staticBall.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const cx = staticBall.x + dx / dist * staticBall.radius;
  const cy = staticBall.y + dy / dist * staticBall.radius;
  return { cx, cy };
}
var VfxManager = class {
  #container;
  constructor(container) {
    this.#container = container;
  }
  playCollisions(collisions) {
    for (const p of collisions) {
      if (p.obstacle.type === "ball") {
        if (p.obstacle.ball.counter === 0) {
          this.#spawnParticles({
            x: p.obstacle.ball.x,
            y: p.obstacle.ball.y,
            radius: p.obstacle.ball.radius,
            ...explosion_invariants
          });
        } else {
          const { cx, cy } = computeContactPoint(p.ball, p.obstacle.ball);
          this.#spawnParticles({
            x: cx,
            y: cy,
            ...collision_invariants
          });
        }
        if (p.obstacle.comboHit) {
          const { cx, cy } = computeContactPoint(p.ball, p.obstacle.ball);
          this.#spawnPlusOne(cx, cy);
        }
        if (p.obstacle.points > 0) {
          this.#spawnPlusOne(p.obstacle.ball.x, p.obstacle.ball.y);
        }
      }
    }
  }
  #spawnParticles({ x, y, color, countRange, radius, durationRange, distanceRange }) {
    const numParticles = randomRange(countRange);
    const startX = (x - radius) * 100;
    const startY = (y - radius) * 100;
    const sizePct = radius * 200;
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.className = "vfx-particle";
      particle.style.backgroundColor = color;
      const angle = Math.random() * Math.PI * 2;
      const distance = randomRange(distanceRange);
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      particle.style.left = startX + "%";
      particle.style.bottom = startY + "%";
      particle.style.width = sizePct + "%";
      particle.style.height = sizePct + "%";
      this.#container.appendChild(particle);
      const duration = randomRange(durationRange);
      const animation = particle.animate(
        [
          { transform: "translate(0, 0) scale(1)", opacity: 1 },
          { transform: `translate(${dx}vmin, ${-dy}vmin) scale(0)`, opacity: 0 }
        ],
        {
          duration,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          fill: "forwards"
        }
      );
      animation.onfinish = () => {
        particle.remove();
      };
    }
  }
  #spawnPlusOne(x, y) {
    const startX = x * 100;
    const startY = y * 100;
    const particle = document.createElement("div");
    particle.innerText = "+1";
    particle.className = "vfx-particle";
    particle.style.backgroundColor = "transparent";
    particle.style.left = startX + "%";
    particle.style.bottom = startY + "%";
    particle.style.color = "white";
    particle.style.fontWeight = "bold";
    particle.style.fontSize = "80%";
    particle.style.textShadow = "0 0 0.2em black";
    this.#container.appendChild(particle);
    const animation = particle.animate(
      [
        // -1ex to center the text horizontally
        { transform: "translate(-1ex, 0)", opacity: 1 },
        { transform: "translate(-1ex, -10vmin)", opacity: 0 }
      ],
      {
        duration: 1e3,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        fill: "forwards"
      }
    );
    animation.onfinish = () => {
      particle.remove();
    };
  }
};

// src/core/physics/ball-engine/collision-handler.ts
var DefaultCollisionHandler = {
  onBallCollision() {
    return {
      counterDecrement: 1,
      stopCurrentBall: false,
      growOnStop: true,
      scoreOnDestroy: true
    };
  }
};
var LaserCollisionHandler = {
  cost: LASER_BONUS_COST,
  onBallCollision() {
    return {
      counterDecrement: Infinity,
      // Instant destroy
      stopCurrentBall: true,
      growOnStop: false,
      scoreOnDestroy: false
    };
  }
};

// src/core/utils.ts
function vectorLength(x, y) {
  return Math.sqrt(x * x + y * y);
}
function normalizeRadian(angle) {
  return (angle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
}
function addTouchOrClickEvent(element, callback) {
  const e = typeof element === "string" ? document.getElementById(element) : element;
  e.addEventListener("click", callback);
  e.addEventListener("touchstart", callback, { passive: false });
}
function selectElement(selector, parent = document) {
  const element = parent.querySelector(selector);
  if (element === null) {
    throw new Error(`Could not find an element matching the '${selector}' selector.`);
  }
  return element;
}
function getOrInsert(map, key, factory) {
  const existingValue = map.get(key);
  const finalValue = existingValue ?? factory();
  if (existingValue === void 0) {
    map.set(key, finalValue);
  }
  return { value: finalValue, inserted: existingValue === void 0 };
}
function lazyAssign(element, value, key) {
  if (element[key] !== value) {
    element[key] = value;
  }
}
function lazySetInnerText(element, value) {
  if (element.innerText !== value) {
    element.innerText = value;
  }
}
function asBool(v) {
  return v === true || v === "true";
}
function directionalArrow(vx, vy) {
  if (vx > 0) {
    if (vy > 0) {
      return "\u2197";
    } else if (vy < 0) {
      return "\u2198";
    } else {
      return "\u2192";
    }
  } else if (vx < 0) {
    if (vy > 0) {
      return "\u2196";
    } else if (vy < 0) {
      return "\u2199";
    } else {
      return "\u2190";
    }
  } else {
    if (vy > 0) {
      return "\u2191";
    } else if (vy < 0) {
      return "\u2193";
    } else {
      return "\u2205";
    }
  }
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
function toDeg(rad) {
  return rad * 180 / Math.PI;
}
function ppAngle(a) {
  return `${a.toFixed(2)}rad/${toDeg(a).toFixed(1)}\xB0`;
}
function precomputeAngle(angle) {
  return { value: angle, cos: Math.cos(angle), sin: Math.sin(angle) };
}
function updateAngle(angle, value) {
  angle.value = value;
  angle.cos = Math.cos(value);
  angle.sin = Math.sin(value);
}
function splitIntoChunks(array, size = 10) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
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

// src/core/physics/ball-engine/ball-engine.ts
function deriveScore(collisions) {
  let hits = 0;
  let points = 0;
  for (const c of collisions) {
    if (c.obstacle.type === "ball") {
      hits += 1;
      points += c.obstacle.points;
    }
  }
  return { hits, points };
}
var BallEngine = class {
  verbose;
  staticBalls;
  /** The collision handler that determines how ball-to-ball collisions are processed. */
  collisionHandler = DefaultCollisionHandler;
  #snapshot = new Array();
  #withSnapshots;
  initialBallCounter;
  constructor({ verbose = false, withSnapshots = true, initialBallCounter = INITIAL_BALL_COUNTER } = {}) {
    this.verbose = verbose;
    this.#withSnapshots = withSnapshots;
    this.initialBallCounter = initialBallCounter;
    this.staticBalls = [];
  }
  takeSnapshot() {
    if (this.#withSnapshots) {
      this.#snapshot = this.staticBalls.map((b) => [b, structuredClone(b)]);
    }
  }
  restoreSnapshot() {
    if (this.#withSnapshots) {
      this.staticBalls = this.#snapshot.map(([ball, snapshot]) => {
        ball.counter = snapshot.counter;
        ball.radius = snapshot.radius;
        ball.x = snapshot.x;
        ball.y = snapshot.y;
        return ball;
      });
    }
  }
  fire(ball) {
    this.takeSnapshot();
    if (this.verbose) {
      console.groupCollapsed("snapshot");
      console.log(ball);
      console.log(this.staticBalls);
      console.groupEnd();
    }
    this.internalFire(ball);
  }
  reset() {
    this.staticBalls = [];
    this.internalReset();
  }
  /**
   * Resets the engine by clearing the current ball.
   */
  internalReset() {
    this.currentBall = null;
    this.collisionHandler = DefaultCollisionHandler;
  }
  /**
   * Processes a ball-ball collision using the current collision handler.
   * Mutates the static ball's counter and removes it from staticBalls if destroyed.
   *
   * @returns The collision result and the points scored (0 or 1).
   */
  processBallCollision(staticBall) {
    const result = this.collisionHandler.onBallCollision(staticBall);
    staticBall.counter -= result.counterDecrement;
    if (staticBall.counter < 0) staticBall.counter = 0;
    let points = 0;
    if (staticBall.counter === 0) {
      this.staticBalls.splice(this.staticBalls.indexOf(staticBall), 1);
      if (result.scoreOnDestroy) {
        points = 1;
      }
    }
    return { result, points };
  }
  expandCurrentBall(currentBall) {
    const expandedRadius = computeExpandedRadius(currentBall, this.staticBalls);
    this.staticBalls.push({
      counter: this.initialBallCounter,
      radius: expandedRadius,
      x: currentBall.x,
      y: currentBall.y
    });
  }
};

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

// src/core/physics/ball-engine/ball-engine-temporal-discretization.ts
var BallEngineTemporalDiscretization = class extends BallEngine {
  currentBall = null;
  /**
   * Updates the game state by progressing the physics simulation using fixed time steps.
   *
   * It calculates the number of steps to perform based on the time elapsed since the
   * last frame, with a resolution of 1ms per step.
   *
   * @param frameTime The current frame time in seconds.
   * @param lastFrameTime The last frame time in seconds.
   * @returns An object containing the score increment and game over status.
   */
  update(frameTime, lastFrameTime) {
    const updateState = {
      gameover: false,
      collisions: []
    };
    if (this.currentBall) {
      let loopLastUpdateTime = lastFrameTime;
      const steps = Math.floor((frameTime - lastFrameTime) * 1e3);
      for (let i = 1; i <= steps; ++i) {
        const loopCurrentUpdateTime = (lastFrameTime * (steps - i) + frameTime * i) / steps;
        this.currentBall.update(loopCurrentUpdateTime, loopLastUpdateTime);
        const movingBall = {
          t: loopCurrentUpdateTime,
          x: this.currentBall.x,
          y: this.currentBall.y,
          angle: { ...this.currentBall.angle },
          speed: this.currentBall.speed
        };
        if (this.currentBall.x > 1 - this.currentBall.radius) {
          const limit = 1 - this.currentBall.radius;
          const penetration = this.currentBall.x - limit;
          this.currentBall.x = limit - penetration;
          updateAngle(this.currentBall.angle, normalizeRadian(Math.PI - this.currentBall.angle.value));
          updateState.collisions.push({ ball: movingBall, obstacle: { type: "wall", wall: GameWalls.right } });
        } else if (this.currentBall.x < this.currentBall.radius) {
          const limit = this.currentBall.radius;
          const penetration = limit - this.currentBall.x;
          this.currentBall.x = limit + penetration;
          updateAngle(this.currentBall.angle, normalizeRadian(Math.PI - this.currentBall.angle.value));
          updateState.collisions.push({ ball: movingBall, obstacle: { type: "wall", wall: GameWalls.left } });
        }
        if (this.currentBall.y > 1 - this.currentBall.radius) {
          const limit = 1 - this.currentBall.radius;
          const penetration = this.currentBall.y - limit;
          this.currentBall.y = limit - penetration;
          updateAngle(this.currentBall.angle, normalizeRadian(-this.currentBall.angle.value));
          updateState.collisions.push({ ball: movingBall, obstacle: { type: "wall", wall: GameWalls.top } });
        }
        for (let j = this.staticBalls.length - 1; j >= 0; --j) {
          const staticBall = this.staticBalls[j];
          const dx = this.currentBall.x - staticBall.x;
          const dy = this.currentBall.y - staticBall.y;
          const distSq = dx * dx + dy * dy;
          const minDist = this.currentBall.radius + staticBall.radius;
          if (distSq < minDist * minDist) {
            const { result: collisionResult, points } = this.processBallCollision(staticBall);
            const dist = Math.sqrt(distSq);
            if (dist > 0 && !collisionResult.stopCurrentBall) {
              const newDist = 2 * minDist - dist;
              const nx = dx / dist;
              const ny = dy / dist;
              this.currentBall.x = staticBall.x + nx * newDist;
              this.currentBall.y = staticBall.y + ny * newDist;
              const alpha = Math.atan2(ny, nx);
              const tangentAngle = alpha + Math.PI / 2;
              updateAngle(this.currentBall.angle, normalizeRadian(2 * tangentAngle - this.currentBall.angle.value));
            }
            updateState.collisions.push({ ball: movingBall, obstacle: { type: "ball", ball: { ...staticBall }, points } });
            if (collisionResult.stopCurrentBall) {
              this.currentBall.stop();
              this.internalReset();
              return updateState;
            }
          }
        }
        if (this.currentBall.y < this.currentBall.radius && normalizeRadian(this.currentBall.angle.value) > Math.PI) {
          this.currentBall.stop();
          updateState.gameover = true;
          this.internalReset();
          break;
        }
        if (this.currentBall.speed < 1e-3) {
          if (this.currentBall.y >= 0) {
            this.currentBall.stop();
            this.expandCurrentBall(this.currentBall);
          }
          this.internalReset();
          break;
        }
        loopLastUpdateTime = loopCurrentUpdateTime;
      }
    }
    return updateState;
  }
};

// src/core/physics/ball-engine/bouncing-ball.ts
var BouncingBall = class {
  /** The radius of the ball. */
  radius;
  /** The x-coordinate of the ball's center. */
  x;
  /** The y-coordinate of the ball's center. */
  y;
  /** The current direction of movement in radians. */
  angle;
  constructor({ radius, x, y, angle }) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.angle = angle;
  }
};

// src/core/physics/rk4-integrator.ts
var RK41DObject = class {
  u;
  v;
  constructor(u, v) {
    this.u = u;
    this.v = v;
  }
  evaluate(initialState, t, dt, derivative) {
    const state = {
      u: initialState.u + derivative.du * dt,
      v: initialState.v + derivative.dv * dt
    };
    return {
      du: state.v,
      dv: this.acceleration(state, t + dt)
    };
  }
  integrate(t, dt) {
    const a = this.evaluate(this, t, 0, { du: 0, dv: 0 });
    const b = this.evaluate(this, t, dt * 0.5, a);
    const c = this.evaluate(this, t, dt * 0.5, b);
    const d = this.evaluate(this, t, dt, c);
    const dudt = 1 / 6 * (a.du + 2 * (b.du + c.du) + d.du);
    const dvdt = 1 / 6 * (a.dv + 2 * (b.dv + c.dv) + d.dv);
    this.u = this.u + dudt * dt;
    this.v = this.v + dvdt * dt;
  }
};

// src/core/physics/ball-engine/ball-engine-rk4.ts
var BouncingBallRK4 = class extends BouncingBall {
  /**
   * Internal integrator using RK4 to solve the equations of motion.
   */
  #integrator = new class extends RK41DObject {
    constructor() {
      super(0, DEFAULT_BALL_SPEED);
    }
    acceleration() {
      return DEFAULT_BALL_ACCELERATION;
    }
  }();
  /**
   * Returns the current speed from the RK4 integrator.
   */
  get speed() {
    return this.#integrator.v;
  }
  /**
   * Stops the ball by setting integrator speed to zero.
   */
  stop() {
    this.#integrator.v = 0;
  }
  /**
   * Updates the ball's position using the RK4 integrator.
   *
   * @param frameTime Current time in seconds.
   * @param lastFrameTime Last update time in seconds.
   */
  update(frameTime, lastFrameTime) {
    const previousStateU = this.#integrator.u;
    this.#integrator.integrate(lastFrameTime, frameTime - lastFrameTime);
    const deltaU = this.#integrator.u - previousStateU;
    this.x += deltaU * this.angle.cos;
    this.y += deltaU * this.angle.sin;
  }
};
var BallEngineRK4 = class extends BallEngineTemporalDiscretization {
  /**
   * Replaces the current ball with a new BouncingBallRK4 instance.
   */
  internalFire(ball) {
    this.currentBall = new BouncingBallRK4(ball);
  }
};

// src/core/physics/ball-engine/ball-engine-motion-equation.ts
var BouncingBallMotionEquationDelta = class extends BouncingBall {
  #speed;
  #acceleration;
  constructor(ball) {
    super(ball);
    this.#speed = ball.speed;
    this.#acceleration = ball.acceleration;
  }
  /**
   * Returns the current scalar speed.
   */
  get speed() {
    return this.#speed;
  }
  /**
   * Stops the ball by setting its speed to zero.
   */
  stop() {
    this.#speed = 0;
  }
  /**
   * Updates the ball's position using delta-based equations of motion.
   *
   * @param frameTime Current time in seconds.
   * @param lastFrameTime Last update time in seconds.
   */
  update(frameTime, lastFrameTime) {
    const deltaT = frameTime - lastFrameTime;
    const deltaU = this.#speed * deltaT + 1 / 2 * this.#acceleration * deltaT ** 2;
    this.#speed += this.#acceleration * deltaT;
    this.x += deltaU * this.angle.cos;
    this.y += deltaU * this.angle.sin;
  }
};
var BallEngineMotionEquationDelta = class extends BallEngineTemporalDiscretization {
  /**
   * Replaces the current ball with a new BouncingBallMotionEquationDelta instance.
   */
  internalFire(ball) {
    this.currentBall = new BouncingBallMotionEquationDelta(ball);
  }
};
var BouncingBallMotionEquationAbsolute = class extends BouncingBall {
  #u = 0;
  #v = DEFAULT_BALL_SPEED;
  /** Time when the ball was fired. */
  #firedAt;
  /**
   * Returns the current scalar speed.
   */
  get speed() {
    return this.#v;
  }
  /**
   * Stops the ball by setting its speed to zero.
   */
  stop() {
    this.#v = 0;
  }
  /**
   * Updates the ball's position using absolute equations of motion.
   *
   * @param frameTime Current time in seconds.
   */
  update(frameTime) {
    this.#firedAt ??= frameTime;
    const prevU = this.#u;
    const ballTime = frameTime - this.#firedAt;
    this.#u = DEFAULT_BALL_SPEED * ballTime + 1 / 2 * DEFAULT_BALL_ACCELERATION * ballTime ** 2;
    this.#v = DEFAULT_BALL_SPEED + DEFAULT_BALL_ACCELERATION * ballTime;
    const deltaU = this.#u - prevU;
    this.x += deltaU * this.angle.cos;
    this.y += deltaU * this.angle.sin;
  }
};
var BallEngineMotionEquationAbsolute = class extends BallEngineTemporalDiscretization {
  /**
   * Replaces the current ball with a new BouncingBallMotionEquationAbsolute instance.
   */
  internalFire(ball) {
    this.currentBall = new BouncingBallMotionEquationAbsolute(ball);
  }
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

// src/core/physics/ball-engine/ball-engine-math.ts
function ppWallObstacle({ x0, y0, x1, y1, sigma }) {
  return `wall x0:${x0.toFixed(3)} y0:${y0.toFixed(3)} x1:${x1.toFixed(3)} y1:${y1.toFixed(3)} sigma:${sigma}`;
}
function ppBallObstacle({ x, y, counter }) {
  return `ball x:${x.toFixed(3)} y:${y.toFixed(3)} counter:${counter}`;
}
function ppObstacle(o) {
  return o.type === "wall" ? ppWallObstacle(o.value) : ppBallObstacle(o.value);
}
var MathBall = class {
  constructor({ radius, x, y, acceleration }, fixedPoints) {
    this.fixedPoints = fixedPoints;
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.acceleration = acceleration;
  }
  radius;
  x;
  y;
  acceleration;
  firedAt = void 0;
};
var BallEngineMath = class extends BallEngine {
  staticBalls = [];
  currentBall = null;
  #epsilon;
  constructor({
    withSnapshots,
    verbose,
    epsilon = 1e-5,
    initialBallCounter
  } = {}) {
    super({ withSnapshots, verbose, initialBallCounter });
    this.#epsilon = epsilon;
  }
  /**
   * Fires the ball and pre-computes all its future collisions and path.
   *
   * @param ball The initial state of the ball being fired
   */
  internalFire(ball) {
    const { fixedPoints } = computeFixedPoints(ball, this.staticBalls, { epsilon: this.#epsilon, includeFixedPoints: true });
    if (this.verbose) {
      console.group("Fixed points");
      for (const { t, x, y, angle, speed, obstacles } of fixedPoints) {
        for (const obstacle of obstacles) {
          console.debug(`Collision with ${ppObstacle(obstacle)}`);
        }
        console.debug(`\u0394t:${t.toFixed(3)} ${directionalArrow(angle.cos * speed, angle.sin * speed)} x:${x.toFixed(3)} y:${y.toFixed(3)} v:${speed.toFixed(3)} angle:${ppAngle(angle.value)}`);
      }
      console.groupEnd();
    }
    this.currentBall = new MathBall(ball, fixedPoints);
  }
  /**
   * Updates the game state based on the current time.
   * Unlike the temporal discretization engine, this one checks against the pre-calculated fixed points
   * to determine the ball's position and any events (scoring, game over).
   *
   * @param frameTime The current time of the frame
   * @returns The score gained in this frame and whether the game is over
   */
  update(frameTime, lastFrameTime) {
    const updateState = {
      gameover: false,
      collisions: []
    };
    const currentBall = this.currentBall;
    if (currentBall !== null) {
      const firedAt = currentBall.firedAt ??= lastFrameTime;
      const pastFixedPoints = currentBall.fixedPoints.filter((fp2) => firedAt + fp2.t <= frameTime);
      let shouldGrow = true;
      let stoppedByCollision = false;
      for (const fp2 of pastFixedPoints) {
        if (stoppedByCollision) break;
        if (fp2.obstacles.length > 0) {
          const movingBall = { t: fp2.t, x: fp2.x, y: fp2.y, angle: { ...fp2.angle }, speed: fp2.speed };
          for (const obstacle of fp2.obstacles) {
            if (obstacle.type === "ball") {
              const staticBall = obstacle.value;
              const { result: collisionResult, points } = this.processBallCollision(staticBall);
              updateState.collisions.push({ ball: movingBall, obstacle: { type: "ball", ball: { ...staticBall }, points } });
              if (collisionResult.stopCurrentBall) {
                shouldGrow = collisionResult.growOnStop;
                stoppedByCollision = true;
                break;
              }
            } else {
              updateState.collisions.push({ ball: movingBall, obstacle: { type: "wall", wall: obstacle.value } });
            }
          }
        }
      }
      if (stoppedByCollision) {
        this.internalReset();
        return updateState;
      }
      const fp = pastFixedPoints.at(-1);
      if (this.verbose) {
        console.log(`Last fixed point t:${fp.t.toFixed(3)} x:${fp.x.toFixed(3)} y:${fp.y.toFixed(3)} ${directionalArrow(fp.angle.cos, fp.angle.sin)}`);
      }
      let hasHitBottomWall = fp.obstacles.some(({ type, value }) => {
        return type === "wall" && value === GameWalls.bottom;
      });
      currentBall.fixedPoints.splice(0, pastFixedPoints.length - 1);
      pastFixedPoints.at(-1).obstacles.length = 0;
      currentBall.x = fp.x;
      currentBall.y = fp.y;
      if (fp !== currentBall.fixedPoints.at(-1)) {
        const timeSinceFixedPoint = frameTime - (fp.t + firedAt);
        currentBall.x += fp.angle.cos * fp.speed * timeSinceFixedPoint + 1 / 2 * fp.angle.cos * currentBall.acceleration * timeSinceFixedPoint ** 2;
        currentBall.y += fp.angle.sin * fp.speed * timeSinceFixedPoint + 1 / 2 * fp.angle.sin * currentBall.acceleration * timeSinceFixedPoint ** 2;
      } else {
        if (!hasHitBottomWall && currentBall.y >= 0 && shouldGrow) {
          this.expandCurrentBall(currentBall);
        }
        hasHitBottomWall = hasHitBottomWall || currentBall.y < currentBall.radius && fp.angle.sin < 0;
        this.internalReset();
      }
      updateState.gameover = hasHitBottomWall;
    }
    return updateState;
  }
};

// src/core/cannon.ts
var Cannon = class {
};
var MovingCannon = class extends Cannon {
  #angle = 0;
  #angularSpeed = CANON_ANGULAR_SPEED;
  /**
   * Resets the cannon's angle to 0.
   */
  reset() {
    this.#angle = 0;
    this.#angularSpeed = CANON_ANGULAR_SPEED;
  }
  getAngle() {
    return this.#angle + Math.PI / 2;
  }
  /**
   * Updates the cannon's state (position and direction) based on time delta.
   * Handles the oscillation logic using sub-stepping to prevent overshooting.
   * @param frameTime The current frame time in seconds.
   * @param lastFrameTime The last frame time in seconds.
   */
  update(frameTime, lastFrameTime) {
    let dt = frameTime - lastFrameTime;
    const limit = Math.PI / 2;
    while (dt > 0) {
      let distToBoundary = 0;
      if (this.#angularSpeed > 0) {
        distToBoundary = limit - this.#angle;
      } else {
        distToBoundary = this.#angle - -limit;
      }
      const timeToBoundary = this.#angularSpeed !== 0 ? Math.abs(distToBoundary / this.#angularSpeed) : Infinity;
      if (dt < timeToBoundary) {
        this.#angle += this.#angularSpeed * dt;
        dt = 0;
      } else {
        this.#angle += this.#angularSpeed * timeToBoundary;
        this.#angularSpeed = -this.#angularSpeed;
        dt -= timeToBoundary;
        if (dt < 1e-9) dt = 0;
      }
    }
    if (this.#angle > limit) this.#angle = limit;
    if (this.#angle < -limit) this.#angle = -limit;
  }
};

// src/core/observable.ts
var Observable = class {
  #listeners = {};
  addEventListener(eventName, listener) {
    (this.#listeners[eventName] ??= []).push(listener);
  }
  removeEventListener(eventName, listener) {
    if (this.#listeners[eventName] !== void 0) {
      const index = this.#listeners[eventName].indexOf(listener);
      if (index !== -1) {
        this.#listeners[eventName].splice(index, 1);
      }
    }
  }
  dispatchEvent(eventName, ...data) {
    if (this.#listeners[eventName] !== void 0) {
      for (const listener of this.#listeners[eventName]) {
        listener(...data);
      }
    }
  }
};

// src/core/game-handler.ts
var GameHandler = class _GameHandler {
  static PAUSED = 1;
  static RUNNING = 2;
  static GAMEOVER = 3;
  observable = new Observable();
  #state = _GameHandler.PAUSED;
  #timeCorrection = 0;
  #lastFrameTime;
  #animationFrameId;
  highscore = 0;
  score = 0;
  lives = 0;
  oracleActive = false;
  enableComboHitPoints = true;
  #cannon;
  #ballEngine;
  #snapshot = { score: 0 };
  /** Tracks total ball-collision hits in the current turn for combo bonus calculation. */
  #hitCounter = 0;
  constructor({ cannon: cannon2, ballEngine: ballEngine2 }) {
    this.#cannon = cannon2;
    this.#ballEngine = ballEngine2;
  }
  get state() {
    return this.#state;
  }
  get currentBall() {
    return this.#ballEngine.currentBall;
  }
  get staticBalls() {
    return this.#ballEngine.staticBalls;
  }
  #update(frameTime, lastFrameTime) {
    this.#cannon.update(frameTime, lastFrameTime);
    const updateState = this.#ballEngine.update(frameTime, lastFrameTime);
    const { hits, points } = deriveScore(updateState.collisions);
    this.score += points;
    let comboPointsAwardedNow = 0;
    if (this.enableComboHitPoints) {
      const oldHits = this.#hitCounter;
      this.#hitCounter += hits;
      const oldComboPoints = Math.max(0, oldHits - COMBO_HIT_THRESHOLD);
      const newComboPoints = Math.max(0, this.#hitCounter - COMBO_HIT_THRESHOLD);
      comboPointsAwardedNow = newComboPoints - oldComboPoints;
      this.score += comboPointsAwardedNow;
    }
    this.highscore = Math.max(this.score, this.highscore);
    if (updateState.gameover) {
      this.#state = _GameHandler.GAMEOVER;
      this.lives -= 1;
      this.observable.dispatchEvent("gameover", this.score);
    }
    return updateState.collisions.reverse().map((c) => {
      if (c.obstacle.type === "wall") {
        return c;
      } else {
        return {
          ...c,
          obstacle: {
            ...c.obstacle,
            comboHit: this.enableComboHitPoints && comboPointsAwardedNow-- > 0
          }
        };
      }
    }).reverse();
  }
  #step(frameTime, lastFrameTime) {
    this.#lastFrameTime = frameTime;
    if (this.#state === _GameHandler.RUNNING) {
      this.observable.dispatchEvent("beginStep");
      const collisions = this.#update((frameTime - this.#timeCorrection) / 1e3, (lastFrameTime - this.#timeCorrection) / 1e3);
      this.observable.dispatchEvent("endStep", collisions);
      if (this.#state === _GameHandler.RUNNING) {
        this.#animationFrameId = window.requestAnimationFrame((nextFrameTime) => this.#step(nextFrameTime, frameTime));
      }
    }
  }
  #startOrResume(frameTime) {
    this.observable.dispatchEvent("beginStep");
    if (this.#lastFrameTime !== void 0) {
      this.#timeCorrection += frameTime - this.#lastFrameTime;
      this.#lastFrameTime = void 0;
    }
    this.observable.dispatchEvent("endStep", []);
    this.#animationFrameId = window.requestAnimationFrame((nextFrameTime) => this.#step(nextFrameTime, frameTime));
  }
  pause() {
    this.#state = _GameHandler.PAUSED;
    if (this.#animationFrameId !== void 0) {
      window.cancelAnimationFrame(this.#animationFrameId);
      this.#animationFrameId = void 0;
    }
  }
  resume() {
    this.#state = _GameHandler.RUNNING;
    window.requestAnimationFrame((nextFrameTime) => this.#startOrResume(nextFrameTime));
  }
  reset() {
    this.#ballEngine.reset();
    this.#cannon.reset();
    this.score = 0;
    this.oracleActive = false;
    this.resume();
  }
  fire() {
    this.#takeSnapshot();
    this.#hitCounter = 0;
    this.score -= this.activeCollisionHandler.cost ?? 0;
    this.oracleActive = false;
    this.#ballEngine.fire(makeCannonBall({ angle: this.#cannon.getAngle() }));
  }
  #takeSnapshot() {
    this.#snapshot.score = this.score;
  }
  restoreSnapshot() {
    this.score = this.#snapshot.score;
    this.#ballEngine.restoreSnapshot();
  }
  canUseLife() {
    return this.lives > 0;
  }
  useLife() {
    if (!this.canUseLife()) {
      throw new Error("Out of lives.");
    }
    this.restoreSnapshot();
    this.oracleActive = false;
    this.resume();
  }
  /**
   * Returns true if the player can afford to enable the specified collision handler.
   */
  canEnableCollisionHandler(handler) {
    if (this.oracleActive) {
      return false;
    }
    return handler.cost === void 0 || this.score >= handler.cost;
  }
  /**
   * Toggles a collision handler for the next ball.
   * If another collision handler was active, it will be replaced.
   */
  toggleCollisionHandler(handler) {
    if (this.#ballEngine.collisionHandler === handler) {
      this.#ballEngine.collisionHandler = DefaultCollisionHandler;
    } else {
      this.#ballEngine.collisionHandler = handler;
    }
  }
  /**
   * Applies the Oracle bonus.
   */
  applyOracleBonus() {
    if (this.score >= ORACLE_BONUS_COST) {
      this.score -= ORACLE_BONUS_COST;
      this.oracleActive = true;
      this.#ballEngine.collisionHandler = DefaultCollisionHandler;
    }
  }
  /**
   * Returns the currently active collision handler.
   */
  get activeCollisionHandler() {
    return this.#ballEngine.collisionHandler;
  }
};

// src/ui/jsx.tsx
function h(tag, props, ...children) {
  if (typeof tag === "function") {
    return tag({ ...props || {}, children });
  }
  const element = document.createElement(tag);
  if (props) {
    for (const [key, value] of Object.entries(props)) {
      if (key === "className") {
        element.className = value;
      } else if (key.startsWith("data-")) {
        element.setAttribute(key, value);
      } else if (key === "style" && typeof value === "object") {
        Object.assign(element.style, value);
      } else {
        element[key] = value;
      }
    }
  }
  for (const child of children) {
    if (child === null || child === void 0 || child === false) {
      continue;
    }
    if (Array.isArray(child)) {
      for (const c of child) {
        element.append(typeof c === "object" ? c : String(c));
      }
    } else {
      element.append(typeof child === "object" ? child : String(child));
    }
  }
  return element;
}
function Fragment({ children }) {
  const fragment = document.createDocumentFragment();
  if (children) {
    for (const child of children) {
      if (child !== null && child !== void 0 && child !== false) {
        fragment.append(child);
      }
    }
  }
  return fragment;
}

// src/ui/hud.tsx
function makeHudDom() {
  return /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h("div", { className: "left-col" }, /* @__PURE__ */ h("div", { className: "label" }, "Highscore"), /* @__PURE__ */ h("div", { className: "value highscore" }), /* @__PURE__ */ h("div", { className: "label" }, "Score"), /* @__PURE__ */ h("div", { className: "value score" })), /* @__PURE__ */ h("div", { className: "right-col" }, /* @__PURE__ */ h("span", { className: "lives" }), /* @__PURE__ */ h("div", { className: "pause" }, /* @__PURE__ */ h("div", { className: "pause-bar" }), /* @__PURE__ */ h("div", { className: "pause-bar" }))));
}
var HUD = class _HUD extends HTMLElement {
  highscoreSpan;
  scoreSpan;
  livesSpan;
  onPause;
  static register() {
    customElements.define("dontyoufillit-hud", _HUD);
  }
  constructor() {
    super();
    this.appendChild(makeHudDom());
    addTouchOrClickEvent(
      this.querySelector(".pause"),
      (ev) => this.onPause?.(ev)
    );
    this.highscoreSpan = selectElement(".highscore", this);
    this.scoreSpan = selectElement(".score", this);
    this.livesSpan = selectElement(".lives", this);
  }
  render({ score, highscore, lives }) {
    lazySetInnerText(this.highscoreSpan, highscore.toString());
    lazySetInnerText(this.scoreSpan, score.toString());
    lazyAssign(this.livesSpan.dataset, lives.toString(), "counter");
  }
};

// src/ui/css-board.tsx
function makeBallDom() {
  return /* @__PURE__ */ h("div", { className: "ball" }, /* @__PURE__ */ h("div", { className: "disk" }), /* @__PURE__ */ h("div", { className: "num" }), /* @__PURE__ */ h("div", { className: "bar bar-1" }), /* @__PURE__ */ h("div", { className: "bar bar-2" }));
}
function makeCssBoardDom() {
  return /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h("div", { id: "StaticBallLayer" }), /* @__PURE__ */ h("div", { className: "Cannon" }, /* @__PURE__ */ h("div", { className: "In" }, /* @__PURE__ */ h("div", { id: "Turret", className: "Turret" }), /* @__PURE__ */ h("div", { className: "Base" }), /* @__PURE__ */ h("div", { className: "Dome" }))), /* @__PURE__ */ h("div", { id: "LiveBallLayer" }));
}
var CssBoard = class _CssBoard extends HTMLElement {
  ballsDom = /* @__PURE__ */ new Map();
  staticBallLayer;
  liveBallLayer;
  Turret;
  LiveBall;
  static register() {
    customElements.define("dontyoufillit-css-board", _CssBoard);
  }
  constructor() {
    super();
    this.appendChild(makeCssBoardDom());
    this.staticBallLayer = selectElement("#StaticBallLayer", this);
    this.liveBallLayer = selectElement("#LiveBallLayer", this);
    this.Turret = selectElement("#Turret", this);
    this.LiveBall = makeBallDom();
    this.LiveBall.setAttribute("id", "LiveBall");
    this.LiveBall.style.width = this.LiveBall.style.height = 200 * DEFAULT_BALL_RADIUS + "%";
    this.LiveBall.style.display = "none";
    this.liveBallLayer.appendChild(this.LiveBall);
  }
  render(game2, cannon2) {
    this.drawCannon(cannon2);
    this.drawStaticBalls(game2);
    this.drawCurrentBall(game2);
  }
  drawStaticBalls(game2) {
    const actualBalls = new Set(game2.staticBalls);
    for (const [ball, dom] of this.ballsDom.entries()) {
      if (ball.counter === 0 || !actualBalls.has(ball)) {
        this.ballsDom.delete(ball);
        dom.remove();
      }
    }
    for (let i = 0; i < game2.staticBalls.length; ++i) {
      const ball = game2.staticBalls[i];
      const { inserted: isNewBall, value: dom } = getOrInsert(this.ballsDom, ball, makeBallDom);
      dom.dataset.counter = ball.counter.toString();
      if (isNewBall) {
        dom.style.width = dom.style.height = 200 * ball.radius + "%";
        dom.style.display = "block";
        this.transformBall(ball, dom);
      }
      if (isNewBall) {
        this.staticBallLayer.appendChild(dom);
      }
    }
  }
  transformBall(b, dom) {
    dom.style.left = (b.x - b.radius) * 100 + "%";
    dom.style.bottom = (b.y - b.radius) * 100 + "%";
  }
  drawCurrentBall(game2) {
    if (game2.currentBall) {
      this.transformBall(game2.currentBall, this.LiveBall);
      this.LiveBall.style.display = "block";
    } else {
      this.LiveBall.style.display = "none";
    }
  }
  drawCannon(cannon2) {
    this.Turret.style.transform = `rotate(-${cannon2.getAngle()}rad)`;
  }
};

// src/core/reward.ts
function normalizeRewards(rewards) {
  const scores = new Float32Array(rewards.length);
  const normalizedRewards = [];
  const indices = [];
  for (let i = 0; i < rewards.length; i++) {
    const r = rewards[i];
    if (r < -1e5) {
      scores[i] = 0;
    } else {
      normalizedRewards.push(r);
      indices.push(i);
    }
  }
  if (normalizedRewards.length === 0) return scores;
  let hasNonNegative = false;
  let hasNegative = false;
  for (const r of normalizedRewards) {
    if (r < 0) hasNegative = true;
    else hasNonNegative = true;
  }
  const mapRange = (v, lb, ub) => {
    if (ub === lb) return 1;
    return 0.2 + (v - lb) / (ub - lb) * 0.8;
  };
  if (hasNonNegative && !hasNegative || hasNegative && !hasNonNegative) {
    const minR = Math.min(...normalizedRewards);
    const maxR = Math.max(...normalizedRewards);
    for (let k = 0; k < normalizedRewards.length; k++) {
      const idx = indices[k];
      const r = normalizedRewards[k];
      scores[idx] = mapRange(r, minR, maxR);
    }
    return scores;
  }
  let minPos = Infinity;
  let maxPos = -Infinity;
  for (const r of normalizedRewards) {
    if (r >= 0) {
      if (r < minPos) minPos = r;
      if (r > maxPos) maxPos = r;
    }
  }
  for (let k = 0; k < normalizedRewards.length; k++) {
    const idx = indices[k];
    const r = normalizedRewards[k];
    if (r < 0) {
      scores[idx] = 0;
    } else {
      scores[idx] = mapRange(r, minPos, maxPos);
    }
  }
  return scores;
}

// src/ui/reward-path.ts
function computeRewardPath(targets) {
  const centerX = 0.5;
  const centerY = 1 - (CANNON_Y_POSITION + CANNON_BASE_HEIGHT);
  const baseRadius = 0.05;
  const maxRadius = 0.2;
  const numActions = targets.length;
  let path = "";
  for (let i = 0; i < numActions; i++) {
    const angle = i / (numActions - 1) * Math.PI;
    const reward = targets[i] || 0;
    const r = baseRadius + reward * (maxRadius - baseRadius);
    const x = centerX + Math.cos(angle) * r;
    const y = centerY - Math.sin(angle) * r;
    if (i === 0) path += `M ${x} ${y}`;
    else path += ` L ${x} ${y}`;
  }
  path += " Z";
  return path;
}

// node_modules/yocto-queue/index.js
var Node = class {
  value;
  next;
  constructor(value) {
    this.value = value;
  }
};
var Queue = class {
  #head;
  #tail;
  #size;
  constructor() {
    this.clear();
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.#head) {
      this.#tail.next = node;
      this.#tail = node;
    } else {
      this.#head = node;
      this.#tail = node;
    }
    this.#size++;
  }
  dequeue() {
    const current = this.#head;
    if (!current) {
      return;
    }
    this.#head = this.#head.next;
    this.#size--;
    if (!this.#head) {
      this.#tail = void 0;
    }
    return current.value;
  }
  peek() {
    if (!this.#head) {
      return;
    }
    return this.#head.value;
  }
  clear() {
    this.#head = void 0;
    this.#tail = void 0;
    this.#size = 0;
  }
  get size() {
    return this.#size;
  }
  *[Symbol.iterator]() {
    let current = this.#head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
  *drain() {
    while (this.#head) {
      yield this.dequeue();
    }
  }
};

// node_modules/p-limit/index.js
function pLimit(concurrency) {
  let rejectOnClear = false;
  if (typeof concurrency === "object") {
    ({ concurrency, rejectOnClear = false } = concurrency);
  }
  validateConcurrency(concurrency);
  if (typeof rejectOnClear !== "boolean") {
    throw new TypeError("Expected `rejectOnClear` to be a boolean");
  }
  const queue = new Queue();
  let activeCount = 0;
  const resumeNext = () => {
    if (activeCount < concurrency && queue.size > 0) {
      activeCount++;
      queue.dequeue().run();
    }
  };
  const next = () => {
    activeCount--;
    resumeNext();
  };
  const run = async (function_, resolve, arguments_) => {
    const result = (async () => function_(...arguments_))();
    resolve(result);
    try {
      await result;
    } catch {
    }
    next();
  };
  const enqueue = (function_, resolve, reject, arguments_) => {
    const queueItem = { reject };
    new Promise((internalResolve) => {
      queueItem.run = internalResolve;
      queue.enqueue(queueItem);
    }).then(run.bind(void 0, function_, resolve, arguments_));
    if (activeCount < concurrency) {
      resumeNext();
    }
  };
  const generator = (function_, ...arguments_) => new Promise((resolve, reject) => {
    enqueue(function_, resolve, reject, arguments_);
  });
  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount
    },
    pendingCount: {
      get: () => queue.size
    },
    clearQueue: {
      value() {
        if (!rejectOnClear) {
          queue.clear();
          return;
        }
        const abortError = AbortSignal.abort().reason;
        while (queue.size > 0) {
          queue.dequeue().reject(abortError);
        }
      }
    },
    concurrency: {
      get: () => concurrency,
      set(newConcurrency) {
        validateConcurrency(newConcurrency);
        concurrency = newConcurrency;
        queueMicrotask(() => {
          while (activeCount < concurrency && queue.size > 0) {
            resumeNext();
          }
        });
      }
    },
    map: {
      async value(iterable, function_) {
        const promises = Array.from(iterable, (value, index) => this(function_, value, index));
        return Promise.all(promises);
      }
    }
  });
  return generator;
}
function validateConcurrency(concurrency) {
  if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
    throw new TypeError("Expected `concurrency` to be a number from 1 and up");
  }
}

// src/core/evaluation/evaluate-move.ts
var OUT_PENALITY = -1e6;
var TIME_OF_FLIGHT = -DEFAULT_BALL_SPEED / DEFAULT_BALL_ACCELERATION;
var DISTANCE_TRAVELLED = 0.5 * DEFAULT_BALL_ACCELERATION * TIME_OF_FLIGHT ** 2 + DEFAULT_BALL_SPEED * TIME_OF_FLIGHT;
var MIN_SAFE_ANGLE = Math.asin(
  -(CANNON_Y_POSITION + CANNON_BASE_HEIGHT + DEFAULT_BALL_RADIUS) / (CANNON_LENGTH + DISTANCE_TRAVELLED)
);

// src/core/evaluation/evaluate-moves-webworker.ts
var NUM_WORKERS = typeof navigator !== "undefined" && navigator.hardwareConcurrency || 4;
var workerPool = [];
function getWorkerPool() {
  if (workerPool.length === 0 && typeof Worker !== "undefined") {
    for (let i = 0; i < NUM_WORKERS; i++) {
      workerPool.push(new Worker("evaluate-moves-webworker.worker.js", { type: "module", name: `worker-${i}` }));
    }
  }
  return workerPool;
}
var poolScheduler = pLimit(NUM_WORKERS);
async function evaluateRangeInWorker(staticBalls, angles, params) {
  return poolScheduler(async () => {
    const pool = getWorkerPool();
    const worker = pool.pop();
    return new Promise((resolve) => {
      const handler = (e) => {
        worker.removeEventListener("message", handler);
        resolve(e.data);
      };
      worker.addEventListener("message", handler);
      worker.postMessage({ staticBalls, angles, params });
    }).finally(() => {
      pool.push(worker);
    });
  });
}
async function evaluateMovesParallel(staticBalls, {
  steps = [180],
  criteria = "hits",
  initialBallCounter = INITIAL_BALL_COUNTER
} = {}) {
  const rewards = [];
  const params = { steps: steps.slice(1), criteria, initialBallCounter };
  const numSteps = steps[0];
  const stepAngle = Math.PI / (numSteps - 1);
  const minSafeStep = Math.ceil(MIN_SAFE_ANGLE / stepAngle);
  const maxSafeStep = numSteps - 1 - minSafeStep;
  let i = 0;
  for (; i < minSafeStep; ++i) {
    rewards.push(OUT_PENALITY);
  }
  const safeRangeSize = maxSafeStep - minSafeStep + 1;
  const angles = new Array(safeRangeSize);
  for (let j = 0; j < safeRangeSize; j++) {
    angles[j] = (minSafeStep + j) * stepAngle;
  }
  const results = await Promise.all(splitIntoChunks(angles, 10).map((chunk) => {
    return evaluateRangeInWorker(staticBalls, chunk, params);
  })).then((results2) => results2.flat());
  rewards.push(...results);
  i = rewards.length;
  for (; i < numSteps; ++i) {
    rewards.push(OUT_PENALITY);
  }
  return rewards;
}

// src/app/app.ts
HUD.register();
CssBoard.register();
function readStoredHighscore() {
  return parseInt(localStorage.getItem("highscore") || "0", 10);
}
var queryParams = new URLSearchParams(window.location.search);
function makeBallEngine(initialBallCounter) {
  const engineName = queryParams.get("ball-engine") ?? "math";
  switch (engineName) {
    case "math":
      return new BallEngineMath({ verbose: true, epsilon: 1e-10, initialBallCounter });
    case "rk4":
      return new BallEngineRK4({ verbose: true, initialBallCounter });
    case "motion-equation-delta":
      return new BallEngineMotionEquationDelta({ verbose: true, initialBallCounter });
    case "motion-equation-absolute":
      return new BallEngineMotionEquationAbsolute({ verbose: true, initialBallCounter });
    default:
      throw new Error(`Unknown ball engine: ${engineName}.`);
  }
}
var fpsStats = new import_stats.default();
fpsStats.showPanel(0);
fpsStats.dom.style.removeProperty("top");
fpsStats.dom.style.position = "fixed";
fpsStats.dom.style.left = "0px";
fpsStats.dom.style.bottom = "0px";
fpsStats.dom.style.display = "none";
document.body.appendChild(fpsStats.dom);
var screenContainer = selectElement("#screenContainer");
var startScreen = selectElement("#start-screen");
var optionsScreen = selectElement("#optionsScreen");
var pauseScreen = selectElement("#pause-screen");
var gameoverScreen = selectElement("#gameover-screen");
var licenseScreen = selectElement("#licenseScreen");
var startWithThreeLivesButton = selectElement("#checkbox-start-three-lives");
var comboPointsCheckbox = selectElement("#checkbox-combo-hit-points");
var enableBonusesCheckbox = selectElement("#checkbox-enable-bonuses");
var showFramerateCheckbox = selectElement("#showFramerateCheckbox");
var soundCheckbox = selectElement("#soundCheckbox");
var vfxCheckbox = selectElement("#vfxCheckbox");
var laserBonusButton = selectElement("#laser-bonus-button");
var oracleBonusButton = selectElement("#oracle-bonus-button");
var bonusesContainer = selectElement("#bonuses-container");
var difficultySlider = selectElement("#difficulty-slider");
var difficultyLabel = selectElement("#difficulty-label");
var hud = selectElement("dontyoufillit-hud");
var renderer = selectElement("dontyoufillit-css-board");
selectElement("#cost", laserBonusButton).textContent = `-${LASER_BONUS_COST}`;
selectElement("#cost", oracleBonusButton).textContent = `-${ORACLE_BONUS_COST}`;
function updateDifficulty(value) {
  const value_string = value.toString();
  difficultySlider.value = value_string;
  difficultyLabel.textContent = value_string;
  localStorage.setItem("difficulty", value_string);
}
updateDifficulty(parseInt(localStorage.getItem("difficulty") || "3", 10));
var cannon = new MovingCannon();
var ballEngine = makeBallEngine(difficultySlider.valueAsNumber);
var game = new GameHandler({ cannon, ballEngine });
game.highscore = readStoredHighscore();
var soundManager = new SoundManager();
setTimeout(() => soundManager.init(), 0);
var vfxManager = new VfxManager(selectElement("#VfxLayer"));
Object.assign(window, { cannon, ballEngine, game, hud, renderer, soundManager, vfxManager });
function showFps(enabled) {
  localStorage.setItem("show-fps", enabled.toString());
  showFramerateCheckbox.checked = enabled;
  fpsStats.dom.style.display = enabled ? "block" : "none";
}
if (queryParams.get("show-fps") !== void 0) {
  showFps(asBool(queryParams.get("show-fps")));
} else if (localStorage.getItem("show-fps") !== null) {
  showFps(asBool(localStorage.getItem("show-fps")));
} else {
  showFps(false);
}
if (localStorage.getItem("enable-bonuses") !== null) {
  enableBonusesCheckbox.checked = asBool(localStorage.getItem("enable-bonuses"));
}
enableBonusesCheckbox.addEventListener("change", function() {
  localStorage.setItem("enable-bonuses", this.checked.toString());
});
game.observable.addEventListener("beginStep", () => {
  if (showFramerateCheckbox.checked) {
    fpsStats.begin();
  }
});
game.observable.addEventListener("endStep", (collisions) => {
  if (collisions && collisions.length > 0) {
    if (soundCheckbox.checked) {
      soundManager.playCollisions(collisions);
    }
    if (vfxCheckbox.checked) {
      vfxManager.playCollisions(collisions);
    }
  }
  hud.render({ score: game.score, highscore: game.highscore, lives: game.lives });
  renderer.render(ballEngine, cannon);
  if (showFramerateCheckbox.checked) {
    fpsStats.end();
  }
  const gameEl = selectElement(".game");
  gameEl.classList.toggle("laser-mode", game.activeCollisionHandler === LaserCollisionHandler);
  gameEl.classList.toggle("oracle-active", game.oracleActive);
  if (!game.oracleActive) {
    selectElement("#RewardPath").setAttribute("d", "");
  }
  updateLaserButtonState();
  updateOracleButtonState();
});
function updateLaserButtonState() {
  const isLaserActive = game.activeCollisionHandler === LaserCollisionHandler;
  const canEnable = game.canEnableCollisionHandler(LaserCollisionHandler);
  laserBonusButton.classList.toggle("active", isLaserActive);
  laserBonusButton.disabled = !isLaserActive && !canEnable;
}
function updateOracleButtonState() {
  const canEnable = game.currentBall === null && game.score >= ORACLE_BONUS_COST;
  oracleBonusButton.classList.toggle("active", game.oracleActive);
  oracleBonusButton.disabled = !canEnable || game.oracleActive;
}
difficultySlider.addEventListener("input", () => updateDifficulty(difficultySlider.valueAsNumber));
addTouchOrClickEvent(selectElement(".fullscreen-container"), (evt) => {
  evt.preventDefault();
  evt.stopPropagation();
  if (game.currentBall === null && game.state === GameHandler.RUNNING) {
    game.fire();
  }
});
var MenuNavigator = class {
  focusableElements = [];
  refresh(screen) {
    this.focusableElements = Array.from(screen.querySelectorAll('button, input[type="checkbox"]')).filter((el) => {
      if (el instanceof HTMLButtonElement || el instanceof HTMLInputElement) {
        return !el.disabled;
      }
      return true;
    });
    const autofocusElement = this.focusableElements.find((el) => el.hasAttribute("data-autofocus"));
    autofocusElement?.focus();
  }
  clear() {
    this.focusableElements = [];
  }
  next() {
    this.moveFocus(1);
  }
  previous() {
    this.moveFocus(-1);
  }
  moveFocus(direction) {
    const currentIndex = this.focusableElements.indexOf(document.activeElement);
    if (currentIndex === -1) {
      this.focusableElements[0]?.focus();
      return;
    }
    const nextIndex = (currentIndex + direction + this.focusableElements.length) % this.focusableElements.length;
    this.focusableElements[nextIndex]?.focus();
  }
};
var menuNavigator = new MenuNavigator();
var screens = new Array();
function pushScreen(screen) {
  if (screens.length !== 0) {
    screens[screens.length - 1].style.display = "none";
  }
  screens.push(screen);
  screen.style.zIndex = screens.length.toString();
  screen.style.visibility = "hidden";
  screen.style.display = "block";
  screen.scrollTop = 0;
  screen.style.visibility = "visible";
  screenContainer.style.display = "block";
  menuNavigator.refresh(screen);
}
function popScreen() {
  if (screens.length > 0) {
    screens.pop().style.display = "none";
    if (screens.length === 0) {
      screenContainer.style.display = "none";
      menuNavigator.clear();
    } else {
      const topScreen = screens[screens.length - 1];
      topScreen.style.display = "block";
      menuNavigator.refresh(topScreen);
    }
  }
}
function popAllScreens() {
  while (screens.length > 0) {
    screens.pop().style.display = "none";
  }
  screenContainer.style.display = "none";
  menuNavigator.clear();
}
selectElement("#start-screen #play-button").addEventListener("click", function(evt) {
  evt.preventDefault();
  game.lives = startWithThreeLivesButton.checked ? 3 : 0;
  game.enableComboHitPoints = comboPointsCheckbox.checked;
  ballEngine.initialBallCounter = difficultySlider.valueAsNumber;
  game.reset();
  popAllScreens();
});
selectElement("#start-screen #options-button").addEventListener("click", function(evt) {
  evt.preventDefault();
  pushScreen(optionsScreen);
});
selectElement("#start-screen #license-button").addEventListener("click", function(evt) {
  evt.preventDefault();
  pushScreen(licenseScreen);
});
selectElement("#optionsScreenBackButton").addEventListener("click", function(evt) {
  evt.preventDefault();
  popScreen();
});
function resumeGame() {
  game.resume();
  popScreen();
}
selectElement("#pause-screen #continue-button").addEventListener("click", function(evt) {
  evt.preventDefault();
  resumeGame();
});
selectElement("#pause-screen #options-button").addEventListener("click", function(evt) {
  evt.preventDefault();
  pushScreen(optionsScreen);
});
laserBonusButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (game.canEnableCollisionHandler(LaserCollisionHandler) || game.activeCollisionHandler === LaserCollisionHandler) {
    game.toggleCollisionHandler(LaserCollisionHandler);
    updateLaserButtonState();
    game.resume();
    popScreen();
  }
});
oracleBonusButton.addEventListener("click", function(evt) {
  void (async () => {
    evt.preventDefault();
    if (game.score >= 0) {
      game.applyOracleBonus();
      const criteria = comboPointsCheckbox.checked ? "points+combo" : "hits";
      const initialBallCounter = difficultySlider.valueAsNumber;
      console.time("evaluateMoves");
      const moves = await evaluateMovesParallel(game.staticBalls, { steps: [181, 121, 61], criteria, initialBallCounter });
      console.timeEnd("evaluateMoves");
      const targets = normalizeRewards(moves);
      const d = computeRewardPath(targets);
      selectElement("#RewardPath").setAttribute("d", d);
      updateLaserButtonState();
      updateOracleButtonState();
      game.resume();
      popScreen();
    }
  })();
});
selectElement("#pause-screen #menu-button").addEventListener("click", function(evt) {
  evt.preventDefault();
  popScreen();
  pushScreen(startScreen);
});
selectElement("#retry-button").addEventListener("click", function(evt) {
  evt.preventDefault();
  game.useLife();
  popAllScreens();
});
selectElement("#play-again-button").addEventListener("click", function(evt) {
  evt.preventDefault();
  game.lives = startWithThreeLivesButton.checked ? 3 : 0;
  game.enableComboHitPoints = comboPointsCheckbox.checked;
  ballEngine.initialBallCounter = difficultySlider.valueAsNumber;
  game.reset();
  popAllScreens();
});
selectElement("#gameover-screen #menu-button").addEventListener("click", function(evt) {
  evt.preventDefault();
  popScreen();
  pushScreen(startScreen);
});
function goBackFromLicense() {
  popScreen();
  licenseScreen.querySelectorAll("details").forEach(function(details) {
    details.open = false;
  });
}
selectElement("#licenseScreenBackButton").addEventListener("click", function(evt) {
  evt.preventDefault();
  goBackFromLicense();
});
showFramerateCheckbox.addEventListener("change", function() {
  showFps(asBool(this.checked));
});
game.observable.addEventListener("gameover", function() {
  const { score, highscore } = game;
  const newHighscore = highscore > parseInt(localStorage.getItem("highscore") || "0", 10);
  if (newHighscore) {
    localStorage.setItem("highscore", score.toString(10));
  }
  selectElement("#gameover-screen #score-message").style.display = newHighscore ? "none" : "inline";
  selectElement("#gameover-screen #highscore-message").style.display = newHighscore ? "inline" : "none";
  selectElement("#gameover-screen #score").innerText = score.toString();
  const retryButton = selectElement("#gameover-screen #retry-button");
  selectElement("#remaining-lives", retryButton).innerText = `${game.lives} ${game.lives > 1 ? "lives" : "life"}`;
  retryButton.disabled = !game.canUseLife();
  selectElement("#gameover-screen #play-again-button").style.display = !game.canUseLife() ? "block" : "none";
  pushScreen(gameoverScreen);
});
pushScreen(startScreen);
hud.onPause = (ev) => {
  ev.preventDefault();
  ev.stopPropagation();
  pauseGame();
};
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pauseGame();
  }
}, false);
function pauseGame() {
  if (game.state === GameHandler.RUNNING) {
    game.pause();
    updateLaserButtonState();
    bonusesContainer.style.display = enableBonusesCheckbox.checked ? "block" : "none";
    pushScreen(pauseScreen);
  }
}
window.addEventListener("keydown", (ev) => {
  const topScreen = screens.length > 0 ? screens[screens.length - 1] : null;
  if (ev.key === "Escape") {
    if (!topScreen) {
      pauseGame();
    } else if (topScreen === pauseScreen) {
      resumeGame();
    } else if (topScreen === optionsScreen) {
      popScreen();
    } else if (topScreen === licenseScreen) {
      goBackFromLicense();
    }
  } else if (ev.key === " ") {
    if (!topScreen && game.currentBall === null && game.state === GameHandler.RUNNING) {
      ev.stopPropagation();
      ev.preventDefault();
      game.fire();
    }
  } else if (topScreen) {
    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      menuNavigator.next();
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      menuNavigator.previous();
    }
  }
});
//# sourceMappingURL=app.js.map

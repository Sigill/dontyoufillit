Date.now||(Date.now=function(){return(new Date).getTime()});
(function(){for(var a=["webkit","moz"],b=0;b<a.length&&!window.requestAnimationFrame;++b){var c=a[b];window.requestAnimationFrame=window[c+"RequestAnimationFrame"];window.cancelAnimationFrame=window[c+"CancelAnimationFrame"]||window[c+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var e=0;window.requestAnimationFrame=function(a){var b=Date.now(),c=Math.max(e+16,b);return setTimeout(function(){a(e=
c)},c-b)};window.cancelAnimationFrame=clearTimeout}})();var Stats=function(){var a=Date.now(),b=a,c=0,e=Infinity,g=0,h=0,A=Infinity,w=0,D=0,E=0,x=document.createElement("div");x.id="stats";x.addEventListener("mousedown",function(a){a.preventDefault();F(++E%2)},!1);x.style.cssText="width:80px;opacity:0.9;cursor:pointer";var n=document.createElement("div");n.id="fps";n.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#002";x.appendChild(n);var q=document.createElement("div");q.id="fpsText";q.style.cssText="color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
q.innerHTML="FPS";n.appendChild(q);var p=document.createElement("div");p.id="fpsGraph";p.style.cssText="position:relative;width:74px;height:30px;background-color:#0ff";for(n.appendChild(p);74>p.children.length;){var t=document.createElement("span");t.style.cssText="width:1px;height:30px;float:left;background-color:#113";p.appendChild(t)}var f=document.createElement("div");f.id="ms";f.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#020;display:none";x.appendChild(f);var r=document.createElement("div");
r.id="msText";r.style.cssText="color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";r.innerHTML="MS";f.appendChild(r);var k=document.createElement("div");k.id="msGraph";k.style.cssText="position:relative;width:74px;height:30px;background-color:#0f0";for(f.appendChild(k);74>k.children.length;)t=document.createElement("span"),t.style.cssText="width:1px;height:30px;float:left;background-color:#131",k.appendChild(t);var F=function(a){E=a;switch(E){case 0:n.style.display=
"block";f.style.display="none";break;case 1:n.style.display="none",f.style.display="block"}};return{REVISION:12,domElement:x,setMode:F,begin:function(){a=Date.now()},end:function(){var f=Date.now();c=f-a;e=Math.min(e,c);g=Math.max(g,c);r.textContent=c+" MS ("+e+"-"+g+")";var n=Math.min(30,30-30*(c/200));k.appendChild(k.firstChild).style.height=n+"px";D++;f>b+1E3&&(h=Math.round(1E3*D/(f-b)),A=Math.min(A,h),w=Math.max(w,h),q.textContent=h+" FPS ("+A+"-"+w+")",n=Math.min(30,30-30*(h/100)),p.appendChild(p.firstChild).style.height=
n+"px",b=f,D=0);return f},update:function(){a=this.end()}}};"object"===typeof module&&(module.exports=Stats);function Observable(){this.observers=[]}Observable.prototype.addObserver=function(a){this.observers.push(a)};Observable.prototype.removeObserver=function(a){a=this.observers.indexOf(a);~a&&this.observers.splice(a,1)};Observable.prototype.notifyObservers=function(a){for(var b=this.observers.length-1;0<=b;b--)this.observers[b](a)};Math.sign||(Math.__proto__.sign=function(a){return isNaN(a)?NaN:0===a?a:0<a?1:-1});function vectorLength(a,b){return Math.sqrt(a*a+b*b)}function RK41DObject_State(a,b){this.u=a;this.s=b}function RK41DObject_Derivative(a,b){this.du=a;this.ds=b}function RK41DObject(){this.state=new RK41DObject_State(0,0)}
RK41DObject.prototype.evaluate=function(a,b,c,e){if("undefined"==typeof c)return new RK41DObject_Derivative(a.s,this.acceleration(a,b));a=new RK41DObject_State(a.u+e.du*c,a.s+e.ds*c);return new RK41DObject_Derivative(a.s,this.acceleration(a,b+c))};
RK41DObject.prototype.integrate=function(a,b){var c=this.evaluate(this.state,a),e=this.evaluate(this.state,a,0.5*b,c),g=this.evaluate(this.state,a,0.5*b,e),h=this.evaluate(this.state,a,b,g),A=1/6*(c.ds+2*(e.ds+g.ds)+h.ds);this.state.u+=1/6*(c.du+2*(e.du+g.du)+h.du)*b;this.state.s+=A*b};function normalizeRadian(a){for(;a>2*Math.PI;)a-=2*Math.PI;for(;0>a;)a+=2*Math.PI;return a}function Cannon(){RK41DObject.call(this);this.state.u=0;this.state.s=Math.PI/3}Cannon.prototype=new RK41DObject;
Cannon.prototype.constructor=RK41DObject;Cannon.prototype.acceleration=function(a,b){return 0};Cannon.prototype.getAngle=function(){return this.state.u+Math.PI/2};Cannon.prototype.update=function(a,b){this.integrate(a,b);Math.abs(this.state.u)>=Math.PI/2&&(this.state.u=(Math.PI/2-Math.abs(Math.PI/2-Math.abs(this.state.u)))*Math.sign(this.state.u),this.state.s*=-1)};
function Ball(a,b,c,e){RK41DObject.call(this);this.nr=a;this.nx=b;this.ny=c;this.direction=e;this.state.u=0;this.state.s=1;this.counter=3}Ball.prototype=new RK41DObject;Ball.prototype.constructor=RK41DObject;Ball.prototype.acceleration=function(a,b){return-0.4};Ball.prototype.update=function(a,b,c){var e=this.state.u;this.integrate(a,b);a=this.state.u-e;this.nx+=a*Math.cos(this.direction);this.ny+=a*Math.sin(this.direction);this.bounce(c)};
Ball.prototype.bounce=function(a){this.nx>1-this.nr?(this.nx=1-this.nr,this.direction=normalizeRadian(Math.PI-this.direction)):this.nx<this.nr&&(this.nx=this.nr,this.direction=normalizeRadian(Math.PI-this.direction));this.ny>1-this.nr&&(this.ny=1-this.nr,this.direction=normalizeRadian(-this.direction));for(var b=0;b<a.length;++b){var c=a[b],e=this.nx-c.nx,g=this.ny-c.ny,h=vectorLength(e,g);h<=c.nr+this.nr&&(--c.counter,this.nx=c.nx+e*(this.nr+c.nr)/h,this.ny=c.ny+g*(this.nr+c.nr)/h,e=Math.atan2(g,
e),g=this.direction,h=this.state.s,c=-h*Math.cos(g-e)*Math.cos(e)+h*Math.sin(g-e)*Math.cos(e+Math.PI/2),e=-h*Math.cos(g-e)*Math.sin(e)+h*Math.sin(g-e)*Math.sin(e+Math.PI/2),this.direction=Math.atan2(e,c))}};Ball.prototype.grow=function(a){for(var b=Number.MAX_VALUE,c,e=0;e<a.length;++e)c=a[e],c=vectorLength(this.nx-c.nx,this.ny-c.ny)-c.nr,b>c&&(b=c);c=this.nx;b>c&&(b=c);c=1-this.nx;b>c&&(b=c);c=Math.abs(this.ny);b>c&&(b=c);c=Math.abs(1-this.ny);b>c&&(b=c);this.nr=Math.abs(b)};
function DontYouFillItGame(){this.state=this.PAUSED();this.cannon=new Cannon;this.staticBalls=[];this.currentBall=null;this.lastUpdateTime=performance.now?performance.now():Date.now();this.highscore=localStorage.getItem("highscore");this.highscore=null==this.highscore?0:parseInt(this.highscore,10);this.score=0;this.newHighscore=!1}DontYouFillItGame.prototype.PAUSED=function(){return 1};DontYouFillItGame.prototype.RUNNING=function(){return 2};DontYouFillItGame.prototype.GAMEOVER=function(){return 3};
DontYouFillItGame.prototype.update=function(a){if(this.currentBall)for(var b=this.lastUpdateTime,c=Math.floor(a-this.lastUpdateTime),e,g=1;g<=c;++g){e=(this.lastUpdateTime*(c-g)+a*g)/c;this.currentBall.update(b/1E3,(e-b)/1E3,this.staticBalls);for(b=this.staticBalls.length-1;0<=b;--b)0==this.staticBalls[b].counter&&(++this.score,this.staticBalls.splice(b,1));if(this.currentBall.ny<this.currentBall.nr&&normalizeRadian(this.currentBall.direction)>Math.PI){this.currentBall.state.s=0;if(this.newHighscore=
this.score>this.highscore)this.highscore=this.score,localStorage.setItem("highscore",this.score.toString(10));this.state=this.GAMEOVER()}if(0.001>this.currentBall.state.s){0<=this.currentBall.ny&&(this.currentBall.grow(this.staticBalls),this.staticBalls.push(this.currentBall));this.currentBall=null;break}b=e}this.cannon.update(this.lastUpdateTime/1E3,(a-this.lastUpdateTime)/1E3);this.lastUpdateTime=a};DontYouFillItGame.prototype.pause=function(){this.state=this.PAUSED()};
DontYouFillItGame.prototype.resume=function(){this.lastUpdateTime=performance.now?performance.now():Date.now();this.state=this.RUNNING()};DontYouFillItGame.prototype.reset=function(){this.currentBall=null;this.staticBalls=[];this.score=this.cannon.state.u=0;this.resume()};DontYouFillItGame.prototype.fire=function(){this.currentBall=new Ball(0.025,0.5+Math.cos(this.cannon.getAngle())/15,-1/6+1/15+Math.sin(this.cannon.getAngle())/15,this.cannon.getAngle())};function DontYouFillItCanvasGui(a,b){function c(a){return a}function e(a){a.moveTo(arguments[1],arguments[2]);for(var b=3;b<arguments.length;b+=2)a.lineTo(arguments[b],arguments[b+1])}function g(a,b){var u=b.nx*l,s=-b.ny*l,m=b.nr*l,f=32<m?Math.floor:c,g=32<m?Math.ceil:c;a.fillStyle="white";a.strokeStyle="white";a.lineWidth=1;a.beginPath();a.arc(u,s,m,0,2*Math.PI,!1);if(1==b.counter){var h=f(u-0.2*m),k=g(u+0.2*m),u=f(s-0.7*m),n=g(s+0.7*m);e(a,h,u,h,n,k,n,k,u)}else if(2==b.counter){var h=f(u-0.5*m),
k=f(u-0.1*m),r=g(u+0.1*m),q=g(u+0.5*m),u=f(s-0.7*m),n=f(s-0.3*m),f=f(s-0.15*m),p=g(s+0.15*m),t=g(s+0.3*m),s=g(s+0.7*m);e(a,q,u,h,u,h,n,r,n,r,f,h,f,h,s,q,s,q,t,k,t,k,p,q,p)}else 3==b.counter&&(h=f(u-0.5*m),k=g(u+0.1*m),r=g(u+0.5*m),u=f(s-0.7*m),n=f(s-0.3*m),f=f(s-0.15*m),p=g(s+0.15*m),t=g(s+0.3*m),s=g(s+0.7*m),e(a,r,u,h,u,h,n,k,n,k,f,h,f,h,p,k,p,k,t,h,t,h,s,r,s));a.closePath();a.fill()}function h(a){t.androidStockCompat?(a.clearRect(0,0,a.canvas.width,a.canvas.height),a.canvas.style.display="none",
a.canvas.offsetHeight,a.canvas.style.display="inherit"):a.clearRect(0,0,a.canvas.width,a.canvas.height)}function A(){if(0===B||B.previousBalls.length!=a.staticBalls.length)return!0;for(var d=0;d<a.staticBalls.length;++d){var b=a.staticBalls[d];if(B.previousBalls[d]!=b||B.previousCounters[d]!=b.counter)return!0}return!1}function w(d){t.observable.notifyObservers("beginStep");a.state==a.RUNNING()&&a.update(d);if(t.state==t.GAME){if(A()){B={previousBalls:a.staticBalls.slice(),previousCounters:Array(a.staticBalls.length)};
for(d=0;d<a.staticBalls.length;++d)B.previousCounters[d]=a.staticBalls[d].counter;d=f;d.fillStyle="black";d.fillRect(0,0,d.canvas.width,d.canvas.height);d.strokeStyle="white";d.lineWidth="1";d.beginPath();d.moveTo(Math.floor(v)+0.5,Math.floor(y)+0.5);d.lineTo(Math.floor(v)+0.5,Math.floor(z)+0.5);d.lineTo(Math.floor(I)-0.5,Math.floor(z)+0.5);d.lineTo(Math.floor(I)-0.5,Math.floor(y)+0.5);d.setLineDash||d.closePath();d.stroke();d.setLineDash&&(d.beginPath(),d.setLineDash([5,5]),d.moveTo(Math.floor(I)-
0.5,Math.floor(y)+0.5),d.lineTo(Math.floor(v)+0.5,Math.floor(y)+0.5),d.stroke(),d.setLineDash([]));for(var b=0;b<a.staticBalls.length;++b)d.save(),d.translate(Math.floor(v),Math.floor(y)),g(d,a.staticBalls[b]),d.restore();var b=f.canvas.width-Math.floor(0.9*(l/6)),c=f.canvas.width-Math.floor(0.4*(l/6)),e=Math.floor(0.1*(l/6)),m=Math.floor(0.3*(l/6)),p=Math.floor(0.8*(l/6));f.fillStyle="white";f.fillRect(b,e,m,p);f.fillRect(c,e,m,p);d.textAlign="left";d.textBaseline="bottom";d.font=Math.floor(l/12)+
"px Arial";d.fillText("Highscore",v,z-l/12+l/120);d.fillText("Score",v,z);b=d.measureText("Highscore ").width;d.fillText(a.highscore,v+b,z-l/12+l/120);d.fillText(a.score,v+b,z)}h(r);r.setTransform(1,0,0,1,0,0);r.translate(-l/2+Math.ceil(J)/2,-C+Math.ceil(K));d=r;var b=Math.round(S/2),c=Math.round(l/2),e=c-b,m=c+b,p=Math.round(y+l/6),q=Math.round(y+l/6-O);d.lineWidth=L;d.fillStyle="white";d.strokeStyle="white";d.lineCap="butt";d.beginPath();d.moveTo(e,p);d.lineTo(e,q);d.arc(c,q,b,Math.PI,0);d.lineTo(m,
p);d.closePath();d.fill();d.beginPath();d.moveTo(c,q);d.lineTo(c+Math.cos(a.cannon.getAngle())*H,q-Math.sin(a.cannon.getAngle())*H);d.closePath();d.stroke();r.setTransform(1,0,0,1,0,0);a.currentBall?(b=a.currentBall.nr*l,d=Math.floor(a.currentBall.nx*l-b-P),b=Math.floor(-a.currentBall.ny*l-b-P),k.setTransform(1,0,0,1,0,0),h(k),k.save(),k.translate(-d,-b),g(k,a.currentBall),k.restore(),k.canvas.style.left=Math.floor(M)+Math.floor(v)+d+"px",k.canvas.style.top=Math.floor(N)+Math.floor(y)+b+"px",k.canvas.style.display=
"block"):k.canvas.style.display="none"}t.observable.notifyObservers("endStep");a.state==a.RUNNING()?window.requestAnimationFrame(w):a.state==a.GAMEOVER()&&(document.getElementById("gameoverScreenScoreMessage").style.display=a.newHighscore?"none":"inline",document.getElementById("gameoverScreenHighscoreMessage").style.display=a.newHighscore?"inline":"none",document.getElementById("gameoverScreenScore").innerHTML=a.score,n(T,1))}function D(){a.state==a.RUNNING()&&(a.pause(),n(R,1))}function E(b,c){var e=
f.canvas.getBoundingClientRect(),g=b-e.left,e=c-e.top,h=f.canvas.width,k=l/6;g>f.canvas.width-l/6&&g<=h&&0<e&&e<=k?D():null==a.currentBall&&a.state==a.RUNNING()&&a.fire()}function x(){var b=F.clientWidth,c=F.clientHeight;0.75>b/c?(G=b,C=4/3*G):(C=c,G=0.75*C);l=G;N=(c-C)/2;M=(b-G)/2;z=l/6;y=z+l;v=0;I=v+l;S=l/10;O=l/15;H=l/15;L=l/18;Q=Math.ceil(l/20)+2*P;b=Math.sqrt(L/2*(L/2)+H*H);J=2*b;K=O+b;f.canvas.width=G;f.canvas.height=C;f.canvas.style.left=Math.floor(M)+"px";f.canvas.style.top=Math.floor(N)+
"px";r.canvas.width=Math.ceil(J);r.canvas.height=Math.ceil(K);r.canvas.style.left=Math.ceil(M+(l-J)/2)+"px";r.canvas.style.top=Math.floor(N+C-K)+"px";k.canvas.width=Q;k.canvas.height=Q;B=0;a.state!=a.RUNNING()&&window.requestAnimationFrame(w)}function n(a,b){a.style.zIndex=0<=b?b:-1;a.scrollTop=0;a.style.display=0<=b?"block":"none"}function q(a){if(500>a.timeStamp-U)return!0;U=a.timeStamp;return!1}function p(a,b){var c=document.getElementById(a);c.addEventListener("click",b);c.addEventListener("touchstart",
b,supportsPassive?{passive:!1}:!1)}var t=this;this.MENU=1;this.GAME=2;this.state=this.MENU;this.game=a;this.observable=new Observable;var f=document.getElementById("MainCanvas").getContext("2d"),r=document.getElementById("CannonCanvas").getContext("2d"),k=document.getElementById("BallCanvas").getContext("2d"),F=f.canvas.parentNode,W=document.getElementById("startScreen"),R=document.getElementById("pauseScreen"),T=document.getElementById("gameoverScreen"),V=document.getElementById("licenseScreen"),
U=0,B=0;p("startScreenPlayButton",function(b){b.preventDefault();q(b)||(a.resume(),t.state=t.GAME,window.requestAnimationFrame(w),n(W,-1))});p("pauseScreenContinueButton",function(b){b.preventDefault();q(b)||(a.resume(),window.requestAnimationFrame(w),n(R,-1))});p("gameoverScreenPlayAgainButton",function(b){b.preventDefault();q(b)||(a.reset(),window.requestAnimationFrame(w),n(T,-1))});p("startScreenLicenseButton",function(a){a.preventDefault();q(a)||n(V,2)});p("licenseScreenBackButton",function(a){a.preventDefault();
q(a)||n(V,-1)});var l,G,C,N,M,y,z,v,I,S,O,H,L,J,K,Q,P=8;window.addEventListener("resize",x,!1);[f.canvas,F].forEach(function(a){a.addEventListener("mousedown",function(a){a.preventDefault();q(a)||E(a.clientX,a.clientY)},!1);a.addEventListener("touchstart",function(a){a.preventDefault();q(a)||E(a.touches[0].clientX,a.touches[0].clientY)},supportsPassive?{passive:!1}:!1)});document.addEventListener("visibilitychange",function(){document.hidden&&D()},!1);x();window.requestAnimationFrame(w)}
DontYouFillItCanvasGui.prototype.addObserver=function(a){this.observable.addObserver(a)};DontYouFillItCanvasGui.prototype.removeObserver=function(a){this.observable.removeObserver(a)};DontYouFillItCanvasGui.prototype.notifyObservers=function(){this.observable.notifyObservers()};var game=new DontYouFillItGame,gui=new DontYouFillItCanvasGui(game,"c");function parseQueryString(){for(var a={},b=window.location.search.substring(1).split("&"),c=0;c<b.length;c++){var e=b[c].split("=",2);a[e[0]]=2==e.length?e[1]:!0}return a}var qs=parseQueryString();
if(qs.debug){var stats=new Stats;stats.setMode(0);stats.domElement.style.position="absolute";stats.domElement.style.left="0px";stats.domElement.style.bottom="0px";document.body.appendChild(stats.domElement);gui.addObserver(function(a){"beginStep"==a?stats.begin():"endStep"==a&&stats.end()})}gui.androidStockCompat=!0==qs.stock;

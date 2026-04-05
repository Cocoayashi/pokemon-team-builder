var y0=Object.defineProperty,_0=Object.defineProperties;var b0=Object.getOwnPropertyDescriptors;var rv=Object.getOwnPropertySymbols;var D0=Object.prototype.hasOwnProperty,C0=Object.prototype.propertyIsEnumerable;var ov=(t,n,e)=>n in t?y0(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,v=(t,n)=>{for(var e in n||={})D0.call(n,e)&&ov(t,e,n[e]);if(rv)for(var e of rv(n))C0.call(n,e)&&ov(t,e,n[e]);return t},Y=(t,n)=>_0(t,b0(n));var dt=null,ll=!1,cf=1,w0=null,Ge=Symbol("SIGNAL");function k(t){let n=dt;return dt=t,n}function fl(){return dt}var Ni={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Fi(t){if(ll)throw new Error("");if(dt===null)return;dt.consumerOnSignalRead(t);let n=dt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=dt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:dt.producers,e!==void 0&&e.producer===t)){dt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===dt&&(!i||I0(r,dt)))return;let o=Ur(dt),s={producer:t,consumer:dt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};dt.producersTail=s,n!==void 0?n.nextProducer=s:dt.producers=s,o&&cv(t,s)}function sv(){cf++}function hl(t){if(!(Ur(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===cf)){if(!t.producerMustRecompute(t)&&!Hr(t)){ul(t);return}t.producerRecomputeValue(t),ul(t)}}function df(t){if(t.consumers===void 0)return;let n=ll;ll=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||E0(i)}}finally{ll=n}}function uf(){return dt?.consumerAllowSignalWrites!==!1}function E0(t){t.dirty=!0,df(t),t.consumerMarkedDirty?.(t)}function ul(t){t.dirty=!1,t.lastCleanEpoch=cf}function ii(t){return t&&av(t),k(t)}function av(t){t.producersTail=void 0,t.recomputing=!0}function Pi(t,n){k(n),t&&lv(t)}function lv(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Ur(t))do e=ff(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Hr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(hl(e),i!==e.version))return!0}return!1}function ri(t){if(Ur(t)){let n=t.producers;for(;n!==void 0;)n=ff(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function cv(t,n){let e=t.consumersTail,i=Ur(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)cv(r.producer,r)}function ff(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Ur(n)){let o=n.producers;for(;o!==void 0;)o=ff(o)}return e}function Ur(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function pl(t){w0?.(t)}function I0(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function ml(t,n){return Object.is(t,n)}function us(t,n){let e=Object.create(x0);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(hl(e),Fi(e),e.value===ds)throw e.error;return e.value};return i[Ge]=e,pl(e),i}var cl=Symbol("UNSET"),dl=Symbol("COMPUTING"),ds=Symbol("ERRORED"),x0=Y(v({},Ni),{value:cl,dirty:!0,error:null,equal:ml,kind:"computed",producerMustRecompute(t){return t.value===cl||t.value===dl},producerRecomputeValue(t){if(t.value===dl)throw new Error("");let n=t.value;t.value=dl;let e=ii(t),i,r=!1;try{i=t.computation(),k(null),r=n!==cl&&n!==ds&&i!==ds&&t.equal(n,i)}catch(o){i=ds,t.error=o}finally{Pi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function S0(){throw new Error}var dv=S0;function uv(t){dv(t)}function hf(t){dv=t}var M0=null;function pf(t,n){let e=Object.create(fs);e.value=t,n!==void 0&&(e.equal=n);let i=()=>fv(e);return i[Ge]=e,pl(e),[i,s=>zr(e,s),s=>mf(e,s)]}function fv(t){return Fi(t),t.value}function zr(t,n){uf()||uv(t),t.equal(t.value,n)||(t.value=n,T0(t))}function mf(t,n){uf()||uv(t),zr(t,n(t.value))}var fs=Y(v({},Ni),{equal:ml,value:void 0,kind:"signal"});function T0(t){t.version++,sv(),df(t),M0?.(t)}var gf=Y(v({},Ni),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function vf(t){if(t.dirty=!1,t.version>0&&!Hr(t))return;t.version++;let n=ii(t);try{t.cleanup(),t.fn()}finally{Pi(t,n)}}function Q(t){return typeof t=="function"}function $r(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var gl=$r(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Li(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var oe=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(Q(i))try{i()}catch(o){n=o instanceof gl?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{hv(o)}catch(s){n=n??[],s instanceof gl?n=[...n,...s.errors]:n.push(s)}}if(n)throw new gl(n)}}add(n){var e;if(n&&n!==this)if(this.closed)hv(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Li(e,n)}remove(n){let{_finalizers:e}=this;e&&Li(e,n),n instanceof t&&n._removeParent(this)}};oe.EMPTY=(()=>{let t=new oe;return t.closed=!0,t})();var yf=oe.EMPTY;function vl(t){return t instanceof oe||t&&"closed"in t&&Q(t.remove)&&Q(t.add)&&Q(t.unsubscribe)}function hv(t){Q(t)?t():t.unsubscribe()}var Qt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Gr={setTimeout(t,n,...e){let{delegate:i}=Gr;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Gr;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function yl(t){Gr.setTimeout(()=>{let{onUnhandledError:n}=Qt;if(n)n(t);else throw t})}function Vi(){}var pv=_f("C",void 0,void 0);function mv(t){return _f("E",void 0,t)}function gv(t){return _f("N",t,void 0)}function _f(t,n,e){return{kind:t,value:n,error:e}}var ji=null;function Wr(t){if(Qt.useDeprecatedSynchronousErrorHandling){let n=!ji;if(n&&(ji={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=ji;if(ji=null,e)throw i}}else t()}function vv(t){Qt.useDeprecatedSynchronousErrorHandling&&ji&&(ji.errorThrown=!0,ji.error=t)}var Bi=class extends oe{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,vl(n)&&n.add(this)):this.destination=k0}static create(n,e,i){return new Tn(n,e,i)}next(n){this.isStopped?Df(gv(n),this):this._next(n)}error(n){this.isStopped?Df(mv(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Df(pv,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},A0=Function.prototype.bind;function bf(t,n){return A0.call(t,n)}var Cf=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){_l(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){_l(i)}else _l(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){_l(e)}}},Tn=class extends Bi{constructor(n,e,i){super();let r;if(Q(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Qt.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&bf(n.next,o),error:n.error&&bf(n.error,o),complete:n.complete&&bf(n.complete,o)}):r=n}this.destination=new Cf(r)}};function _l(t){Qt.useDeprecatedSynchronousErrorHandling?vv(t):yl(t)}function R0(t){throw t}function Df(t,n){let{onStoppedNotification:e}=Qt;e&&Gr.setTimeout(()=>e(t,n))}var k0={closed:!0,next:Vi,error:R0,complete:Vi};var qr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Mt(t){return t}function wf(...t){return Ef(t)}function Ef(t){return t.length===0?Mt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var q=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=N0(e)?e:new Tn(e,i,r);return Wr(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=yv(i),new i((r,o)=>{let s=new Tn({next:a=>{try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[qr](){return this}pipe(...e){return Ef(e)(this)}toPromise(e){return e=yv(e),new e((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return t.create=n=>new t(n),t})();function yv(t){var n;return(n=t??Qt.Promise)!==null&&n!==void 0?n:Promise}function O0(t){return t&&Q(t.next)&&Q(t.error)&&Q(t.complete)}function N0(t){return t&&t instanceof Bi||O0(t)&&vl(t)}function F0(t){return Q(t?.lift)}function Z(t){return n=>{if(F0(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function X(t,n,e,i,r){return new If(t,n,e,i,r)}var If=class extends Bi{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){n.error(l)}}:super._next,this._error=r?function(a){try{r(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var _v=$r(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var w=(()=>{class t extends q{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new bl(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new _v}next(e){Wr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Wr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Wr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?yf:(this.currentObservers=null,o.push(e),new oe(()=>{this.currentObservers=null,Li(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new q;return e.source=this,e}}return t.create=(n,e)=>new bl(n,e),t})(),bl=class extends w{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:yf}};var We=class extends w{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var hs={now(){return(hs.delegate||Date).now()},delegate:void 0};var oi=class extends w{constructor(n=1/0,e=1/0,i=hs){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let l=1;l<i.length&&i[l]<=s;l+=2)a=l;a&&i.splice(0,a+1)}}};var Dl=class extends oe{constructor(n,e){super()}schedule(n,e=0){return this}};var ps={setInterval(t,n,...e){let{delegate:i}=ps;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=ps;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Cl=class extends Dl{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return ps.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&ps.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Li(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Yr=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Yr.now=hs.now;var wl=class extends Yr{constructor(n,e=Yr.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Hi=new wl(Cl),bv=Hi;var Fe=new q(t=>t.complete());function El(t){return t&&Q(t.schedule)}function xf(t){return t[t.length-1]}function Il(t){return Q(xf(t))?t.pop():void 0}function gn(t){return El(xf(t))?t.pop():void 0}function Dv(t,n){return typeof xf(t)=="number"?t.pop():n}function wv(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{c(i.next(d))}catch(f){s(f)}}function l(d){try{c(i.throw(d))}catch(f){s(f)}}function c(d){d.done?o(d.value):r(d.value).then(a,l)}c((i=i.apply(t,n||[])).next())})}function Cv(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ui(t){return this instanceof Ui?(this.v=t,this):new Ui(t)}function Ev(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(p){return function(m){return Promise.resolve(m).then(p,f)}}function a(p,m){i[p]&&(r[p]=function(C){return new Promise(function(I,x){o.push([p,C,I,x])>1||l(p,C)})},m&&(r[p]=m(r[p])))}function l(p,m){try{c(i[p](m))}catch(C){h(o[0][3],C)}}function c(p){p.value instanceof Ui?Promise.resolve(p.value.v).then(d,f):h(o[0][2],p)}function d(p){l("next",p)}function f(p){l("throw",p)}function h(p,m){p(m),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Iv(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Cv=="function"?Cv(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),r(a,l,s.done,s.value)})}}function r(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var xl=t=>t&&typeof t.length=="number"&&typeof t!="function";function Sl(t){return Q(t?.then)}function Ml(t){return Q(t[qr])}function Tl(t){return Symbol.asyncIterator&&Q(t?.[Symbol.asyncIterator])}function Al(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function P0(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Rl=P0();function kl(t){return Q(t?.[Rl])}function Ol(t){return Ev(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield Ui(e.read());if(r)return yield Ui(void 0);yield yield Ui(i)}}finally{e.releaseLock()}})}function Nl(t){return Q(t?.getReader)}function De(t){if(t instanceof q)return t;if(t!=null){if(Ml(t))return L0(t);if(xl(t))return V0(t);if(Sl(t))return j0(t);if(Tl(t))return xv(t);if(kl(t))return B0(t);if(Nl(t))return H0(t)}throw Al(t)}function L0(t){return new q(n=>{let e=t[qr]();if(Q(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function V0(t){return new q(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function j0(t){return new q(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,yl)})}function B0(t){return new q(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function xv(t){return new q(n=>{U0(t,n).catch(e=>n.error(e))})}function H0(t){return xv(Ol(t))}function U0(t,n){var e,i,r,o;return wv(this,void 0,void 0,function*(){try{for(e=Iv(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Dt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Fl(t,n=0){return Z((e,i)=>{e.subscribe(X(i,r=>Dt(i,t,()=>i.next(r),n),()=>Dt(i,t,()=>i.complete(),n),r=>Dt(i,t,()=>i.error(r),n)))})}function Pl(t,n=0){return Z((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Sv(t,n){return De(t).pipe(Pl(n),Fl(n))}function Mv(t,n){return De(t).pipe(Pl(n),Fl(n))}function Tv(t,n){return new q(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Av(t,n){return new q(e=>{let i;return Dt(e,n,()=>{i=t[Rl](),Dt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>Q(i?.return)&&i.return()})}function Ll(t,n){if(!t)throw new Error("Iterable cannot be null");return new q(e=>{Dt(e,n,()=>{let i=t[Symbol.asyncIterator]();Dt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Rv(t,n){return Ll(Ol(t),n)}function kv(t,n){if(t!=null){if(Ml(t))return Sv(t,n);if(xl(t))return Tv(t,n);if(Sl(t))return Mv(t,n);if(Tl(t))return Ll(t,n);if(kl(t))return Av(t,n);if(Nl(t))return Rv(t,n)}throw Al(t)}function Se(t,n){return n?kv(t,n):De(t)}function O(...t){let n=gn(t);return Se(t,n)}function ms(t,n){let e=Q(t)?t:()=>t,i=r=>r.error(e());return new q(n?r=>n.schedule(i,0,r):i)}function gs(t){return!!t&&(t instanceof q||Q(t.lift)&&Q(t.subscribe))}var zi=$r(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Ov(t){return t instanceof Date&&!isNaN(t)}function A(t,n){return Z((e,i)=>{let r=0;e.subscribe(X(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:z0}=Array;function $0(t,n){return z0(n)?t(...n):t(n)}function Vl(t){return A(n=>$0(t,n))}var{isArray:G0}=Array,{getPrototypeOf:W0,prototype:q0,keys:Y0}=Object;function jl(t){if(t.length===1){let n=t[0];if(G0(n))return{args:n,keys:null};if(Z0(n)){let e=Y0(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function Z0(t){return t&&typeof t=="object"&&W0(t)===q0}function Bl(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function vs(...t){let n=gn(t),e=Il(t),{args:i,keys:r}=jl(t);if(i.length===0)return Se([],n);let o=new q(K0(i,n,r?s=>Bl(r,s):Mt));return e?o.pipe(Vl(e)):o}function K0(t,n,e=Mt){return i=>{Nv(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let l=0;l<r;l++)Nv(n,()=>{let c=Se(t[l],n),d=!1;c.subscribe(X(i,f=>{o[l]=f,d||(d=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function Nv(t,n,e){t?Dt(e,t,n):n()}function Fv(t,n,e,i,r,o,s,a){let l=[],c=0,d=0,f=!1,h=()=>{f&&!l.length&&!c&&n.complete()},p=C=>c<i?m(C):l.push(C),m=C=>{o&&n.next(C),c++;let I=!1;De(e(C,d++)).subscribe(X(n,x=>{r?.(x),o?p(x):n.next(x)},()=>{I=!0},void 0,()=>{if(I)try{for(c--;l.length&&c<i;){let x=l.shift();s?Dt(n,s,()=>m(x)):m(x)}h()}catch(x){n.error(x)}}))};return t.subscribe(X(n,p,()=>{f=!0,h()})),()=>{a?.()}}function st(t,n,e=1/0){return Q(n)?st((i,r)=>A((o,s)=>n(i,o,r,s))(De(t(i,r))),e):(typeof n=="number"&&(e=n),Z((i,r)=>Fv(i,r,t,e)))}function Hl(t=1/0){return st(Mt,t)}function Pv(){return Hl(1)}function vn(...t){return Pv()(Se(t,gn(t)))}function Tt(t){return new q(n=>{De(t()).subscribe(n)})}function An(...t){let n=Il(t),{args:e,keys:i}=jl(t),r=new q(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let f=!1;De(e[d]).subscribe(X(o,h=>{f||(f=!0,c--),a[d]=h},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(i?Bl(i,a):a),o.complete())}))}});return n?r.pipe(Vl(n)):r}function Ul(t=0,n,e=bv){let i=-1;return n!=null&&(El(n)?e=n:i=n),new q(r=>{let o=Ov(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function At(...t){let n=gn(t),e=Dv(t,1/0),i=t;return i.length?i.length===1?De(i[0]):Hl(e)(Se(i,n)):Fe}function de(t,n){return Z((e,i)=>{let r=0;e.subscribe(X(i,o=>t.call(n,o,r++)&&i.next(o)))})}function Lv(t){return Z((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}s&&e.complete()},l=()=>{o=null,s&&e.complete()};n.subscribe(X(e,c=>{i=!0,r=c,o||De(t(c)).subscribe(o=X(e,a,l))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function zl(t,n=Hi){return Lv(()=>Ul(t,n))}function $i(t){return Z((n,e)=>{let i=null,r=!1,o;i=n.subscribe(X(e,void 0,void 0,s=>{o=De(t(s,$i(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Zr(t,n){return Q(n)?st(t,n,1):st(t,1)}function ys(t,n=Hi){return Z((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=s+t,d=n.now();if(d<c){r=this.schedule(void 0,c-d),i.add(r);return}a()}e.subscribe(X(i,c=>{o=c,s=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function Vv(t){return Z((n,e)=>{let i=!1;n.subscribe(X(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function we(t){return t<=0?()=>Fe:Z((n,e)=>{let i=0;n.subscribe(X(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function jv(){return Z((t,n)=>{t.subscribe(X(n,Vi))})}function Bv(t){return A(()=>t)}function Sf(t,n){return n?e=>vn(n.pipe(we(1),jv()),e.pipe(Sf(t))):st((e,i)=>De(t(e,i)).pipe(we(1),Bv(e)))}function Mf(t,n=Hi){let e=Ul(t,n);return Sf(()=>e)}function $l(t,n=Mt){return t=t??Q0,Z((e,i)=>{let r,o=!0;e.subscribe(X(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function Q0(t,n){return t===n}function Hv(t=X0){return Z((n,e)=>{let i=!1;n.subscribe(X(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function X0(){return new zi}function Gi(t){return Z((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Rn(t,n){let e=arguments.length>=2;return i=>i.pipe(t?de((r,o)=>t(r,o,i)):Mt,we(1),e?Vv(n):Hv(()=>new zi))}function Gl(t){return t<=0?()=>Fe:Z((n,e)=>{let i=[];n.subscribe(X(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Wl(){return Z((t,n)=>{let e,i=!1;t.subscribe(X(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function _s(t={}){let{connector:n=()=>new w,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,l,c=0,d=!1,f=!1,h=()=>{a?.unsubscribe(),a=void 0},p=()=>{h(),s=l=void 0,d=f=!1},m=()=>{let C=s;p(),C?.unsubscribe()};return Z((C,I)=>{c++,!f&&!d&&h();let x=l=l??n();I.add(()=>{c--,c===0&&!f&&!d&&(a=Tf(m,r))}),x.subscribe(I),!s&&c>0&&(s=new Tn({next:he=>x.next(he),error:he=>{f=!0,h(),a=Tf(p,e,he),x.error(he)},complete:()=>{d=!0,h(),a=Tf(p,i),x.complete()}}),De(C).subscribe(s))})(o)}}function Tf(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Tn({next:()=>{i.unsubscribe(),t()}});return De(n(...e)).subscribe(i)}function ql(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,_s({connector:()=>new oi(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function bs(t){return de((n,e)=>t<=e)}function at(...t){let n=gn(t);return Z((e,i)=>{(n?vn(t,e,n):vn(t,e)).subscribe(i)})}function Me(t,n){return Z((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(X(i,l=>{r?.unsubscribe();let c=0,d=o++;De(t(l,d)).subscribe(r=X(i,f=>i.next(n?n(l,f,d,c++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function Be(t){return Z((n,e)=>{De(t).subscribe(X(e,()=>e.complete(),Vi)),!e.closed&&n.subscribe(e)})}function Af(t,n=!1){return Z((e,i)=>{let r=0;e.subscribe(X(i,o=>{let s=t(o,r++);(s||n)&&i.next(o),!s&&i.complete()}))})}function He(t,n,e){let i=Q(t)||n||e?{next:t,error:n,complete:e}:t;return i?Z((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(X(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;a=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;a=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;a&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):Mt}var Rf;function Yl(){return Rf}function yn(t){let n=Rf;return Rf=t,n}var Uv=Symbol("NotFound");function Kr(t){return t===Uv||t?.name==="\u0275NotFound"}function zv(t){let n=k(null);try{return t()}finally{k(n)}}var tc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",E=class extends Error{code;constructor(n,e){super(li(n,e)),this.code=n}};function J0(t){return`NG0${Math.abs(t)}`}function li(t,n){return`${J0(t)}${n?": "+n:""}`}var Xr=globalThis;function ve(t){for(let n in t)if(t[n]===ve)return n;throw Error("")}function Yv(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Ss(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Ss).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function nc(t,n){return t?n?`${t} ${n}`:t:n||""}var eI=ve({__forward_ref__:ve});function wt(t){return t.__forward_ref__=wt,t}function qe(t){return $f(t)?t():t}function $f(t){return typeof t=="function"&&t.hasOwnProperty(eI)&&t.__forward_ref__===wt}function y(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function R(t){return{providers:t.providers||[],imports:t.imports||[]}}function Ms(t){return tI(t,ic)}function Gf(t){return Ms(t)!==null}function tI(t,n){return t.hasOwnProperty(n)&&t[n]||null}function nI(t){let n=t?.[ic]??null;return n||null}function Of(t){return t&&t.hasOwnProperty(Kl)?t[Kl]:null}var ic=ve({\u0275prov:ve}),Kl=ve({\u0275inj:ve}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=y({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Wf(t){return t&&!!t.\u0275providers}var qf=ve({\u0275cmp:ve}),Yf=ve({\u0275dir:ve}),Zf=ve({\u0275pipe:ve}),Kf=ve({\u0275mod:ve}),Cs=ve({\u0275fac:ve}),Qi=ve({__NG_ELEMENT_ID__:ve}),$v=ve({__NG_ENV_ID__:ve});function Qf(t){return oc(t,"@NgModule"),t[Kf]||null}function On(t){return oc(t,"@Component"),t[qf]||null}function rc(t){return oc(t,"@Directive"),t[Yf]||null}function Zv(t){return oc(t,"@Pipe"),t[Zf]||null}function oc(t,n){if(t==null)throw new E(-919,!1)}function Jr(t){return typeof t=="string"?t:t==null?"":String(t)}var Kv=ve({ngErrorCode:ve}),iI=ve({ngErrorMessage:ve}),rI=ve({ngTokenPath:ve});function Xf(t,n){return Qv("",-200,n)}function sc(t,n){throw new E(-201,!1)}function Qv(t,n,e){let i=new E(n,t);return i[Kv]=n,i[iI]=t,e&&(i[rI]=e),i}function oI(t){return t[Kv]}var Nf;function Xv(){return Nf}function Rt(t){let n=Nf;return Nf=t,n}function Jf(t,n,e){let i=Ms(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;sc(t,"")}var sI={},Wi=sI,aI="__NG_DI_FLAG__",Ff=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=qi(e)||0;try{return this.injector.get(n,i&8?null:Wi,i)}catch(r){if(Kr(r))return r;throw r}}};function lI(t,n=0){let e=Yl();if(e===void 0)throw new E(-203,!1);if(e===null)return Jf(t,void 0,n);{let i=cI(n),r=e.retrieve(t,i);if(Kr(r)){if(i.optional)return null;throw r}return r}}function S(t,n=0){return(Xv()||lI)(qe(t),n)}function u(t,n){return S(t,qi(n))}function qi(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function cI(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Pf(t){let n=[];for(let e=0;e<t.length;e++){let i=qe(t[e]);if(Array.isArray(i)){if(i.length===0)throw new E(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],l=dI(a);typeof l=="number"?l===-1?r=a.token:o|=l:r=a}n.push(S(r,o))}else n.push(S(i))}return n}function dI(t){return t[aI]}function Yi(t,n){let e=t.hasOwnProperty(Cs);return e?t[Cs]:null}function Jv(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function ey(t){return t.flat(Number.POSITIVE_INFINITY)}function ac(t,n){t.forEach(e=>Array.isArray(e)?ac(e,n):n(e))}function eh(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Ts(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function ty(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function ny(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function lc(t,n,e){let i=eo(t,n);return i>=0?t[i|1]=e:(i=~i,ny(t,i,n,e)),i}function cc(t,n){let e=eo(t,n);if(e>=0)return t[e|1]}function eo(t,n){return uI(t,n,1)}function uI(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var Xt={},ut=[],Xi=new g(""),th=new g("",-1),nh=new g(""),ws=class{get(n,e=Wi){if(e===Wi){let r=Qv("",-201);throw r.name="\u0275NotFound",r}return e}};function Ji(t){return{\u0275providers:t}}function iy(...t){return{\u0275providers:ih(!0,t),\u0275fromNgModule:!0}}function ih(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return ac(n,s=>{let a=s;Ql(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&ry(r,o),e}function ry(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];rh(r,o=>{n(o,i)})}}function Ql(t,n,e,i){if(t=qe(t),!t)return!1;let r=null,o=Of(t),s=!o&&On(t);if(!o&&!s){let l=t.ngModule;if(o=Of(l),o)r=l;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)Ql(c,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let c;ac(o.imports,d=>{Ql(d,n,e,i)&&(c||=[],c.push(d))}),c!==void 0&&ry(c,n)}if(!a){let c=Yi(r)||(()=>new r);n({provide:r,useFactory:c,deps:ut},r),n({provide:nh,useValue:r,multi:!0},r),n({provide:Xi,useValue:()=>S(r),multi:!0},r)}let l=o.providers;if(l!=null&&!a){let c=t;rh(l,d=>{n(d,c)})}}else return!1;return r!==t&&t.providers!==void 0}function rh(t,n){for(let e of t)Wf(e)&&(e=e.\u0275providers),Array.isArray(e)?rh(e,n):n(e)}var fI=ve({provide:String,useValue:ve});function oy(t){return t!==null&&typeof t=="object"&&fI in t}function hI(t){return!!(t&&t.useExisting)}function pI(t){return!!(t&&t.useFactory)}function Zi(t){return typeof t=="function"}function sy(t){return!!t.useClass}var As=new g(""),Zl={},Gv={},kf;function to(){return kf===void 0&&(kf=new ws),kf}var ye=class{},Ki=class extends ye{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Vf(n,s=>this.processProvider(s)),this.records.set(th,Qr(void 0,this)),r.has("environment")&&this.records.set(ye,Qr(void 0,this));let o=this.records.get(As);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(nh,ut,{self:!0}))}retrieve(n,e){let i=qi(e)||0;try{return this.get(n,Wi,i)}catch(r){if(Kr(r))return r;throw r}}destroy(){Ds(this),this._destroyed=!0;let n=k(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),k(n)}}onDestroy(n){return Ds(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Ds(this);let e=yn(this),i=Rt(void 0),r;try{return n()}finally{yn(e),Rt(i)}}get(n,e=Wi,i){if(Ds(this),n.hasOwnProperty($v))return n[$v](this);let r=qi(i),o,s=yn(this),a=Rt(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let d=_I(n)&&Ms(n);d&&this.injectableDefInScope(d)?c=Qr(Lf(n),Zl):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?to():this.parent;return e=r&8&&e===Wi?null:e,l.get(n,e)}catch(l){let c=oI(l);throw c===-200||c===-201?new E(c,null):l}finally{Rt(a),yn(s)}}resolveInjectorInitializers(){let n=k(null),e=yn(this),i=Rt(void 0),r;try{let o=this.get(Xi,ut,{self:!0});for(let s of o)s()}finally{yn(e),Rt(i),k(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=qe(n);let e=Zi(n)?n:qe(n&&n.provide),i=gI(n);if(!Zi(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Qr(void 0,Zl,!0),r.factory=()=>Pf(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=k(null);try{if(e.value===Gv)throw Xf("");return e.value===Zl&&(e.value=Gv,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&yI(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{k(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=qe(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Lf(t){let n=Ms(t),e=n!==null?n.factory:Yi(t);if(e!==null)return e;if(t instanceof g)throw new E(-204,!1);if(t instanceof Function)return mI(t);throw new E(-204,!1)}function mI(t){if(t.length>0)throw new E(-204,!1);let e=nI(t);return e!==null?()=>e.factory(t):()=>new t}function gI(t){if(oy(t))return Qr(void 0,t.useValue);{let n=oh(t);return Qr(n,Zl)}}function oh(t,n,e){let i;if(Zi(t)){let r=qe(t);return Yi(r)||Lf(r)}else if(oy(t))i=()=>qe(t.useValue);else if(pI(t))i=()=>t.useFactory(...Pf(t.deps||[]));else if(hI(t))i=(r,o)=>S(qe(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=qe(t&&(t.useClass||t.provide));if(vI(t))i=()=>new r(...Pf(t.deps));else return Yi(r)||Lf(r)}return i}function Ds(t){if(t.destroyed)throw new E(-205,!1)}function Qr(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function vI(t){return!!t.deps}function yI(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function _I(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Vf(t,n){for(let e of t)Array.isArray(e)?Vf(e,n):e&&Wf(e)?Vf(e.\u0275providers,n):n(e)}function et(t,n){let e;t instanceof Ki?(Ds(t),e=t):e=new Ff(t);let i,r=yn(e),o=Rt(void 0);try{return n()}finally{yn(r),Rt(o)}}function ay(){return Xv()!==void 0||Yl()!=null}var Jt=0,F=1,G=2,Ye=3,Bt=4,pt=5,er=6,no=7,Pe=8,Nn=9,en=10,Ce=11,io=12,sh=13,tr=14,mt=15,ci=16,nr=17,bn=18,Fn=19,ah=20,kn=21,dc=22,si=23,kt=24,ir=25,di=26,Te=27,ly=1,lh=6,ui=7,Rs=8,rr=9,Oe=10;function Pn(t){return Array.isArray(t)&&typeof t[ly]=="object"}function tn(t){return Array.isArray(t)&&t[ly]===!0}function ch(t){return(t.flags&4)!==0}function Ln(t){return t.componentOffset>-1}function ro(t){return(t.flags&1)===1}function nn(t){return!!t.template}function oo(t){return(t[G]&512)!==0}function or(t){return(t[G]&256)===256}var dh="svg",cy="math";function Ht(t){for(;Array.isArray(t);)t=t[Jt];return t}function uh(t,n){return Ht(n[t])}function rn(t,n){return Ht(n[t.index])}function uc(t,n){return t.data[n]}function fh(t,n){return t[n]}function fc(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function Ut(t,n){let e=n[t];return Pn(e)?e:e[Jt]}function dy(t){return(t[G]&4)===4}function hc(t){return(t[G]&128)===128}function uy(t){return tn(t[Ye])}function Ot(t,n){return n==null?null:t[n]}function hh(t){t[nr]=0}function ph(t){t[G]&1024||(t[G]|=1024,hc(t)&&sr(t))}function fy(t,n){for(;t>0;)n=n[tr],t--;return n}function ks(t){return!!(t[G]&9216||t[kt]?.dirty)}function pc(t){t[en].changeDetectionScheduler?.notify(8),t[G]&64&&(t[G]|=1024),ks(t)&&sr(t)}function sr(t){t[en].changeDetectionScheduler?.notify(0);let n=ai(t);for(;n!==null&&!(n[G]&8192||(n[G]|=8192,!hc(n)));)n=ai(n)}function mh(t,n){if(or(t))throw new E(911,!1);t[kn]===null&&(t[kn]=[]),t[kn].push(n)}function hy(t,n){if(t[kn]===null)return;let e=t[kn].indexOf(n);e!==-1&&t[kn].splice(e,1)}function ai(t){let n=t[Ye];return tn(n)?n[Ye]:n}function gh(t){return t[no]??=[]}function vh(t){return t.cleanup??=[]}function py(t,n,e,i){let r=gh(n);r.push(e),t.firstCreatePass&&vh(t).push(i,r.length-1)}var te={lFrame:Iy(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var jf=!1;function my(){return te.lFrame.elementDepthCount}function gy(){te.lFrame.elementDepthCount++}function yh(){te.lFrame.elementDepthCount--}function mc(){return te.bindingsEnabled}function _h(){return te.skipHydrationRootTNode!==null}function bh(t){return te.skipHydrationRootTNode===t}function Dh(){te.skipHydrationRootTNode=null}function B(){return te.lFrame.lView}function Ee(){return te.lFrame.tView}function on(t){return te.lFrame.contextLView=t,t[Pe]}function sn(t){return te.lFrame.contextLView=null,t}function tt(){let t=Ch();for(;t!==null&&t.type===64;)t=t.parent;return t}function Ch(){return te.lFrame.currentTNode}function vy(){let t=te.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function ar(t,n){let e=te.lFrame;e.currentTNode=t,e.isParent=n}function wh(){return te.lFrame.isParent}function Eh(){te.lFrame.isParent=!1}function Ih(){return te.lFrame.contextLView}function xh(){return jf}function Es(t){let n=jf;return jf=t,n}function yy(){return te.lFrame.bindingIndex}function _y(t){return te.lFrame.bindingIndex=t}function fi(){return te.lFrame.bindingIndex++}function gc(t){let n=te.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function by(){return te.lFrame.inI18n}function Dy(t,n){let e=te.lFrame;e.bindingIndex=e.bindingRootIndex=t,vc(n)}function Cy(){return te.lFrame.currentDirectiveIndex}function vc(t){te.lFrame.currentDirectiveIndex=t}function wy(t){let n=te.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function yc(){return te.lFrame.currentQueryIndex}function Os(t){te.lFrame.currentQueryIndex=t}function bI(t){let n=t[F];return n.type===2?n.declTNode:n.type===1?t[pt]:null}function Sh(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=bI(o),r===null||(o=o[tr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=te.lFrame=Ey();return i.currentTNode=n,i.lView=t,!0}function _c(t){let n=Ey(),e=t[F];te.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Ey(){let t=te.lFrame,n=t===null?null:t.child;return n===null?Iy(t):n}function Iy(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function xy(){let t=te.lFrame;return te.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Mh=xy;function bc(){let t=xy();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Sy(t){return(te.lFrame.contextLView=fy(t,te.lFrame.contextLView))[Pe]}function an(){return te.lFrame.selectedIndex}function hi(t){te.lFrame.selectedIndex=t}function Ns(){let t=te.lFrame;return uc(t.tView,t.selectedIndex)}function Vn(){te.lFrame.currentNamespace=dh}function Dc(){DI()}function DI(){te.lFrame.currentNamespace=null}function My(){return te.lFrame.currentNamespace}var Ty=!0;function Cc(){return Ty}function Fs(t){Ty=t}function Bf(t,n=null,e=null,i){let r=Th(t,n,e,i);return r.resolveInjectorInitializers(),r}function Th(t,n=null,e=null,i,r=new Set){let o=[e||ut,iy(t)],s;return new Ki(o,n||to(),s||null,r)}var U=class t{static THROW_IF_NOT_FOUND=Wi;static NULL=new ws;static create(n,e){if(Array.isArray(n))return Bf({name:""},e,n,"");{let i=n.name??"";return Bf({name:i},n.parent,n.providers,i)}}static \u0275prov=y({token:t,providedIn:"any",factory:()=>S(th)});static __NG_ELEMENT_ID__=-1},H=new g(""),Nt=(()=>{class t{static __NG_ELEMENT_ID__=CI;static __NG_ENV_ID__=e=>e}return t})(),Xl=class extends Nt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return or(this._lView)}onDestroy(n){let e=this._lView;return mh(e,n),()=>hy(e,n)}};function CI(){return new Xl(B())}var Ay=!1,Ry=new g(""),jn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new We(!1);debugTaskTracker=u(Ry,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new q(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=y({token:t,providedIn:"root",factory:()=>new t})}return t})(),Hf=class extends w{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,ay()&&(this.destroyRef=u(Nt,{optional:!0})??void 0,this.pendingTasks=u(jn,{optional:!0})??void 0)}emit(n){let e=k(null);try{super.next(n)}finally{k(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof oe&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},N=Hf;function Jl(...t){}function Ah(t){let n,e;function i(){t=Jl;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function ky(t){return queueMicrotask(()=>t()),()=>{t=Jl}}var Rh="isAngularZone",Is=Rh+"_ID",wI=0,M=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new N(!1);onMicrotaskEmpty=new N(!1);onStable=new N(!1);onError=new N(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=Ay}=n;if(typeof Zone>"u")throw new E(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,xI(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Rh)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new E(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new E(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,EI,Jl,Jl);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},EI={};function kh(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function II(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Ah(()=>{t.callbackScheduled=!1,Uf(t),t.isCheckStableRunning=!0,kh(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Uf(t)}function xI(t){let n=()=>{II(t)},e=wI++;t._inner=t._inner.fork({name:"angular",properties:{[Rh]:!0,[Is]:e,[Is+e]:!0},onInvokeTask:(i,r,o,s,a,l)=>{if(SI(l))return i.invokeTask(o,s,a,l);try{return Wv(t),i.invokeTask(o,s,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),qv(t)}},onInvoke:(i,r,o,s,a,l,c)=>{try{return Wv(t),i.invoke(o,s,a,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!MI(l)&&n(),qv(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,Uf(t),kh(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function Uf(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Wv(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function qv(t){t._nesting--,kh(t)}var xs=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new N;onMicrotaskEmpty=new N;onStable=new N;onError=new N;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function SI(t){return Oy(t,"__ignore_ng_zone__")}function MI(t){return Oy(t,"__scheduler_tick__")}function Oy(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Ct=class{_console=console;handleError(n){this._console.error("ERROR",n)}},ln=new g("",{factory:()=>{let t=u(M),n=u(ye),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(Ct),e.handleError(i))})}}}),Ny={provide:Xi,useValue:()=>{let t=u(Ct,{optional:!0})},multi:!0};function ee(t,n){let[e,i,r]=pf(t,n?.equal),o=e,s=o[Ge];return o.set=i,o.update=r,o.asReadonly=Fy.bind(o),o}function Fy(){let t=this[Ge];if(t.readonlyFn===void 0){let n=()=>this();n[Ge]=t,t.readonlyFn=n}return t.readonlyFn}var so=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=TI}return t})();function TI(){return new so(B(),tt())}var _n=class{},Ps=new g("",{factory:()=>!0});var Oh=new g(""),wc=(()=>{class t{internalPendingTasks=u(jn);scheduler=u(_n);errorHandler=u(ln);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=y({token:t,providedIn:"root",factory:()=>new t})}return t})(),Ec=(()=>{class t{static \u0275prov=y({token:t,providedIn:"root",factory:()=>new zf})}return t})(),zf=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},ec=class{[Ge];constructor(n){this[Ge]=n}destroy(){this[Ge].destroy()}};function Dn(t,n){let e=n?.injector??u(U),i=n?.manualCleanup!==!0?e.get(Nt):null,r,o=e.get(so,null,{optional:!0}),s=e.get(_n);return o!==null?(r=kI(o.view,s,t),i instanceof Xl&&i._lView===o.view&&(i=null)):r=OI(t,e.get(Ec),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new ec(r)}var Py=Y(v({},gf),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Es(!1);try{vf(this)}finally{Es(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=k(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],k(t)}}}),AI=Y(v({},Py),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(ri(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),RI=Y(v({},Py),{consumerMarkedDirty(){this.view[G]|=8192,sr(this.view),this.notifier.notify(13)},destroy(){if(ri(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[si]?.delete(this)}});function kI(t,n,e){let i=Object.create(RI);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=Ly(i,e),t[si]??=new Set,t[si].add(i),i.consumerMarkedDirty(i),i}function OI(t,n,e){let i=Object.create(AI);return i.fn=Ly(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function Ly(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Ws(t){return{toString:t}.toString()}function jI(t){return typeof t=="function"}function y_(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var kc=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Le=(()=>{let t=()=>__;return t.ngInherit=!0,t})();function __(t){return t.type.prototype.ngOnChanges&&(t.setInput=HI),BI}function BI(){let t=D_(this),n=t?.current;if(n){let e=t.previous;if(e===Xt)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function HI(t,n,e,i,r){let o=this.declaredInputs[i],s=D_(t)||UI(t,{previous:Xt,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new kc(c&&c.currentValue,e,l===Xt),y_(t,n,r,e)}var b_="__ngSimpleChanges__";function D_(t){return t[b_]||null}function UI(t,n){return t[b_]=n}var Vy=[];var _e=function(t,n=null,e){for(let i=0;i<Vy.length;i++){let r=Vy[i];r(t,n,e)}},ue=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(ue||{});function zI(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=__(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function C_(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Mc(t,n,e){w_(t,n,3,e)}function Tc(t,n,e,i){(t[G]&3)===e&&w_(t,n,e,i)}function Nh(t,n){let e=t[G];(e&3)===n&&(e&=16383,e+=1,t[G]=e)}function w_(t,n,e,i){let r=i!==void 0?t[nr]&65535:0,o=i??-1,s=n.length-1,a=0;for(let l=r;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],i!=null&&a>=i)break}else n[l]<0&&(t[nr]+=65536),(a<o||o==-1)&&($I(t,e,n,l),t[nr]=(t[nr]&4294901760)+l+2),l++}function jy(t,n){_e(ue.LifecycleHookStart,t,n);let e=k(null);try{n.call(t)}finally{k(e),_e(ue.LifecycleHookEnd,t,n)}}function $I(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[G]>>14<t[nr]>>16&&(t[G]&3)===n&&(t[G]+=16384,jy(a,o)):jy(a,o)}var lo=-1,cr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function GI(t){return(t.flags&8)!==0}function WI(t){return(t.flags&16)!==0}function qI(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];YI(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function E_(t){return t===3||t===4||t===6}function YI(t){return t.charCodeAt(0)===64}function co(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?By(t,e,r,null,n[++i]):By(t,e,r,null,null))}}return t}function By(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function I_(t){return t!==lo}function Oc(t){return t&32767}function ZI(t){return t>>16}function Nc(t,n){let e=ZI(t),i=n;for(;e>0;)i=i[tr],e--;return i}var Gh=!0;function Hy(t){let n=Gh;return Gh=t,n}var KI=256,x_=KI-1,S_=5,QI=0,Cn={};function XI(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Qi)&&(i=e[Qi]),i==null&&(i=e[Qi]=QI++);let r=i&x_,o=1<<r;n.data[t+(r>>S_)]|=o}function Fc(t,n){let e=M_(t,n);if(e!==-1)return e;let i=n[F];i.firstCreatePass&&(t.injectorIndex=n.length,Fh(i.data,t),Fh(n,null),Fh(i.blueprint,null));let r=Mp(t,n),o=t.injectorIndex;if(I_(r)){let s=Oc(r),a=Nc(r,n),l=a[F].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=r,o}function Fh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function M_(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Mp(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=O_(r),i===null)return lo;if(e++,r=r[tr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return lo}function Wh(t,n,e){XI(t,n,e)}function JI(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(E_(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function T_(t,n,e){if(e&8||t!==void 0)return t;sc(n,"NodeInjector")}function A_(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Nn],o=Rt(void 0);try{return r?r.get(n,i,e&8):Jf(n,i,e&8)}finally{Rt(o)}}return T_(i,n,e)}function R_(t,n,e,i=0,r){if(t!==null){if(n[G]&2048&&!(i&2)){let s=ix(t,n,e,i,Cn);if(s!==Cn)return s}let o=k_(t,n,e,i,Cn);if(o!==Cn)return o}return A_(n,e,i,r)}function k_(t,n,e,i,r){let o=tx(e);if(typeof o=="function"){if(!Sh(n,t,i))return i&1?T_(r,e,i):A_(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))sc(e);else return s}finally{Mh()}}else if(typeof o=="number"){let s=null,a=M_(t,n),l=lo,c=i&1?n[mt][pt]:null;for((a===-1||i&4)&&(l=a===-1?Mp(t,n):n[a+8],l===lo||!zy(i,!1)?a=-1:(s=n[F],a=Oc(l),n=Nc(l,n)));a!==-1;){let d=n[F];if(Uy(o,a,d.data)){let f=ex(a,n,e,s,i,c);if(f!==Cn)return f}l=n[a+8],l!==lo&&zy(i,n[F].data[a+8]===c)&&Uy(o,a,n)?(s=d,a=Oc(l),n=Nc(l,n)):a=-1}}return r}function ex(t,n,e,i,r,o){let s=n[F],a=s.data[t+8],l=i==null?Ln(a)&&Gh:i!=s&&(a.type&3)!==0,c=r&1&&o===a,d=Ac(a,s,e,l,c);return d!==null?Bs(n,s,d,a,r):Cn}function Ac(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,f=i?a:a+d,h=r?a+d:c;for(let p=f;p<h;p++){let m=s[p];if(p<l&&e===m||p>=l&&m.type===e)return p}if(r){let p=s[l];if(p&&nn(p)&&p.type===e)return l}return null}function Bs(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof cr){let a=o;if(a.resolving)throw Xf("");let l=Hy(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],d,f=a.injectImpl?Rt(a.injectImpl):null,h=Sh(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&zI(e,s[e],n)}finally{f!==null&&Rt(f),Hy(l),a.resolving=!1,Mh()}}return o}function tx(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Qi)?t[Qi]:void 0;return typeof n=="number"?n>=0?n&x_:nx:n}function Uy(t,n,e){let i=1<<t;return!!(e[n+(t>>S_)]&i)}function zy(t,n){return!(t&2)&&!(t&1&&n)}var lr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return R_(this._tNode,this._lView,n,qi(i),e)}};function nx(){return new lr(tt(),B())}function gt(t){return Ws(()=>{let n=t.prototype.constructor,e=n[Cs]||qh(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Cs]||qh(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function qh(t){return $f(t)?()=>{let n=qh(qe(t));return n&&n()}:Yi(t)}function ix(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[G]&2048&&!oo(s);){let a=k_(o,s,e,i|2,Cn);if(a!==Cn)return a;let l=o.parent;if(!l){let c=s[ah];if(c){let d=c.get(e,Cn,i&-5);if(d!==Cn)return d}l=O_(s),s=s[tr]}o=l}return r}function O_(t){let n=t[F],e=n.type;return e===2?n.declTNode:e===1?t[pt]:null}function Tp(t){return JI(tt(),t)}function rx(){return mo(tt(),B())}function mo(t,n){return new L(rn(t,n))}var L=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=rx}return t})();function N_(t){return t instanceof L?t.nativeElement:t}function ox(){return this._results[Symbol.iterator]()}var dr=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new w}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=ey(n);(this._changesDetected=!Jv(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=ox};function F_(t){return(t.flags&128)===128}var Ap=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Ap||{}),P_=new Map,sx=0;function ax(){return sx++}function lx(t){P_.set(t[Fn],t)}function Yh(t){P_.delete(t[Fn])}var $y="__ngContext__";function uo(t,n){Pn(n)?(t[$y]=n[Fn],lx(n)):t[$y]=n}function L_(t){return j_(t[io])}function V_(t){return j_(t[Bt])}function j_(t){for(;t!==null&&!tn(t);)t=t[Bt];return t}var cx;function Rp(t){cx=t}var go=new g("",{factory:()=>dx}),dx="ng";var Yc=new g(""),pr=new g("",{providedIn:"platform",factory:()=>"unknown"}),qs=new g(""),vo=new g("",{factory:()=>u(H).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var B_="r";var H_="di";var U_=!1,z_=new g("",{factory:()=>U_});var ux=(t,n,e,i)=>{};function fx(t,n,e,i){ux(t,n,e,i)}function Zc(t){return(t.flags&32)===32}var hx=()=>null;function $_(t,n,e=!1){return hx(t,n,e)}function G_(t,n){let e=t.contentQueries;if(e!==null){let i=k(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];Os(o),a.contentQueries(2,n[s],s)}}}finally{k(i)}}}function Zh(t,n,e){Os(0);let i=k(null);try{n(t,e)}finally{k(i)}}function kp(t,n,e){if(ch(n)){let i=k(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{k(i)}}}var un=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(un||{});var Ic;function px(){if(Ic===void 0&&(Ic=null,Xr.trustedTypes))try{Ic=Xr.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Ic}function Kc(t){return px()?.createHTML(t)||t}var Bn=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${tc})`}},Kh=class extends Bn{getTypeName(){return"HTML"}},Qh=class extends Bn{getTypeName(){return"Style"}},Xh=class extends Bn{getTypeName(){return"Script"}},Jh=class extends Bn{getTypeName(){return"URL"}},ep=class extends Bn{getTypeName(){return"ResourceURL"}};function In(t){return t instanceof Bn?t.changingThisBreaksApplicationSecurity:t}function mi(t,n){let e=W_(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${tc})`)}return e===n}function W_(t){return t instanceof Bn&&t.getTypeName()||null}function Op(t){return new Kh(t)}function Np(t){return new Qh(t)}function Fp(t){return new Xh(t)}function Pp(t){return new Jh(t)}function Lp(t){return new ep(t)}function mx(t){let n=new np(t);return gx()?new tp(n):n}var tp=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Kc(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},np=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Kc(n),e}};function gx(){try{return!!new window.DOMParser().parseFromString(Kc(""),"text/html")}catch{return!1}}var vx=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Ys(t){return t=String(t),t.match(vx)?t:"unsafe:"+t}function Hn(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Zs(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var q_=Hn("area,br,col,hr,img,wbr"),Y_=Hn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Z_=Hn("rp,rt"),yx=Zs(Z_,Y_),_x=Zs(Y_,Hn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),bx=Zs(Z_,Hn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Gy=Zs(q_,_x,bx,yx),K_=Hn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Dx=Hn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Cx=Hn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),wx=Zs(K_,Dx,Cx),Ex=Hn("script,style,template");var ip=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=Sx(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=xx(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=Wy(n).toLowerCase();if(!Gy.hasOwnProperty(e))return this.sanitizedSomething=!0,!Ex.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!wx.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=o.value;K_[a]&&(l=Ys(l)),this.buf.push(" ",s,'="',qy(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=Wy(n).toLowerCase();Gy.hasOwnProperty(e)&&!q_.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(qy(n))}};function Ix(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function xx(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw Q_(n);return n}function Sx(t){let n=t.firstChild;if(n&&Ix(t,n))throw Q_(n);return n}function Wy(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function Q_(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var Mx=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Tx=/([^\#-~ |!])/g;function qy(t){return t.replace(/&/g,"&amp;").replace(Mx,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(Tx,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var xc;function Vp(t,n){let e=null;try{xc=xc||mx(t);let i=n?String(n):"";e=xc.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=xc.getInertBodyElement(i)}while(i!==o);let a=new ip().sanitizeChildren(Yy(e)||e);return Kc(a)}finally{if(e){let i=Yy(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function Yy(t){return"content"in t&&Ax(t)?t.content:null}function Ax(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var Rx=/^>|^->|<!--|-->|--!>|<!-$/g,kx=/(<|>)/g,Ox="\u200B$1\u200B";function Nx(t){return t.replace(Rx,n=>n.replace(kx,Ox))}function Fx(t,n){return t.createText(n)}function Px(t,n,e){t.setValue(n,e)}function Lx(t,n){return t.createComment(Nx(n))}function X_(t,n,e){return t.createElement(n,e)}function Pc(t,n,e,i,r){t.insertBefore(n,e,i,r)}function J_(t,n,e){t.appendChild(n,e)}function Zy(t,n,e,i,r){i!==null?Pc(t,n,e,i,r):J_(t,n,e)}function eb(t,n,e,i){t.removeChild(null,n,e,i)}function Vx(t,n,e){t.setAttribute(n,"style",e)}function jx(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function tb(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&qI(t,n,i),r!==null&&jx(t,n,r),o!==null&&Vx(t,n,o)}var nt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(nt||{});function jp(t){let n=Bx();return n?n.sanitize(nt.URL,t)||"":mi(t,"URL")?In(t):Ys(Jr(t))}function Bx(){let t=B();return t&&t[en].sanitizer}function nb(t){return t instanceof Function?t():t}function Hx(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var ib="ng-template";function Ux(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&Hx(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Bp(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Bp(t){return t.type===4&&t.value!==ib}function zx(t,n,e){let i=t.type===4&&!e?ib:t.value;return n===i}function $x(t,n,e){let i=4,r=t.attrs,o=r!==null?qx(r):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!cn(i)&&!cn(l))return!1;if(s&&cn(l))continue;s=!1,i=l|i&1;continue}if(!s)if(i&4){if(i=2|i&1,l!==""&&!zx(t,l,e)||l===""&&n.length===1){if(cn(i))return!1;s=!0}}else if(i&8){if(r===null||!Ux(t,r,l,e)){if(cn(i))return!1;s=!0}}else{let c=n[++a],d=Gx(l,r,Bp(t),e);if(d===-1){if(cn(i))return!1;s=!0;continue}if(c!==""){let f;if(d>o?f="":f=r[d+1].toLowerCase(),i&2&&c!==f){if(cn(i))return!1;s=!0}}}}return cn(i)||s}function cn(t){return(t&1)===0}function Gx(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return Yx(n,t)}function rb(t,n,e=!1){for(let i=0;i<n.length;i++)if($x(t,n[i],e))return!0;return!1}function Wx(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function qx(t){for(let n=0;n<t.length;n++){let e=t[n];if(E_(e))return n}return t.length}function Yx(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function Zx(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function Ky(t,n){return t?":not("+n.trim()+")":n}function Kx(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!cn(s)&&(n+=Ky(o,r),r=""),i=s,o=o||!cn(i);e++}return r!==""&&(n+=Ky(o,r)),n}function Qx(t){return t.map(Kx).join(",")}function Xx(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!cn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Ft={};function Hp(t,n,e,i,r,o,s,a,l,c,d){let f=Te+i,h=f+r,p=Jx(f,h),m=typeof c=="function"?c():c;return p[F]={type:t,blueprint:p,template:e,queries:null,viewQuery:a,declTNode:n,data:p.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:m,incompleteFirstPass:!1,ssrId:d}}function Jx(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Ft);return e}function eS(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Hp(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Up(t,n,e,i,r,o,s,a,l,c,d){let f=n.blueprint.slice();return f[Jt]=r,f[G]=i|4|128|8|64|1024,(c!==null||t&&t[G]&2048)&&(f[G]|=2048),hh(f),f[Ye]=f[tr]=t,f[Pe]=e,f[en]=s||t&&t[en],f[Ce]=a||t&&t[Ce],f[Nn]=l||t&&t[Nn]||null,f[pt]=o,f[Fn]=ax(),f[er]=d,f[ah]=c,f[mt]=n.type==2?t[mt]:f,f}function tS(t,n,e){let i=rn(n,t),r=eS(e),o=t[en].rendererFactory,s=zp(t,Up(t,r,null,ob(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function ob(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function sb(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function zp(t,n){return t[io]?t[sh][Bt]=n:t[io]=n,t[sh]=n,n}function D(t=1){ab(Ee(),B(),an()+t,!1)}function ab(t,n,e,i){if(!i)if((n[G]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Mc(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Tc(n,o,0,e)}hi(e)}var Qc=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Qc||{});function rp(t,n,e,i){let r=k(null);try{let[o,s,a]=t.inputs[e],l=null;(s&Qc.SignalBased)!==0&&(l=n[o][Ge]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):y_(n,l,o,i)}finally{k(r)}}var wn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(wn||{}),nS;function $p(t,n){return nS(t,n)}var nz=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var op=new WeakMap,Ls=new WeakSet;function iS(t,n){let e=op.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),Ls.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&s===r||a&&i&&a!==i)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function rS(t,n){let e=op.get(t);e?e.includes(n)||e.push(n):op.set(t,[n])}var ur=new Set,Xc=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Xc||{}),hn=new g(""),Qy=new Set;function Un(t){Qy.has(t)||(Qy.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Jc=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=y({token:t,providedIn:"root",factory:()=>new t})}return t})(),Gp=[0,1,2,3],Wp=(()=>{class t{ngZone=u(M);scheduler=u(_n);errorHandler=u(Ct,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(hn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&_e(ue.AfterRenderHooksStart),this.executing=!0;for(let i of Gp)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&_e(ue.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[ir]??=[]).push(e),sr(i),i[G]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Xc.AFTER_NEXT_RENDER,e):e()}static \u0275prov=y({token:t,providedIn:"root",factory:()=>new t})}return t})(),Hs=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[ir];n&&(this.view[ir]=n.filter(e=>e!==this))}};function It(t,n){let e=n?.injector??u(U);return Un("NgAfterNextRender"),sS(t,e,n,!0)}function oS(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function sS(t,n,e,i){let r=n.get(Jc);r.impl??=n.get(Wp);let o=n.get(hn,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(Nt):null,a=n.get(so,null,{optional:!0}),l=new Hs(r.impl,oS(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(l),l}var lb=new g("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(ye)})});function cb(t,n,e){let i=t.get(lb);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function aS(t,n){let e=t.get(lb);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function lS(t,n){for(let[e,i]of n)cb(t,i.animateFns)}function Xy(t,n,e,i){let r=t?.[di]?.enter;n!==null&&r&&r.has(e.index)&&lS(i,r)}function ao(t,n,e,i,r,o,s,a){if(r!=null){let l,c=!1;tn(r)?l=r:Pn(r)&&(c=!0,r=r[Jt]);let d=Ht(r);t===0&&i!==null?(Xy(a,i,o,e),s==null?J_(n,i,d):Pc(n,i,d,s||null,!0)):t===1&&i!==null?(Xy(a,i,o,e),Pc(n,i,d,s||null,!0),iS(o,d)):t===2?(a?.[di]?.leave?.has(o.index)&&rS(o,d),Ls.delete(d),Jy(a,o,e,f=>{if(Ls.has(d)){Ls.delete(d);return}eb(n,d,c,f)})):t===3&&(Ls.delete(d),Jy(a,o,e,()=>{n.destroyNode(d)})),l!=null&&_S(n,t,e,l,o,i,s)}}function cS(t,n){db(t,n),n[Jt]=null,n[pt]=null}function dS(t,n,e,i,r,o){i[Jt]=r,i[pt]=n,td(t,i,e,1,r,o)}function db(t,n){n[en].changeDetectionScheduler?.notify(9),td(t,n,n[Ce],2,null,null)}function uS(t){let n=t[io];if(!n)return Ph(t[F],t);for(;n;){let e=null;if(Pn(n))e=n[io];else{let i=n[Oe];i&&(e=i)}if(!e){for(;n&&!n[Bt]&&n!==t;)Pn(n)&&Ph(n[F],n),n=n[Ye];n===null&&(n=t),Pn(n)&&Ph(n[F],n),e=n&&n[Bt]}n=e}}function qp(t,n){let e=t[rr],i=e.indexOf(n);e.splice(i,1)}function ed(t,n){if(or(n))return;let e=n[Ce];e.destroyNode&&td(t,n,e,3,null,null),uS(n)}function Ph(t,n){if(or(n))return;let e=k(null);try{n[G]&=-129,n[G]|=256,n[kt]&&ri(n[kt]),pS(t,n),hS(t,n),n[F].type===1&&n[Ce].destroy();let i=n[ci];if(i!==null&&tn(n[Ye])){i!==n[Ye]&&qp(i,n);let r=n[bn];r!==null&&r.detachView(t)}Yh(n)}finally{k(e)}}function Jy(t,n,e,i){let r=t?.[di];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&ur.add(t[Fn]),cb(e,()=>{if(r.leave&&r.leave.has(n.index)){let s=r.leave.get(n.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:d}=c();a.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),fS(t,i)}else t&&ur.delete(t[Fn]),i(!1)},r)}function fS(t,n){let e=t[di]?.running;if(e){e.then(()=>{t[di].running=void 0,ur.delete(t[Fn]),n(!0)});return}n(!1)}function hS(t,n){let e=t.cleanup,i=n[no];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[no]=null);let r=n[kn];if(r!==null){n[kn]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[si];if(o!==null){n[si]=null;for(let s of o)s.destroy()}}function pS(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof cr)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],l=o[s+1];_e(ue.LifecycleHookStart,a,l);try{l.call(a)}finally{_e(ue.LifecycleHookEnd,a,l)}}else{_e(ue.LifecycleHookStart,r,o);try{o.call(r)}finally{_e(ue.LifecycleHookEnd,r,o)}}}}}function ub(t,n,e){return mS(t,n.parent,e)}function mS(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Jt];if(Ln(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===un.None||r===un.Emulated)return null}return rn(i,e)}function fb(t,n,e){return vS(t,n,e)}function gS(t,n,e){return t.type&40?rn(t,e):null}var vS=gS,e_;function Yp(t,n,e,i){let r=ub(t,i,n),o=n[Ce],s=i.parent||n[pt],a=fb(s,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)Zy(o,r,e[l],a,!1);else Zy(o,r,e,a,!1);e_!==void 0&&e_(o,i,n,e,r)}function Vs(t,n){if(n!==null){let e=n.type;if(e&3)return rn(n,t);if(e&4)return sp(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Vs(t,i);{let r=t[n.index];return tn(r)?sp(-1,r):Ht(r)}}else{if(e&128)return Vs(t,n.next);if(e&32)return $p(n,t)()||Ht(t[n.index]);{let i=hb(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=ai(t[mt]);return Vs(r,i)}else return Vs(t,n.next)}}}return null}function hb(t,n){if(n!==null){let i=t[mt][pt],r=n.projection;return i.projection[r]}return null}function sp(t,n){let e=Oe+t+1;if(e<n.length){let i=n[e],r=i[F].firstChild;if(r!==null)return Vs(i,r)}return n[ui]}function Zp(t,n,e,i,r,o,s){for(;e!=null;){let a=i[Nn];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(s&&n===0&&(l&&uo(Ht(l),i),e.flags|=2),!Zc(e))if(c&8)Zp(t,n,e.child,i,r,o,!1),ao(n,t,a,r,l,e,o,i);else if(c&32){let d=$p(e,i),f;for(;f=d();)ao(n,t,a,r,f,e,o,i);ao(n,t,a,r,l,e,o,i)}else c&16?pb(t,n,i,e,r,o):ao(n,t,a,r,l,e,o,i);e=s?e.projectionNext:e.next}}function td(t,n,e,i,r,o){Zp(e,i,t.firstChild,n,r,o,!1)}function yS(t,n,e){let i=n[Ce],r=ub(t,e,n),o=e.parent||n[pt],s=fb(o,e,n);pb(i,0,n,e,r,s)}function pb(t,n,e,i,r,o){let s=e[mt],l=s[pt].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];ao(n,t,e[Nn],r,d,i,o,e)}else{let c=l,d=s[Ye];F_(i)&&(c.flags|=128),Zp(t,n,c,d,r,o,!0)}}function _S(t,n,e,i,r,o,s){let a=i[ui],l=Ht(i);a!==l&&ao(n,t,e,o,a,r,s);for(let c=Oe;c<i.length;c++){let d=i[c];td(d[F],d,t,n,o,a)}}function bS(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:wn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=wn.Important),t.setStyle(e,i,r,o))}}function mb(t,n,e,i,r){let o=an(),s=i&2;try{hi(-1),s&&n.length>Te&&ab(t,n,Te,!1);let a=s?ue.TemplateUpdateStart:ue.TemplateCreateStart;_e(a,r,e),e(i,r)}finally{hi(o);let a=s?ue.TemplateUpdateEnd:ue.TemplateCreateEnd;_e(a,r,e)}}function nd(t,n,e){xS(t,n,e),(e.flags&64)===64&&SS(t,n,e)}function Ks(t,n,e=rn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function DS(t,n,e,i){let o=i.get(z_,U_)||e===un.ShadowDom||e===un.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return CS(s),s}function CS(t){wS(t)}var wS=()=>null;function ES(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function gb(t,n,e,i,r,o){let s=n[F];if(Jp(t,s,n,e,i)){Ln(t)&&IS(n,t.index);return}t.type&3&&(e=ES(e)),vb(t,n,e,i,r,o)}function vb(t,n,e,i,r,o){if(t.type&3){let s=rn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function IS(t,n){let e=Ut(n,t);e[G]&16||(e[G]|=64)}function xS(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Ln(e)&&tS(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Fc(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],l=Bs(n,t,s,e);if(uo(l,n),o!==null&&RS(n,s-i,l,a,e,o),nn(a)){let c=Ut(e.index,n);c[Pe]=Bs(n,t,s,e)}}}function SS(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=Cy();try{hi(o);for(let a=i;a<r;a++){let l=t.data[a],c=n[a];vc(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&MS(l,c)}}finally{hi(-1),vc(s)}}function MS(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Kp(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];rb(n,o.selectors,!1)&&(i??=[],nn(o)?i.unshift(o):i.push(o))}return i}function TS(t,n,e,i,r,o){let s=rn(t,n);AS(n[Ce],s,o,t.value,e,i,r)}function AS(t,n,e,i,r,o,s){if(o==null)t.removeAttribute(n,r,e);else{let a=s==null?Jr(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function RS(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];rp(i,e,l,c)}}function Qp(t,n,e,i,r){let o=Te+e,s=n[F],a=r(s,n,t,i,e);n[o]=a,ar(t,!0);let l=t.type===2;return l?(tb(n[Ce],a,t),(my()===0||ro(t))&&uo(a,n),gy()):uo(a,n),Cc()&&(!l||!Zc(t))&&Yp(s,n,a,t),t}function Xp(t){let n=t;return wh()?Eh():(n=n.parent,ar(n,!1)),n}function kS(t,n){let e=t[Nn];if(!e)return;let i;try{i=e.get(ln,null)}catch{i=null}i?.(n)}function Jp(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],f=n.data[c];rp(f,e[c],d,r),a=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];rp(d,c,i,r),a=!0}return a}function OS(t,n){let e=Ut(n,t),i=e[F];NS(i,e);let r=e[Jt];r!==null&&e[er]===null&&(e[er]=$_(r,e[Nn])),_e(ue.ComponentStart);try{em(i,e,e[Pe])}finally{_e(ue.ComponentEnd,e[Pe])}}function NS(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function em(t,n,e){_c(n);try{let i=t.viewQuery;i!==null&&Zh(1,i,e);let r=t.template;r!==null&&mb(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[bn]?.finishViewCreation(t),t.staticContentQueries&&G_(t,n),t.staticViewQueries&&Zh(2,t.viewQuery,e);let o=t.components;o!==null&&FS(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[G]&=-5,bc()}}function FS(t,n){for(let e=0;e<n.length;e++)OS(t,n[e])}function Qs(t,n,e,i){let r=k(null);try{let o=n.tView,a=t[G]&4096?4096:16,l=Up(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[ci]=c;let d=t[bn];return d!==null&&(l[bn]=d.createEmbeddedView(o)),em(o,l,e),l}finally{k(r)}}function fo(t,n){return!n||n.firstChild===null||F_(t)}function Us(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Ht(o)),tn(o)&&yb(o,i);let s=e.type;if(s&8)Us(t,n,e.child,i);else if(s&32){let a=$p(e,n),l;for(;l=a();)i.push(l)}else if(s&16){let a=hb(n,e);if(Array.isArray(a))i.push(...a);else{let l=ai(n[mt]);Us(l[F],l,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function yb(t,n){for(let e=Oe;e<t.length;e++){let i=t[e],r=i[F].firstChild;r!==null&&Us(i[F],i,r,n)}t[ui]!==t[Jt]&&n.push(t[ui])}function _b(t){if(t[ir]!==null){for(let n of t[ir])n.impl.addSequence(n);t[ir].length=0}}var bb=[];function PS(t){return t[kt]??LS(t)}function LS(t){let n=bb.pop()??Object.create(jS);return n.lView=t,n}function VS(t){t.lView[kt]!==t&&(t.lView=null,bb.push(t))}var jS=Y(v({},Ni),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{sr(t.lView)},consumerOnSignalRead(){this.lView[kt]=this}});function BS(t){let n=t[kt]??Object.create(HS);return n.lView=t,n}var HS=Y(v({},Ni),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=ai(t.lView);for(;n&&!Db(n[F]);)n=ai(n);n&&ph(n)},consumerOnSignalRead(){this.lView[kt]=this}});function Db(t){return t.type!==2}function Cb(t){if(t[si]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[si])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[G]&8192)}}var US=100;function wb(t,n=0){let i=t[en].rendererFactory,r=!1;r||i.begin?.();try{zS(t,n)}finally{r||i.end?.()}}function zS(t,n){let e=xh();try{Es(!0),ap(t,n);let i=0;for(;ks(t);){if(i===US)throw new E(103,!1);i++,ap(t,1)}}finally{Es(e)}}function $S(t,n,e,i){if(or(n))return;let r=n[G],o=!1,s=!1;_c(n);let a=!0,l=null,c=null;o||(Db(t)?(c=PS(n),l=ii(c)):fl()===null?(a=!1,c=BS(n),l=ii(c)):n[kt]&&(ri(n[kt]),n[kt]=null));try{hh(n),_y(t.bindingStartIndex),e!==null&&mb(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let p=t.preOrderCheckHooks;p!==null&&Mc(n,p,null)}else{let p=t.preOrderHooks;p!==null&&Tc(n,p,0,null),Nh(n,0)}if(s||GS(n),Cb(n),Eb(n,0),t.contentQueries!==null&&G_(t,n),!o)if(d){let p=t.contentCheckHooks;p!==null&&Mc(n,p)}else{let p=t.contentHooks;p!==null&&Tc(n,p,1),Nh(n,1)}qS(t,n);let f=t.components;f!==null&&xb(n,f,0);let h=t.viewQuery;if(h!==null&&Zh(2,h,i),!o)if(d){let p=t.viewCheckHooks;p!==null&&Mc(n,p)}else{let p=t.viewHooks;p!==null&&Tc(n,p,2),Nh(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[dc]){for(let p of n[dc])p();n[dc]=null}o||(_b(n),n[G]&=-73)}catch(d){throw o||sr(n),d}finally{c!==null&&(Pi(c,l),a&&VS(c)),bc()}}function Eb(t,n){for(let e=L_(t);e!==null;e=V_(e))for(let i=Oe;i<e.length;i++){let r=e[i];Ib(r,n)}}function GS(t){for(let n=L_(t);n!==null;n=V_(n)){if(!(n[G]&2))continue;let e=n[rr];for(let i=0;i<e.length;i++){let r=e[i];ph(r)}}}function WS(t,n,e){_e(ue.ComponentStart);let i=Ut(n,t);try{Ib(i,e)}finally{_e(ue.ComponentEnd,i[Pe])}}function Ib(t,n){hc(t)&&ap(t,n)}function ap(t,n){let i=t[F],r=t[G],o=t[kt],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&Hr(o)),s||=!1,o&&(o.dirty=!1),t[G]&=-9217,s)$S(i,t,i.template,t[Pe]);else if(r&8192){let a=k(null);try{Cb(t),Eb(t,1);let l=i.components;l!==null&&xb(t,l,1),_b(t)}finally{k(a)}}}function xb(t,n,e){for(let i=0;i<n.length;i++)WS(t,n[i],e)}function qS(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)hi(~r);else{let o=r,s=e[++i],a=e[++i];Dy(s,o);let l=n[o];_e(ue.HostBindingsUpdateStart,l);try{a(2,l)}finally{_e(ue.HostBindingsUpdateEnd,l)}}}}finally{hi(-1)}}function tm(t,n){let e=xh()?64:1088;for(t[en].changeDetectionScheduler?.notify(n);t;){t[G]|=e;let i=ai(t);if(oo(t)&&!i)return t;t=i}return null}function Sb(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function Mb(t,n){let e=Oe+n;if(e<t.length)return t[e]}function Xs(t,n,e,i=!0){let r=n[F];if(YS(r,n,t,e),i){let s=sp(e,t),a=n[Ce],l=a.parentNode(t[ui]);l!==null&&dS(r,t[pt],a,n,l,s)}let o=n[er];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Tb(t,n){let e=zs(t,n);return e!==void 0&&ed(e[F],e),e}function zs(t,n){if(t.length<=Oe)return;let e=Oe+n,i=t[e];if(i){let r=i[ci];r!==null&&r!==t&&qp(r,i),n>0&&(t[e-1][Bt]=i[Bt]);let o=Ts(t,Oe+n);cS(i[F],i);let s=o[bn];s!==null&&s.detachView(o[F]),i[Ye]=null,i[Bt]=null,i[G]&=-129}return i}function YS(t,n,e,i){let r=Oe+i,o=e.length;i>0&&(e[r-1][Bt]=n),i<o-Oe?(n[Bt]=e[r],eh(e,Oe+i,n)):(e.push(n),n[Bt]=null),n[Ye]=e;let s=n[ci];s!==null&&e!==s&&Ab(s,n);let a=n[bn];a!==null&&a.insertView(t),pc(n),n[G]|=128}function Ab(t,n){let e=t[rr],i=n[Ye];if(Pn(i))t[G]|=2;else{let r=i[Ye][mt];n[mt]!==r&&(t[G]|=2)}e===null?t[rr]=[n]:e.push(n)}var pi=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[F];return Us(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Pe]}set context(n){this._lView[Pe]=n}get destroyed(){return or(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Ye];if(tn(n)){let e=n[Rs],i=e?e.indexOf(this):-1;i>-1&&(zs(n,i),Ts(e,i))}this._attachedToViewContainer=!1}ed(this._lView[F],this._lView)}onDestroy(n){mh(this._lView,n)}markForCheck(){tm(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[G]&=-129}reattach(){pc(this._lView),this._lView[G]|=128}detectChanges(){this._lView[G]|=1024,wb(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new E(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=oo(this._lView),e=this._lView[ci];e!==null&&!n&&qp(e,this._lView),db(this._lView[F],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new E(902,!1);this._appRef=n;let e=oo(this._lView),i=this._lView[ci];i!==null&&!e&&Ab(i,this._lView),pc(this._lView)}};var Et=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=ZS;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Qs(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new pi(o)}}return t})();function ZS(){return id(tt(),B())}function id(t,n){return t.type&4?new Et(n,t,mo(t,n)):null}function mr(t,n,e,i,r){let o=t.data[n];if(o===null)o=KS(t,n,e,i,r),by()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=vy();o.injectorIndex=s===null?-1:s.injectorIndex}return ar(o,!0),o}function KS(t,n,e,i,r){let o=Ch(),s=wh(),a=s?o:o&&o.parent,l=t.data[n]=XS(t,a,e,n,i,r);return QS(t,l,o,s),l}function QS(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function XS(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return _h()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function JS(t){let n=t[lh]??[],i=t[Ye][Ce],r=[];for(let o of n)o.data[H_]!==void 0?r.push(o):eM(o,i);t[lh]=r}function eM(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[B_];for(;e<r;){let o=i.nextSibling;eb(n,i,!1),i=o,e++}}}var tM=()=>null,nM=()=>null;function Lc(t,n){return tM(t,n)}function Rb(t,n,e){return nM(t,n,e)}var kb=class{},rd=class{},lp=class{resolveComponentFactory(n){throw new E(917,!1)}},Js=class{static NULL=new lp},Ue=class{},Ne=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>iM()}return t})();function iM(){let t=B(),n=tt(),e=Ut(n.index,t);return(Pn(e)?e:t)[Ce]}var Ob=(()=>{class t{static \u0275prov=y({token:t,providedIn:"root",factory:()=>null})}return t})();var Rc={},cp=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Rc,i);return r!==Rc||e===Rc?r:this.parentInjector.get(n,e,i)}};function Vc(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=nc(r,a);else if(o==2){let l=a,c=n[++s];i=nc(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function xe(t,n=0){let e=B();if(e===null)return S(t,n);let i=tt();return R_(i,e,qe(t),n)}function Nb(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}sM(t,n,e,a,o,l,c)}o!==null&&i!==null&&rM(e,i,o)}function rM(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new E(-301,!1);i.push(n[r],o)}}function oM(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function sM(t,n,e,i,r,o,s){let a=i.length,l=null;for(let h=0;h<a;h++){let p=i[h];l===null&&nn(p)&&(l=p,oM(t,e,h)),Wh(Fc(e,n),t,p.type)}fM(e,t.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let h=0;h<a;h++){let p=i[h];p.providersResolver&&p.providersResolver(p)}let c=!1,d=!1,f=sb(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let h=0;h<a;h++){let p=i[h];if(e.mergedAttrs=co(e.mergedAttrs,p.hostAttrs),lM(t,e,n,f,p),uM(f,p,r),s!==null&&s.has(p)){let[C,I]=s.get(p);e.directiveToIndex.set(p.type,[f,C+e.directiveStart,I+e.directiveStart])}else(o===null||!o.has(p))&&e.directiveToIndex.set(p.type,f);p.contentQueries!==null&&(e.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(e.flags|=64);let m=p.type.prototype;!c&&(m.ngOnChanges||m.ngOnInit||m.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(m.ngOnChanges||m.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}aM(t,e,o)}function aM(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))t_(0,n,r,i),t_(1,n,r,i),i_(n,i,!1);else{let o=e.get(r);n_(0,n,o,i),n_(1,n,o,i),i_(n,i,!0)}}}function t_(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),Fb(n,o)}}function n_(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),Fb(n,s)}}function Fb(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function i_(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Bp(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let l=i[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let d of c)if(d===n){s??=[],s.push(l,i[a+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){s??=[],s.push(c[d+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function lM(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Yi(r.type,!0)),s=new cr(o,nn(r),xe,null);t.blueprint[i]=s,e[i]=s,cM(t,n,i,sb(t,e,r.hostVars,Ft),r)}function cM(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;dM(s)!=a&&s.push(a),s.push(e,i,o)}}function dM(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function uM(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;nn(n)&&(e[""]=t)}}function fM(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function nm(t,n,e,i,r,o,s,a){let l=n[F],c=l.consts,d=Ot(c,s),f=mr(l,t,e,i,d);return o&&Nb(l,n,f,Ot(c,a),r),f.mergedAttrs=co(f.mergedAttrs,f.attrs),f.attrs!==null&&Vc(f,f.attrs,!1),f.mergedAttrs!==null&&Vc(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function im(t,n){C_(t,n),ch(n)&&t.queries.elementEnd(n)}function hM(t,n,e,i,r,o){let s=n.consts,a=Ot(s,r),l=mr(n,t,e,i,a);if(l.mergedAttrs=co(l.mergedAttrs,l.attrs),o!=null){let c=Ot(s,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Vc(l,l.attrs,!1),l.mergedAttrs!==null&&Vc(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function fn(t,n,e){if(e===Ft)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function pM(t,n,e,i){let r=fn(t,n,e);return fn(t,n+1,i)||r}function Lh(t,n,e){return function i(r){let o=Ln(t)?Ut(t.index,n):n;tm(o,5);let s=n[Pe],a=r_(n,s,e,r),l=i.__ngNextListenerFn__;for(;l;)a=r_(n,s,l,r)&&a,l=l.__ngNextListenerFn__;return a}}function r_(t,n,e,i){let r=k(null);try{return _e(ue.OutputStart,n,e),e(i)!==!1}catch(o){return kS(t,o),!1}finally{_e(ue.OutputEnd,n,e),k(r)}}function mM(t,n,e,i,r,o,s,a){let l=ro(t),c=!1,d=null;if(!i&&l&&(d=vM(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let f=rn(t,e),h=i?i(f):f;fx(e,h,o,a);let p=r.listen(h,o,a);if(!gM(o)){let m=i?C=>i(Ht(C[t.index])):t.index;Pb(m,n,e,o,a,p,!1)}}return c}function gM(t){return t.startsWith("animation")||t.startsWith("transition")}function vM(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[no],l=r[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function Pb(t,n,e,i,r,o,s){let a=n.firstCreatePass?vh(n):null,l=gh(e),c=l.length;l.push(r,o),a&&a.push(i,t,c,(c+1)*(s?-1:1))}function o_(t,n,e,i,r,o){let s=n[e],a=n[F],c=a.data[e].outputs[i],f=s[c].subscribe(o);Pb(t.index,a,n,r,o,f,!0)}var dp=Symbol("BINDING");function Lb(t){return t.debugInfo?.className||t.type.name||null}var jc=class extends Js{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=On(n);return new fr(e,this.ngModule)}};function yM(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Qc.SignalBased)!==0};return r&&(o.transform=r),o})}function _M(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function bM(t,n,e){let i=n instanceof ye?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new cp(e,i):e}function DM(t){let n=t.get(Ue,null);if(n===null)throw new E(407,!1);let e=t.get(Ob,null),i=t.get(_n,null),r=t.get(hn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function CM(t,n){let e=Vb(t);return X_(n,e,e==="svg"?dh:e==="math"?cy:null)}function Vb(t){return(t.selectors[0][0]||"div").toLowerCase()}var fr=class extends rd{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=yM(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=_M(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=Qx(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){_e(ue.DynamicComponentStart);let a=k(null);try{let l=this.componentDef,c=bM(l,r||this.ngModule,n),d=DM(c),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(Lb(l),()=>this.createComponentRef(d,c,e,i,o,s)):this.createComponentRef(d,c,e,i,o,s)}finally{k(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,l=wM(r,a,s,o),c=n.rendererFactory.createRenderer(null,a),d=r?DS(c,r,a.encapsulation,e):CM(a,c),f=s?.some(s_)||o?.some(m=>typeof m!="function"&&m.bindings.some(s_)),h=Up(null,l,null,512|ob(a),null,null,n,c,e,null,$_(d,e,!0));h[Te]=d,_c(h);let p=null;try{let m=nm(Te,h,2,"#host",()=>l.directiveRegistry,!0,0);tb(c,d,m),uo(d,h),nd(l,h,m),kp(l,m,h),im(l,m),i!==void 0&&IM(m,this.ngContentSelectors,i),p=Ut(m.index,h),h[Pe]=p[Pe],em(l,h,null)}catch(m){throw p!==null&&Yh(p),Yh(h),m}finally{_e(ue.DynamicComponentEnd),bc()}return new Bc(this.componentType,h,!!f)}};function wM(t,n,e,i){let r=t?["ng-version","21.2.6"]:Xx(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[dp].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let f=i[d];if(typeof f!="function")for(let h of f.bindings){a+=h[dp].requiredVars;let p=d+1;h.create&&(h.targetIdx=p,(o??=[]).push(h)),h.update&&(h.targetIdx=p,(s??=[]).push(h))}}let l=[n];if(i)for(let d of i){let f=typeof d=="function"?d:d.type,h=rc(f);l.push(h)}return Hp(0,null,EM(o,s),1,a,l,null,null,null,[r],null)}function EM(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function s_(t){let n=t[dp].kind;return n==="input"||n==="twoWay"}var Bc=class extends kb{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=uc(e[F],Te),this.location=mo(this._tNode,e),this.instance=Ut(this._tNode.index,e)[Pe],this.hostView=this.changeDetectorRef=new pi(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Jp(i,r[F],r,n,e);this.previousInputValues.set(n,e);let s=Ut(i.index,r);tm(s,1)}get injector(){return new lr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function IM(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var vt=(()=>{class t{static __NG_ELEMENT_ID__=xM}return t})();function xM(){let t=tt();return jb(t,B())}var up=class t extends vt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return mo(this._hostTNode,this._hostLView)}get injector(){return new lr(this._hostTNode,this._hostLView)}get parentInjector(){let n=Mp(this._hostTNode,this._hostLView);if(I_(n)){let e=Nc(n,this._hostLView),i=Oc(n),r=e[F].data[i+8];return new lr(r,e)}else return new lr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=a_(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Oe}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Lc(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,fo(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let l=n&&!jI(n),c;if(l)c=e;else{let I=e||{};c=I.index,i=I.injector,r=I.projectableNodes,o=I.environmentInjector||I.ngModuleRef,s=I.directives,a=I.bindings}let d=l?n:new fr(On(n)),f=i||this.parentInjector;if(!o&&d.ngModule==null){let x=(l?f:this.parentInjector).get(ye,null);x&&(o=x)}let h=On(d.componentType??{}),p=Lc(this._lContainer,h?.id??null),m=p?.firstChild??null,C=d.create(f,r,m,o,s,a);return this.insertImpl(C.hostView,c,fo(this._hostTNode,p)),C}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(uy(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=r[Ye],c=new t(l,l[pt],l[Ye]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Xs(s,r,o,i),n.attachToViewContainerRef(),eh(Vh(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=a_(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=zs(this._lContainer,e);i&&(Ts(Vh(this._lContainer),e),ed(i[F],i))}detach(n){let e=this._adjustIndex(n,-1),i=zs(this._lContainer,e);return i&&Ts(Vh(this._lContainer),e)!=null?new pi(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function a_(t){return t[Rs]}function Vh(t){return t[Rs]||(t[Rs]=[])}function jb(t,n){let e,i=n[t.index];return tn(i)?e=i:(e=Sb(i,n,null,t),n[t.index]=e,zp(n,e)),MM(e,n,t,i),new up(e,t,n)}function SM(t,n){let e=t[Ce],i=e.createComment(""),r=rn(n,t),o=e.parentNode(r);return Pc(e,o,i,e.nextSibling(r),!1),i}var MM=RM,TM=()=>!1;function AM(t,n,e){return TM(t,n,e)}function RM(t,n,e,i){if(t[ui])return;let r;e.type&8?r=Ht(i):r=SM(n,e),t[ui]=r}var fp=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},hp=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)om(n,e).matches!==null&&this.queries[e].setDirty()}},Hc=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=PM(n):this.predicate=n}},pp=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},mp=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,kM(e,o)),this.matchTNodeWithReadOption(n,e,Ac(e,n,o,!1,!1))}else i===Et?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Ac(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===L||r===vt||r===Et&&e.type&4)this.addMatch(e.index,-2);else{let o=Ac(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function kM(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function OM(t,n){return t.type&11?mo(t,n):t.type&4?id(t,n):null}function NM(t,n,e,i){return e===-1?OM(n,t):e===-2?FM(t,n,i):Bs(t,t[F],e,n)}function FM(t,n,e){if(e===L)return mo(n,t);if(e===Et)return id(n,t);if(e===vt)return jb(n,t)}function Bb(t,n,e,i){let r=n[bn].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=o[c];a.push(NM(n,d,s[l+1],e.metadata.read))}}r.matches=a}return r.matches}function gp(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=Bb(t,n,r,e);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)i.push(s[a/2]);else{let c=o[a+1],d=n[-l];for(let f=Oe;f<d.length;f++){let h=d[f];h[ci]===h[Ye]&&gp(h[F],h,c,i)}if(d[rr]!==null){let f=d[rr];for(let h=0;h<f.length;h++){let p=f[h];gp(p[F],p,c,i)}}}}}return i}function rm(t,n){return t[bn].queries[n].queryList}function Hb(t,n,e){let i=new dr((e&4)===4);return py(t,n,i,i.destroy),(n[bn]??=new hp).queries.push(new fp(i))-1}function Ub(t,n,e){let i=Ee();return i.firstCreatePass&&($b(i,new Hc(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),Hb(i,B(),n)}function zb(t,n,e,i){let r=Ee();if(r.firstCreatePass){let o=tt();$b(r,new Hc(n,e,i),o.index),LM(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return Hb(r,B(),e)}function PM(t){return t.split(",").map(n=>n.trim())}function $b(t,n,e){t.queries===null&&(t.queries=new pp),t.queries.track(new mp(n,e))}function LM(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function om(t,n){return t.queries.getByIndex(n)}function Gb(t,n){let e=t[F],i=om(e,n);return i.crossesNgTemplate?gp(e,t,n,[]):Bb(e,t,i,n)}function Wb(t,n,e){let i,r=us(()=>{i._dirtyCounter();let o=VM(i,t);if(n&&o===void 0)throw new E(-951,!1);return o});return i=r[Ge],i._dirtyCounter=ee(0),i._flatValue=void 0,r}function sm(t){return Wb(!0,!1,t)}function am(t){return Wb(!0,!0,t)}function qb(t,n){let e=t[Ge];e._lView=B(),e._queryIndex=n,e._queryList=rm(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function VM(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[G]&4)return n?void 0:ut;let r=rm(e,i),o=Gb(e,i);return r.reset(o,N_),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var En=class{},od=class{};var Uc=class extends En{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new jc(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Qf(n);this._bootstrapComponents=nb(o.bootstrap),this._r3Injector=Th(n,e,[{provide:En,useValue:this},{provide:Js,useValue:this.componentFactoryResolver},...i],Ss(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},zc=class extends od{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Uc(this.moduleType,n,[])}};var $s=class extends En{injector;componentFactoryResolver=new jc(this);instance=null;constructor(n){super();let e=new Ki([...n.providers,{provide:En,useValue:this},{provide:Js,useValue:this.componentFactoryResolver}],n.parent||to(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function ea(t,n,e=null){return new $s({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var jM=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=ih(!1,e.type),r=i.length>0?ea([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=y({token:t,providedIn:"environment",factory:()=>new t(S(ye))})}return t})();function V(t){return Ws(()=>{let n=Yb(t),e=Y(v({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Ap.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(jM).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||un.Emulated,styles:t.styles||ut,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Un("NgStandalone"),Zb(e);let i=t.dependencies;return e.directiveDefs=l_(i,BM),e.pipeDefs=l_(i,Zv),e.id=zM(e),e})}function BM(t){return On(t)||rc(t)}function P(t){return Ws(()=>({type:t.type,bootstrap:t.bootstrap||ut,declarations:t.declarations||ut,imports:t.imports||ut,exports:t.exports||ut,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function HM(t,n){if(t==null)return Xt;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,s,a,l;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,l=r[3]||null):(o=r,s=r,a=Qc.None,l=null),e[o]=[i,a,l],n[o]=s}return e}function UM(t){if(t==null)return Xt;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function z(t){return Ws(()=>{let n=Yb(t);return Zb(n),n})}function Yb(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Xt,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||ut,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:HM(t.inputs,n),outputs:UM(t.outputs),debugInfo:null}}function Zb(t){t.features?.forEach(n=>n(t))}function l_(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function zM(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function lm(t){let n=e=>{let i=Array.isArray(t);e.hostDirectives===null?(e.resolveHostDirectives=$M,e.hostDirectives=i?t.map(vp):[t]):i?e.hostDirectives.unshift(...t.map(vp)):e.hostDirectives.unshift(t)};return n.ngInherit=!0,n}function $M(t){let n=[],e=!1,i=null,r=null;for(let o=0;o<t.length;o++){let s=t[o];if(s.hostDirectives!==null){let a=n.length;i??=new Map,r??=new Map,Kb(s,n,i),r.set(s,[a,n.length-1])}o===0&&nn(s)&&(e=!0,n.push(s))}for(let o=e?1:0;o<t.length;o++)n.push(t[o]);return[n,i,r]}function Kb(t,n,e){if(t.hostDirectives!==null)for(let i of t.hostDirectives)if(typeof i=="function"){let r=i();for(let o of r)c_(vp(o),n,e)}else c_(i,n,e)}function c_(t,n,e){let i=rc(t.directive);GM(i.declaredInputs,t.inputs),Kb(i,n,e),e.set(i,t),n.push(i)}function vp(t){return typeof t=="function"?{directive:qe(t),inputs:Xt,outputs:Xt}:{directive:qe(t.directive),inputs:d_(t.inputs),outputs:d_(t.outputs)}}function d_(t){if(t===void 0||t.length===0)return Xt;let n={};for(let e=0;e<t.length;e+=2)n[t[e]]=t[e+1];return n}function GM(t,n){for(let e in n)if(n.hasOwnProperty(e)){let i=n[e],r=t[e];t[i]=r}}function WM(t){return Object.getPrototypeOf(t.prototype).constructor}function Ae(t){let n=WM(t.type),e=!0,i=[t];for(;n;){let r;if(nn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new E(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let s=t;s.inputs=jh(t.inputs),s.declaredInputs=jh(t.declaredInputs),s.outputs=jh(t.outputs);let a=r.hostBindings;a&&QM(t,a);let l=r.viewQuery,c=r.contentQueries;if(l&&ZM(t,l),c&&KM(t,c),qM(t,r),Yv(t.outputs,r.outputs),nn(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(t),a===Ae&&(e=!1)}}n=Object.getPrototypeOf(n)}YM(i)}function qM(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function YM(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=co(r.hostAttrs,e=co(e,r.hostAttrs))}}function jh(t){return t===Xt?{}:t===ut?[]:t}function ZM(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function KM(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function QM(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function Qb(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=co(t.mergedAttrs,t.attrs);let d=t.tView=Hp(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),ar(t,!1);let l=JM(e,n,t,i);Cc()&&Yp(e,n,l,t),uo(l,n);let c=Sb(l,n,l,t);n[i+Te]=c,zp(n,c),AM(c,t,n)}function XM(t,n,e,i,r,o,s,a,l,c,d){let f=e+Te,h;return n.firstCreatePass?(h=mr(n,f,4,s||null,a||null),mc()&&Nb(n,t,h,Ot(n.consts,c),Kp),C_(n,h)):h=n.data[f],Qb(h,t,n,e,i,r,o,l),ro(h)&&nd(n,t,h),c!=null&&Ks(t,h,d),h}function ho(t,n,e,i,r,o,s,a,l,c,d){let f=e+Te,h;if(n.firstCreatePass){if(h=mr(n,f,4,s||null,a||null),c!=null){let p=Ot(n.consts,c);h.localNames=[];for(let m=0;m<p.length;m+=2)h.localNames.push(p[m],-1)}}else h=n.data[f];return Qb(h,t,n,e,i,r,o,l),c!=null&&Ks(t,h,d),h}function xt(t,n,e,i,r,o,s,a){let l=B(),c=Ee(),d=Ot(c.consts,o);return XM(l,c,t,n,e,i,r,d,void 0,s,a),xt}function sd(t,n,e,i,r,o,s,a){let l=B(),c=Ee(),d=Ot(c.consts,o);return ho(l,c,t,n,e,i,r,d,void 0,s,a),sd}var JM=eT;function eT(t,n,e,i){return Fs(!0),n[Ce].createComment("")}var ad=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function xn(t){return typeof t=="function"&&t[Ge]!==void 0}function cm(t){return xn(t)&&typeof t.set=="function"}var dm=new g("");function gi(t){return!!t&&typeof t.then=="function"}function um(t){return!!t&&typeof t.subscribe=="function"}var Xb=new g("");var fm=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(Xb,{optional:!0})??[];injector=u(U);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=et(this.injector,r);if(gi(o))e.push(o);else if(um(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ld=new g("");function Jb(){hf(()=>{let t="";throw new E(600,t)})}function eD(t){return t.isBoundToModule}var tT=10;var Pt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(ln);afterRenderManager=u(Jc);zonelessEnabled=u(Ps);rootEffectScheduler=u(Ec);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new w;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(jn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(A(e=>!e))}constructor(){u(hn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(ye);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=U.NULL){return this._injector.get(M).run(()=>{_e(ue.BootstrapComponentStart);let s=e instanceof rd;if(!this._injector.get(fm).done){let m="";throw new E(405,m)}let l;s?l=e:l=this._injector.get(Js).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=eD(l)?void 0:this._injector.get(En),d=i||l.selector,f=l.create(r,[],d,c),h=f.location.nativeElement,p=f.injector.get(dm,null);return p?.registerApplication(h),f.onDestroy(()=>{this.detachView(f.hostView),js(this.components,f),p?.unregisterApplication(h)}),this._loadComponent(f),_e(ue.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){_e(ue.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Xc.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw _e(ue.ChangeDetectionEnd),new E(101,!1);let e=k(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,k(e),this.afterTick.next(),_e(ue.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ue,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<tT;){_e(ue.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{_e(ue.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!ks(r))continue;let o=i&&!this.zonelessEnabled?0:1;wb(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>ks(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;js(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(ld,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>js(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new E(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function js(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function re(t,n,e,i){let r=B(),o=fi();if(fn(r,o,n)){let s=Ee(),a=Ns();TS(a,r,t,n,e,i)}return re}var yp=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Bh(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function nT(t,n,e,i){let r,o,s=0,a=t.length-1,l=void 0;if(Array.isArray(n)){k(i);let c=n.length-1;for(k(null);s<=a&&s<=c;){let d=t.at(s),f=n[s],h=Bh(s,d,s,f,e);if(h!==0){h<0&&t.updateValue(s,f),s++;continue}let p=t.at(a),m=n[c],C=Bh(a,p,c,m,e);if(C!==0){C<0&&t.updateValue(a,m),a--,c--;continue}let I=e(s,d),x=e(a,p),he=e(s,f);if(Object.is(he,x)){let Xe=e(c,m);Object.is(Xe,I)?(t.swap(s,a),t.updateValue(a,m),c--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new $c,o??=f_(t,s,a,e),_p(t,r,s,he))t.updateValue(s,f),s++,a++;else if(o.has(he))r.set(I,t.detach(s)),a--;else{let Xe=t.create(s,n[s]);t.attach(s,Xe),s++,a++}}for(;s<=c;)u_(t,r,e,s,n[s]),s++}else if(n!=null){k(i);let c=n[Symbol.iterator]();k(null);let d=c.next();for(;!d.done&&s<=a;){let f=t.at(s),h=d.value,p=Bh(s,f,s,h,e);if(p!==0)p<0&&t.updateValue(s,h),s++,d=c.next();else{r??=new $c,o??=f_(t,s,a,e);let m=e(s,h);if(_p(t,r,s,m))t.updateValue(s,h),s++,a++,d=c.next();else if(!o.has(m))t.attach(s,t.create(s,h)),s++,a++,d=c.next();else{let C=e(s,f);r.set(C,t.detach(s)),a--}}}for(;!d.done;)u_(t,r,e,t.length,d.value),d=c.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(c=>{t.destroy(c)})}function _p(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function u_(t,n,e,i,r){if(_p(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function f_(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var $c=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function ne(t,n,e,i,r,o,s,a){Un("NgControlFlow");let l=B(),c=Ee(),d=Ot(c.consts,o);return ho(l,c,t,n,e,i,r,d,256,s,a),hm}function hm(t,n,e,i,r,o,s,a){Un("NgControlFlow");let l=B(),c=Ee(),d=Ot(c.consts,o);return ho(l,c,t,n,e,i,r,d,512,s,a),hm}function ie(t,n){Un("NgControlFlow");let e=B(),i=fi(),r=e[i]!==Ft?e[i]:-1,o=r!==-1?Gc(e,Te+r):void 0,s=0;if(fn(e,i,t)){let a=k(null);try{if(o!==void 0&&Tb(o,s),t!==-1){let l=Te+t,c=Gc(e,l),d=wp(e[F],l),f=Rb(c,d,e),h=Qs(e,d,n,{dehydratedView:f});Xs(c,h,s,fo(d,f))}}finally{k(a)}}else if(o!==void 0){let a=Mb(o,s);a!==void 0&&(a[Pe]=n)}}var bp=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-Oe}};function pm(t){return t}function vi(t,n){return n}var Dp=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function lt(t,n,e,i,r,o,s,a,l,c,d,f,h){Un("NgControlFlow");let p=B(),m=Ee(),C=l!==void 0,I=B(),x=a?s.bind(I[mt][Pe]):s,he=new Dp(C,x);I[Te+t]=he,ho(p,m,t+1,n,e,i,r,Ot(m.consts,o),256),C&&ho(p,m,t+2,l,c,d,f,Ot(m.consts,h),512)}var Cp=class extends yp{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-Oe}at(n){return this.getLView(n)[Pe].$implicit}attach(n,e){let i=e[er];this.needsIndexUpdate||=n!==this.length,Xs(this.lContainer,e,n,fo(this.templateTNode,i)),iT(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,rT(this.lContainer,n),oT(this.lContainer,n)}create(n,e){let i=Lc(this.lContainer,this.templateTNode.tView.ssrId);return Qs(this.hostLView,this.templateTNode,new bp(this.lContainer,e,n),{dehydratedView:i})}destroy(n){ed(n[F],n)}updateValue(n,e){this.getLView(n)[Pe].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Pe].$index=n}getLView(n){return sT(this.lContainer,n)}};function ct(t){let n=k(null),e=an();try{let i=B(),r=i[F],o=i[e],s=e+1,a=Gc(i,s);if(o.liveCollection===void 0){let c=wp(r,s);o.liveCollection=new Cp(a,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(nT(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=fi(),d=l.length===0;if(fn(i,c,d)){let f=e+2,h=Gc(i,f);if(d){let p=wp(r,f),m=Rb(h,p,i),C=Qs(i,p,void 0,{dehydratedView:m});Xs(h,C,0,fo(p,m))}else r.firstUpdatePass&&JS(h),Tb(h,0)}}}finally{k(n)}}function Gc(t,n){return t[n]}function iT(t,n){if(t.length<=Oe)return;let e=Oe+n,i=t[e],r=i?i[di]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Nn];aS(o,r),ur.delete(i[Fn]),r.detachedLeaveAnimationFns=void 0}}function rT(t,n){if(t.length<=Oe)return;let e=Oe+n,i=t[e],r=i?i[di]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function oT(t,n){return zs(t,n)}function sT(t,n){return Mb(t,n)}function wp(t,n){return uc(t,n)}function pe(t,n,e){let i=B(),r=fi();if(fn(i,r,n)){let o=Ee(),s=Ns();gb(s,i,t,n,i[Ce],e)}return pe}function Ep(t,n,e,i,r){Jp(n,t,e,r?"class":"style",i)}function _(t,n,e,i){let r=B(),o=r[F],s=t+Te,a=o.firstCreatePass?nm(s,r,2,n,Kp,mc(),e,i):o.data[s];if(Ln(a)){let l=r[en].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(Lb(c),()=>(h_(t,n,r,a,i),_))}}return h_(t,n,r,a,i),_}function h_(t,n,e,i,r){if(Qp(i,e,t,n,tD),ro(i)){let o=e[F];nd(o,e,i),kp(o,i,e)}r!=null&&Ks(e,i)}function b(){let t=Ee(),n=tt(),e=Xp(n);return t.firstCreatePass&&im(t,e),bh(e)&&Dh(),yh(),e.classesWithoutHost!=null&&GI(e)&&Ep(t,e,B(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&WI(e)&&Ep(t,e,B(),e.stylesWithoutHost,!1),b}function fe(t,n,e,i){return _(t,n,e,i),b(),fe}function zt(t,n,e,i){let r=B(),o=r[F],s=t+Te,a=o.firstCreatePass?hM(s,o,2,n,e,i):o.data[s];return Qp(a,r,t,n,tD),i!=null&&Ks(r,a),zt}function $t(){let t=tt(),n=Xp(t);return bh(n)&&Dh(),yh(),$t}function Gt(t,n,e,i){return zt(t,n,e,i),$t(),Gt}var tD=(t,n,e,i,r)=>(Fs(!0),X_(n[Ce],i,My()));function mm(t,n,e){let i=B(),r=i[F],o=t+Te,s=r.firstCreatePass?nm(o,i,8,"ng-container",Kp,mc(),n,e):r.data[o];if(Qp(s,i,t,"ng-container",aT),ro(s)){let a=i[F];nd(a,i,s),kp(a,s,i)}return e!=null&&Ks(i,s),mm}function gm(){let t=Ee(),n=tt(),e=Xp(n);return t.firstCreatePass&&im(t,e),gm}function yo(t,n,e){return mm(t,n,e),gm(),yo}var aT=(t,n,e,i,r)=>(Fs(!0),Lx(n[Ce],""));function zn(){return B()}function yt(t,n,e){let i=B(),r=fi();if(fn(i,r,n)){let o=Ee(),s=Ns();vb(s,i,t,n,i[Ce],e)}return yt}var ta="en-US";var lT=ta;function nD(t){typeof t=="string"&&(lT=t.toLowerCase().replace(/_/g,"-"))}function se(t,n,e){let i=B(),r=Ee(),o=tt();return iD(r,i,i[Ce],o,t,n,e),se}function iD(t,n,e,i,r,o,s){let a=!0,l=null;if((i.type&3||s)&&(l??=Lh(i,n,o),mM(i,t,n,s,e,r,o,l)&&(a=!1)),a){let c=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let f=0;f<d.length;f+=2){let h=d[f],p=d[f+1];l??=Lh(i,n,o),o_(i,n,h,p,r,l)}if(c&&c.length)for(let f of c)l??=Lh(i,n,o),o_(i,n,f,r,r,l)}}function $(t=1){return Sy(t)}function cT(t,n){let e=null,i=Wx(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?rb(t,o,!0):Zx(i,o))return r}return e}function Re(t){let n=B()[mt][pt];if(!n.projection){let e=t?t.length:1,i=n.projection=ty(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?cT(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function ce(t,n=0,e,i,r,o){let s=B(),a=Ee(),l=i?t+1:null;l!==null&&ho(s,a,l,i,r,o,null,e);let c=mr(a,Te+t,16,null,e||null);c.projection===null&&(c.projection=n),Eh();let f=!s[er]||_h();s[mt][pt].projection[c.projection]===null&&l!==null?dT(s,a,l):f&&!Zc(c)&&yS(a,s,c)}function dT(t,n,e){let i=Te+e,r=n.data[i],o=t[i],s=Lc(o,r.tView.ssrId),a=Qs(t,r,void 0,{dehydratedView:s});Xs(o,a,0,fo(r,s))}function yi(t,n,e,i){return zb(t,n,e,i),yi}function it(t,n,e){return Ub(t,n,e),it}function ae(t){let n=B(),e=Ee(),i=yc();Os(i+1);let r=om(e,i);if(t.dirty&&dy(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Gb(n,i);t.reset(o,N_),t.notifyOnChanges()}return!0}return!1}function le(){return rm(B(),yc())}function cd(t,n,e,i,r){return qb(n,zb(t,e,i,r)),cd}function dd(t,n,e,i){return qb(t,Ub(n,e,i)),dd}function ud(t=1){Os(yc()+t)}function Wt(t){let n=Ih();return fh(n,Te+t)}function Sc(t,n){return t<<17|n<<2}function hr(t){return t>>17&32767}function uT(t){return(t&2)==2}function fT(t,n){return t&131071|n<<17}function Ip(t){return t|2}function po(t){return(t&131068)>>2}function Hh(t,n){return t&-131069|n<<2}function hT(t){return(t&1)===1}function xp(t){return t|1}function pT(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=hr(s),l=po(s);t[i]=e;let c=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||eo(f,d)>0)&&(c=!0)}else d=e;if(r)if(l!==0){let h=hr(t[a+1]);t[i+1]=Sc(h,a),h!==0&&(t[h+1]=Hh(t[h+1],i)),t[a+1]=fT(t[a+1],i)}else t[i+1]=Sc(a,0),a!==0&&(t[a+1]=Hh(t[a+1],i)),a=i;else t[i+1]=Sc(l,0),a===0?a=i:t[l+1]=Hh(t[l+1],i),l=i;c&&(t[i+1]=Ip(t[i+1])),p_(t,d,i,!0),p_(t,d,i,!1),mT(n,d,t,i,o),s=Sc(a,l),o?n.classBindings=s:n.styleBindings=s}function mT(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&eo(o,n)>=0&&(e[i+1]=xp(e[i+1]))}function p_(t,n,e,i){let r=t[e+1],o=n===null,s=i?hr(r):po(r),a=!1;for(;s!==0&&(a===!1||o);){let l=t[s],c=t[s+1];gT(l,n)&&(a=!0,t[s+1]=i?xp(c):Ip(c)),s=i?hr(c):po(c)}a&&(t[e+1]=i?Ip(r):xp(r))}function gT(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?eo(t,n)>=0:!1}var dn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function vT(t){return t.substring(dn.key,dn.keyEnd)}function yT(t){return _T(t),rD(t,oD(t,0,dn.textEnd))}function rD(t,n){let e=dn.textEnd;return e===n?-1:(n=dn.keyEnd=bT(t,dn.key=n,e),oD(t,n,e))}function _T(t){dn.key=0,dn.keyEnd=0,dn.value=0,dn.valueEnd=0,dn.textEnd=t.length}function oD(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function bT(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function gr(t,n,e){return sD(t,n,e,!1),gr}function J(t,n){return sD(t,n,null,!0),J}function Ie(t){CT(MT,DT,t,!0)}function DT(t,n){for(let e=yT(n);e>=0;e=rD(n,e))lc(t,vT(n),!0)}function sD(t,n,e,i){let r=B(),o=Ee(),s=gc(2);if(o.firstUpdatePass&&lD(o,t,s,i),n!==Ft&&fn(r,s,n)){let a=o.data[an()];cD(o,a,r,r[Ce],t,r[s+1]=AT(n,e),i,s)}}function CT(t,n,e,i){let r=Ee(),o=gc(2);r.firstUpdatePass&&lD(r,null,o,i);let s=B();if(e!==Ft&&fn(s,o,e)){let a=r.data[an()];if(dD(a,i)&&!aD(r,o)){let l=i?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=nc(l,e||"")),Ep(r,a,s,e,i)}else TT(r,a,s,s[Ce],s[o+1],s[o+1]=ST(t,n,e),i,o)}}function aD(t,n){return n>=t.expandoStartIndex}function lD(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[an()],s=aD(t,e);dD(o,i)&&n===null&&!s&&(n=!1),n=wT(r,o,n,i),pT(r,o,n,e,s,i)}}function wT(t,n,e,i){let r=wy(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=Uh(null,t,n,e,i),e=Gs(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=Uh(r,t,n,e,i),o===null){let l=ET(t,n,i);l!==void 0&&Array.isArray(l)&&(l=Uh(null,t,n,l[1],i),l=Gs(l,n.attrs,i),IT(t,n,i,l))}else o=xT(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function ET(t,n,e){let i=e?n.classBindings:n.styleBindings;if(po(i)!==0)return t[hr(i)]}function IT(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[hr(r)]=i}function xT(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=Gs(i,s,e)}return Gs(i,n.attrs,e)}function Uh(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=Gs(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function Gs(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),lc(t,s,e?!0:n[++o]))}return t===void 0?null:t}function ST(t,n,e){if(e==null||e==="")return ut;let i=[],r=In(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function MT(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&lc(t,i,e)}function TT(t,n,e,i,r,o,s,a){r===Ft&&(r=ut);let l=0,c=0,d=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let h=l<r.length?r[l+1]:void 0,p=c<o.length?o[c+1]:void 0,m=null,C;d===f?(l+=2,c+=2,h!==p&&(m=f,C=p)):f===null||d!==null&&d<f?(l+=2,m=d):(c+=2,m=f,C=p),m!==null&&cD(t,n,e,i,m,C,s,a),d=l<r.length?r[l]:null,f=c<o.length?o[c]:null}}function cD(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let l=t.data,c=l[a+1],d=hT(c)?m_(l,n,e,r,po(c),s):void 0;if(!Wc(d)){Wc(o)||uT(c)&&(o=m_(l,null,e,r,a,s));let f=uh(an(),e);bS(i,s,f,r,o)}}function m_(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let l=t[r],c=Array.isArray(l),d=c?l[1]:l,f=d===null,h=e[r+1];h===Ft&&(h=f?ut:void 0);let p=f?cc(h,i):d===i?h:void 0;if(c&&!Wc(p)&&(p=cc(l,i)),Wc(p)&&(a=p,s))return a;let m=t[r+1];r=s?hr(m):po(m)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=cc(l,i))}return a}function Wc(t){return t!==void 0}function AT(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Ss(In(t)))),t}function dD(t,n){return(t.flags&(n?8:16))!==0}function j(t,n=""){let e=B(),i=Ee(),r=t+Te,o=i.firstCreatePass?mr(i,r,1,n,null):i.data[r],s=RT(i,e,o,n);e[r]=s,Cc()&&Yp(i,e,s,o),ar(o,!1)}var RT=(t,n,e,i)=>(Fs(!0),Fx(n[Ce],i));function uD(t,n,e,i=""){return fn(t,fi(),e)?n+Jr(e)+i:Ft}function kT(t,n,e,i,r,o=""){let s=yy(),a=pM(t,s,e,r);return gc(2),a?n+Jr(e)+i+Jr(r)+o:Ft}function Ve(t){return vr("",t),Ve}function vr(t,n,e){let i=B(),r=uD(i,t,n,e);return r!==Ft&&fD(i,an(),r),vr}function yr(t,n,e,i,r){let o=B(),s=kT(o,t,n,e,i,r);return s!==Ft&&fD(o,an(),s),yr}function fD(t,n,e){let i=uh(n,t);Px(t[Ce],i,e)}function fd(t,n,e){cm(n)&&(n=n());let i=B(),r=fi();if(fn(i,r,n)){let o=Ee(),s=Ns();gb(s,i,t,n,i[Ce],e)}return fd}function vm(t,n){let e=cm(t);return e&&t.set(n),e}function hd(t,n){let e=B(),i=Ee(),r=tt();return iD(i,e,e[Ce],r,t,n),hd}var hD={};function pd(t){Un("NgLet");let n=Ee(),e=B(),i=t+Te,r=mr(n,i,128,null,null);return ar(r,!1),fc(n,e,i,hD),pd}function ym(t){let n=Ee(),e=B(),i=an();return fc(n,e,i,t),t}function _o(t){let n=Ih(),e=fh(n,Te+t);if(e===hD)throw new E(314,!1);return e}function St(t,n,e=""){return uD(B(),t,n,e)}function g_(t,n,e){let i=Ee();i.firstCreatePass&&pD(n,i.data,i.blueprint,nn(t),e)}function pD(t,n,e,i,r){if(t=qe(t),Array.isArray(t))for(let o=0;o<t.length;o++)pD(t[o],n,e,i,r);else{let o=Ee(),s=B(),a=tt(),l=Zi(t)?t:qe(t.provide),c=oh(t),d=a.providerIndexes&1048575,f=a.directiveStart,h=a.providerIndexes>>20;if(Zi(t)||!t.multi){let p=new cr(c,r,xe,null),m=$h(l,n,r?d:d+h,f);m===-1?(Wh(Fc(a,s),o,l),zh(o,t,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(p),s.push(p)):(e[m]=p,s[m]=p)}else{let p=$h(l,n,d+h,f),m=$h(l,n,d,d+h),C=p>=0&&e[p],I=m>=0&&e[m];if(r&&!I||!r&&!C){Wh(Fc(a,s),o,l);let x=FT(r?NT:OT,e.length,r,i,c,t);!r&&I&&(e[m].providerFactory=x),zh(o,t,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(x),s.push(x)}else{let x=mD(e[r?m:p],c,!r&&i);zh(o,t,p>-1?p:m,x)}!r&&i&&I&&e[m].componentProviders++}}}function zh(t,n,e,i){let r=Zi(n),o=sy(n);if(r||o){let l=(o?qe(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[i,l]):c[d+1].push(i,l)}else c.push(e,l)}}}function mD(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function $h(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function OT(t,n,e,i,r){return Sp(this.multi,[])}function NT(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=Bs(i,i[F],this.providerFactory.index,r);s=l.slice(0,a),Sp(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Sp(o,s);return s}function Sp(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function FT(t,n,e,i,r,o){let s=new cr(t,e,xe,null);return s.multi=[],s.index=n,s.componentProviders=0,mD(s,r,i&&!e),s}function ze(t,n){return e=>{e.providersResolver=(i,r)=>g_(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>g_(i,r?r(n):n,!0))}}function na(t,n){return id(t,n)}var qc=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},_m=(()=>{class t{compileModuleSync(e){return new zc(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=Qf(e),o=nb(r.declarations).reduce((s,a)=>{let l=On(a);return l&&s.push(new fr(l)),s},[]);return new qc(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var gD=(()=>{class t{applicationErrorHandler=u(ln);appRef=u(Pt);taskService=u(jn);ngZone=u(M);zonelessEnabled=u(Ps);tracing=u(hn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new oe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Is):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Oh,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?ky:Ah;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Is+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function vD(){return[{provide:_n,useExisting:gD},{provide:M,useClass:xs},{provide:Ps,useValue:!0}]}function PT(){return typeof $localize<"u"&&$localize.locale||ta}var md=new g("",{factory:()=>u(md,{optional:!0,skipSelf:!0})||PT()});function Ze(t){return zv(t)}function _t(t,n){return us(t,n?.equal)}var wD=Symbol("InputSignalNode#UNSET"),JT=Y(v({},fs),{transformFn:void 0,applyValueToInputSignal(t,n){zr(t,n)}});function ED(t,n){let e=Object.create(JT);e.value=t,e.transformFn=n?.transform;function i(){if(Fi(e),e.value===wD){let r=null;throw new E(-950,r)}return e.value}return i[Ge]=e,i}var $n=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Tp(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function yD(t,n){return ED(t,n)}function eA(t){return ED(wD,t)}var ID=(yD.required=eA,yD);function _D(t,n){return sm(n)}function tA(t,n){return am(n)}var ra=(_D.required=tA,_D);function bD(t,n){return sm(n)}function nA(t,n){return am(n)}var xD=(bD.required=nA,bD);var Dm=new g(""),iA=new g("");function ia(t){return!t.moduleRef}function rA(t){let n=ia(t)?t.r3Injector:t.moduleRef.injector,e=n.get(M);return e.run(()=>{ia(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(ln),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),ia(t)){let o=()=>n.destroy(),s=t.platformInjector.get(Dm);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(Dm);s.add(o),t.moduleRef.onDestroy(()=>{js(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return sA(i,e,()=>{let o=n.get(jn),s=o.add(),a=n.get(fm);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(md,ta);if(nD(l||ta),!n.get(iA,!0))return ia(t)?n.get(Pt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(ia(t)){let d=n.get(Pt);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return oA?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var oA;function sA(t,n,e){try{let i=e();return gi(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var gd=null;function aA(t=[],n){return U.create({name:n,providers:[{provide:As,useValue:"platform"},{provide:Dm,useValue:new Set([()=>gd=null])},...t]})}function lA(t=[]){if(gd)return gd;let n=aA(t);return gd=n,Jb(),cA(n),n}function cA(t){let n=t.get(Yc,null);et(t,()=>{n?.forEach(e=>e())})}var dA=1e4;var r4=dA-1e3;var Ke=(()=>{class t{static __NG_ELEMENT_ID__=uA}return t})();function uA(t){return fA(tt(),B(),(t&16)===16)}function fA(t,n,e){if(Ln(t)&&!e){let i=Ut(t.index,n);return new pi(i,i)}else if(t.type&175){let i=n[mt];return new pi(i,n)}return null}function SD(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;_e(ue.BootstrapApplicationStart);try{let o=r?.injector??lA(i),s=[vD(),Ny,...e||[]],a=new $s({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return rA({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{_e(ue.BootstrapApplicationEnd)}}function W(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function pn(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var bm=Symbol("NOT_SET"),MD=new Set,hA=Y(v({},fs),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:bm,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==bm&&!Hr(this))return this.signal;try{for(let r of this.cleanup??MD)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=ii(this),i;try{i=this.userFn.apply(null,n)}finally{Pi(this,e)}return(this.value===bm||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Cm=class extends Hs{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Nt),s),this.scheduler=r;for(let a of Gp){let l=e[a];if(l===void 0)continue;let c=Object.create(hA);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(Fi(c),c.value),c.signal[Ge]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??MD)e()}finally{ri(n)}}};function TD(t,n){let e=n?.injector??u(U),i=e.get(_n),r=e.get(Jc),o=e.get(hn,null,{optional:!0});r.impl??=e.get(Wp);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(so,null,{optional:!0}),l=new Cm(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function yd(t,n){let e=On(t),i=n.elementInjector||to();return new fr(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var AD=null;function qt(){return AD}function wm(t){AD??=t}var oa=class{},bo=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>u(RD),providedIn:"platform"})}return t})();var RD=(()=>{class t extends bo{_location;_history;_doc=u(H);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return qt().getBaseHref(this._doc)}onPopState(e){let i=qt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=qt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function ND(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function kD(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function _i(t){return t&&t[0]!=="?"?`?${t}`:t}var _d=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>u(mA),providedIn:"root"})}return t})(),pA=new g(""),mA=(()=>{class t extends _d{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(H).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return ND(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+_i(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+_i(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+_i(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(S(bo),S(pA,8))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bi=(()=>{class t{_subject=new w;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=yA(kD(OD(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+_i(i))}normalize(e){return t.stripTrailingSlash(vA(this._basePath,OD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_i(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_i(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=_i;static joinWithSlash=ND;static stripTrailingSlash=kD;static \u0275fac=function(i){return new(i||t)(S(_d))};static \u0275prov=y({token:t,factory:()=>gA(),providedIn:"root"})}return t})();function gA(){return new bi(S(_d))}function vA(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function OD(t){return t.replace(/\/index.html$/,"")}function yA(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var sa=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(U);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(xe(vt))};static \u0275dir=z({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Le]})}return t})();var Di=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({})}return t})();function aa(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var _r=class{};var Em="browser";function FD(t){return t===Em}var la=class{_doc;constructor(n){this._doc=n}manager},bd=(()=>{class t extends la{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(S(H))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),wd=new g(""),Mm=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof bd));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof bd);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new E(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(S(wd),S(M))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),Im="ng-app-id";function PD(t){for(let n of t)n.remove()}function LD(t,n){let e=n.createElement("style");return e.textContent=t,e}function DA(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Im}="${n}"],link[${Im}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Im),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Sm(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Tm=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,DA(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,LD);i?.forEach(r=>this.addUsage(r,this.external,Sm))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(PD(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])PD(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,LD(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Sm(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(S(H),S(go),S(vo,8),S(pr))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),xm={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Am=/%COMP%/g;var jD="%COMP%",CA=`_nghost-${jD}`,wA=`_ngcontent-${jD}`,EA=!0,IA=new g("",{factory:()=>EA});function xA(t){return wA.replace(Am,t)}function SA(t){return CA.replace(Am,t)}function BD(t,n){return n.map(e=>e.replace(Am,t))}var Rm=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,s,a,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new ca(e,s,a,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Cd?r.applyToHost(e):r instanceof da&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case un.Emulated:o=new Cd(l,c,i,this.appId,d,s,a,f);break;case un.ShadowDom:return new Dd(l,e,i,s,a,this.nonce,f,c);case un.ExperimentalIsolatedShadowDom:return new Dd(l,e,i,s,a,this.nonce,f);default:o=new da(l,c,i,d,s,a,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(S(Mm),S(Tm),S(go),S(IA),S(H),S(M),S(vo),S(hn,8))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),ca=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(xm[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(VD(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(VD(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new E(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=xm[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=xm[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(wn.DashCase|wn.Important)?n.style.setProperty(e,i,r&wn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&wn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=qt().getGlobalEventTarget(this.doc,n),!n))throw new E(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function VD(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Dd=class extends ca{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,l){super(n,r,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=BD(i.id,c);for(let f of c){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=f,this.shadowRoot.appendChild(h)}let d=i.getExternalStyles?.();if(d)for(let f of d){let h=Sm(f,r);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},da=class extends ca{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?BD(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ur.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Cd=class extends da{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,l){let c=r+"-"+i.id;super(n,e,i,o,s,a,l,c),this.contentAttr=xA(c),this.hostAttr=SA(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Ed=class t extends oa{supportsDOMEvents=!0;static makeCurrent(){wm(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=MA();return e==null?null:TA(e)}resetBaseElement(){ua=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return aa(document.cookie,n)}},ua=null;function MA(){return ua=ua||document.head.querySelector("base"),ua?ua.getAttribute("href"):null}function TA(t){return new URL(t,document.baseURI).pathname}var AA=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),HD=["alt","control","meta","shift"],RA={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},kA={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},UD=(()=>{class t extends la{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>qt().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),HD.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),s+=c+".")}),s+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,i){let r=RA[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),HD.forEach(s=>{if(s!==r){let a=kA[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(S(H))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();async function km(t,n,e){let i=v({rootComponent:t},OA(n,e));return SD(i)}function OA(t,n){return{platformRef:n?.platformRef,appProviders:[...VA,...t?.providers??[]],platformProviders:LA}}function NA(){Ed.makeCurrent()}function FA(){return new Ct}function PA(){return Rp(document),document}var LA=[{provide:pr,useValue:Em},{provide:Yc,useValue:NA,multi:!0},{provide:H,useFactory:PA}];var VA=[{provide:As,useValue:"root"},{provide:Ct,useFactory:FA},{provide:wd,useClass:bd,multi:!0},{provide:wd,useClass:UD,multi:!0},Rm,Tm,Mm,{provide:Ue,useExisting:Rm},{provide:_r,useClass:AA},[]];var Ci=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var xd=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Sd=class{encodeKey(n){return zD(n)}encodeValue(n){return zD(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function jA(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var BA=/%(\d[a-f0-9])/gi,HA={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function zD(t){return encodeURIComponent(t).replace(BA,(n,e)=>HA[e]??n)}function Id(t){return`${t}`}var Gn=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Sd,n.fromString){if(n.fromObject)throw new E(2805,!1);this.map=jA(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Id):[Id(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Id(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Id(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function UA(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function $D(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function GD(t){return typeof Blob<"u"&&t instanceof Blob}function WD(t){return typeof FormData<"u"&&t instanceof FormData}function zA(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var qD="Content-Type",YD="Accept",ZD="text/plain",KD="application/json",$A=`${KD}, ${ZD}, */*`,Do=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(UA(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new E(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Ci,this.context??=new xd,!this.params)this.params=new Gn,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||$D(this.body)||GD(this.body)||WD(this.body)||zA(this.body)?this.body:this.body instanceof Gn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||WD(this.body)?null:GD(this.body)?this.body.type||null:$D(this.body)?null:typeof this.body=="string"?ZD:this.body instanceof Gn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?KD:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer||this.referrer,h=n.integrity||this.integrity,p=n.referrerPolicy||this.referrerPolicy,m=n.transferCache??this.transferCache,C=n.timeout??this.timeout,I=n.body!==void 0?n.body:this.body,x=n.withCredentials??this.withCredentials,he=n.reportProgress??this.reportProgress,Xe=n.headers||this.headers,Je=n.params||this.params,ls=n.context??this.context;return n.setHeaders!==void 0&&(Xe=Object.keys(n.setHeaders).reduce((cs,Oi)=>cs.set(Oi,n.setHeaders[Oi]),Xe)),n.setParams&&(Je=Object.keys(n.setParams).reduce((cs,Oi)=>cs.set(Oi,n.setParams[Oi]),Je)),new t(e,i,I,{params:Je,headers:Xe,context:ls,reportProgress:he,responseType:r,withCredentials:x,transferCache:m,keepalive:o,cache:a,priority:s,timeout:C,mode:l,redirect:c,credentials:d,referrer:f,integrity:h,referrerPolicy:p})}},br=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(br||{}),wo=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Ci,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Md=class t extends wo{constructor(n={}){super(n)}type=br.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},fa=class t extends wo{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=br.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Co=class extends wo{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},GA=200,WA=204;var qA=new g("");var YA=/^\)\]\}',?\n/;var Nm=(()=>{class t{xhrFactory;tracingService=u(hn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new E(-2800,!1);let i=this.xhrFactory;return O(null).pipe(Me(()=>new q(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((I,x)=>s.setRequestHeader(I,x.join(","))),e.headers.has(YD)||s.setRequestHeader(YD,$A),!e.headers.has(qD)){let I=e.detectContentTypeHeader();I!==null&&s.setRequestHeader(qD,I)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let I=e.responseType.toLowerCase();s.responseType=I!=="json"?I:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let I=s.statusText||"OK",x=new Ci(s.getAllResponseHeaders()),he=s.responseURL||e.url;return l=new Md({headers:x,status:s.status,statusText:I,url:he}),l},d=this.maybePropagateTrace(()=>{let{headers:I,status:x,statusText:he,url:Xe}=c(),Je=null;x!==WA&&(Je=typeof s.response>"u"?s.responseText:s.response),x===0&&(x=Je?GA:0);let ls=x>=200&&x<300;if(e.responseType==="json"&&typeof Je=="string"){let cs=Je;Je=Je.replace(YA,"");try{Je=Je!==""?JSON.parse(Je):null}catch(Oi){Je=cs,ls&&(ls=!1,Je={error:Oi,text:Je})}}ls?(o.next(new fa({body:Je,headers:I,status:x,statusText:he,url:Xe||void 0})),o.complete()):o.error(new Co({error:Je,headers:I,status:x,statusText:he,url:Xe||void 0}))}),f=this.maybePropagateTrace(I=>{let{url:x}=c(),he=new Co({error:I,status:s.status||0,statusText:s.statusText||"Unknown Error",url:x||void 0});o.error(he)}),h=f;e.timeout&&(h=this.maybePropagateTrace(I=>{let{url:x}=c(),he=new Co({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:x||void 0});o.error(he)}));let p=!1,m=this.maybePropagateTrace(I=>{p||(o.next(c()),p=!0);let x={type:br.DownloadProgress,loaded:I.loaded};I.lengthComputable&&(x.total=I.total),e.responseType==="text"&&s.responseText&&(x.partialText=s.responseText),o.next(x)}),C=this.maybePropagateTrace(I=>{let x={type:br.UploadProgress,loaded:I.loaded};I.lengthComputable&&(x.total=I.total),o.next(x)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",h),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",m),a!==null&&s.upload&&s.upload.addEventListener("progress",C)),s.send(a),o.next({type:br.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",h),e.reportProgress&&(s.removeEventListener("progress",m),a!==null&&s.upload&&s.upload.removeEventListener("progress",C)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(S(_r))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ZA(t,n){return n(t)}function KA(t,n,e){return(i,r)=>et(e,()=>n(i,o=>t(o,r)))}var QD=new g("",{factory:()=>[]}),XD=new g(""),JD=new g("",{factory:()=>!0});var Fm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=S(Nm),r},providedIn:"root"})}return t})();var Td=(()=>{class t{backend;injector;chain=null;pendingTasks=u(wc);contributeToStability=u(JD);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(QD),...this.injector.get(XD,[])]));this.chain=i.reduceRight((r,o)=>KA(r,o,this.injector),ZA)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Gi(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(S(Fm),S(ye))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=S(Td),r},providedIn:"root"})}return t})();function Om(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Eo=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Do)o=e;else{let l;r.headers instanceof Ci?l=r.headers:l=new Ci(r.headers);let c;r.params&&(r.params instanceof Gn?c=r.params:c=new Gn({fromObject:r.params})),o=new Do(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=O(o).pipe(Zr(l=>this.handler.handle(l)));if(e instanceof Do||r.observe==="events")return s;let a=s.pipe(de(l=>l instanceof fa));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(A(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new E(2806,!1);return l.body}));case"blob":return a.pipe(A(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new E(2807,!1);return l.body}));case"text":return a.pipe(A(l=>{if(l.body!==null&&typeof l.body!="string")throw new E(2808,!1);return l.body}));default:return a.pipe(A(l=>l.body))}case"response":return a;default:throw new E(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Gn().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Om(r,i))}post(e,i,r={}){return this.request("POST",e,Om(r,i))}put(e,i,r={}){return this.request("PUT",e,Om(r,i))}static \u0275fac=function(i){return new(i||t)(S(Pm))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var QA=new g("",{factory:()=>!0}),XA="XSRF-TOKEN",JA=new g("",{factory:()=>XA}),eR="X-XSRF-TOKEN",tR=new g("",{factory:()=>eR}),nR=(()=>{class t{cookieName=u(JA);doc=u(H);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=aa(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),eC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=S(nR),r},providedIn:"root"})}return t})();function iR(t,n){if(!u(QA)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=u(bo).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch{return n(t)}let e=u(eC).getToken(),i=u(tR);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}function Lm(...t){let n=[Eo,Td,{provide:Pm,useExisting:Td},{provide:Fm,useFactory:()=>u(qA,{optional:!0})??u(Nm)},{provide:QD,useValue:iR,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return Ji(n)}var tC=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(S(H))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ha=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=S(oR),r},providedIn:"root"})}return t})(),oR=(()=>{class t extends ha{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case nt.NONE:return i;case nt.HTML:return mi(i,"HTML")?In(i):Vp(this._doc,String(i)).toString();case nt.STYLE:return mi(i,"Style")?In(i):i;case nt.SCRIPT:if(mi(i,"Script"))return In(i);throw new E(5200,!1);case nt.URL:return mi(i,"URL")?In(i):Ys(String(i));case nt.RESOURCE_URL:if(mi(i,"ResourceURL"))return In(i);throw new E(5201,!1);default:throw new E(5202,!1)}}bypassSecurityTrustHtml(e){return Op(e)}bypassSecurityTrustStyle(e){return Np(e)}bypassSecurityTrustScript(e){return Fp(e)}bypassSecurityTrustUrl(e){return Pp(e)}bypassSecurityTrustResourceUrl(e){return Lp(e)}static \u0275fac=function(i){return new(i||t)(S(H))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var K="primary",Sa=Symbol("RouteTitle"),Um=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Cr(t){return new Um(t)}function Vm(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function dC(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return Vm(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!Vm(o,t.slice(0,o.length),a)||!Vm(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Fd(t){return new Promise((n,e)=>{t.pipe(Rn()).subscribe({next:i=>n(i),error:i=>e(i)})})}function sR(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Sn(t[e],n[e]))return!1;return!0}function Sn(t,n){let e=t?zm(t):void 0,i=n?zm(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!uC(t[r],n[r]))return!1;return!0}function zm(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function uC(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function aR(t){return t.length>0?t[t.length-1]:null}function Ir(t){return gs(t)?t:gi(t)?Se(Promise.resolve(t)):O(t)}function fC(t){return gs(t)?Fd(t):Promise.resolve(t)}var lR={exact:mC,subset:gC},hC={exact:cR,subset:dR,ignored:()=>!0},pC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},$m={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function iC(t,n,e){return lR[e.paths](t.root,n.root,e.matrixParams)&&hC[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function cR(t,n){return Sn(t,n)}function mC(t,n,e){if(!Dr(t.segments,n.segments)||!kd(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!mC(t.children[i],n.children[i],e))return!1;return!0}function dR(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>uC(t[e],n[e]))}function gC(t,n,e){return vC(t,n,n.segments,e)}function vC(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Dr(r,e)||n.hasChildren()||!kd(r,e,i))}else if(t.segments.length===e.length){if(!Dr(t.segments,e)||!kd(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!gC(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Dr(t.segments,r)||!kd(t.segments,r,i)||!t.children[K]?!1:vC(t.children[K],n,o,i)}}function kd(t,n,e){return n.every((i,r)=>hC[e](t[r].parameters,i.parameters))}var Zt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new me([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Cr(this.queryParams),this._queryParamMap}toString(){return hR.serialize(this)}},me=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Od(this)}},wi=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Cr(this.parameters),this._parameterMap}toString(){return _C(this)}};function uR(t,n){return Dr(t,n)&&t.every((e,i)=>Sn(e.parameters,n[i].parameters))}function Dr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function fR(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===K&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==K&&(e=e.concat(n(r,i)))}),e}var Ma=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>new Ei,providedIn:"root"})}return t})(),Ei=class{parse(n){let e=new Wm(n);return new Zt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${pa(n.root,!0)}`,i=gR(n.queryParams),r=typeof n.fragment=="string"?`#${pR(n.fragment)}`:"";return`${e}${i}${r}`}},hR=new Ei;function Od(t){return t.segments.map(n=>_C(n)).join("/")}function pa(t,n){if(!t.hasChildren())return Od(t);if(n){let e=t.children[K]?pa(t.children[K],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==K&&i.push(`${r}:${pa(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=fR(t,(i,r)=>r===K?[pa(t.children[K],!1)]:[`${r}:${pa(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[K]!=null?`${Od(t)}/${e[0]}`:`${Od(t)}/(${e.join("//")})`}}function yC(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ad(t){return yC(t).replace(/%3B/gi,";")}function pR(t){return encodeURI(t)}function Gm(t){return yC(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Nd(t){return decodeURIComponent(t)}function rC(t){return Nd(t.replace(/\+/g,"%20"))}function _C(t){return`${Gm(t.path)}${mR(t.parameters)}`}function mR(t){return Object.entries(t).map(([n,e])=>`;${Gm(n)}=${Gm(e)}`).join("")}function gR(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Ad(e)}=${Ad(r)}`).join("&"):`${Ad(e)}=${Ad(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var vR=/^[^\/()?;#]+/;function jm(t){let n=t.match(vR);return n?n[0]:""}var yR=/^[^\/()?;=#]+/;function _R(t){let n=t.match(yR);return n?n[0]:""}var bR=/^[^=?&#]+/;function DR(t){let n=t.match(bR);return n?n[0]:""}var CR=/^[^&#]+/;function wR(t){let n=t.match(CR);return n?n[0]:""}var Wm=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new me([],{}):new me([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new E(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[K]=new me(e,i)),r}parseSegment(){let n=jm(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(n),new wi(Nd(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=_R(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=jm(this.remaining);r&&(i=r,this.capture(i))}n[Nd(e)]=Nd(i)}parseQueryParam(n){let e=DR(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=wR(this.remaining);s&&(i=s,this.capture(i))}let r=rC(e),o=rC(i);if(n.hasOwnProperty(r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=jm(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new E(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=K);let a=this.parseChildren(e+1);i[s??K]=Object.keys(a).length===1&&a[K]?a[K]:new me([],a),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new E(4011,!1)}};function bC(t){return t.segments.length>0?new me([],{[K]:t}):t}function DC(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=DC(r);if(i===K&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new me(t.segments,n);return ER(e)}function ER(t){if(t.numberOfChildren===1&&t.children[K]){let n=t.children[K];return new me(t.segments.concat(n.segments),n.children)}return t}function Mo(t){return t instanceof Zt}function CC(t,n,e=null,i=null,r=new Ei){let o=wC(t);return EC(o,n,e,i,r)}function wC(t){let n;function e(o){let s={};for(let l of o.children){let c=e(l);s[l.outlet]=c}let a=new me(o.url,s);return o===t&&(n=a),a}let i=e(t.root),r=bC(i);return n??r}function EC(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Bm(o,o,o,e,i,r);let s=IR(n);if(s.toRoot())return Bm(o,o,new me([],{}),e,i,r);let a=xR(s,o,t),l=a.processChildren?ga(a.segmentGroup,a.index,s.commands):xC(a.segmentGroup,a.index,s.commands);return Bm(o,a.segmentGroup,l,e,i,r)}function Pd(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function _a(t){return typeof t=="object"&&t!=null&&t.outlets}function oC(t,n,e){t||="\u0275";let i=new Zt;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Bm(t,n,e,i,r,o){let s={};for(let[c,d]of Object.entries(i??{}))s[c]=Array.isArray(d)?d.map(f=>oC(c,f,o)):oC(c,d,o);let a;t===n?a=e:a=IC(t,n,e);let l=bC(DC(a));return new Zt(l,s,r)}function IC(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=IC(o,n,e)}),new me(t.segments,i)}var Ld=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Pd(i[0]))throw new E(4003,!1);let r=i.find(_a);if(r&&r!==aR(i))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function IR(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Ld(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new Ld(e,n,i)}var xo=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function xR(t,n,e){if(t.isAbsolute)return new xo(n,!0,0);if(!e)return new xo(n,!1,NaN);if(e.parent===null)return new xo(e,!0,0);let i=Pd(t.commands[0])?0:1,r=e.segments.length-1+i;return SR(e,r,t.numberOfDoubleDots)}function SR(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new E(4005,!1);r=i.segments.length}return new xo(i,!1,r-o)}function MR(t){return _a(t[0])?t[0].outlets:{[K]:t}}function xC(t,n,e){if(t??=new me([],{}),t.segments.length===0&&t.hasChildren())return ga(t,n,e);let i=TR(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new me(t.segments.slice(0,i.pathIndex),{});return o.children[K]=new me(t.segments.slice(i.pathIndex),t.children),ga(o,0,r)}else return i.match&&r.length===0?new me(t.segments,{}):i.match&&!t.hasChildren()?qm(t,n,e):i.match?ga(t,0,r):qm(t,n,e)}function ga(t,n,e){if(e.length===0)return new me(t.segments,{});{let i=MR(e),r={};if(Object.keys(i).some(o=>o!==K)&&t.children[K]&&t.numberOfChildren===1&&t.children[K].segments.length===0){let o=ga(t.children[K],n,e);return new me(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=xC(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new me(t.segments,r)}}function TR(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(_a(a))break;let l=`${a}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!aC(l,c,s))return o;i+=2}else{if(!aC(l,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function qm(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(_a(o)){let l=AR(o.outlets);return new me(i,l)}if(r===0&&Pd(e[0])){let l=t.segments[n];i.push(new wi(l.path,sC(e[0]))),r++;continue}let s=_a(o)?o.outlets[K]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&Pd(a)?(i.push(new wi(s,sC(a))),r+=2):(i.push(new wi(s,{})),r++)}return new me(i,{})}function AR(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=qm(new me([],{}),0,i))}),n}function sC(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function aC(t,n,e){return t==e.path&&Sn(n,e.parameters)}var va="imperative",rt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(rt||{}),Vt=class{id;url;constructor(n,e){this.id=n,this.url=e}},wr=class extends Vt{type=rt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},qn=class extends Vt{urlAfterRedirects;type=rt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ft=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(ft||{}),ba=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(ba||{}),Yt=class extends Vt{reason;code;type=rt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function SC(t){return t instanceof Yt&&(t.code===ft.Redirect||t.code===ft.SupersededByNewNavigation)}var Yn=class extends Vt{reason;code;type=rt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Er=class extends Vt{error;target;type=rt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Da=class extends Vt{urlAfterRedirects;state;type=rt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vd=class extends Vt{urlAfterRedirects;state;type=rt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jd=class extends Vt{urlAfterRedirects;state;shouldActivate;type=rt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Bd=class extends Vt{urlAfterRedirects;state;type=rt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hd=class extends Vt{urlAfterRedirects;state;type=rt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ud=class{route;type=rt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},zd=class{route;type=rt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},$d=class{snapshot;type=rt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Gd=class{snapshot;type=rt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Wd=class{snapshot;type=rt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qd=class{snapshot;type=rt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var To=class{},Ca=class{},Ao=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function RR(t){return!(t instanceof To)&&!(t instanceof Ao)&&!(t instanceof Ca)}var Yd=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new No(this.rootInjector)}},No=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Yd(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(S(ye))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Zd=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Ym(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Ym(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Zm(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Zm(n,this._root).map(e=>e.value)}};function Ym(t,n){if(t===n.value)return n;for(let e of n.children){let i=Ym(t,e);if(i)return i}return null}function Zm(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Zm(t,e);if(i.length)return i.unshift(n),i}return[]}var Lt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Io(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var wa=class extends Zd{snapshot;constructor(n,e){super(n),this.snapshot=e,rg(this,n)}toString(){return this.snapshot.toString()}};function MC(t,n){let e=kR(t,n),i=new We([new wi("",{})]),r=new We({}),o=new We({}),s=new We({}),a=new We(""),l=new Ii(i,r,s,a,o,K,t,e.root);return l.snapshot=e.root,new wa(new Lt(l,[]),e)}function kR(t,n){let e={},i={},r={},s=new Ro([],e,r,"",i,K,t,null,{},n);return new Ea("",new Lt(s,[]))}var Ii=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,s,a,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(A(c=>c[Sa]))??O(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(A(n=>Cr(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(A(n=>Cr(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ig(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:v(v({},n.params),t.params),data:v(v({},n.data),t.data),resolve:v(v(v(v({},t.data),n.data),r?.data),t._resolvedData)}:i={params:v({},t.params),data:v({},t.data),resolve:v(v({},t.data),t._resolvedData??{})},r&&AC(r)&&(i.resolve[Sa]=r.title),i}var Ro=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Sa]}constructor(n,e,i,r,o,s,a,l,c,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Cr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Cr(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Ea=class extends Zd{url;constructor(n,e){super(e),this.url=n,rg(this,e)}toString(){return TC(this._root)}};function rg(t,n){n.value._routerState=t,n.children.forEach(e=>rg(t,e))}function TC(t){let n=t.children.length>0?` { ${t.children.map(TC).join(", ")} } `:"";return`${t.value}${n}`}function Hm(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Sn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Sn(n.params,e.params)||t.paramsSubject.next(e.params),sR(n.url,e.url)||t.urlSubject.next(e.url),Sn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Km(t,n){let e=Sn(t.params,n.params)&&uR(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Km(t.parent,n.parent))}function AC(t){return typeof t.title=="string"||t.title===null}var RC=new g(""),Ta=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=K;activateEvents=new N;deactivateEvents=new N;attachEvents=new N;detachEvents=new N;routerOutletData=ID();parentContexts=u(No);location=u(vt);changeDetector=u(Ke);inputBinder=u(Jd,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Qm(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Le]})}return t})(),Qm=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Ii?this.route:n===No?this.childContexts:n===RC?this.outletData:this.parent.get(n,e)}},Jd=new g("");var og=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&fe(0,"router-outlet")},dependencies:[Ta],encapsulation:2})}return t})();function sg(t){let n=t.children&&t.children.map(sg),e=n?Y(v({},t),{children:n}):v({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==K&&(e.component=og),e}function OR(t,n,e){let i=Ia(t,n._root,e?e._root:void 0);return new wa(i,n)}function Ia(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=NR(t,n,e);return new Lt(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>Ia(t,a)),s}}let i=FR(n.value),r=n.children.map(o=>Ia(t,o));return new Lt(i,r)}}function NR(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Ia(t,i,r);return Ia(t,i)})}function FR(t){return new Ii(new We(t.url),new We(t.params),new We(t.queryParams),new We(t.fragment),new We(t.data),t.outlet,t.component,t)}var ko=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},kC="ngNavigationCancelingError";function Kd(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Mo(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=OC(!1,ft.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function OC(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[kC]=!0,e.cancellationCode=n,e}function PR(t){return NC(t)&&Mo(t.url)}function NC(t){return!!t&&t[kC]}var Xm=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Hm(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=Io(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Io(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Io(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=Io(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new qd(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Gd(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Hm(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Hm(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}},Qd=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},So=class{component;route;constructor(n,e){this.component=n,this.route=e}};function LR(t,n,e){let i=t._root,r=n?n._root:null;return ma(i,r,e,[i.value])}function VR(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Fo(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!Gf(t)?t:n.get(t):i}function ma(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Io(n);return t.children.forEach(s=>{jR(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>ya(a,e.getContext(s),r)),r}function jR(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=BR(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Qd(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?ma(t,n,a?a.children:null,i,r):ma(t,n,e,i,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new So(a.outlet.component,s))}else s&&ya(n,a,r),r.canActivateChecks.push(new Qd(i)),o.component?ma(t,null,a?a.children:null,i,r):ma(t,null,e,i,r);return r}function BR(t,n,e){if(typeof e=="function")return et(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Dr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Dr(t.url,n.url)||!Sn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Km(t,n)||!Sn(t.queryParams,n.queryParams);default:return!Km(t,n)}}function ya(t,n,e){let i=Io(t),r=t.value;Object.entries(i).forEach(([o,s])=>{r.component?n?ya(s,n.children.getContext(o),e):ya(s,null,e):ya(s,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new So(n.outlet.component,r)):e.canDeactivateChecks.push(new So(null,r)):e.canDeactivateChecks.push(new So(null,r))}function Aa(t){return typeof t=="function"}function HR(t){return typeof t=="boolean"}function UR(t){return t&&Aa(t.canLoad)}function zR(t){return t&&Aa(t.canActivate)}function $R(t){return t&&Aa(t.canActivateChild)}function GR(t){return t&&Aa(t.canDeactivate)}function WR(t){return t&&Aa(t.canMatch)}function FC(t){return t instanceof zi||t?.name==="EmptyError"}var Rd=Symbol("INITIAL_VALUE");function Oo(){return Me(t=>vs(t.map(n=>n.pipe(we(1),at(Rd)))).pipe(A(n=>{for(let e of n)if(e!==!0){if(e===Rd)return Rd;if(e===!1||qR(e))return e}return!0}),de(n=>n!==Rd),we(1)))}function qR(t){return Mo(t)||t instanceof ko}function PC(t){return t.aborted?O(void 0).pipe(we(1)):new q(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function LC(t){return Be(PC(t))}function YR(t){return st(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?O(Y(v({},n),{guardsResult:!0})):ZR(o,e,i).pipe(st(s=>s&&HR(s)?KR(e,r,t):O(s)),A(s=>Y(v({},n),{guardsResult:s})))})}function ZR(t,n,e){return Se(t).pipe(st(i=>tk(i.component,i.route,e,n)),Rn(i=>i!==!0,!0))}function KR(t,n,e){return Se(n).pipe(Zr(i=>vn(XR(i.route.parent,e),QR(i.route,e),ek(t,i.path),JR(t,i.route))),Rn(i=>i!==!0,!0))}function QR(t,n){return t!==null&&n&&n(new Wd(t)),O(!0)}function XR(t,n){return t!==null&&n&&n(new $d(t)),O(!0)}function JR(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return O(!0);let i=e.map(r=>Tt(()=>{let o=n._environmentInjector,s=Fo(r,o),a=zR(s)?s.canActivate(n,t):et(o,()=>s(n,t));return Ir(a).pipe(Rn())}));return O(i).pipe(Oo())}function ek(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>VR(o)).filter(o=>o!==null).map(o=>Tt(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,c=Fo(a,l),d=$R(c)?c.canActivateChild(e,t):et(l,()=>c(e,t));return Ir(d).pipe(Rn())});return O(s).pipe(Oo())}));return O(r).pipe(Oo())}function tk(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return O(!0);let o=r.map(s=>{let a=n._environmentInjector,l=Fo(s,a),c=GR(l)?l.canDeactivate(t,n,e,i):et(a,()=>l(t,n,e,i));return Ir(c).pipe(Rn())});return O(o).pipe(Oo())}function nk(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return O(!0);let s=o.map(a=>{let l=Fo(a,t),c=UR(l)?l.canLoad(n,e):et(t,()=>l(n,e)),d=Ir(c);return r?d.pipe(LC(r)):d});return O(s).pipe(Oo(),VC(i))}function VC(t){return wf(He(n=>{if(typeof n!="boolean")throw Kd(t,n)}),A(n=>n===!0))}function ik(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return O(!0);let a=s.map(l=>{let c=Fo(l,t),d=WR(c)?c.canMatch(n,e,r):et(t,()=>c(n,e,r));return Ir(d).pipe(LC(o))});return O(a).pipe(Oo(),VC(i))}var Wn=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},xa=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function rk(t){throw new E(4e3,!1)}function ok(t){throw OC(!1,ft.GuardRejected)}var Jm=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[K])throw rk(`${n.redirectTo}`);r=r.children[K]}}async applyRedirectCommands(n,e,i,r,o){let s=await sk(e,r,o);if(s instanceof Zt)throw new xa(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]==="/")throw new xa(a);return a}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Zt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,i,r)}),new me(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new E(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function sk(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Fd(Ir(et(e,()=>i(n))))}function ak(t,n){return t.providers&&!t._injector&&(t._injector=ea(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Mn(t){return t.outlet||K}function lk(t,n){let e=t.filter(i=>Mn(i)===n);return e.push(...t.filter(i=>Mn(i)!==n)),e}var eg={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function jC(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function ck(t,n,e,i,r,o,s){let a=BC(t,n,e);if(!a.matched)return O(a);let l=jC(o(a));return i=ak(n,i),ik(i,n,e,r,l,s).pipe(A(c=>c===!0?a:v({},eg)))}function BC(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?v({},eg):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||dC)(e,t,n);if(!r)return v({},eg);let o={};Object.entries(r.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=r.consumed.length>0?v(v({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function lC(t,n,e,i){return e.length>0&&fk(t,e,i)?{segmentGroup:new me(n,uk(i,new me(e,t.children))),slicedSegments:[]}:e.length===0&&hk(t,e,i)?{segmentGroup:new me(t.segments,dk(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new me(t.segments,t.children),slicedSegments:e}}function dk(t,n,e,i){let r={};for(let o of e)if(eu(t,n,o)&&!i[Mn(o)]){let s=new me([],{});r[Mn(o)]=s}return v(v({},i),r)}function uk(t,n){let e={};e[K]=n;for(let i of t)if(i.path===""&&Mn(i)!==K){let r=new me([],{});e[Mn(i)]=r}return e}function fk(t,n,e){return e.some(i=>eu(t,n,i)&&Mn(i)!==K)}function hk(t,n,e){return e.some(i=>eu(t,n,i))}function eu(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function pk(t,n,e){return n.length===0&&!t.children[e]}var tg=class{};async function mk(t,n,e,i,r,o,s="emptyOnly",a){return new ng(t,n,e,i,r,s,o,a).recognize()}var gk=31,ng=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new Jm(this.urlSerializer,this.urlTree)}noMatchError(n){return new E(4002,`'${n.segmentGroup}'`)}async recognize(){let n=lC(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Lt(i,e),o=new Ea("",r),s=CC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new Ro([],Object.freeze({}),Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),K,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,K,e),rootSnapshot:e}}catch(i){if(i instanceof xa)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Wn?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=await this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof Lt?[s]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let c=i.children[l],d=lk(e,l),f=await this.processSegmentGroup(n,d,c,l,r);s.push(...f)}let a=HC(s);return vk(a),a}async processSegment(n,e,i,r,o,s,a){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,s,a)}catch(c){if(c instanceof Wn||FC(c))continue;throw c}if(pk(i,r,o))return new tg;throw new Wn(i)}async processSegmentAgainstRoute(n,e,i,r,o,s,a,l){if(Mn(i)!==s&&(s===K||!eu(r,o,i)))throw new Wn(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,l);throw new Wn(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=BC(e,r,o);if(!l)throw new Wn(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>gk&&(this.allowRedirects=!1));let p=this.createSnapshot(n,r,o,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let m=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,f,jC(p),n),C=await this.applyRedirects.lineralizeSegments(r,m);return this.processSegment(n,i,e,C.concat(h),s,!1,a)}createSnapshot(n,e,i,r,o){let s=new Ro(i,r,Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,_k(e),Mn(e),e.component??e._loadedComponent??null,e,bk(e),n),a=ig(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,e,i,r,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=Xe=>this.createSnapshot(n,i,Xe.consumedSegments,Xe.parameters,s),l=await Fd(ck(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new Wn(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:f,consumedSegments:h,remainingSegments:p}=l,m=this.createSnapshot(n,i,h,f,s),{segmentGroup:C,slicedSegments:I}=lC(e,h,p,c);if(I.length===0&&C.hasChildren()){let Xe=await this.processChildren(d,c,C,m);return new Lt(m,Xe)}if(c.length===0&&I.length===0)return new Lt(m,[]);let x=Mn(i)===o,he=await this.processSegment(d,c,C,I,x?K:o,!0,m);return new Lt(m,he instanceof Lt?[he]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Fd(nk(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw ok(e)}return{routes:[],injector:n}}};function vk(t){t.sort((n,e)=>n.value.outlet===K?-1:e.value.outlet===K?1:n.value.outlet.localeCompare(e.value.outlet))}function yk(t){let n=t.value.routeConfig;return n&&n.path===""}function HC(t){let n=[],e=new Set;for(let i of t){if(!yk(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=HC(i.children);n.push(new Lt(i.value,r))}return n.filter(i=>!e.has(i))}function _k(t){return t.data||{}}function bk(t){return t.resolve||{}}function Dk(t,n,e,i,r,o,s){return st(async a=>{let{state:l,tree:c}=await mk(t,n,e,i,a.extractedUrl,r,o,s);return Y(v({},a),{targetSnapshot:l,urlAfterRedirects:c})})}function Ck(t){return st(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return O(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let l of UC(a))o.add(l);let s=0;return Se(o).pipe(Zr(a=>r.has(a)?wk(a,e,t):(a.data=ig(a,a.parent,t).resolve,O(void 0))),He(()=>s++),Gl(1),st(a=>s===o.size?O(n):Fe))})}function UC(t){let n=t.children.map(e=>UC(e)).flat();return[t,...n]}function wk(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!AC(i)&&(r[Sa]=i.title),Tt(()=>(t.data=ig(t,t.parent,e).resolve,Ek(r,t,n).pipe(A(o=>(t._resolvedData=o,t.data=v(v({},t.data),o),null)))))}function Ek(t,n,e){let i=zm(t);if(i.length===0)return O({});let r={};return Se(i).pipe(st(o=>Ik(t[o],n,e).pipe(Rn(),He(s=>{if(s instanceof ko)throw Kd(new Ei,s);r[o]=s}))),Gl(1),A(()=>r),$i(o=>FC(o)?Fe:ms(o)))}function Ik(t,n,e){let i=n._environmentInjector,r=Fo(t,i),o=r.resolve?r.resolve(n,e):et(i,()=>r(n,e));return Ir(o)}function cC(t){return Me(n=>{let e=t(n);return e?Se(e).pipe(A(()=>n)):O(n)})}var ag=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===K);return i}getResolvedTitleForRoute(e){return e.data[Sa]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>u(zC),providedIn:"root"})}return t})(),zC=(()=>{class t extends ag{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(S(tC))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ra=new g("",{factory:()=>({})}),ka=new g(""),$C=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(_m);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await fC(et(e,()=>i.loadComponent())),s=await qC(WC(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await GC(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function GC(t,n,e,i){let r=await fC(et(e,()=>t.loadChildren())),o=await qC(WC(r)),s;o instanceof od||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),i&&i(t);let a,l,c=!1,d;return Array.isArray(s)?(l=s,c=!0):(a=s.create(e).injector,d=s,l=a.get(ka,[],{optional:!0,self:!0}).flat()),{routes:l.map(sg),injector:a,factory:d}}function xk(t){return t&&typeof t=="object"&&"default"in t}function WC(t){return xk(t)?t.default:t}async function qC(t){return t}var tu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>u(Sk),providedIn:"root"})}return t})(),Sk=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),YC=new g("");var Mk=()=>{},ZC=new g(""),KC=(()=>{class t{currentNavigation=ee(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=ee(null);events=new w;transitionAbortWithErrorSubject=new w;configLoader=u($C);environmentInjector=u(ye);destroyRef=u(Nt);urlSerializer=u(Ma);rootContexts=u(No);location=u(bi);inputBindingEnabled=u(Jd,{optional:!0})!==null;titleStrategy=u(ag);options=u(Ra,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(tu);createViewTransition=u(YC,{optional:!0});navigationErrorHandler=u(ZC,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>O(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Ud(r)),i=r=>this.events.next(new zd(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Ze(()=>{this.transitions?.next(Y(v({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new We(null),this.transitions.pipe(de(i=>i!==null),Me(i=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===i.id;return O(i).pipe(Me(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",ft.SupersededByNewNavigation),Fe;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?Y(v({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new Yn(a.id,this.urlSerializer.serialize(a.rawUrl),"",ba.IgnoredSameUrlNavigation)),a.resolve(!1),Fe;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return O(a).pipe(Me(f=>(this.events.next(new wr(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Fe:Promise.resolve(f))),Dk(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),He(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=f.urlAfterRedirects,h)),this.events.next(new Ca)}),Me(f=>Se(i.routesRecognizeHandler.deferredHandle??O(void 0)).pipe(A(()=>f))),He(()=>{let f=new Da(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:h,source:p,restoredState:m,extras:C}=a,I=new wr(f,this.urlSerializer.serialize(h),p,m);this.events.next(I);let x=MC(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=Y(v({},a),{targetSnapshot:x,urlAfterRedirects:h,extras:Y(v({},C),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(he=>(he.finalUrl=h,he)),O(i)}else return this.events.next(new Yn(a.id,this.urlSerializer.serialize(a.extractedUrl),"",ba.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Fe}),A(a=>{let l=new Vd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=i=Y(v({},a),{guards:LR(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),YR(a=>this.events.next(a)),Me(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Kd(this.urlSerializer,a.guardsResult);let l=new jd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return Fe;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",ft.GuardRejected),Fe;if(a.guards.canActivateChecks.length===0)return O(a);let c=new Bd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return Fe;let d=!1;return O(a).pipe(Ck(this.paramsInheritanceStrategy),He({next:()=>{d=!0;let f=new Hd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(a,"",ft.NoDataFromResolver)}}))}),cC(a=>{let l=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let h=d._environmentInjector;f.push(this.configLoader.loadComponent(h,d.routeConfig).then(p=>{d.component=p}))}for(let h of d.children)f.push(...l(h));return f},c=l(a.targetSnapshot.root);return c.length===0?O(a):Se(Promise.all(c).then(()=>a))}),cC(()=>this.afterPreactivation()),Me(()=>{let{currentSnapshot:a,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?Se(c).pipe(A(()=>i)):O(i)}),we(1),Me(a=>{let l=OR(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=Y(v({},a),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new To);let c=i.beforeActivateHandler.deferredHandle;return c?Se(c.then(()=>a)):O(a)}),He(a=>{new Xm(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(l=>(l.abort=Mk,l)),this.lastSuccessfulNavigation.set(Ze(this.currentNavigation)),this.events.next(new qn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),Be(PC(o.signal).pipe(de(()=>!r&&!i.targetRouterState),He(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",ft.Aborted)}))),He({complete:()=>{r=!0}}),Be(this.transitionAbortWithErrorSubject.pipe(He(a=>{throw a}))),Gi(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",ft.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),$i(a=>{if(r=!0,this.destroyed)return i.resolve(!1),Fe;if(NC(a))this.events.next(new Yt(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),PR(a)?this.events.next(new Ao(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Er(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let c=et(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof ko){let{message:d,cancellationCode:f}=Kd(this.urlSerializer,c);this.events.next(new Yt(i.id,this.urlSerializer.serialize(i.extractedUrl),d,f)),this.events.next(new Ao(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return Fe}))}))}cancelNavigationTransition(e,i,r){let o=new Yt(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Ze(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Tk(t){return t!==va}var QC=new g("");var XC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>u(Ak),providedIn:"root"})}return t})(),Xd=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},Ak=(()=>{class t extends Xd{static \u0275fac=(()=>{let e;return function(r){return(e||(e=gt(t)))(r||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lg=(()=>{class t{urlSerializer=u(Ma);options=u(Ra,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(bi);urlHandlingStrategy=u(tu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Zt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof Zt?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=MC(null,u(ye));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>u(Rk),providedIn:"root"})}return t})(),Rk=(()=>{class t extends lg{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof wr?this.updateStateMemento():e instanceof Yn?this.commitTransition(i):e instanceof Da?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof To?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Yt&&!SC(e)?this.restoreHistory(i):e instanceof Er?this.restoreHistory(i,!0):e instanceof qn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:i,id:r}){let{replaceUrl:o,state:s}=i;if(this.location.isCurrentPathEqualTo(e)||o){let a=this.browserPageId,l=v(v({},s),this.generateNgRouterState(r,a));this.location.replaceState(e,"",l)}else{let a=v(v({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",a)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=gt(t)))(r||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cg(t,n){t.events.pipe(de(e=>e instanceof qn||e instanceof Yt||e instanceof Er||e instanceof Yn),A(e=>e instanceof qn||e instanceof Yn?0:(e instanceof Yt?e.code===ft.Redirect||e.code===ft.SupersededByNewNavigation:!1)?2:1),de(e=>e!==2),we(1)).subscribe(()=>{n()})}var nu=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(ad);stateManager=u(lg);options=u(Ra,{optional:!0})||{};pendingTasks=u(jn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(KC);urlSerializer=u(Ma);location=u(bi);urlHandlingStrategy=u(tu);injector=u(ye);_events=new w;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(XC);injectorCleanup=u(QC,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(ka,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Jd,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new oe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Ze(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Yt&&i.code!==ft.Redirect&&i.code!==ft.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof qn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Ao){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=v({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Tk(r.source)},s);this.scheduleNavigation(a,va,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}RR(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),va,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let s=r?.navigationId?r:null;if(r){let l=v({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let a=this.parseUrl(e);this.scheduleNavigation(a,i,s,o).catch(l=>{this.disposed||this.injector.get(ln)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ze(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(sg),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=v(v({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=r?r.snapshot:this.routerState.snapshot.root;f=wC(h)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return EC(f,e,d,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Mo(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,va,null,i)}navigate(e,i={skipLocationChange:!1}){return kk(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(li(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=v({},pC):i===!1?r=v({},$m):r=v(v({},$m),i),Mo(e))return iC(this.currentUrlTree,e,r);let o=this.parseUrl(e);return iC(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,h)=>{a=f,l=h});let d=this.pendingTasks.add();return cg(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function kk(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new E(4008,!1)}var Fk=new g("");function dg(t,...n){return Ji([{provide:ka,multi:!0,useValue:t},[],{provide:Ii,useFactory:Pk},{provide:ld,multi:!0,useFactory:Lk},n.map(e=>e.\u0275providers)])}function Pk(){return u(nu).routerState.root}function Lk(){let t=u(U);return n=>{let e=t.get(Pt);if(n!==e.components[0])return;let i=t.get(nu),r=t.get(Vk);t.get(jk)===1&&i.initialNavigation(),t.get(Bk,null,{optional:!0})?.setUpPreloading(),t.get(Fk,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Vk=new g("",{factory:()=>new w}),jk=new g("",{factory:()=>1});var Bk=new g("");var sw=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(xe(Ne),xe(L))};static \u0275dir=z({type:t})}return t})(),Uk=(()=>{class t extends sw{static \u0275fac=(()=>{let e;return function(r){return(e||(e=gt(t)))(r||t)}})();static \u0275dir=z({type:t,features:[Ae]})}return t})(),jo=new g("");var zk={provide:jo,useExisting:wt(()=>pu),multi:!0};function $k(){let t=qt()?qt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Gk=new g(""),pu=(()=>{class t extends sw{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!$k())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(xe(Ne),xe(L),xe(Gk,8))};static \u0275dir=z({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&se("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[ze([zk]),Ae]})}return t})();function hg(t){return t==null||pg(t)===0}function pg(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Va=new g(""),mg=new g(""),Wk=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Vo=class{static min(n){return qk(n)}static max(n){return Yk(n)}static required(n){return Zk(n)}static requiredTrue(n){return Kk(n)}static email(n){return Qk(n)}static minLength(n){return Xk(n)}static maxLength(n){return Jk(n)}static pattern(n){return eO(n)}static nullValidator(n){return aw()}static compose(n){return hw(n)}static composeAsync(n){return pw(n)}};function qk(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function Yk(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function Zk(t){return hg(t.value)?{required:!0}:null}function Kk(t){return t.value===!0?null:{required:!0}}function Qk(t){return hg(t.value)||Wk.test(t.value)?null:{email:!0}}function Xk(t){return n=>{let e=n.value?.length??pg(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Jk(t){return n=>{let e=n.value?.length??pg(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function eO(t){if(!t)return aw;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(hg(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function aw(t){return null}function lw(t){return t!=null}function cw(t){return gi(t)?Se(t):t}function dw(t){let n={};return t.forEach(e=>{n=e!=null?v(v({},n),e):n}),Object.keys(n).length===0?null:n}function uw(t,n){return n.map(e=>e(t))}function tO(t){return!t.validate}function fw(t){return t.map(n=>tO(n)?n:e=>n.validate(e))}function hw(t){if(!t)return null;let n=t.filter(lw);return n.length==0?null:function(e){return dw(uw(e,n))}}function gg(t){return t!=null?hw(fw(t)):null}function pw(t){if(!t)return null;let n=t.filter(lw);return n.length==0?null:function(e){let i=uw(e,n).map(cw);return An(i).pipe(A(dw))}}function vg(t){return t!=null?pw(fw(t)):null}function JC(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function mw(t){return t._rawValidators}function gw(t){return t._rawAsyncValidators}function ug(t){return t?Array.isArray(t)?t:[t]:[]}function ru(t,n){return Array.isArray(t)?t.includes(n):t===n}function ew(t,n){let e=ug(n);return ug(t).forEach(r=>{ru(e,r)||e.push(r)}),e}function tw(t,n){return ug(n).filter(e=>!ru(t,e))}var ou=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=gg(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=vg(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},xr=class extends ou{name;get formDirective(){return null}get path(){return null}},Zn=class extends ou{_parent=null;name=null;valueAccessor=null},fg=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var vw=(()=>{class t extends fg{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(xe(Zn,2))};static \u0275dir=z({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&J("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ae]})}return t})();var Oa="VALID",iu="INVALID",Po="PENDING",Na="DISABLED",xi=class{},su=class extends xi{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Pa=class extends xi{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},La=class extends xi{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Lo=class extends xi{status;source;constructor(n,e){super(),this.status=n,this.source=e}},au=class extends xi{source;constructor(n){super(),this.source=n}},lu=class extends xi{source;constructor(n){super(),this.source=n}};function yw(t){return(mu(t)?t.validators:t)||null}function nO(t){return Array.isArray(t)?gg(t):t||null}function _w(t,n){return(mu(n)?n.asyncValidators:t)||null}function iO(t){return Array.isArray(t)?vg(t):t||null}function mu(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function rO(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new E(1e3,"");if(!i[e])throw new E(1001,"")}function oO(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new E(1002,"")})}var cu=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Ze(this.statusReactive)}set status(n){Ze(()=>this.statusReactive.set(n))}_status=_t(()=>this.statusReactive());statusReactive=ee(void 0);get valid(){return this.status===Oa}get invalid(){return this.status===iu}get pending(){return this.status==Po}get disabled(){return this.status===Na}get enabled(){return this.status!==Na}errors;get pristine(){return Ze(this.pristineReactive)}set pristine(n){Ze(()=>this.pristineReactive.set(n))}_pristine=_t(()=>this.pristineReactive());pristineReactive=ee(!0);get dirty(){return!this.pristine}get touched(){return Ze(this.touchedReactive)}set touched(n){Ze(()=>this.touchedReactive.set(n))}_touched=_t(()=>this.touchedReactive());touchedReactive=ee(!1);get untouched(){return!this.touched}_events=new w;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(ew(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(ew(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(tw(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(tw(n,this._rawAsyncValidators))}hasValidator(n){return ru(this._rawValidators,n)}hasAsyncValidator(n){return ru(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(Y(v({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new La(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new La(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(Y(v({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Pa(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Pa(!0,i))}markAsPending(n={}){this.status=Po;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Lo(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(Y(v({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Na,this.errors=null,this._forEachChild(r=>{r.disable(Y(v({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new su(this.value,i)),this._events.next(new Lo(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Y(v({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Oa,this._forEachChild(i=>{i.enable(Y(v({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Y(v({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Oa||this.status===Po)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new su(this.value,e)),this._events.next(new Lo(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(Y(v({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Na:Oa}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Po,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=cw(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Lo(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?Na:this.errors?iu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Po)?Po:this._anyControlsHaveStatus(iu)?iu:Oa}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Pa(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new La(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){mu(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=nO(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=iO(this._rawAsyncValidators)}},du=class extends cu{constructor(n,e,i){super(yw(e),_w(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){oO(this,!0,n),Object.keys(n).forEach(i=>{rO(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,Y(v({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new lu(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var gu=new g("",{factory:()=>yg}),yg="always";function sO(t,n){return[...n.path,t]}function uu(t,n,e=yg){_g(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),lO(t,n),dO(t,n),cO(t,n),aO(t,n)}function nw(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),hu(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function fu(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function aO(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function _g(t,n){let e=mw(t);n.validator!==null?t.setValidators(JC(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=gw(t);n.asyncValidator!==null?t.setAsyncValidators(JC(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();fu(n._rawValidators,r),fu(n._rawAsyncValidators,r)}function hu(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=mw(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=gw(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return fu(n._rawValidators,i),fu(n._rawAsyncValidators,i),e}function lO(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&bw(t,n)})}function cO(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&bw(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function bw(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function dO(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Dw(t,n){t==null,_g(t,n)}function uO(t,n){return hu(t,n)}function fO(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function hO(t){return Object.getPrototypeOf(t.constructor)===Uk}function Cw(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function pO(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===pu?e=o:hO(o)?i=o:r=o}),r||i||e||null}function mO(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var gO={provide:xr,useExisting:wt(()=>ja)},Fa=Promise.resolve(),ja=(()=>{class t extends xr{callSetDisabledState;get submitted(){return Ze(this.submittedReactive)}_submitted=_t(()=>this.submittedReactive());submittedReactive=ee(!1);_directives=new Set;form;ngSubmit=new N;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new du({},gg(e),vg(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Fa.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),uu(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Fa.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Fa.then(()=>{let i=this._findContainer(e.path),r=new du({});Dw(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Fa.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Fa.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Cw(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new au(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(xe(Va,10),xe(mg,10),xe(gu,8))};static \u0275dir=z({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&se("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ze([gO]),Ae]})}return t})();function iw(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function rw(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ww=class extends cu{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(yw(e),_w(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),mu(e)&&(e.nonNullable||e.initialValueIsDefault)&&(rw(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new lu(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){iw(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){iw(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){rw(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var vO=t=>t instanceof ww;var yO={provide:Zn,useExisting:wt(()=>bg)},ow=Promise.resolve(),bg=(()=>{class t extends Zn{_changeDetectorRef;callSetDisabledState;control=new ww;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new N;constructor(e,i,r,o,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=pO(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),fO(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){uu(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){ow.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&W(i);ow.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?sO(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(xe(xr,9),xe(Va,10),xe(mg,10),xe(jo,10),xe(Ke,8),xe(gu,8))};static \u0275dir=z({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[ze([yO]),Ae,Le]})}return t})();var _O=(()=>{class t extends xr{callSetDisabledState;get submitted(){return Ze(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=_t(()=>this._submittedReactive());_submittedReactive=ee(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(hu(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return uu(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){nw(e.control||null,e,!1),mO(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Cw(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new au(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(nw(i||null,e),vO(r)&&(uu(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);Dw(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&uO(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){_g(this.form,this),this._oldForm&&hu(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(xe(Va,10),xe(mg,10),xe(gu,8))};static \u0275dir=z({type:t,features:[Ae,Le]})}return t})();var bO={provide:xr,useExisting:wt(()=>Ba)},Ba=(()=>{class t extends _O{form=null;ngSubmit=new N;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=gt(t)))(r||t)}})();static \u0275dir=z({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&se("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ze([bO]),Ae]})}return t})();var DO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({})}return t})();var vu=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:gu,useValue:e.callSetDisabledState??yg}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[DO]})}return t})();var wO=new g("cdk-dir-doc",{providedIn:"root",factory:()=>u(H)}),EO=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ew(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?EO.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var bt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=ee("ltr");change=new N;constructor(){let e=u(wO,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Ew(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ge=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({})}return t})();var IO=["*"];var xO=new g("MAT_CARD_CONFIG"),Iw=(()=>{class t{appearance;constructor(){let e=u(xO,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&J("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:IO,decls:1,vars:0,template:function(i,r){i&1&&(Re(),ce(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})();var xw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var Sw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[ge]})}return t})();function Ha(t){return t.buttons===0||t.detail===0}function Ua(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Dg;function Mw(){if(Dg==null){let t=typeof document<"u"?document.head:null;Dg=!!(t&&(t.createShadowRoot||t.attachShadow))}return Dg}function Cg(t){if(Mw()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Sr(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Qe(t){return t.composedPath?t.composedPath()[0]:t.target}var wg;try{wg=typeof Intl<"u"&&Intl.v8BreakIterator}catch{wg=!1}var be=(()=>{class t{_platformId=u(pr);isBrowser=this._platformId?FD(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||wg)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var za;function Tw(){if(za==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>za=!0}))}finally{za=za||!1}return za}function Bo(t){return Tw()?t:!!t.capture}function Ho(t,n=0){return Aw(t)?Number(t):arguments.length===2?n:0}function Aw(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function jt(t){return t instanceof L?t.nativeElement:t}var Rw=new g("cdk-input-modality-detector-options"),kw={ignoreKeys:[18,17,224,91,16]},Ow=650,Eg={passive:!0,capture:!0},Nw=(()=>{class t{_platform=u(be);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new We(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Qe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Ow||(this._modality.next(Ha(e)?"keyboard":"mouse"),this._mostRecentTarget=Qe(e))};_onTouchstart=e=>{if(Ua(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Qe(e)};constructor(){let e=u(M),i=u(H),r=u(Rw,{optional:!0});if(this._options=v(v({},kw),r),this.modalityDetected=this._modality.pipe(bs(1)),this.modalityChanged=this.modalityDetected.pipe($l()),this._platform.isBrowser){let o=u(Ue).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Eg),o.listen(i,"mousedown",this._onMousedown,Eg),o.listen(i,"touchstart",this._onTouchstart,Eg)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$a=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})($a||{}),Fw=new g("cdk-focus-monitor-default-options"),yu=Bo({passive:!0,capture:!0}),Mr=(()=>{class t{_ngZone=u(M);_platform=u(be);_inputModalityDetector=u(Nw);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(H);_stopInputModalityDetector=new w;constructor(){let e=u(Fw,{optional:!0});this._detectionMode=e?.detectionMode||$a.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Qe(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=jt(e);if(!this._platform.isBrowser||r.nodeType!==1)return O();let o=Cg(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new w,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=jt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=jt(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===$a.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===$a.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Ow:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Qe(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,yu),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,yu)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Be(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,yu),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,yu),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _u=new WeakMap,ht=(()=>{class t{_appRef;_injector=u(U);_environmentInjector=u(ye);load(e){let i=this._appRef=this._appRef||this._injector.get(Pt),r=_u.get(i);r||(r={loaders:new Set,refs:[]},_u.set(i,r),i.onDestroy(()=>{_u.get(i)?.refs.forEach(o=>o.destroy()),_u.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(yd(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Du=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),bu;function MO(){if(bu===void 0&&(bu=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(bu=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return bu}function Tr(t){return MO()?.createHTML(t)||t}function Pw(t,n,e){let i=e.sanitize(nt.HTML,n);t.innerHTML=Tr(i||"")}function Kn(t){return Array.isArray(t)?t:[t]}var Lw=new Set,Ar,Cu=(()=>{class t{_platform=u(be);_nonce=u(vo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):AO}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&TO(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function TO(t,n){if(!Lw.has(t))try{Ar||(Ar=document.createElement("style"),n&&Ar.setAttribute("nonce",n),Ar.setAttribute("type","text/css"),document.head.appendChild(Ar)),Ar.sheet&&(Ar.sheet.insertRule(`@media ${t} {body{ }}`,0),Lw.add(t))}catch(e){console.error(e)}}function AO(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Ga=(()=>{class t{_mediaMatcher=u(Cu);_zone=u(M);_queries=new Map;_destroySubject=new w;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Vw(Kn(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Vw(Kn(e)).map(s=>this._registerQuery(s).observable),o=vs(r);return o=vn(o.pipe(we(1)),o.pipe(bs(1),ys(0))),o.pipe(A(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:c})=>{a.matches=a.matches||l,a.breakpoints[c]=l}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new q(s=>{let a=l=>this._zone.run(()=>s.next(l));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(at(i),A(({matches:s})=>({query:e,matches:s})),Be(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Vw(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var RO=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({providers:[RO]})}return t})();var Sg=(()=>{class t{_platform=u(be);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return OO(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=kO(HO(e));if(i&&(jw(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=jw(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!jO(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return BO(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function kO(t){try{return t.frameElement}catch{return null}}function OO(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function NO(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function FO(t){return LO(t)&&t.type=="hidden"}function PO(t){return VO(t)&&t.hasAttribute("href")}function LO(t){return t.nodeName.toLowerCase()=="input"}function VO(t){return t.nodeName.toLowerCase()=="a"}function Uw(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function jw(t){if(!Uw(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function jO(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function BO(t){return FO(t)?!1:NO(t)||PO(t)||t.hasAttribute("contenteditable")||Uw(t)}function HO(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var xg=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,s){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?It(n,{injector:this._injector}):setTimeout(n)}},Mg=(()=>{class t{_checker=u(Sg);_ngZone=u(M);_document=u(H);_injector=u(U);constructor(){u(ht).load(Du)}create(e,i=!1){return new xg(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zw=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),$w=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),UO=0,Tg=(()=>{class t{_ngZone=u(M);_defaultOptions=u($w,{optional:!0});_liveElement;_document=u(H);_sanitizer=u(ha);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(zw,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,s;return i.length===1&&typeof i[0]=="number"?s=i[0]:[o,s]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),s==null&&r&&(s=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(a=>this._currentResolve=a)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Pw(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${UO++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Si=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(Si||{}),Bw="cdk-high-contrast-black-on-white",Hw="cdk-high-contrast-white-on-black",Ig="cdk-high-contrast-active",Gw=(()=>{class t{_platform=u(be);_hasCheckedHighContrastMode=!1;_document=u(H);_breakpointSubscription;constructor(){this._breakpointSubscription=u(Ga).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Si.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Si.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Si.BLACK_ON_WHITE}return Si.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Ig,Bw,Hw),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Si.BLACK_ON_WHITE?e.add(Ig,Bw):i===Si.WHITE_ON_BLACK&&e.add(Ig,Hw)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ag=(()=>{class t{constructor(){u(Gw)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[wu]})}return t})();var zO=200,Eu=class{_letterKeyStream=new w;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new w;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:zO;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(He(e=>this._pressedLetters.push(e)),ys(n),de(()=>this._pressedLetters.length>0),A(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function ot(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Iu=class{_items;_activeItemIndex=ee(-1);_activeItem=ee(null);_wrap=!1;_typeaheadSubscription=oe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof dr?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):xn(n)&&(this._effectRef=Dn(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new w;change=new w;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Eu(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||ot(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return xn(this._items)?this._items():this._items instanceof dr?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Rr=class extends Iu{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Rg={},ke=class t{_appId=u(go);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Rg.hasOwnProperty(n)||(Rg[n]=0),`${n}${e?t._infix+"-":""}${Rg[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};var Kw=" ";function qa(t,n,e){let i=Qw(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(Kw)))}function kr(t,n,e){let i=Qw(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(Kw)):t.removeAttribute(n)}function Qw(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var mn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(mn||{}),xu,Or;function Su(){if(Or==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Or=!1,Or;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Or=!0;else{let t=Element.prototype.scrollTo;t?Or=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Or=!1}}return Or}function zo(){if(typeof document!="object"||!document)return mn.NORMAL;if(xu==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),xu=mn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,xu=t.scrollLeft===0?mn.NEGATED:mn.INVERTED),t.remove()}return xu}function kg(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var $o,Xw=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Og(){if($o)return $o;if(typeof document!="object"||!document)return $o=new Set(Xw),$o;let t=document.createElement("input");return $o=new Set(Xw.filter(n=>(t.setAttribute("type",n),t.type===n))),$o}var Jw={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var $O=new g("MATERIAL_ANIMATIONS"),eE=null;function Ng(){return u($O,{optional:!0})?.animationsDisabled||u(qs,{optional:!0})==="NoopAnimations"?"di-disabled":(eE??=u(Cu).matchMedia("(prefers-reduced-motion)").matches,eE?"reduced-motion":"enabled")}function $e(){return Ng()!=="enabled"}function je(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Go(t){return t!=null&&`${t}`!="false"}var Kt=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Kt||{}),Fg=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Kt.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},tE=Bo({passive:!0,capture:!0}),Pg=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,tE)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,tE)))}_delegateEventHandler=n=>{let e=Qe(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Ya={enterDuration:225,exitDuration:150},GO=800,nE=Bo({passive:!0,capture:!0}),iE=["mousedown","touchstart"],rE=["mouseup","mouseleave","touchend","touchcancel"],WO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Za=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Pg;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=jt(i)),o&&o.get(ht).load(WO)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=v(v({},Ya),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||qO(n,e,r),a=n-r.left,l=e-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),h=f.transitionProperty,p=f.transitionDuration,m=h==="none"||p==="0s"||p==="0s, 0s"||r.width===0&&r.height===0,C=new Fg(this,d,i,m);d.style.transform="scale3d(1, 1, 1)",C.state=Kt.FADING_IN,i.persistent||(this._mostRecentTransientRipple=C);let I=null;return!m&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let x=()=>{I&&(I.fallbackTimer=null),clearTimeout(Xe),this._finishRippleTransition(C)},he=()=>this._destroyRipple(C),Xe=setTimeout(he,c+100);d.addEventListener("transitionend",x),d.addEventListener("transitioncancel",he),I={onTransitionEnd:x,onTransitionCancel:he,fallbackTimer:Xe}}),this._activeRipples.set(C,I),(m||!c)&&this._finishRippleTransition(C),C}fadeOutRipple(n){if(n.state===Kt.FADING_OUT||n.state===Kt.HIDDEN)return;let e=n.element,i=v(v({},Ya),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Kt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=jt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,iE.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{rE.forEach(e=>{this._triggerElement.addEventListener(e,this,nE)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Kt.FADING_IN?this._startFadeOutTransition(n):n.state===Kt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Kt.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Kt.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Ha(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+GO;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Ua(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Kt.VISIBLE||n.config.terminateOnPointerUp&&n.state===Kt.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(iE.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(rE.forEach(e=>n.removeEventListener(e,this,nE)),this._pointerUpEventsRegistered=!1))}};function qO(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Lg=new g("mat-ripple-global-options"),Mu=(()=>{class t{_elementRef=u(L);_animationsDisabled=$e();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(M),i=u(be),r=u(Lg,{optional:!0}),o=u(U);this._globalOptions=r||{},this._rippleRenderer=new Za(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:v(v(v({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,v(v({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,v(v({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&J("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var YO={capture:!0},ZO=["focus","mousedown","mouseenter","touchstart"],Vg="mat-ripple-loader-uninitialized",jg="mat-ripple-loader-class-name",oE="mat-ripple-loader-centered",Tu="mat-ripple-loader-disabled",sE=(()=>{class t{_document=u(H);_animationsDisabled=$e();_globalRippleOptions=u(Lg,{optional:!0});_platform=u(be);_ngZone=u(M);_injector=u(U);_eventCleanups;_hosts=new Map;constructor(){let e=u(Ue).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ZO.map(i=>e.listen(this._document,i,this._onInteraction,YO)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(Vg,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(jg))&&e.setAttribute(jg,i.className||""),i.centered&&e.setAttribute(oE,""),i.disabled&&e.setAttribute(Tu,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Tu,""):e.removeAttribute(Tu)}_onInteraction=e=>{let i=Qe(e);if(i instanceof HTMLElement){let r=i.closest(`[${Vg}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(jg)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Ya.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Ya.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Tu),rippleConfig:{centered:e.hasAttribute(oE),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new Za(a,this._ngZone,i,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:c}),e.removeAttribute(Vg)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Wo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var KO=["mat-icon-button",""],QO=["*"],XO=new g("MAT_BUTTON_CONFIG");function aE(t){return t==null?void 0:pn(t)}var Bg=(()=>{class t{_elementRef=u(L);_ngZone=u(M);_animationsDisabled=$e();_config=u(XO,{optional:!0});_focusMonitor=u(Mr);_cleanupClick;_renderer=u(Ne);_rippleLoader=u(sE);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(ht).load(Wo);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(re("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Ie(r.color?"mat-"+r.color:""),J("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",W],disabled:[2,"disabled","disabled",W],ariaDisabled:[2,"aria-disabled","ariaDisabled",W],disabledInteractive:[2,"disabledInteractive","disabledInteractive",W],tabIndex:[2,"tabIndex","tabIndex",aE],_tabindex:[2,"tabindex","_tabindex",aE]}})}return t})(),Nr=(()=>{class t extends Bg{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ae],attrs:KO,ngContentSelectors:QO,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Re(),Gt(0,"span",0),ce(1),Gt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Au=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[ge]})}return t})();var JO=["matButton",""],eN=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],tN=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var lE=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),cE=(()=>{class t extends Bg{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=nN(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?lE.get(this._appearance):null,o=lE.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ae],attrs:JO,ngContentSelectors:tN,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Re(eN),Gt(0,"span",0),ce(1),zt(2,"span",1),ce(3,1),$t(),ce(4,2),Gt(5,"span",2)(6,"span",3)),i&2&&J("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function nN(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Mi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[Au,ge]})}return t})();function dE(t){return Error(`Unable to find icon with the name "${t}"`)}function iN(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function uE(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function fE(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Qn=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},pE=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Qn(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(nt.HTML,r);if(!s)throw fE(r);let a=Tr(s);return this._addSvgIconConfig(e,i,new Qn("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Qn(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(nt.HTML,i);if(!o)throw fE(i);let s=Tr(o);return this._addSvgIconSetConfig(e,new Qn("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(nt.RESOURCE_URL,e);if(!i)throw uE(e);let r=this._cachedIconsByUrl.get(i);return r?O(Ru(r)):this._loadSvgIconFromConfig(new Qn(e,null)).pipe(He(o=>this._cachedIconsByUrl.set(i,o)),A(o=>Ru(o)))}getNamedSvgIcon(e,i=""){let r=hE(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):ms(dE(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?O(Ru(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(A(i=>Ru(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return O(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe($i(a=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(nt.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(c)),O(null)})));return An(o).pipe(A(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw dE(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(He(i=>e.svgText=i),A(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?O(null):this._fetchIcon(e).pipe(He(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Tr("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Tr("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw iN();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(nt.RESOURCE_URL,i);if(!s)throw uE(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let l=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(A(c=>Tr(c)),Gi(()=>this._inProgressUrlFetches.delete(s)),_s());return this._inProgressUrlFetches.set(s,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(hE(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return rN(o)?new Qn(o.url,null,o.options):new Qn(o,null)}}static \u0275fac=function(i){return new(i||t)(S(Eo,8),S(ha),S(H,8),S(Ct))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ru(t){return t.cloneNode(!0)}function hE(t,n){return t+":"+n}function rN(t){return!!(t.url&&t.options)}var oN=["*"],sN=new g("MAT_ICON_DEFAULT_OPTIONS"),aN=new g("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(H),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),mE=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],lN=mE.map(t=>`[${t}]`).join(", "),cN=/^url\(['"]?#(.*?)['"]?\)$/,qo=(()=>{class t{_elementRef=u(L);_iconRegistry=u(pE);_location=u(aN);_errorHandler=u(Ct);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=oe.EMPTY;constructor(){let e=u(new $n("aria-hidden"),{optional:!0}),i=u(sN,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(lN),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)mE.forEach(s=>{let a=i[o],l=a.getAttribute(s),c=l?l.match(cN):null;if(c){let d=r.get(a);d||(d=[],r.set(a,d)),d.push({name:s,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(we(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(re("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Ie(r.color?"mat-"+r.color:""),J("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",W],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:oN,decls:1,vars:0,template:function(i,r){i&1&&(Re(),ce(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Yo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[ge]})}return t})();var gE=(()=>{class t{_animationsDisabled=$e();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&J("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var dN=["text"],uN=[[["mat-icon"]],"*"],fN=["mat-icon","*"];function hN(t,n){if(t&1&&fe(0,"mat-pseudo-checkbox",1),t&2){let e=$();pe("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function pN(t,n){if(t&1&&fe(0,"mat-pseudo-checkbox",3),t&2){let e=$();pe("disabled",e.disabled)}}function mN(t,n){if(t&1&&(_(0,"span",4),j(1),b()),t&2){let e=$();D(),vr("(",e.group.label,")")}}var Qa=new g("MAT_OPTION_PARENT_COMPONENT"),Xa=new g("MatOptgroup");var Ka=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Ti=(()=>{class t{_element=u(L);_changeDetectorRef=u(Ke);_parent=u(Qa,{optional:!0});group=u(Xa,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(ke).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ee(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new N;_text;_stateChanges=new w;constructor(){let e=u(ht);e.load(Wo),e.load(Du),this._signalDisableRipple=!!this._parent&&xn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ot(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ka(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&it(dN,7),i&2){let o;ae(o=le())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&se("click",function(){return r._selectViaInteraction()})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(yt("id",r.id),re("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),J("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",W]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:fN,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Re(uN),ne(0,hN,1,2,"mat-pseudo-checkbox",1),ce(1),_(2,"span",2,0),ce(4,1),b(),ne(5,pN,1,1,"mat-pseudo-checkbox",3),ne(6,mN,2,1,"span",4),fe(7,"div",5)),i&2&&(ie(r.multiple?0:-1),D(5),ie(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),D(),ie(r.group&&r.group._inert?6:-1),D(),pe("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[gE,Mu],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();function Ou(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let s=0;s<t+1;s++)i[s].group&&i[s].group===r[o]&&o++;return o}return 0}function Nu(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var gN=20,Fu=(()=>{class t{_ngZone=u(M);_platform=u(be);_renderer=u(Ue).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new w;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=gN){return this._platform.isBrowser?new q(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(zl(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):O()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(de(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=jt(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vE=(()=>{class t{elementRef=u(L);scrollDispatcher=u(Fu);ngZone=u(M);dir=u(bt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new w;_renderer=u(Ne);_cleanupScroll;_elementScrolled=new w;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&zo()!=mn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),zo()==mn.INVERTED?e.left=e.right:zo()==mn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Su()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:i:e=="end"&&(e=s?i:r),s&&zo()==mn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&zo()==mn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),vN=20,Xn=(()=>{class t{_platform=u(be);_listeners;_viewportSize=null;_change=new w;_document=u(H);constructor(){let e=u(M),i=u(Ue).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=vN){return e>0?this._change.pipe(zl(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ko=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({})}return t})(),zg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[ge,Ko,ge,Ko]})}return t})();var Ja=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Qo=class extends Ja{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Jn=class extends Ja{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},$g=class extends Ja{element;constructor(n){super(),this.element=n instanceof L?n.nativeElement:n}},Xo=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Qo)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Jn)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof $g)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Pu=class extends Xo{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(En,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||U.NULL,o=r.get(ye,i.injector);e=yd(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var el=(()=>{class t extends Xo{_moduleRef=u(En,{optional:!0});_document=u(H);_viewContainerRef=u(vt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new N;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Ae]})}return t})(),Fr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({})}return t})();var yE=Su();function ts(t){return new Lu(t.get(Xn),t.get(H))}var Lu=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=je(-this._previousScrollPosition.left),n.style.top=je(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),yE&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),yE&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function IE(t,n){return new Vu(t.get(Fu),t.get(M),t.get(Xn),n)}var Vu=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(de(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var tl=class{enable(){}disable(){}attach(){}};function Gg(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function _E(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function Lr(t,n){return new ju(t.get(Fu),t.get(Xn),t.get(M),n)}var ju=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Gg(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},xE=(()=>{class t{_injector=u(U);constructor(){}noop=()=>new tl;close=e=>IE(this._injector,e);block=()=>ts(this._injector);reposition=e=>Lr(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ei=class{positionStrategy;scrollStrategy=new tl;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Bu=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var SE=(()=>{class t{_attachedOverlays=[];_document=u(H);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ME=(()=>{class t extends SE{_ngZone=u(M);_renderer=u(Ue).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=gt(t)))(r||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),TE=(()=>{class t extends SE{_platform=u(be);_ngZone=u(M);_renderer=u(Ue).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Qe(e)};_clickListener=e=>{let i=Qe(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(bE(a.overlayElement,i)||bE(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=gt(t)))(r||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bE(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var AE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),zu=(()=>{class t{_platform=u(be);_containerElement;_document=u(H);_styleLoader=u(ht);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||kg()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),kg()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(AE)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wg=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function qg(t){return t&&t.nodeType===1}var Jo=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new w;_attachments=new w;_detachments=new w;_positionStrategy;_scrollStrategy;_locationChanges=oe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new w;_outsidePointerEvents=new w;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,l,c,d=!1,f,h){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=f,this._renderer=h,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=It(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=v(v({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Y(v({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=je(this._config.width),n.height=je(this._config.height),n.minWidth=je(this._config.minWidth),n.minHeight=je(this._config.minHeight),n.maxWidth=je(this._config.maxWidth),n.maxHeight=je(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;qg(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Wg(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Kn(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=It(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},DE="cdk-overlay-connected-position-bounding-box",_N=/([A-Za-z%]+)$/;function nl(t,n){return new Hu(n,t.get(Xn),t.get(H),t.get(be),t.get(zu))}var Hu=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new w;_resizeSubscription=oe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(DE),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,r,a),c=this._getOverlayPoint(l,e,a),d=this._getOverlayFit(c,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Pr(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(DE),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof L?this._origin.nativeElement:qg(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=wE(e),{x:s,y:a}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(s+=l),c&&(a+=c);let d=0-s,f=s+o.width-i.width,h=0-a,p=a+o.height-i.height,m=this._subtractOverflows(o.width,d,f),C=this._subtractOverflows(o.height,h,p),I=m*C;return{visibleArea:I,isCompletelyWithinViewport:o.width*o.height===I,fitsInViewportVertically:C===o.height,fitsInViewportHorizontally:m==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=CE(this._overlayRef.getConfig().minHeight),a=CE(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=r,c=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=wE(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),d=0,f=0;return r.width<=o.width?d=c||-s:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=l||-a:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!bN(this._lastScrollVisibility,i)){let r=new Bu(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let p=Math.min(i.bottom-n.y+i.top,n.y),m=this._lastBoundingBoxSize.height;o=p*2,s=n.y-p,o>m&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-m/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,f,h;if(c)h=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)f=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let p=Math.min(i.right-n.x+i.left,n.x),m=this._lastBoundingBoxSize.width;d=p*2,f=n.x-p,d>m&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-m/2)}return{top:s,left:f,bottom:a,right:h,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=je(i.width),r.height=je(i.height),r.top=je(i.top)||"auto",r.bottom=je(i.bottom)||"auto",r.left=je(i.left)||"auto",r.right=je(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=je(o)),s&&(r.maxWidth=je(s))}this._lastBoundingBoxSize=i,Pr(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Pr(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Pr(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Pr(i,this._getExactOverlayY(e,n,d)),Pr(i,this._getExactOverlayX(e,n,d))}else i.position="static";let a="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=je(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=je(s.maxWidth):o&&(i.maxWidth="")),Pr(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=je(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=je(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:_E(n,i),isOriginOutsideView:Gg(n,i),isOverlayClipped:_E(e,i),isOverlayOutsideView:Gg(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Kn(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof L)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Pr(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function CE(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(_N);return!e||e==="px"?parseFloat(n):null}return t||null}function wE(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function bN(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var EE="cdk-global-overlay-wrapper";function ns(t){return new Uu}var Uu=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(EE),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=i,l=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),c=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,f=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",p="",m="",C="";l?C="flex-start":d==="center"?(C="center",h?m=f:p=f):h?d==="left"||d==="end"?(C="flex-end",p=f):(d==="right"||d==="start")&&(C="flex-start",m=f):d==="left"||d==="start"?(C="flex-start",p=f):(d==="right"||d==="end")&&(C="flex-end",m=f),n.position=this._cssPosition,n.marginLeft=l?"0":p,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":m,e.justifyContent=C,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(EE),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},RE=(()=>{class t{_injector=u(U);constructor(){}global(){return ns()}flexibleConnectedTo(e){return nl(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),il=new g("OVERLAY_DEFAULT_CONFIG");function Vr(t,n){t.get(ht).load(AE);let e=t.get(zu),i=t.get(H),r=t.get(ke),o=t.get(Pt),s=t.get(bt),a=t.get(Ne,null,{optional:!0})||t.get(Ue).createRenderer(null,null),l=new ei(n),c=t.get(il,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=i.createElement("div"),f=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let h=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return qg(h)?h.after(f):h?.type==="parent"?h.element.appendChild(f):e.getContainerElement().appendChild(f),new Jo(new Pu(d,o,t),f,d,l,t.get(M),t.get(ME),i,t.get(bi),t.get(TE),n?.disableAnimations??t.get(qs,null,{optional:!0})==="NoopAnimations",t.get(ye),a)}var kE=(()=>{class t{scrollStrategies=u(xE);_positionBuilder=u(RE);_injector=u(U);constructor(){}create(e){return Vr(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),DN=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],CN=new g("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(U);return()=>Lr(t)}}),es=(()=>{class t{elementRef=u(L);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),OE=new g("cdk-connected-overlay-default-config"),$u=(()=>{class t{_dir=u(bt,{optional:!0});_injector=u(U);_overlayRef;_templatePortal;_backdropSubscription=oe.EMPTY;_attachSubscription=oe.EMPTY;_detachSubscription=oe.EMPTY;_positionSubscription=oe.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=u(CN);_ngZone=u(M);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new N;positionChange=new N;attach=new N;detach=new N;overlayKeydown=new N;overlayOutsideClick=new N;constructor(){let e=u(Et),i=u(vt),r=u(OE,{optional:!0}),o=u(il,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Jn(e,i),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=DN);let e=this._overlayRef=Vr(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!ot(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let r=this._getOriginElement(),o=Qe(i);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new ei({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=nl(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof es?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof es?this.origin.elementRef.nativeElement:this.origin instanceof L?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Af(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",W],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",W],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",W],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",W],push:[2,"cdkConnectedOverlayPush","push",W],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",W],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",W],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Le]})}return t})(),ti=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({providers:[kE],imports:[ge,Fr,zg,zg]})}return t})();var Yg=class{_box;_destroyed=new w;_resizeSubject=new w;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new q(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(de(e=>e.some(i=>i.target===n)),ql({bufferSize:1,refCount:!0}),Be(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},NE=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(M);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Yg(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wN=["notch"],EN=["matFormFieldNotchedOutline",""],IN=["*"],FE=["iconPrefixContainer"],PE=["textPrefixContainer"],LE=["iconSuffixContainer"],VE=["textSuffixContainer"],xN=["textField"],SN=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],MN=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function TN(t,n){t&1&&fe(0,"span",21)}function AN(t,n){if(t&1&&(_(0,"label",20),ce(1,1),ne(2,TN,1,0,"span",21),b()),t&2){let e=$(2);pe("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),re("for",e._control.disableAutomaticLabeling?null:e._control.id),D(2),ie(!e.hideRequiredMarker&&e._control.required?2:-1)}}function RN(t,n){if(t&1&&ne(0,AN,3,5,"label",20),t&2){let e=$();ie(e._hasFloatingLabel()?0:-1)}}function kN(t,n){t&1&&fe(0,"div",7)}function ON(t,n){}function NN(t,n){if(t&1&&xt(0,ON,0,0,"ng-template",13),t&2){$(2);let e=Wt(1);pe("ngTemplateOutlet",e)}}function FN(t,n){if(t&1&&(_(0,"div",9),ne(1,NN,1,1,null,13),b()),t&2){let e=$();pe("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),D(),ie(e._forceDisplayInfixLabel()?-1:1)}}function PN(t,n){t&1&&(_(0,"div",10,2),ce(2,2),b())}function LN(t,n){t&1&&(_(0,"div",11,3),ce(2,3),b())}function VN(t,n){}function jN(t,n){if(t&1&&xt(0,VN,0,0,"ng-template",13),t&2){$();let e=Wt(1);pe("ngTemplateOutlet",e)}}function BN(t,n){t&1&&(_(0,"div",14,4),ce(2,4),b())}function HN(t,n){t&1&&(_(0,"div",15,5),ce(2,5),b())}function UN(t,n){t&1&&fe(0,"div",16)}function zN(t,n){t&1&&(_(0,"div",18),ce(1,6),b())}function $N(t,n){if(t&1&&(_(0,"mat-hint",22),j(1),b()),t&2){let e=$(2);pe("id",e._hintLabelId),D(),Ve(e.hintLabel)}}function GN(t,n){if(t&1&&(_(0,"div",19),ne(1,$N,2,2,"mat-hint",22),ce(2,7),fe(3,"div",23),ce(4,8),b()),t&2){let e=$();D(),ie(e.hintLabel?1:-1)}}var Ri=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["mat-label"]]})}return t})(),WN=new g("MatError");var Wu=(()=>{class t{align="start";id=u(ke).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(yt("id",r.id),re("align",null),J("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),qN=new g("MatPrefix");var YN=new g("MatSuffix");var GE=new g("FloatingLabelParent"),jE=(()=>{class t{_elementRef=u(L);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(NE);_ngZone=u(M);_parent=u(GE);_resizeSubscription=new oe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return ZN(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&J("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function ZN(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var BE="mdc-line-ripple--active",Gu="mdc-line-ripple--deactivating",HE=(()=>{class t{_elementRef=u(L);_cleanupTransitionEnd;constructor(){let e=u(M),i=u(Ne);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Gu),e.add(BE)}deactivate(){this._elementRef.nativeElement.classList.add(Gu)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Gu);e.propertyName==="opacity"&&r&&i.remove(BE,Gu)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),UE=(()=>{class t{_elementRef=u(L);_ngZone=u(M);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&it(wN,5),i&2){let o;ae(o=le())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&J("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:EN,ngContentSelectors:IN,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Re(),Gt(0,"div",1),zt(1,"div",2,0),ce(3),$t(),Gt(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),rl=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t})}return t})();var jr=new g("MatFormField"),KN=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),zE="fill",QN="auto",$E="fixed",XN="translateY(-50%)",Br=(()=>{class t{_elementRef=u(L);_changeDetectorRef=u(Ke);_platform=u(be);_idGenerator=u(ke);_ngZone=u(M);_defaults=u(KN,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ra("iconPrefixContainer");_textPrefixContainerSignal=ra("textPrefixContainer");_iconSuffixContainerSignal=ra("iconSuffixContainer");_textSuffixContainerSignal=ra("textSuffixContainer");_prefixSuffixContainers=_t(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=xD(Ri);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Go(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||QN}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||zE;this._appearanceSignal.set(i)}_appearanceSignal=ee(zE);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||$E}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||$E}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new w;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=$e();constructor(){let e=this._defaults,i=u(bt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Dn(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=_t(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(at([void 0,void 0]),A(()=>[i.errorState,i.userAriaDescribedBy]),Wl(),de(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Be(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),At(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){TD({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=_t(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,p=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,m=`var(--mat-mdc-form-field-label-transform, ${XN} translateX(${p}))`,C=s+a+l+c;return[m,C]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(cd(o,r._labelChild,Ri,5),yi(o,rl,5)(o,qN,5)(o,YN,5)(o,WN,5)(o,Wu,5)),i&2){ud();let s;ae(s=le())&&(r._formFieldControl=s.first),ae(s=le())&&(r._prefixChildren=s),ae(s=le())&&(r._suffixChildren=s),ae(s=le())&&(r._errorChildren=s),ae(s=le())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(dd(r._iconPrefixContainerSignal,FE,5)(r._textPrefixContainerSignal,PE,5)(r._iconSuffixContainerSignal,LE,5)(r._textSuffixContainerSignal,VE,5),it(xN,5)(FE,5)(PE,5)(LE,5)(VE,5)(jE,5)(UE,5)(HE,5)),i&2){ud(4);let o;ae(o=le())&&(r._textField=o.first),ae(o=le())&&(r._iconPrefixContainer=o.first),ae(o=le())&&(r._textPrefixContainer=o.first),ae(o=le())&&(r._iconSuffixContainer=o.first),ae(o=le())&&(r._textSuffixContainer=o.first),ae(o=le())&&(r._floatingLabel=o.first),ae(o=le())&&(r._notchedOutline=o.first),ae(o=le())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&J("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ze([{provide:jr,useExisting:t},{provide:GE,useExisting:t}])],ngContentSelectors:MN,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Re(SN),xt(0,RN,1,1,"ng-template",null,0,na),_(2,"div",6,1),se("click",function(s){return r._control.onContainerClick(s)}),ne(4,kN,1,0,"div",7),_(5,"div",8),ne(6,FN,2,2,"div",9),ne(7,PN,3,0,"div",10),ne(8,LN,3,0,"div",11),_(9,"div",12),ne(10,jN,1,1,null,13),ce(11),b(),ne(12,BN,3,0,"div",14),ne(13,HN,3,0,"div",15),b(),ne(14,UN,1,0,"div",16),b(),_(15,"div",17),ne(16,zN,2,0,"div",18)(17,GN,5,1,"div",19),b()),i&2){let o;D(2),J("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),D(2),ie(!r._hasOutline()&&!r._control.disabled?4:-1),D(2),ie(r._hasOutline()?6:-1),D(),ie(r._hasIconPrefix?7:-1),D(),ie(r._hasTextPrefix?8:-1),D(2),ie(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),D(2),ie(r._hasTextSuffix?12:-1),D(),ie(r._hasIconSuffix?13:-1),D(),ie(r._hasOutline()?-1:14),D(),J("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();D(),ie((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[jE,UE,sa,HE,Wu],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var WE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[ge]})}return t})();var is=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[Au,WE,Ti,ge]})}return t})();var JN=["panel"],eF=["*"];function tF(t,n){if(t&1&&(zt(0,"div",1,0),ce(2),$t()),t&2){let e=n.id,i=$();Ie(i._classList),J("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),yt("id",i.id),re("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var Zg=class{source;option;constructor(n,e){this.source=n,this.option=e}},qE=new g("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),YE=(()=>{class t{_changeDetectorRef=u(Ke);_elementRef=u(L);_defaults=u(qE);_animationsDisabled=$e();_activeOptionChanges=oe.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new N;opened=new N;closed=new N;optionActivated=new N;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(ke).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(be);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Rr(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new Zg(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&yi(o,Ti,5)(o,Xa,5),i&2){let s;ae(s=le())&&(r.options=s),ae(s=le())&&(r.optionGroups=s)}},viewQuery:function(i,r){if(i&1&&it(Et,7)(JN,5),i&2){let o;ae(o=le())&&(r.template=o.first),ae(o=le())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",W],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",W],requireSelection:[2,"requireSelection","requireSelection",W],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",W],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",W]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[ze([{provide:Qa,useExisting:t}])],ngContentSelectors:eF,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(Re(),sd(0,tF,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})();var nF={provide:jo,useExisting:wt(()=>Kg),multi:!0};var iF=new g("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(U);return()=>Lr(t)}}),Kg=(()=>{class t{_environmentInjector=u(ye);_element=u(L);_injector=u(U);_viewContainerRef=u(vt);_zone=u(M);_changeDetectorRef=u(Ke);_dir=u(bt,{optional:!0});_formField=u(jr,{optional:!0,host:!0});_viewportRuler=u(Xn);_scrollStrategy=u(iF);_renderer=u(Ne);_animationsDisabled=$e();_defaults=u(qE,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new w;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=oe.EMPTY;_breakpointObserver=u(Ga);_handsetLandscapeSubscription=oe.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new w;_overlayPanelClass=Kn(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&kr(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return At(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(de(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(de(()=>this._overlayAttached)):O()).pipe(A(e=>e instanceof Ka?e:null))}optionSelections=Tt(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(at(e),Me(()=>At(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(Me(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new q(e=>{let i=o=>{let s=Qe(o),a=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&s!==this._element.nativeElement&&!this._hasFocus()&&(!a||!a.contains(s))&&(!l||!l.contains(s))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(s)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=ot(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let s=this.autocomplete._keyManager.activeItem,a=r===38||r===40;r===9||a&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):a&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(a||this.autocomplete._keyManager.activeItem!==s)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(s=>s.selected);if(o){let s=this._getDisplayValue(o.value);r!==s&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Sr()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new q(r=>{It(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(He(()=>this._positionStrategy.reapplyLastPosition()),Mf(0))??O();return At(e,i).pipe(Me(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),we(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;qa(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new Jn(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=Vr(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Jw.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!ot(e)||e.keyCode===38&&ot(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new ei({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=nl(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],s;this.position==="above"?s=o:this.position==="below"?s=i:s=[...i,...o],e.withPositions(s)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=Ou(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let s=o._getHostElement(),a=Nu(s.offsetTop,s.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(a)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&kr(this._trackedModal,"aria-owns",i),qa(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;kr(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&se("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(s){return r._handleInput(s)})("keydown",function(s){return r._handleKeydown(s)})("click",function(){return r._handleClick()}),i&2&&re("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",W]},exportAs:["matAutocompleteTrigger"],features:[ze([nF]),Le]})}return t})(),ZE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[ti,is,Ko,is,ge]})}return t})();var oF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),sF={passive:!0},KE=(()=>{class t{_platform=u(be);_ngZone=u(M);_renderer=u(Ue).createRenderer(null,null);_styleLoader=u(ht);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Fe;this._styleLoader.load(oF);let i=jt(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new w,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",a,sF)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=jt(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var QE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({})}return t})();var XE=new g("MAT_INPUT_VALUE_ACCESSOR");var qu=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rs=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var ni=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[wu,Br,ge]})}return t})();var dF=["button","checkbox","file","hidden","image","radio","range","reset","submit"],uF=new g("MAT_INPUT_CONFIG"),Yu=(()=>{class t{_elementRef=u(L);_platform=u(be);ngControl=u(Zn,{optional:!0,self:!0});_autofillMonitor=u(KE);_ngZone=u(M);_formField=u(jr,{optional:!0});_renderer=u(Ne);_uid=u(ke).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(uF,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new w;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Go(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Vo.required)??!1}set required(e){this._required=Go(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Og().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Go(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Og().has(e));constructor(){let e=u(ja,{optional:!0}),i=u(Ba,{optional:!0}),r=u(qu),o=u(XE,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?xn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new rs(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Dn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){dF.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&se("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(yt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),re("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),J("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",W]},exportAs:["matInput"],features:[ze([{provide:rl,useExisting:t}]),Le]})}return t})(),Zu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[ni,ni,QE,ge]})}return t})();var ol=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new w;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var fF=["trigger"],hF=["panel"],pF=[[["mat-select-trigger"]],"*"],mF=["mat-select-trigger","*"];function gF(t,n){if(t&1&&(_(0,"span",4),j(1),b()),t&2){let e=$();D(),Ve(e.placeholder)}}function vF(t,n){t&1&&ce(0)}function yF(t,n){if(t&1&&(_(0,"span",11),j(1),b()),t&2){let e=$(2);D(),Ve(e.triggerValue)}}function _F(t,n){if(t&1&&(_(0,"span",5),ne(1,vF,1,0)(2,yF,2,1,"span",11),b()),t&2){let e=$();D(),ie(e.customTrigger?1:2)}}function bF(t,n){if(t&1){let e=zn();_(0,"div",12,1),se("keydown",function(r){on(e);let o=$();return sn(o._handleKeydown(r))}),ce(2,1),b()}if(t&2){let e=$();Ie(e.panelClass),J("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),re("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var DF=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(U);return()=>Lr(t)}}),CF=new g("MAT_SELECT_CONFIG"),wF=new g("MatSelectTrigger"),Qg=class{source;value;constructor(n,e){this.source=n,this.value=e}},e0=(()=>{class t{_viewportRuler=u(Xn);_changeDetectorRef=u(Ke);_elementRef=u(L);_dir=u(bt,{optional:!0});_idGenerator=u(ke);_renderer=u(Ne);_parentFormField=u(jr,{optional:!0});ngControl=u(Zn,{self:!0,optional:!0});_liveAnnouncer=u(Tg);_defaultOptions=u(CF,{optional:!0});_animationsDisabled=$e();_popoverLocation;_initialized=new w;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let r=this.panel.nativeElement,o=Ou(e,this.options,this.optionGroups),s=i._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Nu(s.offsetTop,s.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Qg(this,e)}_scrollStrategyFactory=u(DF);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new w;_errorStateTracker;stateChanges=new w;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=ee(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Vo.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Tt(()=>{let e=this.options;return e?e.changes.pipe(at(e),Me(()=>At(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(Me(()=>this.optionSelectionChanges))});openedChange=new N;_openedStream=this.openedChange.pipe(de(e=>e),A(()=>{}));_closedStream=this.openedChange.pipe(de(e=>!e),A(()=>{}));selectionChange=new N;valueChange=new N;constructor(){let e=u(qu),i=u(ja,{optional:!0}),r=u(Ba,{optional:!0}),o=u(new $n("tabindex"),{optional:!0}),s=u(il,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new rs(e,this.ngControl,r,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new ol(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Be(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Be(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(at(null),Be(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(we(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=`${this.id}-panel`;this._trackedModal&&kr(this._trackedModal,"aria-owns",i),qa(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;kr(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,r=i===40||i===38||i===37||i===39,o=i===13||i===32,s=this._keyManager;if(!s.isTyping()&&o&&!ot(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let a=this.selected;s.onKeydown(e);let l=this.selected;l&&a!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,r=e.keyCode,o=r===40||r===38,s=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(r===13||r===32)&&i.activeItem&&!ot(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!s&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let a=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(a?l.select():l.deselect())})}else{let a=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==a&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!ot(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof es?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Rr(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=At(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Be(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),At(...this.options.map(i=>i._stateChanges)).pipe(Be(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,r)=>this.sortComparator?this.sortComparator(i,r,e):e.indexOf(i)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(r=>r.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=Qe(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-select"]],contentQueries:function(i,r,o){if(i&1&&yi(o,wF,5)(o,Ti,5)(o,Xa,5),i&2){let s;ae(s=le())&&(r.customTrigger=s.first),ae(s=le())&&(r.options=s),ae(s=le())&&(r.optionGroups=s)}},viewQuery:function(i,r){if(i&1&&it(fF,5)(hF,5)($u,5),i&2){let o;ae(o=le())&&(r.trigger=o.first),ae(o=le())&&(r.panel=o.first),ae(o=le())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,r){i&1&&se("keydown",function(s){return r._handleKeydown(s)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),i&2&&(re("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),J("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",W],disableRipple:[2,"disableRipple","disableRipple",W],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:pn(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",W],placeholder:"placeholder",required:[2,"required","required",W],multiple:[2,"multiple","multiple",W],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",W],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",pn],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",W]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ze([{provide:rl,useExisting:t},{provide:Qa,useExisting:t}]),Le],ngContentSelectors:mF,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,r){if(i&1&&(Re(pF),_(0,"div",2,0),se("click",function(){return r.open()}),_(3,"div",3),ne(4,gF,2,1,"span",4)(5,_F,3,1,"span",5),b(),_(6,"div",6)(7,"div",7),Vn(),_(8,"svg",8),fe(9,"path",9),b()()()(),xt(10,bF,3,16,"ng-template",10),se("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(s){return r._handleOverlayKeydown(s)})),i&2){let o=Wt(1);D(3),re("id",r._valueId),D(),ie(r.empty?4:5),D(6),pe("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[es,$u],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transform-origin: top center;
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: bottom center;
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return t})();var t0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[ti,is,ge,Ko,ni,is]})}return t})();var IF=["determinateSpinner"];function xF(t,n){if(t&1&&(Vn(),_(0,"svg",11),fe(1,"circle",12),b()),t&2){let e=$();re("viewBox",e._viewBox()),D(),gr("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),re("r",e._circleRadius())}}var SF=new g("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:n0})}),n0=100,MF=10,Ku=(()=>{class t{_elementRef=u(L);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=u(SF),i=Ng(),r=this._elementRef.nativeElement;this._noopAnimations=i==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&i==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=n0;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-MF)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(i,r){if(i&1&&it(IF,5),i&2){let o;ae(o=le())&&(r._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(i,r){i&2&&(re("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),Ie("mat-"+r.color),gr("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),J("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",pn],diameter:[2,"diameter","diameter",pn],strokeWidth:[2,"strokeWidth","strokeWidth",pn]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(i,r){if(i&1&&(xt(0,xF,2,8,"ng-template",null,0,na),_(2,"div",2,1),Vn(),_(4,"svg",3),fe(5,"circle",4),b()(),Dc(),_(6,"div",5)(7,"div",6)(8,"div",7),yo(9,8),b(),_(10,"div",9),yo(11,8),b(),_(12,"div",10),yo(13,8),b()()()),i&2){let o=Wt(1);D(4),re("viewBox",r._viewBox()),D(),gr("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),re("r",r._circleRadius()),D(4),pe("ngTemplateOutlet",o),D(2),pe("ngTemplateOutlet",o),D(2),pe("ngTemplateOutlet",o)}},dependencies:[sa],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Qu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[ge]})}return t})();var os=class t{http=u(Eo);baseUrl="https://pokeapi.co/api/v2";getPokedex(n){return this.http.get(`${this.baseUrl}/pokedex/${n}`)}getPokemon(n){return this.http.get(`${this.baseUrl}/pokemon/${n}`)}getPokemonList(n=2e3){return this.http.get(`${this.baseUrl}/pokemon?limit=${n}`)}getAllTypes(){return this.http.get(`${this.baseUrl}/type`)}getTypeData(n){return this.http.get(`${this.baseUrl}/type/${n}`)}buildTypeChart(){return this.getAllTypes().pipe(A(n=>n.results.filter(e=>!["unknown","shadow","stellar"].includes(e.name))),Me(n=>An(n.map(e=>this.getTypeData(e.name)))),A(n=>{let e={},i={};for(let r of n)e[r.name]={},i[r.name]=r.pokemon.map(o=>o.pokemon.name);for(let r of n){let{name:o,damage_relations:s}=r;for(let a of s.double_damage_from)e[a.name]||(e[a.name]={}),e[a.name][o]=2;for(let a of s.half_damage_from)e[a.name]||(e[a.name]={}),e[a.name][o]=.5;for(let a of s.no_damage_from)e[a.name]||(e[a.name]={}),e[a.name][o]=0}return{chart:e,pokemonByType:i}}))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};var ss=class t{pokemonService=u(os);team=ee(Array(6).fill(null));typeChart=ee(null);typeChartLoading=ee(!0);pokemonByType=ee({});constructor(){this.pokemonService.buildTypeChart().subscribe(({chart:n,pokemonByType:e})=>{this.typeChart.set(n),this.pokemonByType.set(e),this.typeChartLoading.set(!1)})}addToSlot(n,e){this.team.update(i=>{let r=[...i];return r[n]=e,r})}removeFromSlot(n){this.team.update(e=>{let i=[...e];return i[n]=null,i})}getPokemonDefensiveProfile(n){let e=this.typeChart();if(!e)return null;let i=Object.keys(e),r={};for(let o of i){let s=1;for(let a of n)s*=e[o]?.[a]??1;r[o]=s}return r}getTeamDefensiveProfile(n){let e=this.typeChart();if(!e)return null;let i=n.filter(s=>s!==null);if(i.length===0)return null;let r=Object.keys(e),o={};for(let s of r){let a=1/0;for(let l of i){let c=l.types.map(f=>f.type.name),d=1;for(let f of c)d*=e[s]?.[f]??1;d<a&&(a=d)}o[s]=a}return o}getRecommendedTypes(n){let e=this.typeChart();if(!e||n.length===0)return[];let i=new Set(this.team().filter(s=>s!==null).flatMap(s=>s.types.map(a=>a.type.name))),r=Object.keys(e),o=[];for(let s of r){if(i.has(s))continue;let a=0;for(let l of n)(e[l]?.[s]??1)<1&&a++;a>0&&o.push({type:s,covers:a})}return o.sort((s,a)=>a.covers-s.covers)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};function TF(t,n){}var ki=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Jg=(()=>{class t extends Xo{_elementRef=u(L);_focusTrapFactory=u(Mg);_config;_interactivityChecker=u(Sg);_ngZone=u(M);_focusMonitor=u(Mr);_renderer=u(Ne);_changeDetectorRef=u(Ke);_injector=u(U);_platform=u(be);_document=u(H);_portalOutlet;_focusTrapped=new w;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=u(ki,{optional:!0})||new ki,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),s=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_trapFocus(e){this._isDestroyed||It(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let r=Sr(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=Sr();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Sr()))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(i,r){if(i&1&&it(el,7),i&2){let o;ae(o=le())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,r){i&2&&re("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[Ae],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,r){i&1&&xt(0,TF,0,0,"ng-template",0)},dependencies:[el],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),sl=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new w;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!ot(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(n),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},AF=new g("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=u(U);return()=>ts(t)}}),RF=new g("DialogData"),kF=new g("DefaultDialogConfig");function OF(t){let n=ee(t),e=new N;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var ev=(()=>{class t{_injector=u(U);_defaultOptions=u(kF,{optional:!0});_parentDialog=u(t,{optional:!0,skipSelf:!0});_overlayContainer=u(zu);_idGenerator=u(ke);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new w;_afterOpenedAtThisLevel=new w;_ariaHiddenElements=new Map;_scrollStrategy=u(AF);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Tt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(at(void 0)));constructor(){}open(e,i){let r=this._defaultOptions||new ki;i=v(v({},r),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let o=this._getOverlayConfig(i),s=Vr(this._injector,o),a=new sl(s,i),l=this._attachContainer(s,a,i);if(a.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(we(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(e,a,l,i),this.openDialogs.push(a),a.closed.subscribe(()=>this._removeOpenDialog(a,!0)),this.afterOpened.next(a),a}closeAll(){Xg(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){Xg(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Xg(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new ei({positionStrategy:e.positionStrategy||ns().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,r){let o=r.injector||r.viewContainerRef?.injector,s=[{provide:ki,useValue:r},{provide:sl,useValue:i},{provide:Jo,useValue:e}],a;r.container?typeof r.container=="function"?a=r.container:(a=r.container.type,s.push(...r.container.providers(r))):a=Jg;let l=new Qo(a,r.viewContainerRef,U.create({parent:o||this._injector,providers:s}));return e.attach(l).instance}_attachDialogContent(e,i,r,o){if(e instanceof Et){let s=this._createInjector(o,i,r,void 0),a={$implicit:o.data,dialogRef:i};o.templateContext&&(a=v(v({},a),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new Jn(e,null,a,s))}else{let s=this._createInjector(o,i,r,this._injector),a=r.attachComponentPortal(new Qo(e,o.viewContainerRef,s));i.componentRef=a,i.componentInstance=a.instance}}_createInjector(e,i,r,o){let s=e.injector||e.viewContainerRef?.injector,a=[{provide:RF,useValue:e.data},{provide:sl,useValue:i}];return e.providers&&(typeof e.providers=="function"?a.push(...e.providers(i,e,r)):a.push(...e.providers)),e.direction&&(!s||!s.get(bt,null,{optional:!0}))&&a.push({provide:bt,useValue:OF(e.direction)}),U.create({parent:s||o,providers:a})}_removeOpenDialog(e,i){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,s)=>{o?s.setAttribute("aria-hidden",o):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let r=i.length-1;r>-1;r--){let o=i[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Xg(t,n){let e=t.length;for(;e--;)n(t[e])}var r0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({providers:[ev],imports:[ti,Fr,Ag,Fr]})}return t})();function NF(t,n){}var Ju=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},tv="mdc-dialog--open",o0="mdc-dialog--opening",s0="mdc-dialog--closing",FF=150,PF=75,LF=(()=>{class t extends Jg{_animationStateChanged=new N;_animationsEnabled=!$e();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?l0(this._config.enterAnimationDuration)??FF:0;_exitAnimationDuration=this._animationsEnabled?l0(this._config.exitAnimationDuration)??PF:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(a0,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(o0,tv)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(tv),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(tv),this._animationsEnabled?(this._hostElement.style.setProperty(a0,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(s0)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(o0,s0)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(r){return(e||(e=gt(t)))(r||t)}})();static \u0275cmp=V({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,r){i&2&&(yt("id",r._config.id),re("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),J("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[Ae],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(_(0,"div",0)(1,"div",1),xt(2,NF,0,0,"ng-template",2),b()())},dependencies:[el],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return t})(),a0="--mat-dialog-transition-duration";function l0(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?Ho(t.substring(0,t.length-2)):t.endsWith("s")?Ho(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var Xu=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(Xu||{}),as=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new oi(1);_beforeClosed=new oi(1);_result;_closeFallbackTimeout;_state=Xu.OPEN;_closeInteractionType;constructor(n,e,i){this._ref=n,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(de(r=>r.state==="opened"),we(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(de(r=>r.state==="closed"),we(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),At(this.backdropClick(),this.keydownEvents().pipe(de(r=>r.keyCode===27&&!this.disableClose&&!ot(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),VF(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(de(i=>i.state==="closing"),we(1)).subscribe(i=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=Xu.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=Xu.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function VF(t,n,e){return t._closeInteractionType=n,t.close(e)}var nv=new g("MatMdcDialogData"),jF=new g("mat-mdc-dialog-default-options"),BF=new g("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(U);return()=>ts(t)}}),ef=(()=>{class t{_defaultOptions=u(jF,{optional:!0});_scrollStrategy=u(BF);_parentDialog=u(t,{optional:!0,skipSelf:!0});_idGenerator=u(ke);_injector=u(U);_dialog=u(ev);_animationsDisabled=$e();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new w;_afterOpenedAtThisLevel=new w;dialogConfigClass=Ju;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Tt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(at(void 0)));constructor(){this._dialogRefConstructor=as,this._dialogContainerType=LF,this._dialogDataToken=nv}open(e,i){let r;i=v(v({},this._defaultOptions||new Ju),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,Y(v({},i),{positionStrategy:ns(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:ki,useValue:i}]},templateContext:()=>({dialogRef:r}),providers:(s,a,l)=>(r=new this._dialogRefConstructor(s,i,l),r.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:a.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(r);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var c0=(()=>{class t{_dialogRef=u(as,{optional:!0});_elementRef=u(L);_dialog=u(ef);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=HF(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t})}return t})(),d0=(()=>{class t extends c0{id=u(ke).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=gt(t)))(r||t)}})();static \u0275dir=z({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(i,r){i&2&&yt("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[Ae]})}return t})(),u0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=z({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[lm([vE])]})}return t})(),f0=(()=>{class t extends c0{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=gt(t)))(r||t)}})();static \u0275dir=z({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(i,r){i&2&&J("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[Ae]})}return t})();function HF(t,n){let e=t.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?n.find(i=>i.id===e.id):null}var tf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({providers:[ef],imports:[r0,ti,Fr,ge]})}return t})();function zF(t,n){if(t&1&&(_(0,"span",6),j(1),b()),t&2){let e=n.$implicit;D(),Ve(e)}}var nf=class t{data=u(nv);dialogRef=u(as);searchTerm="";get filteredPokemon(){return this.searchTerm?this.data.pokemon.filter(n=>n.includes(this.searchTerm.toLowerCase())):this.data.pokemon}close(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-type-pokemon-dialog"]],decls:19,vars:5,consts:[[1,"dialog-header"],["mat-dialog-title",""],["mat-icon-button","",3,"click"],["appearance","outline",1,"search-field"],["matInput","",3,"ngModelChange","ngModel"],[1,"pokemon-list"],[1,"pokemon-name"],["align","end"],["mat-button","",3,"click"]],template:function(e,i){e&1&&(_(0,"div",0)(1,"h2",1)(2,"span"),j(3),b(),j(4," Pok\xE9mon "),b(),_(5,"button",2),se("click",function(){return i.close()}),_(6,"mat-icon"),j(7,"close"),b()()(),_(8,"mat-dialog-content")(9,"mat-form-field",3)(10,"mat-label"),j(11,"Filter"),b(),_(12,"input",4),hd("ngModelChange",function(o){return vm(i.searchTerm,o)||(i.searchTerm=o),o}),b()(),_(13,"div",5),lt(14,zF,2,1,"span",6,vi),b()(),_(16,"mat-dialog-actions",7)(17,"button",8),se("click",function(){return i.close()}),j(18,"Close"),b()()),e&2&&(D(2),Ie(St("type-chip type-",i.data.type)),D(),Ve(i.data.type),D(9),fd("ngModel",i.searchTerm),D(2),ct(i.filteredPokemon))},dependencies:[Di,tf,d0,f0,u0,Mi,cE,Nr,vu,pu,vw,bg,Zu,Yu,Br,Ri,ni,Yo,qo],styles:[".dialog-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1rem 1rem 0}.search-field[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem}.pokemon-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;max-height:400px;overflow-y:auto}.pokemon-name[_ngcontent-%COMP%]{text-transform:capitalize;background:#0000000f;padding:4px 10px;border-radius:12px;font-size:.85rem}"]})};var al=(t,n)=>n.type;function $F(t,n){t&1&&(_(0,"div",0),fe(1,"mat-spinner",2),_(2,"p"),j(3,"Loading type data..."),b()())}function GF(t,n){if(t&1&&(_(0,"span"),j(1),b()),t&2){let e=n.$implicit;Ie(St("type-chip type-",e.type)),D(),yr("",e.type," \xD7",e.multiplier)}}function WF(t,n){if(t&1&&(_(0,"section")(1,"h3"),j(2,"Weaknesses"),b(),_(3,"div",3),lt(4,GF,2,5,"span",4,al),b()()),t&2){let e=$(2);D(4),ct(e.profile().weaknesses)}}function qF(t,n){if(t&1&&(_(0,"span"),j(1),b()),t&2){let e=n.$implicit;Ie(St("type-chip type-",e.type)),D(),yr("",e.type," \xD7",e.multiplier)}}function YF(t,n){if(t&1&&(_(0,"section")(1,"h3"),j(2,"Resistances"),b(),_(3,"div",3),lt(4,qF,2,5,"span",4,al),b()()),t&2){let e=$(2);D(4),ct(e.profile().resistances)}}function ZF(t,n){if(t&1&&(_(0,"span"),j(1),b()),t&2){let e=n.$implicit;Ie(St("type-chip type-",e.type)),D(),vr("",e.type," \xD70")}}function KF(t,n){if(t&1&&(_(0,"section")(1,"h3"),j(2,"Immunities"),b(),_(3,"div",3),lt(4,ZF,2,4,"span",4,al),b()()),t&2){let e=$(2);D(4),ct(e.profile().immunities)}}function QF(t,n){if(t&1&&(_(0,"span"),j(1),b()),t&2){let e=n.$implicit;Ie(St("type-chip type-",e.type)),D(),yr("",e.type," \xD7",e.multiplier)}}function XF(t,n){if(t&1&&(_(0,"section")(1,"h3"),j(2,"No Protection"),b(),_(3,"div",3),lt(4,QF,2,5,"span",4,al),b()()),t&2){let e=$(2);D(4),ct(e.profile().noProtection)}}function JF(t,n){if(t&1){let e=zn();_(0,"button",6),se("click",function(){let r=on(e).$implicit,o=$(3);return sn(o.openPokemonDialog(r.type))}),j(1),b()}if(t&2){let e=n.$implicit;Ie(St("type-chip type-",e.type," recommendation-chip")),D(),yr(" ",e.type," \u2014 covers ",e.covers," ")}}function eP(t,n){if(t&1&&(_(0,"section")(1,"h3"),j(2,"Recommended Types"),b(),_(3,"p",5),j(4,"Click a type to browse its Pok\xE9mon"),b(),_(5,"div",3),lt(6,JF,2,5,"button",4,al),b()()),t&2){let e=$(2);D(6),ct(e.profile().recommendations)}}function tP(t,n){if(t&1&&(_(0,"div",1)(1,"h2"),j(2,"Team Defensive Profile"),b(),ne(3,WF,6,0,"section"),ne(4,YF,6,0,"section"),ne(5,KF,6,0,"section"),ne(6,XF,6,0,"section"),ne(7,eP,8,0,"section"),b()),t&2){let e=$();D(3),ie(e.profile().weaknesses.length?3:-1),D(),ie(e.profile().resistances.length?4:-1),D(),ie(e.profile().immunities.length?5:-1),D(),ie(e.profile().noProtection.length?6:-1),D(),ie(e.profile().recommendations.length?7:-1)}}var rf=class t{teamService=u(ss);dialog=u(ef);loading=this.teamService.typeChartLoading;profile=_t(()=>{let n=this.teamService.team(),e=this.teamService.typeChart();if(!e||n.filter(f=>f!==null).length===0)return null;let r=this.teamService.getTeamDefensiveProfile(n);if(!r)return null;let o=Object.keys(e),s=[],a=[],l=[],c=[];for(let f of o){let h=r[f];h===0?l.push({type:f,multiplier:h}):h>1?(s.push({type:f,multiplier:h}),c.push({type:f,multiplier:h})):h<1?a.push({type:f,multiplier:h}):c.push({type:f,multiplier:h})}let d=this.teamService.getRecommendedTypes(c.map(f=>f.type));return{weaknesses:s,resistances:a,immunities:l,noProtection:c,recommendations:d}});openPokemonDialog(n){let e=this.teamService.pokemonByType();this.dialog.open(nf,{width:"500px",data:{type:n,pokemon:e[n]??[]}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-type-chart"]],decls:2,vars:1,consts:[[1,"loading"],[1,"type-chart"],["diameter","32"],[1,"type-list"],[3,"class"],[1,"section-hint"],[3,"click"]],template:function(e,i){e&1&&ne(0,$F,4,0,"div",0)(1,tP,8,5,"div",1),e&2&&ie(i.loading()?0:i.profile()?1:-1)},dependencies:[Di,Qu,Ku,tf,Mi],styles:[".type-chart[_ngcontent-%COMP%]{max-width:960px;margin:2rem auto;padding:0 2rem 4rem}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:1.5rem}h3[_ngcontent-%COMP%]{margin-bottom:.5rem;font-size:1rem;text-transform:uppercase;letter-spacing:.05em}section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.type-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.type-chip[_ngcontent-%COMP%]{padding:4px 12px;border-radius:12px;font-size:.8rem;font-weight:700;color:#fff;text-transform:capitalize}.loading[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:2rem}.section-hint[_ngcontent-%COMP%]{font-size:.75rem;opacity:.6;margin-bottom:.5rem}.recommendation-chip[_ngcontent-%COMP%]{border:none;cursor:pointer;font-family:inherit}"]})};var h0=[{label:"Gen 1: Red & Blue & Yellow",pokedexes:["kanto"]},{label:"Gen 2: Gold & Silver & Crystal",pokedexes:["original-johto"]},{label:"Gen 3: Ruby & Sapphire & Emerald",pokedexes:["hoenn"]},{label:"Gen 3: FireRed & LeafGreen",pokedexes:["kanto"]},{label:"Gen 4: Diamond & Pearl",pokedexes:["original-sinnoh"]},{label:"Gen 4: Platinum",pokedexes:["extended-sinnoh"]},{label:"Gen 4: HeartGold & SoulSilver",pokedexes:["updated-johto"]},{label:"Gen 5: Black & White",pokedexes:["original-unova"]},{label:"Gen 5: Black 2 & White 2",pokedexes:["updated-unova"]},{label:"Gen 6: X & Y",pokedexes:["kalos-central","kalos-coastal","kalos-mountain"]},{label:"Gen 6: Omega Ruby & Alpha Sapphire",pokedexes:["updated-hoenn"]},{label:"Gen 7: Sun & Moon",pokedexes:["original-alola"]},{label:"Gen 7: Ultra Sun & Ultra Moon",pokedexes:["updated-alola"]},{label:"Gen 7: Let's Go Pikachu & Eevee",pokedexes:["letsgo-kanto"]},{label:"Gen 8: Sword & Shield",pokedexes:["galar"],dlcPokedexes:["isle-of-armor","crown-tundra"]},{label:"Gen 8: Legends: Arceus",pokedexes:["hisui"]},{label:"Gen 9: Scarlet & Violet",pokedexes:["paldea"],dlcPokedexes:["kitakami","blueberry"]},{label:"Gen 9: Legends: Z-A",pokedexes:["lumiose-city"],dlcPokedexes:["hyperspace"]}];var nP=["mat-internal-form-field",""],iP=["*"],p0=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&J("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:nP,ngContentSelectors:iP,decls:1,vars:0,template:function(i,r){i&1&&(Re(),ce(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var rP=["switch"],oP=["*"];function sP(t,n){t&1&&(_(0,"span",11),Vn(),_(1,"svg",13),fe(2,"path",14),b(),_(3,"svg",15),fe(4,"path",16),b()())}var aP=new g("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),of=class{source;checked;constructor(n,e){this.source=n,this.checked=e}},iv=(()=>{class t{_elementRef=u(L);_focusMonitor=u(Mr);_changeDetectorRef=u(Ke);defaults=u(aP);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new of(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=$e();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new N;toggleChange=new N;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){u(ht).load(Wo);let e=u(new $n("tabindex"),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||"accent",this.id=this._uniqueId=u(ke).getId("mat-mdc-slide-toggle-"),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new of(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(i,r){if(i&1&&it(rP,5),i&2){let o;ae(o=le())&&(r._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(i,r){i&2&&(yt("id",r.id),re("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Ie(r.color?"mat-"+r.color:""),J("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",W],color:"color",disabled:[2,"disabled","disabled",W],disableRipple:[2,"disableRipple","disableRipple",W],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:pn(e)],checked:[2,"checked","checked",W],hideIcon:[2,"hideIcon","hideIcon",W],disabledInteractive:[2,"disabledInteractive","disabledInteractive",W]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[ze([{provide:jo,useExisting:wt(()=>t),multi:!0},{provide:Va,useExisting:t,multi:!0}]),Le],ngContentSelectors:oP,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(i,r){if(i&1&&(Re(),_(0,"div",1)(1,"button",2,0),se("click",function(){return r._handleClick()}),fe(3,"div",3)(4,"span",4),_(5,"span",5)(6,"span",6)(7,"span",7),fe(8,"span",8),b(),_(9,"span",9),fe(10,"span",10),b(),ne(11,sP,5,0,"span",11),b()()(),_(12,"label",12),se("click",function(s){return s.stopPropagation()}),ce(13),b()()),i&2){let o=Wt(2);pe("labelPosition",r.labelPosition),D(),J("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),pe("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),re("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),D(9),pe("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),D(),ie(r.hideIcon?-1:11),D(),pe("for",r.buttonId),re("id",r._labelId)}},dependencies:[Mu,p0],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return t})(),m0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=R({imports:[iv,ge]})}return t})();var cP=(t,n)=>n.label,dP=(t,n)=>n.type.name;function uP(t,n){if(t&1&&(_(0,"mat-option",5),j(1),b()),t&2){let e=n.$implicit;pe("value",e),D(),Ve(e.label)}}function fP(t,n){if(t&1){let e=zn();_(0,"mat-slide-toggle",10),se("change",function(r){on(e);let o=$();return sn(o.onDlcToggle(r.checked))}),j(1," Include DLC "),b()}if(t&2){let e=$();pe("checked",e.includeDlc())}}function hP(t,n){t&1&&fe(0,"mat-spinner",7)}function pP(t,n){if(t&1&&(_(0,"span"),j(1),b()),t&2){let e=n.$implicit;Ie(St("type-chip type-",e.type.name)),D(),Ve(e.type.name)}}function mP(t,n){if(t&1&&(_(0,"span"),j(1),b()),t&2){let e=n.$implicit;Ie(St("type-chip type-",e)),D(),Ve(e)}}function gP(t,n){if(t&1&&(_(0,"div",18)(1,"p",19),j(2,"Weak to"),b(),_(3,"div",15),lt(4,mP,2,4,"span",16,vi),b()()),t&2){$(2);let e=_o(7);D(4),ct(e.weaknesses)}}function vP(t,n){if(t&1&&(_(0,"span"),j(1),b()),t&2){let e=n.$implicit;Ie(St("type-chip type-",e)),D(),Ve(e)}}function yP(t,n){if(t&1&&(_(0,"div",18)(1,"p",19),j(2,"Resists"),b(),_(3,"div",15),lt(4,vP,2,4,"span",16,vi),b()()),t&2){$(2);let e=_o(7);D(4),ct(e.resistances)}}function _P(t,n){if(t&1&&(_(0,"span"),j(1),b()),t&2){let e=n.$implicit;Ie(St("type-chip type-",e)),D(),Ve(e)}}function bP(t,n){if(t&1&&(_(0,"div",18)(1,"p",19),j(2,"Immune to"),b(),_(3,"div",15),lt(4,_P,2,4,"span",16,vi),b()()),t&2){$(2);let e=_o(7);D(4),ct(e.immunities)}}function DP(t,n){if(t&1&&(ne(0,gP,6,0,"div",18),ne(1,yP,6,0,"div",18),ne(2,bP,6,0,"div",18)),t&2){$();let e=_o(7);ie(e.weaknesses.length?0:-1),D(),ie(e.resistances.length?1:-1),D(),ie(e.immunities.length?2:-1)}}function CP(t,n){if(t&1){let e=zn();_(0,"mat-card-content",11),fe(1,"img",13),_(2,"p",14),j(3),b(),_(4,"div",15),lt(5,pP,2,4,"span",16,dP),b(),pd(7),ne(8,DP,3,3),_(9,"button",17),se("click",function(){on(e);let r=$().$index,o=$();return sn(o.removePokemon(r))}),_(10,"mat-icon"),j(11,"close"),b()()()}if(t&2){let e=$().$implicit;D(),pe("src",e.sprites.front_default,jp)("alt",e.name),D(2),Ve(e.name),D(2),ct(e.types),D(2);let i=ym($().getSlotProfile(e));D(),ie(i?8:-1)}}function wP(t,n){if(t&1&&(_(0,"mat-option",5),j(1),b()),t&2){let e=n.$implicit;pe("value",e),D(),Ve(e)}}function EP(t,n){if(t&1){let e=zn();_(0,"mat-card-content",12)(1,"p"),j(2,"Empty Slot"),b(),_(3,"mat-form-field",20)(4,"mat-label"),j(5,"Search Pok\xE9mon"),b(),_(6,"input",21),se("input",function(r){on(e);let o=$().$index,s=$();return sn(s.onSearchChange(o,r.target.value))}),b(),_(7,"mat-autocomplete",22,0),se("optionSelected",function(r){on(e);let o=$().$index,s=$();return sn(s.selectPokemon(o,r.option.value))}),lt(9,wP,2,2,"mat-option",5,vi),b()()()}if(t&2){let e=Wt(8),i=$().$index,r=$();D(6),pe("value",r.searchInputs()[i])("matAutocomplete",e),D(3),ct(r.filteredOptions()[i])}}function IP(t,n){if(t&1&&(_(0,"mat-card",9),ne(1,CP,12,5,"mat-card-content",11)(2,EP,11,2,"mat-card-content",12),b()),t&2){let e=n.$implicit;D(),ie(e?1:2)}}var sf=class t{pokemonService=u(os);teamService=u(ss);allPokemonNames=ee([]);pokemonNames=ee([]);searchInputs=ee(Array(6).fill(""));filteredOptions=ee(Array.from({length:6},()=>[]));gameGroups=h0;includeDlc=ee(!1);selectedGroup=ee(null);filterLoading=ee(!1);ngOnInit(){this.pokemonService.getPokemonList().subscribe(n=>{let e=n.results.map(i=>i.name);this.allPokemonNames.set(e),this.pokemonNames.set(e)})}onGameGroupChange(n){this.selectedGroup.set(n),this.includeDlc.set(!1),this.loadPokemonForCurrentSelection()}onDlcToggle(n){this.includeDlc.set(n),this.loadPokemonForCurrentSelection()}loadPokemonForCurrentSelection(){let n=this.selectedGroup();if(!n){this.pokemonNames.set(this.allPokemonNames());return}this.filterLoading.set(!0);let i=[...n.pokedexes,...this.includeDlc()&&n.dlcPokedexes?n.dlcPokedexes:[]].map(r=>this.pokemonService.getPokedex(r));An(i).subscribe(r=>{let o=new Set;for(let s of r)for(let a of s.pokemon_entries)o.add(a.pokemon_species.name);this.pokemonNames.set([...o]),this.filterLoading.set(!1)})}onSearchChange(n,e){let i=[...this.searchInputs()];if(i[n]=e,this.searchInputs.set(i),e.length<2){let s=[...this.filteredOptions()];s[n]=[],this.filteredOptions.set(s);return}let r=this.pokemonNames().filter(s=>s.includes(e.toLowerCase())).slice(0,10),o=[...this.filteredOptions()];o[n]=r,this.filteredOptions.set(o)}selectPokemon(n,e){this.pokemonService.getPokemon(e).subscribe(i=>{this.teamService.addToSlot(n,i);let r=[...this.searchInputs()];r[n]="",this.searchInputs.set(r)})}removePokemon(n){this.teamService.removeFromSlot(n)}getSlotProfile(n){if(!n)return null;let e=n.types.map(r=>r.type.name),i=this.teamService.getPokemonDefensiveProfile(e);return i?{weaknesses:Object.entries(i).filter(([,r])=>r>1).map(([r])=>r),resistances:Object.entries(i).filter(([,r])=>r<1&&r>0).map(([r])=>r),immunities:Object.entries(i).filter(([,r])=>r===0).map(([r])=>r)}:null}get team(){return this.teamService.team()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-home"]],decls:16,vars:4,consts:[["auto","matAutocomplete"],[1,"page"],[1,"filter-bar"],["appearance","outline",1,"game-select"],[3,"selectionChange","value"],[3,"value"],[3,"checked"],["diameter","24"],[1,"team-grid"],[1,"slot-card"],[3,"change","checked"],[1,"slot-filled"],[1,"slot-empty"],[3,"src","alt"],[1,"pokemon-name"],[1,"type-chips"],[3,"class"],["mat-icon-button","","color","warn",3,"click"],[1,"slot-profile"],[1,"profile-label"],["appearance","outline"],["matInput","",3,"input","value","matAutocomplete"],[3,"optionSelected"]],template:function(e,i){if(e&1&&(_(0,"div",1)(1,"div",2)(2,"mat-form-field",3)(3,"mat-label"),j(4,"Filter by Game"),b(),_(5,"mat-select",4),se("selectionChange",function(o){return i.onGameGroupChange(o.value)}),_(6,"mat-option",5),j(7,"All Pok\xE9mon"),b(),lt(8,uP,2,2,"mat-option",5,cP),b()(),ne(10,fP,2,1,"mat-slide-toggle",6),ne(11,hP,1,0,"mat-spinner",7),b(),_(12,"div",8),lt(13,IP,3,1,"mat-card",9,pm),b()(),fe(15,"app-type-chart")),e&2){let r;D(5),pe("value",i.selectedGroup()),D(),pe("value",null),D(2),ct(i.gameGroups),D(2),ie((r=i.selectedGroup())!=null&&r.dlcPokedexes?10:-1),D(),ie(i.filterLoading()?11:-1),D(2),ct(i.team)}},dependencies:[m0,iv,Di,vu,Sw,Iw,xw,Mi,Nr,Yo,qo,ZE,YE,Ti,Kg,Zu,Yu,Br,Ri,ni,t0,e0,Qu,Ku,rf],styles:[".page[_ngcontent-%COMP%]{max-width:960px;margin:0 auto;padding:2rem}.title[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.team-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}.slot-card[_ngcontent-%COMP%]{min-height:200px}.slot-filled[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.5rem}.slot-empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;min-height:200px}.pokemon-name[_ngcontent-%COMP%]{text-transform:capitalize;font-weight:700;font-size:1.1rem}.type-chips[_ngcontent-%COMP%]{display:flex;gap:.4rem;flex-wrap:wrap;justify-content:center}.type-chip[_ngcontent-%COMP%]{padding:2px 10px;border-radius:12px;font-size:.75rem;font-weight:700;color:#fff;text-transform:capitalize}.slot-profile[_ngcontent-%COMP%]{width:100%;margin-top:.5rem}.profile-label[_ngcontent-%COMP%]{font-size:.75rem;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.25rem;opacity:.6}.filter-bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem}.game-select[_ngcontent-%COMP%]{width:300px}"]})};var g0=[{path:"",component:sf}];var v0={providers:[dg(g0),Lm()]};var af=class t{isDarkMode=ee(!1);constructor(){Dn(()=>{let n=this.isDarkMode();document.body.style.colorScheme=n?"dark":"light"})}toggle(){this.isDarkMode.update(n=>!n),console.log("dark mode:",this.isDarkMode())}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};var lf=class t{themeService=u(af);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-root"]],decls:12,vars:3,consts:[[1,"app-shell"],[1,"app-header"],[1,"app-title"],[1,"theme-toggle"],[1,"theme-label"],["mat-icon-button","",2,"color","var(--mat-sys-on-primary)",3,"click"]],template:function(e,i){e&1&&(_(0,"div",0)(1,"header",1)(2,"span",2),j(3,"Pok\xE9mon Team Builder"),b(),_(4,"div",3)(5,"span",4),j(6),b(),_(7,"button",5),se("click",function(){return i.themeService.toggle()}),_(8,"mat-icon"),j(9),b()()()(),_(10,"main"),fe(11,"router-outlet"),b()()),e&2&&(D(6),Ve(i.themeService.isDarkMode()?"Dark Mode":"Light Mode"),D(),re("aria-label",i.themeService.isDarkMode()?"Switch to light mode":"Switch to dark mode"),D(2),Ve(i.themeService.isDarkMode()?"dark_mode":"light_mode"))},dependencies:[Ta,Yo,qo,Mi,Nr],styles:[".app-shell[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column}.app-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1.5rem;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);border-bottom:none}.dark-mode[_ngcontent-%COMP%]   .app-header[_ngcontent-%COMP%]{border-bottom-color:#ffffff1f}.app-title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600}main[_ngcontent-%COMP%]{flex:1}.theme-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.theme-label[_ngcontent-%COMP%]{font-size:.9rem}html.dark[_ngcontent-%COMP%]   .app-header[_ngcontent-%COMP%]{background-color:#793636;color:#fff}"]})};km(lf,v0).catch(t=>console.error(t));

import{r as fo,f as Un,g as tE,a as Wk,u as eE,j as _n,B as nE,m as oE}from"./index-e78f6d33.js";import{h as zl}from"./moment-fbc5633a.js";var Js={exports:{}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */Js.exports;(function(Nt,Pt){(function(rn,we){Nt.exports=we(fo)})(self,rn=>(()=>{var we={703:(I,p,E)=>{var D=E(414);function C(){}function f(){}f.resetWarningCache=C,I.exports=function(){function A(B,j,L,R,q,J){if(J!==D){var mt=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw mt.name="Invariant Violation",mt}}function S(){return A}A.isRequired=A;var N={array:A,bigint:A,bool:A,func:A,number:A,object:A,string:A,symbol:A,any:A,arrayOf:S,element:A,elementType:A,instanceOf:S,node:A,objectOf:S,oneOf:S,oneOfType:S,shape:S,exact:S,checkPropTypes:f,resetWarningCache:C};return N.PropTypes=N,N}},697:(I,p,E)=>{I.exports=E(703)()},414:I=>{I.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:I=>{I.exports=rn}},U={};function Rt(I){var p=U[I];if(p!==void 0)return p.exports;var E=U[I]={exports:{}};return we[I](E,E.exports,Rt),E.exports}Rt.n=I=>{var p=I&&I.__esModule?()=>I.default:()=>I;return Rt.d(p,{a:p}),p},Rt.d=(I,p)=>{for(var E in p)Rt.o(p,E)&&!Rt.o(I,E)&&Object.defineProperty(I,E,{enumerable:!0,get:p[E]})},Rt.o=(I,p)=>Object.prototype.hasOwnProperty.call(I,p),Rt.r=I=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(I,"__esModule",{value:!0})};var M={};return(()=>{Rt.r(M),Rt.d(M,{CKEditor:()=>Mn,CKEditorContext:()=>Li});var I=Rt(787),p=Rt.n(I),E=Rt(697),D=Rt.n(E);const C=new Array(256).fill("").map((b,w)=>("0"+w.toString(16)).slice(-2));class f{constructor(w){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof w.crashNumberLimit=="number"?w.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof w.minimumNonErrorTimePeriod=="number"?w.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=x=>{const P="error"in x?x.error:x.reason;P instanceof Error&&this._handleError(P,x)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(w,x){this._listeners[w]||(this._listeners[w]=[]),this._listeners[w].push(x)}off(w,x){this._listeners[w]=this._listeners[w].filter(P=>P!==x)}_fire(w,...x){const P=this._listeners[w]||[];for(const $ of P)$.apply(this,[null,...x])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(w,x){if(this._shouldReactToError(w)){this.crashes.push({message:w.message,stack:w.stack,filename:x instanceof ErrorEvent?x.filename:void 0,lineno:x instanceof ErrorEvent?x.lineno:void 0,colno:x instanceof ErrorEvent?x.colno:void 0,date:this._now()});const P=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:w,causesRestart:P}),P?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(w){return w.is&&w.is("CKEditorError")&&w.context!==void 0&&w.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(w)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function A(b,w=new Set){const x=[b],P=new Set;let $=0;for(;x.length>$;){const tt=x[$++];if(!P.has(tt)&&S(tt)&&!w.has(tt))if(P.add(tt),Symbol.iterator in tt)try{for(const et of tt)x.push(et)}catch{}else for(const et in tt)et!=="defaultValue"&&x.push(tt[et])}return P}function S(b){const w=Object.prototype.toString.call(b),x=typeof b;return!(x==="number"||x==="boolean"||x==="string"||x==="symbol"||x==="function"||w==="[object Date]"||w==="[object RegExp]"||w==="[object Module]"||b==null||b._watchdogExcluded||b instanceof EventTarget||b instanceof Event)}function N(b,w,x=new Set){if(b===w&&typeof(P=b)=="object"&&P!==null)return!0;var P;const $=A(b,x),tt=A(w,x);for(const et of $)if(tt.has(et))return!0;return!1}const B=function(b){var w=typeof b;return b!=null&&(w=="object"||w=="function")},j=typeof Un=="object"&&Un&&Un.Object===Object&&Un;var L=typeof self=="object"&&self&&self.Object===Object&&self;const R=j||L||Function("return this")(),q=function(){return R.Date.now()};var J=/\s/;const mt=function(b){for(var w=b.length;w--&&J.test(b.charAt(w)););return w};var Y=/^\s+/;const y=function(b){return b&&b.slice(0,mt(b)+1).replace(Y,"")},G=R.Symbol;var ct=Object.prototype,St=ct.hasOwnProperty,Mt=ct.toString,_t=G?G.toStringTag:void 0;const je=function(b){var w=St.call(b,_t),x=b[_t];try{b[_t]=void 0;var P=!0}catch{}var $=Mt.call(b);return P&&(w?b[_t]=x:delete b[_t]),$};var ne=Object.prototype.toString;const sn=function(b){return ne.call(b)};var ie=G?G.toStringTag:void 0;const Re=function(b){return b==null?b===void 0?"[object Undefined]":"[object Null]":ie&&ie in Object(b)?je(b):sn(b)},it=function(b){return b!=null&&typeof b=="object"},dr=function(b){return typeof b=="symbol"||it(b)&&Re(b)=="[object Symbol]"};var ii=/^[-+]0x[0-9a-f]+$/i,hr=/^0b[01]+$/i,ri=/^0o[0-7]+$/i,ur=parseInt;const si=function(b){if(typeof b=="number")return b;if(dr(b))return NaN;if(B(b)){var w=typeof b.valueOf=="function"?b.valueOf():b;b=B(w)?w+"":w}if(typeof b!="string")return b===0?b:+b;b=y(b);var x=hr.test(b);return x||ri.test(b)?ur(b.slice(2),x?2:8):ii.test(b)?NaN:+b};var ai=Math.max,Dt=Math.min;const ko=function(b,w,x){var P,$,tt,et,ot,Bt,It=0,jo=!1,Ke=!1,Ce=!0;if(typeof b!="function")throw new TypeError("Expected a function");function gn(Jt){var Xt=P,Ye=$;return P=$=void 0,It=Jt,et=b.apply(Ye,Xt)}function Bn(Jt){var Xt=Jt-Bt;return Bt===void 0||Xt>=w||Xt<0||Ke&&Jt-It>=tt}function $e(){var Jt=q();if(Bn(Jt))return rt(Jt);ot=setTimeout($e,function(Xt){var Ye=w-(Xt-Bt);return Ke?Dt(Ye,tt-(Xt-It)):Ye}(Jt))}function rt(Jt){return ot=void 0,Ce&&P?gn(Jt):(P=$=void 0,et)}function ae(){var Jt=q(),Xt=Bn(Jt);if(P=arguments,$=this,Bt=Jt,Xt){if(ot===void 0)return function(Ye){return It=Ye,ot=setTimeout($e,w),jo?gn(Ye):et}(Bt);if(Ke)return clearTimeout(ot),ot=setTimeout($e,w),gn(Bt)}return ot===void 0&&(ot=setTimeout($e,w)),et}return w=si(w)||0,B(x)&&(jo=!!x.leading,tt=(Ke="maxWait"in x)?ai(si(x.maxWait)||0,w):tt,Ce="trailing"in x?!!x.trailing:Ce),ae.cancel=function(){ot!==void 0&&clearTimeout(ot),It=0,P=Bt=$=ot=void 0},ae.flush=function(){return ot===void 0?et:rt(q())},ae},bo=function(b,w,x){var P=!0,$=!0;if(typeof b!="function")throw new TypeError("Expected a function");return B(x)&&(P="leading"in x?!!x.leading:P,$="trailing"in x?!!x.trailing:$),ko(b,w,{leading:P,maxWait:w,trailing:$})},wo=function(){this.__data__=[],this.size=0},an=function(b,w){return b===w||b!=b&&w!=w},Hn=function(b,w){for(var x=b.length;x--;)if(an(b[x][0],w))return x;return-1};var gr=Array.prototype.splice;const ft=function(b){var w=this.__data__,x=Hn(w,b);return!(x<0)&&(x==w.length-1?w.pop():gr.call(w,x,1),--this.size,!0)},ci=function(b){var w=this.__data__,x=Hn(w,b);return x<0?void 0:w[x][1]},ta=function(b){return Hn(this.__data__,b)>-1},ea=function(b,w){var x=this.__data__,P=Hn(x,b);return P<0?(++this.size,x.push([b,w])):x[P][1]=w,this};function cn(b){var w=-1,x=b==null?0:b.length;for(this.clear();++w<x;){var P=b[w];this.set(P[0],P[1])}}cn.prototype.clear=wo,cn.prototype.delete=ft,cn.prototype.get=ci,cn.prototype.has=ta,cn.prototype.set=ea;const qn=cn,na=function(){this.__data__=new qn,this.size=0},li=function(b){var w=this.__data__,x=w.delete(b);return this.size=w.size,x},Zt=function(b){return this.__data__.get(b)},re=function(b){return this.__data__.has(b)},di=function(b){if(!B(b))return!1;var w=Re(b);return w=="[object Function]"||w=="[object GeneratorFunction]"||w=="[object AsyncFunction]"||w=="[object Proxy]"},hi=R["__core-js_shared__"];var se=function(){var b=/[^.]+$/.exec(hi&&hi.keys&&hi.keys.IE_PROTO||"");return b?"Symbol(src)_1."+b:""}();const Ae=function(b){return!!se&&se in b};var pr=Function.prototype.toString;const ln=function(b){if(b!=null){try{return pr.call(b)}catch{}try{return b+""}catch{}}return""};var oa=/^\[object .+?Constructor\]$/,Gn=Function.prototype,ia=Object.prototype,ra=Gn.toString,sa=ia.hasOwnProperty,mr=RegExp("^"+ra.call(sa).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Fe=function(b){return!(!B(b)||Ae(b))&&(di(b)?mr:oa).test(ln(b))},Qt=function(b,w){return b==null?void 0:b[w]},Ut=function(b,w){var x=Qt(b,w);return Fe(x)?x:void 0},Cn=Ut(R,"Map"),Ve=Ut(Object,"create"),fr=function(){this.__data__=Ve?Ve(null):{},this.size=0},ui=function(b){var w=this.has(b)&&delete this.__data__[b];return this.size-=w?1:0,w};var aa=Object.prototype.hasOwnProperty;const ca=function(b){var w=this.__data__;if(Ve){var x=w[b];return x==="__lodash_hash_undefined__"?void 0:x}return aa.call(w,b)?w[b]:void 0};var kr=Object.prototype.hasOwnProperty;const la=function(b){var w=this.__data__;return Ve?w[b]!==void 0:kr.call(w,b)},da=function(b,w){var x=this.__data__;return this.size+=this.has(b)?0:1,x[b]=Ve&&w===void 0?"__lodash_hash_undefined__":w,this};function Ht(b){var w=-1,x=b==null?0:b.length;for(this.clear();++w<x;){var P=b[w];this.set(P[0],P[1])}}Ht.prototype.clear=fr,Ht.prototype.delete=ui,Ht.prototype.get=ca,Ht.prototype.has=la,Ht.prototype.set=da;const br=Ht,Wn=function(){this.size=0,this.__data__={hash:new br,map:new(Cn||qn),string:new br}},Ao=function(b){var w=typeof b;return w=="string"||w=="number"||w=="symbol"||w=="boolean"?b!=="__proto__":b===null},_o=function(b,w){var x=b.__data__;return Ao(w)?x[typeof w=="string"?"string":"hash"]:x.map},ha=function(b){var w=_o(this,b).delete(b);return this.size-=w?1:0,w},ua=function(b){return _o(this,b).get(b)},ga=function(b){return _o(this,b).has(b)},pa=function(b,w){var x=_o(this,b),P=x.size;return x.set(b,w),this.size+=x.size==P?0:1,this};function ge(b){var w=-1,x=b==null?0:b.length;for(this.clear();++w<x;){var P=b[w];this.set(P[0],P[1])}}ge.prototype.clear=Wn,ge.prototype.delete=ha,ge.prototype.get=ua,ge.prototype.has=ga,ge.prototype.set=pa;const Co=ge,ma=function(b,w){var x=this.__data__;if(x instanceof qn){var P=x.__data__;if(!Cn||P.length<199)return P.push([b,w]),this.size=++x.size,this;x=this.__data__=new Co(P)}return x.set(b,w),this.size=x.size,this};function vn(b){var w=this.__data__=new qn(b);this.size=w.size}vn.prototype.clear=na,vn.prototype.delete=li,vn.prototype.get=Zt,vn.prototype.has=re,vn.prototype.set=ma;const fa=vn,ka=function(b,w){for(var x=-1,P=b==null?0:b.length;++x<P&&w(b[x],x,b)!==!1;);return b},Ue=function(){try{var b=Ut(Object,"defineProperty");return b({},"",{}),b}catch{}}(),vo=function(b,w,x){w=="__proto__"&&Ue?Ue(b,w,{configurable:!0,enumerable:!0,value:x,writable:!0}):b[w]=x};var wr=Object.prototype.hasOwnProperty;const Ar=function(b,w,x){var P=b[w];wr.call(b,w)&&an(P,x)&&(x!==void 0||w in b)||vo(b,w,x)},yo=function(b,w,x,P){var $=!x;x||(x={});for(var tt=-1,et=w.length;++tt<et;){var ot=w[tt],Bt=P?P(x[ot],b[ot],ot,x,b):void 0;Bt===void 0&&(Bt=b[ot]),$?vo(x,ot,Bt):Ar(x,ot,Bt)}return x},dn=function(b,w){for(var x=-1,P=Array(b);++x<b;)P[x]=w(x);return P},_r=function(b){return it(b)&&Re(b)=="[object Arguments]"};var Cr=Object.prototype,ba=Cr.hasOwnProperty,wa=Cr.propertyIsEnumerable;const Aa=_r(function(){return arguments}())?_r:function(b){return it(b)&&ba.call(b,"callee")&&!wa.call(b,"callee")},gi=Array.isArray,_a=function(){return!1};var vr=Pt&&!Pt.nodeType&&Pt,He=vr&&!0&&Nt&&!Nt.nodeType&&Nt,yn=He&&He.exports===vr?R.Buffer:void 0;const xn=(yn?yn.isBuffer:void 0)||_a;var Ca=/^(?:0|[1-9]\d*)$/;const va=function(b,w){var x=typeof b;return!!(w=w??9007199254740991)&&(x=="number"||x!="symbol"&&Ca.test(b))&&b>-1&&b%1==0&&b<w},yr=function(b){return typeof b=="number"&&b>-1&&b%1==0&&b<=9007199254740991};var xt={};xt["[object Float32Array]"]=xt["[object Float64Array]"]=xt["[object Int8Array]"]=xt["[object Int16Array]"]=xt["[object Int32Array]"]=xt["[object Uint8Array]"]=xt["[object Uint8ClampedArray]"]=xt["[object Uint16Array]"]=xt["[object Uint32Array]"]=!0,xt["[object Arguments]"]=xt["[object Array]"]=xt["[object ArrayBuffer]"]=xt["[object Boolean]"]=xt["[object DataView]"]=xt["[object Date]"]=xt["[object Error]"]=xt["[object Function]"]=xt["[object Map]"]=xt["[object Number]"]=xt["[object Object]"]=xt["[object RegExp]"]=xt["[object Set]"]=xt["[object String]"]=xt["[object WeakMap]"]=!1;const ya=function(b){return it(b)&&yr(b.length)&&!!xt[Re(b)]},pi=function(b){return function(w){return b(w)}};var xr=Pt&&!Pt.nodeType&&Pt,_e=xr&&!0&&Nt&&!Nt.nodeType&&Nt,xo=_e&&_e.exports===xr&&j.process;const En=function(){try{var b=_e&&_e.require&&_e.require("util").types;return b||xo&&xo.binding&&xo.binding("util")}catch{}}();var Er=En&&En.isTypedArray;const Eo=Er?pi(Er):ya;var xa=Object.prototype.hasOwnProperty;const Dr=function(b,w){var x=gi(b),P=!x&&Aa(b),$=!x&&!P&&xn(b),tt=!x&&!P&&!$&&Eo(b),et=x||P||$||tt,ot=et?dn(b.length,String):[],Bt=ot.length;for(var It in b)!w&&!xa.call(b,It)||et&&(It=="length"||$&&(It=="offset"||It=="parent")||tt&&(It=="buffer"||It=="byteLength"||It=="byteOffset")||va(It,Bt))||ot.push(It);return ot};var Ea=Object.prototype;const mi=function(b){var w=b&&b.constructor;return b===(typeof w=="function"&&w.prototype||Ea)},hn=function(b,w){return function(x){return b(w(x))}},Do=hn(Object.keys,Object);var Da=Object.prototype.hasOwnProperty;const Dn=function(b){if(!mi(b))return Do(b);var w=[];for(var x in Object(b))Da.call(b,x)&&x!="constructor"&&w.push(x);return w},Sn=function(b){return b!=null&&yr(b.length)&&!di(b)},fi=function(b){return Sn(b)?Dr(b):Dn(b)},So=function(b,w){return b&&yo(w,fi(w),b)},ki=function(b){var w=[];if(b!=null)for(var x in Object(b))w.push(x);return w};var Sa=Object.prototype.hasOwnProperty;const bi=function(b){if(!B(b))return ki(b);var w=mi(b),x=[];for(var P in b)(P!="constructor"||!w&&Sa.call(b,P))&&x.push(P);return x},qe=function(b){return Sn(b)?Dr(b,!0):bi(b)},Ia=function(b,w){return b&&yo(w,qe(w),b)};var wi=Pt&&!Pt.nodeType&&Pt,Ai=wi&&!0&&Nt&&!Nt.nodeType&&Nt,Sr=Ai&&Ai.exports===wi?R.Buffer:void 0,Ir=Sr?Sr.allocUnsafe:void 0;const _i=function(b,w){if(w)return b.slice();var x=b.length,P=Ir?Ir(x):new b.constructor(x);return b.copy(P),P},Ta=function(b,w){var x=-1,P=b.length;for(w||(w=Array(P));++x<P;)w[x]=b[x];return w},Tr=function(b,w){for(var x=-1,P=b==null?0:b.length,$=0,tt=[];++x<P;){var et=b[x];w(et,x,b)&&(tt[$++]=et)}return tt},Ci=function(){return[]};var Mr=Object.prototype.propertyIsEnumerable,In=Object.getOwnPropertySymbols;const vi=In?function(b){return b==null?[]:(b=Object(b),Tr(In(b),function(w){return Mr.call(b,w)}))}:Ci,yi=function(b,w){return yo(b,vi(b),w)},xi=function(b,w){for(var x=-1,P=w.length,$=b.length;++x<P;)b[$+x]=w[x];return b},kt=hn(Object.getPrototypeOf,Object),Br=Object.getOwnPropertySymbols?function(b){for(var w=[];b;)xi(w,vi(b)),b=kt(b);return w}:Ci,Ei=function(b,w){return yo(b,Br(b),w)},Di=function(b,w,x){var P=w(b);return gi(b)?P:xi(P,x(b))},Kn=function(b){return Di(b,fi,vi)},Si=function(b){return Di(b,qe,Br)},Ge=Ut(R,"DataView"),Io=Ut(R,"Promise"),$n=Ut(R,"Set"),Ii=Ut(R,"WeakMap");var Ti="[object Map]",Nr="[object Promise]",To="[object Set]",Pr="[object WeakMap]",zr="[object DataView]",Ma=ln(Ge),Mo=ln(Cn),Mi=ln(Io),Ba=ln($n),Na=ln(Ii),un=Re;(Ge&&un(new Ge(new ArrayBuffer(1)))!=zr||Cn&&un(new Cn)!=Ti||Io&&un(Io.resolve())!=Nr||$n&&un(new $n)!=To||Ii&&un(new Ii)!=Pr)&&(un=function(b){var w=Re(b),x=w=="[object Object]"?b.constructor:void 0,P=x?ln(x):"";if(P)switch(P){case Ma:return zr;case Mo:return Ti;case Mi:return Nr;case Ba:return To;case Na:return Pr}return w});const Bi=un;var Tn=Object.prototype.hasOwnProperty;const Pa=function(b){var w=b.length,x=new b.constructor(w);return w&&typeof b[0]=="string"&&Tn.call(b,"index")&&(x.index=b.index,x.input=b.input),x},Ni=R.Uint8Array,Bo=function(b){var w=new b.constructor(b.byteLength);return new Ni(w).set(new Ni(b)),w},Or=function(b,w){var x=w?Bo(b.buffer):b.buffer;return new b.constructor(x,b.byteOffset,b.byteLength)};var Lr=/\w*$/;const jr=function(b){var w=new b.constructor(b.source,Lr.exec(b));return w.lastIndex=b.lastIndex,w};var Pi=G?G.prototype:void 0,Rr=Pi?Pi.valueOf:void 0;const Fr=function(b){return Rr?Object(Rr.call(b)):{}},za=function(b,w){var x=w?Bo(b.buffer):b.buffer;return new b.constructor(x,b.byteOffset,b.length)},Vr=function(b,w,x){var P=b.constructor;switch(w){case"[object ArrayBuffer]":return Bo(b);case"[object Boolean]":case"[object Date]":return new P(+b);case"[object DataView]":return Or(b,x);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return za(b,x);case"[object Map]":case"[object Set]":return new P;case"[object Number]":case"[object String]":return new P(b);case"[object RegExp]":return jr(b);case"[object Symbol]":return Fr(b)}};var No=Object.create;const Oa=function(){function b(){}return function(w){if(!B(w))return{};if(No)return No(w);b.prototype=w;var x=new b;return b.prototype=void 0,x}}(),Ur=function(b){return typeof b.constructor!="function"||mi(b)?{}:Oa(kt(b))},Hr=function(b){return it(b)&&Bi(b)=="[object Map]"};var qr=En&&En.isMap;const Gr=qr?pi(qr):Hr,zi=function(b){return it(b)&&Bi(b)=="[object Set]"};var Wr=En&&En.isSet;const Oi=Wr?pi(Wr):zi;var Po="[object Arguments]",zo="[object Function]",Oo="[object Object]",bt={};bt[Po]=bt["[object Array]"]=bt["[object ArrayBuffer]"]=bt["[object DataView]"]=bt["[object Boolean]"]=bt["[object Date]"]=bt["[object Float32Array]"]=bt["[object Float64Array]"]=bt["[object Int8Array]"]=bt["[object Int16Array]"]=bt["[object Int32Array]"]=bt["[object Map]"]=bt["[object Number]"]=bt[Oo]=bt["[object RegExp]"]=bt["[object Set]"]=bt["[object String]"]=bt["[object Symbol]"]=bt["[object Uint8Array]"]=bt["[object Uint8ClampedArray]"]=bt["[object Uint16Array]"]=bt["[object Uint32Array]"]=!0,bt["[object Error]"]=bt[zo]=bt["[object WeakMap]"]=!1;const Kr=function b(w,x,P,$,tt,et){var ot,Bt=1&x,It=2&x,jo=4&x;if(P&&(ot=tt?P(w,$,tt,et):P(w)),ot!==void 0)return ot;if(!B(w))return w;var Ke=gi(w);if(Ke){if(ot=Pa(w),!Bt)return Ta(w,ot)}else{var Ce=Bi(w),gn=Ce==zo||Ce=="[object GeneratorFunction]";if(xn(w))return _i(w,Bt);if(Ce==Oo||Ce==Po||gn&&!tt){if(ot=It||gn?{}:Ur(w),!Bt)return It?Ei(w,Ia(ot,w)):yi(w,So(ot,w))}else{if(!bt[Ce])return tt?w:{};ot=Vr(w,Ce,Bt)}}et||(et=new fa);var Bn=et.get(w);if(Bn)return Bn;et.set(w,ot),Oi(w)?w.forEach(function(rt){ot.add(b(rt,x,P,rt,w,et))}):Gr(w)&&w.forEach(function(rt,ae){ot.set(ae,b(rt,x,P,ae,w,et))});var $e=Ke?void 0:(jo?It?Si:Kn:It?qe:fi)(w);return ka($e||w,function(rt,ae){$e&&(rt=w[ae=rt]),Ar(ot,ae,b(rt,x,P,ae,w,et))}),ot},$r=function(b,w){return Kr(b,5,w=typeof w=="function"?w:void 0)};var Yr=Function.prototype,Zr=Object.prototype,Qr=Yr.toString,La=Zr.hasOwnProperty,ja=Qr.call(Object);const Ra=function(b){if(!it(b)||Re(b)!="[object Object]")return!1;var w=kt(b);if(w===null)return!0;var x=La.call(w,"constructor")&&w.constructor;return typeof x=="function"&&x instanceof x&&Qr.call(x)==ja},Fa=function(b){return it(b)&&b.nodeType===1&&!Ra(b)};class We extends f{constructor(w,x={}){super(x),this._editor=null,this._throttledSave=bo(this._save.bind(this),typeof x.saveInterval=="number"?x.saveInterval:5e3),w&&(this._creator=(P,$)=>w.create(P,$)),this._destructor=P=>P.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(w){this._creator=w}setDestructor(w){this._destructor=w}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(w=>{console.error("An error happened during the editor destroying.",w)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const w=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,w,w.context)}}).then(()=>{this._fire("restart")})}create(w=this._elementOrData,x=this._config,P){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=w,this._config=this._cloneEditorConfiguration(x)||{},this._config.context=P,this._creator(w,this._config))).then($=>{this._editor=$,$.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=$.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const w=this._editor;return this._editor=null,w.model.document.off("change:data",this._throttledSave),this._destructor(w)})}_save(){const w=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=w}catch(x){console.error(x,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(w){this._excludedProps=w}_getData(){const w={};for(const x of this._editor.model.document.getRootNames())w[x]=this._editor.data.get({rootName:x});return w}_isErrorComingFromThisItem(w){return N(this._editor,w.context,this._excludedProps)}_cloneEditorConfiguration(w){return $r(w,(x,P)=>Fa(x)||P==="context"?x:void 0)}}const Se=Symbol("MainQueueId");class Jr extends f{constructor(w,x={}){super(x),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Va,this._watchdogConfig=x,this._creator=P=>w.create(P),this._destructor=P=>P.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(w){this._creator=w}setDestructor(w){this._destructor=w}get context(){return this._context}create(w={}){return this._actionQueues.enqueue(Se,()=>(this._contextConfig=w,this._create()))}getItem(w){return this._getWatchdog(w)._item}getItemState(w){return this._getWatchdog(w).state}add(w){const x=Yn(w);return Promise.all(x.map(P=>this._actionQueues.enqueue(P.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let $;if(this._watchdogs.has(P.id))throw new Error(`Item with the given id is already added: '${P.id}'.`);if(P.type==="editor")return $=new We(null,this._watchdogConfig),$.setCreator(P.creator),$._setExcludedProperties(this._contextProps),P.destructor&&$.setDestructor(P.destructor),this._watchdogs.set(P.id,$),$.on("error",(tt,{error:et,causesRestart:ot})=>{this._fire("itemError",{itemId:P.id,error:et}),ot&&this._actionQueues.enqueue(P.id,()=>new Promise(Bt=>{const It=()=>{$.off("restart",It),this._fire("itemRestart",{itemId:P.id}),Bt()};$.on("restart",It)}))}),$.create(P.sourceElementOrData,P.config,this._context);throw new Error(`Not supported item type: '${P.type}'.`)})))}remove(w){const x=Yn(w);return Promise.all(x.map(P=>this._actionQueues.enqueue(P,()=>{const $=this._getWatchdog(P);return this._watchdogs.delete(P),$.destroy()})))}destroy(){return this._actionQueues.enqueue(Se,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Se,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(w=>{console.error("An error happened during destroying the context or items.",w)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(w=>(this._context=w,this._contextProps=A(this._context),Promise.all(Array.from(this._watchdogs.values()).map(x=>(x._setExcludedProperties(this._contextProps),x.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const w=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(x=>x.destroy())).then(()=>this._destructor(w))})}_getWatchdog(w){const x=this._watchdogs.get(w);if(!x)throw new Error(`Item with the given id was not registered: ${w}.`);return x}_isErrorComingFromThisItem(w){for(const x of this._watchdogs.values())if(x._isErrorComingFromThisItem(w))return!1;return N(this._context,w.context)}}class Va{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(w){this._onEmptyCallbacks.push(w)}enqueue(w,x){const P=w===Se;this._activeActions++,this._queues.get(w)||this._queues.set(w,Promise.resolve());const $=(P?Promise.all(this._queues.values()):Promise.all([this._queues.get(Se),this._queues.get(w)])).then(x),tt=$.catch(()=>{});return this._queues.set(w,tt),$.finally(()=>{this._activeActions--,this._queues.get(w)===tt&&this._activeActions===0&&this._onEmptyCallbacks.forEach(et=>et())})}}function Yn(b){return Array.isArray(b)?b:[b]}const Lo=p().createContext("contextWatchdog");class Li extends p().Component{constructor(w,x){super(w,x),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(w){return this._shouldComponentUpdate(w)}async _shouldComponentUpdate(w){return w.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(w.config)),w.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(w.config),!0):this.props.children!==w.children}render(){return p().createElement(Lo.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(w){this.contextWatchdog=new Jr(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(x,P)=>{this.props.onError(P.error,{phase:"runtime",willContextRestart:P.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(w).catch(x=>{this.props.onError(x,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Li.defaultProps={isLayoutReady:!0,onError:(b,w)=>console.error(b,w)},Li.propTypes={id:D().string,isLayoutReady:D().bool,context:D().func,watchdogConfig:D().object,config:D().object,onReady:D().func,onError:D().func};const ji="Lock from React integration (@ckeditor/ckeditor5-react)";class Mn extends p().Component{constructor(w){super(w),this.editorDestructionInProgress=null,this.domContainer=p().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:x}=window;if(x){const[P]=x.split(".").map(Number);P<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(w){return!!this.editor&&(w.id!==this.props.id||w.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(w)&&this.editor.data.set(w.data),"disabled"in w&&(w.disabled?this.editor.enableReadOnlyMode(ji):this.editor.disableReadOnlyMode(ji)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return p().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof Jr?this.watchdog=new Xr(this.context):this.watchdog=new Mn._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((w,x)=>this._createEditor(w,x)),this.watchdog.on("error",(w,{error:x,causesRestart:P})=>{(this.props.onError||console.error)(x,{phase:"runtime",willEditorRestart:P})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(w=>{(this.props.onError||console.error)(w,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(w,x){return this.props.editor.create(w,x).then(P=>{"disabled"in this.props&&this.props.disabled&&P.enableReadOnlyMode(ji);const $=P.model.document,tt=P.editing.view.document;return $.on("change:data",et=>{this.props.onChange&&this.props.onChange(et,P)}),tt.on("focus",et=>{this.props.onFocus&&this.props.onFocus(et,P)}),tt.on("blur",et=>{this.props.onBlur&&this.props.onBlur(et,P)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(P)}),P})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(w=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,w()):this.instance?(await this.instance.destroy(),this.instance=null,w()):void w())})}_shouldUpdateEditor(w){return this.props.data!==w.data&&this.editor.data.get()!==w.data}_getConfig(){const w=this.props.config||{};return this.props.data&&w.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...w,initialData:w.initialData||this.props.data||""}}}Mn.contextType=Lo,Mn.propTypes={editor:D().func.isRequired,data:D().string,config:D().object,disableWatchdog:D().bool,watchdogConfig:D().object,onChange:D().func,onReady:D().func,onFocus:D().func,onBlur:D().func,onError:D().func,disabled:D().bool,id:D().any},Mn._EditorWatchdog=We;class Xr{constructor(w){this._contextWatchdog=w,this._id=function(){const x=4294967296*Math.random()>>>0,P=4294967296*Math.random()>>>0,$=4294967296*Math.random()>>>0,tt=4294967296*Math.random()>>>0;return"e"+C[x>>0&255]+C[x>>8&255]+C[x>>16&255]+C[x>>24&255]+C[P>>0&255]+C[P>>8&255]+C[P>>16&255]+C[P>>24&255]+C[$>>0&255]+C[$>>8&255]+C[$>>16&255]+C[$>>24&255]+C[tt>>0&255]+C[tt>>8&255]+C[tt>>16&255]+C[tt>>24&255]}()}setCreator(w){this._creator=w}create(w,x){return this._contextWatchdog.add({sourceElementOrData:w,config:x,creator:this._creator,id:this._id,type:"editor"})}on(w,x){this._contextWatchdog.on("itemError",(P,{itemId:$,error:tt})=>{$===this._id&&x(null,{error:tt,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}})(),M})())})(Js,Js.exports);var iE=Js.exports,Xs={exports:{}};Xs.exports;(function(Nt,Pt){(function(rn){const we=rn.en=rn.en||{};we.dictionary=Object.assign(we.dictionary||{},{"%0 of %1":"%0 of %1",Accept:"Accept","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(rn,we){Nt.exports=we()}(self,()=>(()=>{var rn={4959:(M,I,p)=>{const E=p(1103),D={};for(const f of Object.keys(E))D[E[f]]=f;const C={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};M.exports=C;for(const f of Object.keys(C)){if(!("channels"in C[f]))throw new Error("missing channels property: "+f);if(!("labels"in C[f]))throw new Error("missing channel labels property: "+f);if(C[f].labels.length!==C[f].channels)throw new Error("channel and label counts mismatch: "+f);const{channels:A,labels:S}=C[f];delete C[f].channels,delete C[f].labels,Object.defineProperty(C[f],"channels",{value:A}),Object.defineProperty(C[f],"labels",{value:S})}C.rgb.hsl=function(f){const A=f[0]/255,S=f[1]/255,N=f[2]/255,B=Math.min(A,S,N),j=Math.max(A,S,N),L=j-B;let R,q;j===B?R=0:A===j?R=(S-N)/L:S===j?R=2+(N-A)/L:N===j&&(R=4+(A-S)/L),R=Math.min(60*R,360),R<0&&(R+=360);const J=(B+j)/2;return q=j===B?0:J<=.5?L/(j+B):L/(2-j-B),[R,100*q,100*J]},C.rgb.hsv=function(f){let A,S,N,B,j;const L=f[0]/255,R=f[1]/255,q=f[2]/255,J=Math.max(L,R,q),mt=J-Math.min(L,R,q),Y=function(y){return(J-y)/6/mt+.5};return mt===0?(B=0,j=0):(j=mt/J,A=Y(L),S=Y(R),N=Y(q),L===J?B=N-S:R===J?B=.3333333333333333+A-N:q===J&&(B=.6666666666666666+S-A),B<0?B+=1:B>1&&(B-=1)),[360*B,100*j,100*J]},C.rgb.hwb=function(f){const A=f[0],S=f[1];let N=f[2];const B=C.rgb.hsl(f)[0],j=1/255*Math.min(A,Math.min(S,N));return N=1-.00392156862745098*Math.max(A,Math.max(S,N)),[B,100*j,100*N]},C.rgb.cmyk=function(f){const A=f[0]/255,S=f[1]/255,N=f[2]/255,B=Math.min(1-A,1-S,1-N);return[100*((1-A-B)/(1-B)||0),100*((1-S-B)/(1-B)||0),100*((1-N-B)/(1-B)||0),100*B]},C.rgb.keyword=function(f){const A=D[f];if(A)return A;let S,N=1/0;for(const L of Object.keys(E)){const R=E[L],q=(j=R,((B=f)[0]-j[0])**2+(B[1]-j[1])**2+(B[2]-j[2])**2);q<N&&(N=q,S=L)}var B,j;return S},C.keyword.rgb=function(f){return E[f]},C.rgb.xyz=function(f){let A=f[0]/255,S=f[1]/255,N=f[2]/255;return A=A>.04045?((A+.055)/1.055)**2.4:A/12.92,S=S>.04045?((S+.055)/1.055)**2.4:S/12.92,N=N>.04045?((N+.055)/1.055)**2.4:N/12.92,[100*(.4124*A+.3576*S+.1805*N),100*(.2126*A+.7152*S+.0722*N),100*(.0193*A+.1192*S+.9505*N)]},C.rgb.lab=function(f){const A=C.rgb.xyz(f);let S=A[0],N=A[1],B=A[2];return S/=95.047,N/=100,B/=108.883,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,B=B>.008856?B**.3333333333333333:7.787*B+.13793103448275862,[116*N-16,500*(S-N),200*(N-B)]},C.hsl.rgb=function(f){const A=f[0]/360,S=f[1]/100,N=f[2]/100;let B,j,L;if(S===0)return L=255*N,[L,L,L];B=N<.5?N*(1+S):N+S-N*S;const R=2*N-B,q=[0,0,0];for(let J=0;J<3;J++)j=A+.3333333333333333*-(J-1),j<0&&j++,j>1&&j--,L=6*j<1?R+6*(B-R)*j:2*j<1?B:3*j<2?R+(B-R)*(.6666666666666666-j)*6:R,q[J]=255*L;return q},C.hsl.hsv=function(f){const A=f[0];let S=f[1]/100,N=f[2]/100,B=S;const j=Math.max(N,.01);return N*=2,S*=N<=1?N:2-N,B*=j<=1?j:2-j,[A,100*(N===0?2*B/(j+B):2*S/(N+S)),100*((N+S)/2)]},C.hsv.rgb=function(f){const A=f[0]/60,S=f[1]/100;let N=f[2]/100;const B=Math.floor(A)%6,j=A-Math.floor(A),L=255*N*(1-S),R=255*N*(1-S*j),q=255*N*(1-S*(1-j));switch(N*=255,B){case 0:return[N,q,L];case 1:return[R,N,L];case 2:return[L,N,q];case 3:return[L,R,N];case 4:return[q,L,N];case 5:return[N,L,R]}},C.hsv.hsl=function(f){const A=f[0],S=f[1]/100,N=f[2]/100,B=Math.max(N,.01);let j,L;L=(2-S)*N;const R=(2-S)*B;return j=S*B,j/=R<=1?R:2-R,j=j||0,L/=2,[A,100*j,100*L]},C.hwb.rgb=function(f){const A=f[0]/360;let S=f[1]/100,N=f[2]/100;const B=S+N;let j;B>1&&(S/=B,N/=B);const L=Math.floor(6*A),R=1-N;j=6*A-L,1&L&&(j=1-j);const q=S+j*(R-S);let J,mt,Y;switch(L){default:case 6:case 0:J=R,mt=q,Y=S;break;case 1:J=q,mt=R,Y=S;break;case 2:J=S,mt=R,Y=q;break;case 3:J=S,mt=q,Y=R;break;case 4:J=q,mt=S,Y=R;break;case 5:J=R,mt=S,Y=q}return[255*J,255*mt,255*Y]},C.cmyk.rgb=function(f){const A=f[0]/100,S=f[1]/100,N=f[2]/100,B=f[3]/100;return[255*(1-Math.min(1,A*(1-B)+B)),255*(1-Math.min(1,S*(1-B)+B)),255*(1-Math.min(1,N*(1-B)+B))]},C.xyz.rgb=function(f){const A=f[0]/100,S=f[1]/100,N=f[2]/100;let B,j,L;return B=3.2406*A+-1.5372*S+-.4986*N,j=-.9689*A+1.8758*S+.0415*N,L=.0557*A+-.204*S+1.057*N,B=B>.0031308?1.055*B**.4166666666666667-.055:12.92*B,j=j>.0031308?1.055*j**.4166666666666667-.055:12.92*j,L=L>.0031308?1.055*L**.4166666666666667-.055:12.92*L,B=Math.min(Math.max(0,B),1),j=Math.min(Math.max(0,j),1),L=Math.min(Math.max(0,L),1),[255*B,255*j,255*L]},C.xyz.lab=function(f){let A=f[0],S=f[1],N=f[2];return A/=95.047,S/=100,N/=108.883,A=A>.008856?A**.3333333333333333:7.787*A+.13793103448275862,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,[116*S-16,500*(A-S),200*(S-N)]},C.lab.xyz=function(f){let A,S,N;S=(f[0]+16)/116,A=f[1]/500+S,N=S-f[2]/200;const B=S**3,j=A**3,L=N**3;return S=B>.008856?B:(S-.13793103448275862)/7.787,A=j>.008856?j:(A-.13793103448275862)/7.787,N=L>.008856?L:(N-.13793103448275862)/7.787,A*=95.047,S*=100,N*=108.883,[A,S,N]},C.lab.lch=function(f){const A=f[0],S=f[1],N=f[2];let B;return B=360*Math.atan2(N,S)/2/Math.PI,B<0&&(B+=360),[A,Math.sqrt(S*S+N*N),B]},C.lch.lab=function(f){const A=f[0],S=f[1],N=f[2]/360*2*Math.PI;return[A,S*Math.cos(N),S*Math.sin(N)]},C.rgb.ansi16=function(f,A=null){const[S,N,B]=f;let j=A===null?C.rgb.hsv(f)[2]:A;if(j=Math.round(j/50),j===0)return 30;let L=30+(Math.round(B/255)<<2|Math.round(N/255)<<1|Math.round(S/255));return j===2&&(L+=60),L},C.hsv.ansi16=function(f){return C.rgb.ansi16(C.hsv.rgb(f),f[2])},C.rgb.ansi256=function(f){const A=f[0],S=f[1],N=f[2];return A===S&&S===N?A<8?16:A>248?231:Math.round((A-8)/247*24)+232:16+36*Math.round(A/255*5)+6*Math.round(S/255*5)+Math.round(N/255*5)},C.ansi16.rgb=function(f){let A=f%10;if(A===0||A===7)return f>50&&(A+=3.5),A=A/10.5*255,[A,A,A];const S=.5*(1+~~(f>50));return[(1&A)*S*255,(A>>1&1)*S*255,(A>>2&1)*S*255]},C.ansi256.rgb=function(f){if(f>=232){const S=10*(f-232)+8;return[S,S,S]}let A;return f-=16,[Math.floor(f/36)/5*255,Math.floor((A=f%36)/6)/5*255,A%6/5*255]},C.rgb.hex=function(f){const A=(((255&Math.round(f[0]))<<16)+((255&Math.round(f[1]))<<8)+(255&Math.round(f[2]))).toString(16).toUpperCase();return"000000".substring(A.length)+A},C.hex.rgb=function(f){const A=f.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!A)return[0,0,0];let S=A[0];A[0].length===3&&(S=S.split("").map(B=>B+B).join(""));const N=parseInt(S,16);return[N>>16&255,N>>8&255,255&N]},C.rgb.hcg=function(f){const A=f[0]/255,S=f[1]/255,N=f[2]/255,B=Math.max(Math.max(A,S),N),j=Math.min(Math.min(A,S),N),L=B-j;let R,q;return R=L<1?j/(1-L):0,q=L<=0?0:B===A?(S-N)/L%6:B===S?2+(N-A)/L:4+(A-S)/L,q/=6,q%=1,[360*q,100*L,100*R]},C.hsl.hcg=function(f){const A=f[1]/100,S=f[2]/100,N=S<.5?2*A*S:2*A*(1-S);let B=0;return N<1&&(B=(S-.5*N)/(1-N)),[f[0],100*N,100*B]},C.hsv.hcg=function(f){const A=f[1]/100,S=f[2]/100,N=A*S;let B=0;return N<1&&(B=(S-N)/(1-N)),[f[0],100*N,100*B]},C.hcg.rgb=function(f){const A=f[0]/360,S=f[1]/100,N=f[2]/100;if(S===0)return[255*N,255*N,255*N];const B=[0,0,0],j=A%1*6,L=j%1,R=1-L;let q=0;switch(Math.floor(j)){case 0:B[0]=1,B[1]=L,B[2]=0;break;case 1:B[0]=R,B[1]=1,B[2]=0;break;case 2:B[0]=0,B[1]=1,B[2]=L;break;case 3:B[0]=0,B[1]=R,B[2]=1;break;case 4:B[0]=L,B[1]=0,B[2]=1;break;default:B[0]=1,B[1]=0,B[2]=R}return q=(1-S)*N,[255*(S*B[0]+q),255*(S*B[1]+q),255*(S*B[2]+q)]},C.hcg.hsv=function(f){const A=f[1]/100,S=A+f[2]/100*(1-A);let N=0;return S>0&&(N=A/S),[f[0],100*N,100*S]},C.hcg.hsl=function(f){const A=f[1]/100,S=f[2]/100*(1-A)+.5*A;let N=0;return S>0&&S<.5?N=A/(2*S):S>=.5&&S<1&&(N=A/(2*(1-S))),[f[0],100*N,100*S]},C.hcg.hwb=function(f){const A=f[1]/100,S=A+f[2]/100*(1-A);return[f[0],100*(S-A),100*(1-S)]},C.hwb.hcg=function(f){const A=f[1]/100,S=1-f[2]/100,N=S-A;let B=0;return N<1&&(B=(S-N)/(1-N)),[f[0],100*N,100*B]},C.apple.rgb=function(f){return[f[0]/65535*255,f[1]/65535*255,f[2]/65535*255]},C.rgb.apple=function(f){return[f[0]/255*65535,f[1]/255*65535,f[2]/255*65535]},C.gray.rgb=function(f){return[f[0]/100*255,f[0]/100*255,f[0]/100*255]},C.gray.hsl=function(f){return[0,0,f[0]]},C.gray.hsv=C.gray.hsl,C.gray.hwb=function(f){return[0,100,f[0]]},C.gray.cmyk=function(f){return[0,0,0,f[0]]},C.gray.lab=function(f){return[f[0],0,0]},C.gray.hex=function(f){const A=255&Math.round(f[0]/100*255),S=((A<<16)+(A<<8)+A).toString(16).toUpperCase();return"000000".substring(S.length)+S},C.rgb.gray=function(f){return[(f[0]+f[1]+f[2])/3/255*100]}},841:(M,I,p)=>{const E=p(4959),D=p(9325),C={};Object.keys(E).forEach(f=>{C[f]={},Object.defineProperty(C[f],"channels",{value:E[f].channels}),Object.defineProperty(C[f],"labels",{value:E[f].labels});const A=D(f);Object.keys(A).forEach(S=>{const N=A[S];C[f][S]=function(B){const j=function(...L){const R=L[0];if(R==null)return R;R.length>1&&(L=R);const q=B(L);if(typeof q=="object")for(let J=q.length,mt=0;mt<J;mt++)q[mt]=Math.round(q[mt]);return q};return"conversion"in B&&(j.conversion=B.conversion),j}(N),C[f][S].raw=function(B){const j=function(...L){const R=L[0];return R==null?R:(R.length>1&&(L=R),B(L))};return"conversion"in B&&(j.conversion=B.conversion),j}(N)})}),M.exports=C},9325:(M,I,p)=>{const E=p(4959);function D(A){const S=function(){const B={},j=Object.keys(E);for(let L=j.length,R=0;R<L;R++)B[j[R]]={distance:-1,parent:null};return B}(),N=[A];for(S[A].distance=0;N.length;){const B=N.pop(),j=Object.keys(E[B]);for(let L=j.length,R=0;R<L;R++){const q=j[R],J=S[q];J.distance===-1&&(J.distance=S[B].distance+1,J.parent=B,N.unshift(q))}}return S}function C(A,S){return function(N){return S(A(N))}}function f(A,S){const N=[S[A].parent,A];let B=E[S[A].parent][A],j=S[A].parent;for(;S[j].parent;)N.unshift(S[j].parent),B=C(E[S[j].parent][j],B),j=S[j].parent;return B.conversion=N,B}M.exports=function(A){const S=D(A),N={},B=Object.keys(S);for(let j=B.length,L=0;L<j;L++){const R=B[L];S[R].parent!==null&&(N[R]=f(R,S))}return N}},1103:M=>{M.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8603:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const A=f},3062:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const A=f},903:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const A=f},3143:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},4717:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const A=f},9315:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const A=f},8733:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const A=f},3508:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const A=f},2640:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const A=f},3535:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const A=f},1568:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const A=f},6270:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const A=f},5083:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},4036:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const A=f},3773:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const A=f},3689:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const A=f},1905:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},9773:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const A=f},2347:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},7754:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},111:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const A=f},4721:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const A=f},5730:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const A=f},4564:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},6082:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const A=f},2417:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const A=f},1199:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const A=f},4652:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const A=f},7442:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},9292:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},7368:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},4070:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},9247:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const A=f},1613:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const A=f},6306:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const A=f},2128:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const A=f},5087:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},4101:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const A=f},3881:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const A=f},6237:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},7341:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},6945:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},8157:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-modal)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-modal);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},4906:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const A=f},5332:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const A=f},6781:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const A=f},3398:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const A=f},4157:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const A=f},5485:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},3949:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},7686:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},7339:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const A=f},9688:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},8847:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header .ck-icon{margin-right:var(--ck-spacing-medium)}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BASD,CAPC,6BACC,qCACD,CAEA,8CACC,WACD,CCbD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& .ck-icon {
		margin-right: var(--ck-spacing-medium);
	}

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const A=f},8960:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const A=f},6574:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},4879:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},3662:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const A=f},2577:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},1046:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>span{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,8BACC,cAAe,CACf,eAAiB,CACjB,gCACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > span {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},8793:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},4650:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const A=f},7676:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},5868:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},6764:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},6770:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const A=f},498:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}

`],sourceRoot:""}]);const A=f},8182:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const A=f},9695:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const A=f},5542:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},3332:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDRnC,mBAAoB,CAEpB,qCACD,CCOC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CACrB,wCAAyC,CAFzC,wBAGD,CApBD,gCAuBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const A=f},4793:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-modal) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-modal) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const A=f},3488:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},8506:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const A=f},4921:(M,I,p)=>{p.d(I,{Z:()=>A});var E=p(1799),D=p.n(E),C=p(2609),f=p.n(C)()(D());f.push([M.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const A=f},2609:M=>{M.exports=function(I){var p=[];return p.toString=function(){return this.map(function(E){var D=I(E);return E[2]?"@media ".concat(E[2]," {").concat(D,"}"):D}).join("")},p.i=function(E,D,C){typeof E=="string"&&(E=[[null,E,""]]);var f={};if(C)for(var A=0;A<this.length;A++){var S=this[A][0];S!=null&&(f[S]=!0)}for(var N=0;N<E.length;N++){var B=[].concat(E[N]);C&&f[B[0]]||(D&&(B[2]?B[2]="".concat(D," and ").concat(B[2]):B[2]=D),p.push(B))}},p}},1799:M=>{function I(E,D){return function(C){if(Array.isArray(C))return C}(E)||function(C,f){var A=C&&(typeof Symbol<"u"&&C[Symbol.iterator]||C["@@iterator"]);if(A!=null){var S,N,B=[],j=!0,L=!1;try{for(A=A.call(C);!(j=(S=A.next()).done)&&(B.push(S.value),!f||B.length!==f);j=!0);}catch(R){L=!0,N=R}finally{try{j||A.return==null||A.return()}finally{if(L)throw N}}return B}}(E,D)||function(C,f){if(C){if(typeof C=="string")return p(C,f);var A=Object.prototype.toString.call(C).slice(8,-1);if(A==="Object"&&C.constructor&&(A=C.constructor.name),A==="Map"||A==="Set")return Array.from(C);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return p(C,f)}}(E,D)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function p(E,D){(D==null||D>E.length)&&(D=E.length);for(var C=0,f=new Array(D);C<D;C++)f[C]=E[C];return f}M.exports=function(E){var D=I(E,4),C=D[1],f=D[3];if(!f)return C;if(typeof btoa=="function"){var A=btoa(unescape(encodeURIComponent(JSON.stringify(f)))),S="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),N="/*# ".concat(S," */"),B=f.sources.map(function(j){return"/*# sourceURL=".concat(f.sourceRoot||"").concat(j," */")});return[C].concat(B).concat([N]).join(`
`)}return[C].join(`
`)}},6062:(M,I,p)=>{var E,D=function(){return E===void 0&&(E=!!(window&&document&&document.all&&!window.atob)),E},C=function(){var Y={};return function(y){if(Y[y]===void 0){var G=document.querySelector(y);if(window.HTMLIFrameElement&&G instanceof window.HTMLIFrameElement)try{G=G.contentDocument.head}catch{G=null}Y[y]=G}return Y[y]}}(),f=[];function A(Y){for(var y=-1,G=0;G<f.length;G++)if(f[G].identifier===Y){y=G;break}return y}function S(Y,y){for(var G={},ct=[],St=0;St<Y.length;St++){var Mt=Y[St],_t=y.base?Mt[0]+y.base:Mt[0],je=G[_t]||0,ne="".concat(_t," ").concat(je);G[_t]=je+1;var sn=A(ne),ie={css:Mt[1],media:Mt[2],sourceMap:Mt[3]};sn!==-1?(f[sn].references++,f[sn].updater(ie)):f.push({identifier:ne,updater:mt(ie,y),references:1}),ct.push(ne)}return ct}function N(Y){var y=document.createElement("style"),G=Y.attributes||{};if(G.nonce===void 0){var ct=p.nc;ct&&(G.nonce=ct)}if(Object.keys(G).forEach(function(Mt){y.setAttribute(Mt,G[Mt])}),typeof Y.insert=="function")Y.insert(y);else{var St=C(Y.insert||"head");if(!St)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");St.appendChild(y)}return y}var B,j=(B=[],function(Y,y){return B[Y]=y,B.filter(Boolean).join(`
`)});function L(Y,y,G,ct){var St=G?"":ct.media?"@media ".concat(ct.media," {").concat(ct.css,"}"):ct.css;if(Y.styleSheet)Y.styleSheet.cssText=j(y,St);else{var Mt=document.createTextNode(St),_t=Y.childNodes;_t[y]&&Y.removeChild(_t[y]),_t.length?Y.insertBefore(Mt,_t[y]):Y.appendChild(Mt)}}function R(Y,y,G){var ct=G.css,St=G.media,Mt=G.sourceMap;if(St?Y.setAttribute("media",St):Y.removeAttribute("media"),Mt&&typeof btoa<"u"&&(ct+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Mt))))," */")),Y.styleSheet)Y.styleSheet.cssText=ct;else{for(;Y.firstChild;)Y.removeChild(Y.firstChild);Y.appendChild(document.createTextNode(ct))}}var q=null,J=0;function mt(Y,y){var G,ct,St;if(y.singleton){var Mt=J++;G=q||(q=N(y)),ct=L.bind(null,G,Mt,!1),St=L.bind(null,G,Mt,!0)}else G=N(y),ct=R.bind(null,G,y),St=function(){(function(_t){if(_t.parentNode===null)return!1;_t.parentNode.removeChild(_t)})(G)};return ct(Y),function(_t){if(_t){if(_t.css===Y.css&&_t.media===Y.media&&_t.sourceMap===Y.sourceMap)return;ct(Y=_t)}else St()}}M.exports=function(Y,y){(y=y||{}).singleton||typeof y.singleton=="boolean"||(y.singleton=D());var G=S(Y=Y||[],y);return function(ct){if(ct=ct||[],Object.prototype.toString.call(ct)==="[object Array]"){for(var St=0;St<G.length;St++){var Mt=A(G[St]);f[Mt].references--}for(var _t=S(ct,y),je=0;je<G.length;je++){var ne=A(G[je]);f[ne].references===0&&(f[ne].updater(),f.splice(ne,1))}G=_t}}}}},we={};function U(M){var I=we[M];if(I!==void 0)return I.exports;var p=we[M]={id:M,exports:{}};return rn[M](p,p.exports,U),p.exports}U.n=M=>{var I=M&&M.__esModule?()=>M.default:()=>M;return U.d(I,{a:I}),I},U.d=(M,I)=>{for(var p in I)U.o(I,p)&&!U.o(M,p)&&Object.defineProperty(M,p,{enumerable:!0,get:I[p]})},U.o=(M,I)=>Object.prototype.hasOwnProperty.call(M,I),U.nc=void 0;var Rt={};return(()=>{function M({emitter:o,activator:t,callback:e,contextElements:n}){o.listenTo(document,"mousedown",(i,r)=>{if(!t())return;const s=typeof r.composedPath=="function"?r.composedPath():[],a=typeof n=="function"?n():n;for(const c of a)if(c.contains(r.target)||s.includes(c))return;e()})}function I(o){return class extends o{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...t){super(...t),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function p({view:o}){o.listenTo(o.element,"submit",(t,e)=>{e.preventDefault(),o.fire("submit")},{useCapture:!0})}U.d(Rt,{default:()=>Pl});const E=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var D;const C={isMac:f(E),isWindows:(D=E,D.indexOf("windows")>-1),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(E),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(E),isiOS:function(o){return!!o.match(/iphone|ipad/i)||f(o)&&navigator.maxTouchPoints>0}(E),isAndroid:function(o){return o.indexOf("android")>-1}(E),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(E),features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}};function f(o){return o.indexOf("macintosh")>-1}function A(o,t,e,n){e=e||function(c,l){return c===l};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),r=Array.isArray(t)?t:Array.prototype.slice.call(t),s=function(c,l,d){const h=S(c,l,d);if(h===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const u=N(c,h),g=N(l,h),m=S(u,g,d),k=c.length-m,_=l.length-m;return{firstIndex:h,lastIndexOld:k,lastIndexNew:_}}(i,r,e);return n?function(c,l){const{firstIndex:d,lastIndexOld:h,lastIndexNew:u}=c;if(d===-1)return Array(l).fill("equal");let g=[];return d>0&&(g=g.concat(Array(d).fill("equal"))),u-d>0&&(g=g.concat(Array(u-d).fill("insert"))),h-d>0&&(g=g.concat(Array(h-d).fill("delete"))),u<l&&(g=g.concat(Array(l-u).fill("equal"))),g}(s,r.length):function(c,l){const d=[],{firstIndex:h,lastIndexOld:u,lastIndexNew:g}=l;return g-h>0&&d.push({index:h,type:"insert",values:c.slice(h,g)}),u-h>0&&d.push({index:h+(g-h),type:"delete",howMany:u-h}),d}(r,s)}function S(o,t,e){for(let n=0;n<Math.max(o.length,t.length);n++)if(o[n]===void 0||t[n]===void 0||!e(o[n],t[n]))return n;return-1}function N(o,t){return o.slice(t).reverse()}function B(o,t,e){e=e||function(k,_){return k===_};const n=o.length,i=t.length;if(n>200||i>200||n+i>300)return B.fastDiff(o,t,e,!0);let r,s;if(i<n){const k=o;o=t,t=k,r="delete",s="insert"}else r="insert",s="delete";const a=o.length,c=t.length,l=c-a,d={},h={};function u(k){const _=(h[k-1]!==void 0?h[k-1]:-1)+1,v=h[k+1]!==void 0?h[k+1]:-1,T=_>v?-1:1;d[k+T]&&(d[k]=d[k+T].slice(0)),d[k]||(d[k]=[]),d[k].push(_>v?r:s);let O=Math.max(_,v),W=O-k;for(;W<a&&O<c&&e(o[W],t[O]);)W++,O++,d[k].push("equal");return O}let g,m=0;do{for(g=-m;g<l;g++)h[g]=u(g);for(g=l+m;g>l;g--)h[g]=u(g);h[l]=u(l),m++}while(h[l]!==c);return d[l].slice(1)}B.fastDiff=A;const j=function(){return function o(){o.called=!0}};class L{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=j(),this.off=j()}}const R=new Array(256).fill("").map((o,t)=>("0"+t.toString(16)).slice(-2));function q(){const o=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+R[o>>0&255]+R[o>>8&255]+R[o>>16&255]+R[o>>24&255]+R[t>>0&255]+R[t>>8&255]+R[t>>16&255]+R[t>>24&255]+R[e>>0&255]+R[e>>8&255]+R[e>>16&255]+R[e>>24&255]+R[n>>0&255]+R[n>>8&255]+R[n>>16&255]+R[n>>24&255]}const J={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function mt(o,t){const e=J.get(t.priority);for(let n=0;n<o.length;n++)if(J.get(o[n].priority)<e)return void o.splice(n,0,t);o.push(t)}const Y="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class y extends Error{constructor(t,e,n){super(function(i,r){const s=new WeakSet,a=(d,h)=>{if(typeof h=="object"&&h!==null){if(s.has(h))return`[object ${h.constructor.name}]`;s.add(h)}return h},c=r?` ${JSON.stringify(r,a)}`:"",l=St(i);return i+c+l}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new y(t.message,e);throw n.stack=t.stack,n}}function G(o,t){console.warn(...Mt(o,t))}function ct(o,t){console.error(...Mt(o,t))}function St(o){return`
Read more: ${Y}#error-${o}`}function Mt(o,t){const e=St(o);return t?[o,t,e]:[o,e]}const _t="40.0.0",je=new Date(2023,9,4);if(globalThis.CKEDITOR_VERSION)throw new y("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=_t;const ne=Symbol("listeningTo"),sn=Symbol("emitterId"),ie=Symbol("delegations"),Re=it(Object);function it(o){return o?class extends o{on(t,e,n){this.listenTo(this,t,e,n)}once(t,e,n){let i=!1;this.listenTo(this,t,(r,...s)=>{i||(i=!0,r.off(),e.call(this,r,...s))},n)}off(t,e){this.stopListening(this,t,e)}listenTo(t,e,n,i={}){let r,s;this[ne]||(this[ne]={});const a=this[ne];ii(t)||dr(t);const c=ii(t);(r=a[c])||(r=a[c]={emitter:t,callbacks:{}}),(s=r.callbacks[e])||(s=r.callbacks[e]=[]),s.push(n),function(l,d,h,u,g){d._addEventListener?d._addEventListener(h,u,g):l._addEventListener.call(d,h,u,g)}(this,t,e,n,i)}stopListening(t,e,n){const i=this[ne];let r=t&&ii(t);const s=i&&r?i[r]:void 0,a=s&&e?s.callbacks[e]:void 0;if(!(!i||t&&!s||e&&!a))if(n)ai(this,t,e,n),a.indexOf(n)!==-1&&(a.length===1?delete s.callbacks[e]:ai(this,t,e,n));else if(a){for(;n=a.pop();)ai(this,t,e,n);delete s.callbacks[e]}else if(s){for(e in s.callbacks)this.stopListening(t,e);delete i[r]}else{for(r in i)this.stopListening(i[r].emitter);delete this[ne]}}fire(t,...e){try{const n=t instanceof L?t:new L(this,t),i=n.name;let r=ur(this,i);if(n.path.push(this),r){const a=[n,...e];r=Array.from(r);for(let c=0;c<r.length&&(r[c].callback.apply(this,a),n.off.called&&(delete n.off.called,this._removeEventListener(i,r[c].callback)),!n.stop.called);c++);}const s=this[ie];if(s){const a=s.get(i),c=s.get("*");a&&si(a,n,e),c&&si(c,n,e)}return n.return}catch(n){y.rethrowUnexpectedError(n,this)}}delegate(...t){return{to:(e,n)=>{this[ie]||(this[ie]=new Map),t.forEach(i=>{const r=this[ie].get(i);r?r.set(e,n):this[ie].set(i,new Map([[e,n]]))})}}}stopDelegating(t,e){if(this[ie])if(t)if(e){const n=this[ie].get(t);n&&n.delete(e)}else this[ie].delete(t);else this[ie].clear()}_addEventListener(t,e,n){(function(s,a){const c=hr(s);if(c[a])return;let l=a,d=null;const h=[];for(;l!==""&&!c[l];)c[l]={callbacks:[],childEvents:[]},h.push(c[l]),d&&c[l].childEvents.push(d),d=l,l=l.substr(0,l.lastIndexOf(":"));if(l!==""){for(const u of h)u.callbacks=c[l].callbacks.slice();c[l].childEvents.push(d)}})(this,t);const i=ri(this,t),r={callback:e,priority:J.get(n.priority)};for(const s of i)mt(s,r)}_removeEventListener(t,e){const n=ri(this,t);for(const i of n)for(let r=0;r<i.length;r++)i[r].callback==e&&(i.splice(r,1),r--)}}:Re}function dr(o,t){o[sn]||(o[sn]=t||q())}function ii(o){return o[sn]}function hr(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function ri(o,t){const e=hr(o)[t];if(!e)return[];let n=[e.callbacks];for(let i=0;i<e.childEvents.length;i++){const r=ri(o,e.childEvents[i]);n=n.concat(r)}return n}function ur(o,t){let e;return o._events&&(e=o._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?ur(o,t.substr(0,t.lastIndexOf(":"))):null}function si(o,t,e){for(let[n,i]of o){i?typeof i=="function"&&(i=i(t.name)):i=t.name;const r=new L(t.source,i);r.path=[...t.path],n.fire(r,...e)}}function ai(o,t,e,n){t._removeEventListener?t._removeEventListener(e,n):o._removeEventListener.call(t,e,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{it[o]=Re.prototype[o]});const Dt=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")},ko=Symbol("observableProperties"),bo=Symbol("boundObservables"),wo=Symbol("boundProperties"),an=Symbol("decoratedMethods"),Hn=Symbol("decoratedOriginal"),gr=ft(it());function ft(o){return o?class extends o{set(t,e){if(Dt(t))return void Object.keys(t).forEach(i=>{this.set(i,t[i])},this);ci(this);const n=this[ko];if(t in this&&!n.has(t))throw new y("observable-set-cannot-override",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(i){const r=n.get(t);let s=this.fire(`set:${t}`,t,i,r);s===void 0&&(s=i),r===s&&n.has(t)||(n.set(t,s),this.fire(`change:${t}`,t,s,r))}}),this[t]=e}bind(...t){if(!t.length||!cn(t))throw new y("observable-bind-wrong-properties",this);if(new Set(t).size!==t.length)throw new y("observable-bind-duplicate-properties",this);ci(this);const e=this[wo];t.forEach(i=>{if(e.has(i))throw new y("observable-bind-rebind",this)});const n=new Map;return t.forEach(i=>{const r={property:i,to:[]};e.set(i,r),n.set(i,r)}),{to:ta,toMany:ea,_observable:this,_bindProperties:t,_to:[],_bindings:n}}unbind(...t){if(!this[ko])return;const e=this[wo],n=this[bo];if(t.length){if(!cn(t))throw new y("observable-unbind-wrong-properties",this);t.forEach(i=>{const r=e.get(i);r&&(r.to.forEach(([s,a])=>{const c=n.get(s),l=c[a];l.delete(r),l.size||delete c[a],Object.keys(c).length||(n.delete(s),this.stopListening(s,"change"))}),e.delete(i))})}else n.forEach((i,r)=>{this.stopListening(r,"change")}),n.clear(),e.clear()}decorate(t){ci(this);const e=this[t];if(!e)throw new y("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:t});this.on(t,(n,i)=>{n.return=e.apply(this,i)}),this[t]=function(...n){return this.fire(t,n)},this[t][Hn]=e,this[an]||(this[an]=[]),this[an].push(t)}stopListening(t,e,n){if(!t&&this[an]){for(const i of this[an])this[i]=this[i][Hn];delete this[an]}super.stopListening(t,e,n)}}:gr}function ci(o){o[ko]||(Object.defineProperty(o,ko,{value:new Map}),Object.defineProperty(o,bo,{value:new Map}),Object.defineProperty(o,wo,{value:new Map}))}function ta(...o){const t=function(...r){if(!r.length)throw new y("observable-bind-to-parse-error",null);const s={to:[]};let a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(c=>{if(typeof c=="string")a.properties.push(c);else{if(typeof c!="object")throw new y("observable-bind-to-parse-error",null);a={observable:c,properties:[]},s.to.push(a)}}),s}(...o),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new y("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new y("observable-bind-to-extra-callback",this);var i;t.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new y("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),i=this._observable,this._to.forEach(r=>{const s=i[bo];let a;s.get(r.observable)||i.listenTo(r.observable,"change",(c,l)=>{a=s.get(r.observable)[l],a&&a.forEach(d=>{qn(i,d.property)})})}),function(r){let s;r._bindings.forEach((a,c)=>{r._to.forEach(l=>{s=l.properties[a.callback?0:r._bindProperties.indexOf(c)],a.to.push([l.observable,s]),function(d,h,u,g){const m=d[bo],k=m.get(u),_=k||{};_[g]||(_[g]=new Set),_[g].add(h),k||m.set(u,_)}(r._observable,a,l.observable,s)})})}(this),this._bindProperties.forEach(r=>{qn(this._observable,r)})}function ea(o,t,e){if(this._bindings.size>1)throw new y("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const r=n.map(s=>[s,i]);return Array.prototype.concat.apply([],r)}(o,t),e)}function cn(o){return o.every(t=>typeof t=="string")}function qn(o,t){const e=o[wo].get(t);let n;e.callback?n=e.callback.apply(o,e.to.map(i=>i[0][i[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,t)?o[t]=n:o.set(t,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{ft[o]=gr.prototype[o]});class na{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}function li(o){let t=0;for(const e of o)t++;return t}function Zt(o,t){const e=Math.min(o.length,t.length);for(let n=0;n<e;n++)if(o[n]!=t[n])return n;return o.length==t.length?"same":o.length<t.length?"prefix":"extension"}function re(o){return!(!o||!o[Symbol.iterator])}const di=typeof Un=="object"&&Un&&Un.Object===Object&&Un;var hi=typeof self=="object"&&self&&self.Object===Object&&self;const se=di||hi||Function("return this")(),Ae=se.Symbol;var pr=Object.prototype,ln=pr.hasOwnProperty,oa=pr.toString,Gn=Ae?Ae.toStringTag:void 0;const ia=function(o){var t=ln.call(o,Gn),e=o[Gn];try{o[Gn]=void 0;var n=!0}catch{}var i=oa.call(o);return n&&(t?o[Gn]=e:delete o[Gn]),i};var ra=Object.prototype.toString;const sa=function(o){return ra.call(o)};var mr=Ae?Ae.toStringTag:void 0;const Fe=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":mr&&mr in Object(o)?ia(o):sa(o)},Qt=Array.isArray,Ut=function(o){return o!=null&&typeof o=="object"},Cn=function(o){return typeof o=="string"||!Qt(o)&&Ut(o)&&Fe(o)=="[object String]"};function Ve(o,t,e={},n=[]){const i=e&&e.xmlns,r=i?o.createElementNS(i,t):o.createElement(t);for(const s in e)r.setAttribute(s,e[s]);!Cn(n)&&re(n)||(n=[n]);for(let s of n)Cn(s)&&(s=o.createTextNode(s)),r.appendChild(s);return r}const fr=function(o,t){return function(e){return o(t(e))}},ui=fr(Object.getPrototypeOf,Object);var aa=Function.prototype,ca=Object.prototype,kr=aa.toString,la=ca.hasOwnProperty,da=kr.call(Object);const Ht=function(o){if(!Ut(o)||Fe(o)!="[object Object]")return!1;var t=ui(o);if(t===null)return!0;var e=la.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&kr.call(e)==da},br=function(){this.__data__=[],this.size=0},Wn=function(o,t){return o===t||o!=o&&t!=t},Ao=function(o,t){for(var e=o.length;e--;)if(Wn(o[e][0],t))return e;return-1};var _o=Array.prototype.splice;const ha=function(o){var t=this.__data__,e=Ao(t,o);return!(e<0)&&(e==t.length-1?t.pop():_o.call(t,e,1),--this.size,!0)},ua=function(o){var t=this.__data__,e=Ao(t,o);return e<0?void 0:t[e][1]},ga=function(o){return Ao(this.__data__,o)>-1},pa=function(o,t){var e=this.__data__,n=Ao(e,o);return n<0?(++this.size,e.push([o,t])):e[n][1]=t,this};function ge(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}ge.prototype.clear=br,ge.prototype.delete=ha,ge.prototype.get=ua,ge.prototype.has=ga,ge.prototype.set=pa;const Co=ge,ma=function(){this.__data__=new Co,this.size=0},vn=function(o){var t=this.__data__,e=t.delete(o);return this.size=t.size,e},fa=function(o){return this.__data__.get(o)},ka=function(o){return this.__data__.has(o)},Ue=function(o){if(!Dt(o))return!1;var t=Fe(o);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},vo=se["__core-js_shared__"];var wr=function(){var o=/[^.]+$/.exec(vo&&vo.keys&&vo.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const Ar=function(o){return!!wr&&wr in o};var yo=Function.prototype.toString;const dn=function(o){if(o!=null){try{return yo.call(o)}catch{}try{return o+""}catch{}}return""};var _r=/^\[object .+?Constructor\]$/,Cr=Function.prototype,ba=Object.prototype,wa=Cr.toString,Aa=ba.hasOwnProperty,gi=RegExp("^"+wa.call(Aa).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const _a=function(o){return!(!Dt(o)||Ar(o))&&(Ue(o)?gi:_r).test(dn(o))},vr=function(o,t){return o==null?void 0:o[t]},He=function(o,t){var e=vr(o,t);return _a(e)?e:void 0},yn=He(se,"Map"),xn=He(Object,"create"),Ca=function(){this.__data__=xn?xn(null):{},this.size=0},va=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t};var yr=Object.prototype.hasOwnProperty;const xt=function(o){var t=this.__data__;if(xn){var e=t[o];return e==="__lodash_hash_undefined__"?void 0:e}return yr.call(t,o)?t[o]:void 0};var ya=Object.prototype.hasOwnProperty;const pi=function(o){var t=this.__data__;return xn?t[o]!==void 0:ya.call(t,o)},xr=function(o,t){var e=this.__data__;return this.size+=this.has(o)?0:1,e[o]=xn&&t===void 0?"__lodash_hash_undefined__":t,this};function _e(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}_e.prototype.clear=Ca,_e.prototype.delete=va,_e.prototype.get=xt,_e.prototype.has=pi,_e.prototype.set=xr;const xo=_e,En=function(){this.size=0,this.__data__={hash:new xo,map:new(yn||Co),string:new xo}},Er=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null},Eo=function(o,t){var e=o.__data__;return Er(t)?e[typeof t=="string"?"string":"hash"]:e.map},xa=function(o){var t=Eo(this,o).delete(o);return this.size-=t?1:0,t},Dr=function(o){return Eo(this,o).get(o)},Ea=function(o){return Eo(this,o).has(o)},mi=function(o,t){var e=Eo(this,o),n=e.size;return e.set(o,t),this.size+=e.size==n?0:1,this};function hn(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}hn.prototype.clear=En,hn.prototype.delete=xa,hn.prototype.get=Dr,hn.prototype.has=Ea,hn.prototype.set=mi;const Do=hn,Da=function(o,t){var e=this.__data__;if(e instanceof Co){var n=e.__data__;if(!yn||n.length<199)return n.push([o,t]),this.size=++e.size,this;e=this.__data__=new Do(n)}return e.set(o,t),this.size=e.size,this};function Dn(o){var t=this.__data__=new Co(o);this.size=t.size}Dn.prototype.clear=ma,Dn.prototype.delete=vn,Dn.prototype.get=fa,Dn.prototype.has=ka,Dn.prototype.set=Da;const Sn=Dn,fi=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n&&t(o[e],e,o)!==!1;);return o},So=function(){try{var o=He(Object,"defineProperty");return o({},"",{}),o}catch{}}(),ki=function(o,t,e){t=="__proto__"&&So?So(o,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):o[t]=e};var Sa=Object.prototype.hasOwnProperty;const bi=function(o,t,e){var n=o[t];Sa.call(o,t)&&Wn(n,e)&&(e!==void 0||t in o)||ki(o,t,e)},qe=function(o,t,e,n){var i=!e;e||(e={});for(var r=-1,s=t.length;++r<s;){var a=t[r],c=n?n(e[a],o[a],a,e,o):void 0;c===void 0&&(c=o[a]),i?ki(e,a,c):bi(e,a,c)}return e},Ia=function(o,t){for(var e=-1,n=Array(o);++e<o;)n[e]=t(e);return n},wi=function(o){return Ut(o)&&Fe(o)=="[object Arguments]"};var Ai=Object.prototype,Sr=Ai.hasOwnProperty,Ir=Ai.propertyIsEnumerable;const _i=wi(function(){return arguments}())?wi:function(o){return Ut(o)&&Sr.call(o,"callee")&&!Ir.call(o,"callee")},Ta=function(){return!1};var Tr=Pt&&!Pt.nodeType&&Pt,Ci=Tr&&!0&&Nt&&!Nt.nodeType&&Nt,Mr=Ci&&Ci.exports===Tr?se.Buffer:void 0;const In=(Mr?Mr.isBuffer:void 0)||Ta;var vi=/^(?:0|[1-9]\d*)$/;const yi=function(o,t){var e=typeof o;return!!(t=t??9007199254740991)&&(e=="number"||e!="symbol"&&vi.test(o))&&o>-1&&o%1==0&&o<t},xi=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var kt={};kt["[object Float32Array]"]=kt["[object Float64Array]"]=kt["[object Int8Array]"]=kt["[object Int16Array]"]=kt["[object Int32Array]"]=kt["[object Uint8Array]"]=kt["[object Uint8ClampedArray]"]=kt["[object Uint16Array]"]=kt["[object Uint32Array]"]=!0,kt["[object Arguments]"]=kt["[object Array]"]=kt["[object ArrayBuffer]"]=kt["[object Boolean]"]=kt["[object DataView]"]=kt["[object Date]"]=kt["[object Error]"]=kt["[object Function]"]=kt["[object Map]"]=kt["[object Number]"]=kt["[object Object]"]=kt["[object RegExp]"]=kt["[object Set]"]=kt["[object String]"]=kt["[object WeakMap]"]=!1;const Br=function(o){return Ut(o)&&xi(o.length)&&!!kt[Fe(o)]},Ei=function(o){return function(t){return o(t)}};var Di=Pt&&!Pt.nodeType&&Pt,Kn=Di&&!0&&Nt&&!Nt.nodeType&&Nt,Si=Kn&&Kn.exports===Di&&di.process;const Ge=function(){try{var o=Kn&&Kn.require&&Kn.require("util").types;return o||Si&&Si.binding&&Si.binding("util")}catch{}}();var Io=Ge&&Ge.isTypedArray;const $n=Io?Ei(Io):Br;var Ii=Object.prototype.hasOwnProperty;const Ti=function(o,t){var e=Qt(o),n=!e&&_i(o),i=!e&&!n&&In(o),r=!e&&!n&&!i&&$n(o),s=e||n||i||r,a=s?Ia(o.length,String):[],c=a.length;for(var l in o)!t&&!Ii.call(o,l)||s&&(l=="length"||i&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||yi(l,c))||a.push(l);return a};var Nr=Object.prototype;const To=function(o){var t=o&&o.constructor;return o===(typeof t=="function"&&t.prototype||Nr)},Pr=fr(Object.keys,Object);var zr=Object.prototype.hasOwnProperty;const Ma=function(o){if(!To(o))return Pr(o);var t=[];for(var e in Object(o))zr.call(o,e)&&e!="constructor"&&t.push(e);return t},Mo=function(o){return o!=null&&xi(o.length)&&!Ue(o)},Mi=function(o){return Mo(o)?Ti(o):Ma(o)},Ba=function(o,t){return o&&qe(t,Mi(t),o)},Na=function(o){var t=[];if(o!=null)for(var e in Object(o))t.push(e);return t};var un=Object.prototype.hasOwnProperty;const Bi=function(o){if(!Dt(o))return Na(o);var t=To(o),e=[];for(var n in o)(n!="constructor"||!t&&un.call(o,n))&&e.push(n);return e},Tn=function(o){return Mo(o)?Ti(o,!0):Bi(o)},Pa=function(o,t){return o&&qe(t,Tn(t),o)};var Ni=Pt&&!Pt.nodeType&&Pt,Bo=Ni&&!0&&Nt&&!Nt.nodeType&&Nt,Or=Bo&&Bo.exports===Ni?se.Buffer:void 0,Lr=Or?Or.allocUnsafe:void 0;const jr=function(o,t){if(t)return o.slice();var e=o.length,n=Lr?Lr(e):new o.constructor(e);return o.copy(n),n},Pi=function(o,t){var e=-1,n=o.length;for(t||(t=Array(n));++e<n;)t[e]=o[e];return t},Rr=function(o,t){for(var e=-1,n=o==null?0:o.length,i=0,r=[];++e<n;){var s=o[e];t(s,e,o)&&(r[i++]=s)}return r},Fr=function(){return[]};var za=Object.prototype.propertyIsEnumerable,Vr=Object.getOwnPropertySymbols;const No=Vr?function(o){return o==null?[]:(o=Object(o),Rr(Vr(o),function(t){return za.call(o,t)}))}:Fr,Oa=function(o,t){return qe(o,No(o),t)},Ur=function(o,t){for(var e=-1,n=t.length,i=o.length;++e<n;)o[i+e]=t[e];return o},Hr=Object.getOwnPropertySymbols?function(o){for(var t=[];o;)Ur(t,No(o)),o=ui(o);return t}:Fr,qr=function(o,t){return qe(o,Hr(o),t)},Gr=function(o,t,e){var n=t(o);return Qt(o)?n:Ur(n,e(o))},zi=function(o){return Gr(o,Mi,No)},Wr=function(o){return Gr(o,Tn,Hr)},Oi=He(se,"DataView"),Po=He(se,"Promise"),zo=He(se,"Set"),Oo=He(se,"WeakMap");var bt="[object Map]",Kr="[object Promise]",$r="[object Set]",Yr="[object WeakMap]",Zr="[object DataView]",Qr=dn(Oi),La=dn(yn),ja=dn(Po),Ra=dn(zo),Fa=dn(Oo),We=Fe;(Oi&&We(new Oi(new ArrayBuffer(1)))!=Zr||yn&&We(new yn)!=bt||Po&&We(Po.resolve())!=Kr||zo&&We(new zo)!=$r||Oo&&We(new Oo)!=Yr)&&(We=function(o){var t=Fe(o),e=t=="[object Object]"?o.constructor:void 0,n=e?dn(e):"";if(n)switch(n){case Qr:return Zr;case La:return bt;case ja:return Kr;case Ra:return $r;case Fa:return Yr}return t});const Se=We;var Jr=Object.prototype.hasOwnProperty;const Va=function(o){var t=o.length,e=new o.constructor(t);return t&&typeof o[0]=="string"&&Jr.call(o,"index")&&(e.index=o.index,e.input=o.input),e},Yn=se.Uint8Array,Lo=function(o){var t=new o.constructor(o.byteLength);return new Yn(t).set(new Yn(o)),t},Li=function(o,t){var e=t?Lo(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.byteLength)};var ji=/\w*$/;const Mn=function(o){var t=new o.constructor(o.source,ji.exec(o));return t.lastIndex=o.lastIndex,t};var Xr=Ae?Ae.prototype:void 0,b=Xr?Xr.valueOf:void 0;const w=function(o){return b?Object(b.call(o)):{}},x=function(o,t){var e=t?Lo(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.length)},P=function(o,t,e){var n=o.constructor;switch(t){case"[object ArrayBuffer]":return Lo(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return Li(o,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return x(o,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return Mn(o);case"[object Symbol]":return w(o)}};var $=Object.create;const tt=function(){function o(){}return function(t){if(!Dt(t))return{};if($)return $(t);o.prototype=t;var e=new o;return o.prototype=void 0,e}}(),et=function(o){return typeof o.constructor!="function"||To(o)?{}:tt(ui(o))},ot=function(o){return Ut(o)&&Se(o)=="[object Map]"};var Bt=Ge&&Ge.isMap;const It=Bt?Ei(Bt):ot,jo=function(o){return Ut(o)&&Se(o)=="[object Set]"};var Ke=Ge&&Ge.isSet;const Ce=Ke?Ei(Ke):jo;var gn="[object Arguments]",Bn="[object Function]",$e="[object Object]",rt={};rt[gn]=rt["[object Array]"]=rt["[object ArrayBuffer]"]=rt["[object DataView]"]=rt["[object Boolean]"]=rt["[object Date]"]=rt["[object Float32Array]"]=rt["[object Float64Array]"]=rt["[object Int8Array]"]=rt["[object Int16Array]"]=rt["[object Int32Array]"]=rt["[object Map]"]=rt["[object Number]"]=rt[$e]=rt["[object RegExp]"]=rt["[object Set]"]=rt["[object String]"]=rt["[object Symbol]"]=rt["[object Uint8Array]"]=rt["[object Uint8ClampedArray]"]=rt["[object Uint16Array]"]=rt["[object Uint32Array]"]=!0,rt["[object Error]"]=rt[Bn]=rt["[object WeakMap]"]=!1;const ae=function o(t,e,n,i,r,s){var a,c=1&e,l=2&e,d=4&e;if(n&&(a=r?n(t,i,r,s):n(t)),a!==void 0)return a;if(!Dt(t))return t;var h=Qt(t);if(h){if(a=Va(t),!c)return Pi(t,a)}else{var u=Se(t),g=u==Bn||u=="[object GeneratorFunction]";if(In(t))return jr(t,c);if(u==$e||u==gn||g&&!r){if(a=l||g?{}:et(t),!c)return l?qr(t,Pa(a,t)):Oa(t,Ba(a,t))}else{if(!rt[u])return r?t:{};a=P(t,u,c)}}s||(s=new Sn);var m=s.get(t);if(m)return m;s.set(t,a),Ce(t)?t.forEach(function(_){a.add(o(_,e,n,_,t,s))}):It(t)&&t.forEach(function(_,v){a.set(v,o(_,e,n,v,t,s))});var k=h?void 0:(d?l?Wr:zi:l?Tn:Mi)(t);return fi(k||t,function(_,v){k&&(_=t[v=_]),bi(a,v,o(_,e,n,v,t,s))}),a},Jt=function(o,t){return ae(o,5,t=typeof t=="function"?t:void 0)},Xt=function(o){return Ut(o)&&o.nodeType===1&&!Ht(o)};class Ye{constructor(t,e){this._config={},e&&this.define(Ol(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,i=!1){if(Ht(e))return void this._setObjectToTarget(t,e,i);const r=e.split(".");e=r.pop();for(const s of r)Ht(t[s])||(t[s]={}),t=t[s];if(Ht(n))return Ht(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,i);i&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const i of n){if(!Ht(t[i])){t=null;break}t=t[i]}return t?Ol(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(i=>{this._setToTarget(t,i,e[i],n)})}}function Ol(o){return Jt(o,Kk)}function Kk(o){return Xt(o)?o:void 0}function Nn(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function ts(o){const t=Object.prototype.toString.apply(o);return t=="[object Window]"||t=="[object global]"}const Ll=ve(it());function ve(o){return o?class extends o{listenTo(t,e,n,i={}){if(Nn(t)||ts(t)){const r={capture:!!i.useCapture,passive:!!i.usePassive},s=this._getProxyEmitter(t,r)||new $k(t,r);this.listenTo(s,e,n,i)}else super.listenTo(t,e,n,i)}stopListening(t,e,n){if(Nn(t)||ts(t)){const i=this._getAllProxyEmitters(t);for(const r of i)this.stopListening(r,e,n)}else super.stopListening(t,e,n)}_getProxyEmitter(t,e){return function(n,i){const r=n[ne];return r&&r[i]?r[i].emitter:null}(this,jl(t,e))}_getAllProxyEmitters(t){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(t,e)).filter(e=>!!e)}}:Ll}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{ve[o]=Ll.prototype[o]});class $k extends it(){constructor(t,e){super(),dr(this,jl(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;const e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,n){this.attach(t),it().prototype._addEventListener.call(this,t,e,n)}_removeEventListener(t,e){it().prototype._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){const e=n=>{this.fire(t,n)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function jl(o,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=q())}(o);for(const n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}let Ua;try{Ua={window,document}}catch{Ua={window:{},document:{}}}const Z=Ua;function qt(o){return Object.prototype.toString.call(o)=="[object Text]"}function es(o){return Object.prototype.toString.apply(o)=="[object Range]"}function Rl(o){const t=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}function Fl(o){return o&&o.parentNode?o.offsetParent===Z.document.body?null:o.offsetParent:null}const Vl=["top","right","bottom","left","width","height"];class ht{constructor(t){const e=es(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),Ha(t)||e)if(e){const n=ht.getDomRangeRects(t);ns(this,ht.getBoundingRect(n))}else ns(this,t.getBoundingClientRect());else if(ts(t)){const{innerWidth:n,innerHeight:i}=t;ns(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else ns(this,t)}clone(){return new ht(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};if(e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0)return null;{const n=new ht(e);return n._source=this._source,n}}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(Ul(t))return e;let n,i=t,r=t.parentNode||t.commonAncestorContainer;for(;r&&!Ul(r);){const a=((s=r)instanceof HTMLElement?s.ownerDocument.defaultView.getComputedStyle(s).overflow:"visible")==="visible";i instanceof HTMLElement&&Hl(i)==="absolute"&&(n=i);const c=Hl(r);if(a||n&&(c==="relative"&&a||c!=="relative")){i=r,r=r.parentNode;continue}const l=new ht(r),d=e.getIntersection(l);if(!d)return null;d.getArea()<e.getArea()&&(e=d),i=r,r=r.parentNode}var s;return e}isEqual(t){for(const e of Vl)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}toAbsoluteRect(){const{scrollX:t,scrollY:e}=Z.window,n=this.clone().moveBy(t,e);if(Ha(n._source)){const i=Fl(n._source);i&&function(r,s){const a=new ht(s),c=Rl(s);let l=0,d=0;l-=a.left,d-=a.top,l+=s.scrollLeft,d+=s.scrollTop,l-=c.left,d-=c.top,r.moveBy(l,d)}(n,i)}return n}excludeScrollbarsAndBorders(){const t=this._source;let e,n,i;if(ts(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,i=t.getComputedStyle(t.document.documentElement).direction;else{const r=Rl(t);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,i=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,i==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const i of n)e.push(new ht(i));else{let i=t.startContainer;qt(i)&&(i=i.parentNode);const r=new ht(i.getBoundingClientRect());r.right=r.left,r.width=0,e.push(r)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of t)n++,e.left=Math.min(e.left,i.left),e.top=Math.min(e.top,i.top),e.right=Math.max(e.right,i.right),e.bottom=Math.max(e.bottom,i.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new ht(e))}}function ns(o,t){for(const e of Vl)o[e]=t[e]}function Ul(o){return!!Ha(o)&&o===o.ownerDocument.body}function Ha(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}function Hl(o){return o instanceof HTMLElement?o.ownerDocument.defaultView.getComputedStyle(o).position:"static"}const Ft=class{constructor(o,t){Ft._observerInstance||Ft._createObserver(),this._element=o,this._callback=t,Ft._addElementCallback(o,t),Ft._observerInstance.observe(o)}get element(){return this._element}destroy(){Ft._deleteElementCallback(this._element,this._callback)}static _addElementCallback(o,t){Ft._elementCallbacks||(Ft._elementCallbacks=new Map);let e=Ft._elementCallbacks.get(o);e||(e=new Set,Ft._elementCallbacks.set(o,e)),e.add(t)}static _deleteElementCallback(o,t){const e=Ft._getElementCallbacks(o);e&&(e.delete(t),e.size||(Ft._elementCallbacks.delete(o),Ft._observerInstance.unobserve(o))),Ft._elementCallbacks&&!Ft._elementCallbacks.size&&(Ft._observerInstance=null,Ft._elementCallbacks=null)}static _getElementCallbacks(o){return Ft._elementCallbacks?Ft._elementCallbacks.get(o):null}static _createObserver(){Ft._observerInstance=new Z.window.ResizeObserver(o=>{for(const t of o){const e=Ft._getElementCallbacks(t.target);if(e)for(const n of e)n(t)}})}};let Ri=Ft;function Yk(o,t){o instanceof HTMLTextAreaElement&&(o.value=t),o.innerHTML=t}function Fi(o){return t=>t+o}function os(o){let t=0;for(;o.previousSibling;)o=o.previousSibling,t++;return t}function ql(o,t,e){o.insertBefore(e,o.childNodes[t]||null)}function Vi(o){return o&&o.nodeType===Node.COMMENT_NODE}function Zn(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}Ri._observerInstance=null,Ri._elementCallbacks=null;var Gl=Math.pow;function qa({element:o,target:t,positions:e,limiter:n,fitInViewport:i,viewportOffsetConfig:r}){Ue(t)&&(t=t()),Ue(n)&&(n=n());const s=Fl(o),a=function(u){u=Object.assign({top:0,bottom:0,left:0,right:0},u);const g=new ht(Z.window);return g.top+=u.top,g.height-=u.top,g.bottom-=u.bottom,g.height-=u.bottom,g}(r),c=new ht(o),l=Wl(t,a);let d;if(!l||!a.getIntersection(l))return null;const h={targetRect:l,elementRect:c,positionedElementAncestor:s,viewportRect:a};if(n||i){if(n){const u=Wl(n,a);u&&(h.limiterRect=u)}d=function(u,g){const{elementRect:m}=g,k=m.getArea(),_=u.map(O=>new Kl(O,g)).filter(O=>!!O.name);let v=0,T=null;for(const O of _){const{limiterIntersectionArea:W,viewportIntersectionArea:Q}=O;if(W===k)return O;const pt=Gl(Q,2)+Gl(W,2);pt>v&&(v=pt,T=O)}return T}(e,h)}else d=new Kl(e[0],h);return d}function Wl(o,t){const e=new ht(o).getVisible();return e?e.getIntersection(t):null}class Kl{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect,e.limiterRect);if(!n)return;const{left:i,top:r,name:s,config:a}=n;this.name=s,this.config=a,this._positioningFunctionCoordinates={left:i,top:r},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const t=this._options.limiterRect;return t?t.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function $l(o){const t=o.parentNode;t&&t.removeChild(o)}function Zk({window:o,rect:t,alignToTop:e,forceScroll:n,viewportOffset:i}){const r=t.clone().moveBy(0,i.bottom),s=t.clone().moveBy(0,-i.top),a=new ht(o).excludeScrollbarsAndBorders(),c=e&&n,l=[s,r].every(m=>a.contains(m));let{scrollX:d,scrollY:h}=o;const u=d,g=h;c?h-=a.top-t.top+i.top:l||(Zl(s,a)?h-=a.top-t.top+i.top:Yl(r,a)&&(h+=e?t.top-a.top-i.top:t.bottom-a.bottom+i.bottom)),l||(Ql(t,a)?d-=a.left-t.left+i.left:Jl(t,a)&&(d+=t.right-a.right+i.right)),d==u&&h===g||o.scrollTo(d,h)}function Qk({parent:o,getRect:t,alignToTop:e,forceScroll:n,ancestorOffset:i=0,limiterElement:r}){const s=Ga(o),a=e&&n;let c,l,d;const h=r||s.document.body;for(;o!=h;)l=t(),c=new ht(o).excludeScrollbarsAndBorders(),d=c.contains(l),a?o.scrollTop-=c.top-l.top+i:d||(Zl(l,c)?o.scrollTop-=c.top-l.top+i:Yl(l,c)&&(o.scrollTop+=e?l.top-c.top-i:l.bottom-c.bottom+i)),d||(Ql(l,c)?o.scrollLeft-=c.left-l.left+i:Jl(l,c)&&(o.scrollLeft+=l.right-c.right+i)),o=o.parentNode}function Yl(o,t){return o.bottom>t.bottom}function Zl(o,t){return o.top<t.top}function Ql(o,t){return o.left<t.left}function Jl(o,t){return o.right>t.right}function Ga(o){return es(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function Jk(o){if(es(o)){let t=o.commonAncestorContainer;return qt(t)&&(t=t.parentNode),t}return o.parentNode}function Xl(o,t){const e=Ga(o),n=new ht(o);if(e===t)return n;{let i=e;for(;i!=t;){const r=i.frameElement,s=new ht(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),i=i.parent}}return n}const Xk={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},tb={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},lt=function(){const o={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)o[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)o[t-48]=t;for(let t=112;t<=123;t++)o["f"+(t-111)]=t;for(const t of"`-=[];',./\\")o[t]=t.charCodeAt(0);return o}(),eb=Object.fromEntries(Object.entries(lt).map(([o,t])=>[t,o.charAt(0).toUpperCase()+o.slice(1)]));function Ro(o){let t;if(typeof o=="string"){if(t=lt[o.toLowerCase()],!t)throw new y("keyboard-unknown-key",null,{key:o})}else t=o.keyCode+(o.altKey?lt.alt:0)+(o.ctrlKey?lt.ctrl:0)+(o.shiftKey?lt.shift:0)+(o.metaKey?lt.cmd:0);return t}function Ui(o){return typeof o=="string"&&(o=function(t){return t.split("+").map(e=>e.trim())}(o)),o.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return Ro(e.slice(0,-1));const n=Ro(e);return(C.isMac||C.isiOS)&&n==lt.ctrl?lt.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function td(o){let t=Ui(o);return Object.entries(C.isMac||C.isiOS?Xk:tb).reduce((e,[n,i])=>(t&lt[n]&&(t&=~lt[n],e+=i),e),"")+(t?eb[t]:"")}function Wa(o,t){const e=t==="ltr";switch(o){case lt.arrowleft:return e?"left":"right";case lt.arrowright:return e?"right":"left";case lt.arrowup:return"up";case lt.arrowdown:return"down"}}function $t(o){return Array.isArray(o)?o:[o]}function nb(o,t,e=1){if(typeof e!="number")throw new y("translation-service-quantity-not-a-number",null,{quantity:e});const n=Object.keys(Z.window.CKEDITOR_TRANSLATIONS).length;n===1&&(o=Object.keys(Z.window.CKEDITOR_TRANSLATIONS)[0]);const i=t.id||t.string;if(n===0||!function(c,l){return!!Z.window.CKEDITOR_TRANSLATIONS[c]&&!!Z.window.CKEDITOR_TRANSLATIONS[c].dictionary[l]}(o,i))return e!==1?t.plural:t.string;const r=Z.window.CKEDITOR_TRANSLATIONS[o].dictionary,s=Z.window.CKEDITOR_TRANSLATIONS[o].getPluralForm||(c=>c===1?0:1),a=r[i];return typeof a=="string"?a:a[Number(s(e))]}Z.window.CKEDITOR_TRANSLATIONS||(Z.window.CKEDITOR_TRANSLATIONS={});const ob=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function ed(o){return ob.includes(o)?"rtl":"ltr"}class ib{constructor({uiLanguage:t="en",contentLanguage:e}={}){this.uiLanguage=t,this.contentLanguage=e||this.uiLanguage,this.uiLanguageDirection=ed(this.uiLanguage),this.contentLanguageDirection=ed(this.contentLanguage),this.t=(n,i)=>this._t(n,i)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=$t(e),typeof t=="string"&&(t={string:t});const n=t.plural?e[0]:1;return function(i,r){return i.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(nb(this.uiLanguage,t,n),e)}}class Ie extends it(){constructor(t={},e={}){super();const n=re(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of t)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new y("collection-add-item-invalid-index",this);let n=0;for(const i of t){const r=this._getItemIdBeforeAdding(i),s=e+n;this._items.splice(s,0,i),this._itemMap.set(r,i),this.fire("add",i,s),n++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new y("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{const e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new y("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(e):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(i,r,s)=>{const a=e._bindToCollection==this,c=e._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{const l=t(r);if(!l)return void this._skippedIndexesFromExternal.push(s);let d=s;for(const h of this._skippedIndexesFromExternal)s>h&&d--;for(const h of e._skippedIndexesFromExternal)d>=h&&d++;this._bindToExternalToInternalMap.set(r,l),this._bindToInternalToExternalMap.set(l,r),this.add(l,d);for(let h=0;h<e._skippedIndexesFromExternal.length;h++)d<=e._skippedIndexesFromExternal[h]&&e._skippedIndexesFromExternal[h]++}};for(const i of e)n(0,i,e.getIndex(i));this.listenTo(e,"add",n),this.listenTo(e,"remove",(i,r,s)=>{const a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,l)=>(s<l&&c.push(l-1),s>l&&c.push(l),c),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],typeof n!="string")throw new y("collection-add-invalid-id",this);if(this.get(n))throw new y("collection-add-item-already-exists",this)}else t[e]=n=q();return n}_remove(t){let e,n,i,r=!1;const s=this._idProperty;if(typeof t=="string"?(n=t,i=this._itemMap.get(n),r=!i,i&&(e=this._items.indexOf(i))):typeof t=="number"?(e=t,i=this._items[e],r=!i,i&&(n=i[s])):(i=t,n=i[s],e=this._items.indexOf(i),r=e==-1||!this._itemMap.get(n)),r)throw new y("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(a),this.fire("remove",i,e),[i,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Gt(o){const t=o.next();return t.done?null:t.value}class ce extends ve(ft()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(t){if(this._elements.has(t))throw new y("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Te{constructor(){this._listener=new(ve())}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+Ro(n),n)})}set(t,e,n={}){const i=Ui(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(s,a)=>{e(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(t){return!!this._listener.fire("_keydown:"+Ro(t),t)}stopListening(t){this._listener.stopListening(t)}destroy(){this.stopListening()}}function Ze(o){return re(o)?new Map(o):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(o)}function Ka(o,t){let e;function n(...i){n.cancel(),e=setTimeout(()=>o(...i),t)}return n.cancel=()=>{clearTimeout(e)},n}function $a(o,t){return!!(e=o.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(t));var e}function Ya(o,t){return!!(e=o.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}const rb=function(){const o=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],t=new RegExp("\\p{Regional_Indicator}{2}","u").source,e="(?:"+o.map(n=>n.source).join("|")+")";return new RegExp(`${t}|${e}(?:‍${e})*`,"ug")}();function nd(o,t){const e=String(o).matchAll(rb);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}class pn extends Ie{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(e,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(e,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(const e of this)this._renderViewIntoCollectionParent(e)}delegate(...t){if(!t.length||!t.every(e=>typeof e=="string"))throw new y("ui-viewcollection-delegate-wrong-events",this);return{to:e=>{for(const n of this)for(const i of t)n.delegate(i).to(e);this.on("add",(n,i)=>{for(const r of t)i.delegate(r).to(e)}),this.on("remove",(n,i)=>{for(const r of t)i.stopDelegating(r,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}remove(t){return super.remove(t)}}var sb=U(6062),K=U.n(sb),od=U(4793),ab={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(od.Z,ab),od.Z.locals;class nt extends ve(ft()){constructor(t){super(),this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new Ie,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t,n.t=t&&t.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Me.bind(this,this)}createCollection(t){const e=new pn(t);return this._viewCollections.add(e),e}registerChild(t){re(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){re(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new Me(t)}extendTemplate(t){Me.extend(this.template,t)}render(){if(this.isRendered)throw new y("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}class Me extends it(){constructor(t){super(),Object.assign(this,ad(sd(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,intoFragment:!1,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new y("ui-template-revert-not-applied",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)rs(n)?yield n:Za(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,i)=>new cb({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:i}),if:(n,i,r)=>new id({observable:t,emitter:e,attribute:n,valueIfTrue:i,callback:r})}}static extend(t,e){if(t._isRendered)throw new y("template-extend-render",[this,t]);hd(t,ad(sd(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new y("ui-template-wrong-syntax",this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),is(this.text)?this._bindToObservable({schema:this.text,updater:lb(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){if(!this.attributes)return;const e=t.node,n=t.revertData;for(const i in this.attributes){const r=e.getAttribute(i),s=this.attributes[i];n&&(n.attributes[i]=r);const a=ud(s)?s[0].ns:null;if(is(s)){const c=ud(s)?s[0].value:s;n&&gd(i)&&c.unshift(r),this._bindToObservable({schema:c,updater:db(e,i,a),data:t})}else if(i=="style"&&typeof s[0]!="string")this._renderStyleAttribute(s[0],t);else{n&&r&&gd(i)&&s.unshift(r);const c=s.map(l=>l&&l.value||l).reduce((l,d)=>l.concat(d),[]).reduce(ld,"");Fo(c)||e.setAttributeNS(a,i,c)}}}_renderStyleAttribute(t,e){const n=e.node;for(const i in t){const r=t[i];is(r)?this._bindToObservable({schema:[r],updater:hb(n,i),data:e}):n.style[i]=r}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,i=t.isApplying;let r=0;for(const s of this.children)if(Qa(s)){if(!i){s.setParent(e);for(const a of s)n.appendChild(a.element)}}else if(rs(s))i||(s.isRendered||s.render(),n.appendChild(s.element));else if(Nn(s))n.appendChild(s);else if(i){const a={children:[],bindings:[],attributes:{}};t.revertData.children.push(a),s._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:a})}else n.appendChild(s.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(i=>{const[r,s]=e.split("@");return i.activateDomEventListener(r,s,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const i=n.revertData;rd(t,e,n);const r=t.filter(s=>!Fo(s)).filter(s=>s.observable).map(s=>s.activateAttributeListener(t,e,n));i&&i.bindings.push(r)}_revertTemplateFromNode(t,e){for(const i of e.bindings)for(const r of i)r();if(e.text)return void(t.textContent=e.text);const n=t;for(const i in e.attributes){const r=e.attributes[i];r===null?n.removeAttribute(i):n.setAttribute(i,r)}for(let i=0;i<e.children.length;++i)this._revertTemplateFromNode(n.childNodes[i],e.children[i])}}class Hi{constructor(t){this.attribute=t.attribute,this.observable=t.observable,this.emitter=t.emitter,this.callback=t.callback}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const i=()=>rd(t,e,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,i),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,i)}}}class cb extends Hi{constructor(t){super(t),this.eventNameOrFunction=t.eventNameOrFunction}activateDomEventListener(t,e,n){const i=(r,s)=>{e&&!s.target.matches(e)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(s):this.observable.fire(this.eventNameOrFunction,s))};return this.emitter.listenTo(n.node,t,i),()=>{this.emitter.stopListening(n.node,t,i)}}}class id extends Hi{constructor(t){super(t),this.valueIfTrue=t.valueIfTrue}getValue(t){return!Fo(super.getValue(t))&&(this.valueIfTrue||!0)}}function is(o){return!!o&&(o.value&&(o=o.value),Array.isArray(o)?o.some(is):o instanceof Hi)}function rd(o,t,{node:e}){const n=function(r,s){return r.map(a=>a instanceof Hi?a.getValue(s):a)}(o,e);let i;i=o.length==1&&o[0]instanceof id?n[0]:n.reduce(ld,""),Fo(i)?t.remove():t.set(i)}function lb(o){return{set(t){o.textContent=t},remove(){o.textContent=""}}}function db(o,t,e){return{set(n){o.setAttributeNS(e,t,n)},remove(){o.removeAttributeNS(e,t)}}}function hb(o,t){return{set(e){o.style[t]=e},remove(){o.style[t]=null}}}function sd(o){return Jt(o,t=>{if(t&&(t instanceof Hi||Za(t)||rs(t)||Qa(t)))return t})}function ad(o){if(typeof o=="string"?o=function(t){return{text:[t]}}(o):o.text&&function(t){t.text=$t(t.text)}(o),o.on&&(o.eventListeners=function(t){for(const e in t)cd(t,e);return t}(o.on),delete o.on),!o.text){o.attributes&&function(e){for(const n in e)e[n].value&&(e[n].value=$t(e[n].value)),cd(e,n)}(o.attributes);const t=[];if(o.children)if(Qa(o.children))t.push(o.children);else for(const e of o.children)Za(e)||rs(e)||Nn(e)?t.push(e):t.push(new Me(e));o.children=t}return o}function cd(o,t){o[t]=$t(o[t])}function ld(o,t){return Fo(t)?o:Fo(o)?t:`${o} ${t}`}function dd(o,t){for(const e in t)o[e]?o[e].push(...t[e]):o[e]=t[e]}function hd(o,t){if(t.attributes&&(o.attributes||(o.attributes={}),dd(o.attributes,t.attributes)),t.eventListeners&&(o.eventListeners||(o.eventListeners={}),dd(o.eventListeners,t.eventListeners)),t.text&&o.text.push(...t.text),t.children&&t.children.length){if(o.children.length!=t.children.length)throw new y("ui-template-extend-children-mismatch",o);let e=0;for(const n of t.children)hd(o.children[e++],n)}}function Fo(o){return!o&&o!==0}function rs(o){return o instanceof nt}function Za(o){return o instanceof Me}function Qa(o){return o instanceof pn}function ud(o){return Dt(o[0])&&o[0].ns}function gd(o){return o=="class"||o=="style"}class ub extends pn{constructor(t,e=[]){super(e),this.locale=t}get bodyCollectionContainer(){return this._bodyCollectionContainer}attachToDom(){this._bodyCollectionContainer=new Me({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let t=document.querySelector(".ck-body-wrapper");t||(t=Ve(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(t)),t.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const t=document.querySelector(".ck-body-wrapper");t&&t.childElementCount==0&&t.remove()}}var pd=U(6574),gb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(pd.Z,gb),pd.Z.locals;const md=class extends nt{constructor(){super();const o=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.set("isVisible",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon",o.if("isVisible","ck-hidden",t=>!t),"ck-reset_all-excluded",o.if("isColorInherited","ck-icon_inherit-color")],viewBox:o.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const o=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=o.getAttribute("viewBox");t&&(this.viewBox=t);for(const{name:e,value:n}of Array.from(o.attributes))md.presentationalAttributeNames.includes(e)&&this.element.setAttribute(e,n);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;o.childNodes.length>0;)this.element.appendChild(o.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(o=>{o.style.fill=this.fillColor})}};let Qn=md;Qn.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];class pb extends nt{constructor(){super(),this.set({style:void 0,text:void 0,id:void 0});const t=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:t.to("style"),id:t.to("id")},children:[{text:t.to("text")}]})}}var fd=U(4906),mb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(fd.Z,mb),fd.Z.locals;class Et extends nt{constructor(t,e=new pb){super(t),this._focusDelayed=null;const n=this.bindTemplate,i=q();this.set("ariaChecked",void 0),this.set("ariaLabel",void 0),this.set("ariaLabelledBy",`ck-editor__aria-label_${i}`),this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("role",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._setupLabelView(e),this.iconView=new Qn,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const r={tag:"button",attributes:{class:["ck","ck-button",n.to("class"),n.if("isEnabled","ck-disabled",s=>!s),n.if("isVisible","ck-hidden",s=>!s),n.to("isOn",s=>s?"ck-on":"ck-off"),n.if("withText","ck-button_with-text"),n.if("withKeystroke","ck-button_with-keystroke")],role:n.to("role"),type:n.to("type",s=>s||"button"),tabindex:n.to("tabindex"),"aria-label":n.to("ariaLabel"),"aria-labelledby":n.to("ariaLabelledBy"),"aria-disabled":n.if("isEnabled",!0,s=>!s),"aria-checked":n.to("isOn"),"aria-pressed":n.to("isOn",s=>!!this.isToggleable&&String(!!s)),"data-cke-tooltip-text":n.to("_tooltipString"),"data-cke-tooltip-position":n.to("tooltipPosition")},children:this.children,on:{click:n.to(s=>{this.isEnabled?this.fire("execute"):s.preventDefault()})}};C.isSafari&&(this._focusDelayed||(this._focusDelayed=Ka(()=>this.focus(),0)),r.on.mousedown=n.to(()=>{this._focusDelayed()}),r.on.mouseup=n.to(()=>{this._focusDelayed.cancel()})),this.setTemplate(r)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}destroy(){this._focusDelayed&&this._focusDelayed.cancel(),super.destroy()}_setupLabelView(t){return t.bind("text","style","id").to(this,"label","labelStyle","ariaLabelledBy"),t}_createKeystrokeView(){const t=new nt;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",e=>td(e))}]}),t}_getTooltipString(t,e,n){return t?typeof t=="string"?t:(n&&(n=td(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var kd=U(5332),fb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(kd.Z,fb),kd.Z.locals;class ss extends Et{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new nt;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}var bd=U(6781),kb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(bd.Z,kb),bd.Z.locals,U(1103),U(841);var wd=U(3662),bb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(wd.Z,bb),wd.Z.locals;class Ad extends nt{constructor(t){super(t),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${q()}`;const e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:e.to("for")},children:[{text:e.to("text")}]})}}var _d=U(2577),wb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(_d.Z,wb),_d.Z.locals;class as extends nt{constructor(t,e){super(t);const n=`ck-labeled-field-view-${q()}`,i=`ck-labeled-field-view-status-${q()}`;this.fieldView=e(this,n,i),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(i),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(s,a)=>s||a);const r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",s=>!s),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(t){const e=new Ad(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createStatusView(t){const e=new nt(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",i=>!i)],id:t,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),e}focus(t){this.fieldView.focus(t)}}class Ab extends nt{constructor(t){super(t),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.focusTracker=new ce,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0);const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",e.if("isFocused","ck-input_focused"),e.if("isEmpty","ck-input-text_empty"),e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDescribedById")},on:{input:e.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:e.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(t,e,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}reset(){this.value=this.element.value="",this._updateIsEmpty()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(t){this.element.value=t||t===0?t:""}}var Cd=U(4879),_b={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Cd.Z,_b),Cd.Z.locals;class Cb extends Ab{constructor(t){super(t),this.set("inputMode","text");const e=this.bindTemplate;this.extendTemplate({attributes:{inputmode:e.to("inputMode")}})}}class vb extends Cb{constructor(t){super(t),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var vd=U(8182),yb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(vd.Z,yb),vd.Z.locals;class xb extends nt{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",n=>`ck-dropdown__panel_${n}`),e.if("isVisible","ck-dropdown__panel-visible")],tabindex:"-1"},children:this.children,on:{selectstart:e.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(){if(this.children.length){const t=this.children.first;typeof t.focus=="function"?t.focus():G("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const t=this.children.last;typeof t.focusLast=="function"?t.focusLast():t.focus()}}}var yd=U(5485),Eb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(yd.Z,Eb),yd.Z.locals;const Ja=class extends nt{constructor(o,t,e){super(o);const n=this.bindTemplate;this.buttonView=t,this.panelView=e,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new Te,this.focusTracker=new ce,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",n.to("class"),n.if("isEnabled","ck-disabled",i=>!i)],id:n.to("id"),"aria-describedby":n.to("ariaDescribedById")},children:[t,e]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":n.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(t,e,n)=>{if(n)if(this.panelPosition==="auto"){const i=Ja._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=i?i.name:this._panelPositions[0].name}else this.panelView.position=this.panelPosition}),this.keystrokes.listenTo(this.element);const o=(t,e)=>{this.isOpen&&(this.isOpen=!1,e())};this.keystrokes.set("arrowdown",(t,e)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,e())}),this.keystrokes.set("arrowright",(t,e)=>{this.isOpen&&e()}),this.keystrokes.set("arrowleft",o),this.keystrokes.set("esc",o)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:o,north:t,southEast:e,southWest:n,northEast:i,northWest:r,southMiddleEast:s,southMiddleWest:a,northMiddleEast:c,northMiddleWest:l}=Ja.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[e,n,s,a,o,i,r,c,l,t]:[n,e,a,s,o,r,i,l,c,t]}};let Xa=Ja;Xa.defaultPanelPositions={south:(o,t)=>({top:o.bottom,left:o.left-(t.width-o.width)/2,name:"s"}),southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,t)=>({top:o.bottom,left:o.left-t.width+o.width,name:"sw"}),southMiddleEast:(o,t)=>({top:o.bottom,left:o.left-(t.width-o.width)/4,name:"sme"}),southMiddleWest:(o,t)=>({top:o.bottom,left:o.left-3*(t.width-o.width)/4,name:"smw"}),north:(o,t)=>({top:o.top-t.height,left:o.left-(t.width-o.width)/2,name:"n"}),northEast:(o,t)=>({top:o.top-t.height,left:o.left,name:"ne"}),northWest:(o,t)=>({top:o.top-t.height,left:o.left-t.width+o.width,name:"nw"}),northMiddleEast:(o,t)=>({top:o.top-t.height,left:o.left-(t.width-o.width)/4,name:"nme"}),northMiddleWest:(o,t)=>({top:o.top-t.height,left:o.left-3*(t.width-o.width)/4,name:"nmw"})},Xa._getOptimalPosition=qa;const xd='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class Db extends Et{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",e=>String(e))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new Qn;return t.content=xd,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}class Pn extends it(){constructor(t){if(super(),this.focusables=t.focusables,this.focusTracker=t.focusTracker,this.keystrokeHandler=t.keystrokeHandler,this.actions=t.actions,t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];typeof n=="string"&&(n=[n]);for(const i of n)t.keystrokeHandler.set(i,(r,s)=>{this[e](),s()})}this.on("forwardCycle",()=>this.focusFirst(),{priority:"low"}),this.on("backwardCycle",()=>this.focusLast(),{priority:"low"})}get first(){return this.focusables.find(tc)||null}get last(){return this.focusables.filter(tc).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((e,n)=>{const i=e.element===this.focusTracker.focusedElement;return i&&(t=n),i}),t)}focusFirst(){this._focus(this.first,1)}focusLast(){this._focus(this.last,-1)}focusNext(){const t=this.next;t&&this.focusables.getIndex(t)===this.current||(t===this.first?this.fire("forwardCycle"):this._focus(t,1))}focusPrevious(){const t=this.previous;t&&this.focusables.getIndex(t)===this.current||(t===this.last?this.fire("backwardCycle"):this._focus(t,-1))}_focus(t,e){t&&t.focus(e)}_getFocusableItem(t){const e=this.current,n=this.focusables.length;if(!n)return null;if(e===null)return this[t===1?"first":"last"];let i=(e+n+t)%n;do{const r=this.focusables.get(i);if(tc(r))return r;i=(i+n+t)%n}while(i!==e);return null}}function tc(o){return!(!("focus"in o)||!Zn(o.element))}class Ed extends nt{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class Sb extends nt{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function Dd(o){return Array.isArray(o)?{items:o,removeItems:[]}:o?Object.assign({items:[],removeItems:[]},o):{items:[],removeItems:[]}}class V extends ft(){constructor(t){super(),this._disableStack=new Set,this.editor=t,this.set("isEnabled",!0)}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Sd,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Sd),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Sd(o){o.return=!1,o.stop()}class st extends ft(){constructor(t){super(),this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(t,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",e=>{if(!this.affectsData)return;const n=t.model.document.selection,i=n.getFirstPosition().root.rootName!="$graveyard"&&t.model.canEditAt(n);(t.isReadOnly||this._isEnabledBasedOnSelection&&!i)&&(e.return=!1,e.stop())},{priority:"highest"}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(t){this._affectsData=t}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Id,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Id),this.refresh())}execute(...t){}destroy(){this.stopListening()}}function Id(o){o.return=!1,o.stop()}class Td extends st{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...t){const e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={}){mt(this._childCommandsDefinitions,{command:t,priority:e.priority||"normal"}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}class Md extends it(){constructor(t,e=[],n=[]){super(),this._plugins=new Map,this._context=t,this._availablePlugins=new Map;for(const i of e)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new y("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){const i=this,r=this._context;(function m(k,_=new Set){k.forEach(v=>{c(v)&&(_.has(v)||(_.add(v),v.pluginName&&!i._availablePlugins.has(v.pluginName)&&i._availablePlugins.set(v.pluginName,v),v.requires&&m(v.requires,_)))})})(t),u(t);const s=[...function m(k,_=new Set){return k.map(v=>c(v)?v:i._availablePlugins.get(v)).reduce((v,T)=>_.has(T)?v:(_.add(T),T.requires&&(u(T.requires,T),m(T.requires,_).forEach(O=>v.add(O))),v.add(T)),new Set)}(t.filter(m=>!d(m,e)))];(function(m,k){for(const _ of k){if(typeof _!="function")throw new y("plugincollection-replace-plugin-invalid-type",null,{pluginItem:_});const v=_.pluginName;if(!v)throw new y("plugincollection-replace-plugin-missing-name",null,{pluginItem:_});if(_.requires&&_.requires.length)throw new y("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:v});const T=i._availablePlugins.get(v);if(!T)throw new y("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:v});const O=m.indexOf(T);if(O===-1){if(i._contextPlugins.has(T))return;throw new y("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:v})}if(T.requires&&T.requires.length)throw new y("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:v});m.splice(O,1,_),i._availablePlugins.set(v,_)}})(s,n);const a=s.map(m=>{let k=i._contextPlugins.get(m);return k=k||new m(r),i._add(m,k),k});return g(a,"init").then(()=>g(a,"afterInit")).then(()=>a);function c(m){return typeof m=="function"}function l(m){return c(m)&&!!m.isContextPlugin}function d(m,k){return k.some(_=>_===m||h(m)===_||h(_)===m)}function h(m){return c(m)?m.pluginName||m.name:m}function u(m,k=null){m.map(_=>c(_)?_:i._availablePlugins.get(_)||_).forEach(_=>{(function(v,T){if(!c(v))throw T?new y("plugincollection-soft-required",r,{missingPlugin:v,requiredBy:h(T)}):new y("plugincollection-plugin-not-found",r,{plugin:v})})(_,k),function(v,T){if(l(T)&&!l(v))throw new y("plugincollection-context-required",r,{plugin:h(v),requiredBy:h(T)})}(_,k),function(v,T){if(T&&d(v,e))throw new y("plugincollection-required",r,{plugin:h(v),requiredBy:h(T)})}(_,k)})}function g(m,k){return m.reduce((_,v)=>v[k]?i._contextPlugins.has(v)?_:_.then(v[k].bind(v)):_,Promise.resolve())}}destroy(){const t=[];for(const[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new y("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}class Bd{constructor(t){this._contextOwner=null,this.config=new Ye(t,this.constructor.defaultConfig);const e=this.constructor.builtinPlugins;this.config.define("plugins",e),this.plugins=new Md(this,e);const n=this.config.get("language")||{};this.locale=new ib({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new Ie}initPlugins(){const t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(const n of t.concat(e)){if(typeof n!="function")throw new y("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new y("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new y("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}class cs extends ft(){constructor(t){super(),this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class Ib extends Te{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){const i=e;e=(r,s)=>{this.editor.execute(i),s()}}super.set(t,e,n)}}var Nd=U(4717),Tb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Nd.Z,Tb),Nd.Z.locals;const ls=new WeakMap;let Pd=!1;function zd({view:o,element:t,text:e,isDirectHost:n=!0,keepOnFocus:i=!1}){const r=o.document;function s(a){ls.get(r).set(t,{text:a,isDirectHost:n,keepOnFocus:i,hostElement:n?t:null}),o.change(c=>ec(r,c))}ls.has(r)||(ls.set(r,new Map),r.registerPostFixer(a=>ec(r,a)),r.on("change:isComposing",()=>{o.change(a=>ec(r,a))},{priority:"high"})),t.is("editableElement")&&t.on("change:placeholder",(a,c,l)=>{s(l)}),t.placeholder?s(t.placeholder):e&&s(e),e&&function(){Pd||G("enableplaceholder-deprecated-text-option"),Pd=!0}()}function Mb(o,t){return!!t.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",t),!0)}function ec(o,t){const e=ls.get(o),n=[];let i=!1;for(const[r,s]of e)s.isDirectHost&&(n.push(r),Od(t,r,s)&&(i=!0));for(const[r,s]of e){if(s.isDirectHost)continue;const a=Bb(r);a&&(n.includes(a)||(s.hostElement=a,Od(t,r,s)&&(i=!0)))}return i}function Od(o,t,e){const{text:n,isDirectHost:i,hostElement:r}=e;let s=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),s=!0),(i||t.childCount==1)&&function(a,c){if(!a.isAttached()||Array.from(a.getChildren()).some(h=>!h.is("uiElement")))return!1;const l=a.document,d=l.selection.anchor;return!(l.isComposing&&d&&d.parent===a||!c&&l.isFocused&&(!d||d.parent===a))}(r,e.keepOnFocus)?function(a,c){return!c.hasClass("ck-placeholder")&&(a.addClass("ck-placeholder",c),!0)}(o,r)&&(s=!0):Mb(o,r)&&(s=!0),s}function Bb(o){if(o.childCount){const t=o.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}class Jn{is(){throw new Error("is() method is abstract")}}const Ld=function(o){return ae(o,4)};class Xn extends it(Jn){constructor(t){super(),this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new y("view-node-not-found-in-parent",this);return t}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=Zt(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire(`change:${t}`,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=Ld(this);return delete t.parent,t}}Xn.prototype.is=function(o){return o==="node"||o==="view:node"};class Ct extends Xn{constructor(t,e){super(t),this._textData=e}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof Ct&&(this===t||this.data===t.data)}_clone(){return new Ct(this.document,this.data)}}Ct.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class Qe extends Jn{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.data.length)throw new y("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new y("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(t={}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}Qe.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class Be{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(const e of t)for(const n of this._patterns){const i=jd(e,n);if(i)return{element:e,pattern:n,match:i}}return null}matchAll(...t){const e=[];for(const n of t)for(const i of this._patterns){const r=jd(n,i);r&&e.push({element:n,pattern:i,match:r})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;const t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function jd(o,t){if(typeof t=="function")return t(o);const e={};return t.name&&(e.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(t.name,o.name),!e.name)||t.attributes&&(e.attributes=function(n,i){const r=new Set(i.getAttributeKeys());return Ht(n)?(n.style!==void 0&&G("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&G("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),nc(n,r,s=>i.getAttribute(s))}(t.attributes,o),!e.attributes)||t.classes&&(e.classes=function(n,i){return nc(n,i.getClassNames(),()=>{})}(t.classes,o),!e.classes)||t.styles&&(e.styles=function(n,i){return nc(n,i.getStyleNames(!0),r=>i.getStyle(r))}(t.styles,o),!e.styles)?null:e}function nc(o,t,e){const n=function(s){return Array.isArray(s)?s.map(a=>Ht(a)?(a.key!==void 0&&a.value!==void 0||G("matcher-pattern-missing-key-or-value",a),[a.key,a.value]):[a,!0]):Ht(s)?Object.entries(s):[[s,!0]]}(o),i=Array.from(t),r=[];if(n.forEach(([s,a])=>{i.forEach(c=>{(function(l,d){return l===!0||l===d||l instanceof RegExp&&d.match(l)})(s,c)&&function(l,d,h){if(l===!0)return!0;const u=h(d);return l===u||l instanceof RegExp&&!!String(u).match(l)}(a,c,e)&&r.push(c)})}),n.length&&!(r.length<n.length))return r}const ds=function(o){return typeof o=="symbol"||Ut(o)&&Fe(o)=="[object Symbol]"};var Nb=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pb=/^\w*$/;const zb=function(o,t){if(Qt(o))return!1;var e=typeof o;return!(e!="number"&&e!="symbol"&&e!="boolean"&&o!=null&&!ds(o))||Pb.test(o)||!Nb.test(o)||t!=null&&o in Object(t)};function oc(o,t){if(typeof o!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,i=t?t.apply(this,n):n[0],r=e.cache;if(r.has(i))return r.get(i);var s=o.apply(this,n);return e.cache=r.set(i,s)||r,s};return e.cache=new(oc.Cache||Do),e}oc.Cache=Do;const Ob=oc,Lb=function(o){var t=Ob(o,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t};var jb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rb=/\\(\\)?/g,Fb=Lb(function(o){var t=[];return o.charCodeAt(0)===46&&t.push(""),o.replace(jb,function(e,n,i,r){t.push(i?r.replace(Rb,"$1"):n||e)}),t});const Vb=Fb,Ub=function(o,t){for(var e=-1,n=o==null?0:o.length,i=Array(n);++e<n;)i[e]=t(o[e],e,o);return i};var Rd=Ae?Ae.prototype:void 0,Fd=Rd?Rd.toString:void 0;const Hb=function o(t){if(typeof t=="string")return t;if(Qt(t))return Ub(t,o)+"";if(ds(t))return Fd?Fd.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},ic=function(o){return o==null?"":Hb(o)},rc=function(o,t){return Qt(o)?o:zb(o,t)?[o]:Vb(ic(o))},qb=function(o){var t=o==null?0:o.length;return t?o[t-1]:void 0},sc=function(o){if(typeof o=="string"||ds(o))return o;var t=o+"";return t=="0"&&1/o==-1/0?"-0":t},Vd=function(o,t){for(var e=0,n=(t=rc(t,o)).length;o!=null&&e<n;)o=o[sc(t[e++])];return e&&e==n?o:void 0},Ud=function(o,t,e){var n=-1,i=o.length;t<0&&(t=-t>i?0:i+t),(e=e>i?i:e)<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+t];return r},Gb=function(o,t){return t.length<2?o:Vd(o,Ud(t,0,-1))},Wb=function(o,t){return t=rc(t,o),(o=Gb(o,t))==null||delete o[sc(qb(t))]},Kb=function(o,t){return o==null||Wb(o,t)},hs=function(o,t,e){var n=o==null?void 0:Vd(o,t);return n===void 0?e:n},ac=function(o,t,e){(e!==void 0&&!Wn(o[t],e)||e===void 0&&!(t in o))&&ki(o,t,e)},$b=function(o){return function(t,e,n){for(var i=-1,r=Object(t),s=n(t),a=s.length;a--;){var c=s[o?a:++i];if(e(r[c],c,r)===!1)break}return t}}(),Yb=function(o){return Ut(o)&&Mo(o)},cc=function(o,t){if((t!=="constructor"||typeof o[t]!="function")&&t!="__proto__")return o[t]},Zb=function(o){return qe(o,Tn(o))},Qb=function(o,t,e,n,i,r,s){var a=cc(o,e),c=cc(t,e),l=s.get(c);if(l)ac(o,e,l);else{var d=r?r(a,c,e+"",o,t,s):void 0,h=d===void 0;if(h){var u=Qt(c),g=!u&&In(c),m=!u&&!g&&$n(c);d=c,u||g||m?Qt(a)?d=a:Yb(a)?d=Pi(a):g?(h=!1,d=jr(c,!0)):m?(h=!1,d=x(c,!0)):d=[]:Ht(c)||_i(c)?(d=a,_i(a)?d=Zb(a):Dt(a)&&!Ue(a)||(d=et(c))):h=!1}h&&(s.set(c,d),i(d,c,n,r,s),s.delete(c)),ac(o,e,d)}},Jb=function o(t,e,n,i,r){t!==e&&$b(e,function(s,a){if(r||(r=new Sn),Dt(s))Qb(t,e,a,n,o,i,r);else{var c=i?i(cc(t,a),s,a+"",t,e,r):void 0;c===void 0&&(c=s),ac(t,a,c)}},Tn)},to=function(o){return o},Xb=function(o,t,e){switch(e.length){case 0:return o.call(t);case 1:return o.call(t,e[0]);case 2:return o.call(t,e[0],e[1]);case 3:return o.call(t,e[0],e[1],e[2])}return o.apply(t,e)};var Hd=Math.max;const tw=function(o,t,e){return t=Hd(t===void 0?o.length-1:t,0),function(){for(var n=arguments,i=-1,r=Hd(n.length-t,0),s=Array(r);++i<r;)s[i]=n[t+i];i=-1;for(var a=Array(t+1);++i<t;)a[i]=n[i];return a[t]=e(s),Xb(o,this,a)}},ew=function(o){return function(){return o}},nw=So?function(o,t){return So(o,"toString",{configurable:!0,enumerable:!1,value:ew(t),writable:!0})}:to;var ow=Date.now;const iw=function(o){var t=0,e=0;return function(){var n=ow(),i=16-(n-e);if(e=n,i>0){if(++t>=800)return arguments[0]}else t=0;return o.apply(void 0,arguments)}}(nw),rw=function(o,t){return iw(tw(o,t,to),o+"")},sw=function(o,t,e){if(!Dt(e))return!1;var n=typeof t;return!!(n=="number"?Mo(e)&&yi(t,e.length):n=="string"&&t in e)&&Wn(e[t],o)},qd=function(o){return rw(function(t,e){var n=-1,i=e.length,r=i>1?e[i-1]:void 0,s=i>2?e[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,s&&sw(e[0],e[1],s)&&(r=i<3?void 0:r,i=1),t=Object(t);++n<i;){var a=e[n];a&&o(t,a,n,r)}return t})},Gd=qd(function(o,t,e){Jb(o,t,e)}),aw=function(o,t,e,n){if(!Dt(o))return o;for(var i=-1,r=(t=rc(t,o)).length,s=r-1,a=o;a!=null&&++i<r;){var c=sc(t[i]),l=e;if(c==="__proto__"||c==="constructor"||c==="prototype")return o;if(i!=s){var d=a[c];(l=n?n(d,c,a):void 0)===void 0&&(l=Dt(d)?d:yi(t[i+1])?[]:{})}bi(a,c,l),a=a[c]}return o},cw=function(o,t,e){return o==null?o:aw(o,t,e)};class lw{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){const t=Object.entries(this._styles);return!Array.from(t).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=Array.from(function(n){let i=null,r=0,s=0,a=null;const c=new Map;if(n==="")return c;n.charAt(n.length-1)!=";"&&(n+=";");for(let l=0;l<n.length;l++){const d=n.charAt(l);if(i===null)switch(d){case":":a||(a=n.substr(r,l-r),s=l+1);break;case'"':case"'":i=d;break;case";":{const h=n.substr(s,l-s);a&&c.set(a.trim(),h.trim()),a=null,r=l+1;break}}else d===i&&(i=null)}return c}(t).entries());for(const[n,i]of e)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(Dt(t))for(const[n,i]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=lc(t);Kb(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!Dt(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([e])=>e)}clear(){this._styles={}}_getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),i=hs(this._styles,n);i&&!Array.from(Object.keys(i)).length&&this.remove(n)}}class dw{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(Dt(e))dc(n,lc(t),e);else if(this._normalizers.has(t)){const i=this._normalizers.get(t),{path:r,value:s}=i(e);dc(n,r,s)}else dc(n,t,e)}getNormalized(t,e){if(!t)return Gd({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if(typeof n=="string")return hs(e,n);const i=n(t,e);if(i)return i}return hs(e,lc(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){const e=Array.from(this._consumables.keys()).filter(i=>{const r=this.getNormalized(i,t);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...e,...Object.keys(t)]);return Array.from(n.values())}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function lc(o){return o.replace("-",".")}function dc(o,t,e){let n=e;Dt(e)&&(n=Gd({},hs(o,t),e)),cw(o,t,n)}class pe extends Xn{constructor(t,e,n,i){if(super(t),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=e,this._attrs=function(r){const s=Ze(r);for(const[a,c]of s)c===null?s.delete(a):typeof c!="string"&&s.set(a,String(c));return s}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");Wd(this._classes,r),this._attrs.delete("class")}this._styles=new lw(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){const e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof pe))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t){return this._styles.getStyleNames(t)}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new Be(...t);let n=this.parent;for(;n&&!n.is("documentFragment");){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){const e=[];if(t)for(const i of this.getChildren())e.push(i._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new Ct(r,s)]:(re(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Ct(r,a):a instanceof Qe?new Ct(r,a.data):a))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){const n=String(e);this._fireChange("attributes",this),t=="class"?Wd(this._classes,n):t=="style"?this._styles.setTo(n):this._attrs.set(t,n)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(const e of $t(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(const e of $t(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),typeof t!="string"?this._styles.set(t):this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(const e of $t(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function Wd(o,t){const e=t.split(/\s+/);o.clear(),e.forEach(n=>o.add(n))}pe.prototype.is=function(o,t){return t?t===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class qi extends pe{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=Kd}}function Kd(){const o=[...this.getChildren()],t=o[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const e of o)if(!e.is("uiElement"))return null;return this.childCount}qi.prototype.is=function(o,t){return t?t===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class us extends ft(qi){constructor(t,e,n,i){super(t,e,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",r=>r&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}us.prototype.is=function(o,t){return t?t===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const $d=Symbol("rootName");class Yd extends us{constructor(t,e){super(t,e),this.rootName="main"}get rootName(){return this.getCustomProperty($d)}set rootName(t){this._setCustomProperty($d,t)}set _name(t){this.name=t}}Yd.prototype.is=function(o,t){return t?t===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class eo{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new y("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new y("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this._position=H._createAt(t.startPosition):this._position=H._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(t){let e,n;do n=this.position,e=this.next();while(!e.done&&t(e.value));e.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof Ct){if(t.isAtEnd)return this._position=H._createAfter(n),this._next();i=n.data[t.offset]}else i=n.getChild(t.offset);if(i instanceof pe){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(t))return{done:!0,value:void 0};t.offset++}else t=new H(i,0);return this._position=t,this._formatReturnValue("elementStart",i,e,t,1)}if(i instanceof Ct){if(this.singleCharacters)return t=new H(i,0),this._position=t,this._next();let r,s=i.data.length;return i==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new Qe(i,0,s),t=H._createAfter(r)):(r=new Qe(i,0,i.data.length),t.offset++),this._position=t,this._formatReturnValue("text",r,e,t,s)}if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;const s=new Qe(n,t.offset,r);return t.offset+=r,this._position=t,this._formatReturnValue("text",s,e,t,r)}return t=H._createAfter(n),this._position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof Ct){if(t.isAtStart)return this._position=H._createBefore(n),this._previous();i=n.data[t.offset-1]}else i=n.getChild(t.offset-1);if(i instanceof pe)return this.shallow?(t.offset--,this._position=t,this._formatReturnValue("elementStart",i,e,t,1)):(t=new H(i,i.childCount),this._position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,e,t));if(i instanceof Ct){if(this.singleCharacters)return t=new H(i,i.data.length),this._position=t,this._previous();let r,s=i.data.length;if(i==this._boundaryStartParent){const a=this.boundaries.start.offset;r=new Qe(i,a,i.data.length-a),s=r.data.length,t=H._createBefore(r)}else r=new Qe(i,0,i.data.length),t.offset--;return this._position=t,this._formatReturnValue("text",r,e,t,s)}if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{const a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=t.offset-a}t.offset-=r;const s=new Qe(n,t.offset,r);return this._position=t,this._formatReturnValue("text",s,e,t,r)}return t=H._createBefore(n),this._position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,i,r){return e instanceof Qe&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=H._createAfter(e.textNode):(i=H._createAfter(e.textNode),this._position=i)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=H._createBefore(e.textNode):(i=H._createBefore(e.textNode),this._position=i))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:r}}}}class H extends Jn{constructor(t,e){super(),this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof us);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=H._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new eo(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return i===0?null:e[i-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const i=Zt(e,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return e[i]<n[i]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new eo(t)}clone(){return new H(this.parent,this.offset)}static _createAt(t,e){if(t instanceof H)return new this(t.parent,t.offset);{const n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new y("view-createpositionat-offset-required",n)}return new H(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new H(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new y("view-position-after-root",t,{root:t});return new H(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new H(t.textNode,t.offsetInText);if(!t.parent)throw new y("view-position-before-root",t,{root:t});return new H(t.parent,t.index)}}H.prototype.is=function(o){return o==="position"||o==="view:position"};class X extends Jn{constructor(t,e=null){super(),this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new eo({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(gs,{direction:"backward"}),e=this.end.getLastMatchingPosition(gs);return t.parent.is("$text")&&t.isAtStart&&(t=H._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=H._createAfter(e.parent)),new X(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(gs);if(t.isAfter(this.end)||t.isEqual(this.end))return new X(t,t);let e=this.end.getLastMatchingPosition(gs,{direction:"backward"});const n=t.nodeAfter,i=e.nodeBefore;return n&&n.is("$text")&&(t=new H(n,0)),i&&i.is("$text")&&(e=new H(i,i.data.length)),new X(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new X(this.start,t.start)),this.containsPosition(t.end)&&e.push(new X(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new X(e,n)}return null}getWalker(t={}){return t.boundaries=this,new eo(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new X(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new eo(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new eo(t);yield e.position;for(const n of e)yield n.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,i){return new this(new H(t,e),new H(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(H._createBefore(t),e)}}function gs(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}X.prototype.is=function(o){return o==="range"||o==="view:range"};class Ne extends it(Jn){constructor(...t){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",t.length&&this.setTo(...t)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=li(this.getRanges());if(e!=li(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let r of t.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...t){let[e,n,i]=t;if(typeof n=="object"&&(i=n,n=void 0),e===null)this._setRanges([]),this._setFakeOptions(i);else if(e instanceof Ne||e instanceof hc)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof X)this._setRanges([e],i&&i.backward),this._setFakeOptions(i);else if(e instanceof H)this._setRanges([new X(e)]),this._setFakeOptions(i);else if(e instanceof Xn){const r=!!i&&!!i.backward;let s;if(n===void 0)throw new y("view-selection-setto-required-second-parameter",this);s=n=="in"?X._createIn(e):n=="on"?X._createOn(e):new X(H._createAt(e,n)),this._setRanges([s],r),this._setFakeOptions(i)}else{if(!re(e))throw new y("view-selection-setto-not-selectable",this);this._setRanges(e,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new y("view-selection-setfocus-no-ranges",this);const n=H._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new X(n,i),!0):this._addRange(new X(i,n)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof X))throw new y("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new y("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new X(t.start,t.end))}}Ne.prototype.is=function(o){return o==="selection"||o==="view:selection"};class hc extends it(Jn){constructor(...t){super(),this._selection=new Ne,this._selection.delegate("change").to(this),t.length&&this._selection.setTo(...t)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(...t){this._selection.setTo(...t)}_setFocus(t,e){this._selection.setFocus(t,e)}}hc.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class Vo extends L{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const uc=Symbol("bubbling contexts");function gc(o){return class extends o{fire(t,...e){try{const n=t instanceof L?t:new L(this,t),i=pc(this);if(!i.size)return;if(Gi(n,"capturing",this),Uo(i,"$capture",n,...e))return n.return;const r=n.startRange||this.selection.getFirstRange(),s=r?r.getContainedElement():null,a=!!s&&!!Zd(i,s);let c=s||function(l){if(!l)return null;const d=l.start.parent,h=l.end.parent,u=d.getPath(),g=h.getPath();return u.length>g.length?d:h}(r);if(Gi(n,"atTarget",c),!a){if(Uo(i,"$text",n,...e))return n.return;Gi(n,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(Uo(i,"$root",n,...e))return n.return}else if(c.is("element")&&Uo(i,c.name,n,...e))return n.return;if(Uo(i,c,n,...e))return n.return;c=c.parent,Gi(n,"bubbling",c)}return Gi(n,"bubbling",this),Uo(i,"$document",n,...e),n.return}catch(n){y.rethrowUnexpectedError(n,this)}}_addEventListener(t,e,n){const i=$t(n.context||"$document"),r=pc(this);for(const s of i){let a=r.get(s);a||(a=new(it()),r.set(s,a)),this.listenTo(a,t,e,n)}}_removeEventListener(t,e){const n=pc(this);for(const i of n.values())this.stopListening(i,t,e)}}}{const o=gc(Object);["fire","_addEventListener","_removeEventListener"].forEach(t=>{gc[t]=o.prototype[t]})}function Gi(o,t,e){o instanceof Vo&&(o._eventPhase=t,o._currentTarget=e)}function Uo(o,t,e,...n){const i=typeof t=="string"?o.get(t):Zd(o,t);return!!i&&(i.fire(e,...n),e.stop.called)}function Zd(o,t){for(const[e,n]of o)if(typeof e=="function"&&e(t))return n;return null}function pc(o){return o[uc]||(o[uc]=new Map),o[uc]}class ps extends gc(ft()){constructor(t){super(),this._postFixers=new Set,this.selection=new hc,this.roots=new Ie({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.map(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(e=n(t),e)break;while(e)}}class no extends pe{constructor(t,e,n,i){super(t,e,n,i),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=hw}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new y("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t=!1){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function hw(){if(mc(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(mc(o)>1)return null;o=o.parent}return!o||mc(o)>1?null:this.childCount}function mc(o){return Array.from(o.getChildren()).filter(t=>!t.is("uiElement")).length}no.DEFAULT_PRIORITY=10,no.prototype.is=function(o,t){return t?t===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class fc extends pe{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=uw}_insertChild(t,e){if(e&&(e instanceof Xn||Array.from(e).length>0))throw new y("view-emptyelement-cannot-add",[this,e]);return 0}}function uw(){return null}fc.prototype.is=function(o,t){return t?t===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class ms extends pe{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=pw}_insertChild(t,e){if(e&&(e instanceof Xn||Array.from(e).length>0))throw new y("view-uielement-cannot-add",[this,e]);return 0}render(t,e){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function gw(o){o.document.on("arrowKey",(t,e)=>function(n,i,r){if(i.keyCode==lt.arrowright){const s=i.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||i.shiftKey){const c=s.focusNode,l=s.focusOffset,d=r.domPositionToView(c,l);if(d===null)return;let h=!1;const u=d.getLastMatchingPosition(g=>(g.item.is("uiElement")&&(h=!0),!(!g.item.is("uiElement")&&!g.item.is("attributeElement"))));if(h){const g=r.viewPositionToDom(u);a?s.collapse(g.parent,g.offset):s.extend(g.parent,g.offset)}}}}(0,e,o.domConverter),{priority:"low"})}function pw(){return null}ms.prototype.is=function(o,t){return t?t===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class kc extends pe{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=mw}_insertChild(t,e){if(e&&(e instanceof Xn||Array.from(e).length>0))throw new y("view-rawelement-cannot-add",[this,e]);return 0}render(t,e){}}function mw(){return null}kc.prototype.is=function(o,t){return t?t===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class oo extends it(Jn){constructor(t,e){super(),this._children=[],this._customProperties=new Map,this.document=t,e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new Ct(r,s)]:(re(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Ct(r,a):a instanceof Qe?new Ct(r,a.data):a))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}oo.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class Qd{constructor(t){this._cloneGroups=new Map,this._slotFactory=null,this.document=t}setSelection(...t){this.document.selection._setTo(...t)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new oo(this.document,t)}createText(t){return new Ct(this.document,t)}createAttributeElement(t,e,n={}){const i=new no(this.document,t,e);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(t,e,n={},i={}){let r=null;Ht(n)?i=n:r=n;const s=new qi(this.document,t,e,r);return i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}createEditableElement(t,e,n={}){const i=new us(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(t,e,n={}){const i=new fc(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(t,e,n){const i=new ms(this.document,t,e);return n&&(i.render=n),i}createRawElement(t,e,n,i={}){const r=new kc(this.document,t,e);return n&&(r.render=n),i.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),r}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){Ht(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof H?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new y("view-writer-break-non-container-element",this.document);if(!e.parent)throw new y("view-writer-break-root",this.document);if(t.isAtStart)return H._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(H._createAfter(e),n);const i=new X(t,H._createAt(e,"end")),r=new H(n,0);this.move(i,r)}return H._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new H(s,a))}const i=n.getChild(e-1),r=n.getChild(e);if(!i||!r)return t;if(i.is("$text")&&r.is("$text"))return Xd(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){const s=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new H(i,s))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new y("view-writer-merge-containers-invalid-position",this.document);const i=e.getChild(e.childCount-1),r=i instanceof Ct?H._createAt(i,"end"):H._createAt(e,"end");return this.move(X._createIn(n),H._createAt(e,"end")),this.remove(X._createOn(n)),r}insert(t,e){th(e=re(e)?[...e]:[e],this.document);const n=e.reduce((s,a)=>{const c=s[s.length-1],l=!a.is("uiElement");return c&&c.breakAttributes==l?c.nodes.push(a):s.push({breakAttributes:l,nodes:[a]}),s},[]);let i=null,r=t;for(const{nodes:s,breakAttributes:a}of n){const c=this._insertNodes(r,s,a);i||(i=c.start),r=c.end}return i?new X(i,r):new X(t)}remove(t){const e=t instanceof X?t:X._createOn(t);if(Wi(e,this.document),e.isCollapsed)return new oo(this.document);const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,s=i.offset-n.offset,a=r._removeChildren(n.offset,s);for(const l of a)this._removeFromClonedElementsGroup(l);const c=this.mergeAttributes(n);return e.start=c,e.end=c.clone(),new oo(this.document,a)}clear(t,e){Wi(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const r=i.item;let s;if(r.is("element")&&e.isSimilar(r))s=X._createOn(r);else if(!i.nextPosition.isAfter(t.start)&&r.is("$textProxy")){const a=r.getAncestors().find(c=>c.is("element")&&e.isSimilar(c));a&&(s=X._createIn(a))}s&&(s.end.isAfter(t.end)&&(s.end=t.end),s.start.isBefore(t.start)&&(s.start=t.start),this.remove(s))}}move(t,e){let n;if(e.isAfter(t.end)){const i=(e=this._breakAttributes(e,!0)).parent,r=i.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=i.childCount-r}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof no))throw new y("view-writer-wrap-invalid-attribute",this.document);if(Wi(t,this.document),t.isCollapsed){let i=t.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(i=i.getLastMatchingPosition(s=>s.item.is("uiElement"))),i=this._wrapPosition(i,e);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(t.start)&&this.setSelection(i),new X(i)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof no))throw new y("view-writer-unwrap-invalid-attribute",this.document);if(Wi(t,this.document),t.isCollapsed)return t;const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,i.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new X(a,c)}rename(t,e){const n=new qi(this.document,t,e.getAttributes());return this.insert(H._createAfter(e),n),this.move(X._createIn(e),H._createAt(n,0)),this.remove(X._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return H._createAt(t,e)}createPositionAfter(t){return H._createAfter(t)}createPositionBefore(t){return H._createBefore(t)}createRange(t,e){return new X(t,e)}createRangeOn(t){return X._createOn(t)}createRangeIn(t){return X._createIn(t)}createSelection(...t){return new Ne(...t)}createSlot(t="children"){if(!this._slotFactory)throw new y("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let i,r;if(i=n?bc(t):t.parent.is("$text")?t.parent.parent:t.parent,!i)throw new y("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(t,!0):t.parent.is("$text")?wc(t):t;const s=i._insertChild(r.offset,e);for(const d of e)this._addToClonedElementsGroup(d);const a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;const l=this.mergeAttributes(a);return new X(c,l)}_wrapChildren(t,e,n,i){let r=e;const s=[];for(;r<n;){const c=t.getChild(r),l=c.is("$text"),d=c.is("attributeElement");if(d&&this._wrapAttributeElement(i,c))s.push(new H(t,r));else if(l||!d||fw(i,c)){const h=i._clone();c._remove(),h._appendChild(c),t._insertChild(r,h),this._addToClonedElementsGroup(h),s.push(new H(t,r))}else this._wrapChildren(c,0,c.childCount,i);r++}let a=0;for(const c of s)c.offset-=a,c.offset!=e&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return X._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,i){let r=e;const s=[];for(;r<n;){const c=t.getChild(r);if(c.is("attributeElement"))if(c.isSimilar(i)){const l=c.getChildren(),d=c.childCount;c._remove(),t._insertChild(r,l),this._removeFromClonedElementsGroup(c),s.push(new H(t,r),new H(t,r+d)),r+=d,n+=d-1}else this._unwrapAttributeElement(i,c)?(s.push(new H(t,r),new H(t,r+1)),r++):(this._unwrapChildren(c,0,c.childCount,i),r++);else r++}let a=0;for(const c of s)c.offset-=a,!(c.offset==e||c.offset==n)&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return X._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=this._wrapChildren(r,n.offset,i.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new X(a,c)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return Jd(t.clone());t.parent.is("$text")&&(t=wc(t));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const i=new X(t,t.getShiftedBy(1));this.wrap(i,e);const r=new H(n.parent,n.index);n._remove();const s=r.nodeBefore,a=r.nodeAfter;return s instanceof Ct&&a instanceof Ct?Xd(s,a):Jd(r)}_wrapAttributeElement(t,e){if(!eh(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!eh(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,i=t.end;if(Wi(t,this.document),t.isCollapsed){const c=this._breakAttributes(t.start,e);return new X(c,c)}const r=this._breakAttributes(i,e),s=r.parent.childCount,a=this._breakAttributes(n,e);return r.offset+=r.parent.childCount-s,new X(a,r)}_breakAttributes(t,e=!1){const n=t.offset,i=t.parent;if(t.parent.is("emptyElement"))throw new y("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new y("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new y("view-writer-cannot-break-raw-element",this.document);if(!e&&i.is("$text")&&Ac(i.parent)||Ac(i))return t.clone();if(i.is("$text"))return this._breakAttributes(wc(t),e);if(n==i.childCount){const r=new H(i.parent,i.index+1);return this._breakAttributes(r,e)}if(n===0){const r=new H(i.parent,i.index);return this._breakAttributes(r,e)}{const r=i.index+1,s=i._clone();i.parent._insertChild(r,s),this._addToClonedElementsGroup(s);const a=i.childCount-n,c=i._removeChildren(n,a);s._appendChild(c);const l=new H(i.parent,r);return this._breakAttributes(l,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const i of t.getChildren())this._addToClonedElementsGroup(i);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const i of t.getChildren())this._removeFromClonedElementsGroup(i);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function bc(o){let t=o.parent;for(;!Ac(t);){if(!t)return;t=t.parent}return t}function fw(o,t){return o.priority<t.priority||!(o.priority>t.priority)&&o.getIdentity()<t.getIdentity()}function Jd(o){const t=o.nodeBefore;if(t&&t.is("$text"))return new H(t,t.data.length);const e=o.nodeAfter;return e&&e.is("$text")?new H(e,0):o}function wc(o){if(o.offset==o.parent.data.length)return new H(o.parent.parent,o.parent.index+1);if(o.offset===0)return new H(o.parent.parent,o.parent.index);const t=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new Ct(o.root.document,t)),new H(o.parent.parent,o.parent.index+1)}function Xd(o,t){const e=o.data.length;return o._data+=t.data,t._remove(),new H(o,e)}const kw=[Ct,no,qi,fc,kc,ms];function th(o,t){for(const e of o){if(!kw.some(n=>e instanceof n))throw new y("view-writer-insert-invalid-node-type",t);e.is("$text")||th(e.getChildren(),t)}}function Ac(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function Wi(o,t){const e=bc(o.start),n=bc(o.end);if(!e||!n||e!==n)throw new y("view-writer-invalid-range-container",t)}function eh(o,t){return o.id===null&&t.id===null}const nh=o=>o.createTextNode(" "),oh=o=>{const t=o.createElement("span");return t.dataset.ckeFiller="true",t.innerText=" ",t},ih=o=>{const t=o.createElement("br");return t.dataset.ckeFiller="true",t},Pe=7,Ki="⁠".repeat(Pe);function me(o){return typeof o=="string"?o.substr(0,Pe)===Ki:qt(o)&&o.data.substr(0,Pe)===Ki}function $i(o){return o.data.length==Pe&&me(o)}function rh(o){const t=typeof o=="string"?o:o.data;return me(o)?t.slice(Pe):t}function bw(o,t){if(t.keyCode==lt.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){const n=e.getRangeAt(0).startContainer,i=e.getRangeAt(0).startOffset;me(n)&&i<=Pe&&e.collapse(n,0)}}}var sh=U(9315),ww={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(sh.Z,ww),sh.Z.locals;class Aw extends ft(){constructor(t,e){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=t,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),C.isBlink&&!C.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new y("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){if(this.isComposing&&!C.isAndroid)return;let t=null;const e=!(C.isBlink&&!C.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t&&t.parent.is("$text")&&(t=H._createBefore(t.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){const n=this.domConverter.viewPositionToDom(t),i=n.parent.ownerDocument;me(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=ah(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.childNodes),i=Array.from(this.domConverter.viewChildrenToDom(t,{withChildren:!1})),r=this._diffNodeLists(n,i),s=this._findUpdateActions(r,n,i,_w);if(s.indexOf("update")!==-1){const a={equal:0,insert:0,delete:0};for(const c of s)if(c==="update"){const l=a.equal+a.insert,d=a.equal+a.delete,h=t.getChild(l);!h||h.is("uiElement")||h.is("rawElement")||this._updateElementMappings(h,n[d]),$l(i[l]),a.equal++}else a[c]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("$text")?H._createBefore(t.parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&qt(e.parent)&&me(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!me(t))throw new y("view-renderer-filler-was-lost",this);$i(t)?t.remove():t.data=t.data.substr(Pe),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;const a=s.findAncestor(c=>c.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(e)||n===e.getFillerOffset())return!1;const i=t.nodeBefore,r=t.nodeAfter;return!(i instanceof Ct||r instanceof Ct)&&(!C.isAndroid||!i&&!r)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t);let i=this.domConverter.viewToDom(t).data;const r=e.inlineFillerPosition;r&&r.parent==t.parent&&r.offset==t.index&&(i=Ki+i),ch(n,i)}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(r=>r.name),i=t.getAttributeKeys();for(const r of i)this.domConverter.setDomElementAttribute(e,r,t.getAttribute(r),t);for(const r of n)t.hasAttribute(r)||this.domConverter.removeDomElementAttribute(e,r)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;if(C.isAndroid){let h=null;for(const u of Array.from(n.childNodes)){if(h&&qt(h)&&qt(u)){n.normalize();break}h=u}}const i=e.inlineFillerPosition,r=n.childNodes,s=Array.from(this.domConverter.viewChildrenToDom(t,{bind:!0}));i&&i.parent===t&&ah(n.ownerDocument,s,i.offset);const a=this._diffNodeLists(r,s),c=this._findUpdateActions(a,r,s,Cw);let l=0;const d=new Set;for(const h of c)h==="delete"?(d.add(r[l]),$l(r[l])):h!=="equal"&&h!=="update"||l++;l=0;for(const h of c)h==="insert"?(ql(n,l,s[l]),l++):h==="update"?(ch(r[l],s[l].data),l++):h==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[l])),l++);for(const h of d)h.parentNode||this.domConverter.unbindDomElement(h)}_diffNodeLists(t,e){return t=function(n,i){const r=Array.from(n);return r.length==0||!i||r[r.length-1]==i&&r.pop(),r}(t,this._fakeSelectionContainer),B(t,e,vw.bind(null,this.domConverter))}_findUpdateActions(t,e,n,i){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let r=[],s=[],a=[];const c={equal:0,insert:0,delete:0};for(const l of t)l==="insert"?a.push(n[c.equal+c.insert]):l==="delete"?s.push(e[c.equal+c.delete]):(r=r.concat(B(s,a,i).map(d=>d==="equal"?"update":d)),r.push("equal"),s=[],a=[]),c[l]++;return r.concat(B(s,a,i).map(l=>l==="equal"?"update":l))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(C.isBlink&&!C.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(t)):this.isComposing&&C.isAndroid||this._updateDomSelection(t))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){const a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent=" ",a}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=e.getSelection(),r=e.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);e.setBaseAndExtent(n.parent,n.offset,i.parent,i.offset),C.isGecko&&function(r,s){const a=r.parent;if(a.nodeType!=Node.ELEMENT_NODE||r.offset!=a.childNodes.length-1)return;const c=a.childNodes[r.offset];c&&c.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(i,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const t of this.domDocuments){const e=t.getSelection();if(e.rangeCount){const n=t.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&e.removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function ah(o,t,e){const n=t instanceof Array?t:t.childNodes,i=n[e];if(qt(i))return i.data=Ki+i.data,i;{const r=o.createTextNode(Ki);return Array.isArray(t)?n.splice(e,0,r):ql(t,e,r),r}}function _w(o,t){return Nn(o)&&Nn(t)&&!qt(o)&&!qt(t)&&!Vi(o)&&!Vi(t)&&o.tagName.toLowerCase()===t.tagName.toLowerCase()}function Cw(o,t){return Nn(o)&&Nn(t)&&qt(o)&&qt(t)}function vw(o,t,e){return t===e||(qt(t)&&qt(e)?t.data===e.data:!(!o.isBlockFiller(t)||!o.isBlockFiller(e)))}function ch(o,t){const e=o.data;if(e==t)return;const n=A(e,t);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}const yw=ih(Z.document),xw=nh(Z.document),Ew=oh(Z.document),fs="data-ck-unsafe-attribute-",lh="data-ck-unsafe-element";class ks{constructor(t,{blockFillerMode:e,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Be,this._inlineObjectElementMatcher=new Be,this.document=t,this.renderingMode=n,this.blockFillerMode=e||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Z.document:Z.document.implementation.createHTMLDocument("")}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new Ne(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const n of Array.from(t.children))this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);const n=new DOMParser().parseFromString(e,"text/html"),i=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)i.appendChild(r[0]);const s=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),a=[];let c;for(;c=s.nextNode();)a.push(c);for(const l of a){for(const h of l.getAttributeNames())this.setDomElementAttribute(l,h,l.getAttribute(h));const d=l.tagName.toLowerCase();this._shouldRenameElement(d)&&(uh(d),l.replaceWith(this._createReplacementDomElement(d,l)))}for(;t.firstChild;)t.firstChild.remove();t.append(i)}viewToDom(t,e={}){if(t.is("$text")){const n=this._processDataFromViewText(t);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let n;if(t.is("documentFragment"))n=this._domDocument.createDocumentFragment(),e.bind&&this.bindDocumentFragments(n,t);else{if(t.is("uiElement"))return n=t.name==="$comment"?this._domDocument.createComment(t.getCustomProperty("$rawContent")):t.render(this._domDocument,this),e.bind&&this.bindElements(n,t),n;this._shouldRenameElement(t.name)?(uh(t.name),n=this._createReplacementDomElement(t.name)):n=t.hasAttribute("xmlns")?this._domDocument.createElementNS(t.getAttribute("xmlns"),t.name):this._domDocument.createElement(t.name),t.is("rawElement")&&t.render(n,this),e.bind&&this.bindElements(n,t);for(const i of t.getAttributeKeys())this.setDomElementAttribute(n,i,t.getAttribute(i),t)}if(e.withChildren!==!1)for(const i of this.viewChildrenToDom(t,e))n.appendChild(i);return n}}setDomElementAttribute(t,e,n,i){const r=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(e);r||G("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),function(s){try{Z.document.createAttribute(s)}catch{return!1}return!0}(e)?(t.hasAttribute(e)&&!r?t.removeAttribute(e):t.hasAttribute(fs+e)&&r&&t.removeAttribute(fs+e),t.setAttribute(r?e:fs+e,n)):G("domconverter-invalid-attribute-detected",{domElement:t,key:e,value:n})}removeDomElementAttribute(t,e){e!=lh&&(t.removeAttribute(e),t.removeAttribute(fs+e))}*viewChildrenToDom(t,e={}){const n=t.getFillerOffset&&t.getFillerOffset();let i=0;for(const r of t.getChildren()){n===i&&(yield this._getBlockFiller());const s=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!Gt(r.getAttributes());s&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,e):(s&&G("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,e)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),i=this._domDocument.createRange();return i.setStart(e.parent,e.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(t){const e=t.parent;if(e.is("$text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let i=t.offset;return me(n)&&(i+=Pe),{parent:n,offset:i}}{let n,i,r;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;r=n.childNodes[0]}else{const s=t.nodeBefore;if(i=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(s),!i)return null;n=i.parentNode,r=i.nextSibling}return qt(r)&&me(r)?{parent:r,offset:Pe}:{parent:n,offset:i?os(i)+1:0}}}domToView(t,e={}){const n=[],i=this._domToView(t,e,n),r=i.next().value;return r?(i.next(),this._processDomInlineNodes(null,n,e),r.is("$text")&&r.data.length==0?null:r):null}*domChildrenToView(t,e={},n=[]){for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i],s=this._domToView(r,e,n),a=s.next().value;a!==null&&(this._isBlockViewElement(a)&&this._processDomInlineNodes(t,n,e),yield a,s.next())}this._processDomInlineNodes(t,n,e)}domSelectionToView(t){if(function(i){if(!C.isGecko||!i.rangeCount)return!1;const r=i.getRangeAt(0).startContainer;try{Object.prototype.toString.call(r)}catch{return!0}return!1}(t))return new Ne([]);if(t.rangeCount===1){let i=t.getRangeAt(0).startContainer;qt(i)&&(i=i.parentNode);const r=this.fakeSelectionToView(i);if(r)return r}const e=this.isDomSelectionBackward(t),n=[];for(let i=0;i<t.rangeCount;i++){const r=t.getRangeAt(i),s=this.domRangeToView(r);s&&n.push(s)}return new Ne(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new X(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,os(t));const n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return H._createBefore(n);if(qt(t)){if($i(t))return this.domPositionToView(t.parentNode,os(t));const i=this.findCorrespondingViewText(t);let r=e;return i?(me(t)&&(r-=Pe,r=r<0?0:r),new H(i,r)):null}if(e===0){const i=this.mapDomToView(t);if(i)return new H(i,0)}else{const i=t.childNodes[e-1];if(qt(i)&&$i(i)||i&&this.isBlockFiller(i))return this.domPositionToView(i.parentNode,os(i));const r=qt(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new H(r.parent,r.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if($i(t))return null;const e=this.getHostViewElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const r=i.nextSibling;return r instanceof Ct?r:null}}else{const i=this.mapDomToView(t.parentNode);if(i){const r=i.getChild(0);return r instanceof Ct?r:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:n,scrollY:i}=Z.window,r=[];dh(e,s=>{const{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),e.focus(),dh(e,s=>{const[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),Z.window.scrollTo(n,i)}}_clearDomSelection(){const t=this.mapViewToDom(this.document.selection.editableElement);if(!t)return;const e=t.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(e);n&&n.rangeCount>0&&e.removeAllRanges()}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(yw):!(t.tagName!=="BR"||!hh(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(Ew)||function(e,n){return e.isEqualNode(xw)&&hh(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=this._domDocument.createRange();try{e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset)}catch{return!1}const n=e.collapsed;return e.detach(),n}getHostViewElement(t){const e=function(n){const i=[];let r=n;for(;r&&r.nodeType!=Node.DOCUMENT_NODE;)i.unshift(r),r=r.parentNode;return i}(t);for(e.pop();e.length;){const n=e.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}registerInlineObjectMatcher(t){this._inlineObjectElementMatcher.add(t)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return nh(this._domDocument);case"markedNbsp":return oh(this._domDocument);case"br":return ih(this._domDocument)}}_isDomSelectionPositionCorrect(t,e){if(qt(t)&&me(t)&&e<Pe||this.isElement(t)&&me(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(t,e,n){if(this.isBlockFiller(t))return null;const i=this.getHostViewElement(t);if(i)return i;if(Vi(t)&&e.skipComments)return null;if(qt(t)){if($i(t))return null;{const r=t.data;if(r==="")return null;const s=new Ct(this.document,r);return n.push(s),s}}{let r=this.mapDomToView(t);if(r)return this._isInlineObjectElement(r)&&n.push(r),r;if(this.isDocumentFragment(t))r=new oo(this.document),e.bind&&this.bindDocumentFragments(t,r);else{r=this._createViewElement(t,e),e.bind&&this.bindElements(t,r);const a=t.attributes;if(a)for(let c=a.length,l=0;l<c;l++)r._setAttribute(a[l].name,a[l].value);if(this._isViewElementWithRawContent(r,e))return r._setCustomProperty("$rawContent",t.innerHTML),this._isBlockViewElement(r)||n.push(r),r;if(Vi(t))return r._setCustomProperty("$rawContent",t.data),r}yield r;const s=[];if(e.withChildren!==!1)for(const a of this.domChildrenToView(t,e,s))r._appendChild(a);if(this._isInlineObjectElement(r))n.push(r);else for(const a of s)n.push(a)}}_processDomInlineNodes(t,e,n){if(!e.length||t&&!this.isDocumentFragment(t)&&!this._isBlockDomElement(t))return;let i=!1;for(let r=0;r<e.length;r++){const s=e[r];if(!s.is("$text")){i=!1;continue}let a,c=!1;if(Dw(s,this.preElements))a=rh(s.data);else{a=s.data.replace(/[ \n\t\r]{1,}/g," "),c=/[^\S\u00A0]/.test(a.charAt(a.length-1));const l=r>0?e[r-1]:null,d=r+1<e.length?e[r+1]:null,h=!l||l.is("element")&&l.name=="br"||i,u=!d&&!me(s.data);n.withChildren!==!1&&(h&&(a=a.replace(/^ /,"")),u&&(a=a.replace(/ $/,""))),a=rh(a),a=a.replace(/ \u00A0/g,"  ");const g=d&&d.is("element")&&d.name!="br",m=d&&d.is("$text")&&d.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(a)||!d||g||m)&&(a=a.replace(/\u00A0$/," ")),(h||l&&l.is("element")&&l.name!="br")&&(a=a.replace(/^\u00A0/," "))}a.length==0&&s.parent?(s._remove(),e.splice(r,1),r--):(s._data=a,i=c)}e.length=0}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){const n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(e.charAt(e.length-1)==" "){const n=this._getTouchingInlineViewNode(t,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!i||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_getTouchingInlineViewNode(t,e){const n=new eo({startPosition:e?H._createAfter(t):H._createBefore(t),direction:e?"forward":"backward"});for(const i of n){if(i.item.is("element","br"))return null;if(this._isInlineObjectElement(i.item))return i.item;if(i.item.is("containerElement"))return null;if(i.item.is("$textProxy"))return i.item}return null}_isBlockDomElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isBlockViewElement(t){return t.is("element")&&this.blockElements.includes(t.name)}_isInlineObjectElement(t){return!!t.is("element")&&(t.name=="br"||this.inlineObjectElements.includes(t.name)||!!this._inlineObjectElementMatcher.match(t))}_createViewElement(t,e){if(Vi(t))return new ms(this.document,"$comment");const n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new pe(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&t.is("element")&&!!this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){const e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e){const n=this._domDocument.createElement("span");if(n.setAttribute(lh,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(const i of e.getAttributeNames())n.setAttribute(i,e.getAttribute(i))}return n}}function Dw(o,t){return o.getAncestors().some(e=>e.is("element")&&t.includes(e.name))}function dh(o,t){let e=o;for(;e;)t(e),e=e.parentElement}function hh(o,t){const e=o.parentNode;return!!e&&!!e.tagName&&t.includes(e.tagName.toLowerCase())}function uh(o){o==="script"&&G("domconverter-unsafe-script-element-detected"),o==="style"&&G("domconverter-unsafe-style-element-detected")}class Je extends ve(){constructor(t){super(),this._isEnabled=!1,this.view=t,this.document=t.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const gh=qd(function(o,t){qe(t,Tn(t),o)});class Ho{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,gh(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class zn extends Je{constructor(){super(...arguments),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}stopObserving(t){this.stopListening(t)}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Ho(this.view,e,n))}}class Sw extends zn{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(t){const e={keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return Ro(this)}};this.fire(t.type,t,e)}}const _c=function(){return se.Date.now()};var Iw=/\s/;const Tw=function(o){for(var t=o.length;t--&&Iw.test(o.charAt(t)););return t};var Mw=/^\s+/;const Bw=function(o){return o&&o.slice(0,Tw(o)+1).replace(Mw,"")};var Nw=/^[-+]0x[0-9a-f]+$/i,Pw=/^0b[01]+$/i,zw=/^0o[0-7]+$/i,Ow=parseInt;const ph=function(o){if(typeof o=="number")return o;if(ds(o))return NaN;if(Dt(o)){var t=typeof o.valueOf=="function"?o.valueOf():o;o=Dt(t)?t+"":t}if(typeof o!="string")return o===0?o:+o;o=Bw(o);var e=Pw.test(o);return e||zw.test(o)?Ow(o.slice(2),e?2:8):Nw.test(o)?NaN:+o};var Lw=Math.max,jw=Math.min;const Yi=function(o,t,e){var n,i,r,s,a,c,l=0,d=!1,h=!1,u=!0;if(typeof o!="function")throw new TypeError("Expected a function");function g(T){var O=n,W=i;return n=i=void 0,l=T,s=o.apply(W,O)}function m(T){var O=T-c;return c===void 0||O>=t||O<0||h&&T-l>=r}function k(){var T=_c();if(m(T))return _(T);a=setTimeout(k,function(O){var W=t-(O-c);return h?jw(W,r-(O-l)):W}(T))}function _(T){return a=void 0,u&&n?g(T):(n=i=void 0,s)}function v(){var T=_c(),O=m(T);if(n=arguments,i=this,c=T,O){if(a===void 0)return function(W){return l=W,a=setTimeout(k,t),d?g(W):s}(c);if(h)return clearTimeout(a),a=setTimeout(k,t),g(c)}return a===void 0&&(a=setTimeout(k,t)),s}return t=ph(t)||0,Dt(e)&&(d=!!e.leading,r=(h="maxWait"in e)?Lw(ph(e.maxWait)||0,t):r,u="trailing"in e?!!e.trailing:u),v.cancel=function(){a!==void 0&&clearTimeout(a),l=0,n=c=i=a=void 0},v.flush=function(){return a===void 0?s:_(_c())},v};class Rw extends Je{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=Yi(e=>{this.document.fire("selectionChangeDone",e)},200)}observe(){const t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new Ne(e.getRanges(),{backward:e.isBackward,fake:!1});t!=lt.arrowleft&&t!=lt.arrowup||n.setTo(n.getFirstPosition()),t!=lt.arrowright&&t!=lt.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const Fw=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},Vw=function(o){return this.__data__.has(o)};function bs(o){var t=-1,e=o==null?0:o.length;for(this.__data__=new Do;++t<e;)this.add(o[t])}bs.prototype.add=bs.prototype.push=Fw,bs.prototype.has=Vw;const Uw=bs,Hw=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n;)if(t(o[e],e,o))return!0;return!1},qw=function(o,t){return o.has(t)},mh=function(o,t,e,n,i,r){var s=1&e,a=o.length,c=t.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(o),d=r.get(t);if(l&&d)return l==t&&d==o;var h=-1,u=!0,g=2&e?new Uw:void 0;for(r.set(o,t),r.set(t,o);++h<a;){var m=o[h],k=t[h];if(n)var _=s?n(k,m,h,t,o,r):n(m,k,h,o,t,r);if(_!==void 0){if(_)continue;u=!1;break}if(g){if(!Hw(t,function(v,T){if(!qw(g,T)&&(m===v||i(m,v,e,n,r)))return g.push(T)})){u=!1;break}}else if(m!==k&&!i(m,k,e,n,r)){u=!1;break}}return r.delete(o),r.delete(t),u},Gw=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n,i){e[++t]=[i,n]}),e},Ww=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n){e[++t]=n}),e};var fh=Ae?Ae.prototype:void 0,Cc=fh?fh.valueOf:void 0;const Kw=function(o,t,e,n,i,r,s){switch(e){case"[object DataView]":if(o.byteLength!=t.byteLength||o.byteOffset!=t.byteOffset)return!1;o=o.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=t.byteLength||!r(new Yn(o),new Yn(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Wn(+o,+t);case"[object Error]":return o.name==t.name&&o.message==t.message;case"[object RegExp]":case"[object String]":return o==t+"";case"[object Map]":var a=Gw;case"[object Set]":var c=1&n;if(a||(a=Ww),o.size!=t.size&&!c)return!1;var l=s.get(o);if(l)return l==t;n|=2,s.set(o,t);var d=mh(a(o),a(t),n,i,r,s);return s.delete(o),d;case"[object Symbol]":if(Cc)return Cc.call(o)==Cc.call(t)}return!1};var $w=Object.prototype.hasOwnProperty;const Yw=function(o,t,e,n,i,r){var s=1&e,a=zi(o),c=a.length;if(c!=zi(t).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in t:$w.call(t,d)))return!1}var h=r.get(o),u=r.get(t);if(h&&u)return h==t&&u==o;var g=!0;r.set(o,t),r.set(t,o);for(var m=s;++l<c;){var k=o[d=a[l]],_=t[d];if(n)var v=s?n(_,k,d,t,o,r):n(k,_,d,o,t,r);if(!(v===void 0?k===_||i(k,_,e,n,r):v)){g=!1;break}m||(m=d=="constructor")}if(g&&!m){var T=o.constructor,O=t.constructor;T==O||!("constructor"in o)||!("constructor"in t)||typeof T=="function"&&T instanceof T&&typeof O=="function"&&O instanceof O||(g=!1)}return r.delete(o),r.delete(t),g};var kh="[object Arguments]",bh="[object Array]",ws="[object Object]",wh=Object.prototype.hasOwnProperty;const Zw=function(o,t,e,n,i,r){var s=Qt(o),a=Qt(t),c=s?bh:Se(o),l=a?bh:Se(t),d=(c=c==kh?ws:c)==ws,h=(l=l==kh?ws:l)==ws,u=c==l;if(u&&In(o)){if(!In(t))return!1;s=!0,d=!1}if(u&&!d)return r||(r=new Sn),s||$n(o)?mh(o,t,e,n,i,r):Kw(o,t,c,e,n,i,r);if(!(1&e)){var g=d&&wh.call(o,"__wrapped__"),m=h&&wh.call(t,"__wrapped__");if(g||m){var k=g?o.value():o,_=m?t.value():t;return r||(r=new Sn),i(k,_,e,n,r)}}return!!u&&(r||(r=new Sn),Yw(o,t,e,n,i,r))},Ah=function o(t,e,n,i,r){return t===e||(t==null||e==null||!Ut(t)&&!Ut(e)?t!=t&&e!=e:Zw(t,e,n,i,o,r))},Qw=function(o,t,e){var n=(e=typeof e=="function"?e:void 0)?e(o,t):void 0;return n===void 0?Ah(o,t,void 0,e):!!n};class _h extends Je{constructor(t){super(t),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.add(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}stopObserving(t){if(this._domElements.delete(t),this.isEnabled){this._mutationObserver.disconnect();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;const e=this.domConverter,n=new Set,i=new Set;for(const s of t){const a=e.mapDomToView(s.target);a&&(a.is("uiElement")||a.is("rawElement")||s.type!=="childList"||this._isBogusBrMutation(s)||i.add(a))}for(const s of t){const a=e.mapDomToView(s.target);if((!a||!a.is("uiElement")&&!a.is("rawElement"))&&s.type==="characterData"){const c=e.findCorrespondingViewText(s.target);c&&!i.has(c.parent)?n.add(c):!c&&me(s.target)&&i.add(e.mapDomToView(s.target.parentNode))}}let r=!1;for(const s of n)r=!0,this.renderer.markToSync("text",s);for(const s of i){const a=e.mapViewToDom(s),c=Array.from(s.getChildren()),l=Array.from(e.domChildrenToView(a,{withChildren:!1}));Qw(c,l,Jw)||(r=!0,this.renderer.markToSync("children",s))}r&&this.view.forceRender()}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}function Jw(o,t){if(!Array.isArray(o))return o===t||!(!o.is("$text")||!t.is("$text"))&&o.data===t.data}class As extends zn{constructor(t){super(t),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),t.change(()=>{})},50)}),e.on("blur",(n,i)=>{const r=e.selection.editableElement;r!==null&&r!==i.target||(e.isFocused=!1,this._isFocusChanging=!1,t.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class Xw extends Je{constructor(t){super(t),this.mutationObserver=t.getObserver(_h),this.focusObserver=t.getObserver(As),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Yi(e=>{this.document.fire("selectionChangeDone",e)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Yi(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,e),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"selectionchange",(i,r)=>{this.document.isComposing&&!C.isAndroid||(this._handleSelectionChange(r,e),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(e))}stopObserving(t){this.stopListening(t)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(t,e){if(!this.isEnabled)return;const n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(i)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(i))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class tA extends zn{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0},{priority:"low"}),e.on("compositionend",()=>{e.isComposing=!1},{priority:"low"})}onDomEvent(t){this.fire(t.type,t,{data:t.data})}}class Ch{constructor(t,e={}){this._files=e.cacheFiles?vh(t):null,this._native=t}get files(){return this._files||(this._files=vh(this._native)),this._files}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}setDragImage(t,e,n){this._native.setDragImage(t,e,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function vh(o){const t=Array.from(o.files||[]),e=Array.from(o.items||[]);return t.length?t:e.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class eA extends zn{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(t){const e=t.getTargetRanges(),n=this.view,i=n.document;let r=null,s=null,a=[];if(t.dataTransfer&&(r=new Ch(t.dataTransfer)),t.data!==null?s=t.data:r&&(s=r.getData("text/plain")),i.selection.isFake)a=Array.from(i.selection.getRanges());else if(e.length)a=e.map(c=>{const l=n.domConverter.domPositionToView(c.startContainer,c.startOffset),d=n.domConverter.domPositionToView(c.endContainer,c.endOffset);return l?n.createRange(l,d):d?n.createRange(d):void 0}).filter(c=>!!c);else if(C.isAndroid){const c=t.target.ownerDocument.defaultView.getSelection();a=Array.from(n.domConverter.domSelectionToView(c).getRanges())}if(C.isAndroid&&t.inputType=="insertCompositionText"&&s&&s.endsWith(`
`))this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:[n.createRange(a[0].end)]});else if(t.inputType=="insertText"&&s&&s.includes(`
`)){const c=s.split(/\n{1,2}/g);let l=a;for(let d=0;d<c.length;d++){const h=c[d];h!=""&&(this.fire(t.type,t,{data:h,dataTransfer:r,targetRanges:l,inputType:t.inputType,isComposing:t.isComposing}),l=[i.selection.getFirstRange()]),d+1<c.length&&(this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:l}),l=[i.selection.getFirstRange()])}}else this.fire(t.type,t,{data:s,dataTransfer:r,targetRanges:a,inputType:t.inputType,isComposing:t.isComposing})}}class nA extends Je{constructor(t){super(t),this.document.on("keydown",(e,n)=>{if(this.isEnabled&&((i=n.keyCode)==lt.arrowright||i==lt.arrowleft||i==lt.arrowup||i==lt.arrowdown)){const r=new Vo(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(r,n),r.stop.called&&e.stop()}var i})}observe(){}stopObserving(){}}class oA extends Je{constructor(t){super(t);const e=this.document;e.on("keydown",(n,i)=>{if(!this.isEnabled||i.keyCode!=lt.tab||i.ctrlKey)return;const r=new Vo(e,"tab",e.selection.getFirstRange());e.fire(r,i),r.stop.called&&n.stop()})}observe(){}stopObserving(){}}const On=function(o){return ae(o,5)};class iA extends ft(){constructor(t){super(),this.domRoots=new Map,this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this.document=new ps(t),this.domConverter=new ks(this.document),this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new Aw(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting","isComposing").to(this.document,"isFocused","isSelecting","isComposing"),this._writer=new Qd(this.document),this.addObserver(_h),this.addObserver(As),this.addObserver(Xw),this.addObserver(Sw),this.addObserver(Rw),this.addObserver(tA),this.addObserver(nA),this.addObserver(eA),this.addObserver(oA),this.document.on("arrowKey",bw,{priority:"low"}),gw(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0}),C.isiOS&&this.listenTo(this.document,"blur",(e,n)=>{this.domConverter.mapDomToView(n.domEvent.relatedTarget)||this.domConverter._clearDomSelection()})}attachDomRoot(t,e="main"){const n=this.document.getRoot(e);n._name=t.tagName.toLowerCase();const i={};for(const{name:s,value:a}of Array.from(t.attributes))i[s]=a,s==="class"?this._writer.addClass(a.split(" "),n):this._writer.setAttribute(s,a,n);this._initialDomRootAttributes.set(t,i);const r=()=>{this._writer.setAttribute("contenteditable",(!n.isReadOnly).toString(),n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};r(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(s,a)=>this._renderer.markToSync("children",a)),n.on("change:attributes",(s,a)=>this._renderer.markToSync("attributes",a)),n.on("change:text",(s,a)=>this._renderer.markToSync("text",a)),n.on("change:isReadOnly",()=>this.change(r)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const s of this._observers.values())s.observe(t,e)}detachDomRoot(t){const e=this.domRoots.get(t);Array.from(e.attributes).forEach(({name:i})=>e.removeAttribute(i));const n=this._initialDomRootAttributes.get(e);for(const i in n)e.setAttribute(i,n[i]);this.domRoots.delete(t),this.domConverter.unbindDomElement(e);for(const i of this._observers.values())i.stopObserving(e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(const[n,i]of this.domRoots)e.observe(i,n);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(const t of this._observers.values())t.disable()}enableObservers(){for(const t of this._observers.values())t.enable()}scrollToTheSelection({alignToTop:t,forceScroll:e,viewportOffset:n=20,ancestorOffset:i=20}={}){const r=this.document.selection.getFirstRange();if(!r)return;const s=On({alignToTop:t,forceScroll:e,viewportOffset:n,ancestorOffset:i});typeof n=="number"&&(n={top:n,bottom:n,left:n,right:n});const a={target:this.domConverter.viewRangeToDom(r),viewportOffset:n,ancestorOffset:i,alignToTop:t,forceScroll:e};this.fire("scrollToTheSelection",a,s),function({target:c,viewportOffset:l=0,ancestorOffset:d=0,alignToTop:h,forceScroll:u}){const g=Ga(c);let m=g,k=null;for(l=function(_){return typeof _=="number"?{top:_,bottom:_,left:_,right:_}:_}(l);m;){let _;_=Jk(m==g?c:k),Qk({parent:_,getRect:()=>Xl(c,m),alignToTop:h,ancestorOffset:d,forceScroll:u});const v=Xl(c,m);if(Zk({window:m,rect:v,viewportOffset:l,alignToTop:h,forceScroll:u}),m.parent!=m){if(k=m.frameElement,m=m.parent,!k)return}else m=null}}(a)}focus(){if(!this.document.isFocused){const t=this.document.selection.editableElement;t&&(this.domConverter.focus(t),this.forceRender())}}change(t){if(this.isRenderingInProgress||this._postFixersInProgress)throw new y("cannot-change-view-tree",this);try{if(this._ongoingChange)return t(this._writer);this._ongoingChange=!0;const e=t(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),e}catch(e){y.rethrowUnexpectedError(e,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.getObserver(As).flush(),this.change(()=>{})}destroy(){for(const t of this._observers.values())t.destroy();this.document.destroy(),this.stopListening()}createPositionAt(t,e){return H._createAt(t,e)}createPositionAfter(t){return H._createAfter(t)}createPositionBefore(t){return H._createBefore(t)}createRange(t,e){return new X(t,e)}createRangeOn(t){return X._createOn(t)}createRangeIn(t){return X._createIn(t)}createSelection(...t){return new Ne(...t)}_disableRendering(t){this._renderingDisabled=t,t==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}class Ln{is(){throw new Error("is() method is abstract")}}class io extends Ln{constructor(t){super(),this.parent=null,this._attrs=Ze(t)}get document(){return null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))===null)throw new y("model-node-not-found-in-parent",this);return t}get startOffset(){let t;if(!this.parent)return null;if((t=this.parent.getChildStartOffset(this))===null)throw new y("model-node-not-found-in-parent",this);return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.parent!==null&&this.root.isAttached()}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=Zt(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((e,n)=>(e[n[0]]=n[1],e),{})),t}_clone(t){return new this.constructor(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=Ze(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}}io.prototype.is=function(o){return o==="node"||o==="model:node"};class Zi{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){const e=this._nodes.indexOf(t);return e==-1?null:e}getNodeStartOffset(t){const e=this.getNodeIndex(t);return e===null?null:this._nodes.slice(0,e).reduce((n,i)=>n+i.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;const e=this._nodes[t];if(!e)throw new y("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(const n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new y("model-nodelist-offset-out-of-bounds",this,{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(const n of e)if(!(n instanceof io))throw new y("model-nodelist-insertnodes-not-node",this);this._nodes=function(n,i,r,s){if(Math.max(i.length,n.length)>1e4)return n.slice(0,r).concat(i).concat(n.slice(r+s,n.length));{const a=Array.from(n);return a.splice(r,s,...i),a}}(this._nodes,Array.from(e),t,0)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class vt extends io{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}toJSON(){const t=super.toJSON();return t.data=this.data,t}_clone(){return new vt(this.data,this.getAttributes())}static fromJSON(t){return new vt(t.data,t.attributes)}}vt.prototype.is=function(o){return o==="$text"||o==="model:$text"||o==="text"||o==="model:text"||o==="node"||o==="model:node"};class ze extends Ln{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.offsetSize)throw new y("model-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.offsetSize)throw new y("model-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}getPath(){const t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}ze.prototype.is=function(o){return o==="$textProxy"||o==="model:$textProxy"||o==="textProxy"||o==="model:textProxy"};class wt extends io{constructor(t,e,n){super(e),this._children=new Zi,this.name=t,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}findAncestor(t,e={}){let n=e.includeSelf?this:this.parent;for(;n;){if(n.name===t)return n;n=n.parent}return null}toJSON(){const t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(const e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){const e=t?Array.from(this._children).map(n=>n._clone(!0)):void 0;return new wt(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(i){return typeof i=="string"?[new vt(i)]:(re(i)||(i=[i]),Array.from(i).map(r=>typeof r=="string"?new vt(r):r instanceof ze?new vt(r.data,r.getAttributes()):r))}(e);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const i of n)i.parent=null;return n}static fromJSON(t){let e;if(t.children){e=[];for(const n of t.children)n.name?e.push(wt.fromJSON(n)):e.push(vt.fromJSON(n))}return new wt(t.name,t.attributes,e)}}wt.prototype.is=function(o,t){return t?t===this.name&&(o==="element"||o==="model:element"):o==="element"||o==="model:element"||o==="node"||o==="model:node"};class Xe{constructor(t){if(!t||!t.boundaries&&!t.startPosition)throw new y("model-tree-walker-no-start-position",null);const e=t.direction||"forward";if(e!="forward"&&e!="backward")throw new y("model-tree-walker-unknown-direction",t,{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this._position=t.startPosition.clone():this._position=F._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}get position(){return this._position}skip(t){let e,n,i,r;do i=this.position,r=this._visitedParent,{done:e,value:n}=this.next();while(!e&&t(n));e||(this._position=i,this._visitedParent=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===n.maxOffset)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};const i=Qi(e,n),r=i||yh(e,n,i);if(r instanceof wt){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e.path.push(0),this._visitedParent=r;return this._position=e,ro("elementStart",r,t,e,1)}if(r instanceof vt){let s;if(this.singleCharacters)s=1;else{let l=r.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<l&&(l=this.boundaries.end.offset),s=l-e.offset}const a=e.offset-r.startOffset,c=new ze(r,a,s);return e.offset+=s,this._position=e,ro("text",c,t,e,s)}return e.path.pop(),e.offset++,this._position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():ro("elementEnd",n,t,e)}_previous(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};const i=e.parent,r=Qi(e,i),s=r||xh(e,i,r);if(s instanceof wt)return e.offset--,this.shallow?(this._position=e,ro("elementStart",s,t,e,1)):(e.path.push(s.maxOffset),this._position=e,this._visitedParent=s,this.ignoreElementEnd?this._previous():ro("elementEnd",s,t,e));if(s instanceof vt){let a;if(this.singleCharacters)a=1;else{let d=s.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>d&&(d=this.boundaries.start.offset),a=e.offset-d}const c=e.offset-s.startOffset,l=new ze(s,c-a,a);return e.offset-=a,this._position=e,ro("text",l,t,e,a)}return e.path.pop(),this._position=e,this._visitedParent=n.parent,ro("elementStart",n,t,e,1)}}function ro(o,t,e,n,i){return{done:!1,value:{type:o,item:t,previousPosition:e,nextPosition:n,length:i}}}class F extends Ln{constructor(t,e,n="toNone"){if(super(),!t.is("element")&&!t.is("documentFragment"))throw new y("model-position-root-invalid",t);if(!(e instanceof Array)||e.length===0)throw new y("model-position-path-incorrect-format",t,{path:e});t.is("rootElement")?e=e.slice():(e=[...t.getPath(),...e],t=t.root),this.root=t,this.path=e,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)if(t=t.getChild(t.offsetToIndex(this.path[e])),!t)throw new y("model-position-path-incorrect",this,{position:this});if(t.is("$text"))throw new y("model-position-path-incorrect",this,{position:this});return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return Qi(this,this.parent)}get nodeAfter(){const t=this.parent;return yh(this,t,Qi(this,t))}get nodeBefore(){const t=this.parent;return xh(this,t,Qi(this,t))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";const e=Zt(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Xe(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const t=this.parent;return t.is("documentFragment")?[t]:t.getAncestors({includeSelf:!0})}findAncestor(t){const e=this.parent;return e.is("element")?e.findAncestor(t,{includeSelf:!0}):null}getCommonPath(t){if(this.root!=t.root)return[];const e=Zt(this.path,t.path),n=typeof e=="string"?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return i===0?null:e[i-1]}getShiftedBy(t){const e=this.clone(),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return this.compareWith(t)=="after"}isBefore(t){return this.compareWith(t)=="before"}isEqual(t){return this.compareWith(t)=="same"}isTouching(t){if(this.root!==t.root)return!1;const e=Math.min(this.path.length,t.path.length);for(let n=0;n<e;n++){const i=this.path[n]-t.path[n];if(i<-1||i>1)return!1;if(i===1)return Eh(t,this,n);if(i===-1)return Eh(this,t,n)}return this.path.length===t.path.length||(this.path.length>t.path.length?vc(this.path,e):vc(t.path,e))}hasSameParentAs(t){return this.root!==t.root?!1:Zt(this.getParentPath(),t.getParentPath())=="same"}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=F._createAt(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){const e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){const e=t.movedRange;let n;return e.containsPosition(this)||e.start.isEqual(this)?(n=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(n=n._getTransformedByDeletion(t.deletionPosition,1))):n=this.isEqual(t.deletionPosition)?F._createAt(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),n}_getTransformedByDeletion(t,e){const n=F._createAt(this);if(this.root!=t.root)return n;if(Zt(t.getParentPath(),this.getParentPath())=="same"){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if(Zt(t.getParentPath(),this.getParentPath())=="prefix"){const i=t.path.length-1;if(t.offset<=this.path[i]){if(t.offset+e>this.path[i])return null;n.path[i]-=e}}return n}_getTransformedByInsertion(t,e){const n=F._createAt(this);if(this.root!=t.root)return n;if(Zt(t.getParentPath(),this.getParentPath())=="same")(t.offset<this.offset||t.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=e);else if(Zt(t.getParentPath(),this.getParentPath())=="prefix"){const i=t.path.length-1;t.offset<=this.path[i]&&(n.path[i]+=e)}return n}_getTransformedByMove(t,e,n){if(e=e._getTransformedByDeletion(t,n),t.isEqual(e))return F._createAt(this);const i=this._getTransformedByDeletion(t,n);return i===null||t.isEqual(this)&&this.stickiness=="toNext"||t.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(t,e):i._getTransformedByInsertion(e,n)}_getCombined(t,e){const n=t.path.length-1,i=F._createAt(e);return i.stickiness=this.stickiness,i.offset=i.offset+this.path[n]-t.offset,i.path=[...i.path,...this.path.slice(n+1)],i}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(t,e,n="toNone"){if(t instanceof F)return new F(t.root,t.path,t.stickiness);{const i=t;if(e=="end")e=i.maxOffset;else{if(e=="before")return this._createBefore(i,n);if(e=="after")return this._createAfter(i,n);if(e!==0&&!e)throw new y("model-createpositionat-offset-required",[this,t])}if(!i.is("element")&&!i.is("documentFragment"))throw new y("model-position-parent-incorrect",[this,t]);const r=i.getPath();return r.push(e),new this(i.root,r,n)}}static _createAfter(t,e){if(!t.parent)throw new y("model-position-after-root",[this,t],{root:t});return this._createAt(t.parent,t.endOffset,e)}static _createBefore(t,e){if(!t.parent)throw new y("model-position-before-root",t,{root:t});return this._createAt(t.parent,t.startOffset,e)}static fromJSON(t,e){if(t.root==="$graveyard"){const n=new F(e.graveyard,t.path);return n.stickiness=t.stickiness,n}if(!e.getRoot(t.root))throw new y("model-position-fromjson-no-root",e,{rootName:t.root});return new F(e.getRoot(t.root),t.path,t.stickiness)}}function Qi(o,t){const e=t.getChild(t.offsetToIndex(o.offset));return e&&e.is("$text")&&e.startOffset<o.offset?e:null}function yh(o,t,e){return e!==null?null:t.getChild(t.offsetToIndex(o.offset))}function xh(o,t,e){return e!==null?null:t.getChild(t.offsetToIndex(o.offset)-1)}function Eh(o,t,e){return e+1!==o.path.length&&!!vc(t.path,e+1)&&!!function(n,i){let r=n.parent,s=n.path.length-1,a=0;for(;s>=i;){if(n.path[s]+a!==r.maxOffset)return!1;a=1,s--,r=r.parent}return!0}(o,e+1)}function vc(o,t){for(;t<o.length;){if(o[t]!==0)return!1;t++}return!0}F.prototype.is=function(o){return o==="position"||o==="model:position"};class z extends Ln{constructor(t,e){super(),this.start=F._createAt(t),this.end=e?F._createAt(e):F._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new Xe({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return Zt(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}containsItem(t){const e=F._createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new z(this.start,t.start)),this.containsPosition(t.end)&&e.push(new z(t.end,this.end))):e.push(new z(this.start,this.end)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new z(e,n)}return null}getJoined(t,e=!1){let n=this.isIntersecting(t);if(n||(n=this.start.isBefore(t.start)?e?this.end.isTouching(t.start):this.end.isEqual(t.start):e?t.end.isTouching(this.start):t.end.isEqual(this.start)),!n)return null;let i=this.start,r=this.end;return t.start.isBefore(i)&&(i=t.start),t.end.isAfter(r)&&(r=t.end),new z(i,r)}getMinimalFlatRanges(){const t=[],e=this.start.getCommonPath(this.end).length,n=F._createAt(this.start);let i=n.parent;for(;n.path.length>e+1;){const r=i.maxOffset-n.offset;r!==0&&t.push(new z(n,n.getShiftedBy(r))),n.path=n.path.slice(0,-1),n.offset++,i=i.parent}for(;n.path.length<=this.end.path.length;){const r=this.end.path[n.path.length-1],s=r-n.offset;s!==0&&t.push(new z(n,n.getShiftedBy(s))),n.offset=r,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new Xe(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Xe(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new Xe(t);yield e.position;for(const n of e)yield n.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new z(this.start,this.end)]}getTransformedByOperations(t){const e=[new z(this.start,this.end)];for(const n of t)for(let i=0;i<e.length;i++){const r=e[i].getTransformedByOperation(n);e.splice(i,1,...r),i+=r.length-1}for(let n=0;n<e.length;n++){const i=e[n];for(let r=n+1;r<e.length;r++){const s=e[r];(i.containsRange(s)||s.containsRange(i)||i.isEqual(s))&&e.splice(r,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const t=this.start.nodeAfter,e=this.end.nodeBefore;return t&&t.is("element")&&t===e?t:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){const n=t.sourcePosition,i=t.howMany,r=t.targetPosition;return this._getTransformedByMove(n,r,i,e)}_getTransformedBySplitOperation(t){const e=this.start._getTransformedBySplitOperation(t);let n=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(n=this.end.getShiftedBy(1)),e.root!=n.root&&(n=this.end.getShiftedBy(-1)),new z(e,n)}_getTransformedByMergeOperation(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new z(this.start);let e=this.start._getTransformedByMergeOperation(t),n=this.end._getTransformedByMergeOperation(t);return e.root!=n.root&&(n=this.end.getShiftedBy(-1)),e.isAfter(n)?(t.sourcePosition.isBefore(t.targetPosition)?(e=F._createAt(n),e.offset=0):(t.deletionPosition.isEqual(e)||(n=t.deletionPosition),e=t.targetPosition),new z(e,n)):new z(e,n)}_getTransformedByInsertion(t,e,n=!1){if(n&&this.containsPosition(t))return[new z(this.start,t),new z(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{const i=new z(this.start,this.end);return i.start=i.start._getTransformedByInsertion(t,e),i.end=i.end._getTransformedByInsertion(t,e),[i]}}_getTransformedByMove(t,e,n,i=!1){if(this.isCollapsed){const h=this.start._getTransformedByMove(t,e,n);return[new z(h)]}const r=z._createFromPositionAndShift(t,n),s=e._getTransformedByDeletion(t,n);if(this.containsPosition(e)&&!i&&(r.containsPosition(this.start)||r.containsPosition(this.end))){const h=this.start._getTransformedByMove(t,e,n),u=this.end._getTransformedByMove(t,e,n);return[new z(h,u)]}let a;const c=this.getDifference(r);let l=null;const d=this.getIntersection(r);if(c.length==1?l=new z(c[0].start._getTransformedByDeletion(t,n),c[0].end._getTransformedByDeletion(t,n)):c.length==2&&(l=new z(this.start,this.end._getTransformedByDeletion(t,n))),a=l?l._getTransformedByInsertion(s,n,d!==null||i):[],d){const h=new z(d.start._getCombined(r.start,s),d.end._getCombined(r.start,s));a.length==2?a.splice(1,0,h):a.push(h)}return a}_getTransformedByDeletion(t,e){let n=this.start._getTransformedByDeletion(t,e),i=this.end._getTransformedByDeletion(t,e);return n==null&&i==null?null:(n==null&&(n=t),i==null&&(i=t),new z(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return new this(F._createAt(t,0),F._createAt(t,t.maxOffset))}static _createOn(t){return this._createFromPositionAndShift(F._createBefore(t),t.offsetSize)}static _createFromRanges(t){if(t.length===0)throw new y("range-create-from-ranges-empty-array",null);if(t.length==1)return t[0].clone();const e=t[0];t.sort((r,s)=>r.start.isAfter(s.start)?1:-1);const n=t.indexOf(e),i=new this(e.start,e.end);if(n>0)for(let r=n-1;t[r].end.isEqual(i.start);r++)i.start=F._createAt(t[r].start);for(let r=n+1;r<t.length&&t[r].start.isEqual(i.end);r++)i.end=F._createAt(t[r].end);return i}static fromJSON(t,e){return new this(F.fromJSON(t.start,e),F.fromJSON(t.end,e))}}z.prototype.is=function(o){return o==="range"||o==="model:range"};class Dh extends it(){constructor(){super(),this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;const n=this._modelToViewMapping.get(e.modelPosition.parent);if(!n)throw new y("mapping-model-position-view-parent-not-found",this,{modelPosition:e.modelPosition});e.viewPosition=this.findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;const n=this.findMappedViewAncestor(e.viewPosition),i=this._viewToModelMapping.get(n),r=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=F._createAt(i,r)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t,e={}){const n=this.toModelElement(t);if(this._elementToMarkerNames.has(t))for(const i of this._elementToMarkerNames.get(t))this._unboundMarkerNames.add(i);e.defer?this._deferredBindingRemovals.set(t,t.root):(this._viewToModelMapping.delete(t),this._modelToViewMapping.get(n)==t&&this._modelToViewMapping.delete(n))}unbindModelElement(t){const e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){const n=this._markerNameToElements.get(e)||new Set;n.add(t);const i=this._elementToMarkerNames.get(t)||new Set;i.add(e),this._markerNameToElements.set(e,n),this._elementToMarkerNames.set(t,i)}unbindElementFromMarkerName(t,e){const n=this._markerNameToElements.get(e);n&&(n.delete(t),n.size==0&&this._markerNameToElements.delete(e));const i=this._elementToMarkerNames.get(t);i&&(i.delete(e),i.size==0&&this._elementToMarkerNames.delete(t))}flushUnboundMarkerNames(){const t=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),t}flushDeferredBindings(){for(const[t,e]of this._deferredBindingRemovals)t.root==e&&this.unbindViewElement(t);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new z(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new X(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){const e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={}){const n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){const e=this._markerNameToElements.get(t);if(!e)return null;const n=new Set;for(const i of e)if(i.is("attributeElement"))for(const r of i.getElementsWithSameId())n.add(r);else n.add(i);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}findMappedViewAncestor(t){let e=t.parent;for(;!this._viewToModelMapping.has(e);)e=e.parent;return e}_toModelOffset(t,e,n){if(n!=t)return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t);if(t.is("$text"))return e;let i=0;for(let r=0;r<e;r++)i+=this.getModelLength(t.getChild(r));return i}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name))return this._viewToModelLengthCallbacks.get(t.name)(t);if(this._viewToModelMapping.has(t))return 1;if(t.is("$text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(const n of t.getChildren())e+=this.getModelLength(n);return e}}findPositionIn(t,e){let n,i=0,r=0,s=0;if(t.is("$text"))return new H(t,e);for(;r<e;)n=t.getChild(s),i=this.getModelLength(n),r+=i,s++;return r==e?this._moveViewPositionToTextNode(new H(t,s)):this.findPositionIn(n,e-(r-i))}_moveViewPositionToTextNode(t){const e=t.nodeBefore,n=t.nodeAfter;return e instanceof Ct?new H(e,e.data.length):n instanceof Ct?new H(n,0):t}}class rA{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=_s(e),t instanceof ze&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=_s(e),t instanceof ze&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=_s(e),t instanceof ze&&(t=this._getSymbolForTextProxy(t));const n=this._consumable.get(t);if(n===void 0)return null;const i=n.get(e);return i===void 0?null:i}revert(t,e){e=_s(e),t instanceof ze&&(t=this._getSymbolForTextProxy(t));const n=this.test(t,e);return n===!1?(this._consumable.get(t).set(e,!0),!0):n!==!0&&null}verifyAllConsumed(t){const e=[];for(const[n,i]of this._consumable)for(const[r,s]of i){const a=r.split(":")[0];s&&t==a&&e.push({event:r,item:n.name||n.description})}if(e.length)throw new y("conversion-model-consumable-not-consumed",null,{items:e})}_getSymbolForTextProxy(t){let e=null;const n=this._textProxyRegistry.get(t.startOffset);if(n){const i=n.get(t.endOffset);i&&(e=i.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t)),e}_addSymbolForTextProxy(t){const e=t.startOffset,n=t.endOffset,i=t.parent,r=Symbol("$textProxy:"+t.data);let s,a;return s=this._textProxyRegistry.get(e),s||(s=new Map,this._textProxyRegistry.set(e,s)),a=s.get(n),a||(a=new Map,s.set(n,a)),a.set(i,r),r}}function _s(o){const t=o.split(":");return t[0]=="insert"?t[0]:t[0]=="addMarker"||t[0]=="removeMarker"?o:t.length>1?t[0]+":"+t[1]:t[0]}var sA=Object.defineProperty,aA=Object.defineProperties,cA=Object.getOwnPropertyDescriptors,Sh=Object.getOwnPropertySymbols,lA=Object.prototype.hasOwnProperty,dA=Object.prototype.propertyIsEnumerable,Ih=(o,t,e)=>t in o?sA(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,yc=(o,t)=>{for(var e in t||(t={}))lA.call(t,e)&&Ih(o,e,t[e]);if(Sh)for(var e of Sh(t))dA.call(t,e)&&Ih(o,e,t[e]);return o},Th=(o,t)=>aA(o,cA(t));class Mh extends it(){constructor(t){super(),this._conversionApi=yc({dispatcher:this},t),this._firedEventsMap=new WeakMap}convertChanges(t,e,n){const i=this._createConversionApi(n,t.getRefreshedItems());for(const s of t.getMarkersToRemove())this._convertMarkerRemove(s.name,s.range,i);const r=this._reduceChanges(t.getChanges());for(const s of r)s.type==="insert"?this._convertInsert(z._createFromPositionAndShift(s.position,s.length),i):s.type==="reinsert"?this._convertReinsert(z._createFromPositionAndShift(s.position,s.length),i):s.type==="remove"?this._convertRemove(s.position,s.length,s.name,i):this._convertAttribute(s.range,s.attributeKey,s.attributeOldValue,s.attributeNewValue,i);for(const s of i.mapper.flushUnboundMarkerNames()){const a=e.get(s).getRange();this._convertMarkerRemove(s,a,i),this._convertMarkerAdd(s,a,i)}for(const s of t.getMarkersToAdd())this._convertMarkerAdd(s.name,s.range,i);i.mapper.flushDeferredBindings(),i.consumable.verifyAllConsumed("insert")}convert(t,e,n,i={}){const r=this._createConversionApi(n,void 0,i);this._convertInsert(t,r);for(const[s,a]of e)this._convertMarkerAdd(s,a,r);r.consumable.verifyAllConsumed("insert")}convertSelection(t,e,n){const i=this._createConversionApi(n);this.fire("cleanSelection",{selection:t},i);const r=t.getFirstPosition().root;if(!i.mapper.toViewElement(r))return;const s=Array.from(e.getMarkersAtPosition(t.getFirstPosition()));if(this._addConsumablesForSelection(i.consumable,t,s),this.fire("selection",{selection:t},i),t.isCollapsed){for(const a of s)if(i.consumable.test(t,"addMarker:"+a.name)){const c=a.getRange();if(!hA(t.getFirstPosition(),a,i.mapper))continue;const l={item:t,markerName:a.name,markerRange:c};this.fire(`addMarker:${a.name}`,l,i)}for(const a of t.getAttributeKeys())if(i.consumable.test(t,"attribute:"+a)){const c={item:t,range:t.getFirstRange(),attributeKey:a,attributeOldValue:null,attributeNewValue:t.getAttribute(a)};this.fire(`attribute:${a}:$text`,c,i)}}}_convertInsert(t,e,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(e.consumable,Array.from(t));for(const i of Array.from(t.getWalker({shallow:!0})).map(Bh))this._testAndFire("insert",i,e)}_convertRemove(t,e,n,i){this.fire(`remove:${n}`,{position:t,length:e},i)}_convertAttribute(t,e,n,i,r){this._addConsumablesForRange(r.consumable,t,`attribute:${e}`);for(const s of t){const a={item:s.item,range:z._createFromPositionAndShift(s.previousPosition,s.length),attributeKey:e,attributeOldValue:n,attributeNewValue:i};this._testAndFire(`attribute:${e}`,a,r)}}_convertReinsert(t,e){const n=Array.from(t.getWalker({shallow:!0}));this._addConsumablesForInsert(e.consumable,n);for(const i of n.map(Bh))this._testAndFire("insert",Th(yc({},i),{reconversion:!0}),e)}_convertMarkerAdd(t,e,n){if(e.root.rootName=="$graveyard")return;const i=`addMarker:${t}`;if(n.consumable.add(e,i),this.fire(i,{markerName:t,markerRange:e},n),n.consumable.consume(e,i)){this._addConsumablesForRange(n.consumable,e,i);for(const r of e.getItems()){if(!n.consumable.test(r,i))continue;const s={item:r,range:z._createOn(r),markerName:t,markerRange:e};this.fire(i,s,n)}}}_convertMarkerRemove(t,e,n){e.root.rootName!="$graveyard"&&this.fire(`removeMarker:${t}`,{markerName:t,markerRange:e},n)}_reduceChanges(t){const e={changes:t};return this.fire("reduceChanges",e),e.changes}_addConsumablesForInsert(t,e){for(const n of e){const i=n.item;if(t.test(i,"insert")===null){t.add(i,"insert");for(const r of i.getAttributeKeys())t.add(i,"attribute:"+r)}}return t}_addConsumablesForRange(t,e,n){for(const i of e.getItems())t.add(i,n);return t}_addConsumablesForSelection(t,e,n){t.add(e,"selection");for(const i of n)t.add(e,"addMarker:"+i.name);for(const i of e.getAttributeKeys())t.add(e,"attribute:"+i);return t}_testAndFire(t,e,n){const i=function(c,l){const d=l.item.is("element")?l.item.name:"$text";return`${c}:${d}`}(t,e),r=e.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(e.item):e.item,s=this._firedEventsMap.get(n),a=s.get(r);if(a){if(a.has(i))return;a.add(i)}else s.set(r,new Set([i]));this.fire(i,e,n)}_testAndFireAddAttributes(t,e){const n={item:t,range:z._createOn(t)};for(const i of n.item.getAttributeKeys())n.attributeKey=i,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(i),this._testAndFire(`attribute:${i}`,n,e)}_createConversionApi(t,e=new Set,n={}){const i=Th(yc({},this._conversionApi),{consumable:new rA,writer:t,options:n,convertItem:r=>this._convertInsert(z._createOn(r),i),convertChildren:r=>this._convertInsert(z._createIn(r),i,{doNotAddConsumables:!0}),convertAttributes:r=>this._testAndFireAddAttributes(r,i),canReuseView:r=>!e.has(i.mapper.toModelElement(r))});return this._firedEventsMap.set(i,new Map),i}}function hA(o,t,e){const n=t.getRange(),i=Array.from(o.getAncestors());return i.shift(),i.reverse(),!i.some(r=>{if(n.containsItem(r))return!!e.toViewElement(r).getCustomProperty("addHighlight")})}function Bh(o){return{item:o.item,range:z._createFromPositionAndShift(o.previousPosition,o.length)}}class fe extends it(Ln){constructor(...t){super(),this._lastRangeBackward=!1,this._attrs=new Map,this._ranges=[],t.length&&this.setTo(...t)}get anchor(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const t of this._ranges)yield new z(t.start,t.end)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?new z(t.start,t.end):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?new z(t.start,t.end):null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}setTo(...t){let[e,n,i]=t;if(typeof n=="object"&&(i=n,n=void 0),e===null)this._setRanges([]);else if(e instanceof fe)this._setRanges(e.getRanges(),e.isBackward);else if(e&&typeof e.getRanges=="function")this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof z)this._setRanges([e],!!i&&!!i.backward);else if(e instanceof F)this._setRanges([new z(e)]);else if(e instanceof io){const r=!!i&&!!i.backward;let s;if(n=="in")s=z._createIn(e);else if(n=="on")s=z._createOn(e);else{if(n===void 0)throw new y("model-selection-setto-required-second-parameter",[this,e]);s=new z(F._createAt(e,n))}this._setRanges([s],r)}else{if(!re(e))throw new y("model-selection-setto-not-selectable",[this,e]);this._setRanges(e,i&&!!i.backward)}}_setRanges(t,e=!1){const n=Array.from(t),i=n.some(r=>{if(!(r instanceof z))throw new y("model-selection-set-ranges-not-range",[this,t]);return this._ranges.every(s=>!s.isEqual(r))});(n.length!==this._ranges.length||i)&&(this._replaceAllRanges(n),this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0}))}setFocus(t,e){if(this.anchor===null)throw new y("model-selection-setfocus-no-ranges",[this,t]);const n=F._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(i)=="before"?(this._pushRange(new z(n,i)),this._lastRangeBackward=!0):(this._pushRange(new z(i,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}*getSelectedBlocks(){const t=new WeakSet;for(const e of this.getRanges()){const n=Ph(e.start,t);gA(n,e)&&(yield n);for(const r of e.getWalker()){const s=r.item;r.type=="elementEnd"&&uA(s,t,e)&&(yield s)}const i=Ph(e.end,t);pA(i,e)&&(yield i)}}containsEntireContent(t=this.anchor.root){const e=F._createAt(t,0),n=F._createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(new z(t.start,t.end))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new y("model-selection-range-intersects",[this,t],{addedRange:t,intersectingRange:this._ranges[e]})}_replaceAllRanges(t){this._removeAllRanges();for(const e of t)this._pushRange(e)}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Nh(o,t){return!t.has(o)&&(t.add(o),o.root.document.model.schema.isBlock(o)&&!!o.parent)}function uA(o,t,e){return Nh(o,t)&&xc(o,e)}function Ph(o,t){const e=o.parent.root.document.model.schema,n=o.parent.getAncestors({parentFirst:!0,includeSelf:!0});let i=!1;const r=n.find(s=>!i&&(i=e.isLimit(s),!i&&Nh(s,t)));return n.forEach(s=>t.add(s)),r}function xc(o,t){const e=function(n){const i=n.root.document.model.schema;let r=n.parent;for(;r;){if(i.isBlock(r))return r;r=r.parent}}(o);return e?!t.containsRange(z._createOn(e),!0):!0}function gA(o,t){return!!o&&(!(!t.isCollapsed&&!o.isEmpty)||!t.start.isTouching(F._createAt(o,o.maxOffset))&&xc(o,t))}function pA(o,t){return!!o&&(!(!t.isCollapsed&&!o.isEmpty)||!t.end.isTouching(F._createAt(o,0))&&xc(o,t))}fe.prototype.is=function(o){return o==="selection"||o==="model:selection"};class ke extends it(z){constructor(t,e){super(t,e),mA.call(this)}detach(){this.stopListening()}toRange(){return new z(this.start,this.end)}static fromRange(t){return new ke(t.start,t.end)}}function mA(){this.listenTo(this.root.document.model,"applyOperation",(o,t)=>{const e=t[0];e.isDocumentOperation&&fA.call(this,e)},{priority:"low"})}function fA(o){const t=this.getTransformedByOperation(o),e=z._createFromRanges(t),n=!e.isEqual(this),i=function(s,a){switch(a.type){case"insert":return s.containsPosition(a.position);case"move":case"remove":case"reinsert":case"merge":return s.containsPosition(a.sourcePosition)||s.start.isEqual(a.sourcePosition)||s.containsPosition(a.targetPosition);case"split":return s.containsPosition(a.splitPosition)||s.containsPosition(a.insertionPosition)}return!1}(this,o);let r=null;if(n){e.root.rootName=="$graveyard"&&(r=o.type=="remove"?o.sourcePosition:o.deletionPosition);const s=this.toRange();this.start=e.start,this.end=e.end,this.fire("change:range",s,{deletionPosition:r})}else i&&this.fire("change:content",this.toRange(),{deletionPosition:r})}ke.prototype.is=function(o){return o==="liveRange"||o==="model:liveRange"||o=="range"||o==="model:range"};const Cs="selection:";class Oe extends it(Ln){constructor(t){super(),this._selection=new kA(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}refresh(){this._selection.updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(t){this._selection.observeMarkers(t)}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(...t){this._selection.setTo(...t)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection.getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return Cs+t}static _isStoreAttributeKey(t){return t.startsWith(Cs)}}Oe.prototype.is=function(o){return o==="selection"||o=="model:selection"||o=="documentSelection"||o=="model:documentSelection"};class kA extends fe{constructor(t){super(),this.markers=new Ie({idProperty:"name"}),this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this._model=t.model,this._document=t,this.listenTo(this._model,"applyOperation",(e,n)=>{const i=n[0];i.isDocumentOperation&&i.type!="marker"&&i.type!="rename"&&i.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{this._validateSelectionRanges(this.getRanges())}),this.listenTo(this._model.markers,"update",(e,n,i,r)=>{this._updateMarker(n,r)}),this.listenTo(this._document,"change",(e,n)=>{(function(i,r){const s=i.document.differ;for(const a of s.getChanges()){if(a.type!="insert")continue;const c=a.position.parent;a.length===c.maxOffset&&i.enqueueChange(r,l=>{const d=Array.from(c.getAttributeKeys()).filter(h=>h.startsWith(Cs));for(const h of d)l.removeAttribute(h,c)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(...t){super.setTo(...t),this._updateAttributes(!0),this.updateMarkers()}setFocus(t,e){super.setFocus(t,e),this._updateAttributes(!0),this.updateMarkers()}setAttribute(t,e){if(this._setAttribute(t,e)){const n=[t];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){const t=q();return this._overriddenGravityRegister.add(t),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new y("document-selection-gravity-wrong-restore",this,{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(t){this._observedMarkers.add(t),this.updateMarkers()}_replaceAllRanges(t){this._validateSelectionRanges(t),super._replaceAllRanges(t)}_popRange(){this._ranges.pop().detach()}_pushRange(t){const e=this._prepareRange(t);e&&this._ranges.push(e)}_validateSelectionRanges(t){for(const e of t)if(!this._document._validateSelectionRange(e))throw new y("document-selection-wrong-position",this,{range:e})}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return;const e=ke.fromRange(t);return e.on("change:range",(n,i,r)=>{if(this._hasChangedRange=!0,e.root==this._document.graveyard){this._selectionRestorePosition=r.deletionPosition;const s=this._ranges.indexOf(e);this._ranges.splice(s,1),e.detach()}}),e}updateMarkers(){if(!this._observedMarkers.size)return;const t=[];let e=!1;for(const i of this._model.markers){const r=i.name.split(":",1)[0];if(!this._observedMarkers.has(r))continue;const s=i.getRange();for(const a of this.getRanges())s.containsRange(a,!a.isCollapsed)&&t.push(i)}const n=Array.from(this.markers);for(const i of t)this.markers.has(i)||(this.markers.add(i),e=!0);for(const i of Array.from(this.markers))t.includes(i)||(this.markers.remove(i),e=!0);e&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(t,e){const n=t.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let i=!1;const r=Array.from(this.markers),s=this.markers.has(t);if(e){let a=!1;for(const c of this.getRanges())if(e.containsRange(c,!c.isCollapsed)){a=!0;break}a&&!s?(this.markers.add(t),i=!0):!a&&s&&(this.markers.remove(t),i=!0)}else s&&(this.markers.remove(t),i=!0);i&&this.fire("change:marker",{oldMarkers:r,directChange:!1})}_updateAttributes(t){const e=Ze(this._getSurroundingAttributes()),n=Ze(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(const[r,s]of this._attributePriority)s=="low"&&(this._attrs.delete(r),this._attributePriority.delete(r));this._setAttributesTo(e);const i=[];for(const[r,s]of this.getAttributes())n.has(r)&&n.get(r)===s||i.push(r);for(const[r]of n)this.hasAttribute(r)||i.push(r);i.length>0&&this.fire("change:attribute",{attributeKeys:i,directChange:!1})}_setAttribute(t,e,n=!0){const i=n?"normal":"low";return i=="low"&&this._attributePriority.get(t)=="normal"?!1:super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,i),!0)}_removeAttribute(t,e=!0){const n=e?"normal":"low";return(n!="low"||this._attributePriority.get(t)!="normal")&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){const e=new Set;for(const[n,i]of this.getAttributes())t.get(n)!==i&&this._removeAttribute(n,!1);for(const[n,i]of t)this._setAttribute(n,i,!1)&&e.add(n);return e}*getStoredAttributes(){const t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(const e of t.getAttributeKeys())e.startsWith(Cs)&&(yield[e.substr(10),t.getAttribute(e)])}_getSurroundingAttributes(){const t=this.getFirstPosition(),e=this._model.schema;if(t.root.rootName=="$graveyard")return null;let n=null;if(this.isCollapsed){const i=t.textNode?t.textNode:t.nodeBefore,r=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=Ji(i,e)),n||(n=Ji(r,e)),!this.isGravityOverridden&&!n){let s=i;for(;s&&!n;)s=s.previousSibling,n=Ji(s,e)}if(!n){let s=r;for(;s&&!n;)s=s.nextSibling,n=Ji(s,e)}n||(n=this.getStoredAttributes())}else{const i=this.getFirstRange();for(const r of i){if(r.item.is("element")&&e.isObject(r.item)){n=Ji(r.item,e);break}if(r.type=="text"){n=r.item.getAttributes();break}}}return n}_fixGraveyardSelection(t){const e=this._model.schema.getNearestSelectionRange(t);e&&this._pushRange(e)}}function Ji(o,t){if(!o)return null;if(o instanceof ze||o instanceof vt)return o.getAttributes();if(!t.isInline(o))return null;if(!t.isObject(o))return[];const e=[];for(const[n,i]of o.getAttributes())t.checkAttribute("$text",n)&&t.getAttributeProperties(n).copyFromObject!==!1&&e.push([n,i]);return e}class zh{constructor(t){this._dispatchers=t}add(t){for(const e of this._dispatchers)t(e);return this}}class bA extends zh{elementToElement(t){return this.add(function(e){const n=jh(e.model),i=Xi(e.view,"container");return n.attributes.length&&(n.children=!0),r=>{r.on(`insert:${n.name}`,function(s,a=AA){return(c,l,d)=>{if(!a(l.item,d.consumable,{preflight:!0}))return;const h=s(l.item,d,l);if(!h)return;a(l.item,d.consumable);const u=d.mapper.toViewPosition(l.range.start);d.mapper.bindElements(l.item,h),d.writer.insert(u,h),d.convertAttributes(l.item),Hh(h,l.item.getChildren(),d,{reconversion:l.reconversion})}}(i,Uh(n)),{priority:e.converterPriority||"normal"}),(n.children||n.attributes.length)&&r.on("reduceChanges",Vh(n),{priority:"low"})}}(t))}elementToStructure(t){return this.add(function(e){const n=jh(e.model),i=Xi(e.view,"container");return n.children=!0,r=>{if(r._conversionApi.schema.checkChild(n.name,"$text"))throw new y("conversion-element-to-structure-disallowed-text",r,{elementName:n.name});var s,a;r.on(`insert:${n.name}`,(s=i,a=Uh(n),(c,l,d)=>{if(!a(l.item,d.consumable,{preflight:!0}))return;const h=new Map;d.writer._registerSlotFactory(function(m,k,_){return(v,T)=>{const O=v.createContainerElement("$slot");let W=null;if(T==="children")W=Array.from(m.getChildren());else{if(typeof T!="function")throw new y("conversion-slot-mode-unknown",_.dispatcher,{modeOrFilter:T});W=Array.from(m.getChildren()).filter(Q=>T(Q))}return k.set(O,W),O}}(l.item,h,d));const u=s(l.item,d,l);if(d.writer._clearSlotFactory(),!u)return;(function(m,k,_){const v=Array.from(k.values()).flat(),T=new Set(v);if(T.size!=v.length)throw new y("conversion-slot-filter-overlap",_.dispatcher,{element:m});if(T.size!=m.childCount)throw new y("conversion-slot-filter-incomplete",_.dispatcher,{element:m})})(l.item,h,d),a(l.item,d.consumable);const g=d.mapper.toViewPosition(l.range.start);d.mapper.bindElements(l.item,u),d.writer.insert(g,u),d.convertAttributes(l.item),function(m,k,_,v){_.mapper.on("modelToViewPosition",W,{priority:"highest"});let T=null,O=null;for([T,O]of k)Hh(m,O,_,v),_.writer.move(_.writer.createRangeIn(T),_.writer.createPositionBefore(T)),_.writer.remove(T);function W(Q,pt){const at=pt.modelPosition.nodeAfter,Lt=O.indexOf(at);Lt<0||(pt.viewPosition=pt.mapper.findPositionIn(T,Lt))}_.mapper.off("modelToViewPosition",W)}(u,h,d,{reconversion:l.reconversion})}),{priority:e.converterPriority||"normal"}),r.on("reduceChanges",Vh(n),{priority:"low"})}}(t))}attributeToElement(t){return this.add(function(e){e=On(e);let n=e.model;typeof n=="string"&&(n={key:n});let i=`attribute:${n.key}`;if(n.name&&(i+=":"+n.name),n.values)for(const s of n.values)e.view[s]=Xi(e.view[s],"attribute");else e.view=Xi(e.view,"attribute");const r=Rh(e);return s=>{s.on(i,function(a){return(c,l,d)=>{if(!d.consumable.test(l.item,c.name))return;const h=a(l.attributeOldValue,d,l),u=a(l.attributeNewValue,d,l);if(!h&&!u)return;d.consumable.consume(l.item,c.name);const g=d.writer,m=g.document.selection;if(l.item instanceof fe||l.item instanceof Oe)g.wrap(m.getFirstRange(),u);else{let k=d.mapper.toViewRange(l.range);l.attributeOldValue!==null&&h&&(k=g.unwrap(k,h)),l.attributeNewValue!==null&&u&&g.wrap(k,u)}}}(r),{priority:e.converterPriority||"normal"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=On(e);let n=e.model;typeof n=="string"&&(n={key:n});let i=`attribute:${n.key}`;if(n.name&&(i+=":"+n.name),n.values)for(const s of n.values)e.view[s]=Fh(e.view[s]);else e.view=Fh(e.view);const r=Rh(e);return s=>{var a;s.on(i,(a=r,(c,l,d)=>{if(!d.consumable.test(l.item,c.name))return;const h=a(l.attributeOldValue,d,l),u=a(l.attributeNewValue,d,l);if(!h&&!u)return;d.consumable.consume(l.item,c.name);const g=d.mapper.toViewElement(l.item),m=d.writer;if(!g)throw new y("conversion-attribute-to-attribute-on-text",d.dispatcher,l);if(l.attributeOldValue!==null&&h)if(h.key=="class"){const k=$t(h.value);for(const _ of k)m.removeClass(_,g)}else if(h.key=="style"){const k=Object.keys(h.value);for(const _ of k)m.removeStyle(_,g)}else m.removeAttribute(h.key,g);if(l.attributeNewValue!==null&&u)if(u.key=="class"){const k=$t(u.value);for(const _ of k)m.addClass(_,g)}else if(u.key=="style"){const k=Object.keys(u.value);for(const _ of k)m.setStyle(_,u.value[_],g)}else m.setAttribute(u.key,u.value,g)}),{priority:e.converterPriority||"normal"})}}(t))}markerToElement(t){return this.add(function(e){const n=Xi(e.view,"ui");return i=>{var r;i.on(`addMarker:${e.model}`,(r=n,(s,a,c)=>{a.isOpening=!0;const l=r(a,c);a.isOpening=!1;const d=r(a,c);if(!l||!d)return;const h=a.markerRange;if(h.isCollapsed&&!c.consumable.consume(h,s.name))return;for(const m of h)if(!c.consumable.consume(m.item,s.name))return;const u=c.mapper,g=c.writer;g.insert(u.toViewPosition(h.start),l),c.mapper.bindElementToMarker(l,a.markerName),h.isCollapsed||(g.insert(u.toViewPosition(h.end),d),c.mapper.bindElementToMarker(d,a.markerName)),s.stop()}),{priority:e.converterPriority||"normal"}),i.on(`removeMarker:${e.model}`,(s,a,c)=>{const l=c.mapper.markerNameToElements(a.markerName);if(l){for(const d of l)c.mapper.unbindElementFromMarkerName(d,a.markerName),c.writer.clear(c.writer.createRangeOn(d),d);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}},{priority:e.converterPriority||"normal"})}}(t))}markerToHighlight(t){return this.add(function(e){return n=>{var i;n.on(`addMarker:${e.model}`,(i=e.view,(r,s,a)=>{if(!s.item||!(s.item instanceof fe||s.item instanceof Oe||s.item.is("$textProxy")))return;const c=Ec(i,s,a);if(!c||!a.consumable.consume(s.item,r.name))return;const l=a.writer,d=Oh(l,c),h=l.document.selection;if(s.item instanceof fe||s.item instanceof Oe)l.wrap(h.getFirstRange(),d);else{const u=a.mapper.toViewRange(s.range),g=l.wrap(u,d);for(const m of g.getItems())if(m.is("attributeElement")&&m.isSimilar(d)){a.mapper.bindElementToMarker(m,s.markerName);break}}}),{priority:e.converterPriority||"normal"}),n.on(`addMarker:${e.model}`,function(r){return(s,a,c)=>{if(!a.item||!(a.item instanceof wt))return;const l=Ec(r,a,c);if(!l||!c.consumable.test(a.item,s.name))return;const d=c.mapper.toViewElement(a.item);if(d&&d.getCustomProperty("addHighlight")){c.consumable.consume(a.item,s.name);for(const h of z._createIn(a.item))c.consumable.consume(h.item,s.name);d.getCustomProperty("addHighlight")(d,l,c.writer),c.mapper.bindElementToMarker(d,a.markerName)}}}(e.view),{priority:e.converterPriority||"normal"}),n.on(`removeMarker:${e.model}`,function(r){return(s,a,c)=>{if(a.markerRange.isCollapsed)return;const l=Ec(r,a,c);if(!l)return;const d=Oh(c.writer,l),h=c.mapper.markerNameToElements(a.markerName);if(h){for(const u of h)c.mapper.unbindElementFromMarkerName(u,a.markerName),u.is("attributeElement")?c.writer.unwrap(c.writer.createRangeOn(u),d):u.getCustomProperty("removeHighlight")(u,l.id,c.writer);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}}}(e.view),{priority:e.converterPriority||"normal"})}}(t))}markerToData(t){return this.add(function(e){e=On(e);const n=e.model;let i=e.view;return i||(i=r=>({group:n,name:r.substr(e.model.length+1)})),r=>{var s;r.on(`addMarker:${n}`,(s=i,(a,c,l)=>{const d=s(c.markerName,l);if(!d)return;const h=c.markerRange;l.consumable.consume(h,a.name)&&(Lh(h,!1,l,c,d),Lh(h,!0,l,c,d),a.stop())}),{priority:e.converterPriority||"normal"}),r.on(`removeMarker:${n}`,function(a){return(c,l,d)=>{const h=a(l.markerName,d);if(!h)return;const u=d.mapper.markerNameToElements(l.markerName);if(u){for(const m of u)d.mapper.unbindElementFromMarkerName(m,l.markerName),m.is("containerElement")?(g(`data-${h.group}-start-before`,m),g(`data-${h.group}-start-after`,m),g(`data-${h.group}-end-before`,m),g(`data-${h.group}-end-after`,m)):d.writer.clear(d.writer.createRangeOn(m),m);d.writer.clearClonedElementsGroup(l.markerName),c.stop()}function g(m,k){if(k.hasAttribute(m)){const _=new Set(k.getAttribute(m).split(","));_.delete(h.name),_.size==0?d.writer.removeAttribute(m,k):d.writer.setAttribute(m,Array.from(_).join(","),k)}}}}(i),{priority:e.converterPriority||"normal"})}}(t))}}function Oh(o,t){const e=o.createAttributeElement("span",t.attributes);return t.classes&&e._addClass(t.classes),typeof t.priority=="number"&&(e._priority=t.priority),e._id=t.id,e}function Lh(o,t,e,n,i){const r=t?o.start:o.end,s=r.nodeAfter&&r.nodeAfter.is("element")?r.nodeAfter:null,a=r.nodeBefore&&r.nodeBefore.is("element")?r.nodeBefore:null;if(s||a){let c,l;t&&s||!t&&!a?(c=s,l=!0):(c=a,l=!1);const d=e.mapper.toViewElement(c);if(d)return void function(h,u,g,m,k,_){const v=`data-${_.group}-${u?"start":"end"}-${g?"before":"after"}`,T=h.hasAttribute(v)?h.getAttribute(v).split(","):[];T.unshift(_.name),m.writer.setAttribute(v,T.join(","),h),m.mapper.bindElementToMarker(h,k.markerName)}(d,t,l,e,n,i)}(function(c,l,d,h,u){const g=`${u.group}-${l?"start":"end"}`,m=u.name?{name:u.name}:null,k=d.writer.createUIElement(g,m);d.writer.insert(c,k),d.mapper.bindElementToMarker(k,h.markerName)})(e.mapper.toViewPosition(r),t,e,n,i)}function jh(o){return typeof o=="string"&&(o={name:o}),o.attributes?Array.isArray(o.attributes)||(o.attributes=[o.attributes]):o.attributes=[],o.children=!!o.children,o}function Xi(o,t){return typeof o=="function"?o:(e,n)=>function(i,r,s){typeof i=="string"&&(i={name:i});let a;const c=r.writer,l=Object.assign({},i.attributes);if(s=="container")a=c.createContainerElement(i.name,l);else if(s=="attribute"){const d={priority:i.priority||no.DEFAULT_PRIORITY};a=c.createAttributeElement(i.name,l,d)}else a=c.createUIElement(i.name,l);if(i.styles){const d=Object.keys(i.styles);for(const h of d)c.setStyle(h,i.styles[h],a)}if(i.classes){const d=i.classes;if(typeof d=="string")c.addClass(d,a);else for(const h of d)c.addClass(h,a)}return a}(o,n,t)}function Rh(o){return o.model.values?(t,e,n)=>{const i=o.view[t];return i?i(t,e,n):null}:o.view}function Fh(o){return typeof o=="string"?t=>({key:o,value:t}):typeof o=="object"?o.value?()=>o:t=>({key:o.key,value:t}):o}function Ec(o,t,e){const n=typeof o=="function"?o(t,e):o;return n?(n.priority||(n.priority=10),n.id||(n.id=t.markerName),n):null}function Vh(o){const t=function(e){return(n,i)=>{if(!n.is("element",e.name))return!1;if(i.type=="attribute"){if(e.attributes.includes(i.attributeKey))return!0}else if(e.children)return!0;return!1}}(o);return(e,n)=>{const i=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const r of n.changes){const s=r.type=="attribute"?r.range.start.nodeAfter:r.position.parent;if(s&&t(s,r)){if(!n.reconvertedElements.has(s)){n.reconvertedElements.add(s);const a=F._createBefore(s);let c=i.length;for(let l=i.length-1;l>=0;l--){const d=i[l],h=(d.type=="attribute"?d.range.start:d.position).compareWith(a);if(h=="before"||d.type=="remove"&&h=="same")break;c=l}i.splice(c,0,{type:"remove",name:s.name,position:a,length:1},{type:"reinsert",name:s.name,position:a,length:1})}}else i.push(r)}n.changes=i}}function Uh(o){return(t,e,n={})=>{const i=["insert"];for(const r of o.attributes)t.hasAttribute(r)&&i.push(`attribute:${r}`);return!!i.every(r=>e.test(t,r))&&(n.preflight||i.forEach(r=>e.consume(t,r)),!0)}}function Hh(o,t,e,n){for(const i of t)wA(o.root,i,e,n)||e.convertItem(i)}function wA(o,t,e,n){const{writer:i,mapper:r}=e;if(!n.reconversion)return!1;const s=r.toViewElement(t);return!(!s||s.root==o)&&!!e.canReuseView(s)&&(i.move(i.createRangeOn(s),r.toViewPosition(F._createBefore(t))),!0)}function AA(o,t,{preflight:e}={}){return e?t.test(o,"insert"):t.consume(o,"insert")}function qh(o){const{schema:t,document:e}=o.model;for(const n of e.getRoots())if(n.isEmpty&&!t.checkChild(n,"$text")&&t.checkChild(n,"paragraph"))return o.insertElement("paragraph",n),!0;return!1}function Gh(o,t,e){const n=e.createContext(o);return!!e.checkChild(n,"paragraph")&&!!e.checkChild(n.push("paragraph"),t)}function Wh(o,t){const e=t.createElement("paragraph");return t.insert(e,o),t.createPositionAt(e,0)}var _A=Object.defineProperty,CA=Object.defineProperties,vA=Object.getOwnPropertyDescriptors,Kh=Object.getOwnPropertySymbols,yA=Object.prototype.hasOwnProperty,xA=Object.prototype.propertyIsEnumerable,$h=(o,t,e)=>t in o?_A(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class EA extends zh{elementToElement(t){return this.add(Yh(t))}elementToAttribute(t){return this.add(function(e){e=On(e),Zh(e);const n=Qh(e,!1),i=Dc(e.view),r=i?`element:${i}`:"element";return s=>{s.on(r,n,{priority:e.converterPriority||"low"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=On(e);let n=null;(typeof e.view=="string"||e.view.key)&&(n=function(r){typeof r.view=="string"&&(r.view={key:r.view});const s=r.view.key;let a;return s=="class"||s=="style"?a={[s=="class"?"classes":"styles"]:r.view.value}:a={attributes:{[s]:r.view.value===void 0?/[\s\S]*/:r.view.value}},r.view.name&&(a.name=r.view.name),r.view=a,s}(e)),Zh(e,n);const i=Qh(e,!0);return r=>{r.on("element",i,{priority:e.converterPriority||"low"})}}(t))}elementToMarker(t){return this.add(function(e){const n=function(s){return(a,c)=>{const l=typeof s=="string"?s:s(a,c);return c.writer.createElement("$marker",{"data-name":l})}}(e.model);return Yh((i=((s,a)=>{for(var c in a||(a={}))yA.call(a,c)&&$h(s,c,a[c]);if(Kh)for(var c of Kh(a))xA.call(a,c)&&$h(s,c,a[c]);return s})({},e),r={model:n},CA(i,vA(r))));var i,r}(t))}dataToMarker(t){return this.add(function(e){e=On(e),e.model||(e.model=s=>s?e.view+":"+s:e.view);const n={view:e.view,model:e.model},i=Sc(Jh(n,"start")),r=Sc(Jh(n,"end"));return s=>{s.on(`element:${e.view}-start`,i,{priority:e.converterPriority||"normal"}),s.on(`element:${e.view}-end`,r,{priority:e.converterPriority||"normal"});const a=J.low,c=J.highest,l=J.get(e.converterPriority)/c;s.on("element",function(d){return(h,u,g)=>{const m=`data-${d.view}`;function k(_,v){for(const T of v){const O=d.model(T,g),W=g.writer.createElement("$marker",{"data-name":O});g.writer.insert(W,_),u.modelCursor.isEqual(_)?u.modelCursor=u.modelCursor.getShiftedBy(1):u.modelCursor=u.modelCursor._getTransformedByInsertion(_,1),u.modelRange=u.modelRange._getTransformedByInsertion(_,1)[0]}}(g.consumable.test(u.viewItem,{attributes:m+"-end-after"})||g.consumable.test(u.viewItem,{attributes:m+"-start-after"})||g.consumable.test(u.viewItem,{attributes:m+"-end-before"})||g.consumable.test(u.viewItem,{attributes:m+"-start-before"}))&&(u.modelRange||Object.assign(u,g.convertChildren(u.viewItem,u.modelCursor)),g.consumable.consume(u.viewItem,{attributes:m+"-end-after"})&&k(u.modelRange.end,u.viewItem.getAttribute(m+"-end-after").split(",")),g.consumable.consume(u.viewItem,{attributes:m+"-start-after"})&&k(u.modelRange.end,u.viewItem.getAttribute(m+"-start-after").split(",")),g.consumable.consume(u.viewItem,{attributes:m+"-end-before"})&&k(u.modelRange.start,u.viewItem.getAttribute(m+"-end-before").split(",")),g.consumable.consume(u.viewItem,{attributes:m+"-start-before"})&&k(u.modelRange.start,u.viewItem.getAttribute(m+"-start-before").split(",")))}}(n),{priority:a+l})}}(t))}}function Yh(o){const t=Sc(o=On(o)),e=Dc(o.view),n=e?`element:${e}`:"element";return i=>{i.on(n,t,{priority:o.converterPriority||"normal"})}}function Dc(o){return typeof o=="string"?o:typeof o=="object"&&typeof o.name=="string"?o.name:null}function Sc(o){const t=new Be(o.view);return(e,n,i)=>{const r=t.match(n.viewItem);if(!r)return;const s=r.match;if(s.name=!0,!i.consumable.test(n.viewItem,s))return;const a=function(c,l,d){return c instanceof Function?c(l,d):d.writer.createElement(c)}(o.model,n.viewItem,i);a&&i.safeInsert(a,n.modelCursor)&&(i.consumable.consume(n.viewItem,s),i.convertChildren(n.viewItem,a),i.updateConversionResult(a,n))}}function Zh(o,t=null){const e=t===null||(r=>r.getAttribute(t)),n=typeof o.model!="object"?o.model:o.model.key,i=typeof o.model!="object"||o.model.value===void 0?e:o.model.value;o.model={key:n,value:i}}function Qh(o,t){const e=new Be(o.view);return(n,i,r)=>{if(!i.modelRange&&t)return;const s=e.match(i.viewItem);if(!s||(function(d,h){const u=typeof d=="function"?d(h):d;return typeof u=="object"&&!Dc(u)?!1:!u.classes&&!u.attributes&&!u.styles}(o.view,i.viewItem)?s.match.name=!0:delete s.match.name,!r.consumable.test(i.viewItem,s.match)))return;const a=o.model.key,c=typeof o.model.value=="function"?o.model.value(i.viewItem,r):o.model.value;if(c===null)return;i.modelRange||Object.assign(i,r.convertChildren(i.viewItem,i.modelCursor)),function(d,h,u,g){let m=!1;for(const k of Array.from(d.getItems({shallow:u})))g.schema.checkAttribute(k,h.key)&&(m=!0,k.hasAttribute(h.key)||g.writer.setAttribute(h.key,h.value,k));return m}(i.modelRange,{key:a,value:c},t,r)&&(r.consumable.test(i.viewItem,{name:!0})&&(s.match.name=!0),r.consumable.consume(i.viewItem,s.match))}}function Jh(o,t){return{view:`${o.view}-${t}`,model:(e,n)=>{const i=e.getAttribute("name"),r=o.model(i,n);return n.writer.createElement("$marker",{"data-name":r})}}}function DA(o){o.document.registerPostFixer(t=>function(e,n){const i=n.document.selection,r=n.schema,s=[];let a=!1;for(const c of i.getRanges()){const l=Xh(c,r);l&&!l.isEqual(c)?(s.push(l),a=!0):s.push(c)}return a&&e.setSelection(function(c){const l=[...c],d=new Set;let h=1;for(;h<l.length;){const u=l[h],g=l.slice(0,h);for(const[m,k]of g.entries())if(!d.has(m)){if(u.isEqual(k))d.add(m);else if(u.isIntersecting(k)){d.add(m),d.add(h);const _=u.getJoined(k);l.push(_)}}h++}return l.filter((u,g)=>!d.has(g))}(s),{backward:i.isBackward}),!1}(t,o))}function Xh(o,t){return o.isCollapsed?function(e,n){const i=e.start,r=n.getNearestSelectionRange(i);if(!r){const a=i.getAncestors().reverse().find(c=>n.isObject(c));return a?z._createOn(a):null}if(!r.isCollapsed)return r;const s=r.start;return i.isEqual(s)?null:new z(s)}(o,t):function(e,n){const{start:i,end:r}=e,s=n.checkChild(i,"$text"),a=n.checkChild(r,"$text"),c=n.getLimitElement(i),l=n.getLimitElement(r);if(c===l){if(s&&a)return null;if(function(u,g,m){const k=u.nodeAfter&&!m.isLimit(u.nodeAfter)||m.checkChild(u,"$text"),_=g.nodeBefore&&!m.isLimit(g.nodeBefore)||m.checkChild(g,"$text");return k||_}(i,r,n)){const u=i.nodeAfter&&n.isSelectable(i.nodeAfter)?null:n.getNearestSelectionRange(i,"forward"),g=r.nodeBefore&&n.isSelectable(r.nodeBefore)?null:n.getNearestSelectionRange(r,"backward"),m=u?u.start:i,k=g?g.end:r;return new z(m,k)}}const d=c&&!c.is("rootElement"),h=l&&!l.is("rootElement");if(d||h){const u=i.nodeAfter&&r.nodeBefore&&i.nodeAfter.parent===r.nodeBefore.parent,g=d&&(!u||!eu(i.nodeAfter,n)),m=h&&(!u||!eu(r.nodeBefore,n));let k=i,_=r;return g&&(k=F._createBefore(tu(c,n))),m&&(_=F._createAfter(tu(l,n))),new z(k,_)}return null}(o,t)}function tu(o,t){let e=o,n=e;for(;t.isLimit(n)&&n.parent;)e=n,n=n.parent;return e}function eu(o,t){return o&&t.isSelectable(o)}class SA extends ft(){constructor(t,e){super(),this.model=t,this.view=new iA(e),this.mapper=new Dh,this.downcastDispatcher=new Mh({mapper:this.mapper,schema:t.schema});const n=this.model.document,i=n.selection,r=this.model.markers;var s,a,c;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(l=>{this.downcastDispatcher.convertChanges(n.differ,r,l),this.downcastDispatcher.convertSelection(i,r,l)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(l,d){return(h,u)=>{const g=u.newSelection,m=[];for(const _ of g.getRanges())m.push(d.toModelRange(_));const k=l.createSelection(m,{backward:g.isBackward});k.isEqual(l.document.selection)||l.change(_=>{_.setSelection(k)})}}(this.model,this.mapper)),this.listenTo(this.view.document,"beforeinput",(s=this.mapper,a=this.model.schema,c=this.view,(l,d)=>{if(!c.document.isComposing||C.isAndroid)for(let h=0;h<d.targetRanges.length;h++){const u=d.targetRanges[h],g=s.toModelRange(u),m=Xh(g,a);m&&!m.isEqual(g)&&(d.targetRanges[h]=s.toViewRange(m))}}),{priority:"high"}),this.downcastDispatcher.on("insert:$text",(l,d,h)=>{if(!h.consumable.consume(d.item,l.name))return;const u=h.writer,g=h.mapper.toViewPosition(d.range.start),m=u.createText(d.item.data);u.insert(g,m)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(l,d,h)=>{h.convertAttributes(d.item),d.reconversion||!d.item.is("element")||d.item.isEmpty||h.convertChildren(d.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(l,d,h)=>{const u=h.mapper.toViewPosition(d.position),g=d.position.getShiftedBy(d.length),m=h.mapper.toViewPosition(g,{isPhantom:!0}),k=h.writer.createRange(u,m),_=h.writer.remove(k.getTrimmed());for(const v of h.writer.createRangeIn(_).getItems())h.mapper.unbindViewElement(v,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("cleanSelection",(l,d,h)=>{const u=h.writer,g=u.document.selection;for(const m of g.getRanges())m.isCollapsed&&m.end.parent.isAttached()&&h.writer.mergeAttributes(m.start);u.setSelection(null)}),this.downcastDispatcher.on("selection",(l,d,h)=>{const u=d.selection;if(u.isCollapsed||!h.consumable.consume(u,"selection"))return;const g=[];for(const m of u.getRanges())g.push(h.mapper.toViewRange(m));h.writer.setSelection(g,{backward:u.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(l,d,h)=>{const u=d.selection;if(!u.isCollapsed||!h.consumable.consume(u,"selection"))return;const g=h.writer,m=u.getFirstPosition(),k=h.mapper.toViewPosition(m),_=g.breakAttributes(k);g.setSelection(_)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(l=>{if(l.rootName=="$graveyard")return null;const d=new Yd(this.view.document,l.name);return d.rootName=l.rootName,this.mapper.bindElements(l,d),d})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(t){const e=typeof t=="string"?t:t.name,n=this.model.markers.get(e);if(!n)throw new y("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:e});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(t){this.model.change(()=>{this.model.document.differ._refreshItem(t)})}}class tr{constructor(){this._consumables=new Map}add(t,e){let n;t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new IA(t),this._consumables.set(t,n)),n.add(e))}test(t,e){const n=this._consumables.get(t);return n===void 0?null:t.is("$text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){const n=this._consumables.get(t);n!==void 0&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){const e={element:t,name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(const s of n)s!="style"&&s!="class"&&e.attributes.push(s);const i=t.getClassNames();for(const s of i)e.classes.push(s);const r=t.getStyleNames();for(const s of r)e.styles.push(s);return e}static createFrom(t,e){if(e||(e=new tr),t.is("$text"))return e.add(t),e;t.is("element")&&e.add(t,tr.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(const n of t.getChildren())e=tr.createFrom(n,e);return e}}const vs=["attributes","classes","styles"];class IA{constructor(t){this.element=t,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(const e of vs)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(const e of vs)if(e in t){const n=this._test(e,t[e]);if(n!==!0)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(const e of vs)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(const e of vs)e in t&&this._revert(e,t[e])}_add(t,e){const n=Qt(e)?e:[e],i=this._consumables[t];for(const r of n){if(t==="attributes"&&(r==="class"||r==="style"))throw new y("viewconsumable-invalid-attribute",this);if(i.set(r,!0),t==="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))i.set(s,!0)}}_test(t,e){const n=Qt(e)?e:[e],i=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){const s=i.get(r);if(s===void 0)return null;if(!s)return!1}else{const s=r=="class"?"classes":"styles",a=this._test(s,[...this._consumables[s].keys()]);if(a!==!0)return a}return!0}_consume(t,e){const n=Qt(e)?e:[e],i=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){if(i.set(r,!1),t=="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))i.set(s,!1)}else{const s=r=="class"?"classes":"styles";this._consume(s,[...this._consumables[s].keys()])}}_revert(t,e){const n=Qt(e)?e:[e],i=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style")i.get(r)===!1&&i.set(r,!0);else{const s=r=="class"?"classes":"styles";this._revert(s,[...this._consumables[s].keys()])}}}class TA extends ft(){constructor(){super(),this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new so(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new so(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new y("schema-cannot-register-item-twice",this,{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new y("schema-cannot-extend-missing-item",this,{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e=typeof t=="string"?t:"is"in t&&(t.is("$text")||t.is("$textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){const e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){const e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){const e=this.getDefinition(t);return!!e&&!!(e.isObject||e.isLimit&&e.isSelectable&&e.isContent)}isInline(t){const e=this.getDefinition(t);return!(!e||!e.isInline)}isSelectable(t){const e=this.getDefinition(t);return!!e&&!(!e.isSelectable&&!e.isObject)}isContent(t){const e=this.getDefinition(t);return!!e&&!(!e.isContent&&!e.isObject)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){const n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e){if(t instanceof F){const n=t.nodeBefore,i=t.nodeAfter;if(!(n instanceof wt))throw new y("schema-check-merge-no-element-before",this);if(!(i instanceof wt))throw new y("schema-check-merge-no-element-after",this);return this.checkMerge(n,i)}for(const n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,i])=>{if(!i)return;const r=t(n,i);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,i])=>{const r=t(n,i);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}setAttributeProperties(t,e){this._attributeProperties[t]=Object.assign(this.getAttributeProperties(t),e)}getAttributeProperties(t){return this._attributeProperties[t]||{}}getLimitElement(t){let e;for(t instanceof F?e=t.parent:e=(t instanceof z?[t]:Array.from(t.getRanges())).reduce((n,i)=>{const r=i.getCommonAncestor();return n?n.getCommonAncestor(r,{includeSelf:!0}):r},null);!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){const n=[...t.getFirstPosition().getAncestors(),new vt("",t.getAttributes())];return this.checkAttribute(n,e)}{const n=t.getRanges();for(const i of n)for(const r of i)if(this.checkAttribute(r.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(n){for(const i of n)yield*i.getMinimalFlatRanges()}(t);for(const n of t)yield*this._getValidRangesForRange(n,e)}getNearestSelectionRange(t,e="both"){if(t.root.rootName=="$graveyard")return null;if(this.checkChild(t,"$text"))return new z(t);let n,i;const r=t.getAncestors().reverse().find(s=>this.isLimit(s))||t.root;e!="both"&&e!="backward"||(n=new Xe({boundaries:z._createIn(r),startPosition:t,direction:"backward"})),e!="both"&&e!="forward"||(i=new Xe({boundaries:z._createIn(r),startPosition:t}));for(const s of function*(a,c){let l=!1;for(;!l;){if(l=!0,a){const d=a.next();d.done||(l=!1,yield{walker:a,value:d.value})}if(c){const d=c.next();d.done||(l=!1,yield{walker:c,value:d.value})}}}(n,i)){const a=s.walker==n?"elementEnd":"elementStart",c=s.value;if(c.type==a&&this.isObject(c.item))return z._createOn(c.item);if(this.checkChild(c.nextPosition,"$text"))return new z(c.nextPosition)}return null}findAllowedParent(t,e){let n=t.parent;for(;n;){if(this.checkChild(n,e))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(t,e,n){const i=n.model;for(const[r,s]of Object.entries(e))i.schema.checkAttribute(t,r)&&n.setAttribute(r,s,t)}removeDisallowedAttributes(t,e){for(const n of t)if(n.is("$text"))nu(this,n,e);else{const i=z._createIn(n).getPositions();for(const r of i)nu(this,r.nodeBefore||r.parent,e)}}getAttributesWithProperty(t,e,n){const i={};for(const[r,s]of t.getAttributes()){const a=this.getAttributeProperties(r);a[e]!==void 0&&(n!==void 0&&n!==a[e]||(i[r]=s))}return i}createContext(t){return new so(t)}_clearCache(){this._compiledDefinitions=null}_compile(){const t={},e=this._sourceDefinitions,n=Object.keys(e);for(const i of n)t[i]=MA(e[i],i);for(const i of n)BA(t,i);for(const i of n)NA(t,i);for(const i of n)PA(t,i);for(const i of n)zA(t,i),OA(t,i);for(const i of n)LA(t,i),jA(t,i),RA(t,i);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){const i=e.getItem(n);if(t.allowIn.includes(i.name)){if(n==0)return!0;{const r=this.getDefinition(i);return this._checkContextMatch(r,e,n-1)}}return!1}*_getValidRangesForRange(t,e){let n=t.start,i=t.start;for(const r of t.getItems({shallow:!0}))r.is("element")&&(yield*this._getValidRangesForRange(z._createIn(r),e)),this.checkAttribute(r,e)||(n.isEqual(i)||(yield new z(n,i)),n=F._createAfter(r)),i=F._createAfter(r);n.isEqual(i)||(yield new z(n,i))}}class so{constructor(t){if(t instanceof so)return t;let e;e=typeof t=="string"?[t]:Array.isArray(t)?t:t.getAncestors({includeSelf:!0}),this._items=e.map(VA)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){const e=new so([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*this._items.map(t=>t.name)}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}startsWith(t){return Array.from(this.getNames()).join(" ").startsWith(t)}}function MA(o,t){const e={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,i){for(const r of n){const s=Object.keys(r).filter(a=>a.startsWith("is"));for(const a of s)i[a]=!!r[a]}}(o,e),ao(o,e,"allowIn"),ao(o,e,"allowContentOf"),ao(o,e,"allowWhere"),ao(o,e,"allowAttributes"),ao(o,e,"allowAttributesOf"),ao(o,e,"allowChildren"),ao(o,e,"inheritTypesFrom"),function(n,i){for(const r of n){const s=r.inheritAllFrom;s&&(i.allowContentOf.push(s),i.allowWhere.push(s),i.allowAttributesOf.push(s),i.inheritTypesFrom.push(s))}}(o,e),e}function BA(o,t){const e=o[t];for(const n of e.allowChildren){const i=o[n];i&&i.allowIn.push(t)}e.allowChildren.length=0}function NA(o,t){for(const e of o[t].allowContentOf)o[e]&&FA(o,e).forEach(n=>{n.allowIn.push(t)});delete o[t].allowContentOf}function PA(o,t){for(const e of o[t].allowWhere){const n=o[e];if(n){const i=n.allowIn;o[t].allowIn.push(...i)}}delete o[t].allowWhere}function zA(o,t){for(const e of o[t].allowAttributesOf){const n=o[e];if(n){const i=n.allowAttributes;o[t].allowAttributes.push(...i)}}delete o[t].allowAttributesOf}function OA(o,t){const e=o[t];for(const n of e.inheritTypesFrom){const i=o[n];if(i){const r=Object.keys(i).filter(s=>s.startsWith("is"));for(const s of r)s in e||(e[s]=i[s])}}delete e.inheritTypesFrom}function LA(o,t){const e=o[t],n=e.allowIn.filter(i=>o[i]);e.allowIn=Array.from(new Set(n))}function jA(o,t){const e=o[t];for(const n of e.allowIn)o[n].allowChildren.push(t)}function RA(o,t){const e=o[t];e.allowAttributes=Array.from(new Set(e.allowAttributes))}function ao(o,t,e){for(const n of o){const i=n[e];typeof i=="string"?t[e].push(i):Array.isArray(i)&&t[e].push(...i)}}function FA(o,t){const e=o[t];return(n=o,Object.keys(n).map(i=>n[i])).filter(i=>i.allowIn.includes(e.name));var n}function VA(o){return typeof o=="string"||o.is("documentFragment")?{name:typeof o=="string"?o:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:o.is("element")?o.name:"$text",*getAttributeKeys(){yield*o.getAttributeKeys()},getAttribute:t=>o.getAttribute(t)}}function nu(o,t,e){for(const n of t.getAttributeKeys())o.checkAttribute(t,n)||e.removeAttribute(n,t)}var UA=Object.defineProperty,HA=Object.defineProperties,qA=Object.getOwnPropertyDescriptors,ou=Object.getOwnPropertySymbols,GA=Object.prototype.hasOwnProperty,WA=Object.prototype.propertyIsEnumerable,iu=(o,t,e)=>t in o?UA(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class KA extends it(){constructor(t){var e;super(),this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi=(e=((n,i)=>{for(var r in i||(i={}))GA.call(i,r)&&iu(n,r,i[r]);if(ou)for(var r of ou(i))WA.call(i,r)&&iu(n,r,i[r]);return n})({},t),HA(e,qA({consumable:null,writer:null,store:null,convertItem:(n,i)=>this._convertItem(n,i),convertChildren:(n,i)=>this._convertChildren(n,i),safeInsert:(n,i)=>this._safeInsert(n,i),updateConversionResult:(n,i)=>this._updateConversionResult(n,i),splitToAllowedParent:(n,i)=>this._splitToAllowedParent(n,i),getSplitParts:n=>this._getSplitParts(n),keepEmptyElement:n=>this._keepEmptyElement(n)})))}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(s,a){let c;for(const l of new so(s)){const d={};for(const u of l.getAttributeKeys())d[u]=l.getAttribute(u);const h=a.createElement(l.name,d);c&&a.insert(h,c),c=F._createAt(h,0)}return c}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=tr.createFrom(t),this.conversionApi.store={};const{modelRange:i}=this._convertItem(t,this._modelCursor),r=e.createDocumentFragment();if(i){this._removeEmptyElements();for(const s of Array.from(this._modelCursor.parent.getChildren()))e.append(s,r);r.markers=function(s,a){const c=new Set,l=new Map,d=z._createIn(s).getItems();for(const h of d)h.is("element","$marker")&&c.add(h);for(const h of c){const u=h.getAttribute("data-name"),g=a.createPositionBefore(h);l.has(u)?l.get(u).end=g.clone():l.set(u,new z(g.clone())),a.remove(h)}return l}(r,e)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,r}_convertItem(t,e){const n={viewItem:t,modelCursor:e,modelRange:null};if(t.is("element")?this.fire(`element:${t.name}`,n,this.conversionApi):t.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof z))throw new y("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){let n=e.is("position")?e:F._createAt(e,0);const i=new z(n);for(const r of Array.from(t.getChildren())){const s=this._convertItem(r,n);s.modelRange instanceof z&&(i.end=s.modelRange.end,n=s.modelCursor)}return{modelRange:i,modelCursor:n}}_safeInsert(t,e){const n=this._splitToAllowedParent(t,e);return!!n&&(this.conversionApi.writer.insert(t,n.position),!0)}_updateConversionResult(t,e){const n=this._getSplitParts(t),i=this.conversionApi.writer;e.modelRange||(e.modelRange=i.createRange(i.createPositionBefore(t),i.createPositionAfter(n[n.length-1])));const r=this._cursorParents.get(t);e.modelCursor=r?i.createPositionAt(r,0):e.modelRange.end}_splitToAllowedParent(t,e){const{schema:n,writer:i}=this.conversionApi;let r=n.findAllowedParent(e,t);if(r){if(r===e.parent)return{position:e};this._modelCursor.parent.getAncestors().includes(r)&&(r=null)}if(!r)return Gh(e,t,n)?{position:Wh(e,i)}:null;const s=this.conversionApi.writer.split(e,r),a=[];for(const l of s.range.getWalker())if(l.type=="elementEnd")a.push(l.item);else{const d=a.pop(),h=l.item;this._registerSplitPair(d,h)}const c=s.range.end.parent;return this._cursorParents.set(t,c),{position:s.position,cursorParent:c}}_registerSplitPair(t,e){this._splitParts.has(t)||this._splitParts.set(t,[t]);const n=this._splitParts.get(t);this._splitParts.set(e,n),n.push(e)}_getSplitParts(t){let e;return e=this._splitParts.has(t)?this._splitParts.get(t):[t],e}_keepEmptyElement(t){this._emptyElementsToKeep.add(t)}_removeEmptyElements(){let t=!1;for(const e of this._splitParts.keys())e.isEmpty&&!this._emptyElementsToKeep.has(e)&&(this.conversionApi.writer.remove(e),this._splitParts.delete(e),t=!0);t&&this._removeEmptyElements()}}class $A{getHtml(t){const e=document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class YA{constructor(t){this.skipComments=!0,this.domParser=new DOMParser,this.domConverter=new ks(t,{renderingMode:"data"}),this.htmlWriter=new $A}toData(t){const e=this.domConverter.viewToDom(t);return this.htmlWriter.getHtml(e)}toView(t){const e=this._toDom(t);return this.domConverter.domToView(e,{skipComments:this.skipComments})}registerRawContentMatcher(t){this.domConverter.registerRawContentMatcher(t)}useFillerType(t){this.domConverter.blockFillerMode=t=="marked"?"markedNbsp":"nbsp"}_toDom(t){t.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(t=`<body>${t}</body>`);const e=this.domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),i=e.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return n}}class ZA extends it(){constructor(t,e){super(),this.model=t,this.mapper=new Dh,this.downcastDispatcher=new Mh({mapper:this.mapper,schema:t.schema}),this.downcastDispatcher.on("insert:$text",(n,i,r)=>{if(!r.consumable.consume(i.item,n.name))return;const s=r.writer,a=r.mapper.toViewPosition(i.range.start),c=s.createText(i.item.data);s.insert(a,c)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,i,r)=>{r.convertAttributes(i.item),i.reconversion||!i.item.is("element")||i.item.isEmpty||r.convertChildren(i.item)},{priority:"lowest"}),this.upcastDispatcher=new KA({schema:t.schema}),this.viewDocument=new ps(e),this.stylesProcessor=e,this.htmlProcessor=new YA(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Qd(this.viewDocument),this.upcastDispatcher.on("text",(n,i,{schema:r,consumable:s,writer:a})=>{let c=i.modelCursor;if(!s.test(i.viewItem))return;if(!r.checkChild(c,"$text")){if(!Gh(c,"$text",r)||i.viewItem.data.trim().length==0)return;const d=c.nodeBefore;c=Wh(c,a),d&&d.is("element","$marker")&&(a.move(a.createRangeOn(d),c),c=a.createPositionAfter(d))}s.consume(i.viewItem);const l=a.createText(i.viewItem.data);a.insert(l,c),i.modelRange=a.createRange(c,c.getShiftedBy(l.offsetSize)),i.modelCursor=i.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,i,r)=>{if(!i.modelRange&&r.consumable.consume(i.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(i.viewItem,i.modelCursor);i.modelRange=s,i.modelCursor=a}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,i,r)=>{if(!i.modelRange&&r.consumable.consume(i.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(i.viewItem,i.modelCursor);i.modelRange=s,i.modelCursor=a}},{priority:"lowest"}),ft().prototype.decorate.call(this,"init"),ft().prototype.decorate.call(this,"set"),ft().prototype.decorate.call(this,"get"),ft().prototype.decorate.call(this,"toView"),ft().prototype.decorate.call(this,"toModel"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},qh)},{priority:"lowest"})}get(t={}){const{rootName:e="main",trim:n="empty"}=t;if(!this._checkIfRootsExists([e]))throw new y("datacontroller-get-non-existent-root",this);const i=this.model.document.getRoot(e);return i.isAttached()||G("datacontroller-get-detached-root",this),n!=="empty"||this.model.hasContent(i,{ignoreWhitespaces:!0})?this.stringify(i,t):""}stringify(t,e={}){const n=this.toView(t,e);return this.processor.toData(n)}toView(t,e={}){const n=this.viewDocument,i=this._viewWriter;this.mapper.clearBindings();const r=z._createIn(t),s=new oo(n);this.mapper.bindElements(t,s);const a=t.is("documentFragment")?t.markers:function(c){const l=[],d=c.root.document;if(!d)return new Map;const h=z._createIn(c);for(const u of d.model.markers){const g=u.getRange(),m=g.isCollapsed,k=g.start.isEqual(h.start)||g.end.isEqual(h.end);if(m&&k)l.push([u.name,g]);else{const _=h.getIntersection(g);_&&l.push([u.name,_])}}return l.sort(([u,g],[m,k])=>{if(g.end.compareWith(k.start)!=="after")return 1;if(g.start.compareWith(k.end)!=="before")return-1;switch(g.start.compareWith(k.start)){case"before":return 1;case"after":return-1;default:switch(g.end.compareWith(k.end)){case"before":return 1;case"after":return-1;default:return m.localeCompare(u)}}}),new Map(l)}(t);return this.downcastDispatcher.convert(r,a,i,e),s}init(t){if(this.model.document.version)throw new y("datacontroller-init-document-not-empty",this);let e={};if(typeof t=="string"?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new y("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const i of Object.keys(e)){const r=this.model.document.getRoot(i);n.insert(this.parse(e[i],r),r,0)}}),Promise.resolve()}set(t,e={}){let n={};if(typeof t=="string"?n.main=t:n=t,!this._checkIfRootsExists(Object.keys(n)))throw new y("datacontroller-set-non-existent-root",this);this.model.enqueueChange(e.batchType||{},i=>{i.setSelection(null),i.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const r of Object.keys(n)){const s=this.model.document.getRoot(r);i.remove(i.createRangeIn(s)),i.insert(this.parse(n[r],s),s,0)}})}parse(t,e="$root"){const n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}addStyleProcessorRules(t){t(this.stylesProcessor)}registerRawContentMatcher(t){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(t),this.htmlProcessor.registerRawContentMatcher(t)}destroy(){this.stopListening()}_checkIfRootsExists(t){for(const e of t)if(!this.model.document.getRoot(e))return!1;return!0}}class QA{constructor(t,e){this._helpers=new Map,this._downcast=$t(t),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=$t(e),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(t,e){const n=this._downcast.includes(e);if(!this._upcast.includes(e)&&!n)throw new y("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:t,dispatchers:[e],isDowncast:n})}for(t){if(!this._helpers.has(t))throw new y("conversion-for-unknown-group",this);return this._helpers.get(t)}elementToElement(t){this.for("downcast").elementToElement(t);for(const{model:e,view:n}of Ic(t))this.for("upcast").elementToElement({model:e,view:n,converterPriority:t.converterPriority})}attributeToElement(t){this.for("downcast").attributeToElement(t);for(const{model:e,view:n}of Ic(t))this.for("upcast").elementToAttribute({view:n,model:e,converterPriority:t.converterPriority})}attributeToAttribute(t){this.for("downcast").attributeToAttribute(t);for(const{model:e,view:n}of Ic(t))this.for("upcast").attributeToAttribute({view:n,model:e})}_createConversionHelpers({name:t,dispatchers:e,isDowncast:n}){if(this._helpers.has(t))throw new y("conversion-group-exists",this);const i=n?new bA(e):new EA(e);this._helpers.set(t,i)}}function*Ic(o){if(o.model.values)for(const t of o.model.values){const e={key:o.model.key,value:t},n=o.view[t],i=o.upcastAlso?o.upcastAlso[t]:void 0;yield*ru(e,n,i)}else yield*ru(o.model,o.view,o.upcastAlso)}function*ru(o,t,e){if(yield{model:o,view:t},e)for(const n of $t(e))yield{model:o,view:n}}class be{constructor(t){this.baseVersion=t,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t,e){return new this(t.baseVersion)}}function Tc(o,t){const e=au(t),n=e.reduce((s,a)=>s+a.offsetSize,0),i=o.parent;or(o);const r=o.index;return i._insertChild(r,e),nr(i,r+e.length),nr(i,r),new z(o,o.getShiftedBy(n))}function su(o){if(!o.isFlat)throw new y("operation-utils-remove-range-not-flat",this);const t=o.start.parent;or(o.start),or(o.end);const e=t._removeChildren(o.start.index,o.end.index-o.start.index);return nr(t,o.start.index),e}function er(o,t){if(!o.isFlat)throw new y("operation-utils-move-range-not-flat",this);const e=su(o);return Tc(t=t._getTransformedByDeletion(o.start,o.end.offset-o.start.offset),e)}function au(o){const t=[];(function e(n){if(typeof n=="string")t.push(new vt(n));else if(n instanceof ze)t.push(new vt(n.data,n.getAttributes()));else if(n instanceof io)t.push(n);else if(re(n))for(const i of n)e(i)})(o);for(let e=1;e<t.length;e++){const n=t[e],i=t[e-1];n instanceof vt&&i instanceof vt&&cu(n,i)&&(t.splice(e-1,2,new vt(i.data+n.data,i.getAttributes())),e--)}return t}function nr(o,t){const e=o.getChild(t-1),n=o.getChild(t);if(e&&n&&e.is("$text")&&n.is("$text")&&cu(e,n)){const i=new vt(e.data+n.data,e.getAttributes());o._removeChildren(t-1,2),o._insertChild(t-1,i)}}function or(o){const t=o.textNode,e=o.parent;if(t){const n=o.offset-t.startOffset,i=t.index;e._removeChildren(i,1);const r=new vt(t.data.substr(0,n),t.getAttributes()),s=new vt(t.data.substr(n),t.getAttributes());e._insertChild(i,[r,s])}}function cu(o,t){const e=o.getAttributes(),n=t.getAttributes();for(const i of e){if(i[1]!==t.getAttribute(i[0]))return!1;n.next()}return n.next().done}class gt extends be{constructor(t,e,n,i){super(i),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}get affectedSelectable(){return[z._createFromPositionAndShift(this.sourcePosition,this.howMany),z._createFromPositionAndShift(this.targetPosition,0)]}clone(){return new gt(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new gt(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,i=this.targetPosition.offset;if(n+this.howMany>t.maxOffset)throw new y("move-operation-nodes-do-not-exist",this);if(t===e&&n<i&&i<n+this.howMany)throw new y("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&Zt(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const r=this.sourcePosition.path.length-1;if(this.targetPosition.path[r]>=n&&this.targetPosition.path[r]<n+this.howMany)throw new y("move-operation-node-into-itself",this)}}_execute(){er(z._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){const n=F.fromJSON(t.sourcePosition,e),i=F.fromJSON(t.targetPosition,e);return new this(n,t.howMany,i,t.baseVersion)}}class Yt extends be{constructor(t,e,n){super(n),this.position=t.clone(),this.position.stickiness="toNone",this.nodes=new Zi(au(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}get affectedSelectable(){return this.position.clone()}clone(){const t=new Zi([...this.nodes].map(n=>n._clone(!0))),e=new Yt(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){const t=this.position.root.document.graveyard,e=new F(t,[0]);return new gt(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){const t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new y("insert-operation-position-invalid",this)}_execute(){const t=this.nodes;this.nodes=new Zi([...t].map(e=>e._clone(!0))),Tc(this.position,t)}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){const n=[];for(const r of t.nodes)r.name?n.push(wt.fromJSON(r)):n.push(vt.fromJSON(r));const i=new Yt(F.fromJSON(t.position,e),n,t.baseVersion);return i.shouldReceiveAttributes=t.shouldReceiveAttributes,i}}class yt extends be{constructor(t,e,n,i,r){super(r),this.splitPosition=t.clone(),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=n,this.graveyardPosition=i?i.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const t=this.insertionPosition.path.slice();return t.push(0),new F(this.insertionPosition.root,t)}get movedRange(){const t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new z(this.splitPosition,t)}get affectedSelectable(){const t=[z._createFromPositionAndShift(this.splitPosition,0),z._createFromPositionAndShift(this.insertionPosition,0)];return this.graveyardPosition&&t.push(z._createFromPositionAndShift(this.graveyardPosition,0)),t}clone(){return new yt(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.splitPosition.root.document.graveyard,e=new F(t,[0]);return new zt(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){const t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new y("split-operation-position-invalid",this);if(!t.parent)throw new y("split-operation-split-in-root",this);if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new y("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new y("split-operation-graveyard-position-invalid",this)}_execute(){const t=this.splitPosition.parent;if(this.graveyardPosition)er(z._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const e=t._clone();Tc(this.insertionPosition,e)}er(new z(F._createAt(t,this.splitPosition.offset),F._createAt(t,t.maxOffset)),this.moveTargetPosition)}toJSON(){const t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){const e=t.path.slice(0,-1);return e[e.length-1]++,new F(t.root,e,"toPrevious")}static fromJSON(t,e){const n=F.fromJSON(t.splitPosition,e),i=F.fromJSON(t.insertionPosition,e),r=t.graveyardPosition?F.fromJSON(t.graveyardPosition,e):null;return new this(n,t.howMany,i,r,t.baseVersion)}}class zt extends be{constructor(t,e,n,i,r){super(r),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=i.clone()}get type(){return"merge"}get deletionPosition(){return new F(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new z(this.sourcePosition,t)}get affectedSelectable(){const t=this.sourcePosition.parent;return[z._createOn(t),z._createFromPositionAndShift(this.targetPosition,0),z._createFromPositionAndShift(this.graveyardPosition,0)]}clone(){return new zt(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),n=new F(this.sourcePosition.root,e)._getTransformedByMergeOperation(this);return new yt(t,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!t.parent)throw new y("merge-operation-source-position-invalid",this);if(!e.parent)throw new y("merge-operation-target-position-invalid",this);if(this.howMany!=t.maxOffset)throw new y("merge-operation-how-many-invalid",this)}_execute(){const t=this.sourcePosition.parent;er(z._createIn(t),this.targetPosition),er(z._createOn(t),this.graveyardPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){const n=F.fromJSON(t.sourcePosition,e),i=F.fromJSON(t.targetPosition,e),r=F.fromJSON(t.graveyardPosition,e);return new this(n,t.howMany,i,r,t.baseVersion)}}class le extends be{constructor(t,e,n,i,r,s){super(s),this.name=t,this.oldRange=e?e.clone():null,this.newRange=n?n.clone():null,this.affectsData=r,this._markers=i}get type(){return"marker"}get affectedSelectable(){const t=[];return this.oldRange&&t.push(this.oldRange.clone()),this.newRange&&(this.oldRange?t.push(...this.newRange.getDifference(this.oldRange)):t.push(this.newRange.clone())),t}clone(){return new le(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new le(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){this.newRange?this._markers._set(this.name,this.newRange,!0,this.affectsData):this._markers._remove(this.name)}toJSON(){const t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new le(t.name,t.oldRange?z.fromJSON(t.oldRange,e):null,t.newRange?z.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}const lu=function(o,t){return Ah(o,t)};class Vt extends be{constructor(t,e,n,i,r){super(r),this.range=t.clone(),this.key=e,this.oldValue=n===void 0?null:n,this.newValue=i===void 0?null:i}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}get affectedSelectable(){return this.range.clone()}clone(){return new Vt(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Vt(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new y("attribute-operation-range-not-flat",this);for(const t of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!lu(t.getAttribute(this.key),this.oldValue))throw new y("attribute-operation-wrong-old-value",this,{item:t,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&t.hasAttribute(this.key))throw new y("attribute-operation-attribute-exists",this,{node:t,key:this.key})}}_execute(){lu(this.oldValue,this.newValue)||function(t,e,n){or(t.start),or(t.end);for(const i of t.getItems({shallow:!0})){const r=i.is("$textProxy")?i.textNode:i;n!==null?r._setAttribute(e,n):r._removeAttribute(e),nr(r.parent,r.index)}nr(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new Vt(z.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class Wt extends be{get type(){return"noop"}get affectedSelectable(){return null}clone(){return new Wt(this.baseVersion)}getReversed(){return new Wt(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}class de extends be{constructor(t,e,n,i){super(i),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=n}get type(){return"rename"}get affectedSelectable(){return this.position.nodeAfter}clone(){return new de(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new de(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const t=this.position.nodeAfter;if(!(t instanceof wt))throw new y("rename-operation-wrong-position",this);if(t.name!==this.oldName)throw new y("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new de(F.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class mn extends be{constructor(t,e,n,i,r){super(r),this.root=t,this.key=e,this.oldValue=n===void 0?null:n,this.newValue=i===void 0?null:i}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}get affectedSelectable(){return this.root}clone(){return new mn(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new mn(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new y("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new y("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new y("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new y("rootattribute-operation-fromjson-no-root",this,{rootName:t.root});return new mn(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class tn extends be{constructor(t,e,n,i,r){super(r),this.rootName=t,this.elementName=e,this.isAdd=n,this._document=i,!this._document.getRoot(this.rootName)&&(this._document.createRoot(this.elementName,this.rootName)._isAttached=!1)}get type(){return this.isAdd?"addRoot":"detachRoot"}get affectedSelectable(){return this._document.getRoot(this.rootName)}clone(){return new tn(this.rootName,this.elementName,this.isAdd,this._document,this.baseVersion)}getReversed(){return new tn(this.rootName,this.elementName,!this.isAdd,this._document,this.baseVersion+1)}_execute(){this._document.getRoot(this.rootName)._isAttached=this.isAdd}toJSON(){const t=super.toJSON();return delete t._document,t}static get className(){return"RootOperation"}static fromJSON(t,e){return new tn(t.rootName,t.elementName,t.isAdd,e,t.baseVersion)}}const ye={};ye[Vt.className]=Vt,ye[Yt.className]=Yt,ye[le.className]=le,ye[gt.className]=gt,ye[Wt.className]=Wt,ye[be.className]=be,ye[de.className]=de,ye[mn.className]=mn,ye[tn.className]=tn,ye[yt.className]=yt,ye[zt.className]=zt;class JA{static fromJSON(t,e){return ye[t.__className].fromJSON(t,e)}}const Mc=new Map;function dt(o,t,e){let n=Mc.get(o);n||(n=new Map,Mc.set(o,n)),n.set(t,e)}function XA(o){return[o]}function du(o,t,e={}){const n=function(i,r){const s=Mc.get(i);return s&&s.has(r)?s.get(r):XA}(o.constructor,t.constructor);try{return n(o=o.clone(),t,e)}catch(i){throw i}}function t0(o,t,e){o=o.slice(),t=t.slice();const n=new e0(e.document,e.useRelations,e.forceWeakRemove);n.setOriginalOperations(o),n.setOriginalOperations(t);const i=n.originalOperations;if(o.length==0||t.length==0)return{operationsA:o,operationsB:t,originalOperations:i};const r=new WeakMap;for(const c of o)r.set(c,0);const s={nextBaseVersionA:o[o.length-1].baseVersion+1,nextBaseVersionB:t[t.length-1].baseVersion+1,originalOperationsACount:o.length,originalOperationsBCount:t.length};let a=0;for(;a<o.length;){const c=o[a],l=r.get(c);if(l==t.length){a++;continue}const d=t[l],h=du(c,d,n.getContext(c,d,!0)),u=du(d,c,n.getContext(d,c,!1));n.updateRelation(c,d),n.setOriginalOperations(h,c),n.setOriginalOperations(u,d);for(const g of h)r.set(g,l+u.length);o.splice(a,1,...h),t.splice(l,1,...u)}if(e.padWithNoOps){const c=o.length-s.originalOperationsACount,l=t.length-s.originalOperationsBCount;uu(o,l-c),uu(t,c-l)}return hu(o,s.nextBaseVersionB),hu(t,s.nextBaseVersionA),{operationsA:o,operationsB:t,originalOperations:i}}class e0{constructor(t,e,n=!1){this.originalOperations=new Map,this._history=t.history,this._useRelations=e,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(t,e=null){const n=e?this.originalOperations.get(e):null;for(const i of t)this.originalOperations.set(i,n||i)}updateRelation(t,e){if(t instanceof gt)e instanceof zt?t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)?this._setRelation(t,e,"insertBetween"):t.targetPosition.isAfter(e.sourcePosition)&&this._setRelation(t,e,"moveTargetAfter"):e instanceof gt&&(t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter"));else if(t instanceof yt){if(e instanceof zt)t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");else if(e instanceof gt)if(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))this._setRelation(t,e,"splitBefore");else{const n=z._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(t.splitPosition)){const i=n.end.offset-t.splitPosition.offset,r=t.splitPosition.offset-n.start.offset;this._setRelation(t,e,{howMany:i,offset:r})}}}else if(t instanceof zt)e instanceof zt?(t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.targetPosition)&&this._setRelation(t,e,"mergeSourceNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement")):e instanceof yt&&t.sourcePosition.isEqual(e.splitPosition)&&this._setRelation(t,e,"splitAtSource");else if(t instanceof le){const n=t.newRange;if(!n)return;if(e instanceof gt){const i=z._createFromPositionAndShift(e.sourcePosition,e.howMany),r=i.containsPosition(n.start)||i.start.isEqual(n.start),s=i.containsPosition(n.end)||i.end.isEqual(n.end);!r&&!s||i.containsRange(n)||this._setRelation(t,e,{side:r?"left":"right",path:r?n.start.path.slice():n.end.path.slice()})}else if(e instanceof zt){const i=n.start.isEqual(e.targetPosition),r=n.start.isEqual(e.deletionPosition),s=n.end.isEqual(e.deletionPosition),a=n.end.isEqual(e.sourcePosition);(i||r||s||a)&&this._setRelation(t,e,{wasInLeftElement:i,wasStartBeforeMergedElement:r,wasEndBeforeMergedElement:s,wasInRightElement:a})}}}getContext(t,e,n){return{aIsStrong:n,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(t){const e=this.originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){const n=this.originalOperations.get(e),i=this._history.getUndoneOperation(n);if(!i)return null;const r=this.originalOperations.get(t),s=this._relations.get(r);return s&&s.get(i)||null}_setRelation(t,e,n){const i=this.originalOperations.get(t),r=this.originalOperations.get(e);let s=this._relations.get(i);s||(s=new Map,this._relations.set(i,s)),s.set(r,n)}}function hu(o,t){for(const e of o)e.baseVersion=t++}function uu(o,t){for(let e=0;e<t;e++)o.push(new Wt(0))}function gu(o,t,e){const n=o.nodes.getNode(0).getAttribute(t);if(n==e)return null;const i=new z(o.position,o.position.getShiftedBy(o.howMany));return new Vt(i,t,n,e,0)}function pu(o,t){return o.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)===null}function qo(o,t){const e=[];for(let n=0;n<o.length;n++){const i=o[n],r=new gt(i.start,i.end.offset-i.start.offset,t,0);e.push(r);for(let s=n+1;s<o.length;s++)o[s]=o[s]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];t=t._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return e}dt(Vt,Vt,(o,t,e)=>{if(o.key===t.key&&o.range.start.hasSameParentAs(t.range.start)){const n=o.range.getDifference(t.range).map(r=>new Vt(r,o.key,o.oldValue,o.newValue,0)),i=o.range.getIntersection(t.range);return i&&e.aIsStrong&&n.push(new Vt(i,t.key,t.newValue,o.newValue,0)),n.length==0?[new Wt(0)]:n}return[o]}),dt(Vt,Yt,(o,t)=>{if(o.range.start.hasSameParentAs(t.position)&&o.range.containsPosition(t.position)){const e=o.range._getTransformedByInsertion(t.position,t.howMany,!t.shouldReceiveAttributes).map(n=>new Vt(n,o.key,o.oldValue,o.newValue,o.baseVersion));if(t.shouldReceiveAttributes){const n=gu(t,o.key,o.oldValue);n&&e.unshift(n)}return e}return o.range=o.range._getTransformedByInsertion(t.position,t.howMany,!1)[0],[o]}),dt(Vt,zt,(o,t)=>{const e=[];o.range.start.hasSameParentAs(t.deletionPosition)&&(o.range.containsPosition(t.deletionPosition)||o.range.start.isEqual(t.deletionPosition))&&e.push(z._createFromPositionAndShift(t.graveyardPosition,1));const n=o.range._getTransformedByMergeOperation(t);return n.isCollapsed||e.push(n),e.map(i=>new Vt(i,o.key,o.oldValue,o.newValue,o.baseVersion))}),dt(Vt,gt,(o,t)=>function(n,i){const r=z._createFromPositionAndShift(i.sourcePosition,i.howMany);let s=null,a=[];r.containsRange(n,!0)?s=n:n.start.hasSameParentAs(r.start)?(a=n.getDifference(r),s=n.getIntersection(r)):a=[n];const c=[];for(let l of a){l=l._getTransformedByDeletion(i.sourcePosition,i.howMany);const d=i.getMovedRangeStart(),h=l.start.hasSameParentAs(d),u=l._getTransformedByInsertion(d,i.howMany,h);c.push(...u)}return s&&c.push(s._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany,!1)[0]),c}(o.range,t).map(n=>new Vt(n,o.key,o.oldValue,o.newValue,o.baseVersion))),dt(Vt,yt,(o,t)=>{if(o.range.end.isEqual(t.insertionPosition))return t.graveyardPosition||o.range.end.offset++,[o];if(o.range.start.hasSameParentAs(t.splitPosition)&&o.range.containsPosition(t.splitPosition)){const e=o.clone();return e.range=new z(t.moveTargetPosition.clone(),o.range.end._getCombined(t.splitPosition,t.moveTargetPosition)),o.range.end=t.splitPosition.clone(),o.range.end.stickiness="toPrevious",[o,e]}return o.range=o.range._getTransformedBySplitOperation(t),[o]}),dt(Yt,Vt,(o,t)=>{const e=[o];if(o.shouldReceiveAttributes&&o.position.hasSameParentAs(t.range.start)&&t.range.containsPosition(o.position)){const n=gu(o,t.key,t.newValue);n&&e.push(n)}return e}),dt(Yt,Yt,(o,t,e)=>(o.position.isEqual(t.position)&&e.aIsStrong||(o.position=o.position._getTransformedByInsertOperation(t)),[o])),dt(Yt,gt,(o,t)=>(o.position=o.position._getTransformedByMoveOperation(t),[o])),dt(Yt,yt,(o,t)=>(o.position=o.position._getTransformedBySplitOperation(t),[o])),dt(Yt,zt,(o,t)=>(o.position=o.position._getTransformedByMergeOperation(t),[o])),dt(le,Yt,(o,t)=>(o.oldRange&&(o.oldRange=o.oldRange._getTransformedByInsertOperation(t)[0]),o.newRange&&(o.newRange=o.newRange._getTransformedByInsertOperation(t)[0]),[o])),dt(le,le,(o,t,e)=>{if(o.name==t.name){if(!e.aIsStrong)return[new Wt(0)];o.oldRange=t.newRange?t.newRange.clone():null}return[o]}),dt(le,zt,(o,t)=>(o.oldRange&&(o.oldRange=o.oldRange._getTransformedByMergeOperation(t)),o.newRange&&(o.newRange=o.newRange._getTransformedByMergeOperation(t)),[o])),dt(le,gt,(o,t,e)=>{if(o.oldRange&&(o.oldRange=z._createFromRanges(o.oldRange._getTransformedByMoveOperation(t))),o.newRange){if(e.abRelation){const n=z._createFromRanges(o.newRange._getTransformedByMoveOperation(t));if(e.abRelation.side=="left"&&t.targetPosition.isEqual(o.newRange.start))return o.newRange.end=n.end,o.newRange.start.path=e.abRelation.path,[o];if(e.abRelation.side=="right"&&t.targetPosition.isEqual(o.newRange.end))return o.newRange.start=n.start,o.newRange.end.path=e.abRelation.path,[o]}o.newRange=z._createFromRanges(o.newRange._getTransformedByMoveOperation(t))}return[o]}),dt(le,yt,(o,t,e)=>{if(o.oldRange&&(o.oldRange=o.oldRange._getTransformedBySplitOperation(t)),o.newRange){if(e.abRelation){const n=o.newRange._getTransformedBySplitOperation(t);return o.newRange.start.isEqual(t.splitPosition)&&e.abRelation.wasStartBeforeMergedElement?o.newRange.start=F._createAt(t.insertionPosition):o.newRange.start.isEqual(t.splitPosition)&&!e.abRelation.wasInLeftElement&&(o.newRange.start=F._createAt(t.moveTargetPosition)),o.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasInRightElement?o.newRange.end=F._createAt(t.moveTargetPosition):o.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasEndBeforeMergedElement?o.newRange.end=F._createAt(t.insertionPosition):o.newRange.end=n.end,[o]}o.newRange=o.newRange._getTransformedBySplitOperation(t)}return[o]}),dt(zt,Yt,(o,t)=>(o.sourcePosition.hasSameParentAs(t.position)&&(o.howMany+=t.howMany),o.sourcePosition=o.sourcePosition._getTransformedByInsertOperation(t),o.targetPosition=o.targetPosition._getTransformedByInsertOperation(t),[o])),dt(zt,zt,(o,t,e)=>{if(o.sourcePosition.isEqual(t.sourcePosition)&&o.targetPosition.isEqual(t.targetPosition)){if(e.bWasUndone){const n=t.graveyardPosition.path.slice();return n.push(0),o.sourcePosition=new F(t.graveyardPosition.root,n),o.howMany=0,[o]}return[new Wt(0)]}if(o.sourcePosition.isEqual(t.sourcePosition)&&!o.targetPosition.isEqual(t.targetPosition)&&!e.bWasUndone&&e.abRelation!="splitAtSource"){const n=o.targetPosition.root.rootName=="$graveyard",i=t.targetPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&e.aIsStrong){const r=t.targetPosition._getTransformedByMergeOperation(t),s=o.targetPosition._getTransformedByMergeOperation(t);return[new gt(r,o.howMany,s,0)]}return[new Wt(0)]}return o.sourcePosition.hasSameParentAs(t.targetPosition)&&(o.howMany+=t.howMany),o.sourcePosition=o.sourcePosition._getTransformedByMergeOperation(t),o.targetPosition=o.targetPosition._getTransformedByMergeOperation(t),o.graveyardPosition.isEqual(t.graveyardPosition)&&e.aIsStrong||(o.graveyardPosition=o.graveyardPosition._getTransformedByMergeOperation(t)),[o]}),dt(zt,gt,(o,t,e)=>{const n=z._createFromPositionAndShift(t.sourcePosition,t.howMany);return t.type=="remove"&&!e.bWasUndone&&!e.forceWeakRemove&&o.deletionPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(o.sourcePosition)?[new Wt(0)]:(o.sourcePosition.hasSameParentAs(t.targetPosition)&&(o.howMany+=t.howMany),o.sourcePosition.hasSameParentAs(t.sourcePosition)&&(o.howMany-=t.howMany),o.sourcePosition=o.sourcePosition._getTransformedByMoveOperation(t),o.targetPosition=o.targetPosition._getTransformedByMoveOperation(t),o.graveyardPosition.isEqual(t.targetPosition)||(o.graveyardPosition=o.graveyardPosition._getTransformedByMoveOperation(t)),[o])}),dt(zt,yt,(o,t,e)=>{if(t.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedByDeletion(t.graveyardPosition,1),o.deletionPosition.isEqual(t.graveyardPosition)&&(o.howMany=t.howMany)),o.targetPosition.isEqual(t.splitPosition)){const n=t.howMany!=0,i=t.graveyardPosition&&o.deletionPosition.isEqual(t.graveyardPosition);if(n||i||e.abRelation=="mergeTargetNotMoved")return o.sourcePosition=o.sourcePosition._getTransformedBySplitOperation(t),[o]}if(o.sourcePosition.isEqual(t.splitPosition)){if(e.abRelation=="mergeSourceNotMoved")return o.howMany=0,o.targetPosition=o.targetPosition._getTransformedBySplitOperation(t),[o];if(e.abRelation=="mergeSameElement"||o.sourcePosition.offset>0)return o.sourcePosition=t.moveTargetPosition.clone(),o.targetPosition=o.targetPosition._getTransformedBySplitOperation(t),[o]}return o.sourcePosition.hasSameParentAs(t.splitPosition)&&(o.howMany=t.splitPosition.offset),o.sourcePosition=o.sourcePosition._getTransformedBySplitOperation(t),o.targetPosition=o.targetPosition._getTransformedBySplitOperation(t),[o]}),dt(gt,Yt,(o,t)=>{const e=z._createFromPositionAndShift(o.sourcePosition,o.howMany)._getTransformedByInsertOperation(t,!1)[0];return o.sourcePosition=e.start,o.howMany=e.end.offset-e.start.offset,o.targetPosition.isEqual(t.position)||(o.targetPosition=o.targetPosition._getTransformedByInsertOperation(t)),[o]}),dt(gt,gt,(o,t,e)=>{const n=z._createFromPositionAndShift(o.sourcePosition,o.howMany),i=z._createFromPositionAndShift(t.sourcePosition,t.howMany);let r,s=e.aIsStrong,a=!e.aIsStrong;if(e.abRelation=="insertBefore"||e.baRelation=="insertAfter"?a=!0:e.abRelation!="insertAfter"&&e.baRelation!="insertBefore"||(a=!1),r=o.targetPosition.isEqual(t.targetPosition)&&a?o.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany):o.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),pu(o,t)&&pu(t,o))return[t.getReversed()];if(n.containsPosition(t.targetPosition)&&n.containsRange(i,!0))return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),qo([n],r);if(i.containsPosition(o.targetPosition)&&i.containsRange(n,!0))return n.start=n.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.end=n.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),qo([n],r);const c=Zt(o.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if(c=="prefix"||c=="extension")return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),qo([n],r);o.type!="remove"||t.type=="remove"||e.aWasUndone||e.forceWeakRemove?o.type=="remove"||t.type!="remove"||e.bWasUndone||e.forceWeakRemove||(s=!1):s=!0;const l=[],d=n.getDifference(i);for(const u of d){u.start=u.start._getTransformedByDeletion(t.sourcePosition,t.howMany),u.end=u.end._getTransformedByDeletion(t.sourcePosition,t.howMany);const g=Zt(u.start.getParentPath(),t.getMovedRangeStart().getParentPath())=="same",m=u._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,g);l.push(...m)}const h=n.getIntersection(i);return h!==null&&s&&(h.start=h.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),h.end=h.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),l.length===0?l.push(h):l.length==1?i.start.isBefore(n.start)||i.start.isEqual(n.start)?l.unshift(h):l.push(h):l.splice(1,0,h)),l.length===0?[new Wt(o.baseVersion)]:qo(l,r)}),dt(gt,yt,(o,t,e)=>{let n=o.targetPosition.clone();o.targetPosition.isEqual(t.insertionPosition)&&t.graveyardPosition&&e.abRelation!="moveTargetAfter"||(n=o.targetPosition._getTransformedBySplitOperation(t));const i=z._createFromPositionAndShift(o.sourcePosition,o.howMany);if(i.end.isEqual(t.insertionPosition))return t.graveyardPosition||o.howMany++,o.targetPosition=n,[o];if(i.start.hasSameParentAs(t.splitPosition)&&i.containsPosition(t.splitPosition)){let s=new z(t.splitPosition,i.end);return s=s._getTransformedBySplitOperation(t),qo([new z(i.start,t.splitPosition),s],n)}o.targetPosition.isEqual(t.splitPosition)&&e.abRelation=="insertAtSource"&&(n=t.moveTargetPosition),o.targetPosition.isEqual(t.insertionPosition)&&e.abRelation=="insertBetween"&&(n=o.targetPosition);const r=[i._getTransformedBySplitOperation(t)];if(t.graveyardPosition){const s=i.start.isEqual(t.graveyardPosition)||i.containsPosition(t.graveyardPosition);o.howMany>1&&s&&!e.aWasUndone&&r.push(z._createFromPositionAndShift(t.insertionPosition,1))}return qo(r,n)}),dt(gt,zt,(o,t,e)=>{const n=z._createFromPositionAndShift(o.sourcePosition,o.howMany);if(t.deletionPosition.hasSameParentAs(o.sourcePosition)&&n.containsPosition(t.sourcePosition)){if(o.type!="remove"||e.forceWeakRemove){if(o.howMany==1)return e.bWasUndone?(o.sourcePosition=t.graveyardPosition.clone(),o.targetPosition=o.targetPosition._getTransformedByMergeOperation(t),[o]):[new Wt(0)]}else if(!e.aWasUndone){const r=[];let s=t.graveyardPosition.clone(),a=t.targetPosition._getTransformedByMergeOperation(t);o.howMany>1&&(r.push(new gt(o.sourcePosition,o.howMany-1,o.targetPosition,0)),s=s._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany-1),a=a._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany-1));const c=t.deletionPosition._getCombined(o.sourcePosition,o.targetPosition),l=new gt(s,1,c,0),d=l.getMovedRangeStart().path.slice();d.push(0);const h=new F(l.targetPosition.root,d);a=a._getTransformedByMove(s,c,1);const u=new gt(a,t.howMany,h,0);return r.push(l),r.push(u),r}}const i=z._createFromPositionAndShift(o.sourcePosition,o.howMany)._getTransformedByMergeOperation(t);return o.sourcePosition=i.start,o.howMany=i.end.offset-i.start.offset,o.targetPosition=o.targetPosition._getTransformedByMergeOperation(t),[o]}),dt(de,Yt,(o,t)=>(o.position=o.position._getTransformedByInsertOperation(t),[o])),dt(de,zt,(o,t)=>o.position.isEqual(t.deletionPosition)?(o.position=t.graveyardPosition.clone(),o.position.stickiness="toNext",[o]):(o.position=o.position._getTransformedByMergeOperation(t),[o])),dt(de,gt,(o,t)=>(o.position=o.position._getTransformedByMoveOperation(t),[o])),dt(de,de,(o,t,e)=>{if(o.position.isEqual(t.position)){if(!e.aIsStrong)return[new Wt(0)];o.oldName=t.newName}return[o]}),dt(de,yt,(o,t)=>{if(Zt(o.position.path,t.splitPosition.getParentPath())=="same"&&!t.graveyardPosition){const e=new de(o.position.getShiftedBy(1),o.oldName,o.newName,0);return[o,e]}return o.position=o.position._getTransformedBySplitOperation(t),[o]}),dt(mn,mn,(o,t,e)=>{if(o.root===t.root&&o.key===t.key){if(!e.aIsStrong||o.newValue===t.newValue)return[new Wt(0)];o.oldValue=t.newValue}return[o]}),dt(tn,tn,(o,t)=>o.rootName===t.rootName&&o.isAdd===t.isAdd?[new Wt(0)]:[o]),dt(yt,Yt,(o,t)=>(o.splitPosition.hasSameParentAs(t.position)&&o.splitPosition.offset<t.position.offset&&(o.howMany+=t.howMany),o.splitPosition=o.splitPosition._getTransformedByInsertOperation(t),o.insertionPosition=o.insertionPosition._getTransformedByInsertOperation(t),[o])),dt(yt,zt,(o,t,e)=>{if(!o.graveyardPosition&&!e.bWasUndone&&o.splitPosition.hasSameParentAs(t.sourcePosition)){const n=t.graveyardPosition.path.slice();n.push(0);const i=new F(t.graveyardPosition.root,n),r=yt.getInsertionPosition(new F(t.graveyardPosition.root,n)),s=new yt(i,0,r,null,0);return o.splitPosition=o.splitPosition._getTransformedByMergeOperation(t),o.insertionPosition=yt.getInsertionPosition(o.splitPosition),o.graveyardPosition=s.insertionPosition.clone(),o.graveyardPosition.stickiness="toNext",[s,o]}return o.splitPosition.hasSameParentAs(t.deletionPosition)&&!o.splitPosition.isAfter(t.deletionPosition)&&o.howMany--,o.splitPosition.hasSameParentAs(t.targetPosition)&&(o.howMany+=t.howMany),o.splitPosition=o.splitPosition._getTransformedByMergeOperation(t),o.insertionPosition=yt.getInsertionPosition(o.splitPosition),o.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedByMergeOperation(t)),[o]}),dt(yt,gt,(o,t,e)=>{const n=z._createFromPositionAndShift(t.sourcePosition,t.howMany);if(o.graveyardPosition){const r=n.start.isEqual(o.graveyardPosition)||n.containsPosition(o.graveyardPosition);if(!e.bWasUndone&&r){const s=o.splitPosition._getTransformedByMoveOperation(t),a=o.graveyardPosition._getTransformedByMoveOperation(t),c=a.path.slice();c.push(0);const l=new F(a.root,c);return[new gt(s,o.howMany,l,0)]}o.graveyardPosition=o.graveyardPosition._getTransformedByMoveOperation(t)}const i=o.splitPosition.isEqual(t.targetPosition);if(i&&(e.baRelation=="insertAtSource"||e.abRelation=="splitBefore"))return o.howMany+=t.howMany,o.splitPosition=o.splitPosition._getTransformedByDeletion(t.sourcePosition,t.howMany),o.insertionPosition=yt.getInsertionPosition(o.splitPosition),[o];if(i&&e.abRelation&&e.abRelation.howMany){const{howMany:r,offset:s}=e.abRelation;return o.howMany+=r,o.splitPosition=o.splitPosition.getShiftedBy(s),[o]}if(o.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(o.splitPosition)){const r=t.howMany-(o.splitPosition.offset-t.sourcePosition.offset);return o.howMany-=r,o.splitPosition.hasSameParentAs(t.targetPosition)&&o.splitPosition.offset<t.targetPosition.offset&&(o.howMany+=t.howMany),o.splitPosition=t.sourcePosition.clone(),o.insertionPosition=yt.getInsertionPosition(o.splitPosition),[o]}return t.sourcePosition.isEqual(t.targetPosition)||(o.splitPosition.hasSameParentAs(t.sourcePosition)&&o.splitPosition.offset<=t.sourcePosition.offset&&(o.howMany-=t.howMany),o.splitPosition.hasSameParentAs(t.targetPosition)&&o.splitPosition.offset<t.targetPosition.offset&&(o.howMany+=t.howMany)),o.splitPosition.stickiness="toNone",o.splitPosition=o.splitPosition._getTransformedByMoveOperation(t),o.splitPosition.stickiness="toNext",o.graveyardPosition?o.insertionPosition=o.insertionPosition._getTransformedByMoveOperation(t):o.insertionPosition=yt.getInsertionPosition(o.splitPosition),[o]}),dt(yt,yt,(o,t,e)=>{if(o.splitPosition.isEqual(t.splitPosition)){if(!o.graveyardPosition&&!t.graveyardPosition)return[new Wt(0)];if(o.graveyardPosition&&t.graveyardPosition&&o.graveyardPosition.isEqual(t.graveyardPosition))return[new Wt(0)];if(e.abRelation=="splitBefore")return o.howMany=0,o.graveyardPosition=o.graveyardPosition._getTransformedBySplitOperation(t),[o]}if(o.graveyardPosition&&t.graveyardPosition&&o.graveyardPosition.isEqual(t.graveyardPosition)){const n=o.splitPosition.root.rootName=="$graveyard",i=t.splitPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&e.aIsStrong){const r=[];return t.howMany&&r.push(new gt(t.moveTargetPosition,t.howMany,t.splitPosition,0)),o.howMany&&r.push(new gt(o.splitPosition,o.howMany,o.moveTargetPosition,0)),r}return[new Wt(0)]}if(o.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedBySplitOperation(t)),o.splitPosition.isEqual(t.insertionPosition)&&e.abRelation=="splitBefore")return o.howMany++,[o];if(t.splitPosition.isEqual(o.insertionPosition)&&e.baRelation=="splitBefore"){const n=t.insertionPosition.path.slice();n.push(0);const i=new F(t.insertionPosition.root,n);return[o,new gt(o.insertionPosition,1,i,0)]}return o.splitPosition.hasSameParentAs(t.splitPosition)&&o.splitPosition.offset<t.splitPosition.offset&&(o.howMany-=t.howMany),o.splitPosition=o.splitPosition._getTransformedBySplitOperation(t),o.insertionPosition=yt.getInsertionPosition(o.splitPosition),[o]});class te extends it(F){constructor(t,e,n="toNone"){if(super(t,e,n),!this.root.is("rootElement"))throw new y("model-liveposition-root-not-rootelement",t);n0.call(this)}detach(){this.stopListening()}toPosition(){return new F(this.root,this.path.slice(),this.stickiness)}static fromPosition(t,e){return new this(t.root,t.path.slice(),e||t.stickiness)}}function n0(){this.listenTo(this.root.document.model,"applyOperation",(o,t)=>{const e=t[0];e.isDocumentOperation&&o0.call(this,e)},{priority:"low"})}function o0(o){const t=this.getTransformedByOperation(o);if(!this.isEqual(t)){const e=this.toPosition();this.path=t.path,this.root=t.root,this.fire("change",e)}}te.prototype.is=function(o){return o==="livePosition"||o==="model:livePosition"||o=="position"||o==="model:position"};class Go{constructor(t={}){typeof t=="string"&&(t=t==="transparent"?{isUndoable:!1}:{},G("batch-constructor-deprecated-string-type"));const{isUndoable:e=!0,isLocal:n=!0,isUndo:i=!1,isTyping:r=!1}=t;this.operations=[],this.isUndoable=e,this.isLocal=n,this.isUndo=i,this.isTyping=r}get type(){return G("batch-type-deprecated"),"default"}get baseVersion(){for(const t of this.operations)if(t.baseVersion!==null)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}var i0=Object.defineProperty,r0=Object.defineProperties,s0=Object.getOwnPropertyDescriptors,mu=Object.getOwnPropertySymbols,a0=Object.prototype.hasOwnProperty,c0=Object.prototype.propertyIsEnumerable,fu=(o,t,e)=>t in o?i0(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,ku=(o,t)=>{for(var e in t||(t={}))a0.call(t,e)&&fu(o,e,t[e]);if(mu)for(var e of mu(t))c0.call(t,e)&&fu(o,e,t[e]);return o};class l0{constructor(t){this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changedRoots=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set,this._markerCollection=t}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0&&this._changedRoots.size==0}bufferOperation(t){const e=t;switch(e.type){case"insert":if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const n of e.range.getItems({shallow:!0}))this._isInInsertedElement(n.parent)||this._markAttribute(n);break;case"remove":case"move":case"reinsert":{if(e.sourcePosition.isEqual(e.targetPosition)||e.sourcePosition.getShiftedBy(e.howMany).isEqual(e.targetPosition))return;const n=this._isInInsertedElement(e.sourcePosition.parent),i=this._isInInsertedElement(e.targetPosition.parent);n||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),i||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case"rename":{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);const n=z._createFromPositionAndShift(e.position,1);for(const i of this._markerCollection.getMarkersIntersectingRange(n)){const r=i.getData();this.bufferMarkerChange(i.name,r,r)}break}case"split":{const n=e.splitPosition.parent;this._isInInsertedElement(n)||this._markRemove(n,e.splitPosition.offset,e.howMany),this._isInInsertedElement(e.insertionPosition.parent)||this._markInsert(e.insertionPosition.parent,e.insertionPosition.offset,1),e.graveyardPosition&&this._markRemove(e.graveyardPosition.parent,e.graveyardPosition.offset,1);break}case"merge":{const n=e.sourcePosition.parent;this._isInInsertedElement(n.parent)||this._markRemove(n.parent,n.startOffset,1);const i=e.graveyardPosition.parent;this._markInsert(i,e.graveyardPosition.offset,1);const r=e.targetPosition.parent;this._isInInsertedElement(r)||this._markInsert(r,e.targetPosition.offset,n.maxOffset);break}case"detachRoot":case"addRoot":{const n=e.affectedSelectable;if(!n._isLoaded||n.isAttached()==e.isAdd)return;this._bufferRootStateChange(e.rootName,e.isAdd);break}case"addRootAttribute":case"removeRootAttribute":case"changeRootAttribute":{if(!e.root._isLoaded)return;const n=e.root.rootName;this._bufferRootAttributeChange(n,e.key,e.oldValue,e.newValue);break}}this._cachedChanges=null}bufferMarkerChange(t,e,n){e.range&&e.range.root.is("rootElement")&&!e.range.root._isLoaded&&(e.range=null),n.range&&n.range.root.is("rootElement")&&!n.range.root._isLoaded&&(n.range=null);let i=this._changedMarkers.get(t);i?i.newMarkerData=n:(i={newMarkerData:n,oldMarkerData:e},this._changedMarkers.set(t,i)),i.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(t)}getMarkersToRemove(){const t=[];for(const[e,n]of this._changedMarkers)n.oldMarkerData.range!=null&&t.push({name:e,range:n.oldMarkerData.range});return t}getMarkersToAdd(){const t=[];for(const[e,n]of this._changedMarkers)n.newMarkerData.range!=null&&t.push({name:e,range:n.newMarkerData.range});return t}getChangedMarkers(){return Array.from(this._changedMarkers).map(([t,e])=>({name:t,data:{oldRange:e.oldMarkerData.range,newRange:e.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0||this._changedRoots.size>0)return!0;for(const{newMarkerData:t,oldMarkerData:e}of this._changedMarkers.values()){if(t.affectsData!==e.affectsData)return!0;if(t.affectsData){const n=t.range&&!e.range,i=!t.range&&e.range,r=t.range&&e.range&&!t.range.isEqual(e.range);if(n||i||r)return!0}}return!1}getChanges(t={}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let e=[];for(const n of this._changesInElement.keys()){const i=this._changesInElement.get(n).sort((d,h)=>d.offset===h.offset?d.type!=h.type?d.type=="remove"?-1:1:0:d.offset<h.offset?-1:1),r=this._elementSnapshots.get(n),s=bu(n.getChildren()),a=d0(r.length,i);let c=0,l=0;for(const d of a)if(d==="i")e.push(this._getInsertDiff(n,c,s[c])),c++;else if(d==="r")e.push(this._getRemoveDiff(n,c,r[l])),l++;else if(d==="a"){const h=s[c].attributes,u=r[l].attributes;let g;if(s[c].name=="$text")g=new z(F._createAt(n,c),F._createAt(n,c+1));else{const m=n.offsetToIndex(c);g=new z(F._createAt(n,c),F._createAt(n.getChild(m),0))}e.push(...this._getAttributesDiff(g,u,h)),c++,l++}else c++,l++}e.sort((n,i)=>n.position.root!=i.position.root?n.position.root.rootName<i.position.root.rootName?-1:1:n.position.isEqual(i.position)?n.changeCount-i.changeCount:n.position.isBefore(i.position)?-1:1);for(let n=1,i=0;n<e.length;n++){const r=e[i],s=e[n],a=r.type=="remove"&&s.type=="remove"&&r.name=="$text"&&s.name=="$text"&&r.position.isEqual(s.position),c=r.type=="insert"&&s.type=="insert"&&r.name=="$text"&&s.name=="$text"&&r.position.parent==s.position.parent&&r.position.offset+r.length==s.position.offset,l=r.type=="attribute"&&s.type=="attribute"&&r.position.parent==s.position.parent&&r.range.isFlat&&s.range.isFlat&&r.position.offset+r.length==s.position.offset&&r.attributeKey==s.attributeKey&&r.attributeOldValue==s.attributeOldValue&&r.attributeNewValue==s.attributeNewValue;a||c||l?(r.length++,l&&(r.range.end=r.range.end.getShiftedBy(1)),e[n]=null):i=n}e=e.filter(n=>n);for(const n of e)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e,this._cachedChanges=e.filter(h0),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getChangedRoots(){return Array.from(this._changedRoots.values()).map(t=>{const e=ku({},t);return e.state!==void 0&&delete e.attributes,e})}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._changedRoots.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_bufferRootStateChange(t,e){if(!this._changedRoots.has(t))return void this._changedRoots.set(t,{name:t,state:e?"attached":"detached"});const n=this._changedRoots.get(t);n.state!==void 0?(delete n.state,n.attributes===void 0&&this._changedRoots.delete(t)):n.state=e?"attached":"detached"}_bufferRootAttributeChange(t,e,n,i){const r=this._changedRoots.get(t)||{name:t},s=r.attributes||{};if(s[e]){const a=s[e];i===a.oldValue?delete s[e]:a.newValue=i}else s[e]={oldValue:n,newValue:i};Object.entries(s).length===0?(delete r.attributes,r.state===void 0&&this._changedRoots.delete(t)):(r.attributes=s,this._changedRoots.set(t,r))}_refreshItem(t){if(this._isInInsertedElement(t.parent))return;this._markRemove(t.parent,t.startOffset,t.offsetSize),this._markInsert(t.parent,t.startOffset,t.offsetSize),this._refreshedItems.add(t);const e=z._createOn(t);for(const n of this._markerCollection.getMarkersIntersectingRange(e)){const i=n.getData();this.bufferMarkerChange(n.name,i,i)}this._cachedChanges=null}_bufferRootLoad(t){if(t.isAttached()){this._bufferRootStateChange(t.rootName,!0),this._markInsert(t,0,t.maxOffset);for(const n of t.getAttributeKeys())this._bufferRootAttributeChange(t.rootName,n,null,t.getAttribute(n));for(const n of this._markerCollection)if(n.getRange().root==t){const i=n.getData();this.bufferMarkerChange(n.name,(e=ku({},i),r0(e,s0({range:null}))),i)}var e}}_markInsert(t,e,n){if(t.root.is("rootElement")&&!t.root._isLoaded)return;const i={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i)}_markRemove(t,e,n){if(t.root.is("rootElement")&&!t.root._isLoaded)return;const i={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){if(t.root.is("rootElement")&&!t.root._isLoaded)return;const e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);const n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let i=0;i<n.length;i++)n[i].howMany<1&&(n.splice(i,1),i--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,bu(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(const n of e){const i=t.offset+t.howMany,r=n.offset+n.howMany;if(t.type=="insert"&&(n.type=="insert"&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<r&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),n.type=="remove"&&t.offset<n.offset&&(n.offset+=t.howMany),n.type=="attribute")){if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<r){const s=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:i,howMany:s-n.howMany,count:this._changeCount++})}}if(t.type=="remove"){if(n.type=="insert"){if(i<=n.offset)n.offset-=t.howMany;else if(i<=r)if(t.offset<n.offset){const s=i-n.offset;n.offset=t.offset,n.howMany-=s,t.nodesToHandle-=s}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<r){const s=r-t.offset;n.howMany-=s,t.nodesToHandle-=s}}if(n.type=="remove"&&(i<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(i<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){const s=i-n.offset;n.offset=t.offset,n.howMany-=s}else if(t.offset<r)if(i<=r){const s=n.howMany;n.howMany=t.offset-n.offset;const a=s-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:a,count:this._changeCount++})}else n.howMany-=r-t.offset}}if(t.type=="attribute"){if(n.type=="insert")if(t.offset<n.offset&&i>n.offset){if(i>r){const s={type:"attribute",offset:r,howMany:i-r,count:this._changeCount++};this._handleChange(s,e),e.push(s)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<r&&(i>r?(t.nodesToHandle=i-r,t.offset=r):t.nodesToHandle=0);if(n.type=="remove"&&t.offset<n.offset&&i>n.offset){const s={type:"attribute",offset:n.offset,howMany:i-n.offset,count:this._changeCount++};this._handleChange(s,e),e.push(s),t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}n.type=="attribute"&&(t.offset>=n.offset&&i<=r?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&i>=r&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:F._createAt(t,e),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(t,e,n){return{type:"remove",position:F._createAt(t,e),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(t,e,n){const i=[];n=new Map(n);for(const[r,s]of e){const a=n.has(r)?n.get(r):null;a!==s&&i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:s,attributeNewValue:a,changeCount:this._changeCount++}),n.delete(r)}for(const[r,s]of n)i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:null,attributeNewValue:s,changeCount:this._changeCount++});return i}_isInInsertedElement(t){const e=t.parent;if(!e)return!1;const n=this._changesInElement.get(e),i=t.startOffset;if(n){for(const r of n)if(r.type=="insert"&&i>=r.offset&&i<r.offset+r.howMany)return!0}return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){const i=new z(F._createAt(t,e),F._createAt(t,e+n));for(const r of i.getItems({shallow:!0}))r.is("element")&&(this._elementSnapshots.delete(r),this._changesInElement.delete(r),this._removeAllNestedChanges(r,0,r.maxOffset))}}function bu(o){const t=[];for(const e of o)if(e.is("$text"))for(let n=0;n<e.data.length;n++)t.push({name:"$text",attributes:new Map(e.getAttributes())});else t.push({name:e.name,attributes:new Map(e.getAttributes())});return t}function d0(o,t){const e=[];let n=0,i=0;for(const r of t){if(r.offset>n){for(let s=0;s<r.offset-n;s++)e.push("e");i+=r.offset-n}if(r.type=="insert"){for(let s=0;s<r.howMany;s++)e.push("i");n=r.offset+r.howMany}else if(r.type=="remove"){for(let s=0;s<r.howMany;s++)e.push("r");n=r.offset,i+=r.howMany}else e.push(..."a".repeat(r.howMany).split("")),n=r.offset+r.howMany,i+=r.howMany}if(i<o)for(let r=0;r<o-i-n;r++)e.push("e");return e}function h0(o){const t="position"in o&&o.position.root.rootName=="$graveyard",e="range"in o&&o.range.root.rootName=="$graveyard";return!t&&!e}class u0{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(t){this._operations.length&&t>this._version+1&&this._gaps.set(this._version,t),this._version=t}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(t){if(t.baseVersion!==this.version)throw new y("model-document-history-addoperation-incorrect-version",this,{operation:t,historyVersion:this.version});this._operations.push(t),this._version++,this._baseVersionToOperationIndex.set(t.baseVersion,this._operations.length-1)}getOperations(t,e=this.version){if(!this._operations.length)return[];const n=this._operations[0];t===void 0&&(t=n.baseVersion);let i=e-1;for(const[a,c]of this._gaps)t>a&&t<c&&(t=c),i>a&&i<c&&(i=a-1);if(i<n.baseVersion||t>this.lastOperation.baseVersion)return[];let r=this._baseVersionToOperationIndex.get(t);r===void 0&&(r=0);let s=this._baseVersionToOperationIndex.get(i);return s===void 0&&(s=this._operations.length-1),this._operations.slice(r,s+1)}getOperation(t){const e=this._baseVersionToOperationIndex.get(t);if(e!==void 0)return this._operations[e]}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}class ys extends wt{constructor(t,e,n="main"){super(e),this._isAttached=!0,this._isLoaded=!0,this._document=t,this.rootName=n}get document(){return this._document}isAttached(){return this._isAttached}toJSON(){return this.rootName}}ys.prototype.is=function(o,t){return t?t===this.name&&(o==="rootElement"||o==="model:rootElement"||o==="element"||o==="model:element"):o==="rootElement"||o==="model:rootElement"||o==="element"||o==="model:element"||o==="node"||o==="model:node"};var g0=Object.defineProperty,p0=Object.defineProperties,m0=Object.getOwnPropertyDescriptors,wu=Object.getOwnPropertySymbols,f0=Object.prototype.hasOwnProperty,k0=Object.prototype.propertyIsEnumerable,Au=(o,t,e)=>t in o?g0(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,_u=(o,t)=>{for(var e in t||(t={}))f0.call(t,e)&&Au(o,e,t[e]);if(wu)for(var e of wu(t))k0.call(t,e)&&Au(o,e,t[e]);return o},Cu=(o,t)=>p0(o,m0(t));const vu="$graveyard";class b0 extends it(){constructor(t){super(),this.model=t,this.history=new u0,this.selection=new Oe(this),this.roots=new Ie({idProperty:"rootName"}),this.differ=new l0(t.markers),this.isReadOnly=!1,this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",vu),this.listenTo(t,"applyOperation",(e,n)=>{const i=n[0];i.isDocumentOperation&&this.differ.bufferOperation(i)},{priority:"high"}),this.listenTo(t,"applyOperation",(e,n)=>{const i=n[0];i.isDocumentOperation&&this.history.addOperation(i)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(t.markers,"update",(e,n,i,r,s)=>{const a=Cu(_u({},n.getData()),{range:r});this.differ.bufferMarkerChange(n.name,s,a),i===null&&n.on("change",(c,l)=>{const d=n.getData();this.differ.bufferMarkerChange(n.name,Cu(_u({},d),{range:l}),d)})}),this.registerPostFixer(e=>{let n=!1;for(const i of this.roots)i.isAttached()||i.isEmpty||(e.remove(e.createRangeIn(i)),n=!0);for(const i of this.model.markers)i.getRange().root.isAttached()||(e.removeMarker(i),n=!0);return n})}get version(){return this.history.version}set version(t){this.history.version=t}get graveyard(){return this.getRoot(vu)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new y("model-document-createroot-name-exists",this,{name:e});const n=new ys(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(t=!1){return this.getRoots(t).map(e=>e.rootName)}getRoots(t=!1){return Array.from(this.roots).filter(e=>e!=this.graveyard&&(t||e.isAttached())&&e._isLoaded)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){const t=Ld(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_handleChangeBlock(t){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(t),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",t.batch):this.fire("change",t.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){const t=this.getRoots();return t.length?t[0]:this.graveyard}_getDefaultRange(){const t=this._getDefaultRoot(),e=this.model,n=e.schema,i=e.createPositionFromPath(t,[0]);return n.getNearestSelectionRange(i)||e.createRange(i)}_validateSelectionRange(t){return yu(t.start)&&yu(t.end)}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(this.selection.refresh(),e=n(t),e)break;while(e)}}function yu(o){const t=o.textNode;if(t){const e=t.data,n=o.offset-t.startOffset;return!$a(e,n)&&!Ya(e,n)}return!0}var w0=Object.defineProperty,A0=Object.defineProperties,_0=Object.getOwnPropertyDescriptors,xu=Object.getOwnPropertySymbols,C0=Object.prototype.hasOwnProperty,v0=Object.prototype.propertyIsEnumerable,Eu=(o,t,e)=>t in o?w0(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class y0 extends it(){constructor(){super(...arguments),this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){const e=t instanceof Wo?t.name:t;return this._markers.has(e)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,i=!1){const r=t instanceof Wo?t.name:t;if(r.includes(","))throw new y("markercollection-incorrect-marker-name",this);const s=this._markers.get(r);if(s){const d=s.getData(),h=s.getRange();let u=!1;return h.isEqual(e)||(s._attachLiveRange(ke.fromRange(e)),u=!0),n!=s.managedUsingOperations&&(s._managedUsingOperations=n,u=!0),typeof i=="boolean"&&i!=s.affectsData&&(s._affectsData=i,u=!0),u&&this.fire(`update:${r}`,s,h,e,d),s}const a=ke.fromRange(e),c=new Wo(r,a,n,i);var l;return this._markers.set(r,c),this.fire(`update:${r}`,c,null,e,(l=((d,h)=>{for(var u in h||(h={}))C0.call(h,u)&&Eu(d,u,h[u]);if(xu)for(var u of xu(h))v0.call(h,u)&&Eu(d,u,h[u]);return d})({},c.getData()),A0(l,_0({range:null})))),c}_remove(t){const e=t instanceof Wo?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire(`update:${e}`,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(t){const e=t instanceof Wo?t.name:t,n=this._markers.get(e);if(!n)throw new y("markercollection-refresh-marker-not-exists",this);const i=n.getRange();this.fire(`update:${e}`,n,i,i,n.getData())}*getMarkersAtPosition(t){for(const e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(const e of this)e.getRange().getIntersection(t)!==null&&(yield e)}destroy(){for(const t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(const e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}class Wo extends it(Ln){constructor(t,e,n,i){super(),this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=i}get managedUsingOperations(){if(!this._liveRange)throw new y("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new y("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new y("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new y("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new y("marker-destroyed",this);return this._liveRange.toRange()}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}Wo.prototype.is=function(o){return o==="marker"||o==="model:marker"};class x0 extends be{constructor(t,e){super(null),this.sourcePosition=t.clone(),this.howMany=e}get type(){return"detach"}get affectedSelectable(){return null}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new y("detach-operation-on-document-node",this)}_execute(){su(z._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class fn extends Ln{constructor(t){super(),this.markers=new Map,this._children=new Zi,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get nextSibling(){return null}get previousSibling(){return null}get root(){return this}get parent(){return null}get document(){return null}isAttached(){return!1}getAncestors(){return[]}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){const t=[];for(const e of this._children)t.push(e.toJSON());return t}static fromJSON(t){const e=[];for(const n of t)n.name?e.push(wt.fromJSON(n)):e.push(vt.fromJSON(n));return new fn(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(i){return typeof i=="string"?[new vt(i)]:(re(i)||(i=[i]),Array.from(i).map(r=>typeof r=="string"?new vt(r):r instanceof ze?new vt(r.data,r.getAttributes()):r))}(e);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const i of n)i.parent=null;return n}}fn.prototype.is=function(o){return o==="documentFragment"||o==="model:documentFragment"};class E0{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new vt(t,e)}createElement(t,e){return new wt(t,e)}createDocumentFragment(){return new fn}cloneElement(t,e=!0){return t._clone(e)}insert(t,e,n=0){if(this._assertWriterUsedCorrectly(),t instanceof vt&&t.data=="")return;const i=F._createAt(e,n);if(t.parent){if(Iu(t.root,i.root))return void this.move(z._createOn(t),i);if(t.root.document)throw new y("model-writer-insert-forbidden-move",this);this.remove(t)}const r=i.root.document?i.root.document.version:null,s=new Yt(i,t,r);if(t instanceof vt&&(s.shouldReceiveAttributes=!0),this.batch.addOperation(s),this.model.applyOperation(s),t instanceof fn)for(const[a,c]of t.markers){const l=F._createAt(c.root,0),d={range:new z(c.start._getCombined(l,i),c.end._getCombined(l,i)),usingOperation:!0,affectsData:!0};this.model.markers.has(a)?this.updateMarker(a,d):this.addMarker(a,d)}}insertText(t,e,n,i){e instanceof fn||e instanceof wt||e instanceof F?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,i)}insertElement(t,e,n,i){e instanceof fn||e instanceof wt||e instanceof F?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,i)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof fn||e instanceof wt?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof fn||e instanceof wt?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){if(this._assertWriterUsedCorrectly(),n instanceof z){const i=n.getMinimalFlatRanges();for(const r of i)Du(this,t,e,r)}else Su(this,t,e,n)}setAttributes(t,e){for(const[n,i]of Ze(t))this.setAttribute(n,i,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof z){const n=e.getMinimalFlatRanges();for(const i of n)Du(this,t,null,i)}else Su(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();const e=n=>{for(const i of n.getAttributeKeys())this.removeAttribute(i,n)};if(t instanceof z)for(const n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof z))throw new y("writer-move-invalid-range",this);if(!t.isFlat)throw new y("writer-move-range-not-flat",this);const i=F._createAt(e,n);if(i.isEqual(t.start))return;if(this._addOperationForAffectedMarkers("move",t),!Iu(t.root,i.root))throw new y("writer-move-different-document",this);const r=t.root.document?t.root.document.version:null,s=new gt(t.start,t.end.offset-t.start.offset,i,r);this.batch.addOperation(s),this.model.applyOperation(s)}remove(t){this._assertWriterUsedCorrectly();const e=(t instanceof z?t:z._createOn(t)).getMinimalFlatRanges().reverse();for(const n of e)this._addOperationForAffectedMarkers("move",n),D0(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(t){this._assertWriterUsedCorrectly();const e=t.nodeBefore,n=t.nodeAfter;if(this._addOperationForAffectedMarkers("merge",t),!(e instanceof wt))throw new y("writer-merge-no-element-before",this);if(!(n instanceof wt))throw new y("writer-merge-no-element-after",this);t.root.document?this._merge(t):this._mergeDetached(t)}createPositionFromPath(t,e,n){return this.model.createPositionFromPath(t,e,n)}createPositionAt(t,e){return this.model.createPositionAt(t,e)}createPositionAfter(t){return this.model.createPositionAfter(t)}createPositionBefore(t){return this.model.createPositionBefore(t)}createRange(t,e){return this.model.createRange(t,e)}createRangeIn(t){return this.model.createRangeIn(t)}createRangeOn(t){return this.model.createRangeOn(t)}createSelection(...t){return this.model.createSelection(...t)}_mergeDetached(t){const e=t.nodeBefore,n=t.nodeAfter;this.move(z._createIn(n),F._createAt(e,"end")),this.remove(n)}_merge(t){const e=F._createAt(t.nodeBefore,"end"),n=F._createAt(t.nodeAfter,0),i=t.root.document.graveyard,r=new F(i,[0]),s=t.root.document.version,a=new zt(n,t.nodeAfter.maxOffset,e,r,s);this.batch.addOperation(a),this.model.applyOperation(a)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof wt))throw new y("writer-rename-not-element-instance",this);const n=t.root.document?t.root.document.version:null,i=new de(F._createBefore(t),t.name,e,n);this.batch.addOperation(i),this.model.applyOperation(i)}split(t,e){this._assertWriterUsedCorrectly();let n,i,r=t.parent;if(!r.parent)throw new y("writer-split-element-no-parent",this);if(e||(e=r.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new y("writer-split-invalid-limit-element",this);do{const s=r.root.document?r.root.document.version:null,a=r.maxOffset-t.offset,c=yt.getInsertionPosition(t),l=new yt(t,a,c,null,s);this.batch.addOperation(l),this.model.applyOperation(l),n||i||(n=r,i=t.parent.nextSibling),r=(t=this.createPositionAfter(t.parent)).parent}while(r!==e);return{position:t,range:new z(F._createAt(n,"end"),F._createAt(i,0))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new y("writer-wrap-range-not-flat",this);const n=e instanceof wt?e:new wt(e);if(n.childCount>0)throw new y("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new y("writer-wrap-element-attached",this);this.insert(n,t.start);const i=new z(t.start.getShiftedBy(1),t.end.getShiftedBy(1));this.move(i,F._createAt(n,0))}unwrap(t){if(this._assertWriterUsedCorrectly(),t.parent===null)throw new y("writer-unwrap-element-no-parent",this);this.move(z._createIn(t),this.createPositionAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||typeof e.usingOperation!="boolean")throw new y("writer-addmarker-no-usingoperation",this);const n=e.usingOperation,i=e.range,r=e.affectsData!==void 0&&e.affectsData;if(this.model.markers.has(t))throw new y("writer-addmarker-marker-exists",this);if(!i)throw new y("writer-addmarker-no-range",this);return n?(ir(this,t,null,i,r),this.model.markers.get(t)):this.model.markers._set(t,i,n,r)}updateMarker(t,e){this._assertWriterUsedCorrectly();const n=typeof t=="string"?t:t.name,i=this.model.markers.get(n);if(!i)throw new y("writer-updatemarker-marker-not-exists",this);if(!e)return G("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(i);const r=typeof e.usingOperation=="boolean",s=typeof e.affectsData=="boolean",a=s?e.affectsData:i.affectsData;if(!r&&!e.range&&!s)throw new y("writer-updatemarker-wrong-options",this);const c=i.getRange(),l=e.range?e.range:c;r&&e.usingOperation!==i.managedUsingOperations?e.usingOperation?ir(this,n,null,l,a):(ir(this,n,c,null,a),this.model.markers._set(n,l,void 0,a)):i.managedUsingOperations?ir(this,n,c,l,a):this.model.markers._set(n,l,void 0,a)}removeMarker(t){this._assertWriterUsedCorrectly();const e=typeof t=="string"?t:t.name;if(!this.model.markers.has(e))throw new y("writer-removemarker-no-marker",this);const n=this.model.markers.get(e);if(!n.managedUsingOperations)return void this.model.markers._remove(e);ir(this,e,n.getRange(),null,n.affectsData)}addRoot(t,e="$root"){this._assertWriterUsedCorrectly();const n=this.model.document.getRoot(t);if(n&&n.isAttached())throw new y("writer-addroot-root-exists",this);const i=this.model.document,r=new tn(t,e,!0,i,i.version);return this.batch.addOperation(r),this.model.applyOperation(r),this.model.document.getRoot(t)}detachRoot(t){this._assertWriterUsedCorrectly();const e=typeof t=="string"?this.model.document.getRoot(t):t;if(!e||!e.isAttached())throw new y("writer-detachroot-no-root",this);for(const r of this.model.markers)r.getRange().root===e&&this.removeMarker(r);for(const r of e.getAttributeKeys())this.removeAttribute(r,e);this.remove(this.createRangeIn(e));const n=this.model.document,i=new tn(e.rootName,e.name,!1,n,n.version);this.batch.addOperation(i),this.model.applyOperation(i)}setSelection(...t){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(...t)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._setSelectionAttribute(t,e);else for(const[n,i]of Ze(t))this._setSelectionAttribute(n,i)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._removeSelectionAttribute(t);else for(const e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const i=Oe._getStoreAttributeKey(t);this.setAttribute(i,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){const e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){const n=Oe._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new y("writer-incorrect-use",this)}_addOperationForAffectedMarkers(t,e){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const i=n.getRange();let r=!1;if(t==="move"){const s=e;r=s.containsPosition(i.start)||s.start.isEqual(i.start)||s.containsPosition(i.end)||s.end.isEqual(i.end)}else{const s=e,a=s.nodeBefore,c=s.nodeAfter,l=i.start.parent==a&&i.start.isAtEnd,d=i.end.parent==c&&i.end.offset==0,h=i.end.nodeAfter==c,u=i.start.nodeAfter==c;r=l||d||h||u}r&&this.updateMarker(n.name,{range:i})}}}function Du(o,t,e,n){const i=o.model,r=i.document;let s,a,c,l=n.start;for(const h of n.getWalker({shallow:!0}))c=h.item.getAttribute(t),s&&a!=c&&(a!=e&&d(),l=s),s=h.nextPosition,a=c;function d(){const h=new z(l,s),u=h.root.document?r.version:null,g=new Vt(h,t,a,e,u);o.batch.addOperation(g),i.applyOperation(g)}s instanceof F&&s!=l&&a!=e&&d()}function Su(o,t,e,n){const i=o.model,r=i.document,s=n.getAttribute(t);let a,c;if(s!=e){if(n.root===n){const l=n.document?r.version:null;c=new mn(n,t,s,e,l)}else{a=new z(F._createBefore(n),o.createPositionAfter(n));const l=a.root.document?r.version:null;c=new Vt(a,t,s,e,l)}o.batch.addOperation(c),i.applyOperation(c)}}function ir(o,t,e,n,i){const r=o.model,s=r.document,a=new le(t,e,n,r.markers,!!i,s.version);o.batch.addOperation(a),r.applyOperation(a)}function D0(o,t,e,n){let i;if(o.root.document){const r=n.document,s=new F(r.graveyard,[0]);i=new gt(o,t,s,r.version)}else i=new x0(o,t);e.addOperation(i),n.applyOperation(i)}function Iu(o,t){return o===t||o instanceof ys&&t instanceof ys}function S0(o,t,e={}){if(t.isCollapsed)return;const n=t.getFirstRange();if(n.root.rootName=="$graveyard")return;const i=o.schema;o.change(r=>{if(!e.doNotResetEntireContent&&function(l,d){const h=l.getLimitElement(d);if(!d.containsEntireContent(h))return!1;const u=d.getFirstRange();return u.start.parent==u.end.parent?!1:l.checkChild(h,"paragraph")}(i,t))return void function(l,d){const h=l.model.schema.getLimitElement(d);l.remove(l.createRangeIn(h)),Bu(l,l.createPositionAt(h,0),d)}(r,t);const s={};if(!e.doNotAutoparagraph){const l=t.getSelectedElement();l&&Object.assign(s,i.getAttributesWithProperty(l,"copyOnReplace",!0))}const[a,c]=function(l){const d=l.root.document.model,h=l.start;let u=l.end;if(d.hasContent(l,{ignoreMarkers:!0})){const g=function(m){const k=m.parent,_=k.root.document.model.schema,v=k.getAncestors({parentFirst:!0,includeSelf:!0});for(const T of v){if(_.isLimit(T))return null;if(_.isBlock(T))return T}}(u);if(g&&u.isTouching(d.createPositionAt(g,0))){const m=d.createSelection(l);d.modifySelection(m,{direction:"backward"});const k=m.getLastPosition(),_=d.createRange(k,u);d.hasContent(_,{ignoreMarkers:!0})||(u=k)}}return[te.fromPosition(h,"toPrevious"),te.fromPosition(u,"toNext")]}(n);a.isTouching(c)||r.remove(r.createRange(a,c)),e.leaveUnmerged||(function(l,d,h){const u=l.model;if(!Bc(l.model.schema,d,h))return;const[g,m]=function(k,_){const v=k.getAncestors(),T=_.getAncestors();let O=0;for(;v[O]&&v[O]==T[O];)O++;return[v[O],T[O]]}(d,h);!g||!m||(!u.hasContent(g,{ignoreMarkers:!0})&&u.hasContent(m,{ignoreMarkers:!0})?Mu(l,d,h,g.parent):Tu(l,d,h,g.parent))}(r,a,c),i.removeDisallowedAttributes(a.parent.getChildren(),r)),Nu(r,t,a),!e.doNotAutoparagraph&&function(l,d){const h=l.checkChild(d,"$text"),u=l.checkChild(d,"paragraph");return!h&&u}(i,a)&&Bu(r,a,t,s),a.detach(),c.detach()})}function Tu(o,t,e,n){const i=t.parent,r=e.parent;if(i!=n&&r!=n){for(t=o.createPositionAfter(i),(e=o.createPositionBefore(r)).isEqual(t)||o.insert(r,t),o.merge(t);e.parent.isEmpty;){const s=e.parent;e=o.createPositionBefore(s),o.remove(s)}Bc(o.model.schema,t,e)&&Tu(o,t,e,n)}}function Mu(o,t,e,n){const i=t.parent,r=e.parent;if(i!=n&&r!=n){for(t=o.createPositionAfter(i),(e=o.createPositionBefore(r)).isEqual(t)||o.insert(i,e);t.parent.isEmpty;){const s=t.parent;t=o.createPositionBefore(s),o.remove(s)}e=o.createPositionBefore(r),function(s,a){const c=a.nodeBefore,l=a.nodeAfter;c.name!=l.name&&s.rename(c,l.name),s.clearAttributes(c),s.setAttributes(Object.fromEntries(l.getAttributes()),c),s.merge(a)}(o,e),Bc(o.model.schema,t,e)&&Mu(o,t,e,n)}}function Bc(o,t,e){const n=t.parent,i=e.parent;return n!=i&&!o.isLimit(n)&&!o.isLimit(i)&&function(r,s,a){const c=new z(r,s);for(const l of c.getWalker())if(a.isLimit(l.item))return!1;return!0}(t,e,o)}function Bu(o,t,e,n={}){const i=o.createElement("paragraph");o.model.schema.setAllowedAttributes(i,n,o),o.insert(i,t),Nu(o,e,o.createPositionAt(i,0))}function Nu(o,t,e){t instanceof Oe?o.setSelection(e):t.setTo(e)}function Pu(o,t){const e=[];Array.from(o.getItems({direction:"backward"})).map(n=>t.createRangeOn(n)).filter(n=>(n.start.isAfter(o.start)||n.start.isEqual(o.start))&&(n.end.isBefore(o.end)||n.end.isEqual(o.end))).forEach(n=>{e.push(n.start.parent),t.remove(n)}),e.forEach(n=>{let i=n;for(;i.parent&&i.isEmpty;){const r=t.createRangeOn(i);i=i.parent,t.remove(r)}})}class I0{constructor(t,e,n){this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null,this._nodeToSelect=null,this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._documentFragment=e.createDocumentFragment(),this._documentFragmentPosition=e.createPositionAt(this._documentFragment,0)}handleNodes(t){for(const e of Array.from(t))this._handleNode(e);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(t){const e=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(t);if(n.isAfter(e)){if(this._lastNode=t,this.position.parent!=t||!this.position.isAtEnd)throw new y("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this._nodeToSelect?z._createOn(this._nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new z(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(t){if(this.schema.isObject(t))return void this._handleObject(t);let e=this._checkAndAutoParagraphToAllowedPosition(t);e||(e=this._checkAndSplitToAllowedPosition(t),e)?(this._appendToFragment(t),this._firstNode||(this._firstNode=t),this._lastNode=t):this._handleDisallowedNode(t)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const t=te.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=t.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=t.toPosition(),t.detach()}_handleObject(t){this._checkAndSplitToAllowedPosition(t)?this._appendToFragment(t):this._tryAutoparagraphing(t)}_handleDisallowedNode(t){t.is("element")?this.handleNodes(t.getChildren()):this._tryAutoparagraphing(t)}_appendToFragment(t){if(!this.schema.checkChild(this.position,t))throw new y("insertcontent-wrong-position",this,{node:t,position:this.position});this.writer.insert(t,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(t.offsetSize),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this._nodeToSelect=t:this._nodeToSelect=null,this._filterAttributesOf.push(t)}_setAffectedBoundaries(t){this._affectedStart||(this._affectedStart=te.fromPosition(t,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(t)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=te.fromPosition(t,"toNext"))}_mergeOnLeft(){const t=this._firstNode;if(!(t instanceof wt)||!this._canMergeLeft(t))return;const e=te._createBefore(t);e.stickiness="toNext";const n=te.fromPosition(this.position,"toNext");this._affectedStart.isEqual(e)&&(this._affectedStart.detach(),this._affectedStart=te._createAt(e.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=te._createAt(e.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_mergeOnRight(){const t=this._lastNode;if(!(t instanceof wt)||!this._canMergeRight(t))return;const e=te._createAfter(t);if(e.stickiness="toNext",!this.position.isEqual(e))throw new y("insertcontent-invalid-insertion-position",this);this.position=F._createAt(e.nodeBefore,"end");const n=te.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(e)&&(this._affectedEnd.detach(),this._affectedEnd=te._createAt(e.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=te._createAt(e.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_canMergeLeft(t){const e=t.previousSibling;return e instanceof wt&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(e,t)}_canMergeRight(t){const e=t.nextSibling;return e instanceof wt&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(t,e)}_tryAutoparagraphing(t){const e=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,e)&&this.schema.checkChild(e,t)&&(e._appendChild(t),this._handleNode(e))}_checkAndAutoParagraphToAllowedPosition(t){if(this.schema.checkChild(this.position.parent,t))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",t))return!1;this._insertPartialFragment();const e=this.writer.createElement("paragraph");return this.writer.insert(e,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=e,this.position=this.writer.createPositionAt(e,0),!0}_checkAndSplitToAllowedPosition(t){const e=this._getAllowedIn(this.position.parent,t);if(!e)return!1;for(e!=this.position.parent&&this._insertPartialFragment();e!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===e&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(t,e){return this.schema.checkChild(t,e)?t:this.schema.isLimit(t)?null:this._getAllowedIn(t.parent,e)}}function zu(o,t,e="auto"){const n=o.getSelectedElement();if(n&&t.schema.isObject(n)&&!t.schema.isInline(n))return e=="before"||e=="after"?t.createRange(t.createPositionAt(n,e)):t.createRangeOn(n);const i=Gt(o.getSelectedBlocks());if(!i)return t.createRange(o.focus);if(i.isEmpty)return t.createRange(t.createPositionAt(i,0));const r=t.createPositionAfter(i);return o.focus.isTouching(r)?t.createRange(r):t.createRange(t.createPositionBefore(i))}function T0(o,t,e,n={}){if(!o.schema.isObject(t))throw new y("insertobject-element-not-an-object",o,{object:t});const i=e||o.document.selection;let r=i;n.findOptimalPosition&&o.schema.isBlock(t)&&(r=o.createSelection(zu(i,o,n.findOptimalPosition)));const s=Gt(i.getSelectedBlocks()),a={};return s&&Object.assign(a,o.schema.getAttributesWithProperty(s,"copyOnReplace",!0)),o.change(c=>{r.isCollapsed||o.deleteContent(r,{doNotAutoparagraph:!0});let l=t;const d=r.anchor.parent;!o.schema.checkChild(d,t)&&o.schema.checkChild(d,"paragraph")&&o.schema.checkChild("paragraph",t)&&(l=c.createElement("paragraph"),c.insert(t,l)),o.schema.setAllowedAttributes(l,a,c);const h=o.insertContent(l,r);return h.isCollapsed||n.setSelection&&function(u,g,m,k){const _=u.model;if(m=="on")return void u.setSelection(g,"on");if(m!="after")throw new y("insertobject-invalid-place-parameter-value",_);let v=g.nextSibling;if(_.schema.isInline(g))return void u.setSelection(g,"after");!(v&&_.schema.checkChild(v,"$text"))&&_.schema.checkChild(g.parent,"paragraph")&&(v=u.createElement("paragraph"),_.schema.setAllowedAttributes(v,k,u),_.insertContent(v,u.createPositionAfter(g))),v&&u.setSelection(v,0)}(c,t,n.setSelection,a),h})}const M0=' ,.?!:;"-()';function B0(o,t){const{isForward:e,walker:n,unit:i,schema:r,treatEmojiAsSingleUnit:s}=o,{type:a,item:c,nextPosition:l}=t;if(a=="text")return o.unit==="word"?function(d,h){let u=d.position.textNode;for(u||(u=h?d.position.nodeAfter:d.position.nodeBefore);u&&u.is("$text");){const g=d.position.offset-u.startOffset;if(z0(u,g,h))u=h?d.position.nodeAfter:d.position.nodeBefore;else{if(P0(u.data,g,h))break;d.next()}}return d.position}(n,e):function(d,h,u){const g=d.position.textNode;if(g){const m=g.data;let k=d.position.offset-g.startOffset;for(;$a(m,k)||h=="character"&&Ya(m,k)||u&&nd(m,k);)d.next(),k=d.position.offset-g.startOffset}return d.position}(n,i,s);if(a==(e?"elementStart":"elementEnd")){if(r.isSelectable(c))return F._createAt(c,e?"after":"before");if(r.checkChild(l,"$text"))return l}else{if(r.isLimit(c))return void n.skip(()=>!0);if(r.checkChild(l,"$text"))return l}}function N0(o,t){const e=o.root,n=F._createAt(e,t?"end":0);return t?new z(o,n):new z(n,o)}function P0(o,t,e){const n=t+(e?0:-1);return M0.includes(o.charAt(n))}function z0(o,t,e){return t===(e?o.offsetSize:0)}class O0 extends ft(){constructor(){super(),this.markers=new y0,this.document=new b0(this),this.schema=new TA,this._pendingChanges=[],this._currentWriter=null,["deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((t,e)=>{if(e.name==="$marker")return!0}),DA(this),this.document.registerPostFixer(qh),this.on("insertContent",(t,[e,n])=>{t.return=function(i,r,s){return i.change(a=>{const c=s||i.document.selection;c.isCollapsed||i.deleteContent(c,{doNotAutoparagraph:!0});const l=new I0(i,a,c.anchor),d=[];let h;if(r.is("documentFragment")){if(r.markers.size){const m=[];for(const[k,_]of r.markers){const{start:v,end:T}=_,O=v.isEqual(T);m.push({position:v,name:k,isCollapsed:O},{position:T,name:k,isCollapsed:O})}m.sort(({position:k},{position:_})=>k.isBefore(_)?1:-1);for(const{position:k,name:_,isCollapsed:v}of m){let T=null,O=null;const W=k.parent===r&&k.isAtStart,Q=k.parent===r&&k.isAtEnd;W||Q?v&&(O=W?"start":"end"):(T=a.createElement("$marker"),a.insert(T,k)),d.push({name:_,element:T,collapsed:O})}}h=r.getChildren()}else h=[r];l.handleNodes(h);let u=l.getSelectionRange();if(r.is("documentFragment")&&d.length){const m=u?ke.fromRange(u):null,k={};for(let _=d.length-1;_>=0;_--){const{name:v,element:T,collapsed:O}=d[_],W=!k[v];if(W&&(k[v]=[]),T){const Q=a.createPositionAt(T,"before");k[v].push(Q),a.remove(T)}else{const Q=l.getAffectedRange();if(!Q){O&&k[v].push(l.position);continue}O?k[v].push(Q[O]):k[v].push(W?Q.start:Q.end)}}for(const[_,[v,T]]of Object.entries(k))v&&T&&v.root===T.root&&a.addMarker(_,{usingOperation:!0,affectsData:!0,range:new z(v,T)});m&&(u=m.toRange(),m.detach())}u&&(c instanceof Oe?a.setSelection(u):c.setTo(u));const g=l.getAffectedRange()||i.createRange(c.anchor);return l.destroy(),g})}(this,e,n)}),this.on("insertObject",(t,[e,n,i])=>{t.return=T0(this,e,n,i)}),this.on("canEditAt",t=>{const e=!this.document.isReadOnly;t.return=e,e||t.stop()})}change(t){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new Go,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}catch(e){y.rethrowUnexpectedError(e,this)}}enqueueChange(t,e){try{t?typeof t=="function"?(e=t,t=new Go):t instanceof Go||(t=new Go(t)):t=new Go,this._pendingChanges.push({batch:t,callback:e}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){y.rethrowUnexpectedError(n,this)}}applyOperation(t){t._execute()}insertContent(t,e,n,...i){const r=Nc(e,n);return this.fire("insertContent",[t,r,n,...i])}insertObject(t,e,n,i,...r){const s=Nc(e,n);return this.fire("insertObject",[t,s,i,i,...r])}deleteContent(t,e){S0(this,t,e)}modifySelection(t,e){(function(n,i,r={}){const s=n.schema,a=r.direction!="backward",c=r.unit?r.unit:"character",l=!!r.treatEmojiAsSingleUnit,d=i.focus,h=new Xe({boundaries:N0(d,a),singleCharacters:!0,direction:a?"forward":"backward"}),u={walker:h,schema:s,isForward:a,unit:c,treatEmojiAsSingleUnit:l};let g;for(;g=h.next();){if(g.done)return;const m=B0(u,g.value);if(m)return void(i instanceof Oe?n.change(k=>{k.setSelectionFocus(m)}):i.setFocus(m))}})(this,t,e)}getSelectedContent(t){return function(e,n){return e.change(i=>{const r=i.createDocumentFragment(),s=n.getFirstRange();if(!s||s.isCollapsed)return r;const a=s.start.root,c=s.start.getCommonPath(s.end),l=a.getNodeByPath(c);let d;d=s.start.parent==s.end.parent?s:i.createRange(i.createPositionAt(l,s.start.path[c.length]),i.createPositionAt(l,s.end.path[c.length]+1));const h=d.end.offset-d.start.offset;for(const u of d.getItems({shallow:!0}))u.is("$textProxy")?i.appendText(u.data,u.getAttributes(),r):i.append(i.cloneElement(u,!0),r);if(d!=s){const u=s._getTransformedByMove(d.start,i.createPositionAt(r,0),h)[0],g=i.createRange(i.createPositionAt(r,0),u.start);Pu(i.createRange(u.end,i.createPositionAt(r,"end")),i),Pu(g,i)}return r})}(this,t)}hasContent(t,e={}){const n=t instanceof z?t:z._createIn(t);if(n.isCollapsed)return!1;const{ignoreWhitespaces:i=!1,ignoreMarkers:r=!1}=e;if(!r){for(const s of this.markers.getMarkersIntersectingRange(n))if(s.affectsData)return!0}for(const s of n.getItems())if(this.schema.isContent(s)&&(!s.is("$textProxy")||!i||s.data.search(/\S/)!==-1))return!0;return!1}canEditAt(t){const e=Nc(t);return this.fire("canEditAt",[e])}createPositionFromPath(t,e,n){return new F(t,e,n)}createPositionAt(t,e){return F._createAt(t,e)}createPositionAfter(t){return F._createAfter(t)}createPositionBefore(t){return F._createBefore(t)}createRange(t,e){return new z(t,e)}createRangeIn(t){return z._createIn(t)}createRangeOn(t){return z._createOn(t)}createSelection(...t){return new fe(...t)}createBatch(t){return new Go(t)}createOperationFromJSON(t){return JA.fromJSON(t,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const t=[];this.fire("_beforeChanges");try{for(;this._pendingChanges.length;){const e=this._pendingChanges[0].batch;this._currentWriter=new E0(this,e);const n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}}finally{this._pendingChanges.length=0,this._currentWriter=null,this.fire("_afterChanges")}return t}}function Nc(o,t){if(o)return o instanceof fe||o instanceof Oe?o:o instanceof io?t||t===0?new fe(o,t):o.is("rootElement")?new fe(o,"in"):new fe(o,"on"):new fe(o)}class L0 extends zn{constructor(){super(...arguments),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}class Pc extends zn{constructor(){super(...arguments),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(t){this.fire(t.type,t)}}class co{constructor(t){this.document=t}createDocumentFragment(t){return new oo(this.document,t)}createElement(t,e,n){return new pe(this.document,t,e,n)}createText(t){return new Ct(this.document,t)}clone(t,e=!1){return t._clone(e)}appendChild(t,e){return e._appendChild(t)}insertChild(t,e,n){return n._insertChild(t,e)}removeChildren(t,e,n){return n._removeChildren(t,e)}remove(t){const e=t.parent;return e?this.removeChildren(e.getChildIndex(t),1,e):[]}replace(t,e){const n=t.parent;if(n){const i=n.getChildIndex(t);return this.removeChildren(i,1,n),this.insertChild(i,e,n),!0}return!1}unwrapElement(t){const e=t.parent;if(e){const n=e.getChildIndex(t);this.remove(t),this.insertChild(n,t.getChildren(),e)}}rename(t,e){const n=new pe(this.document,t,e.getAttributes(),e.getChildren());return this.replace(e,n)?n:null}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){Ht(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}createPositionAt(t,e){return H._createAt(t,e)}createPositionAfter(t){return H._createAfter(t)}createPositionBefore(t){return H._createBefore(t)}createRange(t,e){return new X(t,e)}createRangeOn(t){return X._createOn(t)}createRangeIn(t){return X._createIn(t)}createSelection(...t){return new Ne(...t)}}class j0{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){const n=this.get(t);if(!n)throw new y("commandcollection-command-not-found",this,{commandName:t});return n.execute(...e)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const t of this.commands())t.destroy()}}class R0 extends ft(){constructor(t={}){super();const e=this.constructor,n=t.language||e.defaultConfig&&e.defaultConfig.language;this._context=t.context||new Bd({language:n}),this._context._addEditor(this,!t.context);const i=Array.from(e.builtinPlugins||[]);this.config=new Ye(t,e.defaultConfig),this.config.define("plugins",i),this.config.define(this._context._getEditorConfig()),this.plugins=new Md(this,i,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new j0,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new O0,this.on("change:isReadOnly",()=>{this.model.document.isReadOnly=this.isReadOnly});const r=new dw;this.data=new ZA(this.model,r),this.editing=new SA(this.model,r),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new QA([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new Ib(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(t){throw new y("editor-isreadonly-has-no-setter")}enableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new y("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)||(this._readOnlyLocks.add(t),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new y("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)&&(this._readOnlyLocks.delete(t),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const t=this.config,e=t.get("plugins"),n=t.get("removePlugins")||[],i=t.get("extraPlugins")||[],r=t.get("substitutePlugins")||[];return this.plugins.init(e.concat(i),n,r)}destroy(){let t=Promise.resolve();return this.state=="initializing"&&(t=new Promise(e=>this.once("ready",e))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(t,...e){try{return this.commands.execute(t,...e)}catch(n){y.rethrowUnexpectedError(n,this)}}focus(){this.editing.view.focus()}static create(...t){throw new Error("This is an abstract method.")}}function xs(o){return class extends o{setData(t){this.data.set(t)}getData(t){return this.data.get(t)}}}{const o=xs(Object);xs.setData=o.prototype.setData,xs.getData=o.prototype.getData}function zc(o){return class extends o{updateSourceElement(t=this.data.get()){if(!this.sourceElement)throw new y("editor-missing-sourceelement",this);const e=this.config.get("updateSourceElementOnDestroy"),n=this.sourceElement instanceof HTMLTextAreaElement;Yk(this.sourceElement,e||n?t:"")}}}zc.updateSourceElement=zc(Object).prototype.updateSourceElement;class Ou extends cs{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new Ie({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if(typeof t!="string")throw new y("pendingactions-add-invalid-message",this);const e=new(ft());return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const Tt={bold:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',history:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 1a9 9 0 1 1-8.027 13.075l1.128-1.129A7.502 7.502 0 0 0 18.5 10a7.5 7.5 0 1 0-14.962.759l-.745-.746-.76.76A9 9 0 0 1 11 1z"/><path d="M.475 8.17a.75.75 0 0 1 .978.047l.075.082 1.284 1.643 1.681-1.284a.75.75 0 0 1 .978.057l.073.083a.75.75 0 0 1-.057.978l-.083.073-2.27 1.737a.75.75 0 0 1-.973-.052l-.074-.082-1.741-2.23a.75.75 0 0 1 .13-1.052z"/><path d="M11.5 5v4.999l3.196 3.196-1.06 1.06L10.1 10.72l-.1-.113V5z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',loupe:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.68 13.74h-.001l4.209 4.208a1 1 0 1 0 1.414-1.414l-4.267-4.268a6 6 0 1 0-1.355 1.474ZM13 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/></svg>',importExport:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 4.5 14 0H3v12.673l.868-1.041c.185-.222.4-.402.632-.54V1.5h8v5h5v7.626a2.24 2.24 0 0 1 1.5.822V4.5ZM14 5V2l3.3 3H14Zm-3.692 12.5c.062.105.133.206.213.303L11.52 19H8v-.876a2.243 2.243 0 0 0 1.82-.624h.488Zm7.518-.657a.75.75 0 0 0-1.152-.96L15.5 17.29V12H14v5.29l-1.174-1.408a.75.75 0 0 0-1.152.96l2.346 2.816a.95.95 0 0 0 1.46 0l2.346-2.815Zm-15.056-.38a.75.75 0 0 1-.096-1.056l2.346-2.815a.95.95 0 0 1 1.46 0l2.346 2.815a.75.75 0 1 1-1.152.96L6.5 14.96V20H5v-5.04l-1.174 1.408a.75.75 0 0 1-1.056.096Z"/></svg>',paragraph:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5.5H7v5h3.5a2.5 2.5 0 1 0 0-5zM5 3h6.5v.025a5 5 0 0 1 0 9.95V13H7v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>',plus:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 0 0-1 1v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1Z"/></svg>',text:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555Zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13Z"/><path d="m12.09 17-.534-1.292.848-1.971.545 1.319L12.113 17h-.023Zm1.142-5.187.545 1.319L15.5 9.13l1.858 4.316h-3.45l.398.965h3.467L18.887 17H20l-3.873-9h-1.254l-1.641 3.813Z"/></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>',dragIndicator:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.25a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M12 3.25a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M5 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M12 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M5 16.75a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M12 16.75a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/></svg>'};var Lu=U(5542),F0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Lu.Z,F0),Lu.Z.locals;const{threeVerticalDots:ju}=Tt,V0={alignLeft:Tt.alignLeft,bold:Tt.bold,importExport:Tt.importExport,paragraph:Tt.paragraph,plus:Tt.plus,text:Tt.text,threeVerticalDots:Tt.threeVerticalDots,pilcrow:Tt.pilcrow,dragIndicator:Tt.dragIndicator};class Oc extends nt{constructor(t,e){super(t);const n=this.bindTemplate,i=this.t;this.options=e||{},this.set("ariaLabel",i("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new ce,this.keystrokes=new Te,this.set("class",void 0),this.set("isCompact",!1),this.itemsView=new U0(t),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const r=t.uiLanguageDirection==="rtl";this._focusCycler=new Pn({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[r?"arrowright":"arrowleft","arrowup"],focusNext:[r?"arrowleft":"arrowright","arrowdown"]}});const s=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var a;this.options.shouldGroupWhenFull&&this.options.isFloating&&s.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:s,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")},tabindex:-1},children:this.children,on:{mousedown:(a=this,a.bindTemplate.to(c=>{c.target===a.element&&c.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new q0(this):new H0(this)}render(){super.render(),this.focusTracker.add(this.element);for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e,n){this.items.addMany(this._buildItemsFromConfig(t,e,n))}_buildItemsFromConfig(t,e,n){const i=Dd(t),r=n||i.removeItems;return this._cleanItemsConfiguration(i.items,e,r).map(s=>Dt(s)?this._createNestedToolbarDropdown(s,e,r):s==="|"?new Ed:s==="-"?new Sb:e.create(s)).filter(s=>!!s)}_cleanItemsConfiguration(t,e,n){const i=t.filter((r,s,a)=>r==="|"||n.indexOf(r)===-1&&(r==="-"?!this.options.shouldGroupWhenFull||(G("toolbarview-line-break-ignored-when-grouping-items",a),!1):!(!Dt(r)&&!e.has(r))||(G("toolbarview-item-unavailable",{item:r}),!1)));return this._cleanSeparatorsAndLineBreaks(i)}_cleanSeparatorsAndLineBreaks(t){const e=s=>s!=="-"&&s!=="|",n=t.length,i=t.findIndex(e);if(i===-1)return[];const r=n-t.slice().reverse().findIndex(e);return t.slice(i,r).filter((s,a,c)=>e(s)?!0:!(a>0&&c[a-1]===s))}_createNestedToolbarDropdown(t,e,n){let{label:i,icon:r,items:s,tooltip:a=!0,withText:c=!1}=t;if(s=this._cleanItemsConfiguration(s,e,n),!s.length)return null;const l=jn(this.locale);return i||G("toolbarview-nested-toolbar-dropdown-missing-label",t),l.class="ck-toolbar__nested-toolbar-dropdown",l.buttonView.set({label:i,tooltip:a,withText:!!c}),r!==!1?l.buttonView.icon=V0[r]||r||ju:l.buttonView.withText=!0,jc(l,()=>l.toolbarView._buildItemsFromConfig(s,e,n)),l}}class U0 extends nt{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class H0{constructor(t){const e=t.bindTemplate;t.set("isVertical",!1),t.itemsView.children.bindTo(t.items).using(n=>n),t.focusables.bindTo(t.items).using(n=>n),t.extendTemplate({attributes:{class:[e.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class q0{constructor(t){this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,this.view=t,this.viewChildren=t.children,this.viewFocusables=t.focusables,this.viewItemsView=t.itemsView,this.viewFocusTracker=t.focusTracker,this.viewLocale=t.locale,this.ungroupedItems=t.createCollection(),this.groupedItems=t.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),t.itemsView.children.bindTo(this.ungroupedItems).using(e=>e),this.ungroupedItems.on("change",this._updateFocusCycleableItems.bind(this)),t.children.on("change",this._updateFocusCycleableItems.bind(this)),t.items.on("change",(e,n)=>{const i=n.index,r=Array.from(n.added);for(const s of n.removed)i>=this.ungroupedItems.length?this.groupedItems.remove(s):this.ungroupedItems.remove(s);for(let s=i;s<i+r.length;s++){const a=r[s-i];s>this.ungroupedItems.length?this.groupedItems.add(a,s-this.ungroupedItems.length):this.ungroupedItems.add(a,s)}this._updateGrouping()}),t.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(t){this.viewElement=t.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(t)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!Zn(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const t=this.groupedItems.length;let e;for(;this._areItemsOverflowing;)this._groupLastItem(),e=!0;if(!e&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==t&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const t=this.viewElement,e=this.viewLocale.uiLanguageDirection,n=new ht(t.lastChild),i=new ht(t);if(!this.cachedPadding){const r=Z.window.getComputedStyle(t),s=e==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(r[s])}return e==="ltr"?n.right>i.right-this.cachedPadding:n.left<i.left+this.cachedPadding}_enableGroupingOnResize(){let t;this.resizeObserver=new Ri(this.viewElement,e=>{t&&t===e.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),t=e.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(t){t.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new Ed),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const t=this.viewLocale,e=t.t,n=jn(t);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=t.uiLanguageDirection==="ltr"?"sw":"se",jc(n,this.groupedItems),n.buttonView.set({label:e("Show more items"),tooltip:!0,tooltipPosition:t.uiLanguageDirection==="rtl"?"se":"sw",icon:ju}),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(t=>{this.viewFocusables.add(t)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}class Es extends nt{constructor(t){super(t);const e=this.bindTemplate,n=`ck-editor__label_${q()}`,i=new Fu(t);this.children=this.createCollection(),this.children.addMany([this._createLabel(n),i]),this.set({label:"",isVisible:!0}),i.set({role:"group",ariaLabelledBy:n}),i.focusTracker.destroy(),i.keystrokes.destroy(),this.items=i.items,this.setTemplate({tag:"li",attributes:{role:"presentation",class:["ck","ck-list__group",e.if("isVisible","ck-hidden",r=>!r)]},children:this.children})}_createLabel(t){const e=new nt(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{id:t},children:[{text:n.to("label")}]}),e}focus(){this.items.first&&this.items.first.focus()}}var Ru=U(1046),G0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Ru.Z,G0),Ru.Z.locals;class Fu extends nt{constructor(t){super(t),this._listItemGroupToChangeListeners=new WeakMap;const e=this.bindTemplate;this.focusables=new pn,this.items=this.createCollection(),this.focusTracker=new ce,this.keystrokes=new Te,this._focusCycler=new Pn({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.set("ariaLabel",void 0),this.set("ariaLabelledBy",void 0),this.set("role",void 0),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"],role:e.to("role"),"aria-label":e.to("ariaLabel"),"aria-labelledby":e.to("ariaLabelledBy")},children:this.items})}render(){super.render();for(const t of this.items)t instanceof Es?this._registerFocusableItemsGroup(t):this._registerFocusableListItem(t);this.items.on("change",(t,e)=>{for(const n of e.removed)n instanceof Es?this._deregisterFocusableItemsGroup(n):this._deregisterFocusableListItem(n);for(const n of Array.from(e.added).reverse())n instanceof Es?this._registerFocusableItemsGroup(n,e.index):this._registerFocusableListItem(n,e.index)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}_registerFocusableListItem(t,e){this.focusTracker.add(t.element),this.focusables.add(t,e)}_deregisterFocusableListItem(t){this.focusTracker.remove(t.element),this.focusables.remove(t)}_getOnGroupItemsChangeCallback(t){return(e,n)=>{for(const i of n.removed)this._deregisterFocusableListItem(i);for(const i of Array.from(n.added).reverse())this._registerFocusableListItem(i,this.items.getIndex(t)+n.index)}}_registerFocusableItemsGroup(t,e){Array.from(t.items).forEach((i,r)=>{const s=e!==void 0?e+r:void 0;this._registerFocusableListItem(i,s)});const n=this._getOnGroupItemsChangeCallback(t);this._listItemGroupToChangeListeners.set(t,n),t.items.on("change",n)}_deregisterFocusableItemsGroup(t){for(const e of t.items)this._deregisterFocusableListItem(e);t.items.off("change",this._listItemGroupToChangeListeners.get(t)),this._listItemGroupToChangeListeners.delete(t)}}class Vu extends nt{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!0),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item",e.if("isVisible","ck-hidden",n=>!n)],role:"presentation"},children:this.children})}focus(){this.children.first&&this.children.first.focus()}}class W0 extends nt{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var Uu=U(7686),K0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Uu.Z,K0),Uu.Z.locals;class Lc extends nt{constructor(t){super(t);const e=this.bindTemplate;this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke",void 0),this.set("withKeystroke",!1),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new Te,this.focusTracker=new ce,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",e.to("class"),e.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(t,e)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),e())}),this.keystrokes.set("arrowleft",(t,e)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),e())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const t=new Et;return t.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),t.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),t.delegate("execute").to(this),t}_createArrowView(){const t=new Et,e=t.bindTemplate;return t.icon=xd,t.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":e.to("isOn"),"aria-haspopup":!0,"aria-expanded":e.to("isOn",n=>String(n))}}),t.bind("isEnabled").to(this),t.bind("label").to(this),t.bind("tooltip").to(this),t.delegate("execute").to(this,"open"),t}}var Hu=U(7339),$0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Hu.Z,$0),Hu.Z.locals;var qu=U(3949),Y0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(qu.Z,Y0),qu.Z.locals;function jn(o,t=Db){const e=new t(o),n=new xb(o),i=new Xa(o,e,n);return e.bind("isEnabled").to(i),e instanceof Lc?e.arrowView.bind("isOn").to(i,"isOpen"):e.bind("isOn").to(i,"isOpen"),function(r){(function(s){s.on("render",()=>{M({emitter:s,activator:()=>s.isOpen,callback:()=>{s.isOpen=!1},contextElements:()=>[s.element,...s.focusTracker._elements]})})})(r),function(s){s.on("execute",a=>{a.source instanceof ss||(s.isOpen=!1)})}(r),function(s){s.focusTracker.on("change:isFocused",(a,c,l)=>{s.isOpen&&!l&&(s.isOpen=!1)})}(r),function(s){s.keystrokes.set("arrowdown",(a,c)=>{s.isOpen&&(s.panelView.focus(),c())}),s.keystrokes.set("arrowup",(a,c)=>{s.isOpen&&(s.panelView.focusLast(),c())})}(r),function(s){s.on("change:isOpen",(a,c,l)=>{if(l)return;const d=s.panelView.element;d&&d.contains(Z.document.activeElement)&&s.buttonView.focus()})}(r),function(s){s.on("change:isOpen",(a,c,l)=>{l&&s.panelView.focus()},{priority:"low"})}(r)}(i),i}function jc(o,t,e={}){o.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),o.isOpen?Gu(o,t,e):o.once("change:isOpen",()=>Gu(o,t,e),{priority:"highest"}),e.enableActiveItemFocusOnDropdownOpen&&$u(o,()=>o.toolbarView.items.find(n=>n.isOn))}function Gu(o,t,e){const n=o.locale,i=n.t,r=o.toolbarView=new Oc(n),s=typeof t=="function"?t():t;r.ariaLabel=e.ariaLabel||i("Dropdown toolbar"),e.maxWidth&&(r.maxWidth=e.maxWidth),e.class&&(r.class=e.class),e.isCompact&&(r.isCompact=e.isCompact),e.isVertical&&(r.isVertical=!0),s instanceof pn?r.items.bindTo(s).using(a=>a):r.items.addMany(s),o.panelView.children.add(r),r.items.delegate("execute").to(o)}function Wu(o,t,e={}){o.isOpen?Ku(o,t,e):o.once("change:isOpen",()=>Ku(o,t,e),{priority:"highest"}),$u(o,()=>o.listView.items.find(n=>n instanceof Vu&&n.children.first.isOn))}function Ku(o,t,e){const n=o.locale,i=o.listView=new Fu(n),r=typeof t=="function"?t():t;i.ariaLabel=e.ariaLabel,i.role=e.role,Yu(o,i.items,r,n),o.panelView.children.add(i),i.items.delegate("execute").to(o)}function $u(o,t){o.on("change:isOpen",()=>{if(!o.isOpen)return;const e=t();e&&(typeof e.focus=="function"?e.focus():G("ui-dropdown-focus-child-on-open-child-missing-focus",{view:e}))},{priority:J.low-10})}function Yu(o,t,e,n){t.bindTo(e).using(i=>{if(i.type==="separator")return new W0(n);if(i.type==="group"){const r=new Es(n);return r.set({label:i.label}),Yu(o,r.items,i.items,n),r.items.delegate("execute").to(o),r}if(i.type==="button"||i.type==="switchbutton"){const r=new Vu(n);let s;return s=i.type==="button"?new Et(n):new ss(n),s.bind(...Object.keys(i.model)).to(i.model),s.delegate("execute").to(r),r.children.add(s),r}return null})}const Ds=(o,t,e)=>{const n=new vb(o.locale);return n.set({id:t,ariaDescribedById:e}),n.bind("isReadOnly").to(o,"isEnabled",i=>!i),n.bind("hasError").to(o,"errorText",i=>!!i),n.on("input",()=>{o.errorText=null}),o.bind("isEmpty","isFocused","placeholder").to(n),n},rr=(o,t=0,e=1)=>o>e?e:o<t?t:o,ee=(o,t=0,e=Math.pow(10,t))=>Math.round(e*o)/e,Rc=o=>(o[0]==="#"&&(o=o.substring(1)),o.length<6?{r:parseInt(o[0]+o[0],16),g:parseInt(o[1]+o[1],16),b:parseInt(o[2]+o[2],16),a:o.length===4?ee(parseInt(o[3]+o[3],16)/255,2):1}:{r:parseInt(o.substring(0,2),16),g:parseInt(o.substring(2,4),16),b:parseInt(o.substring(4,6),16),a:o.length===8?ee(parseInt(o.substring(6,8),16)/255,2):1}),Z0=({h:o,s:t,v:e,a:n})=>{const i=(200-t)*e/100;return{h:ee(o),s:ee(i>0&&i<200?t*e/100/(i<=100?i:200-i)*100:0),l:ee(i/2),a:ee(n,2)}},Fc=o=>{const{h:t,s:e,l:n}=Z0(o);return`hsl(${t}, ${e}%, ${n}%)`},Q0=({h:o,s:t,v:e,a:n})=>{o=o/360*6,t/=100,e/=100;const i=Math.floor(o),r=e*(1-t),s=e*(1-(o-i)*t),a=e*(1-(1-o+i)*t),c=i%6;return{r:ee(255*[e,s,r,r,a,e][c]),g:ee(255*[a,e,e,s,r,r][c]),b:ee(255*[r,r,a,e,e,s][c]),a:ee(n,2)}},Ss=o=>{const t=o.toString(16);return t.length<2?"0"+t:t},J0=({r:o,g:t,b:e,a:n})=>{const i=n<1?Ss(ee(255*n)):"";return"#"+Ss(o)+Ss(t)+Ss(e)+i},X0=({r:o,g:t,b:e,a:n})=>{const i=Math.max(o,t,e),r=i-Math.min(o,t,e),s=r?i===o?(t-e)/r:i===t?2+(e-o)/r:4+(o-t)/r:0;return{h:ee(60*(s<0?s+6:s)),s:ee(i?r/i*100:0),v:ee(i/255*100),a:n}},Zu=(o,t)=>{if(o===t)return!0;for(const e in o)if(o[e]!==t[e])return!1;return!0},Qu={},Ju=o=>{let t=Qu[o];return t||(t=document.createElement("template"),t.innerHTML=o,Qu[o]=t),t},Vc=(o,t,e)=>{o.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:e}))};let Ko=!1;const Uc=o=>"touches"in o,Xu=(o,t)=>{const e=Uc(t)?t.touches[0]:t,n=o.el.getBoundingClientRect();Vc(o.el,"move",o.getMove({x:rr((e.pageX-(n.left+window.pageXOffset))/n.width),y:rr((e.pageY-(n.top+window.pageYOffset))/n.height)}))};class tg{constructor(t,e,n,i){const r=Ju(`<div role="slider" tabindex="0" part="${e}" ${n}><div part="${e}-pointer"></div></div>`);t.appendChild(r.content.cloneNode(!0));const s=t.querySelector(`[part=${e}]`);s.addEventListener("mousedown",this),s.addEventListener("touchstart",this),s.addEventListener("keydown",this),this.el=s,this.xy=i,this.nodes=[s.firstChild,s]}set dragging(t){const e=t?document.addEventListener:document.removeEventListener;e(Ko?"touchmove":"mousemove",this),e(Ko?"touchend":"mouseup",this)}handleEvent(t){switch(t.type){case"mousedown":case"touchstart":if(t.preventDefault(),!(e=>!(Ko&&!Uc(e)||(Ko||(Ko=Uc(e)),0)))(t)||!Ko&&t.button!=0)return;this.el.focus(),Xu(this,t),this.dragging=!0;break;case"mousemove":case"touchmove":t.preventDefault(),Xu(this,t);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":((e,n)=>{const i=n.keyCode;i>40||e.xy&&i<37||i<33||(n.preventDefault(),Vc(e.el,"move",e.getMove({x:i===39?.01:i===37?-.01:i===34?.05:i===33?-.05:i===35?1:i===36?-1:0,y:i===40?.01:i===38?-.01:0},!0)))})(this,t)}}style(t){t.forEach((e,n)=>{for(const i in e)this.nodes[n].style.setProperty(i,e[i])})}}class t_ extends tg{constructor(t){super(t,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:t}){this.h=t,this.style([{left:t/360*100+"%",color:Fc({h:t,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${ee(t)}`)}getMove(t,e){return{h:e?rr(this.h+360*t.x,0,360):360*t.x}}}class e_ extends tg{constructor(t){super(t,"saturation",'aria-label="Color"',!0)}update(t){this.hsva=t,this.style([{top:100-t.v+"%",left:`${t.s}%`,color:Fc(t)},{"background-color":Fc({h:t.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${ee(t.s)}%, Brightness ${ee(t.v)}%`)}getMove(t,e){return{s:e?rr(this.hsva.s+100*t.x,0,100):100*t.x,v:e?rr(this.hsva.v-100*t.y,0,100):Math.round(100-100*t.y)}}}const Is=Symbol("same"),Hc=Symbol("color"),eg=Symbol("hsva"),qc=Symbol("update"),ng=Symbol("parts"),og=Symbol("css"),ig=Symbol("sliders");class n_ extends HTMLElement{static get observedAttributes(){return["color"]}get[og](){return[':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',"[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}","[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}"]}get[ig](){return[e_,t_]}get color(){return this[Hc]}set color(t){if(!this[Is](t)){const e=this.colorModel.toHsva(t);this[qc](e),this[Hc]=t}}constructor(){super();const t=Ju(`<style>${this[og].join("")}</style>`),e=this.attachShadow({mode:"open"});e.appendChild(t.content.cloneNode(!0)),e.addEventListener("move",this),this[ng]=this[ig].map(n=>new n(e))}connectedCallback(){if(this.hasOwnProperty("color")){const t=this.color;delete this.color,this.color=t}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(t,e,n){const i=this.colorModel.fromAttr(n);this[Is](i)||(this.color=i)}handleEvent(t){const e=this[eg],n={...e,...t.detail};let i;this[qc](n),Zu(n,e)||this[Is](i=this.colorModel.fromHsva(n))||(this[Hc]=i,Vc(this,"color-changed",{value:i}))}[Is](t){return this.color&&this.colorModel.equal(t,this.color)}[qc](t){this[eg]=t,this[ng].forEach(e=>e.update(t))}}const o_={defaultColor:"#000",toHsva:o=>X0(Rc(o)),fromHsva:({h:o,s:t,v:e})=>J0(Q0({h:o,s:t,v:e,a:1})),equal:(o,t)=>o.toLowerCase()===t.toLowerCase()||Zu(Rc(o),Rc(t)),fromAttr:o=>o};class i_ extends n_{get colorModel(){return o_}}customElements.define("hex-color-picker",class extends i_{});var rg=U(3398),r_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(rg.Z,r_),rg.Z.locals;var sg=U(4157),s_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(sg.Z,s_),sg.Z.locals;class a_{constructor(t){this._components=new Map,this.editor=t}*names(){for(const t of this._components.values())yield t.originalName}add(t,e){this._components.set(Gc(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new y("componentfactory-item-missing",this,{name:t});return this._components.get(Gc(t)).callback(this.editor.locale)}has(t){return this._components.has(Gc(t))}}function Gc(o){return String(o).toLowerCase()}var ag=U(8793),c_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(ag.Z,c_),ag.Z.locals;var l_=Object.defineProperty,cg=Object.getOwnPropertySymbols,d_=Object.prototype.hasOwnProperty,h_=Object.prototype.propertyIsEnumerable,lg=(o,t,e)=>t in o?l_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,ut=(o,t)=>{for(var e in t||(t={}))d_.call(t,e)&&lg(o,e,t[e]);if(cg)for(var e of cg(t))h_.call(t,e)&&lg(o,e,t[e]);return o};const dg=Fi("px"),hg=Z.document.body,u_={top:-99999,left:-99999,name:"arrowless",config:{withArrow:!1}},Wc=class extends nt{constructor(o){super(o);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class",void 0),this._pinWhenIsVisibleCallback=null,this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",e=>`ck-balloon-panel_${e}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",dg),left:t.to("left",dg)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(o){this.show();const t=Wc.defaultPositions,e=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:hg,fitInViewport:!0},o),n=Wc._getOptimalPosition(e)||u_,i=parseInt(n.left),r=parseInt(n.top),s=n.name,a=n.config||{},{withArrow:c=!0}=a;this.top=r,this.left=i,this.position=s,this.withArrow=c}pin(o){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(o):this._stopPinning()},this._startPinning(o),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(o){this.attachTo(o);const t=Kc(o.target),e=o.limiter?Kc(o.limiter):hg;this.listenTo(Z.document,"scroll",(n,i)=>{const r=i.target,s=t&&r.contains(t),a=e&&r.contains(e);!s&&!a&&t&&e||this.attachTo(o)},{useCapture:!0}),this.listenTo(Z.window,"resize",()=>{this.attachTo(o)})}_stopPinning(){this.stopListening(Z.document,"scroll"),this.stopListening(Z.window,"resize")}};let he=Wc;function Kc(o){return Xt(o)?o:es(o)?o.commonAncestorContainer:typeof o=="function"?Kc(o()):null}function ug(o={}){const{sideOffset:t=he.arrowSideOffset,heightOffset:e=he.arrowHeightOffset,stickyVerticalOffset:n=he.stickyVerticalOffset,config:i}=o;return{northWestArrowSouthWest:(a,c)=>ut({top:r(a,c),left:a.left-t,name:"arrow_sw"},i&&{config:i}),northWestArrowSouthMiddleWest:(a,c)=>ut({top:r(a,c),left:a.left-.25*c.width-t,name:"arrow_smw"},i&&{config:i}),northWestArrowSouth:(a,c)=>ut({top:r(a,c),left:a.left-c.width/2,name:"arrow_s"},i&&{config:i}),northWestArrowSouthMiddleEast:(a,c)=>ut({top:r(a,c),left:a.left-.75*c.width+t,name:"arrow_sme"},i&&{config:i}),northWestArrowSouthEast:(a,c)=>ut({top:r(a,c),left:a.left-c.width+t,name:"arrow_se"},i&&{config:i}),northArrowSouthWest:(a,c)=>ut({top:r(a,c),left:a.left+a.width/2-t,name:"arrow_sw"},i&&{config:i}),northArrowSouthMiddleWest:(a,c)=>ut({top:r(a,c),left:a.left+a.width/2-.25*c.width-t,name:"arrow_smw"},i&&{config:i}),northArrowSouth:(a,c)=>ut({top:r(a,c),left:a.left+a.width/2-c.width/2,name:"arrow_s"},i&&{config:i}),northArrowSouthMiddleEast:(a,c)=>ut({top:r(a,c),left:a.left+a.width/2-.75*c.width+t,name:"arrow_sme"},i&&{config:i}),northArrowSouthEast:(a,c)=>ut({top:r(a,c),left:a.left+a.width/2-c.width+t,name:"arrow_se"},i&&{config:i}),northEastArrowSouthWest:(a,c)=>ut({top:r(a,c),left:a.right-t,name:"arrow_sw"},i&&{config:i}),northEastArrowSouthMiddleWest:(a,c)=>ut({top:r(a,c),left:a.right-.25*c.width-t,name:"arrow_smw"},i&&{config:i}),northEastArrowSouth:(a,c)=>ut({top:r(a,c),left:a.right-c.width/2,name:"arrow_s"},i&&{config:i}),northEastArrowSouthMiddleEast:(a,c)=>ut({top:r(a,c),left:a.right-.75*c.width+t,name:"arrow_sme"},i&&{config:i}),northEastArrowSouthEast:(a,c)=>ut({top:r(a,c),left:a.right-c.width+t,name:"arrow_se"},i&&{config:i}),southWestArrowNorthWest:a=>ut({top:s(a),left:a.left-t,name:"arrow_nw"},i&&{config:i}),southWestArrowNorthMiddleWest:(a,c)=>ut({top:s(a),left:a.left-.25*c.width-t,name:"arrow_nmw"},i&&{config:i}),southWestArrowNorth:(a,c)=>ut({top:s(a),left:a.left-c.width/2,name:"arrow_n"},i&&{config:i}),southWestArrowNorthMiddleEast:(a,c)=>ut({top:s(a),left:a.left-.75*c.width+t,name:"arrow_nme"},i&&{config:i}),southWestArrowNorthEast:(a,c)=>ut({top:s(a),left:a.left-c.width+t,name:"arrow_ne"},i&&{config:i}),southArrowNorthWest:a=>ut({top:s(a),left:a.left+a.width/2-t,name:"arrow_nw"},i&&{config:i}),southArrowNorthMiddleWest:(a,c)=>ut({top:s(a),left:a.left+a.width/2-.25*c.width-t,name:"arrow_nmw"},i&&{config:i}),southArrowNorth:(a,c)=>ut({top:s(a),left:a.left+a.width/2-c.width/2,name:"arrow_n"},i&&{config:i}),southArrowNorthMiddleEast:(a,c)=>ut({top:s(a),left:a.left+a.width/2-.75*c.width+t,name:"arrow_nme"},i&&{config:i}),southArrowNorthEast:(a,c)=>ut({top:s(a),left:a.left+a.width/2-c.width+t,name:"arrow_ne"},i&&{config:i}),southEastArrowNorthWest:a=>ut({top:s(a),left:a.right-t,name:"arrow_nw"},i&&{config:i}),southEastArrowNorthMiddleWest:(a,c)=>ut({top:s(a),left:a.right-.25*c.width-t,name:"arrow_nmw"},i&&{config:i}),southEastArrowNorth:(a,c)=>ut({top:s(a),left:a.right-c.width/2,name:"arrow_n"},i&&{config:i}),southEastArrowNorthMiddleEast:(a,c)=>ut({top:s(a),left:a.right-.75*c.width+t,name:"arrow_nme"},i&&{config:i}),southEastArrowNorthEast:(a,c)=>ut({top:s(a),left:a.right-c.width+t,name:"arrow_ne"},i&&{config:i}),westArrowEast:(a,c)=>ut({top:a.top+a.height/2-c.height/2,left:a.left-c.width-e,name:"arrow_e"},i&&{config:i}),eastArrowWest:(a,c)=>ut({top:a.top+a.height/2-c.height/2,left:a.right+e,name:"arrow_w"},i&&{config:i}),viewportStickyNorth:(a,c,l,d)=>{const h=d||l;return a.getIntersection(h)?h.height-a.height>n?null:{top:h.top+n,left:a.left+a.width/2-c.width/2,name:"arrowless",config:ut({withArrow:!1},i)}:null}};function r(a,c){return a.top-c.height-e}function s(a){return a.bottom+e}}he.arrowSideOffset=25,he.arrowHeightOffset=10,he.stickyVerticalOffset=20,he._getOptimalPosition=qa,he.defaultPositions=ug();var gg=U(3332),g_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(gg.Z,g_),gg.Z.locals;const pg="ck-tooltip",ue=class extends ve(){constructor(o){if(super(),this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._resizeObserver=null,ue._editors.add(o),ue._instance)return ue._instance;ue._instance=this,this.tooltipTextView=new nt(o.locale),this.tooltipTextView.set("text",""),this.tooltipTextView.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:this.tooltipTextView.bindTemplate.to("text")}]}),this.balloonPanelView=new he(o.locale),this.balloonPanelView.class=pg,this.balloonPanelView.content.add(this.tooltipTextView),this._pinTooltipDebounced=Yi(this._pinTooltip,600),this.listenTo(Z.document,"mouseenter",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(Z.document,"mouseleave",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(Z.document,"focus",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(Z.document,"blur",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(Z.document,"scroll",this._onScroll.bind(this),{useCapture:!0}),this._watchdogExcluded=!0}destroy(o){const t=o.ui.view&&o.ui.view.body;ue._editors.delete(o),this.stopListening(o.ui),t&&t.has(this.balloonPanelView)&&t.remove(this.balloonPanelView),ue._editors.size||(this._unpinTooltip(),this.balloonPanelView.destroy(),this.stopListening(),ue._instance=null)}static getPositioningFunctions(o){const t=ue.defaultBalloonPositions;return{s:[t.southArrowNorth,t.southArrowNorthEast,t.southArrowNorthWest],n:[t.northArrowSouth],e:[t.eastArrowWest],w:[t.westArrowEast],sw:[t.southArrowNorthEast],se:[t.southArrowNorthWest]}[o]}_onEnterOrFocus(o,{target:t}){const e=$c(t);var n;e&&e!==this._currentElementWithTooltip&&(this._unpinTooltip(),this._pinTooltipDebounced(e,{text:(n=e).dataset.ckeTooltipText,position:n.dataset.ckeTooltipPosition||"s",cssClass:n.dataset.ckeTooltipClass||""}))}_onLeaveOrBlur(o,{target:t,relatedTarget:e}){if(o.name==="mouseleave"){if(!Xt(t)||this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;const n=$c(t),i=$c(e);n&&n!==i&&this._unpinTooltip()}else{if(this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;this._unpinTooltip()}}_onScroll(o,{target:t}){this._currentElementWithTooltip&&(t.contains(this.balloonPanelView.element)&&t.contains(this._currentElementWithTooltip)||this._unpinTooltip())}_pinTooltip(o,{text:t,position:e,cssClass:n}){const i=Gt(ue._editors.values()).ui.view.body;i.has(this.balloonPanelView)||i.add(this.balloonPanelView),this.tooltipTextView.text=t,this.balloonPanelView.pin({target:o,positions:ue.getPositioningFunctions(e)}),this._resizeObserver=new Ri(o,()=>{Zn(o)||this._unpinTooltip()}),this.balloonPanelView.class=[pg,n].filter(r=>r).join(" ");for(const r of ue._editors)this.listenTo(r.ui,"update",this._updateTooltipPosition.bind(this),{priority:"low"});this._currentElementWithTooltip=o,this._currentTooltipPosition=e}_unpinTooltip(){this._pinTooltipDebounced.cancel(),this.balloonPanelView.unpin();for(const o of ue._editors)this.stopListening(o.ui,"update");this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._resizeObserver&&this._resizeObserver.destroy()}_updateTooltipPosition(){Zn(this._currentElementWithTooltip)?this.balloonPanelView.pin({target:this._currentElementWithTooltip,positions:ue.getPositioningFunctions(this._currentTooltipPosition)}):this._unpinTooltip()}};let Ts=ue;function $c(o){return Xt(o)?o.closest("[data-cke-tooltip-text]:not([data-cke-tooltip-disabled])"):null}Ts.defaultBalloonPositions=ug({heightOffset:5,sideOffset:13}),Ts._editors=new Set,Ts._instance=null;const Ms=function(o,t,e){var n=!0,i=!0;if(typeof o!="function")throw new TypeError("Expected a function");return Dt(e)&&(n="leading"in e?!!e.leading:n,i="trailing"in e?!!e.trailing:i),Yi(o,t,{leading:n,maxWait:t,trailing:i})};var p_=Object.defineProperty,mg=Object.getOwnPropertySymbols,m_=Object.prototype.hasOwnProperty,f_=Object.prototype.propertyIsEnumerable,fg=(o,t,e)=>t in o?p_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,k_=(o,t)=>{for(var e in t||(t={}))m_.call(t,e)&&fg(o,e,t[e]);if(mg)for(var e of mg(t))f_.call(t,e)&&fg(o,e,t[e]);return o};const b_=50,w_=350,A_="Powered by";class __ extends ve(){constructor(t){super(),this.editor=t,this._balloonView=null,this._lastFocusedEditableElement=null,this._showBalloonThrottled=Ms(this._showBalloon.bind(this),50,{leading:!0}),t.on("ready",this._handleEditorReady.bind(this))}destroy(){const t=this._balloonView;t&&(t.unpin(),this._balloonView=null),this._showBalloonThrottled.cancel(),this.stopListening()}_handleEditorReady(){const t=this.editor;(t.config.get("ui.poweredBy.forceVisible")||function(e){function n(g){return g.length>=40&&g.length<=255?"VALID":"INVALID"}if(!e)return"INVALID";let i="";try{i=atob(e)}catch{return"INVALID"}const r=i.split("-"),s=r[0],a=r[1];if(!a)return n(e);try{atob(a)}catch{try{if(atob(s),!atob(s).length)return n(e)}catch{return n(e)}}if(s.length<40||s.length>255)return"INVALID";let c="";try{atob(s),c=atob(a)}catch{return"INVALID"}if(c.length!==8)return"INVALID";const l=Number(c.substring(0,4)),d=Number(c.substring(4,6))-1,h=Number(c.substring(6,8)),u=new Date(l,d,h);return u<je||isNaN(Number(u))?"INVALID":"VALID"}(t.config.get("licenseKey"))!=="VALID")&&t.ui.view&&(t.ui.focusTracker.on("change:isFocused",(e,n,i)=>{this._updateLastFocusedEditableElement(),i?this._showBalloon():this._hideBalloon()}),t.ui.focusTracker.on("change:focusedElement",(e,n,i)=>{this._updateLastFocusedEditableElement(),i&&this._showBalloon()}),t.ui.on("update",()=>{this._showBalloonThrottled()}))}_createBalloonView(){const t=this.editor,e=this._balloonView=new he,n=bg(t),i=new C_(t.locale,n.label);e.content.add(i),e.set({class:"ck-powered-by-balloon"}),t.ui.view.body.add(e),t.ui.focusTracker.add(e.element),this._balloonView=e}_showBalloon(){if(!this._lastFocusedEditableElement)return;const t=function(e,n){const i=bg(e),r=i.side==="right"?function(s,a){return kg(s,a,(c,l)=>c.left+c.width-l.width-a.horizontalOffset)}(n,i):function(s,a){return kg(s,a,c=>c.left+a.horizontalOffset)}(n,i);return{target:n,positions:[r]}}(this.editor,this._lastFocusedEditableElement);t&&(this._balloonView||this._createBalloonView(),this._balloonView.pin(t))}_hideBalloon(){this._balloonView&&this._balloonView.unpin()}_updateLastFocusedEditableElement(){const t=this.editor,e=t.ui.focusTracker.isFocused,n=t.ui.focusTracker.focusedElement;if(!e||!n)return void(this._lastFocusedEditableElement=null);const i=Array.from(t.ui.getEditableElementsNames()).map(r=>t.ui.getEditableElement(r));i.includes(n)?this._lastFocusedEditableElement=n:this._lastFocusedEditableElement=i[0]}}class C_ extends nt{constructor(t,e){super(t);const n=new Qn,i=this.bindTemplate;n.set({content:`<svg xmlns="http://www.w3.org/2000/svg" width="53" height="10" viewBox="0 0 53 10"><path fill="#1C2331" d="M31.724 1.492a15.139 15.139 0 0 0 .045 1.16 2.434 2.434 0 0 0-.687-.34 3.68 3.68 0 0 0-1.103-.166 2.332 2.332 0 0 0-1.14.255 1.549 1.549 0 0 0-.686.87c-.15.41-.225.98-.225 1.712 0 .939.148 1.659.444 2.161.297.503.792.754 1.487.754.452.015.9-.094 1.294-.316.296-.174.557-.4.771-.669l.14.852h1.282V.007h-1.623v1.485ZM31 6.496a1.77 1.77 0 0 1-.494.061.964.964 0 0 1-.521-.127.758.758 0 0 1-.296-.466 3.984 3.984 0 0 1-.093-.992 4.208 4.208 0 0 1 .098-1.052.753.753 0 0 1 .307-.477 1.08 1.08 0 0 1 .55-.122c.233-.004.466.026.69.089l.483.144v2.553c-.11.076-.213.143-.307.2a1.73 1.73 0 0 1-.417.189ZM35.68 0l-.702.004c-.322.002-.482.168-.48.497l.004.581c.002.33.164.493.486.49l.702-.004c.322-.002.481-.167.48-.496L36.165.49c-.002-.33-.164-.493-.486-.491ZM36.145 2.313l-1.612.01.034 5.482 1.613-.01-.035-5.482ZM39.623.79 37.989.8 38 2.306l-.946.056.006 1.009.949-.006.024 2.983c.003.476.143.844.419 1.106.275.26.658.39 1.148.387.132 0 .293-.01.483-.03.19-.02.38-.046.57-.08.163-.028.324-.068.482-.119l-.183-1.095-.702.004a.664.664 0 0 1-.456-.123.553.553 0 0 1-.14-.422l-.016-2.621 1.513-.01-.006-1.064-1.514.01-.01-1.503ZM46.226 2.388c-.41-.184-.956-.274-1.636-.27-.673.004-1.215.101-1.627.29-.402.179-.72.505-.888.91-.18.419-.268.979-.264 1.68.004.688.1 1.24.285 1.655.172.404.495.724.9.894.414.18.957.268 1.63.264.68-.004 1.224-.099 1.632-.284.4-.176.714-.501.878-.905.176-.418.263-.971.258-1.658-.004-.702-.097-1.261-.28-1.677a1.696 1.696 0 0 0-.888-.9Zm-.613 3.607a.77.77 0 0 1-.337.501 1.649 1.649 0 0 1-1.317.009.776.776 0 0 1-.343-.497 4.066 4.066 0 0 1-.105-1.02 4.136 4.136 0 0 1 .092-1.03.786.786 0 0 1 .337-.507 1.59 1.59 0 0 1 1.316-.008.79.79 0 0 1 .344.502c.078.337.113.683.105 1.03.012.343-.019.685-.092 1.02ZM52.114 2.07a2.67 2.67 0 0 0-1.128.278c-.39.191-.752.437-1.072.73l-.157-.846-1.273.008.036 5.572 1.623-.01-.024-3.78c.35-.124.646-.22.887-.286.26-.075.53-.114.8-.118l.45-.003.144-1.546-.286.001ZM22.083 7.426l-1.576-2.532a2.137 2.137 0 0 0-.172-.253 1.95 1.95 0 0 0-.304-.29.138.138 0 0 1 .042-.04 1.7 1.7 0 0 0 .328-.374l1.75-2.71c.01-.015.025-.028.024-.048-.01-.01-.021-.007-.031-.007L20.49 1.17a.078.078 0 0 0-.075.045l-.868 1.384c-.23.366-.46.732-.688 1.099a.108.108 0 0 1-.112.06c-.098-.005-.196-.001-.294-.002-.018 0-.038.006-.055-.007.002-.02.002-.039.005-.058a4.6 4.6 0 0 0 .046-.701V1.203c0-.02-.009-.032-.03-.03h-.033L16.93 1.17c-.084 0-.073-.01-.073.076v6.491c-.001.018.006.028.025.027h1.494c.083 0 .072.007.072-.071v-2.19c0-.055-.003-.11-.004-.166a3.366 3.366 0 0 0-.05-.417h.06c.104 0 .209.002.313-.002a.082.082 0 0 1 .084.05c.535.913 1.07 1.824 1.607 2.736a.104.104 0 0 0 .103.062c.554-.003 1.107-.002 1.66-.002l.069-.003-.019-.032-.188-.304ZM27.112 6.555c-.005-.08-.004-.08-.082-.08h-2.414c-.053 0-.106-.003-.159-.011a.279.279 0 0 1-.246-.209.558.558 0 0 1-.022-.15c0-.382 0-.762-.002-1.143 0-.032.007-.049.042-.044h2.504c.029.003.037-.012.034-.038V3.814c0-.089.013-.078-.076-.078h-2.44c-.07 0-.062.003-.062-.06v-.837c0-.047.004-.093.013-.14a.283.283 0 0 1 .241-.246.717.717 0 0 1 .146-.011h2.484c.024.002.035-.009.036-.033l.003-.038.03-.496c.01-.183.024-.365.034-.548.005-.085.003-.087-.082-.094-.218-.018-.437-.038-.655-.05a17.845 17.845 0 0 0-.657-.026 72.994 72.994 0 0 0-1.756-.016 1.7 1.7 0 0 0-.471.064 1.286 1.286 0 0 0-.817.655c-.099.196-.149.413-.145.633v3.875c0 .072.003.144.011.216a1.27 1.27 0 0 0 .711 1.029c.228.113.48.167.734.158.757-.005 1.515.002 2.272-.042.274-.016.548-.034.82-.053.03-.002.043-.008.04-.041-.008-.104-.012-.208-.019-.312a69.964 69.964 0 0 1-.05-.768ZM16.14 7.415l-.127-1.075c-.004-.03-.014-.04-.044-.037a13.125 13.125 0 0 1-.998.073c-.336.01-.672.02-1.008.016-.116-.001-.233-.014-.347-.039a.746.746 0 0 1-.45-.262c-.075-.1-.132-.211-.167-.33a3.324 3.324 0 0 1-.126-.773 9.113 9.113 0 0 1-.015-.749c0-.285.022-.57.065-.852.023-.158.066-.312.127-.46a.728.728 0 0 1 .518-.443 1.64 1.64 0 0 1 .397-.048c.628-.001 1.255.003 1.882.05.022.001.033-.006.036-.026l.003-.031.06-.55c.019-.177.036-.355.057-.532.004-.034-.005-.046-.04-.056a5.595 5.595 0 0 0-1.213-.21 10.783 10.783 0 0 0-.708-.02c-.24-.003-.48.01-.719.041a3.477 3.477 0 0 0-.625.14 1.912 1.912 0 0 0-.807.497c-.185.2-.33.433-.424.688a4.311 4.311 0 0 0-.24 1.096c-.031.286-.045.572-.042.86-.006.43.024.86.091 1.286.04.25.104.497.193.734.098.279.26.53.473.734.214.205.473.358.756.446.344.11.702.17 1.063.177a8.505 8.505 0 0 0 1.578-.083 6.11 6.11 0 0 0 .766-.18c.03-.008.047-.023.037-.057a.157.157 0 0 1-.003-.025Z"/><path fill="#AFE229" d="M6.016 6.69a1.592 1.592 0 0 0-.614.21c-.23.132-.422.32-.56.546-.044.072-.287.539-.287.539l-.836 1.528.009.006c.038.025.08.046.123.063.127.046.26.07.395.073.505.023 1.011-.007 1.517-.003.29.009.58.002.869-.022a.886.886 0 0 0 .395-.116.962.962 0 0 0 .312-.286c.056-.083.114-.163.164-.249.24-.408.48-.816.718-1.226.075-.128.148-.257.222-.386l.112-.192a1.07 1.07 0 0 0 .153-.518l-1.304.023s-1.258-.005-1.388.01Z"/><path fill="#771BFF" d="m2.848 9.044.76-1.39.184-.352c-.124-.067-.245-.14-.367-.21-.346-.204-.706-.384-1.045-.6a.984.984 0 0 1-.244-.207c-.108-.134-.136-.294-.144-.46-.021-.409-.002-.818-.009-1.227-.003-.195 0-.39.003-.585.004-.322.153-.553.427-.713l.833-.488c.22-.13.44-.257.662-.385.05-.029.105-.052.158-.077.272-.128.519-.047.76.085l.044.028c.123.06.242.125.358.196.318.178.635.357.952.537.095.056.187.117.275.184.194.144.254.35.266.578.016.284.007.569.006.853-.001.28.004.558 0 .838.592-.003 1.259 0 1.259 0l.723-.013c-.003-.292-.007-.584-.007-.876 0-.524.015-1.048-.016-1.571-.024-.42-.135-.8-.492-1.067a5.02 5.02 0 0 0-.506-.339A400.52 400.52 0 0 0 5.94.787C5.722.664 5.513.524 5.282.423 5.255.406 5.228.388 5.2.373 4.758.126 4.305-.026 3.807.21c-.097.046-.197.087-.29.14A699.896 699.896 0 0 0 .783 1.948c-.501.294-.773.717-.778 1.31-.004.36-.009.718-.001 1.077.016.754-.017 1.508.024 2.261.016.304.07.6.269.848.127.15.279.28.448.382.622.4 1.283.734 1.92 1.11l.183.109Z"/></svg>
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...e?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[e]}]:[],n],on:{dragstart:i.to(r=>r.preventDefault())}}]})}}function kg(o,t,e){return(n,i)=>{const r=new ht(o);if(r.width<w_||r.height<b_)return null;let s;s=t.position==="inside"?r.bottom-i.height:r.bottom-i.height/2,s-=t.verticalOffset;const a=e(r,i),c=n.clone().moveTo(a,s).getIntersection(i.clone().moveTo(a,s)).getVisible();return!c||c.getArea()<i.getArea()?null:{top:s,left:a,name:`position_${t.position}-side_${t.side}`,config:{withArrow:!1}}}}function bg(o){const t=o.config.get("ui.poweredBy"),e=t&&t.position||"border";return k_({position:e,label:A_,verticalOffset:e==="inside"?5:0,horizontalOffset:5,side:o.locale.contentLanguageDirection==="ltr"?"right":"left"},t)}var v_=Object.defineProperty,wg=Object.getOwnPropertySymbols,y_=Object.prototype.hasOwnProperty,x_=Object.prototype.propertyIsEnumerable,Ag=(o,t,e)=>t in o?v_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class E_ extends ft(){constructor(t){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const e=t.editing.view;this.editor=t,this.componentFactory=new a_(t),this.focusTracker=new ce,this.tooltipManager=new Ts(t),this.poweredBy=new __(t),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(e.document,"layoutChanged",this.update.bind(this)),this.listenTo(e,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null,this.editor.keystrokes.stopListening(t);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor),this.focusTracker.add(e);const n=()=>{this.editor.editing.view.getDomRoot(t)||this.editor.keystrokes.listenTo(e)};this.isReady?n():this.once("ready",n)}removeEditableElement(t){const e=this._editableElementsMap.get(t);e&&(this._editableElementsMap.delete(t),this.editor.keystrokes.stopListening(e),this.focusTracker.remove(e),e.ckeditorInstance=null)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(t,e={}){t.isRendered?(this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)):t.once("render",()=>{this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)}),this._focusableToolbarDefinitions.push({toolbarView:t,options:e})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const t=this.editor,e=t.config.get("ui.viewportOffset");if(e)return e;const n=t.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const t=this.editor,e=t.editing.view;let n,i;t.keystrokes.set("Alt+F10",(r,s)=>{const a=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(a)&&!Array.from(e.domRoots.values()).includes(a)&&(n=a);const c=this._getCurrentFocusedToolbarDefinition();c&&i||(i=this._getFocusableCandidateToolbarDefinitions());for(let l=0;l<i.length;l++){const d=i.shift();if(i.push(d),d!==c&&this._focusFocusableCandidateToolbar(d)){c&&c.options.afterBlur&&c.options.afterBlur();break}}s()}),t.keystrokes.set("Esc",(r,s)=>{const a=this._getCurrentFocusedToolbarDefinition();a&&(n?(n.focus(),n=null):t.editing.view.focus(),a.options.afterBlur&&a.options.afterBlur(),s())})}_getFocusableCandidateToolbarDefinitions(){const t=[];for(const e of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=e;(Zn(n.element)||i.beforeFocus)&&t.push(e)}return t.sort((e,n)=>_g(e)-_g(n)),t}_getCurrentFocusedToolbarDefinition(){for(const t of this._focusableToolbarDefinitions)if(t.toolbarView.element&&t.toolbarView.element.contains(this.focusTracker.focusedElement))return t;return null}_focusFocusableCandidateToolbar(t){const{toolbarView:e,options:{beforeFocus:n}}=t;return n&&n(),!!Zn(e.element)&&(e.focus(),!0)}_handleScrollToTheSelection(t,e){const n=((i,r)=>{for(var s in r||(r={}))y_.call(r,s)&&Ag(i,s,r[s]);if(wg)for(var s of wg(r))x_.call(r,s)&&Ag(i,s,r[s]);return i})({top:0,bottom:0,left:0,right:0},this.viewportOffset);e.viewportOffset.top+=n.top,e.viewportOffset.bottom+=n.bottom,e.viewportOffset.left+=n.left,e.viewportOffset.right+=n.right}}function _g(o){const{toolbarView:t,options:e}=o;let n=10;return Zn(t.element)&&n--,e.isContextual&&n--,n}var Cg=U(9688),D_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Cg.Z,D_),Cg.Z.locals;class S_ extends nt{constructor(t){super(t),this.body=new ub(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class I_ extends S_{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const t=this.t,e=new Ad;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class T_ extends nt{constructor(t,e,n){super(t),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const t=this._editingView;function e(n){t.change(i=>{const r=t.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",r),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}t.isRenderingInProgress?function n(i){t.once("change:isRenderingInProgress",(r,s,a)=>{a?n(i):e(i)})}(this):e(this)}}class M_ extends T_{constructor(t,e,n,i={}){super(t,e,n);const r=t.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const t=this._editingView;t.change(e=>{const n=t.document.getRoot(this.name);e.setAttribute("aria-label",this._generateLabel(this),n)})}}var vg=U(8847),B_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(vg.Z,B_),vg.Z.locals;class Yc extends cs{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=t.namespace?`show:${t.type}:${t.namespace}`:`show:${t.type}`;this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class yg extends ft(){constructor(t,e){super(),e&&gh(this,e),t&&this.set(t)}}var xg=U(4650),N_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(xg.Z,N_),xg.Z.locals;var Eg=U(7676),P_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Eg.Z,P_),Eg.Z.locals;const Bs=Fi("px");class Ns extends V{constructor(t){super(t),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this._view||this._createPanelView(),this.hasView(t.view))throw new y("contextualballoon-add-view-exist",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new y("contextualballoon-remove-view-not-exist",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new y("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}_createPanelView(){this._view=new he(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new z_(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[r,i])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new O_(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&(t.limiter||(t=Object.assign({},t,{limiter:this.positionLimiter})),t=Object.assign({},t,{viewportOffsetConfig:this.editor.ui.viewportOffset})),t}}class z_ extends nt{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new ce,this.buttonPrevView=this._createButtonView(e("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(e("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new Et(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class O_ extends nt{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",Bs),left:n.to("left",Bs),width:n.to("width",Bs),height:n.to("height",Bs)}},children:this.content}),this.on("change:numberOfPanels",(i,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(t){for(;t--;){const e=new nt;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:i}=new ht(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:i})}}}var Dg=U(5868),L_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Dg.Z,L_),Dg.Z.locals;const $o=Fi("px");class j_ extends nt{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Me({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?$o(this._contentPanelRect.height):null)}}}).render(),this._contentPanel=new Me({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?$o(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_stickyTopOffset",n=>n&&$o(n)),bottom:e.to("_stickyBottomOffset",n=>n&&$o(n)),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(Z.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const t=new ht(this.limiterElement);let e=t.getVisible();if(e){const n=new ht(Z.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,e=e.getIntersection(n)}if(e&&t.top<e.top){const n=e.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>e.bottom){const i=Math.max(t.bottom-e.bottom,0)+this.limiterBottomOffset;t.bottom-i>t.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(i):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<t.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=t,this._stickyBottomOffset=null,this._marginLeft=$o(-Z.window.scrollX)}_stickToBottomOfLimiter(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=t,this._marginLeft=$o(-Z.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new ht(this._contentPanel)}}class R_ extends as{constructor(t,e){const n=t.t,i=Object.assign({},{showResetButton:!0,showIcon:!0,creator:Ds},e);super(t,i.creator),this.label=e.label,this._viewConfig=i,this._viewConfig.showIcon&&(this.iconView=new Qn,this.iconView.content=Tt.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new Et(t),this.resetButtonView.set({label:n("Clear"),icon:Tt.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",r=>!r),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class F_ extends nt{constructor(){super();const t=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",t.if("isVisible","ck-hidden",e=>!e)],tabindex:-1},children:[{tag:"span",children:[{text:[t.to("primaryText")]}]},{tag:"span",children:[{text:[t.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class V_ extends nt{constructor(t){super(t),this.children=this.createCollection(),this.focusTracker=new ce,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new Pn({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const t of this.children)this.focusTracker.add(t.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var Sg=/[\\^$.*+?()[\]{}|]/g,U_=RegExp(Sg.source);const Ig=function(o){return(o=ic(o))&&U_.test(o)?o.replace(Sg,"\\$&"):o};var Tg=U(6770),H_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Tg.Z,H_),Tg.Z.locals;var q_=Object.defineProperty,Mg=Object.getOwnPropertySymbols,G_=Object.prototype.hasOwnProperty,W_=Object.prototype.propertyIsEnumerable,Bg=(o,t,e)=>t in o?q_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class K_ extends nt{constructor(t,e){super(t),this._config=e,this.filteredView=e.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new ce,this.keystrokes=new Te,this.resultsView=new V_(t),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),e.infoView&&e.infoView.instance?this.infoView=e.infoView.instance:(this.infoView=new F_,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new Pn({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:i,totalItemsCount:r})=>{this.resultsCount=i,this.totalItemsCount=r}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",e.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const t=e=>e.stopPropagation();for(const e of this.focusableChildren)this.focusTracker.add(e.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(t){const e=t?new RegExp(Ig(t),"ig"):null,n=this.filteredView.filter(e);this.fire("search",((i,r)=>{for(var s in r||(r={}))G_.call(r,s)&&Bg(i,s,r[s]);if(Mg)for(var s of Mg(r))W_.call(r,s)&&Bg(i,s,r[s]);return i})({query:t},n))}_createSearchTextQueryView(){const t=new R_(this.locale,this._config.queryView);return this.listenTo(t.fieldView,"input",()=>{this.search(t.fieldView.element.value)}),t.on("reset",()=>this.reset()),t.bind("isEnabled").to(this),t}_enableDefaultInfoViewBehavior(){const t=this.locale.t,e=this.infoView;function n(i,{query:r,resultsCount:s,totalItemsCount:a}){return typeof i=="function"?i(r,s,a):i}this.on("search",(i,r)=>{if(r.resultsCount)e.set({isVisible:!1});else{const s=this._config.infoView&&this._config.infoView.text;let a,c;r.totalItemsCount?s&&s.notFound?(a=s.notFound.primary,c=s.notFound.secondary):(a=t("No results found"),c=""):s&&s.noSearchableItems?(a=s.noSearchableItems.primary,c=s.noSearchableItems.secondary):(a=t("No searchable items"),c=""),e.set({primaryText:n(a,r),secondaryText:n(c,r),isVisible:!0})}})}}var Ng=U(8157),$_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Ng.Z,$_),Ng.Z.locals;const Zc=class extends K_{constructor(o,t){super(o,t),this._config=t;const e=Fi("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",i=>!i),n.to("_position",i=>`ck-search__results_${i}`)],style:{width:n.to("_width",e)}}}),this.focusTracker.on("change:isFocused",(i,r,s)=>{this._updateResultsVisibility(),s?this.resultsView.element.scrollTop=0:t.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(i,r)=>{this.resultsView.isVisible=!1,r()}),this.listenTo(Z.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(i,{value:r})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=r,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new ht(this.queryView.fieldView.element).width;const o=Zc._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:Zc.defaultResultsPositions});this.resultsView._position=o?o.name:"s"}_updateResultsVisibility(){const o=this._config.queryMinChars===void 0?0:this._config.queryMinChars,t=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&t>=o}};let Pg=Zc;Pg.defaultResultsPositions=[o=>({top:o.bottom,left:o.left,name:"s"}),(o,t)=>({top:o.top-t.height,left:o.left,name:"n"})],Pg._getOptimalPosition=qa;var zg=U(8960),Y_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(zg.Z,Y_),zg.Z.locals;var Og=U(498),Z_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Og.Z,Z_),Og.Z.locals;var Lg=U(9695),Q_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Lg.Z,Q_),Lg.Z.locals;class J_ extends E_{constructor(t,e){super(t),this.view=e,this._toolbarConfig=Dd(t.config.get("toolbar")),this._elementReplacer=new na,this.listenTo(t.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,i=e.editing.view,r=n.editable,s=i.document.getRoot();r.name=s.rootName,n.render();const a=r.element;this.setEditableElement(r.name,a),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(a),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy()}_initToolbar(){const t=this.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:e})=>e||0),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(t.toolbar)}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),i=t.sourceElement;let r;const s=t.config.get("placeholder");s&&(r=typeof s=="string"?s:s[this.view.editable.name]),!r&&i&&i.tagName.toLowerCase()==="textarea"&&(r=i.getAttribute("placeholder")),r&&(n.placeholder=r),zd({view:e,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(t,e,n){const i=this.view.stickyPanel;if(i.isSticky){const r=new ht(i.element).height;e.viewportOffset.top+=r}else{const r=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(i,"change:isSticky",r),setTimeout(()=>{this.stopListening(i,"change:isSticky",r)},20)}}}var jg=U(3143),X_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(jg.Z,X_),jg.Z.locals;class tC extends I_{constructor(t,e,n={}){super(t),this.stickyPanel=new j_(t),this.toolbar=new Oc(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new M_(t,e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Rg{constructor(t){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof t.crashNumberLimit=="number"?t.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof t.minimumNonErrorTimePeriod=="number"?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=e=>{const n="error"in e?e.error:e.reason;n instanceof Error&&this._handleError(n,e)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter(n=>n!==e)}_fire(t,...e){const n=this._listeners[t]||[];for(const i of n)i.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e instanceof ErrorEvent?e.filename:void 0,lineno:e instanceof ErrorEvent?e.lineno:void 0,colno:e instanceof ErrorEvent?e.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&t.context!==void 0&&t.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(t)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function Qc(o,t=new Set){const e=[o],n=new Set;let i=0;for(;e.length>i;){const r=e[i++];if(!n.has(r)&&eC(r)&&!t.has(r))if(n.add(r),Symbol.iterator in r)try{for(const s of r)e.push(s)}catch{}else for(const s in r)s!=="defaultValue"&&e.push(r[s])}return n}function eC(o){const t=Object.prototype.toString.call(o),e=typeof o;return!(e==="number"||e==="boolean"||e==="string"||e==="symbol"||e==="function"||t==="[object Date]"||t==="[object RegExp]"||t==="[object Module]"||o==null||o._watchdogExcluded||o instanceof EventTarget||o instanceof Event)}function Fg(o,t,e=new Set){if(o===t&&typeof(n=o)=="object"&&n!==null)return!0;var n;const i=Qc(o,e),r=Qc(t,e);for(const s of i)if(r.has(s))return!0;return!1}var nC=Object.defineProperty,oC=Object.defineProperties,iC=Object.getOwnPropertyDescriptors,Ps=Object.getOwnPropertySymbols,Vg=Object.prototype.hasOwnProperty,Ug=Object.prototype.propertyIsEnumerable,Hg=(o,t,e)=>t in o?nC(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Jc=(o,t)=>{for(var e in t||(t={}))Vg.call(t,e)&&Hg(o,e,t[e]);if(Ps)for(var e of Ps(t))Ug.call(t,e)&&Hg(o,e,t[e]);return o};class qg extends Rg{constructor(t,e={}){super(e),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=Ms(this._save.bind(this),typeof e.saveInterval=="number"?e.saveInterval:5e3),t&&(this._creator=(n,i)=>t.create(n,i)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(t=>{console.error("An error happened during the editor destroying.",t)}).then(()=>{const t={},e=[],n=this._config.rootsAttributes||{},i={};for(const[c,l]of Object.entries(this._data.roots))l.isLoaded?(t[c]="",i[c]=n[c]||{}):e.push(c);const r=(s=Jc({},this._config),a={extraPlugins:this._config.extraPlugins||[],lazyRoots:e,rootsAttributes:i,_watchdogInitialData:this._data},oC(s,iC(a)));var s,a;return delete r.initialData,r.extraPlugins.push(rC),this._initUsingData?this.create(t,r,r.context):Xt(this._elementOrData)?this.create(this._elementOrData,r,r.context):this.create(this._editables,r,r.context)}).then(()=>{this._fire("restart")})}create(t=this._elementOrData,e=this._config,n){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=t,this._initUsingData=typeof t=="string"||Object.keys(t).length>0&&typeof Object.values(t)[0]=="string",this._config=this._cloneEditorConfiguration(e)||{},this._config.context=n,this._creator(t,this._config))).then(i=>{this._editor=i,i.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=i.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const t=this._editor;return this._editor=null,t.model.document.off("change:data",this._throttledSave),this._destructor(t)})}_save(){const t=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=t}catch(e){console.error(e,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t=this._editor,e=t.model.document.roots.filter(a=>a.isAttached()&&a.rootName!="$graveyard"),{plugins:n}=t,i=n.has("CommentsRepository")&&n.get("CommentsRepository"),r=n.has("TrackChanges")&&n.get("TrackChanges"),s={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};e.forEach(a=>{s.roots[a.rootName]={content:JSON.stringify(Array.from(a.getChildren())),attributes:JSON.stringify(Array.from(a.getAttributes())),isLoaded:a._isLoaded}});for(const a of t.model.markers)a._affectsData&&(s.markers[a.name]={rangeJSON:a.getRange().toJSON(),usingOperation:a._managedUsingOperations,affectsData:a._affectsData});return i&&(s.commentThreads=JSON.stringify(i.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),r&&(s.suggestions=JSON.stringify(r.getSuggestions({toJSON:!0,skipNotAttached:!0}))),s}_getEditables(){const t={};for(const e of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(e);n&&(t[e]=n)}return t}_isErrorComingFromThisItem(t){return Fg(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return Jt(t,(e,n)=>Xt(e)||n==="context"?e:void 0)}}class rC{constructor(t){this.editor=t,this._data=t.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",t=>{t.stop(),this.editor.model.enqueueChange({isUndoable:!1},e=>{this._restoreCollaborationData(),this._restoreEditorData(e)}),this.editor.data.fire("ready")},{priority:999})}_createNode(t,e){if("name"in e){const n=t.createElement(e.name,e.attributes);if(e.children)for(const i of e.children)n._appendChild(this._createNode(t,i));return n}return t.createText(e.data,e.attributes)}_restoreEditorData(t){const e=this.editor;Object.entries(this._data.roots).forEach(([n,{content:i,attributes:r}])=>{const s=JSON.parse(i),a=JSON.parse(r),c=e.model.document.getRoot(n);for(const[l,d]of a)t.setAttribute(l,d,c);for(const l of s){const d=this._createNode(t,l);t.insert(d,c,"end")}}),Object.entries(this._data.markers).forEach(([n,i])=>{const{document:r}=e.model,s=i,{rangeJSON:{start:a,end:c}}=s,l=((m,k)=>{var _={};for(var v in m)Vg.call(m,v)&&k.indexOf(v)<0&&(_[v]=m[v]);if(m!=null&&Ps)for(var v of Ps(m))k.indexOf(v)<0&&Ug.call(m,v)&&(_[v]=m[v]);return _})(s,["rangeJSON"]),d=r.getRoot(a.root),h=t.createPositionFromPath(d,a.path,a.stickiness),u=t.createPositionFromPath(d,c.path,c.stickiness),g=t.createRange(h,u);t.addMarker(n,Jc({range:g},l))})}_restoreCollaborationData(){const t=JSON.parse(this._data.commentThreads),e=JSON.parse(this._data.suggestions);t.forEach(n=>{const i=this.editor.config.get("collaboration.channelId"),r=this.editor.plugins.get("CommentsRepository");r.hasCommentThread(n.threadId)&&r.getCommentThread(n.threadId).remove(),r.addCommentThread(Jc({channelId:i},n))}),e.forEach(n=>{const i=this.editor.plugins.get("TrackChangesEditing");i.hasSuggestion(n.id)?i.getSuggestion(n.id).attributes=n.attributes:i.addSuggestionData(n)})}}const sr=Symbol("MainQueueId");class sC{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(t){this._onEmptyCallbacks.push(t)}enqueue(t,e){const n=t===sr;this._activeActions++,this._queues.get(t)||this._queues.set(t,Promise.resolve());const i=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(sr),this._queues.get(t)])).then(e),r=i.catch(()=>{});return this._queues.set(t,r),i.finally(()=>{this._activeActions--,this._queues.get(t)===r&&this._activeActions===0&&this._onEmptyCallbacks.forEach(s=>s())})}}function Gg(o){return Array.isArray(o)?o:[o]}class zs extends xs(zc(R0)){constructor(t,e={}){if(!Os(t)&&e.initialData!==void 0)throw new y("editor-create-initial-data",null);super(e),this.config.get("initialData")===void 0&&this.config.set("initialData",function(r){return Os(r)?(s=r,s instanceof HTMLTextAreaElement?s.value:s.innerHTML):r;var s}(t)),Os(t)&&(this.sourceElement=t),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=new tC(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new J_(this,i),function(r){if(!Ue(r.updateSourceElement))throw new y("attachtoform-missing-elementapi-interface",r);const s=r.sourceElement;if(function(a){return!!a&&a.tagName.toLowerCase()==="textarea"}(s)&&s.form){let a;const c=s.form,l=()=>r.updateSourceElement();Ue(c.submit)&&(a=c.submit,c.submit=()=>{l(),a.apply(c)}),c.addEventListener("submit",l),r.on("destroy",()=>{c.removeEventListener("submit",l),a&&(c.submit=a)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const i=new this(t,e);n(i.initPlugins().then(()=>i.ui.init(Os(t)?t:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function Os(o){return Xt(o)}zs.Context=Bd,zs.EditorWatchdog=qg,zs.ContextWatchdog=class extends Rg{constructor(o,t={}){super(t),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new sC,this._watchdogConfig=t,this._creator=e=>o.create(e),this._destructor=e=>e.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(o){this._creator=o}setDestructor(o){this._destructor=o}get context(){return this._context}create(o={}){return this._actionQueues.enqueue(sr,()=>(this._contextConfig=o,this._create()))}getItem(o){return this._getWatchdog(o)._item}getItemState(o){return this._getWatchdog(o).state}add(o){const t=Gg(o);return Promise.all(t.map(e=>this._actionQueues.enqueue(e.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(e.id))throw new Error(`Item with the given id is already added: '${e.id}'.`);if(e.type==="editor")return n=new qg(null,this._watchdogConfig),n.setCreator(e.creator),n._setExcludedProperties(this._contextProps),e.destructor&&n.setDestructor(e.destructor),this._watchdogs.set(e.id,n),n.on("error",(i,{error:r,causesRestart:s})=>{this._fire("itemError",{itemId:e.id,error:r}),s&&this._actionQueues.enqueue(e.id,()=>new Promise(a=>{const c=()=>{n.off("restart",c),this._fire("itemRestart",{itemId:e.id}),a()};n.on("restart",c)}))}),n.create(e.sourceElementOrData,e.config,this._context);throw new Error(`Not supported item type: '${e.type}'.`)})))}remove(o){const t=Gg(o);return Promise.all(t.map(e=>this._actionQueues.enqueue(e,()=>{const n=this._getWatchdog(e);return this._watchdogs.delete(e),n.destroy()})))}destroy(){return this._actionQueues.enqueue(sr,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(sr,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(o=>{console.error("An error happened during destroying the context or items.",o)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(o=>(this._context=o,this._contextProps=Qc(this._context),Promise.all(Array.from(this._watchdogs.values()).map(t=>(t._setExcludedProperties(this._contextProps),t.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const o=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(t=>t.destroy())).then(()=>this._destructor(o))})}_getWatchdog(o){const t=this._watchdogs.get(o);if(!t)throw new Error(`Item with the given id was not registered: ${o}.`);return t}_isErrorComingFromThisItem(o){for(const t of this._watchdogs.values())if(t._isErrorComingFromThisItem(o))return!1;return Fg(this._context,o.context)}};class ar extends zn{constructor(t){super(t),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const e=this.document;function n(i){return(r,s)=>{s.preventDefault();const a=s.dropRange?[s.dropRange]:null,c=new L(e,i);e.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target,domEvent:s.domEvent}),c.stop.called&&s.stopPropagation()}}this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){const e="clipboardData"in t?t.clipboardData:t.dataTransfer,n=t.type=="drop"||t.type=="paste",i={dataTransfer:new Ch(e,{cacheFiles:n})};t.type!="drop"&&t.type!="dragover"||(i.dropRange=function(r,s){const a=s.target.ownerDocument,c=s.clientX,l=s.clientY;let d;return a.caretRangeFromPoint&&a.caretRangeFromPoint(c,l)?d=a.caretRangeFromPoint(c,l):s.rangeParent&&(d=a.createRange(),d.setStart(s.rangeParent,s.rangeOffset),d.collapse(!0)),d?r.domConverter.domRangeToView(d):null}(this.view,t)),this.fire(t.type,t,i)}}const Wg=["figcaption","li"];function Kg(o){let t="";if(o.is("$text")||o.is("$textProxy"))t=o.data;else if(o.is("element","img")&&o.hasAttribute("alt"))t=o.getAttribute("alt");else if(o.is("element","br"))t=`
`;else{let e=null;for(const n of o.getChildren()){const i=Kg(n);e&&(e.is("containerElement")||n.is("containerElement"))&&(Wg.includes(e.name)||Wg.includes(n.name)?t+=`
`:t+=`

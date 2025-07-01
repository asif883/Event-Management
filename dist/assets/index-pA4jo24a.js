(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function a(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=a(l);fetch(l.href,c)}})();function Oy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lh={exports:{}},js={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ab;function R5(){if(Ab)return js;Ab=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function a(o,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:e,type:o,key:f,ref:l!==void 0?l:null,props:c}}return js.Fragment=t,js.jsx=a,js.jsxs=a,js}var Ob;function D5(){return Ob||(Ob=1,lh.exports=R5()),lh.exports}var w=D5(),ch={exports:{}},qe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cb;function M5(){if(Cb)return qe;Cb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.iterator;function y(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,A={};function N(E,V,ae){this.props=E,this.context=V,this.refs=A,this.updater=ae||R}N.prototype.isReactComponent={},N.prototype.setState=function(E,V){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,V,"setState")},N.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function z(){}z.prototype=N.prototype;function Q(E,V,ae){this.props=E,this.context=V,this.refs=A,this.updater=ae||R}var K=Q.prototype=new z;K.constructor=Q,S(K,N.prototype),K.isPureReactComponent=!0;var ce=Array.isArray,J={H:null,A:null,T:null,S:null,V:null},D=Object.prototype.hasOwnProperty;function me(E,V,ae,re,fe,De){return ae=De.ref,{$$typeof:e,type:E,key:V,ref:ae!==void 0?ae:null,props:De}}function _e(E,V){return me(E.type,V,void 0,void 0,void 0,E.props)}function ue(E){return typeof E=="object"&&E!==null&&E.$$typeof===e}function Re(E){var V={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ae){return V[ae]})}var Ee=/\/+/g;function we(E,V){return typeof E=="object"&&E!==null&&E.key!=null?Re(""+E.key):V.toString(36)}function be(){}function ie(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(be,be):(E.status="pending",E.then(function(V){E.status==="pending"&&(E.status="fulfilled",E.value=V)},function(V){E.status==="pending"&&(E.status="rejected",E.reason=V)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function te(E,V,ae,re,fe){var De=typeof E;(De==="undefined"||De==="boolean")&&(E=null);var Te=!1;if(E===null)Te=!0;else switch(De){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(E.$$typeof){case e:case t:Te=!0;break;case b:return Te=E._init,te(Te(E._payload),V,ae,re,fe)}}if(Te)return fe=fe(E),Te=re===""?"."+we(E,0):re,ce(fe)?(ae="",Te!=null&&(ae=Te.replace(Ee,"$&/")+"/"),te(fe,V,ae,"",function(Ot){return Ot})):fe!=null&&(ue(fe)&&(fe=_e(fe,ae+(fe.key==null||E&&E.key===fe.key?"":(""+fe.key).replace(Ee,"$&/")+"/")+Te)),V.push(fe)),1;Te=0;var ht=re===""?".":re+":";if(ce(E))for(var Qe=0;Qe<E.length;Qe++)re=E[Qe],De=ht+we(re,Qe),Te+=te(re,V,ae,De,fe);else if(Qe=y(E),typeof Qe=="function")for(E=Qe.call(E),Qe=0;!(re=E.next()).done;)re=re.value,De=ht+we(re,Qe++),Te+=te(re,V,ae,De,fe);else if(De==="object"){if(typeof E.then=="function")return te(ie(E),V,ae,re,fe);throw V=String(E),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Te}function _(E,V,ae){if(E==null)return E;var re=[],fe=0;return te(E,re,"","",function(De){return V.call(ae,De,fe++)}),re}function H(E){if(E._status===-1){var V=E._result;V=V(),V.then(function(ae){(E._status===0||E._status===-1)&&(E._status=1,E._result=ae)},function(ae){(E._status===0||E._status===-1)&&(E._status=2,E._result=ae)}),E._status===-1&&(E._status=0,E._result=V)}if(E._status===1)return E._result.default;throw E._result}var F=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function se(){}return qe.Children={map:_,forEach:function(E,V,ae){_(E,function(){V.apply(this,arguments)},ae)},count:function(E){var V=0;return _(E,function(){V++}),V},toArray:function(E){return _(E,function(V){return V})||[]},only:function(E){if(!ue(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},qe.Component=N,qe.Fragment=a,qe.Profiler=l,qe.PureComponent=Q,qe.StrictMode=o,qe.Suspense=m,qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,qe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return J.H.useMemoCache(E)}},qe.cache=function(E){return function(){return E.apply(null,arguments)}},qe.cloneElement=function(E,V,ae){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var re=S({},E.props),fe=E.key,De=void 0;if(V!=null)for(Te in V.ref!==void 0&&(De=void 0),V.key!==void 0&&(fe=""+V.key),V)!D.call(V,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&V.ref===void 0||(re[Te]=V[Te]);var Te=arguments.length-2;if(Te===1)re.children=ae;else if(1<Te){for(var ht=Array(Te),Qe=0;Qe<Te;Qe++)ht[Qe]=arguments[Qe+2];re.children=ht}return me(E.type,fe,void 0,void 0,De,re)},qe.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},qe.createElement=function(E,V,ae){var re,fe={},De=null;if(V!=null)for(re in V.key!==void 0&&(De=""+V.key),V)D.call(V,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(fe[re]=V[re]);var Te=arguments.length-2;if(Te===1)fe.children=ae;else if(1<Te){for(var ht=Array(Te),Qe=0;Qe<Te;Qe++)ht[Qe]=arguments[Qe+2];fe.children=ht}if(E&&E.defaultProps)for(re in Te=E.defaultProps,Te)fe[re]===void 0&&(fe[re]=Te[re]);return me(E,De,void 0,void 0,null,fe)},qe.createRef=function(){return{current:null}},qe.forwardRef=function(E){return{$$typeof:h,render:E}},qe.isValidElement=ue,qe.lazy=function(E){return{$$typeof:b,_payload:{_status:-1,_result:E},_init:H}},qe.memo=function(E,V){return{$$typeof:p,type:E,compare:V===void 0?null:V}},qe.startTransition=function(E){var V=J.T,ae={};J.T=ae;try{var re=E(),fe=J.S;fe!==null&&fe(ae,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(se,F)}catch(De){F(De)}finally{J.T=V}},qe.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},qe.use=function(E){return J.H.use(E)},qe.useActionState=function(E,V,ae){return J.H.useActionState(E,V,ae)},qe.useCallback=function(E,V){return J.H.useCallback(E,V)},qe.useContext=function(E){return J.H.useContext(E)},qe.useDebugValue=function(){},qe.useDeferredValue=function(E,V){return J.H.useDeferredValue(E,V)},qe.useEffect=function(E,V,ae){var re=J.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(E,V)},qe.useId=function(){return J.H.useId()},qe.useImperativeHandle=function(E,V,ae){return J.H.useImperativeHandle(E,V,ae)},qe.useInsertionEffect=function(E,V){return J.H.useInsertionEffect(E,V)},qe.useLayoutEffect=function(E,V){return J.H.useLayoutEffect(E,V)},qe.useMemo=function(E,V){return J.H.useMemo(E,V)},qe.useOptimistic=function(E,V){return J.H.useOptimistic(E,V)},qe.useReducer=function(E,V,ae){return J.H.useReducer(E,V,ae)},qe.useRef=function(E){return J.H.useRef(E)},qe.useState=function(E){return J.H.useState(E)},qe.useSyncExternalStore=function(E,V,ae){return J.H.useSyncExternalStore(E,V,ae)},qe.useTransition=function(){return J.H.useTransition()},qe.version="19.1.0",qe}var kb;function am(){return kb||(kb=1,ch.exports=M5()),ch.exports}var I=am();const gt=Oy(I);var uh={exports:{}},Bs={},dh={exports:{}},fh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rb;function N5(){return Rb||(Rb=1,function(e){function t(_,H){var F=_.length;_.push(H);e:for(;0<F;){var se=F-1>>>1,E=_[se];if(0<l(E,H))_[se]=H,_[F]=E,F=se;else break e}}function a(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var H=_[0],F=_.pop();if(F!==H){_[0]=F;e:for(var se=0,E=_.length,V=E>>>1;se<V;){var ae=2*(se+1)-1,re=_[ae],fe=ae+1,De=_[fe];if(0>l(re,F))fe<E&&0>l(De,re)?(_[se]=De,_[fe]=F,se=fe):(_[se]=re,_[ae]=F,se=ae);else if(fe<E&&0>l(De,F))_[se]=De,_[fe]=F,se=fe;else break e}}return H}function l(_,H){var F=_.sortIndex-H.sortIndex;return F!==0?F:_.id-H.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();e.unstable_now=function(){return f.now()-h}}var m=[],p=[],b=1,x=null,y=3,R=!1,S=!1,A=!1,N=!1,z=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function ce(_){for(var H=a(p);H!==null;){if(H.callback===null)o(p);else if(H.startTime<=_)o(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=a(p)}}function J(_){if(A=!1,ce(_),!S)if(a(m)!==null)S=!0,D||(D=!0,we());else{var H=a(p);H!==null&&te(J,H.startTime-_)}}var D=!1,me=-1,_e=5,ue=-1;function Re(){return N?!0:!(e.unstable_now()-ue<_e)}function Ee(){if(N=!1,D){var _=e.unstable_now();ue=_;var H=!0;try{e:{S=!1,A&&(A=!1,Q(me),me=-1),R=!0;var F=y;try{t:{for(ce(_),x=a(m);x!==null&&!(x.expirationTime>_&&Re());){var se=x.callback;if(typeof se=="function"){x.callback=null,y=x.priorityLevel;var E=se(x.expirationTime<=_);if(_=e.unstable_now(),typeof E=="function"){x.callback=E,ce(_),H=!0;break t}x===a(m)&&o(m),ce(_)}else o(m);x=a(m)}if(x!==null)H=!0;else{var V=a(p);V!==null&&te(J,V.startTime-_),H=!1}}break e}finally{x=null,y=F,R=!1}H=void 0}}finally{H?we():D=!1}}}var we;if(typeof K=="function")we=function(){K(Ee)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,ie=be.port2;be.port1.onmessage=Ee,we=function(){ie.postMessage(null)}}else we=function(){z(Ee,0)};function te(_,H){me=z(function(){_(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_next=function(_){switch(y){case 1:case 2:case 3:var H=3;break;default:H=y}var F=y;y=H;try{return _()}finally{y=F}},e.unstable_requestPaint=function(){N=!0},e.unstable_runWithPriority=function(_,H){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var F=y;y=_;try{return H()}finally{y=F}},e.unstable_scheduleCallback=function(_,H,F){var se=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?se+F:se):F=se,_){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=F+E,_={id:b++,callback:H,priorityLevel:_,startTime:F,expirationTime:E,sortIndex:-1},F>se?(_.sortIndex=F,t(p,_),a(m)===null&&_===a(p)&&(A?(Q(me),me=-1):A=!0,te(J,F-se))):(_.sortIndex=E,t(m,_),S||R||(S=!0,D||(D=!0,we()))),_},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(_){var H=y;return function(){var F=y;y=H;try{return _.apply(this,arguments)}finally{y=F}}}}(fh)),fh}var Db;function L5(){return Db||(Db=1,dh.exports=N5()),dh.exports}var hh={exports:{}},tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function P5(){if(Mb)return tn;Mb=1;var e=am();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(t(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:b}}var f=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,tn.createPortal=function(m,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,b)},tn.flushSync=function(m){var p=f.T,b=o.p;try{if(f.T=null,o.p=2,m)return m()}finally{f.T=p,o.p=b,o.d.f()}},tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(m,p))},tn.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var b=p.as,x=h(b,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,R=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?o.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:R}):b==="script"&&o.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:R,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=h(p.as,p.crossOrigin);o.d.M(m,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(m)},tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,x=h(b,p.crossOrigin);o.d.L(m,b,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var b=h(p.as,p.crossOrigin);o.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(m)},tn.requestFormReset=function(m){o.d.r(m)},tn.unstable_batchedUpdates=function(m,p){return m(p)},tn.useFormState=function(m,p,b){return f.H.useFormState(m,p,b)},tn.useFormStatus=function(){return f.H.useHostTransitionStatus()},tn.version="19.1.0",tn}var Nb;function Cy(){if(Nb)return hh.exports;Nb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),hh.exports=P5(),hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lb;function z5(){if(Lb)return Bs;Lb=1;var e=L5(),t=am(),a=Cy();function o(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)r+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var r=n,i=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(i=r.return),n=r.return;while(n)}return r.tag===3?i:null}function f(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function h(n){if(c(n)!==n)throw Error(o(188))}function m(n){var r=n.alternate;if(!r){if(r=c(n),r===null)throw Error(o(188));return r!==n?null:n}for(var i=n,s=r;;){var u=i.return;if(u===null)break;var d=u.alternate;if(d===null){if(s=u.return,s!==null){i=s;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===i)return h(u),n;if(d===s)return h(u),r;d=d.sibling}throw Error(o(188))}if(i.return!==s.return)i=u,s=d;else{for(var g=!1,v=u.child;v;){if(v===i){g=!0,i=u,s=d;break}if(v===s){g=!0,s=u,i=d;break}v=v.sibling}if(!g){for(v=d.child;v;){if(v===i){g=!0,i=d,s=u;break}if(v===s){g=!0,s=d,i=u;break}v=v.sibling}if(!g)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?n:r}function p(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=p(n),r!==null)return r;n=n.sibling}return null}var b=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),Q=Symbol.for("react.consumer"),K=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),Re=Symbol.for("react.memo_cache_sentinel"),Ee=Symbol.iterator;function we(n){return n===null||typeof n!="object"?null:(n=Ee&&n[Ee]||n["@@iterator"],typeof n=="function"?n:null)}var be=Symbol.for("react.client.reference");function ie(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===be?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case N:return"Profiler";case A:return"StrictMode";case J:return"Suspense";case D:return"SuspenseList";case ue:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case R:return"Portal";case K:return(n.displayName||"Context")+".Provider";case Q:return(n._context.displayName||"Context")+".Consumer";case ce:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case me:return r=n.displayName||null,r!==null?r:ie(n.type)||"Memo";case _e:r=n._payload,n=n._init;try{return ie(n(r))}catch{}}return null}var te=Array.isArray,_=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},se=[],E=-1;function V(n){return{current:n}}function ae(n){0>E||(n.current=se[E],se[E]=null,E--)}function re(n,r){E++,se[E]=n.current,n.current=r}var fe=V(null),De=V(null),Te=V(null),ht=V(null);function Qe(n,r){switch(re(Te,r),re(De,n),re(fe,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?eb(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=eb(r),n=tb(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ae(fe),re(fe,n)}function Ot(){ae(fe),ae(De),ae(Te)}function $e(n){n.memoizedState!==null&&re(ht,n);var r=fe.current,i=tb(r,n.type);r!==i&&(re(De,n),re(fe,i))}function Ct(n){De.current===n&&(ae(fe),ae(De)),ht.current===n&&(ae(ht),Ns._currentValue=F)}var an=Object.prototype.hasOwnProperty,Un=e.unstable_scheduleCallback,hn=e.unstable_cancelCallback,Pi=e.unstable_shouldYield,Ho=e.unstable_requestPaint,on=e.unstable_now,kl=e.unstable_getCurrentPriorityLevel,Qa=e.unstable_ImmediatePriority,O=e.unstable_UserBlockingPriority,j=e.unstable_NormalPriority,X=e.unstable_LowPriority,he=e.unstable_IdlePriority,de=e.log,oe=e.unstable_setDisableYieldValue,pe=null,Ce=null;function Fe(n){if(typeof de=="function"&&oe(n),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(pe,n)}catch{}}var ot=Math.clz32?Math.clz32:zi,aa=Math.log,Ht=Math.LN2;function zi(n){return n>>>=0,n===0?32:31-(aa(n)/Ht|0)|0}var nr=256,rr=4194304;function ar(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function vr(n,r,i){var s=n.pendingLanes;if(s===0)return 0;var u=0,d=n.suspendedLanes,g=n.pingedLanes;n=n.warmLanes;var v=s&134217727;return v!==0?(s=v&~d,s!==0?u=ar(s):(g&=v,g!==0?u=ar(g):i||(i=v&~n,i!==0&&(u=ar(i))))):(v=s&~d,v!==0?u=ar(v):g!==0?u=ar(g):i||(i=s&~n,i!==0&&(u=ar(i)))),u===0?0:r!==0&&r!==u&&(r&d)===0&&(d=u&-u,i=r&-r,d>=i||d===32&&(i&4194048)!==0)?r:u}function jn(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Ja(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ui(){var n=nr;return nr<<=1,(nr&4194048)===0&&(nr=256),n}function Rl(){var n=rr;return rr<<=1,(rr&62914560)===0&&(rr=4194304),n}function ji(n){for(var r=[],i=0;31>i;i++)r.push(n);return r}function Wa(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Dl(n,r,i,s,u,d){var g=n.pendingLanes;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=i,n.entangledLanes&=i,n.errorRecoveryDisabledLanes&=i,n.shellSuspendCounter=0;var v=n.entanglements,T=n.expirationTimes,U=n.hiddenUpdates;for(i=g&~i;0<i;){var Z=31-ot(i),ee=1<<Z;v[Z]=0,T[Z]=-1;var B=U[Z];if(B!==null)for(U[Z]=null,Z=0;Z<B.length;Z++){var q=B[Z];q!==null&&(q.lane&=-536870913)}i&=~ee}s!==0&&ei(n,s,0),d!==0&&u===0&&n.tag!==0&&(n.suspendedLanes|=d&~(g&~r))}function ei(n,r,i){n.pendingLanes|=r,n.suspendedLanes&=~r;var s=31-ot(r);n.entangledLanes|=r,n.entanglements[s]=n.entanglements[s]|1073741824|i&4194090}function ti(n,r){var i=n.entangledLanes|=r;for(n=n.entanglements;i;){var s=31-ot(i),u=1<<s;u&r|n[s]&r&&(n[s]|=r),i&=~u}}function qo(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Vo(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function C(){var n=H.p;return n!==0?n:(n=window.event,n===void 0?32:wb(n.type))}function L(n,r){var i=H.p;try{return H.p=n,r()}finally{H.p=i}}var $=Math.random().toString(36).slice(2),ne="__reactFiber$"+$,le="__reactProps$"+$,xe="__reactContainer$"+$,Ne="__reactEvents$"+$,ge="__reactListeners$"+$,ke="__reactHandles$"+$,Se="__reactResources$"+$,Ue="__reactMarker$"+$;function je(n){delete n[ne],delete n[le],delete n[Ne],delete n[ge],delete n[ke]}function Ie(n){var r=n[ne];if(r)return r;for(var i=n.parentNode;i;){if(r=i[xe]||i[ne]){if(i=r.alternate,r.child!==null||i!==null&&i.child!==null)for(n=ib(n);n!==null;){if(i=n[ne])return i;n=ib(n)}return r}n=i,i=n.parentNode}return null}function et(n){if(n=n[ne]||n[xe]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function yt(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(o(33))}function _t(n){var r=n[Se];return r||(r=n[Se]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function tt(n){n[Ue]=!0}var Je=new Set,ia={};function sn(n,r){Bn(n,r),Bn(n+"Capture",r)}function Bn(n,r){for(ia[n]=r,n=0;n<r.length;n++)Je.add(r[n])}var mn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oa={},sa={};function $o(n){return an.call(sa,n)?!0:an.call(oa,n)?!1:mn.test(n)?sa[n]=!0:(oa[n]=!0,!1)}function In(n,r,i){if($o(r))if(i===null)n.removeAttribute(r);else{switch(typeof i){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var s=r.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+i)}}function Mr(n,r,i){if(i===null)n.removeAttribute(r);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+i)}}function Ye(n,r,i,s){if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttributeNS(r,i,""+s)}}var Wt,ir;function or(n){if(Wt===void 0)try{throw Error()}catch(i){var r=i.stack.trim().match(/\n( *(at )?)/);Wt=r&&r[1]||"",ir=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+n+ir}var ni=!1;function xt(n,r){if(!n||ni)return"";ni=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(r){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(q){var B=q}Reflect.construct(n,[],ee)}else{try{ee.call()}catch(q){B=q}n.call(ee.prototype)}}else{try{throw Error()}catch(q){B=q}(ee=n())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(q){if(q&&B&&typeof q.stack=="string")return[q.stack,B.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=s.DetermineComponentFrameRoot(),g=d[0],v=d[1];if(g&&v){var T=g.split(`
`),U=v.split(`
`);for(u=s=0;s<T.length&&!T[s].includes("DetermineComponentFrameRoot");)s++;for(;u<U.length&&!U[u].includes("DetermineComponentFrameRoot");)u++;if(s===T.length||u===U.length)for(s=T.length-1,u=U.length-1;1<=s&&0<=u&&T[s]!==U[u];)u--;for(;1<=s&&0<=u;s--,u--)if(T[s]!==U[u]){if(s!==1||u!==1)do if(s--,u--,0>u||T[s]!==U[u]){var Z=`
`+T[s].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=s&&0<=u);break}}}finally{ni=!1,Error.prepareStackTrace=i}return(i=n?n.displayName||n.name:"")?or(i):""}function la(n){switch(n.tag){case 26:case 27:case 5:return or(n.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 15:return xt(n.type,!1);case 11:return xt(n.type.render,!1);case 1:return xt(n.type,!0);case 31:return or("Activity");default:return""}}function Fo(n){try{var r="";do r+=la(n),n=n.return;while(n);return r}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function pn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Km(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Tw(n){var r=Km(n)?"checked":"value",i=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),s=""+n[r];if(!n.hasOwnProperty(r)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,d=i.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return u.call(this)},set:function(g){s=""+g,d.call(this,g)}}),Object.defineProperty(n,r,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(g){s=""+g},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ml(n){n._valueTracker||(n._valueTracker=Tw(n))}function Zm(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var i=r.getValue(),s="";return n&&(s=Km(n)?n.checked?"true":"false":n.value),n=s,n!==i?(r.setValue(n),!0):!1}function Nl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Aw=/[\n"\\]/g;function Hn(n){return n.replace(Aw,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function ad(n,r,i,s,u,d,g,v){n.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?n.type=g:n.removeAttribute("type"),r!=null?g==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+pn(r)):n.value!==""+pn(r)&&(n.value=""+pn(r)):g!=="submit"&&g!=="reset"||n.removeAttribute("value"),r!=null?id(n,g,pn(r)):i!=null?id(n,g,pn(i)):s!=null&&n.removeAttribute("value"),u==null&&d!=null&&(n.defaultChecked=!!d),u!=null&&(n.checked=u&&typeof u!="function"&&typeof u!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.name=""+pn(v):n.removeAttribute("name")}function Qm(n,r,i,s,u,d,g,v){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),r!=null||i!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;i=i!=null?""+pn(i):"",r=r!=null?""+pn(r):i,v||r===n.value||(n.value=r),n.defaultValue=r}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,n.checked=v?n.checked:!!s,n.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.name=g)}function id(n,r,i){r==="number"&&Nl(n.ownerDocument)===n||n.defaultValue===""+i||(n.defaultValue=""+i)}function Bi(n,r,i,s){if(n=n.options,r){r={};for(var u=0;u<i.length;u++)r["$"+i[u]]=!0;for(i=0;i<n.length;i++)u=r.hasOwnProperty("$"+n[i].value),n[i].selected!==u&&(n[i].selected=u),u&&s&&(n[i].defaultSelected=!0)}else{for(i=""+pn(i),r=null,u=0;u<n.length;u++){if(n[u].value===i){n[u].selected=!0,s&&(n[u].defaultSelected=!0);return}r!==null||n[u].disabled||(r=n[u])}r!==null&&(r.selected=!0)}}function Jm(n,r,i){if(r!=null&&(r=""+pn(r),r!==n.value&&(n.value=r),i==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=i!=null?""+pn(i):""}function Wm(n,r,i,s){if(r==null){if(s!=null){if(i!=null)throw Error(o(92));if(te(s)){if(1<s.length)throw Error(o(93));s=s[0]}i=s}i==null&&(i=""),r=i}i=pn(r),n.defaultValue=i,s=n.textContent,s===i&&s!==""&&s!==null&&(n.value=s)}function Ii(n,r){if(r){var i=n.firstChild;if(i&&i===n.lastChild&&i.nodeType===3){i.nodeValue=r;return}}n.textContent=r}var Ow=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ep(n,r,i){var s=r.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":s?n.setProperty(r,i):typeof i!="number"||i===0||Ow.has(r)?r==="float"?n.cssFloat=i:n[r]=(""+i).trim():n[r]=i+"px"}function tp(n,r,i){if(r!=null&&typeof r!="object")throw Error(o(62));if(n=n.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||r!=null&&r.hasOwnProperty(s)||(s.indexOf("--")===0?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="");for(var u in r)s=r[u],r.hasOwnProperty(u)&&i[u]!==s&&ep(n,u,s)}else for(var d in r)r.hasOwnProperty(d)&&ep(n,d,r[d])}function od(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(n){return kw.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var sd=null;function ld(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Hi=null,qi=null;function np(n){var r=et(n);if(r&&(n=r.stateNode)){var i=n[le]||null;e:switch(n=r.stateNode,r.type){case"input":if(ad(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),r=i.name,i.type==="radio"&&r!=null){for(i=n;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Hn(""+r)+'"][type="radio"]'),r=0;r<i.length;r++){var s=i[r];if(s!==n&&s.form===n.form){var u=s[le]||null;if(!u)throw Error(o(90));ad(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(r=0;r<i.length;r++)s=i[r],s.form===n.form&&Zm(s)}break e;case"textarea":Jm(n,i.value,i.defaultValue);break e;case"select":r=i.value,r!=null&&Bi(n,!!i.multiple,r,!1)}}}var cd=!1;function rp(n,r,i){if(cd)return n(r,i);cd=!0;try{var s=n(r);return s}finally{if(cd=!1,(Hi!==null||qi!==null)&&(yc(),Hi&&(r=Hi,n=qi,qi=Hi=null,np(r),n)))for(r=0;r<n.length;r++)np(n[r])}}function Yo(n,r){var i=n.stateNode;if(i===null)return null;var s=i[le]||null;if(s===null)return null;i=s[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(n=n.type,s=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!s;break e;default:n=!1}if(n)return null;if(i&&typeof i!="function")throw Error(o(231,r,typeof i));return i}var Nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=!1;if(Nr)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){ud=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{ud=!1}var ca=null,dd=null,Pl=null;function ap(){if(Pl)return Pl;var n,r=dd,i=r.length,s,u="value"in ca?ca.value:ca.textContent,d=u.length;for(n=0;n<i&&r[n]===u[n];n++);var g=i-n;for(s=1;s<=g&&r[i-s]===u[d-s];s++);return Pl=u.slice(n,1<s?1-s:void 0)}function zl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ul(){return!0}function ip(){return!1}function gn(n){function r(i,s,u,d,g){this._reactName=i,this._targetInst=u,this.type=s,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var v in n)n.hasOwnProperty(v)&&(i=n[v],this[v]=i?i(d):d[v]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ul:ip,this.isPropagationStopped=ip,this}return b(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),r}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=gn(ri),Xo=b({},ri,{view:0,detail:0}),Rw=gn(Xo),fd,hd,Ko,Bl=b({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ko&&(Ko&&n.type==="mousemove"?(fd=n.screenX-Ko.screenX,hd=n.screenY-Ko.screenY):hd=fd=0,Ko=n),fd)},movementY:function(n){return"movementY"in n?n.movementY:hd}}),op=gn(Bl),Dw=b({},Bl,{dataTransfer:0}),Mw=gn(Dw),Nw=b({},Xo,{relatedTarget:0}),md=gn(Nw),Lw=b({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),Pw=gn(Lw),zw=b({},ri,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Uw=gn(zw),jw=b({},ri,{data:0}),sp=gn(jw),Bw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qw(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Hw[n])?!!r[n]:!1}function pd(){return qw}var Vw=b({},Xo,{key:function(n){if(n.key){var r=Bw[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=zl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Iw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pd,charCode:function(n){return n.type==="keypress"?zl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$w=gn(Vw),Fw=b({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=gn(Fw),Yw=b({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pd}),Gw=gn(Yw),Xw=b({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kw=gn(Xw),Zw=b({},Bl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qw=gn(Zw),Jw=b({},ri,{newState:0,oldState:0}),Ww=gn(Jw),ex=[9,13,27,32],gd=Nr&&"CompositionEvent"in window,Zo=null;Nr&&"documentMode"in document&&(Zo=document.documentMode);var tx=Nr&&"TextEvent"in window&&!Zo,cp=Nr&&(!gd||Zo&&8<Zo&&11>=Zo),up=" ",dp=!1;function fp(n,r){switch(n){case"keyup":return ex.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Vi=!1;function nx(n,r){switch(n){case"compositionend":return hp(r);case"keypress":return r.which!==32?null:(dp=!0,up);case"textInput":return n=r.data,n===up&&dp?null:n;default:return null}}function rx(n,r){if(Vi)return n==="compositionend"||!gd&&fp(n,r)?(n=ap(),Pl=dd=ca=null,Vi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return cp&&r.locale!=="ko"?null:r.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!ax[n.type]:r==="textarea"}function pp(n,r,i,s){Hi?qi?qi.push(s):qi=[s]:Hi=s,r=Tc(r,"onChange"),0<r.length&&(i=new jl("onChange","change",null,i,s),n.push({event:i,listeners:r}))}var Qo=null,Jo=null;function ix(n){K0(n,0)}function Il(n){var r=yt(n);if(Zm(r))return n}function gp(n,r){if(n==="change")return r}var bp=!1;if(Nr){var bd;if(Nr){var vd="oninput"in document;if(!vd){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),vd=typeof vp.oninput=="function"}bd=vd}else bd=!1;bp=bd&&(!document.documentMode||9<document.documentMode)}function yp(){Qo&&(Qo.detachEvent("onpropertychange",wp),Jo=Qo=null)}function wp(n){if(n.propertyName==="value"&&Il(Jo)){var r=[];pp(r,Jo,n,ld(n)),rp(ix,r)}}function ox(n,r,i){n==="focusin"?(yp(),Qo=r,Jo=i,Qo.attachEvent("onpropertychange",wp)):n==="focusout"&&yp()}function sx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Il(Jo)}function lx(n,r){if(n==="click")return Il(r)}function cx(n,r){if(n==="input"||n==="change")return Il(r)}function ux(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var _n=typeof Object.is=="function"?Object.is:ux;function Wo(n,r){if(_n(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var i=Object.keys(n),s=Object.keys(r);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var u=i[s];if(!an.call(r,u)||!_n(n[u],r[u]))return!1}return!0}function xp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ep(n,r){var i=xp(n);n=0;for(var s;i;){if(i.nodeType===3){if(s=n+i.textContent.length,n<=r&&s>=r)return{node:i,offset:r-n};n=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=xp(i)}}function Sp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Sp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function _p(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Nl(n.document);r instanceof n.HTMLIFrameElement;){try{var i=typeof r.contentWindow.location.href=="string"}catch{i=!1}if(i)n=r.contentWindow;else break;r=Nl(n.document)}return r}function yd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var dx=Nr&&"documentMode"in document&&11>=document.documentMode,$i=null,wd=null,es=null,xd=!1;function Tp(n,r,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;xd||$i==null||$i!==Nl(s)||(s=$i,"selectionStart"in s&&yd(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),es&&Wo(es,s)||(es=s,s=Tc(wd,"onSelect"),0<s.length&&(r=new jl("onSelect","select",null,r,i),n.push({event:r,listeners:s}),r.target=$i)))}function ai(n,r){var i={};return i[n.toLowerCase()]=r.toLowerCase(),i["Webkit"+n]="webkit"+r,i["Moz"+n]="moz"+r,i}var Fi={animationend:ai("Animation","AnimationEnd"),animationiteration:ai("Animation","AnimationIteration"),animationstart:ai("Animation","AnimationStart"),transitionrun:ai("Transition","TransitionRun"),transitionstart:ai("Transition","TransitionStart"),transitioncancel:ai("Transition","TransitionCancel"),transitionend:ai("Transition","TransitionEnd")},Ed={},Ap={};Nr&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function ii(n){if(Ed[n])return Ed[n];if(!Fi[n])return n;var r=Fi[n],i;for(i in r)if(r.hasOwnProperty(i)&&i in Ap)return Ed[n]=r[i];return n}var Op=ii("animationend"),Cp=ii("animationiteration"),kp=ii("animationstart"),fx=ii("transitionrun"),hx=ii("transitionstart"),mx=ii("transitioncancel"),Rp=ii("transitionend"),Dp=new Map,Sd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sd.push("scrollEnd");function sr(n,r){Dp.set(n,r),sn(r,[n])}var Mp=new WeakMap;function qn(n,r){if(typeof n=="object"&&n!==null){var i=Mp.get(n);return i!==void 0?i:(r={value:n,source:r,stack:Fo(r)},Mp.set(n,r),r)}return{value:n,source:r,stack:Fo(r)}}var Vn=[],Yi=0,_d=0;function Hl(){for(var n=Yi,r=_d=Yi=0;r<n;){var i=Vn[r];Vn[r++]=null;var s=Vn[r];Vn[r++]=null;var u=Vn[r];Vn[r++]=null;var d=Vn[r];if(Vn[r++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}d!==0&&Np(i,u,d)}}function ql(n,r,i,s){Vn[Yi++]=n,Vn[Yi++]=r,Vn[Yi++]=i,Vn[Yi++]=s,_d|=s,n.lanes|=s,n=n.alternate,n!==null&&(n.lanes|=s)}function Td(n,r,i,s){return ql(n,r,i,s),Vl(n)}function Gi(n,r){return ql(n,null,null,r),Vl(n)}function Np(n,r,i){n.lanes|=i;var s=n.alternate;s!==null&&(s.lanes|=i);for(var u=!1,d=n.return;d!==null;)d.childLanes|=i,s=d.alternate,s!==null&&(s.childLanes|=i),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(u=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,u&&r!==null&&(u=31-ot(i),n=d.hiddenUpdates,s=n[u],s===null?n[u]=[r]:s.push(r),r.lane=i|536870912),d):null}function Vl(n){if(50<Ts)throw Ts=0,Mf=null,Error(o(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Xi={};function px(n,r,i,s){this.tag=n,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(n,r,i,s){return new px(n,r,i,s)}function Ad(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Lr(n,r){var i=n.alternate;return i===null?(i=Tn(n.tag,r,n.key,n.mode),i.elementType=n.elementType,i.type=n.type,i.stateNode=n.stateNode,i.alternate=n,n.alternate=i):(i.pendingProps=r,i.type=n.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=n.flags&65011712,i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,r=n.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},i.sibling=n.sibling,i.index=n.index,i.ref=n.ref,i.refCleanup=n.refCleanup,i}function Lp(n,r){n.flags&=65011714;var i=n.alternate;return i===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=i.childLanes,n.lanes=i.lanes,n.child=i.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=i.memoizedProps,n.memoizedState=i.memoizedState,n.updateQueue=i.updateQueue,n.type=i.type,r=i.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function $l(n,r,i,s,u,d){var g=0;if(s=n,typeof n=="function")Ad(n)&&(g=1);else if(typeof n=="string")g=b5(n,i,fe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case ue:return n=Tn(31,i,r,u),n.elementType=ue,n.lanes=d,n;case S:return oi(i.children,u,d,r);case A:g=8,u|=24;break;case N:return n=Tn(12,i,r,u|2),n.elementType=N,n.lanes=d,n;case J:return n=Tn(13,i,r,u),n.elementType=J,n.lanes=d,n;case D:return n=Tn(19,i,r,u),n.elementType=D,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:case K:g=10;break e;case Q:g=9;break e;case ce:g=11;break e;case me:g=14;break e;case _e:g=16,s=null;break e}g=29,i=Error(o(130,n===null?"null":typeof n,"")),s=null}return r=Tn(g,i,r,u),r.elementType=n,r.type=s,r.lanes=d,r}function oi(n,r,i,s){return n=Tn(7,n,s,r),n.lanes=i,n}function Od(n,r,i){return n=Tn(6,n,null,r),n.lanes=i,n}function Cd(n,r,i){return r=Tn(4,n.children!==null?n.children:[],n.key,r),r.lanes=i,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Ki=[],Zi=0,Fl=null,Yl=0,$n=[],Fn=0,si=null,Pr=1,zr="";function li(n,r){Ki[Zi++]=Yl,Ki[Zi++]=Fl,Fl=n,Yl=r}function Pp(n,r,i){$n[Fn++]=Pr,$n[Fn++]=zr,$n[Fn++]=si,si=n;var s=Pr;n=zr;var u=32-ot(s)-1;s&=~(1<<u),i+=1;var d=32-ot(r)+u;if(30<d){var g=u-u%5;d=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Pr=1<<32-ot(r)+u|i<<u|s,zr=d+n}else Pr=1<<d|i<<u|s,zr=n}function kd(n){n.return!==null&&(li(n,1),Pp(n,1,0))}function Rd(n){for(;n===Fl;)Fl=Ki[--Zi],Ki[Zi]=null,Yl=Ki[--Zi],Ki[Zi]=null;for(;n===si;)si=$n[--Fn],$n[Fn]=null,zr=$n[--Fn],$n[Fn]=null,Pr=$n[--Fn],$n[Fn]=null}var ln=null,kt=null,at=!1,ci=null,yr=!1,Dd=Error(o(519));function ui(n){var r=Error(o(418,""));throw rs(qn(r,n)),Dd}function zp(n){var r=n.stateNode,i=n.type,s=n.memoizedProps;switch(r[ne]=n,r[le]=s,i){case"dialog":Ze("cancel",r),Ze("close",r);break;case"iframe":case"object":case"embed":Ze("load",r);break;case"video":case"audio":for(i=0;i<Os.length;i++)Ze(Os[i],r);break;case"source":Ze("error",r);break;case"img":case"image":case"link":Ze("error",r),Ze("load",r);break;case"details":Ze("toggle",r);break;case"input":Ze("invalid",r),Qm(r,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ml(r);break;case"select":Ze("invalid",r);break;case"textarea":Ze("invalid",r),Wm(r,s.value,s.defaultValue,s.children),Ml(r)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||r.textContent===""+i||s.suppressHydrationWarning===!0||W0(r.textContent,i)?(s.popover!=null&&(Ze("beforetoggle",r),Ze("toggle",r)),s.onScroll!=null&&Ze("scroll",r),s.onScrollEnd!=null&&Ze("scrollend",r),s.onClick!=null&&(r.onclick=Ac),r=!0):r=!1,r||ui(n)}function Up(n){for(ln=n.return;ln;)switch(ln.tag){case 5:case 13:yr=!1;return;case 27:case 3:yr=!0;return;default:ln=ln.return}}function ts(n){if(n!==ln)return!1;if(!at)return Up(n),at=!0,!1;var r=n.tag,i;if((i=r!==3&&r!==27)&&((i=r===5)&&(i=n.type,i=!(i!=="form"&&i!=="button")||Xf(n.type,n.memoizedProps)),i=!i),i&&kt&&ui(n),Up(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(i=n.data,i==="/$"){if(r===0){kt=cr(n.nextSibling);break e}r--}else i!=="$"&&i!=="$!"&&i!=="$?"||r++;n=n.nextSibling}kt=null}}else r===27?(r=kt,Ta(n.type)?(n=Jf,Jf=null,kt=n):kt=r):kt=ln?cr(n.stateNode.nextSibling):null;return!0}function ns(){kt=ln=null,at=!1}function jp(){var n=ci;return n!==null&&(yn===null?yn=n:yn.push.apply(yn,n),ci=null),n}function rs(n){ci===null?ci=[n]:ci.push(n)}var Md=V(null),di=null,Ur=null;function ua(n,r,i){re(Md,r._currentValue),r._currentValue=i}function jr(n){n._currentValue=Md.current,ae(Md)}function Nd(n,r,i){for(;n!==null;){var s=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,s!==null&&(s.childLanes|=r)):s!==null&&(s.childLanes&r)!==r&&(s.childLanes|=r),n===i)break;n=n.return}}function Ld(n,r,i,s){var u=n.child;for(u!==null&&(u.return=n);u!==null;){var d=u.dependencies;if(d!==null){var g=u.child;d=d.firstContext;e:for(;d!==null;){var v=d;d=u;for(var T=0;T<r.length;T++)if(v.context===r[T]){d.lanes|=i,v=d.alternate,v!==null&&(v.lanes|=i),Nd(d.return,i,n),s||(g=null);break e}d=v.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(o(341));g.lanes|=i,d=g.alternate,d!==null&&(d.lanes|=i),Nd(g,i,n),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===n){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function as(n,r,i,s){n=null;for(var u=r,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(o(387));if(g=g.memoizedProps,g!==null){var v=u.type;_n(u.pendingProps.value,g.value)||(n!==null?n.push(v):n=[v])}}else if(u===ht.current){if(g=u.alternate,g===null)throw Error(o(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(n!==null?n.push(Ns):n=[Ns])}u=u.return}n!==null&&Ld(r,n,i,s),r.flags|=262144}function Gl(n){for(n=n.firstContext;n!==null;){if(!_n(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function fi(n){di=n,Ur=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function en(n){return Bp(di,n)}function Xl(n,r){return di===null&&fi(n),Bp(n,r)}function Bp(n,r){var i=r._currentValue;if(r={context:r,memoizedValue:i,next:null},Ur===null){if(n===null)throw Error(o(308));Ur=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Ur=Ur.next=r;return i}var gx=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(i,s){n.push(s)}};this.abort=function(){r.aborted=!0,n.forEach(function(i){return i()})}},bx=e.unstable_scheduleCallback,vx=e.unstable_NormalPriority,qt={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pd(){return{controller:new gx,data:new Map,refCount:0}}function is(n){n.refCount--,n.refCount===0&&bx(vx,function(){n.controller.abort()})}var os=null,zd=0,Qi=0,Ji=null;function yx(n,r){if(os===null){var i=os=[];zd=0,Qi=Bf(),Ji={status:"pending",value:void 0,then:function(s){i.push(s)}}}return zd++,r.then(Ip,Ip),r}function Ip(){if(--zd===0&&os!==null){Ji!==null&&(Ji.status="fulfilled");var n=os;os=null,Qi=0,Ji=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function wx(n,r){var i=[],s={status:"pending",value:null,reason:null,then:function(u){i.push(u)}};return n.then(function(){s.status="fulfilled",s.value=r;for(var u=0;u<i.length;u++)(0,i[u])(r)},function(u){for(s.status="rejected",s.reason=u,u=0;u<i.length;u++)(0,i[u])(void 0)}),s}var Hp=_.S;_.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&yx(n,r),Hp!==null&&Hp(n,r)};var hi=V(null);function Ud(){var n=hi.current;return n!==null?n:bt.pooledCache}function Kl(n,r){r===null?re(hi,hi.current):re(hi,r.pool)}function qp(){var n=Ud();return n===null?null:{parent:qt._currentValue,pool:n}}var ss=Error(o(460)),Vp=Error(o(474)),Zl=Error(o(542)),jd={then:function(){}};function $p(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ql(){}function Fp(n,r,i){switch(i=n[i],i===void 0?n.push(r):i!==r&&(r.then(Ql,Ql),r=i),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Gp(n),n;default:if(typeof r.status=="string")r.then(Ql,Ql);else{if(n=bt,n!==null&&100<n.shellSuspendCounter)throw Error(o(482));n=r,n.status="pending",n.then(function(s){if(r.status==="pending"){var u=r;u.status="fulfilled",u.value=s}},function(s){if(r.status==="pending"){var u=r;u.status="rejected",u.reason=s}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Gp(n),n}throw ls=r,ss}}var ls=null;function Yp(){if(ls===null)throw Error(o(459));var n=ls;return ls=null,n}function Gp(n){if(n===ss||n===Zl)throw Error(o(483))}var da=!1;function Bd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Id(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function fa(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ha(n,r,i){var s=n.updateQueue;if(s===null)return null;if(s=s.shared,(st&2)!==0){var u=s.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),s.pending=r,r=Vl(n),Np(n,null,i),r}return ql(n,s,r,i),Vl(n)}function cs(n,r,i){if(r=r.updateQueue,r!==null&&(r=r.shared,(i&4194048)!==0)){var s=r.lanes;s&=n.pendingLanes,i|=s,r.lanes=i,ti(n,i)}}function Hd(n,r){var i=n.updateQueue,s=n.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var u=null,d=null;if(i=i.firstBaseUpdate,i!==null){do{var g={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};d===null?u=d=g:d=d.next=g,i=i.next}while(i!==null);d===null?u=d=r:d=d.next=r}else u=d=r;i={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:s.shared,callbacks:s.callbacks},n.updateQueue=i;return}n=i.lastBaseUpdate,n===null?i.firstBaseUpdate=r:n.next=r,i.lastBaseUpdate=r}var qd=!1;function us(){if(qd){var n=Ji;if(n!==null)throw n}}function ds(n,r,i,s){qd=!1;var u=n.updateQueue;da=!1;var d=u.firstBaseUpdate,g=u.lastBaseUpdate,v=u.shared.pending;if(v!==null){u.shared.pending=null;var T=v,U=T.next;T.next=null,g===null?d=U:g.next=U,g=T;var Z=n.alternate;Z!==null&&(Z=Z.updateQueue,v=Z.lastBaseUpdate,v!==g&&(v===null?Z.firstBaseUpdate=U:v.next=U,Z.lastBaseUpdate=T))}if(d!==null){var ee=u.baseState;g=0,Z=U=T=null,v=d;do{var B=v.lane&-536870913,q=B!==v.lane;if(q?(We&B)===B:(s&B)===B){B!==0&&B===Qi&&(qd=!0),Z!==null&&(Z=Z.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var Be=n,Le=v;B=r;var ft=i;switch(Le.tag){case 1:if(Be=Le.payload,typeof Be=="function"){ee=Be.call(ft,ee,B);break e}ee=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Le.payload,B=typeof Be=="function"?Be.call(ft,ee,B):Be,B==null)break e;ee=b({},ee,B);break e;case 2:da=!0}}B=v.callback,B!==null&&(n.flags|=64,q&&(n.flags|=8192),q=u.callbacks,q===null?u.callbacks=[B]:q.push(B))}else q={lane:B,tag:v.tag,payload:v.payload,callback:v.callback,next:null},Z===null?(U=Z=q,T=ee):Z=Z.next=q,g|=B;if(v=v.next,v===null){if(v=u.shared.pending,v===null)break;q=v,v=q.next,q.next=null,u.lastBaseUpdate=q,u.shared.pending=null}}while(!0);Z===null&&(T=ee),u.baseState=T,u.firstBaseUpdate=U,u.lastBaseUpdate=Z,d===null&&(u.shared.lanes=0),xa|=g,n.lanes=g,n.memoizedState=ee}}function Xp(n,r){if(typeof n!="function")throw Error(o(191,n));n.call(r)}function Kp(n,r){var i=n.callbacks;if(i!==null)for(n.callbacks=null,n=0;n<i.length;n++)Xp(i[n],r)}var Wi=V(null),Jl=V(0);function Zp(n,r){n=Fr,re(Jl,n),re(Wi,r),Fr=n|r.baseLanes}function Vd(){re(Jl,Fr),re(Wi,Wi.current)}function $d(){Fr=Jl.current,ae(Wi),ae(Jl)}var ma=0,Ve=null,ut=null,jt=null,Wl=!1,eo=!1,mi=!1,ec=0,fs=0,to=null,xx=0;function Dt(){throw Error(o(321))}function Fd(n,r){if(r===null)return!1;for(var i=0;i<r.length&&i<n.length;i++)if(!_n(n[i],r[i]))return!1;return!0}function Yd(n,r,i,s,u,d){return ma=d,Ve=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,_.H=n===null||n.memoizedState===null?Ng:Lg,mi=!1,d=i(s,u),mi=!1,eo&&(d=Jp(r,i,s,u)),Qp(n),d}function Qp(n){_.H=oc;var r=ut!==null&&ut.next!==null;if(ma=0,jt=ut=Ve=null,Wl=!1,fs=0,to=null,r)throw Error(o(300));n===null||Ft||(n=n.dependencies,n!==null&&Gl(n)&&(Ft=!0))}function Jp(n,r,i,s){Ve=n;var u=0;do{if(eo&&(to=null),fs=0,eo=!1,25<=u)throw Error(o(301));if(u+=1,jt=ut=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}_.H=Cx,d=r(i,s)}while(eo);return d}function Ex(){var n=_.H,r=n.useState()[0];return r=typeof r.then=="function"?hs(r):r,n=n.useState()[0],(ut!==null?ut.memoizedState:null)!==n&&(Ve.flags|=1024),r}function Gd(){var n=ec!==0;return ec=0,n}function Xd(n,r,i){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~i}function Kd(n){if(Wl){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Wl=!1}ma=0,jt=ut=Ve=null,eo=!1,fs=ec=0,to=null}function bn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Ve.memoizedState=jt=n:jt=jt.next=n,jt}function Bt(){if(ut===null){var n=Ve.alternate;n=n!==null?n.memoizedState:null}else n=ut.next;var r=jt===null?Ve.memoizedState:jt.next;if(r!==null)jt=r,ut=n;else{if(n===null)throw Ve.alternate===null?Error(o(467)):Error(o(310));ut=n,n={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},jt===null?Ve.memoizedState=jt=n:jt=jt.next=n}return jt}function Zd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hs(n){var r=fs;return fs+=1,to===null&&(to=[]),n=Fp(to,n,r),r=Ve,(jt===null?r.memoizedState:jt.next)===null&&(r=r.alternate,_.H=r===null||r.memoizedState===null?Ng:Lg),n}function tc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return hs(n);if(n.$$typeof===K)return en(n)}throw Error(o(438,String(n)))}function Qd(n){var r=null,i=Ve.updateQueue;if(i!==null&&(r=i.memoCache),r==null){var s=Ve.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(r={data:s.data.map(function(u){return u.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),i===null&&(i=Zd(),Ve.updateQueue=i),i.memoCache=r,i=r.data[r.index],i===void 0)for(i=r.data[r.index]=Array(n),s=0;s<n;s++)i[s]=Re;return r.index++,i}function Br(n,r){return typeof r=="function"?r(n):r}function nc(n){var r=Bt();return Jd(r,ut,n)}function Jd(n,r,i){var s=n.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=i;var u=n.baseQueue,d=s.pending;if(d!==null){if(u!==null){var g=u.next;u.next=d.next,d.next=g}r.baseQueue=u=d,s.pending=null}if(d=n.baseState,u===null)n.memoizedState=d;else{r=u.next;var v=g=null,T=null,U=r,Z=!1;do{var ee=U.lane&-536870913;if(ee!==U.lane?(We&ee)===ee:(ma&ee)===ee){var B=U.revertLane;if(B===0)T!==null&&(T=T.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),ee===Qi&&(Z=!0);else if((ma&B)===B){U=U.next,B===Qi&&(Z=!0);continue}else ee={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},T===null?(v=T=ee,g=d):T=T.next=ee,Ve.lanes|=B,xa|=B;ee=U.action,mi&&i(d,ee),d=U.hasEagerState?U.eagerState:i(d,ee)}else B={lane:ee,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},T===null?(v=T=B,g=d):T=T.next=B,Ve.lanes|=ee,xa|=ee;U=U.next}while(U!==null&&U!==r);if(T===null?g=d:T.next=v,!_n(d,n.memoizedState)&&(Ft=!0,Z&&(i=Ji,i!==null)))throw i;n.memoizedState=d,n.baseState=g,n.baseQueue=T,s.lastRenderedState=d}return u===null&&(s.lanes=0),[n.memoizedState,s.dispatch]}function Wd(n){var r=Bt(),i=r.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var s=i.dispatch,u=i.pending,d=r.memoizedState;if(u!==null){i.pending=null;var g=u=u.next;do d=n(d,g.action),g=g.next;while(g!==u);_n(d,r.memoizedState)||(Ft=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),i.lastRenderedState=d}return[d,s]}function Wp(n,r,i){var s=Ve,u=Bt(),d=at;if(d){if(i===void 0)throw Error(o(407));i=i()}else i=r();var g=!_n((ut||u).memoizedState,i);g&&(u.memoizedState=i,Ft=!0),u=u.queue;var v=ng.bind(null,s,u,n);if(ms(2048,8,v,[n]),u.getSnapshot!==r||g||jt!==null&&jt.memoizedState.tag&1){if(s.flags|=2048,no(9,rc(),tg.bind(null,s,u,i,r),null),bt===null)throw Error(o(349));d||(ma&124)!==0||eg(s,r,i)}return i}function eg(n,r,i){n.flags|=16384,n={getSnapshot:r,value:i},r=Ve.updateQueue,r===null?(r=Zd(),Ve.updateQueue=r,r.stores=[n]):(i=r.stores,i===null?r.stores=[n]:i.push(n))}function tg(n,r,i,s){r.value=i,r.getSnapshot=s,rg(r)&&ag(n)}function ng(n,r,i){return i(function(){rg(r)&&ag(n)})}function rg(n){var r=n.getSnapshot;n=n.value;try{var i=r();return!_n(n,i)}catch{return!0}}function ag(n){var r=Gi(n,2);r!==null&&Rn(r,n,2)}function ef(n){var r=bn();if(typeof n=="function"){var i=n;if(n=i(),mi){Fe(!0);try{i()}finally{Fe(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:n},r}function ig(n,r,i,s){return n.baseState=i,Jd(n,ut,typeof s=="function"?s:Br)}function Sx(n,r,i,s,u){if(ic(n))throw Error(o(485));if(n=r.action,n!==null){var d={payload:u,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){d.listeners.push(g)}};_.T!==null?i(!0):d.isTransition=!1,s(d),i=r.pending,i===null?(d.next=r.pending=d,og(r,d)):(d.next=i.next,r.pending=i.next=d)}}function og(n,r){var i=r.action,s=r.payload,u=n.state;if(r.isTransition){var d=_.T,g={};_.T=g;try{var v=i(u,s),T=_.S;T!==null&&T(g,v),sg(n,r,v)}catch(U){tf(n,r,U)}finally{_.T=d}}else try{d=i(u,s),sg(n,r,d)}catch(U){tf(n,r,U)}}function sg(n,r,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){lg(n,r,s)},function(s){return tf(n,r,s)}):lg(n,r,i)}function lg(n,r,i){r.status="fulfilled",r.value=i,cg(r),n.state=i,r=n.pending,r!==null&&(i=r.next,i===r?n.pending=null:(i=i.next,r.next=i,og(n,i)))}function tf(n,r,i){var s=n.pending;if(n.pending=null,s!==null){s=s.next;do r.status="rejected",r.reason=i,cg(r),r=r.next;while(r!==s)}n.action=null}function cg(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function ug(n,r){return r}function dg(n,r){if(at){var i=bt.formState;if(i!==null){e:{var s=Ve;if(at){if(kt){t:{for(var u=kt,d=yr;u.nodeType!==8;){if(!d){u=null;break t}if(u=cr(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){kt=cr(u.nextSibling),s=u.data==="F!";break e}}ui(s)}s=!1}s&&(r=i[0])}}return i=bn(),i.memoizedState=i.baseState=r,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ug,lastRenderedState:r},i.queue=s,i=Rg.bind(null,Ve,s),s.dispatch=i,s=ef(!1),d=sf.bind(null,Ve,!1,s.queue),s=bn(),u={state:r,dispatch:null,action:n,pending:null},s.queue=u,i=Sx.bind(null,Ve,u,d,i),u.dispatch=i,s.memoizedState=n,[r,i,!1]}function fg(n){var r=Bt();return hg(r,ut,n)}function hg(n,r,i){if(r=Jd(n,r,ug)[0],n=nc(Br)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var s=hs(r)}catch(g){throw g===ss?Zl:g}else s=r;r=Bt();var u=r.queue,d=u.dispatch;return i!==r.memoizedState&&(Ve.flags|=2048,no(9,rc(),_x.bind(null,u,i),null)),[s,d,n]}function _x(n,r){n.action=r}function mg(n){var r=Bt(),i=ut;if(i!==null)return hg(r,i,n);Bt(),r=r.memoizedState,i=Bt();var s=i.queue.dispatch;return i.memoizedState=n,[r,s,!1]}function no(n,r,i,s){return n={tag:n,create:i,deps:s,inst:r,next:null},r=Ve.updateQueue,r===null&&(r=Zd(),Ve.updateQueue=r),i=r.lastEffect,i===null?r.lastEffect=n.next=n:(s=i.next,i.next=n,n.next=s,r.lastEffect=n),n}function rc(){return{destroy:void 0,resource:void 0}}function pg(){return Bt().memoizedState}function ac(n,r,i,s){var u=bn();s=s===void 0?null:s,Ve.flags|=n,u.memoizedState=no(1|r,rc(),i,s)}function ms(n,r,i,s){var u=Bt();s=s===void 0?null:s;var d=u.memoizedState.inst;ut!==null&&s!==null&&Fd(s,ut.memoizedState.deps)?u.memoizedState=no(r,d,i,s):(Ve.flags|=n,u.memoizedState=no(1|r,d,i,s))}function gg(n,r){ac(8390656,8,n,r)}function bg(n,r){ms(2048,8,n,r)}function vg(n,r){return ms(4,2,n,r)}function yg(n,r){return ms(4,4,n,r)}function wg(n,r){if(typeof r=="function"){n=n();var i=r(n);return function(){typeof i=="function"?i():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function xg(n,r,i){i=i!=null?i.concat([n]):null,ms(4,4,wg.bind(null,r,n),i)}function nf(){}function Eg(n,r){var i=Bt();r=r===void 0?null:r;var s=i.memoizedState;return r!==null&&Fd(r,s[1])?s[0]:(i.memoizedState=[n,r],n)}function Sg(n,r){var i=Bt();r=r===void 0?null:r;var s=i.memoizedState;if(r!==null&&Fd(r,s[1]))return s[0];if(s=n(),mi){Fe(!0);try{n()}finally{Fe(!1)}}return i.memoizedState=[s,r],s}function rf(n,r,i){return i===void 0||(ma&1073741824)!==0?n.memoizedState=r:(n.memoizedState=i,n=A0(),Ve.lanes|=n,xa|=n,i)}function _g(n,r,i,s){return _n(i,r)?i:Wi.current!==null?(n=rf(n,i,s),_n(n,r)||(Ft=!0),n):(ma&42)===0?(Ft=!0,n.memoizedState=i):(n=A0(),Ve.lanes|=n,xa|=n,r)}function Tg(n,r,i,s,u){var d=H.p;H.p=d!==0&&8>d?d:8;var g=_.T,v={};_.T=v,sf(n,!1,r,i);try{var T=u(),U=_.S;if(U!==null&&U(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var Z=wx(T,s);ps(n,r,Z,kn(n))}else ps(n,r,s,kn(n))}catch(ee){ps(n,r,{then:function(){},status:"rejected",reason:ee},kn())}finally{H.p=d,_.T=g}}function Tx(){}function af(n,r,i,s){if(n.tag!==5)throw Error(o(476));var u=Ag(n).queue;Tg(n,u,r,F,i===null?Tx:function(){return Og(n),i(s)})}function Ag(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:F},next:null};var i={};return r.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:i},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function Og(n){var r=Ag(n).next.queue;ps(n,r,{},kn())}function of(){return en(Ns)}function Cg(){return Bt().memoizedState}function kg(){return Bt().memoizedState}function Ax(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var i=kn();n=fa(i);var s=ha(r,n,i);s!==null&&(Rn(s,r,i),cs(s,r,i)),r={cache:Pd()},n.payload=r;return}r=r.return}}function Ox(n,r,i){var s=kn();i={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},ic(n)?Dg(r,i):(i=Td(n,r,i,s),i!==null&&(Rn(i,n,s),Mg(i,r,s)))}function Rg(n,r,i){var s=kn();ps(n,r,i,s)}function ps(n,r,i,s){var u={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(ic(n))Dg(r,u);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var g=r.lastRenderedState,v=d(g,i);if(u.hasEagerState=!0,u.eagerState=v,_n(v,g))return ql(n,r,u,0),bt===null&&Hl(),!1}catch{}finally{}if(i=Td(n,r,u,s),i!==null)return Rn(i,n,s),Mg(i,r,s),!0}return!1}function sf(n,r,i,s){if(s={lane:2,revertLane:Bf(),action:s,hasEagerState:!1,eagerState:null,next:null},ic(n)){if(r)throw Error(o(479))}else r=Td(n,i,s,2),r!==null&&Rn(r,n,2)}function ic(n){var r=n.alternate;return n===Ve||r!==null&&r===Ve}function Dg(n,r){eo=Wl=!0;var i=n.pending;i===null?r.next=r:(r.next=i.next,i.next=r),n.pending=r}function Mg(n,r,i){if((i&4194048)!==0){var s=r.lanes;s&=n.pendingLanes,i|=s,r.lanes=i,ti(n,i)}}var oc={readContext:en,use:tc,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},Ng={readContext:en,use:tc,useCallback:function(n,r){return bn().memoizedState=[n,r===void 0?null:r],n},useContext:en,useEffect:gg,useImperativeHandle:function(n,r,i){i=i!=null?i.concat([n]):null,ac(4194308,4,wg.bind(null,r,n),i)},useLayoutEffect:function(n,r){return ac(4194308,4,n,r)},useInsertionEffect:function(n,r){ac(4,2,n,r)},useMemo:function(n,r){var i=bn();r=r===void 0?null:r;var s=n();if(mi){Fe(!0);try{n()}finally{Fe(!1)}}return i.memoizedState=[s,r],s},useReducer:function(n,r,i){var s=bn();if(i!==void 0){var u=i(r);if(mi){Fe(!0);try{i(r)}finally{Fe(!1)}}}else u=r;return s.memoizedState=s.baseState=u,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:u},s.queue=n,n=n.dispatch=Ox.bind(null,Ve,n),[s.memoizedState,n]},useRef:function(n){var r=bn();return n={current:n},r.memoizedState=n},useState:function(n){n=ef(n);var r=n.queue,i=Rg.bind(null,Ve,r);return r.dispatch=i,[n.memoizedState,i]},useDebugValue:nf,useDeferredValue:function(n,r){var i=bn();return rf(i,n,r)},useTransition:function(){var n=ef(!1);return n=Tg.bind(null,Ve,n.queue,!0,!1),bn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,i){var s=Ve,u=bn();if(at){if(i===void 0)throw Error(o(407));i=i()}else{if(i=r(),bt===null)throw Error(o(349));(We&124)!==0||eg(s,r,i)}u.memoizedState=i;var d={value:i,getSnapshot:r};return u.queue=d,gg(ng.bind(null,s,d,n),[n]),s.flags|=2048,no(9,rc(),tg.bind(null,s,d,i,r),null),i},useId:function(){var n=bn(),r=bt.identifierPrefix;if(at){var i=zr,s=Pr;i=(s&~(1<<32-ot(s)-1)).toString(32)+i,r="«"+r+"R"+i,i=ec++,0<i&&(r+="H"+i.toString(32)),r+="»"}else i=xx++,r="«"+r+"r"+i.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:of,useFormState:dg,useActionState:dg,useOptimistic:function(n){var r=bn();r.memoizedState=r.baseState=n;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=i,r=sf.bind(null,Ve,!0,i),i.dispatch=r,[n,r]},useMemoCache:Qd,useCacheRefresh:function(){return bn().memoizedState=Ax.bind(null,Ve)}},Lg={readContext:en,use:tc,useCallback:Eg,useContext:en,useEffect:bg,useImperativeHandle:xg,useInsertionEffect:vg,useLayoutEffect:yg,useMemo:Sg,useReducer:nc,useRef:pg,useState:function(){return nc(Br)},useDebugValue:nf,useDeferredValue:function(n,r){var i=Bt();return _g(i,ut.memoizedState,n,r)},useTransition:function(){var n=nc(Br)[0],r=Bt().memoizedState;return[typeof n=="boolean"?n:hs(n),r]},useSyncExternalStore:Wp,useId:Cg,useHostTransitionStatus:of,useFormState:fg,useActionState:fg,useOptimistic:function(n,r){var i=Bt();return ig(i,ut,n,r)},useMemoCache:Qd,useCacheRefresh:kg},Cx={readContext:en,use:tc,useCallback:Eg,useContext:en,useEffect:bg,useImperativeHandle:xg,useInsertionEffect:vg,useLayoutEffect:yg,useMemo:Sg,useReducer:Wd,useRef:pg,useState:function(){return Wd(Br)},useDebugValue:nf,useDeferredValue:function(n,r){var i=Bt();return ut===null?rf(i,n,r):_g(i,ut.memoizedState,n,r)},useTransition:function(){var n=Wd(Br)[0],r=Bt().memoizedState;return[typeof n=="boolean"?n:hs(n),r]},useSyncExternalStore:Wp,useId:Cg,useHostTransitionStatus:of,useFormState:mg,useActionState:mg,useOptimistic:function(n,r){var i=Bt();return ut!==null?ig(i,ut,n,r):(i.baseState=n,[n,i.queue.dispatch])},useMemoCache:Qd,useCacheRefresh:kg},ro=null,gs=0;function sc(n){var r=gs;return gs+=1,ro===null&&(ro=[]),Fp(ro,n,r)}function bs(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function lc(n,r){throw r.$$typeof===x?Error(o(525)):(n=Object.prototype.toString.call(r),Error(o(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function Pg(n){var r=n._init;return r(n._payload)}function zg(n){function r(M,k){if(n){var P=M.deletions;P===null?(M.deletions=[k],M.flags|=16):P.push(k)}}function i(M,k){if(!n)return null;for(;k!==null;)r(M,k),k=k.sibling;return null}function s(M){for(var k=new Map;M!==null;)M.key!==null?k.set(M.key,M):k.set(M.index,M),M=M.sibling;return k}function u(M,k){return M=Lr(M,k),M.index=0,M.sibling=null,M}function d(M,k,P){return M.index=P,n?(P=M.alternate,P!==null?(P=P.index,P<k?(M.flags|=67108866,k):P):(M.flags|=67108866,k)):(M.flags|=1048576,k)}function g(M){return n&&M.alternate===null&&(M.flags|=67108866),M}function v(M,k,P,W){return k===null||k.tag!==6?(k=Od(P,M.mode,W),k.return=M,k):(k=u(k,P),k.return=M,k)}function T(M,k,P,W){var ve=P.type;return ve===S?Z(M,k,P.props.children,W,P.key):k!==null&&(k.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===_e&&Pg(ve)===k.type)?(k=u(k,P.props),bs(k,P),k.return=M,k):(k=$l(P.type,P.key,P.props,null,M.mode,W),bs(k,P),k.return=M,k)}function U(M,k,P,W){return k===null||k.tag!==4||k.stateNode.containerInfo!==P.containerInfo||k.stateNode.implementation!==P.implementation?(k=Cd(P,M.mode,W),k.return=M,k):(k=u(k,P.children||[]),k.return=M,k)}function Z(M,k,P,W,ve){return k===null||k.tag!==7?(k=oi(P,M.mode,W,ve),k.return=M,k):(k=u(k,P),k.return=M,k)}function ee(M,k,P){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Od(""+k,M.mode,P),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return P=$l(k.type,k.key,k.props,null,M.mode,P),bs(P,k),P.return=M,P;case R:return k=Cd(k,M.mode,P),k.return=M,k;case _e:var W=k._init;return k=W(k._payload),ee(M,k,P)}if(te(k)||we(k))return k=oi(k,M.mode,P,null),k.return=M,k;if(typeof k.then=="function")return ee(M,sc(k),P);if(k.$$typeof===K)return ee(M,Xl(M,k),P);lc(M,k)}return null}function B(M,k,P,W){var ve=k!==null?k.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return ve!==null?null:v(M,k,""+P,W);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case y:return P.key===ve?T(M,k,P,W):null;case R:return P.key===ve?U(M,k,P,W):null;case _e:return ve=P._init,P=ve(P._payload),B(M,k,P,W)}if(te(P)||we(P))return ve!==null?null:Z(M,k,P,W,null);if(typeof P.then=="function")return B(M,k,sc(P),W);if(P.$$typeof===K)return B(M,k,Xl(M,P),W);lc(M,P)}return null}function q(M,k,P,W,ve){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return M=M.get(P)||null,v(k,M,""+W,ve);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return M=M.get(W.key===null?P:W.key)||null,T(k,M,W,ve);case R:return M=M.get(W.key===null?P:W.key)||null,U(k,M,W,ve);case _e:var Ge=W._init;return W=Ge(W._payload),q(M,k,P,W,ve)}if(te(W)||we(W))return M=M.get(P)||null,Z(k,M,W,ve,null);if(typeof W.then=="function")return q(M,k,P,sc(W),ve);if(W.$$typeof===K)return q(M,k,P,Xl(k,W),ve);lc(k,W)}return null}function Be(M,k,P,W){for(var ve=null,Ge=null,Ae=k,Pe=k=0,Gt=null;Ae!==null&&Pe<P.length;Pe++){Ae.index>Pe?(Gt=Ae,Ae=null):Gt=Ae.sibling;var nt=B(M,Ae,P[Pe],W);if(nt===null){Ae===null&&(Ae=Gt);break}n&&Ae&&nt.alternate===null&&r(M,Ae),k=d(nt,k,Pe),Ge===null?ve=nt:Ge.sibling=nt,Ge=nt,Ae=Gt}if(Pe===P.length)return i(M,Ae),at&&li(M,Pe),ve;if(Ae===null){for(;Pe<P.length;Pe++)Ae=ee(M,P[Pe],W),Ae!==null&&(k=d(Ae,k,Pe),Ge===null?ve=Ae:Ge.sibling=Ae,Ge=Ae);return at&&li(M,Pe),ve}for(Ae=s(Ae);Pe<P.length;Pe++)Gt=q(Ae,M,Pe,P[Pe],W),Gt!==null&&(n&&Gt.alternate!==null&&Ae.delete(Gt.key===null?Pe:Gt.key),k=d(Gt,k,Pe),Ge===null?ve=Gt:Ge.sibling=Gt,Ge=Gt);return n&&Ae.forEach(function(Ra){return r(M,Ra)}),at&&li(M,Pe),ve}function Le(M,k,P,W){if(P==null)throw Error(o(151));for(var ve=null,Ge=null,Ae=k,Pe=k=0,Gt=null,nt=P.next();Ae!==null&&!nt.done;Pe++,nt=P.next()){Ae.index>Pe?(Gt=Ae,Ae=null):Gt=Ae.sibling;var Ra=B(M,Ae,nt.value,W);if(Ra===null){Ae===null&&(Ae=Gt);break}n&&Ae&&Ra.alternate===null&&r(M,Ae),k=d(Ra,k,Pe),Ge===null?ve=Ra:Ge.sibling=Ra,Ge=Ra,Ae=Gt}if(nt.done)return i(M,Ae),at&&li(M,Pe),ve;if(Ae===null){for(;!nt.done;Pe++,nt=P.next())nt=ee(M,nt.value,W),nt!==null&&(k=d(nt,k,Pe),Ge===null?ve=nt:Ge.sibling=nt,Ge=nt);return at&&li(M,Pe),ve}for(Ae=s(Ae);!nt.done;Pe++,nt=P.next())nt=q(Ae,M,Pe,nt.value,W),nt!==null&&(n&&nt.alternate!==null&&Ae.delete(nt.key===null?Pe:nt.key),k=d(nt,k,Pe),Ge===null?ve=nt:Ge.sibling=nt,Ge=nt);return n&&Ae.forEach(function(k5){return r(M,k5)}),at&&li(M,Pe),ve}function ft(M,k,P,W){if(typeof P=="object"&&P!==null&&P.type===S&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case y:e:{for(var ve=P.key;k!==null;){if(k.key===ve){if(ve=P.type,ve===S){if(k.tag===7){i(M,k.sibling),W=u(k,P.props.children),W.return=M,M=W;break e}}else if(k.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===_e&&Pg(ve)===k.type){i(M,k.sibling),W=u(k,P.props),bs(W,P),W.return=M,M=W;break e}i(M,k);break}else r(M,k);k=k.sibling}P.type===S?(W=oi(P.props.children,M.mode,W,P.key),W.return=M,M=W):(W=$l(P.type,P.key,P.props,null,M.mode,W),bs(W,P),W.return=M,M=W)}return g(M);case R:e:{for(ve=P.key;k!==null;){if(k.key===ve)if(k.tag===4&&k.stateNode.containerInfo===P.containerInfo&&k.stateNode.implementation===P.implementation){i(M,k.sibling),W=u(k,P.children||[]),W.return=M,M=W;break e}else{i(M,k);break}else r(M,k);k=k.sibling}W=Cd(P,M.mode,W),W.return=M,M=W}return g(M);case _e:return ve=P._init,P=ve(P._payload),ft(M,k,P,W)}if(te(P))return Be(M,k,P,W);if(we(P)){if(ve=we(P),typeof ve!="function")throw Error(o(150));return P=ve.call(P),Le(M,k,P,W)}if(typeof P.then=="function")return ft(M,k,sc(P),W);if(P.$$typeof===K)return ft(M,k,Xl(M,P),W);lc(M,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,k!==null&&k.tag===6?(i(M,k.sibling),W=u(k,P),W.return=M,M=W):(i(M,k),W=Od(P,M.mode,W),W.return=M,M=W),g(M)):i(M,k)}return function(M,k,P,W){try{gs=0;var ve=ft(M,k,P,W);return ro=null,ve}catch(Ae){if(Ae===ss||Ae===Zl)throw Ae;var Ge=Tn(29,Ae,null,M.mode);return Ge.lanes=W,Ge.return=M,Ge}finally{}}}var ao=zg(!0),Ug=zg(!1),Yn=V(null),wr=null;function pa(n){var r=n.alternate;re(Vt,Vt.current&1),re(Yn,n),wr===null&&(r===null||Wi.current!==null||r.memoizedState!==null)&&(wr=n)}function jg(n){if(n.tag===22){if(re(Vt,Vt.current),re(Yn,n),wr===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(wr=n)}}else ga()}function ga(){re(Vt,Vt.current),re(Yn,Yn.current)}function Ir(n){ae(Yn),wr===n&&(wr=null),ae(Vt)}var Vt=V(0);function cc(n){for(var r=n;r!==null;){if(r.tag===13){var i=r.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||Qf(i)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function lf(n,r,i,s){r=n.memoizedState,i=i(s,r),i=i==null?r:b({},r,i),n.memoizedState=i,n.lanes===0&&(n.updateQueue.baseState=i)}var cf={enqueueSetState:function(n,r,i){n=n._reactInternals;var s=kn(),u=fa(s);u.payload=r,i!=null&&(u.callback=i),r=ha(n,u,s),r!==null&&(Rn(r,n,s),cs(r,n,s))},enqueueReplaceState:function(n,r,i){n=n._reactInternals;var s=kn(),u=fa(s);u.tag=1,u.payload=r,i!=null&&(u.callback=i),r=ha(n,u,s),r!==null&&(Rn(r,n,s),cs(r,n,s))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var i=kn(),s=fa(i);s.tag=2,r!=null&&(s.callback=r),r=ha(n,s,i),r!==null&&(Rn(r,n,i),cs(r,n,i))}};function Bg(n,r,i,s,u,d,g){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(s,d,g):r.prototype&&r.prototype.isPureReactComponent?!Wo(i,s)||!Wo(u,d):!0}function Ig(n,r,i,s){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(i,s),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(i,s),r.state!==n&&cf.enqueueReplaceState(r,r.state,null)}function pi(n,r){var i=r;if("ref"in r){i={};for(var s in r)s!=="ref"&&(i[s]=r[s])}if(n=n.defaultProps){i===r&&(i=b({},i));for(var u in n)i[u]===void 0&&(i[u]=n[u])}return i}var uc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Hg(n){uc(n)}function qg(n){console.error(n)}function Vg(n){uc(n)}function dc(n,r){try{var i=n.onUncaughtError;i(r.value,{componentStack:r.stack})}catch(s){setTimeout(function(){throw s})}}function $g(n,r,i){try{var s=n.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(n,r,i){return i=fa(i),i.tag=3,i.payload={element:null},i.callback=function(){dc(n,r)},i}function Fg(n){return n=fa(n),n.tag=3,n}function Yg(n,r,i,s){var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var d=s.value;n.payload=function(){return u(d)},n.callback=function(){$g(r,i,s)}}var g=i.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(n.callback=function(){$g(r,i,s),typeof u!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})})}function kx(n,r,i,s,u){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(r=i.alternate,r!==null&&as(r,i,u,!0),i=Yn.current,i!==null){switch(i.tag){case 13:return wr===null?Lf():i.alternate===null&&Rt===0&&(Rt=3),i.flags&=-257,i.flags|=65536,i.lanes=u,s===jd?i.flags|=16384:(r=i.updateQueue,r===null?i.updateQueue=new Set([s]):r.add(s),zf(n,s,u)),!1;case 22:return i.flags|=65536,s===jd?i.flags|=16384:(r=i.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=r):(i=r.retryQueue,i===null?r.retryQueue=new Set([s]):i.add(s)),zf(n,s,u)),!1}throw Error(o(435,i.tag))}return zf(n,s,u),Lf(),!1}if(at)return r=Yn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=u,s!==Dd&&(n=Error(o(422),{cause:s}),rs(qn(n,i)))):(s!==Dd&&(r=Error(o(423),{cause:s}),rs(qn(r,i))),n=n.current.alternate,n.flags|=65536,u&=-u,n.lanes|=u,s=qn(s,i),u=uf(n.stateNode,s,u),Hd(n,u),Rt!==4&&(Rt=2)),!1;var d=Error(o(520),{cause:s});if(d=qn(d,i),_s===null?_s=[d]:_s.push(d),Rt!==4&&(Rt=2),r===null)return!0;s=qn(s,i),i=r;do{switch(i.tag){case 3:return i.flags|=65536,n=u&-u,i.lanes|=n,n=uf(i.stateNode,s,n),Hd(i,n),!1;case 1:if(r=i.type,d=i.stateNode,(i.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ea===null||!Ea.has(d))))return i.flags|=65536,u&=-u,i.lanes|=u,u=Fg(u),Yg(u,n,i,s),Hd(i,u),!1}i=i.return}while(i!==null);return!1}var Gg=Error(o(461)),Ft=!1;function Kt(n,r,i,s){r.child=n===null?Ug(r,null,i,s):ao(r,n.child,i,s)}function Xg(n,r,i,s,u){i=i.render;var d=r.ref;if("ref"in s){var g={};for(var v in s)v!=="ref"&&(g[v]=s[v])}else g=s;return fi(r),s=Yd(n,r,i,g,d,u),v=Gd(),n!==null&&!Ft?(Xd(n,r,u),Hr(n,r,u)):(at&&v&&kd(r),r.flags|=1,Kt(n,r,s,u),r.child)}function Kg(n,r,i,s,u){if(n===null){var d=i.type;return typeof d=="function"&&!Ad(d)&&d.defaultProps===void 0&&i.compare===null?(r.tag=15,r.type=d,Zg(n,r,d,s,u)):(n=$l(i.type,null,s,r,r.mode,u),n.ref=r.ref,n.return=r,r.child=n)}if(d=n.child,!vf(n,u)){var g=d.memoizedProps;if(i=i.compare,i=i!==null?i:Wo,i(g,s)&&n.ref===r.ref)return Hr(n,r,u)}return r.flags|=1,n=Lr(d,s),n.ref=r.ref,n.return=r,r.child=n}function Zg(n,r,i,s,u){if(n!==null){var d=n.memoizedProps;if(Wo(d,s)&&n.ref===r.ref)if(Ft=!1,r.pendingProps=s=d,vf(n,u))(n.flags&131072)!==0&&(Ft=!0);else return r.lanes=n.lanes,Hr(n,r,u)}return df(n,r,i,s,u)}function Qg(n,r,i){var s=r.pendingProps,u=s.children,d=n!==null?n.memoizedState:null;if(s.mode==="hidden"){if((r.flags&128)!==0){if(s=d!==null?d.baseLanes|i:i,n!==null){for(u=r.child=n.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;r.childLanes=d&~s}else r.childLanes=0,r.child=null;return Jg(n,r,s,i)}if((i&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Kl(r,d!==null?d.cachePool:null),d!==null?Zp(r,d):Vd(),jg(r);else return r.lanes=r.childLanes=536870912,Jg(n,r,d!==null?d.baseLanes|i:i,i)}else d!==null?(Kl(r,d.cachePool),Zp(r,d),ga(),r.memoizedState=null):(n!==null&&Kl(r,null),Vd(),ga());return Kt(n,r,u,i),r.child}function Jg(n,r,i,s){var u=Ud();return u=u===null?null:{parent:qt._currentValue,pool:u},r.memoizedState={baseLanes:i,cachePool:u},n!==null&&Kl(r,null),Vd(),jg(r),n!==null&&as(n,r,s,!0),null}function fc(n,r){var i=r.ref;if(i===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(n===null||n.ref!==i)&&(r.flags|=4194816)}}function df(n,r,i,s,u){return fi(r),i=Yd(n,r,i,s,void 0,u),s=Gd(),n!==null&&!Ft?(Xd(n,r,u),Hr(n,r,u)):(at&&s&&kd(r),r.flags|=1,Kt(n,r,i,u),r.child)}function Wg(n,r,i,s,u,d){return fi(r),r.updateQueue=null,i=Jp(r,s,i,u),Qp(n),s=Gd(),n!==null&&!Ft?(Xd(n,r,d),Hr(n,r,d)):(at&&s&&kd(r),r.flags|=1,Kt(n,r,i,d),r.child)}function e0(n,r,i,s,u){if(fi(r),r.stateNode===null){var d=Xi,g=i.contextType;typeof g=="object"&&g!==null&&(d=en(g)),d=new i(s,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cf,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=s,d.state=r.memoizedState,d.refs={},Bd(r),g=i.contextType,d.context=typeof g=="object"&&g!==null?en(g):Xi,d.state=r.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(lf(r,i,g,s),d.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(g=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),g!==d.state&&cf.enqueueReplaceState(d,d.state,null),ds(r,s,d,u),us(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),s=!0}else if(n===null){d=r.stateNode;var v=r.memoizedProps,T=pi(i,v);d.props=T;var U=d.context,Z=i.contextType;g=Xi,typeof Z=="object"&&Z!==null&&(g=en(Z));var ee=i.getDerivedStateFromProps;Z=typeof ee=="function"||typeof d.getSnapshotBeforeUpdate=="function",v=r.pendingProps!==v,Z||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v||U!==g)&&Ig(r,d,s,g),da=!1;var B=r.memoizedState;d.state=B,ds(r,s,d,u),us(),U=r.memoizedState,v||B!==U||da?(typeof ee=="function"&&(lf(r,i,ee,s),U=r.memoizedState),(T=da||Bg(r,i,T,s,B,U,g))?(Z||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=s,r.memoizedState=U),d.props=s,d.state=U,d.context=g,s=T):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),s=!1)}else{d=r.stateNode,Id(n,r),g=r.memoizedProps,Z=pi(i,g),d.props=Z,ee=r.pendingProps,B=d.context,U=i.contextType,T=Xi,typeof U=="object"&&U!==null&&(T=en(U)),v=i.getDerivedStateFromProps,(U=typeof v=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==ee||B!==T)&&Ig(r,d,s,T),da=!1,B=r.memoizedState,d.state=B,ds(r,s,d,u),us();var q=r.memoizedState;g!==ee||B!==q||da||n!==null&&n.dependencies!==null&&Gl(n.dependencies)?(typeof v=="function"&&(lf(r,i,v,s),q=r.memoizedState),(Z=da||Bg(r,i,Z,s,B,q,T)||n!==null&&n.dependencies!==null&&Gl(n.dependencies))?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,q,T),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,q,T)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),r.memoizedProps=s,r.memoizedState=q),d.props=s,d.state=q,d.context=T,s=Z):(typeof d.componentDidUpdate!="function"||g===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),s=!1)}return d=s,fc(n,r),s=(r.flags&128)!==0,d||s?(d=r.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,n!==null&&s?(r.child=ao(r,n.child,null,u),r.child=ao(r,null,i,u)):Kt(n,r,i,u),r.memoizedState=d.state,n=r.child):n=Hr(n,r,u),n}function t0(n,r,i,s){return ns(),r.flags|=256,Kt(n,r,i,s),r.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(n){return{baseLanes:n,cachePool:qp()}}function mf(n,r,i){return n=n!==null?n.childLanes&~i:0,r&&(n|=Gn),n}function n0(n,r,i){var s=r.pendingProps,u=!1,d=(r.flags&128)!==0,g;if((g=d)||(g=n!==null&&n.memoizedState===null?!1:(Vt.current&2)!==0),g&&(u=!0,r.flags&=-129),g=(r.flags&32)!==0,r.flags&=-33,n===null){if(at){if(u?pa(r):ga(),at){var v=kt,T;if(T=v){e:{for(T=v,v=yr;T.nodeType!==8;){if(!v){v=null;break e}if(T=cr(T.nextSibling),T===null){v=null;break e}}v=T}v!==null?(r.memoizedState={dehydrated:v,treeContext:si!==null?{id:Pr,overflow:zr}:null,retryLane:536870912,hydrationErrors:null},T=Tn(18,null,null,0),T.stateNode=v,T.return=r,r.child=T,ln=r,kt=null,T=!0):T=!1}T||ui(r)}if(v=r.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return Qf(v)?r.lanes=32:r.lanes=536870912,null;Ir(r)}return v=s.children,s=s.fallback,u?(ga(),u=r.mode,v=hc({mode:"hidden",children:v},u),s=oi(s,u,i,null),v.return=r,s.return=r,v.sibling=s,r.child=v,u=r.child,u.memoizedState=hf(i),u.childLanes=mf(n,g,i),r.memoizedState=ff,s):(pa(r),pf(r,v))}if(T=n.memoizedState,T!==null&&(v=T.dehydrated,v!==null)){if(d)r.flags&256?(pa(r),r.flags&=-257,r=gf(n,r,i)):r.memoizedState!==null?(ga(),r.child=n.child,r.flags|=128,r=null):(ga(),u=s.fallback,v=r.mode,s=hc({mode:"visible",children:s.children},v),u=oi(u,v,i,null),u.flags|=2,s.return=r,u.return=r,s.sibling=u,r.child=s,ao(r,n.child,null,i),s=r.child,s.memoizedState=hf(i),s.childLanes=mf(n,g,i),r.memoizedState=ff,r=u);else if(pa(r),Qf(v)){if(g=v.nextSibling&&v.nextSibling.dataset,g)var U=g.dgst;g=U,s=Error(o(419)),s.stack="",s.digest=g,rs({value:s,source:null,stack:null}),r=gf(n,r,i)}else if(Ft||as(n,r,i,!1),g=(i&n.childLanes)!==0,Ft||g){if(g=bt,g!==null&&(s=i&-i,s=(s&42)!==0?1:qo(s),s=(s&(g.suspendedLanes|i))!==0?0:s,s!==0&&s!==T.retryLane))throw T.retryLane=s,Gi(n,s),Rn(g,n,s),Gg;v.data==="$?"||Lf(),r=gf(n,r,i)}else v.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=T.treeContext,kt=cr(v.nextSibling),ln=r,at=!0,ci=null,yr=!1,n!==null&&($n[Fn++]=Pr,$n[Fn++]=zr,$n[Fn++]=si,Pr=n.id,zr=n.overflow,si=r),r=pf(r,s.children),r.flags|=4096);return r}return u?(ga(),u=s.fallback,v=r.mode,T=n.child,U=T.sibling,s=Lr(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&65011712,U!==null?u=Lr(U,u):(u=oi(u,v,i,null),u.flags|=2),u.return=r,s.return=r,s.sibling=u,r.child=s,s=u,u=r.child,v=n.child.memoizedState,v===null?v=hf(i):(T=v.cachePool,T!==null?(U=qt._currentValue,T=T.parent!==U?{parent:U,pool:U}:T):T=qp(),v={baseLanes:v.baseLanes|i,cachePool:T}),u.memoizedState=v,u.childLanes=mf(n,g,i),r.memoizedState=ff,s):(pa(r),i=n.child,n=i.sibling,i=Lr(i,{mode:"visible",children:s.children}),i.return=r,i.sibling=null,n!==null&&(g=r.deletions,g===null?(r.deletions=[n],r.flags|=16):g.push(n)),r.child=i,r.memoizedState=null,i)}function pf(n,r){return r=hc({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function hc(n,r){return n=Tn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function gf(n,r,i){return ao(r,n.child,null,i),n=pf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function r0(n,r,i){n.lanes|=r;var s=n.alternate;s!==null&&(s.lanes|=r),Nd(n.return,r,i)}function bf(n,r,i,s,u){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:u}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=i,d.tailMode=u)}function a0(n,r,i){var s=r.pendingProps,u=s.revealOrder,d=s.tail;if(Kt(n,r,s.children,i),s=Vt.current,(s&2)!==0)s=s&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&r0(n,i,r);else if(n.tag===19)r0(n,i,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}s&=1}switch(re(Vt,s),u){case"forwards":for(i=r.child,u=null;i!==null;)n=i.alternate,n!==null&&cc(n)===null&&(u=i),i=i.sibling;i=u,i===null?(u=r.child,r.child=null):(u=i.sibling,i.sibling=null),bf(r,!1,u,i,d);break;case"backwards":for(i=null,u=r.child,r.child=null;u!==null;){if(n=u.alternate,n!==null&&cc(n)===null){r.child=u;break}n=u.sibling,u.sibling=i,i=u,u=n}bf(r,!0,i,null,d);break;case"together":bf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Hr(n,r,i){if(n!==null&&(r.dependencies=n.dependencies),xa|=r.lanes,(i&r.childLanes)===0)if(n!==null){if(as(n,r,i,!1),(i&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(o(153));if(r.child!==null){for(n=r.child,i=Lr(n,n.pendingProps),r.child=i,i.return=r;n.sibling!==null;)n=n.sibling,i=i.sibling=Lr(n,n.pendingProps),i.return=r;i.sibling=null}return r.child}function vf(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Gl(n)))}function Rx(n,r,i){switch(r.tag){case 3:Qe(r,r.stateNode.containerInfo),ua(r,qt,n.memoizedState.cache),ns();break;case 27:case 5:$e(r);break;case 4:Qe(r,r.stateNode.containerInfo);break;case 10:ua(r,r.type,r.memoizedProps.value);break;case 13:var s=r.memoizedState;if(s!==null)return s.dehydrated!==null?(pa(r),r.flags|=128,null):(i&r.child.childLanes)!==0?n0(n,r,i):(pa(r),n=Hr(n,r,i),n!==null?n.sibling:null);pa(r);break;case 19:var u=(n.flags&128)!==0;if(s=(i&r.childLanes)!==0,s||(as(n,r,i,!1),s=(i&r.childLanes)!==0),u){if(s)return a0(n,r,i);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),re(Vt,Vt.current),s)break;return null;case 22:case 23:return r.lanes=0,Qg(n,r,i);case 24:ua(r,qt,n.memoizedState.cache)}return Hr(n,r,i)}function i0(n,r,i){if(n!==null)if(n.memoizedProps!==r.pendingProps)Ft=!0;else{if(!vf(n,i)&&(r.flags&128)===0)return Ft=!1,Rx(n,r,i);Ft=(n.flags&131072)!==0}else Ft=!1,at&&(r.flags&1048576)!==0&&Pp(r,Yl,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var s=r.elementType,u=s._init;if(s=u(s._payload),r.type=s,typeof s=="function")Ad(s)?(n=pi(s,n),r.tag=1,r=e0(null,r,s,n,i)):(r.tag=0,r=df(null,r,s,n,i));else{if(s!=null){if(u=s.$$typeof,u===ce){r.tag=11,r=Xg(null,r,s,n,i);break e}else if(u===me){r.tag=14,r=Kg(null,r,s,n,i);break e}}throw r=ie(s)||s,Error(o(306,r,""))}}return r;case 0:return df(n,r,r.type,r.pendingProps,i);case 1:return s=r.type,u=pi(s,r.pendingProps),e0(n,r,s,u,i);case 3:e:{if(Qe(r,r.stateNode.containerInfo),n===null)throw Error(o(387));s=r.pendingProps;var d=r.memoizedState;u=d.element,Id(n,r),ds(r,s,null,i);var g=r.memoizedState;if(s=g.cache,ua(r,qt,s),s!==d.cache&&Ld(r,[qt],i,!0),us(),s=g.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:g.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=t0(n,r,s,i);break e}else if(s!==u){u=qn(Error(o(424)),r),rs(u),r=t0(n,r,s,i);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(kt=cr(n.firstChild),ln=r,at=!0,ci=null,yr=!0,i=Ug(r,null,s,i),r.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(ns(),s===u){r=Hr(n,r,i);break e}Kt(n,r,s,i)}r=r.child}return r;case 26:return fc(n,r),n===null?(i=cb(r.type,null,r.pendingProps,null))?r.memoizedState=i:at||(i=r.type,n=r.pendingProps,s=Oc(Te.current).createElement(i),s[ne]=r,s[le]=n,Qt(s,i,n),tt(s),r.stateNode=s):r.memoizedState=cb(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return $e(r),n===null&&at&&(s=r.stateNode=ob(r.type,r.pendingProps,Te.current),ln=r,yr=!0,u=kt,Ta(r.type)?(Jf=u,kt=cr(s.firstChild)):kt=u),Kt(n,r,r.pendingProps.children,i),fc(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&at&&((u=s=kt)&&(s=a5(s,r.type,r.pendingProps,yr),s!==null?(r.stateNode=s,ln=r,kt=cr(s.firstChild),yr=!1,u=!0):u=!1),u||ui(r)),$e(r),u=r.type,d=r.pendingProps,g=n!==null?n.memoizedProps:null,s=d.children,Xf(u,d)?s=null:g!==null&&Xf(u,g)&&(r.flags|=32),r.memoizedState!==null&&(u=Yd(n,r,Ex,null,null,i),Ns._currentValue=u),fc(n,r),Kt(n,r,s,i),r.child;case 6:return n===null&&at&&((n=i=kt)&&(i=i5(i,r.pendingProps,yr),i!==null?(r.stateNode=i,ln=r,kt=null,n=!0):n=!1),n||ui(r)),null;case 13:return n0(n,r,i);case 4:return Qe(r,r.stateNode.containerInfo),s=r.pendingProps,n===null?r.child=ao(r,null,s,i):Kt(n,r,s,i),r.child;case 11:return Xg(n,r,r.type,r.pendingProps,i);case 7:return Kt(n,r,r.pendingProps,i),r.child;case 8:return Kt(n,r,r.pendingProps.children,i),r.child;case 12:return Kt(n,r,r.pendingProps.children,i),r.child;case 10:return s=r.pendingProps,ua(r,r.type,s.value),Kt(n,r,s.children,i),r.child;case 9:return u=r.type._context,s=r.pendingProps.children,fi(r),u=en(u),s=s(u),r.flags|=1,Kt(n,r,s,i),r.child;case 14:return Kg(n,r,r.type,r.pendingProps,i);case 15:return Zg(n,r,r.type,r.pendingProps,i);case 19:return a0(n,r,i);case 31:return s=r.pendingProps,i=r.mode,s={mode:s.mode,children:s.children},n===null?(i=hc(s,i),i.ref=r.ref,r.child=i,i.return=r,r=i):(i=Lr(n.child,s),i.ref=r.ref,r.child=i,i.return=r,r=i),r;case 22:return Qg(n,r,i);case 24:return fi(r),s=en(qt),n===null?(u=Ud(),u===null&&(u=bt,d=Pd(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=i),u=d),r.memoizedState={parent:s,cache:u},Bd(r),ua(r,qt,u)):((n.lanes&i)!==0&&(Id(n,r),ds(r,null,null,i),us()),u=n.memoizedState,d=r.memoizedState,u.parent!==s?(u={parent:s,cache:s},r.memoizedState=u,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=u),ua(r,qt,s)):(s=d.cache,ua(r,qt,s),s!==u.cache&&Ld(r,[qt],i,!0))),Kt(n,r,r.pendingProps.children,i),r.child;case 29:throw r.pendingProps}throw Error(o(156,r.tag))}function qr(n){n.flags|=4}function o0(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!mb(r)){if(r=Yn.current,r!==null&&((We&4194048)===We?wr!==null:(We&62914560)!==We&&(We&536870912)===0||r!==wr))throw ls=jd,Vp;n.flags|=8192}}function mc(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Rl():536870912,n.lanes|=r,lo|=r)}function vs(n,r){if(!at)switch(n.tailMode){case"hidden":r=n.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?n.tail=null:i.sibling=null;break;case"collapsed":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:s.sibling=null}}function Tt(n){var r=n.alternate!==null&&n.alternate.child===n.child,i=0,s=0;if(r)for(var u=n.child;u!==null;)i|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=n,u=u.sibling;else for(u=n.child;u!==null;)i|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=n,u=u.sibling;return n.subtreeFlags|=s,n.childLanes=i,r}function Dx(n,r,i){var s=r.pendingProps;switch(Rd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(r),null;case 1:return Tt(r),null;case 3:return i=r.stateNode,s=null,n!==null&&(s=n.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),jr(qt),Ot(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ts(r)?qr(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,jp())),Tt(r),null;case 26:return i=r.memoizedState,n===null?(qr(r),i!==null?(Tt(r),o0(r,i)):(Tt(r),r.flags&=-16777217)):i?i!==n.memoizedState?(qr(r),Tt(r),o0(r,i)):(Tt(r),r.flags&=-16777217):(n.memoizedProps!==s&&qr(r),Tt(r),r.flags&=-16777217),null;case 27:Ct(r),i=Te.current;var u=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==s&&qr(r);else{if(!s){if(r.stateNode===null)throw Error(o(166));return Tt(r),null}n=fe.current,ts(r)?zp(r):(n=ob(u,s,i),r.stateNode=n,qr(r))}return Tt(r),null;case 5:if(Ct(r),i=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==s&&qr(r);else{if(!s){if(r.stateNode===null)throw Error(o(166));return Tt(r),null}if(n=fe.current,ts(r))zp(r);else{switch(u=Oc(Te.current),n){case 1:n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?n.multiple=!0:s.size&&(n.size=s.size);break;default:n=typeof s.is=="string"?u.createElement(i,{is:s.is}):u.createElement(i)}}n[ne]=r,n[le]=s;e:for(u=r.child;u!==null;){if(u.tag===5||u.tag===6)n.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===r)break e;for(;u.sibling===null;){if(u.return===null||u.return===r)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}r.stateNode=n;e:switch(Qt(n,i,s),i){case"button":case"input":case"select":case"textarea":n=!!s.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&qr(r)}}return Tt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==s&&qr(r);else{if(typeof s!="string"&&r.stateNode===null)throw Error(o(166));if(n=Te.current,ts(r)){if(n=r.stateNode,i=r.memoizedProps,s=null,u=ln,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}n[ne]=r,n=!!(n.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||W0(n.nodeValue,i)),n||ui(r)}else n=Oc(n).createTextNode(s),n[ne]=r,r.stateNode=n}return Tt(r),null;case 13:if(s=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(u=ts(r),s!==null&&s.dehydrated!==null){if(n===null){if(!u)throw Error(o(318));if(u=r.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[ne]=r}else ns(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Tt(r),u=!1}else u=jp(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=u),u=!0;if(!u)return r.flags&256?(Ir(r),r):(Ir(r),null)}if(Ir(r),(r.flags&128)!==0)return r.lanes=i,r;if(i=s!==null,n=n!==null&&n.memoizedState!==null,i){s=r.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var d=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(d=s.memoizedState.cachePool.pool),d!==u&&(s.flags|=2048)}return i!==n&&i&&(r.child.flags|=8192),mc(r,r.updateQueue),Tt(r),null;case 4:return Ot(),n===null&&Vf(r.stateNode.containerInfo),Tt(r),null;case 10:return jr(r.type),Tt(r),null;case 19:if(ae(Vt),u=r.memoizedState,u===null)return Tt(r),null;if(s=(r.flags&128)!==0,d=u.rendering,d===null)if(s)vs(u,!1);else{if(Rt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(d=cc(n),d!==null){for(r.flags|=128,vs(u,!1),n=d.updateQueue,r.updateQueue=n,mc(r,n),r.subtreeFlags=0,n=i,i=r.child;i!==null;)Lp(i,n),i=i.sibling;return re(Vt,Vt.current&1|2),r.child}n=n.sibling}u.tail!==null&&on()>bc&&(r.flags|=128,s=!0,vs(u,!1),r.lanes=4194304)}else{if(!s)if(n=cc(d),n!==null){if(r.flags|=128,s=!0,n=n.updateQueue,r.updateQueue=n,mc(r,n),vs(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!at)return Tt(r),null}else 2*on()-u.renderingStartTime>bc&&i!==536870912&&(r.flags|=128,s=!0,vs(u,!1),r.lanes=4194304);u.isBackwards?(d.sibling=r.child,r.child=d):(n=u.last,n!==null?n.sibling=d:r.child=d,u.last=d)}return u.tail!==null?(r=u.tail,u.rendering=r,u.tail=r.sibling,u.renderingStartTime=on(),r.sibling=null,n=Vt.current,re(Vt,s?n&1|2:n&1),r):(Tt(r),null);case 22:case 23:return Ir(r),$d(),s=r.memoizedState!==null,n!==null?n.memoizedState!==null!==s&&(r.flags|=8192):s&&(r.flags|=8192),s?(i&536870912)!==0&&(r.flags&128)===0&&(Tt(r),r.subtreeFlags&6&&(r.flags|=8192)):Tt(r),i=r.updateQueue,i!==null&&mc(r,i.retryQueue),i=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==i&&(r.flags|=2048),n!==null&&ae(hi),null;case 24:return i=null,n!==null&&(i=n.memoizedState.cache),r.memoizedState.cache!==i&&(r.flags|=2048),jr(qt),Tt(r),null;case 25:return null;case 30:return null}throw Error(o(156,r.tag))}function Mx(n,r){switch(Rd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return jr(qt),Ot(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Ct(r),null;case 13:if(Ir(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(o(340));ns()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ae(Vt),null;case 4:return Ot(),null;case 10:return jr(r.type),null;case 22:case 23:return Ir(r),$d(),n!==null&&ae(hi),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return jr(qt),null;case 25:return null;default:return null}}function s0(n,r){switch(Rd(r),r.tag){case 3:jr(qt),Ot();break;case 26:case 27:case 5:Ct(r);break;case 4:Ot();break;case 13:Ir(r);break;case 19:ae(Vt);break;case 10:jr(r.type);break;case 22:case 23:Ir(r),$d(),n!==null&&ae(hi);break;case 24:jr(qt)}}function ys(n,r){try{var i=r.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var u=s.next;i=u;do{if((i.tag&n)===n){s=void 0;var d=i.create,g=i.inst;s=d(),g.destroy=s}i=i.next}while(i!==u)}}catch(v){mt(r,r.return,v)}}function ba(n,r,i){try{var s=r.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var d=u.next;s=d;do{if((s.tag&n)===n){var g=s.inst,v=g.destroy;if(v!==void 0){g.destroy=void 0,u=r;var T=i,U=v;try{U()}catch(Z){mt(u,T,Z)}}}s=s.next}while(s!==d)}}catch(Z){mt(r,r.return,Z)}}function l0(n){var r=n.updateQueue;if(r!==null){var i=n.stateNode;try{Kp(r,i)}catch(s){mt(n,n.return,s)}}}function c0(n,r,i){i.props=pi(n.type,n.memoizedProps),i.state=n.memoizedState;try{i.componentWillUnmount()}catch(s){mt(n,r,s)}}function ws(n,r){try{var i=n.ref;if(i!==null){switch(n.tag){case 26:case 27:case 5:var s=n.stateNode;break;case 30:s=n.stateNode;break;default:s=n.stateNode}typeof i=="function"?n.refCleanup=i(s):i.current=s}}catch(u){mt(n,r,u)}}function xr(n,r){var i=n.ref,s=n.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(u){mt(n,r,u)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(u){mt(n,r,u)}else i.current=null}function u0(n){var r=n.type,i=n.memoizedProps,s=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break e;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(u){mt(n,n.return,u)}}function yf(n,r,i){try{var s=n.stateNode;Wx(s,n.type,i,r),s[le]=r}catch(u){mt(n,n.return,u)}}function d0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ta(n.type)||n.tag===4}function wf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||d0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ta(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xf(n,r,i){var s=n.tag;if(s===5||s===6)n=n.stateNode,r?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(n,r):(r=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,r.appendChild(n),i=i._reactRootContainer,i!=null||r.onclick!==null||(r.onclick=Ac));else if(s!==4&&(s===27&&Ta(n.type)&&(i=n.stateNode,r=null),n=n.child,n!==null))for(xf(n,r,i),n=n.sibling;n!==null;)xf(n,r,i),n=n.sibling}function pc(n,r,i){var s=n.tag;if(s===5||s===6)n=n.stateNode,r?i.insertBefore(n,r):i.appendChild(n);else if(s!==4&&(s===27&&Ta(n.type)&&(i=n.stateNode),n=n.child,n!==null))for(pc(n,r,i),n=n.sibling;n!==null;)pc(n,r,i),n=n.sibling}function f0(n){var r=n.stateNode,i=n.memoizedProps;try{for(var s=n.type,u=r.attributes;u.length;)r.removeAttributeNode(u[0]);Qt(r,s,i),r[ne]=n,r[le]=i}catch(d){mt(n,n.return,d)}}var Vr=!1,Mt=!1,Ef=!1,h0=typeof WeakSet=="function"?WeakSet:Set,Yt=null;function Nx(n,r){if(n=n.containerInfo,Yf=Nc,n=_p(n),yd(n)){if("selectionStart"in n)var i={start:n.selectionStart,end:n.selectionEnd};else e:{i=(i=n.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var u=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{i.nodeType,d.nodeType}catch{i=null;break e}var g=0,v=-1,T=-1,U=0,Z=0,ee=n,B=null;t:for(;;){for(var q;ee!==i||u!==0&&ee.nodeType!==3||(v=g+u),ee!==d||s!==0&&ee.nodeType!==3||(T=g+s),ee.nodeType===3&&(g+=ee.nodeValue.length),(q=ee.firstChild)!==null;)B=ee,ee=q;for(;;){if(ee===n)break t;if(B===i&&++U===u&&(v=g),B===d&&++Z===s&&(T=g),(q=ee.nextSibling)!==null)break;ee=B,B=ee.parentNode}ee=q}i=v===-1||T===-1?null:{start:v,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(Gf={focusedElem:n,selectionRange:i},Nc=!1,Yt=r;Yt!==null;)if(r=Yt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,Yt=n;else for(;Yt!==null;){switch(r=Yt,d=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,i=r,u=d.memoizedProps,d=d.memoizedState,s=i.stateNode;try{var Be=pi(i.type,u,i.elementType===i.type);n=s.getSnapshotBeforeUpdate(Be,d),s.__reactInternalSnapshotBeforeUpdate=n}catch(Le){mt(i,i.return,Le)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,i=n.nodeType,i===9)Zf(n);else if(i===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Zf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(o(163))}if(n=r.sibling,n!==null){n.return=r.return,Yt=n;break}Yt=r.return}}function m0(n,r,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:va(n,i),s&4&&ys(5,i);break;case 1:if(va(n,i),s&4)if(n=i.stateNode,r===null)try{n.componentDidMount()}catch(g){mt(i,i.return,g)}else{var u=pi(i.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(u,r,n.__reactInternalSnapshotBeforeUpdate)}catch(g){mt(i,i.return,g)}}s&64&&l0(i),s&512&&ws(i,i.return);break;case 3:if(va(n,i),s&64&&(n=i.updateQueue,n!==null)){if(r=null,i.child!==null)switch(i.child.tag){case 27:case 5:r=i.child.stateNode;break;case 1:r=i.child.stateNode}try{Kp(n,r)}catch(g){mt(i,i.return,g)}}break;case 27:r===null&&s&4&&f0(i);case 26:case 5:va(n,i),r===null&&s&4&&u0(i),s&512&&ws(i,i.return);break;case 12:va(n,i);break;case 13:va(n,i),s&4&&b0(n,i),s&64&&(n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(i=qx.bind(null,i),o5(n,i))));break;case 22:if(s=i.memoizedState!==null||Vr,!s){r=r!==null&&r.memoizedState!==null||Mt,u=Vr;var d=Mt;Vr=s,(Mt=r)&&!d?ya(n,i,(i.subtreeFlags&8772)!==0):va(n,i),Vr=u,Mt=d}break;case 30:break;default:va(n,i)}}function p0(n){var r=n.alternate;r!==null&&(n.alternate=null,p0(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&je(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Et=null,vn=!1;function $r(n,r,i){for(i=i.child;i!==null;)g0(n,r,i),i=i.sibling}function g0(n,r,i){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(pe,i)}catch{}switch(i.tag){case 26:Mt||xr(i,r),$r(n,r,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Mt||xr(i,r);var s=Et,u=vn;Ta(i.type)&&(Et=i.stateNode,vn=!1),$r(n,r,i),ks(i.stateNode),Et=s,vn=u;break;case 5:Mt||xr(i,r);case 6:if(s=Et,u=vn,Et=null,$r(n,r,i),Et=s,vn=u,Et!==null)if(vn)try{(Et.nodeType===9?Et.body:Et.nodeName==="HTML"?Et.ownerDocument.body:Et).removeChild(i.stateNode)}catch(d){mt(i,r,d)}else try{Et.removeChild(i.stateNode)}catch(d){mt(i,r,d)}break;case 18:Et!==null&&(vn?(n=Et,ab(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,i.stateNode),Us(n)):ab(Et,i.stateNode));break;case 4:s=Et,u=vn,Et=i.stateNode.containerInfo,vn=!0,$r(n,r,i),Et=s,vn=u;break;case 0:case 11:case 14:case 15:Mt||ba(2,i,r),Mt||ba(4,i,r),$r(n,r,i);break;case 1:Mt||(xr(i,r),s=i.stateNode,typeof s.componentWillUnmount=="function"&&c0(i,r,s)),$r(n,r,i);break;case 21:$r(n,r,i);break;case 22:Mt=(s=Mt)||i.memoizedState!==null,$r(n,r,i),Mt=s;break;default:$r(n,r,i)}}function b0(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Us(n)}catch(i){mt(r,r.return,i)}}function Lx(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new h0),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new h0),r;default:throw Error(o(435,n.tag))}}function Sf(n,r){var i=Lx(n);r.forEach(function(s){var u=Vx.bind(null,n,s);i.has(s)||(i.add(s),s.then(u,u))})}function An(n,r){var i=r.deletions;if(i!==null)for(var s=0;s<i.length;s++){var u=i[s],d=n,g=r,v=g;e:for(;v!==null;){switch(v.tag){case 27:if(Ta(v.type)){Et=v.stateNode,vn=!1;break e}break;case 5:Et=v.stateNode,vn=!1;break e;case 3:case 4:Et=v.stateNode.containerInfo,vn=!0;break e}v=v.return}if(Et===null)throw Error(o(160));g0(d,g,u),Et=null,vn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)v0(r,n),r=r.sibling}var lr=null;function v0(n,r){var i=n.alternate,s=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:An(r,n),On(n),s&4&&(ba(3,n,n.return),ys(3,n),ba(5,n,n.return));break;case 1:An(r,n),On(n),s&512&&(Mt||i===null||xr(i,i.return)),s&64&&Vr&&(n=n.updateQueue,n!==null&&(s=n.callbacks,s!==null&&(i=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var u=lr;if(An(r,n),On(n),s&512&&(Mt||i===null||xr(i,i.return)),s&4){var d=i!==null?i.memoizedState:null;if(s=n.memoizedState,i===null)if(s===null)if(n.stateNode===null){e:{s=n.type,i=n.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ue]||d[ne]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(s),u.head.insertBefore(d,u.querySelector("head > title"))),Qt(d,s,i),d[ne]=n,tt(d),s=d;break e;case"link":var g=fb("link","href",u).get(s+(i.href||""));if(g){for(var v=0;v<g.length;v++)if(d=g[v],d.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&d.getAttribute("rel")===(i.rel==null?null:i.rel)&&d.getAttribute("title")===(i.title==null?null:i.title)&&d.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){g.splice(v,1);break t}}d=u.createElement(s),Qt(d,s,i),u.head.appendChild(d);break;case"meta":if(g=fb("meta","content",u).get(s+(i.content||""))){for(v=0;v<g.length;v++)if(d=g[v],d.getAttribute("content")===(i.content==null?null:""+i.content)&&d.getAttribute("name")===(i.name==null?null:i.name)&&d.getAttribute("property")===(i.property==null?null:i.property)&&d.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&d.getAttribute("charset")===(i.charSet==null?null:i.charSet)){g.splice(v,1);break t}}d=u.createElement(s),Qt(d,s,i),u.head.appendChild(d);break;default:throw Error(o(468,s))}d[ne]=n,tt(d),s=d}n.stateNode=s}else hb(u,n.type,n.stateNode);else n.stateNode=db(u,s,n.memoizedProps);else d!==s?(d===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):d.count--,s===null?hb(u,n.type,n.stateNode):db(u,s,n.memoizedProps)):s===null&&n.stateNode!==null&&yf(n,n.memoizedProps,i.memoizedProps)}break;case 27:An(r,n),On(n),s&512&&(Mt||i===null||xr(i,i.return)),i!==null&&s&4&&yf(n,n.memoizedProps,i.memoizedProps);break;case 5:if(An(r,n),On(n),s&512&&(Mt||i===null||xr(i,i.return)),n.flags&32){u=n.stateNode;try{Ii(u,"")}catch(q){mt(n,n.return,q)}}s&4&&n.stateNode!=null&&(u=n.memoizedProps,yf(n,u,i!==null?i.memoizedProps:u)),s&1024&&(Ef=!0);break;case 6:if(An(r,n),On(n),s&4){if(n.stateNode===null)throw Error(o(162));s=n.memoizedProps,i=n.stateNode;try{i.nodeValue=s}catch(q){mt(n,n.return,q)}}break;case 3:if(Rc=null,u=lr,lr=Cc(r.containerInfo),An(r,n),lr=u,On(n),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Us(r.containerInfo)}catch(q){mt(n,n.return,q)}Ef&&(Ef=!1,y0(n));break;case 4:s=lr,lr=Cc(n.stateNode.containerInfo),An(r,n),On(n),lr=s;break;case 12:An(r,n),On(n);break;case 13:An(r,n),On(n),n.child.flags&8192&&n.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(kf=on()),s&4&&(s=n.updateQueue,s!==null&&(n.updateQueue=null,Sf(n,s)));break;case 22:u=n.memoizedState!==null;var T=i!==null&&i.memoizedState!==null,U=Vr,Z=Mt;if(Vr=U||u,Mt=Z||T,An(r,n),Mt=Z,Vr=U,On(n),s&8192)e:for(r=n.stateNode,r._visibility=u?r._visibility&-2:r._visibility|1,u&&(i===null||T||Vr||Mt||gi(n)),i=null,r=n;;){if(r.tag===5||r.tag===26){if(i===null){T=i=r;try{if(d=T.stateNode,u)g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{v=T.stateNode;var ee=T.memoizedProps.style,B=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;v.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(q){mt(T,T.return,q)}}}else if(r.tag===6){if(i===null){T=r;try{T.stateNode.nodeValue=u?"":T.memoizedProps}catch(q){mt(T,T.return,q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;i===r&&(i=null),r=r.return}i===r&&(i=null),r.sibling.return=r.return,r=r.sibling}s&4&&(s=n.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,Sf(n,i))));break;case 19:An(r,n),On(n),s&4&&(s=n.updateQueue,s!==null&&(n.updateQueue=null,Sf(n,s)));break;case 30:break;case 21:break;default:An(r,n),On(n)}}function On(n){var r=n.flags;if(r&2){try{for(var i,s=n.return;s!==null;){if(d0(s)){i=s;break}s=s.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var u=i.stateNode,d=wf(n);pc(n,d,u);break;case 5:var g=i.stateNode;i.flags&32&&(Ii(g,""),i.flags&=-33);var v=wf(n);pc(n,v,g);break;case 3:case 4:var T=i.stateNode.containerInfo,U=wf(n);xf(n,U,T);break;default:throw Error(o(161))}}catch(Z){mt(n,n.return,Z)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function y0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;y0(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function va(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)m0(n,r.alternate,r),r=r.sibling}function gi(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:ba(4,r,r.return),gi(r);break;case 1:xr(r,r.return);var i=r.stateNode;typeof i.componentWillUnmount=="function"&&c0(r,r.return,i),gi(r);break;case 27:ks(r.stateNode);case 26:case 5:xr(r,r.return),gi(r);break;case 22:r.memoizedState===null&&gi(r);break;case 30:gi(r);break;default:gi(r)}n=n.sibling}}function ya(n,r,i){for(i=i&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var s=r.alternate,u=n,d=r,g=d.flags;switch(d.tag){case 0:case 11:case 15:ya(u,d,i),ys(4,d);break;case 1:if(ya(u,d,i),s=d,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(U){mt(s,s.return,U)}if(s=d,u=s.updateQueue,u!==null){var v=s.stateNode;try{var T=u.shared.hiddenCallbacks;if(T!==null)for(u.shared.hiddenCallbacks=null,u=0;u<T.length;u++)Xp(T[u],v)}catch(U){mt(s,s.return,U)}}i&&g&64&&l0(d),ws(d,d.return);break;case 27:f0(d);case 26:case 5:ya(u,d,i),i&&s===null&&g&4&&u0(d),ws(d,d.return);break;case 12:ya(u,d,i);break;case 13:ya(u,d,i),i&&g&4&&b0(u,d);break;case 22:d.memoizedState===null&&ya(u,d,i),ws(d,d.return);break;case 30:break;default:ya(u,d,i)}r=r.sibling}}function _f(n,r){var i=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==i&&(n!=null&&n.refCount++,i!=null&&is(i))}function Tf(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&is(n))}function Er(n,r,i,s){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)w0(n,r,i,s),r=r.sibling}function w0(n,r,i,s){var u=r.flags;switch(r.tag){case 0:case 11:case 15:Er(n,r,i,s),u&2048&&ys(9,r);break;case 1:Er(n,r,i,s);break;case 3:Er(n,r,i,s),u&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&is(n)));break;case 12:if(u&2048){Er(n,r,i,s),n=r.stateNode;try{var d=r.memoizedProps,g=d.id,v=d.onPostCommit;typeof v=="function"&&v(g,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(T){mt(r,r.return,T)}}else Er(n,r,i,s);break;case 13:Er(n,r,i,s);break;case 23:break;case 22:d=r.stateNode,g=r.alternate,r.memoizedState!==null?d._visibility&2?Er(n,r,i,s):xs(n,r):d._visibility&2?Er(n,r,i,s):(d._visibility|=2,io(n,r,i,s,(r.subtreeFlags&10256)!==0)),u&2048&&_f(g,r);break;case 24:Er(n,r,i,s),u&2048&&Tf(r.alternate,r);break;default:Er(n,r,i,s)}}function io(n,r,i,s,u){for(u=u&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=n,g=r,v=i,T=s,U=g.flags;switch(g.tag){case 0:case 11:case 15:io(d,g,v,T,u),ys(8,g);break;case 23:break;case 22:var Z=g.stateNode;g.memoizedState!==null?Z._visibility&2?io(d,g,v,T,u):xs(d,g):(Z._visibility|=2,io(d,g,v,T,u)),u&&U&2048&&_f(g.alternate,g);break;case 24:io(d,g,v,T,u),u&&U&2048&&Tf(g.alternate,g);break;default:io(d,g,v,T,u)}r=r.sibling}}function xs(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var i=n,s=r,u=s.flags;switch(s.tag){case 22:xs(i,s),u&2048&&_f(s.alternate,s);break;case 24:xs(i,s),u&2048&&Tf(s.alternate,s);break;default:xs(i,s)}r=r.sibling}}var Es=8192;function oo(n){if(n.subtreeFlags&Es)for(n=n.child;n!==null;)x0(n),n=n.sibling}function x0(n){switch(n.tag){case 26:oo(n),n.flags&Es&&n.memoizedState!==null&&y5(lr,n.memoizedState,n.memoizedProps);break;case 5:oo(n);break;case 3:case 4:var r=lr;lr=Cc(n.stateNode.containerInfo),oo(n),lr=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Es,Es=16777216,oo(n),Es=r):oo(n));break;default:oo(n)}}function E0(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Ss(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];Yt=s,_0(s,n)}E0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)S0(n),n=n.sibling}function S0(n){switch(n.tag){case 0:case 11:case 15:Ss(n),n.flags&2048&&ba(9,n,n.return);break;case 3:Ss(n);break;case 12:Ss(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,gc(n)):Ss(n);break;default:Ss(n)}}function gc(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];Yt=s,_0(s,n)}E0(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:ba(8,r,r.return),gc(r);break;case 22:i=r.stateNode,i._visibility&2&&(i._visibility&=-3,gc(r));break;default:gc(r)}n=n.sibling}}function _0(n,r){for(;Yt!==null;){var i=Yt;switch(i.tag){case 0:case 11:case 15:ba(8,i,r);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:is(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,Yt=s;else e:for(i=n;Yt!==null;){s=Yt;var u=s.sibling,d=s.return;if(p0(s),s===i){Yt=null;break e}if(u!==null){u.return=d,Yt=u;break e}Yt=d}}}var Px={getCacheForType:function(n){var r=en(qt),i=r.data.get(n);return i===void 0&&(i=n(),r.data.set(n,i)),i}},zx=typeof WeakMap=="function"?WeakMap:Map,st=0,bt=null,Ke=null,We=0,lt=0,Cn=null,wa=!1,so=!1,Af=!1,Fr=0,Rt=0,xa=0,bi=0,Of=0,Gn=0,lo=0,_s=null,yn=null,Cf=!1,kf=0,bc=1/0,vc=null,Ea=null,Zt=0,Sa=null,co=null,uo=0,Rf=0,Df=null,T0=null,Ts=0,Mf=null;function kn(){if((st&2)!==0&&We!==0)return We&-We;if(_.T!==null){var n=Qi;return n!==0?n:Bf()}return C()}function A0(){Gn===0&&(Gn=(We&536870912)===0||at?Ui():536870912);var n=Yn.current;return n!==null&&(n.flags|=32),Gn}function Rn(n,r,i){(n===bt&&(lt===2||lt===9)||n.cancelPendingCommit!==null)&&(fo(n,0),_a(n,We,Gn,!1)),Wa(n,i),((st&2)===0||n!==bt)&&(n===bt&&((st&2)===0&&(bi|=i),Rt===4&&_a(n,We,Gn,!1)),Sr(n))}function O0(n,r,i){if((st&6)!==0)throw Error(o(327));var s=!i&&(r&124)===0&&(r&n.expiredLanes)===0||jn(n,r),u=s?Bx(n,r):Pf(n,r,!0),d=s;do{if(u===0){so&&!s&&_a(n,r,0,!1);break}else{if(i=n.current.alternate,d&&!Ux(i)){u=Pf(n,r,!1),d=!1;continue}if(u===2){if(d=r,n.errorRecoveryDisabledLanes&d)var g=0;else g=n.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){r=g;e:{var v=n;u=_s;var T=v.current.memoizedState.isDehydrated;if(T&&(fo(v,g).flags|=256),g=Pf(v,g,!1),g!==2){if(Af&&!T){v.errorRecoveryDisabledLanes|=d,bi|=d,u=4;break e}d=yn,yn=u,d!==null&&(yn===null?yn=d:yn.push.apply(yn,d))}u=g}if(d=!1,u!==2)continue}}if(u===1){fo(n,0),_a(n,r,0,!0);break}e:{switch(s=n,d=u,d){case 0:case 1:throw Error(o(345));case 4:if((r&4194048)!==r)break;case 6:_a(s,r,Gn,!wa);break e;case 2:yn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((r&62914560)===r&&(u=kf+300-on(),10<u)){if(_a(s,r,Gn,!wa),vr(s,0,!0)!==0)break e;s.timeoutHandle=nb(C0.bind(null,s,i,yn,vc,Cf,r,Gn,bi,lo,wa,d,2,-0,0),u);break e}C0(s,i,yn,vc,Cf,r,Gn,bi,lo,wa,d,0,-0,0)}}break}while(!0);Sr(n)}function C0(n,r,i,s,u,d,g,v,T,U,Z,ee,B,q){if(n.timeoutHandle=-1,ee=r.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(Ms={stylesheets:null,count:0,unsuspend:v5},x0(r),ee=w5(),ee!==null)){n.cancelPendingCommit=ee(P0.bind(null,n,r,d,i,s,u,g,v,T,Z,1,B,q)),_a(n,d,g,!U);return}P0(n,r,d,i,s,u,g,v,T)}function Ux(n){for(var r=n;;){var i=r.tag;if((i===0||i===11||i===15)&&r.flags&16384&&(i=r.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var u=i[s],d=u.getSnapshot;u=u.value;try{if(!_n(d(),u))return!1}catch{return!1}}if(i=r.child,r.subtreeFlags&16384&&i!==null)i.return=r,r=i;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _a(n,r,i,s){r&=~Of,r&=~bi,n.suspendedLanes|=r,n.pingedLanes&=~r,s&&(n.warmLanes|=r),s=n.expirationTimes;for(var u=r;0<u;){var d=31-ot(u),g=1<<d;s[d]=-1,u&=~g}i!==0&&ei(n,i,r)}function yc(){return(st&6)===0?(As(0),!1):!0}function Nf(){if(Ke!==null){if(lt===0)var n=Ke.return;else n=Ke,Ur=di=null,Kd(n),ro=null,gs=0,n=Ke;for(;n!==null;)s0(n.alternate,n),n=n.return;Ke=null}}function fo(n,r){var i=n.timeoutHandle;i!==-1&&(n.timeoutHandle=-1,t5(i)),i=n.cancelPendingCommit,i!==null&&(n.cancelPendingCommit=null,i()),Nf(),bt=n,Ke=i=Lr(n.current,null),We=r,lt=0,Cn=null,wa=!1,so=jn(n,r),Af=!1,lo=Gn=Of=bi=xa=Rt=0,yn=_s=null,Cf=!1,(r&8)!==0&&(r|=r&32);var s=n.entangledLanes;if(s!==0)for(n=n.entanglements,s&=r;0<s;){var u=31-ot(s),d=1<<u;r|=n[u],s&=~d}return Fr=r,Hl(),i}function k0(n,r){Ve=null,_.H=oc,r===ss||r===Zl?(r=Yp(),lt=3):r===Vp?(r=Yp(),lt=4):lt=r===Gg?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Cn=r,Ke===null&&(Rt=1,dc(n,qn(r,n.current)))}function R0(){var n=_.H;return _.H=oc,n===null?oc:n}function D0(){var n=_.A;return _.A=Px,n}function Lf(){Rt=4,wa||(We&4194048)!==We&&Yn.current!==null||(so=!0),(xa&134217727)===0&&(bi&134217727)===0||bt===null||_a(bt,We,Gn,!1)}function Pf(n,r,i){var s=st;st|=2;var u=R0(),d=D0();(bt!==n||We!==r)&&(vc=null,fo(n,r)),r=!1;var g=Rt;e:do try{if(lt!==0&&Ke!==null){var v=Ke,T=Cn;switch(lt){case 8:Nf(),g=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(r=!0);var U=lt;if(lt=0,Cn=null,ho(n,v,T,U),i&&so){g=0;break e}break;default:U=lt,lt=0,Cn=null,ho(n,v,T,U)}}jx(),g=Rt;break}catch(Z){k0(n,Z)}while(!0);return r&&n.shellSuspendCounter++,Ur=di=null,st=s,_.H=u,_.A=d,Ke===null&&(bt=null,We=0,Hl()),g}function jx(){for(;Ke!==null;)M0(Ke)}function Bx(n,r){var i=st;st|=2;var s=R0(),u=D0();bt!==n||We!==r?(vc=null,bc=on()+500,fo(n,r)):so=jn(n,r);e:do try{if(lt!==0&&Ke!==null){r=Ke;var d=Cn;t:switch(lt){case 1:lt=0,Cn=null,ho(n,r,d,1);break;case 2:case 9:if($p(d)){lt=0,Cn=null,N0(r);break}r=function(){lt!==2&&lt!==9||bt!==n||(lt=7),Sr(n)},d.then(r,r);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:$p(d)?(lt=0,Cn=null,N0(r)):(lt=0,Cn=null,ho(n,r,d,7));break;case 5:var g=null;switch(Ke.tag){case 26:g=Ke.memoizedState;case 5:case 27:var v=Ke;if(!g||mb(g)){lt=0,Cn=null;var T=v.sibling;if(T!==null)Ke=T;else{var U=v.return;U!==null?(Ke=U,wc(U)):Ke=null}break t}}lt=0,Cn=null,ho(n,r,d,5);break;case 6:lt=0,Cn=null,ho(n,r,d,6);break;case 8:Nf(),Rt=6;break e;default:throw Error(o(462))}}Ix();break}catch(Z){k0(n,Z)}while(!0);return Ur=di=null,_.H=s,_.A=u,st=i,Ke!==null?0:(bt=null,We=0,Hl(),Rt)}function Ix(){for(;Ke!==null&&!Pi();)M0(Ke)}function M0(n){var r=i0(n.alternate,n,Fr);n.memoizedProps=n.pendingProps,r===null?wc(n):Ke=r}function N0(n){var r=n,i=r.alternate;switch(r.tag){case 15:case 0:r=Wg(i,r,r.pendingProps,r.type,void 0,We);break;case 11:r=Wg(i,r,r.pendingProps,r.type.render,r.ref,We);break;case 5:Kd(r);default:s0(i,r),r=Ke=Lp(r,Fr),r=i0(i,r,Fr)}n.memoizedProps=n.pendingProps,r===null?wc(n):Ke=r}function ho(n,r,i,s){Ur=di=null,Kd(r),ro=null,gs=0;var u=r.return;try{if(kx(n,u,r,i,We)){Rt=1,dc(n,qn(i,n.current)),Ke=null;return}}catch(d){if(u!==null)throw Ke=u,d;Rt=1,dc(n,qn(i,n.current)),Ke=null;return}r.flags&32768?(at||s===1?n=!0:so||(We&536870912)!==0?n=!1:(wa=n=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),L0(r,n)):wc(r)}function wc(n){var r=n;do{if((r.flags&32768)!==0){L0(r,wa);return}n=r.return;var i=Dx(r.alternate,r,Fr);if(i!==null){Ke=i;return}if(r=r.sibling,r!==null){Ke=r;return}Ke=r=n}while(r!==null);Rt===0&&(Rt=5)}function L0(n,r){do{var i=Mx(n.alternate,n);if(i!==null){i.flags&=32767,Ke=i;return}if(i=n.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!r&&(n=n.sibling,n!==null)){Ke=n;return}Ke=n=i}while(n!==null);Rt=6,Ke=null}function P0(n,r,i,s,u,d,g,v,T){n.cancelPendingCommit=null;do xc();while(Zt!==0);if((st&6)!==0)throw Error(o(327));if(r!==null){if(r===n.current)throw Error(o(177));if(d=r.lanes|r.childLanes,d|=_d,Dl(n,i,d,g,v,T),n===bt&&(Ke=bt=null,We=0),co=r,Sa=n,uo=i,Rf=d,Df=u,T0=s,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,$x(j,function(){return I0(),null})):(n.callbackNode=null,n.callbackPriority=0),s=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||s){s=_.T,_.T=null,u=H.p,H.p=2,g=st,st|=4;try{Nx(n,r,i)}finally{st=g,H.p=u,_.T=s}}Zt=1,z0(),U0(),j0()}}function z0(){if(Zt===1){Zt=0;var n=Sa,r=co,i=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||i){i=_.T,_.T=null;var s=H.p;H.p=2;var u=st;st|=4;try{v0(r,n);var d=Gf,g=_p(n.containerInfo),v=d.focusedElem,T=d.selectionRange;if(g!==v&&v&&v.ownerDocument&&Sp(v.ownerDocument.documentElement,v)){if(T!==null&&yd(v)){var U=T.start,Z=T.end;if(Z===void 0&&(Z=U),"selectionStart"in v)v.selectionStart=U,v.selectionEnd=Math.min(Z,v.value.length);else{var ee=v.ownerDocument||document,B=ee&&ee.defaultView||window;if(B.getSelection){var q=B.getSelection(),Be=v.textContent.length,Le=Math.min(T.start,Be),ft=T.end===void 0?Le:Math.min(T.end,Be);!q.extend&&Le>ft&&(g=ft,ft=Le,Le=g);var M=Ep(v,Le),k=Ep(v,ft);if(M&&k&&(q.rangeCount!==1||q.anchorNode!==M.node||q.anchorOffset!==M.offset||q.focusNode!==k.node||q.focusOffset!==k.offset)){var P=ee.createRange();P.setStart(M.node,M.offset),q.removeAllRanges(),Le>ft?(q.addRange(P),q.extend(k.node,k.offset)):(P.setEnd(k.node,k.offset),q.addRange(P))}}}}for(ee=[],q=v;q=q.parentNode;)q.nodeType===1&&ee.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<ee.length;v++){var W=ee[v];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Nc=!!Yf,Gf=Yf=null}finally{st=u,H.p=s,_.T=i}}n.current=r,Zt=2}}function U0(){if(Zt===2){Zt=0;var n=Sa,r=co,i=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||i){i=_.T,_.T=null;var s=H.p;H.p=2;var u=st;st|=4;try{m0(n,r.alternate,r)}finally{st=u,H.p=s,_.T=i}}Zt=3}}function j0(){if(Zt===4||Zt===3){Zt=0,Ho();var n=Sa,r=co,i=uo,s=T0;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Zt=5:(Zt=0,co=Sa=null,B0(n,n.pendingLanes));var u=n.pendingLanes;if(u===0&&(Ea=null),Vo(i),r=r.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(pe,r,void 0,(r.current.flags&128)===128)}catch{}if(s!==null){r=_.T,u=H.p,H.p=2,_.T=null;try{for(var d=n.onRecoverableError,g=0;g<s.length;g++){var v=s[g];d(v.value,{componentStack:v.stack})}}finally{_.T=r,H.p=u}}(uo&3)!==0&&xc(),Sr(n),u=n.pendingLanes,(i&4194090)!==0&&(u&42)!==0?n===Mf?Ts++:(Ts=0,Mf=n):Ts=0,As(0)}}function B0(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,is(r)))}function xc(n){return z0(),U0(),j0(),I0()}function I0(){if(Zt!==5)return!1;var n=Sa,r=Rf;Rf=0;var i=Vo(uo),s=_.T,u=H.p;try{H.p=32>i?32:i,_.T=null,i=Df,Df=null;var d=Sa,g=uo;if(Zt=0,co=Sa=null,uo=0,(st&6)!==0)throw Error(o(331));var v=st;if(st|=4,S0(d.current),w0(d,d.current,g,i),st=v,As(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(pe,d)}catch{}return!0}finally{H.p=u,_.T=s,B0(n,r)}}function H0(n,r,i){r=qn(i,r),r=uf(n.stateNode,r,2),n=ha(n,r,2),n!==null&&(Wa(n,2),Sr(n))}function mt(n,r,i){if(n.tag===3)H0(n,n,i);else for(;r!==null;){if(r.tag===3){H0(r,n,i);break}else if(r.tag===1){var s=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ea===null||!Ea.has(s))){n=qn(i,n),i=Fg(2),s=ha(r,i,2),s!==null&&(Yg(i,s,r,n),Wa(s,2),Sr(s));break}}r=r.return}}function zf(n,r,i){var s=n.pingCache;if(s===null){s=n.pingCache=new zx;var u=new Set;s.set(r,u)}else u=s.get(r),u===void 0&&(u=new Set,s.set(r,u));u.has(i)||(Af=!0,u.add(i),n=Hx.bind(null,n,r,i),r.then(n,n))}function Hx(n,r,i){var s=n.pingCache;s!==null&&s.delete(r),n.pingedLanes|=n.suspendedLanes&i,n.warmLanes&=~i,bt===n&&(We&i)===i&&(Rt===4||Rt===3&&(We&62914560)===We&&300>on()-kf?(st&2)===0&&fo(n,0):Of|=i,lo===We&&(lo=0)),Sr(n)}function q0(n,r){r===0&&(r=Rl()),n=Gi(n,r),n!==null&&(Wa(n,r),Sr(n))}function qx(n){var r=n.memoizedState,i=0;r!==null&&(i=r.retryLane),q0(n,i)}function Vx(n,r){var i=0;switch(n.tag){case 13:var s=n.stateNode,u=n.memoizedState;u!==null&&(i=u.retryLane);break;case 19:s=n.stateNode;break;case 22:s=n.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(r),q0(n,i)}function $x(n,r){return Un(n,r)}var Ec=null,mo=null,Uf=!1,Sc=!1,jf=!1,vi=0;function Sr(n){n!==mo&&n.next===null&&(mo===null?Ec=mo=n:mo=mo.next=n),Sc=!0,Uf||(Uf=!0,Yx())}function As(n,r){if(!jf&&Sc){jf=!0;do for(var i=!1,s=Ec;s!==null;){if(n!==0){var u=s.pendingLanes;if(u===0)var d=0;else{var g=s.suspendedLanes,v=s.pingedLanes;d=(1<<31-ot(42|n)+1)-1,d&=u&~(g&~v),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(i=!0,Y0(s,d))}else d=We,d=vr(s,s===bt?d:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(d&3)===0||jn(s,d)||(i=!0,Y0(s,d));s=s.next}while(i);jf=!1}}function Fx(){V0()}function V0(){Sc=Uf=!1;var n=0;vi!==0&&(e5()&&(n=vi),vi=0);for(var r=on(),i=null,s=Ec;s!==null;){var u=s.next,d=$0(s,r);d===0?(s.next=null,i===null?Ec=u:i.next=u,u===null&&(mo=i)):(i=s,(n!==0||(d&3)!==0)&&(Sc=!0)),s=u}As(n)}function $0(n,r){for(var i=n.suspendedLanes,s=n.pingedLanes,u=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var g=31-ot(d),v=1<<g,T=u[g];T===-1?((v&i)===0||(v&s)!==0)&&(u[g]=Ja(v,r)):T<=r&&(n.expiredLanes|=v),d&=~v}if(r=bt,i=We,i=vr(n,n===r?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),s=n.callbackNode,i===0||n===r&&(lt===2||lt===9)||n.cancelPendingCommit!==null)return s!==null&&s!==null&&hn(s),n.callbackNode=null,n.callbackPriority=0;if((i&3)===0||jn(n,i)){if(r=i&-i,r===n.callbackPriority)return r;switch(s!==null&&hn(s),Vo(i)){case 2:case 8:i=O;break;case 32:i=j;break;case 268435456:i=he;break;default:i=j}return s=F0.bind(null,n),i=Un(i,s),n.callbackPriority=r,n.callbackNode=i,r}return s!==null&&s!==null&&hn(s),n.callbackPriority=2,n.callbackNode=null,2}function F0(n,r){if(Zt!==0&&Zt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var i=n.callbackNode;if(xc()&&n.callbackNode!==i)return null;var s=We;return s=vr(n,n===bt?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),s===0?null:(O0(n,s,r),$0(n,on()),n.callbackNode!=null&&n.callbackNode===i?F0.bind(null,n):null)}function Y0(n,r){if(xc())return null;O0(n,r,!0)}function Yx(){n5(function(){(st&6)!==0?Un(Qa,Fx):V0()})}function Bf(){return vi===0&&(vi=Ui()),vi}function G0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ll(""+n)}function X0(n,r){var i=r.ownerDocument.createElement("input");return i.name=r.name,i.value=r.value,n.id&&i.setAttribute("form",n.id),r.parentNode.insertBefore(i,r),n=new FormData(n),i.parentNode.removeChild(i),n}function Gx(n,r,i,s,u){if(r==="submit"&&i&&i.stateNode===u){var d=G0((u[le]||null).action),g=s.submitter;g&&(r=(r=g[le]||null)?G0(r.formAction):g.getAttribute("formAction"),r!==null&&(d=r,g=null));var v=new jl("action","action",null,s,u);n.push({event:v,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(vi!==0){var T=g?X0(u,g):new FormData(u);af(i,{pending:!0,data:T,method:u.method,action:d},null,T)}}else typeof d=="function"&&(v.preventDefault(),T=g?X0(u,g):new FormData(u),af(i,{pending:!0,data:T,method:u.method,action:d},d,T))},currentTarget:u}]})}}for(var If=0;If<Sd.length;If++){var Hf=Sd[If],Xx=Hf.toLowerCase(),Kx=Hf[0].toUpperCase()+Hf.slice(1);sr(Xx,"on"+Kx)}sr(Op,"onAnimationEnd"),sr(Cp,"onAnimationIteration"),sr(kp,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(fx,"onTransitionRun"),sr(hx,"onTransitionStart"),sr(mx,"onTransitionCancel"),sr(Rp,"onTransitionEnd"),Bn("onMouseEnter",["mouseout","mouseover"]),Bn("onMouseLeave",["mouseout","mouseover"]),Bn("onPointerEnter",["pointerout","pointerover"]),Bn("onPointerLeave",["pointerout","pointerover"]),sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Os));function K0(n,r){r=(r&4)!==0;for(var i=0;i<n.length;i++){var s=n[i],u=s.event;s=s.listeners;e:{var d=void 0;if(r)for(var g=s.length-1;0<=g;g--){var v=s[g],T=v.instance,U=v.currentTarget;if(v=v.listener,T!==d&&u.isPropagationStopped())break e;d=v,u.currentTarget=U;try{d(u)}catch(Z){uc(Z)}u.currentTarget=null,d=T}else for(g=0;g<s.length;g++){if(v=s[g],T=v.instance,U=v.currentTarget,v=v.listener,T!==d&&u.isPropagationStopped())break e;d=v,u.currentTarget=U;try{d(u)}catch(Z){uc(Z)}u.currentTarget=null,d=T}}}}function Ze(n,r){var i=r[Ne];i===void 0&&(i=r[Ne]=new Set);var s=n+"__bubble";i.has(s)||(Z0(r,n,2,!1),i.add(s))}function qf(n,r,i){var s=0;r&&(s|=4),Z0(i,n,s,r)}var _c="_reactListening"+Math.random().toString(36).slice(2);function Vf(n){if(!n[_c]){n[_c]=!0,Je.forEach(function(i){i!=="selectionchange"&&(Zx.has(i)||qf(i,!1,n),qf(i,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[_c]||(r[_c]=!0,qf("selectionchange",!1,r))}}function Z0(n,r,i,s){switch(wb(r)){case 2:var u=S5;break;case 8:u=_5;break;default:u=rh}i=u.bind(null,r,i,n),u=void 0,!ud||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),s?u!==void 0?n.addEventListener(r,i,{capture:!0,passive:u}):n.addEventListener(r,i,!0):u!==void 0?n.addEventListener(r,i,{passive:u}):n.addEventListener(r,i,!1)}function $f(n,r,i,s,u){var d=s;if((r&1)===0&&(r&2)===0&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var v=s.stateNode.containerInfo;if(v===u)break;if(g===4)for(g=s.return;g!==null;){var T=g.tag;if((T===3||T===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;v!==null;){if(g=Ie(v),g===null)return;if(T=g.tag,T===5||T===6||T===26||T===27){s=d=g;continue e}v=v.parentNode}}s=s.return}rp(function(){var U=d,Z=ld(i),ee=[];e:{var B=Dp.get(n);if(B!==void 0){var q=jl,Be=n;switch(n){case"keypress":if(zl(i)===0)break e;case"keydown":case"keyup":q=$w;break;case"focusin":Be="focus",q=md;break;case"focusout":Be="blur",q=md;break;case"beforeblur":case"afterblur":q=md;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Mw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Gw;break;case Op:case Cp:case kp:q=Pw;break;case Rp:q=Kw;break;case"scroll":case"scrollend":q=Rw;break;case"wheel":q=Qw;break;case"copy":case"cut":case"paste":q=Uw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=lp;break;case"toggle":case"beforetoggle":q=Ww}var Le=(r&4)!==0,ft=!Le&&(n==="scroll"||n==="scrollend"),M=Le?B!==null?B+"Capture":null:B;Le=[];for(var k=U,P;k!==null;){var W=k;if(P=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||P===null||M===null||(W=Yo(k,M),W!=null&&Le.push(Cs(k,W,P))),ft)break;k=k.return}0<Le.length&&(B=new q(B,Be,null,i,Z),ee.push({event:B,listeners:Le}))}}if((r&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",q=n==="mouseout"||n==="pointerout",B&&i!==sd&&(Be=i.relatedTarget||i.fromElement)&&(Ie(Be)||Be[xe]))break e;if((q||B)&&(B=Z.window===Z?Z:(B=Z.ownerDocument)?B.defaultView||B.parentWindow:window,q?(Be=i.relatedTarget||i.toElement,q=U,Be=Be?Ie(Be):null,Be!==null&&(ft=c(Be),Le=Be.tag,Be!==ft||Le!==5&&Le!==27&&Le!==6)&&(Be=null)):(q=null,Be=U),q!==Be)){if(Le=op,W="onMouseLeave",M="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(Le=lp,W="onPointerLeave",M="onPointerEnter",k="pointer"),ft=q==null?B:yt(q),P=Be==null?B:yt(Be),B=new Le(W,k+"leave",q,i,Z),B.target=ft,B.relatedTarget=P,W=null,Ie(Z)===U&&(Le=new Le(M,k+"enter",Be,i,Z),Le.target=P,Le.relatedTarget=ft,W=Le),ft=W,q&&Be)t:{for(Le=q,M=Be,k=0,P=Le;P;P=po(P))k++;for(P=0,W=M;W;W=po(W))P++;for(;0<k-P;)Le=po(Le),k--;for(;0<P-k;)M=po(M),P--;for(;k--;){if(Le===M||M!==null&&Le===M.alternate)break t;Le=po(Le),M=po(M)}Le=null}else Le=null;q!==null&&Q0(ee,B,q,Le,!1),Be!==null&&ft!==null&&Q0(ee,ft,Be,Le,!0)}}e:{if(B=U?yt(U):window,q=B.nodeName&&B.nodeName.toLowerCase(),q==="select"||q==="input"&&B.type==="file")var ve=gp;else if(mp(B))if(bp)ve=cx;else{ve=sx;var Ge=ox}else q=B.nodeName,!q||q.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?U&&od(U.elementType)&&(ve=gp):ve=lx;if(ve&&(ve=ve(n,U))){pp(ee,ve,i,Z);break e}Ge&&Ge(n,B,U),n==="focusout"&&U&&B.type==="number"&&U.memoizedProps.value!=null&&id(B,"number",B.value)}switch(Ge=U?yt(U):window,n){case"focusin":(mp(Ge)||Ge.contentEditable==="true")&&($i=Ge,wd=U,es=null);break;case"focusout":es=wd=$i=null;break;case"mousedown":xd=!0;break;case"contextmenu":case"mouseup":case"dragend":xd=!1,Tp(ee,i,Z);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":Tp(ee,i,Z)}var Ae;if(gd)e:{switch(n){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else Vi?fp(n,i)&&(Pe="onCompositionEnd"):n==="keydown"&&i.keyCode===229&&(Pe="onCompositionStart");Pe&&(cp&&i.locale!=="ko"&&(Vi||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&Vi&&(Ae=ap()):(ca=Z,dd="value"in ca?ca.value:ca.textContent,Vi=!0)),Ge=Tc(U,Pe),0<Ge.length&&(Pe=new sp(Pe,n,null,i,Z),ee.push({event:Pe,listeners:Ge}),Ae?Pe.data=Ae:(Ae=hp(i),Ae!==null&&(Pe.data=Ae)))),(Ae=tx?nx(n,i):rx(n,i))&&(Pe=Tc(U,"onBeforeInput"),0<Pe.length&&(Ge=new sp("onBeforeInput","beforeinput",null,i,Z),ee.push({event:Ge,listeners:Pe}),Ge.data=Ae)),Gx(ee,n,U,i,Z)}K0(ee,r)})}function Cs(n,r,i){return{instance:n,listener:r,currentTarget:i}}function Tc(n,r){for(var i=r+"Capture",s=[];n!==null;){var u=n,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Yo(n,i),u!=null&&s.unshift(Cs(n,u,d)),u=Yo(n,r),u!=null&&s.push(Cs(n,u,d))),n.tag===3)return s;n=n.return}return[]}function po(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Q0(n,r,i,s,u){for(var d=r._reactName,g=[];i!==null&&i!==s;){var v=i,T=v.alternate,U=v.stateNode;if(v=v.tag,T!==null&&T===s)break;v!==5&&v!==26&&v!==27||U===null||(T=U,u?(U=Yo(i,d),U!=null&&g.unshift(Cs(i,U,T))):u||(U=Yo(i,d),U!=null&&g.push(Cs(i,U,T)))),i=i.return}g.length!==0&&n.push({event:r,listeners:g})}var Qx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function J0(n){return(typeof n=="string"?n:""+n).replace(Qx,`
`).replace(Jx,"")}function W0(n,r){return r=J0(r),J0(n)===r}function Ac(){}function dt(n,r,i,s,u,d){switch(i){case"children":typeof s=="string"?r==="body"||r==="textarea"&&s===""||Ii(n,s):(typeof s=="number"||typeof s=="bigint")&&r!=="body"&&Ii(n,""+s);break;case"className":Mr(n,"class",s);break;case"tabIndex":Mr(n,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Mr(n,i,s);break;case"style":tp(n,s,d);break;case"data":if(r!=="object"){Mr(n,"data",s);break}case"src":case"href":if(s===""&&(r!=="a"||i!=="href")){n.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){n.removeAttribute(i);break}s=Ll(""+s),n.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){n.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(i==="formAction"?(r!=="input"&&dt(n,r,"name",u.name,u,null),dt(n,r,"formEncType",u.formEncType,u,null),dt(n,r,"formMethod",u.formMethod,u,null),dt(n,r,"formTarget",u.formTarget,u,null)):(dt(n,r,"encType",u.encType,u,null),dt(n,r,"method",u.method,u,null),dt(n,r,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){n.removeAttribute(i);break}s=Ll(""+s),n.setAttribute(i,s);break;case"onClick":s!=null&&(n.onclick=Ac);break;case"onScroll":s!=null&&Ze("scroll",n);break;case"onScrollEnd":s!=null&&Ze("scrollend",n);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(i=s.__html,i!=null){if(u.children!=null)throw Error(o(60));n.innerHTML=i}}break;case"multiple":n.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":n.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){n.removeAttribute("xlink:href");break}i=Ll(""+s),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?n.setAttribute(i,""+s):n.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?n.setAttribute(i,""):n.removeAttribute(i);break;case"capture":case"download":s===!0?n.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?n.setAttribute(i,s):n.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?n.setAttribute(i,s):n.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?n.removeAttribute(i):n.setAttribute(i,s);break;case"popover":Ze("beforetoggle",n),Ze("toggle",n),In(n,"popover",s);break;case"xlinkActuate":Ye(n,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ye(n,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ye(n,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ye(n,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ye(n,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ye(n,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ye(n,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ye(n,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ye(n,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":In(n,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Cw.get(i)||i,In(n,i,s))}}function Ff(n,r,i,s,u,d){switch(i){case"style":tp(n,s,d);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(i=s.__html,i!=null){if(u.children!=null)throw Error(o(60));n.innerHTML=i}}break;case"children":typeof s=="string"?Ii(n,s):(typeof s=="number"||typeof s=="bigint")&&Ii(n,""+s);break;case"onScroll":s!=null&&Ze("scroll",n);break;case"onScrollEnd":s!=null&&Ze("scrollend",n);break;case"onClick":s!=null&&(n.onclick=Ac);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ia.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(u=i.endsWith("Capture"),r=i.slice(2,u?i.length-7:void 0),d=n[le]||null,d=d!=null?d[i]:null,typeof d=="function"&&n.removeEventListener(r,d,u),typeof s=="function")){typeof d!="function"&&d!==null&&(i in n?n[i]=null:n.hasAttribute(i)&&n.removeAttribute(i)),n.addEventListener(r,s,u);break e}i in n?n[i]=s:s===!0?n.setAttribute(i,""):In(n,i,s)}}}function Qt(n,r,i){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ze("error",n),Ze("load",n);var s=!1,u=!1,d;for(d in i)if(i.hasOwnProperty(d)){var g=i[d];if(g!=null)switch(d){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,r));default:dt(n,r,d,g,i,null)}}u&&dt(n,r,"srcSet",i.srcSet,i,null),s&&dt(n,r,"src",i.src,i,null);return;case"input":Ze("invalid",n);var v=d=g=u=null,T=null,U=null;for(s in i)if(i.hasOwnProperty(s)){var Z=i[s];if(Z!=null)switch(s){case"name":u=Z;break;case"type":g=Z;break;case"checked":T=Z;break;case"defaultChecked":U=Z;break;case"value":d=Z;break;case"defaultValue":v=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(o(137,r));break;default:dt(n,r,s,Z,i,null)}}Qm(n,d,v,T,U,g,u,!1),Ml(n);return;case"select":Ze("invalid",n),s=g=d=null;for(u in i)if(i.hasOwnProperty(u)&&(v=i[u],v!=null))switch(u){case"value":d=v;break;case"defaultValue":g=v;break;case"multiple":s=v;default:dt(n,r,u,v,i,null)}r=d,i=g,n.multiple=!!s,r!=null?Bi(n,!!s,r,!1):i!=null&&Bi(n,!!s,i,!0);return;case"textarea":Ze("invalid",n),d=u=s=null;for(g in i)if(i.hasOwnProperty(g)&&(v=i[g],v!=null))switch(g){case"value":s=v;break;case"defaultValue":u=v;break;case"children":d=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:dt(n,r,g,v,i,null)}Wm(n,s,u,d),Ml(n);return;case"option":for(T in i)if(i.hasOwnProperty(T)&&(s=i[T],s!=null))switch(T){case"selected":n.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:dt(n,r,T,s,i,null)}return;case"dialog":Ze("beforetoggle",n),Ze("toggle",n),Ze("cancel",n),Ze("close",n);break;case"iframe":case"object":Ze("load",n);break;case"video":case"audio":for(s=0;s<Os.length;s++)Ze(Os[s],n);break;case"image":Ze("error",n),Ze("load",n);break;case"details":Ze("toggle",n);break;case"embed":case"source":case"link":Ze("error",n),Ze("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in i)if(i.hasOwnProperty(U)&&(s=i[U],s!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,r));default:dt(n,r,U,s,i,null)}return;default:if(od(r)){for(Z in i)i.hasOwnProperty(Z)&&(s=i[Z],s!==void 0&&Ff(n,r,Z,s,i,void 0));return}}for(v in i)i.hasOwnProperty(v)&&(s=i[v],s!=null&&dt(n,r,v,s,i,null))}function Wx(n,r,i,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,g=null,v=null,T=null,U=null,Z=null;for(q in i){var ee=i[q];if(i.hasOwnProperty(q)&&ee!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":T=ee;default:s.hasOwnProperty(q)||dt(n,r,q,null,s,ee)}}for(var B in s){var q=s[B];if(ee=i[B],s.hasOwnProperty(B)&&(q!=null||ee!=null))switch(B){case"type":d=q;break;case"name":u=q;break;case"checked":U=q;break;case"defaultChecked":Z=q;break;case"value":g=q;break;case"defaultValue":v=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(o(137,r));break;default:q!==ee&&dt(n,r,B,q,s,ee)}}ad(n,g,v,T,U,Z,d,u);return;case"select":q=g=v=B=null;for(d in i)if(T=i[d],i.hasOwnProperty(d)&&T!=null)switch(d){case"value":break;case"multiple":q=T;default:s.hasOwnProperty(d)||dt(n,r,d,null,s,T)}for(u in s)if(d=s[u],T=i[u],s.hasOwnProperty(u)&&(d!=null||T!=null))switch(u){case"value":B=d;break;case"defaultValue":v=d;break;case"multiple":g=d;default:d!==T&&dt(n,r,u,d,s,T)}r=v,i=g,s=q,B!=null?Bi(n,!!i,B,!1):!!s!=!!i&&(r!=null?Bi(n,!!i,r,!0):Bi(n,!!i,i?[]:"",!1));return;case"textarea":q=B=null;for(v in i)if(u=i[v],i.hasOwnProperty(v)&&u!=null&&!s.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:dt(n,r,v,null,s,u)}for(g in s)if(u=s[g],d=i[g],s.hasOwnProperty(g)&&(u!=null||d!=null))switch(g){case"value":B=u;break;case"defaultValue":q=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==d&&dt(n,r,g,u,s,d)}Jm(n,B,q);return;case"option":for(var Be in i)if(B=i[Be],i.hasOwnProperty(Be)&&B!=null&&!s.hasOwnProperty(Be))switch(Be){case"selected":n.selected=!1;break;default:dt(n,r,Be,null,s,B)}for(T in s)if(B=s[T],q=i[T],s.hasOwnProperty(T)&&B!==q&&(B!=null||q!=null))switch(T){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:dt(n,r,T,B,s,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Le in i)B=i[Le],i.hasOwnProperty(Le)&&B!=null&&!s.hasOwnProperty(Le)&&dt(n,r,Le,null,s,B);for(U in s)if(B=s[U],q=i[U],s.hasOwnProperty(U)&&B!==q&&(B!=null||q!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,r));break;default:dt(n,r,U,B,s,q)}return;default:if(od(r)){for(var ft in i)B=i[ft],i.hasOwnProperty(ft)&&B!==void 0&&!s.hasOwnProperty(ft)&&Ff(n,r,ft,void 0,s,B);for(Z in s)B=s[Z],q=i[Z],!s.hasOwnProperty(Z)||B===q||B===void 0&&q===void 0||Ff(n,r,Z,B,s,q);return}}for(var M in i)B=i[M],i.hasOwnProperty(M)&&B!=null&&!s.hasOwnProperty(M)&&dt(n,r,M,null,s,B);for(ee in s)B=s[ee],q=i[ee],!s.hasOwnProperty(ee)||B===q||B==null&&q==null||dt(n,r,ee,B,s,q)}var Yf=null,Gf=null;function Oc(n){return n.nodeType===9?n:n.ownerDocument}function eb(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tb(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Xf(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Kf=null;function e5(){var n=window.event;return n&&n.type==="popstate"?n===Kf?!1:(Kf=n,!0):(Kf=null,!1)}var nb=typeof setTimeout=="function"?setTimeout:void 0,t5=typeof clearTimeout=="function"?clearTimeout:void 0,rb=typeof Promise=="function"?Promise:void 0,n5=typeof queueMicrotask=="function"?queueMicrotask:typeof rb<"u"?function(n){return rb.resolve(null).then(n).catch(r5)}:nb;function r5(n){setTimeout(function(){throw n})}function Ta(n){return n==="head"}function ab(n,r){var i=r,s=0,u=0;do{var d=i.nextSibling;if(n.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(0<s&&8>s){i=s;var g=n.ownerDocument;if(i&1&&ks(g.documentElement),i&2&&ks(g.body),i&4)for(i=g.head,ks(i),g=i.firstChild;g;){var v=g.nextSibling,T=g.nodeName;g[Ue]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&g.rel.toLowerCase()==="stylesheet"||i.removeChild(g),g=v}}if(u===0){n.removeChild(d),Us(r);return}u--}else i==="$"||i==="$?"||i==="$!"?u++:s=i.charCodeAt(0)-48;else s=0;i=d}while(i);Us(r)}function Zf(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var i=r;switch(r=r.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Zf(i),je(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}n.removeChild(i)}}function a5(n,r,i,s){for(;n.nodeType===1;){var u=i;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!s&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(s){if(!n[Ue])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==u.rel||n.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||n.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||n.getAttribute("title")!==(u.title==null?null:u.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(u.src==null?null:u.src)||n.getAttribute("type")!==(u.type==null?null:u.type)||n.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=cr(n.nextSibling),n===null)break}return null}function i5(n,r,i){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=cr(n.nextSibling),n===null))return null;return n}function Qf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function o5(n,r){var i=n.ownerDocument;if(n.data!=="$?"||i.readyState==="complete")r();else{var s=function(){r(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),n._reactRetry=s}}function cr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var Jf=null;function ib(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var i=n.data;if(i==="$"||i==="$!"||i==="$?"){if(r===0)return n;r--}else i==="/$"&&r++}n=n.previousSibling}return null}function ob(n,r,i){switch(r=Oc(i),n){case"html":if(n=r.documentElement,!n)throw Error(o(452));return n;case"head":if(n=r.head,!n)throw Error(o(453));return n;case"body":if(n=r.body,!n)throw Error(o(454));return n;default:throw Error(o(451))}}function ks(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);je(n)}var Xn=new Map,sb=new Set;function Cc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Yr=H.d;H.d={f:s5,r:l5,D:c5,C:u5,L:d5,m:f5,X:m5,S:h5,M:p5};function s5(){var n=Yr.f(),r=yc();return n||r}function l5(n){var r=et(n);r!==null&&r.tag===5&&r.type==="form"?Og(r):Yr.r(n)}var go=typeof document>"u"?null:document;function lb(n,r,i){var s=go;if(s&&typeof r=="string"&&r){var u=Hn(r);u='link[rel="'+n+'"][href="'+u+'"]',typeof i=="string"&&(u+='[crossorigin="'+i+'"]'),sb.has(u)||(sb.add(u),n={rel:n,crossOrigin:i,href:r},s.querySelector(u)===null&&(r=s.createElement("link"),Qt(r,"link",n),tt(r),s.head.appendChild(r)))}}function c5(n){Yr.D(n),lb("dns-prefetch",n,null)}function u5(n,r){Yr.C(n,r),lb("preconnect",n,r)}function d5(n,r,i){Yr.L(n,r,i);var s=go;if(s&&n&&r){var u='link[rel="preload"][as="'+Hn(r)+'"]';r==="image"&&i&&i.imageSrcSet?(u+='[imagesrcset="'+Hn(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(u+='[imagesizes="'+Hn(i.imageSizes)+'"]')):u+='[href="'+Hn(n)+'"]';var d=u;switch(r){case"style":d=bo(n);break;case"script":d=vo(n)}Xn.has(d)||(n=b({rel:"preload",href:r==="image"&&i&&i.imageSrcSet?void 0:n,as:r},i),Xn.set(d,n),s.querySelector(u)!==null||r==="style"&&s.querySelector(Rs(d))||r==="script"&&s.querySelector(Ds(d))||(r=s.createElement("link"),Qt(r,"link",n),tt(r),s.head.appendChild(r)))}}function f5(n,r){Yr.m(n,r);var i=go;if(i&&n){var s=r&&typeof r.as=="string"?r.as:"script",u='link[rel="modulepreload"][as="'+Hn(s)+'"][href="'+Hn(n)+'"]',d=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=vo(n)}if(!Xn.has(d)&&(n=b({rel:"modulepreload",href:n},r),Xn.set(d,n),i.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ds(d)))return}s=i.createElement("link"),Qt(s,"link",n),tt(s),i.head.appendChild(s)}}}function h5(n,r,i){Yr.S(n,r,i);var s=go;if(s&&n){var u=_t(s).hoistableStyles,d=bo(n);r=r||"default";var g=u.get(d);if(!g){var v={loading:0,preload:null};if(g=s.querySelector(Rs(d)))v.loading=5;else{n=b({rel:"stylesheet",href:n,"data-precedence":r},i),(i=Xn.get(d))&&Wf(n,i);var T=g=s.createElement("link");tt(T),Qt(T,"link",n),T._p=new Promise(function(U,Z){T.onload=U,T.onerror=Z}),T.addEventListener("load",function(){v.loading|=1}),T.addEventListener("error",function(){v.loading|=2}),v.loading|=4,kc(g,r,s)}g={type:"stylesheet",instance:g,count:1,state:v},u.set(d,g)}}}function m5(n,r){Yr.X(n,r);var i=go;if(i&&n){var s=_t(i).hoistableScripts,u=vo(n),d=s.get(u);d||(d=i.querySelector(Ds(u)),d||(n=b({src:n,async:!0},r),(r=Xn.get(u))&&eh(n,r),d=i.createElement("script"),tt(d),Qt(d,"link",n),i.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(u,d))}}function p5(n,r){Yr.M(n,r);var i=go;if(i&&n){var s=_t(i).hoistableScripts,u=vo(n),d=s.get(u);d||(d=i.querySelector(Ds(u)),d||(n=b({src:n,async:!0,type:"module"},r),(r=Xn.get(u))&&eh(n,r),d=i.createElement("script"),tt(d),Qt(d,"link",n),i.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(u,d))}}function cb(n,r,i,s){var u=(u=Te.current)?Cc(u):null;if(!u)throw Error(o(446));switch(n){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(r=bo(i.href),i=_t(u).hoistableStyles,s=i.get(r),s||(s={type:"style",instance:null,count:0,state:null},i.set(r,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){n=bo(i.href);var d=_t(u).hoistableStyles,g=d.get(n);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,g),(d=u.querySelector(Rs(n)))&&!d._p&&(g.instance=d,g.state.loading=5),Xn.has(n)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Xn.set(n,i),d||g5(u,n,i,g.state))),r&&s===null)throw Error(o(528,""));return g}if(r&&s!==null)throw Error(o(529,""));return null;case"script":return r=i.async,i=i.src,typeof i=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=vo(i),i=_t(u).hoistableScripts,s=i.get(r),s||(s={type:"script",instance:null,count:0,state:null},i.set(r,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,n))}}function bo(n){return'href="'+Hn(n)+'"'}function Rs(n){return'link[rel="stylesheet"]['+n+"]"}function ub(n){return b({},n,{"data-precedence":n.precedence,precedence:null})}function g5(n,r,i,s){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?s.loading=1:(r=n.createElement("link"),s.preload=r,r.addEventListener("load",function(){return s.loading|=1}),r.addEventListener("error",function(){return s.loading|=2}),Qt(r,"link",i),tt(r),n.head.appendChild(r))}function vo(n){return'[src="'+Hn(n)+'"]'}function Ds(n){return"script[async]"+n}function db(n,r,i){if(r.count++,r.instance===null)switch(r.type){case"style":var s=n.querySelector('style[data-href~="'+Hn(i.href)+'"]');if(s)return r.instance=s,tt(s),s;var u=b({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(n.ownerDocument||n).createElement("style"),tt(s),Qt(s,"style",u),kc(s,i.precedence,n),r.instance=s;case"stylesheet":u=bo(i.href);var d=n.querySelector(Rs(u));if(d)return r.state.loading|=4,r.instance=d,tt(d),d;s=ub(i),(u=Xn.get(u))&&Wf(s,u),d=(n.ownerDocument||n).createElement("link"),tt(d);var g=d;return g._p=new Promise(function(v,T){g.onload=v,g.onerror=T}),Qt(d,"link",s),r.state.loading|=4,kc(d,i.precedence,n),r.instance=d;case"script":return d=vo(i.src),(u=n.querySelector(Ds(d)))?(r.instance=u,tt(u),u):(s=i,(u=Xn.get(d))&&(s=b({},i),eh(s,u)),n=n.ownerDocument||n,u=n.createElement("script"),tt(u),Qt(u,"link",s),n.head.appendChild(u),r.instance=u);case"void":return null;default:throw Error(o(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(s=r.instance,r.state.loading|=4,kc(s,i.precedence,n));return r.instance}function kc(n,r,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,d=u,g=0;g<s.length;g++){var v=s[g];if(v.dataset.precedence===r)d=v;else if(d!==u)break}d?d.parentNode.insertBefore(n,d.nextSibling):(r=i.nodeType===9?i.head:i,r.insertBefore(n,r.firstChild))}function Wf(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function eh(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Rc=null;function fb(n,r,i){if(Rc===null){var s=new Map,u=Rc=new Map;u.set(i,s)}else u=Rc,s=u.get(i),s||(s=new Map,u.set(i,s));if(s.has(n))return s;for(s.set(n,null),i=i.getElementsByTagName(n),u=0;u<i.length;u++){var d=i[u];if(!(d[Ue]||d[ne]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var g=d.getAttribute(r)||"";g=n+g;var v=s.get(g);v?v.push(d):s.set(g,[d])}}return s}function hb(n,r,i){n=n.ownerDocument||n,n.head.insertBefore(i,r==="title"?n.querySelector("head > title"):null)}function b5(n,r,i){if(i===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function mb(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Ms=null;function v5(){}function y5(n,r,i){if(Ms===null)throw Error(o(475));var s=Ms;if(r.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=bo(i.href),d=n.querySelector(Rs(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(s.count++,s=Dc.bind(s),n.then(s,s)),r.state.loading|=4,r.instance=d,tt(d);return}d=n.ownerDocument||n,i=ub(i),(u=Xn.get(u))&&Wf(i,u),d=d.createElement("link"),tt(d);var g=d;g._p=new Promise(function(v,T){g.onload=v,g.onerror=T}),Qt(d,"link",i),r.instance=d}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(s.count++,r=Dc.bind(s),n.addEventListener("load",r),n.addEventListener("error",r))}}function w5(){if(Ms===null)throw Error(o(475));var n=Ms;return n.stylesheets&&n.count===0&&th(n,n.stylesheets),0<n.count?function(r){var i=setTimeout(function(){if(n.stylesheets&&th(n,n.stylesheets),n.unsuspend){var s=n.unsuspend;n.unsuspend=null,s()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(i)}}:null}function Dc(){if(this.count--,this.count===0){if(this.stylesheets)th(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Mc=null;function th(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Mc=new Map,r.forEach(x5,n),Mc=null,Dc.call(n))}function x5(n,r){if(!(r.state.loading&4)){var i=Mc.get(n);if(i)var s=i.get(null);else{i=new Map,Mc.set(n,i);for(var u=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var g=u[d];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(i.set(g.dataset.precedence,g),s=g)}s&&i.set(null,s)}u=r.instance,g=u.getAttribute("data-precedence"),d=i.get(g)||s,d===s&&i.set(null,u),i.set(g,u),this.count++,s=Dc.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),d?d.parentNode.insertBefore(u,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(u,n.firstChild)),r.state.loading|=4}}var Ns={$$typeof:K,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function E5(n,r,i,s,u,d,g,v){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ji(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.hiddenUpdates=ji(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function pb(n,r,i,s,u,d,g,v,T,U,Z,ee){return n=new E5(n,r,i,g,v,T,U,ee),r=1,d===!0&&(r|=24),d=Tn(3,null,null,r),n.current=d,d.stateNode=n,r=Pd(),r.refCount++,n.pooledCache=r,r.refCount++,d.memoizedState={element:s,isDehydrated:i,cache:r},Bd(d),n}function gb(n){return n?(n=Xi,n):Xi}function bb(n,r,i,s,u,d){u=gb(u),s.context===null?s.context=u:s.pendingContext=u,s=fa(r),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=ha(n,s,r),i!==null&&(Rn(i,n,r),cs(i,n,r))}function vb(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var i=n.retryLane;n.retryLane=i!==0&&i<r?i:r}}function nh(n,r){vb(n,r),(n=n.alternate)&&vb(n,r)}function yb(n){if(n.tag===13){var r=Gi(n,67108864);r!==null&&Rn(r,n,67108864),nh(n,67108864)}}var Nc=!0;function S5(n,r,i,s){var u=_.T;_.T=null;var d=H.p;try{H.p=2,rh(n,r,i,s)}finally{H.p=d,_.T=u}}function _5(n,r,i,s){var u=_.T;_.T=null;var d=H.p;try{H.p=8,rh(n,r,i,s)}finally{H.p=d,_.T=u}}function rh(n,r,i,s){if(Nc){var u=ah(s);if(u===null)$f(n,r,s,Lc,i),xb(n,s);else if(A5(u,n,r,i,s))s.stopPropagation();else if(xb(n,s),r&4&&-1<T5.indexOf(n)){for(;u!==null;){var d=et(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var g=ar(d.pendingLanes);if(g!==0){var v=d;for(v.pendingLanes|=2,v.entangledLanes|=2;g;){var T=1<<31-ot(g);v.entanglements[1]|=T,g&=~T}Sr(d),(st&6)===0&&(bc=on()+500,As(0))}}break;case 13:v=Gi(d,2),v!==null&&Rn(v,d,2),yc(),nh(d,2)}if(d=ah(s),d===null&&$f(n,r,s,Lc,i),d===u)break;u=d}u!==null&&s.stopPropagation()}else $f(n,r,s,null,i)}}function ah(n){return n=ld(n),ih(n)}var Lc=null;function ih(n){if(Lc=null,n=Ie(n),n!==null){var r=c(n);if(r===null)n=null;else{var i=r.tag;if(i===13){if(n=f(r),n!==null)return n;n=null}else if(i===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Lc=n,null}function wb(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kl()){case Qa:return 2;case O:return 8;case j:case X:return 32;case he:return 268435456;default:return 32}default:return 32}}var oh=!1,Aa=null,Oa=null,Ca=null,Ls=new Map,Ps=new Map,ka=[],T5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xb(n,r){switch(n){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Ls.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ps.delete(r.pointerId)}}function zs(n,r,i,s,u,d){return n===null||n.nativeEvent!==d?(n={blockedOn:r,domEventName:i,eventSystemFlags:s,nativeEvent:d,targetContainers:[u]},r!==null&&(r=et(r),r!==null&&yb(r)),n):(n.eventSystemFlags|=s,r=n.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),n)}function A5(n,r,i,s,u){switch(r){case"focusin":return Aa=zs(Aa,n,r,i,s,u),!0;case"dragenter":return Oa=zs(Oa,n,r,i,s,u),!0;case"mouseover":return Ca=zs(Ca,n,r,i,s,u),!0;case"pointerover":var d=u.pointerId;return Ls.set(d,zs(Ls.get(d)||null,n,r,i,s,u)),!0;case"gotpointercapture":return d=u.pointerId,Ps.set(d,zs(Ps.get(d)||null,n,r,i,s,u)),!0}return!1}function Eb(n){var r=Ie(n.target);if(r!==null){var i=c(r);if(i!==null){if(r=i.tag,r===13){if(r=f(i),r!==null){n.blockedOn=r,L(n.priority,function(){if(i.tag===13){var s=kn();s=qo(s);var u=Gi(i,s);u!==null&&Rn(u,i,s),nh(i,s)}});return}}else if(r===3&&i.stateNode.current.memoizedState.isDehydrated){n.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pc(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var i=ah(n.nativeEvent);if(i===null){i=n.nativeEvent;var s=new i.constructor(i.type,i);sd=s,i.target.dispatchEvent(s),sd=null}else return r=et(i),r!==null&&yb(r),n.blockedOn=i,!1;r.shift()}return!0}function Sb(n,r,i){Pc(n)&&i.delete(r)}function O5(){oh=!1,Aa!==null&&Pc(Aa)&&(Aa=null),Oa!==null&&Pc(Oa)&&(Oa=null),Ca!==null&&Pc(Ca)&&(Ca=null),Ls.forEach(Sb),Ps.forEach(Sb)}function zc(n,r){n.blockedOn===r&&(n.blockedOn=null,oh||(oh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,O5)))}var Uc=null;function _b(n){Uc!==n&&(Uc=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Uc===n&&(Uc=null);for(var r=0;r<n.length;r+=3){var i=n[r],s=n[r+1],u=n[r+2];if(typeof s!="function"){if(ih(s||i)===null)continue;break}var d=et(i);d!==null&&(n.splice(r,3),r-=3,af(d,{pending:!0,data:u,method:i.method,action:s},s,u))}}))}function Us(n){function r(T){return zc(T,n)}Aa!==null&&zc(Aa,n),Oa!==null&&zc(Oa,n),Ca!==null&&zc(Ca,n),Ls.forEach(r),Ps.forEach(r);for(var i=0;i<ka.length;i++){var s=ka[i];s.blockedOn===n&&(s.blockedOn=null)}for(;0<ka.length&&(i=ka[0],i.blockedOn===null);)Eb(i),i.blockedOn===null&&ka.shift();if(i=(n.ownerDocument||n).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var u=i[s],d=i[s+1],g=u[le]||null;if(typeof d=="function")g||_b(i);else if(g){var v=null;if(d&&d.hasAttribute("formAction")){if(u=d,g=d[le]||null)v=g.formAction;else if(ih(u)!==null)continue}else v=g.action;typeof v=="function"?i[s+1]=v:(i.splice(s,3),s-=3),_b(i)}}}function sh(n){this._internalRoot=n}jc.prototype.render=sh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(o(409));var i=r.current,s=kn();bb(i,s,n,r,null,null)},jc.prototype.unmount=sh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;bb(n.current,2,null,n,null,null),yc(),r[xe]=null}};function jc(n){this._internalRoot=n}jc.prototype.unstable_scheduleHydration=function(n){if(n){var r=C();n={blockedOn:null,target:n,priority:r};for(var i=0;i<ka.length&&r!==0&&r<ka[i].priority;i++);ka.splice(i,0,n),i===0&&Eb(n)}};var Tb=t.version;if(Tb!=="19.1.0")throw Error(o(527,Tb,"19.1.0"));H.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(o(188)):(n=Object.keys(n).join(","),Error(o(268,n)));return n=m(r),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var C5={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bc.isDisabled&&Bc.supportsFiber)try{pe=Bc.inject(C5),Ce=Bc}catch{}}return Bs.createRoot=function(n,r){if(!l(n))throw Error(o(299));var i=!1,s="",u=Hg,d=qg,g=Vg,v=null;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onUncaughtError!==void 0&&(u=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(g=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(v=r.unstable_transitionCallbacks)),r=pb(n,1,!1,null,null,i,s,u,d,g,v,null),n[xe]=r.current,Vf(n),new sh(r)},Bs.hydrateRoot=function(n,r,i){if(!l(n))throw Error(o(299));var s=!1,u="",d=Hg,g=qg,v=Vg,T=null,U=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks),i.formState!==void 0&&(U=i.formState)),r=pb(n,1,!0,r,i??null,s,u,d,g,v,T,U),r.context=gb(null),i=r.current,s=kn(),s=qo(s),u=fa(s),u.callback=null,ha(i,u,s),i=s,r.current.lanes=i,Wa(r,i),Sr(r),n[xe]=r.current,Vf(n),new jc(r)},Bs.version="19.1.0",Bs}var Pb;function U5(){if(Pb)return uh.exports;Pb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),uh.exports=z5(),uh.exports}var j5=U5(),Is={},zb;function B5(){if(zb)return Is;zb=1,Object.defineProperty(Is,"__esModule",{value:!0}),Is.parse=f,Is.serialize=p;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,a=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function f(y,R){const S=new c,A=y.length;if(A<2)return S;const N=R?.decode||b;let z=0;do{const Q=y.indexOf("=",z);if(Q===-1)break;const K=y.indexOf(";",z),ce=K===-1?A:K;if(Q>ce){z=y.lastIndexOf(";",Q-1)+1;continue}const J=h(y,z,Q),D=m(y,Q,J),me=y.slice(J,D);if(S[me]===void 0){let _e=h(y,Q+1,ce),ue=m(y,ce,_e);const Re=N(y.slice(_e,ue));S[me]=Re}z=ce+1}while(z<A);return S}function h(y,R,S){do{const A=y.charCodeAt(R);if(A!==32&&A!==9)return R}while(++R<S);return S}function m(y,R,S){for(;R>S;){const A=y.charCodeAt(--R);if(A!==32&&A!==9)return R+1}return S}function p(y,R,S){const A=S?.encode||encodeURIComponent;if(!e.test(y))throw new TypeError(`argument name is invalid: ${y}`);const N=A(R);if(!t.test(N))throw new TypeError(`argument val is invalid: ${R}`);let z=y+"="+N;if(!S)return z;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);z+="; Max-Age="+S.maxAge}if(S.domain){if(!a.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);z+="; Domain="+S.domain}if(S.path){if(!o.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);z+="; Path="+S.path}if(S.expires){if(!x(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);z+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(z+="; HttpOnly"),S.secure&&(z+="; Secure"),S.partitioned&&(z+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":z+="; Priority=Low";break;case"medium":z+="; Priority=Medium";break;case"high":z+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":z+="; SameSite=Strict";break;case"lax":z+="; SameSite=Lax";break;case"none":z+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return z}function b(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function x(y){return l.call(y)==="[object Date]"}return Is}B5();/**
 * react-router v7.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ky=e=>{throw TypeError(e)},I5=(e,t,a)=>t.has(e)||ky("Cannot "+a),mh=(e,t,a)=>(I5(e,t,"read from private field"),a?a.call(e):t.get(e)),H5=(e,t,a)=>t.has(e)?ky("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Ub="popstate";function q5(e={}){function t(o,l){let{pathname:c,search:f,hash:h}=o.location;return al("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function a(o,l){return typeof l=="string"?l:$a(l)}return $5(t,a,null,e)}function Xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function V5(){return Math.random().toString(36).substring(2,10)}function jb(e,t){return{usr:e.state,key:e.key,idx:t}}function al(e,t,a=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Fa(t):t,state:a,key:t&&t.key||o||V5()}}function $a({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function Fa(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let o=e.indexOf("?");o>=0&&(t.search=e.substring(o),e=e.substring(0,o)),e&&(t.pathname=e)}return t}function $5(e,t,a,o={}){let{window:l=document.defaultView,v5Compat:c=!1}=o,f=l.history,h="POP",m=null,p=b();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function b(){return(f.state||{idx:null}).idx}function x(){h="POP";let N=b(),z=N==null?null:N-p;p=N,m&&m({action:h,location:A.location,delta:z})}function y(N,z){h="PUSH";let Q=al(A.location,N,z);p=b()+1;let K=jb(Q,p),ce=A.createHref(Q);try{f.pushState(K,"",ce)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;l.location.assign(ce)}c&&m&&m({action:h,location:A.location,delta:1})}function R(N,z){h="REPLACE";let Q=al(A.location,N,z);p=b();let K=jb(Q,p),ce=A.createHref(Q);f.replaceState(K,"",ce),c&&m&&m({action:h,location:A.location,delta:0})}function S(N){return Ry(N)}let A={get action(){return h},get location(){return e(l,f)},listen(N){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Ub,x),m=N,()=>{l.removeEventListener(Ub,x),m=null}},createHref(N){return t(l,N)},createURL:S,encodeLocation(N){let z=S(N);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:y,replace:R,go(N){return f.go(N)}};return A}function Ry(e,t=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(a,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:$a(e);return o=o.replace(/ $/,"%20"),!t&&o.startsWith("//")&&(o=a+o),new URL(o,a)}var Ks,Bb=class{constructor(e){if(H5(this,Ks,new Map),e)for(let[t,a]of e)this.set(t,a)}get(e){if(mh(this,Ks).has(e))return mh(this,Ks).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){mh(this,Ks).set(e,t)}};Ks=new WeakMap;var F5=new Set(["lazy","caseSensitive","path","id","index","children"]);function Y5(e){return F5.has(e)}var G5=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function X5(e){return G5.has(e)}function K5(e){return e.index===!0}function ou(e,t,a=[],o={}){return e.map((l,c)=>{let f=[...a,String(c)],h=typeof l.id=="string"?l.id:f.join("-");if(Xe(l.index!==!0||!l.children,"Cannot specify children on an index route"),Xe(!o[h],`Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`),K5(l)){let m={...l,...t(l),id:h};return o[h]=m,m}else{let m={...l,...t(l),id:h,children:void 0};return o[h]=m,l.children&&(m.children=ou(l.children,t,f,o)),m}})}function La(e,t,a="/"){return Gc(e,t,a,!1)}function Gc(e,t,a,o){let l=typeof t=="string"?Fa(t):t,c=Jn(l.pathname||"/",a);if(c==null)return null;let f=Dy(e);Q5(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=lE(c);h=oE(f[m],p,o)}return h}function Z5(e,t){let{route:a,pathname:o,params:l}=e;return{id:a.id,pathname:o,params:l,data:t[a.id],handle:a.handle}}function Dy(e,t=[],a=[],o=""){let l=(c,f,h)=>{let m={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(Xe(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length));let p=kr([o,m.relativePath]),b=a.concat(m);c.children&&c.children.length>0&&(Xe(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Dy(c.children,t,b,p)),!(c.path==null&&!c.index)&&t.push({path:p,score:aE(p,c.index),routesMeta:b})};return e.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let h of My(c.path))l(c,f,h)}),t}function My(e){let t=e.split("/");if(t.length===0)return[];let[a,...o]=t,l=a.endsWith("?"),c=a.replace(/\?$/,"");if(o.length===0)return l?[c,""]:[c];let f=My(o.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>e.startsWith("/")&&m===""?"/":m)}function Q5(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:iE(t.routesMeta.map(o=>o.childrenIndex),a.routesMeta.map(o=>o.childrenIndex)))}var J5=/^:[\w-]+$/,W5=3,eE=2,tE=1,nE=10,rE=-2,Ib=e=>e==="*";function aE(e,t){let a=e.split("/"),o=a.length;return a.some(Ib)&&(o+=rE),t&&(o+=eE),a.filter(l=>!Ib(l)).reduce((l,c)=>l+(J5.test(c)?W5:c===""?tE:nE),o)}function iE(e,t){return e.length===t.length&&e.slice(0,-1).every((o,l)=>o===t[l])?e[e.length-1]-t[t.length-1]:0}function oE(e,t,a=!1){let{routesMeta:o}=e,l={},c="/",f=[];for(let h=0;h<o.length;++h){let m=o[h],p=h===o.length-1,b=c==="/"?t:t.slice(c.length)||"/",x=su({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},b),y=m.route;if(!x&&p&&a&&!o[o.length-1].route.index&&(x=su({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},b)),!x)return null;Object.assign(l,x.params),f.push({params:l,pathname:kr([c,x.pathname]),pathnameBase:dE(kr([c,x.pathnameBase])),route:y}),x.pathnameBase!=="/"&&(c=kr([c,x.pathnameBase]))}return f}function su(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,o]=sE(e.path,e.caseSensitive,e.end),l=t.match(a);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:o.reduce((p,{paramName:b,isOptional:x},y)=>{if(b==="*"){let S=h[y]||"";f=c.slice(0,c.length-S.length).replace(/(.)\/+$/,"$1")}const R=h[y];return x&&!R?p[b]=void 0:p[b]=(R||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:e}}function sE(e,t=!1,a=!0){Pt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(o.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),o]}function lE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Pt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Jn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,o=e.charAt(a);return o&&o!=="/"?null:e.slice(a)||"/"}function cE(e,t="/"){let{pathname:a,search:o="",hash:l=""}=typeof e=="string"?Fa(e):e;return{pathname:a?a.startsWith("/")?a:uE(a,t):t,search:fE(o),hash:hE(l)}}function uE(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?a.length>1&&a.pop():l!=="."&&a.push(l)}),a.length>1?a.join("/"):"/"}function ph(e,t,a,o){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ny(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function Lu(e){let t=Ny(e);return t.map((a,o)=>o===t.length-1?a.pathname:a.pathnameBase)}function Pu(e,t,a,o=!1){let l;typeof e=="string"?l=Fa(e):(l={...e},Xe(!l.pathname||!l.pathname.includes("?"),ph("?","pathname","search",l)),Xe(!l.pathname||!l.pathname.includes("#"),ph("#","pathname","hash",l)),Xe(!l.search||!l.search.includes("#"),ph("#","search","hash",l)));let c=e===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=a;else{let x=t.length-1;if(!o&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),x-=1;l.pathname=y.join("/")}h=x>=0?t[x]:"/"}let m=cE(l,h),p=f&&f!=="/"&&f.endsWith("/"),b=(c||f===".")&&a.endsWith("/");return!m.pathname.endsWith("/")&&(p||b)&&(m.pathname+="/"),m}var kr=e=>e.join("/").replace(/\/\/+/g,"/"),dE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,lu=class{constructor(e,t,a,o=!1){this.status=e,this.statusText=t||"",this.internal=o,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function il(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Ly=["POST","PUT","PATCH","DELETE"],mE=new Set(Ly),pE=["GET",...Ly],gE=new Set(pE),bE=new Set([301,302,303,307,308]),vE=new Set([307,308]),gh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yE={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Hs={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},im=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wE=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Py="remix-router-transitions",zy=Symbol("ResetLoaderData");function xE(e){const t=e.window?e.window:typeof window<"u"?window:void 0,a=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";Xe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o=e.hydrationRouteProperties||[],l=e.mapRouteProperties||wE,c={},f=ou(e.routes,l,void 0,c),h,m=e.basename||"/",p=e.dataStrategy||AE,b={unstable_middleware:!1,...e.future},x=null,y=new Set,R=null,S=null,A=null,N=e.hydrationData!=null,z=La(f,e.history.location,m),Q=!1,K=null,ce;if(z==null&&!e.patchRoutesOnNavigation){let C=Kn(404,{pathname:e.history.location.pathname}),{matches:L,route:$}=Jb(f);ce=!0,z=L,K={[$.id]:C}}else if(z&&!e.hydrationData&&ei(z,f,e.history.location.pathname).active&&(z=null),z)if(z.some(C=>C.route.lazy))ce=!1;else if(!z.some(C=>C.route.loader))ce=!0;else{let C=e.hydrationData?e.hydrationData.loaderData:null,L=e.hydrationData?e.hydrationData.errors:null;if(L){let $=z.findIndex(ne=>L[ne.route.id]!==void 0);ce=z.slice(0,$+1).every(ne=>!Ph(ne.route,C,L))}else ce=z.every($=>!Ph($.route,C,L))}else{ce=!1,z=[];let C=ei(null,f,e.history.location.pathname);C.active&&C.matches&&(Q=!0,z=C.matches)}let J,D={historyAction:e.history.action,location:e.history.location,matches:z,initialized:ce,navigation:gh,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||K,fetchers:new Map,blockers:new Map},me="POP",_e=!1,ue,Re=!1,Ee=new Map,we=null,be=!1,ie=!1,te=new Set,_=new Map,H=0,F=-1,se=new Map,E=new Set,V=new Map,ae=new Map,re=new Set,fe=new Map,De,Te=null;function ht(){if(x=e.history.listen(({action:C,location:L,delta:$})=>{if(De){De(),De=void 0;return}Pt(fe.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ne=Ja({currentLocation:D.location,nextLocation:L,historyAction:C});if(ne&&$!=null){let le=new Promise(xe=>{De=xe});e.history.go($*-1),jn(ne,{state:"blocked",location:L,proceed(){jn(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),le.then(()=>e.history.go($))},reset(){let xe=new Map(D.blockers);xe.set(ne,Hs),$e({blockers:xe})}});return}return hn(C,L)}),a){UE(t,Ee);let C=()=>jE(t,Ee);t.addEventListener("pagehide",C),we=()=>t.removeEventListener("pagehide",C)}return D.initialized||hn("POP",D.location,{initialHydration:!0}),J}function Qe(){x&&x(),we&&we(),y.clear(),ue&&ue.abort(),D.fetchers.forEach((C,L)=>ot(L)),D.blockers.forEach((C,L)=>vr(L))}function Ot(C){return y.add(C),()=>y.delete(C)}function $e(C,L={}){D={...D,...C};let $=[],ne=[];D.fetchers.forEach((le,xe)=>{le.state==="idle"&&(re.has(xe)?$.push(xe):ne.push(xe))}),re.forEach(le=>{!D.fetchers.has(le)&&!_.has(le)&&$.push(le)}),[...y].forEach(le=>le(D,{deletedFetchers:$,viewTransitionOpts:L.viewTransitionOpts,flushSync:L.flushSync===!0})),$.forEach(le=>ot(le)),ne.forEach(le=>D.fetchers.delete(le))}function Ct(C,L,{flushSync:$}={}){let ne=D.actionData!=null&&D.navigation.formMethod!=null&&Nn(D.navigation.formMethod)&&D.navigation.state==="loading"&&C.state?._isRedirect!==!0,le;L.actionData?Object.keys(L.actionData).length>0?le=L.actionData:le=null:ne?le=D.actionData:le=null;let xe=L.loaderData?Zb(D.loaderData,L.loaderData,L.matches||[],L.errors):D.loaderData,Ne=D.blockers;Ne.size>0&&(Ne=new Map(Ne),Ne.forEach((Se,Ue)=>Ne.set(Ue,Hs)));let ge=_e===!0||D.navigation.formMethod!=null&&Nn(D.navigation.formMethod)&&C.state?._isRedirect!==!0;h&&(f=h,h=void 0),be||me==="POP"||(me==="PUSH"?e.history.push(C,C.state):me==="REPLACE"&&e.history.replace(C,C.state));let ke;if(me==="POP"){let Se=Ee.get(D.location.pathname);Se&&Se.has(C.pathname)?ke={currentLocation:D.location,nextLocation:C}:Ee.has(C.pathname)&&(ke={currentLocation:C,nextLocation:D.location})}else if(Re){let Se=Ee.get(D.location.pathname);Se?Se.add(C.pathname):(Se=new Set([C.pathname]),Ee.set(D.location.pathname,Se)),ke={currentLocation:D.location,nextLocation:C}}$e({...L,actionData:le,loaderData:xe,historyAction:me,location:C,initialized:!0,navigation:gh,revalidation:"idle",restoreScrollPosition:Dl(C,L.matches||D.matches),preventScrollReset:ge,blockers:Ne},{viewTransitionOpts:ke,flushSync:$===!0}),me="POP",_e=!1,Re=!1,be=!1,ie=!1,Te?.resolve(),Te=null}async function an(C,L){if(typeof C=="number"){e.history.go(C);return}let $=Lh(D.location,D.matches,m,C,L?.fromRouteId,L?.relative),{path:ne,submission:le,error:xe}=Hb(!1,$,L),Ne=D.location,ge=al(D.location,ne,L&&L.state);ge={...ge,...e.history.encodeLocation(ge)};let ke=L&&L.replace!=null?L.replace:void 0,Se="PUSH";ke===!0?Se="REPLACE":ke===!1||le!=null&&Nn(le.formMethod)&&le.formAction===D.location.pathname+D.location.search&&(Se="REPLACE");let Ue=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,je=(L&&L.flushSync)===!0,Ie=Ja({currentLocation:Ne,nextLocation:ge,historyAction:Se});if(Ie){jn(Ie,{state:"blocked",location:ge,proceed(){jn(Ie,{state:"proceeding",proceed:void 0,reset:void 0,location:ge}),an(C,L)},reset(){let et=new Map(D.blockers);et.set(Ie,Hs),$e({blockers:et})}});return}await hn(Se,ge,{submission:le,pendingError:xe,preventScrollReset:Ue,replace:L&&L.replace,enableViewTransition:L&&L.viewTransition,flushSync:je})}function Un(){Te||(Te=BE()),oe(),$e({revalidation:"loading"});let C=Te.promise;return D.navigation.state==="submitting"?C:D.navigation.state==="idle"?(hn(D.historyAction,D.location,{startUninterruptedRevalidation:!0}),C):(hn(me||D.historyAction,D.navigation.location,{overrideNavigation:D.navigation,enableViewTransition:Re===!0}),C)}async function hn(C,L,$){ue&&ue.abort(),ue=null,me=C,be=($&&$.startUninterruptedRevalidation)===!0,Wa(D.location,D.matches),_e=($&&$.preventScrollReset)===!0,Re=($&&$.enableViewTransition)===!0;let ne=h||f,le=$&&$.overrideNavigation,xe=$?.initialHydration&&D.matches&&D.matches.length>0&&!Q?D.matches:La(ne,L,m),Ne=($&&$.flushSync)===!0;if(xe&&D.initialized&&!ie&&ME(D.location,L)&&!($&&$.submission&&Nn($.submission.formMethod))){Ct(L,{matches:xe},{flushSync:Ne});return}let ge=ei(xe,ne,L.pathname);if(ge.active&&ge.matches&&(xe=ge.matches),!xe){let{error:_t,notFoundMatches:tt,route:Je}=Ui(L.pathname);Ct(L,{matches:tt,loaderData:{},errors:{[Je.id]:_t}},{flushSync:Ne});return}ue=new AbortController;let ke=xo(e.history,L,ue.signal,$&&$.submission),Se=new Bb(e.unstable_getContext?await e.unstable_getContext():void 0),Ue;if($&&$.pendingError)Ue=[xi(xe).route.id,{type:"error",error:$.pendingError}];else if($&&$.submission&&Nn($.submission.formMethod)){let _t=await Pi(ke,L,$.submission,xe,Se,ge.active,$&&$.initialHydration===!0,{replace:$.replace,flushSync:Ne});if(_t.shortCircuited)return;if(_t.pendingActionResult){let[tt,Je]=_t.pendingActionResult;if(Mn(Je)&&il(Je.error)&&Je.error.status===404){ue=null,Ct(L,{matches:_t.matches,loaderData:{},errors:{[tt]:Je.error}});return}}xe=_t.matches||xe,Ue=_t.pendingActionResult,le=bh(L,$.submission),Ne=!1,ge.active=!1,ke=xo(e.history,ke.url,ke.signal)}let{shortCircuited:je,matches:Ie,loaderData:et,errors:yt}=await Ho(ke,L,xe,Se,ge.active,le,$&&$.submission,$&&$.fetcherSubmission,$&&$.replace,$&&$.initialHydration===!0,Ne,Ue);je||(ue=null,Ct(L,{matches:Ie||xe,...Qb(Ue),loaderData:et,errors:yt}))}async function Pi(C,L,$,ne,le,xe,Ne,ge={}){oe();let ke=PE(L,$);if($e({navigation:ke},{flushSync:ge.flushSync===!0}),xe){let je=await ti(ne,L.pathname,C.signal);if(je.type==="aborted")return{shortCircuited:!0};if(je.type==="error"){let Ie=xi(je.partialMatches).route.id;return{matches:je.partialMatches,pendingActionResult:[Ie,{type:"error",error:je.error}]}}else if(je.matches)ne=je.matches;else{let{notFoundMatches:Ie,error:et,route:yt}=Ui(L.pathname);return{matches:Ie,pendingActionResult:[yt.id,{type:"error",error:et}]}}}let Se,Ue=Zs(ne,L);if(!Ue.route.action&&!Ue.route.lazy)Se={type:"error",error:Kn(405,{method:C.method,pathname:L.pathname,routeId:Ue.route.id})};else{let je=Eo(l,c,C,ne,Ue,Ne?[]:o,le),Ie=await he(C,je,le,null);if(Se=Ie[Ue.route.id],!Se){for(let et of ne)if(Ie[et.route.id]){Se=Ie[et.route.id];break}}if(C.signal.aborted)return{shortCircuited:!0}}if(Ei(Se)){let je;return ge&&ge.replace!=null?je=ge.replace:je=Gb(Se.response.headers.get("Location"),new URL(C.url),m)===D.location.pathname+D.location.search,await X(C,Se,!0,{submission:$,replace:je}),{shortCircuited:!0}}if(Mn(Se)){let je=xi(ne,Ue.route.id);return(ge&&ge.replace)!==!0&&(me="PUSH"),{matches:ne,pendingActionResult:[je.route.id,Se,Ue.route.id]}}return{matches:ne,pendingActionResult:[Ue.route.id,Se]}}async function Ho(C,L,$,ne,le,xe,Ne,ge,ke,Se,Ue,je){let Ie=xe||bh(L,Ne),et=Ne||ge||ev(Ie),yt=!be&&!Se;if(le){if(yt){let Wt=on(je);$e({navigation:Ie,...Wt!==void 0?{actionData:Wt}:{}},{flushSync:Ue})}let Ye=await ti($,L.pathname,C.signal);if(Ye.type==="aborted")return{shortCircuited:!0};if(Ye.type==="error"){let Wt=xi(Ye.partialMatches).route.id;return{matches:Ye.partialMatches,loaderData:{},errors:{[Wt]:Ye.error}}}else if(Ye.matches)$=Ye.matches;else{let{error:Wt,notFoundMatches:ir,route:or}=Ui(L.pathname);return{matches:ir,loaderData:{},errors:{[or.id]:Wt}}}}let _t=h||f,{dsMatches:tt,revalidatingFetchers:Je}=qb(C,ne,l,c,e.history,D,$,et,L,Se?[]:o,Se===!0,ie,te,re,V,E,_t,m,e.patchRoutesOnNavigation!=null,je);if(F=++H,!e.dataStrategy&&!tt.some(Ye=>Ye.shouldLoad)&&Je.length===0){let Ye=nr();return Ct(L,{matches:$,loaderData:{},errors:je&&Mn(je[1])?{[je[0]]:je[1].error}:null,...Qb(je),...Ye?{fetchers:new Map(D.fetchers)}:{}},{flushSync:Ue}),{shortCircuited:!0}}if(yt){let Ye={};if(!le){Ye.navigation=Ie;let Wt=on(je);Wt!==void 0&&(Ye.actionData=Wt)}Je.length>0&&(Ye.fetchers=kl(Je)),$e(Ye,{flushSync:Ue})}Je.forEach(Ye=>{Ht(Ye.key),Ye.controller&&_.set(Ye.key,Ye.controller)});let ia=()=>Je.forEach(Ye=>Ht(Ye.key));ue&&ue.signal.addEventListener("abort",ia);let{loaderResults:sn,fetcherResults:Bn}=await de(tt,Je,C,ne);if(C.signal.aborted)return{shortCircuited:!0};ue&&ue.signal.removeEventListener("abort",ia),Je.forEach(Ye=>_.delete(Ye.key));let mn=Ic(sn);if(mn)return await X(C,mn.result,!0,{replace:ke}),{shortCircuited:!0};if(mn=Ic(Bn),mn)return E.add(mn.key),await X(C,mn.result,!0,{replace:ke}),{shortCircuited:!0};let{loaderData:oa,errors:sa}=Kb(D,$,sn,je,Je,Bn);Se&&D.errors&&(sa={...D.errors,...sa});let $o=nr(),In=rr(F),Mr=$o||In||Je.length>0;return{matches:$,loaderData:oa,errors:sa,...Mr?{fetchers:new Map(D.fetchers)}:{}}}function on(C){if(C&&!Mn(C[1]))return{[C[0]]:C[1].data};if(D.actionData)return Object.keys(D.actionData).length===0?null:D.actionData}function kl(C){return C.forEach(L=>{let $=D.fetchers.get(L.key),ne=qs(void 0,$?$.data:void 0);D.fetchers.set(L.key,ne)}),new Map(D.fetchers)}async function Qa(C,L,$,ne){Ht(C);let le=(ne&&ne.flushSync)===!0,xe=h||f,Ne=Lh(D.location,D.matches,m,$,L,ne?.relative),ge=La(xe,Ne,m),ke=ei(ge,xe,Ne);if(ke.active&&ke.matches&&(ge=ke.matches),!ge){Ce(C,L,Kn(404,{pathname:Ne}),{flushSync:le});return}let{path:Se,submission:Ue,error:je}=Hb(!0,Ne,ne);if(je){Ce(C,L,je,{flushSync:le});return}let Ie=Zs(ge,Se),et=new Bb(e.unstable_getContext?await e.unstable_getContext():void 0),yt=(ne&&ne.preventScrollReset)===!0;if(Ue&&Nn(Ue.formMethod)){await O(C,L,Se,Ie,ge,et,ke.active,le,yt,Ue);return}V.set(C,{routeId:L,path:Se}),await j(C,L,Se,Ie,ge,et,ke.active,le,yt,Ue)}async function O(C,L,$,ne,le,xe,Ne,ge,ke,Se){oe(),V.delete(C);function Ue(xt){if(!xt.route.action&&!xt.route.lazy){let la=Kn(405,{method:Se.formMethod,pathname:$,routeId:L});return Ce(C,L,la,{flushSync:ge}),!0}return!1}if(!Ne&&Ue(ne))return;let je=D.fetchers.get(C);pe(C,zE(Se,je),{flushSync:ge});let Ie=new AbortController,et=xo(e.history,$,Ie.signal,Se);if(Ne){let xt=await ti(le,$,et.signal,C);if(xt.type==="aborted")return;if(xt.type==="error"){Ce(C,L,xt.error,{flushSync:ge});return}else if(xt.matches){if(le=xt.matches,ne=Zs(le,$),Ue(ne))return}else{Ce(C,L,Kn(404,{pathname:$}),{flushSync:ge});return}}_.set(C,Ie);let yt=H,_t=Eo(l,c,et,le,ne,o,xe),Je=(await he(et,_t,xe,C))[ne.route.id];if(et.signal.aborted){_.get(C)===Ie&&_.delete(C);return}if(re.has(C)){if(Ei(Je)||Mn(Je)){pe(C,Na(void 0));return}}else{if(Ei(Je))if(_.delete(C),F>yt){pe(C,Na(void 0));return}else return E.add(C),pe(C,qs(Se)),X(et,Je,!1,{fetcherSubmission:Se,preventScrollReset:ke});if(Mn(Je)){Ce(C,L,Je.error);return}}let ia=D.navigation.location||D.location,sn=xo(e.history,ia,Ie.signal),Bn=h||f,mn=D.navigation.state!=="idle"?La(Bn,D.navigation.location,m):D.matches;Xe(mn,"Didn't find any matches after fetcher action");let oa=++H;se.set(C,oa);let sa=qs(Se,Je.data);D.fetchers.set(C,sa);let{dsMatches:$o,revalidatingFetchers:In}=qb(sn,xe,l,c,e.history,D,mn,Se,ia,o,!1,ie,te,re,V,E,Bn,m,e.patchRoutesOnNavigation!=null,[ne.route.id,Je]);In.filter(xt=>xt.key!==C).forEach(xt=>{let la=xt.key,Fo=D.fetchers.get(la),pn=qs(void 0,Fo?Fo.data:void 0);D.fetchers.set(la,pn),Ht(la),xt.controller&&_.set(la,xt.controller)}),$e({fetchers:new Map(D.fetchers)});let Mr=()=>In.forEach(xt=>Ht(xt.key));Ie.signal.addEventListener("abort",Mr);let{loaderResults:Ye,fetcherResults:Wt}=await de($o,In,sn,xe);if(Ie.signal.aborted)return;if(Ie.signal.removeEventListener("abort",Mr),se.delete(C),_.delete(C),In.forEach(xt=>_.delete(xt.key)),D.fetchers.has(C)){let xt=Na(Je.data);D.fetchers.set(C,xt)}let ir=Ic(Ye);if(ir)return X(sn,ir.result,!1,{preventScrollReset:ke});if(ir=Ic(Wt),ir)return E.add(ir.key),X(sn,ir.result,!1,{preventScrollReset:ke});let{loaderData:or,errors:ni}=Kb(D,mn,Ye,void 0,In,Wt);rr(oa),D.navigation.state==="loading"&&oa>F?(Xe(me,"Expected pending action"),ue&&ue.abort(),Ct(D.navigation.location,{matches:mn,loaderData:or,errors:ni,fetchers:new Map(D.fetchers)})):($e({errors:ni,loaderData:Zb(D.loaderData,or,mn,ni),fetchers:new Map(D.fetchers)}),ie=!1)}async function j(C,L,$,ne,le,xe,Ne,ge,ke,Se){let Ue=D.fetchers.get(C);pe(C,qs(Se,Ue?Ue.data:void 0),{flushSync:ge});let je=new AbortController,Ie=xo(e.history,$,je.signal);if(Ne){let Je=await ti(le,$,Ie.signal,C);if(Je.type==="aborted")return;if(Je.type==="error"){Ce(C,L,Je.error,{flushSync:ge});return}else if(Je.matches)le=Je.matches,ne=Zs(le,$);else{Ce(C,L,Kn(404,{pathname:$}),{flushSync:ge});return}}_.set(C,je);let et=H,yt=Eo(l,c,Ie,le,ne,o,xe),tt=(await he(Ie,yt,xe,C))[ne.route.id];if(_.get(C)===je&&_.delete(C),!Ie.signal.aborted){if(re.has(C)){pe(C,Na(void 0));return}if(Ei(tt))if(F>et){pe(C,Na(void 0));return}else{E.add(C),await X(Ie,tt,!1,{preventScrollReset:ke});return}if(Mn(tt)){Ce(C,L,tt.error);return}pe(C,Na(tt.data))}}async function X(C,L,$,{submission:ne,fetcherSubmission:le,preventScrollReset:xe,replace:Ne}={}){L.response.headers.has("X-Remix-Revalidate")&&(ie=!0);let ge=L.response.headers.get("Location");Xe(ge,"Expected a Location header on the redirect Response"),ge=Gb(ge,new URL(C.url),m);let ke=al(D.location,ge,{_isRedirect:!0});if(a){let yt=!1;if(L.response.headers.has("X-Remix-Reload-Document"))yt=!0;else if(im.test(ge)){const _t=Ry(ge,!0);yt=_t.origin!==t.location.origin||Jn(_t.pathname,m)==null}if(yt){Ne?t.location.replace(ge):t.location.assign(ge);return}}ue=null;let Se=Ne===!0||L.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Ue,formAction:je,formEncType:Ie}=D.navigation;!ne&&!le&&Ue&&je&&Ie&&(ne=ev(D.navigation));let et=ne||le;if(vE.has(L.response.status)&&et&&Nn(et.formMethod))await hn(Se,ke,{submission:{...et,formAction:ge},preventScrollReset:xe||_e,enableViewTransition:$?Re:void 0});else{let yt=bh(ke,ne);await hn(Se,ke,{overrideNavigation:yt,fetcherSubmission:le,preventScrollReset:xe||_e,enableViewTransition:$?Re:void 0})}}async function he(C,L,$,ne){let le,xe={};try{le=await OE(p,C,L,ne,$,!1)}catch(Ne){return L.filter(ge=>ge.shouldLoad).forEach(ge=>{xe[ge.route.id]={type:"error",error:Ne}}),xe}if(C.signal.aborted)return xe;for(let[Ne,ge]of Object.entries(le))if(NE(ge)){let ke=ge.result;xe[Ne]={type:"redirect",response:RE(ke,C,Ne,L,m)}}else xe[Ne]=await kE(ge);return xe}async function de(C,L,$,ne){let le=he($,C,ne,null),xe=Promise.all(L.map(async ke=>{if(ke.matches&&ke.match&&ke.request&&ke.controller){let Ue=(await he(ke.request,ke.matches,ne,ke.key))[ke.match.route.id];return{[ke.key]:Ue}}else return Promise.resolve({[ke.key]:{type:"error",error:Kn(404,{pathname:ke.path})}})})),Ne=await le,ge=(await xe).reduce((ke,Se)=>Object.assign(ke,Se),{});return{loaderResults:Ne,fetcherResults:ge}}function oe(){ie=!0,V.forEach((C,L)=>{_.has(L)&&te.add(L),Ht(L)})}function pe(C,L,$={}){D.fetchers.set(C,L),$e({fetchers:new Map(D.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Ce(C,L,$,ne={}){let le=xi(D.matches,L);ot(C),$e({errors:{[le.route.id]:$},fetchers:new Map(D.fetchers)},{flushSync:(ne&&ne.flushSync)===!0})}function Fe(C){return ae.set(C,(ae.get(C)||0)+1),re.has(C)&&re.delete(C),D.fetchers.get(C)||yE}function ot(C){let L=D.fetchers.get(C);_.has(C)&&!(L&&L.state==="loading"&&se.has(C))&&Ht(C),V.delete(C),se.delete(C),E.delete(C),re.delete(C),te.delete(C),D.fetchers.delete(C)}function aa(C){let L=(ae.get(C)||0)-1;L<=0?(ae.delete(C),re.add(C)):ae.set(C,L),$e({fetchers:new Map(D.fetchers)})}function Ht(C){let L=_.get(C);L&&(L.abort(),_.delete(C))}function zi(C){for(let L of C){let $=Fe(L),ne=Na($.data);D.fetchers.set(L,ne)}}function nr(){let C=[],L=!1;for(let $ of E){let ne=D.fetchers.get($);Xe(ne,`Expected fetcher: ${$}`),ne.state==="loading"&&(E.delete($),C.push($),L=!0)}return zi(C),L}function rr(C){let L=[];for(let[$,ne]of se)if(ne<C){let le=D.fetchers.get($);Xe(le,`Expected fetcher: ${$}`),le.state==="loading"&&(Ht($),se.delete($),L.push($))}return zi(L),L.length>0}function ar(C,L){let $=D.blockers.get(C)||Hs;return fe.get(C)!==L&&fe.set(C,L),$}function vr(C){D.blockers.delete(C),fe.delete(C)}function jn(C,L){let $=D.blockers.get(C)||Hs;Xe($.state==="unblocked"&&L.state==="blocked"||$.state==="blocked"&&L.state==="blocked"||$.state==="blocked"&&L.state==="proceeding"||$.state==="blocked"&&L.state==="unblocked"||$.state==="proceeding"&&L.state==="unblocked",`Invalid blocker state transition: ${$.state} -> ${L.state}`);let ne=new Map(D.blockers);ne.set(C,L),$e({blockers:ne})}function Ja({currentLocation:C,nextLocation:L,historyAction:$}){if(fe.size===0)return;fe.size>1&&Pt(!1,"A router only supports one blocker at a time");let ne=Array.from(fe.entries()),[le,xe]=ne[ne.length-1],Ne=D.blockers.get(le);if(!(Ne&&Ne.state==="proceeding")&&xe({currentLocation:C,nextLocation:L,historyAction:$}))return le}function Ui(C){let L=Kn(404,{pathname:C}),$=h||f,{matches:ne,route:le}=Jb($);return{notFoundMatches:ne,route:le,error:L}}function Rl(C,L,$){if(R=C,A=L,S=$||null,!N&&D.navigation===gh){N=!0;let ne=Dl(D.location,D.matches);ne!=null&&$e({restoreScrollPosition:ne})}return()=>{R=null,A=null,S=null}}function ji(C,L){return S&&S(C,L.map(ne=>Z5(ne,D.loaderData)))||C.key}function Wa(C,L){if(R&&A){let $=ji(C,L);R[$]=A()}}function Dl(C,L){if(R){let $=ji(C,L),ne=R[$];if(typeof ne=="number")return ne}return null}function ei(C,L,$){if(e.patchRoutesOnNavigation)if(C){if(Object.keys(C[0].params).length>0)return{active:!0,matches:Gc(L,$,m,!0)}}else return{active:!0,matches:Gc(L,$,m,!0)||[]};return{active:!1,matches:null}}async function ti(C,L,$,ne){if(!e.patchRoutesOnNavigation)return{type:"success",matches:C};let le=C;for(;;){let xe=h==null,Ne=h||f,ge=c;try{await e.patchRoutesOnNavigation({signal:$,path:L,matches:le,fetcherKey:ne,patch:(Ue,je)=>{$.aborted||Vb(Ue,je,Ne,ge,l)}})}catch(Ue){return{type:"error",error:Ue,partialMatches:le}}finally{xe&&!$.aborted&&(f=[...f])}if($.aborted)return{type:"aborted"};let ke=La(Ne,L,m);if(ke)return{type:"success",matches:ke};let Se=Gc(Ne,L,m,!0);if(!Se||le.length===Se.length&&le.every((Ue,je)=>Ue.route.id===Se[je].route.id))return{type:"success",matches:null};le=Se}}function qo(C){c={},h=ou(C,l,void 0,c)}function Vo(C,L){let $=h==null;Vb(C,L,h||f,c,l),$&&(f=[...f],$e({}))}return J={get basename(){return m},get future(){return b},get state(){return D},get routes(){return f},get window(){return t},initialize:ht,subscribe:Ot,enableScrollRestoration:Rl,navigate:an,fetch:Qa,revalidate:Un,createHref:C=>e.history.createHref(C),encodeLocation:C=>e.history.encodeLocation(C),getFetcher:Fe,deleteFetcher:aa,dispose:Qe,getBlocker:ar,deleteBlocker:vr,patchRoutes:Vo,_internalFetchControllers:_,_internalSetRoutes:qo},J}function EE(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Lh(e,t,a,o,l,c){let f,h;if(l){f=[];for(let p of t)if(f.push(p),p.route.id===l){h=p;break}}else f=t,h=t[t.length-1];let m=Pu(o||".",Lu(f),Jn(e.pathname,a)||e.pathname,c==="path");if(o==null&&(m.search=e.search,m.hash=e.hash),(o==null||o===""||o===".")&&h){let p=om(m.search);if(h.route.index&&!p)m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index";else if(!h.route.index&&p){let b=new URLSearchParams(m.search),x=b.getAll("index");b.delete("index"),x.filter(R=>R).forEach(R=>b.append("index",R));let y=b.toString();m.search=y?`?${y}`:""}}return a!=="/"&&(m.pathname=m.pathname==="/"?a:kr([a,m.pathname])),$a(m)}function Hb(e,t,a){if(!a||!EE(a))return{path:t};if(a.formMethod&&!LE(a.formMethod))return{path:t,error:Kn(405,{method:a.formMethod})};let o=()=>({path:t,error:Kn(400,{type:"invalid-body"})}),c=(a.formMethod||"get").toUpperCase(),f=qy(t);if(a.body!==void 0){if(a.formEncType==="text/plain"){if(!Nn(c))return o();let x=typeof a.body=="string"?a.body:a.body instanceof FormData||a.body instanceof URLSearchParams?Array.from(a.body.entries()).reduce((y,[R,S])=>`${y}${R}=${S}
`,""):String(a.body);return{path:t,submission:{formMethod:c,formAction:f,formEncType:a.formEncType,formData:void 0,json:void 0,text:x}}}else if(a.formEncType==="application/json"){if(!Nn(c))return o();try{let x=typeof a.body=="string"?JSON.parse(a.body):a.body;return{path:t,submission:{formMethod:c,formAction:f,formEncType:a.formEncType,formData:void 0,json:x,text:void 0}}}catch{return o()}}}Xe(typeof FormData=="function","FormData is not available in this environment");let h,m;if(a.formData)h=Uh(a.formData),m=a.formData;else if(a.body instanceof FormData)h=Uh(a.body),m=a.body;else if(a.body instanceof URLSearchParams)h=a.body,m=Xb(h);else if(a.body==null)h=new URLSearchParams,m=new FormData;else try{h=new URLSearchParams(a.body),m=Xb(h)}catch{return o()}let p={formMethod:c,formAction:f,formEncType:a&&a.formEncType||"application/x-www-form-urlencoded",formData:m,json:void 0,text:void 0};if(Nn(p.formMethod))return{path:t,submission:p};let b=Fa(t);return e&&b.search&&om(b.search)&&h.append("index",""),b.search=`?${h}`,{path:$a(b),submission:p}}function qb(e,t,a,o,l,c,f,h,m,p,b,x,y,R,S,A,N,z,Q,K){let ce=K?Mn(K[1])?K[1].error:K[1].data:void 0,J=l.createURL(c.location),D=l.createURL(m),me;if(b&&c.errors){let be=Object.keys(c.errors)[0];me=f.findIndex(ie=>ie.route.id===be)}else if(K&&Mn(K[1])){let be=K[0];me=f.findIndex(ie=>ie.route.id===be)-1}let _e=K?K[1].statusCode:void 0,ue=_e&&_e>=400,Re={currentUrl:J,currentParams:c.matches[0]?.params||{},nextUrl:D,nextParams:f[0].params,...h,actionResult:ce,actionStatus:_e},Ee=f.map((be,ie)=>{let{route:te}=be,_=null;if(me!=null&&ie>me?_=!1:te.lazy?_=!0:te.loader==null?_=!1:b?_=Ph(te,c.loaderData,c.errors):SE(c.loaderData,c.matches[ie],be)&&(_=!0),_!==null)return zh(a,o,e,be,p,t,_);let H=ue?!1:x||J.pathname+J.search===D.pathname+D.search||J.search!==D.search||_E(c.matches[ie],be),F={...Re,defaultShouldRevalidate:H},se=cu(be,F);return zh(a,o,e,be,p,t,se,F)}),we=[];return S.forEach((be,ie)=>{if(b||!f.some(ae=>ae.route.id===be.routeId)||R.has(ie))return;let te=c.fetchers.get(ie),_=te&&te.state!=="idle"&&te.data===void 0,H=La(N,be.path,z);if(!H){if(Q&&_)return;we.push({key:ie,routeId:be.routeId,path:be.path,matches:null,match:null,request:null,controller:null});return}if(A.has(ie))return;let F=Zs(H,be.path),se=new AbortController,E=xo(l,be.path,se.signal),V=null;if(y.has(ie))y.delete(ie),V=Eo(a,o,E,H,F,p,t);else if(_)x&&(V=Eo(a,o,E,H,F,p,t));else{let ae={...Re,defaultShouldRevalidate:ue?!1:x};cu(F,ae)&&(V=Eo(a,o,E,H,F,p,t,ae))}V&&we.push({key:ie,routeId:be.routeId,path:be.path,matches:V,match:F,request:E,controller:se})}),{dsMatches:Ee,revalidatingFetchers:we}}function Ph(e,t,a){if(e.lazy)return!0;if(!e.loader)return!1;let o=t!=null&&e.id in t,l=a!=null&&a[e.id]!==void 0;return!o&&l?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!o&&!l}function SE(e,t,a){let o=!t||a.route.id!==t.route.id,l=!e.hasOwnProperty(a.route.id);return o||l}function _E(e,t){let a=e.route.path;return e.pathname!==t.pathname||a!=null&&a.endsWith("*")&&e.params["*"]!==t.params["*"]}function cu(e,t){if(e.route.shouldRevalidate){let a=e.route.shouldRevalidate(t);if(typeof a=="boolean")return a}return t.defaultShouldRevalidate}function Vb(e,t,a,o,l){let c;if(e){let m=o[e];Xe(m,`No route found to patch children into: routeId = ${e}`),m.children||(m.children=[]),c=m.children}else c=a;let f=t.filter(m=>!c.some(p=>Uy(m,p))),h=ou(f,l,[e||"_","patch",String(c?.length||"0")],o);c.push(...h)}function Uy(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((a,o)=>t.children?.some(l=>Uy(a,l))):!1}var $b=new WeakMap,jy=({key:e,route:t,manifest:a,mapRouteProperties:o})=>{let l=a[t.id];if(Xe(l,"No route found in manifest"),!l.lazy||typeof l.lazy!="object")return;let c=l.lazy[e];if(!c)return;let f=$b.get(l);f||(f={},$b.set(l,f));let h=f[e];if(h)return h;let m=(async()=>{let p=Y5(e),x=l[e]!==void 0&&e!=="hasErrorBoundary";if(p)Pt(!p,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),f[e]=Promise.resolve();else if(x)Pt(!1,`Route "${l.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let y=await c();y!=null&&(Object.assign(l,{[e]:y}),Object.assign(l,o(l)))}typeof l.lazy=="object"&&(l.lazy[e]=void 0,Object.values(l.lazy).every(y=>y===void 0)&&(l.lazy=void 0))})();return f[e]=m,m},Fb=new WeakMap;function TE(e,t,a,o,l){let c=a[e.id];if(Xe(c,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let b=Fb.get(c);if(b)return{lazyRoutePromise:b,lazyHandlerPromise:b};let x=(async()=>{Xe(typeof e.lazy=="function","No lazy route function found");let y=await e.lazy(),R={};for(let S in y){let A=y[S];if(A===void 0)continue;let N=X5(S),Q=c[S]!==void 0&&S!=="hasErrorBoundary";N?Pt(!N,"Route property "+S+" is not a supported property to be returned from a lazy route function. This property will be ignored."):Q?Pt(!Q,`Route "${c.id}" has a static property "${S}" defined but its lazy function is also returning a value for this property. The lazy route property "${S}" will be ignored.`):R[S]=A}Object.assign(c,R),Object.assign(c,{...o(c),lazy:void 0})})();return Fb.set(c,x),x.catch(()=>{}),{lazyRoutePromise:x,lazyHandlerPromise:x}}let f=Object.keys(e.lazy),h=[],m;for(let b of f){if(l&&l.includes(b))continue;let x=jy({key:b,route:e,manifest:a,mapRouteProperties:o});x&&(h.push(x),b===t&&(m=x))}let p=h.length>0?Promise.all(h).then(()=>{}):void 0;return p?.catch(()=>{}),m?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:m}}async function Yb(e){let t=e.matches.filter(l=>l.shouldLoad),a={};return(await Promise.all(t.map(l=>l.resolve()))).forEach((l,c)=>{a[t[c].route.id]=l}),a}async function AE(e){return e.matches.some(t=>t.route.unstable_middleware)?By(e,!1,()=>Yb(e),(t,a)=>({[a]:{type:"error",result:t}})):Yb(e)}async function By(e,t,a,o){let{matches:l,request:c,params:f,context:h}=e,m={handlerResult:void 0};try{let p=l.flatMap(x=>x.route.unstable_middleware?x.route.unstable_middleware.map(y=>[x.route.id,y]):[]),b=await Iy({request:c,params:f,context:h},p,t,m,a);return t?b:m.handlerResult}catch(p){if(!m.middlewareError)throw p;let b=await o(m.middlewareError.error,m.middlewareError.routeId);return m.handlerResult?Object.assign(m.handlerResult,b):b}}async function Iy(e,t,a,o,l,c=0){let{request:f}=e;if(f.signal.aborted)throw f.signal.reason?f.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${f.method} ${f.url}`);let h=t[c];if(!h)return o.handlerResult=await l(),o.handlerResult;let[m,p]=h,b=!1,x,y=async()=>{if(b)throw new Error("You may only call `next()` once per middleware");b=!0,await Iy(e,t,a,o,l,c+1)};try{let R=await p({request:e.request,params:e.params,context:e.context},y);return b?R===void 0?x:R:y()}catch(R){throw o.middlewareError?o.middlewareError.error!==R&&(o.middlewareError={routeId:m,error:R}):o.middlewareError={routeId:m,error:R},R}}function Hy(e,t,a,o,l){let c=jy({key:"unstable_middleware",route:o.route,manifest:t,mapRouteProperties:e}),f=TE(o.route,Nn(a.method)?"action":"loader",t,e,l);return{middleware:c,route:f.lazyRoutePromise,handler:f.lazyHandlerPromise}}function zh(e,t,a,o,l,c,f,h=null){let m=!1,p=Hy(e,t,a,o,l);return{...o,_lazyPromises:p,shouldLoad:f,unstable_shouldRevalidateArgs:h,unstable_shouldCallHandler(b){return m=!0,h?typeof b=="boolean"?cu(o,{...h,defaultShouldRevalidate:b}):cu(o,h):f},resolve(b){return m||f||b&&a.method==="GET"&&(o.route.lazy||o.route.loader)?CE({request:a,match:o,lazyHandlerPromise:p?.handler,lazyRoutePromise:p?.route,handlerOverride:b,scopedContext:c}):Promise.resolve({type:"data",result:void 0})}}}function Eo(e,t,a,o,l,c,f,h=null){return o.map(m=>m.route.id!==l.route.id?{...m,shouldLoad:!1,unstable_shouldRevalidateArgs:h,unstable_shouldCallHandler:()=>!1,_lazyPromises:Hy(e,t,a,m,c),resolve:()=>Promise.resolve({type:"data",result:void 0})}:zh(e,t,a,m,c,f,!0,h))}async function OE(e,t,a,o,l,c){a.some(p=>p._lazyPromises?.middleware)&&await Promise.all(a.map(p=>p._lazyPromises?.middleware));let f={request:t,params:a[0].params,context:l,matches:a},m=await e({...f,fetcherKey:o,unstable_runClientMiddleware:p=>{let b=f;return By(b,!1,()=>p({...b,fetcherKey:o,unstable_runClientMiddleware:()=>{throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")}}),(x,y)=>({[y]:{type:"error",result:x}}))}});try{await Promise.all(a.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return m}async function CE({request:e,match:t,lazyHandlerPromise:a,lazyRoutePromise:o,handlerOverride:l,scopedContext:c}){let f,h,m=Nn(e.method),p=m?"action":"loader",b=x=>{let y,R=new Promise((N,z)=>y=z);h=()=>y(),e.signal.addEventListener("abort",h);let S=N=>typeof x!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${t.route.id}]`)):x({request:e,params:t.params,context:c},...N!==void 0?[N]:[]),A=(async()=>{try{return{type:"data",result:await(l?l(z=>S(z)):S())}}catch(N){return{type:"error",result:N}}})();return Promise.race([A,R])};try{let x=m?t.route.action:t.route.loader;if(a||o)if(x){let y,[R]=await Promise.all([b(x).catch(S=>{y=S}),a,o]);if(y!==void 0)throw y;f=R}else{await a;let y=m?t.route.action:t.route.loader;if(y)[f]=await Promise.all([b(y),o]);else if(p==="action"){let R=new URL(e.url),S=R.pathname+R.search;throw Kn(405,{method:e.method,pathname:S,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(x)f=await b(x);else{let y=new URL(e.url),R=y.pathname+y.search;throw Kn(404,{pathname:R})}}catch(x){return{type:"error",result:x}}finally{h&&e.signal.removeEventListener("abort",h)}return f}async function kE(e){let{result:t,type:a}=e;if(Vy(t)){let o;try{let l=t.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?t.body==null?o=null:o=await t.json():o=await t.text()}catch(l){return{type:"error",error:l}}return a==="error"?{type:"error",error:new lu(t.status,t.statusText,o),statusCode:t.status,headers:t.headers}:{type:"data",data:o,statusCode:t.status,headers:t.headers}}return a==="error"?Wb(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new lu(t.init?.status||500,void 0,t.data),statusCode:il(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:il(t)?t.status:void 0}:Wb(t)?{type:"data",data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function RE(e,t,a,o,l){let c=e.headers.get("Location");if(Xe(c,"Redirects returned/thrown from loaders/actions must have a Location header"),!im.test(c)){let f=o.slice(0,o.findIndex(h=>h.route.id===a)+1);c=Lh(new URL(t.url),f,l,c),e.headers.set("Location",c)}return e}function Gb(e,t,a){if(im.test(e)){let o=e,l=o.startsWith("//")?new URL(t.protocol+o):new URL(o),c=Jn(l.pathname,a)!=null;if(l.origin===t.origin&&c)return l.pathname+l.search+l.hash}return e}function xo(e,t,a,o){let l=e.createURL(qy(t)).toString(),c={signal:a};if(o&&Nn(o.formMethod)){let{formMethod:f,formEncType:h}=o;c.method=f.toUpperCase(),h==="application/json"?(c.headers=new Headers({"Content-Type":h}),c.body=JSON.stringify(o.json)):h==="text/plain"?c.body=o.text:h==="application/x-www-form-urlencoded"&&o.formData?c.body=Uh(o.formData):c.body=o.formData}return new Request(l,c)}function Uh(e){let t=new URLSearchParams;for(let[a,o]of e.entries())t.append(a,typeof o=="string"?o:o.name);return t}function Xb(e){let t=new FormData;for(let[a,o]of e.entries())t.append(a,o);return t}function DE(e,t,a,o=!1,l=!1){let c={},f=null,h,m=!1,p={},b=a&&Mn(a[1])?a[1].error:void 0;return e.forEach(x=>{if(!(x.route.id in t))return;let y=x.route.id,R=t[y];if(Xe(!Ei(R),"Cannot handle redirect results in processLoaderData"),Mn(R)){let S=R.error;if(b!==void 0&&(S=b,b=void 0),f=f||{},l)f[y]=S;else{let A=xi(e,y);f[A.route.id]==null&&(f[A.route.id]=S)}o||(c[y]=zy),m||(m=!0,h=il(R.error)?R.error.status:500),R.headers&&(p[y]=R.headers)}else c[y]=R.data,R.statusCode&&R.statusCode!==200&&!m&&(h=R.statusCode),R.headers&&(p[y]=R.headers)}),b!==void 0&&a&&(f={[a[0]]:b},a[2]&&(c[a[2]]=void 0)),{loaderData:c,errors:f,statusCode:h||200,loaderHeaders:p}}function Kb(e,t,a,o,l,c){let{loaderData:f,errors:h}=DE(t,a,o);return l.filter(m=>!m.matches||m.matches.some(p=>p.shouldLoad)).forEach(m=>{let{key:p,match:b,controller:x}=m,y=c[p];if(Xe(y,"Did not find corresponding fetcher result"),!(x&&x.signal.aborted))if(Mn(y)){let R=xi(e.matches,b?.route.id);h&&h[R.route.id]||(h={...h,[R.route.id]:y.error}),e.fetchers.delete(p)}else if(Ei(y))Xe(!1,"Unhandled fetcher revalidation redirect");else{let R=Na(y.data);e.fetchers.set(p,R)}}),{loaderData:f,errors:h}}function Zb(e,t,a,o){let l=Object.entries(t).filter(([,c])=>c!==zy).reduce((c,[f,h])=>(c[f]=h,c),{});for(let c of a){let f=c.route.id;if(!t.hasOwnProperty(f)&&e.hasOwnProperty(f)&&c.route.loader&&(l[f]=e[f]),o&&o.hasOwnProperty(f))break}return l}function Qb(e){return e?Mn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function xi(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function Jb(e){let t=e.length===1?e[0]:e.find(a=>a.index||!a.path||a.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Kn(e,{pathname:t,routeId:a,method:o,type:l,message:c}={}){let f="Unknown Server Error",h="Unknown @remix-run/router error";return e===400?(f="Bad Request",o&&t&&a?h=`You made a ${o} request to "${t}" but did not provide a \`loader\` for route "${a}", so there is no way to handle the request.`:l==="invalid-body"&&(h="Unable to encode submission body")):e===403?(f="Forbidden",h=`Route "${a}" does not match URL "${t}"`):e===404?(f="Not Found",h=`No route matches URL "${t}"`):e===405&&(f="Method Not Allowed",o&&t&&a?h=`You made a ${o.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${a}", so there is no way to handle the request.`:o&&(h=`Invalid request method "${o.toUpperCase()}"`)),new lu(e||500,f,new Error(h),!0)}function Ic(e){let t=Object.entries(e);for(let a=t.length-1;a>=0;a--){let[o,l]=t[a];if(Ei(l))return{key:o,result:l}}}function qy(e){let t=typeof e=="string"?Fa(e):e;return $a({...t,hash:""})}function ME(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function NE(e){return Vy(e.result)&&bE.has(e.result.status)}function Mn(e){return e.type==="error"}function Ei(e){return(e&&e.type)==="redirect"}function Wb(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Vy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function LE(e){return gE.has(e.toUpperCase())}function Nn(e){return mE.has(e.toUpperCase())}function om(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Zs(e,t){let a=typeof t=="string"?Fa(t).search:t.search;if(e[e.length-1].route.index&&om(a||""))return e[e.length-1];let o=Ny(e);return o[o.length-1]}function ev(e){let{formMethod:t,formAction:a,formEncType:o,text:l,formData:c,json:f}=e;if(!(!t||!a||!o)){if(l!=null)return{formMethod:t,formAction:a,formEncType:o,formData:void 0,json:void 0,text:l};if(c!=null)return{formMethod:t,formAction:a,formEncType:o,formData:c,json:void 0,text:void 0};if(f!==void 0)return{formMethod:t,formAction:a,formEncType:o,formData:void 0,json:f,text:void 0}}}function bh(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function PE(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function qs(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function zE(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Na(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function UE(e,t){try{let a=e.sessionStorage.getItem(Py);if(a){let o=JSON.parse(a);for(let[l,c]of Object.entries(o||{}))c&&Array.isArray(c)&&t.set(l,new Set(c||[]))}}catch{}}function jE(e,t){if(t.size>0){let a={};for(let[o,l]of t)a[o]=[...l];try{e.sessionStorage.setItem(Py,JSON.stringify(a))}catch(o){Pt(!1,`Failed to save applied view transitions in sessionStorage (${o}).`)}}}function BE(){let e,t,a=new Promise((o,l)=>{e=async c=>{o(c);try{await a}catch{}},t=async c=>{l(c);try{await a}catch{}}});return{promise:a,resolve:e,reject:t}}var Mi=I.createContext(null);Mi.displayName="DataRouter";var dl=I.createContext(null);dl.displayName="DataRouterState";var sm=I.createContext({isTransitioning:!1});sm.displayName="ViewTransition";var $y=I.createContext(new Map);$y.displayName="Fetchers";var IE=I.createContext(null);IE.displayName="Await";var gr=I.createContext(null);gr.displayName="Navigation";var zu=I.createContext(null);zu.displayName="Location";var tr=I.createContext({outlet:null,matches:[],isDataRoute:!1});tr.displayName="Route";var lm=I.createContext(null);lm.displayName="RouteError";function HE(e,{relative:t}={}){Xe(No(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:o}=I.useContext(gr),{hash:l,pathname:c,search:f}=fl(e,{relative:t}),h=c;return a!=="/"&&(h=c==="/"?a:kr([a,c])),o.createHref({pathname:h,search:f,hash:l})}function No(){return I.useContext(zu)!=null}function na(){return Xe(No(),"useLocation() may be used only in the context of a <Router> component."),I.useContext(zu).location}var Fy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yy(e){I.useContext(gr).static||I.useLayoutEffect(e)}function Uu(){let{isDataRoute:e}=I.useContext(tr);return e?rS():qE()}function qE(){Xe(No(),"useNavigate() may be used only in the context of a <Router> component.");let e=I.useContext(Mi),{basename:t,navigator:a}=I.useContext(gr),{matches:o}=I.useContext(tr),{pathname:l}=na(),c=JSON.stringify(Lu(o)),f=I.useRef(!1);return Yy(()=>{f.current=!0}),I.useCallback((m,p={})=>{if(Pt(f.current,Fy),!f.current)return;if(typeof m=="number"){a.go(m);return}let b=Pu(m,JSON.parse(c),l,p.relative==="path");e==null&&t!=="/"&&(b.pathname=b.pathname==="/"?t:kr([t,b.pathname])),(p.replace?a.replace:a.push)(b,p.state,p)},[t,a,c,l,e])}var VE=I.createContext(null);function $E(e){let t=I.useContext(tr).outlet;return t&&I.createElement(VE.Provider,{value:e},t)}function FE(){let{matches:e}=I.useContext(tr),t=e[e.length-1];return t?t.params:{}}function fl(e,{relative:t}={}){let{matches:a}=I.useContext(tr),{pathname:o}=na(),l=JSON.stringify(Lu(a));return I.useMemo(()=>Pu(e,JSON.parse(l),o,t==="path"),[e,l,o,t])}function YE(e,t,a,o){Xe(No(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=I.useContext(gr),{matches:c}=I.useContext(tr),f=c[c.length-1],h=f?f.params:{},m=f?f.pathname:"/",p=f?f.pathnameBase:"/",b=f&&f.route;{let z=b&&b.path||"";Gy(m,!b||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let x=na(),y;y=x;let R=y.pathname||"/",S=R;if(p!=="/"){let z=p.replace(/^\//,"").split("/");S="/"+R.replace(/^\//,"").split("/").slice(z.length).join("/")}let A=La(e,{pathname:S});return Pt(b||A!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Pt(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),QE(A&&A.map(z=>Object.assign({},z,{params:Object.assign({},h,z.params),pathname:kr([p,l.encodeLocation?l.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?p:kr([p,l.encodeLocation?l.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),c,a,o)}function GE(){let e=nS(),t=il(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",e),f=I.createElement(I.Fragment,null,I.createElement("p",null,"💿 Hey developer 👋"),I.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",I.createElement("code",{style:c},"ErrorBoundary")," or"," ",I.createElement("code",{style:c},"errorElement")," prop on your route.")),I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),a?I.createElement("pre",{style:l},a):null,f)}var XE=I.createElement(GE,null),KE=class extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?I.createElement(tr.Provider,{value:this.props.routeContext},I.createElement(lm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ZE({routeContext:e,match:t,children:a}){let o=I.useContext(Mi);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),I.createElement(tr.Provider,{value:e},a)}function QE(e,t=[],a=null,o=null){if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let l=e,c=a?.errors;if(c!=null){let m=l.findIndex(p=>p.route.id&&c?.[p.route.id]!==void 0);Xe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,h=-1;if(a)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=m),p.route.id){let{loaderData:b,errors:x}=a,y=p.route.loader&&!b.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||y){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((m,p,b)=>{let x,y=!1,R=null,S=null;a&&(x=c&&p.route.id?c[p.route.id]:void 0,R=p.route.errorElement||XE,f&&(h<0&&b===0?(Gy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,S=null):h===b&&(y=!0,S=p.route.hydrateFallbackElement||null)));let A=t.concat(l.slice(0,b+1)),N=()=>{let z;return x?z=R:y?z=S:p.route.Component?z=I.createElement(p.route.Component,null):p.route.element?z=p.route.element:z=m,I.createElement(ZE,{match:p,routeContext:{outlet:m,matches:A,isDataRoute:a!=null},children:z})};return a&&(p.route.ErrorBoundary||p.route.errorElement||b===0)?I.createElement(KE,{location:a.location,revalidation:a.revalidation,component:R,error:x,children:N(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):N()},null)}function cm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JE(e){let t=I.useContext(Mi);return Xe(t,cm(e)),t}function WE(e){let t=I.useContext(dl);return Xe(t,cm(e)),t}function eS(e){let t=I.useContext(tr);return Xe(t,cm(e)),t}function um(e){let t=eS(e),a=t.matches[t.matches.length-1];return Xe(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function tS(){return um("useRouteId")}function nS(){let e=I.useContext(lm),t=WE("useRouteError"),a=um("useRouteError");return e!==void 0?e:t.errors?.[a]}function rS(){let{router:e}=JE("useNavigate"),t=um("useNavigate"),a=I.useRef(!1);return Yy(()=>{a.current=!0}),I.useCallback(async(l,c={})=>{Pt(a.current,Fy),a.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:t,...c}))},[e,t])}var tv={};function Gy(e,t,a){!t&&!tv[e]&&(tv[e]=!0,Pt(!1,a))}var nv={};function rv(e,t){!e&&!nv[t]&&(nv[t]=!0,console.warn(t))}function aS(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&Pt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:I.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&Pt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:I.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&Pt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:I.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var iS=["HydrateFallback","hydrateFallbackElement"],oS=class{constructor(){this.status="pending",this.promise=new Promise((t,a)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",a(o))}})}};function sS({router:e,flushSync:t}){let[a,o]=I.useState(e.state),[l,c]=I.useState(),[f,h]=I.useState({isTransitioning:!1}),[m,p]=I.useState(),[b,x]=I.useState(),[y,R]=I.useState(),S=I.useRef(new Map),A=I.useCallback((K,{deletedFetchers:ce,flushSync:J,viewTransitionOpts:D})=>{K.fetchers.forEach((_e,ue)=>{_e.data!==void 0&&S.current.set(ue,_e.data)}),ce.forEach(_e=>S.current.delete(_e)),rv(J===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let me=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(rv(D==null||me,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!D||!me){t&&J?t(()=>o(K)):I.startTransition(()=>o(K));return}if(t&&J){t(()=>{b&&(m&&m.resolve(),b.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:D.currentLocation,nextLocation:D.nextLocation})});let _e=e.window.document.startViewTransition(()=>{t(()=>o(K))});_e.finished.finally(()=>{t(()=>{p(void 0),x(void 0),c(void 0),h({isTransitioning:!1})})}),t(()=>x(_e));return}b?(m&&m.resolve(),b.skipTransition(),R({state:K,currentLocation:D.currentLocation,nextLocation:D.nextLocation})):(c(K),h({isTransitioning:!0,flushSync:!1,currentLocation:D.currentLocation,nextLocation:D.nextLocation}))},[e.window,t,b,m]);I.useLayoutEffect(()=>e.subscribe(A),[e,A]),I.useEffect(()=>{f.isTransitioning&&!f.flushSync&&p(new oS)},[f]),I.useEffect(()=>{if(m&&l&&e.window){let K=l,ce=m.promise,J=e.window.document.startViewTransition(async()=>{I.startTransition(()=>o(K)),await ce});J.finished.finally(()=>{p(void 0),x(void 0),c(void 0),h({isTransitioning:!1})}),x(J)}},[l,m,e.window]),I.useEffect(()=>{m&&l&&a.location.key===l.location.key&&m.resolve()},[m,b,a.location,l]),I.useEffect(()=>{!f.isTransitioning&&y&&(c(y.state),h({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),R(void 0))},[f.isTransitioning,y]);let N=I.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:K=>e.navigate(K),push:(K,ce,J)=>e.navigate(K,{state:ce,preventScrollReset:J?.preventScrollReset}),replace:(K,ce,J)=>e.navigate(K,{replace:!0,state:ce,preventScrollReset:J?.preventScrollReset})}),[e]),z=e.basename||"/",Q=I.useMemo(()=>({router:e,navigator:N,static:!1,basename:z}),[e,N,z]);return I.createElement(I.Fragment,null,I.createElement(Mi.Provider,{value:Q},I.createElement(dl.Provider,{value:a},I.createElement($y.Provider,{value:S.current},I.createElement(sm.Provider,{value:f},I.createElement(fS,{basename:z,location:a.location,navigationType:a.historyAction,navigator:N},I.createElement(lS,{routes:e.routes,future:e.future,state:a})))))),null)}var lS=I.memo(cS);function cS({routes:e,future:t,state:a}){return YE(e,void 0,a,t)}function uS({to:e,replace:t,state:a,relative:o}){Xe(No(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=I.useContext(gr);Pt(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=I.useContext(tr),{pathname:f}=na(),h=Uu(),m=Pu(e,Lu(c),f,o==="path"),p=JSON.stringify(m);return I.useEffect(()=>{h(JSON.parse(p),{replace:t,state:a,relative:o})},[h,p,o,t,a]),null}function dS(e){return $E(e.context)}function fS({basename:e="/",children:t=null,location:a,navigationType:o="POP",navigator:l,static:c=!1}){Xe(!No(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),h=I.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof a=="string"&&(a=Fa(a));let{pathname:m="/",search:p="",hash:b="",state:x=null,key:y="default"}=a,R=I.useMemo(()=>{let S=Jn(m,f);return S==null?null:{location:{pathname:S,search:p,hash:b,state:x,key:y},navigationType:o}},[f,m,p,b,x,y,o]);return Pt(R!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${b}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:I.createElement(gr.Provider,{value:h},I.createElement(zu.Provider,{children:t,value:R}))}var Xc="get",Kc="application/x-www-form-urlencoded";function ju(e){return e!=null&&typeof e.tagName=="string"}function hS(e){return ju(e)&&e.tagName.toLowerCase()==="button"}function mS(e){return ju(e)&&e.tagName.toLowerCase()==="form"}function pS(e){return ju(e)&&e.tagName.toLowerCase()==="input"}function gS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bS(e,t){return e.button===0&&(!t||t==="_self")&&!gS(e)}var Hc=null;function vS(){if(Hc===null)try{new FormData(document.createElement("form"),0),Hc=!1}catch{Hc=!0}return Hc}var yS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vh(e){return e!=null&&!yS.has(e)?(Pt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kc}"`),null):e}function wS(e,t){let a,o,l,c,f;if(mS(e)){let h=e.getAttribute("action");o=h?Jn(h,t):null,a=e.getAttribute("method")||Xc,l=vh(e.getAttribute("enctype"))||Kc,c=new FormData(e)}else if(hS(e)||pS(e)&&(e.type==="submit"||e.type==="image")){let h=e.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=e.getAttribute("formaction")||h.getAttribute("action");if(o=m?Jn(m,t):null,a=e.getAttribute("formmethod")||h.getAttribute("method")||Xc,l=vh(e.getAttribute("formenctype"))||vh(h.getAttribute("enctype"))||Kc,c=new FormData(h,e),!vS()){let{name:p,type:b,value:x}=e;if(b==="image"){let y=p?`${p}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else p&&c.append(p,x)}}else{if(ju(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Xc,o=null,l=Kc,f=e}return c&&l==="text/plain"&&(f=c,c=void 0),{action:o,method:a.toLowerCase(),encType:l,formData:c,body:f}}function dm(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function xS(e,t){if(e.id in t)return t[e.id];try{let a=await import(e.module);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ES(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function SS(e,t,a){let o=await Promise.all(e.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await xS(c,a);return f.links?f.links():[]}return[]}));return OS(o.flat(1).filter(ES).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function av(e,t,a,o,l,c){let f=(m,p)=>a[p]?m.route.id!==a[p].route.id:!0,h=(m,p)=>a[p].pathname!==m.pathname||a[p].route.path?.endsWith("*")&&a[p].params["*"]!==m.params["*"];return c==="assets"?t.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?t.filter((m,p)=>{let b=o.routes[m.route.id];if(!b||!b.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function _S(e,t,{includeHydrateFallback:a}={}){return TS(e.map(o=>{let l=t.routes[o.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),a&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function TS(e){return[...new Set(e)]}function AS(e){let t={},a=Object.keys(e).sort();for(let o of a)t[o]=e[o];return t}function OS(e,t){let a=new Set;return new Set(t),e.reduce((o,l)=>{let c=JSON.stringify(AS(l));return a.has(c)||(a.add(c),o.push({key:c,link:l})),o},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var CS=new Set([100,101,204,205]);function kS(e,t){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname==="/"?a.pathname="_root.data":t&&Jn(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.data`:a.pathname=`${a.pathname.replace(/\/$/,"")}.data`,a}function Xy(){let e=I.useContext(Mi);return dm(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function RS(){let e=I.useContext(dl);return dm(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var fm=I.createContext(void 0);fm.displayName="FrameworkContext";function Ky(){let e=I.useContext(fm);return dm(e,"You must render this element inside a <HydratedRouter> element"),e}function DS(e,t){let a=I.useContext(fm),[o,l]=I.useState(!1),[c,f]=I.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:b,onTouchStart:x}=t,y=I.useRef(null);I.useEffect(()=>{if(e==="render"&&f(!0),e==="viewport"){let A=z=>{z.forEach(Q=>{f(Q.isIntersecting)})},N=new IntersectionObserver(A,{threshold:.5});return y.current&&N.observe(y.current),()=>{N.disconnect()}}},[e]),I.useEffect(()=>{if(o){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[o]);let R=()=>{l(!0)},S=()=>{l(!1),f(!1)};return a?e!=="intent"?[c,y,{}]:[c,y,{onFocus:Vs(h,R),onBlur:Vs(m,S),onMouseEnter:Vs(p,R),onMouseLeave:Vs(b,S),onTouchStart:Vs(x,R)}]:[!1,y,{}]}function Vs(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function MS({page:e,...t}){let{router:a}=Xy(),o=I.useMemo(()=>La(a.routes,e,a.basename),[a.routes,e,a.basename]);return o?I.createElement(LS,{page:e,matches:o,...t}):null}function NS(e){let{manifest:t,routeModules:a}=Ky(),[o,l]=I.useState([]);return I.useEffect(()=>{let c=!1;return SS(e,t,a).then(f=>{c||l(f)}),()=>{c=!0}},[e,t,a]),o}function LS({page:e,matches:t,...a}){let o=na(),{manifest:l,routeModules:c}=Ky(),{basename:f}=Xy(),{loaderData:h,matches:m}=RS(),p=I.useMemo(()=>av(e,t,m,l,o,"data"),[e,t,m,l,o]),b=I.useMemo(()=>av(e,t,m,l,o,"assets"),[e,t,m,l,o]),x=I.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let S=new Set,A=!1;if(t.forEach(z=>{let Q=l.routes[z.route.id];!Q||!Q.hasLoader||(!p.some(K=>K.route.id===z.route.id)&&z.route.id in h&&c[z.route.id]?.shouldRevalidate||Q.hasClientLoader?A=!0:S.add(z.route.id))}),S.size===0)return[];let N=kS(e,f);return A&&S.size>0&&N.searchParams.set("_routes",t.filter(z=>S.has(z.route.id)).map(z=>z.route.id).join(",")),[N.pathname+N.search]},[f,h,o,l,p,t,e,c]),y=I.useMemo(()=>_S(b,l),[b,l]),R=NS(b);return I.createElement(I.Fragment,null,x.map(S=>I.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...a})),y.map(S=>I.createElement("link",{key:S,rel:"modulepreload",href:S,...a})),R.map(({key:S,link:A})=>I.createElement("link",{key:S,...A})))}function PS(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var Zy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Zy&&(window.__reactRouterVersion="7.6.3")}catch{}function zS(e,t){return xE({basename:t?.basename,unstable_getContext:t?.unstable_getContext,future:t?.future,history:q5({window:t?.window}),hydrationData:US(),routes:e,mapRouteProperties:aS,hydrationRouteProperties:iS,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window}).initialize()}function US(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:jS(e.errors)}),e}function jS(e){if(!e)return null;let t=Object.entries(e),a={};for(let[o,l]of t)if(l&&l.__type==="RouteErrorResponse")a[o]=new lu(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let c=window[l.__subType];if(typeof c=="function")try{let f=new c(l.message);f.stack="",a[o]=f}catch{}}if(a[o]==null){let c=new Error(l.message);c.stack="",a[o]=c}}else a[o]=l;return a}var Qy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ha=I.forwardRef(function({onClick:t,discover:a="render",prefetch:o="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:b,viewTransition:x,...y},R){let{basename:S}=I.useContext(gr),A=typeof p=="string"&&Qy.test(p),N,z=!1;if(typeof p=="string"&&A&&(N=p,Zy))try{let ue=new URL(window.location.href),Re=p.startsWith("//")?new URL(ue.protocol+p):new URL(p),Ee=Jn(Re.pathname,S);Re.origin===ue.origin&&Ee!=null?p=Ee+Re.search+Re.hash:z=!0}catch{Pt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Q=HE(p,{relative:l}),[K,ce,J]=DS(o,y),D=HS(p,{replace:f,state:h,target:m,preventScrollReset:b,relative:l,viewTransition:x});function me(ue){t&&t(ue),ue.defaultPrevented||D(ue)}let _e=I.createElement("a",{...y,...J,href:N||Q,onClick:z||c?t:me,ref:PS(R,ce),target:m,"data-discover":!A&&a==="render"?"true":void 0});return K&&!A?I.createElement(I.Fragment,null,_e,I.createElement(MS,{page:Q})):_e});Ha.displayName="Link";var Jy=I.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:o="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},b){let x=fl(f,{relative:p.relative}),y=na(),R=I.useContext(dl),{navigator:S,basename:A}=I.useContext(gr),N=R!=null&&YS(x)&&h===!0,z=S.encodeLocation?S.encodeLocation(x).pathname:x.pathname,Q=y.pathname,K=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;a||(Q=Q.toLowerCase(),K=K?K.toLowerCase():null,z=z.toLowerCase()),K&&A&&(K=Jn(K,A)||K);const ce=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let J=Q===z||!l&&Q.startsWith(z)&&Q.charAt(ce)==="/",D=K!=null&&(K===z||!l&&K.startsWith(z)&&K.charAt(z.length)==="/"),me={isActive:J,isPending:D,isTransitioning:N},_e=J?t:void 0,ue;typeof o=="function"?ue=o(me):ue=[o,J?"active":null,D?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let Re=typeof c=="function"?c(me):c;return I.createElement(Ha,{...p,"aria-current":_e,className:ue,ref:b,style:Re,to:f,viewTransition:h},typeof m=="function"?m(me):m)});Jy.displayName="NavLink";var BS=I.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:o,replace:l,state:c,method:f=Xc,action:h,onSubmit:m,relative:p,preventScrollReset:b,viewTransition:x,...y},R)=>{let S=$S(),A=FS(h,{relative:p}),N=f.toLowerCase()==="get"?"get":"post",z=typeof h=="string"&&Qy.test(h),Q=K=>{if(m&&m(K),K.defaultPrevented)return;K.preventDefault();let ce=K.nativeEvent.submitter,J=ce?.getAttribute("formmethod")||f;S(ce||K.currentTarget,{fetcherKey:t,method:J,navigate:a,replace:l,state:c,relative:p,preventScrollReset:b,viewTransition:x})};return I.createElement("form",{ref:R,method:N,action:A,onSubmit:o?m:Q,...y,"data-discover":!z&&e==="render"?"true":void 0})});BS.displayName="Form";function IS(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wy(e){let t=I.useContext(Mi);return Xe(t,IS(e)),t}function HS(e,{target:t,replace:a,state:o,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=Uu(),m=na(),p=fl(e,{relative:c});return I.useCallback(b=>{if(bS(b,t)){b.preventDefault();let x=a!==void 0?a:$a(m)===$a(p);h(e,{replace:x,state:o,preventScrollReset:l,relative:c,viewTransition:f})}},[m,h,p,a,o,t,e,l,c,f])}var qS=0,VS=()=>`__${String(++qS)}__`;function $S(){let{router:e}=Wy("useSubmit"),{basename:t}=I.useContext(gr),a=tS();return I.useCallback(async(o,l={})=>{let{action:c,method:f,encType:h,formData:m,body:p}=wS(o,t);if(l.navigate===!1){let b=l.fetcherKey||VS();await e.fetch(b,a,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await e.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:a,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,t,a])}function FS(e,{relative:t}={}){let{basename:a}=I.useContext(gr),o=I.useContext(tr);Xe(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),c={...fl(e||".",{relative:t})},f=na();if(e==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(b=>b==="")){h.delete("index"),m.filter(x=>x).forEach(x=>h.append("index",x));let b=h.toString();c.search=b?`?${b}`:""}}return(!e||e===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(c.pathname=c.pathname==="/"?a:kr([a,c.pathname])),$a(c)}function YS(e,t={}){let a=I.useContext(sm);Xe(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Wy("useViewTransitionState"),l=fl(e,{relative:t.relative});if(!a.isTransitioning)return!1;let c=Jn(a.currentLocation.pathname,o)||a.currentLocation.pathname,f=Jn(a.nextLocation.pathname,o)||a.nextLocation.pathname;return su(l.pathname,f)!=null||su(l.pathname,c)!=null}[...CS];var GS=Cy();/**
 * react-router v7.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function XS(e){return I.createElement(sS,{flushSync:GS.flushSync,...e})}const KS=()=>{};var iv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=function(e){const t=[];let a=0;for(let o=0;o<e.length;o++){let l=e.charCodeAt(o);l<128?t[a++]=l:l<2048?(t[a++]=l>>6|192,t[a++]=l&63|128):(l&64512)===55296&&o+1<e.length&&(e.charCodeAt(o+1)&64512)===56320?(l=65536+((l&1023)<<10)+(e.charCodeAt(++o)&1023),t[a++]=l>>18|240,t[a++]=l>>12&63|128,t[a++]=l>>6&63|128,t[a++]=l&63|128):(t[a++]=l>>12|224,t[a++]=l>>6&63|128,t[a++]=l&63|128)}return t},ZS=function(e){const t=[];let a=0,o=0;for(;a<e.length;){const l=e[a++];if(l<128)t[o++]=String.fromCharCode(l);else if(l>191&&l<224){const c=e[a++];t[o++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=e[a++],f=e[a++],h=e[a++],m=((l&7)<<18|(c&63)<<12|(f&63)<<6|h&63)-65536;t[o++]=String.fromCharCode(55296+(m>>10)),t[o++]=String.fromCharCode(56320+(m&1023))}else{const c=e[a++],f=e[a++];t[o++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return t.join("")},t1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let l=0;l<e.length;l+=3){const c=e[l],f=l+1<e.length,h=f?e[l+1]:0,m=l+2<e.length,p=m?e[l+2]:0,b=c>>2,x=(c&3)<<4|h>>4;let y=(h&15)<<2|p>>6,R=p&63;m||(R=64,f||(y=64)),o.push(a[b],a[x],a[y],a[R])}return o.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(e1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ZS(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const a=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let l=0;l<e.length;){const c=a[e.charAt(l++)],h=l<e.length?a[e.charAt(l)]:0;++l;const p=l<e.length?a[e.charAt(l)]:64;++l;const x=l<e.length?a[e.charAt(l)]:64;if(++l,c==null||h==null||p==null||x==null)throw new QS;const y=c<<2|h>>4;if(o.push(y),p!==64){const R=h<<4&240|p>>2;if(o.push(R),x!==64){const S=p<<6&192|x;o.push(S)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class QS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JS=function(e){const t=e1(e);return t1.encodeByteArray(t,!0)},n1=function(e){return JS(e).replace(/\./g,"")},r1=function(e){try{return t1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e4=()=>WS().__FIREBASE_DEFAULTS__,t4=()=>{if(typeof process>"u"||typeof iv>"u")return;const e=iv.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},n4=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&r1(e[1]);return t&&JSON.parse(t)},hm=()=>{try{return KS()||e4()||t4()||n4()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},r4=e=>{var t,a;return(a=(t=hm())===null||t===void 0?void 0:t.emulatorHosts)===null||a===void 0?void 0:a[e]},a1=()=>{var e;return(e=hm())===null||e===void 0?void 0:e.config},i1=e=>{var t;return(t=hm())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,a)=>{this.resolve=t,this.reject=a})}wrapCallback(t){return(a,o)=>{a?this.reject(a):this.resolve(o),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(a):t(a,o))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(e){return e.endsWith(".cloudworkstations.dev")}async function i4(e){return(await fetch(e,{credentials:"include"})).ok}const el={};function o4(){const e={prod:[],emulator:[]};for(const t of Object.keys(el))el[t]?e.emulator.push(t):e.prod.push(t);return e}function s4(e){let t=document.getElementById(e),a=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),a=!0),{created:a,element:t}}let ov=!1;function l4(e,t){if(typeof window>"u"||typeof document>"u"||!Bu(window.location.host)||el[e]===t||el[e]||ov)return;el[e]=t;function a(y){return`__firebase__banner__${y}`}const o="__firebase__banner",c=o4().prod.length>0;function f(){const y=document.getElementById(o);y&&y.remove()}function h(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function m(y,R){y.setAttribute("width","24"),y.setAttribute("id",R),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function p(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{ov=!0,f()},y}function b(y,R){y.setAttribute("id",R),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function x(){const y=s4(o),R=a("text"),S=document.getElementById(R)||document.createElement("span"),A=a("learnmore"),N=document.getElementById(A)||document.createElement("a"),z=a("preprendIcon"),Q=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const K=y.element;h(K),b(N,A);const ce=p();m(Q,z),K.append(Q,S,N,ce),document.body.appendChild(K)}c?(S.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c4(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(un())}function u4(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function d4(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function f4(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h4(){const e=un();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m4(){try{return typeof indexedDB=="object"}catch{return!1}}function p4(){return new Promise((e,t)=>{try{let a=!0;const o="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(o);l.onsuccess=()=>{l.result.close(),a||self.indexedDB.deleteDatabase(o),e(!0)},l.onupgradeneeded=()=>{a=!1},l.onerror=()=>{var c;t(((c=l.error)===null||c===void 0?void 0:c.message)||"")}}catch(a){t(a)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4="FirebaseError";class Ya extends Error{constructor(t,a,o){super(a),this.code=t,this.customData=o,this.name=g4,Object.setPrototypeOf(this,Ya.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hl.prototype.create)}}class hl{constructor(t,a,o){this.service=t,this.serviceName=a,this.errors=o}create(t,...a){const o=a[0]||{},l=`${this.service}/${t}`,c=this.errors[t],f=c?b4(c,o):"Error",h=`${this.serviceName}: ${f} (${l}).`;return new Ya(l,h,o)}}function b4(e,t){return e.replace(v4,(a,o)=>{const l=t[o];return l!=null?String(l):`<${o}?>`})}const v4=/\{\$([^}]+)}/g;function y4(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ko(e,t){if(e===t)return!0;const a=Object.keys(e),o=Object.keys(t);for(const l of a){if(!o.includes(l))return!1;const c=e[l],f=t[l];if(sv(c)&&sv(f)){if(!ko(c,f))return!1}else if(c!==f)return!1}for(const l of o)if(!a.includes(l))return!1;return!0}function sv(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(e){const t=[];for(const[a,o]of Object.entries(e))Array.isArray(o)?o.forEach(l=>{t.push(encodeURIComponent(a)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(a)+"="+encodeURIComponent(o));return t.length?"&"+t.join("&"):""}function Qs(e){const t={};return e.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[l,c]=o.split("=");t[decodeURIComponent(l)]=decodeURIComponent(c)}}),t}function Js(e){const t=e.indexOf("?");if(!t)return"";const a=e.indexOf("#",t);return e.substring(t,a>0?a:void 0)}function w4(e,t){const a=new x4(e,t);return a.subscribe.bind(a)}class x4{constructor(t,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{t(this)}).catch(o=>{this.error(o)})}next(t){this.forEachObserver(a=>{a.next(t)})}error(t){this.forEachObserver(a=>{a.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,a,o){let l;if(t===void 0&&a===void 0&&o===void 0)throw new Error("Missing Observer.");E4(t,["next","error","complete"])?l=t:l={next:t,error:a,complete:o},l.next===void 0&&(l.next=yh),l.error===void 0&&(l.error=yh),l.complete===void 0&&(l.complete=yh);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,t)}sendOne(t,a){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{a(this.observers[t])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E4(e,t){if(typeof e!="object"||e===null)return!1;for(const a of t)if(a in e&&typeof e[a]=="function")return!0;return!1}function yh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e){return e&&e._delegate?e._delegate:e}class Ro{constructor(t,a,o){this.name=t,this.instanceFactory=a,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(t,a){this.name=t,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const a=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(a)){const o=new a4;if(this.instancesDeferred.set(a,o),this.isInitialized(a)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:a});l&&o.resolve(l)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(t){var a;const o=this.normalizeInstanceIdentifier(t?.identifier),l=(a=t?.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(c){if(l)return null;throw c}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(T4(t))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[a,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(a);try{const c=this.getOrInitializeService({instanceIdentifier:l});o.resolve(c)}catch{}}}}clearInstance(t=wi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...t.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=wi){return this.instances.has(t)}getOptions(t=wi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:a={}}=t,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:o,options:a});for(const[c,f]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(c);o===h&&f.resolve(l)}return l}onInit(t,a){var o;const l=this.normalizeInstanceIdentifier(a),c=(o=this.onInitCallbacks.get(l))!==null&&o!==void 0?o:new Set;c.add(t),this.onInitCallbacks.set(l,c);const f=this.instances.get(l);return f&&t(f,l),()=>{c.delete(t)}}invokeOnInitCallbacks(t,a){const o=this.onInitCallbacks.get(a);if(o)for(const l of o)try{l(t,a)}catch{}}getOrInitializeService({instanceIdentifier:t,options:a={}}){let o=this.instances.get(t);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:_4(t),options:a}),this.instances.set(t,o),this.instancesOptions.set(t,a),this.invokeOnInitCallbacks(o,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,o)}catch{}return o||null}normalizeInstanceIdentifier(t=wi){return this.component?this.component.multipleInstances?t:wi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _4(e){return e===wi?void 0:e}function T4(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const a=this.getProvider(t.name);if(a.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);a.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const a=new S4(t,this);return this.providers.set(t,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(pt||(pt={}));const O4={debug:pt.DEBUG,verbose:pt.VERBOSE,info:pt.INFO,warn:pt.WARN,error:pt.ERROR,silent:pt.SILENT},C4=pt.INFO,k4={[pt.DEBUG]:"log",[pt.VERBOSE]:"log",[pt.INFO]:"info",[pt.WARN]:"warn",[pt.ERROR]:"error"},R4=(e,t,...a)=>{if(t<e.logLevel)return;const o=new Date().toISOString(),l=k4[t];if(l)console[l](`[${o}]  ${e.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class o1{constructor(t){this.name=t,this._logLevel=C4,this._logHandler=R4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in pt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?O4[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,pt.DEBUG,...t),this._logHandler(this,pt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,pt.VERBOSE,...t),this._logHandler(this,pt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,pt.INFO,...t),this._logHandler(this,pt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,pt.WARN,...t),this._logHandler(this,pt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,pt.ERROR,...t),this._logHandler(this,pt.ERROR,...t)}}const D4=(e,t)=>t.some(a=>e instanceof a);let lv,cv;function M4(){return lv||(lv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function N4(){return cv||(cv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const s1=new WeakMap,jh=new WeakMap,l1=new WeakMap,wh=new WeakMap,mm=new WeakMap;function L4(e){const t=new Promise((a,o)=>{const l=()=>{e.removeEventListener("success",c),e.removeEventListener("error",f)},c=()=>{a(qa(e.result)),l()},f=()=>{o(e.error),l()};e.addEventListener("success",c),e.addEventListener("error",f)});return t.then(a=>{a instanceof IDBCursor&&s1.set(a,e)}).catch(()=>{}),mm.set(t,e),t}function P4(e){if(jh.has(e))return;const t=new Promise((a,o)=>{const l=()=>{e.removeEventListener("complete",c),e.removeEventListener("error",f),e.removeEventListener("abort",f)},c=()=>{a(),l()},f=()=>{o(e.error||new DOMException("AbortError","AbortError")),l()};e.addEventListener("complete",c),e.addEventListener("error",f),e.addEventListener("abort",f)});jh.set(e,t)}let Bh={get(e,t,a){if(e instanceof IDBTransaction){if(t==="done")return jh.get(e);if(t==="objectStoreNames")return e.objectStoreNames||l1.get(e);if(t==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return qa(e[t])},set(e,t,a){return e[t]=a,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function z4(e){Bh=e(Bh)}function U4(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...a){const o=e.call(xh(this),t,...a);return l1.set(o,t.sort?t.sort():[t]),qa(o)}:N4().includes(e)?function(...t){return e.apply(xh(this),t),qa(s1.get(this))}:function(...t){return qa(e.apply(xh(this),t))}}function j4(e){return typeof e=="function"?U4(e):(e instanceof IDBTransaction&&P4(e),D4(e,M4())?new Proxy(e,Bh):e)}function qa(e){if(e instanceof IDBRequest)return L4(e);if(wh.has(e))return wh.get(e);const t=j4(e);return t!==e&&(wh.set(e,t),mm.set(t,e)),t}const xh=e=>mm.get(e);function B4(e,t,{blocked:a,upgrade:o,blocking:l,terminated:c}={}){const f=indexedDB.open(e,t),h=qa(f);return o&&f.addEventListener("upgradeneeded",m=>{o(qa(f.result),m.oldVersion,m.newVersion,qa(f.transaction),m)}),a&&f.addEventListener("blocked",m=>a(m.oldVersion,m.newVersion,m)),h.then(m=>{c&&m.addEventListener("close",()=>c()),l&&m.addEventListener("versionchange",p=>l(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const I4=["get","getKey","getAll","getAllKeys","count"],H4=["put","add","delete","clear"],Eh=new Map;function uv(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Eh.get(t))return Eh.get(t);const a=t.replace(/FromIndex$/,""),o=t!==a,l=H4.includes(a);if(!(a in(o?IDBIndex:IDBObjectStore).prototype)||!(l||I4.includes(a)))return;const c=async function(f,...h){const m=this.transaction(f,l?"readwrite":"readonly");let p=m.store;return o&&(p=p.index(h.shift())),(await Promise.all([p[a](...h),l&&m.done]))[0]};return Eh.set(t,c),c}z4(e=>({...e,get:(t,a,o)=>uv(t,a)||e.get(t,a,o),has:(t,a)=>!!uv(t,a)||e.has(t,a)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(V4(a)){const o=a.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(a=>a).join(" ")}}function V4(e){const t=e.getComponent();return t?.type==="VERSION"}const Ih="@firebase/app",dv="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new o1("@firebase/app"),$4="@firebase/app-compat",F4="@firebase/analytics-compat",Y4="@firebase/analytics",G4="@firebase/app-check-compat",X4="@firebase/app-check",K4="@firebase/auth",Z4="@firebase/auth-compat",Q4="@firebase/database",J4="@firebase/data-connect",W4="@firebase/database-compat",e_="@firebase/functions",t_="@firebase/functions-compat",n_="@firebase/installations",r_="@firebase/installations-compat",a_="@firebase/messaging",i_="@firebase/messaging-compat",o_="@firebase/performance",s_="@firebase/performance-compat",l_="@firebase/remote-config",c_="@firebase/remote-config-compat",u_="@firebase/storage",d_="@firebase/storage-compat",f_="@firebase/firestore",h_="@firebase/ai",m_="@firebase/firestore-compat",p_="firebase",g_="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="[DEFAULT]",b_={[Ih]:"fire-core",[$4]:"fire-core-compat",[Y4]:"fire-analytics",[F4]:"fire-analytics-compat",[X4]:"fire-app-check",[G4]:"fire-app-check-compat",[K4]:"fire-auth",[Z4]:"fire-auth-compat",[Q4]:"fire-rtdb",[J4]:"fire-data-connect",[W4]:"fire-rtdb-compat",[e_]:"fire-fn",[t_]:"fire-fn-compat",[n_]:"fire-iid",[r_]:"fire-iid-compat",[a_]:"fire-fcm",[i_]:"fire-fcm-compat",[o_]:"fire-perf",[s_]:"fire-perf-compat",[l_]:"fire-rc",[c_]:"fire-rc-compat",[u_]:"fire-gcs",[d_]:"fire-gcs-compat",[f_]:"fire-fst",[m_]:"fire-fst-compat",[h_]:"fire-vertex","fire-js":"fire-js",[p_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=new Map,v_=new Map,qh=new Map;function fv(e,t){try{e.container.addComponent(t)}catch(a){ea.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,a)}}function ol(e){const t=e.name;if(qh.has(t))return ea.debug(`There were multiple attempts to register component ${t}.`),!1;qh.set(t,e);for(const a of uu.values())fv(a,e);for(const a of v_.values())fv(a,e);return!0}function c1(e,t){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(t)}function Zn(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Va=new hl("app","Firebase",y_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(t,a,o){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Ro("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Va.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=g_;function u1(e,t={}){let a=e;typeof t!="object"&&(t={name:t});const o=Object.assign({name:Hh,automaticDataCollectionEnabled:!0},t),l=o.name;if(typeof l!="string"||!l)throw Va.create("bad-app-name",{appName:String(l)});if(a||(a=a1()),!a)throw Va.create("no-options");const c=uu.get(l);if(c){if(ko(a,c.options)&&ko(o,c.config))return c;throw Va.create("duplicate-app",{appName:l})}const f=new A4(l);for(const m of qh.values())f.addComponent(m);const h=new w_(a,o,f);return uu.set(l,h),h}function x_(e=Hh){const t=uu.get(e);if(!t&&e===Hh&&a1())return u1();if(!t)throw Va.create("no-app",{appName:e});return t}function So(e,t,a){var o;let l=(o=b_[e])!==null&&o!==void 0?o:e;a&&(l+=`-${a}`);const c=l.match(/\s|\//),f=t.match(/\s|\//);if(c||f){const h=[`Unable to register library "${l}" with version "${t}":`];c&&h.push(`library name "${l}" contains illegal characters (whitespace or "/")`),c&&f&&h.push("and"),f&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ea.warn(h.join(" "));return}ol(new Ro(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="firebase-heartbeat-database",S_=1,sl="firebase-heartbeat-store";let Sh=null;function d1(){return Sh||(Sh=B4(E_,S_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(sl)}catch(a){console.warn(a)}}}}).catch(e=>{throw Va.create("idb-open",{originalErrorMessage:e.message})})),Sh}async function __(e){try{const a=(await d1()).transaction(sl),o=await a.objectStore(sl).get(f1(e));return await a.done,o}catch(t){if(t instanceof Ya)ea.warn(t.message);else{const a=Va.create("idb-get",{originalErrorMessage:t?.message});ea.warn(a.message)}}}async function hv(e,t){try{const o=(await d1()).transaction(sl,"readwrite");await o.objectStore(sl).put(t,f1(e)),await o.done}catch(a){if(a instanceof Ya)ea.warn(a.message);else{const o=Va.create("idb-set",{originalErrorMessage:a?.message});ea.warn(o.message)}}}function f1(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=1024,A_=30;class O_{constructor(t){this.container=t,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new k_(a),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var t,a;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=mv();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((a=this._heartbeatsCache)===null||a===void 0?void 0:a.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>A_){const f=R_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){ea.warn(o)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const a=mv(),{heartbeatsToSend:o,unsentEntries:l}=C_(this._heartbeatsCache.heartbeats),c=n1(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=a,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(a){return ea.warn(a),""}}}function mv(){return new Date().toISOString().substring(0,10)}function C_(e,t=T_){const a=[];let o=e.slice();for(const l of e){const c=a.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),pv(a)>t){c.dates.pop();break}}else if(a.push({agent:l.agent,dates:[l.date]}),pv(a)>t){a.pop();break}o=o.slice(1)}return{heartbeatsToSend:a,unsentEntries:o}}class k_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return m4()?p4().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const a=await __(this.app);return a?.heartbeats?a:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var a;if(await this._canUseIndexedDBPromise){const l=await this.read();return hv(this.app,{lastSentHeartbeatDate:(a=t.lastSentHeartbeatDate)!==null&&a!==void 0?a:l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var a;if(await this._canUseIndexedDBPromise){const l=await this.read();return hv(this.app,{lastSentHeartbeatDate:(a=t.lastSentHeartbeatDate)!==null&&a!==void 0?a:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function pv(e){return n1(JSON.stringify({version:2,heartbeats:e})).length}function R_(e){if(e.length===0)return-1;let t=0,a=e[0].date;for(let o=1;o<e.length;o++)e[o].date<a&&(a=e[o].date,t=o);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(e){ol(new Ro("platform-logger",t=>new q4(t),"PRIVATE")),ol(new Ro("heartbeat",t=>new O_(t),"PRIVATE")),So(Ih,dv,e),So(Ih,dv,"esm2017"),So("fire-js","")}D_("");function pm(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(a[o[l]]=e[o[l]]);return a}function h1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const M_=h1,m1=new hl("auth","Firebase",h1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=new o1("@firebase/auth");function N_(e,...t){du.logLevel<=pt.WARN&&du.warn(`Auth (${pl}): ${e}`,...t)}function Zc(e,...t){du.logLevel<=pt.ERROR&&du.error(`Auth (${pl}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(e,...t){throw bm(e,...t)}function pr(e,...t){return bm(e,...t)}function gm(e,t,a){const o=Object.assign(Object.assign({},M_()),{[t]:a});return new hl("auth","Firebase",o).create(t,{appName:e.name})}function Jr(e){return gm(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function L_(e,t,a){const o=a;if(!(t instanceof o))throw o.name!==t.constructor.name&&Wn(e,"argument-error"),gm(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bm(e,...t){if(typeof e!="string"){const a=t[0],o=[...t.slice(1)];return o[0]&&(o[0].appName=e.name),e._errorFactory.create(a,...o)}return m1.create(e,...t)}function ze(e,t,...a){if(!e)throw bm(t,...a)}function Zr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Zc(t),new Error(t)}function ta(e,t){e||Zr(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function P_(){return gv()==="http:"||gv()==="https:"}function gv(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(P_()||d4()||"connection"in navigator)?navigator.onLine:!0}function U_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t,a){this.shortDelay=t,this.longDelay=a,ta(a>t,"Short delay should be less than long delay!"),this.isMobile=c4()||f4()}get(){return z_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(e,t){ta(e.emulator,"Emulator should always be set here");const{url:a}=e.emulator;return t?`${a}${t.startsWith("/")?t.slice(1):t}`:a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{static initialize(t,a,o){this.fetchImpl=t,a&&(this.headersImpl=a),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],I_=new gl(3e4,6e4);function Ga(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Xa(e,t,a,o,l={}){return g1(e,l,async()=>{let c={},f={};o&&(t==="GET"?f=o:c={body:JSON.stringify(o)});const h=ml(Object.assign({key:e.config.apiKey},f)).slice(1),m=await e._getAdditionalHeaders();m["Content-Type"]="application/json",e.languageCode&&(m["X-Firebase-Locale"]=e.languageCode);const p=Object.assign({method:t,headers:m},c);return u4()||(p.referrerPolicy="no-referrer"),e.emulatorConfig&&Bu(e.emulatorConfig.host)&&(p.credentials="include"),p1.fetch()(await b1(e,e.config.apiHost,a,h),p)})}async function g1(e,t,a){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},j_),t);try{const l=new q_(e),c=await Promise.race([a(),l.promise]);l.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw qc(e,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const h=c.ok?f.errorMessage:f.error.message,[m,p]=h.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw qc(e,"credential-already-in-use",f);if(m==="EMAIL_EXISTS")throw qc(e,"email-already-in-use",f);if(m==="USER_DISABLED")throw qc(e,"user-disabled",f);const b=o[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw gm(e,b,p);Wn(e,b)}}catch(l){if(l instanceof Ya)throw l;Wn(e,"network-request-failed",{message:String(l)})}}async function bl(e,t,a,o,l={}){const c=await Xa(e,t,a,o,l);return"mfaPendingCredential"in c&&Wn(e,"multi-factor-auth-required",{_serverResponse:c}),c}async function b1(e,t,a,o){const l=`${t}${a}?${o}`,c=e,f=c.config.emulator?vm(e.config,l):`${e.config.apiScheme}://${l}`;return B_.includes(a)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}function H_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class q_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((a,o)=>{this.timer=setTimeout(()=>o(pr(this.auth,"network-request-failed")),I_.get())})}}function qc(e,t,a){const o={appName:e.name};a.email&&(o.email=a.email),a.phoneNumber&&(o.phoneNumber=a.phoneNumber);const l=pr(e,t,o);return l.customData._tokenResponse=a,l}function bv(e){return e!==void 0&&e.enterprise!==void 0}class V_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const a of this.recaptchaEnforcementState)if(a.provider&&a.provider===t)return H_(a.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $_(e,t){return Xa(e,"GET","/v2/recaptchaConfig",Ga(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(e,t){return Xa(e,"POST","/v1/accounts:delete",t)}async function fu(e,t){return Xa(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Y_(e,t=!1){const a=ra(e),o=await a.getIdToken(t),l=ym(o);ze(l&&l.exp&&l.auth_time&&l.iat,a.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,f=c?.sign_in_provider;return{claims:l,token:o,authTime:tl(_h(l.auth_time)),issuedAtTime:tl(_h(l.iat)),expirationTime:tl(_h(l.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function _h(e){return Number(e)*1e3}function ym(e){const[t,a,o]=e.split(".");if(t===void 0||a===void 0||o===void 0)return Zc("JWT malformed, contained fewer than 3 sections"),null;try{const l=r1(a);return l?JSON.parse(l):(Zc("Failed to decode base64 JWT payload"),null)}catch(l){return Zc("Caught error parsing JWT payload as JSON",l?.toString()),null}}function vv(e){const t=ym(e);return ze(t,"internal-error"),ze(typeof t.exp<"u","internal-error"),ze(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(e,t,a=!1){if(a)return t;try{return await t}catch(o){throw o instanceof Ya&&G_(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function G_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var a;if(t){const o=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),o}else{this.errorBackoff=3e4;const l=((a=this.user.stsTokenManager.expirationTime)!==null&&a!==void 0?a:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(t=!1){if(!this.isRunning)return;const a=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},a)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,a){this.createdAt=t,this.lastLoginAt=a,this._initializeTime()}_initializeTime(){this.lastSignInTime=tl(this.lastLoginAt),this.creationTime=tl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hu(e){var t;const a=e.auth,o=await e.getIdToken(),l=await ll(e,fu(a,{idToken:o}));ze(l?.users.length,a,"internal-error");const c=l.users[0];e._notifyReloadListener(c);const f=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?v1(c.providerUserInfo):[],h=Z_(e.providerData,f),m=e.isAnonymous,p=!(e.email&&c.passwordHash)&&!h?.length,b=m?p:!1,x={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:h,metadata:new $h(c.createdAt,c.lastLoginAt),isAnonymous:b};Object.assign(e,x)}async function K_(e){const t=ra(e);await hu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Z_(e,t){return[...e.filter(o=>!t.some(l=>l.providerId===o.providerId)),...t]}function v1(e){return e.map(t=>{var{providerId:a}=t,o=pm(t,["providerId"]);return{providerId:a,uid:o.rawId||"",displayName:o.displayName||null,email:o.email||null,phoneNumber:o.phoneNumber||null,photoURL:o.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(e,t){const a=await g1(e,{},async()=>{const o=ml({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=e.config,f=await b1(e,l,"/v1/token",`key=${c}`),h=await e._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:h,body:o};return e.emulatorConfig&&Bu(e.emulatorConfig.host)&&(m.credentials="include"),p1.fetch()(f,m)});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}async function J_(e,t){return Xa(e,"POST","/v2/accounts:revokeToken",Ga(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ze(t.idToken,"internal-error"),ze(typeof t.idToken<"u","internal-error"),ze(typeof t.refreshToken<"u","internal-error");const a="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):vv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,a)}updateFromIdToken(t){ze(t.length!==0,"internal-error");const a=vv(t);this.updateTokensAndExpiration(t,null,a)}async getToken(t,a=!1){return!a&&this.accessToken&&!this.isExpired?this.accessToken:(ze(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,a){const{accessToken:o,refreshToken:l,expiresIn:c}=await Q_(t,a);this.updateTokensAndExpiration(o,l,Number(c))}updateTokensAndExpiration(t,a,o){this.refreshToken=a||null,this.accessToken=t||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(t,a){const{refreshToken:o,accessToken:l,expirationTime:c}=a,f=new _o;return o&&(ze(typeof o=="string","internal-error",{appName:t}),f.refreshToken=o),l&&(ze(typeof l=="string","internal-error",{appName:t}),f.accessToken=l),c&&(ze(typeof c=="number","internal-error",{appName:t}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return Zr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(e,t){ze(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class hr{constructor(t){var{uid:a,auth:o,stsTokenManager:l}=t,c=pm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=o,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new $h(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const a=await ll(this,this.stsTokenManager.getToken(this.auth,t));return ze(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(t){return Y_(this,t)}reload(){return K_(this)}_assign(t){this!==t&&(ze(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(a=>Object.assign({},a)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const a=new hr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return a.metadata._copy(this.metadata),a}_onReload(t){ze(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,a=!1){let o=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),o=!0),a&&await hu(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(Jr(this.auth));const t=await this.getIdToken();return await ll(this,F_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,a){var o,l,c,f,h,m,p,b;const x=(o=a.displayName)!==null&&o!==void 0?o:void 0,y=(l=a.email)!==null&&l!==void 0?l:void 0,R=(c=a.phoneNumber)!==null&&c!==void 0?c:void 0,S=(f=a.photoURL)!==null&&f!==void 0?f:void 0,A=(h=a.tenantId)!==null&&h!==void 0?h:void 0,N=(m=a._redirectEventId)!==null&&m!==void 0?m:void 0,z=(p=a.createdAt)!==null&&p!==void 0?p:void 0,Q=(b=a.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:K,emailVerified:ce,isAnonymous:J,providerData:D,stsTokenManager:me}=a;ze(K&&me,t,"internal-error");const _e=_o.fromJSON(this.name,me);ze(typeof K=="string",t,"internal-error"),Da(x,t.name),Da(y,t.name),ze(typeof ce=="boolean",t,"internal-error"),ze(typeof J=="boolean",t,"internal-error"),Da(R,t.name),Da(S,t.name),Da(A,t.name),Da(N,t.name),Da(z,t.name),Da(Q,t.name);const ue=new hr({uid:K,auth:t,email:y,emailVerified:ce,displayName:x,isAnonymous:J,photoURL:S,phoneNumber:R,tenantId:A,stsTokenManager:_e,createdAt:z,lastLoginAt:Q});return D&&Array.isArray(D)&&(ue.providerData=D.map(Re=>Object.assign({},Re))),N&&(ue._redirectEventId=N),ue}static async _fromIdTokenResponse(t,a,o=!1){const l=new _o;l.updateFromServerResponse(a);const c=new hr({uid:a.localId,auth:t,stsTokenManager:l,isAnonymous:o});return await hu(c),c}static async _fromGetAccountInfoResponse(t,a,o){const l=a.users[0];ze(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?v1(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!c?.length,h=new _o;h.updateFromIdToken(o);const m=new hr({uid:l.localId,auth:t,stsTokenManager:h,isAnonymous:f}),p={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new $h(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(m,p),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=new Map;function Qr(e){ta(e instanceof Function,"Expected a class definition");let t=yv.get(e);return t?(ta(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,yv.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,a){this.storage[t]=a}async _get(t){const a=this.storage[t];return a===void 0?null:a}async _remove(t){delete this.storage[t]}_addListener(t,a){}_removeListener(t,a){}}y1.type="NONE";const wv=y1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(e,t,a){return`firebase:${e}:${t}:${a}`}class To{constructor(t,a,o){this.persistence=t,this.auth=a,this.userKey=o;const{config:l,name:c}=this.auth;this.fullUserKey=Qc(this.userKey,l.apiKey,c),this.fullPersistenceKey=Qc("persistence",l.apiKey,c),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const a=await fu(this.auth,{idToken:t}).catch(()=>{});return a?hr._fromGetAccountInfoResponse(this.auth,a,t):null}return hr._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const a=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,a)return this.setCurrentUser(a)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,a,o="authUser"){if(!a.length)return new To(Qr(wv),t,o);const l=(await Promise.all(a.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let c=l[0]||Qr(wv);const f=Qc(o,t.config.apiKey,t.name);let h=null;for(const p of a)try{const b=await p._get(f);if(b){let x;if(typeof b=="string"){const y=await fu(t,{idToken:b}).catch(()=>{});if(!y)break;x=await hr._fromGetAccountInfoResponse(t,y,b)}else x=hr._fromJSON(t,b);p!==c&&(h=x),c=p;break}}catch{}const m=l.filter(p=>p._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new To(c,t,o):(c=m[0],h&&await c._set(f,h.toJSON()),await Promise.all(a.map(async p=>{if(p!==c)try{await p._remove(f)}catch{}})),new To(c,t,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(S1(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(w1(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(T1(t))return"Blackberry";if(A1(t))return"Webos";if(x1(t))return"Safari";if((t.includes("chrome/")||E1(t))&&!t.includes("edge/"))return"Chrome";if(_1(t))return"Android";{const a=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=e.match(a);if(o?.length===2)return o[1]}return"Other"}function w1(e=un()){return/firefox\//i.test(e)}function x1(e=un()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function E1(e=un()){return/crios\//i.test(e)}function S1(e=un()){return/iemobile/i.test(e)}function _1(e=un()){return/android/i.test(e)}function T1(e=un()){return/blackberry/i.test(e)}function A1(e=un()){return/webos/i.test(e)}function wm(e=un()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function W_(e=un()){var t;return wm(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function e3(){return h4()&&document.documentMode===10}function O1(e=un()){return wm(e)||_1(e)||A1(e)||T1(e)||/windows phone/i.test(e)||S1(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(e,t=[]){let a;switch(e){case"Browser":a=xv(un());break;case"Worker":a=`${xv(un())}-${e}`;break;default:a=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${a}/JsCore/${pl}/${o}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,a){const o=c=>new Promise((f,h)=>{try{const m=t(c);f(m)}catch(m){h(m)}});o.onAbort=a,this.queue.push(o);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const a=[];try{for(const o of this.queue)await o(t),o.onAbort&&a.push(o.onAbort)}catch(o){a.reverse();for(const l of a)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n3(e,t={}){return Xa(e,"GET","/v2/passwordPolicy",Ga(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r3=6;class a3{constructor(t){var a,o,l,c;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(a=f.minPasswordLength)!==null&&a!==void 0?a:r3,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(o=t.allowedNonAlphanumericCharacters)===null||o===void 0?void 0:o.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var a,o,l,c,f,h;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,m),this.validatePasswordCharacterOptions(t,m),m.isValid&&(m.isValid=(a=m.meetsMinPasswordLength)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(o=m.meetsMaxPasswordLength)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(l=m.containsLowercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsUppercaseLetter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(f=m.containsNumericCharacter)!==null&&f!==void 0?f:!0),m.isValid&&(m.isValid=(h=m.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),m}validatePasswordLengthOptions(t,a){const o=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;o&&(a.meetsMinPasswordLength=t.length>=o),l&&(a.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,a){this.updatePasswordCharacterOptionsStatuses(a,!1,!1,!1,!1);let o;for(let l=0;l<t.length;l++)o=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(a,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(t,a,o,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=a)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(t,a,o,l){this.app=t,this.heartbeatServiceProvider=a,this.appCheckServiceProvider=o,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ev(this),this.idTokenSubscription=new Ev(this),this.beforeStateQueue=new t3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,a){return a&&(this._popupRedirectResolver=Qr(a)),this._initializationPromise=this.queue(async()=>{var o,l,c;if(!this._deleted&&(this.persistenceManager=await To.create(this,t),(o=this._resolvePersistenceManagerAvailable)===null||o===void 0||o.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(a),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const a=await fu(this,{idToken:t}),o=await hr._fromGetAccountInfoResponse(this,a,t);await this.directlySetCurrentUser(o)}catch(a){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",a),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var a;if(Zn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(h,h))}):this.directlySetCurrentUser(null)}const o=await this.assertedPersistence.getCurrentUser();let l=o,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId,h=l?._redirectEventId,m=await this.tryRedirectSignIn(t);(!f||f===h)&&m?.user&&(l=m.user,c=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(l)}catch(f){l=o,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return ze(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(t){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(t){try{await hu(t)}catch(a){if(a?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=U_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Zn(this.app))return Promise.reject(Jr(this));const a=t?ra(t):null;return a&&ze(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(t,a=!1){if(!this._deleted)return t&&ze(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),a||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(Jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Zn(this.app)?Promise.reject(Jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const a=this._getPasswordPolicyInternal();return a.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):a.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await n3(this),a=new a3(t);this.tenantId===null?this._projectPasswordPolicy=a:this._tenantPasswordPolicies[this.tenantId]=a}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new hl("auth","Firebase",t())}onAuthStateChanged(t,a,o){return this.registerStateListener(this.authStateSubscription,t,a,o)}beforeAuthStateChanged(t,a){return this.beforeStateQueue.pushCallback(t,a)}onIdTokenChanged(t,a,o){return this.registerStateListener(this.idTokenSubscription,t,a,o)}authStateReady(){return new Promise((t,a)=>{if(this.currentUser)t();else{const o=this.onAuthStateChanged(()=>{o(),t()},a)}})}async revokeAccessToken(t){if(this.currentUser){const a=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:a};this.tenantId!=null&&(o.tenantId=this.tenantId),await J_(this,o)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,a){const o=await this.getOrInitRedirectPersistenceManager(a);return t===null?o.removeCurrentUser():o.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const a=t&&Qr(t)||this._popupRedirectResolver;ze(a,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[Qr(a._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var a,o;return this._isInitialized&&await this.queue(async()=>{}),((a=this._currentUser)===null||a===void 0?void 0:a._redirectEventId)===t?this._currentUser:((o=this.redirectUser)===null||o===void 0?void 0:o._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,a;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const o=(a=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&a!==void 0?a:null;this.lastNotifiedUid!==o&&(this.lastNotifiedUid=o,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,a,o,l){if(this._deleted)return()=>{};const c=typeof a=="function"?a:a.next.bind(a);let f=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(ze(h,this,"internal-error"),h.then(()=>{f||c(this.currentUser)}),typeof a=="function"){const m=t.addObserver(a,o,l);return()=>{f=!0,m()}}else{const m=t.addObserver(a);return()=>{f=!0,m()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ze(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=C1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const a={"X-Client-Version":this.clientVersion};this.app.options.appId&&(a["X-Firebase-gmpid"]=this.app.options.appId);const o=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());o&&(a["X-Firebase-Client"]=o);const l=await this._getAppCheckToken();return l&&(a["X-Firebase-AppCheck"]=l),a}async _getAppCheckToken(){var t;if(Zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const a=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return a?.error&&N_(`Error while retrieving App Check token: ${a.error}`),a?.token}}function Ka(e){return ra(e)}class Ev{constructor(t){this.auth=t,this.observer=null,this.addObserver=w4(a=>this.observer=a)}get next(){return ze(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function o3(e){Iu=e}function k1(e){return Iu.loadJS(e)}function s3(){return Iu.recaptchaEnterpriseScript}function l3(){return Iu.gapiScript}function c3(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class u3{constructor(){this.enterprise=new d3}ready(t){t()}execute(t,a){return Promise.resolve("token")}render(t,a){return""}}class d3{ready(t){t()}execute(t,a){return Promise.resolve("token")}render(t,a){return""}}const f3="recaptcha-enterprise",R1="NO_RECAPTCHA";class h3{constructor(t){this.type=f3,this.auth=Ka(t)}async verify(t="verify",a=!1){async function o(c){if(!a){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(f,h)=>{$_(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const p=new V_(m);return c.tenantId==null?c._agentRecaptchaConfig=p:c._tenantRecaptchaConfigs[c.tenantId]=p,f(p.siteKey)}}).catch(m=>{h(m)})})}function l(c,f,h){const m=window.grecaptcha;bv(m)?m.enterprise.ready(()=>{m.enterprise.execute(c,{action:t}).then(p=>{f(p)}).catch(()=>{f(R1)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new u3().execute("siteKey",{action:"verify"}):new Promise((c,f)=>{o(this.auth).then(h=>{if(!a&&bv(window.grecaptcha))l(h,c,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let m=s3();m.length!==0&&(m+=h),k1(m).then(()=>{l(h,c,f)}).catch(p=>{f(p)})}}).catch(h=>{f(h)})})}}async function Sv(e,t,a,o=!1,l=!1){const c=new h3(e);let f;if(l)f=R1;else try{f=await c.verify(a)}catch{f=await c.verify(a,!0)}const h=Object.assign({},t);if(a==="mfaSmsEnrollment"||a==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const m=h.phoneEnrollmentInfo.phoneNumber,p=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const m=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return o?Object.assign(h,{captchaResp:f}):Object.assign(h,{captchaResponse:f}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Fh(e,t,a,o,l){var c;if(!((c=e._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Sv(e,t,a,a==="getOobCode");return o(e,f)}else return o(e,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${a} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Sv(e,t,a,a==="getOobCode");return o(e,h)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m3(e,t){const a=c1(e,"auth");if(a.isInitialized()){const l=a.getImmediate(),c=a.getOptions();if(ko(c,t??{}))return l;Wn(l,"already-initialized")}return a.initialize({options:t})}function p3(e,t){const a=t?.persistence||[],o=(Array.isArray(a)?a:[a]).map(Qr);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(o,t?.popupRedirectResolver)}function g3(e,t,a){const o=Ka(e);ze(/^https?:\/\//.test(t),o,"invalid-emulator-scheme");const l=!1,c=D1(t),{host:f,port:h}=b3(t),m=h===null?"":`:${h}`,p={url:`${c}//${f}${m}/`},b=Object.freeze({host:f,port:h,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!o._canInitEmulator){ze(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),ze(ko(p,o.config.emulator)&&ko(b,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=p,o.emulatorConfig=b,o.settings.appVerificationDisabledForTesting=!0,Bu(f)?(i4(`${c}//${f}${m}`),l4("Auth",!0)):v3()}function D1(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function b3(e){const t=D1(e),a=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!a)return{host:"",port:null};const o=a[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(o);if(l){const c=l[1];return{host:c,port:_v(o.substr(c.length+1))}}else{const[c,f]=o.split(":");return{host:c,port:_v(f)}}}function _v(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function v3(){function e(){const t=document.createElement("p"),a=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",a.position="fixed",a.width="100%",a.backgroundColor="#ffffff",a.border=".1em solid #000000",a.color="#b50000",a.bottom="0px",a.left="0px",a.margin="0px",a.zIndex="10000",a.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(t,a){this.providerId=t,this.signInMethod=a}toJSON(){return Zr("not implemented")}_getIdTokenResponse(t){return Zr("not implemented")}_linkToIdToken(t,a){return Zr("not implemented")}_getReauthenticationResolver(t){return Zr("not implemented")}}async function y3(e,t){return Xa(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w3(e,t){return bl(e,"POST","/v1/accounts:signInWithPassword",Ga(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x3(e,t){return bl(e,"POST","/v1/accounts:signInWithEmailLink",Ga(e,t))}async function E3(e,t){return bl(e,"POST","/v1/accounts:signInWithEmailLink",Ga(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends xm{constructor(t,a,o,l=null){super("password",o),this._email=t,this._password=a,this._tenantId=l}static _fromEmailAndPassword(t,a){return new cl(t,a,"password")}static _fromEmailAndCode(t,a,o=null){return new cl(t,a,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const a=typeof t=="string"?JSON.parse(t):t;if(a?.email&&a?.password){if(a.signInMethod==="password")return this._fromEmailAndPassword(a.email,a.password);if(a.signInMethod==="emailLink")return this._fromEmailAndCode(a.email,a.password,a.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const a={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fh(t,a,"signInWithPassword",w3);case"emailLink":return x3(t,{email:this._email,oobCode:this._password});default:Wn(t,"internal-error")}}async _linkToIdToken(t,a){switch(this.signInMethod){case"password":const o={idToken:a,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fh(t,o,"signUpPassword",y3);case"emailLink":return E3(t,{idToken:a,email:this._email,oobCode:this._password});default:Wn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(e,t){return bl(e,"POST","/v1/accounts:signInWithIdp",Ga(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S3="http://localhost";class Ci extends xm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const a=new Ci(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(a.idToken=t.idToken),t.accessToken&&(a.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(a.nonce=t.nonce),t.pendingToken&&(a.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(a.accessToken=t.oauthToken,a.secret=t.oauthTokenSecret):Wn("argument-error"),a}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const a=typeof t=="string"?JSON.parse(t):t,{providerId:o,signInMethod:l}=a,c=pm(a,["providerId","signInMethod"]);if(!o||!l)return null;const f=new Ci(o,l);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(t){const a=this.buildRequest();return Ao(t,a)}_linkToIdToken(t,a){const o=this.buildRequest();return o.idToken=a,Ao(t,o)}_getReauthenticationResolver(t){const a=this.buildRequest();return a.autoCreate=!1,Ao(t,a)}buildRequest(){const t={requestUri:S3,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const a={};this.idToken&&(a.id_token=this.idToken),this.accessToken&&(a.access_token=this.accessToken),this.secret&&(a.oauth_token_secret=this.secret),a.providerId=this.providerId,this.nonce&&!this.pendingToken&&(a.nonce=this.nonce),t.postBody=ml(a)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _3(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T3(e){const t=Qs(Js(e)).link,a=t?Qs(Js(t)).deep_link_id:null,o=Qs(Js(e)).deep_link_id;return(o?Qs(Js(o)).link:null)||o||a||t||e}class Em{constructor(t){var a,o,l,c,f,h;const m=Qs(Js(t)),p=(a=m.apiKey)!==null&&a!==void 0?a:null,b=(o=m.oobCode)!==null&&o!==void 0?o:null,x=_3((l=m.mode)!==null&&l!==void 0?l:null);ze(p&&b&&x,"argument-error"),this.apiKey=p,this.operation=x,this.code=b,this.continueUrl=(c=m.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(f=m.lang)!==null&&f!==void 0?f:null,this.tenantId=(h=m.tenantId)!==null&&h!==void 0?h:null}static parseLink(t){const a=T3(t);try{return new Em(a)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.providerId=Lo.PROVIDER_ID}static credential(t,a){return cl._fromEmailAndPassword(t,a)}static credentialWithLink(t,a){const o=Em.parseLink(a);return ze(o,"argument-error"),cl._fromEmailAndCode(t,o.code,o.tenantId)}}Lo.PROVIDER_ID="password";Lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends Sm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends vl{constructor(){super("facebook.com")}static credential(t){return Ci._fromParams({providerId:Pa.PROVIDER_ID,signInMethod:Pa.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pa.credentialFromTaggedObject(t)}static credentialFromError(t){return Pa.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pa.credential(t.oauthAccessToken)}catch{return null}}}Pa.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pa.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends vl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,a){return Ci._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:a})}static credentialFromResult(t){return Kr.credentialFromTaggedObject(t)}static credentialFromError(t){return Kr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:a,oauthAccessToken:o}=t;if(!a&&!o)return null;try{return Kr.credential(a,o)}catch{return null}}}Kr.GOOGLE_SIGN_IN_METHOD="google.com";Kr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends vl{constructor(){super("github.com")}static credential(t){return Ci._fromParams({providerId:za.PROVIDER_ID,signInMethod:za.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return za.credentialFromTaggedObject(t)}static credentialFromError(t){return za.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return za.credential(t.oauthAccessToken)}catch{return null}}}za.GITHUB_SIGN_IN_METHOD="github.com";za.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends vl{constructor(){super("twitter.com")}static credential(t,a){return Ci._fromParams({providerId:Ua.PROVIDER_ID,signInMethod:Ua.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:a})}static credentialFromResult(t){return Ua.credentialFromTaggedObject(t)}static credentialFromError(t){return Ua.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:a,oauthTokenSecret:o}=t;if(!a||!o)return null;try{return Ua.credential(a,o)}catch{return null}}}Ua.TWITTER_SIGN_IN_METHOD="twitter.com";Ua.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A3(e,t){return bl(e,"POST","/v1/accounts:signUp",Ga(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,a,o,l=!1){const c=await hr._fromIdTokenResponse(t,o,l),f=Tv(o);return new ki({user:c,providerId:f,_tokenResponse:o,operationType:a})}static async _forOperation(t,a,o){await t._updateTokensIfNecessary(o,!0);const l=Tv(o);return new ki({user:t,providerId:l,_tokenResponse:o,operationType:a})}}function Tv(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends Ya{constructor(t,a,o,l){var c;super(a.code,a.message),this.operationType=o,this.user=l,Object.setPrototypeOf(this,mu.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:a.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(t,a,o,l){return new mu(t,a,o,l)}}function M1(e,t,a,o){return(t==="reauthenticate"?a._getReauthenticationResolver(e):a._getIdTokenResponse(e)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?mu._fromErrorAndOperation(e,c,t,o):c})}async function O3(e,t,a=!1){const o=await ll(e,t._linkToIdToken(e.auth,await e.getIdToken()),a);return ki._forOperation(e,"link",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C3(e,t,a=!1){const{auth:o}=e;if(Zn(o.app))return Promise.reject(Jr(o));const l="reauthenticate";try{const c=await ll(e,M1(o,l,t,e),a);ze(c.idToken,o,"internal-error");const f=ym(c.idToken);ze(f,o,"internal-error");const{sub:h}=f;return ze(e.uid===h,o,"user-mismatch"),ki._forOperation(e,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&Wn(o,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(e,t,a=!1){if(Zn(e.app))return Promise.reject(Jr(e));const o="signIn",l=await M1(e,o,t),c=await ki._fromIdTokenResponse(e,o,l);return a||await e._updateCurrentUser(c.user),c}async function k3(e,t){return N1(Ka(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(e){const t=Ka(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function R3(e,t,a){if(Zn(e.app))return Promise.reject(Jr(e));const o=Ka(e),f=await Fh(o,{returnSecureToken:!0,email:t,password:a,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",A3).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&L1(e),m}),h=await ki._fromIdTokenResponse(o,"signIn",f);return await o._updateCurrentUser(h.user),h}function D3(e,t,a){return Zn(e.app)?Promise.reject(Jr(e)):k3(ra(e),Lo.credential(t,a)).catch(async o=>{throw o.code==="auth/password-does-not-meet-requirements"&&L1(e),o})}function M3(e,t,a,o){return ra(e).onIdTokenChanged(t,a,o)}function N3(e,t,a){return ra(e).beforeAuthStateChanged(t,a)}function L3(e,t,a,o){return ra(e).onAuthStateChanged(t,a,o)}function P3(e){return ra(e).signOut()}const pu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(t,a){this.storageRetriever=t,this.type=a}_isAvailable(){try{return this.storage?(this.storage.setItem(pu,"1"),this.storage.removeItem(pu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,a){return this.storage.setItem(t,JSON.stringify(a)),Promise.resolve()}_get(t){const a=this.storage.getItem(t);return Promise.resolve(a?JSON.parse(a):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z3=1e3,U3=10;class z1 extends P1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,a)=>this.onStorageEvent(t,a),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=O1(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const a of Object.keys(this.listeners)){const o=this.storage.getItem(a),l=this.localCache[a];o!==l&&t(a,l,o)}}onStorageEvent(t,a=!1){if(!t.key){this.forAllChangedKeys((f,h,m)=>{this.notifyListeners(f,m)});return}const o=t.key;a?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(o);!a&&this.localCache[o]===f||this.notifyListeners(o,f)},c=this.storage.getItem(o);e3()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,U3):l()}notifyListeners(t,a){this.localCache[t]=a;const o=this.listeners[t];if(o)for(const l of Array.from(o))l(a&&JSON.parse(a))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,a,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:a,newValue:o}),!0)})},z3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,a){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(a)}_removeListener(t,a){this.listeners[t]&&(this.listeners[t].delete(a),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,a){await super._set(t,a),this.localCache[t]=JSON.stringify(a)}async _get(t){const a=await super._get(t);return this.localCache[t]=JSON.stringify(a),a}async _remove(t){await super._remove(t),delete this.localCache[t]}}z1.type="LOCAL";const j3=z1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1 extends P1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,a){}_removeListener(t,a){}}U1.type="SESSION";const j1=U1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B3(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(a){return{fulfilled:!1,reason:a}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const a=this.receivers.find(l=>l.isListeningto(t));if(a)return a;const o=new Hu(t);return this.receivers.push(o),o}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const a=t,{eventId:o,eventType:l,data:c}=a.data,f=this.handlersMap[l];if(!f?.size)return;a.ports[0].postMessage({status:"ack",eventId:o,eventType:l});const h=Array.from(f).map(async p=>p(a.origin,c)),m=await B3(h);a.ports[0].postMessage({status:"done",eventId:o,eventType:l,response:m})}_subscribe(t,a){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(a)}_unsubscribe(t,a){this.handlersMap[t]&&a&&this.handlersMap[t].delete(a),(!a||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(e="",t=10){let a="";for(let o=0;o<t;o++)a+=Math.floor(Math.random()*10);return e+a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I3{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,a,o=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,f;return new Promise((h,m)=>{const p=_m("",20);l.port1.start();const b=setTimeout(()=>{m(new Error("unsupported_event"))},o);f={messageChannel:l,onMessage(x){const y=x;if(y.data.eventId===p)switch(y.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),h(y.data.response);break;default:clearTimeout(b),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:p,data:a},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(){return window}function H3(e){Rr().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(){return typeof Rr().WorkerGlobalScope<"u"&&typeof Rr().importScripts=="function"}async function q3(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V3(){var e;return((e=navigator?.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function $3(){return B1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="firebaseLocalStorageDb",F3=1,gu="firebaseLocalStorage",H1="fbase_key";class yl{constructor(t){this.request=t}toPromise(){return new Promise((t,a)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{a(this.request.error)})})}}function qu(e,t){return e.transaction([gu],t?"readwrite":"readonly").objectStore(gu)}function Y3(){const e=indexedDB.deleteDatabase(I1);return new yl(e).toPromise()}function Yh(){const e=indexedDB.open(I1,F3);return new Promise((t,a)=>{e.addEventListener("error",()=>{a(e.error)}),e.addEventListener("upgradeneeded",()=>{const o=e.result;try{o.createObjectStore(gu,{keyPath:H1})}catch(l){a(l)}}),e.addEventListener("success",async()=>{const o=e.result;o.objectStoreNames.contains(gu)?t(o):(o.close(),await Y3(),t(await Yh()))})})}async function Av(e,t,a){const o=qu(e,!0).put({[H1]:t,value:a});return new yl(o).toPromise()}async function G3(e,t){const a=qu(e,!1).get(t),o=await new yl(a).toPromise();return o===void 0?null:o.value}function Ov(e,t){const a=qu(e,!0).delete(t);return new yl(a).toPromise()}const X3=800,K3=3;class q1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yh(),this.db)}async _withRetries(t){let a=0;for(;;)try{const o=await this._openDb();return await t(o)}catch(o){if(a++>K3)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return B1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hu._getInstance($3()),this.receiver._subscribe("keyChanged",async(t,a)=>({keyProcessed:(await this._poll()).includes(a.key)})),this.receiver._subscribe("ping",async(t,a)=>["keyChanged"])}async initializeSender(){var t,a;if(this.activeServiceWorker=await q3(),!this.activeServiceWorker)return;this.sender=new I3(this.activeServiceWorker);const o=await this.sender._send("ping",{},800);o&&!((t=o[0])===null||t===void 0)&&t.fulfilled&&!((a=o[0])===null||a===void 0)&&a.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||V3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Yh();return await Av(t,pu,"1"),await Ov(t,pu),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,a){return this._withPendingWrite(async()=>(await this._withRetries(o=>Av(o,t,a)),this.localCache[t]=a,this.notifyServiceWorker(t)))}async _get(t){const a=await this._withRetries(o=>G3(o,t));return this.localCache[t]=a,a}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(a=>Ov(a,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=qu(l,!1).getAll();return new yl(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const a=[],o=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)o.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),a.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!o.has(l)&&(this.notifyListeners(l,null),a.push(l));return a}notifyListeners(t,a){this.localCache[t]=a;const o=this.listeners[t];if(o)for(const l of Array.from(o))l(a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,a){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(a)}_removeListener(t,a){this.listeners[t]&&(this.listeners[t].delete(a),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}q1.type="LOCAL";const Z3=q1;new gl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(e,t){return t?Qr(t):(ze(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm extends xm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ao(t,this._buildIdpRequest())}_linkToIdToken(t,a){return Ao(t,this._buildIdpRequest(a))}_getReauthenticationResolver(t){return Ao(t,this._buildIdpRequest())}_buildIdpRequest(t){const a={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(a.idToken=t),a}}function Q3(e){return N1(e.auth,new Tm(e),e.bypassAuthState)}function J3(e){const{auth:t,user:a}=e;return ze(a,t,"internal-error"),C3(a,new Tm(e),e.bypassAuthState)}async function W3(e){const{auth:t,user:a}=e;return ze(a,t,"internal-error"),O3(a,new Tm(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(t,a,o,l,c=!1){this.auth=t,this.resolver=o,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise(async(t,a)=>{this.pendingPromise={resolve:t,reject:a};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(t){const{urlResponse:a,sessionId:o,postBody:l,tenantId:c,error:f,type:h}=t;if(f){this.reject(f);return}const m={auth:this.auth,requestUri:a,sessionId:o,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(m))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Q3;case"linkViaPopup":case"linkViaRedirect":return W3;case"reauthViaPopup":case"reauthViaRedirect":return J3;default:Wn(this.auth,"internal-error")}}resolve(t){ta(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ta(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e6=new gl(2e3,1e4);async function t6(e,t,a){if(Zn(e.app))return Promise.reject(pr(e,"operation-not-supported-in-this-environment"));const o=Ka(e);L_(e,t,Sm);const l=V1(o,a);return new Si(o,"signInViaPopup",t,l).executeNotNull()}class Si extends $1{constructor(t,a,o,l,c){super(t,a,l,c),this.provider=o,this.authWindow=null,this.pollId=null,Si.currentPopupAction&&Si.currentPopupAction.cancel(),Si.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ze(t,this.auth,"internal-error"),t}async onExecution(){ta(this.filter.length===1,"Popup operations only handle one event");const t=_m();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Si.currentPopupAction=null}pollUserCancellation(){const t=()=>{var a,o;if(!((o=(a=this.authWindow)===null||a===void 0?void 0:a.window)===null||o===void 0)&&o.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,e6.get())};t()}}Si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n6="pendingRedirect",Jc=new Map;class r6 extends $1{constructor(t,a,o=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,o),this.eventId=null}async execute(){let t=Jc.get(this.auth._key());if(!t){try{const o=await a6(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(o)}catch(a){t=()=>Promise.reject(a)}Jc.set(this.auth._key(),t)}return this.bypassAuthState||Jc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const a=await this.auth._redirectUserForId(t.eventId);if(a)return this.user=a,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a6(e,t){const a=s6(t),o=o6(e);if(!await o._isAvailable())return!1;const l=await o._get(a)==="true";return await o._remove(a),l}function i6(e,t){Jc.set(e._key(),t)}function o6(e){return Qr(e._redirectPersistence)}function s6(e){return Qc(n6,e.config.apiKey,e.name)}async function l6(e,t,a=!1){if(Zn(e.app))return Promise.reject(Jr(e));const o=Ka(e),l=V1(o,t),f=await new r6(o,l,a).execute();return f&&!a&&(delete f.user._redirectEventId,await o._persistUserIfCurrent(f.user),await o._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c6=10*60*1e3;class u6{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let a=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(t,o)&&(a=!0,this.sendToConsumer(t,o),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!d6(t)||(this.hasHandledPotentialRedirect=!0,a||(this.queuedRedirectEvent=t,a=!0)),a}sendToConsumer(t,a){var o;if(t.error&&!F1(t)){const l=((o=t.error.code)===null||o===void 0?void 0:o.split("auth/")[1])||"internal-error";a.onError(pr(this.auth,l))}else a.onAuthEvent(t)}isEventForConsumer(t,a){const o=a.eventId===null||!!t.eventId&&t.eventId===a.eventId;return a.filter.includes(t.type)&&o}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=c6&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cv(t))}saveEventToCache(t){this.cachedEventUids.add(Cv(t)),this.lastProcessedEventTime=Date.now()}}function Cv(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function F1({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function d6(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F1(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f6(e,t={}){return Xa(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m6=/^https?/;async function p6(e){if(e.config.emulator)return;const{authorizedDomains:t}=await f6(e);for(const a of t)try{if(g6(a))return}catch{}Wn(e,"unauthorized-domain")}function g6(e){const t=Vh(),{protocol:a,hostname:o}=new URL(t);if(e.startsWith("chrome-extension://")){const f=new URL(e);return f.hostname===""&&o===""?a==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):a==="chrome-extension:"&&f.hostname===o}if(!m6.test(a))return!1;if(h6.test(e))return o===e;const l=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(o)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b6=new gl(3e4,6e4);function kv(){const e=Rr().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let a=0;a<e.CP.length;a++)e.CP[a]=null}}function v6(e){return new Promise((t,a)=>{var o,l,c;function f(){kv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{kv(),a(pr(e,"network-request-failed"))},timeout:b6.get()})}if(!((l=(o=Rr().gapi)===null||o===void 0?void 0:o.iframes)===null||l===void 0)&&l.Iframe)t(gapi.iframes.getContext());else if(!((c=Rr().gapi)===null||c===void 0)&&c.load)f();else{const h=c3("iframefcb");return Rr()[h]=()=>{gapi.load?f():a(pr(e,"network-request-failed"))},k1(`${l3()}?onload=${h}`).catch(m=>a(m))}}).catch(t=>{throw Wc=null,t})}let Wc=null;function y6(e){return Wc=Wc||v6(e),Wc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w6=new gl(5e3,15e3),x6="__/auth/iframe",E6="emulator/auth/iframe",S6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T6(e){const t=e.config;ze(t.authDomain,e,"auth-domain-config-required");const a=t.emulator?vm(t,E6):`https://${e.config.authDomain}/${x6}`,o={apiKey:t.apiKey,appName:e.name,v:pl},l=_6.get(e.config.apiHost);l&&(o.eid=l);const c=e._getFrameworks();return c.length&&(o.fw=c.join(",")),`${a}?${ml(o).slice(1)}`}async function A6(e){const t=await y6(e),a=Rr().gapi;return ze(a,e,"internal-error"),t.open({where:document.body,url:T6(e),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S6,dontclear:!0},o=>new Promise(async(l,c)=>{await o.restyle({setHideOnLeave:!1});const f=pr(e,"network-request-failed"),h=Rr().setTimeout(()=>{c(f)},w6.get());function m(){Rr().clearTimeout(h),l(o)}o.ping(m).then(m,()=>{c(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C6=500,k6=600,R6="_blank",D6="http://localhost";class Rv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M6(e,t,a,o=C6,l=k6){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-o)/2,0).toString();let h="";const m=Object.assign(Object.assign({},O6),{width:o.toString(),height:l.toString(),top:c,left:f}),p=un().toLowerCase();a&&(h=E1(p)?R6:a),w1(p)&&(t=t||D6,m.scrollbars="yes");const b=Object.entries(m).reduce((y,[R,S])=>`${y}${R}=${S},`,"");if(W_(p)&&h!=="_self")return N6(t||"",h),new Rv(null);const x=window.open(t||"",h,b);ze(x,e,"popup-blocked");try{x.focus()}catch{}return new Rv(x)}function N6(e,t){const a=document.createElement("a");a.href=e,a.target=t;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L6="__/auth/handler",P6="emulator/auth/handler",z6=encodeURIComponent("fac");async function Dv(e,t,a,o,l,c){ze(e.config.authDomain,e,"auth-domain-config-required"),ze(e.config.apiKey,e,"invalid-api-key");const f={apiKey:e.config.apiKey,appName:e.name,authType:a,redirectUrl:o,v:pl,eventId:l};if(t instanceof Sm){t.setDefaultLanguage(e.languageCode),f.providerId=t.providerId||"",y4(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[b,x]of Object.entries({}))f[b]=x}if(t instanceof vl){const b=t.getScopes().filter(x=>x!=="");b.length>0&&(f.scopes=b.join(","))}e.tenantId&&(f.tid=e.tenantId);const h=f;for(const b of Object.keys(h))h[b]===void 0&&delete h[b];const m=await e._getAppCheckToken(),p=m?`#${z6}=${encodeURIComponent(m)}`:"";return`${U6(e)}?${ml(h).slice(1)}${p}`}function U6({config:e}){return e.emulator?vm(e,P6):`https://${e.authDomain}/${L6}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="webStorageSupport";class j6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=j1,this._completeRedirectFn=l6,this._overrideRedirectResult=i6}async _openPopup(t,a,o,l){var c;ta((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const f=await Dv(t,a,o,Vh(),l);return M6(t,f,_m())}async _openRedirect(t,a,o,l){await this._originValidation(t);const c=await Dv(t,a,o,Vh(),l);return H3(c),new Promise(()=>{})}_initialize(t){const a=t._key();if(this.eventManagers[a]){const{manager:l,promise:c}=this.eventManagers[a];return l?Promise.resolve(l):(ta(c,"If manager is not set, promise should be"),c)}const o=this.initAndGetManager(t);return this.eventManagers[a]={promise:o},o.catch(()=>{delete this.eventManagers[a]}),o}async initAndGetManager(t){const a=await A6(t),o=new u6(t);return a.register("authEvent",l=>(ze(l?.authEvent,t,"invalid-auth-event"),{status:o.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:o},this.iframes[t._key()]=a,o}_isIframeWebStorageSupported(t,a){this.iframes[t._key()].send(Th,{type:Th},l=>{var c;const f=(c=l?.[0])===null||c===void 0?void 0:c[Th];f!==void 0&&a(!!f),Wn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const a=t._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=p6(t)),this.originValidationPromises[a]}get _shouldInitProactively(){return O1()||x1()||wm()}}const B6=j6;var Mv="@firebase/auth",Nv="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I6{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const a=this.auth.onIdTokenChanged(o=>{t(o?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,a),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const a=this.internalListeners.get(t);a&&(this.internalListeners.delete(t),a(),this.updateProactiveRefresh())}assertAuthConfigured(){ze(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H6(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function q6(e){ol(new Ro("auth",(t,{options:a})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:f,authDomain:h}=o.options;ze(f&&!f.includes(":"),"invalid-api-key",{appName:o.name});const m={apiKey:f,authDomain:h,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:C1(e)},p=new i3(o,l,c,m);return p3(p,a),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,a,o)=>{t.getProvider("auth-internal").initialize()})),ol(new Ro("auth-internal",t=>{const a=Ka(t.getProvider("auth").getImmediate());return(o=>new I6(o))(a)},"PRIVATE").setInstantiationMode("EXPLICIT")),So(Mv,Nv,H6(e)),So(Mv,Nv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V6=5*60,$6=i1("authIdTokenMaxAge")||V6;let Lv=null;const F6=e=>async t=>{const a=t&&await t.getIdTokenResult(),o=a&&(new Date().getTime()-Date.parse(a.issuedAtTime))/1e3;if(o&&o>$6)return;const l=a?.token;Lv!==l&&(Lv=l,await fetch(e,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function Y6(e=x_()){const t=c1(e,"auth");if(t.isInitialized())return t.getImmediate();const a=m3(e,{popupRedirectResolver:B6,persistence:[Z3,j3,j1]}),o=i1("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(o,location.origin);if(location.origin===c.origin){const f=F6(c.toString());N3(a,f,()=>f(a.currentUser)),M3(a,h=>f(h))}}const l=r4("auth");return l&&g3(a,`http://${l}`),a}function G6(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}o3({loadJS(e){return new Promise((t,a)=>{const o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=l=>{const c=pr("internal-error");c.customData=l,a(c)},o.type="text/javascript",o.charset="UTF-8",G6().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});q6("Browser");var X6="firebase",K6="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */So(X6,K6,"app");const Z6={apiKey:"AIzaSyBGI9Ro0yiAGO8qaM9AdF-9ko_c4gzZBt0",authDomain:"planzone-8aa58.firebaseapp.com",projectId:"planzone-8aa58",storageBucket:"planzone-8aa58.firebasestorage.app",messagingSenderId:"982601947906",appId:"1:982601947906:web:599d6825a33bcf2001c01b"},Q6=u1(Z6),Y1=I.createContext(null),$s=Y6(Q6),J6=new Kr,W6=({children:e})=>{const[t,a]=I.useState(null),[o,l]=I.useState(!0);I.useEffect(()=>{const b=L3($s,x=>{a(x),l(!1)});return()=>{b()}},[]);const p={user:t,loading:o,createUser:(b,x)=>(l(!0),R3($s,b,x)),login:(b,x)=>(l(!0),D3($s,b,x)),logout:()=>(l(!0),P3($s)),googleLogin:()=>(l(!0),t6($s,J6))};return w.jsx(Y1.Provider,{value:p,children:e})},Za=()=>I.useContext(Y1);function G1(e,t){return function(){return e.apply(t,arguments)}}const{toString:eT}=Object.prototype,{getPrototypeOf:Am}=Object,{iterator:Vu,toStringTag:X1}=Symbol,$u=(e=>t=>{const a=eT.call(t);return e[a]||(e[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),br=e=>(e=e.toLowerCase(),t=>$u(t)===e),Fu=e=>t=>typeof t===e,{isArray:Po}=Array,ul=Fu("undefined");function tT(e){return e!==null&&!ul(e)&&e.constructor!==null&&!ul(e.constructor)&&xn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const K1=br("ArrayBuffer");function nT(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&K1(e.buffer),t}const rT=Fu("string"),xn=Fu("function"),Z1=Fu("number"),Yu=e=>e!==null&&typeof e=="object",aT=e=>e===!0||e===!1,eu=e=>{if($u(e)!=="object")return!1;const t=Am(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(X1 in e)&&!(Vu in e)},iT=br("Date"),oT=br("File"),sT=br("Blob"),lT=br("FileList"),cT=e=>Yu(e)&&xn(e.pipe),uT=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||xn(e.append)&&((t=$u(e))==="formdata"||t==="object"&&xn(e.toString)&&e.toString()==="[object FormData]"))},dT=br("URLSearchParams"),[fT,hT,mT,pT]=["ReadableStream","Request","Response","Headers"].map(br),gT=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function wl(e,t,{allOwnKeys:a=!1}={}){if(e===null||typeof e>"u")return;let o,l;if(typeof e!="object"&&(e=[e]),Po(e))for(o=0,l=e.length;o<l;o++)t.call(null,e[o],o,e);else{const c=a?Object.getOwnPropertyNames(e):Object.keys(e),f=c.length;let h;for(o=0;o<f;o++)h=c[o],t.call(null,e[h],h,e)}}function Q1(e,t){t=t.toLowerCase();const a=Object.keys(e);let o=a.length,l;for(;o-- >0;)if(l=a[o],t===l.toLowerCase())return l;return null}const _i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,J1=e=>!ul(e)&&e!==_i;function Gh(){const{caseless:e}=J1(this)&&this||{},t={},a=(o,l)=>{const c=e&&Q1(t,l)||l;eu(t[c])&&eu(o)?t[c]=Gh(t[c],o):eu(o)?t[c]=Gh({},o):Po(o)?t[c]=o.slice():t[c]=o};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&wl(arguments[o],a);return t}const bT=(e,t,a,{allOwnKeys:o}={})=>(wl(t,(l,c)=>{a&&xn(l)?e[c]=G1(l,a):e[c]=l},{allOwnKeys:o}),e),vT=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),yT=(e,t,a,o)=>{e.prototype=Object.create(t.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),a&&Object.assign(e.prototype,a)},wT=(e,t,a,o)=>{let l,c,f;const h={};if(t=t||{},e==null)return t;do{for(l=Object.getOwnPropertyNames(e),c=l.length;c-- >0;)f=l[c],(!o||o(f,e,t))&&!h[f]&&(t[f]=e[f],h[f]=!0);e=a!==!1&&Am(e)}while(e&&(!a||a(e,t))&&e!==Object.prototype);return t},xT=(e,t,a)=>{e=String(e),(a===void 0||a>e.length)&&(a=e.length),a-=t.length;const o=e.indexOf(t,a);return o!==-1&&o===a},ET=e=>{if(!e)return null;if(Po(e))return e;let t=e.length;if(!Z1(t))return null;const a=new Array(t);for(;t-- >0;)a[t]=e[t];return a},ST=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Am(Uint8Array)),_T=(e,t)=>{const o=(e&&e[Vu]).call(e);let l;for(;(l=o.next())&&!l.done;){const c=l.value;t.call(e,c[0],c[1])}},TT=(e,t)=>{let a;const o=[];for(;(a=e.exec(t))!==null;)o.push(a);return o},AT=br("HTMLFormElement"),OT=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(a,o,l){return o.toUpperCase()+l}),Pv=(({hasOwnProperty:e})=>(t,a)=>e.call(t,a))(Object.prototype),CT=br("RegExp"),W1=(e,t)=>{const a=Object.getOwnPropertyDescriptors(e),o={};wl(a,(l,c)=>{let f;(f=t(l,c,e))!==!1&&(o[c]=f||l)}),Object.defineProperties(e,o)},kT=e=>{W1(e,(t,a)=>{if(xn(e)&&["arguments","caller","callee"].indexOf(a)!==-1)return!1;const o=e[a];if(xn(o)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+a+"'")})}})},RT=(e,t)=>{const a={},o=l=>{l.forEach(c=>{a[c]=!0})};return Po(e)?o(e):o(String(e).split(t)),a},DT=()=>{},MT=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function NT(e){return!!(e&&xn(e.append)&&e[X1]==="FormData"&&e[Vu])}const LT=e=>{const t=new Array(10),a=(o,l)=>{if(Yu(o)){if(t.indexOf(o)>=0)return;if(!("toJSON"in o)){t[l]=o;const c=Po(o)?[]:{};return wl(o,(f,h)=>{const m=a(f,l+1);!ul(m)&&(c[h]=m)}),t[l]=void 0,c}}return o};return a(e,0)},PT=br("AsyncFunction"),zT=e=>e&&(Yu(e)||xn(e))&&xn(e.then)&&xn(e.catch),e2=((e,t)=>e?setImmediate:t?((a,o)=>(_i.addEventListener("message",({source:l,data:c})=>{l===_i&&c===a&&o.length&&o.shift()()},!1),l=>{o.push(l),_i.postMessage(a,"*")}))(`axios@${Math.random()}`,[]):a=>setTimeout(a))(typeof setImmediate=="function",xn(_i.postMessage)),UT=typeof queueMicrotask<"u"?queueMicrotask.bind(_i):typeof process<"u"&&process.nextTick||e2,jT=e=>e!=null&&xn(e[Vu]),Y={isArray:Po,isArrayBuffer:K1,isBuffer:tT,isFormData:uT,isArrayBufferView:nT,isString:rT,isNumber:Z1,isBoolean:aT,isObject:Yu,isPlainObject:eu,isReadableStream:fT,isRequest:hT,isResponse:mT,isHeaders:pT,isUndefined:ul,isDate:iT,isFile:oT,isBlob:sT,isRegExp:CT,isFunction:xn,isStream:cT,isURLSearchParams:dT,isTypedArray:ST,isFileList:lT,forEach:wl,merge:Gh,extend:bT,trim:gT,stripBOM:vT,inherits:yT,toFlatObject:wT,kindOf:$u,kindOfTest:br,endsWith:xT,toArray:ET,forEachEntry:_T,matchAll:TT,isHTMLForm:AT,hasOwnProperty:Pv,hasOwnProp:Pv,reduceDescriptors:W1,freezeMethods:kT,toObjectSet:RT,toCamelCase:OT,noop:DT,toFiniteNumber:MT,findKey:Q1,global:_i,isContextDefined:J1,isSpecCompliantForm:NT,toJSONObject:LT,isAsyncFn:PT,isThenable:zT,setImmediate:e2,asap:UT,isIterable:jT};function He(e,t,a,o,l){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),a&&(this.config=a),o&&(this.request=o),l&&(this.response=l,this.status=l.status?l.status:null)}Y.inherits(He,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.status}}});const t2=He.prototype,n2={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{n2[e]={value:e}});Object.defineProperties(He,n2);Object.defineProperty(t2,"isAxiosError",{value:!0});He.from=(e,t,a,o,l,c)=>{const f=Object.create(t2);return Y.toFlatObject(e,f,function(m){return m!==Error.prototype},h=>h!=="isAxiosError"),He.call(f,e.message,t,a,o,l),f.cause=e,f.name=e.name,c&&Object.assign(f,c),f};const BT=null;function Xh(e){return Y.isPlainObject(e)||Y.isArray(e)}function r2(e){return Y.endsWith(e,"[]")?e.slice(0,-2):e}function zv(e,t,a){return e?e.concat(t).map(function(l,c){return l=r2(l),!a&&c?"["+l+"]":l}).join(a?".":""):t}function IT(e){return Y.isArray(e)&&!e.some(Xh)}const HT=Y.toFlatObject(Y,{},null,function(t){return/^is[A-Z]/.test(t)});function Gu(e,t,a){if(!Y.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,a=Y.toFlatObject(a,{metaTokens:!0,dots:!1,indexes:!1},!1,function(A,N){return!Y.isUndefined(N[A])});const o=a.metaTokens,l=a.visitor||b,c=a.dots,f=a.indexes,m=(a.Blob||typeof Blob<"u"&&Blob)&&Y.isSpecCompliantForm(t);if(!Y.isFunction(l))throw new TypeError("visitor must be a function");function p(S){if(S===null)return"";if(Y.isDate(S))return S.toISOString();if(Y.isBoolean(S))return S.toString();if(!m&&Y.isBlob(S))throw new He("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(S)||Y.isTypedArray(S)?m&&typeof Blob=="function"?new Blob([S]):Buffer.from(S):S}function b(S,A,N){let z=S;if(S&&!N&&typeof S=="object"){if(Y.endsWith(A,"{}"))A=o?A:A.slice(0,-2),S=JSON.stringify(S);else if(Y.isArray(S)&&IT(S)||(Y.isFileList(S)||Y.endsWith(A,"[]"))&&(z=Y.toArray(S)))return A=r2(A),z.forEach(function(K,ce){!(Y.isUndefined(K)||K===null)&&t.append(f===!0?zv([A],ce,c):f===null?A:A+"[]",p(K))}),!1}return Xh(S)?!0:(t.append(zv(N,A,c),p(S)),!1)}const x=[],y=Object.assign(HT,{defaultVisitor:b,convertValue:p,isVisitable:Xh});function R(S,A){if(!Y.isUndefined(S)){if(x.indexOf(S)!==-1)throw Error("Circular reference detected in "+A.join("."));x.push(S),Y.forEach(S,function(z,Q){(!(Y.isUndefined(z)||z===null)&&l.call(t,z,Y.isString(Q)?Q.trim():Q,A,y))===!0&&R(z,A?A.concat(Q):[Q])}),x.pop()}}if(!Y.isObject(e))throw new TypeError("data must be an object");return R(e),t}function Uv(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return t[o]})}function Om(e,t){this._pairs=[],e&&Gu(e,this,t)}const a2=Om.prototype;a2.append=function(t,a){this._pairs.push([t,a])};a2.toString=function(t){const a=t?function(o){return t.call(this,o,Uv)}:Uv;return this._pairs.map(function(l){return a(l[0])+"="+a(l[1])},"").join("&")};function qT(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function i2(e,t,a){if(!t)return e;const o=a&&a.encode||qT;Y.isFunction(a)&&(a={serialize:a});const l=a&&a.serialize;let c;if(l?c=l(t,a):c=Y.isURLSearchParams(t)?t.toString():new Om(t,a).toString(o),c){const f=e.indexOf("#");f!==-1&&(e=e.slice(0,f)),e+=(e.indexOf("?")===-1?"?":"&")+c}return e}class jv{constructor(){this.handlers=[]}use(t,a,o){return this.handlers.push({fulfilled:t,rejected:a,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){Y.forEach(this.handlers,function(o){o!==null&&t(o)})}}const o2={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},VT=typeof URLSearchParams<"u"?URLSearchParams:Om,$T=typeof FormData<"u"?FormData:null,FT=typeof Blob<"u"?Blob:null,YT={isBrowser:!0,classes:{URLSearchParams:VT,FormData:$T,Blob:FT},protocols:["http","https","file","blob","url","data"]},Cm=typeof window<"u"&&typeof document<"u",Kh=typeof navigator=="object"&&navigator||void 0,GT=Cm&&(!Kh||["ReactNative","NativeScript","NS"].indexOf(Kh.product)<0),XT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",KT=Cm&&window.location.href||"http://localhost",ZT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Cm,hasStandardBrowserEnv:GT,hasStandardBrowserWebWorkerEnv:XT,navigator:Kh,origin:KT},Symbol.toStringTag,{value:"Module"})),nn={...ZT,...YT};function QT(e,t){return Gu(e,new nn.classes.URLSearchParams,Object.assign({visitor:function(a,o,l,c){return nn.isNode&&Y.isBuffer(a)?(this.append(o,a.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)}},t))}function JT(e){return Y.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function WT(e){const t={},a=Object.keys(e);let o;const l=a.length;let c;for(o=0;o<l;o++)c=a[o],t[c]=e[c];return t}function s2(e){function t(a,o,l,c){let f=a[c++];if(f==="__proto__")return!0;const h=Number.isFinite(+f),m=c>=a.length;return f=!f&&Y.isArray(l)?l.length:f,m?(Y.hasOwnProp(l,f)?l[f]=[l[f],o]:l[f]=o,!h):((!l[f]||!Y.isObject(l[f]))&&(l[f]=[]),t(a,o,l[f],c)&&Y.isArray(l[f])&&(l[f]=WT(l[f])),!h)}if(Y.isFormData(e)&&Y.isFunction(e.entries)){const a={};return Y.forEachEntry(e,(o,l)=>{t(JT(o),l,a,0)}),a}return null}function eA(e,t,a){if(Y.isString(e))try{return(t||JSON.parse)(e),Y.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(a||JSON.stringify)(e)}const xl={transitional:o2,adapter:["xhr","http","fetch"],transformRequest:[function(t,a){const o=a.getContentType()||"",l=o.indexOf("application/json")>-1,c=Y.isObject(t);if(c&&Y.isHTMLForm(t)&&(t=new FormData(t)),Y.isFormData(t))return l?JSON.stringify(s2(t)):t;if(Y.isArrayBuffer(t)||Y.isBuffer(t)||Y.isStream(t)||Y.isFile(t)||Y.isBlob(t)||Y.isReadableStream(t))return t;if(Y.isArrayBufferView(t))return t.buffer;if(Y.isURLSearchParams(t))return a.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let h;if(c){if(o.indexOf("application/x-www-form-urlencoded")>-1)return QT(t,this.formSerializer).toString();if((h=Y.isFileList(t))||o.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Gu(h?{"files[]":t}:t,m&&new m,this.formSerializer)}}return c||l?(a.setContentType("application/json",!1),eA(t)):t}],transformResponse:[function(t){const a=this.transitional||xl.transitional,o=a&&a.forcedJSONParsing,l=this.responseType==="json";if(Y.isResponse(t)||Y.isReadableStream(t))return t;if(t&&Y.isString(t)&&(o&&!this.responseType||l)){const f=!(a&&a.silentJSONParsing)&&l;try{return JSON.parse(t)}catch(h){if(f)throw h.name==="SyntaxError"?He.from(h,He.ERR_BAD_RESPONSE,this,null,this.response):h}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nn.classes.FormData,Blob:nn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Y.forEach(["delete","get","head","post","put","patch"],e=>{xl.headers[e]={}});const tA=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nA=e=>{const t={};let a,o,l;return e&&e.split(`
`).forEach(function(f){l=f.indexOf(":"),a=f.substring(0,l).trim().toLowerCase(),o=f.substring(l+1).trim(),!(!a||t[a]&&tA[a])&&(a==="set-cookie"?t[a]?t[a].push(o):t[a]=[o]:t[a]=t[a]?t[a]+", "+o:o)}),t},Bv=Symbol("internals");function Fs(e){return e&&String(e).trim().toLowerCase()}function tu(e){return e===!1||e==null?e:Y.isArray(e)?e.map(tu):String(e)}function rA(e){const t=Object.create(null),a=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=a.exec(e);)t[o[1]]=o[2];return t}const aA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ah(e,t,a,o,l){if(Y.isFunction(o))return o.call(this,t,a);if(l&&(t=a),!!Y.isString(t)){if(Y.isString(o))return t.indexOf(o)!==-1;if(Y.isRegExp(o))return o.test(t)}}function iA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,a,o)=>a.toUpperCase()+o)}function oA(e,t){const a=Y.toCamelCase(" "+t);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+a,{value:function(l,c,f){return this[o].call(this,t,l,c,f)},configurable:!0})})}let En=class{constructor(t){t&&this.set(t)}set(t,a,o){const l=this;function c(h,m,p){const b=Fs(m);if(!b)throw new Error("header name must be a non-empty string");const x=Y.findKey(l,b);(!x||l[x]===void 0||p===!0||p===void 0&&l[x]!==!1)&&(l[x||m]=tu(h))}const f=(h,m)=>Y.forEach(h,(p,b)=>c(p,b,m));if(Y.isPlainObject(t)||t instanceof this.constructor)f(t,a);else if(Y.isString(t)&&(t=t.trim())&&!aA(t))f(nA(t),a);else if(Y.isObject(t)&&Y.isIterable(t)){let h={},m,p;for(const b of t){if(!Y.isArray(b))throw TypeError("Object iterator must return a key-value pair");h[p=b[0]]=(m=h[p])?Y.isArray(m)?[...m,b[1]]:[m,b[1]]:b[1]}f(h,a)}else t!=null&&c(a,t,o);return this}get(t,a){if(t=Fs(t),t){const o=Y.findKey(this,t);if(o){const l=this[o];if(!a)return l;if(a===!0)return rA(l);if(Y.isFunction(a))return a.call(this,l,o);if(Y.isRegExp(a))return a.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,a){if(t=Fs(t),t){const o=Y.findKey(this,t);return!!(o&&this[o]!==void 0&&(!a||Ah(this,this[o],o,a)))}return!1}delete(t,a){const o=this;let l=!1;function c(f){if(f=Fs(f),f){const h=Y.findKey(o,f);h&&(!a||Ah(o,o[h],h,a))&&(delete o[h],l=!0)}}return Y.isArray(t)?t.forEach(c):c(t),l}clear(t){const a=Object.keys(this);let o=a.length,l=!1;for(;o--;){const c=a[o];(!t||Ah(this,this[c],c,t,!0))&&(delete this[c],l=!0)}return l}normalize(t){const a=this,o={};return Y.forEach(this,(l,c)=>{const f=Y.findKey(o,c);if(f){a[f]=tu(l),delete a[c];return}const h=t?iA(c):String(c).trim();h!==c&&delete a[c],a[h]=tu(l),o[h]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const a=Object.create(null);return Y.forEach(this,(o,l)=>{o!=null&&o!==!1&&(a[l]=t&&Y.isArray(o)?o.join(", "):o)}),a}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,a])=>t+": "+a).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...a){const o=new this(t);return a.forEach(l=>o.set(l)),o}static accessor(t){const o=(this[Bv]=this[Bv]={accessors:{}}).accessors,l=this.prototype;function c(f){const h=Fs(f);o[h]||(oA(l,f),o[h]=!0)}return Y.isArray(t)?t.forEach(c):c(t),this}};En.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Y.reduceDescriptors(En.prototype,({value:e},t)=>{let a=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(o){this[a]=o}}});Y.freezeMethods(En);function Oh(e,t){const a=this||xl,o=t||a,l=En.from(o.headers);let c=o.data;return Y.forEach(e,function(h){c=h.call(a,c,l.normalize(),t?t.status:void 0)}),l.normalize(),c}function l2(e){return!!(e&&e.__CANCEL__)}function zo(e,t,a){He.call(this,e??"canceled",He.ERR_CANCELED,t,a),this.name="CanceledError"}Y.inherits(zo,He,{__CANCEL__:!0});function c2(e,t,a){const o=a.config.validateStatus;!a.status||!o||o(a.status)?e(a):t(new He("Request failed with status code "+a.status,[He.ERR_BAD_REQUEST,He.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))}function sA(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function lA(e,t){e=e||10;const a=new Array(e),o=new Array(e);let l=0,c=0,f;return t=t!==void 0?t:1e3,function(m){const p=Date.now(),b=o[c];f||(f=p),a[l]=m,o[l]=p;let x=c,y=0;for(;x!==l;)y+=a[x++],x=x%e;if(l=(l+1)%e,l===c&&(c=(c+1)%e),p-f<t)return;const R=b&&p-b;return R?Math.round(y*1e3/R):void 0}}function cA(e,t){let a=0,o=1e3/t,l,c;const f=(p,b=Date.now())=>{a=b,l=null,c&&(clearTimeout(c),c=null),e.apply(null,p)};return[(...p)=>{const b=Date.now(),x=b-a;x>=o?f(p,b):(l=p,c||(c=setTimeout(()=>{c=null,f(l)},o-x)))},()=>l&&f(l)]}const bu=(e,t,a=3)=>{let o=0;const l=lA(50,250);return cA(c=>{const f=c.loaded,h=c.lengthComputable?c.total:void 0,m=f-o,p=l(m),b=f<=h;o=f;const x={loaded:f,total:h,progress:h?f/h:void 0,bytes:m,rate:p||void 0,estimated:p&&h&&b?(h-f)/p:void 0,event:c,lengthComputable:h!=null,[t?"download":"upload"]:!0};e(x)},a)},Iv=(e,t)=>{const a=e!=null;return[o=>t[0]({lengthComputable:a,total:e,loaded:o}),t[1]]},Hv=e=>(...t)=>Y.asap(()=>e(...t)),uA=nn.hasStandardBrowserEnv?((e,t)=>a=>(a=new URL(a,nn.origin),e.protocol===a.protocol&&e.host===a.host&&(t||e.port===a.port)))(new URL(nn.origin),nn.navigator&&/(msie|trident)/i.test(nn.navigator.userAgent)):()=>!0,dA=nn.hasStandardBrowserEnv?{write(e,t,a,o,l,c){const f=[e+"="+encodeURIComponent(t)];Y.isNumber(a)&&f.push("expires="+new Date(a).toGMTString()),Y.isString(o)&&f.push("path="+o),Y.isString(l)&&f.push("domain="+l),c===!0&&f.push("secure"),document.cookie=f.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function fA(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function hA(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function u2(e,t,a){let o=!fA(t);return e&&(o||a==!1)?hA(e,t):t}const qv=e=>e instanceof En?{...e}:e;function Ri(e,t){t=t||{};const a={};function o(p,b,x,y){return Y.isPlainObject(p)&&Y.isPlainObject(b)?Y.merge.call({caseless:y},p,b):Y.isPlainObject(b)?Y.merge({},b):Y.isArray(b)?b.slice():b}function l(p,b,x,y){if(Y.isUndefined(b)){if(!Y.isUndefined(p))return o(void 0,p,x,y)}else return o(p,b,x,y)}function c(p,b){if(!Y.isUndefined(b))return o(void 0,b)}function f(p,b){if(Y.isUndefined(b)){if(!Y.isUndefined(p))return o(void 0,p)}else return o(void 0,b)}function h(p,b,x){if(x in t)return o(p,b);if(x in e)return o(void 0,p)}const m={url:c,method:c,data:c,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:h,headers:(p,b,x)=>l(qv(p),qv(b),x,!0)};return Y.forEach(Object.keys(Object.assign({},e,t)),function(b){const x=m[b]||l,y=x(e[b],t[b],b);Y.isUndefined(y)&&x!==h||(a[b]=y)}),a}const d2=e=>{const t=Ri({},e);let{data:a,withXSRFToken:o,xsrfHeaderName:l,xsrfCookieName:c,headers:f,auth:h}=t;t.headers=f=En.from(f),t.url=i2(u2(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),h&&f.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):"")));let m;if(Y.isFormData(a)){if(nn.hasStandardBrowserEnv||nn.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((m=f.getContentType())!==!1){const[p,...b]=m?m.split(";").map(x=>x.trim()).filter(Boolean):[];f.setContentType([p||"multipart/form-data",...b].join("; "))}}if(nn.hasStandardBrowserEnv&&(o&&Y.isFunction(o)&&(o=o(t)),o||o!==!1&&uA(t.url))){const p=l&&c&&dA.read(c);p&&f.set(l,p)}return t},mA=typeof XMLHttpRequest<"u",pA=mA&&function(e){return new Promise(function(a,o){const l=d2(e);let c=l.data;const f=En.from(l.headers).normalize();let{responseType:h,onUploadProgress:m,onDownloadProgress:p}=l,b,x,y,R,S;function A(){R&&R(),S&&S(),l.cancelToken&&l.cancelToken.unsubscribe(b),l.signal&&l.signal.removeEventListener("abort",b)}let N=new XMLHttpRequest;N.open(l.method.toUpperCase(),l.url,!0),N.timeout=l.timeout;function z(){if(!N)return;const K=En.from("getAllResponseHeaders"in N&&N.getAllResponseHeaders()),J={data:!h||h==="text"||h==="json"?N.responseText:N.response,status:N.status,statusText:N.statusText,headers:K,config:e,request:N};c2(function(me){a(me),A()},function(me){o(me),A()},J),N=null}"onloadend"in N?N.onloadend=z:N.onreadystatechange=function(){!N||N.readyState!==4||N.status===0&&!(N.responseURL&&N.responseURL.indexOf("file:")===0)||setTimeout(z)},N.onabort=function(){N&&(o(new He("Request aborted",He.ECONNABORTED,e,N)),N=null)},N.onerror=function(){o(new He("Network Error",He.ERR_NETWORK,e,N)),N=null},N.ontimeout=function(){let ce=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const J=l.transitional||o2;l.timeoutErrorMessage&&(ce=l.timeoutErrorMessage),o(new He(ce,J.clarifyTimeoutError?He.ETIMEDOUT:He.ECONNABORTED,e,N)),N=null},c===void 0&&f.setContentType(null),"setRequestHeader"in N&&Y.forEach(f.toJSON(),function(ce,J){N.setRequestHeader(J,ce)}),Y.isUndefined(l.withCredentials)||(N.withCredentials=!!l.withCredentials),h&&h!=="json"&&(N.responseType=l.responseType),p&&([y,S]=bu(p,!0),N.addEventListener("progress",y)),m&&N.upload&&([x,R]=bu(m),N.upload.addEventListener("progress",x),N.upload.addEventListener("loadend",R)),(l.cancelToken||l.signal)&&(b=K=>{N&&(o(!K||K.type?new zo(null,e,N):K),N.abort(),N=null)},l.cancelToken&&l.cancelToken.subscribe(b),l.signal&&(l.signal.aborted?b():l.signal.addEventListener("abort",b)));const Q=sA(l.url);if(Q&&nn.protocols.indexOf(Q)===-1){o(new He("Unsupported protocol "+Q+":",He.ERR_BAD_REQUEST,e));return}N.send(c||null)})},gA=(e,t)=>{const{length:a}=e=e?e.filter(Boolean):[];if(t||a){let o=new AbortController,l;const c=function(p){if(!l){l=!0,h();const b=p instanceof Error?p:this.reason;o.abort(b instanceof He?b:new zo(b instanceof Error?b.message:b))}};let f=t&&setTimeout(()=>{f=null,c(new He(`timeout ${t} of ms exceeded`,He.ETIMEDOUT))},t);const h=()=>{e&&(f&&clearTimeout(f),f=null,e.forEach(p=>{p.unsubscribe?p.unsubscribe(c):p.removeEventListener("abort",c)}),e=null)};e.forEach(p=>p.addEventListener("abort",c));const{signal:m}=o;return m.unsubscribe=()=>Y.asap(h),m}},bA=function*(e,t){let a=e.byteLength;if(a<t){yield e;return}let o=0,l;for(;o<a;)l=o+t,yield e.slice(o,l),o=l},vA=async function*(e,t){for await(const a of yA(e))yield*bA(a,t)},yA=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:a,value:o}=await t.read();if(a)break;yield o}}finally{await t.cancel()}},Vv=(e,t,a,o)=>{const l=vA(e,t);let c=0,f,h=m=>{f||(f=!0,o&&o(m))};return new ReadableStream({async pull(m){try{const{done:p,value:b}=await l.next();if(p){h(),m.close();return}let x=b.byteLength;if(a){let y=c+=x;a(y)}m.enqueue(new Uint8Array(b))}catch(p){throw h(p),p}},cancel(m){return h(m),l.return()}},{highWaterMark:2})},Xu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",f2=Xu&&typeof ReadableStream=="function",wA=Xu&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),h2=(e,...t)=>{try{return!!e(...t)}catch{return!1}},xA=f2&&h2(()=>{let e=!1;const t=new Request(nn.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),$v=64*1024,Zh=f2&&h2(()=>Y.isReadableStream(new Response("").body)),vu={stream:Zh&&(e=>e.body)};Xu&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!vu[t]&&(vu[t]=Y.isFunction(e[t])?a=>a[t]():(a,o)=>{throw new He(`Response type '${t}' is not supported`,He.ERR_NOT_SUPPORT,o)})})})(new Response);const EA=async e=>{if(e==null)return 0;if(Y.isBlob(e))return e.size;if(Y.isSpecCompliantForm(e))return(await new Request(nn.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(Y.isArrayBufferView(e)||Y.isArrayBuffer(e))return e.byteLength;if(Y.isURLSearchParams(e)&&(e=e+""),Y.isString(e))return(await wA(e)).byteLength},SA=async(e,t)=>{const a=Y.toFiniteNumber(e.getContentLength());return a??EA(t)},_A=Xu&&(async e=>{let{url:t,method:a,data:o,signal:l,cancelToken:c,timeout:f,onDownloadProgress:h,onUploadProgress:m,responseType:p,headers:b,withCredentials:x="same-origin",fetchOptions:y}=d2(e);p=p?(p+"").toLowerCase():"text";let R=gA([l,c&&c.toAbortSignal()],f),S;const A=R&&R.unsubscribe&&(()=>{R.unsubscribe()});let N;try{if(m&&xA&&a!=="get"&&a!=="head"&&(N=await SA(b,o))!==0){let J=new Request(t,{method:"POST",body:o,duplex:"half"}),D;if(Y.isFormData(o)&&(D=J.headers.get("content-type"))&&b.setContentType(D),J.body){const[me,_e]=Iv(N,bu(Hv(m)));o=Vv(J.body,$v,me,_e)}}Y.isString(x)||(x=x?"include":"omit");const z="credentials"in Request.prototype;S=new Request(t,{...y,signal:R,method:a.toUpperCase(),headers:b.normalize().toJSON(),body:o,duplex:"half",credentials:z?x:void 0});let Q=await fetch(S,y);const K=Zh&&(p==="stream"||p==="response");if(Zh&&(h||K&&A)){const J={};["status","statusText","headers"].forEach(ue=>{J[ue]=Q[ue]});const D=Y.toFiniteNumber(Q.headers.get("content-length")),[me,_e]=h&&Iv(D,bu(Hv(h),!0))||[];Q=new Response(Vv(Q.body,$v,me,()=>{_e&&_e(),A&&A()}),J)}p=p||"text";let ce=await vu[Y.findKey(vu,p)||"text"](Q,e);return!K&&A&&A(),await new Promise((J,D)=>{c2(J,D,{data:ce,headers:En.from(Q.headers),status:Q.status,statusText:Q.statusText,config:e,request:S})})}catch(z){throw A&&A(),z&&z.name==="TypeError"&&/Load failed|fetch/i.test(z.message)?Object.assign(new He("Network Error",He.ERR_NETWORK,e,S),{cause:z.cause||z}):He.from(z,z&&z.code,e,S)}}),Qh={http:BT,xhr:pA,fetch:_A};Y.forEach(Qh,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Fv=e=>`- ${e}`,TA=e=>Y.isFunction(e)||e===null||e===!1,m2={getAdapter:e=>{e=Y.isArray(e)?e:[e];const{length:t}=e;let a,o;const l={};for(let c=0;c<t;c++){a=e[c];let f;if(o=a,!TA(a)&&(o=Qh[(f=String(a)).toLowerCase()],o===void 0))throw new He(`Unknown adapter '${f}'`);if(o)break;l[f||"#"+c]=o}if(!o){const c=Object.entries(l).map(([h,m])=>`adapter ${h} `+(m===!1?"is not supported by the environment":"is not available in the build"));let f=t?c.length>1?`since :
`+c.map(Fv).join(`
`):" "+Fv(c[0]):"as no adapter specified";throw new He("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return o},adapters:Qh};function Ch(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new zo(null,e)}function Yv(e){return Ch(e),e.headers=En.from(e.headers),e.data=Oh.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),m2.getAdapter(e.adapter||xl.adapter)(e).then(function(o){return Ch(e),o.data=Oh.call(e,e.transformResponse,o),o.headers=En.from(o.headers),o},function(o){return l2(o)||(Ch(e),o&&o.response&&(o.response.data=Oh.call(e,e.transformResponse,o.response),o.response.headers=En.from(o.response.headers))),Promise.reject(o)})}const p2="1.10.0",Ku={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ku[e]=function(o){return typeof o===e||"a"+(t<1?"n ":" ")+e}});const Gv={};Ku.transitional=function(t,a,o){function l(c,f){return"[Axios v"+p2+"] Transitional option '"+c+"'"+f+(o?". "+o:"")}return(c,f,h)=>{if(t===!1)throw new He(l(f," has been removed"+(a?" in "+a:"")),He.ERR_DEPRECATED);return a&&!Gv[f]&&(Gv[f]=!0,console.warn(l(f," has been deprecated since v"+a+" and will be removed in the near future"))),t?t(c,f,h):!0}};Ku.spelling=function(t){return(a,o)=>(console.warn(`${o} is likely a misspelling of ${t}`),!0)};function AA(e,t,a){if(typeof e!="object")throw new He("options must be an object",He.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let l=o.length;for(;l-- >0;){const c=o[l],f=t[c];if(f){const h=e[c],m=h===void 0||f(h,c,e);if(m!==!0)throw new He("option "+c+" must be "+m,He.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new He("Unknown option "+c,He.ERR_BAD_OPTION)}}const nu={assertOptions:AA,validators:Ku},_r=nu.validators;let Ai=class{constructor(t){this.defaults=t||{},this.interceptors={request:new jv,response:new jv}}async request(t,a){try{return await this._request(t,a)}catch(o){if(o instanceof Error){let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const c=l.stack?l.stack.replace(/^.+\n/,""):"";try{o.stack?c&&!String(o.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+c):o.stack=c}catch{}}throw o}}_request(t,a){typeof t=="string"?(a=a||{},a.url=t):a=t||{},a=Ri(this.defaults,a);const{transitional:o,paramsSerializer:l,headers:c}=a;o!==void 0&&nu.assertOptions(o,{silentJSONParsing:_r.transitional(_r.boolean),forcedJSONParsing:_r.transitional(_r.boolean),clarifyTimeoutError:_r.transitional(_r.boolean)},!1),l!=null&&(Y.isFunction(l)?a.paramsSerializer={serialize:l}:nu.assertOptions(l,{encode:_r.function,serialize:_r.function},!0)),a.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?a.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:a.allowAbsoluteUrls=!0),nu.assertOptions(a,{baseUrl:_r.spelling("baseURL"),withXsrfToken:_r.spelling("withXSRFToken")},!0),a.method=(a.method||this.defaults.method||"get").toLowerCase();let f=c&&Y.merge(c.common,c[a.method]);c&&Y.forEach(["delete","get","head","post","put","patch","common"],S=>{delete c[S]}),a.headers=En.concat(f,c);const h=[];let m=!0;this.interceptors.request.forEach(function(A){typeof A.runWhen=="function"&&A.runWhen(a)===!1||(m=m&&A.synchronous,h.unshift(A.fulfilled,A.rejected))});const p=[];this.interceptors.response.forEach(function(A){p.push(A.fulfilled,A.rejected)});let b,x=0,y;if(!m){const S=[Yv.bind(this),void 0];for(S.unshift.apply(S,h),S.push.apply(S,p),y=S.length,b=Promise.resolve(a);x<y;)b=b.then(S[x++],S[x++]);return b}y=h.length;let R=a;for(x=0;x<y;){const S=h[x++],A=h[x++];try{R=S(R)}catch(N){A.call(this,N);break}}try{b=Yv.call(this,R)}catch(S){return Promise.reject(S)}for(x=0,y=p.length;x<y;)b=b.then(p[x++],p[x++]);return b}getUri(t){t=Ri(this.defaults,t);const a=u2(t.baseURL,t.url,t.allowAbsoluteUrls);return i2(a,t.params,t.paramsSerializer)}};Y.forEach(["delete","get","head","options"],function(t){Ai.prototype[t]=function(a,o){return this.request(Ri(o||{},{method:t,url:a,data:(o||{}).data}))}});Y.forEach(["post","put","patch"],function(t){function a(o){return function(c,f,h){return this.request(Ri(h||{},{method:t,headers:o?{"Content-Type":"multipart/form-data"}:{},url:c,data:f}))}}Ai.prototype[t]=a(),Ai.prototype[t+"Form"]=a(!0)});let OA=class g2{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let a;this.promise=new Promise(function(c){a=c});const o=this;this.promise.then(l=>{if(!o._listeners)return;let c=o._listeners.length;for(;c-- >0;)o._listeners[c](l);o._listeners=null}),this.promise.then=l=>{let c;const f=new Promise(h=>{o.subscribe(h),c=h}).then(l);return f.cancel=function(){o.unsubscribe(c)},f},t(function(c,f,h){o.reason||(o.reason=new zo(c,f,h),a(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const a=this._listeners.indexOf(t);a!==-1&&this._listeners.splice(a,1)}toAbortSignal(){const t=new AbortController,a=o=>{t.abort(o)};return this.subscribe(a),t.signal.unsubscribe=()=>this.unsubscribe(a),t.signal}static source(){let t;return{token:new g2(function(l){t=l}),cancel:t}}};function CA(e){return function(a){return e.apply(null,a)}}function kA(e){return Y.isObject(e)&&e.isAxiosError===!0}const Jh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Jh).forEach(([e,t])=>{Jh[t]=e});function b2(e){const t=new Ai(e),a=G1(Ai.prototype.request,t);return Y.extend(a,Ai.prototype,t,{allOwnKeys:!0}),Y.extend(a,t,null,{allOwnKeys:!0}),a.create=function(l){return b2(Ri(e,l))},a}const ct=b2(xl);ct.Axios=Ai;ct.CanceledError=zo;ct.CancelToken=OA;ct.isCancel=l2;ct.VERSION=p2;ct.toFormData=Gu;ct.AxiosError=He;ct.Cancel=ct.CanceledError;ct.all=function(t){return Promise.all(t)};ct.spread=CA;ct.isAxiosError=kA;ct.mergeConfig=Ri;ct.AxiosHeaders=En;ct.formToJSON=e=>s2(Y.isHTMLForm(e)?new FormData(e):e);ct.getAdapter=m2.getAdapter;ct.HttpStatusCode=Jh;ct.default=ct;const{Axios:u8,AxiosError:d8,CanceledError:f8,isCancel:h8,CancelToken:m8,VERSION:p8,all:g8,Cancel:b8,isAxiosError:v8,spread:y8,toFormData:w8,AxiosHeaders:x8,HttpStatusCode:E8,formToJSON:S8,getAdapter:_8,mergeConfig:T8}=ct,RA=()=>{const{user:e}=Za(),[t,a]=I.useState({});return I.useEffect(()=>{if(!e?.email)return;(()=>{ct.get(`https://event-management-server-blond.vercel.app/user/${e?.email}`).then(l=>{a(l.data)})})()},[e]),t},Xv=[{id:1,name:"Home",path:"/"},{id:2,name:"Events",path:"/events"},{id:3,name:"Add Event",path:"/add-event"},{id:4,name:"My Event",path:"/my-event"}],DA=()=>{const e=RA(),{logout:t,user:a}=Za(),o=()=>{t()};return w.jsx("div",{className:"shadow",children:w.jsxs("div",{className:"navbar max-w-7xl mx-auto px-6",children:[w.jsxs("div",{className:"navbar-start",children:[w.jsxs("div",{className:"dropdown",children:[w.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost lg:hidden",children:w.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[" ",w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h8m-8 6h16"})," "]})}),w.jsx("ul",{tabIndex:0,className:"menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow",children:Xv?.map(l=>w.jsx("li",{children:w.jsx(Ha,{to:l?.path,children:l?.name})},l?.id))})]}),w.jsx(Ha,{to:"/",className:"text-3xl font-bold text-teal-600 font",children:"Planzone"})]}),w.jsx("div",{className:"navbar-center hidden lg:flex",children:w.jsx("ul",{className:"flex items-center gap-7 text-gray-700 font-semibold font text-lg",children:Xv?.map(l=>w.jsx("li",{children:w.jsx(Jy,{to:l?.path,children:l?.name})},l?.id))})}),w.jsx("div",{className:"navbar-end",children:a?w.jsx(w.Fragment,{children:w.jsxs("div",{className:"dropdown dropdown-bottom dropdown-end",children:[w.jsx("div",{tabIndex:0,role:"button",className:"",children:w.jsx("img",{className:"w-10 h-10 rounded-full",src:e?.photoURL,alt:e?.name})}),w.jsxs("ul",{tabIndex:0,className:"dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm",children:[w.jsxs("li",{className:"font-semibold mb-2",children:["Name: ",e?.name]}),w.jsx("li",{children:w.jsx("button",{onClick:o,className:"border flex items-center justify-center bg-teal-600 text-white font-semibold hover:bg-teal-700",children:"Sign Out"})})]})]})}):w.jsx(Ha,{to:"/login",className:"bg-teal-500 hover:bg-teal-700 text-white px-3 py-1.5 rounded-md font-medium transition duration-300",children:"Sing In"})})]})})};var v2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kv=gt.createContext&&gt.createContext(v2),MA=["attr","size","title"];function NA(e,t){if(e==null)return{};var a=LA(e,t),o,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)o=c[l],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}function LA(e,t){if(e==null)return{};var a={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;a[o]=e[o]}return a}function yu(){return yu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},yu.apply(this,arguments)}function Zv(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),a.push.apply(a,o)}return a}function wu(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Zv(Object(a),!0).forEach(function(o){PA(e,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Zv(Object(a)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))})}return e}function PA(e,t,a){return t=zA(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function zA(e){var t=UA(e,"string");return typeof t=="symbol"?t:t+""}function UA(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var o=a.call(e,t);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function y2(e){return e&&e.map((t,a)=>gt.createElement(t.tag,wu({key:a},t.attr),y2(t.child)))}function At(e){return t=>gt.createElement(jA,yu({attr:wu({},e.attr)},t),y2(e.child))}function jA(e){var t=a=>{var{attr:o,size:l,title:c}=e,f=NA(e,MA),h=l||a.size||"1em",m;return a.className&&(m=a.className),e.className&&(m=(m?m+" ":"")+e.className),gt.createElement("svg",yu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,o,f,{className:m,style:wu(wu({color:e.color||a.color},a.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&gt.createElement("title",null,c),e.children)};return Kv!==void 0?gt.createElement(Kv.Consumer,null,a=>t(a)):t(v2)}function BA(e){return At({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function IA(e){return At({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function HA(e){return At({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"},child:[]}]})(e)}function qA(e){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function VA(e){return At({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function $A(e){return At({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function w2(e){return At({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function FA(e){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function YA(e){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"},child:[]}]})(e)}function GA(e){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"},child:[]}]})(e)}function XA(e){return At({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function KA(e){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(e)}function Ys(e){return At({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function ZA(e){return At({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(e)}function QA(e){return At({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function JA(e){return At({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}function WA(e){return At({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"},child:[]}]})(e)}function eO(e){return At({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"},child:[]}]})(e)}function tO(e){return At({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"},child:[]}]})(e)}function nO(e){return At({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"},child:[]}]})(e)}function rO(e){return At({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},child:[]},{tag:"path",attr:{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},child:[]}]})(e)}const aO=()=>w.jsxs("footer",{className:"bg-teal-50 text-gray-800 pt-12 px-6 mt-8 md:mt-16",children:[w.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl font-bold mb-4 text-teal-600",children:"Planzone"}),w.jsx("p",{className:"mb-4 text-sm",children:"Stay updated with the latest features and event planning tips. Join our newsletter."}),w.jsxs("div",{className:"flex",children:[w.jsx("input",{type:"email",placeholder:"Enter your email",className:"px-4 py-2 rounded-l-md text-black w-full bg-white border border-teal-200 focus:outline-none"}),w.jsx("button",{className:"bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-r-md text-white",children:w.jsx(GA,{})})]}),w.jsxs("div",{className:"flex space-x-4 mt-4 text-xl text-teal-600",children:[w.jsx(BA,{}),w.jsx(IA,{}),w.jsx(qA,{}),w.jsx(HA,{}),w.jsx(VA,{})]})]}),w.jsxs("div",{children:[w.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Contact Us"}),w.jsxs("div",{className:"space-y-3 text-sm",children:[w.jsxs("p",{className:"flex items-start gap-2",children:[w.jsx(tO,{className:"mt-1"}),"House 22, Road 8, Dhanmondi, Dhaka 1205, Bangladesh"]}),w.jsxs("p",{className:"flex items-center gap-2",children:[w.jsx(nO,{})," +880 1234-567890"]}),w.jsxs("p",{className:"flex items-center gap-2",children:[w.jsx(eO,{})," support@planzone.app"]}),w.jsxs("p",{className:"flex items-center gap-2",children:[w.jsx(rO,{})," Everyday / 9:00 AM – 10:00 PM"]})]})]}),w.jsxs("div",{children:[w.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Quick Links"}),w.jsxs("ul",{className:"space-y-2 text-sm",children:[w.jsx("li",{className:"hover:text-teal-600 cursor-pointer",children:"About Us"}),w.jsx("li",{className:"hover:text-teal-600 cursor-pointer",children:"Features"}),w.jsx("li",{className:"hover:text-teal-600 cursor-pointer",children:"FAQs"}),w.jsx("li",{className:"hover:text-teal-600 cursor-pointer",children:"Support"})]})]}),w.jsxs("div",{children:[w.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Resources"}),w.jsxs("ul",{className:"space-y-2 text-sm",children:[w.jsx("li",{className:"hover:text-teal-600 cursor-pointer",children:"Blog"}),w.jsx("li",{className:"hover:text-teal-600 cursor-pointer",children:"Community"}),w.jsx("li",{className:"hover:text-teal-600 cursor-pointer",children:"Developers"}),w.jsx("li",{className:"hover:text-teal-600 cursor-pointer",children:"Partners"}),w.jsx("li",{className:"hover:text-teal-600 cursor-pointer",children:"Sponsorship"})]})]})]}),w.jsxs("div",{className:"border-t border-gray-200 mt-12 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600",children:[w.jsx("p",{children:"© 2025 Planzone. All rights reserved."}),w.jsxs("div",{className:"flex gap-4 mt-2 md:mt-0",children:[w.jsx("p",{className:"hover:text-teal-600 cursor-pointer",children:"Privacy Policy"}),w.jsx("p",{className:"hover:text-teal-600 cursor-pointer",children:"Terms of Use"}),w.jsx("p",{className:"hover:text-teal-600 cursor-pointer",children:"Status"})]})]})]}),iO=()=>w.jsxs("div",{children:[w.jsx(DA,{}),w.jsx("div",{className:"min-h-screen",children:w.jsx(dS,{})}),w.jsx(aO,{})]}),oO="/assets/banner-img-4j1OTVZS.png",sO=()=>w.jsx("section",{className:"bg-white py-20 px-6 text-gray-900",children:w.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10",children:[w.jsxs("div",{className:"w-full md:w-1/2",children:[w.jsxs("h1",{className:"text-4xl md:text-5xl font-bold leading-tight mb-6",children:["Effortless Event Planning ",w.jsx("br",{}),w.jsx("span",{className:"text-teal-500",children:"All in One Place"})]}),w.jsx("p",{className:"text-lg text-gray-600 mb-8",children:"Planzone helps you create, manage, and share events easily. From private gatherings to large conferences — plan like a pro."}),w.jsxs("div",{className:"flex gap-4 flex-wrap",children:[w.jsx("button",{className:"bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 cursor-pointer",children:"Get Started"}),w.jsxs("button",{className:"flex items-center gap-2 border border-teal-500 text-teal-500 hover:bg-teal-100 px-6 py-3 rounded-xl transition duration-300 cursor-pointer",children:["Learn More ",w.jsx($A,{size:18})]})]})]}),w.jsx("div",{className:"w-full md:w-1/2 flex justify-center",children:w.jsx("img",{src:oO,alt:"Event planning illustration",className:"w-full max-w-xl"})})]})}),lO=[{icon:w.jsx(WA,{size:28,className:"text-teal-600"}),title:"Easy Event Creation",description:"Create events in minutes with a simple and intuitive interface."},{icon:w.jsx(YA,{size:28,className:"text-teal-600"}),title:"Automated Invitations",description:"Send smart invites and track RSVPs in real-time."},{icon:w.jsx(ZA,{size:28,className:"text-teal-600"}),title:"Dashboard Overview",description:"Manage all your events in one powerful dashboard."},{icon:w.jsx(JA,{size:28,className:"text-teal-600"}),title:"Team Collaboration",description:"Collaborate with team members and assign tasks easily."}],cO=()=>w.jsx("div",{className:"bg-white py-20 px-6 text-gray-800",children:w.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[w.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Smart Features for Effortless Planning"}),w.jsx("p",{className:"text-gray-600 mb-12",children:"Everything you need to organize, invite, and manage events - without the hassle."}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:lO.map((e,t)=>w.jsxs("div",{className:"bg-teal-50 p-6 rounded-xl shadow hover:shadow-md transition flex flex-col items-center justify-center",children:[w.jsx("div",{className:"mb-4",children:e.icon}),w.jsx("h3",{className:"font-semibold text-lg mb-2",children:e.title}),w.jsx("p",{className:"text-sm text-gray-600",children:e.description})]},t))})]})}),uO=[{icon:w.jsx(QA,{size:28,className:"text-teal-600"}),title:"Sign Up",description:"Create your Planzone account in seconds."},{icon:w.jsx(w2,{size:28,className:"text-teal-600"}),title:"Create Event",description:"Add event details, date, and invitees effortlessly."},{icon:w.jsx(KA,{size:28,className:"text-teal-600"}),title:"Send Invites",description:"Share invites via email or link instantly."},{icon:w.jsx(FA,{size:28,className:"text-teal-600"}),title:"Track & Manage",description:"Get real-time RSVP updates and manage attendees."}],dO=()=>w.jsx("section",{className:"bg-gray-50 py-20 px-6 text-gray-800",children:w.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[w.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"How Planzone Works"}),w.jsx("p",{className:"text-gray-600 mb-12",children:"From signup to celebration, your events are in good hands."}),w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8",children:uO.map((e,t)=>w.jsxs("div",{className:"bg-white p-6 rounded-xl shadow hover:shadow-md transition flex flex-col items-center justify-center",children:[w.jsx("div",{className:"mb-4",children:e.icon}),w.jsx("h3",{className:"font-semibold text-lg mb-2",children:e.title}),w.jsx("p",{className:"text-sm text-gray-600",children:e.description})]},t))})]})}),fO=[{name:"Afsana Rahman",role:"Event Organizer",quote:"Planzone made planning my conference so smooth! The RSVP tracking is a life-saver."},{name:"Tanvir Alam",role:"Corporate Planner",quote:"Beautiful UI and flawless functionality. We managed over 500 attendees with ease."},{name:"Jannat Jahan",role:"Wedding Planner",quote:"The automation tools saved me hours. My clients love how organized things are!"}],hO=()=>w.jsx("section",{className:"bg-white py-20 px-6 text-gray-800",children:w.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[w.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"What People Are Saying"}),w.jsx("p",{className:"text-gray-600 mb-12",children:"Trusted by event planners across industries."}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:fO.map((e,t)=>w.jsxs("div",{className:"bg-teal-50 p-6 rounded-xl shadow hover:shadow-md transition text-left",children:[w.jsxs("div",{className:"flex items-center gap-2 text-teal-500 mb-3",children:[w.jsx(Ys,{size:16}),w.jsx(Ys,{size:16}),w.jsx(Ys,{size:16}),w.jsx(Ys,{size:16}),w.jsx(Ys,{size:16})]}),w.jsxs("p",{className:"text-sm text-gray-700 italic mb-4",children:["“",e.quote,"”"]}),w.jsx("h4",{className:"font-semibold",children:e.name}),w.jsx("p",{className:"text-sm text-gray-500",children:e.role})]},t))})]})}),mO=[{title:"Startup Founders Meetup 2025",date:"July 18, 2025",location:"Banani, Dhaka"},{title:"Creative Marketing Summit",date:"August 3, 2025",location:"Online Event"},{title:"Wedding Planner Workshop",date:"August 10, 2025",location:"Bashundhara, Dhaka"}],pO=()=>w.jsx("section",{className:"bg-gray-50 py-20 px-6 md:px-20 text-gray-800",children:w.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[w.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Upcoming Events"}),w.jsx("p",{className:"text-gray-600 mb-12",children:"Here are a few sample events happening soon!"}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 text-left",children:mO.map((e,t)=>w.jsxs("div",{className:"bg-white p-6 rounded-xl shadow hover:shadow-md transition border border-gray-100",children:[w.jsx("h3",{className:"text-lg font-semibold mb-2",children:e.title}),w.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600 mb-1",children:[w.jsx(w2,{className:"text-teal-500"})," ",e.date]}),w.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600 mb-4",children:[w.jsx(XA,{className:"text-teal-500"})," ",e.location]}),w.jsx("button",{className:"mt-auto bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm cursor-pointer",children:"View Details"})]},t))})]})}),gO=()=>w.jsxs("div",{children:[w.jsx(sO,{}),w.jsx(cO,{}),w.jsx(dO,{}),w.jsx(hO,{}),w.jsx(pO,{})]});var El=e=>e.type==="checkbox",Ti=e=>e instanceof Date,cn=e=>e==null;const x2=e=>typeof e=="object";var zt=e=>!cn(e)&&!Array.isArray(e)&&x2(e)&&!Ti(e),bO=e=>zt(e)&&e.target?El(e.target)?e.target.checked:e.target.value:e,vO=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,yO=(e,t)=>e.has(vO(t)),wO=e=>{const t=e.constructor&&e.constructor.prototype;return zt(t)&&t.hasOwnProperty("isPrototypeOf")},km=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Jt(e){let t;const a=Array.isArray(e),o=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(km&&(e instanceof Blob||o))&&(a||zt(e)))if(t=a?[]:{},!a&&!wO(e))t=e;else for(const l in e)e.hasOwnProperty(l)&&(t[l]=Jt(e[l]));else return e;return t}var Zu=e=>/^\w*$/.test(e),Lt=e=>e===void 0,Rm=e=>Array.isArray(e)?e.filter(Boolean):[],Dm=e=>Rm(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ye=(e,t,a)=>{if(!t||!zt(e))return a;const o=(Zu(t)?[t]:Dm(t)).reduce((l,c)=>cn(l)?l:l[c],e);return Lt(o)||o===e?Lt(e[t])?a:e[t]:o},Tr=e=>typeof e=="boolean",wt=(e,t,a)=>{let o=-1;const l=Zu(t)?[t]:Dm(t),c=l.length,f=c-1;for(;++o<c;){const h=l[o];let m=a;if(o!==f){const p=e[h];m=zt(p)||Array.isArray(p)?p:isNaN(+l[o+1])?{}:[]}if(h==="__proto__"||h==="constructor"||h==="prototype")return;e[h]=m,e=e[h]}};const Qv={BLUR:"blur",FOCUS_OUT:"focusout"},dr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Gr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},xO=gt.createContext(null);xO.displayName="HookFormContext";var EO=(e,t,a,o=!0)=>{const l={defaultValues:t._defaultValues};for(const c in e)Object.defineProperty(l,c,{get:()=>{const f=c;return t._proxyFormState[f]!==dr.all&&(t._proxyFormState[f]=!o||dr.all),e[f]}});return l};const SO=typeof window<"u"?I.useLayoutEffect:I.useEffect;var Cr=e=>typeof e=="string",_O=(e,t,a,o,l)=>Cr(e)?(o&&t.watch.add(e),ye(a,e,l)):Array.isArray(e)?e.map(c=>(o&&t.watch.add(c),ye(a,c))):(o&&(t.watchAll=!0),a),TO=(e,t,a,o,l)=>t?{...a[e],types:{...a[e]&&a[e].types?a[e].types:{},[o]:l||!0}}:{},nl=e=>Array.isArray(e)?e:[e],Jv=()=>{let e=[];return{get observers(){return e},next:l=>{for(const c of e)c.next&&c.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(c=>c!==l)}}),unsubscribe:()=>{e=[]}}},Wh=e=>cn(e)||!x2(e);function ja(e,t,a=new WeakSet){if(Wh(e)||Wh(t))return e===t;if(Ti(e)&&Ti(t))return e.getTime()===t.getTime();const o=Object.keys(e),l=Object.keys(t);if(o.length!==l.length)return!1;if(a.has(e)||a.has(t))return!0;a.add(e),a.add(t);for(const c of o){const f=e[c];if(!l.includes(c))return!1;if(c!=="ref"){const h=t[c];if(Ti(f)&&Ti(h)||zt(f)&&zt(h)||Array.isArray(f)&&Array.isArray(h)?!ja(f,h,a):f!==h)return!1}}return!0}var wn=e=>zt(e)&&!Object.keys(e).length,Mm=e=>e.type==="file",fr=e=>typeof e=="function",xu=e=>{if(!km)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},E2=e=>e.type==="select-multiple",Nm=e=>e.type==="radio",AO=e=>Nm(e)||El(e),kh=e=>xu(e)&&e.isConnected;function OO(e,t){const a=t.slice(0,-1).length;let o=0;for(;o<a;)e=Lt(e)?o++:e[t[o++]];return e}function CO(e){for(const t in e)if(e.hasOwnProperty(t)&&!Lt(e[t]))return!1;return!0}function It(e,t){const a=Array.isArray(t)?t:Zu(t)?[t]:Dm(t),o=a.length===1?e:OO(e,a),l=a.length-1,c=a[l];return o&&delete o[c],l!==0&&(zt(o)&&wn(o)||Array.isArray(o)&&CO(o))&&It(e,a.slice(0,-1)),e}var S2=e=>{for(const t in e)if(fr(e[t]))return!0;return!1};function Eu(e,t={}){const a=Array.isArray(e);if(zt(e)||a)for(const o in e)Array.isArray(e[o])||zt(e[o])&&!S2(e[o])?(t[o]=Array.isArray(e[o])?[]:{},Eu(e[o],t[o])):cn(e[o])||(t[o]=!0);return t}function _2(e,t,a){const o=Array.isArray(e);if(zt(e)||o)for(const l in e)Array.isArray(e[l])||zt(e[l])&&!S2(e[l])?Lt(t)||Wh(a[l])?a[l]=Array.isArray(e[l])?Eu(e[l],[]):{...Eu(e[l])}:_2(e[l],cn(t)?{}:t[l],a[l]):a[l]=!ja(e[l],t[l]);return a}var Gs=(e,t)=>_2(e,t,Eu(t));const Wv={value:!1,isValid:!1},ey={value:!0,isValid:!0};var T2=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(a=>a&&a.checked&&!a.disabled).map(a=>a.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Lt(e[0].attributes.value)?Lt(e[0].value)||e[0].value===""?ey:{value:e[0].value,isValid:!0}:ey:Wv}return Wv},A2=(e,{valueAsNumber:t,valueAsDate:a,setValueAs:o})=>Lt(e)?e:t?e===""?NaN:e&&+e:a&&Cr(e)?new Date(e):o?o(e):e;const ty={isValid:!1,value:null};var O2=e=>Array.isArray(e)?e.reduce((t,a)=>a&&a.checked&&!a.disabled?{isValid:!0,value:a.value}:t,ty):ty;function ny(e){const t=e.ref;return Mm(t)?t.files:Nm(t)?O2(e.refs).value:E2(t)?[...t.selectedOptions].map(({value:a})=>a):El(t)?T2(e.refs).value:A2(Lt(t.value)?e.ref.value:t.value,e)}var kO=(e,t,a,o)=>{const l={};for(const c of e){const f=ye(t,c);f&&wt(l,c,f._f)}return{criteriaMode:a,names:[...e],fields:l,shouldUseNativeValidation:o}},Su=e=>e instanceof RegExp,Xs=e=>Lt(e)?e:Su(e)?e.source:zt(e)?Su(e.value)?e.value.source:e.value:e,ry=e=>({isOnSubmit:!e||e===dr.onSubmit,isOnBlur:e===dr.onBlur,isOnChange:e===dr.onChange,isOnAll:e===dr.all,isOnTouch:e===dr.onTouched});const ay="AsyncFunction";var RO=e=>!!e&&!!e.validate&&!!(fr(e.validate)&&e.validate.constructor.name===ay||zt(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===ay)),DO=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),iy=(e,t,a)=>!a&&(t.watchAll||t.watch.has(e)||[...t.watch].some(o=>e.startsWith(o)&&/^\.\w+/.test(e.slice(o.length))));const rl=(e,t,a,o)=>{for(const l of a||Object.keys(e)){const c=ye(e,l);if(c){const{_f:f,...h}=c;if(f){if(f.refs&&f.refs[0]&&t(f.refs[0],l)&&!o)return!0;if(f.ref&&t(f.ref,f.name)&&!o)return!0;if(rl(h,t))break}else if(zt(h)&&rl(h,t))break}}};function oy(e,t,a){const o=ye(e,a);if(o||Zu(a))return{error:o,name:a};const l=a.split(".");for(;l.length;){const c=l.join("."),f=ye(t,c),h=ye(e,c);if(f&&!Array.isArray(f)&&a!==c)return{name:a};if(h&&h.type)return{name:c,error:h};if(h&&h.root&&h.root.type)return{name:`${c}.root`,error:h.root};l.pop()}return{name:a}}var MO=(e,t,a,o)=>{a(e);const{name:l,...c}=e;return wn(c)||Object.keys(c).length>=Object.keys(t).length||Object.keys(c).find(f=>t[f]===(!o||dr.all))},NO=(e,t,a)=>!e||!t||e===t||nl(e).some(o=>o&&(a?o===t:o.startsWith(t)||t.startsWith(o))),LO=(e,t,a,o,l)=>l.isOnAll?!1:!a&&l.isOnTouch?!(t||e):(a?o.isOnBlur:l.isOnBlur)?!e:(a?o.isOnChange:l.isOnChange)?e:!0,PO=(e,t)=>!Rm(ye(e,t)).length&&It(e,t),zO=(e,t,a)=>{const o=nl(ye(e,a));return wt(o,"root",t[a]),wt(e,a,o),e},ru=e=>Cr(e);function sy(e,t,a="validate"){if(ru(e)||Array.isArray(e)&&e.every(ru)||Tr(e)&&!e)return{type:a,message:ru(e)?e:"",ref:t}}var yo=e=>zt(e)&&!Su(e)?e:{value:e,message:""},ly=async(e,t,a,o,l,c)=>{const{ref:f,refs:h,required:m,maxLength:p,minLength:b,min:x,max:y,pattern:R,validate:S,name:A,valueAsNumber:N,mount:z}=e._f,Q=ye(a,A);if(!z||t.has(A))return{};const K=h?h[0]:f,ce=we=>{l&&K.reportValidity&&(K.setCustomValidity(Tr(we)?"":we||""),K.reportValidity())},J={},D=Nm(f),me=El(f),_e=D||me,ue=(N||Mm(f))&&Lt(f.value)&&Lt(Q)||xu(f)&&f.value===""||Q===""||Array.isArray(Q)&&!Q.length,Re=TO.bind(null,A,o,J),Ee=(we,be,ie,te=Gr.maxLength,_=Gr.minLength)=>{const H=we?be:ie;J[A]={type:we?te:_,message:H,ref:f,...Re(we?te:_,H)}};if(c?!Array.isArray(Q)||!Q.length:m&&(!_e&&(ue||cn(Q))||Tr(Q)&&!Q||me&&!T2(h).isValid||D&&!O2(h).isValid)){const{value:we,message:be}=ru(m)?{value:!!m,message:m}:yo(m);if(we&&(J[A]={type:Gr.required,message:be,ref:K,...Re(Gr.required,be)},!o))return ce(be),J}if(!ue&&(!cn(x)||!cn(y))){let we,be;const ie=yo(y),te=yo(x);if(!cn(Q)&&!isNaN(Q)){const _=f.valueAsNumber||Q&&+Q;cn(ie.value)||(we=_>ie.value),cn(te.value)||(be=_<te.value)}else{const _=f.valueAsDate||new Date(Q),H=E=>new Date(new Date().toDateString()+" "+E),F=f.type=="time",se=f.type=="week";Cr(ie.value)&&Q&&(we=F?H(Q)>H(ie.value):se?Q>ie.value:_>new Date(ie.value)),Cr(te.value)&&Q&&(be=F?H(Q)<H(te.value):se?Q<te.value:_<new Date(te.value))}if((we||be)&&(Ee(!!we,ie.message,te.message,Gr.max,Gr.min),!o))return ce(J[A].message),J}if((p||b)&&!ue&&(Cr(Q)||c&&Array.isArray(Q))){const we=yo(p),be=yo(b),ie=!cn(we.value)&&Q.length>+we.value,te=!cn(be.value)&&Q.length<+be.value;if((ie||te)&&(Ee(ie,we.message,be.message),!o))return ce(J[A].message),J}if(R&&!ue&&Cr(Q)){const{value:we,message:be}=yo(R);if(Su(we)&&!Q.match(we)&&(J[A]={type:Gr.pattern,message:be,ref:f,...Re(Gr.pattern,be)},!o))return ce(be),J}if(S){if(fr(S)){const we=await S(Q,a),be=sy(we,K);if(be&&(J[A]={...be,...Re(Gr.validate,be.message)},!o))return ce(be.message),J}else if(zt(S)){let we={};for(const be in S){if(!wn(we)&&!o)break;const ie=sy(await S[be](Q,a),K,be);ie&&(we={...ie,...Re(be,ie.message)},ce(ie.message),o&&(J[A]=we))}if(!wn(we)&&(J[A]={ref:K,...we},!o))return J}}return ce(!0),J};const UO={mode:dr.onSubmit,reValidateMode:dr.onChange,shouldFocusError:!0};function jO(e={}){let t={...UO,...e},a={submitCount:0,isDirty:!1,isReady:!1,isLoading:fr(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const o={};let l=zt(t.defaultValues)||zt(t.values)?Jt(t.defaultValues||t.values)||{}:{},c=t.shouldUnregister?{}:Jt(l),f={action:!1,mount:!1,watch:!1},h={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},m,p=0;const b={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let x={...b};const y={array:Jv(),state:Jv()},R=t.criteriaMode===dr.all,S=O=>j=>{clearTimeout(p),p=setTimeout(O,j)},A=async O=>{if(!t.disabled&&(b.isValid||x.isValid||O)){const j=t.resolver?wn((await me()).errors):await ue(o,!0);j!==a.isValid&&y.state.next({isValid:j})}},N=(O,j)=>{!t.disabled&&(b.isValidating||b.validatingFields||x.isValidating||x.validatingFields)&&((O||Array.from(h.mount)).forEach(X=>{X&&(j?wt(a.validatingFields,X,j):It(a.validatingFields,X))}),y.state.next({validatingFields:a.validatingFields,isValidating:!wn(a.validatingFields)}))},z=(O,j=[],X,he,de=!0,oe=!0)=>{if(he&&X&&!t.disabled){if(f.action=!0,oe&&Array.isArray(ye(o,O))){const pe=X(ye(o,O),he.argA,he.argB);de&&wt(o,O,pe)}if(oe&&Array.isArray(ye(a.errors,O))){const pe=X(ye(a.errors,O),he.argA,he.argB);de&&wt(a.errors,O,pe),PO(a.errors,O)}if((b.touchedFields||x.touchedFields)&&oe&&Array.isArray(ye(a.touchedFields,O))){const pe=X(ye(a.touchedFields,O),he.argA,he.argB);de&&wt(a.touchedFields,O,pe)}(b.dirtyFields||x.dirtyFields)&&(a.dirtyFields=Gs(l,c)),y.state.next({name:O,isDirty:Ee(O,j),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else wt(c,O,j)},Q=(O,j)=>{wt(a.errors,O,j),y.state.next({errors:a.errors})},K=O=>{a.errors=O,y.state.next({errors:a.errors,isValid:!1})},ce=(O,j,X,he)=>{const de=ye(o,O);if(de){const oe=ye(c,O,Lt(X)?ye(l,O):X);Lt(oe)||he&&he.defaultChecked||j?wt(c,O,j?oe:ny(de._f)):ie(O,oe),f.mount&&A()}},J=(O,j,X,he,de)=>{let oe=!1,pe=!1;const Ce={name:O};if(!t.disabled){if(!X||he){(b.isDirty||x.isDirty)&&(pe=a.isDirty,a.isDirty=Ce.isDirty=Ee(),oe=pe!==Ce.isDirty);const Fe=ja(ye(l,O),j);pe=!!ye(a.dirtyFields,O),Fe?It(a.dirtyFields,O):wt(a.dirtyFields,O,!0),Ce.dirtyFields=a.dirtyFields,oe=oe||(b.dirtyFields||x.dirtyFields)&&pe!==!Fe}if(X){const Fe=ye(a.touchedFields,O);Fe||(wt(a.touchedFields,O,X),Ce.touchedFields=a.touchedFields,oe=oe||(b.touchedFields||x.touchedFields)&&Fe!==X)}oe&&de&&y.state.next(Ce)}return oe?Ce:{}},D=(O,j,X,he)=>{const de=ye(a.errors,O),oe=(b.isValid||x.isValid)&&Tr(j)&&a.isValid!==j;if(t.delayError&&X?(m=S(()=>Q(O,X)),m(t.delayError)):(clearTimeout(p),m=null,X?wt(a.errors,O,X):It(a.errors,O)),(X?!ja(de,X):de)||!wn(he)||oe){const pe={...he,...oe&&Tr(j)?{isValid:j}:{},errors:a.errors,name:O};a={...a,...pe},y.state.next(pe)}},me=async O=>{N(O,!0);const j=await t.resolver(c,t.context,kO(O||h.mount,o,t.criteriaMode,t.shouldUseNativeValidation));return N(O),j},_e=async O=>{const{errors:j}=await me(O);if(O)for(const X of O){const he=ye(j,X);he?wt(a.errors,X,he):It(a.errors,X)}else a.errors=j;return j},ue=async(O,j,X={valid:!0})=>{for(const he in O){const de=O[he];if(de){const{_f:oe,...pe}=de;if(oe){const Ce=h.array.has(oe.name),Fe=de._f&&RO(de._f);Fe&&b.validatingFields&&N([he],!0);const ot=await ly(de,h.disabled,c,R,t.shouldUseNativeValidation&&!j,Ce);if(Fe&&b.validatingFields&&N([he]),ot[oe.name]&&(X.valid=!1,j))break;!j&&(ye(ot,oe.name)?Ce?zO(a.errors,ot,oe.name):wt(a.errors,oe.name,ot[oe.name]):It(a.errors,oe.name))}!wn(pe)&&await ue(pe,j,X)}}return X.valid},Re=()=>{for(const O of h.unMount){const j=ye(o,O);j&&(j._f.refs?j._f.refs.every(X=>!kh(X)):!kh(j._f.ref))&&ht(O)}h.unMount=new Set},Ee=(O,j)=>!t.disabled&&(O&&j&&wt(c,O,j),!ja(E(),l)),we=(O,j,X)=>_O(O,h,{...f.mount?c:Lt(j)?l:Cr(O)?{[O]:j}:j},X,j),be=O=>Rm(ye(f.mount?c:l,O,t.shouldUnregister?ye(l,O,[]):[])),ie=(O,j,X={})=>{const he=ye(o,O);let de=j;if(he){const oe=he._f;oe&&(!oe.disabled&&wt(c,O,A2(j,oe)),de=xu(oe.ref)&&cn(j)?"":j,E2(oe.ref)?[...oe.ref.options].forEach(pe=>pe.selected=de.includes(pe.value)):oe.refs?El(oe.ref)?oe.refs.forEach(pe=>{(!pe.defaultChecked||!pe.disabled)&&(Array.isArray(de)?pe.checked=!!de.find(Ce=>Ce===pe.value):pe.checked=de===pe.value||!!de)}):oe.refs.forEach(pe=>pe.checked=pe.value===de):Mm(oe.ref)?oe.ref.value="":(oe.ref.value=de,oe.ref.type||y.state.next({name:O,values:Jt(c)})))}(X.shouldDirty||X.shouldTouch)&&J(O,de,X.shouldTouch,X.shouldDirty,!0),X.shouldValidate&&se(O)},te=(O,j,X)=>{for(const he in j){if(!j.hasOwnProperty(he))return;const de=j[he],oe=O+"."+he,pe=ye(o,oe);(h.array.has(O)||zt(de)||pe&&!pe._f)&&!Ti(de)?te(oe,de,X):ie(oe,de,X)}},_=(O,j,X={})=>{const he=ye(o,O),de=h.array.has(O),oe=Jt(j);wt(c,O,oe),de?(y.array.next({name:O,values:Jt(c)}),(b.isDirty||b.dirtyFields||x.isDirty||x.dirtyFields)&&X.shouldDirty&&y.state.next({name:O,dirtyFields:Gs(l,c),isDirty:Ee(O,oe)})):he&&!he._f&&!cn(oe)?te(O,oe,X):ie(O,oe,X),iy(O,h)&&y.state.next({...a}),y.state.next({name:f.mount?O:void 0,values:Jt(c)})},H=async O=>{f.mount=!0;const j=O.target;let X=j.name,he=!0;const de=ye(o,X),oe=Fe=>{he=Number.isNaN(Fe)||Ti(Fe)&&isNaN(Fe.getTime())||ja(Fe,ye(c,X,Fe))},pe=ry(t.mode),Ce=ry(t.reValidateMode);if(de){let Fe,ot;const aa=j.type?ny(de._f):bO(O),Ht=O.type===Qv.BLUR||O.type===Qv.FOCUS_OUT,zi=!DO(de._f)&&!t.resolver&&!ye(a.errors,X)&&!de._f.deps||LO(Ht,ye(a.touchedFields,X),a.isSubmitted,Ce,pe),nr=iy(X,h,Ht);wt(c,X,aa),Ht?(de._f.onBlur&&de._f.onBlur(O),m&&m(0)):de._f.onChange&&de._f.onChange(O);const rr=J(X,aa,Ht),ar=!wn(rr)||nr;if(!Ht&&y.state.next({name:X,type:O.type,values:Jt(c)}),zi)return(b.isValid||x.isValid)&&(t.mode==="onBlur"?Ht&&A():Ht||A()),ar&&y.state.next({name:X,...nr?{}:rr});if(!Ht&&nr&&y.state.next({...a}),t.resolver){const{errors:vr}=await me([X]);if(oe(aa),he){const jn=oy(a.errors,o,X),Ja=oy(vr,o,jn.name||X);Fe=Ja.error,X=Ja.name,ot=wn(vr)}}else N([X],!0),Fe=(await ly(de,h.disabled,c,R,t.shouldUseNativeValidation))[X],N([X]),oe(aa),he&&(Fe?ot=!1:(b.isValid||x.isValid)&&(ot=await ue(o,!0)));he&&(de._f.deps&&se(de._f.deps),D(X,ot,Fe,rr))}},F=(O,j)=>{if(ye(a.errors,j)&&O.focus)return O.focus(),1},se=async(O,j={})=>{let X,he;const de=nl(O);if(t.resolver){const oe=await _e(Lt(O)?O:de);X=wn(oe),he=O?!de.some(pe=>ye(oe,pe)):X}else O?(he=(await Promise.all(de.map(async oe=>{const pe=ye(o,oe);return await ue(pe&&pe._f?{[oe]:pe}:pe)}))).every(Boolean),!(!he&&!a.isValid)&&A()):he=X=await ue(o);return y.state.next({...!Cr(O)||(b.isValid||x.isValid)&&X!==a.isValid?{}:{name:O},...t.resolver||!O?{isValid:X}:{},errors:a.errors}),j.shouldFocus&&!he&&rl(o,F,O?de:h.mount),he},E=O=>{const j={...f.mount?c:l};return Lt(O)?j:Cr(O)?ye(j,O):O.map(X=>ye(j,X))},V=(O,j)=>({invalid:!!ye((j||a).errors,O),isDirty:!!ye((j||a).dirtyFields,O),error:ye((j||a).errors,O),isValidating:!!ye(a.validatingFields,O),isTouched:!!ye((j||a).touchedFields,O)}),ae=O=>{O&&nl(O).forEach(j=>It(a.errors,j)),y.state.next({errors:O?a.errors:{}})},re=(O,j,X)=>{const he=(ye(o,O,{_f:{}})._f||{}).ref,de=ye(a.errors,O)||{},{ref:oe,message:pe,type:Ce,...Fe}=de;wt(a.errors,O,{...Fe,...j,ref:he}),y.state.next({name:O,errors:a.errors,isValid:!1}),X&&X.shouldFocus&&he&&he.focus&&he.focus()},fe=(O,j)=>fr(O)?y.state.subscribe({next:X=>O(we(void 0,j),X)}):we(O,j,!0),De=O=>y.state.subscribe({next:j=>{NO(O.name,j.name,O.exact)&&MO(j,O.formState||b,on,O.reRenderRoot)&&O.callback({values:{...c},...a,...j})}}).unsubscribe,Te=O=>(f.mount=!0,x={...x,...O.formState},De({...O,formState:x})),ht=(O,j={})=>{for(const X of O?nl(O):h.mount)h.mount.delete(X),h.array.delete(X),j.keepValue||(It(o,X),It(c,X)),!j.keepError&&It(a.errors,X),!j.keepDirty&&It(a.dirtyFields,X),!j.keepTouched&&It(a.touchedFields,X),!j.keepIsValidating&&It(a.validatingFields,X),!t.shouldUnregister&&!j.keepDefaultValue&&It(l,X);y.state.next({values:Jt(c)}),y.state.next({...a,...j.keepDirty?{isDirty:Ee()}:{}}),!j.keepIsValid&&A()},Qe=({disabled:O,name:j})=>{(Tr(O)&&f.mount||O||h.disabled.has(j))&&(O?h.disabled.add(j):h.disabled.delete(j))},Ot=(O,j={})=>{let X=ye(o,O);const he=Tr(j.disabled)||Tr(t.disabled);return wt(o,O,{...X||{},_f:{...X&&X._f?X._f:{ref:{name:O}},name:O,mount:!0,...j}}),h.mount.add(O),X?Qe({disabled:Tr(j.disabled)?j.disabled:t.disabled,name:O}):ce(O,!0,j.value),{...he?{disabled:j.disabled||t.disabled}:{},...t.progressive?{required:!!j.required,min:Xs(j.min),max:Xs(j.max),minLength:Xs(j.minLength),maxLength:Xs(j.maxLength),pattern:Xs(j.pattern)}:{},name:O,onChange:H,onBlur:H,ref:de=>{if(de){Ot(O,j),X=ye(o,O);const oe=Lt(de.value)&&de.querySelectorAll&&de.querySelectorAll("input,select,textarea")[0]||de,pe=AO(oe),Ce=X._f.refs||[];if(pe?Ce.find(Fe=>Fe===oe):oe===X._f.ref)return;wt(o,O,{_f:{...X._f,...pe?{refs:[...Ce.filter(kh),oe,...Array.isArray(ye(l,O))?[{}]:[]],ref:{type:oe.type,name:O}}:{ref:oe}}}),ce(O,!1,void 0,oe)}else X=ye(o,O,{}),X._f&&(X._f.mount=!1),(t.shouldUnregister||j.shouldUnregister)&&!(yO(h.array,O)&&f.action)&&h.unMount.add(O)}}},$e=()=>t.shouldFocusError&&rl(o,F,h.mount),Ct=O=>{Tr(O)&&(y.state.next({disabled:O}),rl(o,(j,X)=>{const he=ye(o,X);he&&(j.disabled=he._f.disabled||O,Array.isArray(he._f.refs)&&he._f.refs.forEach(de=>{de.disabled=he._f.disabled||O}))},0,!1))},an=(O,j)=>async X=>{let he;X&&(X.preventDefault&&X.preventDefault(),X.persist&&X.persist());let de=Jt(c);if(y.state.next({isSubmitting:!0}),t.resolver){const{errors:oe,values:pe}=await me();a.errors=oe,de=Jt(pe)}else await ue(o);if(h.disabled.size)for(const oe of h.disabled)It(de,oe);if(It(a.errors,"root"),wn(a.errors)){y.state.next({errors:{}});try{await O(de,X)}catch(oe){he=oe}}else j&&await j({...a.errors},X),$e(),setTimeout($e);if(y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:wn(a.errors)&&!he,submitCount:a.submitCount+1,errors:a.errors}),he)throw he},Un=(O,j={})=>{ye(o,O)&&(Lt(j.defaultValue)?_(O,Jt(ye(l,O))):(_(O,j.defaultValue),wt(l,O,Jt(j.defaultValue))),j.keepTouched||It(a.touchedFields,O),j.keepDirty||(It(a.dirtyFields,O),a.isDirty=j.defaultValue?Ee(O,Jt(ye(l,O))):Ee()),j.keepError||(It(a.errors,O),b.isValid&&A()),y.state.next({...a}))},hn=(O,j={})=>{const X=O?Jt(O):l,he=Jt(X),de=wn(O),oe=de?l:he;if(j.keepDefaultValues||(l=X),!j.keepValues){if(j.keepDirtyValues){const pe=new Set([...h.mount,...Object.keys(Gs(l,c))]);for(const Ce of Array.from(pe))ye(a.dirtyFields,Ce)?wt(oe,Ce,ye(c,Ce)):_(Ce,ye(oe,Ce))}else{if(km&&Lt(O))for(const pe of h.mount){const Ce=ye(o,pe);if(Ce&&Ce._f){const Fe=Array.isArray(Ce._f.refs)?Ce._f.refs[0]:Ce._f.ref;if(xu(Fe)){const ot=Fe.closest("form");if(ot){ot.reset();break}}}}for(const pe of h.mount){const Ce=ye(oe,pe,ye(l,pe));Lt(Ce)||(wt(oe,pe,Ce),_(pe,ye(oe,pe)))}}c=Jt(oe),y.array.next({values:{...oe}}),y.state.next({values:{...oe}})}h={mount:j.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},f.mount=!b.isValid||!!j.keepIsValid||!!j.keepDirtyValues,f.watch=!!t.shouldUnregister,y.state.next({submitCount:j.keepSubmitCount?a.submitCount:0,isDirty:de?!1:j.keepDirty?a.isDirty:!!(j.keepDefaultValues&&!ja(O,l)),isSubmitted:j.keepIsSubmitted?a.isSubmitted:!1,dirtyFields:de?{}:j.keepDirtyValues?j.keepDefaultValues&&c?Gs(l,c):a.dirtyFields:j.keepDefaultValues&&O?Gs(l,O):j.keepDirty?a.dirtyFields:{},touchedFields:j.keepTouched?a.touchedFields:{},errors:j.keepErrors?a.errors:{},isSubmitSuccessful:j.keepIsSubmitSuccessful?a.isSubmitSuccessful:!1,isSubmitting:!1})},Pi=(O,j)=>hn(fr(O)?O(c):O,j),Ho=(O,j={})=>{const X=ye(o,O),he=X&&X._f;if(he){const de=he.refs?he.refs[0]:he.ref;de.focus&&(de.focus(),j.shouldSelect&&fr(de.select)&&de.select())}},on=O=>{a={...a,...O}},Qa={control:{register:Ot,unregister:ht,getFieldState:V,handleSubmit:an,setError:re,_subscribe:De,_runSchema:me,_focusError:$e,_getWatch:we,_getDirty:Ee,_setValid:A,_setFieldArray:z,_setDisabledField:Qe,_setErrors:K,_getFieldArray:be,_reset:hn,_resetDefaultValues:()=>fr(t.defaultValues)&&t.defaultValues().then(O=>{Pi(O,t.resetOptions),y.state.next({isLoading:!1})}),_removeUnmounted:Re,_disableForm:Ct,_subjects:y,_proxyFormState:b,get _fields(){return o},get _formValues(){return c},get _state(){return f},set _state(O){f=O},get _defaultValues(){return l},get _names(){return h},set _names(O){h=O},get _formState(){return a},get _options(){return t},set _options(O){t={...t,...O}}},subscribe:Te,trigger:se,register:Ot,handleSubmit:an,watch:fe,setValue:_,getValues:E,reset:Pi,resetField:Un,clearErrors:ae,unregister:ht,setError:re,setFocus:Ho,getFieldState:V};return{...Qa,formControl:Qa}}function Qu(e={}){const t=gt.useRef(void 0),a=gt.useRef(void 0),[o,l]=gt.useState({isDirty:!1,isValidating:!1,isLoading:fr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:fr(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:o},e.defaultValues&&!fr(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:f,...h}=jO(e);t.current={...h,formState:o}}const c=t.current.control;return c._options=e,SO(()=>{const f=c._subscribe({formState:c._proxyFormState,callback:()=>l({...c._formState}),reRenderRoot:!0});return l(h=>({...h,isReady:!0})),c._formState.isReady=!0,f},[c]),gt.useEffect(()=>c._disableForm(e.disabled),[c,e.disabled]),gt.useEffect(()=>{e.mode&&(c._options.mode=e.mode),e.reValidateMode&&(c._options.reValidateMode=e.reValidateMode)},[c,e.mode,e.reValidateMode]),gt.useEffect(()=>{e.errors&&(c._setErrors(e.errors),c._focusError())},[c,e.errors]),gt.useEffect(()=>{e.shouldUnregister&&c._subjects.state.next({values:c._getWatch()})},[c,e.shouldUnregister]),gt.useEffect(()=>{if(c._proxyFormState.isDirty){const f=c._getDirty();f!==o.isDirty&&c._subjects.state.next({isDirty:f})}},[c,o.isDirty]),gt.useEffect(()=>{e.values&&!ja(e.values,a.current)?(c._reset(e.values,c._options.resetOptions),a.current=e.values,l(f=>({...f}))):c._resetDefaultValues()},[c,e.values]),gt.useEffect(()=>{c._state.mount||(c._setValid(),c._state.mount=!0),c._state.watch&&(c._state.watch=!1,c._subjects.state.next({...c._formState})),c._removeUnmounted()}),t.current.formState=EO(o,c),t.current}function BO(e){return At({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(e)}/*!
* sweetalert2 v11.22.2
* Released under the MIT License.
*/function C2(e,t,a){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:a;throw new TypeError("Private element is not present on this object")}function IO(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function cy(e,t){return e.get(C2(e,t))}function HO(e,t,a){IO(e,t),t.set(e,a)}function qO(e,t,a){return e.set(C2(e,t),a),a}const VO=100,Me={},$O=()=>{Me.previousActiveElement instanceof HTMLElement?(Me.previousActiveElement.focus(),Me.previousActiveElement=null):document.body&&document.body.focus()},FO=e=>new Promise(t=>{if(!e)return t();const a=window.scrollX,o=window.scrollY;Me.restoreFocusTimeout=setTimeout(()=>{$O(),t()},VO),window.scrollTo(a,o)}),k2="swal2-",YO=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],G=YO.reduce((e,t)=>(e[t]=k2+t,e),{}),GO=["success","warning","info","question","error"],_u=GO.reduce((e,t)=>(e[t]=k2+t,e),{}),R2="SweetAlert2:",Lm=e=>e.charAt(0).toUpperCase()+e.slice(1),dn=e=>{console.warn(`${R2} ${typeof e=="object"?e.join(" "):e}`)},Ni=e=>{console.error(`${R2} ${e}`)},uy=[],XO=e=>{uy.includes(e)||(uy.push(e),dn(e))},D2=(e,t=null)=>{XO(`"${e}" is deprecated and will be removed in the next major release.${t?` Use "${t}" instead.`:""}`)},Ju=e=>typeof e=="function"?e():e,Pm=e=>e&&typeof e.toPromise=="function",Sl=e=>Pm(e)?e.toPromise():Promise.resolve(e),zm=e=>e&&Promise.resolve(e)===e,fn=()=>document.body.querySelector(`.${G.container}`),_l=e=>{const t=fn();return t?t.querySelector(e):null},Pn=e=>_l(`.${e}`),rt=()=>Pn(G.popup),Uo=()=>Pn(G.icon),KO=()=>Pn(G["icon-content"]),M2=()=>Pn(G.title),Um=()=>Pn(G["html-container"]),N2=()=>Pn(G.image),jm=()=>Pn(G["progress-steps"]),Wu=()=>Pn(G["validation-message"]),Dr=()=>_l(`.${G.actions} .${G.confirm}`),jo=()=>_l(`.${G.actions} .${G.cancel}`),Li=()=>_l(`.${G.actions} .${G.deny}`),ZO=()=>Pn(G["input-label"]),Bo=()=>_l(`.${G.loader}`),Tl=()=>Pn(G.actions),L2=()=>Pn(G.footer),ed=()=>Pn(G["timer-progress-bar"]),Bm=()=>Pn(G.close),QO=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Im=()=>{const e=rt();if(!e)return[];const t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),a=Array.from(t).sort((c,f)=>{const h=parseInt(c.getAttribute("tabindex")||"0"),m=parseInt(f.getAttribute("tabindex")||"0");return h>m?1:h<m?-1:0}),o=e.querySelectorAll(QO),l=Array.from(o).filter(c=>c.getAttribute("tabindex")!=="-1");return[...new Set(a.concat(l))].filter(c=>Sn(c))},Hm=()=>Wr(document.body,G.shown)&&!Wr(document.body,G["toast-shown"])&&!Wr(document.body,G["no-backdrop"]),td=()=>{const e=rt();return e?Wr(e,G.toast):!1},JO=()=>{const e=rt();return e?e.hasAttribute("data-loading"):!1},zn=(e,t)=>{if(e.textContent="",t){const o=new DOMParser().parseFromString(t,"text/html"),l=o.querySelector("head");l&&Array.from(l.childNodes).forEach(f=>{e.appendChild(f)});const c=o.querySelector("body");c&&Array.from(c.childNodes).forEach(f=>{f instanceof HTMLVideoElement||f instanceof HTMLAudioElement?e.appendChild(f.cloneNode(!0)):e.appendChild(f)})}},Wr=(e,t)=>{if(!t)return!1;const a=t.split(/\s+/);for(let o=0;o<a.length;o++)if(!e.classList.contains(a[o]))return!1;return!0},WO=(e,t)=>{Array.from(e.classList).forEach(a=>{!Object.values(G).includes(a)&&!Object.values(_u).includes(a)&&!Object.values(t.showClass||{}).includes(a)&&e.classList.remove(a)})},Ln=(e,t,a)=>{if(WO(e,t),!t.customClass)return;const o=t.customClass[a];if(o){if(typeof o!="string"&&!o.forEach){dn(`Invalid type of customClass.${a}! Expected string or iterable object, got "${typeof o}"`);return}it(e,o)}},nd=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${G.popup} > .${G[t]}`);case"checkbox":return e.querySelector(`.${G.popup} > .${G.checkbox} input`);case"radio":return e.querySelector(`.${G.popup} > .${G.radio} input:checked`)||e.querySelector(`.${G.popup} > .${G.radio} input:first-child`);case"range":return e.querySelector(`.${G.popup} > .${G.range} input`);default:return e.querySelector(`.${G.popup} > .${G.input}`)}},P2=e=>{if(e.focus(),e.type!=="file"){const t=e.value;e.value="",e.value=t}},z2=(e,t,a)=>{!e||!t||(typeof t=="string"&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(o=>{Array.isArray(e)?e.forEach(l=>{a?l.classList.add(o):l.classList.remove(o)}):a?e.classList.add(o):e.classList.remove(o)}))},it=(e,t)=>{z2(e,t,!0)},er=(e,t)=>{z2(e,t,!1)},Ba=(e,t)=>{const a=Array.from(e.children);for(let o=0;o<a.length;o++){const l=a[o];if(l instanceof HTMLElement&&Wr(l,t))return l}},Oi=(e,t,a)=>{a===`${parseInt(a)}`&&(a=parseInt(a)),a||parseInt(a)===0?e.style.setProperty(t,typeof a=="number"?`${a}px`:a):e.style.removeProperty(t)},Xt=(e,t="flex")=>{e&&(e.style.display=t)},rn=e=>{e&&(e.style.display="none")},qm=(e,t="block")=>{e&&new MutationObserver(()=>{Al(e,e.innerHTML,t)}).observe(e,{childList:!0,subtree:!0})},dy=(e,t,a,o)=>{const l=e.querySelector(t);l&&l.style.setProperty(a,o)},Al=(e,t,a="flex")=>{t?Xt(e,a):rn(e)},Sn=e=>!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),eC=()=>!Sn(Dr())&&!Sn(Li())&&!Sn(jo()),em=e=>e.scrollHeight>e.clientHeight,tC=(e,t)=>{let a=e;for(;a&&a!==t;){if(em(a))return!0;a=a.parentElement}return!1},U2=e=>{const t=window.getComputedStyle(e),a=parseFloat(t.getPropertyValue("animation-duration")||"0"),o=parseFloat(t.getPropertyValue("transition-duration")||"0");return a>0||o>0},Vm=(e,t=!1)=>{const a=ed();a&&Sn(a)&&(t&&(a.style.transition="none",a.style.width="100%"),setTimeout(()=>{a.style.transition=`width ${e/1e3}s linear`,a.style.width="0%"},10))},nC=()=>{const e=ed();if(!e)return;const t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const a=parseInt(window.getComputedStyle(e).width),o=t/a*100;e.style.width=`${o}%`},rC=()=>typeof window>"u"||typeof document>"u",aC=`
 <div aria-labelledby="${G.title}" aria-describedby="${G["html-container"]}" class="${G.popup}" tabindex="-1">
   <button type="button" class="${G.close}"></button>
   <ul class="${G["progress-steps"]}"></ul>
   <div class="${G.icon}"></div>
   <img class="${G.image}" />
   <h2 class="${G.title}" id="${G.title}"></h2>
   <div class="${G["html-container"]}" id="${G["html-container"]}"></div>
   <input class="${G.input}" id="${G.input}" />
   <input type="file" class="${G.file}" />
   <div class="${G.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${G.select}" id="${G.select}"></select>
   <div class="${G.radio}"></div>
   <label class="${G.checkbox}">
     <input type="checkbox" id="${G.checkbox}" />
     <span class="${G.label}"></span>
   </label>
   <textarea class="${G.textarea}" id="${G.textarea}"></textarea>
   <div class="${G["validation-message"]}" id="${G["validation-message"]}"></div>
   <div class="${G.actions}">
     <div class="${G.loader}"></div>
     <button type="button" class="${G.confirm}"></button>
     <button type="button" class="${G.deny}"></button>
     <button type="button" class="${G.cancel}"></button>
   </div>
   <div class="${G.footer}"></div>
   <div class="${G["timer-progress-bar-container"]}">
     <div class="${G["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),iC=()=>{const e=fn();return e?(e.remove(),er([document.documentElement,document.body],[G["no-backdrop"],G["toast-shown"],G["has-column"]]),!0):!1},yi=()=>{Me.currentInstance.resetValidationMessage()},oC=()=>{const e=rt(),t=Ba(e,G.input),a=Ba(e,G.file),o=e.querySelector(`.${G.range} input`),l=e.querySelector(`.${G.range} output`),c=Ba(e,G.select),f=e.querySelector(`.${G.checkbox} input`),h=Ba(e,G.textarea);t.oninput=yi,a.onchange=yi,c.onchange=yi,f.onchange=yi,h.oninput=yi,o.oninput=()=>{yi(),l.value=o.value},o.onchange=()=>{yi(),l.value=o.value}},sC=e=>typeof e=="string"?document.querySelector(e):e,lC=e=>{const t=rt();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},cC=e=>{window.getComputedStyle(e).direction==="rtl"&&it(fn(),G.rtl)},uC=e=>{const t=iC();if(rC()){Ni("SweetAlert2 requires document to initialize");return}const a=document.createElement("div");a.className=G.container,t&&it(a,G["no-transition"]),zn(a,aC),a.dataset.swal2Theme=e.theme;const o=sC(e.target);o.appendChild(a),e.topLayer&&(a.setAttribute("popover",""),a.showPopover()),lC(e),cC(o),oC()},$m=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):typeof e=="object"?dC(e,t):e&&zn(t,e)},dC=(e,t)=>{e.jquery?fC(t,e):zn(t,e.toString())},fC=(e,t)=>{if(e.textContent="",0 in t)for(let a=0;a in t;a++)e.appendChild(t[a].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},hC=(e,t)=>{const a=Tl(),o=Bo();!a||!o||(!t.showConfirmButton&&!t.showDenyButton&&!t.showCancelButton?rn(a):Xt(a),Ln(a,t,"actions"),mC(a,o,t),zn(o,t.loaderHtml||""),Ln(o,t,"loader"))};function mC(e,t,a){const o=Dr(),l=Li(),c=jo();!o||!l||!c||(Dh(o,"confirm",a),Dh(l,"deny",a),Dh(c,"cancel",a),pC(o,l,c,a),a.reverseButtons&&(a.toast?(e.insertBefore(c,o),e.insertBefore(l,o)):(e.insertBefore(c,t),e.insertBefore(l,t),e.insertBefore(o,t))))}function pC(e,t,a,o){if(!o.buttonsStyling){er([e,t,a],G.styled);return}it([e,t,a],G.styled),o.confirmButtonColor&&e.style.setProperty("--swal2-confirm-button-background-color",o.confirmButtonColor),o.denyButtonColor&&t.style.setProperty("--swal2-deny-button-background-color",o.denyButtonColor),o.cancelButtonColor&&a.style.setProperty("--swal2-cancel-button-background-color",o.cancelButtonColor),Rh(e),Rh(t),Rh(a)}function Rh(e){const t=window.getComputedStyle(e);if(t.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const a=t.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");e.style.setProperty("--swal2-action-button-focus-box-shadow",t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${a}`))}function Dh(e,t,a){const o=Lm(t);Al(e,a[`show${o}Button`],"inline-block"),zn(e,a[`${t}ButtonText`]||""),e.setAttribute("aria-label",a[`${t}ButtonAriaLabel`]||""),e.className=G[t],Ln(e,a,`${t}Button`)}const gC=(e,t)=>{const a=Bm();a&&(zn(a,t.closeButtonHtml||""),Ln(a,t,"closeButton"),Al(a,t.showCloseButton),a.setAttribute("aria-label",t.closeButtonAriaLabel||""))},bC=(e,t)=>{const a=fn();a&&(vC(a,t.backdrop),yC(a,t.position),wC(a,t.grow),Ln(a,t,"container"))};function vC(e,t){typeof t=="string"?e.style.background=t:t||it([document.documentElement,document.body],G["no-backdrop"])}function yC(e,t){t&&(t in G?it(e,G[t]):(dn('The "position" parameter is not valid, defaulting to "center"'),it(e,G.center)))}function wC(e,t){t&&it(e,G[`grow-${t}`])}var vt={innerParams:new WeakMap,domCache:new WeakMap};const xC=["input","file","range","select","radio","checkbox","textarea"],EC=(e,t)=>{const a=rt();if(!a)return;const o=vt.innerParams.get(e),l=!o||t.input!==o.input;xC.forEach(c=>{const f=Ba(a,G[c]);f&&(TC(c,t.inputAttributes),f.className=G[c],l&&rn(f))}),t.input&&(l&&SC(t),AC(t))},SC=e=>{if(!e.input)return;if(!Nt[e.input]){Ni(`Unexpected type of input! Expected ${Object.keys(Nt).join(" | ")}, got "${e.input}"`);return}const t=j2(e.input);if(!t)return;const a=Nt[e.input](t,e);Xt(t),e.inputAutoFocus&&setTimeout(()=>{P2(a)})},_C=e=>{for(let t=0;t<e.attributes.length;t++){const a=e.attributes[t].name;["id","type","value","style"].includes(a)||e.removeAttribute(a)}},TC=(e,t)=>{const a=rt();if(!a)return;const o=nd(a,e);if(o){_C(o);for(const l in t)o.setAttribute(l,t[l])}},AC=e=>{if(!e.input)return;const t=j2(e.input);t&&Ln(t,e,"input")},Fm=(e,t)=>{!e.placeholder&&t.inputPlaceholder&&(e.placeholder=t.inputPlaceholder)},Ol=(e,t,a)=>{if(a.inputLabel){const o=document.createElement("label"),l=G["input-label"];o.setAttribute("for",e.id),o.className=l,typeof a.customClass=="object"&&it(o,a.customClass.inputLabel),o.innerText=a.inputLabel,t.insertAdjacentElement("beforebegin",o)}},j2=e=>{const t=rt();if(t)return Ba(t,G[e]||G.input)},Tu=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:zm(t)||dn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)},Nt={};Nt.text=Nt.email=Nt.password=Nt.number=Nt.tel=Nt.url=Nt.search=Nt.date=Nt["datetime-local"]=Nt.time=Nt.week=Nt.month=(e,t)=>(Tu(e,t.inputValue),Ol(e,e,t),Fm(e,t),e.type=t.input,e);Nt.file=(e,t)=>(Ol(e,e,t),Fm(e,t),e);Nt.range=(e,t)=>{const a=e.querySelector("input"),o=e.querySelector("output");return Tu(a,t.inputValue),a.type=t.input,Tu(o,t.inputValue),Ol(a,e,t),e};Nt.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const a=document.createElement("option");zn(a,t.inputPlaceholder),a.value="",a.disabled=!0,a.selected=!0,e.appendChild(a)}return Ol(e,e,t),e};Nt.radio=e=>(e.textContent="",e);Nt.checkbox=(e,t)=>{const a=nd(rt(),"checkbox");a.value="1",a.checked=!!t.inputValue;const o=e.querySelector("span");return zn(o,t.inputPlaceholder||t.inputLabel),a};Nt.textarea=(e,t)=>{Tu(e,t.inputValue),Fm(e,t),Ol(e,e,t);const a=o=>parseInt(window.getComputedStyle(o).marginLeft)+parseInt(window.getComputedStyle(o).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const o=parseInt(window.getComputedStyle(rt()).width),l=()=>{if(!document.body.contains(e))return;const c=e.offsetWidth+a(e);c>o?rt().style.width=`${c}px`:Oi(rt(),"width",t.width)};new MutationObserver(l).observe(e,{attributes:!0,attributeFilter:["style"]})}}),e};const OC=(e,t)=>{const a=Um();a&&(qm(a),Ln(a,t,"htmlContainer"),t.html?($m(t.html,a),Xt(a,"block")):t.text?(a.textContent=t.text,Xt(a,"block")):rn(a),EC(e,t))},CC=(e,t)=>{const a=L2();a&&(qm(a),Al(a,t.footer,"block"),t.footer&&$m(t.footer,a),Ln(a,t,"footer"))},kC=(e,t)=>{const a=vt.innerParams.get(e),o=Uo();if(!o)return;if(a&&t.icon===a.icon){hy(o,t),fy(o,t);return}if(!t.icon&&!t.iconHtml){rn(o);return}if(t.icon&&Object.keys(_u).indexOf(t.icon)===-1){Ni(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`),rn(o);return}Xt(o),hy(o,t),fy(o,t),it(o,t.showClass&&t.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",B2)},fy=(e,t)=>{for(const[a,o]of Object.entries(_u))t.icon!==a&&er(e,o);it(e,t.icon&&_u[t.icon]),MC(e,t),B2(),Ln(e,t,"icon")},B2=()=>{const e=rt();if(!e)return;const t=window.getComputedStyle(e).getPropertyValue("background-color"),a=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let o=0;o<a.length;o++)a[o].style.backgroundColor=t},RC=e=>`
  ${e.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${e.animation?'<div class="swal2-success-fix"></div>':""}
  ${e.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,DC=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,hy=(e,t)=>{if(!t.icon&&!t.iconHtml)return;let a=e.innerHTML,o="";t.iconHtml?o=my(t.iconHtml):t.icon==="success"?(o=RC(t),a=a.replace(/ style=".*?"/g,"")):t.icon==="error"?o=DC:t.icon&&(o=my({question:"?",warning:"!",info:"i"}[t.icon])),a.trim()!==o.trim()&&zn(e,o)},MC=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const a of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])dy(e,a,"background-color",t.iconColor);dy(e,".swal2-success-ring","border-color",t.iconColor)}},my=e=>`<div class="${G["icon-content"]}">${e}</div>`,NC=(e,t)=>{const a=N2();if(a){if(!t.imageUrl){rn(a);return}Xt(a,""),a.setAttribute("src",t.imageUrl),a.setAttribute("alt",t.imageAlt||""),Oi(a,"width",t.imageWidth),Oi(a,"height",t.imageHeight),a.className=G.image,Ln(a,t,"image")}};let Ym=!1,I2=0,H2=0,q2=0,V2=0;const LC=e=>{e.addEventListener("mousedown",Au),document.body.addEventListener("mousemove",Ou),e.addEventListener("mouseup",Cu),e.addEventListener("touchstart",Au),document.body.addEventListener("touchmove",Ou),e.addEventListener("touchend",Cu)},PC=e=>{e.removeEventListener("mousedown",Au),document.body.removeEventListener("mousemove",Ou),e.removeEventListener("mouseup",Cu),e.removeEventListener("touchstart",Au),document.body.removeEventListener("touchmove",Ou),e.removeEventListener("touchend",Cu)},Au=e=>{const t=rt();if(e.target===t||Uo().contains(e.target)){Ym=!0;const a=$2(e);I2=a.clientX,H2=a.clientY,q2=parseInt(t.style.insetInlineStart)||0,V2=parseInt(t.style.insetBlockStart)||0,it(t,"swal2-dragging")}},Ou=e=>{const t=rt();if(Ym){let{clientX:a,clientY:o}=$2(e);t.style.insetInlineStart=`${q2+(a-I2)}px`,t.style.insetBlockStart=`${V2+(o-H2)}px`}},Cu=()=>{const e=rt();Ym=!1,er(e,"swal2-dragging")},$2=e=>{let t=0,a=0;return e.type.startsWith("mouse")?(t=e.clientX,a=e.clientY):e.type.startsWith("touch")&&(t=e.touches[0].clientX,a=e.touches[0].clientY),{clientX:t,clientY:a}},zC=(e,t)=>{const a=fn(),o=rt();if(!(!a||!o)){if(t.toast){Oi(a,"width",t.width),o.style.width="100%";const l=Bo();l&&o.insertBefore(l,Uo())}else Oi(o,"width",t.width);Oi(o,"padding",t.padding),t.color&&(o.style.color=t.color),t.background&&(o.style.background=t.background),rn(Wu()),UC(o,t),t.draggable&&!t.toast?(it(o,G.draggable),LC(o)):(er(o,G.draggable),PC(o))}},UC=(e,t)=>{const a=t.showClass||{};e.className=`${G.popup} ${Sn(e)?a.popup:""}`,t.toast?(it([document.documentElement,document.body],G["toast-shown"]),it(e,G.toast)):it(e,G.modal),Ln(e,t,"popup"),typeof t.customClass=="string"&&it(e,t.customClass),t.icon&&it(e,G[`icon-${t.icon}`])},jC=(e,t)=>{const a=jm();if(!a)return;const{progressSteps:o,currentProgressStep:l}=t;if(!o||o.length===0||l===void 0){rn(a);return}Xt(a),a.textContent="",l>=o.length&&dn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),o.forEach((c,f)=>{const h=BC(c);if(a.appendChild(h),f===l&&it(h,G["active-progress-step"]),f!==o.length-1){const m=IC(t);a.appendChild(m)}})},BC=e=>{const t=document.createElement("li");return it(t,G["progress-step"]),zn(t,e),t},IC=e=>{const t=document.createElement("li");return it(t,G["progress-step-line"]),e.progressStepsDistance&&Oi(t,"width",e.progressStepsDistance),t},HC=(e,t)=>{const a=M2();a&&(qm(a),Al(a,t.title||t.titleText,"block"),t.title&&$m(t.title,a),t.titleText&&(a.innerText=t.titleText),Ln(a,t,"title"))},F2=(e,t)=>{zC(e,t),bC(e,t),jC(e,t),kC(e,t),NC(e,t),HC(e,t),gC(e,t),OC(e,t),hC(e,t),CC(e,t);const a=rt();typeof t.didRender=="function"&&a&&t.didRender(a),Me.eventEmitter.emit("didRender",a)},qC=()=>Sn(rt()),Y2=()=>{var e;return(e=Dr())===null||e===void 0?void 0:e.click()},VC=()=>{var e;return(e=Li())===null||e===void 0?void 0:e.click()},$C=()=>{var e;return(e=jo())===null||e===void 0?void 0:e.click()},Io=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),G2=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},FC=(e,t,a)=>{G2(e),t.toast||(e.keydownHandler=o=>GC(t,o,a),e.keydownTarget=t.keydownListenerCapture?window:rt(),e.keydownListenerCapture=t.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},tm=(e,t)=>{var a;const o=Im();if(o.length){e=e+t,e===-2&&(e=o.length-1),e===o.length?e=0:e===-1&&(e=o.length-1),o[e].focus();return}(a=rt())===null||a===void 0||a.focus()},X2=["ArrowRight","ArrowDown"],YC=["ArrowLeft","ArrowUp"],GC=(e,t,a)=>{e&&(t.isComposing||t.keyCode===229||(e.stopKeydownPropagation&&t.stopPropagation(),t.key==="Enter"?XC(t,e):t.key==="Tab"?KC(t):[...X2,...YC].includes(t.key)?ZC(t.key):t.key==="Escape"&&QC(t,e,a)))},XC=(e,t)=>{if(!Ju(t.allowEnterKey))return;const a=nd(rt(),t.input);if(e.target&&a&&e.target instanceof HTMLElement&&e.target.outerHTML===a.outerHTML){if(["textarea","file"].includes(t.input))return;Y2(),e.preventDefault()}},KC=e=>{const t=e.target,a=Im();let o=-1;for(let l=0;l<a.length;l++)if(t===a[l]){o=l;break}e.shiftKey?tm(o,-1):tm(o,1),e.stopPropagation(),e.preventDefault()},ZC=e=>{const t=Tl(),a=Dr(),o=Li(),l=jo();if(!t||!a||!o||!l)return;const c=[a,o,l];if(document.activeElement instanceof HTMLElement&&!c.includes(document.activeElement))return;const f=X2.includes(e)?"nextElementSibling":"previousElementSibling";let h=document.activeElement;if(h){for(let m=0;m<t.children.length;m++){if(h=h[f],!h)return;if(h instanceof HTMLButtonElement&&Sn(h))break}h instanceof HTMLButtonElement&&h.focus()}},QC=(e,t,a)=>{e.preventDefault(),Ju(t.allowEscapeKey)&&a(Io.esc)};var Do={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const JC=()=>{const e=fn();Array.from(document.body.children).forEach(a=>{a.contains(e)||(a.hasAttribute("aria-hidden")&&a.setAttribute("data-previous-aria-hidden",a.getAttribute("aria-hidden")||""),a.setAttribute("aria-hidden","true"))})},K2=()=>{Array.from(document.body.children).forEach(t=>{t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")||""),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},Z2=typeof window<"u"&&!!window.GestureEvent,WC=()=>{if(Z2&&!Wr(document.body,G.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,it(document.body,G.iosfix),ek()}},ek=()=>{const e=fn();if(!e)return;let t;e.ontouchstart=a=>{t=tk(a)},e.ontouchmove=a=>{t&&(a.preventDefault(),a.stopPropagation())}},tk=e=>{const t=e.target,a=fn(),o=Um();return!a||!o||nk(e)||rk(e)?!1:t===a||!em(a)&&t instanceof HTMLElement&&!tC(t,o)&&t.tagName!=="INPUT"&&t.tagName!=="TEXTAREA"&&!(em(o)&&o.contains(t))},nk=e=>e.touches&&e.touches.length&&e.touches[0].touchType==="stylus",rk=e=>e.touches&&e.touches.length>1,ak=()=>{if(Wr(document.body,G.iosfix)){const e=parseInt(document.body.style.top,10);er(document.body,G.iosfix),document.body.style.top="",document.body.scrollTop=e*-1}},ik=()=>{const e=document.createElement("div");e.className=G["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t};let Oo=null;const ok=e=>{Oo===null&&(document.body.scrollHeight>window.innerHeight||e==="scroll")&&(Oo=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Oo+ik()}px`)},sk=()=>{Oo!==null&&(document.body.style.paddingRight=`${Oo}px`,Oo=null)};function Q2(e,t,a,o){td()?py(e,o):(FO(a).then(()=>py(e,o)),G2(Me)),Z2?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),Hm()&&(sk(),ak(),K2()),lk()}function lk(){er([document.documentElement,document.body],[G.shown,G["height-auto"],G["no-backdrop"],G["toast-shown"]])}function Ia(e){e=uk(e);const t=Do.swalPromiseResolve.get(this),a=ck(this);this.isAwaitingPromise?e.isDismissed||(Cl(this),t(e)):a&&t(e)}const ck=e=>{const t=rt();if(!t)return!1;const a=vt.innerParams.get(e);if(!a||Wr(t,a.hideClass.popup))return!1;er(t,a.showClass.popup),it(t,a.hideClass.popup);const o=fn();return er(o,a.showClass.backdrop),it(o,a.hideClass.backdrop),dk(e,t,a),!0};function J2(e){const t=Do.swalPromiseReject.get(this);Cl(this),t&&t(e)}const Cl=e=>{e.isAwaitingPromise&&(delete e.isAwaitingPromise,vt.innerParams.get(e)||e._destroy())},uk=e=>typeof e>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),dk=(e,t,a)=>{var o;const l=fn(),c=U2(t);typeof a.willClose=="function"&&a.willClose(t),(o=Me.eventEmitter)===null||o===void 0||o.emit("willClose",t),c?fk(e,t,l,a.returnFocus,a.didClose):Q2(e,l,a.returnFocus,a.didClose)},fk=(e,t,a,o,l)=>{Me.swalCloseEventFinishedCallback=Q2.bind(null,e,a,o,l);const c=function(f){if(f.target===t){var h;(h=Me.swalCloseEventFinishedCallback)===null||h===void 0||h.call(Me),delete Me.swalCloseEventFinishedCallback,t.removeEventListener("animationend",c),t.removeEventListener("transitionend",c)}};t.addEventListener("animationend",c),t.addEventListener("transitionend",c)},py=(e,t)=>{setTimeout(()=>{var a;typeof t=="function"&&t.bind(e.params)(),(a=Me.eventEmitter)===null||a===void 0||a.emit("didClose"),e._destroy&&e._destroy()})},Mo=e=>{let t=rt();if(t||new Qn,t=rt(),!t)return;const a=Bo();td()?rn(Uo()):hk(t,e),Xt(a),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},hk=(e,t)=>{const a=Tl(),o=Bo();!a||!o||(!t&&Sn(Dr())&&(t=Dr()),Xt(a),t&&(rn(t),o.setAttribute("data-button-to-replace",t.className),a.insertBefore(o,t)),it([e,a],G.loading))},mk=(e,t)=>{t.input==="select"||t.input==="radio"?yk(e,t):["text","email","number","tel","textarea"].some(a=>a===t.input)&&(Pm(t.inputValue)||zm(t.inputValue))&&(Mo(Dr()),wk(e,t))},pk=(e,t)=>{const a=e.getInput();if(!a)return null;switch(t.input){case"checkbox":return gk(a);case"radio":return bk(a);case"file":return vk(a);default:return t.inputAutoTrim?a.value.trim():a.value}},gk=e=>e.checked?1:0,bk=e=>e.checked?e.value:null,vk=e=>e.files&&e.files.length?e.getAttribute("multiple")!==null?e.files:e.files[0]:null,yk=(e,t)=>{const a=rt();if(!a)return;const o=l=>{t.input==="select"?xk(a,ku(l),t):t.input==="radio"&&Ek(a,ku(l),t)};Pm(t.inputOptions)||zm(t.inputOptions)?(Mo(Dr()),Sl(t.inputOptions).then(l=>{e.hideLoading(),o(l)})):typeof t.inputOptions=="object"?o(t.inputOptions):Ni(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`)},wk=(e,t)=>{const a=e.getInput();a&&(rn(a),Sl(t.inputValue).then(o=>{a.value=t.input==="number"?`${parseFloat(o)||0}`:`${o}`,Xt(a),a.focus(),e.hideLoading()}).catch(o=>{Ni(`Error in inputValue promise: ${o}`),a.value="",Xt(a),a.focus(),e.hideLoading()}))};function xk(e,t,a){const o=Ba(e,G.select);if(!o)return;const l=(c,f,h)=>{const m=document.createElement("option");m.value=h,zn(m,f),m.selected=W2(h,a.inputValue),c.appendChild(m)};t.forEach(c=>{const f=c[0],h=c[1];if(Array.isArray(h)){const m=document.createElement("optgroup");m.label=f,m.disabled=!1,o.appendChild(m),h.forEach(p=>l(m,p[1],p[0]))}else l(o,h,f)}),o.focus()}function Ek(e,t,a){const o=Ba(e,G.radio);if(!o)return;t.forEach(c=>{const f=c[0],h=c[1],m=document.createElement("input"),p=document.createElement("label");m.type="radio",m.name=G.radio,m.value=f,W2(f,a.inputValue)&&(m.checked=!0);const b=document.createElement("span");zn(b,h),b.className=G.label,p.appendChild(m),p.appendChild(b),o.appendChild(p)});const l=o.querySelectorAll("input");l.length&&l[0].focus()}const ku=e=>{const t=[];return e instanceof Map?e.forEach((a,o)=>{let l=a;typeof l=="object"&&(l=ku(l)),t.push([o,l])}):Object.keys(e).forEach(a=>{let o=e[a];typeof o=="object"&&(o=ku(o)),t.push([a,o])}),t},W2=(e,t)=>!!t&&t.toString()===e.toString(),Sk=e=>{const t=vt.innerParams.get(e);e.disableButtons(),t.input?ew(e,"confirm"):Xm(e,!0)},_k=e=>{const t=vt.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?ew(e,"deny"):Gm(e,!1)},Tk=(e,t)=>{e.disableButtons(),t(Io.cancel)},ew=(e,t)=>{const a=vt.innerParams.get(e);if(!a.input){Ni(`The "input" parameter is needed to be set when using returnInputValueOn${Lm(t)}`);return}const o=e.getInput(),l=pk(e,a);a.inputValidator?Ak(e,l,t):o&&!o.checkValidity()?(e.enableButtons(),e.showValidationMessage(a.validationMessage||o.validationMessage)):t==="deny"?Gm(e,l):Xm(e,l)},Ak=(e,t,a)=>{const o=vt.innerParams.get(e);e.disableInput(),Promise.resolve().then(()=>Sl(o.inputValidator(t,o.validationMessage))).then(c=>{e.enableButtons(),e.enableInput(),c?e.showValidationMessage(c):a==="deny"?Gm(e,t):Xm(e,t)})},Gm=(e,t)=>{const a=vt.innerParams.get(e||void 0);a.showLoaderOnDeny&&Mo(Li()),a.preDeny?(e.isAwaitingPromise=!0,Promise.resolve().then(()=>Sl(a.preDeny(t,a.validationMessage))).then(l=>{l===!1?(e.hideLoading(),Cl(e)):e.close({isDenied:!0,value:typeof l>"u"?t:l})}).catch(l=>tw(e||void 0,l))):e.close({isDenied:!0,value:t})},gy=(e,t)=>{e.close({isConfirmed:!0,value:t})},tw=(e,t)=>{e.rejectPromise(t)},Xm=(e,t)=>{const a=vt.innerParams.get(e||void 0);a.showLoaderOnConfirm&&Mo(),a.preConfirm?(e.resetValidationMessage(),e.isAwaitingPromise=!0,Promise.resolve().then(()=>Sl(a.preConfirm(t,a.validationMessage))).then(l=>{Sn(Wu())||l===!1?(e.hideLoading(),Cl(e)):gy(e,typeof l>"u"?t:l)}).catch(l=>tw(e||void 0,l))):gy(e,t)};function Ru(){const e=vt.innerParams.get(this);if(!e)return;const t=vt.domCache.get(this);rn(t.loader),td()?e.icon&&Xt(Uo()):Ok(t),er([t.popup,t.actions],G.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}const Ok=e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?Xt(t[0],"inline-block"):eC()&&rn(e.actions)};function nw(){const e=vt.innerParams.get(this),t=vt.domCache.get(this);return t?nd(t.popup,e.input):null}function rw(e,t,a){const o=vt.domCache.get(e);t.forEach(l=>{o[l].disabled=a})}function aw(e,t){const a=rt();if(!(!a||!e))if(e.type==="radio"){const o=a.querySelectorAll(`[name="${G.radio}"]`);for(let l=0;l<o.length;l++)o[l].disabled=t}else e.disabled=t}function iw(){rw(this,["confirmButton","denyButton","cancelButton"],!1)}function ow(){rw(this,["confirmButton","denyButton","cancelButton"],!0)}function sw(){aw(this.getInput(),!1)}function lw(){aw(this.getInput(),!0)}function cw(e){const t=vt.domCache.get(this),a=vt.innerParams.get(this);zn(t.validationMessage,e),t.validationMessage.className=G["validation-message"],a.customClass&&a.customClass.validationMessage&&it(t.validationMessage,a.customClass.validationMessage),Xt(t.validationMessage);const o=this.getInput();o&&(o.setAttribute("aria-invalid","true"),o.setAttribute("aria-describedby",G["validation-message"]),P2(o),it(o,G.inputerror))}function uw(){const e=vt.domCache.get(this);e.validationMessage&&rn(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),er(t,G.inputerror))}const Co={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},Ck=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],kk={allowEnterKey:void 0},Rk=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],dw=e=>Object.prototype.hasOwnProperty.call(Co,e),fw=e=>Ck.indexOf(e)!==-1,hw=e=>kk[e],Dk=e=>{dw(e)||dn(`Unknown parameter "${e}"`)},Mk=e=>{Rk.includes(e)&&dn(`The parameter "${e}" is incompatible with toasts`)},Nk=e=>{const t=hw(e);t&&D2(e,t)},mw=e=>{e.backdrop===!1&&e.allowOutsideClick&&dn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),e.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(e.theme)&&dn(`Invalid theme "${e.theme}"`);for(const t in e)Dk(t),e.toast&&Mk(t),Nk(t)};function pw(e){const t=fn(),a=rt(),o=vt.innerParams.get(this);if(!a||Wr(a,o.hideClass.popup)){dn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const l=Lk(e),c=Object.assign({},o,l);mw(c),t.dataset.swal2Theme=c.theme,F2(this,c),vt.innerParams.set(this,c),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}const Lk=e=>{const t={};return Object.keys(e).forEach(a=>{fw(a)?t[a]=e[a]:dn(`Invalid parameter to update: ${a}`)}),t};function gw(){const e=vt.domCache.get(this),t=vt.innerParams.get(this);if(!t){bw(this);return}e.popup&&Me.swalCloseEventFinishedCallback&&(Me.swalCloseEventFinishedCallback(),delete Me.swalCloseEventFinishedCallback),typeof t.didDestroy=="function"&&t.didDestroy(),Me.eventEmitter.emit("didDestroy"),Pk(this)}const Pk=e=>{bw(e),delete e.params,delete Me.keydownHandler,delete Me.keydownTarget,delete Me.currentInstance},bw=e=>{e.isAwaitingPromise?(Mh(vt,e),e.isAwaitingPromise=!0):(Mh(Do,e),Mh(vt,e),delete e.isAwaitingPromise,delete e.disableButtons,delete e.enableButtons,delete e.getInput,delete e.disableInput,delete e.enableInput,delete e.hideLoading,delete e.disableLoading,delete e.showValidationMessage,delete e.resetValidationMessage,delete e.close,delete e.closePopup,delete e.closeModal,delete e.closeToast,delete e.rejectPromise,delete e.update,delete e._destroy)},Mh=(e,t)=>{for(const a in e)e[a].delete(t)};var zk=Object.freeze({__proto__:null,_destroy:gw,close:Ia,closeModal:Ia,closePopup:Ia,closeToast:Ia,disableButtons:ow,disableInput:lw,disableLoading:Ru,enableButtons:iw,enableInput:sw,getInput:nw,handleAwaitingPromise:Cl,hideLoading:Ru,rejectPromise:J2,resetValidationMessage:uw,showValidationMessage:cw,update:pw});const Uk=(e,t,a)=>{e.toast?jk(e,t,a):(Ik(t),Hk(t),qk(e,t,a))},jk=(e,t,a)=>{t.popup.onclick=()=>{e&&(Bk(e)||e.timer||e.input)||a(Io.close)}},Bk=e=>!!(e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton);let Du=!1;const Ik=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=()=>{},t.target===e.container&&(Du=!0)}}},Hk=e=>{e.container.onmousedown=t=>{t.target===e.container&&t.preventDefault(),e.popup.onmouseup=function(a){e.popup.onmouseup=()=>{},(a.target===e.popup||a.target instanceof HTMLElement&&e.popup.contains(a.target))&&(Du=!0)}}},qk=(e,t,a)=>{t.container.onclick=o=>{if(Du){Du=!1;return}o.target===t.container&&Ju(e.allowOutsideClick)&&a(Io.backdrop)}},Vk=e=>typeof e=="object"&&e.jquery,by=e=>e instanceof Element||Vk(e),$k=e=>{const t={};return typeof e[0]=="object"&&!by(e[0])?Object.assign(t,e[0]):["title","html","icon"].forEach((a,o)=>{const l=e[o];typeof l=="string"||by(l)?t[a]=l:l!==void 0&&Ni(`Unexpected type of ${a}! Expected "string" or "Element", got ${typeof l}`)}),t};function Fk(...e){return new this(...e)}function Yk(e){class t extends this{_main(o,l){return super._main(o,Object.assign({},e,l))}}return t}const Gk=()=>Me.timeout&&Me.timeout.getTimerLeft(),vw=()=>{if(Me.timeout)return nC(),Me.timeout.stop()},yw=()=>{if(Me.timeout){const e=Me.timeout.start();return Vm(e),e}},Xk=()=>{const e=Me.timeout;return e&&(e.running?vw():yw())},Kk=e=>{if(Me.timeout){const t=Me.timeout.increase(e);return Vm(t,!0),t}},Zk=()=>!!(Me.timeout&&Me.timeout.isRunning());let vy=!1;const nm={};function Qk(e="data-swal-template"){nm[e]=this,vy||(document.body.addEventListener("click",Jk),vy=!0)}const Jk=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const a in nm){const o=t.getAttribute(a);if(o){nm[a].fire({template:o});return}}};class Wk{constructor(){this.events={}}_getHandlersByEventName(t){return typeof this.events[t]>"u"&&(this.events[t]=[]),this.events[t]}on(t,a){const o=this._getHandlersByEventName(t);o.includes(a)||o.push(a)}once(t,a){const o=(...l)=>{this.removeListener(t,o),a.apply(this,l)};this.on(t,o)}emit(t,...a){this._getHandlersByEventName(t).forEach(o=>{try{o.apply(this,a)}catch(l){console.error(l)}})}removeListener(t,a){const o=this._getHandlersByEventName(t),l=o.indexOf(a);l>-1&&o.splice(l,1)}removeAllListeners(t){this.events[t]!==void 0&&(this.events[t].length=0)}reset(){this.events={}}}Me.eventEmitter=new Wk;const eR=(e,t)=>{Me.eventEmitter.on(e,t)},tR=(e,t)=>{Me.eventEmitter.once(e,t)},nR=(e,t)=>{if(!e){Me.eventEmitter.reset();return}t?Me.eventEmitter.removeListener(e,t):Me.eventEmitter.removeAllListeners(e)};var rR=Object.freeze({__proto__:null,argsToParams:$k,bindClickHandler:Qk,clickCancel:$C,clickConfirm:Y2,clickDeny:VC,enableLoading:Mo,fire:Fk,getActions:Tl,getCancelButton:jo,getCloseButton:Bm,getConfirmButton:Dr,getContainer:fn,getDenyButton:Li,getFocusableElements:Im,getFooter:L2,getHtmlContainer:Um,getIcon:Uo,getIconContent:KO,getImage:N2,getInputLabel:ZO,getLoader:Bo,getPopup:rt,getProgressSteps:jm,getTimerLeft:Gk,getTimerProgressBar:ed,getTitle:M2,getValidationMessage:Wu,increaseTimer:Kk,isDeprecatedParameter:hw,isLoading:JO,isTimerRunning:Zk,isUpdatableParameter:fw,isValidParameter:dw,isVisible:qC,mixin:Yk,off:nR,on:eR,once:tR,resumeTimer:yw,showLoading:Mo,stopTimer:vw,toggleTimer:Xk});class aR{constructor(t,a){this.callback=t,this.remaining=a,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(t){const a=this.running;return a&&this.stop(),this.remaining+=t,a&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const ww=["swal-title","swal-html","swal-footer"],iR=e=>{const t=typeof e.template=="string"?document.querySelector(e.template):e.template;if(!t)return{};const a=t.content;return hR(a),Object.assign(oR(a),sR(a),lR(a),cR(a),uR(a),dR(a),fR(a,ww))},oR=e=>{const t={};return Array.from(e.querySelectorAll("swal-param")).forEach(o=>{Di(o,["name","value"]);const l=o.getAttribute("name"),c=o.getAttribute("value");!l||!c||(typeof Co[l]=="boolean"?t[l]=c!=="false":typeof Co[l]=="object"?t[l]=JSON.parse(c):t[l]=c)}),t},sR=e=>{const t={};return Array.from(e.querySelectorAll("swal-function-param")).forEach(o=>{const l=o.getAttribute("name"),c=o.getAttribute("value");!l||!c||(t[l]=new Function(`return ${c}`)())}),t},lR=e=>{const t={};return Array.from(e.querySelectorAll("swal-button")).forEach(o=>{Di(o,["type","color","aria-label"]);const l=o.getAttribute("type");!l||!["confirm","cancel","deny"].includes(l)||(t[`${l}ButtonText`]=o.innerHTML,t[`show${Lm(l)}Button`]=!0,o.hasAttribute("color")&&(t[`${l}ButtonColor`]=o.getAttribute("color")),o.hasAttribute("aria-label")&&(t[`${l}ButtonAriaLabel`]=o.getAttribute("aria-label")))}),t},cR=e=>{const t={},a=e.querySelector("swal-image");return a&&(Di(a,["src","width","height","alt"]),a.hasAttribute("src")&&(t.imageUrl=a.getAttribute("src")||void 0),a.hasAttribute("width")&&(t.imageWidth=a.getAttribute("width")||void 0),a.hasAttribute("height")&&(t.imageHeight=a.getAttribute("height")||void 0),a.hasAttribute("alt")&&(t.imageAlt=a.getAttribute("alt")||void 0)),t},uR=e=>{const t={},a=e.querySelector("swal-icon");return a&&(Di(a,["type","color"]),a.hasAttribute("type")&&(t.icon=a.getAttribute("type")),a.hasAttribute("color")&&(t.iconColor=a.getAttribute("color")),t.iconHtml=a.innerHTML),t},dR=e=>{const t={},a=e.querySelector("swal-input");a&&(Di(a,["type","label","placeholder","value"]),t.input=a.getAttribute("type")||"text",a.hasAttribute("label")&&(t.inputLabel=a.getAttribute("label")),a.hasAttribute("placeholder")&&(t.inputPlaceholder=a.getAttribute("placeholder")),a.hasAttribute("value")&&(t.inputValue=a.getAttribute("value")));const o=Array.from(e.querySelectorAll("swal-input-option"));return o.length&&(t.inputOptions={},o.forEach(l=>{Di(l,["value"]);const c=l.getAttribute("value");if(!c)return;const f=l.innerHTML;t.inputOptions[c]=f})),t},fR=(e,t)=>{const a={};for(const o in t){const l=t[o],c=e.querySelector(l);c&&(Di(c,[]),a[l.replace(/^swal-/,"")]=c.innerHTML.trim())}return a},hR=e=>{const t=ww.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach(a=>{const o=a.tagName.toLowerCase();t.includes(o)||dn(`Unrecognized element <${o}>`)})},Di=(e,t)=>{Array.from(e.attributes).forEach(a=>{t.indexOf(a.name)===-1&&dn([`Unrecognized attribute "${a.name}" on <${e.tagName.toLowerCase()}>.`,`${t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element."}`])})},xw=10,mR=e=>{const t=fn(),a=rt();typeof e.willOpen=="function"&&e.willOpen(a),Me.eventEmitter.emit("willOpen",a);const l=window.getComputedStyle(document.body).overflowY;bR(t,a,e),setTimeout(()=>{pR(t,a)},xw),Hm()&&(gR(t,e.scrollbarPadding,l),JC()),!td()&&!Me.previousActiveElement&&(Me.previousActiveElement=document.activeElement),typeof e.didOpen=="function"&&setTimeout(()=>e.didOpen(a)),Me.eventEmitter.emit("didOpen",a),er(t,G["no-transition"])},Mu=e=>{const t=rt();if(e.target!==t)return;const a=fn();t.removeEventListener("animationend",Mu),t.removeEventListener("transitionend",Mu),a.style.overflowY="auto"},pR=(e,t)=>{U2(t)?(e.style.overflowY="hidden",t.addEventListener("animationend",Mu),t.addEventListener("transitionend",Mu)):e.style.overflowY="auto"},gR=(e,t,a)=>{WC(),t&&a!=="hidden"&&ok(a),setTimeout(()=>{e.scrollTop=0})},bR=(e,t,a)=>{it(e,a.showClass.backdrop),a.animation?(t.style.setProperty("opacity","0","important"),Xt(t,"grid"),setTimeout(()=>{it(t,a.showClass.popup),t.style.removeProperty("opacity")},xw)):Xt(t,"grid"),it([document.documentElement,document.body],G.shown),a.heightAuto&&a.backdrop&&!a.toast&&it([document.documentElement,document.body],G["height-auto"])};var yy={email:(e,t)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function vR(e){e.inputValidator||(e.input==="email"&&(e.inputValidator=yy.email),e.input==="url"&&(e.inputValidator=yy.url))}function yR(e){(!e.target||typeof e.target=="string"&&!document.querySelector(e.target)||typeof e.target!="string"&&!e.target.appendChild)&&(dn('Target parameter is not valid, defaulting to "body"'),e.target="body")}function wR(e){vR(e),e.showLoaderOnConfirm&&!e.preConfirm&&dn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),yR(e),typeof e.title=="string"&&(e.title=e.title.split(`
`).join("<br />")),uC(e)}let Ar;var Vc=new WeakMap;class Ut{constructor(...t){if(HO(this,Vc,void 0),typeof window>"u")return;Ar=this;const a=Object.freeze(this.constructor.argsToParams(t));this.params=a,this.isAwaitingPromise=!1,qO(Vc,this,this._main(Ar.params))}_main(t,a={}){if(mw(Object.assign({},a,t)),Me.currentInstance){const c=Do.swalPromiseResolve.get(Me.currentInstance),{isAwaitingPromise:f}=Me.currentInstance;Me.currentInstance._destroy(),f||c({isDismissed:!0}),Hm()&&K2()}Me.currentInstance=Ar;const o=ER(t,a);wR(o),Object.freeze(o),Me.timeout&&(Me.timeout.stop(),delete Me.timeout),clearTimeout(Me.restoreFocusTimeout);const l=SR(Ar);return F2(Ar,o),vt.innerParams.set(Ar,o),xR(Ar,l,o)}then(t){return cy(Vc,this).then(t)}finally(t){return cy(Vc,this).finally(t)}}const xR=(e,t,a)=>new Promise((o,l)=>{const c=f=>{e.close({isDismissed:!0,dismiss:f})};Do.swalPromiseResolve.set(e,o),Do.swalPromiseReject.set(e,l),t.confirmButton.onclick=()=>{Sk(e)},t.denyButton.onclick=()=>{_k(e)},t.cancelButton.onclick=()=>{Tk(e,c)},t.closeButton.onclick=()=>{c(Io.close)},Uk(a,t,c),FC(Me,a,c),mk(e,a),mR(a),_R(Me,a,c),TR(t,a),setTimeout(()=>{t.container.scrollTop=0})}),ER=(e,t)=>{const a=iR(e),o=Object.assign({},Co,t,a,e);return o.showClass=Object.assign({},Co.showClass,o.showClass),o.hideClass=Object.assign({},Co.hideClass,o.hideClass),o.animation===!1&&(o.showClass={backdrop:"swal2-noanimation"},o.hideClass={}),o},SR=e=>{const t={popup:rt(),container:fn(),actions:Tl(),confirmButton:Dr(),denyButton:Li(),cancelButton:jo(),loader:Bo(),closeButton:Bm(),validationMessage:Wu(),progressSteps:jm()};return vt.domCache.set(e,t),t},_R=(e,t,a)=>{const o=ed();rn(o),t.timer&&(e.timeout=new aR(()=>{a("timer"),delete e.timeout},t.timer),t.timerProgressBar&&(Xt(o),Ln(o,t,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&Vm(t.timer)})))},TR=(e,t)=>{if(!t.toast){if(!Ju(t.allowEnterKey)){D2("allowEnterKey"),CR();return}AR(e)||OR(e,t)||tm(-1,1)}},AR=e=>{const t=Array.from(e.popup.querySelectorAll("[autofocus]"));for(const a of t)if(a instanceof HTMLElement&&Sn(a))return a.focus(),!0;return!1},OR=(e,t)=>t.focusDeny&&Sn(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&Sn(e.cancelButton)?(e.cancelButton.focus(),!0):t.focusConfirm&&Sn(e.confirmButton)?(e.confirmButton.focus(),!0):!1,CR=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const e=new Date,t=localStorage.getItem("swal-initiation");t?(e.getTime()-Date.parse(t))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const a=document.createElement("audio");a.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",a.loop=!0,document.body.appendChild(a),setTimeout(()=>{a.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${e}`)}Ut.prototype.disableButtons=ow;Ut.prototype.enableButtons=iw;Ut.prototype.getInput=nw;Ut.prototype.disableInput=lw;Ut.prototype.enableInput=sw;Ut.prototype.hideLoading=Ru;Ut.prototype.disableLoading=Ru;Ut.prototype.showValidationMessage=cw;Ut.prototype.resetValidationMessage=uw;Ut.prototype.close=Ia;Ut.prototype.closePopup=Ia;Ut.prototype.closeModal=Ia;Ut.prototype.closeToast=Ia;Ut.prototype.rejectPromise=J2;Ut.prototype.update=pw;Ut.prototype._destroy=gw;Object.assign(Ut,rR);Object.keys(zk).forEach(e=>{Ut[e]=function(...t){return Ar&&Ar[e]?Ar[e](...t):null}});Ut.DismissReason=Io;Ut.version="11.22.2";const Qn=Ut;Qn.default=Qn;typeof document<"u"&&function(e,t){var a=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(a),a.styleSheet)a.styleSheet.disabled||(a.styleSheet.cssText=t);else try{a.innerHTML=t}catch{a.innerText=t}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const kR=()=>{const{login:e,googleLogin:t}=Za(),a=Uu(),{register:o,handleSubmit:l,formState:{errors:c}}=Qu(),f=m=>{const p=m.email,b=m.password;e(p,b).then(()=>{Qn.fire({title:"Success!",text:"Login Successful",icon:"success",confirmButtonText:"Ok",confirmButtonColor:"#009689"}).then(()=>{a(location?.state?location?.state:"/")})}).catch(x=>{console.error(x),Qn.fire({title:"Error!",text:`${x.message}`,icon:"error",confirmButtonText:"Try again",confirmButtonColor:"#009689"})})},h=()=>{t().then(m=>{const p=m?.user?.displayName,b=m?.user?.email,x=m?.user?.photoURL,y={name:p,email:b,photoURL:x};ct.post("https://event-management-server-blond.vercel.app/add-user",y).then(()=>{Qn.fire({title:"Success!",text:"Login Successful",icon:"success",confirmButtonText:"Ok",confirmButtonColor:"#009689"}).then(()=>{a(location?.state?location?.state:"/")})})})};return w.jsx("div",{className:"min-h-screen flex items-center justify-center",children:w.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-md w-full max-w-md",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-center text-teal-600 mb-6",children:"Login to Planzone"}),w.jsxs("form",{onSubmit:l(f),className:"space-y-5",children:[w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium mb-1",children:"Email"}),w.jsx("input",{type:"email",...o("email",{required:"Email is required"}),placeholder:"you@example.com",className:`w-full px-4 py-2 border rounded-md focus:outline-1 focus:outline-teal-700 ${c.email?"border-red-500":"border-gray-300"}`}),c.email&&w.jsx("p",{className:"text-red-500 text-xs mt-1",children:c.email.message})]}),w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium mb-1",children:"Password"}),w.jsx("input",{type:"password",...o("password",{required:"Password is required"}),placeholder:"Enter your password",className:`w-full px-4 py-2 border rounded-md focus:outline-1 focus:outline-teal-700 ${c.password?"border-red-500":"border-gray-300"}`}),c.password&&w.jsx("p",{className:"text-red-500 text-xs mt-1",children:c.password.message})]}),w.jsx("button",{type:"submit",className:"w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md font-medium transition cursor-pointer",children:"Login"})]}),w.jsx("div",{className:"my-4 text-center text-sm text-gray-400",children:"or"}),w.jsxs("button",{onClick:h,className:"w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded-md hover:shadow-md transition cursor-pointer",children:[w.jsx(BO,{size:20})," Continue with Google"]}),w.jsxs("p",{className:"text-sm text-center mt-4 text-gray-500",children:["Don’t have an account? ",w.jsx(Ha,{to:"/sign-up",className:"text-teal-600 hover:underline cursor-pointer",children:"Sign Up"})]})]})})},RR=()=>{const{createUser:e}=Za(),t=Uu(),{register:a,handleSubmit:o,reset:l,formState:{errors:c}}=Qu(),f=h=>{const m=h.email,p=h.name,b=h.password,x=h.photo,y={name:p,email:m,photoURL:x};e(m,b).then(()=>{ct.post("https://event-management-server-blond.vercel.app/add-user",y).then(R=>{R.data.insertedId&&Qn.fire({title:"Success!",text:"Registration Successful",icon:"success",confirmButtonText:"Ok",confirmButtonColor:"#009689"}).then(()=>{t("/")})})}).catch(R=>{console.error(R),Qn.fire({title:"Error!",text:`${R.message}`,icon:"error",confirmButtonText:"Try again",confirmButtonColor:"#009689"})}),l()};return w.jsx("div",{className:"min-h-screen flex items-center justify-center px-4",children:w.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-md w-full max-w-md",children:[w.jsx("h2",{className:"text-2xl font-bold text-center text-teal-600 mb-6",children:"Create Your Planzone Account"}),w.jsxs("form",{onSubmit:o(f),className:"space-y-5",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium mb-1",children:"Name"}),w.jsx("input",{type:"text",...a("name",{required:"Name is required"}),placeholder:"Your full name",className:`w-full px-4 py-2 focus:outline-1 focus:outline-teal-700 border rounded-md ${c.name?"border-red-500":"border-gray-300"}`}),c.name&&w.jsx("p",{className:"text-red-500 text-xs mt-1",children:c.name.message})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium mb-1",children:"Email"}),w.jsx("input",{type:"email",...a("email",{required:"Email is required"}),placeholder:"you@example.com",className:`w-full px-4 py-2 border rounded-md focus:outline-1 focus:outline-teal-700 ${c.email?"border-red-500":"border-gray-300"}`}),c.email&&w.jsx("p",{className:"text-red-500 text-xs mt-1",children:c.email.message})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium mb-1",children:"Password"}),w.jsx("input",{type:"password",...a("password",{required:"Password is required",minLength:{value:6,message:"Password must be at least 6 characters"}}),placeholder:"Create a password",className:`w-full px-4 py-2 border rounded-md focus:outline-1 focus:outline-teal-700 ${c.password?"border-red-500":"border-gray-300"}`}),c.password&&w.jsx("p",{className:"text-red-500 text-xs mt-1",children:c.password.message})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium mb-1",children:"Photo URL"}),w.jsx("input",{type:"url",...a("photo",{required:"Photo URL is required"}),placeholder:"https://example.com/your-photo.jpg",className:`w-full px-4 py-2 border focus:outline-1 focus:outline-teal-700 rounded-md ${c.photo?"border-red-500":"border-gray-300"}`}),c.photo&&w.jsx("p",{className:"text-red-500 text-xs mt-1",children:c.photo.message})]}),w.jsx("button",{type:"submit",className:"w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md font-medium transition cursor-pointer",children:"Register"})]}),w.jsxs("p",{className:"text-md text-center mt-4 text-gray-500 font-semibold",children:["Already have an account? ",w.jsx(Ha,{to:"/login",className:"text-teal-600 hover:underline cursor-pointer",children:"Login"})]})]})})};function $t(e,t){t===void 0&&(t={});var a=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",a==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}$t(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Or=function(){return Or=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},Or.apply(this,arguments)};function Nu(e){return Nu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nu(e)}var DR=/^\s+/,MR=/\s+$/;function Oe(e,t){if(t=t||{},(e=e||"")instanceof Oe)return e;if(!(this instanceof Oe))return new Oe(e,t);var a=function(o){var l={r:0,g:0,b:0},c=1,f=null,h=null,m=null,p=!1,b=!1;typeof o=="string"&&(o=function(S){S=S.replace(DR,"").replace(MR,"").toLowerCase();var A,N=!1;if(rm[S])S=rm[S],N=!0;else if(S=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(A=ur.rgb.exec(S))?{r:A[1],g:A[2],b:A[3]}:(A=ur.rgba.exec(S))?{r:A[1],g:A[2],b:A[3],a:A[4]}:(A=ur.hsl.exec(S))?{h:A[1],s:A[2],l:A[3]}:(A=ur.hsla.exec(S))?{h:A[1],s:A[2],l:A[3],a:A[4]}:(A=ur.hsv.exec(S))?{h:A[1],s:A[2],v:A[3]}:(A=ur.hsva.exec(S))?{h:A[1],s:A[2],v:A[3],a:A[4]}:(A=ur.hex8.exec(S))?{r:Dn(A[1]),g:Dn(A[2]),b:Dn(A[3]),a:Ty(A[4]),format:N?"name":"hex8"}:(A=ur.hex6.exec(S))?{r:Dn(A[1]),g:Dn(A[2]),b:Dn(A[3]),format:N?"name":"hex"}:(A=ur.hex4.exec(S))?{r:Dn(A[1]+""+A[1]),g:Dn(A[2]+""+A[2]),b:Dn(A[3]+""+A[3]),a:Ty(A[4]+""+A[4]),format:N?"name":"hex8"}:(A=ur.hex3.exec(S))?{r:Dn(A[1]+""+A[1]),g:Dn(A[2]+""+A[2]),b:Dn(A[3]+""+A[3]),format:N?"name":"hex"}:!1}(o)),Nu(o)=="object"&&(Xr(o.r)&&Xr(o.g)&&Xr(o.b)?(x=o.r,y=o.g,R=o.b,l={r:255*St(x,255),g:255*St(y,255),b:255*St(R,255)},p=!0,b=String(o.r).substr(-1)==="%"?"prgb":"rgb"):Xr(o.h)&&Xr(o.s)&&Xr(o.v)?(f=Ws(o.s),h=Ws(o.v),l=function(S,A,N){S=6*St(S,360),A=St(A,100),N=St(N,100);var z=Math.floor(S),Q=S-z,K=N*(1-A),ce=N*(1-Q*A),J=N*(1-(1-Q)*A),D=z%6,me=[N,ce,K,K,J,N][D],_e=[J,N,N,ce,K,K][D],ue=[K,K,J,N,N,ce][D];return{r:255*me,g:255*_e,b:255*ue}}(o.h,f,h),p=!0,b="hsv"):Xr(o.h)&&Xr(o.s)&&Xr(o.l)&&(f=Ws(o.s),m=Ws(o.l),l=function(S,A,N){var z,Q,K;function ce(me,_e,ue){return ue<0&&(ue+=1),ue>1&&(ue-=1),ue<1/6?me+6*(_e-me)*ue:ue<.5?_e:ue<2/3?me+(_e-me)*(2/3-ue)*6:me}if(S=St(S,360),A=St(A,100),N=St(N,100),A===0)z=Q=K=N;else{var J=N<.5?N*(1+A):N+A-N*A,D=2*N-J;z=ce(D,J,S+1/3),Q=ce(D,J,S),K=ce(D,J,S-1/3)}return{r:255*z,g:255*Q,b:255*K}}(o.h,f,m),p=!0,b="hsl"),o.hasOwnProperty("a")&&(c=o.a));var x,y,R;return c=Ew(c),{ok:p,format:o.format||b,r:Math.min(255,Math.max(l.r,0)),g:Math.min(255,Math.max(l.g,0)),b:Math.min(255,Math.max(l.b,0)),a:c}}(e);this._originalInput=e,this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||a.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=a.ok}function wy(e,t,a){e=St(e,255),t=St(t,255),a=St(a,255);var o,l,c=Math.max(e,t,a),f=Math.min(e,t,a),h=(c+f)/2;if(c==f)o=l=0;else{var m=c-f;switch(l=h>.5?m/(2-c-f):m/(c+f),c){case e:o=(t-a)/m+(t<a?6:0);break;case t:o=(a-e)/m+2;break;case a:o=(e-t)/m+4}o/=6}return{h:o,s:l,l:h}}function xy(e,t,a){e=St(e,255),t=St(t,255),a=St(a,255);var o,l,c=Math.max(e,t,a),f=Math.min(e,t,a),h=c,m=c-f;if(l=c===0?0:m/c,c==f)o=0;else{switch(c){case e:o=(t-a)/m+(t<a?6:0);break;case t:o=(a-e)/m+2;break;case a:o=(e-t)/m+4}o/=6}return{h:o,s:l,v:h}}function Ey(e,t,a,o){var l=[mr(Math.round(e).toString(16)),mr(Math.round(t).toString(16)),mr(Math.round(a).toString(16))];return o&&l[0].charAt(0)==l[0].charAt(1)&&l[1].charAt(0)==l[1].charAt(1)&&l[2].charAt(0)==l[2].charAt(1)?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0):l.join("")}function Sy(e,t,a,o){return[mr(Sw(o)),mr(Math.round(e).toString(16)),mr(Math.round(t).toString(16)),mr(Math.round(a).toString(16))].join("")}function NR(e,t){t=t===0?0:t||10;var a=Oe(e).toHsl();return a.s-=t/100,a.s=rd(a.s),Oe(a)}function LR(e,t){t=t===0?0:t||10;var a=Oe(e).toHsl();return a.s+=t/100,a.s=rd(a.s),Oe(a)}function PR(e){return Oe(e).desaturate(100)}function zR(e,t){t=t===0?0:t||10;var a=Oe(e).toHsl();return a.l+=t/100,a.l=rd(a.l),Oe(a)}function UR(e,t){t=t===0?0:t||10;var a=Oe(e).toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(-t/100*255))),a.g=Math.max(0,Math.min(255,a.g-Math.round(-t/100*255))),a.b=Math.max(0,Math.min(255,a.b-Math.round(-t/100*255))),Oe(a)}function jR(e,t){t=t===0?0:t||10;var a=Oe(e).toHsl();return a.l-=t/100,a.l=rd(a.l),Oe(a)}function BR(e,t){var a=Oe(e).toHsl(),o=(a.h+t)%360;return a.h=o<0?360+o:o,Oe(a)}function IR(e){var t=Oe(e).toHsl();return t.h=(t.h+180)%360,Oe(t)}function _y(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var a=Oe(e).toHsl(),o=[Oe(e)],l=360/t,c=1;c<t;c++)o.push(Oe({h:(a.h+c*l)%360,s:a.s,l:a.l}));return o}function HR(e){var t=Oe(e).toHsl(),a=t.h;return[Oe(e),Oe({h:(a+72)%360,s:t.s,l:t.l}),Oe({h:(a+216)%360,s:t.s,l:t.l})]}function qR(e,t,a){t=t||6,a=a||30;var o=Oe(e).toHsl(),l=360/a,c=[Oe(e)];for(o.h=(o.h-(l*t>>1)+720)%360;--t;)o.h=(o.h+l)%360,c.push(Oe(o));return c}function VR(e,t){t=t||6;for(var a=Oe(e).toHsv(),o=a.h,l=a.s,c=a.v,f=[],h=1/t;t--;)f.push(Oe({h:o,s:l,v:c})),c=(c+h)%1;return f}Oe.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,a,o=this.toRgb();return e=o.r/255,t=o.g/255,a=o.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))},setAlpha:function(e){return this._a=Ew(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=xy(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=xy(this._r,this._g,this._b),t=Math.round(360*e.h),a=Math.round(100*e.s),o=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+a+"%, "+o+"%)":"hsva("+t+", "+a+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var e=wy(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=wy(this._r,this._g,this._b),t=Math.round(360*e.h),a=Math.round(100*e.s),o=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+a+"%, "+o+"%)":"hsla("+t+", "+a+"%, "+o+"%, "+this._roundA+")"},toHex:function(e){return Ey(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(t,a,o,l,c){var f=[mr(Math.round(t).toString(16)),mr(Math.round(a).toString(16)),mr(Math.round(o).toString(16)),mr(Sw(l))];return c&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*St(this._r,255))+"%",g:Math.round(100*St(this._g,255))+"%",b:Math.round(100*St(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*St(this._r,255))+"%, "+Math.round(100*St(this._g,255))+"%, "+Math.round(100*St(this._b,255))+"%)":"rgba("+Math.round(100*St(this._r,255))+"%, "+Math.round(100*St(this._g,255))+"%, "+Math.round(100*St(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&($R[Ey(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+Sy(this._r,this._g,this._b,this._a),a=t,o=this._gradientType?"GradientType = 1, ":"";if(e){var l=Oe(e);a="#"+Sy(l._r,l._g,l._b,l._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+t+",endColorstr="+a+")"},toString:function(e){var t=!!e;e=e||this._format;var a=!1,o=this._a<1&&this._a>=0;return t||!o||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(a=this.toRgbString()),e==="prgb"&&(a=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(a=this.toHexString()),e==="hex3"&&(a=this.toHexString(!0)),e==="hex4"&&(a=this.toHex8String(!0)),e==="hex8"&&(a=this.toHex8String()),e==="name"&&(a=this.toName()),e==="hsl"&&(a=this.toHslString()),e==="hsv"&&(a=this.toHsvString()),a||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return Oe(this.toString())},_applyModification:function(e,t){var a=e.apply(null,[this].concat([].slice.call(t)));return this._r=a._r,this._g=a._g,this._b=a._b,this.setAlpha(a._a),this},lighten:function(){return this._applyModification(zR,arguments)},brighten:function(){return this._applyModification(UR,arguments)},darken:function(){return this._applyModification(jR,arguments)},desaturate:function(){return this._applyModification(NR,arguments)},saturate:function(){return this._applyModification(LR,arguments)},greyscale:function(){return this._applyModification(PR,arguments)},spin:function(){return this._applyModification(BR,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(qR,arguments)},complement:function(){return this._applyCombination(IR,arguments)},monochromatic:function(){return this._applyCombination(VR,arguments)},splitcomplement:function(){return this._applyCombination(HR,arguments)},triad:function(){return this._applyCombination(_y,[3])},tetrad:function(){return this._applyCombination(_y,[4])}},Oe.fromRatio=function(e,t){if(Nu(e)=="object"){var a={};for(var o in e)e.hasOwnProperty(o)&&(a[o]=o==="a"?e[o]:Ws(e[o]));e=a}return Oe(e,t)},Oe.equals=function(e,t){return!(!e||!t)&&Oe(e).toRgbString()==Oe(t).toRgbString()},Oe.random=function(){return Oe.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},Oe.mix=function(e,t,a){a=a===0?0:a||50;var o=Oe(e).toRgb(),l=Oe(t).toRgb(),c=a/100;return Oe({r:(l.r-o.r)*c+o.r,g:(l.g-o.g)*c+o.g,b:(l.b-o.b)*c+o.b,a:(l.a-o.a)*c+o.a})},Oe.readability=function(e,t){var a=Oe(e),o=Oe(t);return(Math.max(a.getLuminance(),o.getLuminance())+.05)/(Math.min(a.getLuminance(),o.getLuminance())+.05)},Oe.isReadable=function(e,t,a){var o,l,c=Oe.readability(e,t);switch(l=!1,(o=function(f){var h,m;return h=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),m=(f.size||"small").toLowerCase(),h!=="AA"&&h!=="AAA"&&(h="AA"),m!=="small"&&m!=="large"&&(m="small"),{level:h,size:m}}(a)).level+o.size){case"AAsmall":case"AAAlarge":l=c>=4.5;break;case"AAlarge":l=c>=3;break;case"AAAsmall":l=c>=7}return l},Oe.mostReadable=function(e,t,a){var o,l,c,f,h=null,m=0;l=(a=a||{}).includeFallbackColors,c=a.level,f=a.size;for(var p=0;p<t.length;p++)(o=Oe.readability(e,t[p]))>m&&(m=o,h=Oe(t[p]));return Oe.isReadable(e,h,{level:c,size:f})||!l?h:(a.includeFallbackColors=!1,Oe.mostReadable(e,["#fff","#000"],a))};var rm=Oe.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},$R=Oe.hexNames=function(e){var t={};for(var a in e)e.hasOwnProperty(a)&&(t[e[a]]=a);return t}(rm);function Ew(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function St(e,t){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(e)&&(e="100%");var a=function(o){return typeof o=="string"&&o.indexOf("%")!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),a&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function rd(e){return Math.min(1,Math.max(0,e))}function Dn(e){return parseInt(e,16)}function mr(e){return e.length==1?"0"+e:""+e}function Ws(e){return e<=1&&(e=100*e+"%"),e}function Sw(e){return Math.round(255*parseFloat(e)).toString(16)}function Ty(e){return Dn(e)/255}var Ma,$c,Fc,ur=($c="[\\s|\\(]+("+(Ma="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ma+")[,|\\s]+("+Ma+")\\s*\\)?",Fc="[\\s|\\(]+("+Ma+")[,|\\s]+("+Ma+")[,|\\s]+("+Ma+")[,|\\s]+("+Ma+")\\s*\\)?",{CSS_UNIT:new RegExp(Ma),rgb:new RegExp("rgb"+$c),rgba:new RegExp("rgba"+Fc),hsl:new RegExp("hsl"+$c),hsla:new RegExp("hsla"+Fc),hsv:new RegExp("hsv"+$c),hsva:new RegExp("hsva"+Fc),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Xr(e){return!!ur.CSS_UNIT.exec(e)}var FR=function(e,t){var a=(typeof e=="string"?parseInt(e):e)||0;if(a>=-5&&a<=5){var o=a,l=parseFloat(t),c=l+o*(l/5)*-1;return(c==0||c<=Number.EPSILON)&&(c=.1),{animationPeriod:c+"s"}}return{animationPeriod:t}},YR=function(e,t){var a=e||{},o="";switch(t){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var l={};if(a.fontSize){var c=a.fontSize;l=function(f,h){var m={};for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&h.indexOf(p)<0&&(m[p]=f[p]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var b=0;for(p=Object.getOwnPropertySymbols(f);b<p.length;b++)h.indexOf(p[b])<0&&Object.prototype.propertyIsEnumerable.call(f,p[b])&&(m[p[b]]=f[p[b]])}return m}(a,["fontSize"]),o=c}return{fontSize:o,styles:l}},GR={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},XR=function(e){var t=e.className,a=e.text,o=e.textColor,l=e.staticText,c=e.style;return a?gt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:Or(Or(Or({},l&&GR),o&&{color:o,mixBlendMode:"unset"}),c&&c)},typeof a=="string"&&a.length?a:"loading"):null},_w="rgb(50, 205, 50)";function KR(e,t){if(t===void 0&&(t=0),e.length===0)throw new Error("Input array cannot be empty!");var a=[];return function o(l,c){return c===void 0&&(c=0),a.push.apply(a,l),a.length<c&&o(a,c),a.slice(0,c)}(e,t)}$t(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);Oe(_w).toRgb();Array.from({length:4},function(e,t){return"--atom-phase".concat(t+1,"-rgb")});$t(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--commet-phase".concat(t+1,"-color")});$t(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")});function Nh(e){return e&&e.Math===Math&&e}$t(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Nh(typeof window=="object"&&window)||Nh(typeof self=="object"&&self)||Nh(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")});$t(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")});$t(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")});$t(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]});$t(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);var wo=Array.from({length:4},function(e,t){return"--four-square-phase".concat(t+1,"-color")}),ZR=function(e){var t,a=YR(e?.style,e?.size),o=a.styles,l=a.fontSize,c=e?.easing,f=FR(e?.speedPlus,"1s").animationPeriod,h=function(m){var p={};if(m instanceof Array){for(var b=KR(m,wo.length),x=0;x<b.length&&!(x>=4);x++)p[wo[x]]=b[x];return p}try{if(typeof m!="string")throw new Error("Color String expected");for(var y=0;y<wo.length;y++)p[wo[y]]=m}catch(R){for(R instanceof Error?console.warn("[".concat(R.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m)," received in <FourSquare /> indicator cannot be processed. Using default instead!")),y=0;y<wo.length;y++)p[wo[y]]=_w}return p}((t=e?.color)!==null&&t!==void 0?t:"");return gt.createElement("span",{className:"rli-d-i-b foursquare-rli-bounding-box",style:Or(Or(Or(Or(Or({},l&&{fontSize:l}),f&&{"--rli-animation-duration":f}),c&&{"--rli-animation-function":c}),h),o),role:"status","aria-live":"polite","aria-label":"Loading"},gt.createElement("span",{className:"rli-d-i-b foursquare-indicator"},gt.createElement("span",{className:"squares-container"},gt.createElement("span",{className:"square square1"}),gt.createElement("span",{className:"square square2"}),gt.createElement("span",{className:"square square3"}),gt.createElement("span",{className:"square square4"}))),gt.createElement(XR,{text:e?.text,textColor:e?.textColor,staticText:!0}))};$t(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--mosaic-phase".concat(t+1,"-color")});$t(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--riple-phase".concat(t+1,"-color")});$t(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")});$t(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")});$t(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-bob-phase".concat(t+1,"-color")});$t(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")});$t(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--shape-phase".concat(t+1,"-color")});$t(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--trophySpin-phase".concat(t+1,"-color")});$t(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--slab-phase".concat(t+1,"-color")});$t(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--life-line-phase".concat(t+1,"-color")});const QR=()=>w.jsx("div",{className:"min-h-screen flex items-center justify-center",children:w.jsx(ZR,{color:"#31cca1",size:"medium",text:"",textColor:""})}),Yc=({children:e})=>{const{user:t,loading:a}=Za(),o=na();return a?w.jsx(QR,{}):t?e:w.jsx(uS,{state:o?.pathname,to:"/login"})},JR=()=>{const{user:e}=Za(),{register:t,handleSubmit:a,reset:o,formState:{errors:l}}=Qu(),c=async f=>{const h={...f,datetime:new Date(f.datetime),attendeeCount:0,email:e?.email};try{(await ct.post("https://event-management-server-blond.vercel.app/add-event",h)).data.insertedId&&(Qn.fire({title:"Success!",text:"Event added Successfully",icon:"success",confirmButtonText:"Ok",confirmButtonColor:"#009689"}),o())}catch(m){console.error(m)}};return w.jsxs("div",{className:"max-w-4xl mx-auto my-10 px-8 py-12 shadow-md bg-teal-50",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-center",children:"Add New Event"}),w.jsxs("form",{onSubmit:a(c),className:"space-y-4",children:[w.jsxs("div",{className:"grid gap-4 grid-cols-1 md:grid-cols-2",children:[w.jsxs("div",{children:[w.jsx("label",{className:"font-medium mb-1",children:"Event Title"}),w.jsx("input",{type:"text",...t("title",{required:!0}),className:"w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2"}),l.title&&w.jsx("span",{className:"text-red-500",children:"Event Title is required"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"font-medium mb-1",children:"Your Name"}),w.jsx("input",{type:"text",...t("name",{required:!0}),className:"w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2"}),l.name&&w.jsx("span",{className:"text-red-500",children:"Name is required"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"font-medium mb-1",children:"Date and Time"}),w.jsx("input",{type:"datetime-local",...t("datetime",{required:!0}),className:"w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2"}),l.datetime&&w.jsx("span",{className:"text-red-500",children:"Date & Time is required"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"font-medium mb-1",children:"Location"}),w.jsx("input",{type:"text",...t("location",{required:!0}),className:"w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2"}),l.location&&w.jsx("span",{className:"text-red-500",children:"Location is required"})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"font-medium mb-1",children:"Description"}),w.jsx("textarea",{...t("description",{required:!0}),className:"w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2",rows:4}),l.description&&w.jsx("span",{className:"text-red-500",children:"Description is required"})]}),w.jsx("button",{type:"submit",className:"w-full bg-teal-600 text-white font-semibold py-2 rounded hover:bg-teal-700 transition cursor-pointer",children:"Add Event"})]})]})};var au={exports:{}},WR=au.exports,Ay;function e8(){return Ay||(Ay=1,function(e,t){(function(a,o){e.exports=o()})(WR,function(){var a=1e3,o=6e4,l=36e5,c="millisecond",f="second",h="minute",m="hour",p="day",b="week",x="month",y="quarter",R="year",S="date",A="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(ie){var te=["th","st","nd","rd"],_=ie%100;return"["+ie+(te[(_-20)%10]||te[_]||te[0])+"]"}},K=function(ie,te,_){var H=String(ie);return!H||H.length>=te?ie:""+Array(te+1-H.length).join(_)+ie},ce={s:K,z:function(ie){var te=-ie.utcOffset(),_=Math.abs(te),H=Math.floor(_/60),F=_%60;return(te<=0?"+":"-")+K(H,2,"0")+":"+K(F,2,"0")},m:function ie(te,_){if(te.date()<_.date())return-ie(_,te);var H=12*(_.year()-te.year())+(_.month()-te.month()),F=te.clone().add(H,x),se=_-F<0,E=te.clone().add(H+(se?-1:1),x);return+(-(H+(_-F)/(se?F-E:E-F))||0)},a:function(ie){return ie<0?Math.ceil(ie)||0:Math.floor(ie)},p:function(ie){return{M:x,y:R,w:b,d:p,D:S,h:m,m:h,s:f,ms:c,Q:y}[ie]||String(ie||"").toLowerCase().replace(/s$/,"")},u:function(ie){return ie===void 0}},J="en",D={};D[J]=Q;var me="$isDayjsObject",_e=function(ie){return ie instanceof we||!(!ie||!ie[me])},ue=function ie(te,_,H){var F;if(!te)return J;if(typeof te=="string"){var se=te.toLowerCase();D[se]&&(F=se),_&&(D[se]=_,F=se);var E=te.split("-");if(!F&&E.length>1)return ie(E[0])}else{var V=te.name;D[V]=te,F=V}return!H&&F&&(J=F),F||!H&&J},Re=function(ie,te){if(_e(ie))return ie.clone();var _=typeof te=="object"?te:{};return _.date=ie,_.args=arguments,new we(_)},Ee=ce;Ee.l=ue,Ee.i=_e,Ee.w=function(ie,te){return Re(ie,{locale:te.$L,utc:te.$u,x:te.$x,$offset:te.$offset})};var we=function(){function ie(_){this.$L=ue(_.locale,null,!0),this.parse(_),this.$x=this.$x||_.x||{},this[me]=!0}var te=ie.prototype;return te.parse=function(_){this.$d=function(H){var F=H.date,se=H.utc;if(F===null)return new Date(NaN);if(Ee.u(F))return new Date;if(F instanceof Date)return new Date(F);if(typeof F=="string"&&!/Z$/i.test(F)){var E=F.match(N);if(E){var V=E[2]-1||0,ae=(E[7]||"0").substring(0,3);return se?new Date(Date.UTC(E[1],V,E[3]||1,E[4]||0,E[5]||0,E[6]||0,ae)):new Date(E[1],V,E[3]||1,E[4]||0,E[5]||0,E[6]||0,ae)}}return new Date(F)}(_),this.init()},te.init=function(){var _=this.$d;this.$y=_.getFullYear(),this.$M=_.getMonth(),this.$D=_.getDate(),this.$W=_.getDay(),this.$H=_.getHours(),this.$m=_.getMinutes(),this.$s=_.getSeconds(),this.$ms=_.getMilliseconds()},te.$utils=function(){return Ee},te.isValid=function(){return this.$d.toString()!==A},te.isSame=function(_,H){var F=Re(_);return this.startOf(H)<=F&&F<=this.endOf(H)},te.isAfter=function(_,H){return Re(_)<this.startOf(H)},te.isBefore=function(_,H){return this.endOf(H)<Re(_)},te.$g=function(_,H,F){return Ee.u(_)?this[H]:this.set(F,_)},te.unix=function(){return Math.floor(this.valueOf()/1e3)},te.valueOf=function(){return this.$d.getTime()},te.startOf=function(_,H){var F=this,se=!!Ee.u(H)||H,E=Ee.p(_),V=function(Ot,$e){var Ct=Ee.w(F.$u?Date.UTC(F.$y,$e,Ot):new Date(F.$y,$e,Ot),F);return se?Ct:Ct.endOf(p)},ae=function(Ot,$e){return Ee.w(F.toDate()[Ot].apply(F.toDate("s"),(se?[0,0,0,0]:[23,59,59,999]).slice($e)),F)},re=this.$W,fe=this.$M,De=this.$D,Te="set"+(this.$u?"UTC":"");switch(E){case R:return se?V(1,0):V(31,11);case x:return se?V(1,fe):V(0,fe+1);case b:var ht=this.$locale().weekStart||0,Qe=(re<ht?re+7:re)-ht;return V(se?De-Qe:De+(6-Qe),fe);case p:case S:return ae(Te+"Hours",0);case m:return ae(Te+"Minutes",1);case h:return ae(Te+"Seconds",2);case f:return ae(Te+"Milliseconds",3);default:return this.clone()}},te.endOf=function(_){return this.startOf(_,!1)},te.$set=function(_,H){var F,se=Ee.p(_),E="set"+(this.$u?"UTC":""),V=(F={},F[p]=E+"Date",F[S]=E+"Date",F[x]=E+"Month",F[R]=E+"FullYear",F[m]=E+"Hours",F[h]=E+"Minutes",F[f]=E+"Seconds",F[c]=E+"Milliseconds",F)[se],ae=se===p?this.$D+(H-this.$W):H;if(se===x||se===R){var re=this.clone().set(S,1);re.$d[V](ae),re.init(),this.$d=re.set(S,Math.min(this.$D,re.daysInMonth())).$d}else V&&this.$d[V](ae);return this.init(),this},te.set=function(_,H){return this.clone().$set(_,H)},te.get=function(_){return this[Ee.p(_)]()},te.add=function(_,H){var F,se=this;_=Number(_);var E=Ee.p(H),V=function(fe){var De=Re(se);return Ee.w(De.date(De.date()+Math.round(fe*_)),se)};if(E===x)return this.set(x,this.$M+_);if(E===R)return this.set(R,this.$y+_);if(E===p)return V(1);if(E===b)return V(7);var ae=(F={},F[h]=o,F[m]=l,F[f]=a,F)[E]||1,re=this.$d.getTime()+_*ae;return Ee.w(re,this)},te.subtract=function(_,H){return this.add(-1*_,H)},te.format=function(_){var H=this,F=this.$locale();if(!this.isValid())return F.invalidDate||A;var se=_||"YYYY-MM-DDTHH:mm:ssZ",E=Ee.z(this),V=this.$H,ae=this.$m,re=this.$M,fe=F.weekdays,De=F.months,Te=F.meridiem,ht=function($e,Ct,an,Un){return $e&&($e[Ct]||$e(H,se))||an[Ct].slice(0,Un)},Qe=function($e){return Ee.s(V%12||12,$e,"0")},Ot=Te||function($e,Ct,an){var Un=$e<12?"AM":"PM";return an?Un.toLowerCase():Un};return se.replace(z,function($e,Ct){return Ct||function(an){switch(an){case"YY":return String(H.$y).slice(-2);case"YYYY":return Ee.s(H.$y,4,"0");case"M":return re+1;case"MM":return Ee.s(re+1,2,"0");case"MMM":return ht(F.monthsShort,re,De,3);case"MMMM":return ht(De,re);case"D":return H.$D;case"DD":return Ee.s(H.$D,2,"0");case"d":return String(H.$W);case"dd":return ht(F.weekdaysMin,H.$W,fe,2);case"ddd":return ht(F.weekdaysShort,H.$W,fe,3);case"dddd":return fe[H.$W];case"H":return String(V);case"HH":return Ee.s(V,2,"0");case"h":return Qe(1);case"hh":return Qe(2);case"a":return Ot(V,ae,!0);case"A":return Ot(V,ae,!1);case"m":return String(ae);case"mm":return Ee.s(ae,2,"0");case"s":return String(H.$s);case"ss":return Ee.s(H.$s,2,"0");case"SSS":return Ee.s(H.$ms,3,"0");case"Z":return E}return null}($e)||E.replace(":","")})},te.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},te.diff=function(_,H,F){var se,E=this,V=Ee.p(H),ae=Re(_),re=(ae.utcOffset()-this.utcOffset())*o,fe=this-ae,De=function(){return Ee.m(E,ae)};switch(V){case R:se=De()/12;break;case x:se=De();break;case y:se=De()/3;break;case b:se=(fe-re)/6048e5;break;case p:se=(fe-re)/864e5;break;case m:se=fe/l;break;case h:se=fe/o;break;case f:se=fe/a;break;default:se=fe}return F?se:Ee.a(se)},te.daysInMonth=function(){return this.endOf(x).$D},te.$locale=function(){return D[this.$L]},te.locale=function(_,H){if(!_)return this.$L;var F=this.clone(),se=ue(_,H,!0);return se&&(F.$L=se),F},te.clone=function(){return Ee.w(this.$d,this)},te.toDate=function(){return new Date(this.valueOf())},te.toJSON=function(){return this.isValid()?this.toISOString():null},te.toISOString=function(){return this.$d.toISOString()},te.toString=function(){return this.$d.toUTCString()},ie}(),be=we.prototype;return Re.prototype=be,[["$ms",c],["$s",f],["$m",h],["$H",m],["$W",p],["$M",x],["$y",R],["$D",S]].forEach(function(ie){be[ie[1]]=function(te){return this.$g(te,ie[0],ie[1])}}),Re.extend=function(ie,te){return ie.$i||(ie(te,we,Re),ie.$i=!0),Re},Re.locale=ue,Re.isDayjs=_e,Re.unix=function(ie){return Re(1e3*ie)},Re.en=D[J],Re.Ls=D,Re.p={},Re})}(au)),au.exports}var t8=e8();const iu=Oy(t8);function n8(e){return At({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"},child:[]}]})(e)}const r8=()=>{const{user:e}=Za(),[t,a]=I.useState([]),[o,l]=I.useState(""),[c,f]=I.useState("all"),[h,m]=I.useState(""),p=async()=>{try{let y="https://event-management-server-blond.vercel.app/events";const R=[];if(o&&R.push(`title=${encodeURIComponent(o)}`),c&&c!=="all"&&R.push(`filterType=${c}`),h){const A=iu(h).startOf("day").toISOString(),N=iu(h).endOf("day").toISOString();R.push(`startDate=${A}`),R.push(`endDate=${N}`)}R.length>0&&(y+=`?${R.join("&")}`);const S=await ct.get(y);a(S.data)}catch(y){console.error("Error fetching events:",y)}};I.useEffect(()=>{p()},[o,c,h]);const b=()=>{l(""),f("all"),m("")},x=async y=>{try{const R=await ct.patch(`https://event-management-server-blond.vercel.app/events/join/${y}`,{email:e?.email});console.log(R.data),p()}catch(R){console.log(R)}};return w.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8 mb-16",children:[w.jsx("h1",{className:"text-3xl font-bold mb-10 text-center",children:"All Events"}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-10",children:[w.jsx("input",{type:"text",value:o,placeholder:"Search by title",className:"border border-gray-400 font-semibold focus:outline-1 focus:outline-teal-100 rounded px-3 py-2",onChange:y=>l(y.target.value)}),w.jsx("input",{type:"date",value:h,className:"border border-gray-400 font-semibold focus:outline-1 focus:outline-teal-100 rounded px-3 py-2",onChange:y=>m(y.target.value)}),w.jsxs("select",{value:c,className:"border border-gray-400 font-semibold focus:outline-1 focus:outline-teal-100 rounded px-3 py-2",onChange:y=>f(y.target.value),children:[w.jsx("option",{value:"all",children:"All"}),w.jsx("option",{value:"today",children:"Today"}),w.jsx("option",{value:"current_week",children:"Current Week"}),w.jsx("option",{value:"last_week",children:"Last Week"}),w.jsx("option",{value:"current_month",children:"Current Month"}),w.jsx("option",{value:"last_month",children:"Last Month"})]}),w.jsxs("button",{onClick:b,className:"flex items-center justify-center gap-1 border border-gray-400 font-semibold focus:outline-1 focus:outline-teal-100 py-2 cursor-pointer rounded hover:bg-gray-100",children:["Clear Filters ",w.jsx(n8,{size:18})]})]}),t.length===0?w.jsx("p",{className:" flex items-center justify-center min-h-screen text-red-600 text-lg font-semibold",children:"No events found that matching your criteria."}):w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.map(y=>w.jsxs("div",{className:"border border-gray-200 p-5 rounded shadow bg-teal-50",children:[w.jsx("h2",{className:"text-xl font-semibold",children:y.title}),w.jsxs("p",{className:"text-sm text-gray-600 mb-1",children:["Posted by: ",w.jsx("span",{className:"font-medium",children:y.name})]}),w.jsxs("p",{className:"text-sm",children:[w.jsx("strong",{children:"Date & Time:"})," ",iu(y.datetime).format("DD MMM YYYY, h:mm A")]}),w.jsxs("p",{className:"text-sm",children:[w.jsx("strong",{children:"Location:"})," ",y.location]}),w.jsx("p",{className:"text-sm mt-2",children:y.description}),w.jsxs("p",{className:"text-sm mt-2 text-gray-600 font-medium",children:["Attendees: ",y.attendeeCount]}),w.jsx("button",{disabled:y.joinedUsers?.includes(e?.email),onClick:()=>x(y._id),className:`mt-3 px-4 py-2 rounded  ${y.joinedUsers?.includes(e?.email)?"bg-gray-400 cursor-not-allowed":"bg-teal-600 hover:bg-teal-700 cursor-pointer"} text-white`,children:y.joinedUsers?.includes(e?.email)?"Joined":"Join Event"})]},y._id))})]})},a8=()=>{const{user:e}=Za(),[t,a]=I.useState([]),o=async()=>{try{const c=await ct.get(`https://event-management-server-blond.vercel.app/event/${e?.email}`);a(c.data)}catch(c){console.log(c)}};I.useEffect(()=>{e?.email&&o()},[e?.email]);const l=async c=>{Qn.fire({title:"Are you sure?",text:"Remove this event? You won't able to revert this!!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ef4444",cancelButtonColor:"#009689",confirmButtonText:"Yes, remove it!"}).then(f=>{f.isConfirmed&&ct.delete(`https://event-management-server-blond.vercel.app/delete/${c}`).then(()=>{a(t.filter(h=>h._id!==c)),Qn.fire({title:"Removed!",text:"Event has been removed.",icon:"success",confirmButtonText:"Ok",confirmButtonColor:"#009689"})})})};return w.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-10",children:[w.jsx("h1",{className:"text-3xl font-bold text-center mb-8",children:"My Events"}),t.length===0?w.jsxs("p",{className:"text-center text-lg text-gray-600",children:["You haven’t added any events yet. ",w.jsx("br",{}),w.jsx("a",{href:"/add-event",className:"text-teal-600 underline",children:"Click here to add event"}),"."]}):w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.map(c=>w.jsxs("div",{className:"border border-teal-100 rounded p-5 shadow bg-white",children:[w.jsx("h2",{className:"text-xl font-semibold text-teal-700",children:c.title}),w.jsxs("p",{className:"text-sm text-gray-600 mb-1",children:["Posted by: ",w.jsx("span",{className:"font-medium",children:c.name})]}),w.jsxs("p",{className:"text-sm",children:[w.jsx("strong",{children:"Date & Time:"})," ",iu(c.datetime).format("DD MMM YYYY, h:mm A")]}),w.jsxs("p",{className:"text-sm",children:[w.jsx("strong",{children:"Location:"})," ",c.location]}),w.jsx("p",{className:"text-sm mt-2",children:c.description}),w.jsxs("p",{className:"text-sm mt-2 text-gray-600 font-medium",children:["Attendees: ",c.attendeeCount]}),w.jsxs("div",{className:"flex gap-3 mt-4",children:[w.jsx(Ha,{to:`/update/${c?._id}`,className:"px-4 py-1 bg-teal-600 text-white rounded hover:bg-teal-700 cursor-pointer",children:"Update"}),w.jsx("button",{onClick:()=>l(c._id),className:"px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer",children:"Delete"})]})]},c._id))})]})},i8=()=>{const{register:e,handleSubmit:t,reset:a,formState:{errors:o}}=Qu(),l=FE();console.log(l?.id);const c=async f=>{const h={...f};try{(await ct.patch(`https://event-management-server-blond.vercel.app/update/${l?.id}`,h)).data.modifiedCount>0&&(Qn.fire({title:"Success!",text:"Event updated Successfully",icon:"success",confirmButtonText:"Ok",confirmButtonColor:"#009689"}),a())}catch(m){console.error(m)}};return w.jsxs("div",{className:"max-w-4xl mx-auto my-10 px-8 py-12 shadow-md bg-teal-50",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-center",children:"Update Your Event"}),w.jsxs("form",{onSubmit:t(c),className:"space-y-4",children:[w.jsxs("div",{className:"grid gap-4 grid-cols-1 md:grid-cols-2",children:[w.jsxs("div",{children:[w.jsx("label",{className:"font-medium mb-1",children:"Event Title"}),w.jsx("input",{type:"text",...e("title",{required:!0}),className:"w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2"}),o.title&&w.jsx("span",{className:"text-red-500",children:"Event Title is required"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"font-medium mb-1",children:"Your Name"}),w.jsx("input",{type:"text",...e("name",{required:!0}),className:"w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2"}),o.name&&w.jsx("span",{className:"text-red-500",children:"Name is required"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"font-medium mb-1",children:"Date and Time"}),w.jsx("input",{type:"datetime-local",...e("datetime",{required:!0}),className:"w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2"}),o.datetime&&w.jsx("span",{className:"text-red-500",children:"Date & Time is required"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"font-medium mb-1",children:"Location"}),w.jsx("input",{type:"text",...e("location",{required:!0}),className:"w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2"}),o.location&&w.jsx("span",{className:"text-red-500",children:"Location is required"})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"font-medium mb-1",children:"Description"}),w.jsx("textarea",{...e("description",{required:!0}),className:"w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2",rows:4}),o.description&&w.jsx("span",{className:"text-red-500",children:"Description is required"})]}),w.jsx("button",{type:"submit",className:"w-full bg-teal-600 text-white font-semibold py-2 rounded hover:bg-teal-700 transition cursor-pointer",children:"Update Event"})]})]})},o8=zS([{path:"/",element:w.jsx(iO,{}),children:[{path:"/",element:w.jsx(gO,{})},{path:"/login",element:w.jsx(kR,{})},{path:"/sign-up",element:w.jsx(RR,{})},{path:"/add-event",element:w.jsx(Yc,{children:w.jsx(JR,{})})},{path:"/events",element:w.jsx(Yc,{children:w.jsx(r8,{})})},{path:"/my-event",element:w.jsx(Yc,{children:w.jsx(a8,{})})},{path:"/update/:id",element:w.jsx(Yc,{children:w.jsx(i8,{})})}]}]);j5.createRoot(document.getElementById("root")).render(w.jsx(I.StrictMode,{children:w.jsx(W6,{children:w.jsx(XS,{router:o8})})}));

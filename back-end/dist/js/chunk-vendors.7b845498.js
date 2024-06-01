"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[504],{4046:function(e,t,n){n.d(t,{Am:function(){return L},FA:function(){return C},I9:function(){return D},Im:function(){return P},Ku:function(){return $},T9:function(){return g},Tj:function(){return m},Uj:function(){return c},XA:function(){return v},ZQ:function(){return b},bD:function(){return x},cY:function(){return y},eX:function(){return S},g:function(){return R},hp:function(){return M},jZ:function(){return _},lT:function(){return I},lV:function(){return E},sr:function(){return w},tD:function(){return j},u:function(){return u},zW:function(){return T}});n(4114),n(4979);
/**
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
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],s=e[n++],a=e[n++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,s=i?e[o+1]:0,a=o+2<e.length,c=a?e[o+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let f=(15&s)<<2|c>>6,d=63&c;a||(d=64,i||(f=64)),r.push(n[u],n[l],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,a=i?n[e.charAt(o)]:0;++o;const c=o<e.length,u=c?n[e.charAt(o)]:64;++o;const l=o<e.length,f=l?n[e.charAt(o)]:64;if(++o,null==t||null==a||null==u||null==f)throw new s;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==f){const e=u<<6&192|f;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return i.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const f=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},h=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return f()||d()||h()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},m=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},g=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */
/**
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
 */
function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function w(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function E(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function I(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function T(){try{return"object"===typeof indexedDB}catch(e){return!1}}function S(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
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
 */
const O="FirebaseError";class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?A(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`,a=new R(r,s,n);return a}}function A(e,t){return e.replace(k,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const k=/\{\$([^}]+)}/g;
/**
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
 */function P(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function x(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(N(n)&&N(i)){if(!x(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function N(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function L(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function D(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function M(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function j(e,t){const n=new U(e,t);return n.subscribe.bind(n)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=F(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function F(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
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
 */
/**
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
 */
function $(e){return e&&e._delegate?e._delegate:e}},144:function(e,t,n){n.d(t,{C4:function(){return v},EW:function(){return Re},Gc:function(){return me},IG:function(){return Ie},IJ:function(){return xe},KR:function(){return Pe},Kh:function(){return pe},Pr:function(){return je},R1:function(){return De},X2:function(){return u},bl:function(){return y},fE:function(){return _e},g8:function(){return ye},hZ:function(){return A},i9:function(){return ke},ju:function(){return we},o5:function(){return c},u4:function(){return C},ux:function(){return Ee},yC:function(){return s}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4232);let o,i;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=o,!e&&o&&(this.index=(o.scopes||(o.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=o;try{return o=this,e()}finally{o=t}}else 0}on(){o=this}off(){o=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e,t=o){t&&t.active&&t.effects.push(e)}function c(){return o}class u{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,a(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,v();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(l(t.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),y()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=p,t=i;try{return p=!0,i=this,this._runnings++,f(this),this.fn()}finally{d(this),this._runnings--,i=t,p=e}}stop(){this.active&&(f(this),d(this),this.onStop&&this.onStop(),this.active=!1)}}function l(e){return e.value}function f(e){e._trackId++,e._depsLength=0}function d(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)h(e.deps[t],e);e.deps.length=e._depsLength}}function h(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let p=!0,m=0;const g=[];function v(){g.push(p),p=!1}function y(){const e=g.pop();p=void 0===e||e}function b(){m++}function _(){m--;while(!m&&E.length)E.shift()()}function w(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&h(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const E=[];function I(e,t,n){b();for(const r of e.keys()){let n;r._dirtyLevel<t&&(null!=n?n:n=e.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=t),r._shouldSchedule&&(null!=n?n:n=e.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&E.push(r.scheduler)))}_()}const T=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},S=new WeakMap,O=Symbol(""),R=Symbol("");function C(e,t,n){if(p&&i){let t=S.get(e);t||S.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=T((()=>t.delete(n)))),w(i,r,void 0)}}function A(e,t,n,o,i,s){const a=S.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.cy)(e)){const e=Number(o);a.forEach(((t,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.cy)(e)?(0,r.yI)(n)&&c.push(a.get("length")):(c.push(a.get(O)),(0,r.CE)(e)&&c.push(a.get(R)));break;case"delete":(0,r.cy)(e)||(c.push(a.get(O)),(0,r.CE)(e)&&c.push(a.get(R)));break;case"set":(0,r.CE)(e)&&c.push(a.get(O));break}b();for(const r of c)r&&I(r,4,void 0);_()}const k=(0,r.pD)("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm)),x=N();function N(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ee(this);for(let t=0,o=this.length;t<o;t++)C(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ee)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){v(),b();const n=Ee(this)[t].apply(this,e);return _(),y(),n}})),e}function L(e){(0,r.Bm)(e)||(e=String(e));const t=Ee(this);return C(t,"has",e),t.hasOwnProperty(e)}class D{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const o=this._isReadonly,i=this._isShallow;if("__v_isReactive"===t)return!o;if("__v_isReadonly"===t)return o;if("__v_isShallow"===t)return i;if("__v_raw"===t)return n===(o?i?fe:le:i?ue:ce).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=(0,r.cy)(e);if(!o){if(s&&(0,r.$3)(x,t))return Reflect.get(x,t,n);if("hasOwnProperty"===t)return L}const a=Reflect.get(e,t,n);return((0,r.Bm)(t)?P.has(t):k(t))?a:(o||C(e,"get",t),i?a:ke(a)?s&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?o?ge(a):pe(a):a)}}class M extends D{constructor(e=!1){super(!1,e)}set(e,t,n,o){let i=e[t];if(!this._isShallow){const t=be(i);if(_e(n)||be(n)||(i=Ee(i),n=Ee(n)),!(0,r.cy)(e)&&ke(i)&&!ke(n))return!t&&(i.value=n,!0)}const s=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,o);return e===Ee(o)&&(s?(0,r.$H)(n,i)&&A(e,"set",t,n,i):A(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&A(e,"delete",t,void 0,o),i}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&P.has(t)||C(e,"has",t),n}ownKeys(e){return C(e,"iterate",(0,r.cy)(e)?"length":O),Reflect.ownKeys(e)}}class j extends D{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const U=new M,F=new j,B=new M(!0),$=e=>e,V=e=>Reflect.getPrototypeOf(e);function W(e,t,n=!1,o=!1){e=e["__v_raw"];const i=Ee(e),s=Ee(t);n||((0,r.$H)(t,s)&&C(i,"get",t),C(i,"get",s));const{has:a}=V(i),c=o?$:n?Se:Te;return a.call(i,t)?c(e.get(t)):a.call(i,s)?c(e.get(s)):void(e!==i&&e.get(t))}function H(e,t=!1){const n=this["__v_raw"],o=Ee(n),i=Ee(e);return t||((0,r.$H)(e,i)&&C(o,"has",e),C(o,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function z(e,t=!1){return e=e["__v_raw"],!t&&C(Ee(e),"iterate",O),Reflect.get(e,"size",e)}function K(e){e=Ee(e);const t=Ee(this),n=V(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function q(e,t){t=Ee(t);const n=Ee(this),{has:o,get:i}=V(n);let s=o.call(n,e);s||(e=Ee(e),s=o.call(n,e));const a=i.call(n,e);return n.set(e,t),s?(0,r.$H)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function G(e){const t=Ee(this),{has:n,get:r}=V(t);let o=n.call(t,e);o||(e=Ee(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,s=t.delete(e);return o&&A(t,"delete",e,void 0,i),s}function J(){const e=Ee(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function Z(e,t){return function(n,r){const o=this,i=o["__v_raw"],s=Ee(i),a=t?$:e?Se:Te;return!e&&C(s,"iterate",O),i.forEach(((e,t)=>n.call(r,a(e),a(t),o)))}}function X(e,t,n){return function(...o){const i=this["__v_raw"],s=Ee(i),a=(0,r.CE)(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=i[e](...o),f=n?$:t?Se:Te;return!t&&C(s,"iterate",u?R:O),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[f(e[0]),f(e[1])]:f(e),done:t}},[Symbol.iterator](){return this}}}}function Q(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function Y(){const e={get(e){return W(this,e)},get size(){return z(this)},has:H,add:K,set:q,delete:G,clear:J,forEach:Z(!1,!1)},t={get(e){return W(this,e,!1,!0)},get size(){return z(this)},has:H,add:K,set:q,delete:G,clear:J,forEach:Z(!1,!0)},n={get(e){return W(this,e,!0)},get size(){return z(this,!0)},has(e){return H.call(this,e,!0)},add:Q("add"),set:Q("set"),delete:Q("delete"),clear:Q("clear"),forEach:Z(!0,!1)},r={get(e){return W(this,e,!0,!0)},get size(){return z(this,!0)},has(e){return H.call(this,e,!0)},add:Q("add"),set:Q("set"),delete:Q("delete"),clear:Q("clear"),forEach:Z(!0,!0)},o=["keys","values","entries",Symbol.iterator];return o.forEach((o=>{e[o]=X(o,!1,!1),n[o]=X(o,!0,!1),t[o]=X(o,!1,!0),r[o]=X(o,!0,!0)})),[e,n,t,r]}const[ee,te,ne,re]=Y();function oe(e,t){const n=t?e?re:ne:e?te:ee;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get((0,r.$3)(n,o)&&o in t?n:t,o,i)}const ie={get:oe(!1,!1)},se={get:oe(!1,!0)},ae={get:oe(!0,!1)};const ce=new WeakMap,ue=new WeakMap,le=new WeakMap,fe=new WeakMap;function de(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function he(e){return e["__v_skip"]||!Object.isExtensible(e)?0:de((0,r.Zf)(e))}function pe(e){return be(e)?e:ve(e,!1,U,ie,ce)}function me(e){return ve(e,!1,B,se,ue)}function ge(e){return ve(e,!0,F,ae,le)}function ve(e,t,n,o,i){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=i.get(e);if(s)return s;const a=he(e);if(0===a)return e;const c=new Proxy(e,2===a?o:n);return i.set(e,c),c}function ye(e){return be(e)?ye(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function be(e){return!(!e||!e["__v_isReadonly"])}function _e(e){return!(!e||!e["__v_isShallow"])}function we(e){return!!e&&!!e["__v_raw"]}function Ee(e){const t=e&&e["__v_raw"];return t?Ee(t):e}function Ie(e){return Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Te=e=>(0,r.Gv)(e)?pe(e):e,Se=e=>(0,r.Gv)(e)?ge(e):e;class Oe{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new u((()=>e(this._value)),(()=>Ae(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ee(this);return e._cacheable&&!e.effect.dirty||!(0,r.$H)(e._value,e._value=e.effect.run())||Ae(e,4),Ce(e),e.effect._dirtyLevel>=2&&Ae(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Re(e,t,n=!1){let o,i;const s=(0,r.Tn)(e);s?(o=e,i=r.tE):(o=e.get,i=e.set);const a=new Oe(o,i,s||!i,n);return a}function Ce(e){var t;p&&i&&(e=Ee(e),w(i,null!=(t=e.dep)?t:e.dep=T((()=>e.dep=void 0),e instanceof Oe?e:void 0),void 0))}function Ae(e,t=4,n){e=Ee(e);const r=e.dep;r&&I(r,t,void 0)}function ke(e){return!(!e||!0!==e.__v_isRef)}function Pe(e){return Ne(e,!1)}function xe(e){return Ne(e,!0)}function Ne(e,t){return ke(e)?e:new Le(e,t)}class Le{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ee(e),this._value=t?e:Te(e)}get value(){return Ce(this),this._value}set value(e){const t=this.__v_isShallow||_e(e)||be(e);e=t?e:Ee(e),(0,r.$H)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Te(e),Ae(this,4,e))}}function De(e){return ke(e)?e.value:e}const Me={get:(e,t,n)=>De(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return ke(o)&&!ke(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function je(e){return ye(e)?e:new Proxy(e,Me)}},6768:function(e,t,n){n.d(t,{$u:function(){return xe},CE:function(){return en},Df:function(){return ge},EW:function(){return $n},FK:function(){return Wt},Gt:function(){return lt},Gy:function(){return se},K9:function(){return Lt},Lk:function(){return an},MZ:function(){return me},OW:function(){return de},Q3:function(){return hn},QP:function(){return ce},WQ:function(){return ft},bF:function(){return cn},dY:function(){return y},g2:function(){return W},h:function(){return Vn},k6:function(){return D},nI:function(){return In},pI:function(){return Fe},pM:function(){return ve},pR:function(){return le},qL:function(){return s},uX:function(){return Jt},wB:function(){return Q}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(144),o=n(4232);function i(e,t,n,r){try{return r?e(...r):e()}catch(o){a(o,t,n)}}function s(e,t,n,r){if((0,o.Tn)(e)){const s=i(e,t,n,r);return s&&(0,o.yL)(s)&&s.catch((e=>{a(e,t,n)})),s}if((0,o.cy)(e)){const o=[];for(let i=0;i<e.length;i++)o.push(s(e[i],t,n,r));return o}}function a(e,t,n,o=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const s=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(o){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,a))return;o=o.parent}const c=t.appContext.config.errorHandler;if(c)return(0,r.C4)(),i(c,null,10,[e,s,a]),void(0,r.bl)()}c(e,n,s,o)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const f=[];let d=0;const h=[];let p=null,m=0;const g=Promise.resolve();let v=null;function y(e){const t=v||g;return e?t.then(this?e.bind(this):e):t}function b(e){let t=d+1,n=f.length;while(t<n){const r=t+n>>>1,o=f[r],i=O(o);i<e||i===e&&o.pre?t=r+1:n=r}return t}function _(e){f.length&&f.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?f.push(e):f.splice(b(e.id),0,e),w())}function w(){u||l||(l=!0,v=g.then(C))}function E(e){const t=f.indexOf(e);t>d&&f.splice(t,1)}function I(e){(0,o.cy)(e)?h.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||h.push(e),w()}function T(e,t,n=(u?d+1:0)){for(0;n<f.length;n++){const t=f[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,f.splice(n,1),n--,t()}}}function S(e){if(h.length){const e=[...new Set(h)].sort(((e,t)=>O(e)-O(t)));if(h.length=0,p)return void p.push(...e);for(p=e,m=0;m<p.length;m++)p[m]();p=null,m=0}}const O=e=>null==e.id?1/0:e.id,R=(e,t)=>{const n=O(e)-O(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function C(e){l=!1,u=!0,f.sort(R);o.tE;try{for(d=0;d<f.length;d++){const e=f[d];e&&!1!==e.active&&i(e,null,14)}}finally{d=0,f.length=0,S(e),u=!1,v=null,(f.length||h.length)&&C(e)}}function A(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||o.MZ;let i=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||o.MZ;s&&(i=n.map((e=>(0,o.Kg)(e)?e.trim():e))),t&&(i=n.map(o.bB))}let u;let l=r[u=(0,o.rU)(t)]||r[u=(0,o.rU)((0,o.PT)(t))];!l&&a&&(l=r[u=(0,o.rU)((0,o.Tg)(t))]),l&&s(l,e,6,i);const f=r[u+"Once"];if(f){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,s(f,e,6,i)}}function k(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let a={},c=!1;if(!(0,o.Tn)(e)){const r=e=>{const n=k(e,t,!0);n&&(c=!0,(0,o.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,o.cy)(s)?s.forEach((e=>a[e]=null)):(0,o.X$)(a,s),(0,o.Gv)(e)&&r.set(e,a),a):((0,o.Gv)(e)&&r.set(e,null),null)}function P(e,t){return!(!e||!(0,o.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,o.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,o.$3)(e,(0,o.Tg)(t))||(0,o.$3)(e,t))}let x=null,N=null;function L(e){const t=x;return x=e,N=e&&e.type.__scopeId||null,t}function D(e,t=x,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Qt(-1);const o=L(t);let i;try{i=e(...n)}finally{L(o),r._d&&Qt(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function M(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:c,attrs:u,emit:l,render:f,renderCache:d,props:h,data:p,setupState:m,ctx:g,inheritAttrs:v}=e,y=L(e);let b,_;try{if(4&n.shapeFlag){const e=i||r,t=e;b=pn(f.call(t,e,d,h,m,p,g)),_=u}else{const e=t;0,b=pn(e.length>1?e(h,{attrs:u,slots:c,emit:l}):e(h,null)),_=t.props?u:j(u)}}catch(E){qt.length=0,a(E,e,1),b=cn(zt)}let w=b;if(_&&!1!==v){const e=Object.keys(_),{shapeFlag:t}=w;e.length&&7&t&&(s&&e.some(o.CP)&&(_=U(_,s)),w=fn(w,_,!1,!0))}return n.dirs&&(w=fn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),b=w,L(y),b}const j=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,o.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},U=(e,t)=>{const n={};for(const r in e)(0,o.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function F(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!o&&!a||a&&a.$stable)||r!==s&&(r?!s||B(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?B(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!P(u,n))return!0}}return!1}function B(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!P(n,i))return!0}return!1}function $({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const V="components";function W(e,t){return z(V,e,!0,t)||e}const H=Symbol.for("v-ndc");function z(e,t,n=!0,r=!1){const i=x||En;if(i){const n=i.type;if(e===V){const e=Fn(n,!1);if(e&&(e===t||e===(0,o.PT)(t)||e===(0,o.ZH)((0,o.PT)(t))))return n}const s=K(i[e]||n[e],t)||K(i.appContext[e],t);return!s&&r?n:s}}function K(e,t){return e&&(e[t]||e[(0,o.PT)(t)]||e[(0,o.ZH)((0,o.PT)(t))])}const q=e=>e.__isSuspense;function G(e,t){t&&t.pendingBranch?(0,o.cy)(e)?t.effects.push(...e):t.effects.push(e):I(e)}const J=Symbol.for("v-scx"),Z=()=>{{const e=ft(J);return e}};const X={};function Q(e,t,n){return Y(e,t,n)}function Y(e,t,{immediate:n,deep:a,flush:c,once:u,onTrack:l,onTrigger:f}=o.MZ){if(t&&u){const e=t;t=(...t)=>{e(...t),O()}}const d=En,h=e=>!0===a?e:ne(e,!1===a?1:void 0);let p,m,g=!1,v=!1;if((0,r.i9)(e)?(p=()=>e.value,g=(0,r.fE)(e)):(0,r.g8)(e)?(p=()=>h(e),g=!0):(0,o.cy)(e)?(v=!0,g=e.some((e=>(0,r.g8)(e)||(0,r.fE)(e))),p=()=>e.map((e=>(0,r.i9)(e)?e.value:(0,r.g8)(e)?h(e):(0,o.Tn)(e)?i(e,d,2):void 0))):p=(0,o.Tn)(e)?t?()=>i(e,d,2):()=>(m&&m(),s(e,d,3,[b])):o.tE,t&&a){const e=p;p=()=>ne(e())}let y,b=e=>{m=T.onStop=()=>{i(e,d,4),m=T.onStop=void 0}};if(Pn){if(b=o.tE,t?n&&s(t,d,3,[p(),v?[]:void 0,b]):p(),"sync"!==c)return o.tE;{const e=Z();y=e.__watcherHandles||(e.__watcherHandles=[])}}let w=v?new Array(e.length).fill(X):X;const E=()=>{if(T.active&&T.dirty)if(t){const e=T.run();(a||g||(v?e.some(((e,t)=>(0,o.$H)(e,w[t]))):(0,o.$H)(e,w)))&&(m&&m(),s(t,d,3,[e,w===X?void 0:v&&w[0]===X?[]:w,b]),w=e)}else T.run()};let I;E.allowRecurse=!!t,"sync"===c?I=E:"post"===c?I=()=>Nt(E,d&&d.suspense):(E.pre=!0,d&&(E.id=d.uid),I=()=>_(E));const T=new r.X2(p,o.tE,I),S=(0,r.o5)(),O=()=>{T.stop(),S&&(0,o.TF)(S.effects,T)};return t?n?E():w=T.run():"post"===c?Nt(T.run.bind(T),d&&d.suspense):T.run(),y&&y.push(O),O}function ee(e,t,n){const r=this.proxy,i=(0,o.Kg)(e)?e.includes(".")?te(r,e):()=>r[e]:e.bind(r,r);let s;(0,o.Tn)(t)?s=t:(s=t.handler,n=t);const a=On(this),c=Y(i,s.bind(r),n);return a(),c}function te(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ne(e,t=1/0,n){if(t<=0||!(0,o.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,(0,r.i9)(e))ne(e.value,t,n);else if((0,o.cy)(e))for(let r=0;r<e.length;r++)ne(e[r],t,n);else if((0,o.vM)(e)||(0,o.CE)(e))e.forEach((e=>{ne(e,t,n)}));else if((0,o.Qd)(e))for(const r in e)ne(e[r],t,n);return e}function re(e,t,n,o){const i=e.dirs,a=t&&t.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[o];l&&((0,r.C4)(),s(l,n,8,[e.el,u,e,t]),(0,r.bl)())}}const oe=Symbol("_leaveCb"),ie=Symbol("_enterCb");function se(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ke((()=>{e.isMounted=!0})),Ne((()=>{e.isUnmounting=!0})),e}const ae=[Function,Array],ce={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ae,onEnter:ae,onAfterEnter:ae,onEnterCancelled:ae,onBeforeLeave:ae,onLeave:ae,onAfterLeave:ae,onLeaveCancelled:ae,onBeforeAppear:ae,onAppear:ae,onAfterAppear:ae,onAppearCancelled:ae},ue={name:"BaseTransition",props:ce,setup(e,{slots:t}){const n=In(),o=se();return()=>{const i=t.default&&ge(t.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){let e=!1;for(const t of i)if(t.type!==zt){0,s=t,e=!0;break}}const a=(0,r.ux)(e),{mode:c}=a;if(o.isLeaving)return he(s);const u=pe(s);if(!u)return he(s);const l=de(u,a,o,n);me(u,l);const f=n.subTree,d=f&&pe(f);if(d&&d.type!==zt&&!rn(u,d)){const e=de(d,a,o,n);if(me(d,e),"out-in"===c&&u.type!==zt)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},he(s);"in-out"===c&&u.type!==zt&&(e.delayLeave=(e,t,n)=>{const r=fe(o,d);r[String(d.key)]=d,e[oe]=()=>{t(),e[oe]=void 0,delete l.delayedLeave},l.delayedLeave=n})}return s}}},le=ue;function fe(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function de(e,t,n,r){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:h,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:b,onAppearCancelled:_}=t,w=String(e.key),E=fe(n,e),I=(e,t)=>{e&&s(e,r,9,t)},T=(e,t)=>{const n=t[1];I(e,t),(0,o.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!i)return;r=v||u}t[oe]&&t[oe](!0);const o=E[w];o&&rn(e,o)&&o.el[oe]&&o.el[oe](),I(r,[t])},enter(e){let t=l,r=f,o=d;if(!n.isMounted){if(!i)return;t=y||l,r=b||f,o=_||d}let s=!1;const a=e[ie]=t=>{s||(s=!0,I(t?o:r,[e]),S.delayedLeave&&S.delayedLeave(),e[ie]=void 0)};t?T(t,[e,a]):a()},leave(t,r){const o=String(e.key);if(t[ie]&&t[ie](!0),n.isUnmounting)return r();I(h,[t]);let i=!1;const s=t[oe]=n=>{i||(i=!0,r(),I(n?g:m,[t]),t[oe]=void 0,E[o]===e&&delete E[o])};E[o]=e,p?T(p,[t,s]):s()},clone(e){return de(e,t,n,r)}};return S}function he(e){if(be(e))return e=fn(e),e.children=null,e}function pe(e){if(!be(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&(0,o.Tn)(n.default))return n.default()}}function me(e,t){6&e.shapeFlag&&e.component?me(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ge(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:i);s.type===Wt?(128&s.patchFlag&&o++,r=r.concat(ge(s.children,t,a))):(t||s.type!==zt)&&r.push(null!=a?fn(s,{key:a}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function ve(e,t){return(0,o.Tn)(e)?(()=>(0,o.X$)({name:e.name},t,{setup:e}))():e}const ye=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const be=e=>e.type.__isKeepAlive;RegExp,RegExp;function _e(e,t){return(0,o.cy)(e)?e.some((e=>_e(e,t))):(0,o.Kg)(e)?e.split(",").includes(t):!!(0,o.gd)(e)&&e.test(t)}function we(e,t){Ie(e,"a",t)}function Ee(e,t){Ie(e,"da",t)}function Ie(e,t,n=En){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Re(t,r,n),n){let e=n.parent;while(e&&e.parent)be(e.parent.vnode)&&Te(r,t,n,e),e=e.parent}}function Te(e,t,n,r){const i=Re(t,e,r,!0);Le((()=>{(0,o.TF)(r[t],i)}),n)}function Se(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Oe(e){return 128&e.shapeFlag?e.ssContent:e}function Re(e,t,n=En,o=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;(0,r.C4)();const i=On(n),a=s(t,n,e,o);return i(),(0,r.bl)(),a});return o?i.unshift(a):i.push(a),a}}const Ce=e=>(t,n=En)=>(!Pn||"sp"===e)&&Re(e,((...e)=>t(...e)),n),Ae=Ce("bm"),ke=Ce("m"),Pe=Ce("bu"),xe=Ce("u"),Ne=Ce("bum"),Le=Ce("um"),De=Ce("sp"),Me=Ce("rtg"),je=Ce("rtc");function Ue(e,t=En){Re("ec",e,t)}function Fe(e,t,n,r){let i;const s=n&&n[r];if((0,o.cy)(e)||(0,o.Kg)(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if((0,o.Gv)(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}const Be=e=>e?Cn(e)?Un(e)||e.proxy:Be(e.parent):null,$e=(0,o.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Be(e.parent),$root:e=>Be(e.root),$emit:e=>e.emit,$options:e=>Ze(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,_(e.update)}),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>ee.bind(e)}),Ve=(e,t)=>e!==o.MZ&&!e.__isScriptSetup&&(0,o.$3)(e,t),We={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:i,data:s,props:a,accessCache:c,type:u,appContext:l}=e;let f;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(Ve(i,t))return c[t]=1,i[t];if(s!==o.MZ&&(0,o.$3)(s,t))return c[t]=2,s[t];if((f=e.propsOptions[0])&&(0,o.$3)(f,t))return c[t]=3,a[t];if(n!==o.MZ&&(0,o.$3)(n,t))return c[t]=4,n[t];ze&&(c[t]=0)}}const d=$e[t];let h,p;return d?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),d(e)):(h=u.__cssModules)&&(h=h[t])?h:n!==o.MZ&&(0,o.$3)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,o.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Ve(i,t)?(i[t]=n,!0):r!==o.MZ&&(0,o.$3)(r,t)?(r[t]=n,!0):!(0,o.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let c;return!!n[a]||e!==o.MZ&&(0,o.$3)(e,a)||Ve(t,a)||(c=s[0])&&(0,o.$3)(c,a)||(0,o.$3)(r,a)||(0,o.$3)($e,a)||(0,o.$3)(i.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,o.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function He(e){return(0,o.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let ze=!0;function Ke(e){const t=Ze(e),n=e.proxy,i=e.ctx;ze=!1,t.beforeCreate&&Ge(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:f,created:d,beforeMount:h,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:_,destroyed:w,unmounted:E,render:I,renderTracked:T,renderTriggered:S,errorCaptured:O,serverPrefetch:R,expose:C,inheritAttrs:A,components:k,directives:P,filters:x}=t,N=null;if(f&&qe(f,i,N),c)for(const r in c){const e=c[r];(0,o.Tn)(e)&&(i[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,o.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(ze=!0,a)for(const r in a){const e=a[r],t=(0,o.Tn)(e)?e.bind(n,n):(0,o.Tn)(e.get)?e.get.bind(n,n):o.tE;0;const s=!(0,o.Tn)(e)&&(0,o.Tn)(e.set)?e.set.bind(n):o.tE,c=$n({get:t,set:s});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Je(u[r],i,n,r);if(l){const e=(0,o.Tn)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{lt(t,e[t])}))}function L(e,t){(0,o.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ge(d,e,"c"),L(Ae,h),L(ke,p),L(Pe,m),L(xe,g),L(we,v),L(Ee,y),L(Ue,O),L(je,T),L(Me,S),L(Ne,_),L(Le,E),L(De,R),(0,o.cy)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===o.tE&&(e.render=I),null!=A&&(e.inheritAttrs=A),k&&(e.components=k),P&&(e.directives=P)}function qe(e,t,n=o.tE){(0,o.cy)(e)&&(e=tt(e));for(const i in e){const n=e[i];let s;s=(0,o.Gv)(n)?"default"in n?ft(n.from||i,n.default,!0):ft(n.from||i):ft(n),(0,r.i9)(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}function Ge(e,t,n){s((0,o.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Je(e,t,n,r){const i=r.includes(".")?te(n,r):()=>n[r];if((0,o.Kg)(e)){const n=t[e];(0,o.Tn)(n)&&Q(i,n)}else if((0,o.Tn)(e))Q(i,e.bind(n));else if((0,o.Gv)(e))if((0,o.cy)(e))e.forEach((e=>Je(e,t,n,r)));else{const r=(0,o.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,o.Tn)(r)&&Q(i,r,e)}else 0}function Ze(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let u;return c?u=c:i.length||n||r?(u={},i.length&&i.forEach((e=>Xe(u,e,a,!0))),Xe(u,t,a)):u=t,(0,o.Gv)(t)&&s.set(t,u),u}function Xe(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&Xe(e,i,n,!0),o&&o.forEach((t=>Xe(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=Qe[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Qe={data:Ye,props:ot,emits:ot,methods:rt,computed:rt,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:rt,directives:rt,watch:it,provide:Ye,inject:et};function Ye(e,t){return t?e?function(){return(0,o.X$)((0,o.Tn)(e)?e.call(this,this):e,(0,o.Tn)(t)?t.call(this,this):t)}:t:e}function et(e,t){return rt(tt(e),tt(t))}function tt(e){if((0,o.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function nt(e,t){return e?[...new Set([].concat(e,t))]:t}function rt(e,t){return e?(0,o.X$)(Object.create(null),e,t):t}function ot(e,t){return e?(0,o.cy)(e)&&(0,o.cy)(t)?[...new Set([...e,...t])]:(0,o.X$)(Object.create(null),He(e),He(null!=t?t:{})):t}function it(e,t){if(!e)return t;if(!t)return e;const n=(0,o.X$)(Object.create(null),e);for(const r in t)n[r]=nt(e[r],t[r]);return n}function st(){return{app:null,config:{isNativeTag:o.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let at=0;function ct(e,t){return function(n,r=null){(0,o.Tn)(n)||(n=(0,o.X$)({},n)),null==r||(0,o.Gv)(r)||(r=null);const i=st(),s=new WeakSet;let a=!1;const c=i.app={_uid:at++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Wn,get config(){return i.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,o.Tn)(e.install)?(s.add(e),e.install(c,...t)):(0,o.Tn)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(o,s,u){if(!a){0;const l=cn(n,r);return l.appContext=i,!0===u?u="svg":!1===u&&(u=void 0),s&&t?t(l,o):e(l,o,u),a=!0,c._container=o,o.__vue_app__=c,Un(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){const t=ut;ut=c;try{return e()}finally{ut=t}}};return c}}let ut=null;function lt(e,t){if(En){let n=En.provides;const r=En.parent&&En.parent.provides;r===n&&(n=En.provides=Object.create(r)),n[e]=t}else 0}function ft(e,t,n=!1){const r=En||x;if(r||ut){const i=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ut._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,o.Tn)(t)?t.call(r&&r.proxy):t}else 0}const dt={},ht=()=>Object.create(dt),pt=e=>Object.getPrototypeOf(e)===dt;function mt(e,t,n,o=!1){const i={},s=ht();e.propsDefaults=Object.create(null),vt(e,t,i,s);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=o?i:(0,r.Gc)(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function gt(e,t,n,i){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.ux)(s),[l]=e.propsOptions;let f=!1;if(!(i||c>0)||16&c){let r;vt(e,t,s,a)&&(f=!0);for(const i in u)t&&((0,o.$3)(t,i)||(r=(0,o.Tg)(i))!==i&&(0,o.$3)(t,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(s[i]=yt(l,u,i,void 0,e,!0)):delete s[i]);if(a!==u)for(const e in a)t&&(0,o.$3)(t,e)||(delete a[e],f=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(P(e.emitsOptions,i))continue;const c=t[i];if(l)if((0,o.$3)(a,i))c!==a[i]&&(a[i]=c,f=!0);else{const t=(0,o.PT)(i);s[t]=yt(l,u,t,c,e,!1)}else c!==a[i]&&(a[i]=c,f=!0)}}f&&(0,r.hZ)(e.attrs,"set","")}function vt(e,t,n,i){const[s,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,o.SU)(r))continue;const l=t[r];let f;s&&(0,o.$3)(s,f=(0,o.PT)(r))?a&&a.includes(f)?(c||(c={}))[f]=l:n[f]=l:P(e.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const t=(0,r.ux)(n),i=c||o.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=yt(s,t,c,i[c],e,!(0,o.$3)(i,c))}}return u}function yt(e,t,n,r,i,s){const a=e[n];if(null!=a){const e=(0,o.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,o.Tn)(e)){const{propsDefaults:o}=i;if(n in o)r=o[n];else{const s=On(i);r=o[n]=e.call(null,t),s()}}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,o.Tg)(n)||(r=!0))}return r}function bt(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},c=[];let u=!1;if(!(0,o.Tn)(e)){const r=e=>{u=!0;const[n,r]=bt(e,t,!0);(0,o.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!u)return(0,o.Gv)(e)&&r.set(e,o.Oj),o.Oj;if((0,o.cy)(s))for(let f=0;f<s.length;f++){0;const e=(0,o.PT)(s[f]);_t(e)&&(a[e]=o.MZ)}else if(s){0;for(const e in s){const t=(0,o.PT)(e);if(_t(t)){const n=s[e],r=a[t]=(0,o.cy)(n)||(0,o.Tn)(n)?{type:n}:(0,o.X$)({},n);if(r){const e=It(Boolean,r.type),n=It(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,o.$3)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,o.Gv)(e)&&r.set(e,l),l}function _t(e){return"$"!==e[0]&&!(0,o.SU)(e)}function wt(e){if(null===e)return"null";if("function"===typeof e)return e.name||"";if("object"===typeof e){const t=e.constructor&&e.constructor.name;return t||""}return""}function Et(e,t){return wt(e)===wt(t)}function It(e,t){return(0,o.cy)(t)?t.findIndex((t=>Et(t,e))):(0,o.Tn)(t)&&Et(t,e)?0:-1}const Tt=e=>"_"===e[0]||"$stable"===e,St=e=>(0,o.cy)(e)?e.map(pn):[pn(e)],Ot=(e,t,n)=>{if(t._n)return t;const r=D(((...e)=>St(t(...e))),n);return r._c=!1,r},Rt=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Tt(i))continue;const n=e[i];if((0,o.Tn)(n))t[i]=Ot(i,n,r);else if(null!=n){0;const e=St(n);t[i]=()=>e}}},Ct=(e,t)=>{const n=St(t);e.slots.default=()=>n},At=(e,t)=>{const n=e.slots=ht();if(32&e.vnode.shapeFlag){const e=t._;e?((0,o.X$)(n,t),(0,o.yQ)(n,"_",e,!0)):Rt(t,n)}else t&&Ct(e,t)},kt=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=o.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,o.X$)(i,t),n||1!==e||delete i._):(s=!t.$stable,Rt(t,i)),a=t}else t&&(Ct(e,t),a={default:1});if(s)for(const o in i)Tt(o)||null!=a[o]||delete i[o]};function Pt(e,t,n,s,a=!1){if((0,o.cy)(e))return void e.forEach(((e,r)=>Pt(e,t&&((0,o.cy)(t)?t[r]:t),n,s,a)));if(ye(s)&&!a)return;const c=4&s.shapeFlag?Un(s.component)||s.component.proxy:s.el,u=a?null:c,{i:l,r:f}=e;const d=t&&t.r,h=l.refs===o.MZ?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==f&&((0,o.Kg)(d)?(h[d]=null,(0,o.$3)(p,d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,o.Tn)(f))i(f,l,12,[u,h]);else{const t=(0,o.Kg)(f),i=(0,r.i9)(f);if(t||i){const r=()=>{if(e.f){const n=t?(0,o.$3)(p,f)?p[f]:h[f]:f.value;a?(0,o.cy)(n)&&(0,o.TF)(n,c):(0,o.cy)(n)?n.includes(c)||n.push(c):t?(h[f]=[c],(0,o.$3)(p,f)&&(p[f]=h[f])):(f.value=[c],e.k&&(h[e.k]=f.value))}else t?(h[f]=u,(0,o.$3)(p,f)&&(p[f]=u)):i&&(f.value=u,e.k&&(h[e.k]=u))};u?(r.id=-1,Nt(r,n)):r()}else 0}}function xt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,o.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Nt=G;function Lt(e){return Dt(e)}function Dt(e,t){xt();const n=(0,o.We)();n.__VUE__=!0;const{insert:i,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:f,setElementText:d,parentNode:h,nextSibling:p,setScopeId:m=o.tE,insertStaticContent:g}=e,v=(e,t,n,r=null,o=null,i=null,s=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!rn(e,t)&&(r=Q(e),q(e,o,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:f}=t;switch(u){case Ht:y(e,t,n,r);break;case zt:b(e,t,n,r);break;case Kt:null==e&&w(t,n,r,s);break;case Wt:L(e,t,n,r,o,i,s,a,c);break;default:1&f?R(e,t,n,r,o,i,s,a,c):6&f?D(e,t,n,r,o,i,s,a,c):(64&f||128&f)&&u.process(e,t,n,r,o,i,s,a,c,te)}null!=l&&o&&Pt(l,e&&e.ref,i,t||e,!t)},y=(e,t,n,r)=>{if(null==e)i(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{null==e?i(t.el=l(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=p(e),i(e,n,r),e=o;i(t,n,r)},O=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},R=(e,t,n,r,o,i,s,a,c)=>{"svg"===t.type?s="svg":"math"===t.type&&(s="mathml"),null==e?C(t,n,r,o,i,s,a,c):P(e,t,o,i,s,a,c)},C=(e,t,n,r,s,u,l,f)=>{let h,p;const{props:m,shapeFlag:g,transition:v,dirs:y}=e;if(h=e.el=c(e.type,u,m&&m.is,m),8&g?d(h,e.children):16&g&&k(e.children,h,null,r,s,Mt(e,u),l,f),y&&re(e,null,r,"created"),A(h,e,e.scopeId,l,r),m){for(const t in m)"value"===t||(0,o.SU)(t)||a(h,t,null,m[t],u,e.children,r,s,X);"value"in m&&a(h,"value",null,m.value,u),(p=m.onVnodeBeforeMount)&&yn(p,r,e)}y&&re(e,null,r,"beforeMount");const b=Ut(s,v);b&&v.beforeEnter(h),i(h,t,n),((p=m&&m.onVnodeMounted)||b||y)&&Nt((()=>{p&&yn(p,r,e),b&&v.enter(h),y&&re(e,null,r,"mounted")}),s)},A=(e,t,n,r,o)=>{if(n&&m(e,n),r)for(let i=0;i<r.length;i++)m(e,r[i]);if(o){let n=o.subTree;if(t===n){const t=o.vnode;A(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},k=(e,t,n,r,o,i,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?mn(e[u]):pn(e[u]);v(null,c,t,n,r,o,i,s,a)}},P=(e,t,n,r,i,s,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:f,dirs:h}=t;l|=16&e.patchFlag;const p=e.props||o.MZ,m=t.props||o.MZ;let g;if(n&&jt(n,!1),(g=m.onVnodeBeforeUpdate)&&yn(g,n,t,e),h&&re(t,e,n,"beforeUpdate"),n&&jt(n,!0),f?x(e.dynamicChildren,f,u,n,r,Mt(t,i),s):c||W(e,t,u,null,n,r,Mt(t,i),s,!1),l>0){if(16&l)N(u,t,p,m,n,r,i);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,i),4&l&&a(u,"style",p.style,m.style,i),8&l){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const s=o[t],c=p[s],l=m[s];l===c&&"value"!==s||a(u,s,c,l,i,e.children,n,r,X)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=f||N(u,t,p,m,n,r,i);((g=m.onVnodeUpdated)||h)&&Nt((()=>{g&&yn(g,n,t,e),h&&re(t,e,n,"updated")}),r)},x=(e,t,n,r,o,i,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Wt||!rn(c,u)||70&c.shapeFlag)?h(c.el):n;v(c,u,l,null,r,o,i,s,!0)}},N=(e,t,n,r,i,s,c)=>{if(n!==r){if(n!==o.MZ)for(const u in n)(0,o.SU)(u)||u in r||a(e,u,n[u],null,c,t.children,i,s,X);for(const u in r){if((0,o.SU)(u))continue;const l=r[u],f=n[u];l!==f&&"value"!==u&&a(e,u,f,l,c,t.children,i,s,X)}"value"in r&&a(e,"value",n.value,r.value,c)}},L=(e,t,n,r,o,s,a,c,l)=>{const f=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(i(f,n,r),i(d,n,r),k(t.children||[],n,d,o,s,a,c,l)):h>0&&64&h&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,o,s,a,c),(null!=t.key||o&&t===o.subTree)&&Ft(e,t,!0)):W(e,t,n,d,o,s,a,c,l)},D=(e,t,n,r,o,i,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,s,c):j(t,n,r,o,i,s,c):U(e,t,c)},j=(e,t,n,r,o,i,s)=>{const a=e.component=wn(e,r,o);if(be(e)&&(a.ctx.renderer=te),xn(a),a.asyncDep){if(o&&o.registerDep(a,B),!e.el){const e=a.subTree=cn(zt);b(null,e,t,n)}}else B(a,e,t,n,o,i,s)},U=(e,t,n)=>{const r=t.component=e.component;if(F(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,E(r.update),r.effect.dirty=!0,r.update()}else t.el=e.el,r.vnode=t},B=(e,t,n,i,s,a,c)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:i,vnode:l}=e;{const n=$t(e);if(n)return t&&(t.el=l.el,V(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let f,d=t;0,jt(e,!1),t?(t.el=l.el,V(e,t,c)):t=l,n&&(0,o.DY)(n),(f=t.props&&t.props.onVnodeBeforeUpdate)&&yn(f,i,t,l),jt(e,!0);const p=M(e);0;const m=e.subTree;e.subTree=p,v(m,p,h(m.el),Q(m),e,s,a),t.el=p.el,null===d&&$(e,p.el),r&&Nt(r,s),(f=t.props&&t.props.onVnodeUpdated)&&Nt((()=>yn(f,i,t,l)),s)}else{let r;const{el:c,props:u}=t,{bm:l,m:f,parent:d}=e,h=ye(t);if(jt(e,!1),l&&(0,o.DY)(l),!h&&(r=u&&u.onVnodeBeforeMount)&&yn(r,d,t),jt(e,!0),c&&oe){const n=()=>{e.subTree=M(e),oe(c,e.subTree,e,s,null)};h?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=M(e);0,v(null,r,n,i,e,s,a),t.el=r.el}if(f&&Nt(f,s),!h&&(r=u&&u.onVnodeMounted)){const e=t;Nt((()=>yn(r,d,e)),s)}(256&t.shapeFlag||d&&ye(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Nt(e.a,s),e.isMounted=!0,t=n=i=null}},l=e.effect=new r.X2(u,o.tE,(()=>_(f)),e.scope),f=e.update=()=>{l.dirty&&l.run()};f.id=e.uid,jt(e,!0),f()},V=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,gt(e,t.props,o,n),kt(e,t.children,n),(0,r.C4)(),T(e),(0,r.bl)()},W=(e,t,n,r,o,i,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,f=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void z(u,f,n,r,o,i,s,a,c);if(256&h)return void H(u,f,n,r,o,i,s,a,c)}8&p?(16&l&&X(u,o,i),f!==u&&d(n,f)):16&l?16&p?z(u,f,n,r,o,i,s,a,c):X(u,o,i,!0):(8&l&&d(n,""),16&p&&k(f,n,r,o,i,s,a,c))},H=(e,t,n,r,i,s,a,c,u)=>{e=e||o.Oj,t=t||o.Oj;const l=e.length,f=t.length,d=Math.min(l,f);let h;for(h=0;h<d;h++){const r=t[h]=u?mn(t[h]):pn(t[h]);v(e[h],r,n,null,i,s,a,c,u)}l>f?X(e,i,s,!0,!1,d):k(t,n,r,i,s,a,c,u,d)},z=(e,t,n,r,i,s,a,c,u)=>{let l=0;const f=t.length;let d=e.length-1,h=f-1;while(l<=d&&l<=h){const r=e[l],o=t[l]=u?mn(t[l]):pn(t[l]);if(!rn(r,o))break;v(r,o,n,null,i,s,a,c,u),l++}while(l<=d&&l<=h){const r=e[d],o=t[h]=u?mn(t[h]):pn(t[h]);if(!rn(r,o))break;v(r,o,n,null,i,s,a,c,u),d--,h--}if(l>d){if(l<=h){const e=h+1,o=e<f?t[e].el:r;while(l<=h)v(null,t[l]=u?mn(t[l]):pn(t[l]),n,o,i,s,a,c,u),l++}}else if(l>h)while(l<=d)q(e[l],i,s,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=h;l++){const e=t[l]=u?mn(t[l]):pn(t[l]);null!=e.key&&g.set(e.key,l)}let y,b=0;const _=h-m+1;let w=!1,E=0;const I=new Array(_);for(l=0;l<_;l++)I[l]=0;for(l=p;l<=d;l++){const r=e[l];if(b>=_){q(r,i,s,!0);continue}let o;if(null!=r.key)o=g.get(r.key);else for(y=m;y<=h;y++)if(0===I[y-m]&&rn(r,t[y])){o=y;break}void 0===o?q(r,i,s,!0):(I[o-m]=l+1,o>=E?E=o:w=!0,v(r,t[o],n,null,i,s,a,c,u),b++)}const T=w?Bt(I):o.Oj;for(y=T.length-1,l=_-1;l>=0;l--){const e=m+l,o=t[e],d=e+1<f?t[e+1].el:r;0===I[l]?v(null,o,n,d,i,s,a,c,u):w&&(y<0||l!==T[y]?K(o,n,d,2):y--)}}},K=(e,t,n,r,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void K(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===Wt){i(s,t,n);for(let e=0;e<u.length;e++)K(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===Kt)return void I(e,t,n);const f=2!==r&&1&l&&c;if(f)if(0===r)c.beforeEnter(s),i(s,t,n),Nt((()=>c.enter(s)),o);else{const{leave:e,delayLeave:r,afterLeave:o}=c,a=()=>i(s,t,n),u=()=>{e(s,(()=>{a(),o&&o()}))};r?r(s,a,u):u()}else i(s,t,n)},q=(e,t,n,r=!1,o=!1)=>{const{type:i,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:f,dirs:d}=e;if(null!=a&&Pt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const h=1&l&&d,p=!ye(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&yn(m,t,e),6&l)Z(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);h&&re(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,o,te,r):u&&(i!==Wt||f>0&&64&f)?X(u,t,n,!1,!0):(i===Wt&&384&f||!o&&16&l)&&X(c,t,n),r&&G(e)}(p&&(m=s&&s.onVnodeUnmounted)||h)&&Nt((()=>{m&&yn(m,t,e),h&&re(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===Wt)return void J(n,r);if(t===Kt)return void O(e);const i=()=>{s(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,s=()=>t(n,i);r?r(e.el,i,s):s()}else i()},J=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},Z=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:a,um:c}=e;r&&(0,o.DY)(r),i.stop(),s&&(s.active=!1,q(a,e,t,n)),c&&Nt(c,t),Nt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,o=!1,i=0)=>{for(let s=i;s<e.length;s++)q(e[s],t,n,r,o)},Q=e=>6&e.shapeFlag?Q(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el);let Y=!1;const ee=(e,t,n)=>{null==e?t._vnode&&q(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),Y||(Y=!0,T(),S(),Y=!1),t._vnode=e},te={p:v,um:q,m:K,r:G,mt:j,mc:k,pc:W,pbc:x,n:Q,o:e};let ne,oe;return t&&([ne,oe]=t(te)),{render:ee,hydrate:ne,createApp:ct(ee,ne)}}function Mt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function jt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ut(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ft(e,t,n=!1){const r=e.children,i=t.children;if((0,o.cy)(r)&&(0,o.cy)(i))for(let o=0;o<r.length;o++){const e=r[o];let t=i[o];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[o]=mn(i[o]),t.el=e.el),n||Ft(e,t)),t.type===Ht&&(t.el=e.el)}}function Bt(e){const t=e.slice(),n=[0];let r,o,i,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}i=0,s=n.length-1;while(i<s)a=i+s>>1,e[n[a]]<c?i=a+1:s=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,s=n[i-1];while(i-- >0)n[i]=s,s=t[s];return n}function $t(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:$t(t)}const Vt=e=>e.__isTeleport;const Wt=Symbol.for("v-fgt"),Ht=Symbol.for("v-txt"),zt=Symbol.for("v-cmt"),Kt=Symbol.for("v-stc"),qt=[];let Gt=null;function Jt(e=!1){qt.push(Gt=e?null:[])}function Zt(){qt.pop(),Gt=qt[qt.length-1]||null}let Xt=1;function Qt(e){Xt+=e}function Yt(e){return e.dynamicChildren=Xt>0?Gt||o.Oj:null,Zt(),Xt>0&&Gt&&Gt.push(e),e}function en(e,t,n,r,o,i){return Yt(an(e,t,n,r,o,i,!0))}function tn(e,t,n,r,o){return Yt(cn(e,t,n,r,o,!0))}function nn(e){return!!e&&!0===e.__v_isVNode}function rn(e,t){return e.type===t.type&&e.key===t.key}const on=({key:e})=>null!=e?e:null,sn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,o.Kg)(e)||(0,r.i9)(e)||(0,o.Tn)(e)?{i:x,r:e,k:t,f:!!n}:e:null);function an(e,t=null,n=null,r=0,i=null,s=(e===Wt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&on(t),ref:t&&sn(t),scopeId:N,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:x};return c?(gn(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=(0,o.Kg)(n)?8:16),Xt>0&&!a&&Gt&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Gt.push(u),u}const cn=un;function un(e,t=null,n=null,i=0,s=null,a=!1){if(e&&e!==H||(e=zt),nn(e)){const r=fn(e,t,!0);return n&&gn(r,n),Xt>0&&!a&&Gt&&(6&r.shapeFlag?Gt[Gt.indexOf(e)]=r:Gt.push(r)),r.patchFlag|=-2,r}if(Bn(e)&&(e=e.__vccOpts),t){t=ln(t);let{class:e,style:n}=t;e&&!(0,o.Kg)(e)&&(t.class=(0,o.C4)(e)),(0,o.Gv)(n)&&((0,r.ju)(n)&&!(0,o.cy)(n)&&(n=(0,o.X$)({},n)),t.style=(0,o.Tr)(n))}const c=(0,o.Kg)(e)?1:q(e)?128:Vt(e)?64:(0,o.Gv)(e)?4:(0,o.Tn)(e)?2:0;return an(e,t,n,i,s,c,a,!0)}function ln(e){return e?(0,r.ju)(e)||pt(e)?(0,o.X$)({},e):e:null}function fn(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:a,children:c,transition:u}=e,l=t?vn(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&on(l),ref:t&&t.ref?n&&s?(0,o.cy)(s)?s.concat(sn(t)):[s,sn(t)]:sn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Wt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&fn(e.ssContent),ssFallback:e.ssFallback&&fn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&(f.transition=u.clone(f)),f}function dn(e=" ",t=0){return cn(Ht,null,e,t)}function hn(e="",t=!1){return t?(Jt(),tn(zt,null,e)):cn(zt,null,e)}function pn(e){return null==e||"boolean"===typeof e?cn(zt):(0,o.cy)(e)?cn(Wt,null,e.slice()):"object"===typeof e?mn(e):cn(Ht,null,String(e))}function mn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:fn(e)}function gn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,o.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),gn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||pt(t)?3===r&&x&&(1===x.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=x}}else(0,o.Tn)(t)?(t={default:t,_ctx:x},n=32):(t=String(t),64&r?(n=16,t=[dn(t)]):n=8);e.children=t,e.shapeFlag|=n}function vn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,o.C4)([t.class,r.class]));else if("style"===e)t.style=(0,o.Tr)([t.style,r.style]);else if((0,o.Mp)(e)){const n=t[e],i=r[e];!i||n===i||(0,o.cy)(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function yn(e,t,n,r=null){s(e,t,7,[n,r])}const bn=st();let _n=0;function wn(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||bn,a={uid:_n++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bt(i,s),emitsOptions:k(i,s),emit:null,emitted:null,propsDefaults:o.MZ,inheritAttrs:i.inheritAttrs,ctx:o.MZ,data:o.MZ,props:o.MZ,attrs:o.MZ,slots:o.MZ,refs:o.MZ,setupState:o.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=A.bind(null,a),e.ce&&e.ce(a),a}let En=null;const In=()=>En||x;let Tn,Sn;{const e=(0,o.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};Tn=t("__VUE_INSTANCE_SETTERS__",(e=>En=e)),Sn=t("__VUE_SSR_SETTERS__",(e=>Pn=e))}const On=e=>{const t=En;return Tn(e),e.scope.on(),()=>{e.scope.off(),Tn(t)}},Rn=()=>{En&&En.scope.off(),Tn(null)};function Cn(e){return 4&e.vnode.shapeFlag}let An,kn,Pn=!1;function xn(e,t=!1){t&&Sn(t);const{props:n,children:r}=e.vnode,o=Cn(e);mt(e,n,o,t),At(e,r);const i=o?Nn(e,t):void 0;return t&&Sn(!1),i}function Nn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,We);const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?jn(e):null,c=On(e);(0,r.C4)();const u=i(s,e,0,[e.props,n]);if((0,r.bl)(),c(),(0,o.yL)(u)){if(u.then(Rn,Rn),t)return u.then((n=>{Ln(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=u}else Ln(e,u,t)}else Dn(e,t)}function Ln(e,t,n){(0,o.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,o.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),Dn(e,n)}function Dn(e,t,n){const i=e.type;if(!e.render){if(!t&&An&&!i.render){const t=i.template||Ze(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=(0,o.X$)((0,o.X$)({isCustomElement:n,delimiters:s},r),a);i.render=An(t,c)}}e.render=i.render||o.tE,kn&&kn(e)}{const t=On(e);(0,r.C4)();try{Ke(e)}finally{(0,r.bl)(),t()}}}const Mn={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function jn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Mn),slots:e.slots,emit:e.emit,expose:t}}function Un(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in $e?$e[n](e):void 0},has(e,t){return t in e||t in $e}}))}function Fn(e,t=!0){return(0,o.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Bn(e){return(0,o.Tn)(e)&&"__vccOpts"in e}const $n=(e,t)=>{const n=(0,r.EW)(e,t,Pn);return n};function Vn(e,t,n){const r=arguments.length;return 2===r?(0,o.Gv)(t)&&!(0,o.cy)(t)?nn(t)?cn(e,null,[t]):cn(e,t):cn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&nn(n)&&(n=[n]),cn(e,t,n))}const Wn="3.4.27"},5130:function(e,t,n){n.d(t,{Ef:function(){return ve}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),o=n(4232),i=n(144);
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const s="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,u=c&&c.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o="svg"===t?c.createElementNS(s,e):"mathml"===t?c.createElementNS(a,e):c.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:e=>c.createTextNode(e),createComment:e=>c.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>c.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const s=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling)){while(1)if(t.insertBefore(o.cloneNode(!0),n),o===i||!(o=o.nextSibling))break}else{u.innerHTML="svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e;const o=u.content;if("svg"===r||"mathml"===r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},f="transition",d="animation",h=Symbol("_vtc"),p=(e,{slots:t})=>(0,r.h)(r.pR,b(e),t);p.displayName="Transition";const m={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},g=p.props=(0,o.X$)({},r.QP,m),v=(e,t=[])=>{(0,o.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},y=e=>!!e&&((0,o.cy)(e)?e.some((e=>e.length>1)):e.length>1);function b(e){const t={};for(const o in e)o in m||(t[o]=e[o]);if(!1===e.css)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:l=a,appearToClass:f=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=_(i),b=g&&g[0],w=g&&g[1],{onBeforeEnter:S,onEnter:R,onEnterCancelled:C,onLeave:A,onLeaveCancelled:P,onBeforeAppear:x=S,onAppear:N=R,onAppearCancelled:L=C}=t,D=(e,t,n)=>{I(e,t?f:c),I(e,t?l:a),n&&n()},M=(e,t)=>{e._isLeaving=!1,I(e,d),I(e,p),I(e,h),t&&t()},j=e=>(t,n)=>{const o=e?N:R,i=()=>D(t,e,n);v(o,[t,i]),T((()=>{I(t,e?u:s),E(t,e?f:c),y(o)||O(t,r,b,i)}))};return(0,o.X$)(t,{onBeforeEnter(e){v(S,[e]),E(e,s),E(e,a)},onBeforeAppear(e){v(x,[e]),E(e,u),E(e,l)},onEnter:j(!1),onAppear:j(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>M(e,t);E(e,d),E(e,h),k(),T((()=>{e._isLeaving&&(I(e,d),E(e,p),y(A)||O(e,r,w,n))})),v(A,[e,n])},onEnterCancelled(e){D(e,!1),v(C,[e])},onAppearCancelled(e){D(e,!0),v(L,[e])},onLeaveCancelled(e){M(e),v(P,[e])}})}function _(e){if(null==e)return null;if((0,o.Gv)(e))return[w(e.enter),w(e.leave)];{const t=w(e);return[t,t]}}function w(e){const t=(0,o.Ro)(e);return t}function E(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[h]||(e[h]=new Set)).add(t)}function I(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[h];n&&(n.delete(t),n.size||(e[h]=void 0))}function T(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let S=0;function O(e,t,n,r){const o=e._endId=++S,i=()=>{o===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:c}=R(e,t);if(!s)return r();const u=s+"end";let l=0;const f=()=>{e.removeEventListener(u,d),i()},d=t=>{t.target===e&&++l>=c&&f()};setTimeout((()=>{l<c&&f()}),a+1),e.addEventListener(u,d)}function R(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r(`${f}Delay`),i=r(`${f}Duration`),s=C(o,i),a=r(`${d}Delay`),c=r(`${d}Duration`),u=C(a,c);let l=null,h=0,p=0;t===f?s>0&&(l=f,h=s,p=i.length):t===d?u>0&&(l=d,h=u,p=c.length):(h=Math.max(s,u),l=h>0?s>u?f:d:null,p=l?l===f?i.length:c.length:0);const m=l===f&&/\b(transform|all)(,|$)/.test(r(`${f}Property`).toString());return{type:l,timeout:h,propCount:p,hasTransform:m}}function C(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>A(t)+A(e[n]))))}function A(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function k(){return document.body.offsetHeight}function P(e,t,n){const r=e[h];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const x=Symbol("_vod"),N=Symbol("_vsh");const L=Symbol("");const D=/(^|;)\s*display\s*:/;function M(e,t,n){const r=e.style,i=(0,o.Kg)(n);let s=!1;if(n&&!i){if(t)if((0,o.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&U(r,t,"")}else for(const e in t)null==n[e]&&U(r,e,"");for(const e in n)"display"===e&&(s=!0),U(r,e,n[e])}else if(i){if(t!==n){const e=r[L];e&&(n+=";"+e),r.cssText=n,s=D.test(n)}}else t&&e.removeAttribute("style");x in e&&(e[x]=s?r.display:"",e[N]&&(r.display="none"))}const j=/\s*!important$/;function U(e,t,n){if((0,o.cy)(n))n.forEach((n=>U(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=$(e,t);j.test(n)?e.setProperty((0,o.Tg)(r),n.replace(j,""),"important"):e[r]=n}}const F=["Webkit","Moz","ms"],B={};function $(e,t){const n=B[t];if(n)return n;let r=(0,o.PT)(t);if("filter"!==r&&r in e)return B[t]=r;r=(0,o.ZH)(r);for(let o=0;o<F.length;o++){const n=F[o]+r;if(n in e)return B[t]=n}return t}const V="http://www.w3.org/1999/xlink";function W(e,t,n,r,i){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(V,t.slice(6,t.length)):e.setAttributeNS(V,t,n);else{const r=(0,o.J$)(t);null==n||r&&!(0,o.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function H(e,t,n,r,i,s,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,i,s),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){const r="OPTION"===c?e.getAttribute("value")||"":e.value,o=null==n?"":n;return r===o&&"_value"in e||(e.value=o),null==n&&e.removeAttribute(t),void(e._value=n)}let u=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,o.Y2)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}function z(e,t,n,r){e.addEventListener(t,n,r)}function K(e,t,n,r){e.removeEventListener(t,n,r)}const q=Symbol("_vei");function G(e,t,n,r,o=null){const i=e[q]||(e[q]={}),s=i[t];if(r&&s)s.value=r;else{const[n,a]=Z(t);if(r){const s=i[t]=ee(r,o);z(e,n,s,a)}else s&&(K(e,n,s,a),i[t]=void 0)}}const J=/(?:Once|Passive|Capture)$/;function Z(e){let t;if(J.test(e)){let n;t={};while(n=e.match(J))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,o.Tg)(e.slice(2));return[n,t]}let X=0;const Q=Promise.resolve(),Y=()=>X||(Q.then((()=>X=0)),X=Date.now());function ee(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(te(e,n.value),t,5,[e])};return n.value=e,n.attached=Y(),n}function te(e,t){if((0,o.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ne=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,re=(e,t,n,r,i,s,a,c,u)=>{const l="svg"===i;"class"===t?P(e,r,l):"style"===t?M(e,n,r):(0,o.Mp)(t)?(0,o.CP)(t)||G(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):oe(e,t,r,l))?H(e,t,r,s,a,c,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),W(e,t,r,l))};function oe(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&ne(t)&&(0,o.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!ne(t)||!(0,o.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const ie=new WeakMap,se=new WeakMap,ae=Symbol("_moveCb"),ce=Symbol("_enterCb"),ue={name:"TransitionGroup",props:(0,o.X$)({},g,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.nI)(),o=(0,r.Gy)();let s,a;return(0,r.$u)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!he(s[0].el,n.vnode.el,t))return;s.forEach(le),s.forEach(fe);const r=s.filter(de);k(),r.forEach((e=>{const n=e.el,r=n.style;E(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const o=n[ae]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",o),n[ae]=null,I(n,t))};n.addEventListener("transitionend",o)}))})),()=>{const c=(0,i.ux)(e),u=b(c);let l=c.tag||r.FK;if(s=[],a)for(let e=0;e<a.length;e++){const t=a[e];t.el&&t.el instanceof Element&&(s.push(t),(0,r.MZ)(t,(0,r.OW)(t,u,o,n)),ie.set(t,t.el.getBoundingClientRect()))}a=t.default?(0,r.Df)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.MZ)(t,(0,r.OW)(t,u,o,n))}return(0,r.bF)(l,null,a)}}};ue.props;function le(e){const t=e.el;t[ae]&&t[ae](),t[ce]&&t[ce]()}function fe(e){se.set(e,e.el.getBoundingClientRect())}function de(e){const t=ie.get(e),n=se.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${o}px)`,t.transitionDuration="0s",e}}function he(e,t,n){const r=e.cloneNode(),o=e[h];o&&o.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=R(r);return i.removeChild(r),s}Symbol("_assign");const pe=(0,o.X$)({patchProp:re},l);let me;function ge(){return me||(me=(0,r.K9)(pe))}const ve=(...e)=>{const t=ge().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=be(e);if(!r)return;const i=t._component;(0,o.Tn)(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,ye(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function ye(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function be(e){if((0,o.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){n.d(t,{$3:function(){return h},$H:function(){return j},BH:function(){return z},BX:function(){return ne},Bm:function(){return w},C4:function(){return X},CE:function(){return m},CP:function(){return u},DY:function(){return U},Gv:function(){return E},J$:function(){return Y},Kg:function(){return _},MZ:function(){return o},Mp:function(){return c},NO:function(){return a},Oj:function(){return i},PT:function(){return x},Qd:function(){return R},Ro:function(){return $},SU:function(){return A},TF:function(){return f},Tg:function(){return L},Tn:function(){return b},Tr:function(){return K},We:function(){return W},X$:function(){return l},Y2:function(){return ee},ZH:function(){return D},Zf:function(){return O},bB:function(){return B},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return M},tE:function(){return s},u3:function(){return re},vM:function(){return g},v_:function(){return oe},yI:function(){return C},yL:function(){return I},yQ:function(){return F}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}const o={},i=[],s=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),l=Object.assign,f=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,h=(e,t)=>d.call(e,t),p=Array.isArray,m=e=>"[object Map]"===S(e),g=e=>"[object Set]"===S(e),v=e=>"[object Date]"===S(e),y=e=>"[object RegExp]"===S(e),b=e=>"function"===typeof e,_=e=>"string"===typeof e,w=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,I=e=>(E(e)||b(e))&&b(e.then)&&b(e.catch),T=Object.prototype.toString,S=e=>T.call(e),O=e=>S(e).slice(8,-1),R=e=>"[object Object]"===S(e),C=e=>_(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,A=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},P=/-(\w)/g,x=k((e=>e.replace(P,((e,t)=>t?t.toUpperCase():"")))),N=/\B([A-Z])/g,L=k((e=>e.replace(N,"-$1").toLowerCase())),D=k((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=k((e=>{const t=e?`on${D(e)}`:"";return t})),j=(e,t)=>!Object.is(e,t),U=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},F=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},B=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$=e=>{const t=_(e)?Number(e):NaN;return isNaN(t)?e:t};let V;const W=()=>V||(V="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",z=r(H);function K(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=_(r)?Z(r):K(r);if(o)for(const e in o)t[e]=o[e]}return t}if(_(e)||E(e))return e}const q=/;(?![^(]*\))/g,G=/:([^]+)/,J=/\/\*[^]*?\*\//g;function Z(e){const t={};return e.replace(J,"").split(q).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function X(e){let t="";if(_(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=X(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Q="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Y=r(Q);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=w(e),r=w(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const oe=e=>_(e)?e:null==e?"":p(e)||E(e)&&(e.toString===T||!b(e.toString))?JSON.stringify(e,ie,2):String(e),ie=(e,t)=>t&&t.__v_isRef?ie(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[se(t,r)+" =>"]=n,e)),{})}:g(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>se(e)))}:w(t)?se(t):!E(t)||p(t)||R(t)?t:String(t),se=(e,t="")=>{var n;return w(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},1241:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},9306:function(e,t,n){var r=n(4901),o=n(6823),i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not a function")}},3506:function(e,t,n){var r=n(3925),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw new i("Can't set "+o(e)+" as a prototype")}},7080:function(e,t,n){var r=n(4402).has;e.exports=function(e){return r(e),e}},679:function(e,t,n){var r=n(1625),o=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new o("Incorrect invocation")}},8551:function(e,t,n){var r=n(34),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not an object")}},7811:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(e,t,n){var r=n(6706),o=n(4576),i=TypeError;e.exports=r(ArrayBuffer.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==o(e))throw new i("ArrayBuffer expected");return e.byteLength}},3238:function(e,t,n){var r=n(9504),o=n(7394),i=r(ArrayBuffer.prototype.slice);e.exports=function(e){if(0!==o(e))return!1;try{return i(e,0,0),!1}catch(t){return!0}}},5636:function(e,t,n){var r=n(4475),o=n(9504),i=n(6706),s=n(7696),a=n(3238),c=n(7394),u=n(4483),l=n(1548),f=r.structuredClone,d=r.ArrayBuffer,h=r.DataView,p=r.TypeError,m=Math.min,g=d.prototype,v=h.prototype,y=o(g.slice),b=i(g,"resizable","get"),_=i(g,"maxByteLength","get"),w=o(v.getInt8),E=o(v.setInt8);e.exports=(l||u)&&function(e,t,n){var r,o=c(e),i=void 0===t?o:s(t),g=!b||!b(e);if(a(e))throw new p("ArrayBuffer is detached");if(l&&(e=f(e,{transfer:[e]}),o===i&&(n||g)))return e;if(o>=i&&(!n||g))r=y(e,0,i);else{var v=n&&!g&&_?{maxByteLength:_(e)}:void 0;r=new d(i,v);for(var I=new h(e),T=new h(r),S=m(i,o),O=0;O<S;O++)E(T,O,w(I,O))}return l||u(e),r}},4644:function(e,t,n){var r,o,i,s=n(7811),a=n(3724),c=n(4475),u=n(4901),l=n(34),f=n(9297),d=n(6955),h=n(6823),p=n(6699),m=n(6840),g=n(2106),v=n(1625),y=n(2787),b=n(2967),_=n(8227),w=n(3392),E=n(1181),I=E.enforce,T=E.get,S=c.Int8Array,O=S&&S.prototype,R=c.Uint8ClampedArray,C=R&&R.prototype,A=S&&y(S),k=O&&y(O),P=Object.prototype,x=c.TypeError,N=_("toStringTag"),L=w("TYPED_ARRAY_TAG"),D="TypedArrayConstructor",M=s&&!!b&&"Opera"!==d(c.opera),j=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},B=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||f(U,t)||f(F,t)},$=function(e){var t=y(e);if(l(t)){var n=T(t);return n&&f(n,D)?n[D]:$(t)}},V=function(e){if(!l(e))return!1;var t=d(e);return f(U,t)||f(F,t)},W=function(e){if(V(e))return e;throw new x("Target is not a typed array")},H=function(e){if(u(e)&&(!b||v(A,e)))return e;throw new x(h(e)+" is not a typed array constructor")},z=function(e,t,n,r){if(a){if(n)for(var o in U){var i=c[o];if(i&&f(i.prototype,e))try{delete i.prototype[e]}catch(s){try{i.prototype[e]=t}catch(u){}}}k[e]&&!n||m(k,e,n?t:M&&O[e]||t,r)}},K=function(e,t,n){var r,o;if(a){if(b){if(n)for(r in U)if(o=c[r],o&&f(o,e))try{delete o[e]}catch(i){}if(A[e]&&!n)return;try{return m(A,e,n?t:M&&A[e]||t)}catch(i){}}for(r in U)o=c[r],!o||o[e]&&!n||m(o,e,t)}};for(r in U)o=c[r],i=o&&o.prototype,i?I(i)[D]=o:M=!1;for(r in F)o=c[r],i=o&&o.prototype,i&&(I(i)[D]=o);if((!M||!u(A)||A===Function.prototype)&&(A=function(){throw new x("Incorrect invocation")},M))for(r in U)c[r]&&b(c[r],A);if((!M||!k||k===P)&&(k=A.prototype,M))for(r in U)c[r]&&b(c[r].prototype,k);if(M&&y(C)!==k&&b(C,k),a&&!f(k,N))for(r in j=!0,g(k,N,{configurable:!0,get:function(){return l(this)?this[L]:void 0}}),U)c[r]&&p(c[r],L,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:j&&L,aTypedArray:W,aTypedArrayConstructor:H,exportTypedArrayMethod:z,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:$,isView:B,isTypedArray:V,TypedArray:A,TypedArrayPrototype:k}},5370:function(e,t,n){var r=n(6198);e.exports=function(e,t,n){var o=0,i=arguments.length>2?n:r(t),s=new e(i);while(i>o)s[o]=t[o++];return s}},9617:function(e,t,n){var r=n(5397),o=n(5610),i=n(6198),s=function(e){return function(t,n,s){var a=r(t),c=i(a);if(0===c)return!e&&-1;var u,l=o(s,c);if(e&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},4527:function(e,t,n){var r=n(3724),o=n(4376),i=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(o(e)&&!s(e,"length").writable)throw new i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7628:function(e,t,n){var r=n(6198);e.exports=function(e,t){for(var n=r(e),o=new t(n),i=0;i<n;i++)o[i]=e[n-i-1];return o}},9928:function(e,t,n){var r=n(6198),o=n(1291),i=RangeError;e.exports=function(e,t,n,s){var a=r(e),c=o(n),u=c<0?a+c:c;if(u>=a||u<0)throw new i("Incorrect index");for(var l=new t(a),f=0;f<a;f++)l[f]=f===u?s:e[f];return l}},4576:function(e,t,n){var r=n(9504),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},6955:function(e,t,n){var r=n(2140),o=n(4901),i=n(4576),s=n(8227),a=s("toStringTag"),c=Object,u="Arguments"===i(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?i(t):"Object"===(r=i(t))&&o(t.callee)?"Arguments":r}},7740:function(e,t,n){var r=n(9297),o=n(5031),i=n(7347),s=n(4913);e.exports=function(e,t,n){for(var a=o(t),c=s.f,u=i.f,l=0;l<a.length;l++){var f=a[l];r(e,f)||n&&r(n,f)||c(e,f,u(t,f))}}},2211:function(e,t,n){var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},6699:function(e,t,n){var r=n(3724),o=n(4913),i=n(6980);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2106:function(e,t,n){var r=n(283),o=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},6840:function(e,t,n){var r=n(4901),o=n(4913),i=n(283),s=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&i(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9433:function(e,t,n){var r=n(4475),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(e,t,n){var r,o,i,s,a=n(4475),c=n(9714),u=n(1548),l=a.structuredClone,f=a.ArrayBuffer,d=a.MessageChannel,h=!1;if(u)h=function(e){l(e,{transfer:[e]})};else if(f)try{d||(r=c("worker_threads"),r&&(d=r.MessageChannel)),d&&(o=new d,i=new f(2),s=function(e){o.port1.postMessage(null,[e])},2===i.byteLength&&(s(i),0===i.byteLength&&(h=s)))}catch(p){}e.exports=h},4055:function(e,t,n){var r=n(4475),o=n(34),i=r.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7290:function(e,t,n){var r=n(516),o=n(9088);e.exports=!r&&!o&&"object"==typeof window&&"object"==typeof document},516:function(e){e.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},9088:function(e,t,n){var r=n(4475),o=n(4576);e.exports="process"===o(r.process)},9392:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(e,t,n){var r,o,i=n(4475),s=n(9392),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(e,t,n){var r=n(9504),o=Error,i=r("".replace),s=function(e){return String(new o(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!o.prepareStackTrace)while(t--)e=i(e,a,"");return e}},6518:function(e,t,n){var r=n(4475),o=n(7347).f,i=n(6699),s=n(6840),a=n(9433),c=n(7740),u=n(2796);e.exports=function(e,t){var n,l,f,d,h,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):r[m]&&r[m].prototype,l)for(f in t){if(h=t[f],e.dontCallGetSet?(p=o(l,f),d=p&&p.value):d=l[f],n=u(g?f:m+(v?".":"#")+f,e.forced),!n&&void 0!==d){if(typeof h==typeof d)continue;c(h,d)}(e.sham||d&&d.sham)&&i(h,"sham",!0),s(l,f,h,e)}}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){var r=n(616),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},350:function(e,t,n){var r=n(3724),o=n(9297),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(i,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(e,t,n){var r=n(9504),o=n(9306);e.exports=function(e,t,n){try{return r(o(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(i){}}},9504:function(e,t,n){var r=n(616),o=Function.prototype,i=o.call,s=r&&o.bind.bind(i,i);e.exports=r?s:function(e){return function(){return i.apply(e,arguments)}}},7751:function(e,t,n){var r=n(4475),o=n(4901),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},1767:function(e){e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},5966:function(e,t,n){var r=n(9306),o=n(4117);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},3789:function(e,t,n){var r=n(9306),o=n(8551),i=n(9565),s=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,f=Math.max,d=function(e,t){this.set=e,this.size=f(t,0),this.has=r(e.has),this.keys=r(e.keys)};d.prototype={getIterator:function(){return a(o(i(this.keys,this.set)))},includes:function(e){return i(this.has,this.set,e)}},e.exports=function(e){o(e);var t=+e.size;if(t!==t)throw new l(c);var n=s(t);if(n<0)throw new u(c);return new d(e,n)}},4475:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),o=n(8981),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},421:function(e){e.exports={}},5917:function(e,t,n){var r=n(3724),o=n(9039),i=n(4055);e.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){var r=n(9504),o=n(9039),i=n(4576),s=Object,a=r("".split);e.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"===i(e)?a(e,""):s(e)}:s},3167:function(e,t,n){var r=n(4901),o=n(34),i=n(2967);e.exports=function(e,t,n){var s,a;return i&&r(s=t.constructor)&&s!==n&&o(a=s.prototype)&&a!==n.prototype&&i(e,a),e}},3706:function(e,t,n){var r=n(9504),o=n(4901),i=n(7629),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return s(e)}),e.exports=i.inspectSource},1181:function(e,t,n){var r,o,i,s=n(8622),a=n(4475),c=n(34),u=n(6699),l=n(9297),f=n(7629),d=n(6119),h=n(421),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return i(e)?o(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=o(t)).type!==e)throw new m("Incompatible receiver, "+e+" required");return n}};if(s||f.state){var b=f.state||(f.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw new m(p);return t.facade=e,b.set(e,t),t},o=function(e){return b.get(e)||{}},i=function(e){return b.has(e)}}else{var _=d("state");h[_]=!0,r=function(e,t){if(l(e,_))throw new m(p);return t.facade=e,u(e,_,t),t},o=function(e){return l(e,_)?e[_]:{}},i=function(e){return l(e,_)}}e.exports={set:r,get:o,has:i,enforce:v,getterFor:y}},4376:function(e,t,n){var r=n(4576);e.exports=Array.isArray||function(e){return"Array"===r(e)}},1108:function(e,t,n){var r=n(6955);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){var r=n(9039),o=n(4901),i=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n===l||n!==u&&(o(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},4117:function(e){e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){e.exports=!1},757:function(e,t,n){var r=n(7751),o=n(4901),i=n(1625),s=n(7040),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,a(e))}},507:function(e,t,n){var r=n(9565);e.exports=function(e,t,n){var o,i,s=n?e:e.iterator,a=e.next;while(!(o=r(a,s)).done)if(i=t(o.value),void 0!==i)return i}},9539:function(e,t,n){var r=n(9565),o=n(8551),i=n(5966);e.exports=function(e,t,n){var s,a;o(e);try{if(s=i(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return o(s),n}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){var r=n(9504),o=n(9039),i=n(4901),s=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),f=l.enforce,d=l.get,h=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),v=r([].join),y=a&&!o((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),_=e.exports=function(e,t,n){"Symbol("===m(h(t),0,7)&&(t="["+g(h(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=f(e);return s(r,"source")||(r.source=v(b,"string"==typeof t?t:"")),e};Function.prototype.toString=_((function(){return i(this)&&d(this).source||u(this)}),"toString")},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2603:function(e,t,n){var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},4913:function(e,t,n){var r=n(3724),o=n(5917),i=n(8686),s=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",h="writable";t.f=r?i?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&h in n&&!n[h]){var r=l(e,t);r&&r[h]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:f in n?n[f]:r[f],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){var r=n(3724),o=n(9565),i=n(8773),s=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=a(e),t=c(t),l)try{return f(e,t)}catch(n){}if(u(e,t))return s(!o(i.f,e,t),e[t])}},8480:function(e,t,n){var r=n(1828),o=n(8727),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},3717:function(e,t){t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){var r=n(9297),o=n(4901),i=n(8981),s=n(6119),a=n(2211),c=s("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=i(e);if(r(t,c))return t[c];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),o=n(9297),i=n(5397),s=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&c(l,n);while(t.length>u)o(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){var r=n(6706),o=n(34),i=n(7750),s=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return i(n),s(r),o(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(e,t,n){var r=n(9565),o=n(4901),i=n(34),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&o(n=e.toString)&&!i(a=r(n,e)))return a;if(o(n=e.valueOf)&&!i(a=r(n,e)))return a;if("string"!==t&&o(n=e.toString)&&!i(a=r(n,e)))return a;throw new s("Can't convert object to primitive value")}},5031:function(e,t,n){var r=n(7751),o=n(9504),i=n(8480),s=n(3717),a=n(8551),c=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=s.f;return n?c(t,n(e)):t}},7750:function(e,t,n){var r=n(4117),o=TypeError;e.exports=function(e){if(r(e))throw new o("Can't call method on "+e);return e}},9286:function(e,t,n){var r=n(4402),o=n(8469),i=r.Set,s=r.add;e.exports=function(e){var t=new i;return o(e,(function(e){s(t,e)})),t}},3440:function(e,t,n){var r=n(7080),o=n(4402),i=n(9286),s=n(5170),a=n(3789),c=n(8469),u=n(507),l=o.has,f=o.remove;e.exports=function(e){var t=r(this),n=a(e),o=i(t);return s(t)<=n.size?c(t,(function(e){n.includes(e)&&f(o,e)})):u(n.getIterator(),(function(e){l(t,e)&&f(o,e)})),o}},4402:function(e,t,n){var r=n(9504),o=Set.prototype;e.exports={Set:Set,add:r(o.add),has:r(o.has),remove:r(o["delete"]),proto:o}},8750:function(e,t,n){var r=n(7080),o=n(4402),i=n(5170),s=n(3789),a=n(8469),c=n(507),u=o.Set,l=o.add,f=o.has;e.exports=function(e){var t=r(this),n=s(e),o=new u;return i(t)>n.size?c(n.getIterator(),(function(e){f(t,e)&&l(o,e)})):a(t,(function(e){n.includes(e)&&l(o,e)})),o}},4449:function(e,t,n){var r=n(7080),o=n(4402).has,i=n(5170),s=n(3789),a=n(8469),c=n(507),u=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(i(t)<=n.size)return!1!==a(t,(function(e){if(n.includes(e))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(e){if(o(t,e))return u(l,"normal",!1)}))}},3838:function(e,t,n){var r=n(7080),o=n(5170),i=n(8469),s=n(3789);e.exports=function(e){var t=r(this),n=s(e);return!(o(t)>n.size)&&!1!==i(t,(function(e){if(!n.includes(e))return!1}),!0)}},8527:function(e,t,n){var r=n(7080),o=n(4402).has,i=n(5170),s=n(3789),a=n(507),c=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(i(t)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(e){if(!o(t,e))return c(u,"normal",!1)}))}},8469:function(e,t,n){var r=n(9504),o=n(507),i=n(4402),s=i.Set,a=i.proto,c=r(a.forEach),u=r(a.keys),l=u(new s).next;e.exports=function(e,t,n){return n?o({iterator:u(e),next:l},t):c(e,t)}},4916:function(e,t,n){var r=n(7751),o=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};e.exports=function(e){var t=r("Set");try{(new t)[e](o(0));try{return(new t)[e](o(-1)),!1}catch(n){return!0}}catch(i){return!1}}},5170:function(e,t,n){var r=n(6706),o=n(4402);e.exports=r(o.proto,"size","get")||function(e){return e.size}},3650:function(e,t,n){var r=n(7080),o=n(4402),i=n(9286),s=n(3789),a=n(507),c=o.add,u=o.has,l=o.remove;e.exports=function(e){var t=r(this),n=s(e).getIterator(),o=i(t);return a(n,(function(e){u(t,e)?l(o,e):c(o,e)})),o}},4204:function(e,t,n){var r=n(7080),o=n(4402).add,i=n(9286),s=n(3789),a=n(507);e.exports=function(e){var t=r(this),n=s(e).getIterator(),c=i(t);return a(n,(function(e){o(c,e)})),c}},6119:function(e,t,n){var r=n(5745),o=n(3392),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},7629:function(e,t,n){var r=n(6395),o=n(4475),i=n(9433),s="__core-js_shared__",a=e.exports=o[s]||i(s,{});(a.versions||(a.versions=[])).push({version:"3.37.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},1548:function(e,t,n){var r=n(4475),o=n(9039),i=n(7388),s=n(7290),a=n(516),c=n(9088),u=r.structuredClone;e.exports=!!u&&!o((function(){if(a&&i>92||c&&i>94||s&&i>97)return!1;var e=new ArrayBuffer(8),t=u(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength}))},4495:function(e,t,n){var r=n(7388),o=n(9039),i=n(4475),s=i.String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol("symbol detection");return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){var r=n(1291),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5854:function(e,t,n){var r=n(2777),o=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new o("Can't convert number to bigint");return BigInt(t)}},7696:function(e,t,n){var r=n(1291),o=n(8014),i=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=o(t);if(t!==n)throw new i("Wrong length or index");return n}},5397:function(e,t,n){var r=n(7055),o=n(7750);e.exports=function(e){return r(o(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),o=Math.min;e.exports=function(e){var t=r(e);return t>0?o(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),o=Object;e.exports=function(e){return o(r(e))}},2777:function(e,t,n){var r=n(9565),o=n(34),i=n(757),s=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!o(n)||i(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){var r=n(2777),o=n(757);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},2140:function(e,t,n){var r=n(8227),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},655:function(e,t,n){var r=n(6955),o=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},9714:function(e,t,n){var r=n(9088);e.exports=function(e){try{if(r)return Function('return require("'+e+'")')()}catch(t){}}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),o=0,i=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++o+i,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),o=n(9039);e.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){var r=n(4475),o=n(4901),i=r.WeakMap;e.exports=o(i)&&/native code/.test(String(i))},8227:function(e,t,n){var r=n(4475),o=n(5745),i=n(9297),s=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=o("wks"),f=c?u["for"]||u:u&&u.withoutSetter||s;e.exports=function(e){return i(l,e)||(l[e]=a&&i(u,e)?u[e]:f("Symbol."+e)),l[e]}},6573:function(e,t,n){var r=n(3724),o=n(2106),i=n(3238),s=ArrayBuffer.prototype;r&&!("detached"in s)&&o(s,"detached",{configurable:!0,get:function(){return i(this)}})},7936:function(e,t,n){var r=n(6518),o=n(5636);o&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return o(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(e,t,n){var r=n(6518),o=n(5636);o&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return o(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(e,t,n){var r=n(6518),o=n(8981),i=n(6198),s=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},f=u||!l();r({target:"Array",proto:!0,arity:1,forced:f},{push:function(e){var t=o(this),n=i(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},7642:function(e,t,n){var r=n(6518),o=n(3440),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("difference")},{difference:o})},8004:function(e,t,n){var r=n(6518),o=n(9039),i=n(8750),s=n(4916),a=!s("intersection")||o((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:i})},3853:function(e,t,n){var r=n(6518),o=n(4449),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isDisjointFrom")},{isDisjointFrom:o})},5876:function(e,t,n){var r=n(6518),o=n(3838),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isSubsetOf")},{isSubsetOf:o})},2475:function(e,t,n){var r=n(6518),o=n(8527),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isSupersetOf")},{isSupersetOf:o})},5024:function(e,t,n){var r=n(6518),o=n(3650),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("symmetricDifference")},{symmetricDifference:o})},1698:function(e,t,n){var r=n(6518),o=n(4204),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("union")},{union:o})},7467:function(e,t,n){var r=n(7628),o=n(4644),i=o.aTypedArray,s=o.exportTypedArrayMethod,a=o.getTypedArrayConstructor;s("toReversed",(function(){return r(i(this),a(this))}))},4732:function(e,t,n){var r=n(4644),o=n(9504),i=n(9306),s=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=o(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&i(e);var t=a(this),n=s(c(t),t);return l(n,e)}))},9577:function(e,t,n){var r=n(9928),o=n(4644),i=n(1108),s=n(1291),a=n(5854),c=o.aTypedArray,u=o.getTypedArrayConstructor,l=o.exportTypedArrayMethod,f=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),o=s(e),l=i(n)?a(t):+t;return r(n,u(n),o,l)}}["with"],!f)},3375:function(e,t,n){n(7642)},9225:function(e,t,n){n(8004)},3972:function(e,t,n){n(3853)},9209:function(e,t,n){n(5876)},5714:function(e,t,n){n(2475)},7561:function(e,t,n){n(5024)},6197:function(e,t,n){n(1698)},4979:function(e,t,n){var r=n(6518),o=n(4475),i=n(7751),s=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),f=n(2603),d=n(5002),h=n(6193),p=n(3724),m=n(6395),g="DOMException",v=i("Error"),y=i(g),b=function(){u(this,_);var e=arguments.length,t=f(e<1?void 0:arguments[0]),n=f(e<2?void 0:arguments[1],"Error"),r=new y(t,n),o=new v(t);return o.name=g,a(r,"stack",s(1,h(o.stack,1))),l(r,this,b),r},_=b.prototype=y.prototype,w="stack"in new v(g),E="stack"in new y(1,2),I=y&&p&&Object.getOwnPropertyDescriptor(o,g),T=!!I&&!(I.writable&&I.configurable),S=w&&!T&&!E;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?b:y});var O=i(g),R=O.prototype;if(R.constructor!==O)for(var C in m||a(R,"constructor",s(1,O)),d)if(c(d,C)){var A=d[C],k=A.s;c(O,k)||a(O,k,s(6,A.c))}},4603:function(e,t,n){var r=n(6840),o=n(9504),i=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,u=o(c.append),l=o(c["delete"]),f=o(c.forEach),d=o([].push),h=new a("a=1&a=2&b=3");h["delete"]("a",1),h["delete"]("b",void 0),h+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];f(this,(function(e,t){d(r,{key:t,value:e})})),s(t,1);var o,a=i(e),c=i(n),h=0,p=0,m=!1,g=r.length;while(h<g)o=r[h++],m||o.key===a?(m=!0,l(this,o.key)):p++;while(p<g)o=r[p++],o.key===a&&o.value===c||u(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){var r=n(6840),o=n(9504),i=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,u=o(c.getAll),l=o(c.has),f=new a("a=1");!f.has("a",2)&&f.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);s(t,1);var o=i(n),a=0;while(a<r.length)if(r[a++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){var r=n(3724),o=n(9504),i=n(2106),s=URLSearchParams.prototype,a=o(s.forEach);r&&!("size"in s)&&i(s,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3405:function(e,t,n){n.d(t,{MF:function(){return me},j6:function(){return fe},om:function(){return le},Sx:function(){return ve},Wp:function(){return ge},KO:function(){return ye}});n(4114);var r=n(852),o=n(1363),i=n(4046);n(4979);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f=new WeakMap,d=new WeakMap,h=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(E(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&f.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(I(this),t),E(f.get(this))}:function(...t){return E(e.apply(I(this),t))}:function(t,...n){const r=e.call(I(this),t,...n);return h.set(r,t.sort?t.sort():[t]),E(r)}}function w(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&v(e),s(e,u())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const I=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),a=E(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(E(s.result),e.oldVersion,e.newVersion,E(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],R=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(R.get(t))return R.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!S.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&i.done]))[0]};return R.set(t,i),i}b((e=>({...e,get:(t,n,r)=>C(t,n)||e.get(t,n,r),has:(t,n)=>!!C(t,n)||e.has(t,n)})));
/**
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
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(k(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function k(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",x="0.9.13",N=new o.Vy("@firebase/app"),L="@firebase/app-compat",D="@firebase/analytics-compat",M="@firebase/analytics",j="@firebase/app-check-compat",U="@firebase/app-check",F="@firebase/auth",B="@firebase/auth-compat",$="@firebase/database",V="@firebase/database-compat",W="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",K="@firebase/installations-compat",q="@firebase/messaging",G="@firebase/messaging-compat",J="@firebase/performance",Z="@firebase/performance-compat",X="@firebase/remote-config",Q="@firebase/remote-config-compat",Y="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",oe="9.23.0",ie="[DEFAULT]",se={[P]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[D]:"fire-analytics-compat",[U]:"fire-app-check",[j]:"fire-app-check-compat",[F]:"fire-auth",[B]:"fire-auth-compat",[$]:"fire-rtdb",[V]:"fire-rtdb-compat",[W]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[K]:"fire-iid-compat",[q]:"fire-fcm",[G]:"fire-fcm-compat",[J]:"fire-perf",[Z]:"fire-perf-compat",[X]:"fire-rc",[Q]:"fire-rc-compat",[Y]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},he=new i.FA("app","Firebase",de);
/**
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
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}
/**
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
 */const me=oe;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const o=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),s=o.name;if("string"!==typeof s||!s)throw he.create("bad-app-name",{appName:String(s)});if(n||(n=(0,i.T9)()),!n)throw he.create("no-options");const a=ae.get(s);if(a){if((0,i.bD)(n,a.options)&&(0,i.bD)(o,a.config))return a;throw he.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const r of ce.values())c.addComponent(r);const u=new pe(n,o,c);return ae.set(s,u),u}function ve(e=ie){const t=ae.get(e);if(!t&&e===ie&&(0,i.T9)())return ge();if(!t)throw he.create("no-app",{appName:e});return t}function ye(e,t,n){var o;let i=null!==(o=se[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}le(new r.uA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
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
 */
const be="firebase-heartbeat-database",_e=1,we="firebase-heartbeat-store";let Ee=null;function Ie(){return Ee||(Ee=T(be,_e,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw he.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Te(e){try{const t=await Ie(),n=await t.transaction(we).objectStore(we).get(Oe(e));return n}catch(t){if(t instanceof i.g)N.warn(t.message);else{const e=he.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});N.warn(e.message)}}}async function Se(e,t){try{const n=await Ie(),r=n.transaction(we,"readwrite"),o=r.objectStore(we);await o.put(t,Oe(e)),await r.done}catch(n){if(n instanceof i.g)N.warn(n.message);else{const e=he.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(e.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const Re=1024,Ce=2592e6;class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=ke();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ce})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ke(),{heartbeatsToSend:t,unsentEntries:n}=Pe(this._heartbeatsCache.heartbeats),r=(0,i.Uj)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ke(){const e=new Date;return e.toISOString().substring(0,10)}function Pe(e,t=Re){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),Ne(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ne(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.zW)()&&(0,i.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Te(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ne(e){return(0,i.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function Le(e){le(new r.uA("platform-logger",(e=>new A(e)),"PRIVATE")),le(new r.uA("heartbeat",(e=>new Ae(e)),"PRIVATE")),ye(P,x,e),ye(P,x,"esm2017"),ye("fire-js","")}Le("")},852:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return o}});n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4046);class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const i="[DEFAULT]";
/**
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){n.d(t,{$b:function(){return o},Vy:function(){return u}});n(4114);
/**
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
 */const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=a[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}},4373:function(e,t,n){n.d(t,{A:function(){return hn}});var r={};n.r(r),n.d(r,{hasBrowserEnv:function(){return Me},hasStandardBrowserEnv:function(){return je},hasStandardBrowserWebWorkerEnv:function(){return Ue},origin:function(){return Fe}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577);function o(e,t){return function(){return e.apply(t,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:s}=Object,a=(e=>t=>{const n=i.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),c=e=>(e=e.toLowerCase(),t=>a(t)===e),u=e=>t=>typeof t===e,{isArray:l}=Array,f=u("undefined");function d(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const h=c("ArrayBuffer");function p(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&h(e.buffer),t}const m=u("string"),g=u("function"),v=u("number"),y=e=>null!==e&&"object"===typeof e,b=e=>!0===e||!1===e,_=e=>{if("object"!==a(e))return!1;const t=s(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},w=c("Date"),E=c("File"),I=c("Blob"),T=c("FileList"),S=e=>y(e)&&g(e.pipe),O=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||g(e.append)&&("formdata"===(t=a(e))||"object"===t&&g(e.toString)&&"[object FormData]"===e.toString()))},R=c("URLSearchParams"),[C,A,k,P]=["ReadableStream","Request","Response","Headers"].map(c),x=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function N(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,o;if("object"!==typeof e&&(e=[e]),l(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function L(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;while(o-- >0)if(r=n[o],t===r.toLowerCase())return r;return null}const D=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),M=e=>!f(e)&&e!==D;function j(){const{caseless:e}=M(this)&&this||{},t={},n=(n,r)=>{const o=e&&L(t,r)||r;_(t[o])&&_(n)?t[o]=j(t[o],n):_(n)?t[o]=j({},n):l(n)?t[o]=n.slice():t[o]=n};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&N(arguments[r],n);return t}const U=(e,t,n,{allOwnKeys:r}={})=>(N(t,((t,r)=>{n&&g(t)?e[r]=o(t,n):e[r]=t}),{allOwnKeys:r}),e),F=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),B=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},$=(e,t,n,r)=>{let o,i,a;const c={};if(t=t||{},null==e)return t;do{o=Object.getOwnPropertyNames(e),i=o.length;while(i-- >0)a=o[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},V=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},W=e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!v(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},H=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&s(Uint8Array)),z=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let o;while((o=r.next())&&!o.done){const n=o.value;t.call(e,n[0],n[1])}},K=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},q=c("HTMLFormElement"),G=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),J=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Z=c("RegExp"),X=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};N(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},Q=e=>{X(e,((t,n)=>{if(g(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];g(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},Y=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},ee=()=>{},te=(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,ne="abcdefghijklmnopqrstuvwxyz",re="0123456789",oe={DIGIT:re,ALPHA:ne,ALPHA_DIGIT:ne+ne.toUpperCase()+re},ie=(e=16,t=oe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;while(e--)n+=t[Math.random()*r|0];return n};function se(e){return!!(e&&g(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const ae=e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=l(e)?[]:{};return N(e,((e,t)=>{const i=n(e,r+1);!f(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},ce=c("AsyncFunction"),ue=e=>e&&(y(e)||g(e))&&g(e.then)&&g(e.catch);var le={isArray:l,isArrayBuffer:h,isBuffer:d,isFormData:O,isArrayBufferView:p,isString:m,isNumber:v,isBoolean:b,isObject:y,isPlainObject:_,isReadableStream:C,isRequest:A,isResponse:k,isHeaders:P,isUndefined:f,isDate:w,isFile:E,isBlob:I,isRegExp:Z,isFunction:g,isStream:S,isURLSearchParams:R,isTypedArray:H,isFileList:T,forEach:N,merge:j,extend:U,trim:x,stripBOM:F,inherits:B,toFlatObject:$,kindOf:a,kindOfTest:c,endsWith:V,toArray:W,forEachEntry:z,matchAll:K,isHTMLForm:q,hasOwnProperty:J,hasOwnProp:J,reduceDescriptors:X,freezeMethods:Q,toObjectSet:Y,toCamelCase:G,noop:ee,toFiniteNumber:te,findKey:L,global:D,isContextDefined:M,ALPHABET:oe,generateString:ie,isSpecCompliantForm:se,toJSONObject:ae,isAsyncFn:ce,isThenable:ue};function fe(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}le.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:le.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const de=fe.prototype,he={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{he[e]={value:e}})),Object.defineProperties(fe,he),Object.defineProperty(de,"isAxiosError",{value:!0}),fe.from=(e,t,n,r,o,i)=>{const s=Object.create(de);return le.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),fe.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var pe=fe,me=null;function ge(e){return le.isPlainObject(e)||le.isArray(e)}function ve(e){return le.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,n){return e?e.concat(t).map((function(e,t){return e=ve(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function be(e){return le.isArray(e)&&!e.some(ge)}const _e=le.toFlatObject(le,{},null,(function(e){return/^is[A-Z]/.test(e)}));function we(e,t,n){if(!le.isObject(e))throw new TypeError("target must be an object");t=t||new(me||FormData),n=le.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!le.isUndefined(t[e])}));const r=n.metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&le.isSpecCompliantForm(t);if(!le.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(le.isDate(e))return e.toISOString();if(!c&&le.isBlob(e))throw new pe("Blob is not supported. Use a Buffer instead.");return le.isArrayBuffer(e)||le.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"===typeof e)if(le.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(le.isArray(e)&&be(e)||(le.isFileList(e)||le.endsWith(n,"[]"))&&(a=le.toArray(e)))return n=ve(n),a.forEach((function(e,r){!le.isUndefined(e)&&null!==e&&t.append(!0===s?ye([n],r,i):null===s?n:n+"[]",u(e))})),!1;return!!ge(e)||(t.append(ye(o,n,i),u(e)),!1)}const f=[],d=Object.assign(_e,{defaultVisitor:l,convertValue:u,isVisitable:ge});function h(e,n){if(!le.isUndefined(e)){if(-1!==f.indexOf(e))throw Error("Circular reference detected in "+n.join("."));f.push(e),le.forEach(e,(function(e,r){const i=!(le.isUndefined(e)||null===e)&&o.call(t,e,le.isString(r)?r.trim():r,n,d);!0===i&&h(e,n?n.concat(r):[r])})),f.pop()}}if(!le.isObject(e))throw new TypeError("data must be an object");return h(e),t}var Ee=we;function Ie(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Te(e,t){this._pairs=[],e&&Ee(e,this,t)}const Se=Te.prototype;Se.append=function(e,t){this._pairs.push([e,t])},Se.toString=function(e){const t=e?function(t){return e.call(this,t,Ie)}:Ie;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Oe=Te;function Re(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ce(e,t,n){if(!t)return e;const r=n&&n.encode||Re,o=n&&n.serialize;let i;if(i=o?o(t,n):le.isURLSearchParams(t)?t.toString():new Oe(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}class Ae{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){le.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var ke=Ae,Pe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xe=(n(4603),n(7566),n(8721),"undefined"!==typeof URLSearchParams?URLSearchParams:Oe),Ne="undefined"!==typeof FormData?FormData:null,Le="undefined"!==typeof Blob?Blob:null,De={isBrowser:!0,classes:{URLSearchParams:xe,FormData:Ne,Blob:Le},protocols:["http","https","file","blob","url","data"]};const Me="undefined"!==typeof window&&"undefined"!==typeof document,je=(e=>Me&&["ReactNative","NativeScript","NS"].indexOf(e)<0)("undefined"!==typeof navigator&&navigator.product),Ue=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)(),Fe=Me&&window.location.href||"http://localhost";var Be={...r,...De};function $e(e,t){return Ee(e,new Be.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Be.isNode&&le.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function Ve(e){return le.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function We(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function He(e){function t(e,n,r,o){let i=e[o++];if("__proto__"===i)return!0;const s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&le.isArray(r)?r.length:i,a)return le.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s;r[i]&&le.isObject(r[i])||(r[i]=[]);const c=t(e,n,r[i],o);return c&&le.isArray(r[i])&&(r[i]=We(r[i])),!s}if(le.isFormData(e)&&le.isFunction(e.entries)){const n={};return le.forEachEntry(e,((e,r)=>{t(Ve(e),r,n,0)})),n}return null}var ze=He;function Ke(e,t,n){if(le.isString(e))try{return(t||JSON.parse)(e),le.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const qe={transitional:Pe,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=le.isObject(e);o&&le.isHTMLForm(e)&&(e=new FormData(e));const i=le.isFormData(e);if(i)return r?JSON.stringify(ze(e)):e;if(le.isArrayBuffer(e)||le.isBuffer(e)||le.isStream(e)||le.isFile(e)||le.isBlob(e)||le.isReadableStream(e))return e;if(le.isArrayBufferView(e))return e.buffer;if(le.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return $e(e,this.formSerializer).toString();if((s=le.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ee(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),Ke(e)):e}],transformResponse:[function(e){const t=this.transitional||qe.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(le.isResponse(e)||le.isReadableStream(e))return e;if(e&&le.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,i=!n&&r;try{return JSON.parse(e)}catch(o){if(i){if("SyntaxError"===o.name)throw pe.from(o,pe.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Be.classes.FormData,Blob:Be.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};le.forEach(["delete","get","head","post","put","patch"],(e=>{qe.headers[e]={}}));var Ge=qe;const Je=le.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ze=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&Je[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const Xe=Symbol("internals");function Qe(e){return e&&String(e).trim().toLowerCase()}function Ye(e){return!1===e||null==e?e:le.isArray(e)?e.map(Ye):String(e)}function et(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}const tt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function nt(e,t,n,r,o){return le.isFunction(r)?r.call(this,t,n):(o&&(t=n),le.isString(t)?le.isString(r)?-1!==t.indexOf(r):le.isRegExp(r)?r.test(t):void 0:void 0)}function rt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function ot(e,t){const n=le.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}class it{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=Qe(t);if(!o)throw new Error("header name must be a non-empty string");const i=le.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=Ye(e))}const i=(e,t)=>le.forEach(e,((e,n)=>o(e,n,t)));if(le.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(le.isString(e)&&(e=e.trim())&&!tt(e))i(Ze(e),t);else if(le.isHeaders(e))for(const[s,a]of e.entries())o(a,s,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=Qe(e),e){const n=le.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return et(e);if(le.isFunction(t))return t.call(this,e,n);if(le.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Qe(e),e){const n=le.findKey(this,e);return!(!n||void 0===this[n]||t&&!nt(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=Qe(e),e){const o=le.findKey(n,e);!o||t&&!nt(n,n[o],o,t)||(delete n[o],r=!0)}}return le.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const o=t[n];e&&!nt(this,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return le.forEach(this,((r,o)=>{const i=le.findKey(n,o);if(i)return t[i]=Ye(r),void delete t[o];const s=e?rt(o):String(o).trim();s!==o&&delete t[o],t[s]=Ye(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return le.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&le.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[Xe]=this[Xe]={accessors:{}},n=t.accessors,r=this.prototype;function o(e){const t=Qe(e);n[t]||(ot(r,e),n[t]=!0)}return le.isArray(e)?e.forEach(o):o(e),this}}it.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),le.reduceDescriptors(it.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),le.freezeMethods(it);var st=it;function at(e,t){const n=this||Ge,r=t||n,o=st.from(r.headers);let i=r.data;return le.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function ct(e){return!(!e||!e.__CANCEL__)}function ut(e,t,n){pe.call(this,null==e?"canceled":e,pe.ERR_CANCELED,t,n),this.name="CanceledError"}le.inherits(ut,pe,{__CANCEL__:!0});var lt=ut;function ft(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new pe("Request failed with status code "+n.status,[pe.ERR_BAD_REQUEST,pe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}function dt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ht(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,f=0;while(l!==i)f+=n[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}var pt=ht;function mt(e,t){let n=0;const r=1e3/t;let o=null;return function(){const t=!0===this,i=Date.now();if(t||i-n>r)return o&&(clearTimeout(o),o=null),n=i,e.apply(null,arguments);o||(o=setTimeout((()=>(o=null,n=Date.now(),e.apply(null,arguments))),r-(i-n)))}}var gt=mt,vt=(e,t,n=3)=>{let r=0;const o=pt(50,250);return gt((n=>{const i=n.loaded,s=n.lengthComputable?n.total:void 0,a=i-r,c=o(a),u=i<=s;r=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-i)/c:void 0,event:n,lengthComputable:null!=s};l[t?"download":"upload"]=!0,e(l)}),n)},yt=(n(4979),Be.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=le.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}()),bt=Be.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];le.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),le.isString(r)&&s.push("path="+r),le.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function _t(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function wt(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Et(e,t){return e&&!_t(t)?wt(e,t):t}const It=e=>e instanceof st?{...e}:e;function Tt(e,t){t=t||{};const n={};function r(e,t,n){return le.isPlainObject(e)&&le.isPlainObject(t)?le.merge.call({caseless:n},e,t):le.isPlainObject(t)?le.merge({},t):le.isArray(t)?t.slice():t}function o(e,t,n){return le.isUndefined(t)?le.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!le.isUndefined(t))return r(void 0,t)}function s(e,t){return le.isUndefined(t)?le.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(It(e),It(t),!0)};return le.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);le.isUndefined(s)&&i!==a||(n[r]=s)})),n}var St=e=>{const t=Tt({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:s,headers:a,auth:c}=t;if(t.headers=a=st.from(a),t.url=Ce(Et(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),le.isFormData(r))if(Be.hasStandardBrowserEnv||Be.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(Be.hasStandardBrowserEnv&&(o&&le.isFunction(o)&&(o=o(t)),o||!1!==o&&yt(t.url))){const e=i&&s&&bt.read(s);e&&a.set(i,e)}return t};const Ot="undefined"!==typeof XMLHttpRequest;var Rt=Ot&&function(e){return new Promise((function(t,n){const r=St(e);let o=r.data;const i=st.from(r.headers).normalize();let s,{responseType:a}=r;function c(){r.cancelToken&&r.cancelToken.unsubscribe(s),r.signal&&r.signal.removeEventListener("abort",s)}let u=new XMLHttpRequest;function l(){if(!u)return;const r=st.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),o=a&&"text"!==a&&"json"!==a?u.response:u.responseText,i={data:o,status:u.status,statusText:u.statusText,headers:r,config:e,request:u};ft((function(e){t(e),c()}),(function(e){n(e),c()}),i),u=null}u.open(r.method.toUpperCase(),r.url,!0),u.timeout=r.timeout,"onloadend"in u?u.onloadend=l:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(l)},u.onabort=function(){u&&(n(new pe("Request aborted",pe.ECONNABORTED,r,u)),u=null)},u.onerror=function(){n(new pe("Network Error",pe.ERR_NETWORK,r,u)),u=null},u.ontimeout=function(){let e=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const t=r.transitional||Pe;r.timeoutErrorMessage&&(e=r.timeoutErrorMessage),n(new pe(e,t.clarifyTimeoutError?pe.ETIMEDOUT:pe.ECONNABORTED,r,u)),u=null},void 0===o&&i.setContentType(null),"setRequestHeader"in u&&le.forEach(i.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),le.isUndefined(r.withCredentials)||(u.withCredentials=!!r.withCredentials),a&&"json"!==a&&(u.responseType=r.responseType),"function"===typeof r.onDownloadProgress&&u.addEventListener("progress",vt(r.onDownloadProgress,!0)),"function"===typeof r.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",vt(r.onUploadProgress)),(r.cancelToken||r.signal)&&(s=t=>{u&&(n(!t||t.type?new lt(null,e,u):t),u.abort(),u=null)},r.cancelToken&&r.cancelToken.subscribe(s),r.signal&&(r.signal.aborted?s():r.signal.addEventListener("abort",s)));const f=dt(r.url);f&&-1===Be.protocols.indexOf(f)?n(new pe("Unsupported protocol "+f+":",pe.ERR_BAD_REQUEST,e)):u.send(o||null)}))};const Ct=(e,t)=>{let n,r=new AbortController;const o=function(e){if(!n){n=!0,s();const t=e instanceof Error?e:this.reason;r.abort(t instanceof pe?t:new lt(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{o(new pe(`timeout ${t} of ms exceeded`,pe.ETIMEDOUT))}),t);const s=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e&&(e.removeEventListener?e.removeEventListener("abort",o):e.unsubscribe(o))})),e=null)};e.forEach((e=>e&&e.addEventListener&&e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=s,[a,()=>{i&&clearTimeout(i),i=null}]};var At=Ct;const kt=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;while(o<n)r=o+t,yield e.slice(o,r),o=r},Pt=async function*(e,t,n){for await(const r of e)yield*kt(ArrayBuffer.isView(r)?r:await n(String(r)),t)},xt=(e,t,n,r,o)=>{const i=Pt(e,t,o);let s=0;return new ReadableStream({type:"bytes",async pull(e){const{done:t,value:o}=await i.next();if(t)return e.close(),void r();let a=o.byteLength;n&&n(s+=a),e.enqueue(new Uint8Array(o))},cancel(e){return r(e),i.return()}},{highWaterMark:2})},Nt=(e,t)=>{const n=null!=e;return r=>setTimeout((()=>t({lengthComputable:n,total:e,loaded:r})))},Lt="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Dt=Lt&&"function"===typeof ReadableStream,Mt=Lt&&("function"===typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),jt=Dt&&(()=>{let e=!1;const t=new Request(Be.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Ut=65536,Ft=Dt&&!!(()=>{try{return le.isReadableStream(new Response("").body)}catch(e){}})(),Bt={stream:Ft&&(e=>e.body)};Lt&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach((t=>{!Bt[t]&&(Bt[t]=le.isFunction(e[t])?e=>e[t]():(e,n)=>{throw new pe(`Response type '${t}' is not supported`,pe.ERR_NOT_SUPPORT,n)})}))})(new Response);const $t=async e=>null==e?0:le.isBlob(e)?e.size:le.isSpecCompliantForm(e)?(await new Request(e).arrayBuffer()).byteLength:le.isArrayBufferView(e)?e.byteLength:(le.isURLSearchParams(e)&&(e+=""),le.isString(e)?(await Mt(e)).byteLength:void 0),Vt=async(e,t)=>{const n=le.toFiniteNumber(e.getContentLength());return null==n?$t(t):n};var Wt=Lt&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:l,withCredentials:f="same-origin",fetchOptions:d}=St(e);u=u?(u+"").toLowerCase():"text";let h,p,[m,g]=o||i||s?At([o,i],s):[];const v=()=>{!h&&setTimeout((()=>{m&&m.unsubscribe()})),h=!0};let y;try{if(c&&jt&&"get"!==n&&"head"!==n&&0!==(y=await Vt(l,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});le.isFormData(r)&&(e=n.headers.get("content-type"))&&l.setContentType(e),n.body&&(r=xt(n.body,Ut,Nt(y,vt(c)),null,Mt))}le.isString(f)||(f=f?"cors":"omit"),p=new Request(t,{...d,signal:m,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let o=await fetch(p);const i=Ft&&("stream"===u||"response"===u);if(Ft&&(a||i)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=o[t]}));const t=le.toFiniteNumber(o.headers.get("content-length"));o=new Response(xt(o.body,Ut,a&&Nt(t,vt(a,!0)),i&&v,Mt),e)}u=u||"text";let s=await Bt[le.findKey(Bt,u)||"text"](o,e);return!i&&v(),g&&g(),await new Promise(((t,n)=>{ft(t,n,{data:s,headers:st.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:p})}))}catch(b){if(v(),b&&"TypeError"===b.name&&/fetch/i.test(b.message))throw Object.assign(new pe("Network Error",pe.ERR_NETWORK,e,p),{cause:b.cause||b});throw pe.from(b,b&&b.code,e,p)}});const Ht={http:me,xhr:Rt,fetch:Wt};le.forEach(Ht,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const zt=e=>`- ${e}`,Kt=e=>le.isFunction(e)||null===e||!1===e;var qt={getAdapter:e=>{e=le.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!Kt(n)&&(r=Ht[(t=String(n)).toLowerCase()],void 0===r))throw new pe(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(zt).join("\n"):" "+zt(e[0]):"as no adapter specified";throw new pe("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:Ht};function Gt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new lt(null,e)}function Jt(e){Gt(e),e.headers=st.from(e.headers),e.data=at.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=qt.getAdapter(e.adapter||Ge.adapter);return t(e).then((function(t){return Gt(e),t.data=at.call(e,e.transformResponse,t),t.headers=st.from(t.headers),t}),(function(t){return ct(t)||(Gt(e),t&&t.response&&(t.response.data=at.call(e,e.transformResponse,t.response),t.response.headers=st.from(t.response.headers))),Promise.reject(t)}))}const Zt="1.7.2",Xt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Xt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Qt={};function Yt(e,t,n){if("object"!==typeof e)throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;while(o-- >0){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new pe("option "+i+" must be "+n,pe.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new pe("Unknown option "+i,pe.ERR_BAD_OPTION)}}Xt.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Zt+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new pe(r(o," has been removed"+(t?" in "+t:"")),pe.ERR_DEPRECATED);return t&&!Qt[o]&&(Qt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var en={assertOptions:Yt,validators:Xt};const tn=en.validators;class nn{constructor(e){this.defaults=e,this.interceptors={request:new ke,response:new ke}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=Tt(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&en.assertOptions(n,{silentJSONParsing:tn.transitional(tn.boolean),forcedJSONParsing:tn.transitional(tn.boolean),clarifyTimeoutError:tn.transitional(tn.boolean)},!1),null!=r&&(le.isFunction(r)?t.paramsSerializer={serialize:r}:en.assertOptions(r,{encode:tn.function,serialize:tn.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&le.merge(o.common,o[t.method]);o&&le.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=st.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Jt.bind(this),void 0];e.unshift.apply(e,s),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);while(f<l)u=u.then(e[f++],e[f++]);return u}l=s.length;let d=t;f=0;while(f<l){const e=s[f++],t=s[f++];try{d=e(d)}catch(h){t.call(this,h);break}}try{u=Jt.call(this,d)}catch(h){return Promise.reject(h)}f=0,l=c.length;while(f<l)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Tt(this.defaults,e);const t=Et(e.baseURL,e.url);return Ce(t,e.params,e.paramsSerializer)}}le.forEach(["delete","get","head","options"],(function(e){nn.prototype[e]=function(t,n){return this.request(Tt(n||{},{method:e,url:t,data:(n||{}).data}))}})),le.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Tt(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}nn.prototype[e]=t(),nn.prototype[e+"Form"]=t(!0)}));var rn=nn;class on{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new lt(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new on((function(t){e=t}));return{token:t,cancel:e}}}var sn=on;function an(e){return function(t){return e.apply(null,t)}}function cn(e){return le.isObject(e)&&!0===e.isAxiosError}const un={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(un).forEach((([e,t])=>{un[t]=e}));var ln=un;function fn(e){const t=new rn(e),n=o(rn.prototype.request,t);return le.extend(n,rn.prototype,t,{allOwnKeys:!0}),le.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return fn(Tt(e,t))},n}const dn=fn(Ge);dn.Axios=rn,dn.CanceledError=lt,dn.CancelToken=sn,dn.isCancel=ct,dn.VERSION=Zt,dn.toFormData=Ee,dn.AxiosError=pe,dn.Cancel=dn.CanceledError,dn.all=function(e){return Promise.all(e)},dn.spread=an,dn.isAxiosError=cn,dn.mergeConfig=Tt,dn.AxiosHeaders=st,dn.formToJSON=e=>ze(le.isHTMLForm(e)?new FormData(e):e),dn.getAdapter=qt.getAdapter,dn.HttpStatusCode=ln,dn.default=dn;var hn=dn},6400:function(e,t,n){n.d(t,{Wp:function(){return r.Wp}});var r=n(3405),o="firebase",i="9.23.0";
/**
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
 */
/**
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
 */
(0,r.KO)(o,i,"app")},6409:function(e,t,n){n.d(t,{xI:function(){return $r},Pj:function(){return Ct},hg:function(){return xt},MN:function(){return Rt},hK:function(){return At},CI:function(){return Nt}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4603),n(7566),n(8721);var r=n(4046),o=n(3405);function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=n(1363),a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.FA("auth","Firebase",c()),f=new s.Vy("@firebase/auth");function d(e,...t){f.logLevel<=s.$b.WARN&&f.warn(`Auth (${o.MF}): ${e}`,...t)}function h(e,...t){f.logLevel<=s.$b.ERROR&&f.error(`Auth (${o.MF}): ${e}`,...t)}
/**
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
 */function p(e,...t){throw v(e,...t)}function m(e,...t){return v(e,...t)}function g(e,t,n){const o=Object.assign(Object.assign({},u()),{[t]:n}),i=new r.FA("auth","Firebase",o);return i.create(t,{appName:e.name})}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function y(e,t,...n){if(!e)throw v(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function _(e,t){e||b(t)}
/**
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
 */function w(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class O{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function R(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class C{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},k=new O(3e4,6e4);
/**
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
 */function P(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function x(e,t,n,o,i={}){return N(e,i,(async()=>{let i={},s={};o&&("GET"===t?s=o:i={body:JSON.stringify(o)});const a=(0,r.Am)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),C.fetch()(D(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))}))}async function N(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},A),t);try{const t=new M(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw j(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw j(e,"user-disabled",i);const a=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(e,a,s);p(e,a)}}catch(i){if(i instanceof r.g)throw i;p(e,"network-request-failed",{message:String(i)})}}async function L(e,t,n,r,o={}){const i=await x(e,t,n,r,o);return"mfaPendingCredential"in i&&p(e,"multi-factor-auth-required",{_serverResponse:i}),i}function D(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?R(e.config,o):`${e.config.apiScheme}://${o}`}class M{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),k.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=m(e,t,r);return o.customData._tokenResponse=n,o}
/**
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
 */async function U(e,t){return x(e,"POST","/v1/accounts:delete",t)}async function F(e,t){return x(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function B(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function $(e,t=!1){const n=(0,r.Ku)(e),o=await n.getIdToken(t),i=W(o);y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:o,authTime:B(V(i.auth_time)),issuedAtTime:B(V(i.iat)),expirationTime:B(V(i.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function V(e){return 1e3*Number(e)}function W(e){const[t,n,o]=e.split(".");if(void 0===t||void 0===n||void 0===o)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.u)(n);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(i){return h("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function H(e){const t=W(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function z(e,t,n=!1){if(n)return t;try{return await t}catch(o){throw o instanceof r.g&&K(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function K({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class G{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function J(e){var t;const n=e.auth,r=await e.getIdToken(),o=await z(e,F(n,{idToken:r}));y(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?Q(i.providerUserInfo):[],a=X(e.providerData,s),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new G(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,f)}async function Z(e){const t=(0,r.Ku)(e);await J(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function X(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function Q(e){return e.map((e=>{var{providerId:t}=e,n=i(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function Y(e,t){const n=await N(e,{},(async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,s=D(e,o,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",C.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class ee{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):H(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await Y(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new ee;return n&&(y("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(y("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ee,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
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
 */function te(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ne{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new G(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await z(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await z(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,f=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,h=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:_,isAnonymous:w,providerData:E,stsTokenManager:I}=t;y(b&&I,e,"internal-error");const T=ee.fromJSON(this.name,I);y("string"===typeof b,e,"internal-error"),te(l,e.name),te(f,e.name),y("boolean"===typeof _,e,"internal-error"),y("boolean"===typeof w,e,"internal-error"),te(d,e.name),te(h,e.name),te(p,e.name),te(m,e.name),te(g,e.name),te(v,e.name);const S=new ne({uid:b,auth:e,email:f,emailVerified:_,displayName:l,isAnonymous:w,photoURL:h,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ee;r.updateFromServerResponse(t);const o=new ne({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await J(o),o}}
/**
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
 */const re=new Map;function oe(e){_(e instanceof Function,"Expected a class definition");let t=re.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,re.set(e,t),t)}
/**
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
 */class ie{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ie.type="NONE";const se=ie;
/**
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
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=ae(this.userKey,r.apiKey,o),this.fullPersistenceKey=ae("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(oe(se),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=r[0]||oe(se);const i=ae(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(i);if(t){const n=ne._fromJSON(e,t);u!==o&&(s=n),o=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(i,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(i)}catch(c){}}))),new ce(o,e,n)):new ce(o,e,n)}}
/**
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
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(he(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(le(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||de(t))&&!t.includes("edge/"))return"Chrome";if(pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function le(e=(0,r.ZQ)()){return/firefox\//i.test(e)}function fe(e=(0,r.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function de(e=(0,r.ZQ)()){return/crios\//i.test(e)}function he(e=(0,r.ZQ)()){return/iemobile/i.test(e)}function pe(e=(0,r.ZQ)()){return/android/i.test(e)}function me(e=(0,r.ZQ)()){return/blackberry/i.test(e)}function ge(e=(0,r.ZQ)()){return/webos/i.test(e)}function ve(e=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=(0,r.ZQ)()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,r.lT)()&&10===document.documentMode}function _e(e=(0,r.ZQ)()){return ve(e)||pe(e)||ge(e)||me(e)||/windows phone/i.test(e)||he(e)}function we(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.ZQ)());break;case"Worker":n=`${ue((0,r.ZQ)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o.MF}/${i}`}
/**
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
 */async function Ie(e,t){return x(e,"GET","/v2/recaptchaConfig",P(e,t))}
/**
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
 */function Te(e){return void 0!==e&&void 0!==e.enterprise}class Se{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
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
 */function Oe(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Re(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Oe().appendChild(r)}))}function Ce(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ae="https://www.google.com/recaptcha/enterprise.js?render=",ke="recaptcha-enterprise",Pe="NO_RECAPTCHA";class xe{constructor(e){this.type=ke,this.auth=Me(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Ie(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Se(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const o=window.grecaptcha;Te(o)?o.enterprise.ready((()=>{o.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Pe)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,o)=>{n(this.auth).then((n=>{if(!t&&Te(window.grecaptcha))r(n,e,o);else{if("undefined"===typeof window)return void o(new Error("RecaptchaVerifier is only supported in browser"));Re(Ae+n).then((()=>{r(n,e,o)})).catch((e=>{o(e)}))}})).catch((e=>{o(e)}))}))}}async function Ne(e,t,n,r=!1){const o=new xe(e);let i;try{i=await o.verify(n)}catch(a){i=await o.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:i}):Object.assign(s,{captchaResponse:i}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
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
 */class Le{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(o){r(o)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
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
 */class De{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new je(this),this.idTokenSubscription=new je(this),this.beforeStateQueue=new Le(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=oe(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==i||!(null===s||void 0===s?void 0:s.user)||(r=s.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await J(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.Ku)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(oe(e))}))}async initializeRecaptchaConfig(){const e=await Ie(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Se(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new xe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&oe(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[oe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return y(i,this,"internal-error"),i.then((()=>o(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Me(e){return(0,r.Ku)(e)}class je{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.tD)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */function Ue(e,t){const n=(0,o.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),o=n.getOptions();if((0,r.bD)(o,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const i=n.initialize({options:t});return i}function Fe(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(oe);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Be(e,t,n){const r=Me(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!!(null===n||void 0===n?void 0:n.disableWarnings),i=$e(t),{host:s,port:a}=Ve(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||He()}function $e(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ve(e){const t=$e(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const e=o[1];return{host:e,port:We(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:We(t)}}}function We(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function He(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */class ze{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
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
 */async function Ke(e,t){return x(e,"POST","/v1/accounts:update",t)}
/**
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
 */
async function qe(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",P(e,t))}async function Ge(e,t){return x(e,"POST","/v1/accounts:sendOobCode",P(e,t))}async function Je(e,t){return Ge(e,t)}
/**
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
 */
async function Ze(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}async function Xe(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}
/**
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
 */class Qe extends ze{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Qe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Ne(e,n,"signInWithPassword");return qe(e,t)}return qe(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Ne(e,n,"signInWithPassword");return qe(e,t)}return Promise.reject(t)}));case"emailLink":return Ze(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ke(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xe(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Ye(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",P(e,t))}
/**
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
 */const et="http://localhost";class tt extends ze{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=i(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new tt(n,r);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ye(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ye(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ye(e,t)}buildRequest(){const e={requestUri:et,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.Am)(t)}return e}}
/**
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
 */async function nt(e,t){return x(e,"POST","/v1/accounts:sendVerificationCode",P(e,t))}async function rt(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t))}async function ot(e,t){const n=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const it={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return L(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,n),it)}
/**
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
 */class at extends ze{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new at({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new at({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return rt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ot(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new at({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
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
 */function ct(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ut(e){const t=(0,r.I9)((0,r.hp)(e))["link"],n=t?(0,r.I9)((0,r.hp)(t))["deep_link_id"]:null,o=(0,r.I9)((0,r.hp)(e))["deep_link_id"],i=o?(0,r.I9)((0,r.hp)(o))["link"]:null;return i||o||n||t||e}class lt{constructor(e){var t,n,o,i,s,a;const c=(0,r.I9)((0,r.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,f=ct(null!==(o=c["mode"])&&void 0!==o?o:null);y(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ut(e);try{return new lt(t)}catch(n){return null}}}
/**
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
 */
class ft{constructor(){this.providerId=ft.PROVIDER_ID}static credential(e,t){return Qe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lt.parseLink(t);return y(n,"argument-error"),Qe._fromEmailAndCode(e,n.code,n.tenantId)}}ft.PROVIDER_ID="password",ft.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ft.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class dt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class ht extends dt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class pt extends ht{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com",pt.PROVIDER_ID="facebook.com";
/**
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
 */
class mt extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mt.credential(t,n)}catch(r){return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com",mt.PROVIDER_ID="google.com";
/**
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
 */
class gt extends ht{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch(t){return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com",gt.PROVIDER_ID="github.com";
/**
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
 */
class vt extends ht{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return vt.credential(t,n)}catch(r){return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com",vt.PROVIDER_ID="twitter.com";
/**
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
 */
class yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await ne._fromIdTokenResponse(e,n,r),i=bt(n),s=new yt({user:o,providerId:i,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=bt(n);return new yt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function bt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class _t extends r.g{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,_t.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new _t(e,t,n,r)}}function wt(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw _t._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */async function Et(e,t,n=!1){const r=await z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return yt._forOperation(e,"link",r)}
/**
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
 */
async function It(e,t,n=!1){const{auth:r}=e,o="reauthenticate";try{const i=await z(e,wt(r,o,t,e),n);y(i.idToken,r,"internal-error");const s=W(i.idToken);y(s,r,"internal-error");const{sub:a}=s;return y(e.uid===a,r,"user-mismatch"),yt._forOperation(e,o,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&p(r,"user-mismatch"),i}}
/**
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
 */async function Tt(e,t,n=!1){const r="signIn",o=await wt(e,r,t),i=await yt._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}async function St(e,t){return Tt(Me(e),t)}
/**
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
 */
function Ot(e,t,n){var r;y((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),y("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(y(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(y(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
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
 */
/**
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
 */
async function Rt(e,t,n){var r;const o=Me(e),i={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function s(e,t){y(t.handleCodeInApp,o,"argument-error"),t&&Ot(o,e,t)}if(null===(r=o._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Ne(o,i,"getOobCode",!0);s(e,n),await Je(o,e)}else s(i,n),await Je(o,i).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Ne(o,i,"getOobCode",!0);s(e,n),await Je(o,e)}}))}function Ct(e,t){const n=lt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function At(e,t,n){const o=(0,r.Ku)(e),i=ft.credentialWithLink(t,n||w());return y(i._tenantId===(o.tenantId||null),o,"tenant-id-mismatch"),St(o,i)}
/**
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
 */function kt(e,t,n,o){return(0,r.Ku)(e).onIdTokenChanged(t,n,o)}function Pt(e,t,n){return(0,r.Ku)(e).beforeAuthStateChanged(t,n)}function xt(e,t,n,o){return(0,r.Ku)(e).onAuthStateChanged(t,n,o)}function Nt(e){return(0,r.Ku)(e).signOut()}
/**
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
 */
function Lt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}function Dt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,t))}function Mt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}function jt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,t))}new WeakMap;const Ut="__sak";
/**
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
 */class Ft{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ut,"1"),this.storage.removeItem(Ut),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function Bt(){const e=(0,r.ZQ)();return fe(e)||ve(e)}const $t=1e3,Vt=10;class Wt extends Ft{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Bt()&&we(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);be()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Vt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),$t)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wt.type="LOCAL";const Ht=Wt;
/**
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
 */class zt extends Ft{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zt.type="SESSION";const Kt=zt;
/**
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
 */function qt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
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
 */class Gt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Gt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(i).map((async e=>e(t.origin,o))),a=await qt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Jt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Gt.receivers=[];class Zt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise(((s,a)=>{const c=Jt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(u),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
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
 */function Xt(){return window}function Qt(e){Xt().location.href=e}
/**
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
 */function Yt(){return"undefined"!==typeof Xt()["WorkerGlobalScope"]&&"function"===typeof Xt()["importScripts"]}async function en(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function tn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function nn(){return Yt()?self:null}
/**
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
 */const rn="firebaseLocalStorageDb",on=1,sn="firebaseLocalStorage",an="fbase_key";class cn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function un(e,t){return e.transaction([sn],t?"readwrite":"readonly").objectStore(sn)}function ln(){const e=indexedDB.deleteDatabase(rn);return new cn(e).toPromise()}function fn(){const e=indexedDB.open(rn,on);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(sn,{keyPath:an})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(sn)?t(n):(n.close(),await ln(),t(await fn()))}))}))}async function dn(e,t,n){const r=un(e,!0).put({[an]:t,value:n});return new cn(r).toPromise()}async function hn(e,t){const n=un(e,!1).get(t),r=await new cn(n).toPromise();return void 0===r?null:r.value}function pn(e,t){const n=un(e,!0).delete(t);return new cn(n).toPromise()}const mn=800,gn=3;class vn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await fn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>gn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gt._getInstance(nn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await en(),!this.activeServiceWorker)return;this.sender=new Zt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&tn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fn();return await dn(e,Ut,"1"),await pn(e,Ut),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>dn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>hn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>pn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=un(e,!1).getAll();return new cn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),mn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}vn.type="LOCAL";const yn=vn;
/**
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
 */function bn(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:start",P(e,t))}function _n(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,t))}function wn(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,t))}
/**
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
 */
/**
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
 */
Ce("rcb"),new O(3e4,6e4);
/**
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
 */
const En="recaptcha";async function In(e,t,n){var r;const o=await n.verify();try{let i;if(y("string"===typeof o,e,"argument-error"),y(n.type===En,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){y("enroll"===t.type,e,"internal-error");const n=await Lt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;y(n,e,"missing-multi-factor-info");const s=await bn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await nt(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
/**
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
 */
class Tn{constructor(e){this.providerId=Tn.PROVIDER_ID,this.auth=Me(e)}verifyPhoneNumber(e,t){return In(this.auth,e,(0,r.Ku)(t))}static credential(e,t){return at._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Tn.credentialFromTaggedObject(t)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?at._fromTokenResponse(t,n):null}}
/**
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
 */
function Sn(e,t){return t?oe(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Tn.PROVIDER_ID="phone",Tn.PHONE_SIGN_IN_METHOD="phone";class On extends ze{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ye(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ye(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ye(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rn(e){return Tt(e.auth,new On(e),e.bypassAuthState)}function Cn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),It(n,new On(e),e.bypassAuthState)}async function An(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),Et(n,new On(e),e.bypassAuthState)}
/**
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
 */class kn{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:s}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rn;case"linkViaPopup":case"linkViaRedirect":return An;case"reauthViaPopup":case"reauthViaRedirect":return Cn;default:p(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Pn=new O(2e3,1e4);class xn extends kn{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=Jt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Pn.get())};e()}}xn.currentPopupAction=null;
/**
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
 */
const Nn="pendingRedirect",Ln=new Map;class Dn extends kn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ln.get(this.auth._key());if(!e){try{const t=await Mn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ln.set(this.auth._key(),e)}return this.bypassAuthState||Ln.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Mn(e,t){const n=Fn(t),r=Un(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function jn(e,t){Ln.set(e._key(),t)}function Un(e){return oe(e._redirectPersistence)}function Fn(e){return ae(Nn,e.config.apiKey,e.name)}
/**
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
 */async function Bn(e,t,n=!1){const r=Me(e),o=Sn(r,t),i=new Dn(r,o,n),s=await i.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
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
 */
const $n=6e5;class Vn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!zn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Hn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$n&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wn(e))}saveEventToCache(e){this.cachedEventUids.add(Wn(e)),this.lastProcessedEventTime=Date.now()}}function Wn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Hn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function zn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hn(e);default:return!1}}
/**
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
 */async function Kn(e,t={}){return x(e,"GET","/v1/projects",t)}
/**
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
 */const qn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gn=/^https?/;async function Jn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Kn(e);for(const r of t)try{if(Zn(r))return}catch(n){}p(e,"unauthorized-domain")}function Zn(e){const t=w(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!Gn.test(n))return!1;if(qn.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
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
 */const Xn=new O(3e4,6e4);function Qn(){const e=Xt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Yn(e){return new Promise(((t,n)=>{var r,o,i;function s(){Qn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qn(),n(m(e,"network-request-failed"))},timeout:Xn.get()})}if(null===(o=null===(r=Xt().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Xt().gapi)||void 0===i?void 0:i.load)){const t=Ce("iframefcb");return Xt()[t]=()=>{gapi.load?s():n(m(e,"network-request-failed"))},Re(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw er=null,e}))}let er=null;function tr(e){return er=er||Yn(e),er}
/**
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
 */const nr=new O(5e3,15e3),rr="__/auth/iframe",or="emulator/auth/iframe",ir={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ar(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,or):`https://${e.config.authDomain}/${rr}`,i={apiKey:t.apiKey,appName:e.name,v:o.MF},s=sr.get(e.config.apiHost);s&&(i.eid=s);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.Am)(i).slice(1)}`}async function cr(e){const t=await tr(e),n=Xt().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:ar(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ir,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=m(e,"network-request-failed"),i=Xt().setTimeout((()=>{r(o)}),nr.get());function s(){Xt().clearTimeout(i),n(t)}t.ping(s).then(s,(()=>{r(o)}))}))))}
/**
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
 */const ur={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lr=500,fr=600,dr="_blank",hr="http://localhost";class pr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function mr(e,t,n,o=lr,i=fr){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-o)/2,0).toString();let c="";const u=Object.assign(Object.assign({},ur),{width:o.toString(),height:i.toString(),top:s,left:a}),l=(0,r.ZQ)().toLowerCase();n&&(c=de(l)?dr:n),le(l)&&(t=t||hr,u.scrollbars="yes");const f=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ye(l)&&"_self"!==c)return gr(t||"",c),new pr(null);const d=window.open(t||"",c,f);y(d,e,"popup-blocked");try{d.focus()}catch(h){}return new pr(d)}function gr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const vr="__/auth/handler",yr="emulator/auth/handler",br=encodeURIComponent("fac");async function _r(e,t,n,i,s,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o.MF,eventId:s};if(t instanceof dt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),f=l?`#${br}=${encodeURIComponent(l)}`:"";return`${wr(e)}?${(0,r.Am)(u).slice(1)}${f}`}function wr({config:e}){return e.emulator?R(e,yr):`https://${e.authDomain}/${vr}`}
/**
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
 */const Er="webStorageSupport";class Ir{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kt,this._completeRedirectFn=Bn,this._overrideRedirectResult=jn}async _openPopup(e,t,n,r){var o;_(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await _r(e,t,n,w(),r);return mr(e,i,Jt())}async _openRedirect(e,t,n,r){await this._originValidation(e);const o=await _r(e,t,n,w(),r);return Qt(o),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await cr(e),n=new Vn(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Er,{type:Er},(n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Er];void 0!==o&&t(!!o),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||fe()||ve()}}const Tr=Ir;class Sr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class Or extends Sr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Or(e)}_finalizeEnroll(e,t,n){return Dt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return _n(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Rr{constructor(){}static assertion(e){return Or._fromCredential(e)}}Rr.FACTOR_ID="phone";class Cr{static assertionForEnrollment(e,t){return Ar._fromSecret(e,t)}static assertionForSignIn(e,t){return Ar._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;y("undefined"!==typeof t.auth,"internal-error");const n=await Mt(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return kr._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}Cr.FACTOR_ID="totp";class Ar extends Sr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Ar(t,void 0,e)}static _fromEnrollmentId(e,t){return new Ar(t,e)}async _finalizeEnroll(e,t,n){return y("undefined"!==typeof this.secret,e,"argument-error"),jt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){y(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return wn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class kr{constructor(e,t,n,r,o,i,s){this.sessionInfo=i,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(e,t){return new kr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Pr(e)||Pr(t))&&(r=!0),r&&(Pr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Pr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Pr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var xr="@firebase/auth",Nr="0.23.2";
/**
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
 */
class Lr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function Dr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mr(e){(0,o.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;y(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},u=new De(r,o,i,c);return Fe(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,o.om)(new a.uA("auth-internal",(e=>{const t=Me(e.getProvider("auth").getImmediate());return(e=>new Lr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.KO)(xr,Nr,Dr(e)),(0,o.KO)(xr,Nr,"esm2017")}
/**
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
 */const jr=300,Ur=(0,r.XA)("authIdTokenMaxAge")||jr;let Fr=null;const Br=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ur)return;const o=null===n||void 0===n?void 0:n.token;Fr!==o&&(Fr=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $r(e=(0,o.Sx)()){const t=(0,o.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ue(e,{popupRedirectResolver:Tr,persistence:[yn,Ht,Kt]}),i=(0,r.XA)("authTokenSyncURL");if(i){const e=Br(i);Pt(n,e,(()=>e(n.currentUser))),kt(n,(t=>e(t)))}const s=(0,r.Tj)("auth");return s&&Be(n,`http://${s}`),n}Mr("Browser")},1387:function(e,t,n){n.d(t,{LA:function(){return se},aE:function(){return tt}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),o=n(144);
/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof document;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const o=t[r];n[r]=l(o)?o.map(e):e(o)}return n}const u=()=>{},l=Array.isArray;const f=/#/g,d=/&/g,h=/\//g,p=/=/g,m=/\?/g,g=/\+/g,v=/%5B/g,y=/%5D/g,b=/%5E/g,_=/%60/g,w=/%7B/g,E=/%7C/g,I=/%7D/g,T=/%20/g;function S(e){return encodeURI(""+e).replace(E,"|").replace(v,"[").replace(y,"]")}function O(e){return S(e).replace(w,"{").replace(I,"}").replace(b,"^")}function R(e){return S(e).replace(g,"%2B").replace(T,"+").replace(f,"%23").replace(d,"%26").replace(_,"`").replace(w,"{").replace(I,"}").replace(b,"^")}function C(e){return R(e).replace(p,"%3D")}function A(e){return S(e).replace(f,"%23").replace(m,"%3F")}function k(e){return null==e?"":A(e).replace(h,"%2F")}function P(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const x=/\/$/,N=e=>e.replace(x,"");function L(e,t,n="/"){let r,o={},i="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),o=e(i)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=V(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:P(s)}}function D(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function M(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function j(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&U(t.matched[r],n.matched[o])&&F(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function F(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!B(e[n],t[n]))return!1;return!0}function B(e,t){return l(e)?$(e,t):l(t)?$(t,e):e===t}function $(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function V(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];".."!==o&&"."!==o||r.push("");let i,s,a=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(i).join("/")}var W,H;(function(e){e["pop"]="pop",e["push"]="push"})(W||(W={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(H||(H={}));function z(e){if(!e)if(i){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),N(e)}const K=/^[^#]+#/;function q(e,t){return e.replace(K,"#")+t}function G(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const J=()=>({left:window.scrollX,top:window.scrollY});function Z(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=G(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function X(e,t){const n=history.state?history.state.position-t:-1;return n+e}const Q=new Map;function Y(e,t){Q.set(e,t)}function ee(e){const t=Q.get(e);return Q.delete(e),t}let te=()=>location.protocol+"//"+location.host;function ne(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let t=o.includes(e.slice(i))?e.slice(i).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),M(n,"")}const s=M(n,e);return s+r+o}function re(e,t,n,r){let o=[],i=[],s=null;const c=({state:i})=>{const a=ne(e,location),c=n.value,u=t.value;let l=0;if(i){if(n.value=a,t.value=i,s&&s===c)return void(s=null);l=u?i.position-u.position:0}else r(a);o.forEach((e=>{e(n.value,c,{delta:l,type:W.pop,direction:l?l>0?H.forward:H.back:H.unknown})}))};function u(){s=n.value}function l(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function f(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:J()}),"")}function d(){for(const e of i)e();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function oe(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?J():null}}function ie(e){const{history:t,location:n}=window,r={value:ne(e,n)},o={value:t.state};function i(r,i,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:te()+e+r;try{t[s?"replaceState":"pushState"](i,"",c),o.value=i}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=a({},t.state,oe(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,s,!0),r.value=e}function c(e,n){const s=a({},o.value,t.state,{forward:e,scroll:J()});i(s.current,s,!0);const c=a({},oe(r.value,e,null),{position:s.position+1},n);i(e,c,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:c,replace:s}}function se(e){e=z(e);const t=ie(e),n=re(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=a({location:"",base:e,go:r,createHref:q.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function ae(e){return"string"===typeof e||e&&"object"===typeof e}function ce(e){return"string"===typeof e||"symbol"===typeof e}const ue={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},le=Symbol("");var fe;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(fe||(fe={}));function de(e,t){return a(new Error,{type:e,[le]:!0},t)}function he(e,t){return e instanceof Error&&le in e&&(null==t||!!(e.type&t))}const pe="[^/]+?",me={sensitive:!1,strict:!1,start:!0,end:!0},ge=/[.+*?^${}()[\]/\\]/g;function ve(e,t){const n=a({},me,t),r=[];let o=n.start?"^":"";const i=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(o+="/");for(let t=0;t<a.length;t++){const r=a[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(ge,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;i.push({name:e,repeatable:n,optional:c});const l=u||pe;if(l!==pe){s+=10;try{new RegExp(`(${l})`)}catch(f){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+f.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),o+=d,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===l&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function c(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:s,optional:a}=e,c=i in t?t[i]:"";if(l(c)&&!s)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:i,parse:c,stringify:u}}function ye(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function be(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=ye(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(_e(r))return 1;if(_e(o))return-1}return o.length-r.length}function _e(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const we={type:0,value:""},Ee=/[a-zA-Z0-9_]/;function Ie(e){if(!e)return[[]];if("/"===e)return[[we]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a,c=0,u="",l="";function f(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&f(),s()):":"===a?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Ee.test(a)?d():(f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),f(),s(),o}function Te(e,t,n){const r=ve(Ie(e.path),n);const o=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function Se(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){const o=!r,c=Re(e);c.aliasOf=r&&r.record;const f=Pe(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let h,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(h=Te(t,n,f),r?r.alias.push(h):(p=p||h,p!==h&&p.alias.push(h),o&&e.name&&!Ae(h)&&s(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&l(h)}return p?()=>{s(p)}:u}function s(e){if(ce(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function c(){return n}function l(e){let t=0;while(t<n.length&&be(e,n[t])>=0&&(e.record.path!==n[t].record.path||!xe(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!Ae(e)&&r.set(e.record.name,e)}function f(e,t){let o,i,s,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw de(1,{location:e});0,s=o.record.name,c=a(Oe(t.params,o.keys.filter((e=>!e.optional)).concat(o.parent?o.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Oe(e.params,o.keys.map((e=>e.name)))),i=o.stringify(c)}else if(null!=e.path)i=e.path,o=n.find((e=>e.re.test(i))),o&&(c=o.parse(i),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw de(1,{location:e,currentLocation:t});s=o.record.name,c=a({},t.params,e.params),i=o.stringify(c)}const u=[];let l=o;while(l)u.unshift(l.record),l=l.parent;return{name:s,path:i,params:c,matched:u,meta:ke(u)}}return t=Pe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:f,removeRoute:s,getRoutes:c,getRecordMatcher:o}}function Oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Re(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function Ae(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ke(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function Pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function xe(e,t){return t.children.some((t=>t===e||xe(e,t)))}function Ne(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(g," "),n=e.indexOf("="),i=P(n<0?e:e.slice(0,n)),s=n<0?null:P(e.slice(n+1));if(i in t){let e=t[i];l(e)||(e=t[i]=[e]),e.push(s)}else t[i]=s}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=C(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=l(r)?r.map((e=>e&&R(e))):[r&&R(r)];o.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function De(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),je=Symbol(""),Ue=Symbol(""),Fe=Symbol(""),Be=Symbol("");function $e(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ve(e,t,n,r,o,i=(e=>e())){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((a,c)=>{const u=e=>{!1===e?c(de(4,{from:n,to:t})):e instanceof Error?c(e):ae(e)?c(de(2,{from:t,to:e})):(s&&r.enterCallbacks[o]===s&&"function"===typeof e&&s.push(e),a())},l=i((()=>e.call(r&&r.instances[o],t,n,u)));let f=Promise.resolve(l);e.length<3&&(f=f.then(u)),f.catch((e=>c(e)))}))}function We(e,t,n,r,o=(e=>e())){const i=[];for(const a of e){0;for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(He(c)){const s=c.__vccOpts||c,u=s[t];u&&i.push(Ve(u,n,r,a,e,o))}else{let u=c();0,i.push((()=>u.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=s(i)?i.default:i;a.components[e]=c;const u=c.__vccOpts||c,l=u[t];return l&&Ve(l,n,r,a,e,o)()}))))}}}return i}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=(0,r.WQ)(Ue),n=(0,r.WQ)(Fe);const i=(0,r.EW)((()=>{const n=(0,o.R1)(e.to);return t.resolve(n)})),s=(0,r.EW)((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(U.bind(null,r));if(s>-1)return s;const a=Ze(e[t-2]);return t>1&&Ze(r)===a&&o[o.length-1].path!==a?o.findIndex(U.bind(null,e[t-2])):s})),a=(0,r.EW)((()=>s.value>-1&&Je(n.params,i.value.params))),c=(0,r.EW)((()=>s.value>-1&&s.value===n.matched.length-1&&F(n.params,i.value.params)));function l(n={}){return Ge(n)?t[(0,o.R1)(e.replace)?"replace":"push"]((0,o.R1)(e.to)).catch(u):Promise.resolve()}return{route:i,href:(0,r.EW)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ke=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=(0,o.Kh)(ze(e)),{options:i}=(0,r.WQ)(Ue),s=(0,r.EW)((()=>({[Xe(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),qe=Ke;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!l(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}function Ze(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=(0,r.WQ)(Be),s=(0,r.EW)((()=>e.route||i.value)),c=(0,r.WQ)(je,0),u=(0,r.EW)((()=>{let e=(0,o.R1)(c);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.EW)((()=>s.value.matched[u.value]));(0,r.Gt)(je,(0,r.EW)((()=>u.value+1))),(0,r.Gt)(Me,l),(0,r.Gt)(Be,s);const f=(0,o.KR)();return(0,r.wB)((()=>[f.value,l.value,e.name]),(([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&U(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=s.value,i=e.name,c=l.value,u=c&&c.components[i];if(!u)return Ye(n.default,{Component:u,route:o});const d=c.props[i],h=d?!0===d?o.params:"function"===typeof d?d(o):d:null,p=e=>{e.component.isUnmounted&&(c.instances[i]=null)},m=(0,r.h)(u,a({},h,t,{onVnodeUnmounted:p,ref:f}));return Ye(n.default,{Component:m,route:o})||m}}});function Ye(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Qe;function tt(e){const t=Se(e.routes,e),n=e.parseQuery||Ne,s=e.stringifyQuery||Le,f=e.history;const d=$e(),h=$e(),p=$e(),m=(0,o.IJ)(ue);let g=ue;i&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=c.bind(null,(e=>""+e)),y=c.bind(null,k),b=c.bind(null,P);function _(e,n){let r,o;return ce(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function w(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map((e=>e.record))}function I(e){return!!t.getRecordMatcher(e)}function T(e,r){if(r=a({},r||m.value),"string"===typeof e){const o=L(n,e,r.path),i=t.resolve({path:o.path},r),s=f.createHref(o.fullPath);return a(o,i,{params:b(i.params),hash:P(o.hash),redirectedFrom:void 0,href:s})}let o;if(null!=e.path)o=a({},e,{path:L(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];o=a({},e,{params:y(t)}),r.params=y(r.params)}const i=t.resolve(o,r),c=e.hash||"";i.params=v(b(i.params));const u=D(s,a({},e,{hash:O(c),path:i.path})),l=f.createHref(u);return a({fullPath:u,hash:c,query:s===Le?De(e.query):e.query||{}},i,{redirectedFrom:void 0,href:l})}function S(e){return"string"===typeof e?L(n,e,m.value.path):a({},e)}function R(e,t){if(g!==e)return de(8,{from:t,to:e})}function C(e){return N(e)}function A(e){return C(a(S(e),{replace:!0}))}function x(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function N(e,t){const n=g=T(e),r=m.value,o=e.state,i=e.force,c=!0===e.replace,u=x(n);if(u)return N(a(S(u),{state:"object"===typeof u?a({},o,u.state):o,force:i,replace:c}),t||n);const l=n;let f;return l.redirectedFrom=t,!i&&j(s,r,n)&&(f=de(16,{to:l,from:r}),ne(r,r,!0,!1)),(f?Promise.resolve(f):F(l,r)).catch((e=>he(e)?he(e,2)?e:te(e):G(e,l,r))).then((e=>{if(e){if(he(e,2))return N(a({replace:c},S(e.to),{state:"object"===typeof e.to?a({},o,e.to.state):o,force:i}),t||l)}else e=$(l,r,!0,c,o);return B(l,r,e),e}))}function M(e,t){const n=R(e,t);return n?Promise.reject(n):Promise.resolve()}function U(e){const t=ie.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function F(e,t){let n;const[r,o,i]=nt(e,t);n=We(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Ve(r,e,t))}));const s=M.bind(null,e,t);return n.push(s),ae(n).then((()=>{n=[];for(const r of d.list())n.push(Ve(r,e,t));return n.push(s),ae(n)})).then((()=>{n=We(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Ve(r,e,t))}));return n.push(s),ae(n)})).then((()=>{n=[];for(const r of i)if(r.beforeEnter)if(l(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ve(o,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(s),ae(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=We(i,"beforeRouteEnter",e,t,U),n.push(s),ae(n)))).then((()=>{n=[];for(const r of h.list())n.push(Ve(r,e,t));return n.push(s),ae(n)})).catch((e=>he(e,8)?e:Promise.reject(e)))}function B(e,t,n){p.list().forEach((r=>U((()=>r(e,t,n)))))}function $(e,t,n,r,o){const s=R(e,t);if(s)return s;const c=t===ue,u=i?history.state:{};n&&(r||c?f.replace(e.fullPath,a({scroll:c&&u&&u.scroll},o)):f.push(e.fullPath,o)),m.value=e,ne(e,t,n,c),te()}let V;function H(){V||(V=f.listen(((e,t,n)=>{if(!se.listening)return;const r=T(e),o=x(r);if(o)return void N(a(o,{replace:!0}),r).catch(u);g=r;const s=m.value;i&&Y(X(s.fullPath,n.delta),J()),F(r,s).catch((e=>he(e,12)?e:he(e,2)?(N(e.to,r).then((e=>{he(e,20)&&!n.delta&&n.type===W.pop&&f.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&f.go(-n.delta,!1),G(e,r,s)))).then((e=>{e=e||$(r,s,!1),e&&(n.delta&&!he(e,8)?f.go(-n.delta,!1):n.type===W.pop&&he(e,20)&&f.go(-1,!1)),B(r,s,e)})).catch(u)})))}let z,K=$e(),q=$e();function G(e,t,n){te(e);const r=q.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function Q(){return z&&m.value!==ue?Promise.resolve():new Promise(((e,t)=>{K.add([e,t])}))}function te(e){return z||(z=!e,H(),K.list().forEach((([t,n])=>e?n(e):t())),K.reset()),e}function ne(t,n,o,s){const{scrollBehavior:a}=e;if(!i||!a)return Promise.resolve();const c=!o&&ee(X(t.fullPath,0))||(s||!o)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&Z(e))).catch((e=>G(e,t,n)))}const re=e=>f.go(e);let oe;const ie=new Set,se={currentRoute:m,listening:!0,addRoute:_,removeRoute:w,hasRoute:I,getRoutes:E,resolve:T,options:e,push:C,replace:A,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:h.add,afterEach:p.add,onError:q.add,isReady:Q,install(e){const t=this;e.component("RouterLink",qe),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.R1)(m)}),i&&!oe&&m.value===ue&&(oe=!0,C(f.location).catch((e=>{0})));const n={};for(const o in ue)Object.defineProperty(n,o,{get:()=>m.value[o],enumerable:!0});e.provide(Ue,t),e.provide(Fe,(0,o.Gc)(n)),e.provide(Be,m);const r=e.unmount;ie.add(e),e.unmount=function(){ie.delete(e),ie.size<1&&(g=ue,V&&V(),V=null,m.value=ue,oe=!1,z=!1),r()}}};function ae(e){return e.reduce(((e,t)=>e.then((()=>U(t)))),Promise.resolve())}return se}function nt(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const i=t.matched[s];i&&(e.matched.find((e=>U(e,i)))?r.push(i):n.push(i));const a=e.matched[s];a&&(t.matched.find((e=>U(e,a)))||o.push(a))}return[n,r,o]}}}]);
//# sourceMappingURL=chunk-vendors.7b845498.js.map
/*!
 * vue.switch.js
 * (c) 2017-2018 yuw
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue.message"]=t():e["vue.message"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function s(e,t,n){var s=new o;s[e](t,n),s.vm=s.$mount(),document.getElementById("vue-message-wrap").appendChild(s.vm.$el)}Object.defineProperty(t,"__esModule",{value:!0});var o=Vue.extend(n(1)),r=function(){var e=document.createElement("div");e.setAttribute("class","vue-message-wrap"),e.setAttribute("id","vue-message-wrap"),document.body.appendChild(e)};r.prototype.success=function(e,t){s("success",e,t)},r.prototype.error=function(e,t){s("error",e,t)},r.prototype.warning=function(e,t){s("warning",e,t)},r.prototype.info=function(e,t){s("info",e,t)};var i=new r;Vue.prototype.$message=i;var a=i;t.default=a},function(e,t,n){var s=n(3)(n(4),n(10),!1,function(e){n(2)},null,null);e.exports=s.exports},function(e,t){},function(e,t){e.exports=function(e,t,n,s,o,r){var i,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,a=e.default);var u,f="function"==typeof a?a.options:a;if(t&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o),r?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},f._ssrRegister=u):s&&(u=s),u){var p=f.functional,d=p?f.render:f.beforeCreate;p?(f._injectStyles=u,f.render=function(e,t){return u.call(t),d(e,t)}):f.beforeCreate=d?[].concat(d,u):[u]}return{esModule:i,exports:a,options:f}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{message:{}}},mounted:function(){},computed:{typeImg:function(){return n(5)("./"+this.message.type+".svg")}},methods:{success:function(e,t){this.popMessage(e,"success",t)},error:function(e,t){this.popMessage(e,"error",t)},warning:function(e,t){this.popMessage(e,"warning",t)},info:function(e,t){this.popMessage(e,"info",t)},choseClass:function(e){var t="";return e.isEnter&&(t="move-up-enter"),e.isLeave&&(t="move-up-leave"),t},popMessage:function(e,t,n){var s=this,o={value:e||"",type:t,isEnter:!0,isLeave:!1};s.message=o,setTimeout(function(){s.message.isEnter=!1},300),setTimeout(function(){s.message.isLeave=!0,setTimeout(function(){s.$destroy(!0),s.$el.parentNode.removeChild(s.$el)},300)},n||1500)}}}},function(e,t,n){function s(e){return n(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./error.svg":6,"./info.svg":7,"./success.svg":8,"./warning.svg":9};s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id=5},function(e,t,n){e.exports=n.p+"error.svg?fa45b62c777ceabdc679bf563cba6357"},function(e,t,n){e.exports=n.p+"info.svg?8393cb61e91b9634969035a7a7c118a8"},function(e,t,n){e.exports=n.p+"success.svg?f5ea7dcba049dc67fcc8957244417d2a"},function(e,t,n){e.exports=n.p+"warning.svg?7a1a61fee53217ba8fd1b5b76fcf17af"},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-message-item",class:e.choseClass(e.message)},[n("div",{staticClass:"vue-message-content"},["success"===e.message.type?n("i",{staticClass:"fa fa-check-circle success"}):e._e(),"error"===e.message.type?n("i",{staticClass:"fa fa fa-times-circle error"}):e._e(),"warning"===e.message.type?n("i",{staticClass:"fa fa-exclamation-circle warning"}):e._e(),"info"===e.message.type?n("i",{staticClass:"fa fa-info-circle info"}):e._e(),n("span",{domProps:{textContent:e._s(e.message.value)}})])])},staticRenderFns:[]}}])});
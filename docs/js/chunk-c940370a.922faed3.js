(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c940370a"],{"0d9c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"case",attrs:{id:"case2"}},[n("wheel-drawer",{ref:"wheelRef",attrs:{"prize-list":t.prizeList,"bg-img":r("90a6"),"bg-deg":30},on:{pointerClick:t.startHdl,rotateOver:t.overHdl}}),n("ul",t._l(t.prizes,(function(e,r){return n("li",{key:r},[t._v(t._s(r+1)+".抽中了【"+t._s(e.name)+"】")])})),0)],1)},o=[],i=(r("482b"),r("86bd"),r("63ff"),{data:function(){return{prizeList:[{name:"一等奖冰箱冰箱冰箱冰箱冰箱",id:1,bgColor:"#fff"},{name:"二等奖：彩电",id:2,bgColor:"#000"},{name:"二等奖：彩电",id:2,bgColor:"#fff"},{name:"三等奖：洗衣机",id:3,bgColor:"#000"},{name:"一等奖：冰箱冰箱冰箱冰箱冰箱",id:1,bgColor:"#fff"},{name:"二等奖：彩电",id:2,bgColor:"#000"},{name:"二等奖：彩电",id:2,bgColor:"#fff"},{name:"三等奖：洗衣机",id:3,bgColor:"#000"},{name:"三等奖：洗衣机",id:3,bgColor:"#000"}],prizeIndex:0,prizes:[]}},methods:{fetchData:function(){var t=this;return new Promise((function(e,r){setTimeout((function(){function r(t,e){return Math.floor(Math.random()*(e-t+1))+t}t.prizeIndex=r(0,t.prizeList.length-1),console.log("生成的奖品:",t.prizeList[t.prizeIndex].name),e(!0)}),500)})).catch()},startHdl:function(t){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.fetchData());case 2:this.$refs.wheelRef.go(this.prizeIndex);case 3:case"end":return t.stop()}}),null,this)},overHdl:function(){this.prizes.push(this.prizeList[this.prizeIndex])}}}),a=i,c=(r("586f"),r("4e82")),u=Object(c["a"])(a,n,o,!1,null,"45aa1f66",null);e["default"]=u.exports},"482b":function(t,e,r){var n=r("6c9a"),o=r("4a53").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,u="name";!n||u in i||o(i,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},"586f":function(t,e,r){"use strict";var n=r("91a9"),o=r.n(n);o.a},"63ff":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=_(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",d={};function v(){}function y(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(C([])));x&&x!==r&&n.call(x,i)&&(m=x);var b=g.prototype=v.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(r,o,i,a){var c=s(t[r],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function o(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=o}function _(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return G()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:l,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}function C(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:G}}function G(){return{value:e,done:!0}}return y.prototype=b.constructor=g,g.constructor=y,g[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o){var i=new E(u(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"90a6":function(t,e,r){t.exports=r.p+"img/zp2.f1e8fe0c.png"},"91a9":function(t,e,r){var n=r("a253");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("85cb").default;o("39655fc0",n,!0,{sourceMap:!1,shadowMode:!1})},a253:function(t,e,r){e=t.exports=r("ef74")(!1),e.push([t.i,".case[data-v-45aa1f66]{padding:60px}#case2[data-v-45aa1f66]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}ul[data-v-45aa1f66]{margin-top:20px;width:100%}li[data-v-45aa1f66]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""])}}]);
//# sourceMappingURL=chunk-c940370a.922faed3.js.map
!function(r){var n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var o in r)e.d(t,o,function(n){return r[n]}.bind(null,o));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=4)}([function(r,n,e){"use strict";var t=e(2),o=e.n(t),i=e(3),a=e.n(i)()(o.a);a.push([r.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),a.push([r.i,":root {\r\n    --primary-color: #fff;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: Roboto;\r\n}\r\n\r\nbody {\r\n    background-color: var(--primary-color);\r\n    font-size: 1.1em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 720px;\r\n    margin: 50px auto;\r\n    padding: 24px;\r\n    background-color: aliceblue;\r\n    border-radius: 8px;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column\r\n}\r\nform label {\r\n    display: block;\r\n    padding: 8px 0px;\r\n}\r\n\r\nform input {\r\n    display: block;\r\n    margin-bottom: 8px;\r\n    padding: 8px 16px;\r\n    border: none;\r\n    font-size: 24px;\r\n}\r\n\r\nform input:focus {\r\n    border: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    padding: 8px 16px;\r\n    border: none;\r\n    background-color: indianred;\r\n    color: white;\r\n    margin-top: 24px;\r\n    font-size: 24px;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    margin: 24px 0;\r\n}\r\n\r\ntable th {\r\n    text-align: start;\r\n}\r\n\r\n.resultado {\r\n    padding: 8px 0;\r\n    text-align: center;\r\n    margin-top: 16px;\r\n    border-radius: 8px;\r\n    font-size: 24px;\r\n}\r\n.invalido {\r\n    background-color: crimson;\r\n    color: whitesmoke;\r\n}\r\n\r\n.valido {\r\n    background-color: lightgreen;\r\n}","",{version:3,sources:["webpack://src/assets/css/style.css"],names:[],mappings:"AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;IACtC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb;AACJ;AACA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,2BAA2B;IAC3B,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;AAChC",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n:root {\r\n    --primary-color: #fff;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: Roboto;\r\n}\r\n\r\nbody {\r\n    background-color: var(--primary-color);\r\n    font-size: 1.1em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 720px;\r\n    margin: 50px auto;\r\n    padding: 24px;\r\n    background-color: aliceblue;\r\n    border-radius: 8px;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column\r\n}\r\nform label {\r\n    display: block;\r\n    padding: 8px 0px;\r\n}\r\n\r\nform input {\r\n    display: block;\r\n    margin-bottom: 8px;\r\n    padding: 8px 16px;\r\n    border: none;\r\n    font-size: 24px;\r\n}\r\n\r\nform input:focus {\r\n    border: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    padding: 8px 16px;\r\n    border: none;\r\n    background-color: indianred;\r\n    color: white;\r\n    margin-top: 24px;\r\n    font-size: 24px;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    margin: 24px 0;\r\n}\r\n\r\ntable th {\r\n    text-align: start;\r\n}\r\n\r\n.resultado {\r\n    padding: 8px 0;\r\n    text-align: center;\r\n    margin-top: 16px;\r\n    border-radius: 8px;\r\n    font-size: 24px;\r\n}\r\n.invalido {\r\n    background-color: crimson;\r\n    color: whitesmoke;\r\n}\r\n\r\n.valido {\r\n    background-color: lightgreen;\r\n}"],sourceRoot:""}]),n.a=a},function(r,n,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),a=[];function c(r){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===r){n=e;break}return n}function A(r,n){for(var e={},t=[],o=0;o<r.length;o++){var i=r[o],A=n.base?i[0]+n.base:i[0],l=e[A]||0,u="".concat(A," ").concat(l);e[A]=l+1;var s=c(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(d)):a.push({identifier:u,updater:b(d,n),references:1}),t.push(u)}return t}function l(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var a=i(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,s=(u=[],function(r,n){return u[r]=n,u.filter(Boolean).join("\n")});function d(r,n,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=s(n,o);else{var i=document.createTextNode(o),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(i,a[n]):r.appendChild(i)}}function p(r,n,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var f=null,m=0;function b(r,n){var e,t,o;if(n.singleton){var i=m++;e=f||(f=l(n)),t=d.bind(null,e,i,!1),o=d.bind(null,e,i,!0)}else e=l(n),t=p.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=A(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var o=c(e[t]);a[o].references--}for(var i=A(r,n),l=0;l<e.length;l++){var u=c(e[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=i}}}},function(r,n,e){"use strict";function t(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var e=[],t=!0,o=!1,i=void 0;try{for(var a,c=r[Symbol.iterator]();!(t=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);t=!0);}catch(r){o=!0,i=r}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return e}(r,n)||function(r,n){if(!r)return;if("string"==typeof r)return o(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}r.exports=function(r){var n=t(r,4),e=n[1],o=n[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),c="/*# ".concat(a," */"),A=o.sources.map((function(r){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(r," */")}));return[e].concat(A).concat([c]).join("\n")}return[e].join("\n")}},function(r,n,e){"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<r.length;c++){var A=[].concat(r[c]);t&&o[A[0]]||(e&&(A[2]?A[2]="".concat(e," and ").concat(A[2]):A[2]=e),n.push(A))}},n}},function(r,n,e){"use strict";e.r(n);var t=e(1),o=e.n(t),i=e(0),a={insert:"head",singleton:!1};o()(i.a,a),i.a.locals}]);
//# sourceMappingURL=bundle.js.map
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Table=e():t.Table=e()}(window,(function(){return function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=4)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",i=t[3];if(!i)return o;if(e&&"function"==typeof btoa){var n=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),s=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[o].concat(s).concat([n]).join("\n")}var r;return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o})).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var s=this[n][0];"number"==typeof s&&(i[s]=!0)}for(n=0;n<t.length;n++){var r=t[n];"number"==typeof r[0]&&i[r[0]]||(o&&!r[2]?r[2]=o:o&&(r[2]="("+r[2]+") and ("+o+")"),e.push(r))}},e}},function(t,e,o){var i,n,s={},r=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=i.apply(this,arguments)),n}),l=function(t,e){return e?e.querySelector(t):document.querySelector(t)},a=function(t){var e={};return function(t,o){if("function"==typeof t)return t();if(void 0===e[t]){var i=l.call(this,t,o);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),c=null,h=0,d=[],u=o(7);function f(t,e){for(var o=0;o<t.length;o++){var i=t[o],n=s[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(g(i.parts[r],e))}else{var l=[];for(r=0;r<i.parts.length;r++)l.push(g(i.parts[r],e));s[i.id]={id:i.id,refs:1,parts:l}}}}function _(t,e){for(var o=[],i={},n=0;n<t.length;n++){var s=t[n],r=e.base?s[0]+e.base:s[0],l={css:s[1],media:s[2],sourceMap:s[3]};i[r]?i[r].parts.push(l):o.push(i[r]={id:r,parts:[l]})}return o}function p(t,e){var o=a(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===t.insertAt)i?i.nextSibling?o.insertBefore(e,i.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),d.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=a(t.insertAt.before,o);o.insertBefore(e,n)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return o.nc}();i&&(t.attrs.nonce=i)}return v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach((function(o){t.setAttribute(o,e[o])}))}function g(t,e){var o,i,n,s;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var r=h++;o=c||(c=m(e)),i=x.bind(null,o,r,!1),n=x.bind(null,o,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),i=L.bind(null,o,e),n=function(){b(o),o.href&&URL.revokeObjectURL(o.href)}):(o=m(e),i=C.bind(null,o),n=function(){b(o)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=_(t,e);return f(o,e),function(t){for(var i=[],n=0;n<o.length;n++){var r=o[n];(l=s[r.id]).refs--,i.push(l)}t&&f(_(t,e),e);for(n=0;n<i.length;n++){var l;if(0===(l=i[n]).refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete s[l.id]}}}};var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,o,i){var n=o?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,n);else{var s=document.createTextNode(n),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function C(t,e){var o=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}function L(t,e,o){var i=o.css,n=o.sourceMap,s=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||s)&&(i=u(i)),n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([i],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(r),l&&URL.revokeObjectURL(l)}},function(t,e){t.exports='<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="yellowgreen"></circle><path fill="#FFF" d="M10.9 9.1h3.7a.9.9 0 1 1 0 1.8h-3.7v3.7a.9.9 0 1 1-1.8 0v-3.7H5.4a.9.9 0 0 1 0-1.8h3.7V5.4a.9.9 0 0 1 1.8 0v3.7z"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="tomato"></circle><path fill="#FFF" d="M10.9 9.1h3.7a.9.9 0 1 1 0 1.8h-3.7v3.7a.9.9 0 1 1-1.8 0v-3.7H5.4a.9.9 0 0 1 0-1.8h3.7V5.4a.9.9 0 0 1 1.8 0v3.7z"></path></svg>'},function(t,e,o){const i=o(13).TableConstructor,n=o(12),s="tc-table__inp";t.exports=class{static get enableLineBreaks(){return!0}static get toolbox(){return{icon:n,title:(this.i18n,"Table")}}constructor({data:t,config:e,api:o}){this.api=o,this.i18n=e.i18n||"en",this._tableConstructor=new i(t,e,o)}render(){return this._tableConstructor.htmlElement}save(t){const e=[],o=t.querySelector("table").rows;for(let t=0;t<o.length;t++){const i=o[t],n=Array.from(i.cells);n.map(t=>t.querySelector("."+s)).every(this._isEmpty)||e.push(n.map(t=>t.innerHTML))}return{content:e}}_isEmpty(t){return!t.textContent.trim()}}},function(t,e,o){var i=o(6);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(1)(i,n);i.locals&&(t.exports=i.locals)},function(t,e,o){(t.exports=o(0)(!1)).push([t.i,".tc-editor{padding:10px;position:relative;box-sizing:content-box;width:100%;left:-10px}",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,i=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var n,s=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(n=0===s.indexOf("//")?s:0===s.indexOf("/")?o+s:i+s.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")}))}},function(t,e,o){var i=o(9);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(1)(i,n);i.locals&&(t.exports=i.locals)},function(t,e,o){(t.exports=o(0)(!1)).push([t.i,".tc-toolbar{position:relative;background:#5cd6ff;}.tc-toolbar--hidden{visibility:hidden}.tc-toolbar--hor{width:100%;height:1px;flex-direction:row;left:0;top:1px}.tc-toolbar--hor,.tc-toolbar--ver{display:flex;align-items:center;position:absolute;z-index:100}.tc-toolbar--ver{height:100%;width:1px;flex-direction:column;top:0;left:-1px}.tc-toolbar__mask{position:absolute;display:none;}.tc-toolbar__mask--hor{top:0;left:0;width:100%;height:18px;opacity:.3}.tc-toolbar__mask--add{background2:linear-gradient(180deg,#b8cc47,rgba(164,179,87,0));background:repeating-linear-gradient(45deg,#e6f5cb,#e6f5cb 2%,#9acd32 0,#9acd32 4%);opacity:.3}.tc-toolbar__mask--ver{top:0;left:0;height:100%;width:18px;opacity:.3}.tc-toolbar__mask--delete{left:-18px;background:repeating-linear-gradient(45deg,#f9bbb0,#f9bbb0 2%,tomato 0,tomato 4%);opacity:.3}.tc-toolbar__plus{height:21px;width:21px;margin-top:0;cursor:pointer;z-index:1;}.tc-toolbar__plus--hor{margin-left:-10px}.tc-toolbar__plus--ver{margin-top:-10px}.tc-toolbar__minus{height:21px;width:21px;cursor:pointer;z-index:1;}.tc-toolbar__minus--hor{margin-left:-20px;right:-10px}.tc-toolbar__minus--hor,.tc-toolbar__minus--ver{position:absolute}.tc-toolbar__minus--ver{margin-top:-20px;bottom:-10px}.tc-toolbar__shine-line--hor{min-height:1px;width:100%}.tc-toolbar__shine-line--ver{min-width:1px;height:100%}",""])},function(t,e,o){var i=o(11);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(1)(i,n);i.locals&&(t.exports=i.locals)},function(t,e,o){(t.exports=o(0)(!1)).push([t.i,".tc-table{width:100%;border-collapse:collapse;table-layout:fixed;}.tc-table__wrap{border:1px solid #dbdbe2;border-radius:3px;position:relative;width:100%;box-sizing:border-box}.tc-table__cell{border:1px solid #dbdbe2;padding:0;vertical-align:top}.tc-table__area{padding:10px;height:100%}.tc-table__inp{outline:none;flex-grow:100;min-height:1.5em;height:100%;overflow:hidden}.tc-table tbody tr:first-child td{border-top:none}.tc-table tbody tr:last-child td{border-bottom:none}.tc-table tbody tr td:last-child{border-right:none}.tc-table tbody tr td:first-child{border-left:none}",""])},function(t,e){t.exports='<svg width="18" height="14"><path d="M2.833 8v1.95a1.7 1.7 0 0 0 1.7 1.7h3.45V8h-5.15zm0-2h5.15V2.35h-3.45a1.7 1.7 0 0 0-1.7 1.7V6zm12.3 2h-5.15v3.65h3.45a1.7 1.7 0 0 0 1.7-1.7V8zm0-2V4.05a1.7 1.7 0 0 0-1.7-1.7h-3.45V6h5.15zM4.533.1h8.9a3.95 3.95 0 0 1 3.95 3.95v5.9a3.95 3.95 0 0 1-3.95 3.95h-8.9a3.95 3.95 0 0 1-3.95-3.95v-5.9A3.95 3.95 0 0 1 4.533.1z"></path></svg>'},function(t,e,o){"use strict";o.r(e),o.d(e,"TableConstructor",(function(){return Y}));o(5);function i(t){return!(null==t)}function n(t,e=null,o=null,n=null){const s=document.createElement(t);if(i(e))for(let t=0;t<e.length;t++)i(e[t])&&s.classList.add(e[t]);if(i(o))for(const t in o)s.setAttribute(t,o[t]);if(i(n))for(let t=0;t<n.length;t++)i(n[t])&&s.appendChild(n[t]);return s}function s(t){const e=t.getBoundingClientRect();return{y1:Math.floor(e.top+window.pageYOffset),x1:Math.floor(e.left+window.pageXOffset),x2:Math.floor(e.right+window.pageXOffset),y2:Math.floor(e.bottom+window.pageYOffset)}}function r(t,e,o){let i;return e-t.x1>=-1&&e-t.x1<=11&&(i="left"),t.x2-e>=-1&&t.x2-e<=11&&(i="right"),o-t.y1>=-1&&o-t.y1<=11&&(i="top"),t.y2-o>=-1&&t.y2-o<=11&&(i="bottom"),i}function l(t,e){if(!t||!e)return{topOffset:0,leftOffset:0,rightOffset:0,bottomOffset:0};const o=t.getBoundingClientRect(),i=e.getBoundingClientRect();return{topOffset:i.top-o.top,leftOffset:i.left-o.left,rightOffset:i.right-o.right,bottomOffset:i.bottom-o.bottom}}function a(t){const e=t.target.parentElement.parentElement.parentElement.parentElement.childNodes;let o=null;for(let t=0;t<e.length;t++)if("TABLE"===e[t].nodeName){o=e[t];break}return o}function c(t,e,o){var i;return function(){var n=this,s=arguments,r=function(){i=null,o||t.apply(n,s)},l=o&&!i;clearTimeout(i),i=setTimeout(r,e),l&&t.apply(n,s)}}o(8);var h=o(2),d=o.n(h),u=o(3),f=o.n(u);const _="tc-toolbar",p="tc-toolbar--hidden",b="tc-toolbar--hor",m="tc-toolbar__shine-line--hor",v="tc-toolbar--ver",g="tc-toolbar__shine-line--ver",y="tc-toolbar__mask",w="tc-toolbar__mask--add",x="tc-toolbar__mask--delete",C="tc-toolbar__mask--hor",L="tc-toolbar__mask--ver",T="tc-toolbar__plus",E="tc-toolbar__plus--hor",k="tc-toolbar__plus--ver",B="tc-toolbar__minus",O="tc-toolbar__minus--hor",R="tc-toolbar__minus--ver",S="tc-table__area";class A{constructor(){this._plusButton=this._generatePlusButton(),this._minusButton=this._generateMinusButton(),this._highlightingLine=this._generateHighlightingLine(),this._mask=this._generateToolBarMask(),this._toolbar=this._generateToolBar([this._plusButton,this._minusButton,this._highlightingLine,this._mask])}hide(){this._toolbar.classList.add(p)}show(){this._toolbar.classList.remove(p),this._highlightingLine.classList.remove(p)}hideLine(){this._highlightingLine.classList.add(p)}get htmlElement(){return this._toolbar}_generatePlusButton(){const t=n("div",[T]);return t.innerHTML=d.a,t.addEventListener("click",t=>{t.stopPropagation();const e=new CustomEvent("click",{detail:{x:t.pageX,y:t.pageY},bubbles:!0});this._toolbar.dispatchEvent(e)}),t.addEventListener("mouseout",c(t=>{t.stopPropagation(),this._mask.classList.remove(x),this._mask.classList.remove(w),this._mask.style.display="none"},300)),t}_generateMinusButton(){const t=n("div",[B]);return t.innerHTML=f.a,t.style="transform: rotate(45deg)",t.addEventListener("click",t=>{t.stopPropagation();const e=new CustomEvent("click",{detail:{x:t.pageX,y:t.pageY,action:"minus"},bubbles:!0});this._toolbar.dispatchEvent(e)}),t.addEventListener("mouseout",c(t=>{t.stopPropagation(),this._mask.classList.remove(x),this._mask.classList.remove(w),this._mask.style.display="none"},300)),t}_generateHighlightingLine(){const t=n("div",[_]);return t.addEventListener("click",t=>{t.stopPropagation()}),t}_generateToolBar(t){const e=n("div",[p],null,t);return e.addEventListener("mouseleave",t=>{this._recalcMousePos(t)}),e}_generateToolBarMask(){return n("div",[y])}_recalcMousePos(t){this.hide();const e=document.elementFromPoint(t.pageX,t.pageY);if(null!==e&&e.classList.contains(S)){const o=new MouseEvent("mouseover",{clientX:t.pageX,clientY:t.pageY});e.dispatchEvent(o)}}}class M extends A{constructor(){super(),this._toolbar.classList.add(b),this._plusButton.classList.add(E),this._minusButton.classList.add(O),this._highlightingLine.classList.add(m),this._mask.classList.add(C),this._plusButton.addEventListener("mouseover",c(t=>{t.stopPropagation(),this._mask.classList.add(w),this._mask.style.top="0",this._mask.style.left="0",this._mask.style.display="block"},300)),this._minusButton.addEventListener("mouseover",c(t=>{t.stopPropagation();const e=a(t),{topOffset:o,rightOffset:i,bottomOffset:n}=l(e,t.target.parentElement);this._mask.classList.add(x),-12===o&&10===i&&10!==n?(this._mask.style.top="0",this._mask.style.left="0"):-12!==o&&10===i&&10===n&&(this._mask.style.top="-16px",this._mask.style.left="0"),this._mask.style.display="block"},300))}showIn(t){const e=Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).height));this._toolbar.style.top=t-e+"px",this.show()}}class I extends A{constructor(){super(),this._toolbar.classList.add(v),this._plusButton.classList.add(k),this._minusButton.classList.add(R),this._highlightingLine.classList.add(g),this._mask.classList.add(L),this._plusButton.addEventListener("mouseover",c(t=>{t.stopPropagation(),this._mask.classList.add(w),this._mask.style.top="0",this._mask.style.left="0",this._mask.style.display="block"},300)),this._minusButton.addEventListener("mouseover",c(t=>{t.stopPropagation();const e=a(t),{topOffset:o,leftOffset:i,rightOffset:n,bottomOffset:s}=l(e,t.target.parentElement);this._mask.classList.add(x),-12===i&&10===s?this._mask.style.left="0":-12!==o&&10===n&&10===s&&(this._mask.style.left="-16px"),this._mask.style.display="block"},300))}showIn(t){const e=Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).width));this._toolbar.style.left=t-e+"px",this.show()}}o(10);const N="tc-table",j="tc-table__inp",P="tc-table__cell",U="tc-table__wrap",z="tc-table__area";class D{constructor(){this._numberOfColumns=0,this._numberOfRows=0,this._element=this._createTableWrapper(),this._table=this._element.querySelector("table"),this._hangEvents()}addColumn(t=-1){this._numberOfColumns++;const e=this._table.rows;for(let o=0;o<e.length;o++){const i=e[o].insertCell(t);this._fillCell(i)}this._rebuildCellIndex()}addRow(t=-1){this._numberOfRows++;const e=this._table.insertRow(t);return this._fillRow(e),this._rebuildCellIndex(),e}deleteColumn(t){const e=this._table.querySelectorAll("."+t);if(0===e.length)return!1;this._numberOfColumns-=1;for(let t=0;t<e.length;t++)e[t].remove();this._rebuildCellIndex()}deleteRow(t){t&&t.remove()}get htmlElement(){return this._element}get body(){return this._table}get selectedCell(){return this._selectedCell}_createTableWrapper(){return n("div",[U],null,[n("table",[N])])}_createContenteditableArea(){return n("div",[j],{contenteditable:"true"})}_fillCell(t){t.classList.add(P);const e=this._createContenteditableArea();t.appendChild(n("div",[z],null,[e]))}_fillRow(t){for(let e=0;e<this._numberOfColumns;e++){const e=t.insertCell();this._fillCell(e)}}_rebuildCellIndex(){const t=this._table.querySelector("tbody");setTimeout(()=>{for(let e=0;e<t.childNodes.length;e++){const o=t.childNodes[e];for(let t=0;t<o.childNodes.length;t++)o.childNodes[t].className="tc-table__cell cell-index-"+t}},100)}_hangEvents(){this._table.addEventListener("focus",t=>{this._focusEditField(t)},!0),this._table.addEventListener("blur",t=>{this._blurEditField(t)},!0),this._table.addEventListener("keydown",t=>{this._pressedEnterInEditField(t)}),this._table.addEventListener("click",t=>{this._clickedOnCell(t)}),this._table.addEventListener("mouseover",t=>{this._mouseEnterInDetectArea(t),t.stopPropagation()},!0)}_focusEditField(t){t.target.classList.contains(j)&&(this._selectedCell=t.target.closest("."+P))}_blurEditField(t){t.target.classList.contains(j)&&(this._selectedCell=null)}_pressedEnterInEditField(t){t.target.classList.contains(j)&&(13!==t.keyCode||t.shiftKey||t.preventDefault())}_clickedOnCell(t){if(!t.target.classList.contains(P))return;t.target.querySelector("."+j).focus()}_mouseEnterInDetectArea(t){if(!t.target.classList.contains(z))return;const e=r(s(t.target.closest("TD")),t.pageX,t.pageY);t.target.dispatchEvent(new CustomEvent("mouseInActivatingArea",{detail:{side:e},bubbles:!0}))}}const F="tc-editor",H="tc-toolbar--hor",q="tc-toolbar--ver",X="tc-table__inp";class Y{constructor(t,e,o){this._table=new D;const i=this._resizeTable(t,e);this._fillTable(t,i),this._container=n("div",[F,o.styles.block],null,[this._table.htmlElement]),this._verticalToolBar=new I,this._horizontalToolBar=new M,this._table.htmlElement.appendChild(this._horizontalToolBar.htmlElement),this._table.htmlElement.appendChild(this._verticalToolBar.htmlElement),this._hoveredCell=null,this._activatedToolBar=null,this._hoveredCellSide=null,this._plusButDelay=null,this._toolbarShowDelay=null,this._hangEvents()}get htmlElement(){return this._container}_fillTable(t,e){if(void 0!==t.content)for(let o=0;o<e.rows&&o<t.content.length;o++)for(let i=0;i<e.cols&&i<t.content[o].length;i++){this._table.body.rows[o].cells[i].querySelector("."+X).innerHTML=t.content[o][i]}}_resizeTable(t,e){const o=Array.isArray(t.content),i=!!o&&t.content.length,n=o?t.content.length:void 0,s=i?t.content[0].length:void 0,r=Number.parseInt(e.rows),l=Number.parseInt(e.cols),a=!isNaN(r)&&r>0?r:void 0,c=!isNaN(l)&&l>0?l:void 0,h=n||a||2,d=s||c||2;for(let t=0;t<h;t++)this._table.addRow();for(let t=0;t<d;t++)this._table.addColumn();return{rows:h,cols:d}}_showToolBar(t,e){this._hideToolBar(),this._activatedToolBar=t,t.showIn(e)}_hideToolBar(){null!==this._activatedToolBar&&this._activatedToolBar.hide()}_hangEvents(){this._container.addEventListener("mouseInActivatingArea",t=>{this._toolbarCalling(t)}),this._container.addEventListener("click",t=>{this._clickToolbar(t)}),this._container.addEventListener("input",()=>{this._hideToolBar()}),this._container.addEventListener("keydown",t=>{this._containerKeydown(t)}),this._container.addEventListener("mouseout",t=>{this._leaveDetectArea(t)}),this._container.addEventListener("mouseover",t=>{this._mouseEnterInDetectArea(t)})}_mouseInActivatingAreaListener(t){this._hoveredCellSide=t.detail.side;const e=s(t.target),o=s(this._table.htmlElement);if(this._hoveredCell=t.target.closest("TD"),null===this._hoveredCell){const t=11;this._hoveredCell=this._container,e.x1+=t,e.y1+=t,e.x2-=t,e.y2-=t}"top"===this._hoveredCellSide&&this._showToolBar(this._horizontalToolBar,e.y1-o.y1-2),"bottom"===this._hoveredCellSide&&this._showToolBar(this._horizontalToolBar,e.y2-o.y1-1),"left"===this._hoveredCellSide&&this._showToolBar(this._verticalToolBar,e.x1-o.x1-2),"right"===this._hoveredCellSide&&this._showToolBar(this._verticalToolBar,e.x2-o.x1-1)}_isToolbar(t){return!(!t.closest("."+H)&&!t.closest("."+q))}_leaveDetectArea(t){this._isToolbar(t.relatedTarget)||(clearTimeout(this._toolbarShowDelay),this._hideToolBar())}_toolbarCalling(t){this._isToolbar(t.target)||(clearTimeout(this._toolbarShowDelay),this._toolbarShowDelay=setTimeout(()=>{this._mouseInActivatingAreaListener(t)},125))}_clickToolbar(t){if(!this._isToolbar(t.target))return;const e=isNaN(t.detail)&&null!==t.detail;let o;if(e&&"minus"===t.detail.action)return this._activatedToolBar===this._horizontalToolBar?(this._deleteRow(),o="y"):(this._deleteColumn(),o="x"),!1;if(this._activatedToolBar===this._horizontalToolBar?(this._addRow(),o="y"):(this._addColumn(),o="x"),e){const e=s(this._table.htmlElement);let i;i="x"===o?t.detail.x-e.x1:t.detail.y-e.y1,this._delayAddButtonForMultiClickingNearMouse(i)}else this._hideToolBar()}_containerKeydown(t){13===t.keyCode&&this._containerEnterPressed(t)}_delayAddButtonForMultiClickingNearMouse(t){this._showToolBar(this._activatedToolBar,t),this._activatedToolBar.hideLine(),clearTimeout(this._plusButDelay),this._plusButDelay=setTimeout(()=>{this._hideToolBar()},500)}_getHoveredSideOfContainer(){return this._hoveredCell===this._container?this._isBottomOrRight()?0:-1:1}_isBottomOrRight(){return"bottom"===this._hoveredCellSide||"right"===this._hoveredCellSide}_addRow(){const t=this._hoveredCell.closest("TR");let e=this._getHoveredSideOfContainer();1===e&&(e=t.sectionRowIndex,e+=this._isBottomOrRight()),this._table.addRow(e)}_addColumn(){let t=this._getHoveredSideOfContainer();1===t&&(t=this._hoveredCell.cellIndex,t+=this._isBottomOrRight()),this._table.addColumn(t)}_deleteRow(){const t=this._hoveredCell.closest("TR");this._table.deleteRow(t)}_deleteColumn(){const t=this._hoveredCell.closest("TD");if(console.log("indicativeColumn: ",t),t){const e=t.classList[1];this._table.deleteColumn(e)}}_containerEnterPressed(t){if(null===this._table.selectedCell||t.shiftKey)return;const e=this._table.selectedCell.closest("TR");let o=this._getHoveredSideOfContainer();1===o&&(o=e.sectionRowIndex+1);this._table.addRow(o).cells[0].click()}_mouseEnterInDetectArea(t){const e=r(s(this._container),t.pageX,t.pageY);t.target.dispatchEvent(new CustomEvent("mouseInActivatingArea",{detail:{side:e},bubbles:!0}))}}}])}));
/*! jQuery v2.0.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.2.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.2",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=at(),k=at(),N=at(),E=!1,S=function(){return 0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],H=L.pop,q=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){q.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=vt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+xt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return St(e.replace(z,"$1"),t,r,i)}function st(e){return Q.test(e+"")}function at(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[v]=!0,e}function lt(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t,n){e=e.split("|");var r,o=e.length,s=n?null:t;while(o--)(r=i.attrHandle[e[o]])&&r!==t||(i.attrHandle[e[o]]=s)}function pt(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function ft(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:undefined}function dt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function gt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function yt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.parentWindow;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.frameElement&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=lt(function(e){return e.innerHTML="<a href='#'></a>",ct("type|href|height|width",ft,"#"===e.firstChild.getAttribute("href")),ct(R,pt,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),n.input=lt(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),ct("value",ht,n.attributes&&n.input),n.getElementsByTagName=lt(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=lt(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=lt(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=st(t.querySelectorAll))&&(lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),lt(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=st(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&lt(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=st(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},n.sortDetached=lt(function(e){return 1&e.compareDocumentPosition(t.createElement("div"))}),S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return dt(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?dt(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:ut,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=vt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?ut(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return ot(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:yt(function(){return[0]}),last:yt(function(e,t){return[t-1]}),eq:yt(function(e,t,n){return[0>n?n+t:n]}),even:yt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:yt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:yt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:yt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=gt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=mt(t);function vt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function bt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function wt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Tt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function Ct(e,t,n,r,i,o){return r&&!r[v]&&(r=Ct(r)),i&&!i[v]&&(i=Ct(i,o)),ut(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Et(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:Tt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=Tt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=Tt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function kt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=bt(function(e){return e===t},a,!0),p=bt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[bt(wt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return Ct(l>1&&wt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),o>r&&kt(e=e.slice(r)),o>r&&xt(e))}f.push(n)}return wt(f)}function Nt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=H.call(f));y=Tt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?ut(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=vt(e)),n=t.length;while(n--)o=kt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Nt(i,r))}return o};function Et(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function St(e,t,r,o){var s,u,l,c,p,f=vt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&xt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}i.pseudos.nth=i.pseudos.eq;function jt(){}jt.prototype=i.filters=i.pseudos,i.setFilters=new jt,n.sortStable=v.split("").sort(S).join("")===v,c(),[0,0].sort(S),n.detectDuplicates=E,x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!a||n&&!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,H,q=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&&"string"==typeof t&&n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,H=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||H.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return H.access(e,t,n)},_removeData:function(e,t){H.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!H.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));H.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:q.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=H.get(e,t),n&&(!r||x.isArray(n)?r=H.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";return H.get(e,n)||H.access(e,n,{empty:x.Callbacks("once memory").add(function(){H.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=H.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,s=0,a=x(this),u=t,l=e.match(w)||[];while(o=l[s++])u=i?u:!a.hasClass(o),a[u?"addClass":"removeClass"](o)}else(n===r||"boolean"===n)&&(this.className&&H.set(this,"__className__",this.className),this.className=this.className||e===!1?"":H.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=H.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=H.hasData(e)&&H.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,H.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(H.get(a,"events")||{})[t.type]&&H.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(H.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!H.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.firstChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[H.expando],o&&(t=H.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);H.cache[o]&&delete H.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)H.set(e[r],"globalEval",!t||H.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(H.hasData(e)&&(o=H.access(e),s=H.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function Ht(t){return e.getComputedStyle(t,null)}function qt(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=H.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=H.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&H.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=Ht(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return qt(this,!0)},hide:function(){return qt(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:Lt(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||Ht(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ht(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&Ht(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");
try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=H.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=H.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;H.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Hn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||H.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=H.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=H.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function Hn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:Hn("show"),slideUp:Hn("hide"),slideToggle:Hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=qn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=qn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function qn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
// Generated by CoffeeScript 1.6.3
(function() {
  (function($, window, document) {
    var Console;
    $.prototype.console = function($options) {
      var _ref;
      if ($options == null) {
        $options = {};
      }
      return (_ref = $.data(this, 'console')) != null ? _ref : $.data(this, 'console', new Console(this, $options));
    };
    return Console = (function() {
      var KEY_BS, KEY_C, KEY_CR, KEY_DOWN, KEY_ESC, KEY_R, KEY_S, KEY_TAB, KEY_UP, fix;

      KEY_BS = 8;

      KEY_TAB = 9;

      KEY_CR = 13;

      KEY_ESC = 27;

      KEY_UP = 38;

      KEY_DOWN = 40;

      KEY_C = 67;

      KEY_R = 82;

      KEY_S = 83;

      fix = function($text) {
        return $text.replace(/\ /g, "&nbsp;").replace(/\n/g, "<br />");
      };

      Console.prototype.histpos = 0;

      Console.prototype.history = null;

      Console.prototype.kb = null;

      Console.prototype.output = null;

      Console.prototype.prompt = null;

      Console.prototype["default"] = {
        autofocus: true,
        history: true,
        welcome: '',
        prompt: '> ',
        promptAlt: '? ',
        commandHandle: function() {},
        cancelHandle: function() {}
      };

      function Console($container, $options) {
        var $this,
          _this = this;
        $this = this;
        this.history = [];
        this.options = $options = $.extend(this["default"], $options);
        $container.html("<span class=\"output\"></span>\n<span class=\"enter\">\n<span class=\"prompt\"></span><span contenteditable class=\"input\"></span>\n</span>");
        this.output = $container.find('.output');
        this.prompt = $container.find('span .prompt');
        this.kb = $container.find('span .input');
        if ($options.autofocus) {
          this.kb.focus();
        }
        this.prompt.text($options.prompt);
        this.print("<div>" + $options.welcomeMessage + "</div>");
        $(window).on('click', function($e) {
          return _this.kb.focus();
        });
        $(document.body).on('keydown', function($e) {
          if ($e.keyCode === KEY_ESC) {
            $e.stopPropagation();
            return $e.preventDefault();
          }
        });
        this.kb.on('click', function($e) {
          return _this.kb.text(_this.kb.text());
        });
        this.kb.on('keyup', function($e) {
          var $temp;
          if (!$options.history) {
            return;
          }
          $temp = 0;
          if (_this.history.length) {
            if ($e.keyCode === KEY_UP || $e.keyCode === KEY_DOWN) {
              if (_this.history[_this.histpos]) {
                _this.history[_this.histpos] = _this.kb.text();
              } else {
                $temp = _this.kb.text();
              }
            }
            if ($e.keyCode === KEY_UP) {
              _this.histpos--;
              if (_this.histpos < 0) {
                _this.histpos = 0;
              }
            } else if ($e.keyCode === KEY_DOWN) {
              _this.histpos++;
              if (_this.histpos > _this.history.length) {
                _this.histpos = _this.history.length;
              }
            }
            if ($e.keyCode === KEY_UP || $e.keyCode === KEY_DOWN) {
              _this.kb.text(_this.history[_this.histpos] ? _this.history[_this.histpos] : $temp);
              return _this.kb.text(_this.kb.text());
            }
          }
        });
        this.kb.on('keydown', function($e) {
          if ($e.ctrlKey || $e.metaKey) {
            switch ($e.keyCode) {
              case KEY_C:
                $options.cancelHandle();
                $e.preventDefault();
                return $e.stopPropagation();
              case KEY_R:
                _this.clear();
                $e.preventDefault();
                return $e.stopPropagation();
              case KEY_S:
                $container.toggleClass('flicker');
                $e.preventDefault();
                return $e.stopPropagation();
            }
          }
        });
        this.kb.on('keydown', function($e) {
          switch ($e.keyCode) {
            case KEY_BS:
              if (!_this.kb.text()) {

              }
              break;
            case KEY_TAB:
              return $e.preventDefault;
            case KEY_CR:
              if (_this.kb.text()) {
                _this.history[_this.history.length] = _this.kb.text();
                _this.histpos = _this.history.length;
              }
              _this.output.append(_this.kb.text() + "<br />");
              _this.kb.get(0).scrollIntoView();
              if (_this.kb.text() && _this.kb.text().trim()) {
                $options.commandHandle(_this.kb.text());
              }
              return _this.kb.text('');
          }
        });
      }

      Console.prototype.clear = function() {
        return this.output.html('');
      };

      Console.prototype.setPrompt = function($prompt) {
        if ($prompt == null) {
          $prompt = false;
        }
        return this.prompt.text($prompt ? this.options.promptAlt : this.options.prompt);
      };

      Console.prototype.print = function($text) {
        if ($text == null) {
          $text = '';
        }
        this.output.append(fix($text));
        return this.kb.get(0).scrollIntoView();
      };

      Console.prototype.println = function($text) {
        if ($text == null) {
          $text = '';
        }
        this.output.append(fix("" + $text + "\n"));
        return this.kb.get(0).scrollIntoView();
      };

      Console.prototype.debug = function($text) {
        this.output.append("<span style=\"color: blue;\">" + fix("" + $text + "\n") + "</span>");
        return this.kb.get(0).scrollIntoView();
      };

      Console.prototype.highlight = function($text) {
        this.output.append("<span style=\"color: yellow;\">" + fix("" + $text + "\n") + "</span>");
        return this.kb.get(0).scrollIntoView();
      };

      return Console;

    })();
  })(jQuery, window, document);

}).call(this);
// Generated by CoffeeScript 1.6.3
(function() {
  var Console, FileSystem, MODE_REPL, MODE_RUN, rte, _ctrlCodes, _data, _fix, _get, _set_title;

  MODE_REPL = 0;

  MODE_RUN = 1;

  _ctrlCodes = {
    82: function() {
      return this.reset();
    }
  };

  _fix = function($text) {
    return $text.replace(/\ /g, "&nbsp;").replace(/\n/g, "<br />");
  };

  _get = function($name, $next) {
    if (localStorage[$name] != null) {
      return $next(localStorage[$name]);
    } else {
      return $next('');
    }
  };

  _set_title = function($filename) {
    var $name;
    $name = $filename.split('/').pop();
    if (/\[.*\]$/.test(document.title)) {
      return document.title.replace(/\[(.*)\]$/, $name);
    } else {
      return document.title += " - [" + $name + "]";
    }
  };

  window.rte = rte = {
    Console: Console = (function() {
      Console.prototype.mode = MODE_REPL;

      Console.prototype.element = '';

      Console.prototype.console = null;

      Console.prototype.buffer = null;

      Console.prototype.vars = null;

      Console.prototype.animateScroll = true;

      Console.prototype.autofocus = true;

      Console.prototype.promptLabel = '';

      Console.prototype.promptAlt = '?';

      Console.prototype.promptHistory = true;

      Console.prototype.welcomeMessage = '';

      function Console(element, prompt) {
        this.element = element != null ? element : '.console';
        this.prompt = prompt != null ? prompt : '> ';
        this.promptLabel = this.prompt;
        this.clear();
      }

      Console.prototype.commandValidate = function($line) {
        if ($line === "") {
          return false;
        } else {
          return true;
        }
      };

      Console.prototype.input = function($prompt, $vars) {
        if ($prompt != null) {
          this.print($prompt);
        }
        this.buffer = [];
        this.vars = $vars;
        return true;
      };

      Console.prototype.pause = function($set) {};

      Console.prototype.reset = function() {};

      Console.prototype.setPrompt = function($prompt) {
        return this.console.setPrompt($prompt);
      };

      Console.prototype.debug = function($text) {
        return this.console.debug($text);
      };

      Console.prototype.hilite = function($text) {
        return this.console.hilite($text);
      };

      Console.prototype.print = function($text) {
        return this.console.print($text);
      };

      Console.prototype.println = function($text) {
        return this.console.println($text);
      };

      Console.prototype.clear = function() {
        this.console = $(this.element).console(this);
        return this.console.clear();
      };

      return Console;

    })(),
    FileSystem: FileSystem = (function() {
      var $root;

      function FileSystem() {}

      $root = '/';

      FileSystem.prototype.setRoot = function($path) {
        return $root = $path;
      };

      FileSystem.prototype.readFile = function($filename, $next) {
        if (localStorage[$filename] != null) {
          return _get($filename, function($data) {
            _set_title($filename);
            return $next(null, String($data));
          });
        } else {
          return $.get($root + $filename + '.bas', function($data) {
            _set_title($filename);
            return $next(null, String($data));
          });
        }
      };

      FileSystem.prototype.writeFile = function($filename, $data, $next) {
        localStorage[$filename] = $data;
        return $next(null);
      };

      FileSystem.prototype.deleteFile = function($filename, $next) {
        delete localStorage[$filename];
        return $next(null);
      };

      FileSystem.prototype.readDir = function($dir, $next) {
        var $name, $path, $value;
        return $next(((function() {
          var _ref, _results;
          _ref = _data[$dir];
          _results = [];
          for ($name in _ref) {
            $path = _ref[$name];
            _results.push($name + '.bas');
          }
          return _results;
        })()).concat($dir === 'CATALOG' ? (function() {
          var _results;
          _results = [];
          for ($name in localStorage) {
            $value = localStorage[$name];
            _results.push($name.split('/').pop() + '.bas');
          }
          return _results;
        })() : []));
      };

      return FileSystem;

    })()
  };

  _data = {
    ATARI: {
      SRTRK: 'bas/atari/SRTRK.bas',
      WUMPUS: 'bas/atari/WUMPUS.bas'
    },
    GWBASIC: {
      eliza: 'bas/gwbasic/eliza.bas',
      romulan: 'bas/gwbasic/romulan.bas'
    },
    GROUP: {
      TREK0: 'bas/hp2k/group/TREK0.bas',
      TREK1: 'bas/hp2k/group/TREK1.bas',
      TREK2: 'bas/hp2k/group/TREK2.bas',
      TREK3: 'bas/hp2k/group/TREK3.bas',
      TREK4: 'bas/hp2k/group/TREK4.bas',
      TREK73: 'bas/hp2k/group/TREK73.bas'
    },
    LIBRARY: {
      TRADER: 'bas/hp2k/system/TRADER.bas',
      TRADES: 'bas/hp2k/system/TRADES.bas'
    },
    TEST: {
      data: 'bas/hp2k/test/data.bas',
      def: 'bas/hp2k/test/def.bas',
      dim: 'bas/hp2k/test/dim.bas',
      "for": 'bas/hp2k/test/for.bas',
      gosub: 'bas/hp2k/test/gosub.bas',
      "if": 'bas/hp2k/test/if.bas',
      input: 'bas/hp2k/test/input.bas',
      "let": 'bas/hp2k/test/let.bas',
      numbers: 'bas/hp2k/test/numbers.bas',
      print: 'bas/hp2k/test/print.bas',
      test: 'bas/hp2k/test/test.bas',
      unary: 'bas/hp2k/test/unary.bas'
    },
    CATALOG: {
      OREGON: 'bas/hp2k/OREGON.bas',
      STRTR1: 'bas/hp2k/STRTR1.bas',
      STTR1: 'bas/hp2k/STTR1.bas'
    }
  };

}).call(this);
// Generated by CoffeeScript 1.6.3
(function() {
  var ABS, AND, ATN, Add, Base, BuiltIn, COS, Chain, Com, Comma, Con, Console, Const, Data, Def, Dim, Div, EQ, EXP, End, Enter, FN, FOR, For, GE, GOSUB, GT, Gosub, Goto, INT, If, Image, Input, Keyword, LCASE, LE, LEFT, LEN, LIN, LOG, LT, Let, MID, MODE_REPL, MODE_RUN, Mat, MatRead, Max, Min, Mul, NE, NOT, Next, OR, Operator, PHASE_EXEC, PHASE_SCAN, PRINTF, Pow, Print, RIGHT, RND, Randomize, Read, Rem, Restore, Return, SGN, SIN, SPA, SQR, SUBSTR, Semic, Statement, Stop, Sub, TAB, TAN, TIM, UCASE, Using, V_ATARI, V_GWBASIC, V_HP2000, Var, Zer, katra, rte, __con, __fs, _ary, _bind, _chain, _clean, _com, _dat, _dbg, _dim, _dp, _elapsed_time, _eop, _eval, _exec, _fixup_if, _fixup_print, _flatten, _fn, _format, _gw, _init, _load, _mark, _mrk, _nam, _ofs, _pad, _parse, _pc, _prg, _qualify, _raw, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref2, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref3, _ref30, _ref31, _ref32, _ref33, _ref34, _ref35, _ref36, _ref37, _ref38, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _run, _save, _sprintf, _start, _stk, _str, _txt, _var, _ver, _wel, _xrf,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  rte = typeof window !== "undefined" && window !== null ? window.rte : require("./rte.node");

  V_HP2000 = 0;

  V_ATARI = 1;

  V_GWBASIC = 2;

  GOSUB = 1;

  FOR = 2;

  PHASE_SCAN = 0;

  PHASE_EXEC = 1;

  MODE_REPL = 0;

  MODE_RUN = 1;

  PRINTF = /(\%)([-])?([+])?([0])?(\d*)?(\.\d*)?([\%ds])/g;

  __con = null;

  __fs = null;

  _ary = {};

  _com = [];

  _dat = [];

  _dbg = false;

  _dp = 0;

  _eop = false;

  _fn = {};

  _gw = false;

  _mrk = {};

  _nam = '';

  _ofs = 0;

  _pc = 0;

  _prg = [];

  _raw = {};

  _stk = [];

  _str = {};

  _txt = '';

  _var = {};

  _ver = 0;

  _wel = '';

  _xrf = {};

  _bind = function() {
    return Object.defineProperties(this, {
      _con: {
        get: function() {
          if (__con == null) {
            return __con = new Console(_wel);
          } else {
            return __con;
          }
        }
      },
      _fs: {
        get: function() {
          if (__fs == null) {
            return __fs = new rte.FileSystem();
          } else {
            return __fs;
          }
        }
      }
    });
  };

  _init = function($all) {
    _ary = {};
    _com = [];
    _dat = [];
    _dp = 0;
    _eop = false;
    _fn = {};
    _mrk = {};
    _ofs = 0;
    _pc = 0;
    if ($all) {
      _raw = {};
    }
    _stk = [];
    _str = {};
    _var = {};
    return _xrf = {};
  };

  _eval = function($value) {
    if ($value["eval"] != null) {
      return $value["eval"]();
    } else {
      return $value;
    }
  };

  _qualify = function($name, $version) {
    if ($version == null) {
      $version = V_HP2000;
    }
    switch ($version) {
      case V_ATARI:
        return 'bas/atari/' + $name;
      case V_GWBASIC:
        return 'bas/gwbasic/' + $name;
      case V_HP2000:
        switch ($name[0]) {
          case "*":
            return 'bas/hp2k/group/' + $name.slice(1);
          case "$":
            return 'bas/hp2k/system/' + $name.slice(1);
          case "#":
            return 'bas/hp2k/test/' + $name.slice(1);
          default:
            return 'bas/hp2k/' + $name;
        }
    }
  };

  _clean = function($code) {
    if ($code.charCodeAt(0) === 0xfeff) {
      $code = $code.slice(1);
    }
    return $code = ($code + '\n').replace(/\r/g, '\n').replace(/\n+/g, '\n');
  };

  _save = function($version, $name, $data, $next) {
    $name = $name[0] === '"' ? $name.slice(1, -1) : $name;
    _con.pause(true);
    _fs.writeFile(_qualify($name, $version), $data, function() {
      if (typeof $next === "function") {
        $next();
      }
      return _con.pause(false);
    });
    return true;
  };

  _load = function($version, $name, $init, $next) {
    if ($init == null) {
      $init = true;
    }
    $name = $name[0] === '"' ? $name.slice(1, -1) : $name;
    _init($init);
    _con.pause(true);
    _fs.readFile(_qualify($name, $version), function($err, $data) {
      if ($err != null) {
        _con.println($err);
      } else {
        $data = _clean($data).split('\n');
        if (isNaN($data[0][0])) {
          $data.shift();
        }
        if ($data[0] === "") {
          $data.shift();
        }
        _nam = /^[A-Za-z]/.test($name) ? $name : $name.slice(1);
        _ver = $version;
        _gw = _ver === V_GWBASIC ? true : false;
        _txt = $data.join('\n');
        if (typeof $next === "function") {
          $next(_txt);
        }
        _parse(_txt);
      }
      return _con.pause(false);
    });
    return true;
  };

  _exec = function($version, $name, $init) {
    if ($init == null) {
      $init = true;
    }
    _init($init);
    _con.pause(true);
    _fs.readFile(_qualify($name, $version), function($err, $data) {
      if ($err != null) {
        _con.println($err);
      } else {
        $data = _clean($data).split('\n');
        if (isNaN($data[0][0])) {
          $data.shift();
        }
        if ($data[0] === "") {
          $data.shift();
        }
        _nam = /^[A-Za-z]/.test($name) ? $name : $name.slice(1);
        _ver = $version;
        _gw = _ver === V_GWBASIC ? true : false;
        _txt = $data.join('\n');
        _parse(_txt);
        _start();
        _run();
        _con.reset();
      }
      return _con.pause(false);
    });
    return true;
  };

  _start = function() {
    var $lineno, $statement, _i, _len, _ref;
    _prg = [];
    for ($lineno in _raw) {
      $statement = _raw[$lineno];
      while ($lineno.length < 4) {
        $lineno = '0' + $lineno;
      }
      _prg.push([$lineno, $statement]);
    }
    _prg.sort();
    _init(false);
    for (_i = 0, _len = _prg.length; _i < _len; _i++) {
      _ref = _prg[_i], $lineno = _ref[0], $statement = _ref[1];
      if ($statement.code.type === PHASE_SCAN) {
        $statement.code["eval"]();
      }
      _xrf[parseInt($lineno, 10)] = _pc++;
    }
    return _pc = 0;
  };

  _run = function() {
    var $code, $e, $lineno, $statement, $wait, _ref;
    $wait = false;
    _con.mode = MODE_RUN;
    try {
      while (!(_eop || $wait)) {
        _ref = _prg[_pc++], $lineno = _ref[0], $statement = _ref[1];
        $code = $statement.code;
        if ($statement.code.type === PHASE_EXEC) {
          if (_dbg) {
            _con.debug($lineno + ' ' + $code.toString());
          }
          $wait = $code["eval"]();
        }
        _con.setPrompt($wait);
        if (_pc >= _prg.length) {
          _eop = true;
        }
      }
    } catch (_error) {
      $e = _error;
      _con.println($e);
      $wait = false;
    }
    if (!$wait) {
      _con.mode = MODE_REPL;
      return _con.println('DONE');
    }
  };

  _chain = function($code) {
    var $ix, $save, $var, _i, _j, _len, _len1;
    $save = Array(_com.length);
    for ($ix = _i = 0, _len = _com.length; _i < _len; $ix = ++_i) {
      $var = _com[$ix];
      switch ($var.type) {
        case 0:
          $save[$ix] = _str[$var.name];
          break;
        case 1:
          $save[$ix] = _var[$var.name];
          break;
        case 2:
          $save[$ix] = _ary[$var.name];
      }
    }
    _init(true);
    _parse($code);
    _start();
    for ($ix = _j = 0, _len1 = _com.length; _j < _len1; $ix = ++_j) {
      $var = _com[$ix];
      switch ($var.type) {
        case 0:
          _str[$var.name] = $save[$ix];
          break;
        case 1:
          _var[$var.name] = $save[$ix];
          break;
        case 2:
          _ary[$var.name] = $save[$ix];
      }
    }
    return _run();
  };

  _parse = function($code) {
    var $e, $index, $line, kc, _i, _len;
    kc = typeof window !== "undefined" && window !== null ? window.kc : require("./kc");
    $code = $code.split('\n');
    for ($index = _i = 0, _len = $code.length; _i < _len; $index = ++_i) {
      $line = $code[$index];
      if (/^\d*\s*IF/i.test($line)) {
        $code[$index] = $line = _fixup_if($line);
      }
      if (/^\d*\s*PRINT/i.test($line)) {
        $code[$index] = $line = _fixup_print($line);
      }
      if (/\'(?=[^"]*(?:"[^"]*"[^"]*)*$)/.test($line)) {
        $code[$index] = $line = $line.replace(/(\'.*(?=[^"]*(?:"[^"]*"[^"]*)*$))/g, "");
      }
      if (/\*\*(?=[^"]*(?:"[^"]*"[^"]*)*$)/.test($line)) {
        $code[$index] = $line = $line.replace(/(\*\*(?=[^"]*(?:"[^"]*"[^"]*)*$))/g, "^");
      }
    }
    try {
      kc.parse($code.join('\n'));
    } catch (_error) {
      $e = _error;
      _con.debug(String($e));
    }
    return true;
  };

  _fixup_if = function($line) {
    $line = $line.split(/THEN/i);
    $line[0] = $line[0].replace(/\=/g, '==').replace(/\<\=\=/g, '<=').replace(/\>\=\=/g, '>=').replace(/\#/g, '<>');
    return $line.join(" THEN ");
  };

  _fixup_print = function($line) {
    var $chunk, $index, $is_string, $match, $sep, SEP, _i, _len, _ref, _ref1;
    SEP = ';:,';
    $is_string = false;
    $match = (function() {
      var _i, _len, _ref, _results;
      _ref = $line.match(/[^"]*(?!\\"[^"]*\")/g);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        $chunk = _ref[_i];
        if ($chunk !== '') {
          _results.push($chunk);
        }
      }
      return _results;
    })();
    for ($index = _i = 0, _len = $match.length; _i < _len; $index = ++_i) {
      $chunk = $match[$index];
      $sep = /^\d*\s*PRINT\s*$/i.test($chunk) || $index === $match.length - 1 ? '' : ';';
      if ($is_string) {
        $match[$index] = $chunk = '"' + $chunk + '"';
        if (SEP.indexOf((_ref = (_ref1 = $match[$index + 1]) != null ? _ref1[0] : void 0) != null ? _ref : '') === -1) {
          $match[$index] = $chunk + $sep;
        }
      } else {
        if (SEP.indexOf($chunk.substr(-1)) === -1) {
          $match[$index] = $chunk + $sep;
        }
      }
      $is_string = !$is_string;
    }
    return $match.join('');
  };

  _dim = function($init, $dim1, $dim2) {
    var $a, $i, $j, _i, _j, _k, _ref, _ref1, _ref2;
    $a = [];
    switch (arguments.length) {
      case 2:
        for ($i = _i = _ofs, _ref = $dim1 + 1; _ofs <= _ref ? _i < _ref : _i > _ref; $i = _ofs <= _ref ? ++_i : --_i) {
          $a[$i] = $init;
        }
        break;
      case 3:
        for ($i = _j = _ofs, _ref1 = $dim1 + 1; _ofs <= _ref1 ? _j < _ref1 : _j > _ref1; $i = _ofs <= _ref1 ? ++_j : --_j) {
          $a[$i] = [];
          for ($j = _k = _ofs, _ref2 = $dim2 + 1; _ofs <= _ref2 ? _k < _ref2 : _k > _ref2; $j = _ofs <= _ref2 ? ++_k : --_k) {
            $a[$i][$j] = $init;
          }
        }
    }
    return $a;
  };

  _flatten = function($list) {
    var $a, $item, _i, _len;
    if ($list == null) {
      return [];
    }
    $a = [];
    for (_i = 0, _len = $list.length; _i < _len; _i++) {
      $item = $list[_i];
      if (Array.isArray($item)) {
        $a = $a.concat(_flatten($item));
      } else {
        $a.push($item);
      }
    }
    return $a;
  };

  _sprintf = function($fmt, $list) {
    var $count, _foreach;
    $count = 0;
    _foreach = function($match, $pct, $just, $sign, $pad, $width, $prec, $spec, $ofset, $string) {
      var $value;
      if ($pad == null) {
        $pad = ' ';
      }
      $value = String($list[$count++]);
      switch ($spec) {
        case '%':
          return '%';
        case 's':
          if ($width != null) {
            $width = parseInt($width, 10);
            if ($value.length < $width) {
              if ($just != null) {
                return Array($width - $value.length + 1).join($pad) + $value;
              } else {
                return $value + Array($width - $value.length + 1).join($pad);
              }
            }
          }
          return $value;
        case 'd':
          if ($width != null) {
            $width = parseInt($width, 10);
            if ($value.length < $width) {
              if ($just != null) {
                return $value + Array($width - $value.length + 1).join($pad);
              } else {
                return Array($width - $value.length + 1).join($pad) + $value;
              }
            }
          }
          return $value;
      }
    };
    return $fmt.replace(PRINTF, _foreach);
  };

  _format = function($image) {
    var $count, $head, $out;
    if ($image == null) {
      $image = [];
    }
    $out = '';
    $count = 1;
    while ($image.length > 0) {
      $head = $image.shift();
      if (isNaN($head)) {
        switch ($head) {
          case ',':
            $count = 1;
            break;
          case 'D':
            $out += $count > 1 ? '%' + $count + 'd' : '%d';
            $count = 1;
            break;
          case 'A':
            $out += $count > 1 ? '%' + $count + 's' : '%s';
            $count = 1;
            break;
          case 'X':
            $out += Array($count + 1).join(' ');
            $count = 1;
            break;
          case '(':
            $out += Array($count + 1).join(_format($image));
            $count = 1;
            break;
          case ')':
            return $out;
          default:
            $out += $head.slice(1, -1);
            $count = 1;
        }
      } else {
        $count = $head;
      }
    }
    return $out;
  };

  _pad = function($value, $len, $pad) {
    var $right;
    if ($pad == null) {
      $pad = ' ';
    }
    $right = !isNaN($value);
    $value = String($value);
    if ($right) {
      if ($value.length < $len) {
        return Array($len - $value.length + 1, $pad) + $value;
      } else {
        return $value.substr(0, $len);
      }
    } else {
      if ($value.length < $len) {
        return $value + Array($len - $value.length + 1, $pad);
      } else {
        return $value.substr(0, $len);
      }
    }
  };

  _mark = function($name) {
    return _mrk[$name] = new Date();
  };

  _elapsed_time = function($point1, $point2) {
    if (_mrk[$point1] == null) {
      return 0;
    }
    if (_mrk[$point2] == null) {
      _mrk[$point2] = new Date();
    }
    return _mrk[$point2] - _mrk[$point1];
  };

  Zer = {
    "eval": function() {
      return 0;
    },
    toString: function() {
      return 'ZER';
    }
  };

  Con = {
    "eval": function() {
      return 1;
    },
    toString: function() {
      return 'CON';
    }
  };

  Semic = {
    "eval": function() {
      return '';
    },
    toString: function() {
      return ';';
    }
  };

  Comma = {
    "eval": function() {
      return '    ';
    },
    toString: function() {
      return ',';
    }
  };

  Operator = (function() {
    function Operator(left, right) {
      this.left = left;
      this.right = right;
    }

    return Operator;

  })();

  BuiltIn = (function() {
    function BuiltIn($0, $1, $2) {
      this.$0 = $0;
      this.$1 = $1;
      this.$2 = $2;
    }

    BuiltIn.prototype.toString = function() {
      return "" + (this.constructor.name.toUpperCase()) + "(" + this.$0 + ")";
    };

    return BuiltIn;

  })();

  Keyword = (function() {
    function Keyword() {}

    Keyword.prototype.type = PHASE_EXEC;

    Keyword.prototype["eval"] = function() {
      return false;
    };

    return Keyword;

  })();

  Console = (function(_super) {
    __extends(Console, _super);

    Console.prototype.mode = MODE_REPL;

    Console.prototype.exec = true;

    function Console($welcome) {
      this.commandHandle = __bind(this.commandHandle, this);
      this.welcomeMessage = $welcome;
      Console.__super__.constructor.call(this);
    }

    Console.prototype.cancelHandle = function() {
      _eop = true;
      _con.print('^C');
      _con.reset();
      _con.setPrompt(false);
      _run();
      return _con.console.scrollToBottom();
    };

    Console.prototype.commandHandle = function($line) {
      var $item, $ix, $name, _i, _j, _len, _len1, _ref, _ref1;
      switch (this.mode) {
        case MODE_RUN:
          _ref = $line.trim().split(",");
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            $item = _ref[_i];
            this.buffer.push(isNaN($item) ? String($item) : Number($item));
          }
          if (this.buffer.length < this.vars.length) {
            this.continuedPrompt = true;
          } else {
            _ref1 = this.vars;
            for ($ix = _j = 0, _len1 = _ref1.length; _j < _len1; $ix = ++_j) {
              $name = _ref1[$ix];
              if (/\$$/.test($name)) {
                _str[$name] = this.buffer[$ix];
              } else {
                _var[$name] = this.buffer[$ix];
              }
            }
            this.continuedPrompt = false;
            _run();
            return true;
          }
          break;
        case MODE_REPL:
          $line = /\n$/.test($line) ? $line : "" + $line + "\n";
          return _parse($line);
      }
    };

    return Console;

  })(rte.Console);

  _bind();

  katra = {
    main: function($args) {
      var _ref;
      _wel = (_ref = $args.title) != null ? _ref : _wel;
      switch ($args.basic) {
        case 'atari':
          return _exec(V_ATARI, $args.program);
        case 'gwbasic':
          return _exec(V_GWBASIC, $args.program);
        case 'hp2k':
          return _exec(V_HP2000, $args.program);
        default:
          return _con.reset();
      }
    },
    setRoot: function($root) {
      return _fs.setRoot($root);
    },
    getText: function() {
      return _txt;
    },
    command: {
      append: function($0) {
        return _load(V_HP2000, $0.split('-')[1], false);
      },
      atari: function($0, $next) {
        return _load(V_ATARI, $0, true, $next);
      },
      cat: function($dir) {
        var $cw, $hdr, $nc;
        $nc = 4;
        $cw = 20;
        $hdr = 'name                ';
        return _fs.readDir($dir, function($files) {
          var $col, $file, _i, _len;
          $col = 0;
          _con.hilite("\n" + $dir + "\n" + (Array($nc + 1).join($hdr)));
          for (_i = 0, _len = $files.length; _i < _len; _i++) {
            $file = $files[_i];
            $file = $file.split('.')[0];
            while ($file.length < $cw) {
              $file += " ";
            }
            _con.print($file);
            if (($col++) % $nc === $nc - 1) {
              _con.println();
            }
          }
          if (typeof window === "undefined" || window === null) {
            return _con.print("\n" + _con.prompt);
          }
        });
      },
      cls: function() {
        return _con.clear();
      },
      del: function($0) {
        var $end, $lineno, $start, _i, _ref, _results;
        _ref = $0.split('-')[1].split(','), $start = _ref[0], $end = _ref[1];
        if (!$end) {
          $end = $start;
        }
        _results = [];
        for ($lineno = _i = $start; $start <= $end ? _i < $end : _i > $end; $lineno = $start <= $end ? ++_i : --_i) {
          if (_raw[$lineno] != null) {
            _results.push(delete _raw[$lineno]);
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      },
      dir: function($0) {},
      exec: function($0) {
        return _exec(V_HP2000, $0.split('-')[1]);
      },
      files: function($0) {},
      get: function($0, $next) {
        return _load(V_HP2000, $0.split('-')[1], true, $next);
      },
      gwbasic: function($0, $next) {
        return _load(V_GWBASIC, $0, true, $next);
      },
      list: function($0) {
        var $1, $code, $end, $lineno, $lines, $start, $statement, _i, _len, _ref, _ref1, _results;
        $1 = $0.split('-')[1];
        if ($1 != null) {
          _ref = $1.split(','), $start = _ref[0], $end = _ref[1];
        }
        if ($start != null) {
          $end = $end != null ? $end : $start;
          $start = parseInt($start, 10);
          $end = parseInt($end, 10);
        } else {
          $start = 1;
          $end = 9999;
        }
        $lines = [];
        for ($lineno in _raw) {
          $statement = _raw[$lineno];
          while ($lineno.length < 5) {
            $lineno = '0' + $lineno;
          }
          $lines.push([$lineno, $statement]);
        }
        $lines.sort();
        _results = [];
        for (_i = 0, _len = $lines.length; _i < _len; _i++) {
          _ref1 = $lines[_i], $lineno = _ref1[0], $statement = _ref1[1];
          $lineno = parseInt($statement.lineno, 10);
          $code = $statement.code;
          if ($start != null) {
            if ($lineno >= parseInt($start, 10) && $lineno <= parseInt($end, 10)) {
              _results.push(_con.println($lineno + ' ' + $code));
            } else {
              _results.push(void 0);
            }
          } else {
            _results.push(_con.println($lineno + ' ' + $code));
          }
        }
        return _results;
      },
      name: function($0) {
        return _nam = $0.split('-')[1];
      },
      purge: function($0) {
        return _fs.deleteFile(_qualify($0.split('-')[1], _ver), function($err) {
          if ($err != null) {
            return _con.println($err);
          }
        });
      },
      quit: function() {
        return typeof process !== "undefined" && process !== null ? process.exit() : void 0;
      },
      renum: function($0) {
        return _con.println("Renumber Not Implemented");
      },
      run: function($0) {
        if (Object.keys(_raw).length > 0) {
          _start();
          return _run();
        }
      },
      save: function() {
        var $code, $lineno, $lines, $statement, $text, _i, _len, _ref;
        if (_nam === '') {
          return _con.println("Name not set");
        }
        $lines = [];
        $text = '';
        for ($lineno in _raw) {
          $statement = _raw[$lineno];
          $lines.push([$lineno, $statement.code]);
        }
        $lines.sort();
        for (_i = 0, _len = $lines.length; _i < _len; _i++) {
          _ref = $lines[_i], $lineno = _ref[0], $code = _ref[1];
          $text += $lineno + ' ' + $code + '\n';
        }
        return _save(_ver, _nam, $text.slice(0, -1), function($err) {
          if ($err != null) {
            return _con.println($err);
          }
        });
      },
      scr: function() {
        return _init(true);
      },
      troff: function() {
        return _dbg = false;
      },
      tron: function() {
        return _dbg = true;
      }
    },
    keyword: {
      Zer: Zer,
      Con: Con,
      Semic: Semic,
      Comma: Comma,
      Statement: Statement = (function() {
        function Statement($code, $lineno) {
          if ($lineno != null) {
            _raw[$lineno] = {
              lineno: $lineno,
              code: $code
            };
          } else {
            if ($code != null) {
              if (typeof $code["eval"] === "function") {
                $code["eval"]();
              }
            }
          }
        }

        return Statement;

      })(),
      Const: Const = (function() {
        function Const(value) {
          this.value = value;
          this.is_string = 'string' === typeof this.value ? true : false;
          if (this.is_string) {
            if (this.value.charAt(0) === '"') {
              this.value = this.value.slice(1, -1);
            }
          }
        }

        Const.prototype.value = function() {
          return this.value;
        };

        Const.prototype["eval"] = function() {
          return this.value;
        };

        Const.prototype.toString = function() {
          if (this.is_string) {
            return "\"" + this.value + "\"";
          } else {
            return "" + this.value;
          }
        };

        return Const;

      })(),
      Var: Var = (function() {
        function Var(name, $delim, $dims) {
          this.name = name;
          this.is_string = /\$$/.test(this.name);
          if ($delim != null) {
            this.is_array = true;
            this.dims = _flatten($dims);
            this.dim1 = this.dims[0];
            this.dim2 = this.dims[1];
          } else {
            this.is_array = false;
          }
        }

        Var.prototype["let"] = function($value) {
          var $dim1, $dim2, $end, $len, $start, $str;
          if (this.is_string) {
            if (_gw) {
              if (this.dim2 != null) {
                $dim1 = this.dim1["eval"]();
                $dim2 = this.dim2["eval"]();
                return _str[this.name][$dim1][$dim2] = $value;
              } else if (this.dim1 != null) {
                $dim1 = this.dim1["eval"]();
                return _str[this.name][$dim1] = $value;
              } else {
                return _str[this.name] = $value;
              }
            } else {
              if (this.dim2 != null) {
                $start = this.dim1["eval"]() - 1;
                $end = this.dim2["eval"]();
                if ($end < $start) {
                  throw 'Invalid String index: ' + this.toString();
                }
                $len = $end - $start;
                $value = $value.substr(0, $len);
                $value = _pad($value, $len);
                $str = _str[this.name];
                return _str[this.name] = $str.substr(0, $start) + $value + $str.substr($end);
              } else if (this.dim1 != null) {
                $start = this.dim1["eval"]() - 1;
                $str = _str[this.name];
                return _str[this.name] = $str.substr(0, $start) + $value + $str.substr($start + $value.length);
              } else {
                $len = _str[this.name].length;
                if ($value.length < $len) {
                  $value += Array($len - $value.length + 1).join(' ');
                }
                return _str[this.name] = $value;
              }
            }
          } else if (this.dim2 != null) {
            $dim1 = this.dim1["eval"]();
            $dim2 = this.dim2["eval"]();
            return _ary[this.name][$dim1][$dim2] = $value;
          } else if (this.dim1 != null) {
            $dim1 = this.dim1["eval"]();
            return _ary[this.name][$dim1] = $value;
          } else {
            return _var[this.name] = $value;
          }
        };

        Var.prototype["eval"] = function() {
          var $dim1, $dim2, $end, $start, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
          if (this.is_string) {
            if (_gw) {
              if (this.dim2 != null) {
                $dim1 = this.dim1["eval"]();
                $dim2 = this.dim2["eval"]();
                return (_ref = (_ref1 = _str[this.name]) != null ? (_ref2 = _ref1[$dim1]) != null ? _ref2[$dim2] : void 0 : void 0) != null ? _ref : '';
              } else if (this.dim1 != null) {
                $dim1 = this.dim1["eval"]();
                return (_ref3 = (_ref4 = _str[this.name]) != null ? _ref4[$dim1] : void 0) != null ? _ref3 : '';
              } else {
                return (_ref5 = _str[this.name]) != null ? _ref5 : '';
              }
            } else {
              if (this.dim2 != null) {
                $start = this.dim1["eval"]() - 1;
                $end = this.dim2["eval"]();
                if ($end < $start) {
                  throw 'Invalid String index: ' + this.toString();
                }
                return (_ref6 = (_ref7 = _str[this.name]) != null ? _ref7.slice($start, $end) : void 0) != null ? _ref6 : '';
              } else if (this.dim1 != null) {
                $start = this.dim1["eval"]() - 1;
                return (_ref8 = (_ref9 = _str[this.name]) != null ? _ref9.slice($start) : void 0) != null ? _ref8 : '';
              } else {
                return (_ref10 = _str[this.name]) != null ? _ref10 : '';
              }
            }
          } else if (this.dim2 != null) {
            $dim1 = this.dim1["eval"]();
            $dim2 = this.dim2["eval"]();
            return (_ref11 = (_ref12 = _ary[this.name]) != null ? (_ref13 = _ref12[$dim1]) != null ? _ref13[$dim2] : void 0 : void 0) != null ? _ref11 : 0;
          } else if (this.dim1 != null) {
            $dim1 = this.dim1["eval"]();
            return (_ref14 = (_ref15 = _ary[this.name]) != null ? _ref15[$dim1] : void 0) != null ? _ref14 : 0;
          } else {
            return (_ref16 = _var[this.name]) != null ? _ref16 : 0;
          }
        };

        Var.prototype.toString = function() {
          if (this.is_array) {
            return "" + this.name + "[" + (this.dims.join(',')) + "]";
          } else {
            return this.name;
          }
        };

        return Var;

      })(),
      Base: Base = (function(_super) {
        __extends(Base, _super);

        function Base(base) {
          this.base = base;
        }

        Base.prototype["eval"] = function() {
          _ofs = this.base;
          return false;
        };

        Base.prototype.toString = function() {
          return "BASE " + this.base;
        };

        return Base;

      })(Keyword),
      Chain: Chain = (function(_super) {
        __extends(Chain, _super);

        function Chain(program) {
          this.program = program;
        }

        Chain.prototype["eval"] = function() {
          _con.pause(true);
          return _fs.readFile(this.program, function($err, $data) {
            if ($err != null) {
              _con.println($err);
            } else {
              _ver = $data.type;
              _nam = $data.name;
              _gw = _ver === V_GWBASIC ? true : false;
              _chain($data.data);
            }
            return _con.pause(false);
          });
        };

        Chain.prototype.toString = function() {
          return "CHAIN \"" + this.program + "\"";
        };

        return Chain;

      })(Keyword),
      Com: Com = (function(_super) {
        __extends(Com, _super);

        Com.prototype.type = PHASE_SCAN;

        function Com($vars) {
          this.vars = _flatten($vars);
        }

        Com.prototype["eval"] = function() {
          var $var, _i, _len, _ref;
          _ref = this.vars;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            $var = _ref[_i];
            if (/\$$/.test($var.name)) {
              if (_gw) {
                if ($var.dims.length === 0) {
                  _str[$var.name] = '';
                } else {
                  _str[$var.name] = _dim.apply(null, [''].concat(__slice.call($var.dims)));
                }
              } else {
                _str[$var.name] = Array($var.dims[0] + 1).join(' ');
                _com.push({
                  type: 0,
                  name: $var.name
                });
              }
            } else {
              if ($var.dims.length === 0) {
                _var[$var.name] = 0;
                _com.push({
                  type: 1,
                  name: $var.name
                });
              } else {
                _ary[$var.name] = _dim.apply(null, [0].concat(__slice.call($var.dims)));
                _com.push({
                  type: 2,
                  name: $var.name
                });
              }
            }
          }
          return false;
        };

        Com.prototype.toString = function() {
          return "COM " + (this.vars.join(', '));
        };

        return Com;

      })(Keyword),
      Data: Data = (function(_super) {
        __extends(Data, _super);

        Data.prototype.type = PHASE_SCAN;

        function Data($data) {
          this.data = _flatten($data);
        }

        Data.prototype["eval"] = function() {
          if (_dat === null) {
            _dat = [];
          }
          _dat = _dat.concat(this.data);
          return false;
        };

        Data.prototype.toString = function() {
          return "DATA " + (this.data.join(', '));
        };

        return Data;

      })(Keyword),
      Def: Def = (function(_super) {
        __extends(Def, _super);

        Def.prototype.type = PHASE_SCAN;

        function Def(name, par, body) {
          this.name = name;
          this.par = par;
          this.body = body;
        }

        Def.prototype["eval"] = function() {
          var _this = this;
          _fn[this.name] = function($par) {
            var $ret, $tmp;
            $tmp = _var[_this.par];
            _var[_this.par] = $par;
            $ret = _this.body["eval"]();
            _var[_this.par] = $tmp;
            return $ret;
          };
          return false;
        };

        Def.prototype.toString = function() {
          return "DEF " + this.name + "(" + this.par + ") = " + this.body;
        };

        return Def;

      })(Keyword),
      Dim: Dim = (function(_super) {
        __extends(Dim, _super);

        Dim.prototype.type = PHASE_SCAN;

        function Dim($vars) {
          this.vars = _flatten($vars);
        }

        Dim.prototype["eval"] = function() {
          var $var, _i, _len, _ref;
          _ref = this.vars;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            $var = _ref[_i];
            if (/\$$/.test($var.name)) {
              if (_gw) {
                if ($var.dims.length === 0) {
                  _str[$var.name] = '';
                } else {
                  _str[$var.name] = _dim.apply(null, [''].concat(__slice.call($var.dims)));
                }
              } else {
                _str[$var.name] = Array($var.dims[0] + 1).join(' ');
              }
            } else {
              if ($var.dims.length === 0) {
                _var[$var.name] = 0;
              } else {
                _ary[$var.name] = _dim.apply(null, [0].concat(__slice.call($var.dims)));
              }
            }
          }
          return false;
        };

        Dim.prototype.toString = function() {
          return "DIM " + (this.vars.join(', '));
        };

        return Dim;

      })(Keyword),
      End: End = (function(_super) {
        __extends(End, _super);

        function End() {
          _ref = End.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        End.prototype["eval"] = function() {
          _eop = true;
          return false;
        };

        End.prototype.toString = function() {
          return "END";
        };

        return End;

      })(Keyword),
      Enter: Enter = (function(_super) {
        __extends(Enter, _super);

        function Enter(port, time, status, _var1) {
          var _ref1;
          this.port = port;
          this.time = time;
          this.status = status;
          this["var"] = _var1;
          if (this["var"] == null) {
            _ref1 = [null, this.port, this.time, this.status], this.port = _ref1[0], this.time = _ref1[1], this.status = _ref1[2], this["var"] = _ref1[3];
          }
        }

        Enter.prototype["eval"] = function() {
          _con.input('', [this["var"]]);
          return true;
        };

        Enter.prototype.toString = function() {
          return "ENTER " + this.port + ", " + this.time + ", " + this.status + ", " + this["var"];
        };

        return Enter;

      })(Keyword),
      For: For = (function(_super) {
        __extends(For, _super);

        function For(_var1, start, end, step) {
          this["var"] = _var1;
          this.start = start;
          this.end = end;
          this.step = step != null ? step : new Const(1);
        }

        For.prototype["eval"] = function() {
          _var[this["var"]] = _eval(this.start);
          _stk.push({
            id: FOR,
            pc: _pc,
            name: this["var"],
            end: this.end,
            step: this.step
          });
          return false;
        };

        For.prototype.toString = function() {
          if (this.step === 1) {
            return "FOR " + this["var"] + " = " + this.start + " TO " + this.end;
          } else {
            return "FOR " + this["var"] + " = " + this.start + " TO " + this.end + " STEP " + this.step;
          }
        };

        return For;

      })(Keyword),
      Goto: Goto = (function(_super) {
        __extends(Goto, _super);

        function Goto(lineno, $of) {
          this.lineno = lineno;
          this.of = _flatten($of);
        }

        Goto.prototype["eval"] = function() {
          var $index;
          if (this.of.length > 0) {
            $index = _eval(this.lineno) - 1;
            if (this.of[$index] != null) {
              _pc = _xrf[this.of[$index]];
            }
          } else {
            _pc = _xrf[parseInt(this.lineno, 10)];
          }
          return false;
        };

        Goto.prototype.toString = function() {
          if (this.of.length > (0 != null)) {
            return "GOTO " + this.lineno + " OF " + (this.of.join(','));
          } else {
            return "GOTO " + this.lineno;
          }
        };

        return Goto;

      })(Keyword),
      Gosub: Gosub = (function(_super) {
        __extends(Gosub, _super);

        function Gosub(lineno, $of) {
          this.lineno = lineno;
          this.of = _flatten($of);
        }

        Gosub.prototype["eval"] = function() {
          _stk.push({
            id: GOSUB,
            pc: _pc
          });
          return Gosub.__super__["eval"].call(this);
        };

        Gosub.prototype.toString = function() {
          if (this.of.length > (0 != null)) {
            return "GOSUB " + this.lineno + " OF " + (this.of.join(','));
          } else {
            return "GOSUB " + this.lineno;
          }
        };

        return Gosub;

      })(Goto),
      If: If = (function(_super) {
        __extends(If, _super);

        function If(cond, then) {
          this.cond = cond;
          this.then = then;
        }

        If.prototype["eval"] = function() {
          if (this.cond["eval"]()) {
            if (this.then["eval"] != null) {
              this.then["eval"]();
            } else {
              _pc = _xrf[parseInt(this.then, 10)];
            }
          }
          return false;
        };

        If.prototype.toString = function() {
          return "IF " + this.cond + " THEN " + this.then;
        };

        return If;

      })(Keyword),
      Image: Image = (function(_super) {
        __extends(Image, _super);

        function Image($format) {
          if ($format == null) {
            $format = [];
          }
          this.source = _flatten($format);
          this.format = _format(this.source);
        }

        Image.prototype["eval"] = function() {
          return false;
        };

        Image.prototype.toString = function() {
          return "IMAGE " + (this.source.join(''));
        };

        return Image;

      })(Keyword),
      Input: Input = (function(_super) {
        __extends(Input, _super);

        function Input($vars, prompt) {
          this.prompt = prompt;
          this.vars = _flatten($vars);
        }

        Input.prototype["eval"] = function() {
          _con.input(this.prompt, this.vars);
          return true;
        };

        Input.prototype.toString = function() {
          if (this.prompt != null) {
            return "INPUT " + this.prompt + ", " + (this.vars.join(','));
          } else {
            return "INPUT " + (this.vars.join(','));
          }
        };

        return Input;

      })(Keyword),
      Let: Let = (function(_super) {
        __extends(Let, _super);

        function Let($vars, value) {
          var $var, _i, _len, _ref1;
          this.value = value;
          this.vars = [];
          _ref1 = _flatten($vars);
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $var = _ref1[_i];
            if ('string' === typeof $var) {
              this.vars.push(new Var($var));
            } else {
              this.vars.push($var);
            }
          }
        }

        Let.prototype["eval"] = function() {
          var $value, $var, _i, _len, _ref1;
          $value = _eval(this.value);
          _ref1 = this.vars;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $var = _ref1[_i];
            $var["let"]($value);
          }
          return false;
        };

        Let.prototype.toString = function() {
          var $s, $var, _i, _len, _ref1;
          $s = '';
          _ref1 = this.vars;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $var = _ref1[_i];
            $s += $var + ' = ';
          }
          return "LET " + $s + this.value;
        };

        return Let;

      })(Keyword),
      Mat: Mat = (function(_super) {
        __extends(Mat, _super);

        function Mat(_var1, value) {
          this["var"] = _var1;
          this.value = value;
        }

        Mat.prototype["eval"] = function() {
          var $i, $j, $value;
          $value = this.value["eval"]();
          if (_ary[this["var"]] != null) {
            $i = _ary[this["var"]].length;
            $j = _ary[this["var"]][_ofs].length;
            _ary[this["var"]] = _dim($value, $i, $j);
          } else {
            _ary[this["var"]] = _dim($value, 10);
          }
          return false;
        };

        return Mat;

      })(Keyword),
      MatRead: MatRead = (function(_super) {
        __extends(MatRead, _super);

        function MatRead($vars) {
          this.vars = _flatten($vars);
        }

        MatRead.prototype["eval"] = function() {
          var $var, _i, _len, _ref1;
          _ref1 = this.vars;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $var = _ref1[_i];
            if (_dp < _dat.length) {
              $var["let"](_dat[_dp++].value);
            } else {
              $var["let"](void 0);
            }
          }
          return false;
        };

        MatRead.prototype.toString = function() {
          return "MAT READ " + (this.vars.join(','));
        };

        return MatRead;

      })(Keyword),
      Next: Next = (function(_super) {
        __extends(Next, _super);

        function Next(_var1) {
          this["var"] = _var1;
        }

        Next.prototype["eval"] = function() {
          var $counter, $frame, $name, $step;
          $frame = _stk[_stk.length - 1];
          if ($frame.id !== FOR) {
            throw "Next without for";
          }
          $name = this["var"].name;
          if ($frame.name !== $name) {
            throw "Mismatched For/Next " + $name;
          }
          $step = _eval($frame.step);
          $counter = this["var"]["eval"]() + $step;
          this["var"]["let"]($counter);
          if ($step < 0) {
            if ($counter < _eval($frame.end)) {
              _stk.pop();
            } else {
              _pc = $frame.pc;
            }
          } else {
            if ($counter > _eval($frame.end)) {
              _stk.pop();
            } else {
              _pc = $frame.pc;
            }
          }
          return false;
        };

        Next.prototype.toString = function() {
          return "NEXT " + this["var"];
        };

        return Next;

      })(Keyword),
      Print: Print = (function(_super) {
        __extends(Print, _super);

        function Print() {
          var $items;
          $items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          this.items = _flatten([$items]);
        }

        Print.prototype["eval"] = function() {
          var $item, $str, $val, _i, _len, _ref1;
          $str = '';
          _ref1 = this.items;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $item = _ref1[_i];
            $str += isNaN($val = _eval($item)) ? $val : ' ' + $val;
          }
          if ($item === Semic || $item === Comma) {
            _con.print($str);
          } else {
            _con.println($str);
          }
          return false;
        };

        Print.prototype.toString = function() {
          var $item, $str, _i, _len, _ref1;
          $str = '';
          _ref1 = this.items;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $item = _ref1[_i];
            $str += $item.toString();
          }
          return "PRINT " + $str;
        };

        return Print;

      })(Keyword),
      Using: Using = (function(_super) {
        __extends(Using, _super);

        function Using() {
          var $items, lineno;
          lineno = arguments[0], $items = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          this.lineno = lineno;
          this.items = _flatten($items);
        }

        Using.prototype["eval"] = function() {
          var $args, $i, $item, $lineno, $statement, _i, _len, _ref1, _ref2;
          $i = _xrf[this.lineno];
          _ref1 = _prg[$i], $lineno = _ref1[0], $statement = _ref1[1];
          $args = [];
          _ref2 = this.items;
          for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
            $item = _ref2[_i];
            $args.push(_eval($item));
          }
          if ($item === Semic || $item === Comma) {
            _con.print(_sprintf($statement.code.format, $args));
          } else {
            _con.println(_sprintf($statement.code.format, $args));
          }
          return false;
        };

        Using.prototype.toString = function() {
          var $item, $str, _i, _len, _ref1;
          if (this.items.length === 0) {
            return "PRINT USING " + this.lineno;
          } else {
            $str = '';
            _ref1 = this.items;
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              $item = _ref1[_i];
              $str += $item.toString() + ',';
            }
            $str = $str.slice(0, -1);
            return "PRINT USING " + this.lineno + ";" + $str;
          }
        };

        return Using;

      })(Keyword),
      Randomize: Randomize = (function(_super) {
        __extends(Randomize, _super);

        function Randomize() {}

        Randomize.prototype["eval"] = function() {
          return false;
        };

        Randomize.prototype.toString = function() {
          return "RANDOMIZE";
        };

        return Randomize;

      })(Keyword),
      Read: Read = (function(_super) {
        __extends(Read, _super);

        function Read($vars) {
          this.vars = _flatten($vars);
        }

        Read.prototype["eval"] = function() {
          var $var, _i, _len, _ref1;
          _ref1 = this.vars;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $var = _ref1[_i];
            if (_dp < _dat.length) {
              $var["let"](_dat[_dp++].value);
            } else {
              $var["let"](void 0);
            }
          }
          return false;
        };

        Read.prototype.toString = function() {
          return "READ " + (this.vars.join(','));
        };

        return Read;

      })(Keyword),
      Restore: Restore = (function(_super) {
        __extends(Restore, _super);

        function Restore(lineno) {
          this.lineno = lineno;
        }

        Restore.prototype["eval"] = function() {
          _dp = 0;
          return false;
        };

        Restore.prototype.toString = function() {
          if (this.lineno != null) {
            return "RESTORE " + this.lineno;
          } else {
            return "RESTORE";
          }
        };

        return Restore;

      })(Keyword),
      Return: Return = (function(_super) {
        __extends(Return, _super);

        function Return() {}

        Return.prototype["eval"] = function() {
          var $frame;
          $frame = _stk.pop();
          while ($frame.id !== GOSUB) {
            $frame = _stk.pop();
          }
          _pc = $frame.pc;
          return false;
        };

        Return.prototype.toString = function() {
          return "RETURN";
        };

        return Return;

      })(Keyword),
      Rem: Rem = (function(_super) {
        __extends(Rem, _super);

        function Rem($text) {
          this.text = $text.replace(/^REM/i, '');
        }

        Rem.prototype["eval"] = function() {
          return false;
        };

        Rem.prototype.toString = function() {
          return "REM" + this.text;
        };

        return Rem;

      })(Keyword),
      Stop: Stop = (function(_super) {
        __extends(Stop, _super);

        function Stop() {}

        Stop.prototype["eval"] = function() {
          _eop = true;
          return false;
        };

        Stop.prototype.toString = function() {
          return "STOP";
        };

        return Stop;

      })(Keyword),
      Max: Max = (function(_super) {
        __extends(Max, _super);

        function Max() {
          _ref1 = Max.__super__.constructor.apply(this, arguments);
          return _ref1;
        }

        Max.prototype["eval"] = function() {
          return Math.max(_eval(this.left), _eval(this.right));
        };

        Max.prototype.toString = function() {
          return "" + this.left + " MAX " + this.right;
        };

        return Max;

      })(Operator),
      Min: Min = (function(_super) {
        __extends(Min, _super);

        function Min() {
          _ref2 = Min.__super__.constructor.apply(this, arguments);
          return _ref2;
        }

        Min.prototype["eval"] = function() {
          return Math.min(_eval(this.left), _eval(this.right));
        };

        Min.prototype.toString = function() {
          return "" + this.left + " MIN " + this.right;
        };

        return Min;

      })(Operator),
      Add: Add = (function(_super) {
        __extends(Add, _super);

        function Add() {
          _ref3 = Add.__super__.constructor.apply(this, arguments);
          return _ref3;
        }

        Add.prototype["eval"] = function() {
          return _eval(this.left) + _eval(this.right);
        };

        Add.prototype.toString = function() {
          return "" + this.left + " + " + this.right;
        };

        return Add;

      })(Operator),
      Sub: Sub = (function(_super) {
        __extends(Sub, _super);

        function Sub() {
          _ref4 = Sub.__super__.constructor.apply(this, arguments);
          return _ref4;
        }

        Sub.prototype["eval"] = function() {
          return _eval(this.left) - _eval(this.right);
        };

        Sub.prototype.toString = function() {
          return "" + this.left + " - " + this.right;
        };

        return Sub;

      })(Operator),
      Mul: Mul = (function(_super) {
        __extends(Mul, _super);

        function Mul() {
          _ref5 = Mul.__super__.constructor.apply(this, arguments);
          return _ref5;
        }

        Mul.prototype["eval"] = function() {
          return _eval(this.left) * _eval(this.right);
        };

        Mul.prototype.toString = function() {
          return "" + this.left + " * " + this.right;
        };

        return Mul;

      })(Operator),
      Div: Div = (function(_super) {
        __extends(Div, _super);

        function Div() {
          _ref6 = Div.__super__.constructor.apply(this, arguments);
          return _ref6;
        }

        Div.prototype["eval"] = function() {
          return _eval(this.left) / _eval(this.right);
        };

        Div.prototype.toString = function() {
          return "" + this.left + " / " + this.right;
        };

        return Div;

      })(Operator),
      Pow: Pow = (function(_super) {
        __extends(Pow, _super);

        function Pow() {
          _ref7 = Pow.__super__.constructor.apply(this, arguments);
          return _ref7;
        }

        Pow.prototype["eval"] = function() {
          return Math.pow(_eval(this.left), _eval(this.right));
        };

        Pow.prototype.toString = function() {
          return "" + this.left + " ^ " + this.right;
        };

        return Pow;

      })(Operator),
      OR: OR = (function(_super) {
        __extends(OR, _super);

        function OR() {
          _ref8 = OR.__super__.constructor.apply(this, arguments);
          return _ref8;
        }

        OR.prototype["eval"] = function() {
          return _eval(this.left) || _eval(this.right);
        };

        OR.prototype.toString = function() {
          return "" + this.left + " OR " + this.right;
        };

        return OR;

      })(Operator),
      AND: AND = (function(_super) {
        __extends(AND, _super);

        function AND() {
          _ref9 = AND.__super__.constructor.apply(this, arguments);
          return _ref9;
        }

        AND.prototype["eval"] = function() {
          return _eval(this.left) && _eval(this.right);
        };

        AND.prototype.toString = function() {
          return "" + this.left + " AND " + this.right;
        };

        return AND;

      })(Operator),
      NOT: NOT = (function(_super) {
        __extends(NOT, _super);

        function NOT() {
          _ref10 = NOT.__super__.constructor.apply(this, arguments);
          return _ref10;
        }

        NOT.prototype["eval"] = function() {
          return !_eval(this.left);
        };

        NOT.prototype.toString = function() {
          return "NOT " + this.left;
        };

        return NOT;

      })(Operator),
      LT: LT = (function(_super) {
        __extends(LT, _super);

        function LT() {
          _ref11 = LT.__super__.constructor.apply(this, arguments);
          return _ref11;
        }

        LT.prototype["eval"] = function() {
          return _eval(this.left) < _eval(this.right);
        };

        LT.prototype.toString = function() {
          return "" + this.left + " < " + this.right;
        };

        return LT;

      })(Operator),
      GT: GT = (function(_super) {
        __extends(GT, _super);

        function GT() {
          _ref12 = GT.__super__.constructor.apply(this, arguments);
          return _ref12;
        }

        GT.prototype["eval"] = function() {
          return _eval(this.left) > _eval(this.right);
        };

        GT.prototype.toString = function() {
          return "" + this.left + " > " + this.right;
        };

        return GT;

      })(Operator),
      LE: LE = (function(_super) {
        __extends(LE, _super);

        function LE() {
          _ref13 = LE.__super__.constructor.apply(this, arguments);
          return _ref13;
        }

        LE.prototype["eval"] = function() {
          return _eval(this.left) <= _eval(this.right);
        };

        LE.prototype.toString = function() {
          return "" + this.left + " <= " + this.right;
        };

        return LE;

      })(Operator),
      GE: GE = (function(_super) {
        __extends(GE, _super);

        function GE() {
          _ref14 = GE.__super__.constructor.apply(this, arguments);
          return _ref14;
        }

        GE.prototype["eval"] = function() {
          return _eval(this.left) >= _eval(this.right);
        };

        GE.prototype.toString = function() {
          return "" + this.left + " >= " + this.right;
        };

        return GE;

      })(Operator),
      EQ: EQ = (function(_super) {
        __extends(EQ, _super);

        function EQ() {
          _ref15 = EQ.__super__.constructor.apply(this, arguments);
          return _ref15;
        }

        EQ.prototype["eval"] = function() {
          if (_eval(this.left) === _eval(this.right)) {
            return true;
          } else {
            return false;
          }
        };

        EQ.prototype.toString = function() {
          return "" + this.left + " = " + this.right;
        };

        return EQ;

      })(Operator),
      NE: NE = (function(_super) {
        __extends(NE, _super);

        function NE() {
          _ref16 = NE.__super__.constructor.apply(this, arguments);
          return _ref16;
        }

        NE.prototype["eval"] = function() {
          if (_eval(this.left) !== _eval(this.right)) {
            return true;
          } else {
            return false;
          }
        };

        NE.prototype.toString = function() {
          return "" + this.left + " <> " + this.right;
        };

        return NE;

      })(Operator),
      FN: FN = (function() {
        function FN(name, parm) {
          this.name = name;
          this.parm = parm;
        }

        FN.prototype["eval"] = function() {
          return _fn[this.name](_eval(this.parm));
        };

        FN.prototype.toString = function() {
          return "" + this.name + "(" + this.parm + ")";
        };

        return FN;

      })(),
      ABS: ABS = (function(_super) {
        __extends(ABS, _super);

        function ABS() {
          _ref17 = ABS.__super__.constructor.apply(this, arguments);
          return _ref17;
        }

        ABS.prototype["eval"] = function() {
          return Math.abs(_eval(this.$0));
        };

        return ABS;

      })(BuiltIn),
      ATN: ATN = (function(_super) {
        __extends(ATN, _super);

        function ATN() {
          _ref18 = ATN.__super__.constructor.apply(this, arguments);
          return _ref18;
        }

        ATN.prototype["eval"] = function() {
          return Math.atan(_eval(this.$0));
        };

        return ATN;

      })(BuiltIn),
      COS: COS = (function(_super) {
        __extends(COS, _super);

        function COS() {
          _ref19 = COS.__super__.constructor.apply(this, arguments);
          return _ref19;
        }

        COS.prototype["eval"] = function() {
          return Math.cos(_eval(this.$0));
        };

        return COS;

      })(BuiltIn),
      EXP: EXP = (function(_super) {
        __extends(EXP, _super);

        function EXP() {
          _ref20 = EXP.__super__.constructor.apply(this, arguments);
          return _ref20;
        }

        EXP.prototype["eval"] = function() {
          return Math.exp(_eval(this.$0));
        };

        return EXP;

      })(BuiltIn),
      INT: INT = (function(_super) {
        __extends(INT, _super);

        function INT() {
          _ref21 = INT.__super__.constructor.apply(this, arguments);
          return _ref21;
        }

        INT.prototype["eval"] = function() {
          return Math.floor(_eval(this.$0));
        };

        return INT;

      })(BuiltIn),
      LEN: LEN = (function(_super) {
        __extends(LEN, _super);

        function LEN() {
          _ref22 = LEN.__super__.constructor.apply(this, arguments);
          return _ref22;
        }

        LEN.prototype["eval"] = function() {
          return _eval(this.$0).length;
        };

        return LEN;

      })(BuiltIn),
      LIN: LIN = (function(_super) {
        __extends(LIN, _super);

        function LIN() {
          _ref23 = LIN.__super__.constructor.apply(this, arguments);
          return _ref23;
        }

        LIN.prototype["eval"] = function() {
          return Array(Math.abs(_eval(this.$0)) + 1).join('\n');
        };

        return LIN;

      })(BuiltIn),
      LOG: LOG = (function(_super) {
        __extends(LOG, _super);

        function LOG() {
          _ref24 = LOG.__super__.constructor.apply(this, arguments);
          return _ref24;
        }

        LOG.prototype["eval"] = function() {
          return Math.log(_eval(this.$0));
        };

        return LOG;

      })(BuiltIn),
      RND: RND = (function(_super) {
        __extends(RND, _super);

        function RND() {
          _ref25 = RND.__super__.constructor.apply(this, arguments);
          return _ref25;
        }

        RND.prototype["eval"] = function() {
          return Math.random();
        };

        return RND;

      })(BuiltIn),
      SGN: SGN = (function(_super) {
        __extends(SGN, _super);

        function SGN() {
          _ref26 = SGN.__super__.constructor.apply(this, arguments);
          return _ref26;
        }

        SGN.prototype["eval"] = function() {
          var $0;
          $0 = _eval(this.$0);
          if ($0 < 0) {
            return -1;
          } else if ($0 > 0) {
            return 1;
          } else {
            return 0;
          }
        };

        return SGN;

      })(BuiltIn),
      SIN: SIN = (function(_super) {
        __extends(SIN, _super);

        function SIN() {
          _ref27 = SIN.__super__.constructor.apply(this, arguments);
          return _ref27;
        }

        SIN.prototype["eval"] = function() {
          return Math.sin(_eval(this.$0));
        };

        return SIN;

      })(BuiltIn),
      SPA: SPA = (function(_super) {
        __extends(SPA, _super);

        function SPA() {
          _ref28 = SPA.__super__.constructor.apply(this, arguments);
          return _ref28;
        }

        SPA.prototype["eval"] = function() {
          return Array(_eval(this.$0)).join(" ");
        };

        return SPA;

      })(BuiltIn),
      SQR: SQR = (function(_super) {
        __extends(SQR, _super);

        function SQR() {
          _ref29 = SQR.__super__.constructor.apply(this, arguments);
          return _ref29;
        }

        SQR.prototype["eval"] = function() {
          return Math.sqrt(_eval(this.$0));
        };

        return SQR;

      })(BuiltIn),
      TAB: TAB = (function(_super) {
        __extends(TAB, _super);

        function TAB() {
          _ref30 = TAB.__super__.constructor.apply(this, arguments);
          return _ref30;
        }

        TAB.prototype["eval"] = function() {
          return Array(Math.floor(_eval(this.$0))).join(" ");
        };

        return TAB;

      })(BuiltIn),
      TAN: TAN = (function(_super) {
        __extends(TAN, _super);

        function TAN() {
          _ref31 = TAN.__super__.constructor.apply(this, arguments);
          return _ref31;
        }

        TAN.prototype["eval"] = function() {
          return Math.tan(_eval(this.$0));
        };

        return TAN;

      })(BuiltIn),
      TIM: TIM = (function(_super) {
        __extends(TIM, _super);

        function TIM() {
          _ref32 = TIM.__super__.constructor.apply(this, arguments);
          return _ref32;
        }

        TIM.prototype["eval"] = function() {
          if (_eval(this.$0) === 0) {
            return (new Date()).getMinutes();
          } else {
            return (new Date()).getSeconds();
          }
        };

        return TIM;

      })(BuiltIn),
      LCASE: LCASE = (function(_super) {
        __extends(LCASE, _super);

        function LCASE() {
          _ref33 = LCASE.__super__.constructor.apply(this, arguments);
          return _ref33;
        }

        LCASE.prototype["eval"] = function() {
          return _eval(this.$0).toLowerCase();
        };

        LCASE.prototype.toString = function() {
          return "LCASE(" + this.$0 + ", " + this.$1 + ", " + this.$2 + ")";
        };

        return LCASE;

      })(BuiltIn),
      LEFT: LEFT = (function(_super) {
        __extends(LEFT, _super);

        function LEFT() {
          _ref34 = LEFT.__super__.constructor.apply(this, arguments);
          return _ref34;
        }

        LEFT.prototype["eval"] = function() {
          return _eval(this.$0).substr(0, _eval(this.$1) - 1);
        };

        LEFT.prototype.toString = function() {
          return "LEFT(" + this.$0 + ", " + this.$1 + ", " + this.$2 + ")";
        };

        return LEFT;

      })(BuiltIn),
      MID: MID = (function(_super) {
        __extends(MID, _super);

        function MID() {
          _ref35 = MID.__super__.constructor.apply(this, arguments);
          return _ref35;
        }

        MID.prototype["eval"] = function() {
          return _eval(this.$0).substring(_eval(this.$1), _eval(this.$2));
        };

        MID.prototype.toString = function() {
          return "MID(" + this.$0 + ", " + this.$1 + ", " + this.$2 + ")";
        };

        return MID;

      })(BuiltIn),
      RIGHT: RIGHT = (function(_super) {
        __extends(RIGHT, _super);

        function RIGHT() {
          _ref36 = RIGHT.__super__.constructor.apply(this, arguments);
          return _ref36;
        }

        RIGHT.prototype["eval"] = function() {
          return _eval(this.$0).substr(_eval(this.$1) - 1);
        };

        RIGHT.prototype.toString = function() {
          return "RIGHT(" + this.$0 + ", " + this.$1 + ", " + this.$2 + ")";
        };

        return RIGHT;

      })(BuiltIn),
      SUBSTR: SUBSTR = (function(_super) {
        __extends(SUBSTR, _super);

        function SUBSTR() {
          _ref37 = SUBSTR.__super__.constructor.apply(this, arguments);
          return _ref37;
        }

        SUBSTR.prototype["eval"] = function() {
          return _eval(this.$0).substr(_eval(this.$1) - 1, _eval(this.$2));
        };

        SUBSTR.prototype.toString = function() {
          return "SUBSTR(" + this.$0 + ", " + this.$1 + ", " + this.$2 + ")";
        };

        return SUBSTR;

      })(BuiltIn),
      UCASE: UCASE = (function(_super) {
        __extends(UCASE, _super);

        function UCASE() {
          _ref38 = UCASE.__super__.constructor.apply(this, arguments);
          return _ref38;
        }

        UCASE.prototype["eval"] = function() {
          return _eval(this.$0).toUpperCase();
        };

        UCASE.prototype.toString = function() {
          return "UCASE(" + this.$0 + ", " + this.$1 + ", " + this.$2 + ")";
        };

        return UCASE;

      })(BuiltIn)
    }
  };

  if (typeof window !== "undefined" && window !== null) {
    window.katra = katra;
  } else {
    module.exports = katra;
  }

}).call(this);
/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var kc = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Program":3,"Command":4,"NEWLINE":5,"EOF":6,"Lines":7,"Line":8,"Statement":9,"INTEGER":10,"ATARI":11,"STRING":12,"CLS":13,"GWBASIC":14,"TRON":15,"TROFF":16,"APPEND":17,"CATALOG":18,"DELETE":19,"DIR":20,"EXECUTE":21,"FILES":22,"GET":23,"GROUP":24,"LIBRARY":25,"LIST":26,"NAME":27,"PURGE":28,"RENUMBER":29,"QUIT":30,"RUN":31,"SAVE":32,"SCRATCH":33,"TEST":34,"BASE":35,"(":36,")":37,"CHAIN":38,"COM":39,"DimList":40,"DATA":41,"ConstantList":42,"DEF":43,"FND":44,"VAR":45,"=":46,"Expression":47,"DIM":48,"END":49,"ENTER":50,"PORT":51,",":52,"FOR":53,"TO":54,"STEP":55,"GO":56,"GOTO":57,"OF":58,"IntegerList":59,"GOSUB":60,"IF":61,"THEN":62,"IMAGE":63,"ImageList":64,"INPUT":65,"VarList":66,"LET":67,"LetList":68,"MAT":69,"READ":70,"ZER":71,"CON":72,"NEXT":73,"PRINT":74,"PrintList":75,"PrintSep":76,"USING":77,";":78,"RANDOMIZE":79,"RESTORE":80,"RETURN":81,"REM":82,"STOP":83,"OR":84,"AND":85,"NOT":86,"EQ":87,"NE":88,">":89,"GE":90,"<":91,"LE":92,"MAX":93,"MIN":94,"+":95,"-":96,"*":97,"/":98,"^":99,"[":100,"ExpressionList":101,"]":102,"ABS":103,"ATN":104,"COS":105,"EXP":106,"INT":107,"LEN":108,"LIN":109,"LOG":110,"RND":111,"SGN":112,"SIN":113,"SPA":114,"SQR":115,"TAB":116,"TAN":117,"TIM":118,"LCASE":119,"LEFT":120,"MID":121,"RIGHT":122,"SUBSTR":123,"UCASE":124,"Constant":125,"NUMBER":126,"Dim":127,"VarItem":128,"ImageItem":129,"ImageMask":130,"ImageMaskItem":131,"$accept":0,"$end":1},
terminals_: {2:"error",5:"NEWLINE",6:"EOF",10:"INTEGER",11:"ATARI",12:"STRING",13:"CLS",14:"GWBASIC",15:"TRON",16:"TROFF",17:"APPEND",18:"CATALOG",19:"DELETE",20:"DIR",21:"EXECUTE",22:"FILES",23:"GET",24:"GROUP",25:"LIBRARY",26:"LIST",27:"NAME",28:"PURGE",29:"RENUMBER",30:"QUIT",31:"RUN",32:"SAVE",33:"SCRATCH",34:"TEST",35:"BASE",36:"(",37:")",38:"CHAIN",39:"COM",41:"DATA",43:"DEF",44:"FND",45:"VAR",46:"=",48:"DIM",49:"END",50:"ENTER",51:"PORT",52:",",53:"FOR",54:"TO",55:"STEP",56:"GO",57:"GOTO",58:"OF",60:"GOSUB",61:"IF",62:"THEN",63:"IMAGE",65:"INPUT",67:"LET",69:"MAT",70:"READ",71:"ZER",72:"CON",73:"NEXT",74:"PRINT",77:"USING",78:";",79:"RANDOMIZE",80:"RESTORE",81:"RETURN",82:"REM",83:"STOP",84:"OR",85:"AND",86:"NOT",87:"EQ",88:"NE",89:">",90:"GE",91:"<",92:"LE",93:"MAX",94:"MIN",95:"+",96:"-",97:"*",98:"/",99:"^",100:"[",102:"]",103:"ABS",104:"ATN",105:"COS",106:"EXP",107:"INT",108:"LEN",109:"LIN",110:"LOG",111:"RND",112:"SGN",113:"SIN",114:"SPA",115:"SQR",116:"TAB",117:"TAN",118:"TIM",119:"LCASE",120:"LEFT",121:"MID",122:"RIGHT",123:"SUBSTR",124:"UCASE",126:"NUMBER"},
productions_: [0,[3,3],[3,2],[7,3],[7,2],[7,1],[8,1],[8,2],[4,2],[4,1],[4,2],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[9,4],[9,2],[9,2],[9,2],[9,7],[9,2],[9,1],[9,8],[9,6],[9,8],[9,6],[9,3],[9,2],[9,4],[9,2],[9,4],[9,4],[9,4],[9,4],[9,2],[9,2],[9,4],[9,3],[9,2],[9,3],[9,4],[9,4],[9,2],[9,3],[9,2],[9,1],[9,5],[9,3],[9,1],[9,2],[9,1],[9,2],[9,1],[9,1],[9,1],[47,3],[47,3],[47,2],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,2],[47,3],[47,1],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,6],[47,8],[47,6],[47,8],[47,4],[47,1],[125,1],[125,1],[125,1],[40,1],[40,3],[127,1],[127,4],[127,4],[68,2],[68,5],[68,5],[68,3],[68,6],[68,6],[42,1],[42,3],[59,1],[59,3],[101,1],[101,3],[66,1],[66,3],[128,1],[128,4],[128,4],[75,1],[75,3],[76,1],[76,1],[64,1],[64,3],[129,1],[129,1],[130,1],[130,4],[131,1],[131,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:this.$ = new keyword.Statement($$[$0-2]);
break;
case 6:this.$ = new keyword.Statement($$[$0]);
break;
case 7:this.$ = new keyword.Statement($$[$0], $$[$0-1]);
break;
case 8: command.atari($$[$0]); return true;
break;
case 9: command.cls(); return true;
break;
case 10: command.gwbasic($$[$0]); return true;
break;
case 11: command.tron(); return true;
break;
case 12: command.troff(); return true;
break;
case 13: command.append($$[$0]); return true;
break;
case 14: command.cat('CATALOG'); return true;
break;
case 15: command.del($$[$0]); return true;
break;
case 16: command.cat('GWBASIC'); return true;
break;
case 17: command.exec($$[$0]); return true;
break;
case 18: command.cat('ATARI'); return true;
break;
case 19: command.get($$[$0]); return true;
break;
case 20: command.cat('GROUP'); return true;
break;
case 21: command.del("del-"+$$[$0]); return true;
break;
case 22: command.cat('LIBRARY'); return true;
break;
case 23: command.list($$[$0]); return true;
break;
case 24: command.name($$[$0]); return true;
break;
case 25: command.purge($$[$0]); return true;
break;
case 26: command.renum($$[$0]); return true;
break;
case 27: command.quit(); return true;
break;
case 28: command.run($$[$0]); return true;
break;
case 29: command.save(); return true;
break;
case 30: command.scr(); return true;
break;
case 31: command.cat('TEST'); return true;
break;
case 32:this.$ = new keyword.Base($$[$0-1]);
break;
case 33:this.$ = new keyword.Chain($$[$0]);
break;
case 34:this.$ = new keyword.Com($$[$0]);
break;
case 35:this.$ = new keyword.Data($$[$0]);
break;
case 36:this.$ = new keyword.Def($$[$0-5], $$[$0-3], $$[$0]);
break;
case 37:this.$ = new keyword.Dim($$[$0]);
break;
case 38:this.$ = new keyword.End();
break;
case 39:this.$ = new keyword.Enter($$[$0-6], $$[$0-4], $$[$0-2], $$[$0]);
break;
case 40:this.$ = new keyword.Enter($$[$0-4], $$[$0-2], $$[$0]);
break;
case 41:this.$ = new keyword.For($$[$0-6], $$[$0-4], $$[$0-2], $$[$0]);
break;
case 42:this.$ = new keyword.For($$[$0-4], $$[$0-2], $$[$0]);
break;
case 43:this.$ = new keyword.Goto($$[$0]);
break;
case 44:this.$ = new keyword.Goto($$[$0]);
break;
case 45:this.$ = new keyword.Goto($$[$0-2], $$[$0]);
break;
case 46:this.$ = new keyword.Gosub($$[$0]);
break;
case 47:this.$ = new keyword.Gosub($$[$0-2], $$[$0]);
break;
case 48:this.$ = new keyword.If($$[$0-2], $$[$0]);
break;
case 49:this.$ = new keyword.If($$[$0-2], $$[$0]);
break;
case 50:this.$ = new keyword.If($$[$0-2], $$[$0]);
break;
case 51:this.$ = new keyword.Image($$[$0]);
break;
case 52:this.$ = new keyword.Input($$[$0]);
break;
case 53:this.$ = new keyword.Input($$[$0], $$[$0-2]);
break;
case 54:this.$ = new keyword.Let($$[$0-1], $$[$0]);
break;
case 55:this.$ = new keyword.Let($$[$0-1], $$[$0]);
break;
case 56:this.$ = new keyword.MatRead($$[$0]);
break;
case 57:this.$ = new keyword.Mat(new keyword.Var($$[$0-2]), keyword.Zer);
break;
case 58:this.$ = new keyword.Mat(new keyword.Var($$[$0-2]), keyword.Con);
break;
case 59:this.$ = new keyword.Next(new keyword.Var($$[$0]));
break;
case 60:this.$ = new keyword.Print($$[$0-1], $$[$0]);
break;
case 61:this.$ = new keyword.Print($$[$0]);
break;
case 62:this.$ = new keyword.Print(new keyword.Const(''));
break;
case 63:this.$ = new keyword.Using($$[$0-2], $$[$0]);
break;
case 64:this.$ = new keyword.Using($$[$0]);
break;
case 65:this.$ = new keyword.Randomize();
break;
case 66:this.$ = new keyword.Read($$[$0]);
break;
case 67:this.$ = new keyword.Restore();
break;
case 68:this.$ = new keyword.Restore($$[$0]);
break;
case 69:this.$ = new keyword.Return();
break;
case 70:this.$ = new keyword.Rem($$[$0]);
break;
case 71:this.$ = new keyword.Stop();
break;
case 72:this.$ = new keyword.OR($$[$0-2], $$[$0]);
break;
case 73:this.$ = new keyword.AND($$[$0-2], $$[$0]);
break;
case 74:this.$ = new keyword.NOT($$[$0]);
break;
case 75:this.$ = new keyword.EQ($$[$0-2], $$[$0]);
break;
case 76:this.$ = new keyword.NE($$[$0-2], $$[$0]);
break;
case 77:this.$ = new keyword.GT($$[$0-2], $$[$0]);
break;
case 78:this.$ = new keyword.GE($$[$0-2], $$[$0]);
break;
case 79:this.$ = new keyword.LT($$[$0-2], $$[$0]);
break;
case 80:this.$ = new keyword.LE($$[$0-2], $$[$0]);
break;
case 81:this.$ = new keyword.Max($$[$0-2], $$[$0]);
break;
case 82:this.$ = new keyword.Min($$[$0-2], $$[$0]);
break;
case 83:this.$ = new keyword.Add($$[$0-2], $$[$0]);
break;
case 84:this.$ = new keyword.Sub($$[$0-2], $$[$0]);
break;
case 85:this.$ = new keyword.Mul($$[$0-2], $$[$0]);
break;
case 86:this.$ = new keyword.Div($$[$0-2], $$[$0]);
break;
case 87:this.$ = new keyword.Pow($$[$0-2], $$[$0]);
break;
case 88:this.$ = -$$[$0];
break;
case 89:this.$ = $$[$0-1];
break;
case 90:this.$ = new keyword.Var($$[$0]);
break;
case 91:this.$ = new keyword.Var($$[$0-3], $$[$0-2], $$[$0-1]);
break;
case 92:this.$ = new keyword.Var($$[$0-3], $$[$0-2], $$[$0-1]);
break;
case 93:this.$ = new keyword.FN($$[$0-3], $$[$0-1]);
break;
case 94:this.$ = new keyword.ABS($$[$0-1]);
break;
case 95:this.$ = new keyword.ATN($$[$0-1]);
break;
case 96:this.$ = new keyword.COS($$[$0-1]);
break;
case 97:this.$ = new keyword.EXP($$[$0-1]);
break;
case 98:this.$ = new keyword.INT($$[$0-1]);
break;
case 99:this.$ = new keyword.LEN($$[$0-1]);
break;
case 100:this.$ = new keyword.LIN($$[$0-1]);
break;
case 101:this.$ = new keyword.LOG($$[$0-1]);
break;
case 102:this.$ = new keyword.RND($$[$0-1]);
break;
case 103:this.$ = new keyword.SGN($$[$0-1]);
break;
case 104:this.$ = new keyword.SIN($$[$0-1]);
break;
case 105:this.$ = new keyword.SPA($$[$0-1]);
break;
case 106:this.$ = new keyword.SQR($$[$0-1]);
break;
case 107:this.$ = new keyword.TAB($$[$0-1]);
break;
case 108:this.$ = new keyword.TAN($$[$0-1]);
break;
case 109:this.$ = new keyword.TIM($$[$0-1]);
break;
case 110:this.$ = new keyword.LCASE($$[$0-1]);
break;
case 111:this.$ = new keyword.LEFT($$[$0-3], $$[$0-1]);
break;
case 112:this.$ = new keyword.MID($$[$0-5], $$[$0-3], $$[$0-1]);
break;
case 113:this.$ = new keyword.RIGHT($$[$0-3], $$[$0-1]);
break;
case 114:this.$ = new keyword.SUBSTR($$[$0-5], $$[$0-3], $$[$0-1]);
break;
case 115:this.$ = new keyword.UCASE($$[$0-1]);
break;
case 116:this.$ = $$[$0];
break;
case 117:this.$ = new keyword.Const(parseInt($$[$0], 10));
break;
case 118:this.$ = new keyword.Const($$[$0]);
break;
case 119:this.$ = new keyword.Const(Number($$[$0]));
break;
case 120:this.$ = [$$[$0]];
break;
case 121:this.$ = [$$[$0-2], $$[$0]];
break;
case 122:this.$ = new keyword.Var($$[$0]);
break;
case 123:this.$ = new keyword.Var($$[$0-3], $$[$0-2], $$[$0-1]);
break;
case 124:this.$ = new keyword.Var($$[$0-3], $$[$0-2], $$[$0-1]);
break;
case 125:this.$ = [$$[$0-1]];
break;
case 126:this.$ = [new keyword.Var($$[$0-4], $$[$0-3], $$[$0-2])];
break;
case 127:this.$ = [new keyword.Var($$[$0-4], $$[$0-3], $$[$0-2])];
break;
case 128:this.$ = [$$[$0-2], $$[$0-1]];
break;
case 129:this.$ = [$$[$0-5], new keyword.Var($$[$0-4], $$[$0-3], $$[$0-2])];
break;
case 130:this.$ = [$$[$0-5], new keyword.Var($$[$0-4], $$[$0-3], $$[$0-2])];
break;
case 131:this.$ = [$$[$0]];
break;
case 132:this.$ = [$$[$0-2], $$[$0]];
break;
case 133:this.$ = [parseInt($$[$0], 10)];
break;
case 134:this.$ = [$$[$0-2], parseInt($$[$0], 10)];
break;
case 135:this.$ = [$$[$0]];
break;
case 136:this.$ = [$$[$0-2], $$[$0]];
break;
case 137:this.$ = [$$[$0]];
break;
case 138:this.$ = [$$[$0-2], $$[$0]];
break;
case 139:this.$ = new keyword.Var($$[$0]);
break;
case 140:this.$ = new keyword.Var($$[$0-3], $$[$0-2], $$[$0-1]);
break;
case 141:this.$ = new keyword.Var($$[$0-3], $$[$0-2], $$[$0-1]);
break;
case 142:this.$ = [$$[$0]];
break;
case 143:this.$ = [$$[$0-2], $$[$0-1], $$[$0]];
break;
case 144:this.$ = keyword.Semic;
break;
case 145:this.$ = keyword.Comma;
break;
case 146:this.$ = [$$[$0]];
break;
case 147:this.$ = [$$[$0-2], $$[$0-1], $$[$0]];
break;
case 148:this.$ = $$[$0];
break;
case 149:this.$ = $$[$0];
break;
case 150:this.$ = [$$[$0]];
break;
case 151:this.$ = [parseInt($$[$0-3], 10), $$[$0-2], $$[$0-1], $$[$0]];
break;
case 152:this.$ = [$$[$0]];
break;
case 153:this.$ = [parseInt($$[$0-1], 10), $$[$0]];
break;
}
},
table: [{3:1,4:2,5:[1,29],7:3,8:28,9:30,10:[1,17],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,18],26:[1,19],27:[1,20],28:[1,21],29:[1,22],30:[1,23],31:[1,24],32:[1,25],33:[1,26],34:[1,27],35:[1,31],38:[1,32],39:[1,33],41:[1,34],43:[1,35],45:[1,57],48:[1,36],49:[1,37],50:[1,38],53:[1,39],56:[1,40],57:[1,41],60:[1,42],61:[1,43],63:[1,44],65:[1,45],67:[1,46],68:47,69:[1,48],70:[1,52],73:[1,49],74:[1,50],79:[1,51],80:[1,53],81:[1,54],82:[1,55],83:[1,56]},{1:[3]},{5:[1,58]},{6:[1,59],8:60,9:30,10:[1,61],35:[1,31],38:[1,32],39:[1,33],41:[1,34],43:[1,35],45:[1,57],48:[1,36],49:[1,37],50:[1,38],53:[1,39],56:[1,40],57:[1,41],60:[1,42],61:[1,43],63:[1,44],65:[1,45],67:[1,46],68:47,69:[1,48],70:[1,52],73:[1,49],74:[1,50],79:[1,51],80:[1,53],81:[1,54],82:[1,55],83:[1,56]},{12:[1,62]},{5:[2,9]},{12:[1,63]},{5:[2,11]},{5:[2,12]},{5:[2,13]},{5:[2,14]},{5:[2,15]},{5:[2,16]},{5:[2,17]},{5:[2,18]},{5:[2,19]},{5:[2,20]},{5:[2,21],9:64,35:[1,31],38:[1,32],39:[1,33],41:[1,34],43:[1,35],45:[1,57],48:[1,36],49:[1,37],50:[1,38],53:[1,39],56:[1,40],57:[1,41],60:[1,42],61:[1,43],63:[1,44],65:[1,45],67:[1,46],68:47,69:[1,48],70:[1,52],73:[1,49],74:[1,50],79:[1,51],80:[1,53],81:[1,54],82:[1,55],83:[1,56]},{5:[2,22]},{5:[2,23]},{5:[2,24]},{5:[2,25]},{5:[2,26]},{5:[2,27]},{5:[2,28]},{5:[2,29]},{5:[2,30]},{5:[2,31]},{5:[1,65]},{6:[2,5],10:[2,5],35:[2,5],38:[2,5],39:[2,5],41:[2,5],43:[2,5],45:[2,5],48:[2,5],49:[2,5],50:[2,5],53:[2,5],56:[2,5],57:[2,5],60:[2,5],61:[2,5],63:[2,5],65:[2,5],67:[2,5],69:[2,5],70:[2,5],73:[2,5],74:[2,5],79:[2,5],80:[2,5],81:[2,5],82:[2,5],83:[2,5]},{5:[2,6]},{36:[1,66]},{12:[1,67]},{40:68,45:[1,70],127:69},{10:[1,73],12:[1,74],42:71,125:72,126:[1,75]},{44:[1,76]},{40:77,45:[1,70],127:69},{5:[2,38]},{45:[1,79],51:[1,78]},{45:[1,80]},{54:[1,81]},{10:[1,82],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:83,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,112],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:113,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:114,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,120],12:[1,117],45:[1,121],64:115,129:116,130:118,131:119},{12:[1,123],45:[1,125],66:122,128:124},{45:[1,57],68:126},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,128],47:127,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{45:[1,130],70:[1,129]},{45:[1,131]},{5:[2,62],10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:134,75:132,77:[1,133],86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,65]},{45:[1,125],66:135,128:124},{5:[2,67],10:[1,136]},{5:[2,69]},{5:[2,70]},{5:[2,71]},{36:[1,139],46:[1,137],100:[1,138]},{6:[1,140]},{1:[2,2]},{5:[1,141]},{9:64,35:[1,31],38:[1,32],39:[1,33],41:[1,34],43:[1,35],45:[1,57],48:[1,36],49:[1,37],50:[1,38],53:[1,39],56:[1,40],57:[1,41],60:[1,42],61:[1,43],63:[1,44],65:[1,45],67:[1,46],68:47,69:[1,48],70:[1,52],73:[1,49],74:[1,50],79:[1,51],80:[1,53],81:[1,54],82:[1,55],83:[1,56]},{5:[2,8]},{5:[2,10]},{5:[2,7]},{6:[2,4],10:[2,4],35:[2,4],38:[2,4],39:[2,4],41:[2,4],43:[2,4],45:[2,4],48:[2,4],49:[2,4],50:[2,4],53:[2,4],56:[2,4],57:[2,4],60:[2,4],61:[2,4],63:[2,4],65:[2,4],67:[2,4],69:[2,4],70:[2,4],73:[2,4],74:[2,4],79:[2,4],80:[2,4],81:[2,4],82:[2,4],83:[2,4]},{10:[1,142]},{5:[2,33]},{5:[2,34],52:[1,143]},{5:[2,120],52:[2,120]},{5:[2,122],36:[1,145],52:[2,122],100:[1,144]},{5:[2,35],52:[1,146]},{5:[2,131],52:[2,131]},{5:[2,117],37:[2,117],52:[2,117],54:[2,117],55:[2,117],57:[2,117],58:[2,117],62:[2,117],78:[2,117],84:[2,117],85:[2,117],87:[2,117],88:[2,117],89:[2,117],90:[2,117],91:[2,117],92:[2,117],93:[2,117],94:[2,117],95:[2,117],96:[2,117],97:[2,117],98:[2,117],99:[2,117],102:[2,117]},{5:[2,118],37:[2,118],52:[2,118],54:[2,118],55:[2,118],57:[2,118],58:[2,118],62:[2,118],78:[2,118],84:[2,118],85:[2,118],87:[2,118],88:[2,118],89:[2,118],90:[2,118],91:[2,118],92:[2,118],93:[2,118],94:[2,118],95:[2,118],96:[2,118],97:[2,118],98:[2,118],99:[2,118],102:[2,118]},{5:[2,119],37:[2,119],52:[2,119],54:[2,119],55:[2,119],57:[2,119],58:[2,119],62:[2,119],78:[2,119],84:[2,119],85:[2,119],87:[2,119],88:[2,119],89:[2,119],90:[2,119],91:[2,119],92:[2,119],93:[2,119],94:[2,119],95:[2,119],96:[2,119],97:[2,119],98:[2,119],99:[2,119],102:[2,119]},{36:[1,147]},{5:[2,37],52:[1,143]},{52:[1,148]},{52:[1,149]},{46:[1,150]},{10:[1,151]},{5:[2,44],58:[2,117],84:[2,117],85:[2,117],87:[2,117],88:[2,117],89:[2,117],90:[2,117],91:[2,117],92:[2,117],93:[2,117],94:[2,117],95:[2,117],96:[2,117],97:[2,117],98:[2,117],99:[2,117]},{58:[1,152],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:168,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:169,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:170,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,90],36:[1,172],37:[2,90],52:[2,90],54:[2,90],55:[2,90],57:[2,90],58:[2,90],62:[2,90],78:[2,90],84:[2,90],85:[2,90],87:[2,90],88:[2,90],89:[2,90],90:[2,90],91:[2,90],92:[2,90],93:[2,90],94:[2,90],95:[2,90],96:[2,90],97:[2,90],98:[2,90],99:[2,90],100:[1,171],102:[2,90]},{36:[1,173]},{36:[1,174]},{36:[1,175]},{36:[1,176]},{36:[1,177]},{36:[1,178]},{36:[1,179]},{36:[1,180]},{36:[1,181]},{36:[1,182]},{36:[1,183]},{36:[1,184]},{36:[1,185]},{36:[1,186]},{36:[1,187]},{36:[1,188]},{36:[1,189]},{36:[1,190]},{36:[1,191]},{36:[1,192]},{36:[1,193]},{36:[1,194]},{36:[1,195]},{5:[2,116],37:[2,116],52:[2,116],54:[2,116],55:[2,116],57:[2,116],58:[2,116],62:[2,116],78:[2,116],84:[2,116],85:[2,116],87:[2,116],88:[2,116],89:[2,116],90:[2,116],91:[2,116],92:[2,116],93:[2,116],94:[2,116],95:[2,116],96:[2,116],97:[2,116],98:[2,116],99:[2,116],102:[2,116]},{5:[2,46],58:[2,117],84:[2,117],85:[2,117],87:[2,117],88:[2,117],89:[2,117],90:[2,117],91:[2,117],92:[2,117],93:[2,117],94:[2,117],95:[2,117],96:[2,117],97:[2,117],98:[2,117],99:[2,117]},{58:[1,196],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{57:[1,197],62:[1,198],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{5:[2,51],52:[1,199]},{5:[2,146],37:[2,146],52:[2,146]},{5:[2,148],37:[2,148],52:[2,148]},{5:[2,149],37:[2,149],52:[2,149]},{5:[2,150],37:[2,150],52:[2,150]},{36:[1,200],45:[1,201]},{5:[2,152],37:[2,152],52:[2,152]},{5:[2,52],52:[1,202]},{52:[1,203]},{5:[2,137],52:[2,137]},{5:[2,139],36:[1,205],52:[2,139],100:[1,204]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,128],47:206,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,55],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{5:[2,90],36:[1,209],46:[1,207],84:[2,90],85:[2,90],87:[2,90],88:[2,90],89:[2,90],90:[2,90],91:[2,90],92:[2,90],93:[2,90],94:[2,90],95:[2,90],96:[2,90],97:[2,90],98:[2,90],99:[2,90],100:[1,208]},{45:[1,125],66:210,128:124},{46:[1,211]},{5:[2,59]},{5:[2,61],52:[1,214],76:212,78:[1,213]},{10:[1,215]},{5:[2,142],52:[2,142],78:[2,142],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{5:[2,66],52:[1,202]},{5:[2,68]},{10:[2,125],12:[2,125],36:[2,125],44:[2,125],45:[2,125],86:[2,125],96:[2,125],103:[2,125],104:[2,125],105:[2,125],106:[2,125],107:[2,125],108:[2,125],109:[2,125],110:[2,125],111:[2,125],112:[2,125],113:[2,125],114:[2,125],115:[2,125],116:[2,125],117:[2,125],118:[2,125],119:[2,125],120:[2,125],121:[2,125],122:[2,125],123:[2,125],124:[2,125],126:[2,125]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:216,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:218,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{1:[2,1]},{6:[2,3],10:[2,3],35:[2,3],38:[2,3],39:[2,3],41:[2,3],43:[2,3],45:[2,3],48:[2,3],49:[2,3],50:[2,3],53:[2,3],56:[2,3],57:[2,3],60:[2,3],61:[2,3],63:[2,3],65:[2,3],67:[2,3],69:[2,3],70:[2,3],73:[2,3],74:[2,3],79:[2,3],80:[2,3],81:[2,3],82:[2,3],83:[2,3]},{37:[1,219]},{45:[1,70],127:220},{10:[1,222],59:221},{10:[1,222],59:223},{10:[1,73],12:[1,74],125:224,126:[1,75]},{45:[1,225]},{45:[1,226]},{45:[1,227]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:228,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,43]},{10:[1,222],59:229},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:230,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:231,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:232,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:233,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:234,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:235,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:236,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:237,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:238,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:239,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:240,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:241,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:242,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:243,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:244,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,74],37:[2,74],52:[2,74],54:[2,74],55:[2,74],57:[2,74],58:[2,74],62:[2,74],78:[2,74],84:[2,74],85:[2,74],87:[2,74],88:[2,74],89:[2,74],90:[2,74],91:[2,74],92:[2,74],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,74]},{5:[2,88],37:[2,88],52:[2,88],54:[2,88],55:[2,88],57:[2,88],58:[2,88],62:[2,88],78:[2,88],84:[2,88],85:[2,88],87:[2,88],88:[2,88],89:[2,88],90:[2,88],91:[2,88],92:[2,88],93:[2,88],94:[2,88],95:[2,88],96:[2,88],97:[2,88],98:[2,88],99:[2,88],102:[2,88]},{37:[1,245],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:246,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:247,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:248,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:249,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:250,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:251,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:252,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:253,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:254,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:255,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:256,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:257,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:258,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:259,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:260,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:261,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:262,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:263,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:264,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:265,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:266,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:267,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:268,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:269,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:270,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,222],59:271},{10:[1,272]},{9:274,10:[1,273],35:[1,31],38:[1,32],39:[1,33],41:[1,34],43:[1,35],45:[1,57],48:[1,36],49:[1,37],50:[1,38],53:[1,39],56:[1,40],57:[1,41],60:[1,42],61:[1,43],63:[1,44],65:[1,45],67:[1,46],68:47,69:[1,48],70:[1,52],73:[1,49],74:[1,50],79:[1,51],80:[1,53],81:[1,54],82:[1,55],83:[1,56]},{10:[1,120],12:[1,117],45:[1,121],129:275,130:118,131:119},{10:[1,120],12:[1,117],45:[1,121],64:276,129:116,130:118,131:119},{5:[2,153],37:[2,153],52:[2,153]},{45:[1,125],128:277},{45:[1,125],66:278,128:124},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:279,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:280,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,54],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{10:[2,128],12:[2,128],36:[2,128],44:[2,128],45:[2,128],86:[2,128],96:[2,128],103:[2,128],104:[2,128],105:[2,128],106:[2,128],107:[2,128],108:[2,128],109:[2,128],110:[2,128],111:[2,128],112:[2,128],113:[2,128],114:[2,128],115:[2,128],116:[2,128],117:[2,128],118:[2,128],119:[2,128],120:[2,128],121:[2,128],122:[2,128],123:[2,128],124:[2,128],126:[2,128]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:281,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:282,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,56],52:[1,202]},{71:[1,283],72:[1,284]},{5:[2,60],10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:285,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,144],10:[2,144],12:[2,144],36:[2,144],44:[2,144],45:[2,144],86:[2,144],96:[2,144],103:[2,144],104:[2,144],105:[2,144],106:[2,144],107:[2,144],108:[2,144],109:[2,144],110:[2,144],111:[2,144],112:[2,144],113:[2,144],114:[2,144],115:[2,144],116:[2,144],117:[2,144],118:[2,144],119:[2,144],120:[2,144],121:[2,144],122:[2,144],123:[2,144],124:[2,144],126:[2,144]},{5:[2,145],10:[2,145],12:[2,145],36:[2,145],44:[2,145],45:[2,145],86:[2,145],96:[2,145],103:[2,145],104:[2,145],105:[2,145],106:[2,145],107:[2,145],108:[2,145],109:[2,145],110:[2,145],111:[2,145],112:[2,145],113:[2,145],114:[2,145],115:[2,145],116:[2,145],117:[2,145],118:[2,145],119:[2,145],120:[2,145],121:[2,145],122:[2,145],123:[2,145],124:[2,145],126:[2,145]},{5:[2,64],78:[1,286]},{52:[1,288],102:[1,287]},{37:[2,135],52:[2,135],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,135]},{37:[1,289],52:[1,288]},{5:[2,32]},{5:[2,121],52:[2,121]},{52:[1,291],102:[1,290]},{5:[2,133],37:[2,133],52:[2,133],102:[2,133]},{37:[1,292],52:[1,291]},{5:[2,132],52:[2,132]},{37:[1,293]},{52:[1,294]},{52:[1,295]},{54:[1,296],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{5:[2,45],52:[1,291]},{5:[2,72],37:[2,72],52:[2,72],54:[2,72],55:[2,72],57:[2,72],58:[2,72],62:[2,72],78:[2,72],84:[2,72],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,72]},{5:[2,73],37:[2,73],52:[2,73],54:[2,73],55:[2,73],57:[2,73],58:[2,73],62:[2,73],78:[2,73],84:[2,73],85:[2,73],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,73]},{5:[2,75],37:[2,75],52:[2,75],54:[2,75],55:[2,75],57:[2,75],58:[2,75],62:[2,75],78:[2,75],84:[2,75],85:[2,75],87:[2,75],88:[2,75],89:[2,75],90:[2,75],91:[2,75],92:[2,75],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,75]},{5:[2,76],37:[2,76],52:[2,76],54:[2,76],55:[2,76],57:[2,76],58:[2,76],62:[2,76],78:[2,76],84:[2,76],85:[2,76],87:[2,76],88:[2,76],89:[2,76],90:[2,76],91:[2,76],92:[2,76],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,76]},{5:[2,77],37:[2,77],52:[2,77],54:[2,77],55:[2,77],57:[2,77],58:[2,77],62:[2,77],78:[2,77],84:[2,77],85:[2,77],87:[2,77],88:[2,77],89:[2,77],90:[2,77],91:[2,77],92:[2,77],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,77]},{5:[2,78],37:[2,78],52:[2,78],54:[2,78],55:[2,78],57:[2,78],58:[2,78],62:[2,78],78:[2,78],84:[2,78],85:[2,78],87:[2,78],88:[2,78],89:[2,78],90:[2,78],91:[2,78],92:[2,78],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,78]},{5:[2,79],37:[2,79],52:[2,79],54:[2,79],55:[2,79],57:[2,79],58:[2,79],62:[2,79],78:[2,79],84:[2,79],85:[2,79],87:[2,79],88:[2,79],89:[2,79],90:[2,79],91:[2,79],92:[2,79],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,79]},{5:[2,80],37:[2,80],52:[2,80],54:[2,80],55:[2,80],57:[2,80],58:[2,80],62:[2,80],78:[2,80],84:[2,80],85:[2,80],87:[2,80],88:[2,80],89:[2,80],90:[2,80],91:[2,80],92:[2,80],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,80]},{5:[2,81],37:[2,81],52:[2,81],54:[2,81],55:[2,81],57:[2,81],58:[2,81],62:[2,81],78:[2,81],84:[2,81],85:[2,81],87:[2,81],88:[2,81],89:[2,81],90:[2,81],91:[2,81],92:[2,81],93:[2,81],94:[2,81],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,81]},{5:[2,82],37:[2,82],52:[2,82],54:[2,82],55:[2,82],57:[2,82],58:[2,82],62:[2,82],78:[2,82],84:[2,82],85:[2,82],87:[2,82],88:[2,82],89:[2,82],90:[2,82],91:[2,82],92:[2,82],93:[2,82],94:[2,82],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,82]},{5:[2,83],37:[2,83],52:[2,83],54:[2,83],55:[2,83],57:[2,83],58:[2,83],62:[2,83],78:[2,83],84:[2,83],85:[2,83],87:[2,83],88:[2,83],89:[2,83],90:[2,83],91:[2,83],92:[2,83],93:[2,83],94:[2,83],95:[2,83],96:[2,83],97:[1,165],98:[1,166],99:[1,167],102:[2,83]},{5:[2,84],37:[2,84],52:[2,84],54:[2,84],55:[2,84],57:[2,84],58:[2,84],62:[2,84],78:[2,84],84:[2,84],85:[2,84],87:[2,84],88:[2,84],89:[2,84],90:[2,84],91:[2,84],92:[2,84],93:[2,84],94:[2,84],95:[2,84],96:[2,84],97:[1,165],98:[1,166],99:[1,167],102:[2,84]},{5:[2,85],37:[2,85],52:[2,85],54:[2,85],55:[2,85],57:[2,85],58:[2,85],62:[2,85],78:[2,85],84:[2,85],85:[2,85],87:[2,85],88:[2,85],89:[2,85],90:[2,85],91:[2,85],92:[2,85],93:[2,85],94:[2,85],95:[2,85],96:[2,85],97:[2,85],98:[2,85],99:[1,167],102:[2,85]},{5:[2,86],37:[2,86],52:[2,86],54:[2,86],55:[2,86],57:[2,86],58:[2,86],62:[2,86],78:[2,86],84:[2,86],85:[2,86],87:[2,86],88:[2,86],89:[2,86],90:[2,86],91:[2,86],92:[2,86],93:[2,86],94:[2,86],95:[2,86],96:[2,86],97:[2,86],98:[2,86],99:[1,167],102:[2,86]},{5:[2,87],37:[2,87],52:[2,87],54:[2,87],55:[2,87],57:[2,87],58:[2,87],62:[2,87],78:[2,87],84:[2,87],85:[2,87],87:[2,87],88:[2,87],89:[2,87],90:[2,87],91:[2,87],92:[2,87],93:[2,87],94:[2,87],95:[2,87],96:[2,87],97:[2,87],98:[2,87],99:[2,87],102:[2,87]},{5:[2,89],37:[2,89],52:[2,89],54:[2,89],55:[2,89],57:[2,89],58:[2,89],62:[2,89],78:[2,89],84:[2,89],85:[2,89],87:[2,89],88:[2,89],89:[2,89],90:[2,89],91:[2,89],92:[2,89],93:[2,89],94:[2,89],95:[2,89],96:[2,89],97:[2,89],98:[2,89],99:[2,89],102:[2,89]},{52:[1,288],102:[1,297]},{37:[1,298],52:[1,288]},{37:[1,299],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,300],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,301],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,302],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,303],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,304],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,305],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,306],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,307],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,308],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,309],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,310],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,311],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,312],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,313],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,314],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,315],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,316],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{52:[1,317],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{52:[1,318],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{52:[1,319],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{52:[1,320],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,321],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{5:[2,47],52:[1,291]},{5:[2,48]},{5:[2,49]},{5:[2,50]},{5:[2,147],37:[2,147],52:[2,147]},{37:[1,322],52:[1,199]},{5:[2,138],52:[2,138]},{5:[2,53],52:[1,202]},{52:[1,288],102:[1,323]},{37:[1,324],52:[1,288]},{52:[1,288],102:[1,325]},{37:[1,326],52:[1,288]},{5:[2,57]},{5:[2,58]},{5:[2,143],52:[2,143],78:[2,143],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{45:[1,125],66:327,128:124},{46:[1,328]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:329,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{46:[1,330]},{5:[2,123],52:[2,123]},{10:[1,331]},{5:[2,124],52:[2,124]},{46:[1,332]},{45:[1,333]},{45:[1,334]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:335,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,91],37:[2,91],52:[2,91],54:[2,91],55:[2,91],57:[2,91],58:[2,91],62:[2,91],78:[2,91],84:[2,91],85:[2,91],87:[2,91],88:[2,91],89:[2,91],90:[2,91],91:[2,91],92:[2,91],93:[2,91],94:[2,91],95:[2,91],96:[2,91],97:[2,91],98:[2,91],99:[2,91],102:[2,91]},{5:[2,92],37:[2,92],52:[2,92],54:[2,92],55:[2,92],57:[2,92],58:[2,92],62:[2,92],78:[2,92],84:[2,92],85:[2,92],87:[2,92],88:[2,92],89:[2,92],90:[2,92],91:[2,92],92:[2,92],93:[2,92],94:[2,92],95:[2,92],96:[2,92],97:[2,92],98:[2,92],99:[2,92],102:[2,92]},{5:[2,93],37:[2,93],52:[2,93],54:[2,93],55:[2,93],57:[2,93],58:[2,93],62:[2,93],78:[2,93],84:[2,93],85:[2,93],87:[2,93],88:[2,93],89:[2,93],90:[2,93],91:[2,93],92:[2,93],93:[2,93],94:[2,93],95:[2,93],96:[2,93],97:[2,93],98:[2,93],99:[2,93],102:[2,93]},{5:[2,94],37:[2,94],52:[2,94],54:[2,94],55:[2,94],57:[2,94],58:[2,94],62:[2,94],78:[2,94],84:[2,94],85:[2,94],87:[2,94],88:[2,94],89:[2,94],90:[2,94],91:[2,94],92:[2,94],93:[2,94],94:[2,94],95:[2,94],96:[2,94],97:[2,94],98:[2,94],99:[2,94],102:[2,94]},{5:[2,95],37:[2,95],52:[2,95],54:[2,95],55:[2,95],57:[2,95],58:[2,95],62:[2,95],78:[2,95],84:[2,95],85:[2,95],87:[2,95],88:[2,95],89:[2,95],90:[2,95],91:[2,95],92:[2,95],93:[2,95],94:[2,95],95:[2,95],96:[2,95],97:[2,95],98:[2,95],99:[2,95],102:[2,95]},{5:[2,96],37:[2,96],52:[2,96],54:[2,96],55:[2,96],57:[2,96],58:[2,96],62:[2,96],78:[2,96],84:[2,96],85:[2,96],87:[2,96],88:[2,96],89:[2,96],90:[2,96],91:[2,96],92:[2,96],93:[2,96],94:[2,96],95:[2,96],96:[2,96],97:[2,96],98:[2,96],99:[2,96],102:[2,96]},{5:[2,97],37:[2,97],52:[2,97],54:[2,97],55:[2,97],57:[2,97],58:[2,97],62:[2,97],78:[2,97],84:[2,97],85:[2,97],87:[2,97],88:[2,97],89:[2,97],90:[2,97],91:[2,97],92:[2,97],93:[2,97],94:[2,97],95:[2,97],96:[2,97],97:[2,97],98:[2,97],99:[2,97],102:[2,97]},{5:[2,98],37:[2,98],52:[2,98],54:[2,98],55:[2,98],57:[2,98],58:[2,98],62:[2,98],78:[2,98],84:[2,98],85:[2,98],87:[2,98],88:[2,98],89:[2,98],90:[2,98],91:[2,98],92:[2,98],93:[2,98],94:[2,98],95:[2,98],96:[2,98],97:[2,98],98:[2,98],99:[2,98],102:[2,98]},{5:[2,99],37:[2,99],52:[2,99],54:[2,99],55:[2,99],57:[2,99],58:[2,99],62:[2,99],78:[2,99],84:[2,99],85:[2,99],87:[2,99],88:[2,99],89:[2,99],90:[2,99],91:[2,99],92:[2,99],93:[2,99],94:[2,99],95:[2,99],96:[2,99],97:[2,99],98:[2,99],99:[2,99],102:[2,99]},{5:[2,100],37:[2,100],52:[2,100],54:[2,100],55:[2,100],57:[2,100],58:[2,100],62:[2,100],78:[2,100],84:[2,100],85:[2,100],87:[2,100],88:[2,100],89:[2,100],90:[2,100],91:[2,100],92:[2,100],93:[2,100],94:[2,100],95:[2,100],96:[2,100],97:[2,100],98:[2,100],99:[2,100],102:[2,100]},{5:[2,101],37:[2,101],52:[2,101],54:[2,101],55:[2,101],57:[2,101],58:[2,101],62:[2,101],78:[2,101],84:[2,101],85:[2,101],87:[2,101],88:[2,101],89:[2,101],90:[2,101],91:[2,101],92:[2,101],93:[2,101],94:[2,101],95:[2,101],96:[2,101],97:[2,101],98:[2,101],99:[2,101],102:[2,101]},{5:[2,102],37:[2,102],52:[2,102],54:[2,102],55:[2,102],57:[2,102],58:[2,102],62:[2,102],78:[2,102],84:[2,102],85:[2,102],87:[2,102],88:[2,102],89:[2,102],90:[2,102],91:[2,102],92:[2,102],93:[2,102],94:[2,102],95:[2,102],96:[2,102],97:[2,102],98:[2,102],99:[2,102],102:[2,102]},{5:[2,103],37:[2,103],52:[2,103],54:[2,103],55:[2,103],57:[2,103],58:[2,103],62:[2,103],78:[2,103],84:[2,103],85:[2,103],87:[2,103],88:[2,103],89:[2,103],90:[2,103],91:[2,103],92:[2,103],93:[2,103],94:[2,103],95:[2,103],96:[2,103],97:[2,103],98:[2,103],99:[2,103],102:[2,103]},{5:[2,104],37:[2,104],52:[2,104],54:[2,104],55:[2,104],57:[2,104],58:[2,104],62:[2,104],78:[2,104],84:[2,104],85:[2,104],87:[2,104],88:[2,104],89:[2,104],90:[2,104],91:[2,104],92:[2,104],93:[2,104],94:[2,104],95:[2,104],96:[2,104],97:[2,104],98:[2,104],99:[2,104],102:[2,104]},{5:[2,105],37:[2,105],52:[2,105],54:[2,105],55:[2,105],57:[2,105],58:[2,105],62:[2,105],78:[2,105],84:[2,105],85:[2,105],87:[2,105],88:[2,105],89:[2,105],90:[2,105],91:[2,105],92:[2,105],93:[2,105],94:[2,105],95:[2,105],96:[2,105],97:[2,105],98:[2,105],99:[2,105],102:[2,105]},{5:[2,106],37:[2,106],52:[2,106],54:[2,106],55:[2,106],57:[2,106],58:[2,106],62:[2,106],78:[2,106],84:[2,106],85:[2,106],87:[2,106],88:[2,106],89:[2,106],90:[2,106],91:[2,106],92:[2,106],93:[2,106],94:[2,106],95:[2,106],96:[2,106],97:[2,106],98:[2,106],99:[2,106],102:[2,106]},{5:[2,107],37:[2,107],52:[2,107],54:[2,107],55:[2,107],57:[2,107],58:[2,107],62:[2,107],78:[2,107],84:[2,107],85:[2,107],87:[2,107],88:[2,107],89:[2,107],90:[2,107],91:[2,107],92:[2,107],93:[2,107],94:[2,107],95:[2,107],96:[2,107],97:[2,107],98:[2,107],99:[2,107],102:[2,107]},{5:[2,108],37:[2,108],52:[2,108],54:[2,108],55:[2,108],57:[2,108],58:[2,108],62:[2,108],78:[2,108],84:[2,108],85:[2,108],87:[2,108],88:[2,108],89:[2,108],90:[2,108],91:[2,108],92:[2,108],93:[2,108],94:[2,108],95:[2,108],96:[2,108],97:[2,108],98:[2,108],99:[2,108],102:[2,108]},{5:[2,109],37:[2,109],52:[2,109],54:[2,109],55:[2,109],57:[2,109],58:[2,109],62:[2,109],78:[2,109],84:[2,109],85:[2,109],87:[2,109],88:[2,109],89:[2,109],90:[2,109],91:[2,109],92:[2,109],93:[2,109],94:[2,109],95:[2,109],96:[2,109],97:[2,109],98:[2,109],99:[2,109],102:[2,109]},{5:[2,110],37:[2,110],52:[2,110],54:[2,110],55:[2,110],57:[2,110],58:[2,110],62:[2,110],78:[2,110],84:[2,110],85:[2,110],87:[2,110],88:[2,110],89:[2,110],90:[2,110],91:[2,110],92:[2,110],93:[2,110],94:[2,110],95:[2,110],96:[2,110],97:[2,110],98:[2,110],99:[2,110],102:[2,110]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:336,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:337,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:338,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:339,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,115],37:[2,115],52:[2,115],54:[2,115],55:[2,115],57:[2,115],58:[2,115],62:[2,115],78:[2,115],84:[2,115],85:[2,115],87:[2,115],88:[2,115],89:[2,115],90:[2,115],91:[2,115],92:[2,115],93:[2,115],94:[2,115],95:[2,115],96:[2,115],97:[2,115],98:[2,115],99:[2,115],102:[2,115]},{5:[2,151],37:[2,151],52:[2,151]},{5:[2,140],52:[2,140]},{5:[2,141],52:[2,141]},{5:[2,91],46:[1,340],84:[2,91],85:[2,91],87:[2,91],88:[2,91],89:[2,91],90:[2,91],91:[2,91],92:[2,91],93:[2,91],94:[2,91],95:[2,91],96:[2,91],97:[2,91],98:[2,91],99:[2,91]},{5:[2,92],46:[1,341],84:[2,92],85:[2,92],87:[2,92],88:[2,92],89:[2,92],90:[2,92],91:[2,92],92:[2,92],93:[2,92],94:[2,92],95:[2,92],96:[2,92],97:[2,92],98:[2,92],99:[2,92]},{5:[2,63],52:[1,202]},{10:[2,126],12:[2,126],36:[2,126],44:[2,126],45:[2,126],86:[2,126],96:[2,126],103:[2,126],104:[2,126],105:[2,126],106:[2,126],107:[2,126],108:[2,126],109:[2,126],110:[2,126],111:[2,126],112:[2,126],113:[2,126],114:[2,126],115:[2,126],116:[2,126],117:[2,126],118:[2,126],119:[2,126],120:[2,126],121:[2,126],122:[2,126],123:[2,126],124:[2,126],126:[2,126]},{37:[2,136],52:[2,136],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,136]},{10:[2,127],12:[2,127],36:[2,127],44:[2,127],45:[2,127],86:[2,127],96:[2,127],103:[2,127],104:[2,127],105:[2,127],106:[2,127],107:[2,127],108:[2,127],109:[2,127],110:[2,127],111:[2,127],112:[2,127],113:[2,127],114:[2,127],115:[2,127],116:[2,127],117:[2,127],118:[2,127],119:[2,127],120:[2,127],121:[2,127],122:[2,127],123:[2,127],124:[2,127],126:[2,127]},{5:[2,134],37:[2,134],52:[2,134],102:[2,134]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:342,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{52:[1,343]},{5:[2,40]},{5:[2,42],55:[1,344],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,345],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{52:[1,346],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,347],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{52:[1,348],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{10:[2,129],12:[2,129],36:[2,129],44:[2,129],45:[2,129],86:[2,129],96:[2,129],103:[2,129],104:[2,129],105:[2,129],106:[2,129],107:[2,129],108:[2,129],109:[2,129],110:[2,129],111:[2,129],112:[2,129],113:[2,129],114:[2,129],115:[2,129],116:[2,129],117:[2,129],118:[2,129],119:[2,129],120:[2,129],121:[2,129],122:[2,129],123:[2,129],124:[2,129],126:[2,129]},{10:[2,130],12:[2,130],36:[2,130],44:[2,130],45:[2,130],86:[2,130],96:[2,130],103:[2,130],104:[2,130],105:[2,130],106:[2,130],107:[2,130],108:[2,130],109:[2,130],110:[2,130],111:[2,130],112:[2,130],113:[2,130],114:[2,130],115:[2,130],116:[2,130],117:[2,130],118:[2,130],119:[2,130],120:[2,130],121:[2,130],122:[2,130],123:[2,130],124:[2,130],126:[2,130]},{5:[2,36],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{45:[1,349]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:350,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,111],37:[2,111],52:[2,111],54:[2,111],55:[2,111],57:[2,111],58:[2,111],62:[2,111],78:[2,111],84:[2,111],85:[2,111],87:[2,111],88:[2,111],89:[2,111],90:[2,111],91:[2,111],92:[2,111],93:[2,111],94:[2,111],95:[2,111],96:[2,111],97:[2,111],98:[2,111],99:[2,111],102:[2,111]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:351,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,113],37:[2,113],52:[2,113],54:[2,113],55:[2,113],57:[2,113],58:[2,113],62:[2,113],78:[2,113],84:[2,113],85:[2,113],87:[2,113],88:[2,113],89:[2,113],90:[2,113],91:[2,113],92:[2,113],93:[2,113],94:[2,113],95:[2,113],96:[2,113],97:[2,113],98:[2,113],99:[2,113],102:[2,113]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:352,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,39]},{5:[2,41],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,353],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,354],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{5:[2,112],37:[2,112],52:[2,112],54:[2,112],55:[2,112],57:[2,112],58:[2,112],62:[2,112],78:[2,112],84:[2,112],85:[2,112],87:[2,112],88:[2,112],89:[2,112],90:[2,112],91:[2,112],92:[2,112],93:[2,112],94:[2,112],95:[2,112],96:[2,112],97:[2,112],98:[2,112],99:[2,112],102:[2,112]},{5:[2,114],37:[2,114],52:[2,114],54:[2,114],55:[2,114],57:[2,114],58:[2,114],62:[2,114],78:[2,114],84:[2,114],85:[2,114],87:[2,114],88:[2,114],89:[2,114],90:[2,114],91:[2,114],92:[2,114],93:[2,114],94:[2,114],95:[2,114],96:[2,114],97:[2,114],98:[2,114],99:[2,114],102:[2,114]}],
defaultActions: {5:[2,9],7:[2,11],8:[2,12],9:[2,13],10:[2,14],11:[2,15],12:[2,16],13:[2,17],14:[2,18],15:[2,19],16:[2,20],18:[2,22],19:[2,23],20:[2,24],21:[2,25],22:[2,26],23:[2,27],24:[2,28],25:[2,29],26:[2,30],27:[2,31],30:[2,6],37:[2,38],51:[2,65],54:[2,69],55:[2,70],56:[2,71],59:[2,2],62:[2,8],63:[2,10],64:[2,7],67:[2,33],131:[2,59],136:[2,68],140:[2,1],151:[2,43],219:[2,32],272:[2,48],273:[2,49],274:[2,50],283:[2,57],284:[2,58],334:[2,40],349:[2,39]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


    katra = typeof window !== "undefined" && window !== null ? window.katra : require('./katra');
    command = katra.command;
    keyword = katra.keyword;


/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 5;
break;
case 1:/* skip whitespace */;
break;
case 2:return 97;
break;
case 3:return 98;
break;
case 4:return 96;
break;
case 5:return 95;
break;
case 6:return 99;
break;
case 7:return 87;
break;
case 8:return 46;
break;
case 9:return 88;
break;
case 10:return 92;
break;
case 11:return 90;
break;
case 12:return 91;
break;
case 13:return 89;
break;
case 14:return 93;
break;
case 15:return 94;
break;
case 16:return 85;
break;
case 17:return 84;
break;
case 18:return 86;
break;
case 19:return 36;
break;
case 20:return 37;
break;
case 21:return 100;
break;
case 22:return 102;
break;
case 23:return 52;
break;
case 24:return ':';
break;
case 25:return 78;
break;
case 26:return 15;
break;
case 27:return 16;
break;
case 28:return 17;
break;
case 29:return 11;
break;
case 30:return 18;
break;
case 31:return 19;
break;
case 32:return 20;
break;
case 33:return 21;
break;
case 34:return 22;
break;
case 35:return 23;
break;
case 36:return 24;
break;
case 37:return 14;
break;
case 38:return 25;
break;
case 39:return 26;
break;
case 40:return 27
break;
case 41:return 28;
break;
case 42:return 29;
break;
case 43:return 31;
break;
case 44:return 32;
break;
case 45:return 33;
break;
case 46:return 34;
break;
case 47:return 103;
break;
case 48:return 104;
break;
case 49:return 105;
break;
case 50:return 106;
break;
case 51:return 107;
break;
case 52:return 108;
break;
case 53:return 109;
break;
case 54:return 110;
break;
case 55:return 111;
break;
case 56:return 112;
break;
case 57:return 113;
break;
case 58:return 115;
break;
case 59:return 116;
break;
case 60:return 117;
break;
case 61:return 118;
break;
case 62:return 119;
break;
case 63:return 120;
break;
case 64:return 121;
break;
case 65:return 122;
break;
case 66:return 123;
break;
case 67:return 124;
break;
case 68:return 13;
break;
case 69:return 38;
break;
case 70:return 72;
break;
case 71:return 39;
break;
case 72:return 35;
break;
case 73:return 41;
break;
case 74:return 43;
break;
case 75:return 48;
break;
case 76:return 49;
break;
case 77:return 50;
break;
case 78:return 53;
break;
case 79:return 60;
break;
case 80:return 57;
break;
case 81:return 56;
break;
case 82:return 61;
break;
case 83:return 63;
break;
case 84:return 65;
break;
case 85:return 67;
break;
case 86:return 69
break;
case 87:return 73;
break;
case 88:return 'OFF';
break;
case 89:return 58;
break;
case 90:return 'ON';
break;
case 91:return 74;
break;
case 92:return 30;
break;
case 93:return 79;
break;
case 94:return 82;
break;
case 95:return 70;
break;
case 96:return 80;
break;
case 97:return 81
break;
case 98:return 55;
break;
case 99:return 83;
break;
case 100:return 62;
break;
case 101:return 54;
break;
case 102:return 77;
break;
case 103:return 71;
break;
case 104:return 126;
break;
case 105:return 10;
break;
case 106:return 12;
break;
case 107:return 44;
break;
case 108:return 45;
break;
case 109:return 51;
break;
case 110:return 6;
break;
case 111:return 'INVALID';
break;
}
},
rules: [/^(?:\n)/,/^(?:[\t ]+)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:==)/,/^(?:=)/,/^(?:<>)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:([Mm][Aa][Xx]))/,/^(?:([Mm][Ii][Nn]))/,/^(?:([Aa][Nn][Dd]))/,/^(?:([Oo][Rr]))/,/^(?:([Nn][Oo][Tt]))/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:;)/,/^(?:([Tt][Rr][Oo][Nn]))/,/^(?:([Tt][Rr][Oo][Ff][Ff]))/,/^(?:([Aa][Pp][Pp][Ee]?[Nn]?[Dd]?[\-]([\$\*\@\!\#]?[A-Za-z][A-Za-z0-9]+)))/,/^(?:([Aa][Tt][Aa][Rr][Ii]))/,/^(?:([Cc][Aa][Tt][Aa]?[Ll]?[Oo]?[Gg]?))/,/^(?:([Dd][Ee][Ll][Ee]?[Tt]?[Ee]?([\-]([0-9,]+))?))/,/^(?:([Dd][Ii][Rr]))/,/^(?:([Ee][Xx][Ee][Cc]?[Uu]?[Tt]?[Ee]?[\-]([\$\*\@\!\#]?[A-Za-z][A-Za-z0-9]+)))/,/^(?:([Ff][Ii][Ll][Ee][Ss]))/,/^(?:([Gg][Ee][Tt][\-]([\$\*\@\!\#]?[A-Za-z][A-Za-z0-9]+)))/,/^(?:([Gg][Rr][Oo][Uu]?[Pp]?))/,/^(?:([Gg][Ww][Bb]?[Aa]?[Ss]?[Ii]?[Cc]?))/,/^(?:([Ll][Ii][Bb][Rr]?[Aa]?[Rr]?[Yy]?))/,/^(?:([Ll][Ii][Ss][Tt]?([\-]([0-9,]+))?))/,/^(?:([Nn][Aa][Mm][Ee]?[\-]([\$\*\@\!\#]?[A-Za-z][A-Za-z0-9]+)))/,/^(?:([Pp][Uu][Rr][Gg]?[Ee]?[\-]([\$\*\@\!\#]?[A-Za-z][A-Za-z0-9]+)))/,/^(?:([Rr][Ee][Nn][Uu]?[Mm]?[Bb]?[Ee]?[Rr]?([\-]([0-9,]+))?))/,/^(?:([Rr][Uu][Nn]([\-]([0-9])+)?))/,/^(?:([Ss][Aa][Vv][Ee]?))/,/^(?:([Ss][Cc][Rr][Aa]?[Tt]?[Cc]?[Hh]?))/,/^(?:([Tt][Ee][Ss][Tt]?))/,/^(?:([Aa][Bb][Ss]))/,/^(?:([Aa][Tt][Nn]))/,/^(?:([Cc][Oo][Ss]))/,/^(?:([Ee][Xx][Pp]))/,/^(?:([Ii][Nn][Tt]))/,/^(?:([Ll][Ee][Nn]))/,/^(?:([Ll][Ii][Nn]))/,/^(?:([Ll][Oo][Gg]))/,/^(?:([Rr][Nn][Dd]))/,/^(?:([Ss][Gg][Nn]))/,/^(?:([Ss][Ii][Nn]))/,/^(?:([Ss][Qq][Rr]))/,/^(?:([Tt][Aa][Bb]))/,/^(?:([Tt][Aa][Nn]))/,/^(?:([Tt][Ii][Mm]))/,/^(?:([Ll][Cc][Aa][Ss][Ee][\$]))/,/^(?:([Ll][Ee][Ff][Tt][\$]))/,/^(?:([Mm][Ii][Dd][\$]))/,/^(?:([Rr][Ii][Gg][Hh][Tt][\$]))/,/^(?:([Ss][Uu][Bb][Ss][Tt][Rr]))/,/^(?:([Uu][Cc][Aa][Ss][Ee][\$]))/,/^(?:([Cc][Ll][Ss]))/,/^(?:([Cc][Hh][Aa][Ii][Nn]))/,/^(?:([Cc][Oo][Nn]))/,/^(?:([Cc][Oo][Mm]))/,/^(?:([Bb][Aa][Ss][Ee]))/,/^(?:([Dd][Aa][Tt][Aa]))/,/^(?:([Dd][Ee][Ff]))/,/^(?:([Dd][Ii][Mm]))/,/^(?:([Ee][Nn][Dd]))/,/^(?:([Ee][Nn][Tt][Ee][Rr]))/,/^(?:([Ff][Oo][Rr]))/,/^(?:([Gg][Oo][Ss][Uu][Bb]))/,/^(?:([Gg][Oo][Tt][Oo]))/,/^(?:([Gg][Oo]))/,/^(?:([Ii][Ff]))/,/^(?:([Ii][Mm][Aa][Gg][Ee]))/,/^(?:([Ii][Nn][Pp][Uu][Tt]))/,/^(?:([Ll][Ee][Tt]))/,/^(?:([Mm][Aa][Tt]))/,/^(?:([Nn][Ee][Xx][Tt]))/,/^(?:{OFF})/,/^(?:([Oo][Ff]))/,/^(?:{ON})/,/^(?:([Pp][Rr][Ii][Nn][Tt]))/,/^(?:([Qq][Uu][Ii][Tt]))/,/^(?:([Rr][Aa][Nn][Dd][Oo][Mm][Ii][Zz][Ee]))/,/^(?:([Rr][Ee][Mm]).*)/,/^(?:([Rr][Ee][Aa][Dd]))/,/^(?:([Rr][Ee][Ss][Tt][Oo][Rr][Ee]))/,/^(?:([Rr][Ee][Tt][Uu][Rr][Nn]))/,/^(?:([Ss][Tt][Ee][Pp]))/,/^(?:([Ss][Tt][Oo][Pp]))/,/^(?:([Tt][Hh][Ee][Nn]))/,/^(?:([Tt][Oo]))/,/^(?:([Uu][Ss][Ii][Nn][Gg]))/,/^(?:([Zz][Ee][Rr]))/,/^(?:(([0-9])*\.([0-9])+([eE][-+]?[0-9]+)?))/,/^(?:(([0-9])+))/,/^(?:("[^"]*"))/,/^(?:([Ff][Nn]([A-Za-z])))/,/^(?:((([A-Za-z])([A-Za-z0-9])?)[$%]?))/,/^(?:([\#]([A-Za-z])))/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = kc;
exports.Parser = kc.Parser;
exports.parse = function () { return kc.parse.apply(kc, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var args, parseQuery, setSize;
    args = void 0;
    parseQuery = function() {
      var i, pair, pairs, result;
      result = {};
      pairs = window.location.search.substring(1).split("&");
      for (i in pairs) {
        if (pairs[i].length > 0) {
          pair = pairs[i].split("=");
          result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
      }
      return result;
    };
    setSize = function() {
      $("div.console div.jquery-console-inner").offset({
        top: 0,
        left: 0
      });
      $("div.console div.jquery-console-inner").width($(this).width() - 12);
      return $("div.console div.jquery-console-inner").height($(this).height() - 12);
    };
    $(window).resize(function() {
      if (this.resizeTO) {
        clearTimeout(this.resizeTO);
      }
      return this.resizeTO = setTimeout(function() {
        return $(this).trigger("resizeEnd");
      }, 500);
    });
    $(window).bind("resizeEnd", setSize);
    katra.setRoot("/katra/");
    args = parseQuery();
    if (Object.keys(args).length === 0) {
      args = {
        title: "Katra BASIC"
      };
      document.title = args.title;
    }
    katra.main(args);
    return setSize();
  });

}).call(this);

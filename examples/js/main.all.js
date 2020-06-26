/*! Placeholders.js v4.0.1 */
/*!
 * The MIT License
 *
 * Copyright (c) 2012 James Allardice
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
!function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#ccc",z="placeholdersjs",A=new RegExp("(?:^|\\s)"+z+"(?!\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this);
// Array.isArray
if (!Array.isArray) {
    Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) == "[object Array]";
    };
}

// forEach
if (!Array.prototype.forEach) {
  Array.prototype.forEach =  function(block, thisObject) {
    var len = this.length >>> 0;
    for (var i = 0; i < len; i++) {
      if (i in this) {
        block.call(thisObject, this[i], i, this);
      }
    }
  };
}

// map
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
if (!Array.prototype.map) {
    Array.prototype.map = function(fun /*, thisp*/) {
        var len = this.length >>> 0;
        if (typeof fun != "function")
          throw new TypeError();

        var res = new Array(len);
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in this)
                res[i] = fun.call(thisp, this[i], i, this);
        }

        return res;
    };
}

// Filter

if (!Array.prototype.filter) {
    Array.prototype.filter = function (block /*, thisp */) {
        var values = [];
        var thisp = arguments[1];
        for (var i = 0; i < this.length; i++)
            if (block.call(thisp, this[i]))
                values.push(this[i]);
        return values;
    };
}

// indexOf
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (value /*, fromIndex */ ) {
        var length = this.length;
        if (!length)
            return -1;
        var i = arguments[1] || 0;
        if (i >= length)
            return -1;
        if (i < 0)
            i += length;
        for (; i < length; i++) {
            if (!Object.prototype.hasOwnProperty.call(this, i))
                continue;
            if (value === this[i])
                return i;
        }
        return -1;
    };
}

// addEventListener
// removeEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener?redirectlocale=en-US&redirectslug=DOM%2FEventTarget.addEventListener#Compatibility

(function() {
  if (!Element.prototype.addEventListener) {
    var eventListeners=[];
    
    var addEventListener=function(type,listener /*, useCapture (will be ignored) */) {
      var self=this;
      var wrapper=function(e) {
        e.target=e.srcElement;
        e.currentTarget=self;
        if (typeof listener.handleEvent != "undefined") {
          listener.handleEvent(e);
        } else {
          listener.call(self,e);
        }
      };
      if (type=="DOMContentLoaded") {
        var wrapper2=function(e) {
          if (document.readyState=="complete") {
            wrapper(e);
          }
        };
        document.attachEvent("onreadystatechange",wrapper2);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper2});
        
        if (document.readyState=="complete") {
          var e=new Event();
          e.srcElement=window;
          wrapper2(e);
        }
      } else {
        this.attachEvent("on"+type,wrapper);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper});
      }
    };
    var removeEventListener=function(type,listener /*, useCapture (will be ignored) */) {
      var counter=0;
      while (counter<eventListeners.length) {
        var eventListener=eventListeners[counter];
        if (eventListener.object==this && eventListener.type==type && eventListener.listener==listener) {
          if (type=="DOMContentLoaded") {
            this.detachEvent("onreadystatechange",eventListener.wrapper);
          } else {
            this.detachEvent("on"+type,eventListener.wrapper);
          }
          eventListeners.splice(counter, 1);
          break;
        }
        ++counter;
      }
    };
    Element.prototype.addEventListener=addEventListener;
    Element.prototype.removeEventListener=removeEventListener;
    if (HTMLDocument) {
      HTMLDocument.prototype.addEventListener=addEventListener;
      HTMLDocument.prototype.removeEventListener=removeEventListener;
    }
    if (Window) {
      Window.prototype.addEventListener=addEventListener;
      Window.prototype.removeEventListener=removeEventListener;
    }
  }
})();

// Element.firstElementChild

(function () {
  "use strict";

  if (!("firstElementChild" in document.documentElement)) {
    Object.defineProperty(Element.prototype, "firstElementChild", {
      get: function(){
        for(var nodes = this.children, n, i = 0, l = nodes.length; i < l; ++i) {
          if(n = nodes[i], 1 === n.nodeType) { return n; }
        }
        return null;
      }
    });
  }
})();

// Element.lastElementChild

(function () {
  "use strict";

  if (!("lastElementChild" in document.documentElement)) {
    Object.defineProperty(Element.prototype, "lastElementChild", {
      get: function(){
        for(var nodes = this.children, n, i = nodes.length - 1; i >= 0; --i) {
          if(n = nodes[i], 1 === n.nodeType) { return n; }
        }
        return null;
      }
    });
  }
})();

// Element.previousElementSibling

(function () {
  "use strict";

  if (!("previousElementSibling" in document.documentElement)) {
    Object.defineProperty(Element.prototype, "previousElementSibling", {
      get: function(){
        var e = this.previousSibling;
        while(e && 1 !== e.nodeType) {
          e = e.previousSibling;
        }
        return e;
      }
    });
  }
})();

// Element.nextElementSibling

(function () {
  "use strict";

  if (!("nextElementSibling" in document.documentElement)) {
    Object.defineProperty(Element.prototype, "nextElementSibling", {
      get: function(){
        var e = this.nextSibling;
        while(e && 1 !== e.nodeType) {
          e = e.nextSibling;
        }
        return e;
      }
    });
  }
})();

// getComputedStyle

(function(){
  "use strict";
  
  if(!window.getComputedStyle){
    window.getComputedStyle = function(el){
      if(!el) { return null; }
      
      /**
       * currentStyle returns an instance of a non-standard class called "CSSCurrentStyleDeclaration"
       * instead of "CSSStyleDeclaration", which has a few methods and properties missing (such as cssText).
       * https://msdn.microsoft.com/en-us/library/cc848941(v=vs.85).aspx
       *
       * Instead of returning the currentStyle value directly, we'll copy its properties to the style
       * of a shadow element. This ensures cssText is included, and ensures the result is an instance of
       * the correct DOM interface.
       *
       * There'll still be some minor discrepancies in the style values. For example, IE preserves the way
       * colour values were authored, whereas standards-compliant browsers will expand colours to use "rgb()"
       * notation. We won't bother to fix things like these, as they'd involve too much fiddling for little
       * gain.
       */
      
      var style   = el.currentStyle;
      var box     = el.getBoundingClientRect();
      var shadow  = document.createElement("div");
      var output  = shadow.style;
      for(var i in style) {
        output[i] = style[i];
      }
      
      /** Fix some glitches */
      output.cssFloat = output.styleFloat;
      if("auto" === output.width) { output.width  = (box.right - box.left) + "px"; }
      if("auto" === output.height) { output.height = (box.bottom - box.top) + "px"; }
      return output;
    };
  } 
})();

// Source: https://gist.github.com/k-gun/c2ea7c49edf7b757fe9561ba37cb19ca
;(function() {
    // helpers
    var regExp = function(name) {
        return new RegExp('(^| )'+ name +'( |$)');
    };
    var forEach = function(list, fn, scope) {
        for (var i = 0; i < list.length; i++) {
            fn.call(scope, list[i]);
        }
    };

    // class list object with basic methods
    function ClassList(element) {
        this.element = element;
    }

    ClassList.prototype = {
        add: function() {
            forEach(arguments, function(name) {
                if (!this.contains(name)) {
                    this.element.className += this.element.className.length > 0 ? ' ' + name : name;
                }
            }, this);
        },
        remove: function() {
            forEach(arguments, function(name) {
                this.element.className =
                    this.element.className.replace(regExp(name), '');
            }, this);
        },
        toggle: function(name) {
            return this.contains(name) 
                ? (this.remove(name), false) : (this.add(name), true);
        },
        contains: function(name) {
            return regExp(name).test(this.element.className);
        },
        // bonus..
        replace: function(oldName, newName) {
            this.remove(oldName), this.add(newName);
        }
    };

    // IE8/9, Safari
    if (!('classList' in Element.prototype)) {
        Object.defineProperty(Element.prototype, 'classList', {
            get: function() {
                return new ClassList(this);
            }
        });
    }

    // replace() support for others
    if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
        DOMTokenList.prototype.replace = ClassList.prototype.replace;
    }
})();
/*! tiny-slider.js v2.0 */
var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t,n){return n&&localStorage.setItem(e,t),t}function i(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}function a(){var e=document,t=e.body;return t||(t=e.createElement("body"),t.fake=!0),t}function r(e){var t="";return e.fake&&(t=k.style.overflow,e.style.background="",e.style.overflow=k.style.overflow="hidden",k.appendChild(e)),t}function o(e,t){e.fake&&(e.remove(),k.style.overflow=t,k.offsetHeight)}function s(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function l(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):e.addRule(t,n,i)}function c(e){return("insertRule"in e?e.cssRules:e.rules).length}function u(e,t){return Math.atan2(e,t)*(180/Math.PI)}function d(e,t){var n=!1,i=Math.abs(90-Math.abs(e));return i>=90-t?n="horizontal":i<=t&&(n="vertical"),n}function f(e,t){return e.className.indexOf(t)>=0}function v(e,t){f(e,t)||(e.className+=" "+t)}function h(e,t){f(e,t)&&(e.className=e.className.replace(t,""))}function p(e,t){return e.hasAttribute(t)}function m(e,t){return e.getAttribute(t)}function y(e){return void 0!==e.item}function g(e,t){if(e=y(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function x(e,t){e=y(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function b(e){p(e,"hidden")||g(e,{hidden:""})}function T(e){p(e,"hidden")&&x(e,"hidden")}function E(e){return"boolean"==typeof e.complete?e.complete:"number"==typeof e.naturalWidth?0!==e.naturalWidth:void 0}function C(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++){var i=e[n];if(void 0!==t.style[i])return i}return!1}function w(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function D(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&I;e.addEventListener(n,t[n],i)}}function O(e,t){for(var n in t){var i=["touchstart","touchmove"].indexOf(n)>=0&&I;e.removeEventListener(n,t[n],i)}}function N(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function A(e,t,n,i,a,r,o){function s(){r-=l,u+=d,e.style[t]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(e.style[t].replace(n,"").replace(i,"").replace(c,"")),d=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var k=document.documentElement,P=!1;try{var M=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,M)}catch(e){}var I=!!P&&{passive:!0},W=navigator.userAgent,S=!0,L=localStorage;try{L.tnsApp?L.tnsApp!==W&&(L.tnsApp=W,["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){L.removeItem(e)})):L.tnsApp=W}catch(e){S=!1}var H=document,R=window,B={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},z=t(L.tC)||n("tC",function(){var e=document,t=a(),n=r(t),i=e.createElement("div"),s=!1;t.appendChild(i);try{for(var l,c=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],u=0;u<3;u++)if(l=c[u],i.style.width=l,10===i.offsetWidth){s=l.replace("(10px)","");break}}catch(e){}return t.fake?o(t,n):i.remove(),s}(),S),j=t(L.tSP)||n("tSP",function(){var e,t,n=document,i=a(),s=r(i),l=n.createElement("div"),c=n.createElement("div");return l.style.cssText="width: 10px",c.style.cssText="float: left; width: 5.5px; height: 10px;",e=c.cloneNode(!0),l.appendChild(c),l.appendChild(e),i.appendChild(l),t=c.offsetTop!==e.offsetTop,i.fake?o(i,s):l.remove(),t}(),S),q=t(L.tMQ)||n("tMQ",function(){var e,t=document,n=a(),i=r(n),s=t.createElement("div"),l=t.createElement("style"),c="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",s.className="tns-mq-test",n.appendChild(l),n.appendChild(s),l.styleSheet?l.styleSheet.cssText=c:l.appendChild(t.createTextNode(c)),e=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,n.fake?o(n,i):s.remove(),"absolute"===e}(),S),G=t(L.tTf)||n("tTf",C(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),S),F=t(L.tTDu)||n("tTDu",C(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),S),U=t(L.tTDe)||n("tTDe",C(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),S),V=t(L.tADu)||n("tADu",C(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),S),X=t(L.tADe)||n("tADe",C(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),S),K=t(L.tTE)||n("tTE",w(F,"Transition"),S),Y=t(L.tAE)||n("tAE",w(V,"Animation"),S);return q||(j=!1),function(t){function n(e){var n=t[e];return!n&&ot&&rt.indexOf(e)>=0&&ot.forEach(function(t){at[t][e]&&(n=!0)}),n}function a(e,n){n=n?n:it;var i;if("items"===e&&a("fixedWidth"))i=Math.floor(n/(a("fixedWidth")+a("gutter")));else if("slideBy"!==e||Ue)if("edgePadding"!==e||Ue)if("autoHeight"!==e||Ue&&"outer"!==pt){if(i=t[e],ot&&rt.indexOf(e)>=0)for(var r=0,o=ot.length;r<o;r++){var s=ot[r];if(!(n>=s))break;e in at[s]&&(i=at[s][e])}}else i=!0;else i=!1;else i="page";return"items"===e&&(i=Math.max(1,Math.min(nt,i))),"slideBy"===e&&"page"===i&&(i=a("items")),i}function r(e){return z?z+"("+100*e+"% / "+At+")":100*e/At+"%"}function o(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(it%(n+t)+t)/2+"px":Je?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r=Je?"right":"bottom";i="margin-"+r+": -"+t+"px;"}return i}function y(e,t,n){n=Math.min(nt,n);return e?(e+t)*At+"px":z?z+"("+100*At+"% / "+n+")":100*At/n+"%"}function C(e,t,n){n=Math.min(nt,n);var i="";if(Je){if(i="width:",e)i+=e+t+"px";else{var a=Ue?At:Math.min(nt,n);i+=z?z+"(100% / "+a+")":100/a+"%"}i+=Kt+";"}return i}function w(e){var t="";if(e!==!1){t=(Je?"padding-":"margin-")+(Je?"right":"bottom")+": "+e+"px;"}return t}function k(e){e=e||R.event,clearTimeout(dt),dt=setTimeout(function(){it!==Ze.clientWidth&&(P(),"outer"===pt&&qt.emit("outerResized",ze(e)))},100)}function P(){var e=st,n=St,i=vt,r=Xt;if(it=Ze.clientWidth,Qe=$e.clientWidth,ot&&(st=M()),e!==st||gt){var s=xt,u=Ct,d=gt,f=yt,v=mt,h=Vt,p=st>0?at[ot[st-1]]:t;if(vt=a("items"),ht=a("slideBy"),Vt=a("disable"),Xt=!!Vt||nt<=vt,vt!==i&&(Bt=At-vt-Ht,Un()),Vt!==h&&W(Vt),Xt!==r&&Xt&&(St=Ue?Nt:0),e!==st&&(bt=p.speed||a("speed"),yt=p.edgePadding||a("edgePadding"),mt=p.gutter||a("gutter"),gt=p.fixedWidth||a("fixedWidth"),Vt||gt===d||ce(),(Ct=a("autoHeight"))!==u&&(Ct||($e.style.height=""))),xt=!Xt&&(p.arrowKeys||a("arrowKeys")),xt!==s&&(xt?D(H,$t):O(H,$t)),tn){var m=fn,g=vn;fn=!Xt&&(p.controls||a("controls")),vn=p.controlsText||a("controlsText"),fn!==m&&(fn?T(hn):b(hn)),vn!==g&&(ln.innerHTML=vn[0],cn.innerHTML=vn[1])}if(nn){var x=mn;mn=!Xt&&(p.nav||a("nav")),mn!==x&&(mn?(T(yn),Be()):b(yn))}if(rn){var E=zn;zn=!Xt&&(p.touch||a("touch")),zn!==E&&Ue&&(zn?D(_e,_t):O(_e,_t))}if(on){var N=Gn;Gn=!Xt&&(p.mouseDrag||a("mouseDrag")),Gn!==N&&Ue&&(Gn?D(_e,en):O(_e,en))}if(an){var A=Dn,k=kn,P=Sn,S=An;if(Xt?Dn=kn=Sn=!1:(Dn=p.autoplay||a("autoplay"),Dn?(kn=p.autoplayHoverPause||a("autoplayHoverPause"),Sn=p.autoplayResetOnVisibility||a("autoplayResetOnVisibility")):kn=Sn=!1),An=p.autoplayText||a("autoplayText"),On=p.autoplayTimeout||a("autoplayTimeout"),Dn!==A&&(Dn?(Pn&&T(Pn),Mn||xe()):(Pn&&b(Pn),Mn&&be())),kn!==k&&(kn?D(_e,Jt):O(_e,Jt)),Sn!==P&&(Sn?D(H,Zt):O(H,Zt)),Pn&&An!==S){var L=Dn?1:0,R=Pn.innerHTML,B=R.length-S[L].length;R.substring(B)===S[L]&&(Pn.innerHTML=R.substring(0,B)+An[L])}}if(!q){yt===f&&mt===v||($e.style.cssText=o(yt,mt,gt)),Ue&&Je&&(gt!==d||mt!==v||vt!==i)&&(_e.style.width=y(gt,mt,vt));var z=C(gt,mt,vt);mt!==v&&(z+=w(mt)),z.length>0&&(wt.removeRule(c(wt)-1),l(wt,"#"+Ut+" > .tns-item",z,c(wt))),gt||St!==n||de(0)}St!==n&&(qt.emit("indexChanged",ze()),de(0),Lt=St),vt!==i&&(Q(),te(),oe(),Be(),ne(),navigator.msMaxTouchPoints&&ee())}Je||Vt||(_(),He(),ce()),I(),J()}function M(){return st=0,ot.forEach(function(e,t){it>=e&&(st=t+lt)}),st}function I(){if(gt&&Nt){var e="tns-transparent";if(Xt){if(!f(tt[0],e)){yt&&($e.style.margin="0");for(var t=Nt;t--;)v(tt[t],e),v(tt[At-t-1],e)}}else if(yt&&(it<=gt+mt?"0px"!==$e.style.margin&&($e.style.margin="0"):$e.style.cssText=o(yt,mt,gt)),f(tt[0],e))for(var t=Nt;t--;)h(tt[t],e),h(tt[At-t-1],e)}}function W(e){var t=tt.length;if(e){if(wt.disabled=!0,_e.className=_e.className.replace(Ft.substring(1),""),_e.style="",Et)for(var n=Nt;n--;)Ue&&b(tt[n]),b(tt[t-n-1]);if(Je&&Ue||($e.style=""),!Ue)for(var i=St;i<St+nt;i++){var a=tt[i];a.style="",h(a,Ve),h(a,Ye)}}else{if(wt.disabled=!1,_e.className+=Ft,Je||_(),ce(),Et)for(var n=Nt;n--;)Ue&&T(tt[n]),T(tt[t-n-1]);if(!Ue)for(var i=St;i<St+nt;i++){var a=tt[i],r=i<St+vt?Ve:Ye;a.style.left=100*(i-St)/vt+"%",v(a,r)}}}function S(){Mn&&(be(),In=!0)}function L(){!Mn&&In&&(xe(),In=!1)}function Q(){if(Dt&&!Vt){var e=St,t=St+vt;for(yt&&(e-=1,t+=1);e<t;e++)[].forEach.call(tt[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[K]=function(e){e.stopPropagation()},D(e,t),f(e,"loaded")||(e.src=m(e,"data-src"),v(e,"loaded"))})}}function J(){if(Ct&&!Vt){for(var e=[],t=St;t<St+vt;t++)[].forEach.call(tt[t].querySelectorAll("img"),function(t){e.push(t)});0===e.length?$():Z(e)}}function Z(e){e.forEach(function(t,n){E(t)&&e.splice(n,1)}),0===e.length?$():setTimeout(function(){Z(e)},16)}function $(){for(var e,t=[],n=St;n<St+vt;n++)t.push(tt[n].offsetHeight);e=Math.max.apply(null,t),$e.style.height!==e&&(F&&se(bt),$e.style.height=e+"px")}function _(){ut=[0];for(var e,t=tt[0].getBoundingClientRect().top,n=1;n<At;n++)e=tt[n].getBoundingClientRect().top,ut.push(e-t)}function ee(){Ze.style.msScrollSnapPointsX="snapInterval(0%, "+100/vt+"%)"}function te(){for(var e=At;e--;){var t=tt[e];e>=St&&e<St+vt?p(t,"tabindex")&&(g(t,{"aria-hidden":"false"}),x(t,["tabindex"]),v(t,sn)):(p(t,"tabindex")||g(t,{"aria-hidden":"true",tabindex:"-1"}),f(t,sn)&&h(t,sn))}}function ne(){if(mn&&(Tn=bn!==-1?bn:(St-Ht)%nt,bn=-1,Tn!==En)){var e=pn[En],t=pn[Tn];g(e,{tabindex:"-1","aria-selected":"false"}),g(t,{tabindex:"0","aria-selected":"true"}),h(e,Cn),v(t,Cn)}}function ie(e){return"button"===e.nodeName.toLowerCase()}function ae(e){return"true"===e.getAttribute("aria-disabled")}function re(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function oe(){if(fn&&!Et){var e=un?ln.disabled:ae(ln),t=dn?cn.disabled:ae(cn),n=St===Rt,i=!Tt&&St===Bt;n&&!e&&re(un,ln,!0),!n&&e&&re(un,ln,!1),i&&!t&&re(dn,cn,!0),!i&&t&&re(dn,cn,!1)}}function se(e,t){e=e?e/1e3+"s":"",t=t||_e,t.style[F]=e,Ue||(t.style[V]=e),Je||($e.style[F]=e)}function le(){var e;if(Je)if(gt)e=-(gt+mt)*St+"px";else{var t=G?At:vt;e=100*-St/t+"%"}else e=-ut[St]+"px";return e}function ce(e){e||(e=le()),_e.style[Mt]=It+e+Wt}function ue(e,t,n,i){for(var a=e,r=e+vt;a<r;a++){var o=tt[a];i||(o.style.left=100*(a-St)/vt+"%"),F&&se(bt,o),Ke&&U&&(o.style[U]=o.style[X]=Ke*(a-e)/1e3+"s"),h(o,t),v(o,n),i&&Ot.push(o)}}function de(e,t){void 0===e&&(e=bt),F&&se(e),Vn(e,t),te(),mn&&gn.indexOf(St%nt)<0&&Be(),ne(),oe(),Q()}function fe(){Pt&&Un(),St!==Lt&&(qt.emit("indexChanged",ze()),qt.emit("transitionStart",ze()),zt=!0,de())}function ve(e){return e.toLowerCase().replace(/-/g,"")}function he(e){if(Ue||zt){if(qt.emit("transitionEnd",ze(e)),!Ue&&Ot.length>0)for(var t=0;t<vt;t++){var n=Ot[t];n.style.left="",F&&se(0,n),Ke&&U&&(n.style[U]=n.style[X]=""),h(n,Xe),v(n,Ye)}if(!e||!Ue&&e.target.parentNode===_e||e.target===_e&&ve(e.propertyName)===ve(Mt)){if(!Pt){var i=St;Un(),St!==i&&(F&&se(0),ce(),qt.emit("indexChanged",ze()))}J(),"inner"===pt&&qt.emit("innerLoaded",ze()),zt=!1,En=Tn,Lt=St}}}function pe(e){if(!Xt)if("prev"===e)me(null,-1);else if("next"===e)me(null,1);else if(!zt){var t=St%nt,i=0;if(!Et&&n("edgePadding")&&t--,t<0&&(t+=nt),"first"===e)i=-t;else if("last"===e)i=nt-vt-t;else if("number"!=typeof e&&(e=parseInt(e)),!isNaN(e)){var a=e%nt;a<0&&(a+=nt),!Et&&yt&&(a+=1),i=a-t}St+=i,St%nt!=Lt%nt&&fe()}}function me(e,t){if(!zt){var n;if(!t){e=e||R.event;for(var i=e.target||e.srcElement;i!==hn&&[ln,cn].indexOf(i)<0;)i=i.parentNode}i&&i===ln||t===-1?St>Rt&&(St-=ht,n=!0):(i&&i===cn||1===t)&&(Tt&&St===Bt?pe(0):St<Bt&&(St+=ht,n=!0)),n&&fe()}}function ye(e){if(!zt){e=e||R.event;for(var t,n=e.target||e.srcElement;n!==yn&&!p(n,"data-nav");)n=n.parentNode;p(n,"data-nav")&&(t=bn=[].indexOf.call(pn,n),pe(t))}}function ge(e,t){g(Pn,{"data-action":e}),Pn.innerHTML=Wn[0]+e+Wn[1]+t}function xe(){Ee(),Pn&&ge("stop",An[1]),Mn=!0}function be(){Te(),Pn&&ge("start",An[0]),Mn=!1}function Te(){Mn="paused",clearInterval(wn)}function Ee(){Mn!==!0&&(clearInterval(wn),wn=setInterval(function(){me(null,Nn)},On))}function Ce(){Mn?be():xe()}function we(){Ln!=H.hidden&&Mn!==!1&&(H.hidden?Te():Ee()),Ln=H.hidden}function De(e){switch(e=e||R.event,e.keyCode){case B.LEFT:me(null,-1);break;case B.RIGHT:me(null,1)}}function Oe(e){switch(e=e||R.event,e.keyCode){case B.LEFT:case B.UP:case B.PAGEUP:ln.disabled||me(null,-1);break;case B.RIGHT:case B.DOWN:case B.PAGEDOWN:cn.disabled||me(null,1);break;case B.HOME:pe(0);break;case B.END:pe(nt-1)}}function Ne(e){e.focus()}function Ae(e){function n(e){return t.navContainer?e:gn[e]}var i=H.activeElement;if(p(i,"data-nav")){e=e||R.event;var a=e.keyCode,r=[].indexOf.call(pn,i),o=gn.length,s=gn.indexOf(r);switch(t.navContainer&&(o=nt,s=r),a){case B.LEFT:case B.PAGEUP:s>0&&Ne(pn[n(s-1)]);break;case B.UP:case B.HOME:s>0&&Ne(pn[n(0)]);break;case B.RIGHT:case B.PAGEDOWN:s<o-1&&Ne(pn[n(s+1)]);break;case B.DOWN:case B.END:s<o-1&&Ne(pn[n(o-1)]);break;case B.ENTER:case B.SPACE:bn=r,pe(r)}}}function ke(){de(0,_e.scrollLeft()),Lt=St}function Pe(e){return e.target||e.srcElement}function Me(e){return e.type.indexOf("touch")>=0}function Ie(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function We(e){if(!zt){e=e||R.event;var t;Me(e)?(t=e.changedTouches[0],qt.emit("touchStart",ze(e))):(t=e,Ie(e),qt.emit("dragStart",ze(e))),jn=parseInt(t.clientX),qn=parseInt(t.clientY),Hn=parseFloat(_e.style[Mt].replace(It,"").replace(Wt,""))}}function Se(e){if(!zt&&(e=e||R.event,null!==jn)){var n;if(Me(e)?n=e.changedTouches[0]:(n=e,Ie(e)),Rn=parseInt(n.clientX)-jn,Bn=parseInt(n.clientY)-qn,d(u(Bn,Rn),15)===t.axis&&Rn){Me(e)?qt.emit("touchMove",ze(e)):(Fn||(Fn=!0),qt.emit("dragMove",ze(e))),ft||(ft=!0);var i=Hn;if(Je)if(gt)i+=Rn,i+="px";else{var a=G?Rn*vt*100/(Qe*At):100*Rn/Qe;i+=a,i+="%"}else i+=Bn,i+="px";G&&se(0),_e.style[Mt]=It+i+Wt}}}function Le(e){if(!zt&&(e=e||R.event,ft)){ft=!1;var t;if(Me(e)?(t=e.changedTouches[0],qt.emit("touchEnd",ze(e))):(t=e,qt.emit("dragEnd",ze(e))),Rn=parseInt(t.clientX)-jn,Bn=parseInt(t.clientY)-qn,jn=qn=null,Je){var n=-Rn*vt/Qe;n=Rn>0?Math.floor(n):Math.ceil(n),St+=n}else{var i=-(Hn+Bn);if(i<=0)St=Rt;else if(i>=ut[ut.length-1])St=Bt;else{var a=0;do{a++,St=Bn<0?a+1:a}while(a<At&&i>=ut[a+1])}}if(fe(),Fn){Fn=!1;var r=Pe(e);D(r,{click:function e(t){Ie(t),O(r,{click:e})}})}}}function He(){$e.style.height=ut[St+vt]-ut[St]+"px"}function Re(){gn=[];for(var e=!Et&&yt?St-1:St,t=e%nt%vt;t<nt;)!Et&&t+vt>nt&&(t=nt-vt),gn.push(t),t+=vt;(Et&&gn.length*vt<nt||!Et&&gn[0]>0)&&gn.unshift(0)}function Be(){mn&&!t.navContainer&&(Re(),gn!==xn&&(xn.length>0&&xn.forEach(function(e){b(pn[e])}),gn.length>0&&gn.forEach(function(e){T(pn[e])}),xn=gn))}function ze(e){return{container:_e,slideItems:tt,navContainer:yn,navItems:pn,controlsContainer:hn,prevButton:ln,nextButton:cn,items:vt,slideBy:ht,cloneCount:Nt,slideCount:nt,slideCountNew:At,index:St,indexCached:Lt,navCurrentIndex:Tn,navCurrentIndexCached:En,visibleNavIndexes:gn,visibleNavIndexesCached:xn,event:e||{}}}if(t=e({container:H.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},t||{}),["container","controlsContainer","navContainer","autoplayButton"].forEach(function(e){"string"==typeof t[e]&&(t[e]=H.querySelector(t[e]))}),t.container&&t.container.nodeName&&!(t.container.children.length<2)){if(t.responsive){var je={},qe=t.responsive;for(var Ge in qe){var Fe=qe[Ge];je[Ge]="number"==typeof Fe?{items:Fe}:Fe}t.responsive=je,je=null}var Ue="carousel"===t.mode;if(!Ue){t.axis="horizontal",t.rewind=!1,t.loop=!0,t.edgePadding=!1;var Ve="tns-fadeIn",Xe="tns-fadeOut",Ke=!1,Ye=t.animateNormal||"tns-normal";K&&Y&&(Ve=t.animateIn||Ve,Xe=t.animateOut||Xe,Ke=t.animateDelay||Ke)}var Qe,Je="horizontal"===t.axis,Ze=H.createElement("div"),$e=H.createElement("div"),_e=t.container,et=_e.parentNode,tt=_e.children,nt=tt.length,it=et.clientWidth,at=t.responsive,rt=[],ot=!1,st=0,lt=0;if(at){ot=Object.keys(at).map(function(e){return parseInt(e)}).sort(function(e,t){return e-t}),ot.indexOf(0)<0&&(lt=1),ot.forEach(function(e){rt=rt.concat(Object.keys(at[e]))});var ct=[];rt.forEach(function(e){ct.indexOf(e)<0&&ct.push(e)}),rt=ct,st=M()}var ut,dt,ft,vt=a("items"),ht="page"===a("slideBy")?vt:a("slideBy"),pt=t.nested,mt=a("gutter"),yt=a("edgePadding"),gt=a("fixedWidth"),xt=a("arrowKeys"),bt=a("speed"),Tt=t.rewind,Et=!Tt&&t.loop,Ct=a("autoHeight"),wt=s(),Dt=t.lazyload,Ot=[],Nt=Et?2*nt:n("edgePadding")?1:0,At=Ue?nt+2*Nt:nt+Nt,kt=!(!gt||Et||yt),Pt=!Ue||!Et,Mt=Je?"left":"top",It="",Wt="",St=Ue?Nt:0,Lt=St,Ht=!Et&&n("edgePadding")?1:0,Rt=Ht,Bt=At-vt-Ht,zt=!1,jt=t.onInit,qt=new N,Gt=_e.id,Ft=" tns-slider tns-"+t.mode,Ut=_e.id||i(),Vt=a("disable"),Xt=!!Vt||nt<=vt,Kt="inner"===pt?" !important":"",Yt={click:me,keydown:Oe},Qt={click:ye,keydown:Ae},Jt={mouseover:S,mouseout:L},Zt={visibilitychange:we},$t={keydown:De},_t={touchstart:We,touchmove:Se,touchend:Le,touchcancel:Le},en={mousedown:We,mousemove:Se,mouseup:Le,mouseleave:Le},tn=n("controls"),nn=n("nav"),an=n("autoplay"),rn=n("touch"),on=n("mouseDrag"),sn="tns-slide-active";if(tn)var ln,cn,un,dn,fn=a("controls"),vn=a("controlsText"),hn=t.controlsContainer;if(nn)var pn,mn=a("nav"),yn=t.navContainer,gn=[],xn=gn,bn=-1,Tn=0,En=0,Cn="tns-nav-active";if(an)var wn,Dn=a("autoplay"),On=a("autoplayTimeout"),Nn="forward"===t.autoplayDirection?1:-1,An=a("autoplayText"),kn=a("autoplayHoverPause"),Pn=t.autoplayButton,Mn=!1,In=!1,Wn=["<span class='tns-visually-hidden'>"," animation</span>"],Sn=a("autoplayResetOnVisibility"),Ln=!1;if(rn)var Hn,Rn,Bn,zn=a("touch"),jn=null,qn=null;if(on)var Gn=a("mouseDrag"),Fn=!1;Xt&&(fn=mn=zn=Gn=xt=Dn=kn=Sn=!1),G&&(Mt=G,It="translate",It+=Je?"X(":"Y(",Wt=")"),function(){Ze.appendChild($e),et.insertBefore(Ze,_e),$e.appendChild(_e),Qe=$e.clientWidth;var e="tns-outer",i="tns-inner";if(Ue?Je&&(n("edgePadding")||n("gutter")&&!t.fixedWidth)?e+=" tns-ovh":i+=" tns-ovh":n("gutter")&&(e+=" tns-ovh"),Ze.className=e,$e.className=i,$e.id=Ut+"-iw",Ct&&($e.className+=" tns-ah",$e.style[F]=bt/1e3+"s"),""===_e.id&&(_e.id=Ut),Ft+=j?" tns-subpixel":" tns-no-subpixel",Ft+=z?" tns-calc":" tns-no-calc",Ue&&(Ft+=" tns-"+t.axis),_e.className+=Ft,Ue&&K){var s={};s[K]=he,D(_e,s)}e=i=null;for(var u=0;u<nt;u++){var d=tt[u];d.id||(d.id=Ut+"-item"+u),v(d,"tns-item"),!Ue&&Ye&&v(d,Ye),g(d,{"aria-hidden":"true",tabindex:"-1"})}if(Et||yt){for(var f=H.createDocumentFragment(),p=H.createDocumentFragment(),m=Nt;m--;){var T=m%nt,E=tt[T].cloneNode(!0);if(x(E,"id"),p.insertBefore(E,p.firstChild),Ue){var O=tt[nt-1-T].cloneNode(!0);x(O,"id"),f.appendChild(O)}}_e.insertBefore(f,_e.firstChild),_e.appendChild(p),tt=_e.children}for(var N=St;N<St+vt;N++){var d=tt[N];g(d,{"aria-hidden":"false"}),x(d,["tabindex"]),v(d,sn),Ue||(d.style.left=100*(N-St)/vt+"%",v(d,Ve),h(d,Ye))}if(Ue&&Je)if(j){var A=R.getComputedStyle(tt[0]).fontSize;A.indexOf("em")>0&&(A=16*parseFloat(A)+"px"),l(wt,"#"+Ut,"font-size:0;",c(wt)),l(wt,"#"+Ut+" > .tns-item","font-size:"+A+";",c(wt))}else[].forEach.call(tt,function(e,t){e.style.marginLeft=r(t)});if(q){var M=o(t.edgePadding,t.gutter,t.fixedWidth);l(wt,"#"+Ut+"-iw",M,c(wt)),Ue&&Je&&(M="width:"+y(t.fixedWidth,t.gutter,t.items),l(wt,"#"+Ut,M,c(wt))),(Je||t.gutter)&&(M=C(t.fixedWidth,t.gutter,t.items)+w(t.gutter),l(wt,"#"+Ut+" > .tns-item",M,c(wt)))}else if($e.style.cssText=o(yt,mt,gt),Ue&&Je&&(_e.style.width=y(gt,mt,vt)),Je||mt){var M=C(gt,mt,vt)+w(mt);l(wt,"#"+Ut+" > .tns-item",M,c(wt))}if(Je||Vt||(_(),He()),at&&q&&ot.forEach(function(e){var t=at[e],i="",r="",s="",l="",c=a("items",e),u=a("fixedWidth",e),d=a("edgePadding",e),f=a("gutter",e);("edgePadding"in t||"gutter"in t)&&(r="#"+Ut+"-iw{"+o(d,f,u)+"}"),Ue&&Je&&("fixedWidth"in t||"gutter"in t||"items"in t)&&(s="#"+Ut+"{width:"+y(u,f,c)+"}"),("fixedWidth"in t||n("fixedWidth")&&"gutter"in t||!Ue&&"items"in t)&&(l+=C(u,f,c)),"gutter"in t&&(l+=w(f)),l.length>0&&(l="#"+Ut+" > .tns-item{"+l+"}"),i=r+s+l,i.length>0&&wt.insertRule("@media (min-width: "+e/16+"em) {"+i+"}",wt.cssRules.length)}),Ue&&!Vt&&ce(),navigator.msMaxTouchPoints&&(v(Ze,"ms-touch"),D(Ze,{scroll:ke}),ee()),nn){var S=Ue?Nt:0;if(yn)g(yn,{"aria-label":"Carousel Pagination"}),pn=yn.children,[].forEach.call(pn,function(e,t){g(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":tt[S+t].id})});else{for(var L="",N=0;N<nt;N++)L+='<button data-nav="'+N+'" tabindex="-1" aria-selected="false" aria-controls="'+tt[S+N].id+'" hidden type="button"></button>';L='<div class="tns-nav" aria-label="Carousel Pagination">'+L+"</div>",Ze.insertAdjacentHTML("afterbegin",L),yn=Ze.querySelector(".tns-nav"),pn=yn.children,Be()}if(F){var B=F.substring(0,F.length-18).toLowerCase(),M="transition: all "+bt/1e3+"s";B&&(M="-"+B+"-"+M),l(wt,"[aria-controls^="+Ut+"-item]",M,c(wt))}g(pn[0],{tabindex:"0","aria-selected":"true"}),v(pn[0],Cn),D(yn,Qt),mn||b(yn)}if(an){var G=Dn?"stop":"start";Pn?g(Pn,{"data-action":G}):t.autoplayButtonOutput&&($e.insertAdjacentHTML("beforebegin",'<button data-action="'+G+'" type="button">'+Wn[0]+G+Wn[1]+An[0]+"</button>"),Pn=Ze.querySelector("[data-action]")),Pn&&D(Pn,{click:Ce}),Dn?(xe(),kn&&D(_e,Jt),Sn&&D(_e,Zt)):Pn&&b(Pn)}tn&&(hn?(ln=hn.children[0],cn=hn.children[1],g(hn,{"aria-label":"Carousel Navigation",tabindex:"0"}),g(ln,{"data-controls":"prev"}),g(cn,{"data-controls":"next"}),g(hn.children,{"aria-controls":Ut,tabindex:"-1"})):(Ze.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Ut+'" type="button">'+vn[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Ut+'" type="button">'+vn[1]+"</button></div>"),hn=Ze.querySelector(".tns-controls"),ln=hn.children[0],cn=hn.children[1]),un=ie(ln),dn=ie(cn),Et||re(un,ln,!0),D(hn,Yt),fn||b(hn)),zn&&D(_e,_t),Gn&&D(_e,en),xt&&D(H,$t),"inner"===pt?qt.on("outerResized",function(){P(),qt.emit("innerLoaded",ze())}):(D(R,{resize:k}),"outer"===pt&&qt.on("innerLoaded",J)),Q(),J(),I(),"function"==typeof jt&&jt(ze()),"inner"===pt&&qt.emit("innerLoaded",ze()),Vt&&W(!0)}();var Un=function(){return Et?function(){var e=Rt,t=Bt;Ue&&(e+=ht,t-=ht);var n=mt?mt:0;if(gt&&it%(gt+n)>n&&(t-=1),St>t)for(;St>=e+nt;)St-=nt;else if(St<e)for(;St<=t-nt;)St+=nt}:function(){St=Math.max(Rt,Math.min(Bt,St))}}(),Vn=function(){return Ue?function(e,t){if(t||(t=le()),kt&&St===Bt){var n=G?100*-((At-vt)/At):100*-(At/vt-1);t=Math.max(parseFloat(t),n)+"%"}F||!e?(ce(t),0===bt&&he()):A(_e,Mt,It,Wt,t,bt,he),Je||He()}:function(){Ot=[];var e={};e[K]=e[Y]=he,O(tt[Lt],e),D(tt[St],e),ue(Lt,Ve,Xe,!0),ue(St,Ye,Ve),K&&Y&&0!==bt||setTimeout(he,0)}}();return{getInfo:ze,events:qt,goTo:pe,destroy:function(){if(wt.disabled=!0,Et)for(var e=Nt;e--;)tt[0].remove(),tt[tt.length-1].remove();for(var n=nt;n--;){var i=tt[n];i.id.indexOf(Ut+"-item")>=0&&(i.id=""),i.classList.remove("tns-item")}if(x(tt,["style","aria-hidden","tabindex"]),tt=Ut=nt=At=Nt=null,fn&&(O(hn,Yt),t.controlsContainer&&(x(hn,["aria-label","tabindex"]),x(hn.children,["aria-controls","aria-disabled","tabindex"])),hn=ln=cn=null),mn&&(O(yn,Qt),t.navContainer&&(x(yn,["aria-label"]),x(pn,["aria-selected","aria-controls","tabindex"])),yn=pn=null),Dn&&(clearInterval(wn),Pn&&O(Pn,{click:Ce}),O(_e,Jt),O(_e,Zt),t.autoplayButton&&x(Pn,["data-action"])),_e.id=Gt||"",_e.className=_e.className.replace(Ft,""),_e.style="",Ue&&K){var a={};a[K]=he,O(_e,a)}O(_e,_t),O(_e,en),et.insertBefore(_e,Ze),Ze.remove(),Ze=$e=_e=null,O(H,$t),O(R,{resize:k})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
/*! nouislider - 10.0.0 - 2017-05-28 14:52:49 */

!function(a){"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?module.exports=a():window.noUiSlider=a()}(function(){"use strict";function a(a){return"object"==typeof a&&"function"==typeof a.to&&"function"==typeof a.from}function b(a){a.parentElement.removeChild(a)}function c(a){a.preventDefault()}function d(a){return a.filter(function(a){return this[a]?!1:this[a]=!0},{})}function e(a,b){return Math.round(a/b)*b}function f(a,b){var c=a.getBoundingClientRect(),d=a.ownerDocument,e=d.documentElement,f=o(d);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(f.x=0),b?c.top+f.y-e.clientTop:c.left+f.x-e.clientLeft}function g(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function h(a,b,c){c>0&&(l(a,b),setTimeout(function(){m(a,b)},c))}function i(a){return Math.max(Math.min(a,100),0)}function j(a){return Array.isArray(a)?a:[a]}function k(a){a=String(a);var b=a.split(".");return b.length>1?b[1].length:0}function l(a,b){a.classList?a.classList.add(b):a.className+=" "+b}function m(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")}function n(a,b){return a.classList?a.classList.contains(b):new RegExp("\\b"+b+"\\b").test(a.className)}function o(a){var b=void 0!==window.pageXOffset,c="CSS1Compat"===(a.compatMode||""),d=b?window.pageXOffset:c?a.documentElement.scrollLeft:a.body.scrollLeft,e=b?window.pageYOffset:c?a.documentElement.scrollTop:a.body.scrollTop;return{x:d,y:e}}function p(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function q(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,b)}catch(c){}return a}function r(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function s(a,b){return 100/(b-a)}function t(a,b){return 100*b/(a[1]-a[0])}function u(a,b){return t(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function v(a,b){return b*(a[1]-a[0])/100+a[0]}function w(a,b){for(var c=1;a>=b[c];)c+=1;return c}function x(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,h=w(c,a);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],f+u([d,e],c)/s(f,g)}function y(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,h=w(c,b);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],v([d,e],(c-f)*s(f,g))}function z(a,b,c,d){if(100===d)return d;var f,g,h=w(d,a);return c?(f=a[h-1],g=a[h],d-f>(g-f)/2?g:f):b[h-1]?a[h-1]+e(d-a[h-1],b[h-1]):d}function A(a,b,c){var d;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider ("+$+"): 'range' contains invalid value.");if(d="min"===a?0:"max"===a?100:parseFloat(a),!g(d)||!g(b[0]))throw new Error("noUiSlider ("+$+"): 'range' value isn't numeric.");c.xPct.push(d),c.xVal.push(b[0]),d?c.xSteps.push(isNaN(b[1])?!1:b[1]):isNaN(b[1])||(c.xSteps[0]=b[1]),c.xHighestCompleteStep.push(0)}function B(a,b,c){if(!b)return!0;c.xSteps[a]=t([c.xVal[a],c.xVal[a+1]],b)/s(c.xPct[a],c.xPct[a+1]);var d=(c.xVal[a+1]-c.xVal[a])/c.xNumSteps[a],e=Math.ceil(Number(d.toFixed(3))-1),f=c.xVal[a]+c.xNumSteps[a]*e;c.xHighestCompleteStep[a]=f}function C(a,b,c){this.xPct=[],this.xVal=[],this.xSteps=[c||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=b;var d,e=[];for(d in a)a.hasOwnProperty(d)&&e.push([a[d],d]);for(e.sort(e.length&&"object"==typeof e[0][0]?function(a,b){return a[0][0]-b[0][0]}:function(a,b){return a[0]-b[0]}),d=0;d<e.length;d++)A(e[d][1],e[d][0],this);for(this.xNumSteps=this.xSteps.slice(0),d=0;d<this.xNumSteps.length;d++)B(d,this.xNumSteps[d],this)}function D(b){if(a(b))return!0;throw new Error("noUiSlider ("+$+"): 'format' requires 'to' and 'from' methods.")}function E(a,b){if(!g(b))throw new Error("noUiSlider ("+$+"): 'step' is not numeric.");a.singleStep=b}function F(a,b){if("object"!=typeof b||Array.isArray(b))throw new Error("noUiSlider ("+$+"): 'range' is not an object.");if(void 0===b.min||void 0===b.max)throw new Error("noUiSlider ("+$+"): Missing 'min' or 'max' in 'range'.");if(b.min===b.max)throw new Error("noUiSlider ("+$+"): 'range' 'min' and 'max' cannot be equal.");a.spectrum=new C(b,a.snap,a.singleStep)}function G(a,b){if(b=j(b),!Array.isArray(b)||!b.length)throw new Error("noUiSlider ("+$+"): 'start' option is incorrect.");a.handles=b.length,a.start=b}function H(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider ("+$+"): 'snap' option must be a boolean.")}function I(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider ("+$+"): 'animate' option must be a boolean.")}function J(a,b){if(a.animationDuration=b,"number"!=typeof b)throw new Error("noUiSlider ("+$+"): 'animationDuration' option must be a number.")}function K(a,b){var c,d=[!1];if("lower"===b?b=[!0,!1]:"upper"===b&&(b=[!1,!0]),b===!0||b===!1){for(c=1;c<a.handles;c++)d.push(b);d.push(!1)}else{if(!Array.isArray(b)||!b.length||b.length!==a.handles+1)throw new Error("noUiSlider ("+$+"): 'connect' option doesn't match handle count.");d=b}a.connect=d}function L(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider ("+$+"): 'orientation' option is invalid.")}}function M(a,b){if(!g(b))throw new Error("noUiSlider ("+$+"): 'margin' option must be numeric.");if(0!==b&&(a.margin=a.spectrum.getMargin(b),!a.margin))throw new Error("noUiSlider ("+$+"): 'margin' option is only supported on linear sliders.")}function N(a,b){if(!g(b))throw new Error("noUiSlider ("+$+"): 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit||a.handles<2)throw new Error("noUiSlider ("+$+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function O(a,b){if(!g(b))throw new Error("noUiSlider ("+$+"): 'padding' option must be numeric.");if(0!==b){if(a.padding=a.spectrum.getMargin(b),!a.padding)throw new Error("noUiSlider ("+$+"): 'padding' option is only supported on linear sliders.");if(a.padding<0)throw new Error("noUiSlider ("+$+"): 'padding' option must be a positive number.");if(a.padding>=50)throw new Error("noUiSlider ("+$+"): 'padding' option must be less than half the range.")}}function P(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1;break;default:throw new Error("noUiSlider ("+$+"): 'direction' option was not recognized.")}}function Q(a,b){if("string"!=typeof b)throw new Error("noUiSlider ("+$+"): 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0,g=b.indexOf("hover")>=0;if(e){if(2!==a.handles)throw new Error("noUiSlider ("+$+"): 'fixed' behaviour must be used with 2 handles");M(a,a.start[1]-a.start[0])}a.events={tap:c||f,drag:d,fixed:e,snap:f,hover:g}}function R(a,b){if(b!==!1)if(b===!0){a.tooltips=[];for(var c=0;c<a.handles;c++)a.tooltips.push(!0)}else{if(a.tooltips=j(b),a.tooltips.length!==a.handles)throw new Error("noUiSlider ("+$+"): must pass a formatter for all handles.");a.tooltips.forEach(function(a){if("boolean"!=typeof a&&("object"!=typeof a||"function"!=typeof a.to))throw new Error("noUiSlider ("+$+"): 'tooltips' must be passed a formatter or 'false'.")})}}function S(a,b){a.ariaFormat=b,D(b)}function T(a,b){a.format=b,D(b)}function U(a,b){if(void 0!==b&&"string"!=typeof b&&b!==!1)throw new Error("noUiSlider ("+$+"): 'cssPrefix' must be a string or `false`.");a.cssPrefix=b}function V(a,b){if(void 0!==b&&"object"!=typeof b)throw new Error("noUiSlider ("+$+"): 'cssClasses' must be an object.");if("string"==typeof a.cssPrefix){a.cssClasses={};for(var c in b)b.hasOwnProperty(c)&&(a.cssClasses[c]=a.cssPrefix+b[c])}else a.cssClasses=b}function W(a,b){if(b!==!0&&b!==!1)throw new Error("noUiSlider ("+$+"): 'useRequestAnimationFrame' option should be true (default) or false.");a.useRequestAnimationFrame=b}function X(a){var b={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:_,format:_},c={step:{r:!1,t:E},start:{r:!0,t:G},connect:{r:!0,t:K},direction:{r:!0,t:P},snap:{r:!1,t:H},animate:{r:!1,t:I},animationDuration:{r:!1,t:J},range:{r:!0,t:F},orientation:{r:!1,t:L},margin:{r:!1,t:M},limit:{r:!1,t:N},padding:{r:!1,t:O},behaviour:{r:!0,t:Q},ariaFormat:{r:!1,t:S},format:{r:!1,t:T},tooltips:{r:!1,t:R},cssPrefix:{r:!1,t:U},cssClasses:{r:!1,t:V},useRequestAnimationFrame:{r:!1,t:W}},d={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},useRequestAnimationFrame:!0};a.format&&!a.ariaFormat&&(a.ariaFormat=a.format),Object.keys(c).forEach(function(e){if(void 0===a[e]&&void 0===d[e]){if(c[e].r)throw new Error("noUiSlider ("+$+"): '"+e+"' is required.");return!0}c[e].t(b,void 0===a[e]?d[e]:a[e])}),b.pips=a.pips;var e=[["left","top"],["right","bottom"]];return b.style=e[b.dir][b.ort],b.styleOposite=e[b.dir?0:1][b.ort],b}function Y(a,e,g){function k(a,b){var c=xa.createElement("div");return b&&l(c,b),a.appendChild(c),c}function s(a,b){var c=k(a,e.cssClasses.origin),d=k(c,e.cssClasses.handle);return d.setAttribute("data-handle",b),d.setAttribute("tabindex","0"),d.setAttribute("role","slider"),d.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),0===b?l(d,e.cssClasses.handleLower):b===e.handles-1&&l(d,e.cssClasses.handleUpper),c}function t(a,b){return b?k(a,e.cssClasses.connect):!1}function u(a,b){ia=[],ja=[],ja.push(t(b,a[0]));for(var c=0;c<e.handles;c++)ia.push(s(b,c)),ra[c]=c,ja.push(t(b,a[c+1]))}function v(a){l(a,e.cssClasses.target),0===e.dir?l(a,e.cssClasses.ltr):l(a,e.cssClasses.rtl),0===e.ort?l(a,e.cssClasses.horizontal):l(a,e.cssClasses.vertical),ha=k(a,e.cssClasses.base)}function w(a,b){return e.tooltips[b]?k(a.firstChild,e.cssClasses.tooltip):!1}function x(){var a=ia.map(w);ea("update",function(b,c,d){if(a[c]){var f=b[c];e.tooltips[c]!==!0&&(f=e.tooltips[c].to(d[c])),a[c].innerHTML=f}})}function y(){ea("update",function(a,b,c,d,f){ra.forEach(function(a){var b=ia[a],d=S(qa,a,0,!0,!0,!0),g=S(qa,a,100,!0,!0,!0),h=f[a],i=e.ariaFormat.to(c[a]);b.children[0].setAttribute("aria-valuemin",d.toFixed(1)),b.children[0].setAttribute("aria-valuemax",g.toFixed(1)),b.children[0].setAttribute("aria-valuenow",h.toFixed(1)),b.children[0].setAttribute("aria-valuetext",i)})})}function z(a,b,c){if("range"===a||"steps"===a)return ta.xVal;if("count"===a){if(!b)throw new Error("noUiSlider ("+$+"): 'values' required for mode 'count'.");var d,e=100/(b-1),f=0;for(b=[];(d=f++*e)<=100;)b.push(d);a="positions"}return"positions"===a?b.map(function(a){return ta.fromStepping(c?ta.getStep(a):a)}):"values"===a?c?b.map(function(a){return ta.fromStepping(ta.getStep(ta.toStepping(a)))}):b:void 0}function A(a,b,c){function e(a,b){return(a+b).toFixed(7)/1}var f={},g=ta.xVal[0],h=ta.xVal[ta.xVal.length-1],i=!1,j=!1,k=0;return c=d(c.slice().sort(function(a,b){return a-b})),c[0]!==g&&(c.unshift(g),i=!0),c[c.length-1]!==h&&(c.push(h),j=!0),c.forEach(function(d,g){var h,l,m,n,o,p,q,r,s,t,u=d,v=c[g+1];if("steps"===b&&(h=ta.xNumSteps[g]),h||(h=v-u),u!==!1&&void 0!==v)for(h=Math.max(h,1e-7),l=u;v>=l;l=e(l,h)){for(n=ta.toStepping(l),o=n-k,r=o/a,s=Math.round(r),t=o/s,m=1;s>=m;m+=1)p=k+m*t,f[p.toFixed(5)]=["x",0];q=c.indexOf(l)>-1?1:"steps"===b?2:0,!g&&i&&(q=0),l===v&&j||(f[n.toFixed(5)]=[l,q]),k=n}}),f}function B(a,b,c){function d(a,b){var c=b===e.cssClasses.value,d=c?j:m,f=c?h:i;return b+" "+d[e.ort]+" "+f[a]}function f(a,f){f[1]=f[1]&&b?b(f[0],f[1]):f[1];var h=k(g,!1);h.className=d(f[1],e.cssClasses.marker),h.style[e.style]=a+"%",f[1]&&(h=k(g,!1),h.className=d(f[1],e.cssClasses.value),h.style[e.style]=a+"%",h.innerText=c.to(f[0]))}var g=xa.createElement("div"),h=[e.cssClasses.valueNormal,e.cssClasses.valueLarge,e.cssClasses.valueSub],i=[e.cssClasses.markerNormal,e.cssClasses.markerLarge,e.cssClasses.markerSub],j=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],m=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];return l(g,e.cssClasses.pips),l(g,0===e.ort?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical),Object.keys(a).forEach(function(b){f(b,a[b])}),g}function C(){la&&(b(la),la=null)}function D(a){C();var b=a.mode,c=a.density||1,d=a.filter||!1,e=a.values||!1,f=a.stepped||!1,g=z(b,e,f),h=A(c,b,g),i=a.format||{to:Math.round};return la=pa.appendChild(B(h,d,i))}function E(){var a=ha.getBoundingClientRect(),b="offset"+["Width","Height"][e.ort];return 0===e.ort?a.width||ha[b]:a.height||ha[b]}function F(a,b,c,d){var f=function(b){return pa.hasAttribute("disabled")?!1:n(pa,e.cssClasses.tap)?!1:(b=G(b,d.pageOffset))?a===ma.start&&void 0!==b.buttons&&b.buttons>1?!1:d.hover&&b.buttons?!1:(oa||b.preventDefault(),b.calcPoint=b.points[e.ort],void c(b,d)):!1},g=[];return a.split(" ").forEach(function(a){b.addEventListener(a,f,oa?{passive:!0}:!1),g.push([a,f])}),g}function G(a,b){var c,d,e=0===a.type.indexOf("touch"),f=0===a.type.indexOf("mouse"),g=0===a.type.indexOf("pointer");if(0===a.type.indexOf("MSPointer")&&(g=!0),e){if(a.touches.length>1)return!1;c=a.changedTouches[0].pageX,d=a.changedTouches[0].pageY}return b=b||o(xa),(f||g)&&(c=a.clientX+b.x,d=a.clientY+b.y),a.pageOffset=b,a.points=[c,d],a.cursor=f||g,a}function H(a){var b=a-f(ha,e.ort),c=100*b/E();return e.dir?100-c:c}function I(a){var b=100,c=!1;return ia.forEach(function(d,e){if(!d.hasAttribute("disabled")){var f=Math.abs(qa[e]-a);b>f&&(c=e,b=f)}}),c}function J(a,b,c,d){var e=c.slice(),f=[!a,a],g=[a,!a];d=d.slice(),a&&d.reverse(),d.length>1?d.forEach(function(a,c){var d=S(e,a,e[a]+b,f[c],g[c],!1);d===!1?b=0:(b=d-e[a],e[a]=d)}):f=g=[!0];var h=!1;d.forEach(function(a,d){h=W(a,c[a]+b,f[d],g[d])||h}),h&&d.forEach(function(a){K("update",a),K("slide",a)})}function K(a,b,c){Object.keys(va).forEach(function(d){var f=d.split(".")[0];a===f&&va[d].forEach(function(a){a.call(ka,ua.map(e.format.to),b,ua.slice(),c||!1,qa.slice())})})}function L(a,b){"mouseout"===a.type&&"HTML"===a.target.nodeName&&null===a.relatedTarget&&N(a,b)}function M(a,b){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===a.buttons&&0!==b.buttonsProperty)return N(a,b);var c=(e.dir?-1:1)*(a.calcPoint-b.startCalcPoint),d=100*c/b.baseSize;J(c>0,d,b.locations,b.handleNumbers)}function N(a,b){sa&&(m(sa,e.cssClasses.active),sa=!1),a.cursor&&(za.style.cursor="",za.removeEventListener("selectstart",c)),wa.forEach(function(a){ya.removeEventListener(a[0],a[1])}),m(pa,e.cssClasses.drag),V(),b.handleNumbers.forEach(function(a){K("change",a),K("set",a),K("end",a)})}function O(a,b){if(1===b.handleNumbers.length){var d=ia[b.handleNumbers[0]];if(d.hasAttribute("disabled"))return!1;sa=d.children[0],l(sa,e.cssClasses.active)}a.stopPropagation();var f=F(ma.move,ya,M,{startCalcPoint:a.calcPoint,baseSize:E(),pageOffset:a.pageOffset,handleNumbers:b.handleNumbers,buttonsProperty:a.buttons,locations:qa.slice()}),g=F(ma.end,ya,N,{handleNumbers:b.handleNumbers}),h=F("mouseout",ya,L,{handleNumbers:b.handleNumbers});wa=f.concat(g,h),a.cursor&&(za.style.cursor=getComputedStyle(a.target).cursor,ia.length>1&&l(pa,e.cssClasses.drag),za.addEventListener("selectstart",c,!1)),b.handleNumbers.forEach(function(a){K("start",a)})}function P(a){a.stopPropagation();var b=H(a.calcPoint),c=I(b);return c===!1?!1:(e.events.snap||h(pa,e.cssClasses.tap,e.animationDuration),W(c,b,!0,!0),V(),K("slide",c,!0),K("update",c,!0),K("change",c,!0),K("set",c,!0),void(e.events.snap&&O(a,{handleNumbers:[c]})))}function Q(a){var b=H(a.calcPoint),c=ta.getStep(b),d=ta.fromStepping(c);Object.keys(va).forEach(function(a){"hover"===a.split(".")[0]&&va[a].forEach(function(a){a.call(ka,d)})})}function R(a){a.fixed||ia.forEach(function(a,b){F(ma.start,a.children[0],O,{handleNumbers:[b]})}),a.tap&&F(ma.start,ha,P,{}),a.hover&&F(ma.move,ha,Q,{hover:!0}),a.drag&&ja.forEach(function(b,c){if(b!==!1&&0!==c&&c!==ja.length-1){var d=ia[c-1],f=ia[c],g=[b];l(b,e.cssClasses.draggable),a.fixed&&(g.push(d.children[0]),g.push(f.children[0])),g.forEach(function(a){F(ma.start,a,O,{handles:[d,f],handleNumbers:[c-1,c]})})}})}function S(a,b,c,d,f,g){return ia.length>1&&(d&&b>0&&(c=Math.max(c,a[b-1]+e.margin)),f&&b<ia.length-1&&(c=Math.min(c,a[b+1]-e.margin))),ia.length>1&&e.limit&&(d&&b>0&&(c=Math.min(c,a[b-1]+e.limit)),f&&b<ia.length-1&&(c=Math.max(c,a[b+1]-e.limit))),e.padding&&(0===b&&(c=Math.max(c,e.padding)),b===ia.length-1&&(c=Math.min(c,100-e.padding))),c=ta.getStep(c),c=i(c),c!==a[b]||g?c:!1}function T(a){return a+"%"}function U(a,b){qa[a]=b,ua[a]=ta.fromStepping(b);var c=function(){ia[a].style[e.style]=T(b),Y(a),Y(a+1)};window.requestAnimationFrame&&e.useRequestAnimationFrame?window.requestAnimationFrame(c):c()}function V(){ra.forEach(function(a){var b=qa[a]>50?-1:1,c=3+(ia.length+b*a);ia[a].childNodes[0].style.zIndex=c})}function W(a,b,c,d){return b=S(qa,a,b,c,d,!1),b===!1?!1:(U(a,b),!0)}function Y(a){if(ja[a]){var b=0,c=100;0!==a&&(b=qa[a-1]),a!==ja.length-1&&(c=qa[a]),ja[a].style[e.style]=T(b),ja[a].style[e.styleOposite]=T(100-c)}}function Z(a,b){null!==a&&a!==!1&&("number"==typeof a&&(a=String(a)),a=e.format.from(a),a===!1||isNaN(a)||W(b,ta.toStepping(a),!1,!1))}function _(a,b){var c=j(a),d=void 0===qa[0];b=void 0===b?!0:!!b,c.forEach(Z),e.animate&&!d&&h(pa,e.cssClasses.tap,e.animationDuration),ra.forEach(function(a){W(a,qa[a],!0,!1)}),V(),ra.forEach(function(a){K("update",a),null!==c[a]&&b&&K("set",a)})}function aa(a){_(e.start,a)}function ba(){var a=ua.map(e.format.to);return 1===a.length?a[0]:a}function ca(){for(var a in e.cssClasses)e.cssClasses.hasOwnProperty(a)&&m(pa,e.cssClasses[a]);for(;pa.firstChild;)pa.removeChild(pa.firstChild);delete pa.noUiSlider}function da(){return qa.map(function(a,b){var c=ta.getNearbySteps(a),d=ua[b],e=c.thisStep.step,f=null;e!==!1&&d+e>c.stepAfter.startValue&&(e=c.stepAfter.startValue-d),f=d>c.thisStep.startValue?c.thisStep.step:c.stepBefore.step===!1?!1:d-c.stepBefore.highestStep,100===a?e=null:0===a&&(f=null);var g=ta.countStepDecimals();return null!==e&&e!==!1&&(e=Number(e.toFixed(g))),null!==f&&f!==!1&&(f=Number(f.toFixed(g))),[f,e]})}function ea(a,b){va[a]=va[a]||[],va[a].push(b),"update"===a.split(".")[0]&&ia.forEach(function(a,b){K("update",b)})}function fa(a){var b=a&&a.split(".")[0],c=b&&a.substring(b.length);Object.keys(va).forEach(function(a){var d=a.split(".")[0],e=a.substring(d.length);b&&b!==d||c&&c!==e||delete va[a]})}function ga(a,b){var c=ba(),d=["margin","limit","padding","range","animate","snap","step","format"];d.forEach(function(b){void 0!==a[b]&&(g[b]=a[b])});var f=X(g);d.forEach(function(b){void 0!==a[b]&&(e[b]=f[b])}),ta=f.spectrum,e.margin=f.margin,e.limit=f.limit,e.padding=f.padding,e.pips&&D(e.pips),qa=[],_(a.start||c,b)}var ha,ia,ja,ka,la,ma=p(),na=r(),oa=na&&q(),pa=a,qa=[],ra=[],sa=!1,ta=e.spectrum,ua=[],va={},wa=null,xa=a.ownerDocument,ya=xa.documentElement,za=xa.body;if(pa.noUiSlider)throw new Error("noUiSlider ("+$+"): Slider was already initialized.");return v(pa),u(e.connect,ha),ka={destroy:ca,steps:da,on:ea,off:fa,get:ba,set:_,reset:aa,__moveHandles:function(a,b,c){J(a,b,qa,c)},options:g,updateOptions:ga,target:pa,removePips:C,pips:D},R(e.events),_(e.start),e.pips&&D(e.pips),e.tooltips&&x(),y(),ka}function Z(a,b){if(!a||!a.nodeName)throw new Error("noUiSlider ("+$+"): create requires a single element, got: "+a);var c=X(b,a),d=Y(a,c,b);return a.noUiSlider=d,d}var $="10.0.0";C.prototype.getMargin=function(a){var b=this.xNumSteps[0];if(b&&a/b%1!==0)throw new Error("noUiSlider ("+$+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length?t(this.xVal,a):!1},C.prototype.toStepping=function(a){return a=x(this.xVal,this.xPct,a)},C.prototype.fromStepping=function(a){return y(this.xVal,this.xPct,a)},C.prototype.getStep=function(a){return a=z(this.xPct,this.xSteps,this.snap,a)},C.prototype.getNearbySteps=function(a){var b=w(a,this.xPct);return{stepBefore:{startValue:this.xVal[b-2],step:this.xNumSteps[b-2],highestStep:this.xHighestCompleteStep[b-2]},thisStep:{startValue:this.xVal[b-1],step:this.xNumSteps[b-1],highestStep:this.xHighestCompleteStep[b-1]},stepAfter:{startValue:this.xVal[b-0],step:this.xNumSteps[b-0],highestStep:this.xHighestCompleteStep[b-0]}}},C.prototype.countStepDecimals=function(){var a=this.xNumSteps.map(k);return Math.max.apply(null,a)},C.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var _={to:function(a){return void 0!==a&&a.toFixed(2)},from:Number};return{version:$,create:Z}});
/* perfect-scrollbar v0.8.1 */
!function t(e,n,r){function o(i,s){if(!n[i]){if(!e[i]){var a="function"==typeof require&&require;if(!s&&a)return a(i,!0);if(l)return l(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[i]={exports:{}};e[i][0].call(u.exports,function(t){var n=e[i][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[i].exports}for(var l="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(t,e,n){"use strict";var r=t("../main");"function"==typeof define&&define.amd?define(r):(window.PerfectScrollbar=r,"undefined"==typeof window.Ps&&(window.Ps=r))},{"../main":6}],2:[function(t,e,n){"use strict";function r(t,e){return window.getComputedStyle(t)[e]}function o(t,e,n){return"number"==typeof n&&(n=n.toString()+"px"),t.style[e]=n,t}function l(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}var i={};i.create=function(t,e){var n=document.createElement(t);return n.className=e,n},i.appendTo=function(t,e){return e.appendChild(t),t},i.css=function(t,e,n){return"object"==typeof e?l(t,e):"undefined"==typeof n?r(t,e):o(t,e,n)},i.matches=function(t,e){return"undefined"!=typeof t.matches?t.matches(e):t.msMatchesSelector(e)},i.remove=function(t){"undefined"!=typeof t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},i.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return i.matches(t,e)})},e.exports=i},{}],3:[function(t,e,n){"use strict";var r=function(t){this.element=t,this.events={}};r.prototype.bind=function(t,e){"undefined"==typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},r.prototype.unbind=function(t,e){var n="undefined"!=typeof e;this.events[t]=this.events[t].filter(function(r){return!(!n||r===e)||(this.element.removeEventListener(t,r,!1),!1)},this)},r.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var o=function(){this.eventElements=[]};o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return"undefined"==typeof e&&(e=new r(t),this.eventElements.push(e)),e},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=o},{}],4:[function(t,e,n){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],5:[function(t,e,n){"use strict";function r(t){var e,n=["ps--in-scrolling"];return e="undefined"==typeof t?["ps--x","ps--y"]:["ps--"+t],n.concat(e)}var o=t("./dom"),l=n.toInt=function(t){return parseInt(t,10)||0};n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=0;e<t.classList.length;e++){var n=t.classList[e];0===n.indexOf("ps-")&&t.classList.remove(n)}},n.outerWidth=function(t){return l(o.css(t,"width"))+l(o.css(t,"paddingLeft"))+l(o.css(t,"paddingRight"))+l(o.css(t,"borderLeftWidth"))+l(o.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){for(var n=r(e),o=0;o<n.length;o++)t.classList.add(n[o])},n.stopScrolling=function(t,e){for(var n=r(e),o=0;o<n.length;o++)t.classList.remove(n[o])},n.env={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof window&&null!==window.navigator.msMaxTouchPoints}},{"./dom":2}],6:[function(t,e,n){"use strict";var r=t("./plugin/destroy"),o=t("./plugin/initialize"),l=t("./plugin/update");e.exports={initialize:o,update:l,destroy:r}},{"./plugin/destroy":8,"./plugin/initialize":16,"./plugin/update":20}],7:[function(t,e,n){"use strict";e.exports=function(){return{handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}}},{}],8:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances");e.exports=function(t){var e=l.get(t);e&&(e.event.unbindAll(),o.remove(e.scrollbarX),o.remove(e.scrollbarY),o.remove(e.scrollbarXRail),o.remove(e.scrollbarYRail),r.removePsClasses(t),l.remove(t))}},{"../lib/dom":2,"../lib/helper":5,"./instances":17}],9:[function(t,e,n){"use strict";function r(t,e){function n(t){return t.getBoundingClientRect()}var r=function(t){t.stopPropagation()};e.event.bind(e.scrollbarY,"click",r),e.event.bind(e.scrollbarYRail,"click",function(r){var o=r.pageY-window.pageYOffset-n(e.scrollbarYRail).top,s=o>e.scrollbarYTop?1:-1;i(t,"top",t.scrollTop+s*e.containerHeight),l(t),r.stopPropagation()}),e.event.bind(e.scrollbarX,"click",r),e.event.bind(e.scrollbarXRail,"click",function(r){var o=r.pageX-window.pageXOffset-n(e.scrollbarXRail).left,s=o>e.scrollbarXLeft?1:-1;i(t,"left",t.scrollLeft+s*e.containerWidth),l(t),r.stopPropagation()})}var o=t("../instances"),l=t("../update-geometry"),i=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":17,"../update-geometry":18,"../update-scroll":19}],10:[function(t,e,n){"use strict";function r(t,e){function n(n){var o=r+n*e.railXRatio,i=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);o<0?e.scrollbarXLeft=0:o>i?e.scrollbarXLeft=i:e.scrollbarXLeft=o;var s=l.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",s)}var r=null,o=null,s=function(e){n(e.pageX-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarX,"mousedown",function(n){o=n.pageX,r=l.toInt(i.css(e.scrollbarX,"left"))*e.railXRatio,l.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}function o(t,e){function n(n){var o=r+n*e.railYRatio,i=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);o<0?e.scrollbarYTop=0:o>i?e.scrollbarYTop=i:e.scrollbarYTop=o;var s=l.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",s)}var r=null,o=null,s=function(e){n(e.pageY-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarY,"mousedown",function(n){o=n.pageY,r=l.toInt(i.css(e.scrollbarY,"top"))*e.railYRatio,l.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}var l=t("../../lib/helper"),i=t("../../lib/dom"),s=t("../instances"),a=t("../update-geometry"),c=t("../update-scroll");e.exports=function(t){var e=s.get(t);r(t,e),o(t,e)}},{"../../lib/dom":2,"../../lib/helper":5,"../instances":17,"../update-geometry":18,"../update-scroll":19}],11:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var l=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===l&&n<0||l>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}var r=!1;e.event.bind(t,"mouseenter",function(){r=!0}),e.event.bind(t,"mouseleave",function(){r=!1});var i=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!(c.isDefaultPrevented&&c.isDefaultPrevented()||c.defaultPrevented)){var u=l.matches(e.scrollbarX,":focus")||l.matches(e.scrollbarY,":focus");if(r||u){var d=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(d){if("IFRAME"===d.tagName)d=d.contentDocument.activeElement;else for(;d.shadowRoot;)d=d.shadowRoot.activeElement;if(o.isEditable(d))return}var p=0,f=0;switch(c.which){case 37:p=c.metaKey?-e.contentWidth:c.altKey?-e.containerWidth:-30;break;case 38:f=c.metaKey?e.contentHeight:c.altKey?e.containerHeight:30;break;case 39:p=c.metaKey?e.contentWidth:c.altKey?e.containerWidth:30;break;case 40:f=c.metaKey?-e.contentHeight:c.altKey?-e.containerHeight:-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}a(t,"top",t.scrollTop-f),a(t,"left",t.scrollLeft+p),s(t),i=n(p,f),i&&c.preventDefault()}}})}var o=t("../../lib/helper"),l=t("../../lib/dom"),i=t("../instances"),s=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/dom":2,"../../lib/helper":5,"../instances":17,"../update-geometry":18,"../update-scroll":19}],12:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var l=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===l&&n<0||l>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}function r(t){var e=t.deltaX,n=-1*t.deltaY;return"undefined"!=typeof e&&"undefined"!=typeof n||(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),t.shiftKey?[-n,-e]:[e,n]}function o(e,n){var r=t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(r){var o=window.getComputedStyle(r),l=[o.overflow,o.overflowX,o.overflowY].join("");if(!l.match(/(scroll|auto)/))return!1;var i=r.scrollHeight-r.clientHeight;if(i>0&&!(0===r.scrollTop&&n>0||r.scrollTop===i&&n<0))return!0;var s=r.scrollLeft-r.clientWidth;if(s>0&&!(0===r.scrollLeft&&e<0||r.scrollLeft===s&&e>0))return!0}return!1}function s(s){var c=r(s),u=c[0],d=c[1];o(u,d)||(a=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(d?i(t,"top",t.scrollTop-d*e.settings.wheelSpeed):i(t,"top",t.scrollTop+u*e.settings.wheelSpeed),a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?i(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):i(t,"left",t.scrollLeft-d*e.settings.wheelSpeed),a=!0):(i(t,"top",t.scrollTop-d*e.settings.wheelSpeed),i(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),l(t),a=a||n(u,d),a&&(s.stopPropagation(),s.preventDefault()))}var a=!1;"undefined"!=typeof window.onwheel?e.event.bind(t,"wheel",s):"undefined"!=typeof window.onmousewheel&&e.event.bind(t,"mousewheel",s)}var o=t("../instances"),l=t("../update-geometry"),i=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":17,"../update-geometry":18,"../update-scroll":19}],13:[function(t,e,n){"use strict";function r(t,e){e.event.bind(t,"scroll",function(){l(t)})}var o=t("../instances"),l=t("../update-geometry");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":17,"../update-geometry":18}],14:[function(t,e,n){"use strict";function r(t,e){function n(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function r(){c||(c=setInterval(function(){return l.get(t)?(s(t,"top",t.scrollTop+u.top),s(t,"left",t.scrollLeft+u.left),void i(t)):void clearInterval(c)},50))}function a(){c&&(clearInterval(c),c=null),o.stopScrolling(t)}var c=null,u={top:0,left:0},d=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(n())?d=!0:(d=!1,a())}),e.event.bind(window,"mouseup",function(){d&&(d=!1,a())}),e.event.bind(window,"keyup",function(){d&&(d=!1,a())}),e.event.bind(window,"mousemove",function(e){if(d){var n={x:e.pageX,y:e.pageY},l={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};n.x<l.left+3?(u.left=-5,o.startScrolling(t,"x")):n.x>l.right-3?(u.left=5,o.startScrolling(t,"x")):u.left=0,n.y<l.top+3?(l.top+3-n.y<5?u.top=-5:u.top=-20,o.startScrolling(t,"y")):n.y>l.bottom-3?(n.y-l.bottom+3<5?u.top=5:u.top=20,o.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?a():r()}})}var o=t("../../lib/helper"),l=t("../instances"),i=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=l.get(t);r(t,e)}},{"../../lib/helper":5,"../instances":17,"../update-geometry":18,"../update-scroll":19}],15:[function(t,e,n){"use strict";function r(t,e,n,r){function o(n,r){var o=t.scrollTop,l=t.scrollLeft,i=Math.abs(n),s=Math.abs(r);if(s>i){if(r<0&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return!e.settings.swipePropagation}else if(i>s&&(n<0&&l===e.contentWidth-e.containerWidth||n>0&&0===l))return!e.settings.swipePropagation;return!0}function a(e,n){s(t,"top",t.scrollTop-n),s(t,"left",t.scrollLeft-e),i(t)}function c(){y=!0}function u(){y=!1}function d(t){return t.targetTouches?t.targetTouches[0]:t}function p(t){return(!t.pointerType||"pen"!==t.pointerType||0!==t.buttons)&&(!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function f(t){if(p(t)){Y=!0;var e=d(t);g.pageX=e.pageX,g.pageY=e.pageY,v=(new Date).getTime(),null!==w&&clearInterval(w),t.stopPropagation()}}function h(t){if(!Y&&e.settings.swipePropagation&&f(t),!y&&Y&&p(t)){var n=d(t),r={pageX:n.pageX,pageY:n.pageY},l=r.pageX-g.pageX,i=r.pageY-g.pageY;a(l,i),g=r;var s=(new Date).getTime(),c=s-v;c>0&&(m.x=l/c,m.y=i/c,v=s),o(l,i)&&(t.stopPropagation(),t.preventDefault())}}function b(){!y&&Y&&(Y=!1,e.settings.swipeEasing&&(clearInterval(w),w=setInterval(function(){return l.get(t)&&(m.x||m.y)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(w):(a(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(w)},10)))}var g={},v=0,m={},w=null,y=!1,Y=!1;n?(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",b)):r&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",b)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",b)))}var o=t("../../lib/helper"),l=t("../instances"),i=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){if(o.env.supportsTouch||o.env.supportsIePointer){var e=l.get(t);r(t,e,o.env.supportsTouch,o.env.supportsIePointer)}}},{"../../lib/helper":5,"../instances":17,"../update-geometry":18,"../update-scroll":19}],16:[function(t,e,n){"use strict";var r=t("./instances"),o=t("./update-geometry"),l={"click-rail":t("./handler/click-rail"),"drag-scrollbar":t("./handler/drag-scrollbar"),keyboard:t("./handler/keyboard"),wheel:t("./handler/mouse-wheel"),touch:t("./handler/touch"),selection:t("./handler/selection")},i=t("./handler/native-scroll");e.exports=function(t,e){t.classList.add("ps");var n=r.add(t,"object"==typeof e?e:{});t.classList.add("ps--theme_"+n.settings.theme),n.settings.handlers.forEach(function(e){l[e](t)}),i(t),o(t)}},{"./handler/click-rail":9,"./handler/drag-scrollbar":10,"./handler/keyboard":11,"./handler/mouse-wheel":12,"./handler/native-scroll":13,"./handler/selection":14,"./handler/touch":15,"./instances":17,"./update-geometry":18}],17:[function(t,e,n){"use strict";function r(t,e){function n(){t.classList.add("ps--focus")}function r(){t.classList.remove("ps--focus")}var o=this;o.settings=a();for(var l in e)o.settings[l]=e[l];o.containerWidth=null,o.containerHeight=null,o.contentWidth=null,o.contentHeight=null,o.isRtl="rtl"===c.css(t,"direction"),o.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n}(),o.negativeScrollAdjustment=o.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.event=new u,o.ownerDocument=t.ownerDocument||document,o.scrollbarXRail=c.appendTo(c.create("div","ps__scrollbar-x-rail"),t),o.scrollbarX=c.appendTo(c.create("div","ps__scrollbar-x"),o.scrollbarXRail),o.scrollbarX.setAttribute("tabindex",0),o.event.bind(o.scrollbarX,"focus",n),o.event.bind(o.scrollbarX,"blur",r),o.scrollbarXActive=null,o.scrollbarXWidth=null,o.scrollbarXLeft=null,o.scrollbarXBottom=s.toInt(c.css(o.scrollbarXRail,"bottom")),o.isScrollbarXUsingBottom=o.scrollbarXBottom===o.scrollbarXBottom,o.scrollbarXTop=o.isScrollbarXUsingBottom?null:s.toInt(c.css(o.scrollbarXRail,"top")),o.railBorderXWidth=s.toInt(c.css(o.scrollbarXRail,"borderLeftWidth"))+s.toInt(c.css(o.scrollbarXRail,"borderRightWidth")),c.css(o.scrollbarXRail,"display","block"),o.railXMarginWidth=s.toInt(c.css(o.scrollbarXRail,"marginLeft"))+s.toInt(c.css(o.scrollbarXRail,"marginRight")),c.css(o.scrollbarXRail,"display",""),o.railXWidth=null,o.railXRatio=null,o.scrollbarYRail=c.appendTo(c.create("div","ps__scrollbar-y-rail"),t),o.scrollbarY=c.appendTo(c.create("div","ps__scrollbar-y"),o.scrollbarYRail),o.scrollbarY.setAttribute("tabindex",0),o.event.bind(o.scrollbarY,"focus",n),o.event.bind(o.scrollbarY,"blur",r),o.scrollbarYActive=null,o.scrollbarYHeight=null,o.scrollbarYTop=null,o.scrollbarYRight=s.toInt(c.css(o.scrollbarYRail,"right")),o.isScrollbarYUsingRight=o.scrollbarYRight===o.scrollbarYRight,o.scrollbarYLeft=o.isScrollbarYUsingRight?null:s.toInt(c.css(o.scrollbarYRail,"left")),o.scrollbarYOuterWidth=o.isRtl?s.outerWidth(o.scrollbarY):null,o.railBorderYWidth=s.toInt(c.css(o.scrollbarYRail,"borderTopWidth"))+s.toInt(c.css(o.scrollbarYRail,"borderBottomWidth")),c.css(o.scrollbarYRail,"display","block"),o.railYMarginHeight=s.toInt(c.css(o.scrollbarYRail,"marginTop"))+s.toInt(c.css(o.scrollbarYRail,"marginBottom")),c.css(o.scrollbarYRail,"display",""),o.railYHeight=null,o.railYRatio=null}function o(t){return t.getAttribute("data-ps-id")}function l(t,e){t.setAttribute("data-ps-id",e)}function i(t){t.removeAttribute("data-ps-id")}var s=t("../lib/helper"),a=t("./default-setting"),c=t("../lib/dom"),u=t("../lib/event-manager"),d=t("../lib/guid"),p={};n.add=function(t,e){var n=d();return l(t,n),p[n]=new r(t,e),p[n]},n.remove=function(t){delete p[o(t)],i(t)},n.get=function(t){return p[o(t)]}},{"../lib/dom":2,"../lib/event-manager":3,"../lib/guid":4,"../lib/helper":5,"./default-setting":7}],18:[function(t,e,n){"use strict";function r(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function o(t,e){var n={width:e.railXWidth};e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,i.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,i.css(e.scrollbarYRail,r),i.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),i.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var l=t("../lib/helper"),i=t("../lib/dom"),s=t("./instances"),a=t("./update-scroll");e.exports=function(t){var e=s.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var n;t.contains(e.scrollbarXRail)||(n=i.queryChildren(t,".ps__scrollbar-x-rail"),n.length>0&&n.forEach(function(t){i.remove(t)}),i.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(n=i.queryChildren(t,".ps__scrollbar-y-rail"),n.length>0&&n.forEach(function(t){i.remove(t)}),i.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=r(e,l.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=l.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=r(e,l.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=l.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),o(t,e),e.scrollbarXActive?t.classList.add("ps--active-x"):(t.classList.remove("ps--active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,a(t,"left",0)),e.scrollbarYActive?t.classList.add("ps--active-y"):(t.classList.remove("ps--active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,a(t,"top",0))}},{"../lib/dom":2,"../lib/helper":5,"./instances":17,"./update-scroll":19}],19:[function(t,e,n){"use strict";var r=t("./instances"),o=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e};e.exports=function(t,e,n){if("undefined"==typeof t)throw"You must provide an element to the update-scroll function";if("undefined"==typeof e)throw"You must provide an axis to the update-scroll function";if("undefined"==typeof n)throw"You must provide a value to the update-scroll function";"top"===e&&n<=0&&(t.scrollTop=n=0,t.dispatchEvent(o("ps-y-reach-start"))),"left"===e&&n<=0&&(t.scrollLeft=n=0,t.dispatchEvent(o("ps-x-reach-start")));var l=r.get(t);"top"===e&&n>=l.contentHeight-l.containerHeight&&(n=l.contentHeight-l.containerHeight,n-t.scrollTop<=2?n=t.scrollTop:t.scrollTop=n,t.dispatchEvent(o("ps-y-reach-end"))),"left"===e&&n>=l.contentWidth-l.containerWidth&&(n=l.contentWidth-l.containerWidth,n-t.scrollLeft<=2?n=t.scrollLeft:t.scrollLeft=n,t.dispatchEvent(o("ps-x-reach-end"))),void 0===l.lastTop&&(l.lastTop=t.scrollTop),void 0===l.lastLeft&&(l.lastLeft=t.scrollLeft),"top"===e&&n<l.lastTop&&t.dispatchEvent(o("ps-scroll-up")),"top"===e&&n>l.lastTop&&t.dispatchEvent(o("ps-scroll-down")),"left"===e&&n<l.lastLeft&&t.dispatchEvent(o("ps-scroll-left")),"left"===e&&n>l.lastLeft&&t.dispatchEvent(o("ps-scroll-right")),"top"===e&&n!==l.lastTop&&(t.scrollTop=l.lastTop=n,t.dispatchEvent(o("ps-scroll-y"))),"left"===e&&n!==l.lastLeft&&(t.scrollLeft=l.lastLeft=n,t.dispatchEvent(o("ps-scroll-x")))}},{"./instances":17}],20:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances"),i=t("./update-geometry"),s=t("./update-scroll");e.exports=function(t){var e=l.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.css(e.scrollbarXRail,"display","block"),o.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=r.toInt(o.css(e.scrollbarXRail,"marginLeft"))+r.toInt(o.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=r.toInt(o.css(e.scrollbarYRail,"marginTop"))+r.toInt(o.css(e.scrollbarYRail,"marginBottom")),o.css(e.scrollbarXRail,"display","none"),o.css(e.scrollbarYRail,"display","none"),i(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),o.css(e.scrollbarXRail,"display",""),o.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":2,"../lib/helper":5,"./instances":17,"./update-geometry":18,"./update-scroll":19}]},{},[1]);
//메인 기능
;(function($) {
	$(function() {
		//팝업 딤드 요소 삭제
		var rmBackOverlay = function() {
			if(document.querySelector('.back_overlay')) {
				document.querySelector('.back_overlay').remove();
			}
		};

		//팝업 딤드 요소 추가
		var addBackOverlay = function(el) {
			
			var layer = null;

			rmBackOverlay();
			layer = el.parentNode.insertBefore(document.createElement('div'), el);
			layer.setAttribute('class','back_overlay');
		};

		//팝업 토글
		var togglePopup = function(el) {
			
			var target = el.getAttribute('data-target') || '', dest = null;

			if( target && document.querySelector(target) ) {
				dest = document.querySelector(target);

				if( dest.className.indexOf('show_on_top') > -1 ) {
					dest.classList.remove('show_on_top');
					$(el).parents('.on').removeClass('on');
					rmBackOverlay();

					return false;
				} else {
					dest.classList.add('show_on_top');
					el.parentNode.classList.add('on');
					dest.focus();

					return true;
				}
			}
		};

		//팝업 버튼 이벤트
		var setPopupControl = function() {
			if( !document.querySelector('[data-type="open"]') && !document.querySelector('[data-type="close"]') &&
			!document.querySelector('.btn_set_startpage') ) {
				return false;
			}

			var current = null;

			//open 타입 버튼 이벤트
			$(document).on('click','[data-type="open"]',function(e) {
				e.preventDefault();

				if( current && current !== this ) {
					document.querySelector( current.getAttribute('data-target') ).classList.remove('show_on_top');
					$(current).parents('.on').removeClass('on');
					rmBackOverlay();
					current = null;
				}

				current = togglePopup(this) ? this : null;

				if( current && this === document.querySelector('.btn_set_startpage') ) {
					addBackOverlay(this);
				}
			});

			//close 타입 버튼 이벤트
			$(document).on('click','[data-type="close"]',function(e) {
				e.preventDefault();

				togglePopup(this);
				current = null;
			});
		};

		//요소 접기,펼치기
		var setSlideDownItem = function() {
			if( !document.querySelector('[data-type="expand"]') ) {
				return false;
			}

			$(document).on('click','[data-type="expand"]',function(e) {
				e.preventDefault();

				if(this.getAttribute('data-target') == null ) {
					return false;
				}

				var parent = this.parentNode;
				var target = this.getAttribute('data-target');

				if(parent.className.indexOf('expanded') > -1 ) {
					parent.classList.remove('expanded');
				} else {
					parent.classList.add('expanded');
					document.querySelector(target).focus();
				}
			});
		};

		//poi 아이템 이벤트
		var setPoiItem = function() {
			if( !document.getElementById('mapPoiItemSub') || !document.getElementById('mapPoiExtra') ) {
				return false;
			}

			var chkboxList = document.querySelectorAll('.btn_poi_item'),
					chkboxExtraList = document.querySelectorAll('.btn_poi_extra'),
					extraWrap = document.querySelector('.map_poi_extra'),
					btnPoiSafe = document.querySelector('.btn_poi_safe'),
					btnPoiExtraAll = document.querySelector('.btn_poi_extra_all'),
					btnPoiGps = document.querySelector('.btn_poi_gps'),
					btnGpsTopic = document.querySelector('.btn_poi_g_topic'),
					btnGpsSafe = document.querySelector('.btn_poi_g_safe'),
					current = {safe:0,extra:0,gps:0},//상위poi 활성화를 위한 갯수관리
					i=0, len = 0;

			var off = function(el) {
				el.classList.remove('on');
			};

			var on = function(el) {
				el.classList.add('on');
			};
			//안전시설 poi 선택시 상위poi 활성화
			for(i=0,len=chkboxList.length;i<len;i++) {
				if(chkboxList[i].className.indexOf('on') > -1) {
					current.safe++;
					on( btnPoiSafe );
				}

				chkboxList[i].addEventListener('click',function(e) {
					e.preventDefault();

					if(this.className.indexOf('on') > -1) {
						off(this);
						current.safe === 0 ? 0:current.safe--;
					} else{
						on(this);
						current.safe++;
					}
					current.safe> 0 ? on(btnPoiSafe) : off(btnPoiSafe);
				},false);
			}

			//대피시설 poi 선택시 상위poi 활성화
			for(i=0,len=chkboxExtraList.length;i<len;i++){
				if(chkboxExtraList[i].className.indexOf('on') > -1) {
					current.extra++;
					on(btnPoiExtraAll);
				}

				chkboxExtraList[i].addEventListener('click',function() {

					if(this.className.indexOf('on') > -1 ) {
						current.extra === 0 ? 0:current.extra--;
						off(this);
					} else{
						current.extra++;
						on(this);
					}

					current.extra > 0 ? on(btnPoiExtraAll) : off(btnPoiExtraAll);
				},false);
			}

			//위치기반 주제도, 안전시설 poi 클릭시 2depth poi 팝업 표시
			$([btnGpsTopic, btnGpsSafe]).on('click',function(e) {
				e.preventDefault();
				e.stopPropagation();

				var isSiblingOpen = $(this.parentNode).siblings('.on');

				if( isSiblingOpen.length ) {
					togglePopup( isSiblingOpen.find('[data-type="open"]')[0] );
				}

				togglePopup( this );
				
			});
				
			//위치기반검색 선택시 어린이 안전지도 꺼짐
			$(btnPoiGps).on('click', function(){
				if($('#childrenSafeMapListPopup').prop('class') == "flat_table children_safe show_on_top"){
					$('#childmapbtn').click();
					childClose();
				$('.map_poi_items_sub').parent().removeClass('on');
				$('.map_poi_items_sub').filter('.show_on_top').removeClass('show_on_top');
				}
			});

			//위치기반 poi 선택시 영역 리스트 팝업 표시 및 상위 poi 활성화
			$('.btn_poi_g_item').on('click',function(e) {
				e.preventDefault();

				var $repPoi = $(this).parents('.map_poi_gps_sub').prev(),
						$wrap = $(this).closest('.map_poi_gps_sub');

				var prevItem = $repPoi.parent().find('.btn_poi_g_item').filter('.on')[0],
						prevWrap = $(prevItem).closest('.map_poi_gps_sub');

				if( prevItem && prevItem !== this ) {
					off(prevItem);
					off( prevWrap.prev()[0] );
					prevWrap.find('.show_on_top').removeClass('show_on_top');
					current.gps === 0 ? 0:current.gps--;
				}

				if(this.className.indexOf('on') > -1) {
					off(this);
					off( $repPoi[0] );
					$wrap.find('.show_on_top').removeClass('show_on_top');
					current.gps === 0 ? 0:current.gps--;
				} else {
					on(this);
					on( $repPoi[0] );

					if(	this.className.indexOf('poi-23') > -1 ) {
						$('#view_layer_pop').addClass('show_on_top');
//						$wrap.find('#mysafe_list').addClass('show_on_top');
					} else if (	this.className.indexOf('poi-20') > -1 ){
						$wrap.find('.poi_gps_area').addClass('show_on_top');
					}

					current.gps++;
				}

				current.gps > 0 ? on(btnPoiGps) : off(btnPoiGps);
			});

			//대피시설 하위poi 선택 팝업 노출
			$('.btn_poi_extra_all').on('click',function(e) {
				e.preventDefault();
				$(extraWrap).toggleClass('show');
			})
			.on('mouseenter', function() {
				$(extraWrap).addClass('show');
			})
			.on('mouseleave',function() {
				$(extraWrap).removeClass('show');
			});

			//위치기반 서브 팝업 닫기 버튼 클릭시 위치기반 poi 활성화 해제
			$('.map_poi_gps_sub .btn_close').on('click',function() {
				$(this).closest('.show_on_top').removeClass('show_on_top');
				off( $('.btn_poi_g_item').filter('.on')[0] );
				off( $(this).parents('.map_poi_gps_sub').prev()[0] );
				current.gps = 0;
				off(btnPoiGps);
			});

			//안전시설 poi 선택시 위치기반 서브 팝업이 열려있으면 닫음
			$(btnPoiSafe).on('click',function() {
				
				if (document.querySelectorAll('#roadSearch2')[0].className.indexOf("on") > -1){
					$('#roadSearch2').click();
					if(smap.getLayersByName("polygonLayer2")[0]){
						smap.removeLayer(smap.getLayersByName("polygonLayer2")[0]);
						if(polygonControl["line"]){
							polygonControl["line"].deactivate();
						}
					}
				}
				if (document.querySelectorAll('#btn_point_arr1')[0].className.indexOf("on") > -1){
					$('#btn_point_arr1').click();
				}
				$('.map_poi_gps_sub').parent().removeClass('on');
				$('.map_poi_gps_sub').filter('.show_on_top').removeClass('show_on_top');
			});
		};


		//영역내 안전정보 리스트 선택 토글
		var selectPoiGpsArea = function() {
			if( !document.querySelector('.poi_gps_area') ) {
				return false;
			}

			var current = [];

			var lists = $('.poi_gps_area .flat_table_list');

			lists.each(function(idx) {
				var idx = idx;
				current[idx] = null;

				$(this).on('click','li',function(e) {
					e.preventDefault();

					if ($(this).className){
						$(this).classList.remove('on');
					} else {
						$(this).toggleClass('on');
					}

				});
			});
		};

		//내주변 안전시설 리스트 선택 토글
		var selectPoiAreaFc = function() {
			if( !document.querySelector('.poi_area_fc') ) {
				return false;
			}

			var current = null;

			$('.poi_area_fc').on('click','.flat_table_list li',function(e) {
				e.preventDefault();
				
				if (document.querySelectorAll('#btn_point_arr1')[0].className.indexOf("on") > -1){
					if(current && current !== this) {					
						current.classList.remove('on');
					} else {
						$(this).toggleClass('on');
					}
					$(this).addClass('on');
					current = this;
				} else {
					if(this.className.indexOf("on") > -1) {					
						this.classList.remove('on');
					} else {
						$(this).addClass('on');
					}
				}

			});
			
		};

		//카테고리탭 상단 초기화 버튼 이벤트
		var setBtnRefresh = function() {
			if( !document.querySelector('.btn_refresh') ) {
				return false;
			}
			var btnRefresh = document.querySelectorAll('.btn_refresh');

			$('.btn_refresh').on('click',function(e) {
				e.preventDefault();
				this.classList.add('active');
			});

			$('.btn_refresh').on('transitionend',function(e) {
			  this.classList.remove('active');
			});
		};

		//카테고리탭 상단 초기화 버튼 이벤트
		var childToCategory = function() {
			if( !document.querySelector('.btn_tab_col') ) {
				return false;
			}
			var btn_tab_col = document.querySelectorAll('.btn_tab_col');

			/*$('.btn_tab_col').on('click',function(e) {
				if($('#sc_map_panels').prop('class') == "sc_map_panels expanded"){
					
				}else 
					if($('#childrenSafeMapListPopup').prop('class') == 'flat_table children_safe show_on_top'){

					$('#closeBtn').click();
				}
			});*/
		};

		//카테고리 버튼 클릭시 상세 탭 표시
		var setCategoryPanel = function() {

			if( !document.querySelector('.btn_map_category') || !document.querySelector('.btn_tab_col') ) {
				return false;
			}

			var btn = document.querySelectorAll('.sc_map_category_panel .btn_map_category');
			var tabs = document.querySelectorAll('.sc_map_category_panel [class^=map_cate_tab_]');
			var curbtn = null;

			var showTab = function(el) {
				for(var i=0,len=btn.length; i<len; i++) {
					if(btn[i] === el) {
						tabs[i].classList.add('on');
					}
				}
			};

			var hideTab = function(el) {
				for(var i=0,len=btn.length; i<len; i++) {
					if(btn[i] === el) {
						tabs[i].classList.remove('on');
					}
				}
			};

			$('.sc_map_category_panel .btn_map_category').on('click',function(e) {
				
				e.preventDefault();
				$('#searchWord').empty();
				$('.search_pagenation').empty();
				$('#searchListResult').empty();
				$('#srch').val('');
				if (vectorLayer){
					vectorLayer.removeAllFeatures();
				}
				var num = 0;
			    var bodyClass = document.body.className;
		
			    if( bodyClass.indexOf('animate') > -1 && bodyClass.indexOf('animated') === -1 ) {
			    	return false;
			    }
		
			    if( curbtn ) {
			    	curbtn.classList.remove('on');
			    	hideTab(curbtn);
			    }
					
					var categoryOn = null;
					var categoryIdx = 0;
					for (var i=1;i<9;i++){
						if($('.map_category_list').children().eq(i).children().hasClass('on')){
							categoryOn = true;
							categoryIdx = i;
						}
					}
					
					if (categoryOn ){
						curbtn = btn[categoryIdx-1];
					} else {
						curbtn = this;
					}
					this.classList.add('on');
					
		
					showTab(this);					
					if(!$("#sc_map_panels").hasClass("expanded")){
						$(".btn_tab_col").trigger('click');
					}
			});
			tabs[0].classList.add('on');
			curbtn = btn[0];
			
		};

		//커스텀 라디오버튼 토글
		var setBtnRadioItem = function() {
			if(!document.querySelector('.btn_circle_selector')) {
				return false;
			}

			$(document).on('click','.btn_circle_selector',function(e) {
				e.preventDefault();

				var prevItem = $(this).closest('.outer').find('.on');

				if(prevItem.length && prevItem[0] !== this.parentNode) {
					prevItem.removeClass('on');
				}
				
				$(this.parentNode).toggleClass('on');
			});
		};

		/*
		* 커스텀 스크롤바 초기화
		* 참고: Perfect Scrollbar v0.8.1 (https://github.com/utatti/perfect-scrollbar/tree/0.8.1)
		*/
		var setCustomScroll = function() {
			if( !document.querySelector('.scroller') || !window.Ps ) {
				return false;
			}

			var scroller = document.querySelectorAll('.scroller');


			for( var i=0,len=scroller.length; i<len; i++ ) {
				Ps.initialize( scroller[i] );
			}

			//카테고리 패널 스크롤바 업데이트
			$('.sc_map_category_panel').on('mouseenter click','.scroller',function() {
				Ps.update( this );
			});
		};

		//사이트 진입시 카테고리탭 표시 애니메이션 처리
		var animatePanel = function() {
			var body = document.body;

			if (body.className.indexOf('animated') > -1 ) {
				return false;
			}
/*
			body.classList.add('animate');

			setTimeout(function() {
				body.classList.remove('animate');
				body.classList.add('animated');
			}, 1600);
*/			
		};

		//커스텀 selectbox 옵션 변경시 라벨텍스트 변경
		var chgSelectBox = function() {
			if( !document.getElementsByTagName('select') ) {
				return false;
			}

			var chgValue = function(el) {
				var text = '';
				var children = el.childNodes;

				for( var i=0, len=children.length; i<len; i++ ) {
					if( children[i].selected ) {
						text = children[i].textContent;
					}
				}

				$(el).siblings('.selectbox_label').text(text);
			}

			$('.selectbox_wrap select').on('change',function() {
				chgValue(this);
			});
		};

		//탭메뉴 표시 이벤트
		var setTabMenu = function() {
			var current = null, curTab = null;

			$('.flat_tab').on('click','li',function(e) {
				e.preventDefault();

				var parent = this.parentNode;
				var tabContent = $(parent).next().children();
				var idx = $(parent).children().index( this );

				if(current) {
					current.classList.remove('on');
					curTab.classList.remove('show');
				}

				this.classList.add('on');
				tabContent[idx].classList.add('show');
				current = this;
				curTab = tabContent[idx];
			});
		};

		//어린이 안전상세정보 팝업 토글
		var showChildrenFcDetail = function() {
			var detailPopup = document.querySelector('.children_fc_detail');
			var current = null;

			$('.children_fc').on('click','li',function(e) {
				e.preventDefault();

				if(current && current !== this) {
					current.classList.remove('on');
				}

				$(this).toggleClass('on');
				current = this;

				if( $(this).hasClass('on') ) {
					$('.children_fc_detail').addClass('show_on_top');
					$('.children_fc_detail .flat_tab').children().eq(0).trigger('click');
				} else {
					$('.children_fc_detail').removeClass('show_on_top');
				}
			});
		};

		//안전지수등급 목록 선택시 팝업 토글
		var selectRegionRateList = function() {
			if(!document.querySelector('.region_rate_list_wrap')) {
				return false;
			}

			var current = null;
			var indicator = document.querySelector('.sc_region_rate_indicator'),
					tableWrap = document.querySelector('.sc_region_rate_table_wrap');

			$('.region_rate_list li').on('click',function(e) {
				e.preventDefault();
			});

			$('.region_rate_inner > li').on('click', function(e) {

				e.preventDefault();

				if(current && current !== this ) {
					$(current).removeClass('on');
					$('.region_rate_list').children().filter('.on').removeClass('on');
				}
				
				$(this).toggleClass('on');
				$(this.parentNode).parent().toggleClass('on');

				if(this.className.indexOf('on') > -1) {
					$(tableWrap).addClass('show_on_top');
				} else { 
					$(tableWrap).removeClass('show_on_top');
				}

				current = this;
			});

		};

		//시계열 서비스 지도 가로너비 조절
		var chgTimeSeriesWidth = function() {
			if( !document.querySelector('.sc_map_division') ) {
				return false;
			}

			var map = document.querySelector('.sc_map_container');
			var transitionevent = 'transitionend webkitTransitionEnd oTransitionEnd';

			var chgWidth = function() {

				if( !$('.sc_map_panels').hasClass('expanded') ) {
					funBrowserCheck();
					if (browerType == 'MSIE'||browerType == 'Safari'){
						$(map).css('left', '382px' );
						smap.updateSize();
					} else {
						$('.tab_wrap').one(transitionevent,function() {
							$(map).css('left', $('.sc_map_panels').width() );
							smap.updateSize();
						});
					}
					
				} else {

					$(map).css('left','');
					smap.updateSize();
				}
				if (document.querySelectorAll('#roadSearch2')[0].className.indexOf("on") > -1){
					$('#roadSearch2').click();
					if(smap.getLayersByName("polygonLayer2")[0]){
						smap.removeLayer(smap.getLayersByName("polygonLayer2")[0]);
						polygonControl["line"].deactivate();
					}
					$('.btn_poi_gps').click();
				}
			};

			
			
			$('.btn_tab_col').on('click',chgWidth);
		};

		//시계열서비스 커스텀 selectbox 선택시 라벨텍스트 변경 및 리스트 닫힘
		var chgTimeSeriesSelectBox = function() {
			if( !document.querySelector('.time_series_asset') ) {
				return false;
			}

			$('.time_series_list').on('click','.btn_option',function(e) {
				e.preventDefault();

				var text = $(this).text(),
						$list = $(this).parents('.time_series_list'),
						$label = $(this).parents('.time_series_select_wrap').find('.btn_time_series_selectbox');

				$list.children().filter('.on').removeClass('on');

				$(this).parent().addClass('on');
				$label.text(text);
				$label.trigger('click');
			});
		}
		//화면분할 서비스 지도 가로너비 조절
		var chgDivisionWidth = function() {
			if( !document.querySelector('.sc_map_4division') ) {
				return false;
			}

			var map = document.querySelector('.sc_map_container');
			var transitionevent = 'transitionend webkitTransitionEnd oTransitionEnd';

			var chgWidth = function() {
				if( !$('.sc_map_panels').hasClass('expanded') ) {

					$('.tab_wrap').one(transitionevent,function() {
						$(map).css('left', $('.sc_map_panels').width() );
//						$(map).css('top', $('.sc_map_panels').height() );
						//smap.updateSize();
					});
				} else {

					$(map).css('left','');
//					$(map).css('heigth','');
					//smap.updateSize();
				}
			};

			$('.btn_tab_col').on('click',chgWidth);
		};
		//화면분할 서비스 지도 가로너비 조절
		var chgDivisionWidth = function() {
			if( !document.querySelector('.sc_map_4division') ) {
				return false;
			}

			var map = document.querySelector('.sc_map_container');
			var transitionevent = 'transitionend webkitTransitionEnd oTransitionEnd';

			var chgHieght = function() {
				if( !$('.sc_map_panels').hasClass('expanded') ) {

					$('.tab_wrap').one(transitionevent,function() {
//						$(map).css('left', $('.sc_map_panels').width() );
						$(map).css('top', $('.sc_map_assets').height() );
						//smap.updateSize();
					});
				} else {

//					$(map).css('left','');
					$(map).css('heigth','');
					//smap.updateSize();
				}
			};

			$('.btn_tab_col').on('click',chgHieght);
		};
		//쿠키 가져오기
		var getCookie = function(name) {
		    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		    return v ? v[2] : null;
		};

		//쿠키 생성
		var setCookie = function(name, value, days) {
		    var d = new Date;
		    d.setTime(d.getTime() + 24*60*60*1000*days);
		    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
		};

		//어린이 안전지도 버튼 클릭시 상세 리스트 팝업 표시
		var setChildrenSafeMap = function() {
			if( !document.querySelector('.btn_children_safemap') || !document.querySelector('#childrenSafeMapListPopup') ) {
				return false;
			}

			var current = null;
			
			$('.children_safe_list').on('click','li',function(e) {
				e.preventDefault();

				if($(this).children().children().prop('class') == "input_check on"){
					$(this).addClass('on');
				}else{
					this.classList.remove('on');
				}

			});

			$('#childrenSafeIntro .btn_close').on('click',function() {
				var checkbox = document.querySelector('#childrenSafeIntro input[type="checkbox"]');

				if( checkbox.checked ) {
					setCookie('scChildrenSafemapIntro',true,1);
				}
			});

			$('.btn_children_safemap').on('click',function(e) {
				e.preventDefault();

				if(this.parentNode.className.indexOf('on') > -1) {
					return false;
				}

				if( !getCookie('scChildrenSafemapIntro') ) {
					//document.querySelector('#childrenSafeIntro').classList.add('show_on_top');
				}
				this.parentNode.classList.add('on');
				document.querySelector('#childrenSafeMapListPopup').classList.add('show_on_top');
			});

			$('.children_safe .btn_close').on('click',function() {
				if( $('.btn_children_safemap').parent().hasClass('on') ) {
					$('.btn_children_safemap').parent().removeClass('on');
				}
			});
			$('#pageSelect').on('click',function(e) {
	
				var intro = $('#startpageIntro').prop('checked');
				var map = $('#startpageMap').prop('checked');
				setCookie('startpageIntro',intro,1);
				setCookie('startpageMap',map,1);
			});
		};
		
		//위치기반검색 안내팝업
		var setIntSearch = function() {
			/*if( !document.querySelector('.map_poi_gps_sub')) {
				return false;
			}*/

			$('#intSearchIntro1 .btn_close').on('click',function() {
				var checkbox = document.querySelector('#intSearchIntro1 input[type="checkbox"]');
				
				if( checkbox.checked ) {
					setCookie('scIntSearchIntro1', true, 1);
				}
			});

			$('.viewSearch').on('click',function(e) {
				e.preventDefault();

				if( !getCookie('scIntSearchIntro1') ) {
					document.querySelector('#intSearchIntro1').classList.add('show_on_top');
				}
				this.parentNode.classList.add('on');
			});
			
			$('#intSearchIntro2 .btn_close').on('click',function() {
				var checkbox = document.querySelector('#intSearchIntro2 input[type="checkbox"]');
				
				if( checkbox.checked ) {
					setCookie('scIntSearchIntro2', true, 1);
				}
			});

			$('.viewSearch').on('click',function(e) {
				e.preventDefault();

				if( !getCookie('scIntSearchIntro2') ) {
					document.querySelector('#intSearchIntro2').classList.add('show_on_top');
				}
				this.parentNode.classList.add('on');
			});
			
			$('#intSearchIntro3 .btn_close').on('click',function() {
				var checkbox = document.querySelector('#intSearchIntro3 input[type="checkbox"]');
				
				if( checkbox.checked ) {
					setCookie('scIntSearchIntro3', true, 1);
				}
			});

			$('.viewSearch').on('click',function(e) {
				e.preventDefault();

				if( !getCookie('scIntSearchIntro3') ) {
					document.querySelector('#intSearchIntro3').classList.add('show_on_top');
				}
				this.parentNode.classList.add('on');
			});
			$('#intSearchIntro4 .btn_close').on('click',function() {
				var checkbox = document.querySelector('#intSearchIntro4 input[type="checkbox"]');
				
				if( checkbox.checked ) {
					setCookie('scIntSearchIntro4', true, 1);
				}
			});

			$('.viewSearch').on('click',function(e) {
				e.preventDefault();

				if( !getCookie('scIntSearchIntro4') ) {
					document.querySelector('#intSearchIntro4').classList.add('show_on_top');
				}
				this.parentNode.classList.add('on');
			});

			$('#pageSelect').on('click',function(e) {
	
				var intro = $('#startpageIntro').prop('checked');
				var map = $('#startpageMap').prop('checked');
				setCookie('startpageIntro',intro,1);
				setCookie('startpageMap',map,1);
			});
		};

		//지역선택 팝업 리스트 선택시 활성화
		var selectLocationTable = function() {
			if( !document.querySelector('.sc_location_table') ) {
				return false;
			}

			var current = [];

			var lists = document.querySelectorAll('.sc_location_table .flat_table_list');

			$(lists).each(function(idx) {
				var idx = idx;
				current[idx] = null;

				$(this).on('click','li',function(e) {
					e.preventDefault();

					if( current[idx] && current[idx].classList ) {
						current[idx].classList.remove('on');
					}

					this.classList.add('on');
					current[idx] = this;
				});

			});
			
			$('.flat_table_header .btn_close').on('click',function() {
				$('.current_location').get()[0].classList.remove('on');
				$('.select_location_table_wrap').get()[0].classList.remove('show_on_top');
				
			});
		};

		//2d, 3d 버튼 클릭시 설정 팝업 target 정보 변경
		var chk2d3dMapSetting = function() {
			if( !document.querySelector('.map_mode_wrap input') ) {
				return false;
			}

			$('.map_mode_wrap input[type="radio"]').on('change',function() {
				var is3dMap = $('.map_mode_wrap input[type="radio"]')[3].checked;
				var btnMapSetting = document.querySelector('.btn_map_setting');				
				//지도설정 창이 열려있으면 닫음
				if( btnMapSetting.parentNode.className.indexOf('on') > -1 ) {
					togglePopup(btnMapSetting);
				}

				if( is3dMap ) {
					btnMapSetting.setAttribute('data-target','#sc3dMapSetting');
				} else {
					btnMapSetting.setAttribute('data-target','#sc2dMapSetting');
				}
			});
		};

		//2d 지도설정 팝업에서 투명도 슬라이드바 활성화 비활성화
		var enableMapSlider = function() {
			if( !document.querySelector('.map_2d_slider') ) {
				return false;
			}

			$('#sc2dMapSetting input[type=checkbox]').on('change',function() {
				if( this.checked ) {
					$(this.parentNode).next().find('.map_2d_slider')[0].removeAttribute('disabled');
				} else {
					$(this.parentNode).next().find('.map_2d_slider')[0].setAttribute('disabled',true);
				}
			});
		};


		/* 카테고리탭 열기 버튼 중앙배치 */
		var moveoToCenterBtn = function() {
			if( !document.querySelector('.btn_tab_col') ) {
				return false;
			}

			var moveCenterBtn = function() {
				var height = $(window).height() - $('.sc_header').height() - $('.sc_map_assets').height();
				var posY = (height/2);
				$('.btn_tab_col').css({'top':posY},100);
				$('.btn_tab_exp').css({'top':posY},100);
			}
			$(window).on('resize',moveCenterBtn);
			moveCenterBtn();
		};

		/* 범례팝업 표시 */
		var showLegend = function() {
			if( !document.querySelector('.sc_map_legend') ) {
				return false;
			}

			$('.map_legend_list').children().on('click',function(e) {
				e.preventDefault();

				var idx = 0;
				idx = $(this.parentNode).children().index(this);
				if (idx !=10){
					$(this).addClass('active').siblings().removeClass('active').blur();
					$('.map_legend_panel').children().eq(idx).addClass('active').siblings().removeClass('active');
				}
				
			});

//			$('.map_legend_list').children().eq(4).on('click',function() {
//				if( $(this).hasClass('active') ) {
//					$('#toxicChemicalCard').addClass('show_on_top');
//				}
//			});

			$('.btn_legend_close').on('click',function(e) {
//				e.preventDefault();

//				$('.map_legend_list').children().removeClass('active');
//				$('.map_legend_panel').children().removeClass('active');
			});
			
			/* 20171220 추가 */
			$('.btn_view_legend').on('click', function(e) {
				$('.map_legend_wrap').addClass('show_on_top');
				$(this).parent().addClass('on');
			});
			/* //20171220 추가 */
		};

		var hideCardPopup = function() {
			$(document).on('click',function(e) {

				var popup = $('.card_popup').filter('.show_on_top');

				if( e.target.className.indexOf('card_popup') > -1 && !$(e.target).closest('.card_popup_container').length ) {
					popup.removeClass('show_on_top');
				}
			});
		};

		//검색결과 선택시 on 클래스 추가
		var selectSearchResult = function() {
			if( !document.querySelector('.map_cate_tab_search') ) {
				return false;
			}

			$(document).on('click','.search_place', function(e) {
				e.preventDefault();
				$('.search_list').find('.search_place').filter('.on').removeClass('on');
				$(this).addClass('on');
			});
		};

		//카테고리 탭 inner tab
		var showDetailTabContent = function() {
			if( !document.querySelector('.btn_show_tab') ) {
				return false;
			}
			$('.detail_tab').on('click','li',function(e) {
				e.preventDefault();
				
				var idx = $(this.parentNode).children().index(this);
						contentTab = $(this.parentNode).next('.detail_tab_content').children().eq(idx),
				
				$(this).siblings().removeClass('on');
				$(this).addClass('on');
				contentTab.siblings().removeClass('on');
				contentTab.addClass('on');
			});
		};
		
		//기간분석 슬라이더 재생,멈춤
		var setTimeStampSlider = function() {
			if( !document.querySelector('#scTimeStampSlider') ) {
				return false;
			}

			var cnt = 1, interval = null, timer = 3000, limit = 12,
					timeStampSlider = document.getElementById('scTimeStampSlider'),
					timestampLabel = document.querySelector('.timestamp_slider_wrap > p');
					defaultLabel = timestampLabel.textContent,
					selectYear = document.querySelector('.timestamp_year select');

			if( window.noUiSlider ) {
				noUiSlider.create(timeStampSlider, {
					start: [ 1 ],
					connect: [true, false],
					range: {
						'min': [  1 ],
						'max': [ 12 ]
					},
					step: 1,
					format: {
						to: function(value) {
							var year = selectYear.value, month = parseInt(value);
							var txt = year + '년 ' + month + '월';
							return txt;
						},
						from: function(value) {
							return value;
						}
					}
				});

				timeStampSlider.setAttribute('disabled','true');
				timeStampSlider.noUiSlider.on('set', function( values, handle ) {
					timestampLabel.innerHTML = values[handle];
				});
			}

			var	move = function() {
				if( cnt > limit ) {
					stop();
				}

				timeStampSlider.noUiSlider.set( cnt );
				cnt++;
			};

			var start = function() {
				cnt = 1;
				move();
				interval = setInterval(move, timer);
			};

			var stop = function() {
				$('.btn_start_timestamp').removeClass('active');
				cnt = 1;
				timeStampSlider.noUiSlider.set( cnt );
				clearInterval(interval);
				timestampLabel.innerHTML = defaultLabel;
			};

			$('.btn_start_timestamp').on('click',function() {
				if(this.className.indexOf('active') > -1) {
					return false;
				}
				$(this).addClass('active');
				start();
			});

			$('.btn_stop_timestamp').on('click',function() {
				stop();
			});
		};
		
		/* 20171220 추가 */
		/* 범례 팝업 표시 */
		/* 팝업 드래그 기능 설정 */
		var setDraggablePanel = function () {
			if(!document.querySelector('.sc_map_service')) {
				return false;
			}

			var $container = $('.sc_map_container'),//드래그 가능 영역
					movable = function (elName, cancelElName) {//드래그 설정 함수
						var $target = $(elName),
								curX = 0, curY = 0,//최근 위치
								startX = 0, startY =0,//시작위치
								deltaX = 0, deltaY =0,//이동 수치
								posX = 0, posY = 0,//결과 위치
								minX = 0, minY = 0,
								maxX = 0, maxY = 0;

						$target.on('mousedown', function (e) {
							if(cancelElName && $(e.target).closest(cancelElName).length) {
								return true;
							} else {
								e.preventDefault();
							}

							var conX = $container.offset().left, conY = $container.offset().top,
									parentX = $target.parent().offset().left, parentY = $target.parent().offset().top;

							minX = conX - parentX;
							minY = conY - parentY;
							maxX = (conX + $container.outerWidth()) - (parentX + $target.outerWidth());
							maxY = (conY + $container.outerHeight()) - (parentY + $target.outerHeight());

							startX = e.clientX;
							startY = e.clientY;
							curX = $(this).offset().left;
							curY = $(this).offset().top;

							$('body').addClass('popup_dragging');//이동중 마우스 모양 및 영역드래그 방지
							$target.addClass('popup_dragging');//이동중 마우스 모양 및 영역드래그 방지

							$(document).on('mousemove', function (e) {
								deltaX = e.clientX - startX;
								deltaY = e.clientY - startY;

								posX = (curX + deltaX) - parentX;
								posY = (curY + deltaY) - parentY;

								if(posX < minX) {
									posX = minX;
								} else if (posX > maxX) {	
									posX = maxX;
								}

								if(posY < minY) {
									posY = minY
								} else if(posY > maxY) {
									posY = maxY;
								}

								$target.css({top: posY, left: posX, bottom: 'auto', right: 'auto'});
							});

							$(document).on('mouseup', function (e) {
								$(document).off('mousemove');
								$('body').removeClass('popup_dragging');
								$target.removeClass('popup_dragging');
							});
						});
					},
					resetMovePos = function (elName) {
						$(elName).css({top: '', left: '', bottom: '', right: ''});
					};

			movable('.map_legend_wrap', '.map_legend_header');
			movable('.sc_region_rate_indicator');
			movable('.sc_region_rate_table_wrap', '.flat_table_header');
			
			$('.btn_legend_close').on('click', function () {
				resetMovePos('.map_legend_wrap');
			});
			$('.region_rate_inner').on('click', 'li', function () {
				resetMovePos('.sc_region_rate_indicator');
				resetMovePos('.sc_region_rate_table_wrap');
			})
		};
		/* //20171220 추가 */
		
		var init = (function() {
			animatePanel();
			setCustomScroll();
			chgSelectBox();
			setBtnRadioItem();
			setPopupControl();
			setSlideDownItem();
			setPoiItem();
			//showMapPoiInfo();
			selectPoiGpsArea();
			selectPoiAreaFc();
			setCategoryPanel();
			setTabMenu();
			showChildrenFcDetail();
			selectRegionRateList();
			chgTimeSeriesWidth();
			chgTimeSeriesSelectBox();
			chgDivisionWidth();
			setChildrenSafeMap();
			selectLocationTable();
			setBtnRefresh();
			chk2d3dMapSetting();
			enableMapSlider();
			moveoToCenterBtn();
			showLegend();
//			hideCardPopup();
			selectSearchResult();
//			childToCategory();
			showDetailTabContent();
//			setTimeStampSlider();
			setIntSearch();
			setDraggablePanel(); 
		})();
	});
})(jQuery);


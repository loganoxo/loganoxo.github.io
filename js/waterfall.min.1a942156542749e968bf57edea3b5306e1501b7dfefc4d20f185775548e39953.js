/*!
   --------------------------------
   Waterfall.js
   --------------------------------
   + https://github.com/raphamorim/waterfall
   + version 1.1.0
   + Copyright 2016 Raphael Amorim & Israel Teixeira
   + Licensed under the MIT license
   + Documentation: https://github.com/raphamorim/waterfall
*/(function(e,t){typeof define=="function"&&define.amd?define("waterfall",function(){return t}):typeof module=="object"&&module.exports?module.exports=t:e.waterfall=t})(this,function(t){typeof t=="string"&&(t=document.querySelector(t));function c(e){return window.getComputedStyle(e)}function o(e,t){return parseFloat(c(t)["margin"+e])||0}function l(e){return parseFloat(e)+"px"}function w(e){return parseFloat(e.style.top)}function a(e){return parseFloat(e.style.left)}function d(e){return parseFloat(c(e).width)}function _(e){return parseFloat(c(e).height)}function r(e){return w(e)+_(e)+o("Bottom",e)}function f(e){return a(e)+d(e)+o("Right",e)}function m(e){e=e.sort(function(e,t){var n=r(t)-r(e);return n||a(t)-a(e)})}function p(e){var t=e;m(t),this.add=function(e){t.push(e),m(t),t.pop()},this.min=function(){return t[t.length-1]},this.max=function(){return t[0]}}function u(e,t,n){e.style.position="absolute",e.style.top=l(t),e.style.left=l(n)}function y(e){u(e,0,o("Left",e))}function j(e,t){u(t,e.style.top,f(e)+o("Left",t))}function g(e,t){u(t,r(e)+o("Top",t),a(e))}function v(e,t){e.style.position="relative",e.style.height=l(r(t)+o("Bottom",t))}function b(e,n){return f(e[n-1])+d(e[n])<=d(t)}var n,i,h,s=t.children;s.length&&y(s[0]);for(n=1;n<s.length&&b(s,n);n++)j(s[n-1],s[n]);for(h=[].slice.call(s,0,n),i=new p(h);n<s.length;n++)g(i.min(),s[n]),i.add(s[n]);v(t,i.max())})
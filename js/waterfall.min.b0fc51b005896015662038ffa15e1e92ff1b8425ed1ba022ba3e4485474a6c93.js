/*!
   --------------------------------
   Waterfall.js
   --------------------------------
   + https://github.com/raphamorim/waterfall
   + version 1.0.2
   + Copyright 2015 Raphael Amorim
   + Licensed under the MIT license
   + Documentation: https://github.com/raphamorim/waterfall
*/function waterfall(e){typeof e=="string"&&(e=document.querySelector(e)),t=[].map.call(e.children,function(e){return e.style.position="absolute",e}),e.style.position="relative";function i(e,t){var n=window.getComputedStyle(t);return parseFloat(n["margin"+e])||0}function r(e){return e+"px"}function b(e){return parseFloat(e.style.top)}function l(e){return parseFloat(e.style.left)}function c(e){return e.clientWidth}function v(e){return e.clientHeight}function a(e){return b(e)+v(e)+i("Bottom",e)}function f(e){return l(e)+c(e)+i("Right",e)}function m(e){e=e.sort(function(e,t){return a(e)===a(t)?l(t)-l(e):a(t)-a(e)})}s=[],t.length&&(t[0].style.top="0px",t[0].style.left=r(i("Left",t[0])),s.push(t[0]));for(o=1;o<t.length;o++){var t,s,o,u,h,p,d=t[o-1],n=t[o],j=f(d)+c(n)<=c(e);if(!j)break;n.style.top=d.style.top,n.style.left=r(f(d)+i("Left",n)),s.push(n)}for(;o<t.length;o++)m(s),n=t[o],u=s.pop(),n.style.top=r(a(u)+i("Top",n)),n.style.left=r(l(u)),s.push(n);m(s),h=s[0],e.style.height=r(a(h)+i("Bottom",h)),p=c(e);function g(t){c(e)!=p&&(t.target.removeEventListener(t.type,arguments.callee),waterfall(e))}window.addEventListener?window.addEventListener("resize",g):document.body.onresize=g}
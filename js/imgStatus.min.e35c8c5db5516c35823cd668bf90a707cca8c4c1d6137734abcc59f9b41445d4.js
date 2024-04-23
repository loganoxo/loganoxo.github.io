/*!
   --------------------------------
   imgStatus.js
   --------------------------------
   + https://github.com/raphamorim/imgstatus
   + version 0.1.2
   + Copyright 2015 Raphael Amorim
   + Licensed under the MIT license
   + Documentation: https://github.com/raphamorim/imgstatus
*/class ImgStatus{constructor(){this.loaded=0,this.failed=0,this.total=0}watch(e,t){var n,s,i,a,o=document.querySelectorAll(e);if(!o.length)return console.log("[imgStatus]: There aren't any images associated with this selector ("+e+")!");this.total=o.length;for(i=this.setLoaded.bind(this,t),a=this.setFailed.bind(this,t),s=0;s<this.total;s++)n=o[s],this.isCached(n.src)?this.setLoaded(t):typeof window.addEventListener=="function"?(n.addEventListener("load",i),n.addEventListener("error",a)):n.attachEvent&&(n.attachEvent("onload",i),n.attachEvent("onerror",a))}isCached(e){var t=new Image;return t.src=e,t.complete}setFailed(e){++this.failed,typeof e=="function"&&e(this)}setLoaded(e){++this.loaded,typeof e=="function"&&e(this)}isDone(){return this.loaded+this.failed===this.total}}
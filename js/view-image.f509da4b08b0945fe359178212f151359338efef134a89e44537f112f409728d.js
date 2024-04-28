(()=>{window.ViewImage=new function(){this.target="[view-image] img",this.listener=e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;let o=String(this.target.split(",").map(n=>`${n.trim()}:not([no-view])`)),i=e.target.closest(o);if(!i)return;let l=[...(i.closest("[view-image]")||document.body).querySelectorAll(o)].map(n=>n.href||n.src);this.display(l,i.href||i.src),e.stopPropagation(),e.preventDefault()},this.init=e=>{e&&(this.target=e),["removeEventListener","addEventListener"].forEach(o=>{document[o]("click",this.listener,!1)})},this.display=(e,o)=>{let i=e.indexOf(o),t=new DOMParser().parseFromString(`
                <div class="view-image">
                    <style>.view-image{position:fixed;inset:0;z-index:500;padding:1rem;display:flex;flex-direction:column;animation:view-image-in 300ms;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}.view-image__out{animation:view-image-out 300ms}@keyframes view-image-in{0%{opacity:0}}@keyframes view-image-out{100%{opacity:0}}.view-image-btn{width:32px;height:32px;display:flex;justify-content:center;align-items:center;cursor:pointer;border-radius:3px;background-color:rgba(255,255,255,0.2)}.view-image-btn:hover{background-color:rgba(255,255,255,0.5)}.view-image-close__full{position:absolute;inset:0;background-color:rgba(48,55,66,0.3);z-index:unset;cursor:zoom-out;margin:0}.view-image-container{height:0;flex:1;display:flex;align-items:center;justify-content:center;}.view-image-lead{display:contents}.view-image-lead img{position:relative;z-index:1;max-width:100%;max-height:100%;object-fit:contain;border-radius:3px}.view-image-lead__in img{animation:view-image-lead-in 300ms}.view-image-lead__out img{animation:view-image-lead-out 300ms forwards}@keyframes view-image-lead-in{0%{opacity:0;transform:translateY(-20px)}}@keyframes view-image-lead-out{100%{opacity:0;transform:translateY(20px)}}[class*=__out] ~ .view-image-loading{display:block}.view-image-loading{position:absolute;inset:50%;width:8rem;height:2rem;color:#aab2bd;overflow:hidden;text-align:center;margin:-1rem -4rem;z-index:1;display:none}.view-image-loading::after{content:"";position:absolute;inset:50% 0;width:100%;height:3px;background:rgba(255,255,255,0.5);transform:translateX(-100%) translateY(-50%);animation:view-image-loading 800ms -100ms ease-in-out infinite}@keyframes view-image-loading{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.view-image-tools{position:relative;display:flex;justify-content:space-between;align-content:center;color:#fff;max-width:600px;position: absolute; bottom: 5%; left: 1rem; right: 1rem; backdrop-filter: blur(10px);margin:0 auto;padding:10px;border-radius:5px;background:rgba(0,0,0,0.1);margin-bottom:constant(safe-area-inset-bottom);margin-bottom:env(safe-area-inset-bottom);z-index:1}.view-image-tools__count{width:60px;display:flex;align-items:center;justify-content:center}.view-image-tools__flip{display:flex;gap:10px}.view-image-tools [class*=-close]{margin:0 10px}</style>
                    <div class="view-image-container">
                        <div class="view-image-lead"></div>
                        <div class="view-image-loading"></div>
                        <div class="view-image-close view-image-close__full"></div>
                    </div>
                    <div class="view-image-tools">
                        <div class="view-image-tools__count">
                            <span><b class="view-image-index">${i+1}</b>/${e.length}</span>
                        </div>
                        <div class="view-image-tools__flip">
                            <div class="view-image-btn view-image-tools__flip-prev">
                                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M31 36L19 24L31 12" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </div>
                            <div class="view-image-btn view-image-tools__flip-next">
                                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M19 12L31 24L19 36" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </div>
                        </div>
                        <div class="view-image-btn view-image-close">
                            <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M8 8L40 40" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 40L40 8" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                    </div>
                </div>
            `,"text/html").body.firstChild,l=function(a){let s={Escape:"close",ArrowLeft:"tools__flip-prev",ArrowRight:"tools__flip-next"};s[a.key]&&t.querySelector(`.view-image-${s[a.key]}`).click()},n=a=>{let s=new Image,r=t.querySelector(".view-image-lead");r.className="view-image-lead view-image-lead__out",setTimeout(()=>{r.innerHTML="",s.onload=function(){setTimeout(()=>{r.innerHTML=`<img src="${s.src}" alt="ViewImage" no-view/>`,r.className="view-image-lead view-image-lead__in"},100)},s.src=a},300)};document.body.appendChild(t),n(o),window.addEventListener("keydown",l),t.onclick=a=>{a.target.closest(".view-image-close")?(window.removeEventListener("keydown",l),t.onclick=null,t.classList.add("view-image__out"),setTimeout(()=>t.remove(),290)):a.target.closest(".view-image-tools__flip")&&(a.target.closest(".view-image-tools__flip-prev")?i=i===0?e.length-1:i-1:i=i===e.length-1?0:i+1,n(e[i]),t.querySelector(".view-image-index").innerHTML=i+1)}}};})();
/**
 * ViewImage gzip compressed to just 2K, small and superb native Native JavaScript lightbox plugin
 *
 * @name ViewImage.js
 * @version 2.0.2
 * @author Tokinx
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * https://tokinx.github.io/ViewImage/
 *
 * Copyright (c) 2017, biji.io
 */

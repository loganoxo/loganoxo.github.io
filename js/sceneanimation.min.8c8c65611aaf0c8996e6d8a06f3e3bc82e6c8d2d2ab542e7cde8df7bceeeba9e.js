(()=>{!function(){function u(e,t,n){return Number(e.getAttribute(t))||n}d=document.getElementsByTagName("script"),a=d[d.length-1],config={z:u(a,"zIndex",-101),a:u(a,"alpha",.6),s:u(a,"size",90)};var t,i,a,d,o=document.createElement("canvas"),e=o.getContext("2d"),r=window.devicePixelRatio||1,h=window.innerWidth,s=window.innerHeight,n=config.s,l=Math,c=0,m=l.PI*2,f=l.cos,g=l.random;o.width=h*r,o.height=s*r,e.scale(r,r),e.globalAlpha=config.a,o.style.cssText="opacity: "+config.a+";position:fixed;top:0;left:0;z-index: "+config.z+";width:100%;height:100%;pointer-events:none;",document.getElementsByTagName("body")[0].appendChild(o);function p(){for(e.clearRect(0,0,h,s),t=[{x:0,y:s*.7+n},{x:0,y:s*.7-n}];t[1].x<h+n;)b(t[0],t[1])}function b(s,o){e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(o.x,o.y);var i=o.x+(g()*2-.25)*n,a=v(o.y);e.lineTo(i,a),e.closePath(),c-=m/-50,e.fillStyle="#"+(f(c)*127+128<<16|f(c+m/3)*127+128<<8|f(c+m/3*2)*127+128).toString(16),e.fill(),t[0]=t[1],t[1]={x:i,y:a}}function v(e){return i=e+(g()*2-1.1)*n,i>s||i<0?v(e):i}document.onclick=p,document.ontouchstart=p,p()}();function s(){window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,o=document.createElement("canvas"),o.id="universe",o.style.cssText="display: block;position: fixed;margin: 0;padding: 0;border: 0;outline: 0;left: 0;top: 0;width: 100%; height: 100%;pointer-events: none;z-index: -100;",document.getElementsByTagName("body")[0].appendChild(o);var e,n,o,a,m,s=.05,r=o,d=!0,p="180,184,240",f="226,225,142",l="226,225,224",i=[];function c(){n=window.innerWidth,a=window.innerHeight,m=.216*n,r.setAttribute("width",n),r.setAttribute("height",a)}function u(){e.clearRect(0,0,n,a);for(var t,o=i.length,s=0;s<o;s++)t=i[s],t.move(),t.fadeIn(),t.fadeOut(),t.draw()}function g(){this.reset=function(){this.giant=h(3),this.comet=!this.giant&&!d&&h(10),this.x=t(0,n-10),this.y=t(0,a),this.r=t(1.1,2.6),this.dx=t(s,6*s)+(this.comet+1-1)*s*t(50,120)+2*s,this.dy=-t(s,6*s)-(this.comet+1-1)*s*t(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=t(.2,1-.4*(this.comet+1-1)),this.do=t(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(e.beginPath(),this.giant)e.fillStyle="rgba("+p+","+this.opacity+")",e.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){e.fillStyle="rgba("+l+","+this.opacity+")",e.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)e.fillStyle="rgba("+l+","+(this.opacity-this.opacity/20*t)+")",e.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),e.fill()}else e.fillStyle="rgba("+f+","+this.opacity+")",e.rect(this.x,this.y,this.r,this.r);e.closePath(),e.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){d=!1},50)}function h(e){return Math.floor(1e3*Math.random())+1<10*e}function t(e,t){return Math.random()*(t-e)+e}c(),window.addEventListener("resize",c,!1),function(){e=r.getContext("2d");for(var t=0;t<m;t++)i[t]=new g,i[t].reset();u()}(),function e(){document.documentElement.dataset.scheme!=="light"&&u(),window.requestAnimationFrame(e)}()}function o(){s()}var e={container:{style:`
      position: fixed;
      top: 0;
      width: 100%;
      height: 0;
      display: flex;
      justify-content: space-evenly;
      pointer-events: none;
      z-index: -100;
    `},fall:{styles:[`animation-delay: .1s;
       animation-duration: 4s`,`animation-delay: .5s;
       animation-duration: 5s`,`animation-delay: .3s;
       animation-duration: 3s;
       animation-name: {keyframes2}`,`animation-delay: .2s;
       animation-duration: 3.5s;
       animation-name: {keyframes1}`,`animation-delay: .9s;
       animation-duration: 3s;
       animation-name: {keyframes1};
       animation-duration: 4.5s`,`animation-delay: .7s;
       animation-duration: 5.5s;
       animation-name: {keyframes1}`,`animation-delay: .4s;
       animation-duration: 3s`,`animation-delay: .6s;
       animation-duration: 4s;
       animation-name: {keyframes1}`,`animation-delay: .5s;
       animation-duration: 5.5s;
       animation-name: {keyframes2};`,`animation-delay: .3s;`,`animation-delay: .7s;
       animation-duration: 3.5s`,`animation-delay: .5s;
       animation-duration: 4s`,`animation-delay: .15s;
       animation-duration: 6.5s;
       animation-name: {keyframes2};`,`animation-delay: .5s;
       animation-duration: 6.5s;
       animation-name: {keyframes3};`,`animation-delay: .55s;
       animation-duration: 5.5s;
       animation-name: {keyframes3};`,`animation-delay: .75s;
       animation-duration: 7.5s;
       animation-name: {keyframes3};`],keyframes:[`from {
        opacity: .9;
      }
      to {
        transform: translate(10vw, 100vh) rotateX(45deg);
        opacity: .2;
      }`,`from {
        opacity: .9;
      }
      to {
        transform: translate(-10vw, 100vh) rotateY(45deg);
        opacity: .2;
      }`,`from {
        opacity: .9;
      }
      to {
        transform: translate(5vw, 100vh) rotateX(-45deg);
        opacity: .2;
      }`,`from {
        opacity: .9;
      }
      to {
        transform: translate(-5vw, 100vh) rotateX(-45deg);
        opacity: .2;
      }`]},spread:{keyframes:[`from {
        transform: translateY(50vh) rotateZ(55deg) skew(5deg, 5deg);
        opacity: .1;
      }
      to {
        transform: translate(10vw, -100%) rotateZ(45deg);
        opacity: .9;
      }`,`from {
        transform: translateY(50vh) rotateZ(-55deg) skew(5deg, 5deg);
        opacity: .1;
      }
      to {
        transform: translate(-10vw, -100%) rotateZ(-45deg);
        opacity: .9;
      }`,`from {
        transform: translateY(50vh) rotateZ(155deg) skew(-5deg, 5deg);
        opacity: .1;
      }
      to {
        transform: translate(10vw, 105vh) rotateZ(145deg);
        opacity: .9;
      }`,`from {
        transform: translateY(50vh) rotateZ(195deg) skew(-5deg, 5deg);
        opacity: .1;
      }
      to {
        transform: translate(-10vw, 105vh) rotateZ(185deg);
        opacity: .9;
      }`]},snow:{style:`
      width: .5vw;
      height: .5vw;
      border-radius: 50%;
      background-color: white;
      border: 1px solid #fefefe;
      transform: translateY(-200%);
      animation: {keyframes0} 6s linear infinite;
    `},stars:{style:`
      width: .3vw;
      height: .3vw;
      border-radius: 50%;
      background-color: #fff06b;
      border: 1px solid #fefefe;
      transform: translateY(-200%);
      animation: {keyframes0} 6s linear infinite;
    `}},i={sakura:{num:30,containerStyle:e.container.style,style:`
      width: 1.5vw;
      height: 1.5vh;
      border-radius: 50% 0;
      background-image: linear-gradient(to right, pink, white);
      transform: translateY(-100%);
      animation: {keyframes0} 4s linear infinite;
    `,styles:e.fall.styles,keyframes:e.fall.keyframes},snow:{num:60,containerStyle:e.container.style,style:e.snow.style,styles:e.fall.styles,keyframes:e.fall.keyframes},rain:{num:60,containerStyle:e.container.style,style:`
      width: .2vw;
      height: 1vw;
      border-radius: 30%;
      background-color: rgba(255, 255, 255, .5);
      transform: translateY(-100%);
      animation: {keyframes0} 6s ease-in-out infinite;
    `,styles:e.fall.styles,keyframes:e.fall.keyframes},firefly:{num:60,containerStyle:e.container.style,style:e.snow.style.replace("white","#fff06b"),styles:e.fall.styles,keyframes:e.spread.keyframes},stars:{num:120,containerStyle:e.container.style,style:e.stars.style,styles:e.fall.styles,keyframes:e.spread.keyframes},butterfly:{num:40,containerStyle:e.container.style,html:`
      <div class="wing"></div>
      <div class="wing"></div>
    `,style:{"":`
        display: inline-block;
        position: relative;
        width: 1.25vw;
        height: 1.25vw;
        transform: translateY(-100%);
        animation: {keyframes0} 6s linear infinite;
      `,"::after":`
        position: absolute;
        content: ' ';
        background-color: lightgoldenrodyellow;
        border-radius: 50%;
        display: block;
        left: .5vw;
        width: .25vw;
        height: .75vw;
      `,".wing":`
        position: absolute;
        width: .75vw;
        height: .75vw;
        animation: wing .3s infinite ease-in-out alternate;
      `,".wing:last-child":`
        right: 0;
      `,".wing:last-child::after":`
        right: .125vw;
        left: auto;
      `,".wing::before":`
        position: absolute;
        content: ' ';
        display: block;
        width: .6vw;
        height: .6vw;
        background-color: lightyellow;
        border-radius: 50%;
      `,".wing::after":`
        position: absolute;
        content: ' ';
        display: block;
        top: .5vw;
        left: .12vw;
        width: .5vw;
        height: .5vw;
        background-color: lightyellow;
        border-radius: 50%;
      `},keyframe:{wing:`
        from {
          transform: scale(.9);
        }
        to {
          transform: scale(1.1);
        }`},styles:e.fall.styles,keyframes:e.spread.keyframes}},a=class{constructor(){this.wrapper=document.createElement("DIV"),document.body.appendChild(this.wrapper),this.styleSheet=this.wrapper.appendChild(document.createElement("STYLE")).sheet,this.container=this.wrapper.appendChild(document.createElement("DIV"))}uuid(){return"xxxxxxxxxx".replace(/x/g,e=>(Math.random()*16|0).toString(16))}createRules(e,t,n=e=>e){const s=[];for(const i of e){const o="yz"+this.uuid();s.push(o),this.styleSheet.insertRule(`${t(o)} { ${n(i)} }`,0)}return s}createRule(e,t){for(const n in e)this.styleSheet.insertRule(`${t(n)} { ${e[n]} }`,0)}createKeyfarme(e){this.createRule(e,e=>"@keyframes "+e)}createKeyfarmes(e){return this.createRules(e,e=>"@keyframes "+e)}createStyles(e,t,n){return this.createRules(e,t,e=>e.replace(/\{keyframes(\d+)\}/g,(e,t)=>n[t]))}processStyles(e,t){const n=e.length;for(let s=0;s<n;s++){const o=e[s].match(/animation-duration:(?<duration>.*)/);if(o===null)continue;t(parseFloat(o.groups.duration),o.groups.duration,s)}}replaceStyles(e,t){let n=0;this.processStyles(e,e=>n<e&&(n=e)),this.processStyles(e,(s,o,i)=>{const a=s/n*t.maxDuration,r=o.replace(s,a);e[i]=e[i].replace(o,r)})}load(e,t){let{num:l,html:o,containerStyle:d,style:n,styles:a,keyframe:u={},keyframes:h}=i[e];this.createKeyfarme(u);const s=this.createKeyfarmes(h);typeof n=="string"&&(n={"":n}),this.createStyles([n[""]],e=>"."+(this.container.className=e)+" div",s),this.createStyles([d],e=>"."+this.container.className,s),this.createRule(n,e=>"."+this.container.className+" div"+(e[0]===":"?"":" ")+e),this.replaceStyles(a,t);const r=this.createStyles(a,e=>" ."+this.container.className+" ."+e,s),c=document.createDocumentFragment();for(let e=0;e<l;e++){const t=document.createElement("DIV");o&&(t.innerHTML=o),c.appendChild(t).className=r[e%r.length]}this.container.appendChild(c)}run(e,t={maxDuration:10}){this.clear(),this.load(e,t)}clear(){for(this.container.innerHTML="";this.styleSheet.cssRules.length;)this.styleSheet.deleteRule(0)}destory(){this.wrapper.remove(),this.wrapper=this.styleSheet=this.container=null}},t=new a;function n(){document.documentElement.dataset.scheme==="light"?t.run("sakura",{maxDuration:8}):t.run("stars",{maxDuration:10})}function r(){n(),window.addEventListener("onColorSchemeChange",e=>{t.clear(),n()})}o(),r()})()
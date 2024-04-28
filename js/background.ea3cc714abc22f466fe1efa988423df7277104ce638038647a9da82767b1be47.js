(()=>{(function(){function g(c,k,b){return Number(c.getAttribute(k))||b}var e=document.getElementsByTagName("script"),a=e[e.length-1];config={z:g(a,"zIndex",-101),a:g(a,"alpha",.6),s:g(a,"size",90)};var n=document.createElement("canvas"),t=n.getContext("2d"),i=window.devicePixelRatio||1,s=window.innerWidth,d=window.innerHeight,h=config.s,f,y,u=Math,p=0,l=u.PI*2,w=u.cos,x=u.random;n.width=s*i,n.height=d*i,t.scale(i,i),t.globalAlpha=config.a,n.style.cssText="opacity: "+config.a+";position:fixed;top:0;left:0;z-index: "+config.z+";width:100%;height:100%;pointer-events:none;",document.getElementsByTagName("body")[0].appendChild(n);function m(){for(t.clearRect(0,0,s,d),f=[{x:0,y:d*.7+h},{x:0,y:d*.7-h}];f[1].x<s+h;)o(f[0],f[1])}function o(c,k){t.beginPath(),t.moveTo(c.x,c.y),t.lineTo(k.x,k.y);var b=k.x+(x()*2-.25)*h,E=v(k.y);t.lineTo(b,E),t.closePath(),p-=l/-50,t.fillStyle="#"+(w(p)*127+128<<16|w(p+l/3)*127+128<<8|w(p+l/3*2)*127+128).toString(16),t.fill(),f[0]=f[1],f[1]={x:b,y:E}}function v(c){return y=c+(x()*2-1.1)*h,y>d||y<0?v(c):y}document.onclick=m,document.ontouchstart=m,m()})();function C(){window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var g=document.createElement("canvas");g.id="universe",g.style.cssText="display: block;position: fixed;margin: 0;padding: 0;border: 0;outline: 0;left: 0;top: 0;width: 100%; height: 100%;pointer-events: none;z-index: -100;",document.getElementsByTagName("body")[0].appendChild(g);var e,a,n,t,i=.05,s=g,d=!0,h="180,184,240",f="226,225,142",y="226,225,224",u=[];function p(){e=window.innerWidth,a=window.innerHeight,n=.216*e,s.setAttribute("width",e),s.setAttribute("height",a)}function l(){t.clearRect(0,0,e,a);for(var o=u.length,v=0;v<o;v++){var c=u[v];c.move(),c.fadeIn(),c.fadeOut(),c.draw()}}function w(){this.reset=function(){this.giant=x(3),this.comet=!this.giant&&!d&&x(10),this.x=m(0,e-10),this.y=m(0,a),this.r=m(1.1,2.6),this.dx=m(i,6*i)+(this.comet+1-1)*i*m(50,120)+2*i,this.dy=-m(i,6*i)-(this.comet+1-1)*i*m(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=m(.2,1-.4*(this.comet+1-1)),this.do=m(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>e||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(t.beginPath(),this.giant)t.fillStyle="rgba("+h+","+this.opacity+")",t.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){t.fillStyle="rgba("+y+","+this.opacity+")",t.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var o=0;o<30;o++)t.fillStyle="rgba("+y+","+(this.opacity-this.opacity/20*o)+")",t.rect(this.x-this.dx/4*o,this.y-this.dy/4*o-2,2,2),t.fill()}else t.fillStyle="rgba("+f+","+this.opacity+")",t.rect(this.x,this.y,this.r,this.r);t.closePath(),t.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,this.fadingOut===!1&&this.reset(),(this.x>e-e/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){d=!1},50)}function x(o){return Math.floor(1e3*Math.random())+1<10*o}function m(o,v){return Math.random()*(v-o)+o}p(),window.addEventListener("resize",p,!1),function(){t=s.getContext("2d");for(var o=0;o<n;o++)u[o]=new w,u[o].reset();l()}(),function o(){document.documentElement.dataset.scheme==="dark"&&l(),window.requestAnimationFrame(o)}()}function T(){C()}var r={container:{style:`
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
       animation-name: {keyframes2};`,"animation-delay: .3s;",`animation-delay: .7s;
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
    `}},N={sakura:{num:30,containerStyle:r.container.style,style:`
      width: 1.5vw;
      height: 1.5vh;
      border-radius: 50% 0;
      background-image: linear-gradient(to right, pink, white);
      transform: translateY(-100%);
      animation: {keyframes0} 4s linear infinite;
    `,styles:r.fall.styles,keyframes:r.fall.keyframes},snow:{num:60,containerStyle:r.container.style,style:r.snow.style,styles:r.fall.styles,keyframes:r.fall.keyframes},rain:{num:60,containerStyle:r.container.style,style:`
      width: .2vw;
      height: 1vw;
      border-radius: 30%;
      background-color: rgba(255, 255, 255, .5);
      transform: translateY(-100%);
      animation: {keyframes0} 6s ease-in-out infinite;
    `,styles:r.fall.styles,keyframes:r.fall.keyframes},firefly:{num:60,containerStyle:r.container.style,style:r.snow.style.replace("white","#fff06b"),styles:r.fall.styles,keyframes:r.spread.keyframes},stars:{num:120,containerStyle:r.container.style,style:r.stars.style,styles:r.fall.styles,keyframes:r.spread.keyframes},butterfly:{num:40,containerStyle:r.container.style,html:`
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
        }`},styles:r.fall.styles,keyframes:r.spread.keyframes}},S=class{constructor(){this.wrapper=document.createElement("DIV"),document.body.appendChild(this.wrapper),this.styleSheet=this.wrapper.appendChild(document.createElement("STYLE")).sheet,this.container=this.wrapper.appendChild(document.createElement("DIV"))}uuid(){return"xxxxxxxxxx".replace(/x/g,e=>(Math.random()*16|0).toString(16))}createRules(e,a,n=t=>t){let t=[];for(let i of e){let s="yz"+this.uuid();t.push(s),this.styleSheet.insertRule(`${a(s)} { ${n(i)} }`,0)}return t}createRule(e,a){for(let n in e)this.styleSheet.insertRule(`${a(n)} { ${e[n]} }`,0)}createKeyfarme(e){this.createRule(e,a=>"@keyframes "+a)}createKeyfarmes(e){return this.createRules(e,a=>"@keyframes "+a)}createStyles(e,a,n){return this.createRules(e,a,t=>t.replace(/\{keyframes(\d+)\}/g,(i,s)=>n[s]))}processStyles(e,a){let n=e.length;for(let t=0;t<n;t++){let i=e[t].match(/animation-duration:(?<duration>.*)/);i!==null&&a(parseFloat(i.groups.duration),i.groups.duration,t)}}replaceStyles(e,a){let n=0;this.processStyles(e,t=>n<t&&(n=t)),this.processStyles(e,(t,i,s)=>{let d=t/n*a.maxDuration,h=i.replace(t,d);e[s]=e[s].replace(i,h)})}load(e,a){let{num:n,html:t,containerStyle:i,style:s,styles:d,keyframe:h={},keyframes:f}=N[e];this.createKeyfarme(h);let y=this.createKeyfarmes(f);typeof s=="string"&&(s={"":s}),this.createStyles([s[""]],l=>"."+(this.container.className=l)+" div",y),this.createStyles([i],l=>"."+this.container.className,y),this.createRule(s,l=>"."+this.container.className+" div"+(l[0]===":"?"":" ")+l),this.replaceStyles(d,a);let u=this.createStyles(d,l=>" ."+this.container.className+" ."+l,y),p=document.createDocumentFragment();for(let l=0;l<n;l++){let w=document.createElement("DIV");t&&(w.innerHTML=t),p.appendChild(w).className=u[l%u.length]}this.container.appendChild(p)}run(e,a={maxDuration:10}){this.clear(),this.load(e,a)}clear(){for(this.container.innerHTML="";this.styleSheet.cssRules.length;)this.styleSheet.deleteRule(0)}destory(){this.wrapper.remove(),this.wrapper=this.styleSheet=this.container=null}},R=new S;function z(){document.documentElement.dataset.scheme==="light"?R.run("sakura",{maxDuration:8}):R.run("stars",{maxDuration:10})}function I(){z(),window.addEventListener("onColorSchemeChange",g=>{R.clear(),z()})}T();I();})();

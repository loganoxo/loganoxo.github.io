const tpl={container:{style:`
      position: fixed;
      top: 0;
      width: 100%;
      height: 0;
      display: flex;
      justify-content: space-evenly;
      pointer-events: none;
      z-index: 999;
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
       animation-name: {keyframes3};`],keyframes:[`animation-delay: .1s;
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
    `}},yzh_config={sakura:{num:30,containerStyle:tpl.container.style,style:`
      width: 1.5vw;
      height: 1.5vh;
      border-radius: 50% 0;
      background-image: linear-gradient(to right, pink, white);
      transform: translateY(-100%);
      animation: {keyframes0} 4s linear infinite;
    `,styles:tpl.fall.styles,keyframes:tpl.fall.keyframes},snow:{num:60,containerStyle:tpl.container.style,style:tpl.snow.style,styles:tpl.fall.styles,keyframes:tpl.fall.keyframes},rain:{num:60,containerStyle:tpl.container.style,style:`
      width: .2vw;
      height: 1vw;
      border-radius: 30%;
      background-color: rgba(255, 255, 255, .5);
      transform: translateY(-100%);
      animation: {keyframes0} 6s ease-in-out infinite;
    `,styles:tpl.fall.styles,keyframes:tpl.fall.keyframes},firefly:{num:60,containerStyle:tpl.container.style,style:tpl.snow.style.replace("white","#fff06b"),styles:tpl.fall.styles,keyframes:tpl.spread.keyframes},butterfly:{num:40,containerStyle:tpl.container.style,html:`
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
        }`},styles:tpl.fall.styles,keyframes:tpl.spread.keyframes}};class YZhanWeather{constructor(){this.wrapper=document.createElement("DIV"),document.body.appendChild(this.wrapper),this.styleSheet=this.wrapper.appendChild(document.createElement("STYLE")).sheet,this.container=this.wrapper.appendChild(document.createElement("DIV"))}uuid(){return"xxxxxxxxxx".replace(/x/g,e=>(Math.random()*16|0).toString(16))}createRules(e,t,n=e=>e){const s=[];for(const i of e){const o="yz"+this.uuid();s.push(o),this.styleSheet.insertRule(`${t(o)} { ${n(i)} }`,0)}return s}createRule(e,t){for(const n in e)this.styleSheet.insertRule(`${t(n)} { ${e[n]} }`,0)}createKeyfarme(e){this.createRule(e,e=>"@keyframes "+e)}createKeyfarmes(e){return this.createRules(e,e=>"@keyframes "+e)}createStyles(e,t,n){return this.createRules(e,t,e=>e.replace(/\{keyframes(\d+)\}/g,(e,t)=>n[t]))}processStyles(e,t){const n=e.length;for(let s=0;s<n;s++){const o=e[s].match(/animation-duration:(?<duration>.*)/);if(o===null)continue;t(parseFloat(o.groups.duration),o.groups.duration,s)}}replaceStyles(e,t){let n=0;this.processStyles(e,e=>n<e&&(n=e)),this.processStyles(e,(s,o,i)=>{const a=s/n*t.maxDuration,r=o.replace(s,a);e[i]=e[i].replace(o,r)})}load(e,t){let{num:c,html:o,containerStyle:l,style:n,styles:i,keyframe:d={},keyframes:u}=yzh_config[e];this.createKeyfarme(d);const s=this.createKeyfarmes(u);typeof n=="string"&&(n={"":n}),this.createStyles([n[""]],e=>"."+(this.container.className=e)+" div",s),this.createStyles([l],e=>"."+this.container.className,s),this.createRule(n,e=>"."+this.container.className+" div"+(e[0]===":"?"":" ")+e),this.replaceStyles(i,t);const a=this.createStyles(i,e=>" ."+this.container.className+" ."+e,s),r=document.createDocumentFragment();for(let e=0;e<c;e++){const t=document.createElement("DIV");o&&(t.innerHTML=o),r.appendChild(t).className=a[e%a.length]}this.container.appendChild(r)}run(e,t={maxDuration:10}){this.clear(),this.load(e,t)}clear(){for(this.container.innerHTML="";this.styleSheet.cssRules.length;)this.styleSheet.deleteRule(0)}destory(){this.wrapper.remove(),this.wrapper=this.styleSheet=this.container=null}}const yzhanweather=new YZhanWeather;function yzhanweather_fun(){document.documentElement.dataset.scheme==="light"?yzhanweather.run("sakura",{maxDuration:8}):yzhanweather.run("firefly",{maxDuration:8})}yzhanweather_fun(),window.addEventListener("onColorSchemeChange",e=>{yzhanweather.clear(),yzhanweather_fun()})
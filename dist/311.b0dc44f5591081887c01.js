"use strict";(self.webpackChunkbcc=self.webpackChunkbcc||[]).push([[311],{928:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m});var r=a(294),s=a(967),n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])},n(t,e)};function c(t){var e=t.className,a=t.counterClockwise,s=t.dashRatio,n=t.pathRadius,c=t.strokeWidth,i=t.style;return(0,r.createElement)("path",{className:e,style:Object.assign({},i,l({pathRadius:n,dashRatio:s,counterClockwise:a})),d:o({pathRadius:n,counterClockwise:a}),strokeWidth:c,fillOpacity:0})}function o(t){var e=t.pathRadius,a=t.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+e+"\n      a "+e+","+e+" "+a+" 1 1 0,"+2*e+"\n      a "+e+","+e+" "+a+" 1 1 0,-"+2*e+"\n    "}function l(t){var e=t.counterClockwise,a=t.dashRatio,r=t.pathRadius,s=2*Math.PI*r,n=(1-a)*s;return{strokeDasharray:s+"px "+s+"px",strokeDashoffset:(e?-n:n)+"px"}}var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return function(t,e){function a(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}(e,t),e.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},e.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},e.prototype.getPathRatio=function(){var t=this.props,e=t.value,a=t.minValue,r=t.maxValue;return(Math.min(Math.max(e,a),r)-a)/(r-a)},e.prototype.render=function(){var t=this.props,e=t.circleRatio,a=t.className,s=t.classes,n=t.counterClockwise,o=t.styles,l=t.strokeWidth,i=t.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:s.root+" "+a,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:s.background,style:o.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(c,{className:s.trail,counterClockwise:n,dashRatio:e,pathRadius:u,strokeWidth:l,style:o.trail}),(0,r.createElement)(c,{className:s.path,counterClockwise:n,dashRatio:p*e,pathRadius:u,strokeWidth:l,style:o.path}),i?(0,r.createElement)("text",{className:s.text,style:o.text,x:50,y:50},i):null)},e.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},e}(r.Component);const u=a.p+"images/baefcaf5f99da295d9e7.svg";var p=a(998);function h(){return h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},h.apply(this,arguments)}function d(){var[t,e]=(0,r.useState)(!1),[a,n]=(0,r.useState)(0);return(0,p.I0)(),(0,r.useEffect)((()=>{setTimeout((()=>{a<90&&n(a+1)}),100),setTimeout((()=>{a>=90&&a<100&&n(a+1),100===a&&e(!0)}),1e3)}),[a]),r.createElement("div",{className:"flex flex-col items-center justify-center w-[calc(100vw-320px)]"},t?r.createElement(r.Fragment,null,r.createElement("div",{className:"h-28 w-28 mb-6"},r.createElement("img",{src:u,alt:""})),r.createElement(s.LL,{title:"Поздравляем, Ваш счёт открыт!"}),r.createElement("p",{className:"text-text mb-4"},"Чтобы получить реквизиты и начать пользоваться счётом"),r.createElement("a",{href:"https://pki.gov.kz/ncalayer/",className:"text-xl text-green font-bold underline"},"Войдите в интернет-банк")):r.createElement(r.Fragment,null,r.createElement(s.LL,{title:"Заявка на открытие счёта"}),r.createElement("p",{className:"text-xl font-bold mb-3"},"Решение банка"),r.createElement("p",{className:"text-base mb-6"},"Пожалуйста, подождите"),r.createElement("div",{className:"w-28 h-28 flex items-center justify-center"},r.createElement(i,h({},{isPlaying:!0,size:100,strokeWidth:4},{value:a,text:"".concat(a,"%"),styles:{text:{fill:"#4D565F",fontSize:"24px"},path:{stroke:"#27AE60"}}})))))}function m(){return r.createElement(r.Fragment,null,r.createElement(d,null))}a(865)}}]);
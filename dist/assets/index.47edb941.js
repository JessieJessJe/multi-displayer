import{o as a,c as d,r as c,a as i,w as f,v as _,b as m,d as h,t as p,F as v,e as y,f as w,g as b}from"./vendor.b06c744a.js";const x=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};x();var g=(o,r)=>{const s=o.__vccOpts||o;for(const[l,e]of r)s[l]=e;return s};const C=["width","height","src"],H={props:{url:{type:String,required:!0},width:{type:String,required:!0},height:{type:String,required:!0}},setup(o){return(r,s)=>(a(),d("iframe",{width:o.width,height:o.height,src:o.url},`
  `,8,C))}};var W=g(H,[["__scopeId","data-v-1010341f"]]);const P={name:"App",components:{HelloWorld:W},data(){return{urlInput:"",url:"https://editor.p5js.org/",pageCount:2,width:window.innerWidth/2-100,height:window.innerHeight-100,selected:0}},computed:{incomplete(){return this.tasks.filter(this.inProgress).length}},methods:{changeWidth(o){this.width=o.target.value},changeHeight(o){this.height=o.target.value},addPages(){this.pageCount=this.pageCount+1},minusPages(){this.pageCount=Math.max(1,this.pageCount-1)},gotoUrl(){this.url=this.urlInput}}},U={class:"page-bar"},k=i("h1",null,"Multi-Displayer",-1),L={class:"page-bar-section"},I=i("p",null,"What's the website url?",-1),M={class:"page-bar-section"},N=i("p",null,"How many windows to display?",-1),S={class:"page-bar-section"},A=i("p",null,"Size of each window?",-1),O=i("label",{for:"width-slider"},"Width: ",-1),q=i("label",{for:"height-slider"},"Height: ",-1),V=i("div",null,null,-1),B={class:"page-wrapper"};function D(o,r,s,l,e,t){const u=c("HelloWorld");return a(),d("main",null,[i("div",U,[k,i("div",L,[I,f(i("input",{type:"text",class:"input-group-field","onUpdate:modelValue":r[0]||(r[0]=n=>e.urlInput=n),onKeyup:r[1]||(r[1]=m((...n)=>t.gotoUrl&&t.gotoUrl(...n),["enter"])),placeholder:"paste your URL here"},null,544),[[_,e.urlInput]]),i("button",{onClick:r[2]||(r[2]=(...n)=>t.gotoUrl&&t.gotoUrl(...n)),class:"button"}," Update ")]),i("div",M,[N,i("button",{onClick:r[3]||(r[3]=(...n)=>t.minusPages&&t.minusPages(...n))},"-"),h(" "+p(e.pageCount)+" ",1),i("button",{onClick:r[4]||(r[4]=(...n)=>t.addPages&&t.addPages(...n))},"+")]),i("div",S,[A,i("div",null,[O,i("input",{type:"range",min:100,max:1e3,onMouseup:r[5]||(r[5]=(...n)=>t.changeWidth&&t.changeWidth(...n)),name:"width-slider",id:"myWidth",value:"width"},null,32),h(" "+p(e.width)+"px \xA0 ",1),q,i("input",{type:"range",min:100,max:1e3,onMouseup:r[6]||(r[6]=(...n)=>t.changeHeight&&t.changeHeight(...n)),name:"height-slider",id:"myHeight",value:"height"},null,32),h(" "+p(e.height)+"px ",1)])]),V]),i("div",B,[(a(!0),d(v,null,y(e.pageCount,n=>(a(),d("div",{class:"page-wrapper-page",ref_for:!0,ref:"pageCount"},[w(u,{url:e.url,width:e.width,height:e.height},null,8,["url","width","height"])],512))),256))])])}var F=g(P,[["render",D]]);b(F).mount("#app");

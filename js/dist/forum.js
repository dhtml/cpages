(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{"use strict";const e=flarum.core.compat["common/app"];t.n(e)().initializers.add("dhtml/cpages",(function(){}));const o=flarum.core.compat["forum/app"];var n=t.n(o);function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}const a=flarum.core.compat["common/components/LoadingIndicator"];var c=t.n(a);const s=flarum.core.compat["forum/components/IndexPage"];var i=t.n(s);const u=flarum.core.compat["common/helpers/listItems"];var l=t.n(u);const d=flarum.core.compat["common/components/Page"];var p=function(t){function e(){return t.apply(this,arguments)||this}var o,a;a=t,(o=e).prototype=Object.create(a.prototype),o.prototype.constructor=o,r(o,a);var s=e.prototype;return s.oninit=function(e){t.prototype.oninit.call(this,e),this.slug=e.attrs.routeName,this.page=null,this.loading=!0,this.pageContent=null,this.loadPage()},s.show=function(t){this.page=t,n().setTitle(t.title),this.pageContent=t.content,m.redraw()},s.loadPage=function(){var t=this;n().request({method:"GET",url:n().forum.attribute("apiUrl")+"/cpage/"+this.slug}).then((function(e){t.show(e.data.attributes)}))},s.renderPage=function(){return this.loading?m("div.ContentPages",m.trust(this.pageContent)):c().component({className:"LoadingIndicator--block"})},s.view=function(){return m("div",{className:"IndexPage"},i().prototype.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,l()(i().prototype.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},this.renderPage()))))},e}(t.n(d)());n().initializers.add("dhtml/cpages",(function(){["contact-us","about-us","privacy-policy","terms","guidelines","download"].forEach((function(t){n().routes[t]={path:"/"+t,component:p,resolveComponent:function(){return p.extend({slug:t})}}})),document.addEventListener("scroll",(function(){-((document.body.scrollHeight||document.documentElement.scrollHeight)-(document.body.scrollTop||document.documentElement.scrollTop+document.documentElement.clientHeight))>1.75*document.documentElement.clientHeight||$(".DiscussionList-loadMore button").click()}),{passive:!0})}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map
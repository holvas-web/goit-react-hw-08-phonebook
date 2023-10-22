"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[489],{8489:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,o,i,u,c,a,l,f,p,s=t(2791),d=t(9434),x=t(3101),h=t(168),v=t(6444),y=v.ZP.div(r||(r=(0,h.Z)(["\n  /* margin: 0 auto; */\n  padding: 0 20px 16px;\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n"]))),g=(v.ZP.h2(o||(o=(0,h.Z)(["\n  margin-bottom: 16px;\n  font-weight: 700;\n  font-size: 32px;\n"]))),v.ZP.div(i||(i=(0,h.Z)(["\n  margin-bottom: 16px;\n"])))),m=v.ZP.label(u||(u=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 18px;\n  font-weight: 500;\n  padding-bottom: 8px;\n"]))),w=v.ZP.input(c||(c=(0,h.Z)(["\n  border-color: #eef0f2;\n  border-style: solid;\n  font-size: 16px;\n  font-weight: 400;\n\n  &:hover,\n  &:focus {\n    box-shadow: yellowgreen 0px 0px 0px 2px;\n  }\n"]))),b=t(1473),Z=t(2286),j=t(184),k=function(){var n=(0,d.I0)(),e=(0,d.v9)(Z.PU);return(0,j.jsx)(g,{children:(0,j.jsxs)(m,{children:["Find contacts by name",(0,j.jsx)(w,{type:"text",value:e,onChange:function(e){return n((0,b.xD)(e.target.value))}})]})})},C=v.ZP.ul(a||(a=(0,h.Z)(["\n  list-style: disc;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),P=v.ZP.li(l||(l=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n"]))),z=v.ZP.div(f||(f=(0,h.Z)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: yellow;\n"]))),A=v.ZP.button(p||(p=(0,h.Z)(["\n  margin-left: auto;\n  padding: 4px 10px;\n  box-shadow: yellowgreen 0px 1px 6px;\n  background-color: #fff;\n  border-color: transparent;\n  width: fit-content;\n  border-radius: 2px;\n\n  &:hover,\n  &:focus {\n    box-shadow: yellowgreen 0px 0px 0px 2px;\n  }\n"]))),E=t(2561),F=function(){var n=(0,d.v9)(Z.hF),e=(0,d.I0)();return(0,j.jsx)(C,{children:n.map((function(n){return(0,j.jsxs)(P,{children:[(0,j.jsx)(z,{}),(0,j.jsxs)("p",{children:[n.name,": ",n.number]}),(0,j.jsx)(A,{onClick:function(){return e((0,E.GK)(n.id))},children:"Delete"})]},n.id)}))})},I=function(){var n=(0,d.I0)(),e=(0,d.v9)(Z.xU),t=(0,d.v9)(Z.zh);return(0,s.useEffect)((function(){n((0,E.yF)())}),[n]),(0,j.jsxs)(y,{children:[(0,j.jsx)(k,{}),e&&!t&&(0,j.jsx)(x.g4,{height:"80",width:"80",radius:"9",color:"pink",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center"},wrapperClassName:"",visible:!0}),(0,j.jsx)(F,{})]})}},2286:function(n,e,t){t.d(e,{Af:function(){return l},zh:function(){return p},PU:function(){return s},xU:function(){return f},hF:function(){return d}});var r="NOT_FOUND";var o=function(n,e){return n===e};function i(n,e){var t="object"===typeof e?e:{equalityCheck:e},i=t.equalityCheck,u=void 0===i?o:i,c=t.maxSize,a=void 0===c?1:c,l=t.resultEqualityCheck,f=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(u),p=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:r},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(f):function(n,e){var t=[];function o(n){var o=t.findIndex((function(t){return e(n,t.key)}));if(o>-1){var i=t[o];return o>0&&(t.splice(o,1),t.unshift(i)),i.value}return r}return{get:o,put:function(e,i){o(e)===r&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,f);function s(){var e=p.get(arguments);if(e===r){if(e=n.apply(null,arguments),l){var t=p.getEntries(),o=t.find((function(n){return l(n.value,e)}));o&&(e=o.value)}p.put(arguments,e)}return e}return s.clearCache=function(){return p.clear()},s}function u(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function c(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,c=0,a={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(a=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var f=a,p=f.memoizeOptions,s=void 0===p?t:p,d=Array.isArray(s)?s:[s],x=u(r),h=n.apply(void 0,[function(){return c++,l.apply(null,arguments)}].concat(d)),v=n((function(){for(var n=[],e=x.length,t=0;t<e;t++)n.push(x[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(v,{resultFunc:l,memoizedResultFunc:h,dependencies:x,lastResult:function(){return i},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),v};return o}var a=c(i),l=function(n){return n.contacts.items},f=function(n){return n.contacts.isLoading},p=function(n){return n.contacts.error},s=function(n){return n.filter.filter},d=a([l,s],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}))}}]);
//# sourceMappingURL=489.146702f1.chunk.js.map
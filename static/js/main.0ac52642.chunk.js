(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],{16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(8),i=r.n(c),u=r(2),o=r(3),s=r.n(o);function f(e){return function(e){for(var t,r,n=e.length;0!==n;)r=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[r],e[r]=t;return e}(Array.from({length:e},(function(e,t){return t})))}var b=r(9),j=function(e){return Array.isArray(e)?Object(b.a)({},"orange",e):(Object.keys(e).map((function(t){"number"===typeof e[t]&&(e[t]=[e[t]])})),e)},h=function(e){var t={};return Object.entries(e).forEach((function(e){var r=Object(u.a)(e,2),n=r[0];r[1].forEach((function(e){return t[e]=n}))})),t},d=s.a.mark((function e(t){var r,n,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.length,a=0;case 2:if(!(a<r-1)){e.next=17;break}n=!1,c=0;case 5:if(!(c<r-a-1)){e.next=12;break}return t[c]>t[c+1]&&(i=t[c],t[c]=t[c+1],t[c+1]=i,n=!0),e.next=9,j({red:a,green:[c,c+1]});case 9:c++,e.next=5;break;case 12:if(0!=n){e.next=14;break}return e.abrupt("break",17);case 14:a++,e.next=2;break;case 17:case"end":return e.stop()}}),e)}));var l=function(e,t){var r=Object(n.useRef)();Object(n.useEffect)((function(){r.current=e})),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){"undefined"!==typeof(null===r||void 0===r?void 0:r.current)&&(null===r||void 0===r||r.current())}),t);return function(){return clearInterval(e)}}}),[t])},v=r(1),O=a.a.createContext(void 0),x=function(e){var t=e.children,r=w().array,a=Object(n.useState)(d(r)),c=Object(u.a)(a,1)[0],i=Object(n.useState)({}),o=Object(u.a)(i,2),s=o[0],f=o[1],b=Object(n.useState)(10),j=Object(u.a)(b,2),x=j[0],p=j[1];return l((function(){var e=c.next();if(e.done)return p(0);var t=e.value,r=h(t);f(r)}),1e3/x),Object(v.jsx)(O.Provider,{value:{array:r,points:s},children:t})},p=a.a.createContext(void 0),g=a.a.createContext(void 0),y=f(30),m=function(e){var t=e.children,r=Object(n.useState)(30),a=Object(u.a)(r,2),c=a[0],i=a[1],o=Object(n.useState)(y),s=Object(u.a)(o,2),b=s[0],j=s[1];return Object(v.jsx)(p.Provider,{value:{array:b},children:Object(v.jsx)(g.Provider,{value:{changeArrayLength:function(e){return i(e)},generateNewArray:function(){return j(f(c))},replaceArray:function(e){j(e),i(e.length)}},children:t})})},w=function(){var e=a.a.useContext(p);if(void 0===e)throw new Error("useArrayState must be used within a ArrayProvider");return e},k=r(7),S=function(e){var t=e.width,r=e.height,n=e.color;return Object(v.jsx)("div",{className:"bar",style:{width:t,height:r,backgroundColor:n}})},C=a.a.memo(S),A=function(e){var t=e.array,r=e.points,n=Math.min.apply(Math,Object(k.a)(t)),a=Math.max.apply(Math,Object(k.a)(t)),c=t.length,i=function(e,t){var r=Object(u.a)(e,2),n=r[0],a=r[1],c=Object(u.a)(t,2),i=c[0],o=c[1];return function(e){var t=i+(e-n)*(o-i)/(a-n);return Math.round(t)}}([n,a],[10,400]),o=(600-1*c)/c;return Object(v.jsx)("div",{style:{display:"flex",justifyContent:"space-between",height:400,width:600},children:t.map((function(e,t){return Object(v.jsx)(C,{height:i(e),width:o,color:r[t]||"blue"},e)}))})},M=function(){var e=function(){var e=a.a.useContext(O);if(void 0===e)throw new Error("useSortingState must be used within a SortingProvider");return e}(),t=e.array,r=e.points;return Object(v.jsx)("div",{children:Object(v.jsx)(A,{array:t,points:r})})};var E=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(m,{children:Object(v.jsx)(x,{children:Object(v.jsx)(M,{})})})})},P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,18)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))};r(16);i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(E,{})}),document.getElementById("root")),P()}},[[17,1,2]]]);
//# sourceMappingURL=main.0ac52642.chunk.js.map
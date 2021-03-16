(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],{115:function(e,t,r){},116:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),a=r(24),o=r.n(a),s=r(120),_=r(123),c=r(122),u=r(20);function l(e){return function(e){for(var t,r,n=e.length;0!==n;)r=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[r],e[r]=t;return e}(Array.from({length:e},(function(e,t){return t})))}var h=function(e){var t={};return Object.values(e).forEach((function(e){t[e]="red"})),t},d=function(e){var t=e.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1)};var m=function(e,t){var r=Object(n.useRef)();Object(n.useEffect)((function(){r.current=e})),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){"undefined"!==typeof(null===r||void 0===r?void 0:r.current)&&(null===r||void 0===r||r.current())}),t);return function(){return clearInterval(e)}}}),[t])},j=r(3),b=i.a.createContext(void 0),g=i.a.createContext(void 0),f=function(e){var t=e.children,r=E().array,i=Object(S.c)().algorithm,a=Object(n.useState)(),o=Object(u.a)(a,2),s=o[0],_=o[1],c=Object(n.useState)({}),l=Object(u.a)(c,2),d=l[0],f=l[1];Object(n.useEffect)((function(){_(i?i(r):void 0),f({})}),[r,i]);var O=Object(n.useState)(60),v=Object(u.a)(O,2),p=v[0],A=v[1],x=M().isPlaying,P=D().finish;return m((function(){if(s){var e=s.next();if(e.done)return P();var t=e.value,r=h(t);f(r)}}),1e3/(p/(x?1:1e6))),Object(j.jsx)(b.Provider,{value:{array:r,points:d,frequency:p},children:Object(j.jsx)(g.Provider,{value:{changeFrequency:function(e){return A(e)}},children:t})})},O=function(){var e=i.a.useContext(b);if(void 0===e)throw new Error("useSortingState must be used within a SortingProvider");return e},v=i.a.createContext(void 0),p=i.a.createContext(void 0),A=l(100),x=function(e){var t=e.children,r=Object(n.useState)(100),i=Object(u.a)(r,2),a=i[0],o=i[1],s=Object(n.useState)(A),_=Object(u.a)(s,2),c=_[0],h=_[1],d=function(e){return h(l(e))};Object(n.useEffect)((function(){d(a)}),[a]);return Object(j.jsx)(v.Provider,{value:{array:c,arrayLength:a},children:Object(j.jsx)(p.Provider,{value:{setArrayLength:o,refreshArray:function(){return d(a)},replaceArray:function(e){h(e),o(e.length)}},children:t})})},E=function(){var e=i.a.useContext(v);if(void 0===e)throw new Error("useArrayState must be used within a ArrayProvider");return e},P=function(){var e=i.a.useContext(p);if(void 0===e)throw new Error("useArrayActions must be used within a ArrayProvider");return e},S=r(74),C=i.a.createContext(void 0),y=i.a.createContext(void 0),w=function(e){var t=e.children,r=P().refreshArray,i=Object(S.b)().compileAlgorithm,a=Object(n.useState)("finished"),o=Object(u.a)(a,2),s=o[0],_=o[1],c="playing"===s,l="finished"===s;return Object(j.jsx)(C.Provider,{value:{status:s,isPlaying:c},children:Object(j.jsx)(y.Provider,{value:{play:function(){l&&(r(),i()),_("playing")},pause:function(){return _("paused")},finish:function(){return _("finished")}},children:t})})},M=function(){var e=i.a.useContext(C);if(void 0===e)throw new Error("useStatusState must be used within a StatusProvider");return e},D=function(){var e=i.a.useContext(y);if(void 0===e)throw new Error("useStatusActions must be used within a StatusProvider");return e},L=function(){var e=M().isPlaying,t=D(),r=t.play,n=t.pause;return Object(j.jsx)(c.a,{onClick:function(){e?n():r()},children:e?"Pause":"Play"})},T=function(){var e=P().refreshArray;return Object(j.jsx)(c.a,{onClick:e,children:"New Array"})},I=r(118),U=function(){var e=E().arrayLength,t=P().setArrayLength;return Object(j.jsxs)(_.b,{children:["Size",Object(j.jsx)(I.a,{className:"array-length-slider",value:e,min:20,max:300,onChange:t})]})},B=function(){var e=O().frequency,t=function(){var e=i.a.useContext(g);if(void 0===e)throw new Error("useSortingActions must be used within a SortingProvider");return e}().changeFrequency;return Object(j.jsxs)(_.b,{children:["Speed",Object(j.jsx)(I.a,{className:"frequency-slider",value:e,tipFormatter:function(e){return"".concat(e," ticks/sec")},min:1,max:120,onChange:t})]})},R=function(){return Object(j.jsx)(s.a.Header,{children:Object(j.jsxs)(_.b,{children:[Object(j.jsx)(L,{}),Object(j.jsx)(T,{}),Object(j.jsx)(c.a,{disabled:!0,children:"Custom Array"}),Object(j.jsx)(U,{}),Object(j.jsx)(B,{})]})})},W=r(119),k=function(){var e=Object(S.c)(),t=e.selectedAlgorithm,r=e.algorithmNames,n=Object(S.b)().selectAlgorithm;return Object(j.jsx)(W.a,{className:"algorithm-selector",value:t,onChange:n,children:r.map((function(e){return Object(j.jsx)(W.a.Option,{value:e,children:d(e)},e)}))})},K=r(73),q=function(e){var t=e.height,r=e.color;return Object(j.jsx)("div",{className:"bar",style:{height:t,backgroundColor:r}})},N=i.a.memo(q),z=function(e){var t=e.array,r=e.points,n=function(e,t){var r=Object(u.a)(e,2),n=r[0],i=r[1],a=Object(u.a)(t,2),o=a[0],s=a[1];return function(e){var t=o+(e-n)*(s-o)/(i-n);return Math.round(t)}}([Math.min.apply(Math,Object(K.a)(t)),Math.max.apply(Math,Object(K.a)(t))],[10,600]);return Object(j.jsx)("div",{className:"visualizer-canvas",style:{height:600},children:t.map((function(e,t){return Object(j.jsx)(N,{height:n(e),color:r[t]||"blue"},e)}))})},F=function(){var e=O(),t=e.array,r=e.points;return Object(j.jsx)("div",{children:Object(j.jsx)(z,{array:t,points:r})})},J=r(95),G=r.n(J),H=(r(112),r(113),function(e){var t=e.value,r=e.onChange;return Object(j.jsx)(G.a,{mode:"javascript",theme:"monokai",value:t,onChange:r,width:"100%",height:"80vh",showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}),Z=function(){var e=Object(S.c)().algorithmString,t=Object(S.b)().setAlgorithmString;return Object(j.jsx)(H,{value:e,onChange:t})},$=function(){return Object(j.jsxs)(s.a.Sider,{collapsible:!0,collapsedWidth:0,width:"40%",children:[Object(j.jsx)(k,{}),Object(j.jsx)(Z,{})]})},Q=function(){return Object(j.jsx)(s.a.Content,{children:Object(j.jsx)(F,{})})},V=function(){return Object(j.jsxs)(s.a,{children:[Object(j.jsx)(R,{}),Object(j.jsxs)(s.a,{children:[Object(j.jsx)($,{}),Object(j.jsx)(Q,{})]})]})},X=function(e){var t=e.children;return Object(j.jsx)(x,{children:Object(j.jsx)(S.a,{children:Object(j.jsx)(w,{children:Object(j.jsx)(f,{children:t})})})})},Y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,124)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),n(e),i(e),a(e),o(e)}))};r(114),r(115);o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(X,{children:Object(j.jsx)(V,{})})}),document.getElementById("root")),Y()},68:function(e,t,r){"use strict";r.r(t),r.d(t,"selectionSort",(function(){return n})),r.d(t,"bubbleSort",(function(){return i})),r.d(t,"mergeSort",(function(){return a}));var n="\nsortingAlgorithm = function* (arr) {\n  const n = arr.length;\n\n  for (let i = 0; i < n; i++) {\n    // Finding the smallest number in the subarray\n    let min = i;\n    for (let j = i + 1; j < n; j++) {\n      if (arr[j] < arr[min]) {\n        min = j;\n      }\n\n      yield { i, j };\n    }\n\n    if (min != i) {\n      // Swapping the elements\n      const tmp = arr[i];\n      arr[i] = arr[min];\n      arr[min] = tmp;\n    }\n  }\n};\n",i="\nsortingAlgorithm = function* (arr) {\n  const n = arr.length;\n  let swapped;\n\n  for (let i = 0; i < n - 1; i++) {\n    swapped = false;\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        // Swapping the elements\n        const tmp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = tmp;\n        swapped = true;\n      }\n\n      yield {i, j1: j, j2: j+1};\n    }\n\n    if (swapped == false) break;\n  }\n};\n",a="\nfunction* mergeArray(arr, start, mid, end) {\n  let start2 = mid + 1;\n\n  // If the direct merge is already sorted\n  if (arr[mid] <= arr[start2]) {\n    return;\n  }\n\n  // Two pointers to maintain start\n  // of both arrays to merge\n  while (start <= mid && start2 <= end) {\n    // If element 1 is in right place\n    if (arr[start] <= arr[start2]) {\n      start++;\n    } else {\n      const value = arr[start2];\n      let index = start2;\n\n      // Shift all the elements between element 1\n      // element 2, right by 1.\n      while (index != start) {\n        arr[index] = arr[index - 1];\n        index--;\n      }\n      arr[start] = value;\n\n      // Update all the pointers\n      start++;\n      mid++;\n      start2++;\n      yield { start, mid };\n    }\n  }\n}\n\nfunction* sort(arr, l, r) {\n  if (l < r) {\n    const m = Math.floor(l + (r - l) / 2);\n\n    yield* sort(arr, l, m);\n    yield* sort(arr, m + 1, r);\n\n    yield* mergeArray(arr, l, m, r);\n  }\n}\n\nsortingAlgorithm = function* (arr) {\n  yield* sort(arr, 0, arr.length - 1);\n};\n"},74:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return useAlgorithmState})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useAlgorithmActions})),__webpack_require__.d(__webpack_exports__,"a",(function(){return AlgorithmProvider}));var _Users_andrei_Documents_personal_sorting_visualizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),algorithms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(68),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__),AlgorithmStateContext=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(void 0),AlgorithmActionsContext=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(void 0),algorithmNames=Object.keys(algorithms__WEBPACK_IMPORTED_MODULE_2__),AlgorithmProvider=function AlgorithmProvider(_ref){var children=_ref.children,_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("mergeSort"),_useState2=Object(_Users_andrei_Documents_personal_sorting_visualizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),selectedAlgorithm=_useState2[0],setSelectedAlgorithm=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(algorithms__WEBPACK_IMPORTED_MODULE_2__.mergeSort),_useState4=Object(_Users_andrei_Documents_personal_sorting_visualizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),algorithmString=_useState4[0],setAlgorithmString=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(),_useState6=Object(_Users_andrei_Documents_personal_sorting_visualizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),algorithm=_useState6[0],setAlgorithm=_useState6[1],selectAlgorithm=function(e){setSelectedAlgorithm(e),setAlgorithmString(algorithms__WEBPACK_IMPORTED_MODULE_2__[e])},compileAlgorithm=function compileAlgorithm(){var sortingAlgorithm;eval(algorithmString),setAlgorithm((function(){return sortingAlgorithm}))};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AlgorithmStateContext.Provider,{value:{algorithm:algorithm,algorithmString:algorithmString,algorithmNames:algorithmNames,selectedAlgorithm:selectedAlgorithm},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AlgorithmActionsContext.Provider,{value:{setAlgorithmString:setAlgorithmString,compileAlgorithm:compileAlgorithm,selectAlgorithm:selectAlgorithm},children:children})})},useAlgorithmState=function(){var e=react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(AlgorithmStateContext);if(void 0===e)throw new Error("useAlgorithmState must be used within a AlgorithmProvider");return e},useAlgorithmActions=function(){var e=react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(AlgorithmActionsContext);if(void 0===e)throw new Error("useAlgorithmActions must be used within a AlgorithmProvider");return e}}},[[116,1,2]]]);
//# sourceMappingURL=main.a8324618.chunk.js.map
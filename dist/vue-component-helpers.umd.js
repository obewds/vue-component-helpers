(function(o,d){typeof exports=="object"&&typeof module!="undefined"?d(exports):typeof define=="function"&&define.amd?define(["exports"],d):(o=typeof globalThis!="undefined"?globalThis:o||self,d(o.VueComponentHelpers={}))})(this,function(o){"use strict";function d(e,t){let r=[];return e&&e[t]&&e[t].palettes&&(r=Object.keys(e[t].palettes).map(a=>a)),r}function c(e,t,r){var a,l,s,n;return e&&((n=(s=(l=(a=e==null?void 0:e.bg)==null?void 0:a.palettes)==null?void 0:l[t])==null?void 0:s.colors)==null?void 0:n[r])?e.bg.palettes[t].colors[r]:""}function y(e,t,r){var a,l,s,n;return e&&((n=(s=(l=(a=e==null?void 0:e.border)==null?void 0:a.palettes)==null?void 0:l[t])==null?void 0:s.colors)==null?void 0:n[r])?e.border.palettes[t].colors[r]:""}function m(e,t,r){var a,l,s,n;return e&&((n=(s=(l=(a=e==null?void 0:e.text)==null?void 0:a.palettes)==null?void 0:l[t])==null?void 0:s.colors)==null?void 0:n[r])?e.text.palettes[t].colors[r]:""}var k=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],f=["body","head","html","noscript","script","slot","template"];function u(e){const t=e.toLowerCase();return k.includes(t)?(console.error("The <"+e+"> tag is an Empty Element. Since Empty Elements do not have child node capabilities, they are not available as tags for this component."),!0):!1}function x(e){const t=e.toLowerCase(),r=u(t),a=i(t);return!!(r||a)}function i(e){const t=e.toLowerCase();return f.includes(t)?(console.error("The <"+e+"> element tag is not supported for rendering by this component."),!0):!1}var v=Object.defineProperty,g=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&p(e,r,t[r]);if(g)for(var r of g(t))E.call(t,r)&&p(e,r,t[r]);return e},h={console:{colors:{default:"text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",error:"text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",primary:"text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",secondary:"text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",success:"text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"}}},w={default:{colors:{default:"",error:"text-white bg-rose-500 dark:bg-rose-600",primary:"text-white bg-blue-500 dark:bg-blue-600",secondary:"text-white bg-violet-500 dark:bg-violet-600",success:"text-white bg-green-500 dark:bg-green-600"}}},O={monochromatic:{colors:{default:"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",error:"text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",primary:"text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",secondary:"text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",success:"text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"}}},_={pastel:{colors:{default:"text-black bg-gray-100 dark:bg-gray-200",error:"text-black bg-rose-200 dark:bg-rose-300",primary:"text-black bg-blue-200 dark:bg-blue-300",secondary:"text-black bg-violet-200 dark:bg-violet-300",success:"text-black bg-green-300 dark:bg-green-400"}}},T={default:{colors:{"":"",default:"border-gray-200 dark:border-gray-600",error:"border-rose-600 dark:border-rose-300",primary:"border-blue-600 dark:border-blue-300",secondary:"border-violet-600 dark:border-violet-300",success:"border-green-600 dark:border-green-300"}}},C={default:{colors:{default:"",error:"text-rose-500 dark:text-rose-300",primary:"text-blue-500 dark:text-blue-300",secondary:"text-violet-500 dark:text-violet-300",success:"text-green-600 dark:text-green-300"}}};let B={anchor:{base:""},bg:{base:"",palettes:b(b(b(b({},h),w),O),_)},border:{base:"",palettes:b({},T)},text:{base:"",palettes:b({},C)}};function j(e,t){let r=Object.keys(t).length>0?t:B,a=[];return r&&r[e]&&r[e].palettes&&(a=Object.keys(r[e].palettes).map(l=>l)),a}o.extractValidPalettes=d,o.getBgPaletteColor=c,o.getBorderPaletteColor=y,o.getTextPaletteColor=m,o.isEmptyElement=u,o.isEmptyOrUnsupportedElement=x,o.isUnsupportedElement=i,o.validPaletteProps=j,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

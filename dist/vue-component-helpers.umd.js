(function(s,u){typeof exports=="object"&&typeof module!="undefined"?u(exports):typeof define=="function"&&define.amd?define(["exports"],u):(s=typeof globalThis!="undefined"?globalThis:s||self,u(s.VueComponentHelpers={}))})(this,function(s){"use strict";function u(e,t){let r=[];return e&&e[t]&&e[t].palettes&&(r=Object.keys(e[t].palettes).map(n=>n)),r}function m(e,t,r){var n,l,o,a;return e&&((a=(o=(l=(n=e==null?void 0:e.bg)==null?void 0:n.palettes)==null?void 0:l[t])==null?void 0:o.colors)==null?void 0:a[r])?e.bg.palettes[t].colors[r]:""}function d(e,t,r){var n,l,o,a;return e&&((a=(o=(l=(n=e==null?void 0:e.border)==null?void 0:n.palettes)==null?void 0:l[t])==null?void 0:o.colors)==null?void 0:a[r])?e.border.palettes[t].colors[r]:""}function E(e,t,r){var n,l,o,a;return e&&((a=(o=(l=(n=e==null?void 0:e.text)==null?void 0:n.palettes)==null?void 0:l[t])==null?void 0:o.colors)==null?void 0:a[r])?e.text.palettes[t].colors[r]:""}var c=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],b=["body","head","html","noscript","script","slot","template"];function p(e){const t=e.toLowerCase();return c.includes(t)?(console.error("The <"+e+"> tag is an Empty Element. Since Empty Elements do not have child node capabilities, they are not available as tags for this component."),!0):!1}function y(e){const t=e.toLowerCase(),r=p(t),n=i(t);return!!(r||n)}function i(e){const t=e.toLowerCase();return b.includes(t)?(console.error("The <"+e+"> element tag is not supported for rendering by this component."),!0):!1}s.extractValidPalettes=u,s.getBgPaletteColor=m,s.getBorderPaletteColor=d,s.getTextPaletteColor=E,s.isEmptyElement=p,s.isEmptyOrUnsupportedElement=y,s.isUnsupportedElement=i,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

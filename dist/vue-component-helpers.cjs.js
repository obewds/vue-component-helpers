"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var i=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],l=["body","head","html","noscript","script","slot","template"];function s(e){const t=e.toLowerCase();return i.includes(t)?(console.error("The <"+e+"> tag is an Empty Element. Since Empty Elements do not have child node capabilities, they are not available as tags for this component."),!0):!1}function p(e){const t=e.toLowerCase(),n=s(t),o=r(t);return!!(n||o)}function r(e){const t=e.toLowerCase();return l.includes(t)?(console.error("The <"+e+"> element tag is not supported for rendering by this component."),!0):!1}exports.isEmptyElement=s;exports.isEmptyOrUnsupportedElement=p;exports.isUnsupportedElement=r;

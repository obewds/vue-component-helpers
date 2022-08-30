import { emptyElementTags as a, unsupportedElementTags as u } from "@obewds/vue-validators";
import m from "deepmerge";
import { ObewdsTwConfig as p } from "@obewds/obewds-tw-config";
function y(e, t) {
  let r = [];
  return e && e[t] && e[t].palettes && (r = Object.keys(e[t].palettes).map((s) => s)), r;
}
function h(e, t, r) {
  var s, n, l, o;
  return e && ((o = (l = (n = (s = e == null ? void 0 : e.bg) == null ? void 0 : s.palettes) == null ? void 0 : n[t]) == null ? void 0 : l.colors) == null ? void 0 : o[r]) ? e.bg.palettes[t].colors[r] : "";
}
function f(e, t, r) {
  var s, n, l, o;
  return e && ((o = (l = (n = (s = e == null ? void 0 : e.border) == null ? void 0 : s.palettes) == null ? void 0 : n[t]) == null ? void 0 : l.colors) == null ? void 0 : o[r]) ? e.border.palettes[t].colors[r] : "";
}
function T(e, t, r) {
  var s, n, l, o;
  return e && ((o = (l = (n = (s = e == null ? void 0 : e.text) == null ? void 0 : s.palettes) == null ? void 0 : n[t]) == null ? void 0 : l.colors) == null ? void 0 : o[r]) ? e.text.palettes[t].colors[r] : "";
}
function i(e) {
  const t = e.toLowerCase();
  return a.includes(t) ? (console.error("The <" + e + "> tag is an Empty Element. Since Empty Elements do not have child node capabilities, they are not available as tags for this component."), !0) : !1;
}
function C(e) {
  const t = e.toLowerCase(), r = i(t), s = d(t);
  return !!(r || s);
}
function d(e) {
  const t = e.toLowerCase();
  return u.includes(t) ? (console.error("The <" + e + "> element tag is not supported for rendering by this component."), !0) : !1;
}
function O(e) {
  return Object.keys(e).length > 0 ? m(p, e) : p;
}
function P(e, t) {
  let r = Object.keys(t).length > 0 ? t : p, s = [];
  return r && r[e] && r[e].palettes && (s = Object.keys(r[e].palettes).map((n) => n)), s;
}
export {
  y as extractValidPalettes,
  h as getBgPaletteColor,
  f as getBorderPaletteColor,
  T as getTextPaletteColor,
  i as isEmptyElement,
  C as isEmptyOrUnsupportedElement,
  d as isUnsupportedElement,
  O as mergeAppConfigWithDefaults,
  P as validPaletteProps
};

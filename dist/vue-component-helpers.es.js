import { emptyElementTags, unsupportedElementTags } from "@obewds/vue-validators";
import merge from "deepmerge";
import { ObewdsTwConfig } from "@obewds/obewds-tw-config";
function extractValidPalettes(tw, key) {
  let output = [];
  if (tw && tw[key] && tw[key].palettes) {
    output = Object.keys(tw[key].palettes).map((key2) => key2);
  }
  return output;
}
function getBgPaletteColor(config, palette, color) {
  var _a, _b, _c, _d;
  if (config && ((_d = (_c = (_b = (_a = config == null ? void 0 : config.bg) == null ? void 0 : _a.palettes) == null ? void 0 : _b[palette]) == null ? void 0 : _c.colors) == null ? void 0 : _d[color])) {
    return config.bg.palettes[palette].colors[color];
  } else {
    return "";
  }
}
function getBorderPaletteColor(config, palette, color) {
  var _a, _b, _c, _d;
  if (config && ((_d = (_c = (_b = (_a = config == null ? void 0 : config.border) == null ? void 0 : _a.palettes) == null ? void 0 : _b[palette]) == null ? void 0 : _c.colors) == null ? void 0 : _d[color])) {
    return config.border.palettes[palette].colors[color];
  } else {
    return "";
  }
}
function getTextPaletteColor(config, palette, color) {
  var _a, _b, _c, _d;
  if (config && ((_d = (_c = (_b = (_a = config == null ? void 0 : config.text) == null ? void 0 : _a.palettes) == null ? void 0 : _b[palette]) == null ? void 0 : _c.colors) == null ? void 0 : _d[color])) {
    return config.text.palettes[palette].colors[color];
  } else {
    return "";
  }
}
function isEmptyElement(tag) {
  const t = tag.toLowerCase();
  const isEmptyElement2 = emptyElementTags.includes(t);
  if (isEmptyElement2) {
    console.error("The <" + tag + "> tag is an Empty Element. Since Empty Elements do not have child node capabilities, they are not available as tags for this component.");
    return true;
  } else {
    return false;
  }
}
function isEmptyOrUnsupportedElement(tag) {
  const t = tag.toLowerCase();
  const isTagEmpty = isEmptyElement(t);
  const isTagUnsupported = isUnsupportedElement(t);
  return isTagEmpty || isTagUnsupported ? true : false;
}
function isUnsupportedElement(tag) {
  const t = tag.toLowerCase();
  const isUnsupportedElement2 = unsupportedElementTags.includes(t);
  if (isUnsupportedElement2) {
    console.error("The <" + tag + "> element tag is not supported for rendering by this component.");
    return true;
  } else {
    return false;
  }
}
function mergeAppConfigWithDefaults(appTwConfig) {
  return Object.keys(appTwConfig).length > 0 ? merge(ObewdsTwConfig, appTwConfig) : ObewdsTwConfig;
}
function validPaletteProps(key, twConfig) {
  let tw = Object.keys(twConfig).length > 0 ? twConfig : ObewdsTwConfig;
  let array = [];
  if (tw && tw[key] && tw[key].palettes) {
    array = Object.keys(tw[key].palettes).map((key2) => key2);
  }
  return array;
}
export { extractValidPalettes, getBgPaletteColor, getBorderPaletteColor, getTextPaletteColor, isEmptyElement, isEmptyOrUnsupportedElement, isUnsupportedElement, mergeAppConfigWithDefaults, validPaletteProps };

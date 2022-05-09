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
var emptyElementTags = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
var unsupportedElementTags = [
  "body",
  "head",
  "html",
  "noscript",
  "script",
  "slot",
  "template"
];
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
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function(key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error("first argument should be an array");
  }
  return array.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var twBgPaletteConsole = {
  "console": {
    colors: {
      "default": "text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
      "error": "text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
      "primary": "text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
      "secondary": "text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
      "success": "text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
    }
  }
};
var twBgPaletteDefault = {
  "default": {
    colors: {
      "default": "",
      "error": "text-white bg-rose-500 dark:bg-rose-600",
      "primary": "text-white bg-blue-500 dark:bg-blue-600",
      "secondary": "text-white bg-violet-500 dark:bg-violet-600",
      "success": "text-white bg-green-500 dark:bg-green-600"
    }
  }
};
var twBgPaletteMonochromatic = {
  "monochromatic": {
    colors: {
      "default": "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
      "error": "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",
      "primary": "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",
      "secondary": "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",
      "success": "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"
    }
  }
};
var twBgPalettePastel = {
  "pastel": {
    colors: {
      "default": "text-black bg-gray-100 dark:bg-gray-200",
      "error": "text-black bg-rose-200 dark:bg-rose-300",
      "primary": "text-black bg-blue-200 dark:bg-blue-300",
      "secondary": "text-black bg-violet-200 dark:bg-violet-300",
      "success": "text-black bg-green-300 dark:bg-green-400"
    }
  }
};
var twBorderPaletteDefault = {
  "default": {
    colors: {
      "": "",
      "default": "border-gray-200 dark:border-gray-600",
      "error": "border-rose-600 dark:border-rose-300",
      "primary": "border-blue-600 dark:border-blue-300",
      "secondary": "border-violet-600 dark:border-violet-300",
      "success": "border-green-600 dark:border-green-300"
    }
  }
};
var twTextPaletteDefault = {
  "default": {
    colors: {
      "default": "",
      "error": "text-rose-500 dark:text-rose-300",
      "primary": "text-blue-500 dark:text-blue-300",
      "secondary": "text-violet-500 dark:text-violet-300",
      "success": "text-green-600 dark:text-green-300"
    }
  }
};
let ObewdsTwConfig = {
  anchor: {
    base: ""
  },
  bg: {
    base: "",
    palettes: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, twBgPaletteConsole), twBgPaletteDefault), twBgPaletteMonochromatic), twBgPalettePastel)
  },
  border: {
    base: "",
    palettes: __spreadValues({}, twBorderPaletteDefault)
  },
  text: {
    base: "",
    palettes: __spreadValues({}, twTextPaletteDefault)
  }
};
function mergeAppConfigWithDefaults(appTwConfig) {
  return Object.keys(appTwConfig).length > 0 ? cjs(ObewdsTwConfig, appTwConfig) : ObewdsTwConfig;
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

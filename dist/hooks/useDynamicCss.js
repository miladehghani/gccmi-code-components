"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDynamicCSS = useDynamicCSS;
var _react = require("react");
function useDynamicCSS(cssText) {
  (0, _react.useEffect)(function () {
    // Create a style element
    var styleElement = document.createElement("style");
    styleElement.type = "text/css";

    // Append the CSS text
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = cssText; // For IE support
    } else {
      styleElement.appendChild(document.createTextNode(cssText));
    }

    // Append to head
    document.head.appendChild(styleElement);

    // Cleanup function to remove the style when the component unmounts
    return function () {
      document.head.removeChild(styleElement);
    };
  }, [cssText]); // Re-run if cssText changes
}
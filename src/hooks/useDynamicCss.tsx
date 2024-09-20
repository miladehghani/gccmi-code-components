"use client";
import { useEffect } from "react";

export function useDynamicCSS(cssText) {
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement("style");
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
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [cssText]); // Re-run if cssText changes
}

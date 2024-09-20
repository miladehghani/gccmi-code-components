import { useEffect } from "react";

export function useLoadCSSFile(fileUrl) {
  useEffect(() => {
    const loadCSS = async () => {
      try {
        // Fetch the remote CSS file
        const response = await fetch(fileUrl);
        const cssText = await response.text();

        // Create a style element
        const style = document.createElement("style");
        style.innerHTML = cssText;

        // Append the style element to the document head
        document.head.appendChild(style);
      } catch (error) {
        console.error("Failed to load CSS file:", error);
      }
    };

    loadCSS();
  }, []);
}

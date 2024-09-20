import { useEffect } from "react";

export function useLoadJSFile(scriptUrl, callback) {
  useEffect(() => {
    const loadScript = async () => {
      try {
        // Create a style element
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        script.onload = callback;

        // Append the style element to the document head
        document.head.prepend(script);
      } catch (error) {
        console.error("Failed to load JS file:", error);
      }
    };

    loadScript();
  }, []);
}

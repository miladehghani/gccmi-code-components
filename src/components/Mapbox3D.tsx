"use client";
import { useRef, useEffect } from "react";
import { addPropertyControls, ControlType } from "framer";
import { useMeasuredSize } from "https://framer.com/m/framer/useMeasuredSize.js";
import mapboxgl from "https://cdn.jsdelivr.net/npm/mapbox-gl@3.4.0/+esm";

/**
 * @framerIntrinsicWidth 400
 * @framerIntrinsicHeight 300
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Mapbox3D({
  style,
  locations,
  accessToken,
  animationDuration,
}) {
  mapboxgl.accessToken = accessToken;

  const map = useRef(null);
  const mapContainer = useRef(null);
  const size = useMeasuredSize(mapContainer);
  const width = size?.width ? size.width : 400;
  const height = size?.height ? size.height : 300;

  useEffect(() => {
    const loadCSS = async () => {
      try {
        // Fetch the remote CSS file
        const response = await fetch(
          "https://cdn.jsdelivr.net/npm/mapbox-gl@3.4.0/dist/mapbox-gl.css"
        );
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

  const getBoundingBox = ({ west, east, north, south }, padding) => {
    // bounding box (southwest corner, northeast corner)
    return [
      [+west - padding, +south - padding],
      [+east + padding, +north + padding],
    ];
  };

  useEffect(() => {
    let bounds = undefined;
    if (locations && locations.length > 0) {
      bounds = getBoundingBox(locations[0].position, 5);
    }
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      bounds,
      style: "mapbox://styles/mapbox/light-v11", // default style
    });
    map.current.on("load", (e) => {
      locations.forEach((location) => {
        const { west, east, north, south } = location.position;
        const coordinates = [
          [+west, +north],
          [+east, +north],
          [+east, +south],
          [+west, +south],
        ];

        location.images.forEach((image, index) => {
          const sourceId = `source-${index}`;
          const layerId = `layer-${index}`;
          map.current.addSource(sourceId, {
            type: "image",
            url: image,
            coordinates,
          });
          map.current.addLayer({
            id: layerId,
            type: "raster",
            source: sourceId,
            paint: {
              "raster-fade-duration": 0,
              "raster-opacity": 0,
            },
          });
          map.current.fitBounds(getBoundingBox(location.position, 0.1), {
            duration: animationDuration,
          });
          animateOpacity(map.current, layerId, 1, 3000, index * 1000);
        });
      });
    });
  }, [locations]);

  useEffect(() => {
    if (map.current) {
      map.current.resize();
    }
  }, [width, height]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        ...style,
      }}
    />
  );
}

// Helper function to animate opacity
function animateOpacity(map, layerId, targetOpacity, duration, delay) {
  setTimeout(() => {
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      map.setPaintProperty(layerId, "raster-opacity", progress * targetOpacity);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, delay);
}

Mapbox3D.defaultProps = {
  accessToken:
    "pk.eyJ1IjoiM3NpZGVkY3ViZSIsImEiOiJjam55amZrdjIwaWY3M3FueDAzZ3ZjeGR2In0.DhSsxs-8XhbTgoVmFcs94Q",
  locations: [],
};

addPropertyControls(Mapbox3D, {
  accessToken: {
    type: ControlType.String,
    title: "Token",
    displayTextArea: true,
  },
  animationDuration: {
    type: ControlType.Number,
    title: "Initial Animation Duration",
    defaultValue: 3000,
  },
  locations: {
    type: ControlType.Array,
    title: "Locations",
    control: {
      type: ControlType.Object,
      controls: {
        position: {
          type: ControlType.Object,
          controls: {
            north: { type: ControlType.String },
            west: { type: ControlType.String },
            east: { type: ControlType.String },
            south: { type: ControlType.String },
          },
        },
        images: {
          type: ControlType.Array,
          control: { type: ControlType.Image },
        },
      },
    },
  },
});

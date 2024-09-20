"use client";
import { useRef, useEffect } from "react";
import { addPropertyControls, ControlType } from "framer";
import { useMeasuredSize } from "https://framer.com/m/framer/useMeasuredSize.js";
import mapboxgl from "https://cdn.jsdelivr.net/npm/mapbox-gl@3.4.0/+esm";
import { useLoadCSSFile } from "./useLoadCSSFile.tsx";
import { renderToString } from "react-dom/server";
import { useDynamicCSS } from "./useDynamicCSS.tsx";

/**
 * @framerIntrinsicWidth 400
 * @framerIntrinsicHeight 300
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function MapboxWithMarkers({
  mapSettings,
  style,
  animation,
  stats,
  children,
}) {
  mapboxgl.accessToken = mapSettings.accessToken;
  const map = useRef(null);
  const currentMarkerIndex = useRef(0);
  const previousMarkerIndex = useRef(0);
  const mapContainer = useRef(null);
  const size = useMeasuredSize(mapContainer);
  const width = size?.width ? size.width : 400;
  const height = size?.height ? size.height : 300;

  const markerPopupTipOffset = 75;
  useLoadCSSFile(
    "https://cdn.jsdelivr.net/npm/mapbox-gl@3.4.0/dist/mapbox-gl.css"
  );
  useDynamicCSS(`
        .mapboxgl-popup-content {
            padding: 0!important;
        }

        .mapboxgl-popup {           
            opacity: 0!important;
        }

        .fade-animation {
            transition: opacity 0.75s ease-in-out;            
        }
        
        .fade-in {
            opacity: 1!important;
        }
 
        .mapboxgl-popup-anchor-top .mapboxgl-popup-tip{
            top: -${markerPopupTipOffset}px!important;
        }

        .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip{
            top: 100%!important;
        }

        .mapboxgl-popup-anchor-right .mapboxgl-popup-tip{
            top: calc(50% + 2px)!important;
            left: 100%!important;
            height: 2px!important;
            width: ${markerPopupTipOffset + 4}px!important;
        }       

        .mapboxgl-popup-anchor-left .mapboxgl-popup-tip{
            top: calc(50% + 2px)!important;
            right: 100%!important;
            height: 2px!important;
            width: ${markerPopupTipOffset + 4}px!important;
        }               
            
        .mapboxgl-popup-tip {
            position: absolute!important;
            height: ${markerPopupTipOffset + 4}px!important;
            left:50%!important;
            width: 2px!important;
            background: #22263C!important;
            border: none!important;
        }

        .marker {
            height: 8px;
            width: 8px;            
            border-radius: 999999px;
            background: #22263C;
        }
    `);

  const handleMarkersAnimation = (markers, popups) => {
    if (markers.length === 0) return;

    popups[0].getElement().classList.add("fade-animation");
    popups[0].getElement().classList.toggle("fade-in");

    // Initialize marker indices
    previousMarkerIndex.current = 0;
    currentMarkerIndex.current = 1;

    setInterval(() => {
      // Toggle popups for current and previous markers
      const prevIndex = previousMarkerIndex.current;
      const currIndex = currentMarkerIndex.current;

      popups[prevIndex].getElement().classList.add("fade-animation");
      popups[prevIndex].getElement().classList.toggle("fade-in");

      popups[currIndex].getElement().classList.add("fade-animation");
      popups[currIndex].getElement().classList.toggle("fade-in");

      // Update marker indices
      previousMarkerIndex.current = (prevIndex + 1) % markers.length;
      currentMarkerIndex.current = (currIndex + 1) % markers.length;
    }, animation.delay * 1000);
  };

  useEffect(() => {
    const { lat, lng } = mapSettings.initialCenter;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [lat, lng], // initial center
      zoom: mapSettings.initalZoom, // initial zoom
      style: mapSettings.style, // default style
      interactive: mapSettings.interactive,
    });
    map.current.on("load", (e) => {
      const markers = [];
      const popups = [];

      stats.map((stat) => {
        const { lat, lng } = stat.coordinate;

        let html = renderToString(children);
        html = html.replace("{{title}}", stat.title);
        html = html.replace("{{subtitle}}", stat.subtitle);
        html = html.replace("{{country}}", "Nigeria");
        html = html.replace("{{link_to}}", stat.link);

        const markerEl = document.createElement("div");

        markerEl.className = "marker";
        const popup = new mapboxgl.Popup({
          offset: markerPopupTipOffset,
          closeButton: false,
          closeOnClick: false,
          className: `fade-animation`,
        }).setHTML(html);

        const marker = new mapboxgl.Marker({
          element: markerEl,
          anchor: "top",
          clickTolerance: 0,
        })
          .setLngLat([lat, lng])
          .setPopup(popup)
          .addTo(map.current);

        marker.togglePopup();

        popups.push(popup);
        markers.push(marker);
      });
      handleMarkersAnimation(markers, popups);
    });
  }, [stats]);

  useEffect(() => {
    if (map.current) {
      map.current.resize();
    }
  }, [width, height]);

  return (
    <>
      <div
        style={{
          visibility: "hidden",
          position: "absolute",
        }}
        dangerouslySetInnerHTML={{
          __html: renderToString(children),
        }}
      />
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
    </>
  );
}

MapboxWithMarkers.defaultProps = {};

addPropertyControls(MapboxWithMarkers, {
  mapSettings: {
    type: ControlType.Object,
    controls: {
      interactive: { type: ControlType.Boolean },
      initialCenter: {
        type: ControlType.Object,
        controls: {
          lat: {
            type: ControlType.String,
            defaultValue: "-73.4953686",
          },
          lng: {
            type: ControlType.String,
            defaultValue: "13.9817973",
          },
        },
      },
      initalZoom: {
        type: ControlType.Number,
        defaultValue: 3.5,
        min: 1,
        max: 18,
      },
      accessToken: {
        type: ControlType.String,
        title: "Token",
        displayTextArea: true,
        defaultValue:
          "pk.eyJ1IjoiM3NpZGVkY3ViZSIsImEiOiJjam55amZrdjIwaWY3M3FueDAzZ3ZjeGR2In0.DhSsxs-8XhbTgoVmFcs94Q",
      },
      style: {
        type: ControlType.String,
        title: "MapBox Style",
        displayTextArea: true,
        defaultValue: "mapbox://styles/mapbox/light-v11",
      },
    },
  },
  children: {
    type: ControlType.ComponentInstance,
    title: "Popup Component",
  },
  animation: {
    type: ControlType.Object,
    controls: {
      delay: {
        type: ControlType.Number,
        min: 1,
        max: 10,
      },
    },
  },
  stats: {
    type: ControlType.Array,
    title: "Stats",
    control: {
      type: ControlType.Object,
      controls: {
        coordinate: {
          type: ControlType.Object,
          controls: {
            lat: { type: ControlType.String },
            lng: { type: ControlType.String },
          },
        },
        title: { type: ControlType.String },
        subtitle: { type: ControlType.String },

        link: { type: ControlType.Link },
      },
    },
  },
});

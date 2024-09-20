"use client";
import { useRef, useEffect, useState } from "react";
import { useMeasuredSize } from "https://framer.com/m/framer/useMeasuredSize.js";
import mapboxgl from "mapbox-gl";
import { useLoadCSSFile } from "../hooks/useLoadCSSFile.tsx";
import { useMapStatContext } from "../providers/MapStatProvider.tsx";
import { useLoadJSFile } from "../hooks/useLoadJSFile.tsx";
import countriesBbox from "./countriesBbox.tsx";

const countriesISO_A2 = [
  "AG",
  "BS",
  "BB",
  "BZ",
  "CO",
  "CR",
  "CU",
  "DM",
  "DO",
  "SV",
  "GD",
  "GT",
  "GY",
  "HT",
  "HN",
  "JM",
  "MX",
  "NI",
  "PA",
  "KN",
  "LC",
  "VC",
  "SR",
  "TT",
  "VE",
];

/**
 * @framerIntrinsicWidth 400
 * @framerIntrinsicHeight 300
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function MapboxWithCountries({ mapSettings, style }) {
  const sourceLayer = "country_boundaries";
  const sourceName = "countries";
  const layerName = "country-boundaries";
  const [geocoderScriptLoaded, setGeocoderScroptLoaded] = useState(false);
  const [turfScriptLoaded, setTurfScriptLoaded] = useState(false);

  mapboxgl.accessToken = mapSettings.accessToken;
  const { setSelected } = useMapStatContext();
  const map = useRef(null);
  const mapContainer = useRef(null);
  const size = useMeasuredSize(mapContainer);
  const width = size?.width ? size.width : 400;
  const height = size?.height ? size.height : 300;

  useLoadJSFile(
    "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js",
    () => setGeocoderScroptLoaded(true)
  );

  useLoadJSFile("https://cdn.jsdelivr.net/npm/@turf/turf@6/turf.min.js", () =>
    setTurfScriptLoaded(true)
  );

  useLoadCSSFile(
    "https://cdn.jsdelivr.net/npm/mapbox-gl@3.4.0/dist/mapbox-gl.css"
  );
  useLoadCSSFile(
    "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css"
  );

  useEffect(() => {
    if (!geocoderScriptLoaded || !turfScriptLoaded) return;

    const { lat, lng } = mapSettings.initialCenter;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [lat, lng], // initial center
      zoom: mapSettings.initalZoom, // initial zoom
      style: mapSettings.style, // default style
      interactive: mapSettings.interactive,
    });
    if (mapSettings.hasSearchbar) {
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        countries: countriesISO_A2.join(","),
        mapboxgl: mapboxgl,
        types: "country",
        marker: false,
        flyTo: true,
      });
      geocoder.on("result", function (e) {
        console.log(e);
        const ISO_A2 = (
          e.result.properties.short_code ||
          e.result.context.reverse()[0]?.short_code
        )
          ?.toUpperCase()
          .split("-")[0];

        const features = map.current.querySourceFeatures(sourceName, {
          sourceLayer: sourceLayer,
          filter: ["==", ["get", "iso_3166_1"], ISO_A2],
        });
        const selectedCountryProperties = features?.[0]?.properties;
        setSelected(selectedCountryProperties);
        map.current.setFeatureState(
          {
            source: sourceName,
            sourceLayer: sourceLayer,
            id: features?.[0].id,
          },
          {
            state: "selected",
          }
        );
      });
      map.current.addControl(geocoder);
    }
    map.current.on("load", (e) => {
      // addGeoServerData(map.current, "GCCMI", "rcp45-ssp2-2050-damage")

      map.current.addSource(sourceName, {
        type: "vector",
        url: "mapbox://mapbox.country-boundaries-v1",
        "source-layer": sourceLayer,
      });
      map.current.addLayer(
        {
          id: layerName,
          filter: ["in", "iso_3166_1", ...countriesISO_A2],
          source: sourceName,
          "source-layer": sourceLayer,
          type: "fill",
          paint: {
            "fill-color": [
              "case",
              ["==", ["feature-state", "state"], "selected"],
              "blue",
              ["==", ["feature-state", "state"], "hover"],
              "green",
              "#292929",
            ],
            "fill-opacity": 0.1, // Fill opacity (optional)
          },
        },
        "country-label"
      );

      // Change border color on hover
      map.current.on("mousemove", layerName, function (e) {
        const currentFeature = e.features[0];
        const hoveredCountryName = e.features[0].properties.ISO_A2;
        const features = map.current.queryRenderedFeatures({
          layers: [layerName], // Replace with your actual layer ID
        });
        map.current.getCanvas().style.cursor = "pointer"; // Change cursor on hover
        features.forEach((feature) => {
          map.current.setFeatureState(
            {
              source: sourceName,
              sourceLayer: sourceLayer,
              id: feature.id,
            },
            {
              state:
                currentFeature.state?.state === "selected" &&
                feature.id === currentFeature.id
                  ? "selected"
                  : feature.id === currentFeature.id
                  ? "hover"
                  : "",
            }
          );
        });
      });

      map.current.on("click", layerName, (e) => {
        e.preventDefault();
        const feature = e.features[0];

        const selectedCountryProperties = feature.properties;
        setSelected(selectedCountryProperties);
        const bound = countriesBbox[selectedCountryProperties.iso_3166_1];
        map.current.fitBounds(bound, {
          padding: 100, // Optional padding around the country
          duration: 1000, // Animation duration in ms
        });
        map.current.setFeatureState(
          {
            source: sourceName,
            sourceLayer: sourceLayer,
            id: e.features[0].id,
          },
          {
            state: "selected",
          }
        );
      });
    });
  }, [mapSettings, geocoderScriptLoaded, turfScriptLoaded]);

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

function addGeoServerData(map, workspaceName, layerName) {
  map.addSource("wms-source", {
    type: "raster",
    tiles: [
      `https://staging.geoserver.gccmi.3sidedcu.be/geoserver/${workspaceName}/wms?service=WMS&version=1.1.0&request=GetMap&layers=${workspaceName}:${layerName}&bbox={bbox-epsg-3857}&width=256&height=256&srs=EPSG:3857&styles=&format=image/png&TRANSPARENT=true`,
    ],
    tileSize: 256,
  });

  map.addLayer({
    id: "wms-layer",
    type: "raster",
    source: "wms-source",
    paint: {},
  });

  // Optional: Control the order of layers
  const layers = map.getStyle().layers;
  const labelLayerId = layers.find(
    (layer) => layer.type === "symbol" && layer.layout["text-field"]
  )?.id;

  // Move the WMS layer below labels if needed
  if (labelLayerId) {
    map.moveLayer("wms-layer", labelLayerId);
  }
}

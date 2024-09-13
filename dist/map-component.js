"use client";
import { useRef, useEffect } from "react";
import { addPropertyControls, ControlType } from "framer";
import { useMeasuredSize } from "https://framer.com/m/framer/useMeasuredSize.js";
import { useGlobalContext } from "./global-provider.js";
import mapboxgl from "https://cdn.jsdelivr.net/npm/mapbox-gl@3.4.0/+esm";

var LocationType;
(function (LocationType) {
  LocationType["City"] = "City";
  LocationType["Custom"] = "Custom";
})(LocationType || (LocationType = {}));

const cityCoordinates = {
  "Amsterdam, Netherlands": {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 12,
  },
  "Austin, USA": { latitude: 30.267153, longitude: -97.743057, zoom: 10 },
  "Barcelona, Spain": { latitude: 41.385063, longitude: 2.173404 },
  "Beijing, China": { latitude: 39.904202, longitude: 116.407394 },
  "Chicago, USA": { latitude: 41.878113, longitude: -87.629799 },
  "Detroit, USA": { latitude: 42.331429, longitude: -83.045753 },
  "Dubai, UAE": { latitude: 25.204849, longitude: 55.270782 },
  "Helsinki, Findland": { latitude: 60.169857, longitude: 24.938379 },
  "Hong Kong, China": { latitude: 22.280308, longitude: 114.177007 },
  "Las Vegas, USA": { latitude: 36.169941, longitude: -115.139832 },
  "London, United Kingdom": { latitude: 51.507351, longitude: -0.127758 },
  "Los Angles, USA": { latitude: 34.052235, longitude: -118.243683 },
  "New York City, USA": { latitude: 40.712776, longitude: -74.005974 },
  "Paris, France": { latitude: 48.856613, longitude: 2.352222 },
  "Portland, USA": { latitude: 45.51223, longitude: -122.658722 },
  "Rome, Italy": { latitude: 41.902782, longitude: 12.496365 },
  "San Francisco, USA": { latitude: 37.774929, longitude: -122.419418 },
  "Seattle, USA": { latitude: 47.606209, longitude: -122.332069 },
  "Shanghai, China": { latitude: 31.230391, longitude: 121.473701 },
  Singapore: { latitude: 1.28431, longitude: 103.869666 },
  "Sydney, Australia": { latitude: -33.87276, longitude: 151.20534 },
  "Tokyo, Japan": { latitude: 35.687427, longitude: 139.786879 },
  "Vienna, Austria": { latitude: 48.208176, longitude: 16.373819 },
  "Washington DC, USA": { latitude: 38.893, longitude: -77.032 },
};

const Cities = {
  coordinates: cityCoordinates,
  names: Object.keys(cityCoordinates).sort(),
};

const optionsAndTitles = (obj) => {
  return Object.keys(obj)
    .map((key) => {
      return {
        key,
        value: obj[key],
      };
    })
    .reduce(
      (lists, kvp) => {
        lists.titles.push(kvp.key);
        lists.options.push(kvp.value);
        return lists;
      },
      { titles: [], options: [], dict: obj }
    );
};

const coreStyles = optionsAndTitles({
  Streets: "mapbox://styles/mapbox/streets-v11",
  Outdoors: "mapbox://styles/mapbox/outdoors-v11",
  Light: "mapbox://styles/mapbox/light-v10",
  Dark: "mapbox://styles/mapbox/dark-v10",
  Satellite: "mapbox://styles/mapbox/satellite-v9",
  "Satellite Streets": "mapbox://styles/mapbox/satellite-streets-v11",
  "Navigation Day": "mapbox://styles/mapbox/navigation-day-v1",
  "Navigation Night": "mapbox://styles/mapbox/navigation-night-v1",
});

/**
 * @framerIntrinsicWidth 400
 * @framerIntrinsicHeight 300
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Mapbox(props) {
  const map = useRef(null);
  const mapContainer = useRef(null);
  const { setData } = useGlobalContext();
  mapboxgl.accessToken = props.accessToken;
  const size = useMeasuredSize(mapContainer);
  const width = size?.width ? size.width : 400;
  const height = size?.height ? size.height : 300;

  const {
    style,
    locationType,
    city,
    longitude,
    latitude,
    zoom,
    anonymousStyle,
  } = props;

  const center =
    locationType === LocationType.City
      ? [Cities.coordinates[city].longitude, Cities.coordinates[city].latitude]
      : [longitude, latitude];

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

  useEffect(() => {
    if (map.current) {
      map.current.jumpTo({ center: center });
      return;
    } // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: anonymousStyle,
      center: center,
      zoom: 2,
    });
    map.current.on("click", (e) => {
      console.log(e.lngLat);
      setData(e.lngLat);
    });
    map.current.on("load", (e) => {
      console.log("map loaded");
      Object.entries(cityCoordinates).forEach(([key, val]) => {
        const id = key.replace(/\s/g, "");
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<h3>${key}</h3><button id="${id}">view data</button>`
        );

        new mapboxgl.Marker()
          .setLngLat([val.longitude, val.latitude])
          .setPopup(popup)
          .addTo(e.target);
      });
    });
  }, []);

  useEffect(() => {
    if (map.current) {
      map.current.resize();
    }
  }, [width, height]);

  useEffect(() => {
    if (map.current) {
      map.current.jumpTo({ center: center, zoom: 2 });
      return;
    }
  }, [center, zoom]);

  useEffect(() => {
    if (map.current) {
      map.current.setStyle(anonymousStyle);
      return;
    }
  }, [anonymousStyle]);

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

Mapbox.defaultProps = {
  locationType: LocationType.City,
  city: "Amsterdam, Netherlands",
  latitude: 52.375,
  longitude: 4.9,
  zoom: 12,
  showLocationText: false,
};

addPropertyControls(Mapbox, {
  accessTokenURL: {
    type: ControlType.String,
    title: "Access token URL",
    placeholder: "from your Mapbox account",
    hidden(props) {
      return !!props.accessToken;
    },
  },
  accessToken: {
    type: ControlType.String,
    title: "Token",
    displayTextArea: true,
  },
  locationType: {
    title: "Location",
    type: ControlType.Enum,
    options: [LocationType.City, LocationType.Custom],
    optionTitles: ["Pick a city", "Enter numbers"],
  },
  city: {
    type: ControlType.Enum,
    options: Cities.names,
    title: "City",
    hidden: (props) => props.locationType === LocationType.Custom,
  },
  longitude: {
    type: ControlType.Number,
    min: -180,
    max: 180,
    step: 0.001,
    title: "Longitude",
    hidden: (props) => props.locationType === LocationType.City,
  },
  latitude: {
    type: ControlType.Number,
    min: -90,
    max: 90,
    step: 0.001,
    title: "Latitude",
    hidden: (props) => props.locationType === LocationType.City,
  },
  zoom: {
    type: ControlType.Number,
    min: 0,
    max: 22,
    title: "Zoom",
    step: 0.1,
    hidden: (props) => props.locationType === LocationType.City,
  },
  anonymousStyle: {
    type: ControlType.Enum,
    options: coreStyles.options,
    optionTitles: coreStyles.titles,
    title: "Map Style",
  },
});

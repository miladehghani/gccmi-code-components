"use strict";
"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapboxWithCountries;
var _react = require("react");
var _useMeasuredSize = require("https://framer.com/m/framer/useMeasuredSize.js");
var _mapboxGl = _interopRequireDefault(require("mapbox-gl"));
var _useLoadCSSFile = require("../hooks/useLoadCSSFile.tsx");
var _MapStatProvider = require("../providers/MapStatProvider.tsx");
var _useLoadJSFile = require("../hooks/useLoadJSFile.tsx");
var _countriesBbox = _interopRequireDefault(require("./countriesBbox.tsx"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var countriesISO_A2 = ["AG", "BS", "BB", "BZ", "CO", "CR", "CU", "DM", "DO", "SV", "GD", "GT", "GY", "HT", "HN", "JM", "MX", "NI", "PA", "KN", "LC", "VC", "SR", "TT", "VE"];

/**
 * @framerIntrinsicWidth 400
 * @framerIntrinsicHeight 300
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
function MapboxWithCountries(_ref) {
  var mapSettings = _ref.mapSettings,
    style = _ref.style;
  var sourceLayer = "country_boundaries";
  var sourceName = "countries";
  var layerName = "country-boundaries";
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    geocoderScriptLoaded = _useState2[0],
    setGeocoderScroptLoaded = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    turfScriptLoaded = _useState4[0],
    setTurfScriptLoaded = _useState4[1];
  _mapboxGl["default"].accessToken = mapSettings.accessToken;
  var _useMapStatContext = (0, _MapStatProvider.useMapStatContext)(),
    setSelected = _useMapStatContext.setSelected;
  var map = (0, _react.useRef)(null);
  var mapContainer = (0, _react.useRef)(null);
  var size = (0, _useMeasuredSize.useMeasuredSize)(mapContainer);
  var width = size !== null && size !== void 0 && size.width ? size.width : 400;
  var height = size !== null && size !== void 0 && size.height ? size.height : 300;
  (0, _useLoadJSFile.useLoadJSFile)("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js", function () {
    return setGeocoderScroptLoaded(true);
  });
  (0, _useLoadJSFile.useLoadJSFile)("https://cdn.jsdelivr.net/npm/@turf/turf@6/turf.min.js", function () {
    return setTurfScriptLoaded(true);
  });
  (0, _useLoadCSSFile.useLoadCSSFile)("https://cdn.jsdelivr.net/npm/mapbox-gl@3.4.0/dist/mapbox-gl.css");
  (0, _useLoadCSSFile.useLoadCSSFile)("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css");
  (0, _react.useEffect)(function () {
    if (!geocoderScriptLoaded || !turfScriptLoaded) return;
    var _mapSettings$initialC = mapSettings.initialCenter,
      lat = _mapSettings$initialC.lat,
      lng = _mapSettings$initialC.lng;
    map.current = new _mapboxGl["default"].Map({
      container: mapContainer.current,
      center: [lat, lng],
      // initial center
      zoom: mapSettings.initalZoom,
      // initial zoom
      style: mapSettings.style,
      // default style
      interactive: mapSettings.interactive
    });
    if (mapSettings.hasSearchbar) {
      var geocoder = new MapboxGeocoder({
        accessToken: _mapboxGl["default"].accessToken,
        countries: countriesISO_A2.join(","),
        mapboxgl: _mapboxGl["default"],
        types: "country",
        marker: false,
        flyTo: true
      });
      geocoder.on("result", function (e) {
        var _ref2, _e$result$context$rev, _features$;
        console.log(e);
        var ISO_A2 = (_ref2 = e.result.properties.short_code || ((_e$result$context$rev = e.result.context.reverse()[0]) === null || _e$result$context$rev === void 0 ? void 0 : _e$result$context$rev.short_code)) === null || _ref2 === void 0 ? void 0 : _ref2.toUpperCase().split("-")[0];
        var features = map.current.querySourceFeatures(sourceName, {
          sourceLayer: sourceLayer,
          filter: ["==", ["get", "iso_3166_1"], ISO_A2]
        });
        var selectedCountryProperties = features === null || features === void 0 || (_features$ = features[0]) === null || _features$ === void 0 ? void 0 : _features$.properties;
        setSelected(selectedCountryProperties);
        map.current.setFeatureState({
          source: sourceName,
          sourceLayer: sourceLayer,
          id: features === null || features === void 0 ? void 0 : features[0].id
        }, {
          state: "selected"
        });
      });
      map.current.addControl(geocoder);
    }
    map.current.on("load", function (e) {
      // addGeoServerData(map.current, "GCCMI", "rcp45-ssp2-2050-damage")

      map.current.addSource(sourceName, {
        type: "vector",
        url: "mapbox://mapbox.country-boundaries-v1",
        "source-layer": sourceLayer
      });
      map.current.addLayer({
        id: layerName,
        filter: ["in", "iso_3166_1"].concat(countriesISO_A2),
        source: sourceName,
        "source-layer": sourceLayer,
        type: "fill",
        paint: {
          "fill-color": ["case", ["==", ["feature-state", "state"], "selected"], "blue", ["==", ["feature-state", "state"], "hover"], "green", "#292929"],
          "fill-opacity": 0.1 // Fill opacity (optional)
        }
      }, "country-label");

      // Change border color on hover
      map.current.on("mousemove", layerName, function (e) {
        var currentFeature = e.features[0];
        var hoveredCountryName = e.features[0].properties.ISO_A2;
        var features = map.current.queryRenderedFeatures({
          layers: [layerName] // Replace with your actual layer ID
        });
        map.current.getCanvas().style.cursor = "pointer"; // Change cursor on hover
        features.forEach(function (feature) {
          var _currentFeature$state;
          map.current.setFeatureState({
            source: sourceName,
            sourceLayer: sourceLayer,
            id: feature.id
          }, {
            state: ((_currentFeature$state = currentFeature.state) === null || _currentFeature$state === void 0 ? void 0 : _currentFeature$state.state) === "selected" && feature.id === currentFeature.id ? "selected" : feature.id === currentFeature.id ? "hover" : ""
          });
        });
      });
      map.current.on("click", layerName, function (e) {
        e.preventDefault();
        var feature = e.features[0];
        var selectedCountryProperties = feature.properties;
        setSelected(selectedCountryProperties);
        var bound = _countriesBbox["default"][selectedCountryProperties.iso_3166_1];
        map.current.fitBounds(bound, {
          padding: 100,
          // Optional padding around the country
          duration: 1000 // Animation duration in ms
        });
        map.current.setFeatureState({
          source: sourceName,
          sourceLayer: sourceLayer,
          id: e.features[0].id
        }, {
          state: "selected"
        });
      });
    });
  }, [mapSettings, geocoderScriptLoaded, turfScriptLoaded]);
  (0, _react.useEffect)(function () {
    if (map.current) {
      map.current.resize();
    }
  }, [width, height]);
  return /*#__PURE__*/React.createElement("div", {
    ref: mapContainer,
    style: _objectSpread({
      width: "100%",
      height: "100%",
      overflow: "hidden",
      position: "relative"
    }, style)
  });
}
function addGeoServerData(map, workspaceName, layerName) {
  var _layers$find;
  map.addSource("wms-source", {
    type: "raster",
    tiles: ["https://staging.geoserver.gccmi.3sidedcu.be/geoserver/".concat(workspaceName, "/wms?service=WMS&version=1.1.0&request=GetMap&layers=").concat(workspaceName, ":").concat(layerName, "&bbox={bbox-epsg-3857}&width=256&height=256&srs=EPSG:3857&styles=&format=image/png&TRANSPARENT=true")],
    tileSize: 256
  });
  map.addLayer({
    id: "wms-layer",
    type: "raster",
    source: "wms-source",
    paint: {}
  });

  // Optional: Control the order of layers
  var layers = map.getStyle().layers;
  var labelLayerId = (_layers$find = layers.find(function (layer) {
    return layer.type === "symbol" && layer.layout["text-field"];
  })) === null || _layers$find === void 0 ? void 0 : _layers$find.id;

  // Move the WMS layer below labels if needed
  if (labelLayerId) {
    map.moveLayer("wms-layer", labelLayerId);
  }
}
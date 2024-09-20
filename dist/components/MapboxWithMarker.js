"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapboxWithMarkers;
var _react = require("react");
var _framer = require("framer");
var _useMeasuredSize = require("https://framer.com/m/framer/useMeasuredSize.js");
var _esm = _interopRequireDefault(require("https://cdn.jsdelivr.net/npm/mapbox-gl@3.4.0/+esm"));
var _useLoadCSSFile = require("./useLoadCSSFile.tsx");
var _server = require("react-dom/server");
var _useDynamicCSS = require("./useDynamicCSS.tsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @framerIntrinsicWidth 400
 * @framerIntrinsicHeight 300
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
function MapboxWithMarkers(_ref) {
  var mapSettings = _ref.mapSettings,
    style = _ref.style,
    animation = _ref.animation,
    stats = _ref.stats,
    children = _ref.children;
  _esm["default"].accessToken = mapSettings.accessToken;
  var map = (0, _react.useRef)(null);
  var currentMarkerIndex = (0, _react.useRef)(0);
  var previousMarkerIndex = (0, _react.useRef)(0);
  var mapContainer = (0, _react.useRef)(null);
  var size = (0, _useMeasuredSize.useMeasuredSize)(mapContainer);
  var width = size !== null && size !== void 0 && size.width ? size.width : 400;
  var height = size !== null && size !== void 0 && size.height ? size.height : 300;
  var markerPopupTipOffset = 75;
  (0, _useLoadCSSFile.useLoadCSSFile)("https://cdn.jsdelivr.net/npm/mapbox-gl@3.4.0/dist/mapbox-gl.css");
  (0, _useDynamicCSS.useDynamicCSS)("\n        .mapboxgl-popup-content {\n            padding: 0!important;\n        }\n\n        .mapboxgl-popup {           \n            opacity: 0!important;\n        }\n\n        .fade-animation {\n            transition: opacity 0.75s ease-in-out;            \n        }\n        \n        .fade-in {\n            opacity: 1!important;\n        }\n \n        .mapboxgl-popup-anchor-top .mapboxgl-popup-tip{\n            top: -".concat(markerPopupTipOffset, "px!important;\n        }\n\n        .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip{\n            top: 100%!important;\n        }\n\n        .mapboxgl-popup-anchor-right .mapboxgl-popup-tip{\n            top: calc(50% + 2px)!important;\n            left: 100%!important;\n            height: 2px!important;\n            width: ").concat(markerPopupTipOffset + 4, "px!important;\n        }       \n\n        .mapboxgl-popup-anchor-left .mapboxgl-popup-tip{\n            top: calc(50% + 2px)!important;\n            right: 100%!important;\n            height: 2px!important;\n            width: ").concat(markerPopupTipOffset + 4, "px!important;\n        }               \n            \n        .mapboxgl-popup-tip {\n            position: absolute!important;\n            height: ").concat(markerPopupTipOffset + 4, "px!important;\n            left:50%!important;\n            width: 2px!important;\n            background: #22263C!important;\n            border: none!important;\n        }\n\n        .marker {\n            height: 8px;\n            width: 8px;            \n            border-radius: 999999px;\n            background: #22263C;\n        }\n    "));
  var handleMarkersAnimation = function handleMarkersAnimation(markers, popups) {
    if (markers.length === 0) return;
    popups[0].getElement().classList.add("fade-animation");
    popups[0].getElement().classList.toggle("fade-in");

    // Initialize marker indices
    previousMarkerIndex.current = 0;
    currentMarkerIndex.current = 1;
    setInterval(function () {
      // Toggle popups for current and previous markers
      var prevIndex = previousMarkerIndex.current;
      var currIndex = currentMarkerIndex.current;
      popups[prevIndex].getElement().classList.add("fade-animation");
      popups[prevIndex].getElement().classList.toggle("fade-in");
      popups[currIndex].getElement().classList.add("fade-animation");
      popups[currIndex].getElement().classList.toggle("fade-in");

      // Update marker indices
      previousMarkerIndex.current = (prevIndex + 1) % markers.length;
      currentMarkerIndex.current = (currIndex + 1) % markers.length;
    }, animation.delay * 1000);
  };
  (0, _react.useEffect)(function () {
    var _mapSettings$initialC = mapSettings.initialCenter,
      lat = _mapSettings$initialC.lat,
      lng = _mapSettings$initialC.lng;
    map.current = new _esm["default"].Map({
      container: mapContainer.current,
      center: [lat, lng],
      // initial center
      zoom: mapSettings.initalZoom,
      // initial zoom
      style: mapSettings.style,
      // default style
      interactive: mapSettings.interactive
    });
    map.current.on("load", function (e) {
      var markers = [];
      var popups = [];
      stats.map(function (stat) {
        var _stat$coordinate = stat.coordinate,
          lat = _stat$coordinate.lat,
          lng = _stat$coordinate.lng;
        var html = (0, _server.renderToString)(children);
        html = html.replace("{{title}}", stat.title);
        html = html.replace("{{subtitle}}", stat.subtitle);
        html = html.replace("{{country}}", "Nigeria");
        html = html.replace("{{link_to}}", stat.link);
        var markerEl = document.createElement("div");
        markerEl.className = "marker";
        var popup = new _esm["default"].Popup({
          offset: markerPopupTipOffset,
          closeButton: false,
          closeOnClick: false,
          className: "fade-animation"
        }).setHTML(html);
        var marker = new _esm["default"].Marker({
          element: markerEl,
          anchor: "top",
          clickTolerance: 0
        }).setLngLat([lat, lng]).setPopup(popup).addTo(map.current);
        marker.togglePopup();
        popups.push(popup);
        markers.push(marker);
      });
      handleMarkersAnimation(markers, popups);
    });
  }, [stats]);
  (0, _react.useEffect)(function () {
    if (map.current) {
      map.current.resize();
    }
  }, [width, height]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      visibility: "hidden",
      position: "absolute"
    },
    dangerouslySetInnerHTML: {
      __html: (0, _server.renderToString)(children)
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: mapContainer,
    style: _objectSpread({
      width: "100%",
      height: "100%",
      overflow: "hidden",
      position: "relative"
    }, style)
  }));
}
MapboxWithMarkers.defaultProps = {};
(0, _framer.addPropertyControls)(MapboxWithMarkers, {
  mapSettings: {
    type: _framer.ControlType.Object,
    controls: {
      interactive: {
        type: _framer.ControlType.Boolean
      },
      initialCenter: {
        type: _framer.ControlType.Object,
        controls: {
          lat: {
            type: _framer.ControlType.String,
            defaultValue: "-73.4953686"
          },
          lng: {
            type: _framer.ControlType.String,
            defaultValue: "13.9817973"
          }
        }
      },
      initalZoom: {
        type: _framer.ControlType.Number,
        defaultValue: 3.5,
        min: 1,
        max: 18
      },
      accessToken: {
        type: _framer.ControlType.String,
        title: "Token",
        displayTextArea: true,
        defaultValue: "pk.eyJ1IjoiM3NpZGVkY3ViZSIsImEiOiJjam55amZrdjIwaWY3M3FueDAzZ3ZjeGR2In0.DhSsxs-8XhbTgoVmFcs94Q"
      },
      style: {
        type: _framer.ControlType.String,
        title: "MapBox Style",
        displayTextArea: true,
        defaultValue: "mapbox://styles/mapbox/light-v11"
      }
    }
  },
  children: {
    type: _framer.ControlType.ComponentInstance,
    title: "Popup Component"
  },
  animation: {
    type: _framer.ControlType.Object,
    controls: {
      delay: {
        type: _framer.ControlType.Number,
        min: 1,
        max: 10
      }
    }
  },
  stats: {
    type: _framer.ControlType.Array,
    title: "Stats",
    control: {
      type: _framer.ControlType.Object,
      controls: {
        coordinate: {
          type: _framer.ControlType.Object,
          controls: {
            lat: {
              type: _framer.ControlType.String
            },
            lng: {
              type: _framer.ControlType.String
            }
          }
        },
        title: {
          type: _framer.ControlType.String
        },
        subtitle: {
          type: _framer.ControlType.String
        },
        link: {
          type: _framer.ControlType.Link
        }
      }
    }
  }
});
"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withUseStat_stat_1 = withUseStat_stat_1;
exports.withUseStat_stat_2 = withUseStat_stat_2;
var _MapStatProvider = require("./MapStatProvider.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function withUseStat_stat_1(Component) {
  return function (props) {
    var _useMapStatContext = (0, _MapStatProvider.useMapStatContext)(),
      data = _useMapStatContext.data;
    console.log("withUseStat_title", data);
    console.log(props);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      text: (data === null || data === void 0 ? void 0 : data.stat_1) || props.text,
      to: (data === null || data === void 0 ? void 0 : data.stat_1) || props.to
    }));
  };
}
function withUseStat_stat_2(Component) {
  return function (props) {
    var _useMapStatContext2 = (0, _MapStatProvider.useMapStatContext)(),
      data = _useMapStatContext2.data;
    console.log("withUseStat_subtitle", data);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      text: (data === null || data === void 0 ? void 0 : data.stat_1) || props.text,
      to: (data === null || data === void 0 ? void 0 : data.stat_1) || props.to
    }));
  };
}
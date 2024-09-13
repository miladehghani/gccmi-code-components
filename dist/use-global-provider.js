import { useGlobalContext } from "./global-provider.js";
import { jsx as _jsx } from "react/jsx-runtime";
export function withGlobalProvider(Component) {
  return (props) => {
    var _props$children;
    const { data } = useGlobalContext();
    console.log("use Global Provider", data);
    const i = Math.round(Math.random() * 10) % 2;
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      text: JSON.stringify(data),
      children:
        (_props$children = props.children) === null ||
        _props$children === void 0
          ? void 0
          : _props$children[i],
    });
  };
}

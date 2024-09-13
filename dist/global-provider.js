import { createContext, useContext, useState } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
export const Context = /*#__PURE__*/ createContext({
  data: undefined,
  setData: () => {},
});
export default function withGlobalProvider(Component) {
  return (props) => {
    const [data, setData] = useState();
    return /*#__PURE__*/ _jsx(Context.Provider, {
      value: {
        data,
        setData,
      },
      children: /*#__PURE__*/ _jsx(Component, {
        ...props,
      }),
    });
  };
}
export const useGlobalContext = () => useContext(Context);

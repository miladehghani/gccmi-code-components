import type { ComponentType } from "react";
import { createContext, useContext, useState } from "react";

export const Context = createContext<any>({
  data: undefined,
  setData: () => {},
});

export default function withGlobalProvider(Component): ComponentType {
  return (props) => {
    const [data, setData] = useState<any>();

    return (
      <Context.Provider value={{ data, setData }}>
        <Component {...props} />
      </Context.Provider>
    );
  };
}

export const useGlobalContext = () => useContext(Context);

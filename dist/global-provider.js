import { createContext, useContext, useState } from "react";

export const Context = createContext({
  data: undefined,
  setData: () => {},
});

export default function withGlobalProvider(Component) {
  return (props) => {
    const [data, setData] = useState();

    return (
      <Context.Provider value={{ data, setData }}>
        <Component {...props} />
      </Context.Provider>
    );
  };
}

export const useGlobalContext = () => useContext(Context);

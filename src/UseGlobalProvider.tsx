import type { ComponentType } from "react";
import { useGlobalContext } from "./GlobalProvider.tsx";

export function withGlobalProvider(Component): ComponentType {
  return (props) => {
    const { data } = useGlobalContext();
    console.log("use Global Provider", data);
    const i = Math.round(Math.random() * 10) % 2;

    return (
      <Component
        {...props}
        text={JSON.stringify(data)}
        children={props.children?.[i]}
      />
    );
  };
}

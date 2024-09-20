"use client";
import type { ComponentType } from "react";
import { useEffect } from "react";
import { useMapStatContext } from "./MapStatProvider.tsx";

export function withUseStat_stat_1(Component): ComponentType {
  return (props) => {
    const { data } = useMapStatContext();
    console.log("withUseStat_title", data);
    console.log(props);

    return (
      <Component
        {...props}
        text={data?.stat_1 || props.text}
        to={data?.stat_1 || props.to}
      />
    );
  };
}

export function withUseStat_stat_2(Component): ComponentType {
  return (props) => {
    const { data } = useMapStatContext();
    console.log("withUseStat_subtitle", data);

    return (
      <Component
        {...props}
        text={data?.stat_1 || props.text}
        to={data?.stat_1 || props.to}
      />
    );
  };
}

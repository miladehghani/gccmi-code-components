"use client"
import type { ComponentType } from "react"
import { createContext, useContext, useState } from "react"

export const MapStatContext = createContext<any>({
    data: undefined,
    setData: () => {},
})

export function withMapStatProvider(Component): ComponentType {
    return (props) => {
        const [data, setData] = useState<any>()
        console.log("withMapStateProvider", data, setData)

        return (
            <MapStatContext.Provider value={{ data, setData }}>
                <Component {...props} />
            </MapStatContext.Provider>
        )
    }
}

export const useMapStatContext = () => useContext(MapStatContext)

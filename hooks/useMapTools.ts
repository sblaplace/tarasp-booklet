import * as d3 from "d3";
import { useState, useEffect } from "react";

export const useMapTools = function () {
    // store loaded map data in a state
    const [mapData, setMapData]: [mapData: any, setMapData: any] = useState({
        cantonData: {},
        lineData: {},
        loading: true,
    });

    // only fetch map data once and create a tooltip
    useEffect(() => {
        const urls = ["data/swissBOUNDARIES3D_1_3_TLM_KANTONSGEBIET.geojson", "data/linie-mit-betriebspunkten.geojson"];
        Promise.all(urls.map(url => d3.json(url)))
            .then((geoJSONs) => {
                setMapData((prevState: any) => {
                    return { ...prevState, cantonData: geoJSONs[0], lineData: geoJSONs[1], loading: false };
                });
            })
            .catch((err) => {
                console.log("error occurred with loading map", err);
            });

        d3.select("body")
            .append("div")
            .attr("id", "tooltip")
            .attr("style", "position: absolute; opacity: 0");
    }, []);

    return { mapData };
};
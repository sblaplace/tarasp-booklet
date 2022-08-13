import * as d3 from "d3";
import { setMapProjection } from "../helpers/setMapProjection";
import { useMapTools } from "../hooks/useMapTools";
import Canton from "./Canton";
import TrainLine from './TrainLine';

export default function TrainMap(_props: any) {
    // step 1: load geoJSON and create tooltip
    const { mapData } = useMapTools();

    // render map only when map data is fully loaded
    if (!mapData.loading) {
        // step 2: render the regions
        // compute a path function based on correct projections that we will use later
        const path = d3.geoPath().projection(setMapProjection(mapData.cantonData));
        // for each geoJSON coordinate, compute and pass in the equivalent svg path
        const cantons = mapData.cantonData.features.map((data: any) =>
            <Canton
                key={data.properties.UUID}
                path={path(data)}
                tooltipData={data.properties["NAME"]}
            />);

        const lines = mapData.lineData.features.map((data: any) => {
            const bpuicString = new String(data.properties.bpuic);
            const lineString = new String(data.properties.linie);
            return (<TrainLine
                key={bpuicString.toString().concat(lineString.toString())}
                path={path(data)}
                tooltipData={data.properties["bezeichnung_offiziell"]}
            />);
        }
        )

        return (
            <div className="flex justify-content flex-col min-w-full min-h-screen">
                <h1 className="mx-auto text-2xl">Map of Train Routes</h1>
                <svg className="map-canvas min-h-screen mx-auto w-1/2 mt-20">
                    <g>{cantons}</g>
                    <g>{lines}</g>
                </svg>
            </ div>
        );
    } else {
        return <h1>Loading...</h1>;
    }
}
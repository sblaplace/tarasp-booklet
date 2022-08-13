import {
    handleMouseOver,
    handleMouseOut,
    handleMouseMove,
} from "../helpers/handleTooltip";

export default function Canton(props: any) {
    const { path, tooltipData } = props;

    //each path defines the shape of a region in the map
    return (
        <path
            className="path fill-zinc-200 hover:fill-cyan-200 stroke-gray-800"
            d={path}
            onMouseOver={() => {
                handleMouseOver(tooltipData);
            }}
            onMouseOut={handleMouseOut}
            onMouseMove={(event) => {
                handleMouseMove(event);
            }}
        />
    );
}
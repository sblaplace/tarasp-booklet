import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { GeoJSON } from 'react-leaflet/GeoJSON'
import { useEffect, useState } from 'react';

export default function TrainMap(_props: any): JSX.Element {
    /*const [lineStops, setLineStops] = useState([]);*/
    const [lines, setLines] = useState([]);

    useEffect(() => {
        /*         fetch("data/linie-mit-betriebspunkten.geojson").then(res => res.json()).then(setLineStops);*/
        fetch("data/linie-mit-polygon.geojson").then(res => res.json()).then(setLines);

    }, []);

    return (
        <MapContainer center={[46.826, 8.223]} zoom={8} scrollWheelZoom={false} className="min-w-full min-h-screen">
            <TileLayer
                attribution='<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors'
                url="https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=Xwcmvz6mMAgJtV3LsDRKyQ0V8si3G38gOJOUP3T6IHvyeTdPhvPc88IsupJm5t01"
            />
            {/*<GeoJSON key={lineStops} data={lineStops} style={{ "color": "#ff7800", "weight": 5, "opacity": 0.65 }}></GeoJSON>*/}
            <GeoJSON key={lines} data={lines} style={{ "color": "#ff7800", "weight": 5, "opacity": 0.65 }}></GeoJSON>
        </MapContainer>
    );
}
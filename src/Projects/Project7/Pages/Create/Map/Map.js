import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css';

const Mapme = ({height=300,width="100%",markersize=80,radius=0}) => {
  const customIcon = L.icon({ // استفاده از L.icon برای ایجاد آیکون
    iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
    iconSize: [markersize, markersize],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  return (
    <MapContainer
      center={[34.324142499507964, 47.0748327200603]}
      zoom={18}
      style={{ height: height, width: width ,borderRadius:radius,overflow:"hidden"}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={[34.324142499507964, 47.0748327200603]}>

      </Marker>
    </MapContainer>
  );
};

export default Mapme;

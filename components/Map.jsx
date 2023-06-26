import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

export default function Map({ searchResults }) {
  //Transform the search results object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewPort] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/saifq/clj8xd7xi00l201qhdhswcb6g"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
    >
      {searchResults.map((result) => (
        <Marker key={result.long} longitude={result.long} latitude={result.lat}>
          <p>📌</p>
        </Marker>
      ))}
    </ReactMapGL>
  );
}

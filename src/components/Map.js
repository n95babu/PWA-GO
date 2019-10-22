import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
import * as parkDate from "../data/bathroom-public.json";
import logo from '../assets/logo.png'

const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  margin: 10
};

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 40.730610,
    longitude: -73.935242,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  const [selectedPark, setSelectedPark] = useState(null);
  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      };
    };

    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/nbabu121/cjxlzp3ld17or1cmsl17fh34n"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }
          }
          trackUserLocation={true}
        />
        {parkDate.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img id="mapLogo" src={logo} alt="Bathroom" />
            </button>
          </Marker>
        ))};

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.ADDRESS}</p>

            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};
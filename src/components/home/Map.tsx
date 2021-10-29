import { Component, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import { MyCords, ReduxStore } from "../../types/storeType";
//
const Marker = ({ text }: any) => (
  <>
    <div className="pin"></div>
    <div className="pulse"></div>
  </>
);

const Map = () => {
  //
  const weather = useSelector((state: ReduxStore) => state.weather);
  const [Load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => setLoad(false), 1);
  }, [weather.oneday.coord.lat]);
  return (
    <div
      style={{
        height: "100%",
        minHeight: "12rem",
        width: "100%",
        border: "1px solid rgba(117, 117, 117, 0.2)",
        borderRadius: "15%",
        overflow: "hidden",
      }}
    >
      {!Load && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_MAPAPI!,
            language: "en",
            region: "US",
          }}
          defaultCenter={{
            lat: weather.oneday.coord.lat,
            lng: weather.oneday.coord.lon,
          }}
          defaultZoom={8}
        >
          <Marker
            lat={weather.oneday.coord.lat}
            lng={weather.oneday.coord.lon}
            text={weather.oneday.name}
          />
        </GoogleMapReact>
      )}
    </div>
  );
};

export default Map;

import { Component, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../types/storeType";
const Marker = ({ text }: any) => <div>{text}</div>;

const Map = () => {
  const weather = useSelector((state: ReduxStore) => state.weather);
  const [Load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => setLoad(false), 1);
  }, [weather.oneday.coord.lat]);
  return (
    <div style={{ height: "200px", width: "100%" }}>
      {!Load && (
        <GoogleMapReact
          bootstrapURLKeys={{
            // remove the key if you want to fork
            key: "",
            language: "en",
            region: "US",
          }}
          defaultCenter={{
            lat: weather.oneday.coord.lat,
            lng: weather.oneday.coord.lon,
          }}
          defaultZoom={10}
        >
          <Marker
            lat={weather.oneday.coord.lat}
            lng={weather.oneday.coord.lon}
            text="My Marker"
          />
        </GoogleMapReact>
      )}
    </div>
  );
};

export default Map;

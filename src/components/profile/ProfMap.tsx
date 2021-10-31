import { Component, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import { MyCords, ReduxStore } from "../../types/storeType";
import "./style.css";
//
const Marker = ({ text }: any) => (
  <>
    <div className="pin1"></div>
    <div className="pulse1"></div>
  </>
);
interface Types {
  lat: number | null;
  lon: number | null;
}

const ProfMap = ({ lat, lon }: Types) => {
  const weathCoord = useSelector((state: ReduxStore) => state.weather.mycord);

  //
  const weather = useSelector((state: ReduxStore) => state.weather);
  const [Load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => setLoad(false), 1);
  }, [weathCoord]);
  return (
    <>
      {lat && (
        <div
          style={{
            height: "15rem",
            width: "95%",
            border: "1px solid rgba(117, 117, 117, 0.2)",
            borderRadius: "2rem",
            overflow: "hidden",
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_MAPAPI!,
              language: "en",
              region: "US",
            }}
            defaultCenter={{
              lat: lat,
              lng: lon!,
            }}
            defaultZoom={9}
          >
            <Marker lat={lat} lng={lon} />
          </GoogleMapReact>
        </div>
      )}
    </>
  );
};

export default ProfMap;

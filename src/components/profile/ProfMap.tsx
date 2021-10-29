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
interface Types {
  cords: MyCords;
}

const ProfMap = ({ cords }: Types) => {
  const weathCoord = useSelector((state: ReduxStore) => state.weather.mycord);

  //
  const weather = useSelector((state: ReduxStore) => state.weather);
  const [Load, setLoad] = useState(false);

  useEffect(() => {
    console.log(weathCoord);
    setLoad(true);
    setTimeout(() => setLoad(false), 1);
  }, [weathCoord]);
  return (
    <>
      {!Load && (
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
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_MAPAPI!,
              language: "en",
              region: "US",
            }}
            defaultCenter={{
              lat: weathCoord.latitude!,
              lng: weathCoord.longitude!,
            }}
            defaultZoom={8}
          >
            {/* <Marker
              lat={weathCoord.latitude}
              lng={weathCoord.longitude}
              text={weather.oneday.name}
            /> */}
          </GoogleMapReact>
        </div>
      )}
    </>
  );
};

export default ProfMap;
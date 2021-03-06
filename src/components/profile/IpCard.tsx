import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteHistory, setSearch } from "../../redux/action/actions";
import { IpType } from "../../types/storeType";
import Weather from "../home/Weather";
import ProfMap from "./ProfMap";

function IpCard() {
  const weather = useSelector((state: any) => state.weather);
  const dispatch = useDispatch();
  const [IpLoc, setIpLoc] = useState<IpType>();
  //
  // const fetchIp = async () => {
  //   console.log("Ip");
  //   try {
  //     const res = await fetch(
  //       `https://api.ipdata.co?api-key=${process.env.REACT_APP_IPAPIKEY}`,
  //       { method: "GET", headers: { origin: "http://mywonderfulfrontend.com" } }
  //     );
  //     if (res.ok) {
  //       const data = await res.json();
  //       // setIpLoc(data);
  //       console.log(res);
  //     } else {
  //       console.log("Error 400");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchIp();
  // }, []);
  return (
    <div className="ipCard">
      {IpLoc ? (
        <>
          <div>
            <h5 className="text-muted"></h5>
            <span>
              {IpLoc.country_name}, {IpLoc.state}, {IpLoc.city}, {IpLoc.postal}
            </span>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <ProfMap lon={IpLoc.longitude} lat={IpLoc.latitude} />
          </div>
        </>
      ) : (
        <div>
          <div>
            <button
              className="navBtn"
              onClick={() => dispatch(deleteHistory())}
              style={{ color: "Brown", backgroundColor: "whitesmoke" }}
            >
              Delete history!
            </button>
          </div>
          <hr />
          <div>
            {weather.history &&
              weather.history.map((W: any) => (
                <div>
                  <div className="mx-auto">
                    <Link
                      to="/weather"
                      onClick={() => dispatch(setSearch(W.name))}
                      className=""
                    >
                      <h6>{W.name}</h6>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          {/* <h2 className="text-muted">No data!</h2> */}
        </div>
      )}
    </div>
  );
}
export default IpCard;

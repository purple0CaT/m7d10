import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteHistory } from "../../redux/action/actions";
import { IpType } from "../../types/storeType";
import ProfMap from "./ProfMap";

function IpCard() {
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
            <h5 className="text-muted">Your ip location:</h5>
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
            >
              Delete history!
            </button>
          </div>
          <h2 className="text-muted">No data!</h2>
        </div>
      )}
    </div>
  );
}
export default IpCard;

import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { clearCoord, setCoords } from "../../redux/action/actions";
import { ReduxStore } from "../../types/storeType";
import IpCard from "./IpCard";
import ProfMap from "./ProfMap";
import "./style.css";
interface Types extends RouteComponentProps {}

function Profile(props: any, { history }: Types) {
  const weathCoord = useSelector((state: ReduxStore) => state.weather.mycord);
  const user = useSelector((state: ReduxStore) => state.user);
  const dispatch = useDispatch();
  //
  const addCordinates = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(
        setCoords({
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        })
      );
    });
  };

  //
  useEffect(() => {
    if (!user.name) {
      history.push("/");
    }
  }, []);
  return (
    <Container>
      <br />

      <Row>
        <Col xs="12" md="6">
          <div className="profCard p-1 my-1  text-center">
            {weathCoord.latitude && (
              <>
                <div className="my-2">
                  <Link
                    className="navBtn"
                    to="/weather"
                    onClick={() =>
                      dispatch(
                        setCoords({
                          lon: weathCoord.longitude,
                          lat: weathCoord.latitude,
                        })
                      )
                    }
                  >
                    <span>Check the weather near me</span>
                  </Link>
                </div>
                <div className="d-flex justify-content-center my-2">
                  <ProfMap
                    lon={weathCoord.longitude}
                    lat={weathCoord.latitude}
                  />
                </div>
                <div className=" my-2">
                  <button
                    className="navBtn"
                    onClick={() => {
                      dispatch(clearCoord());
                    }}
                  >
                    Delete my curent location
                  </button>
                </div>
              </>
            )}
            {!weathCoord.latitude && (
              <div className="my-2">
                <button className="navBtn" onClick={() => addCordinates()}>
                  Add my curent loc
                </button>
              </div>
            )}
          </div>
        </Col>
        <Col>
          <IpCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;

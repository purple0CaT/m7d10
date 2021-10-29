import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { setCoords } from "../../redux/action/actions";
import { ReduxStore } from "../../types/storeType";
import ProfMap from "./ProfMap";

function Profile({ history }: RouteComponentProps) {
  const weathCoord = useSelector((state: ReduxStore) => state.weather.mycord);
  const user = useSelector((state: ReduxStore) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user.name) {
      history.push("/");
    }
  }, []);
  return (
    <Container>
      <Row>
        <Col xs="6">
          <div className="prof-card p-1 my-1">
            <div>
              <Link to="/" onClick={() => dispatch(setCoords(weathCoord))}>
                Check my curent loc
              </Link>
              <ProfMap cords={weathCoord} />
            </div>
            <div>Add my curent loc</div>
            <div>Delete my curent loc</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;

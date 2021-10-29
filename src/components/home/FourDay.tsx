import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../types/storeType";

function FourDay() {
  const weather = useSelector((state: ReduxStore) => state.weather);
  const dispatch = useDispatch();
  let as = weather.fourday.hourly;
  return (
    <Col xs="12">
      <Row>
        {" "}
        <Col>first</Col>{" "}
      </Row>{" "}
    </Col>
  );
}

export default FourDay;

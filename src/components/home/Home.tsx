import { Col, Container, Row } from "react-bootstrap";
import FourDay from "./FourDay";
import "./style.css";
import MainCard from "./MainCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoords } from "../../redux/action/actions";
import { ReduxStore } from "../../types/storeType";

function Home(props: any) {
  const dispatch = useDispatch();
  const weathCoord = useSelector((state: ReduxStore) => state.weather.mycord);
  //

  return (
    <Container>
      <br />
      <Row>
        <MainCard />
      </Row>
    </Container>
  );
}

export default Home;

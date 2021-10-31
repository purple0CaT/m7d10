import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./style.css";
import MainCard from "./MainCard";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../types/storeType";
import { runSearch } from "../../redux/action/actions";

function Weather() {
  const weather = useSelector((state: ReduxStore) => state.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(runSearch());
  }, []);

  return (
    <Container>
      <br />
      <Row>
        <MainCard />
        {weather.loading && (
          <div className="text-center w-100">
            <h1 className="text-muted">Search city</h1>
          </div>
        )}
      </Row>
    </Container>
  );
}

export default Weather;

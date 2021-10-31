import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import MainCard from "./MainCard";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../types/storeType";
import dateFormat from "dateformat";
import { FiNavigation2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { runSearch, setSearch } from "../../redux/action/actions";

function Home(props: any) {
  const weather = useSelector((state: ReduxStore) => state.weather);
  const dispatch = useDispatch();

  return (
    <Container>
      <br />
      <Row>
        {weather.history?.length > 0 ? (
          weather.history.map((W) => (
            <Col xs="6" md="3" className="my-1">
              <Link
                to="/weather"
                className="d-flex flex-column smallCard hoverCard"
                key={W.main.temp + W.dt}
                style={{ color: "unset " }}
                onClick={() => {
                  dispatch(setSearch(W.name));
                  // dispatch(runSearch());
                }}
              >
                <div>
                  <img
                    src={`https://openweathermap.org/img/wn/${W.weather[0].icon}@2x.png`}
                    alt=""
                    className="imageWeather"
                  />
                </div>
                <h5 className="m-0 text-muted">{W.name}</h5>
                <small>
                  {W.weather[0].main}, {W.weather[0].description}
                </small>
                <span className="text-muted font-weight-bold text-right">
                  {Math.floor(W.main.temp)}°C
                </span>
                <small>
                  <small className="text-muted font-weight-bold">
                    Feels like:
                  </small>
                  {Math.floor(W.main.feels_like)}°C
                </small>
                <small className="mr-2 my-1">
                  <small className="text-muted font-weight-bold">Min: </small>
                  {Math.floor(W.main.temp_min)}°C
                </small>
                <small>
                  <small className="text-muted font-weight-bold">Max: </small>
                  {Math.floor(W.main.temp_max)}°C
                </small>
                {/* WIND COL */}
                <div className="d-flex my-1 aling-items-between w-100">
                  <small>
                    <small className="text-muted font-weight-bold">
                      Wind:{" "}
                    </small>
                    {W.wind.speed}m/s{" "}
                  </small>
                  <div className="d-flex align-items-center justify-content-center compasSM ml-auto">
                    <FiNavigation2
                      style={{
                        transform: `rotate(${W.wind.deg}deg)`,
                      }}
                    />
                  </div>
                </div>
                <br />
                <div className="d-flex justify-content-between">
                  <span>{dateFormat(new Date(W.dt * 1000), "HH:MM ")}</span>
                  <span>{dateFormat(new Date(W.dt * 1000), "d mmm")}</span>
                </div>
              </Link>
            </Col>
          ))
        ) : (
          <div className="text-center w-100">
            <h1 className="text-muted">Search city</h1>
          </div>
        )}
      </Row>
    </Container>
  );
}

export default Home;

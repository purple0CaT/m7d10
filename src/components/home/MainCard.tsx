import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { runSearch } from "../../redux/action/actions";
import { ReduxStore } from "../../types/storeType";
import { FiNavigation2 } from "react-icons/fi";
import Map from "./Map";

function MainCard() {
  const [WeatherImg, setWeatherImg] = useState({
    state: "",
    colorOne: "",
    colorTwo: "",
  });
  const weather = useSelector((state: ReduxStore) => state.weather);
  const dispatch = useDispatch();
  //
  useEffect(() => {
    if (weather.oneday?.weather) {
      switch (weather.oneday.weather[0].main) {
        case "Clouds":
          setWeatherImg({
            state: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
            colorOne: "#ffffff",
            colorTwo: "#daddff",
          });
          break;
        case "Clear":
          setWeatherImg({
            state: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            colorOne: "#ffffff",
            colorTwo: "rgb(255, 234, 177)",
          });
          break;
        case "Rain":
          setWeatherImg({
            state: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
            colorOne: "#ffffff",
            colorTwo: "rgb(177, 217, 255)",
          });
          break;
        case "Snow":
          setWeatherImg({
            state: "https://ssl.gstatic.com/onebox/weather/64/snow.png",
            colorOne: "#ffffff",
            colorTwo: "rgb(215, 236, 255)",
          });
          break;
        case "Mist":
          setWeatherImg({
            state: "https://ssl.gstatic.com/onebox/weather/64/mist.png",
            colorOne: "#ffffff",
            colorTwo: "rgb(182, 182, 182)",
          });
          break;
        default:
          setWeatherImg({
            state: "",
            colorOne: "#ffffff",
            colorTwo: "",
          });
          break;
      }
    }
  }, [weather.oneday]);
  //
  useEffect(() => {
    if (weather.search.length > 2) {
      dispatch(runSearch());
    }
  }, [weather.search]);
  return (
    <Col xs="12">
      {weather.loading ? (
        <Row>
          <Col xs="8">
            <div
              className="d-flex justify-content-between mainCard p-2"
              style={{
                background: `linear-gradient(${WeatherImg.colorOne}, ${WeatherImg.colorTwo})`,
              }}
            >
              {/* LEFT COLUMN */}
              <div className="d-flex flex-column justify-content-between">
                {/* first col */}
                <div className="d-flex justify-content-between">
                  <img src={WeatherImg.state} alt="" className="imageWeather" />
                  <div className="d-flex flex-column text-left">
                    <h3>{weather.oneday.main.temp}°C</h3>
                    <span>
                      {weather.oneday.weather[0].main},{" "}
                      {weather.oneday.weather[0].description}
                    </span>
                  </div>
                </div>
                {/* MIN MAX COL*/}
                <br />
                <span>
                  <small className="text-muted font-weight-bold">
                    Feels like:
                  </small>
                  {weather.oneday.main.feels_like}°C
                </span>
                <div style={{ maxHeight: "5rem" }}>
                  <span className="mr-2 my-1">
                    <small className="text-muted font-weight-bold">Min: </small>
                    {weather.oneday.main.temp_min}°C
                  </span>
                  <span>
                    <small className="text-muted font-weight-bold">Max: </small>
                    {weather.oneday.main.temp_max}°C
                  </span>
                </div>
                {/* WIND COL */}
                <div className="d-flex my-1">
                  <span>
                    <small className="text-muted font-weight-bold">
                      Wind:{" "}
                    </small>{" "}
                    {weather.oneday.wind.speed}m/s
                  </span>
                  <div className="compass">
                    <FiNavigation2
                      style={{
                        transform: `rotate(${weather.oneday.wind.deg}deg)`,
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* CITy COLUMN */}
              <div className="text-right">
                <h1>{weather.oneday.name}</h1>
                <span className="font-weight-bold text-muted">
                  {weather.oneday.sys.country}
                </span>
              </div>
            </div>
          </Col>
          <Col xs="4">
            <Map />
          </Col>
        </Row>
      ) : (
        <div className="text-center w-100">
          <h1 className="text-muted">Search city</h1>
        </div>
      )}
    </Col>
  );
}

export default MainCard;

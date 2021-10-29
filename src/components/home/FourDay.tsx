import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../types/storeType";
import { format, formatISO } from "date-fns";
import { FiNavigation2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import dateFormat from "dateformat";

function FourDay() {
  const weather = useSelector((state: ReduxStore) => state.weather);

  return (
    <Col xs="12">
      <br />
      <div className="mainCards">
        {!weather.loading &&
          weather.days.list.map((W: any) => (
            <div className="d-flex flex-column smallCard">
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${W.weather[0].icon}@2x.png`}
                  alt=""
                  className="imageWeather"
                />
              </div>
              <small>
                {weather.oneday.weather[0].main},{" "}
                {weather.oneday.weather[0].description}
              </small>
              <span className="text-muted font-weight-bold">
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
                  <small className="text-muted font-weight-bold">Wind: </small>
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
              <p>{dateFormat(W.sys.dt_txt, "HH:MM d mmm")}</p>
            </div>
          ))}
      </div>
    </Col>
  );
}

export default FourDay;

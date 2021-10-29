import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../types/storeType";
import { format, formatISO } from "date-fns";
import { FiNavigation2 } from "react-icons/fi";
import { useEffect, useState } from "react";

function FourDay() {
  const weather = useSelector((state: ReduxStore) => state.weather);
  const dispatch = useDispatch();
  let as = weather.days.hourly;
  console.log(format(weather.days.list[0].dt, "H:m d MMM "));
  console.log(formatISO(weather.days.list[0].dt, { representation: 'date' }));
  //
  const [WeatherImg, setWeatherImg] = useState({
    state: "",
    colorOne: "",
    colorTwo: "",
  });
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
  }, [weather.days]);
  //
  return (
    <Col xs="12">
      <br />
      <div className="mainCards">
        {weather.days.list &&
          weather.days.list.map((W: any) => (
            <div className="d-flex flex-column smallCard">
              <div>
                <img src={WeatherImg.state} alt="" className="imageWeather" />
              </div>
              <small>
                <small className="text-muted font-weight-bold">
                  Feels like:
                </small>
                {W.main.feels_like}°C
              </small>
              <small className="mr-2 my-1">
                <small className="text-muted font-weight-bold">Min: </small>
                {W.main.temp_min}°C
              </small>
              <small>
                <small className="text-muted font-weight-bold">Max: </small>
                {W.main.temp_max}°C
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
              <p>{format(new Date(W.dt), "H:m d MMM ")}</p>
            </div>
          ))}
      </div>
    </Col>
  );
}

export default FourDay;

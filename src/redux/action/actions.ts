import { Dispatch } from "redux";

export const addTheName = (value: string) => ({
  type: "ADD_NAME",
  payload: value,
});

export const setSearch = (value: string | null) => ({
  type: "SET_SEARCH",
  payload: value,
});
export const setCoords = (cords: any) => {
  return async (dispatch: Dispatch, getState: any) => {
    dispatch({ type: "WEATHER_LOADING", payload: false });
    dispatch({
      type: "USER_POSITION",
      payload: {
        lon: cords.lon,
        lat: cords.lat,
      },
    });
    const state = getState();
    // 1 day
    let url = `${process.env.REACT_APP_URLFETCH}/weather?lat=${cords.lat}&lon=${cords.lon}&units=metric&appid=${process.env.REACT_APP_APIKEY}`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const weather: any = await res.json();
        dispatch({ type: "WEATHER_DAY_ADD", payload: weather });
        // 4day
        // url = `${process.env.REACT_APP_URLFETCH}/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&units=metric&exclude=daily&appid=${process.env.REACT_APP_APIKEY}`;
        url = `${process.env.REACT_APP_URLFETCH}/forecast?lat=${cords.lat}&lon=${cords.lon}&units=metric&exclude=daily&appid=${process.env.REACT_APP_APIKEY}`;
        try {
          const response = await fetch(url);
          if (res.ok) {
            const Fweather: any = await response.json();
            dispatch({ type: "WEATHER_FDAYS_ADD", payload: Fweather });
            dispatch({ type: "WEATHER_LOADING", payload: true });
          } else {
            console.log("Error");
          }
        } catch (error) {}
        // end
      } else {
        console.log("Error");
      }
    } catch (error) {}
  };
};

export const runSearch = () => {
  return async (dispatch: Dispatch, getState: any) => {
    dispatch({ type: "WEATHER_LOADING", payload: false });
    const state = getState();
    // 1 day
    let url = `${process.env.REACT_APP_URLFETCH}/weather?q=${state.weather.search}&units=metric&appid=${process.env.REACT_APP_APIKEY}`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const weather: any = await res.json();
        dispatch({ type: "WEATHER_DAY_ADD", payload: weather });
        // 4day
        // url = `${process.env.REACT_APP_URLFETCH}/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&units=metric&exclude=daily&appid=${process.env.REACT_APP_APIKEY}`;
        url = `${process.env.REACT_APP_URLFETCH}/forecast?q=${state.weather.search}&units=metric&exclude=daily&appid=${process.env.REACT_APP_APIKEY}`;
        try {
          const response = await fetch(url);
          if (res.ok) {
            const Fweather: any = await response.json();
            dispatch({ type: "WEATHER_FDAYS_ADD", payload: Fweather });
            dispatch({ type: "WEATHER_LOADING", payload: true });
          } else {
            console.log("Error");
          }
        } catch (error) {}
        // end
      } else {
        console.log("Error");
      }
    } catch (error) {}
  };
};

export const positionSearch = () => {};

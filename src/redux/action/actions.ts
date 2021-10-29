import { Dispatch } from "redux";

export const addTheName = (value: string) => ({
  type: "ADD_NAME",
  payload: value,
});

export const setSearch = (value: string | null) => ({
  type: "SET_SEARCH",
  payload: value,
});
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
        url = `${process.env.REACT_APP_URLFETCH}/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&exclude=daily&appid=${process.env.REACT_APP_APIKEY}`;
        try {
          const response = await fetch(url);
          if (res.ok) {
            const Fweather: any = await response.json();
            dispatch({ type: "WEATHER_FOUR_ADD", payload: Fweather });
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

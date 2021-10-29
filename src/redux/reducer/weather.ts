import { Action } from "redux";
import { initialState } from "../store/store";
export const WeatherRed = (state = initialState.weather, action: any) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "WEATHER_DAY_ADD":
      return {
        ...state,
        oneday: action.payload,
      };
    case "WEATHER_FDAYS_ADD":
      return {
        ...state,
        days: action.payload,
      };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        latest: [...state.latest, action.payload],
      };
    case "WEATHER_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "USER_POSITION":
      return {
        ...state,
        cords: action.payload,
      };
    default:
      return state;
  }
};

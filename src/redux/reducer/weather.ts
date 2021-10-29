import { Action } from "redux";
import { initialState } from "../store/store";
export const WeatherRed = (state = initialState.weather, action: any) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

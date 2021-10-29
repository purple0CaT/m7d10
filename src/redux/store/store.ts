import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";
import persistReducer from "redux-persist/es/persistReducer";
import localStorage from "redux-persist/es/storage";
import { ReduxStore } from "../../types/storeType";
import thunk from "redux-thunk";
import { UserRed } from "../reducer/user";
import { WeatherRed } from "../reducer/weather";
import persistStore from "redux-persist/es/persistStore";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState: any = {
  user: {
    name: "",
  },
  weather: {
    search: "",
    data: [],
  },
};

const Reducer = combineReducers({ user: UserRed, weather: WeatherRed });

const persistConfigs = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_KEYENCRIPT!,
      onError: function (error) {},
    }),
  ],
};

const persistedReducer = persistReducer(persistConfigs, Reducer);

const configureStore: any = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(configureStore);
export { configureStore, persistor };

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import forcastReducer from "../reducers/forcastReducer";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
// our storage currently points to the localStorage

import { encryptTransform } from "redux-persist-transform-encrypt";

const aComposeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  forcast: {
    weather: [],
    error: "",
    weatherForcast: {},
  },
};

/* 
{coord: {lon: -0.1257, lat: 51.5085},…}
base: "stations"
clouds: {all: 90}
all: 90
cod: 200
coord: {lon: -0.1257, lat: 51.5085}
lat: 51.5085
lon: -0.1257
dt: 1638538308
id: 2643743
main: {temp: 282.34, feels_like: 279.88, temp_min: 281.07, temp_max: 283.81, pressure: 1003, humidity: 89}
feels_like: 279.88
humidity: 89
pressure: 1003
temp: 282.34
temp_max: 283.81
temp_min: 281.07
name: "London"
sys: {type: 2, id: 2019646, country: "GB", sunrise: 1638517614, sunset: 1638546851}
country: "GB"
id: 2019646
sunrise: 1638517614
sunset: 1638546851
type: 2
timezone: 0
visibility: 10000
weather: [{id: 804, main: "Clouds", description: "overcast clouds", icon: "04d"}]
wind: {speed: 4.63, deg: 270} */

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  forcast: forcastReducer,
});

const persistedBigReducer = persistReducer(persistConfig, bigReducer);

const configureStore = createStore(
  persistedBigReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);

export default configureStore;

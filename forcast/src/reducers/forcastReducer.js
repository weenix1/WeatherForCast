import { GET_FORCAST, GET_WEATHER_FORCAST } from "../actions";
import { initialState } from "../store";

const forcastReducer = (state = initialState.forcast, action) => {
  switch (action.type) {
    case GET_FORCAST:
      return {
        ...state,
        weather: [...state.weather, action.payload], // <- just my preference
      };

    case GET_WEATHER_FORCAST:
      return {
        ...state,
        weatherForcast: action.payload,
      };
    default:
      return state;
  }
};

export default forcastReducer;

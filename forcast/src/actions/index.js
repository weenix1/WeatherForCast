export const REMOVE_FROM_FORCAST = "REMOVE_FROM_FORCAST";
export const GET_FORCAST = "GET_FORCAST";
export const GET_FORCAST_ERROR = "GET_FORCAST_ERROR";
export const TOGGLE_LOADER = "TOGGLE_LOADER";
export const GET_WEATHER_FORCAST = "GET_WEATHER_FORCAST";

export const getForCastAction = (input) => {
  console.log("here is input", input);
  const apiKey = process.env.REACT_APP_API_KEY;
  return async (dispatch) => {
    console.log("Hello! this is a thunk action creator");

    try {
      const response = await fetch(
        /* `https://strive-jobs-api.herokuapp.com/jobs?search=${text.text}&limit=10` */
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=eb3d7906c7f22dd0b192f4679be1e504`
      );
      if (response.ok) {
        const data = await response.json();
        /*  let newData = data.data; */

        dispatch({
          type: GET_FORCAST,
          payload: data,
        });
        dispatch({
          type: GET_WEATHER_FORCAST,
          payload: data,
        });
        /* setTimeout(() => {
          dispatch({
            type: TOGGLE_LOADER,
            payload: false,
          });
        }, 1000); */
      } else {
        console.log("Houston, we got an error :(");
        // we can also dispatch ANOTHER action here for the error!
        dispatch({
          type: GET_FORCAST_ERROR,
        });
        dispatch({
          type: TOGGLE_LOADER,
          payload: false,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_FORCAST_ERROR,
      });
      dispatch({
        type: TOGGLE_LOADER,
        payload: false,
      });
    }
  };
};

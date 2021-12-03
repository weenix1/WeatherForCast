import { Container, Col, Row, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { parseISO, format } from "date-fns";

const MyTable = () => {
  const { forcast: weatherForcast } = useSelector((state) => state);
  return (
    <>
      <Container>
        <div id="weather-widget" className>
          <main className="weather">
            <article className="weather-now">
              <ul>
                <li className="weather-now-day" />
                <li className="weather-now-date" />
                <li className="weather-now-location" />
              </ul>

              <ul>
                <li className="weather-now-icon">
                  {" "}
                  <span className="weather-description" />
                </li>
                <li className="weather-now-tempurature" />
              </ul>
              <dl className="weather-now-details">
                <dt>
                  Feels Like:{" "}
                  {Math.round(
                    weatherForcast.weatherForcast.main.feels_like - 273.15
                  )}{" "}
                  °C
                </dt>
                <dd className="weather-now-precipitation" />
              </dl>
              <dl className="weather-now-details">
                <dt>Humidity: {weatherForcast.weatherForcast.main.humidity}</dt>
                <dd className="weather-now-humidity" />
              </dl>
              <dl className="weather-now-details">
                <dt>Wind: {weatherForcast.weatherForcast.wind.speed}</dt>
                <dd className="weather-now-wind" />
              </dl>
            </article>
            <aside className="weather-forecast">
              <h2>Weather Forecast</h2>
            </aside>
            <footer>
              {weatherForcast.weatherForcast.name} |{" "}
              {weatherForcast.weatherForcast.sys.country}
            </footer>
          </main>
          {/* <div id="mask-background">
            <button id="close-mask">Close</button>
          </div>
          <form id="change-location-form">
            <label htmlFor="zip">Enter your postal code</label>
            <input id="zipcode" type="number" name="zip" step={1} required />
            <button type="submit" id="change-location-form-submit">
              Update Location
            </button>
          </form> */}
        </div>
      </Container>
    </>
  );
};
export default MyTable;

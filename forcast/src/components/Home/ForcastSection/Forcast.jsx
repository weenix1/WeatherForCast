import { Container, Col, Row, Card } from "react-bootstrap";
import MyChart from "./Charts/MyChart";
import MyTable from "./Tables/MyTable";
import { useSelector, useDispatch } from "react-redux";
import { parseISO, format } from "date-fns";

const Forcast = () => {
  // const forcast = useSelector((state) => state.forcast.weatherForcast);

  /*   clouds: {all: 75}
cod: 200
coord: {lon: 10, lat: 53.55}
dt: 1638551569
id: 2911298
main: {temp: 275.02, feels_like: 268.99, temp_min: 274.02, temp_max: 275.8, pressure: 1000, …}
name: "Hamburg"
sys: {type: 1, id: 1263, country: 'DE', sunrise: 1638515786, sunset: 1638543817}
timezone: 3600
visibility: 5000
weather: Array(1)
0: {id: 300, main: 'Drizzle', description: 'light intensity drizzle', icon: '09n'}
length: 1
[[Prototype]]: Array(0)
wind: {speed: 8.75, deg: 210} */

  const { forcast: weatherForcast } = useSelector((state) => state);
  console.log("here is weatherForcast", weatherForcast);
  return (
    <Container xs={12}>
      <Row xs={12}>
        <Col className="col-4 d-flex mb-2" xs={12} md={6}>
          {" "}
          <div className="box">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                {format(
                  new Date(weatherForcast.weatherForcast.sys.sunrise),
                  "h:m aa"
                )}
              </div>
              <div>
                {format(
                  new Date(weatherForcast.weatherForcast.sys.sunrise),
                  "h:m aa"
                )}
              </div>
            </div>
            <div className="wave -one" />
            <div className="wave -two" />
            <div className="wave -three" />
            <div className="weathercon">
              <i className="fas fa-sun" style={{ color: "#d36326" }} />
            </div>
            <div className="info">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <h2 className="location">
                  {" "}
                  {weatherForcast.weatherForcast.name}{" "}
                </h2>
                <h2 className="location">
                  {" "}
                  {weatherForcast.weatherForcast.sys.country}{" "}
                </h2>
              </div>
              <p className="date">
                {format(
                  new Date(weatherForcast.weatherForcast.timezone),
                  "MM/dd/yyyy"
                )}
              </p>
              <h1 className="temp">
                {Math.round(weatherForcast.weatherForcast.main.temp - 273.15)}
                °C |{" "}
                {Math.round(
                  weatherForcast.weatherForcast.main.temp - 276.15
                )}{" "}
                °F
              </h1>
              <h1
                style={{
                  marginBottom: "2px",
                  justifyContent: "center!important",
                }}
              >
                {weatherForcast.weatherForcast.weather.map((w) => w.main)}
              </h1>
            </div>
          </div>
        </Col>

        <Col className="col-8 d-flex" xs={12} md={6}>
          {weatherForcast ? (
            <iframe
              /* "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19988.66471838222!2d6.73742745!3d51.226755399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1638529771795!5m2!1sen!2sde" */
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19988.66471838222!2d${weatherForcast.weatherForcast.coord.lon}!3d${weatherForcast.weatherForcast.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1638529771795!5m2!1sen!2sde`}
              width={600}
              height={300}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <iframe
              /* "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19988.66471838222!2d6.73742745!3d51.226755399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1638529771795!5m2!1sen!2sde" */
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19988.66471838222!2d6.73742745!3d51.226755399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1638529771795!5m2!1sen!2sde"
              width={600}
              height={300}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          )}
          {/* <iframe
            
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19988.66471838222!2d${weatherForcast.weatherForcast.coord.lon}!3d${weatherForcast.weatherForcast.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1638529771795!5m2!1sen!2sde`}
            width={600}
            height={300}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          /> */}
        </Col>
      </Row>
      <Row xs={12}>
        <Col className="col-6 d-flex" xs={12} md={6}>
          <MyChart />
        </Col>
        <Col className="col-6 d-flex" xs={12} md={6}>
          <MyTable />
        </Col>
      </Row>
    </Container>
  );
};
export default Forcast;

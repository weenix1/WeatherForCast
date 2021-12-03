import { Chart } from "react-google-charts";
import { useSelector, useDispatch } from "react-redux";
import { Card, ListGroup } from "react-bootstrap";
const MyChart = () => {
  const forcast = useSelector((state) => state.forcast.weather);
  console.log("here is forcast", forcast);
  /*  feels_like: 270.73
humidity: 78
pressure: 999
temp: 275.63
temp_max: 276.47
temp_min: 274.8 */

  return (
    <>
      {forcast &&
        forcast.map((c) => (
          <Card style={{ width: "18rem", marginBottom: "5px" }}>
            <Card.Header>{c.name}</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>feels_like:{c.main.feels_like}</ListGroup.Item>
              <ListGroup.Item>humidity:{c.main.humidity}</ListGroup.Item>
              <ListGroup.Item>pressure:{c.main.pressure}</ListGroup.Item>
              <ListGroup.Item>
                temp:
                {Math.round(c.main.temp - 273.15)}°C
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
    </>
  );
};
export default MyChart;

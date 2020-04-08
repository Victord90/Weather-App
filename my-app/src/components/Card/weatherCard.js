import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import CurrentWeather from "./CurrentWeather";

const WeatherCard = ({ list, location }) => (
  <ListGroup border="dark" style={{ width: "18rem", margin: "1rem" }}>
    <CurrentWeather location={location} />
    <Card.Body>
      <h2>{list.weather[0].description}</h2>
    </Card.Body>
  </ListGroup>
);

export default WeatherCard;

import React from "react";
import Card from "react-bootstrap/Card";

const CurrentWeather = ({ location }) => (
  <Card.Title>
    <h2>Weather in {location}</h2>
  </Card.Title>
);

export default CurrentWeather;

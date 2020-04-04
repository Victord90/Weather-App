import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const WeatherCard = ({ list, location }) => (
  <ListGroup border="dark" style={{ width: "18rem", margin: "1rem" }}>
    <Card.Title>
      <h2>{location}</h2>
    </Card.Title>
    <Card.Body>
      <h2>{list.main.temp}</h2>
    </Card.Body>
  </ListGroup>
);

export default WeatherCard;

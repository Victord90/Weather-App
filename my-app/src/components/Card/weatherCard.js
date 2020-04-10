import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./style.css";

const WeatherCard = ({ list }) => (
  <ListGroup border="dark" style={{ width: "18rem", margin: "1rem" }}>
    <Card className="forcast">
      <Card.Header>
        <h3>{list.dt}</h3>
      </Card.Header>
      <Card.Body>
        <h5>
          Sunrise: {list.sunrise} Sunset: {list.sunset}
        </h5>
      </Card.Body>
      <Card.Body>
        <h4>{list.weather[0].description}</h4>
      </Card.Body>
    </Card>
  </ListGroup>
);

export default WeatherCard;

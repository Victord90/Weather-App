import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardDeck } from "react-bootstrap";
import "./style.css";

const WeatherCard = ({ list }) => (
  <Container>
    <Row>
      <Col>
        <CardDeck>
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
        </CardDeck>
      </Col>
    </Row>
  </Container>
);

export default WeatherCard;

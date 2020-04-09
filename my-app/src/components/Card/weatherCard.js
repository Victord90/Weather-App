import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardDeck } from "react-bootstrap";

const WeatherCard = ({ list }) => (
  <Container>
    <Row>
      <Col>
        <CardDeck>
          <Card>
            <Card.Body>
              <h2>{list.weather[0].description}</h2>
            </Card.Body>
          </Card>
        </CardDeck>
      </Col>
    </Row>
  </Container>
);

export default WeatherCard;

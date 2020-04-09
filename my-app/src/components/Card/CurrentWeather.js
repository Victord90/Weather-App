import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const CurrentWeather = ({ current, currentFeel }) => (
  <Container>
    <Row className="justify-content-md-center">
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Header>Current Weather in Orlando</Card.Header>
        <Card.Body>
          <Card.Title>{current.temp}</Card.Title>
          <Card.Text>Feels Like: {current.feels_like}</Card.Text>

          <Card.Text>{currentFeel}</Card.Text>
        </Card.Body>
      </Card>
    </Row>
  </Container>
);

export default CurrentWeather;

import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";

const CurrentWeather = ({ current, currentFeel }) => (
  <Container>
    <Row className="justify-content-md-center">
      <Card className="text-center" className="currentCard">
        <Card.Header className="header">Current Weather in Orlando</Card.Header>
        <Card.Body>
          <Card.Title className="currentText">{current.temp}</Card.Title>
          <Card.Text className="currentText">
            Feels Like: {current.feels_like}
          </Card.Text>

          <Card.Text className="currentText">{currentFeel}</Card.Text>
        </Card.Body>
      </Card>
    </Row>
  </Container>
);

export default CurrentWeather;

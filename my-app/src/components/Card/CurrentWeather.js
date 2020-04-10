import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "./style.css";

const CurrentWeather = ({ current, currentFeel, currentImg }) => (
  <Row className="justify-content-md-center">
    <Card className="text-center currentCard">
      <Card.Header className="header">Current Weather in Orlando</Card.Header>
      <Image
        src={`http://openweathermap.org/img/wn/${currentImg}@2x.png`}
        alt="Weather Icon"
        roundedCircle
        className="icon"
      />
      <Card.Body>
        <Card.Title className="currentText">{current.temp}</Card.Title>
        <Card.Text className="currentText">
          Feels Like: {current.feels_like}
        </Card.Text>

        <Card.Text className="currentText">{currentFeel}</Card.Text>
      </Card.Body>
    </Card>
  </Row>
);

export default CurrentWeather;

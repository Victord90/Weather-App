import React from "react";
import WeatherCard from "./weatherCard";

class ControlledCard extends React.Component {
  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=Orlando,Florida&APPID=4f8e39992eb342ab7998501f63a56617"
    )
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
  }

  renderCard = () => {
    return <WeatherCard />;
  };

  render() {
    return this.renderCard();
  }
}

export default ControlledCard;

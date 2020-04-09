import React from "react";
import WeatherCard from "./weatherCard";
import CurrentWeather from "./CurrentWeather";

class ControlledCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      location: "",
      current: "",
      currentFeel: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=28.538336&lon=-81.379234&appid=4f8e39992eb342ab7998501f63a56617&units=imperial"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            location: result.timezone,
            items: result.daily,
            current: result.current,
            currentFeel: result.current.weather[0].description,
          });
        },
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  renderCard = () => {
    const CardItems = this.state.items.map((list) => {
      return (
        <>
          <WeatherCard
            key={list.id}
            list={list}
            location={this.state.location}
          />
        </>
      );
    });

    return (
      <>
        <CurrentWeather
          current={this.state.current}
          currentFeel={this.state.currentFeel}
        />
        {CardItems}
      </>
    );
  };

  render() {
    return this.renderCard();
  }
}

export default ControlledCard;

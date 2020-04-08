import React from "react";
import WeatherCard from "./weatherCard";

class ControlledCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      location: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=28.5383&lon=-81.3792&appid=4f8e39992eb342ab7998501f63a56617"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            location: result.timezone,
            items: result.daily,
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

    return <>{CardItems}</>;
  };

  render() {
    return this.renderCard();
  }
}

export default ControlledCard;

import React from "react";
import WeatherCard from "./weatherCard";
import CurrentWeather from "./CurrentWeather";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

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
      currentImg: "",
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
          console.log(result.current.weather[0].icon);
          this.setState({
            isLoaded: true,
            location: result.timezone,
            items: result.daily,
            current: result.current,
            currentFeel: result.current.weather[0].description,
            currentImg: result.current.weather[0].icon,
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
        <Container fluid>
          <CurrentWeather
            current={this.state.current}
            currentFeel={this.state.currentFeel}
            currentImg={this.state.currentImg}
          />
          <Row>{CardItems}</Row>
        </Container>
      </>
    );
  };

  render() {
    return this.renderCard();
  }
}

export default ControlledCard;

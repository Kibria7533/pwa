import React, { Component } from "react";
import axios from "axios";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: "",
      city: "",
    };
  }
  get = async (e) => {
    if (e.key === "Enter") {
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=32d462d77842e2ab135ad20a99e208b1`
        )
        .then((data) => {
          this.setState({ weather: data.data });
        });
    }
  };
  onchange = (e) => {
    this.setState({ city: e.target.value });
  };

  render() {
    return (
      <div className="main-container">
        <input
          className="search"
          name="city"
          value={this.state.value}
          onChange={this.onchange}
          onKeyPress={this.get}
        />
        {this.state.weather.main && (
          <div className="city">
            <h2>{this.state.weather.name}</h2>
            <span>{this.state.weather.sys.country}</span>
            <div className="city-temp">
              {this.state.weather.main.temp}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
                alt="icon"
              />
              <p>{this.state.weather.weather[0].description}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

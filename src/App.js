import React, { Component } from "react";
import Screen from "./components/screen";
import Keypad from "./components/keypad";
import ZingTouch from "zingtouch";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.rotate();
  }

  toggleClockwise = () => {
    var p = document.getElementById("music");
    var music = document.getElementById("music");
    var games = document.getElementById("games");
    var settings = document.getElementById("settings");
    var coverflow = document.getElementById("coverflow");
    if (coverflow.classList.contains("selected")) {
      coverflow.classList.toggle("selected");
      music.classList.toggle("selected");
    } else if (music.classList.contains("selected")) {
      music.classList.toggle("selected");
      games.classList.toggle("selected");
    } else if (games.classList.contains("selected")) {
      games.classList.toggle("selected");
      settings.classList.toggle("selected");
    } else if (settings.classList.contains("selected")) {
      settings.classList.toggle("selected");
      coverflow.classList.toggle("selected");
    }
  };
  toggleAntiClockwise = () => {
    var p = document.getElementById("music");
    var music = document.getElementById("music");
    var games = document.getElementById("games");
    var settings = document.getElementById("settings");
    var coverflow = document.getElementById("coverflow");
    if (coverflow.classList.contains("selected")) {
      coverflow.classList.toggle("selected");
      settings.classList.toggle("selected");
    } else if (music.classList.contains("selected")) {
      music.classList.toggle("selected");
      coverflow.classList.toggle("selected");
    } else if (games.classList.contains("selected")) {
      games.classList.toggle("selected");
      music.classList.toggle("selected");
    } else if (settings.classList.contains("selected")) {
      settings.classList.toggle("selected");
      games.classList.toggle("selected");
    }
  };
  rotate = () => {
    var containerElement = document.getElementsByClassName("Keypad");
    var activeRegion = ZingTouch.Region(containerElement[0]);
    activeRegion.bind(containerElement[0], "rotate", (event) => {
      event.stopPropagation();
      if (
        event.detail.distanceFromLast > 0 &&
        event.detail.distanceFromOrigin > 25
      ) {
        this.toggleClockwise();
      } else if (
        event.detail.distanceFromLast < 0 &&
        event.detail.distanceFromOrigin < -25
      ) {
        this.toggleAntiClockwise();
      }
    });
  };
  render() {
    return (
      <div className="App">
        <div className="ipod">
          <Screen></Screen>
          <Keypad></Keypad>
        </div>
      </div>
    );
  }
}

export default App;

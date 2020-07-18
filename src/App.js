//Required Modules aand files
import React, { Component } from "react";
import Screen from "./components/screen";
import Keypad from "./components/keypad";
import Music from "./components/music";
import Settings from "./components/settings";
import Games from "./components/games";
import CoverFlow from "./components/coverflow";
import ZingTouch from "zingtouch"; //used for rotation feature
import "./css/App.css";

// App class
class App extends Component {
  // state
  state = {
    showMenu: true,
    showGames: false,
    showMusic: false,
    showSettings: false,
    showCoverflow: false,
    showCoverflow1: false,
    showCoverflow2: false,
    angle: 0, //innitial angle
  };

  componentDidMount() {
    //calling rotate function when everything is mounted and menu is selected
    if (this.state.showMenu) {
      this.rotate();
    }
  }

  toggleClockwise = async () => {
    //collecting elements in varible
    var music = await document.getElementById("music");
    var games = await document.getElementById("games");
    var settings = await document.getElementById("settings");
    var coverflow = await document.getElementById("coverflow");

    // toggling menu items clockwise
    if (this.state.showMenu) {
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
    }
  };

  toggleAntiClockwise = () => {
    //collecing elements in variable
    var music = document.getElementById("music");
    var games = document.getElementById("games");
    var settings = document.getElementById("settings");
    var coverflow = document.getElementById("coverflow");

    // toggling menu anticlockwise
    if (this.state.showMenu) {
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
    }
  };

  // function to handle keypad rotation
  rotate = async () => {
    var containerElement = document.getElementsByClassName("Keypad");
    var activeRegion = ZingTouch.Region(containerElement[0]); //defining active region
    activeRegion.bind(containerElement[0], "rotate", (event) => {
      event.stopPropagation();

      //comparing angle with previous angle in state
      if (
        event.detail.angle - this.state.angle > 15 ||
        event.detail.angle - this.state.angle < -15
      ) {
        if (event.detail.distanceFromLast > 0) {
          this.toggleClockwise();
        } else if (event.detail.distanceFromLast < 0) {
          this.toggleAntiClockwise();
        }
        this.setState({
          angle: event.detail.angle,
        });
      }
    });
  };

  //function to manage center button click
  handleClick = () => {
    if (this.state.showMenu) {
      this.setState({
        showMenu: false,
        showGames: false,
        showMusic: false,
        showSettings: false,
        showCoverflow: false,
      });

      //collecting elements in variable
      var music = document.getElementById("music");
      var games = document.getElementById("games");
      var settings = document.getElementById("settings");
      var coverflow = document.getElementById("coverflow");

      // opening the selected menu item
      if (games.classList.contains("selected")) {
        this.setState({
          showGames: true,
        });
      }
      if (music.classList.contains("selected")) {
        this.setState({
          showMusic: true,
        });
      }
      if (settings.classList.contains("selected")) {
        this.setState({
          showSettings: true,
        });
      }
      if (coverflow.classList.contains("selected")) {
        this.setState({
          showCoverflow: true,
        });
      }
    }
  };

  //function to prepare state for menu
  menuHandler = () => {
    this.setState({
      showGames: false,
      showMusic: false,
      showSettings: false,
      showCoverflow: false,
      showMenu: true,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="ipod">
          {/* conditional rendering */}
          {this.state.showMusic && <Music />}
          {this.state.showMenu && <Screen />}
          {this.state.showGames && <Games />}
          {this.state.showSettings && <Settings />}
          {this.state.showCoverflow && <CoverFlow />}
          <Keypad
            handleClick={this.handleClick}
            menuHandler={this.menuHandler}
          ></Keypad>
        </div>
      </div>
    );
  }
}

export default App;

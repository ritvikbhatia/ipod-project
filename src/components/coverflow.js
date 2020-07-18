// @flow
import "./screen.css";
import ZingTouch from "zingtouch";
import React, { Component } from "react";
import Coverflow1 from "./coverflow1";
import Coverflow2 from "./Coverflow2";

class coverflow extends Component {
  state = {
    showone: false,
    showtwo: false,
    showmen: true,
  };
  componentDidMount() {
    if (this.state.showmen) {
      this.rotate();
      var center = document.getElementById("center");
      center.addEventListener("click", this.handleClick);
    }
  }
  componentWillUnmount() {
    this.setState({
      showmen: true,
    });
  }

  rotate = async () => {
    var coverflow1 = await document.getElementById("coverflow1");
    var coverflow2 = await document.getElementById("coverflow2");
    var containerElement = document.getElementsByClassName("Keypad");
    var activeRegion = ZingTouch.Region(containerElement[0]);
    activeRegion.bind(containerElement[0], "rotate", (event) => {
      event.stopPropagation();
      if (
        event.detail.distanceFromLast > 0 &&
        event.detail.distanceFromOrigin > 15
      ) {
        coverflow1.classList.toggle("selected");
        coverflow2.classList.toggle("selected");
      } else if (
        event.detail.distanceFromLast < 0 &&
        event.detail.distanceFromOrigin < -15
      ) {
        coverflow1.classList.toggle("selected");
        coverflow2.classList.toggle("selected");
      }
    });
  };

  handleClick = async () => {
    if (this.state.showmen) {
      this.setState({
        showtwo: false,
        showone: false,
      });
      var coverflow1 = await document.getElementById("coverflow1");
      var coverflow2 = await document.getElementById("coverflow2");
      if (coverflow1.classList.contains("selected")) {
        this.setState({
          showone: true,
          showmen: false,
        });
      }
      if (coverflow2.classList.contains("selected")) {
        this.setState({
          showtwo: true,
          showmen: false,
        });
      }
    }
  };

  render() {
    return (
      <div className="Screen">
        {this.state.showone && <Coverflow1 />}
        {this.state.showtwo && <Coverflow2 />}
        {this.state.showmen && (
          <div className="Icons">
            <div id="coverflow" style={{ fontWeight: "bold", margin: "2%" }}>
              Coverflow
            </div>
            <div id="coverflow1" className="selected">
              {" "}
              Coverflow 1
            </div>
            <div id="coverflow2">Coverflow 2</div>
          </div>
        )}
      </div>
    );
  }
}

export default coverflow;

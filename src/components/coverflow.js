// @flow
//required modules
import "../css/screen.css";
import ZingTouch from "zingtouch";
import React, { Component } from "react";
import Coverflow1 from "./coverflow1";
import Coverflow2 from "./Coverflow2";

class coverflow extends Component {
  //state
  state = {
    showone: false, //coverflow1
    showtwo: false, //coverflow2
    showmen: true, //showmenu
  };

  componentDidMount() {
    if (this.state.showmen) {
      //calling rotate function after component is mounted and menu is visible
      this.rotate();
      var center = document.getElementById("center");
      //adding event listner to the center button
      center.addEventListener("click", this.handleClick);
    }
  }

  componentWillUnmount() {
    //setting state back
    this.setState({
      showmen: true,
    });
  }

  // function to toggle between menu items
  rotate = async () => {
    //collecting elements from dom
    var coverflow1 = await document.getElementById("coverflow1");
    var coverflow2 = await document.getElementById("coverflow2");
    var containerElement = document.getElementsByClassName("Keypad");
    //toggle logic
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

  //function to handle click on menu button
  handleClick = async () => {
    if (this.state.showmen) {
      this.setState({
        showtwo: false,
        showone: false,
      });
      //collecting elements from DOM
      var coverflow1 = await document.getElementById("coverflow1");
      var coverflow2 = await document.getElementById("coverflow2");
      //opening selected option on click
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
        {/* conditional rendering */}
        {this.state.showone && <Coverflow1 />}
        {this.state.showtwo && <Coverflow2 />}
        {this.state.showmen && (
          <div className="Icons">
            <div id="coverflow" style={{ fontWeight: "bold", margin: "2%" }}>
              Coverflow
            </div>
            <div id="coverflow1" className="selected">
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

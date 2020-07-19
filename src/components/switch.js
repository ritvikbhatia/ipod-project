import React from "react";
import "../css/switch.css";
function Switch(props) {
  return (
    <label className="switch">
      <input id="check" type="checkbox"></input>
      <span className="slider round"></span>
    </label>
  );
}

export default Switch;

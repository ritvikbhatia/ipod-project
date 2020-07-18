// @flow
import * as React from "react";
import "./screen.css";
export default function Coverflow(props) {
  return (
    <div className="Screen">
      <div className="Icons">
        <div id="coverflow ">Coverflow</div>
        <div id="coverflow " className="selected">
          Coverflow 1
        </div>
        <div id="games">Coverflow 2</div>
      </div>
    </div>
  );
}

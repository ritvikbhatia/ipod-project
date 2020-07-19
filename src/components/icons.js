import React from "react";
import "../css/icons.css";
//component to handle menu icons
function icons() {
  return (
    <div className="Icons">
      <div id="title">IPod</div>
      <div id="coverflow">Coverflow</div>
      {/* innitially  selected */}
      <div id="music" className="selected">
        Music
      </div>
      <div id="games">Games</div>
      <div id="settings">Settings</div>
    </div>
  );
}

export default icons;

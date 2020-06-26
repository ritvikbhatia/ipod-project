import React from 'react';
import './keypad.css'
function keypad() {
  return (
    <div className="Keypad" id="kk" >
      
      <img id='next' src='https://img.icons8.com/ios-glyphs/2x/fast-forward.png' alt="next"></img>
      <img id='back'src='https://img.icons8.com/ios-filled/2x/rewind.png' alt="back"></img>
      <img id='play' src='https://img.icons8.com/ios-glyphs/2x/play.png' alt="play"></img>
      <span id='menu'>MENU</span>
      <div id="center"></div>
    </div>
  );
}


export default keypad;

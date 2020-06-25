import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './keypad.css'
function keypad() {
  return (
    <div className="Keypad">
      <img id='next' src='https://img.icons8.com/ios-glyphs/2x/fast-forward.png'></img>
      <img id='back'src='https://img.icons8.com/ios-filled/2x/rewind.png'></img>
      <img id='play' src='https://img.icons8.com/ios-glyphs/2x/play.png'></img>
      <span id='menu'>MENU</span>

    </div>
  );
}

export default keypad;

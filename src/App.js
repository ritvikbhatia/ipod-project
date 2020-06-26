import React from 'react';
import Screen from './components/screen'
import Keypad from './components/keypad'
import ZingTouch from 'zingtouch';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="ipod">
        <Screen>
        </Screen>
        <Keypad></Keypad>        
      </div>
    </div>
  );
}

async function rotate(){
  var containerElement = await document.getElementsByClassName('Keypad');
  var activeRegion = ZingTouch.Region(containerElement[0]);
  activeRegion.bind(containerElement[0], 'rotate', function(event){
    event.stopPropagation();
    if(event.detail.distanceFromLast>0&&event.detail.distanceFromOrigin>25)
      {
        toggleClockwise();
      }
    else if(event.detail.distanceFromLast<0&&event.detail.distanceFromOrigin<-25)
    {
      toggleAntiClockwise();
    }
});
}
rotate()

async function toggleClockwise(){
  var p=await document.getElementById('music');
  var music= await document.getElementById('music');
  var games=await document.getElementById('games');
  var settings= await document.getElementById('settings');
  var coverflow= await document.getElementById('coverflow');
  if(coverflow.classList.contains('selected'))
  {
    coverflow.classList.toggle('selected');
    music.classList.toggle('selected');
  }
  else if(music.classList.contains('selected'))
  {
    music.classList.toggle('selected');
    games.classList.toggle('selected');
  }
  else if(games.classList.contains('selected'))
  {
    games.classList.toggle('selected');
    settings.classList.toggle('selected');
  }
  else if(settings.classList.contains('selected'))
  {
    settings.classList.toggle('selected');
    coverflow.classList.toggle('selected');
  }

}
async function toggleAntiClockwise(){
  var p=await document.getElementById('music');
  var music= await document.getElementById('music');
  var games=await document.getElementById('games');
  var settings= await document.getElementById('settings');
  var coverflow= await document.getElementById('coverflow');
  if(coverflow.classList.contains('selected'))
  {
    coverflow.classList.toggle('selected');
    settings.classList.toggle('selected');
  }
  else if(music.classList.contains('selected'))
  {
    music.classList.toggle('selected');
    coverflow.classList.toggle('selected');
  }
  else if(games.classList.contains('selected'))
  {
    games.classList.toggle('selected');
    music.classList.toggle('selected');
  }
  else if(settings.classList.contains('selected'))
  {
    settings.classList.toggle('selected');
    games.classList.toggle('selected');
  }

}
export default App;

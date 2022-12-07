import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {

  const boat = [];
  const leftSide = ["Wolf", "Goat", "Cabbage"];
  const rightSide = [];
  let isBoatRight = false;

  function addFarmer(){
    if(boat.includes("Farmer") === false)
    {
      if(isBoatRight === false)
      {
        boat.push("Farmer");
        console.log(boat);
        console.log("You added the farmer on the left side!");
      }
      else
      {
        boat.push("Farmer");
        console.log(boat);
        console.log("You added the farmer on the right side!");
      }
    }
  }

  function removeFarmer(){
    if(boat.includes("Farmer") === true)
    {
      if(isBoatRight === false)
      {
        const index = boat.indexOf("Farmer");
        boat.splice(index, 1);
        console.log(boat);
        console.log("You removed the farmer on the left side!");
      }
      else
      {
        const index = boat.indexOf("Farmer");
        boat.splice(index, 1);
        console.log(boat);
        console.log("You removed the farmer on the right side!");
      }
    }
  }

  function addPassenger(passenger){
    if(boat.includes(passenger) === false)
    {
      if(isBoatRight === false)
      {
        boat.push(passenger);
        console.log(boat);
        const index = leftSide.indexOf(passenger);
        leftSide.splice(index, 1);
        console.log(leftSide);
        console.log(`You added the ${passenger} on the left side!`);
      }
      else
      {
        boat.push(passenger);
        console.log(boat);
        const index = rightSide.indexOf(passenger);
        rightSide.splice(index, 1);
        console.log(rightSide);
        console.log(`You added the ${passenger} on the right side!`);
      }
    }
  }

  function removePassenger(passenger){
    if(boat.includes(passenger) === true)
    {
      if(isBoatRight === false)
      {
        const index = boat.indexOf(passenger);
        boat.splice(index, 1);
        console.log(boat);
        leftSide.push(passenger);
        console.log(leftSide);
        console.log(`You removed the ${passenger} on the left side!`);
      }
      else
      {
        const index = boat.indexOf(passenger);
        boat.splice(index, 1);
        console.log(boat);
        rightSide.push(passenger);
        console.log(rightSide);
        console.log(`You removed the ${passenger} on the right side!`);
      }
    }
  }

  function main(){
    if(boat.length == 0)
    {
      if(rightSide.length == 3)
      {
        alert("You won!");
        reloadPage();
      }
      else
      {
        alert("The boat is empty! You have to add the farmer first!");
      }
    }
    else if(boat.length < 3)
    {
        if(boat.includes("Farmer") === true)
        {
          moveBoat();
          checkSides();
        }
        else
        {
          alert("The boat do not have farmer!");
        }
    }
    else
    {
      alert("The boat is full! You have to remove one item first!");
    }
  }

  function moveBoat(){
    isBoatRight ? isBoatRight = false : isBoatRight = true;
  }

  function checkSides(){
    isBoatRight ? checkLeft() : checkRight();
  }

  function checkLeft(){
    if(leftSide.includes("Wolf") === true && leftSide.includes("Goat") === true)
    {
      alert("You lost because the wolf ate the goat!");
      reloadPage();
    }
    else if(leftSide.includes("Cabbage") === true && leftSide.includes("Goat") === true)
    {
      alert("You lost because the goat ate the cabbage!");
      reloadPage();
    }
  }

  function checkRight(){
    if(rightSide.includes("Wolf") === true && rightSide.includes("Goat") === true)
    {
      alert("You lost because the wolf ate the goat!");
      reloadPage();
    }
    else if(rightSide.includes("Cabbage") === true && rightSide.includes("Goat") === true)
    {
      alert("You lost because the goat ate the cabbage!");
      reloadPage();
    }
  }

  function reloadPage(){
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="centering">
        <div className="container">
          <div className="img1" id="Wolf" onClick={() => addPassenger('Wolf')}></div>
        </div>

        <div className="container">
          <div className="img2" id="Goat" onClick={() => addPassenger('Goat')}></div>
        </div>

        <div className="container">
          <div className="img3" id="Cabbage" onClick={() => addPassenger('Cabbage')}></div>
        </div>

        <div className="container">
          <div className="img4" id="Farmer" onClick={addFarmer}></div>
        </div>
      </div>
      <div className="centering">
        <div className="container2">
          <div className="img11" id="Wolf2" onClick={() => addPassenger('Wolf')}></div>
        </div>

        <div className="container2">
          <div className="img22" id="Goat2" onClick={() => addPassenger('Goat')}></div>
        </div>

        <div className="container2">
          <div className="img33" id="Cabbage2" onClick={() => addPassenger('Cabbage')}></div>
        </div>

        <div className="container2">
          <div className="img44" id="Farmer2" onClick={addFarmer}></div>
        </div>
      </div>
      <div className="boat" id="boat">
        <div className="imgg1" id="Wolf1" onClick={() => removePassenger('Wolf')}></div>
        <div className="imgg2" id="Goat1" onClick={() => removePassenger('Goat')}></div>
        <div className="imgg3" id="Cabbage1" onClick={() => removePassenger('Cabbage')}></div>
        <div className="imgg4" id="Farmer1" onClick={removeFarmer}></div>
        <div className="handle" onClick={main}>Change side</div>
      </div>
    </div>
  );
}

export default App;

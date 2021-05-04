import React from 'react';
import './App.css';
import Dice from './Components/Dice/Dice.component';
import Rating from './Components/Rating/Rating.component';

function App() {
  return (
    <div className="App">
      <div>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      </div>
      <div className="dice">
        <Dice />
      </div>
    </div>
  );
}
export default App;

import React, { useState } from 'react';
import "./App.css";
import $ from 'jquery';
import Header from "./Header";
import StatsBlock from "./StatsBlock";
import FooterContainer from "./FooterContainer";

const levelFive = 5;
const levelTen = 10;
const moreTen = 15;

function App() {
  const [level, setLevel] = useState(1); 
  const [counter, setCounter] = useState(1);
  const [achive, setAchive] = useState([]);
  const [click, setClick] = useState(1);

  let counterUp = () => {
    setCounter(counter + 1);
    setClick(click + 1);
    let btnAnim = $('.container-push');

    const animUp = () => {
      btnAnim.css({
        'background-color': 'grey'
      });
      setTimeout(() => {
        btnAnim.css({
          'background-color': ''
        });
      }, 100); // Change back to original color after 5 seconds
    }

    if (level <= 5) {
      if (counter === levelFive) {
        setLevel(level + 1);
        setCounter(0);
      }
    } else if (level > 5 && level <= 10) {
      if (counter === levelTen) {
        setLevel(level + 1);
        setCounter(0);
      }
    } else if (level > 10) {
      if (counter === moreTen) {
        setLevel(level + 1);
        setCounter(0);
      }
    }

    if ((click % 25) === 0) {
      let newAchive = [...achive];
      newAchive.push(`+${click} clicks`);
      setAchive(newAchive);
    }

    animUp();
  };

  return (
    <div className="w-full bg-grey-app">
      <Header />
      <StatsBlock
        level={level} setLevel={setLevel}
        counter={counter} setCounter={setCounter}
        achive={achive} setAchive={setAchive}
        click={click} setClick={setClick}
        counterUp={counterUp}
      />
      <FooterContainer
        level={level} setLevel={setLevel}
        counter={counter} setCounter={setCounter}
        achive={achive} setAchive={setAchive}
        click={click} setClick={setClick}
        counterUp={counterUp}
      />
    </div>
  );
}

export default App;

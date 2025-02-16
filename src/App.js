import React, { useEffect, useState } from 'react';
import "./App.css";
import $ from 'jquery';
import Header from "./Header";
import StatsBlock from "./StatsBlock";
import FooterContainer from "./FooterContainer";

const levelFive = 5;
const levelTen = 10;
const moreTen = 15;

const setLevelStorage = (value) => {
  localStorage.setItem('level', value);
}

const getLevelStorage = () => {
  return Number(localStorage.getItem('level'));
}

const setClickStorage = (value) => {
  localStorage.setItem('click', value);
}

const getClickStorage = () => {
  return Number(localStorage.getItem('click'));
}

const setAchiveStorage = (value) => {
  localStorage.setItem('achive', value);
}

const getAchiveStorage = () => {
  return localStorage.getItem('achive')?.split(',');
}

const setExpStorage = (value) => {
  localStorage.setItem('exp', value);
}

const getExpStorage = () => {
  return Number(localStorage.getItem('exp'));
}

function App() {
  const [level, setLevel] = useState(getLevelStorage || 1); 
  const [counter, setCounter] = useState(1);
  const [achive, setAchive] = useState(getAchiveStorage || []);
  const [click, setClick] = useState(getClickStorage || 0);
  const [clickChange, setChange] = useState(getExpStorage || 1);

  useEffect(() => {
    setLevelStorage(level);
  }, [level]);

  let counterUp = () => {
    setCounter(counter + clickChange);
    setClick(click + clickChange);
    setClickStorage(click + clickChange);
    setExpStorage(clickChange);

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

    if (level >= 0 && level <= 5) {
      if (counter >= levelFive) {
        setLevel(level + 1);
        setCounter(0);
      }
    } else if (level > 5 && level <= 10) {
      if (counter >= levelTen) {
        setLevel(level + 1);
        setCounter(0);
      }
    } else if (level > 10) {
      if (counter >= moreTen) {
        setLevel(level + 1);
        setCounter(0);
      }
    }

    if ((click % 25) === 0) {
      let newAchive = [...achive];
      newAchive.push(`+${click} clicks`);
      setAchive(newAchive);
      setAchiveStorage(newAchive)
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
        clickChange={clickChange}
      />
      <FooterContainer
        level={level} setLevel={setLevel}
        counter={counter} setCounter={setCounter}
        achive={achive} setAchive={setAchive}
        click={click} setClick={setClick}
        counterUp={counterUp}
        setChange={setChange}
      />
    </div>
  );
}

export default App;

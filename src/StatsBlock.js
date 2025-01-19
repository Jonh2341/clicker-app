import "./App.css";
import { useState } from "react";

const levelFive = 7;
const levelTen = 10;
const moreTen = 15;

function StatsBlock() {

    const [ level, setLevel ] = useState(1); 
    const [ counter, setCounter ] = useState(1);
    const [ achive, setAchive ] = useState([]);
    const [ click, setClick ] = useState(1);

    const counterUp = function () {
        setCounter(counter + 1);
        setClick(click + 1);


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

        if ((click % 25) == 0) {
            let newAchive = [];
            for (let i = 0; i < achive.length; i++) {
                newAchive.push(achive[i]);
                // console.log(i, achive[i]);
            }
            newAchive.push(`+${click}clicks`)
            setAchive(newAchive);
        }
    }

    return (
        <div className="container-stats w-full pl-[23px] flex flex-col text-white">
            <div className="stats-block mb-[10px]">
                <span>lvl: {level}</span>
            </div>
            <div className="stats-block flex">
                <span>All clicks: {click}</span>
            </div>
            <div className="stats-block flex">
                <span>Achivements: {achive.join(", ")}</span>
            </div>
            <div className="container-push h-20 w-20 bg-white flex" onClick={counterUp}></div>
            <div className="countainer-counter justify-center">
                {counter}
            </div>
        </div>
    )
}

export default StatsBlock;
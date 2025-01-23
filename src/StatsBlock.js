import "./App.css";
import { useState } from "react";
import $ from "jquery";

const levelFive = 5;
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
        let btnAnim = $('.container-push');

        const animUp = function () {
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

        if ((click % 25) == 0) {
            let newAchive = [];
            for (let i = 0; i < achive.length; i++) {
                newAchive.push(achive[i]);
                // console.log(i, achive[i]);
            }
            newAchive.push(`+${click}clicks`)
            setAchive(newAchive);
        }

        animUp()
    }

    return (
        <div className="container-stats w-full pl-[23px] flex flex-col text-white mb-[50px]">
            <div className="stats-block mb-[10px]">
                <span>lvl: {level}</span>
            </div>
            <div className="stats-block flex">
                <span>All clicks: {click}</span>
            </div>
            <div className="stats-block flex">
                <span>Achivements: {achive.join(", ")}</span>
            </div>
            <div className="container-push h-[302px] w-[310px] transition duration-500 ease-in-ou transform hover:scale-110 bg-btn-grey-app rounded-full flex mx-auto mt-[48px] mb-[26px] justify-center items-center" onClick={counterUp}>
                <img src="/icon.png" className="w-[80%] h-[80%] object-contain" alt="icon"/>
            </div>
            <div className="countainer-counter justify-center mx-auto">
                {counter}
            </div>
        </div>
    )
}

export default StatsBlock;
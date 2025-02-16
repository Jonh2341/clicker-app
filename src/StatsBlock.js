import "./App.css";
import { useState } from "react";
import $ from "jquery";

const levelFive = 5;
const levelTen = 10;
const moreTen = 15;

function StatsBlock({ level, click, achive, counter, counterUp, clickChange }) {
    return (
        <div className="container-stats w-full pl-[23px] flex flex-col text-white mb-[80px]">
            <div className="stats-block mb-[10px]">
                <span>lvl: {level}</span>
            </div>
            <div className="stats-block flex">
                <span>All clicks: {click}</span>
            </div>
            <div className="stats-block flex">
                <span>Achivements: {achive.join(", ")}</span>
            </div>
            {
                clickChange == 2 && (
                    <div className="mx-auto text-4xl">
                        X{clickChange}
                    </div>
                )
            }
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

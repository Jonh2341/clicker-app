import "./App.css";

function StatsBlock() {
    return (
        <div className="container-stats w-full h-[77px] pl-[23px] flex flex-col text-white">
            <div className="stats-block mb-[10px]">
                <span>lvl:</span>
                <input type = "text" className="ml-[15px] input-stats bg-transparent	" disabled/>
            </div>
            <div className="stats-block mb-[10px]">
                <span>Amount:</span>
                <input type = "text" className="ml-[15px] input-stats bg-transparent" disabled/>
            </div>
            <div className="stats-block flex">
                <span>Achivements:</span>
                <input type = "text" className="ml-[15px] input-stats bg-transparent" disabled/>
            </div>
        </div>
    )
}

export default StatsBlock;
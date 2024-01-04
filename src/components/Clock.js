import { useEffect, useState } from "react";

const Clock = () => {
    const date = new Date();
    const whatDay = ["월", "화", "수", "목", "금", "토", "일"];
    const [time, SetTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            SetTime(new Date());
        }, 1000);
        return (() => clearInterval(timer));
    }, []);
    
    return(
        <div id="clock">
            <p id="time">{time.toLocaleTimeString()}</p>
            <p id="date">
                <span className="date">{date.toLocaleDateString()} </span>
                <span className="day">{whatDay[date.getDay()]}</span>
            </p>
        </div>
    )
}

export default Clock;
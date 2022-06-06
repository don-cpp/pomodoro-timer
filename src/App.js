import React, { useEffect, useState } from "react";
import './App.css';

export default function App() {
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);
    const [timer, setTimer] = useState();

    const start = () => {
        const timer = setInterval(() => {
            setSecondsLeft((secondsLeft) => secondsLeft - 1);
            if (secondsLeft === 0) {
                clearInterval(timer);
            }
        }, 1000);
        setTimer(timer);
    };

    useEffect(() => {
        if (secondsLeft === 0) {
            clearInterval(timer);
        }
    }, [secondsLeft, timer]);

    useEffect(() => {
        return () => clearInterval(timer);
    }, [timer]);

    return (
        <div className = "App">
            <h1 className="title">Pomodoro timer</h1>
            <button onClick={start} className="start-button">start</button>
            <div>{secondsLeft} seconds left</div>
        </div>
    );
}
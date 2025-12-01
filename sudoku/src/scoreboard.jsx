import React from "react";

export default function Scoreboard() {
    return (
        <>
            <div className="title bebas-neue-regular">
                <h1>Highest Scores</h1>
            </div>
            <div className="score_box">
                <span className="left-text">Mary</span>
                <span className="right-text">90 pts</span>
            </div>
            <div className="score_box">
                <span className="left-text">Joe</span>
                <span className="right-text">90 pts</span>
            </div>
            
        </>
    );
}
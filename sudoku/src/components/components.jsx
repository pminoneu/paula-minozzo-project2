import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// web button component
export default function CustomButton({ title, onPress }) {
  return (
    <button className="button-standard" onClick={onPress}>
      {title}
    </button>
  );
}




// side navigation component 
export function SideNav() {
  return (
    <div className="sidenav bebas-neue-regular sidenav-font">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/games">Select Game</Link>
        <Link to="/rules">Rules</Link>
        <Link to="/scores">Scoreboard</Link>
    </div>
  );
}

export function TopNav() {
  return (
    <div className="topnav bebas-neue-regular">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        </div>
  );
}


// Timer logic

let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10); // Update every 10ms
        isRunning = true;
    }
}

function stopStopwatch() {
    if (isRunning) {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function updateDisplay() {
    const currentTime = Date.now();
    const currentElapsedTime = isRunning ? (currentTime - startTime) : elapsedTime;

    const hours = Math.floor(currentElapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((currentElapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((currentElapsedTime % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((currentElapsedTime % 1000));

    const formatTime = (unit) => String(unit).padStart(2, '0');
    const displayTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${String(milliseconds).padStart(3, '0')}`;
    console.log(`Elapsed Time: ${displayTime}`);
}

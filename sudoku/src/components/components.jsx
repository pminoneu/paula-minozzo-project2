import React from 'react';
import { Link } from 'react-router-dom';

// web button component
export default function CustomButton({ title, onPress }) {
  return (
    <button className="button-standard" onClick={onPress}>
      {title}
    </button>
  );
}

// timer component
export function Timer({ seconds }) {
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-display">
      Time: {formatTime(seconds)}
    </div>
  );
}


// side navigation component 
export function SideNav() {
  return (
    <div className="sidenav bebas-neue-regular sidenav-font">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/game">Play</Link>
        <Link to="/rules">Rules</Link>
        <Link to="/scoreboard">Scoreboard</Link>
    </div>
  );
}
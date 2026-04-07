import React from "react";
import "./App.css";

export default function Calculator() {
  return (
    <div className="wrapper">
      <div className="calc">
        <div className="display">5 874</div>

        <div className="grid">
          <button className="btn gray">C</button>
          <button className="btn gray">+/-</button>
          <button className="btn gray">%</button>
          <button className="btn orange">÷</button>

          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="btn orange">×</button>

          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="btn orange">−</button>

          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn orange">+</button>

          <button className="btn zero">0</button>
          <button className="btn">,</button>
          <button className="btn orange">=</button>
        </div>
      </div>
    </div>
  );
}
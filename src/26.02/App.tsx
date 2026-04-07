import React, { useState } from "react";
import "./App.css";

export default function Calculator() {
  const [current, setCurrent] = useState("0");
  const [prev, setPrev] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [overwrite, setOverwrite] = useState(false);

  const inputNumber = (num: string) => {
    if (current === "0" || overwrite) {
      setCurrent(num);
      setOverwrite(false);
    } else {
      setCurrent(current + num);
    }
  };

  const inputDot = () => {
    if (!current.includes(".")) {
      setCurrent(current + ".");
    }
  };

  const clear = () => {
    setCurrent("0");
    setPrev(null);
    setOperation(null);
  };

  const chooseOperation = (op: string) => {
    if (prev !== null) {
      compute();
    }
    setOperation(op);
    setPrev(current);
    setOverwrite(true);
  };

  const compute = () => {
    if (!operation || prev === null) return;

    const a = parseFloat(prev);
    const b = parseFloat(current);

    let result = 0;

    switch (operation) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;
    }

    setCurrent(String(result));
    setPrev(null);
    setOperation(null);
    setOverwrite(true);
  };

  const toggleSign = () => {
    setCurrent(String(parseFloat(current) * -1));
  };

  const percent = () => {
    setCurrent(String(parseFloat(current) / 100));
  };

  return (
    <div className="wrapper">
      <div className="calc">
        <div className="display">{current}</div>

        <div className="grid">
          <button className="btn gray" onClick={clear}>C</button>
          <button className="btn gray" onClick={toggleSign}>+/-</button>
          <button className="btn gray" onClick={percent}>%</button>
          <button className="btn orange" onClick={() => chooseOperation("/")}>÷</button>

          <button className="btn" onClick={() => inputNumber("7")}>7</button>
          <button className="btn" onClick={() => inputNumber("8")}>8</button>
          <button className="btn" onClick={() => inputNumber("9")}>9</button>
          <button className="btn orange" onClick={() => chooseOperation("*")}>×</button>

          <button className="btn" onClick={() => inputNumber("4")}>4</button>
          <button className="btn" onClick={() => inputNumber("5")}>5</button>
          <button className="btn" onClick={() => inputNumber("6")}>6</button>
          <button className="btn orange" onClick={() => chooseOperation("-")}>−</button>

          <button className="btn" onClick={() => inputNumber("1")}>1</button>
          <button className="btn" onClick={() => inputNumber("2")}>2</button>
          <button className="btn" onClick={() => inputNumber("3")}>3</button>
          <button className="btn orange" onClick={() => chooseOperation("+")}>+</button>

          <button className="btn zero" onClick={() => inputNumber("0")}>0</button>
          <button className="btn" onClick={inputDot}>,</button>
          <button className="btn orange" onClick={compute}>=</button>
        </div>
      </div>
    </div>
  );
}
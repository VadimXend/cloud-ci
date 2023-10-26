import "./App.css";
import React, { useState } from "react";
import { calc } from "./calc";

function App() {
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [result, setResult] = useState(0);

    const onChange = (event, type) => {
        const value = event.target.value;
        if (type === "x") {
            setX(value);
        } else {
            setY(value);
        }
    };

    const onClick = () => {
        const _x = Number(x);
        const _y = Number(y);
        setResult(calc(_x, _y));
    };

    return (
        <div className="App">
            <header className="App-header">
                <p className="text">Multiplier</p>
                <div className="container">
                    <input
                        value={x}
                        onChange={(e) => onChange(e, "x")}
                        type="number"
                    />
                    <p className="text">X</p>
                    <input
                        value={y}
                        onChange={(e) => onChange(e, "y")}
                        type="number"
                    />
                </div>
                <button onClick={onClick}>Calc</button>
                <p className="text">Result: {result}</p>
            </header>
        </div>
    );
}

export default App;

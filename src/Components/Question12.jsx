/**
 * Stateless component vs Stateful component
 */
import React, { useState } from 'react';

const style = {
    custom: {
        display: "flex",
        flexDirection: "column",
    },

    lightTheme: {
        textAlign: "center",
        color: "purple",
        background: "green"
    },
    darkTheme: {
        textAlign: "center",
        color: "green",
        background: "maroon"
    }
}

const StatefulComponent = ({ name, age }) => {
    const [light, setLight] = useState(true);
    const handleToggle = () => {
        setLight(!light);
    }
    return (
        <div>
            <div style={light ? { ...style.lightTheme, ...style.custom } : style.darkTheme}>
                <p>My Name is {name}</p>
                <p>I'm {age} years old.</p>
            </div>
            <button onClick={handleToggle}>Toggle Color</button>
        </div>
    )
}

const StatelessComponent = ({ name, age }) => {
    return (
        <div>
            <p>My Name is {name}</p>
            <p>I'm {age} years old.</p>
        </div>
    )
}

const Question12 = () => {
    return (
        <div>
            <h3>Stateful Component</h3>
            <hr />
            <StatefulComponent name="Prajwal Gautam" age={22} />

            <br />
            <hr />

            <h3>Stateless Component</h3>
            <StatelessComponent name="Prajwal Gautam" age={22} />
        </div>
    )
}

export default Question12;
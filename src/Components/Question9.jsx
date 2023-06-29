/**
 * Simple CSS in React
 */
import React, { useState } from 'react';

const theme = {
    light: {
        background: "white",
        color: "black"
    },
    dark: {
        background: "black",
        color: "white"
    },
    display: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    }
}

const Question9 = () => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = () => setIsDark(!isDark);

    return (
        <div style={isDark ? theme.dark : theme.light}>
            <div style={theme.display}>
                <h1>Hello</h1>
                <h1>How you doing.</h1>
                <h1>Doing Great, Bro.</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </div>
    )
}

export default Question9
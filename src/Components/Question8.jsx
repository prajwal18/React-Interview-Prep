/**
 * Dynamic inputs in React
 */

import React, { useState } from 'react';

const Question8 = () => {
    const [inputs, setInputs] = useState({});

    const getInputValues = (data) => {
        let { target: { name, value } } = data;
        let input = { [name]: value }
        setInputs(inputs => ({ ...inputs, ...input }))
    }
    
    return (
        <div>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    maxWidth: "500px",
                    padding: "10px"
                }}
            >
                <input placeholder='Name' name="name" onChange={getInputValues} />
                <input placeholder='Age' name="age" onChange={getInputValues} />
                <input placeholder='Years of Experience' name="yoe" onChange={getInputValues} />
                <input placeholder='Hobby' name="hobby" onChange={getInputValues} />

            </form>
        </div>
    )
}

export default Question8;

/**
 * Controlled vs Uncontrolled components in React.
 */

import React, { createRef, useState } from 'react';

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "500px",
    padding: "10px"
}

const Question10 = () => {
    return (
        <div>
            <h3>Controlled Component</h3>
            <ControlledExample />
            <br />

            <h3>Uncontrolled Component</h3>
            <UncontrolledExample />
        </div>
    )
}


const UncontrolledExample = () => {
    const name = createRef();
    const age = createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name.current.value);
        console.log(age.current.value);
    }
    return (
        <div>
            <form
                style={formStyle}
                onSubmit={handleSubmit}
            >
                <input name="name" placeholder='Name' ref={name} />
                <input name="age" placeholder='Age' type="number" ref={age} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


const ControlledExample = () => {
    const [obj, setObj] = useState({});

    const updateObj = (target) => {
        setObj(obj => ({ ...obj, [target.name]: target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(obj);
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                style={formStyle}
            >
                <input name="name" placeholder='Name'
                    value={obj.name || ''} onChange={(e) => updateObj(e.target)} />
                <input name="age" placeholder='Age' type="number"
                    value={obj.age || 0} onChange={(e) => updateObj(e.target)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Question10
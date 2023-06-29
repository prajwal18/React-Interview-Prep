/**
 * Forms in React
 */

import React, { useState } from 'react';

const Question7 = () => {
    const [objData, setObjData] = useState({
        name: '',
        age: 0,
        details: '',
        dob: ''
    });

    const updateObjData = (name) => (value) => {
        setObjData(objData => ({ ...objData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${objData.name} you are just awesome.`)
    }

    return (
        <div>
            <h3>Forms in react, General Details</h3>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    maxWidth: "500px",
                    padding: "10px"
                }}
                onSubmit={handleSubmit}
            >
                <input
                    placeholder='Name'
                    value={objData.name}
                    onChange={(e) => {
                        updateObjData("name")(e.target.value);
                    }}
                />

                <input
                    placeholder='Age'
                    type="number"
                    value={objData.age}
                    onChange={(e) => {
                        updateObjData("age")(e.target.value);
                    }}
                />

                <input
                    placeholder='Details'
                    value={objData.details}
                    onChange={(e) => {
                        updateObjData("details")(e.target.value);
                    }}
                />

                <input
                    placeholder='D.O.B'
                    type="date"
                    value={objData.dob}
                    onChange={(e) => {
                        updateObjData("dob")(e.target.value);
                    }}
                />

                <button type="submit">Submit</button>

            </form>
            <br />
            <YourDetails
                name={objData.name}
                age={objData.age}
                details={objData.details}
                dob={objData.dob}
            />
        </div>
    )
}

const YourDetails = ({ name, age, details, dob }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Details: {details}</p>
            <p>D.O.B: {dob}</p>
        </div>
    )
}

export default Question7;
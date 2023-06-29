/**
 * Forms in React
 */

import React, { useState } from 'react';

const Question7 = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [details, setDetails] = useState("");
    const [dob, setDob] = useState(null);
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
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Good job");
                }}
            >
                <input
                    placeholder='Name'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />

                <input
                    placeholder='Age'
                    type="numbers"
                    value={age}
                    onChange={(e) => {
                        setAge(e.target.value);
                    }}
                />

                <input
                    placeholder='Details'
                    value={details}
                    onChange={(e) => {
                        setDetails(e.target.value);
                    }}
                />

                <input
                    placeholder='D.O.B'
                    type="date"
                    value={dob}
                    onChange={(e) => {
                        setDob(e.target.value);
                    }}
                />

                <button type="submit">Submit</button>

            </form>
            <br />
            <YourDetails
                name={name}
                age={age}
                details={details}
                dob={dob}
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
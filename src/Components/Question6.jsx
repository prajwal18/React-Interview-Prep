/**
 * Keys in React
 * 
 */
import React from 'react'

const Question6 = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const details = [
        {
            name: "Prajwal Gautam",
            age: 22
        },
        {
            name: "Shishir Paudel",
            age: 10
        },
        {
            name: "Rabin Timalsina",
            age: 24
        },
        {
            name: "Joseph Stalin",
            age: 145
        }
    ]
    return (
        <div>
            <h3>A list of numbers</h3>
            <div>
                {
                    numbers.map(num => (
                        <span key={num}>{num}, </span>
                    ))
                }
            </div>
            <br />
            <h3>A List of People</h3>
            {
                details.map((person, index) => (
                    <div key={index}>
                        <p>Name: {person.name}</p>
                        <p>Age: {person.age}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Question6
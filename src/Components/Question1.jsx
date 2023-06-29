/**
 * Question 1: Map and Filter
 * 
 */

import React, { useState, useEffect } from 'react';

const url = 'https://jsonplaceholder.typicode.com/users';

const Question1 = () => {
    const [users, setUsers] = useState([]);
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const fetchUsers = async () => {
        const data = await fetch(url).then(response => response.json())
        data.map(i => console.log(i, "\n"))
        setUsers(data);
    }

    const handleSearch = () => {
        const filteredUsers = users.filter(user => user.name[0] === "C")
        // filter only returns values when the condition returns true
        // I'm only retriving users whose name starts with the letter C
        console.log("My results", filteredUsers)
        setUsers(filteredUsers);
    }

    const squareNumbers = () => {
        let numsLessThan5 = numbers.filter(num => num < 5).map(num => num * num);
        setNumbers(numsLessThan5);
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            <div>
                <p>Name starts with letter C:</p>
                <button onClick={handleSearch}>Search</button>
                <hr />
                <br />
            </div>
            {/* {
                users.map((user) => (
                    <div key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <br />
                    </div>
                ))
            } */}

            <div>
                <h3>Numbers</h3>
                <button onClick={squareNumbers}>Transform Numbers</button>
                <br />
                {
                    numbers.map(num => (
                        <div key={num}>{num}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Question1;
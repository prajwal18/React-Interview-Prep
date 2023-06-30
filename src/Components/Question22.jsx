/**
 * Search Filter - Debounce Search
 */

import React, { useEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com/users';

const Question22 = () => {
    const [users, setUsers] = useState([]);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        // Debounced search
        if (searchQuery) {
            const debouncedSearch = setTimeout(() => {
                const filtered = users.filter(user => {
                    return Object.values(user).join("").toLowerCase().includes(searchQuery.toLowerCase());
                });
                setSearchedUsers(filtered);
            }, 500);

            return () => clearTimeout(debouncedSearch);
        } else {
            setSearchedUsers(users)
        }
    }, [searchQuery, users]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setUsers(json));
    }, [])

    return (
        <div>
            <h3>All users</h3>
            <input type="text" placeholder='Search User'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {
                searchedUsers.map((user, idx) => (
                    <div key={idx}
                        style={{ padding: "10px", margin: "10px", border: "1px solid black" }}>
                        <p>Name: {user.name}</p>
                        <p>Location: {user.address.city}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Question22
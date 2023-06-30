/**
 * Debouncing in React
 */
import React, { useEffect, useState } from 'react';
import axios from "axios";

const url = "https://api.postalpincode.in/pincode/";

const Question13 = () => {
    const [results, setResults] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchResult = (query) => {
        axios.get(url + query)
            .then(response => {
                setIsLoading(true);
                setError(null);
                return response.data;
            })
            .then(data => {
                if (data[0].PostOffice) {
                    return data[0].PostOffice
                }
                throw new Error(data[0].Message)
            })
            .then(postOffice => setResults(postOffice))
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        const debouncing = setTimeout(() => {
            fetchResult(input)
        }, 1000);

        return () => clearTimeout(debouncing)
    }, [input])


    return (
        <div>
            <h3>Debouncing in React</h3>
            <input
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                placeholder="Search for something"
            />
            <h3>Search Result: A List of Post Offices</h3>
            {
                isLoading ?
                    <p>Loading ...</p>
                    :
                    error ?
                        <p style={{ color: "red" }}>{error}</p>
                        :
                        <>
                            {
                                results.map((postOffice, idx) => (
                                    <div key={idx}>
                                        {console.log(postOffice)}
                                        <p>Name: {postOffice.Name}</p>
                                        <p>Pincode: {postOffice.Pincode}</p>
                                        <p>District: {postOffice.District}</p>
                                        <p>Reqion: {postOffice.Region}</p>
                                        <p>State: {postOffice.State}</p>
                                        <br />
                                        <hr />
                                    </div>
                                ))
                            }
                        </>
            }
        </div>
    )
}

export default Question13;
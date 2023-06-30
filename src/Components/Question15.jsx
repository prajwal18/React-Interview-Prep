/**
 * Higher Order Components: HOC are functions that take in a component as an input and 
 * return a new Component.
 */

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const usersURL = 'https://jsonplaceholder.typicode.com/users';
const postsURL = 'https://jsonplaceholder.typicode.com/posts';

/* Basic Components Users and Posts */
const Users = ({ data }) => {
    return (
        <>
            {
                data.map((item, idx) => (
                    <div key={idx}>
                        <h5>{item.name}</h5>
                    </div>
                ))
            }
        </>
    )
}
const Posts = ({ data }) => {
    return (
        <>
            {
                data.map((item, idx) => (
                    <div key={idx}>
                        <h5>{item.title}</h5>
                    </div>
                ))
            }
        </>
    )
}
/* Basic Components Users and Posts */




/* My HOC - Higher Order Component */
function HOC(title, url, Component) {
    return function HigherOrderComponent() {
        const [data, setData] = useState([]);

        const fetchData = () => {
            axios.get(url)
                .then(response => response.data)
                .then(data => setData(data))
        }
        useEffect(() => {
            fetchData()
        }, []);

        return (
            <div>
                <div style={{ textAlign: "center" }}>
                    <h2>A List of {title}</h2>
                    <Component data={data} />
                </div>
                <br />
                <hr />
            </div>
        )
    }
}
/* My HOC - Higher Order Component */

const UsersComponent = HOC("Users", usersURL, Users)
const PostsComponent = HOC("Posts", postsURL, Posts);

const Question15 = () => {
    return (
        <div>
            <UsersComponent />
            <PostsComponent />
        </div>
    )
}

export default Question15;
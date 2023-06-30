/**
 * Promise and Async/Await
 * What is async await. IT is nothing but syntaxtical sugar on top of promises.
 */
import React, { useEffect, useState } from 'react';



const PromiseExample = () => {
    const [count, setCount] = useState(0);

    const stillFriends = (something) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(something)
            }, 2000)
        })
    }

    const handleClick = () => {
        stillFriends()
            .then(() => stillFriends())
            .then(() => setCount(count + 1))
    }

    return (
        <div>
            <h1>Promise</h1>
            <p>
                Slow Increment, The counter only increments after 2 seconds.
            </p>
            <p>Counter: {count}</p>
            <button
                onClick={handleClick}
            >
                Increment counter
            </button>
        </div>
    )
}

const AsyncExample = () => {
    const [count, setCount] = useState(0);

    const slowIncrement = (something) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(setCount(count + 1))
            }, 2000)
        })
    }

    const handleClick = async() => {
        await slowIncrement()
    }

    return (
        <div>
            <h1>Async / Await</h1>
            <p>
                Same functionality but with async / await now.
            </p>
            <p>Counter: {count}</p>
            <button
                onClick={handleClick}
            >
                Check Status
            </button>
        </div>
    )
}




const Question20 = () => {
    return (
        <div>
            <PromiseExample />
            <AsyncExample />
        </div>
    )
}

export default Question20
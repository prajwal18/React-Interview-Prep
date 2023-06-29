/**
 * Questoin 2: State in React
 * 
 */

import React, { useEffect, useState } from 'react'

const Question2 = () => {
    const [count, setCount] = useState(0);
    const [isEven, setIsEven] = useState(false);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1)
    }

    useEffect(() => {
        setIsEven(count % 2 === 0);
    }, [count])

    return (
        <div>
            <p>My count: {count}</p>
            <p>
                {
                    isEven? 'Even': 'Odd'
                }
            </p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Question2
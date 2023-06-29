/**
 * Conditional Rendering in React
 * 
 */

import React, { useMemo } from 'react';

// Contains a list of JavaScript frameworks
const jsFramework = ['Vue', 'Angular'];
const jsLibrary = ['React', 'Redux'];

const Question4 = ({ name, technology }) => {

    const randomValue = useMemo(() => {
        return Math.floor(Math.random() * 10)
    }, []);

    return (
        <div>
            <p>
                Conditional Rendering in React
            </p>
            <p>Random Value: {randomValue}</p>
            {
                randomValue % 2 === 0 ?
                    <p>The random number is even.</p>
                    :
                    <p>The random number is odd.</p>
            }
            <br />
            <p>{name} is familier with {technology}.</p>
            <p>
                {console.log('Vue'.toString() in jsFramework)}
                {   // This is an example of conditional chaining.
                    jsLibrary.includes(technology) ?
                        `${technology} is a JavaScript Library.`
                        :
                        jsFramework.includes(technology) ?
                            `${technology} is a JavaScript Framework.`
                            :
                            `${technology} is neither a JS Framework nor a JS Library.`
                }
            </p>
        </div>
    )
}

export default Question4;
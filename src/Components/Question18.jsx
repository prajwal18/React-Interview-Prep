/**
 * Recursion in React
 */

import React, { useState } from 'react';
import { familyTree } from '../helpers/data';


// Family Function
const Family = ({ person }) => {
    const [expand, setExpand] = useState(false);
    const custStyle = (hasChild) => {
        return hasChild ? { cursor: "pointer", 'color': 'teal' } : { cursor: "auto" }
    }
    return (
        <div style={{ paddingLeft: 10 }}>
            <span onClick={() => setExpand(!expand)} style={custStyle(person.children)}>{person.name}</span>
            {
                expand && person.children ?
                    <>
                        {
                            person.children.map((child, idx) => (
                                <React.Fragment key={idx}>
                                    <Family person={child} />
                                </React.Fragment>
                            ))
                        }
                    </>
                    :
                    <></>
            }
        </div>
    )
}
// Family Function

const Question18 = () => {
    return (
        <div>
            <h3>Recursion in Ract JS</h3>
            <Family person={familyTree} />
        </div>
    )
}

export default Question18
/**
 * Lazy Loading in React
 */

import React, { Suspense } from 'react';

// Default import
// import LaxyLoadExample from './LaxyLoadExample';

// Lazy Loading import
const LaxyLoadExample = React.lazy(() => import('./LaxyLoadExample'));


const Question16 = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <p>Hello from the other side. Hello Again from the other sid.</p>
                <LaxyLoadExample />
            </Suspense> 
        </div>
    )
}

export default Question16;

// Lazy load        Size: 302 kb     Time:  9ms
// Ordinary Load    Size: 570 kb     Time: 186 ms
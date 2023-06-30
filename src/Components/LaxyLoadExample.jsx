import React from 'react';

const lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit vel, excepturi voluptatibus dignissimos qui placeat id vitae suscipit repellendus magni eveniet molestias veniam ipsam facilis veritatis nesciunt quidem error? Commodi?';

const LaxyLoadExample = () => {
  return (
    <div>
        <h1>Lazy Loading Example</h1>
        {
            [
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 19, 20,
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 19, 20,
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 19, 20,
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 19, 20,
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 19, 20,
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 19, 20,
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 19, 20,
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 19, 20,
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 19, 20,
            ].map((num, idx) => (
                <p>{lorem}</p>
            ))
        }
    </div>
  )
}

export default LaxyLoadExample;
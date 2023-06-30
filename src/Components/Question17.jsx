/**
 * Helper function in React, Seperate the UI and Logic
 */

import React, { useEffect, useMemo } from 'react';
import { getAllUsers } from '../helpers/getAllUsers';

const Question17 = () => {
    const usersData =  useMemo(async () => {
        const data = await getAllUsers();
        console.log(data);
        return data;
    }, []);

    return (
        <div>
            Question17
        </div>
    )
}

export default Question17;
/**
 * Setting inner html in react
 */

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




const Question11 = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <h3>Your text Area</h3>
            <br />
            <hr />
            <div dangerouslySetInnerHTML={{ __html: value }}></div>
            <br />
            <hr />
            <QuillComponent value={value} setValue={setValue} />
        </div>
    )
}

const QuillComponent = ({ value, setValue }) => {
    return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

export default Question11
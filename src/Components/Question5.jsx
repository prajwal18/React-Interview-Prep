/**
 * Event Handeling in react
 * 
 */

import React, { useState } from 'react'

const Question5 = () => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
      <h3>Type something here</h3>
      <input placeholder='Type Something here' value={text} onChange={handleOnChange} />
      <p>Your Text will be displayed below</p>
      <h5>{text}</h5>
    </div>
  )
}

export default Question5
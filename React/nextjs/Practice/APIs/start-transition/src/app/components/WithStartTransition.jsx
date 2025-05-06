'use client'
import React, { startTransition, useState } from 'react'

function WithStartTransition() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setText(value);
    startTransition(() => {
      setList(Array(3000).fill(value));
    })
  }
  return (
    <div>
      <div className='text-2xl font-bold text-green-400'>With startTransition</div>
      <div className='underline'>The input field updates instatly and the heavy compulation (updating the list) is performed after field update</div>
      <div className='underline'>Caused the input field to statys responsieve</div>
      <div>
        <input className='border p-2' type='text' value={text} onChange={handleChange} />
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}-{index}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WithStartTransition
'use client'
import React, { useState } from 'react'


function WithoutUseTransition() {
  const [text, setText] = useState('')
  const [list, setList] = useState([]);

  function handleChange(e) {
    setText(e.target.value);

    const tempArr = [];               // {  this computation is taking too much time, which is blocking the rest of ui to render
    for (let i = 0; i < 20000; i++) {
      tempArr.push(i);
    }
    setList(tempArr);                 // }

  }

  return (
    <div className='border-2 border-black p-4'>
      <h1 className='font-bold'>Without useTransition</h1>
      <input type="text" placeholder='enter text...' className='border'  // Try to type in the textbox, it laggs
        value={text}
        onChange={handleChange} />

      {
        list.map(() => (
          <div>{text}</div>
        ))
      }
    </div>
  )
}

export default WithoutUseTransition
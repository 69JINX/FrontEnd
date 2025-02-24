'use client'
import React, { useState, useTransition } from 'react'


function WithUseTransition() {
  const [text, setText] = useState('')
  const [list, setList] = useState([]);
  const [isPending, startTrasition] = useTransition();

  function handleChange(e) {
    setText(e.target.value);

    startTrasition(() => {
      const tempArr = [];               // {  this computation will be render seperately without blocking the ui
      for (let i = 0; i < 20000; i++) {
        tempArr.push(i);
      }
      setList(tempArr);                 // }
    })
  }

  return (
    <div className='border-2 border-black p-4'>
      <h1 className='font-bold'>With useTransition</h1>

      <input type="text" placeholder='enter text...' className='border' // Now typing in textbox won't lagg
        value={text}
        onChange={handleChange} />

      {!isPending &&
        list.map(() => (              // The map will run after the computation has been completed, which won't block the whole UI
          <div>{text}</div>
        ))
      }
    </div>

  )
}

export default WithUseTransition
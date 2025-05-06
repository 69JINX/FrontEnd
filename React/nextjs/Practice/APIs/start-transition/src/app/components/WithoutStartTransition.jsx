'use client'
import { useState } from 'react';

function WithoutStartTransition() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    function handleChange(e) {
        const value = e.target.value;
        setText(value);
        setList(Array(3000).fill(value));
    }
    return (
        <div>
            <div className='text-2xl font-bold text-red-400'>Without startTransition</div>
            <div className='underline'>The input field updates while the heavy computation(updating the list) is performing</div>
            <div className='underline'>Caused the input field to become unresponsive</div>
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

export default WithoutStartTransition
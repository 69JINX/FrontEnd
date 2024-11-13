import React, { useEffect, useState } from 'react'


function Textbox() {
    const [show_hide, setshow_hide] = useState(true);
    return (
        <div>
            <input type={show_hide ? "password" : "text"} />
            <button style={{ cursor: 'pointer' }} onClick={() => setshow_hide(!show_hide)}>{show_hide ? 'show' : 'hide'}</button>
        </div>
    )
}

export default Textbox;
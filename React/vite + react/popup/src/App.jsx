import React, { useState } from 'react'


function App() {
    const [show_hide, setshow_hide] = useState(false);

    const name = 'jodn';


    return (
        <>
            <button onClick={() => setshow_hide(!show_hide)}>{show_hide ? 'Box is visible' : 'show'}</button>
            <div className='Popup' style={{ top: (show_hide ? '20%' : '-80%') }}>
                <button className='close' onClick={() => setshow_hide(!show_hide)}>X</button>
            </div>
            <div className='overlay' style={{ opacity: (show_hide ? '1' : '0'), display: (show_hide ? 'block' : 'none') }}>
            </div>
        </>
    )

}

export default App
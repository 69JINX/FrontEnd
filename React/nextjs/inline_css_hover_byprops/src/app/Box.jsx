'use client'
import React, { useEffect, useState } from 'react'
import './box.css'

function Box(props) {

    const [Color, setColor] = useState(props.color_in);


    const box_style = {
        "text-align": "center",
        padding: "30px",
        color: Color
    }

    return (
        <div className="box" style={box_style} onMouseEnter={() => setColor(props.color_out)} onMouseLeave={() => setColor(props.color_in)}>
            heloo
        </div>
    )
}

export default Box
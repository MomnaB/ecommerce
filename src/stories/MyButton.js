import React from 'react'
import '../App.css'
function MyButton ({text}) {
    return (
        <button className ='mybtn' type = 'submit'>{text}</button>
    )
    
}

export default MyButton;
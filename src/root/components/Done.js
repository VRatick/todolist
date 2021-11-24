import React from 'react'
import text from '../assets/text.json'

const Done = ( {showDone, done} ) => {

    const list = done.map( (item, index) => {
        return (
            <div  key={index+1} >
                <div className='text'>{item}</div>                
            </div>
        )
    })

    return showDone ? (
        <div className='done-container'>
            <div className='title'>{text.done}</div>
            {list}
        </div>
    ) : null
}

export default Done
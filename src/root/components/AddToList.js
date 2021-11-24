import React from 'react'
import text from '../assets/text.json'

const AddToList = ( {task, setTask, addToList} ) => {    

    const handleChange = (e) => {
        setTask(e.target.value)
    }    

    return (
        <div className='input-container'>
            <div className='title'>{text.add}</div>
            <input className='input' onChange={handleChange} value={task}/>
            <button className='button-green' onClick={ () => {                
                addToList(task)
            }}>{text.add}</button>
        </div>
    )
}

export default AddToList
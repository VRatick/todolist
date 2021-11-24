import React from 'react'
import text from '../assets/text.json'

const Filter = (props) => {
    
    const getAllTask = () => {
        props.setShowDone(true)
        props.setShowPlan(true)
    }

    const getPlanTask = () => {
        props.setShowDone(false)
        props.setShowPlan(true)
    }

    const getDoneTask = () => {
        props.setShowDone(true)
        props.setShowPlan(false)
    }

    return (
        <div className='filter-container'>
            <div className='title'>{text.filters}</div>
            <div className='buttons-container'>
                <button className='button-filter' onClick={() => {getAllTask()}}>{text.all}</button>
                <button className='button-filter' onClick={() => {getPlanTask()}}>{text.plan}</button>
                <button className='button-filter' onClick={() => {getDoneTask()}}>{text.done}</button>
            </div>
      </div>
    )
}

export default Filter
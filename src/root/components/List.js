import React from 'react'
import text from '../assets/text.json'

const List = ( {showPlan, plan, editTask, addToDone, deleteFromList} ) => {  

    const [edit, setEdit] = React.useState('')
    const [editId, setEditId] = React.useState(-1)
    const [editVisible, setEditVisible] = React.useState(false)
    
    
    const handleChange = (e) => {
        setEdit(e.target.value)
    }       

    const list = plan.map( (item, index) => {
        
        if (!(editVisible && (editId === index))) {
        return (            
            <div key={index+1} className='info-container'>
                <div className='text'>{item}</div>
                <div className='buttons-container'>
                    <button className='button-green' onClick={() => {addToDone(index)}}>{text.done}</button>
                    <button className='button-yellow' onClick={() => {
                    setEditVisible(true)    
                    setEditId(index)
                    }}>{text.edit}</button>
                    <button className='button-red' onClick={() => {deleteFromList(index)}}>{text.remove}</button>
                </div>                
            </div>
        )
        }
        else {
            return (            
                <div key={index+1} className='info-container'>                    
                    <div className='edit-container'>                     
                        <input className='input' onChange={handleChange}/>
                        <button className='button-green' onClick={ () => {
                            if (edit) {
                                editTask(index, edit);
                                setEdit('');
                                setEditVisible(false);   
                            }
                            else {
                                setEditVisible(false);   
                                deleteFromList(index)
                            }                        
                        }}>{text.edit}</button>
                        <button className='button-red' onClick={ () => {setEditVisible(false)}}>{text.return}</button>
                    </div>
                </div>
            )
        }
    })

    return showPlan ? (
        <div className='list-container'>
            <div className='title'>{text.plan}</div>            
            {list}
        </div>
    ) : null
}

export default List
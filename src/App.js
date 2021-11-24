import React, {useState} from 'react'
import AddToList from './root/components/AddToList';
import List from './root/components/List';
import Done from './root/components/Done';
import Filter from './root/components/Filter'
import './root/styles/app.css';
import { store } from './root/redux/store' 

const App = (props) => {
  const [showDone, setShowDone] = useState(true)
  const [showPlan, setShowPlan] = useState(true)
  const [task, setTask] = useState('')
  const [plan, setPlan] = useState(props.plan)  
  const [done, setDone] = useState(props.done)    

  store.subscribe( () => {
    setPlan([...props.plan])    
    setDone([...props.done])    
  })

  return (
    <div className='todo-container'>      
      <AddToList 
        addToList={props.addToList}
        task={task}
        setTask={setTask}   
      />
      <Filter         
        setShowDone={setShowDone}        
        setShowPlan={setShowPlan}
      />
      <List 
        deleteFromList={props.deleteFromList}
        editTask={props.editTask}
        addToDone={props.addToDone}                   
        plan={plan}  
        showPlan={showPlan}      
      />     
      <Done 
        done={done}
        showDone={showDone}
      />    
    </div>
  );
}

export default App;
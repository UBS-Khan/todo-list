import React, {useState} from 'react'
import App from '../App';

function Form({setShowForm}) {


  const hidePopUp = () => {
    setShowForm(false)
  }
  
  return (
        <form action="#">
            <h2>Add New Task</h2>
            <div className='field'>Task to do : <input type="text" placeholder='Complete React' id='task'/></div>
            <div className='field'>Task details : <input type="text" placeholder='I have to complete react in 1 week' id='details'/></div>
            <div className='field'>Task due date : <input type="date" id='date'/></div>
            <button className="btn" id='button'>✓</button>
            <button className="redBtn" onClick={hidePopUp}>X</button>
        </form>
  )
}

export default Form
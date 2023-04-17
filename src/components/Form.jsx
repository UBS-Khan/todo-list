import React, {useState} from 'react'
import App from '../App';

function Form() {

  const [showForm, setShowForm] = useState(false);
  
  
  const hidePopUp = () => {
    setShowForm(false)
  }
  
  return (
        <form action="#">
            <h2>A New Task</h2>
            <div className='field'>Task to do : <input type="text" placeholder='Complete React' id='task'/></div>
            <div className='field'>Task details : <input type="text" placeholder='I have to complete react in 1 week' id='details'/></div>
            <div className='field'>Task due date : <input type="date" id='date'/></div>
            <button className="btn">✓</button>
            <button className="redBtn" onClick={hidePopUp}>X</button>
            {showForm && <App/>}
        </form>
  )
}

export default Form
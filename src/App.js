import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  const [showForm, setShowForm] = useState(false);

  const formPopUp = () => {
    setShowForm(true)
  }

  return (
    <>
    <Navbar/>
    <div className='mainBody'>
      <button className='btn' onClick={formPopUp}>+</button>
      {showForm && <Form/>}
      <div className='allTasks'>
        <div className='task'></div>
      </div>
    </div>
    </>
  )
}

export default App;

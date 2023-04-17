import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState([]);

  const formPopUp = () => {
    setShowForm(!showForm)
  }

  const addTodo = () => {
    
  }

  return (
    <>
    <Navbar/>
    <div className='mainBody'>
      <button className='btn' onClick={formPopUp}>Add Task +</button>
      {showForm && <Form setShowForm={setShowForm}></Form>}
      <div className='allTodos'>
        <div className='todos'></div>
      </div>
    </div>
    </>
  )
}

export default App;

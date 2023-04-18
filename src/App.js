import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Todos from './components/Todos.jsx'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState([]);

  const formPopUp = () => {
    setShowForm(!showForm)
  }

  const addTodo = (task) => {
      setTodos([...todos,task])
  }

  return (
    <>
    <Navbar/>
    <div className='mainBody'>
      <button className='btn' onClick={formPopUp}>Add Task +</button>
      {showForm && <Form setShowForm={setShowForm} addTask={addTodo}></Form>}
      <div className='allTodos'>
        <div className='todos'>
          <Todos lists={todos} ></Todos>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;

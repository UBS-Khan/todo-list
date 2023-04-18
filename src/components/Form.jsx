import React, {useState} from 'react'


function Form({setShowForm,addTask}) {
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [date,setDate] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(title===""||desc===""||date===""){
      return alert("Please fill all form fields")
    }else{
      const task = {
        title : title,
        description : desc,
        date : date
      }
      addTask(task)
    }
  }
  const hidePopUp = () => {
    setShowForm(false)
  }
  
  return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Task</h2>
            <div className='field'>Task to do : <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder='Complete React' id='task'/></div>
            <div className='field'>Task details : <input type="text" onChange={(e)=>setDesc(e.target.value)} placeholder='I have to complete react in 1 week' id='details'/></div>
            <div className='field'>Task due date : <input type="date" onChange={(e)=>setDate(e.target.value)} id='date'/></div>
            <button className="btn" id='button'>✓</button>
            <button className="redBtn" onClick={hidePopUp}>X</button>
        </form>
  )
}

export default Form
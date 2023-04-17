import React from 'react'
import { useState } from 'react'

const Todos = ({lists}) => {
    const [isActive, setIsActive] = useState(false)

    const showDesc = () => {
        setIsActive(!isActive)
    }
  return (
    
    <ul>

        {lists.map(list => (
            <div className='todo' onClick={showDesc}>
            <li key={list.id}>
                <p>{list.title}</p>
            </li>
            </div>
        )
        
        )}

        </ul>
  )
}

export default Todos
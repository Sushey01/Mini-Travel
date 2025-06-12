import React, { useState } from 'react'
import './Form'
import './ShowList.css'

const ShowList = () => {


  const [items, setItems] = useState([])

  function handleAddItem(newList){

    setItems([...items, newList])
  }

  return (
    <div className='list-container'>
      <Form onAddItem={handleAddItem} />
        <ul>
          {items.map((item)=>(
            <li key={item.id}>
              {item.quantity} x {item.name} {item.packed ? "✅": ""}
            </li>
          ))}
        </ul>

           <div className="two-actions">
        <select className='dropdown-list'>
            <option value='input'>SORT BY INPUT ORDER</option>
            <option value='description'>SORT BY DESCRIPTION</option>
            <option value='packed'>SORT BY PACKED STATUS</option>
        </select>
        <button className='clear-list-button'>CLEAR LIST</button>
      </div>
    </div>
  )
}

export default ShowList

import React from 'react'


const Item = ({item, onToggleItem, onDeleteItem}) => {



  return (
    <li>
        <input 
        type='checkbox'
        checked={item.packed}
        onChange={()=> onToggleItem(item.id)}/>
        <span style={item.packed ? { textDecoration: "line-through"}: {}}>
            {item.quantity} {item.name} {item.description}
        </span>
        <button onClick={()=> onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

export default Item

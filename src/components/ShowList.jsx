import React from 'react'
import './ShowList.css'

const ShowList = () => {
  return (
    <div className='list-container'>
        <ul></ul>
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

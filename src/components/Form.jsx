import React from 'react'
import './Form.css'

const Form = () => {
  return (
          <form className='add-form'>

        <h3>What do you need for your 😍 trip?</h3>
        <div className="form-select">
            <select className='num-select'>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
                <option value="1">11</option>
                <option value="1">12</option>
                <option value="1">13</option>
                <option value="1">14</option>
                <option value="1">15</option>
                <option value="1">16</option>
                <option value="1">17</option>
                <option value="1">18</option>
                <option value="1">19</option>
                <option value="1">20</option>
            </select>
            <input className='name-item' type='text' placeholder='Item...'></input>
            <button className='add-button'>ADD</button>
        </div>
          </form>
       
        
       
  
  )
}

export default Form

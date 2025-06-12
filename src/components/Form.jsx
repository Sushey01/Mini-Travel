import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [quantity, SetQuantity] = useState("");
  const [itemName, SetItemName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName) return;

    const newItem= {
        id:Date.now(),
        name:itemName,
        quantity:Number(quantity),
        packed:false,
    }
 
    onAddItem(newItem);
    SetItemName("");
    SetQuantity("1");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <div className="form-select">
        <select
          className="num-select"
          value={quantity}
          onChange={(e) => SetQuantity(e.target.value)}
        >

            
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
        </select>
        <input
          className="name-item"
          value={itemName}
          onChange={(e)=>SetItemName(e.target.value)}
          type="text"
          placeholder="Item..."
        ></input>
        <button type="submit" className="add-button">ADD</button>
      </div>
    </form>
  );
};

export default Form;

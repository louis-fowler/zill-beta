import React from 'react';

const HelpUsForm = () => {
  return (
    <div>
      <h3>Help us out! </h3>
      <p>If one or more items you have entered have "Cant find in store" in the isle section please select a catagory from the drop down box so we can add it</p>
      <p>Thanks!</p>
      <form action="">
        <label htmlFor="item">Item  </label>
        <select name="" id="item">
          <option value="fruit/veg">Fruit &amp; Vegetables</option>
          <option value="bread">Bread</option>
          <option value="snacks">Snacks</option>
          <option value="alcohol">Alcohol</option>
          <option value="cleaning">Cleaning</option>
          <option value="personal hygiene">Personal Hygiene</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="meats">Meats</option>
          <option value="dairy">Dairy</option>
          <option value="organic">Organic</option>
        </select>
        <button type="submit">Submit</button>
        <p>If not on the list please input a catagory here and we will review</p>
        <input type="text"/> <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HelpUsForm
import React, { useState } from "react";

const AddItemForm = props => {
  const [data, setData] = useState({ item: "", type: "", isle: -1, id: 0 });

  /* Simon example
    const [item, setItem] = useState("");
    const [type, setType] = useState(undefined);

    const submitHandler = () => [];

    const list = [];

    const sortedList = useMemo(() => { sort list here }, [list])

    <input name="item" placeholder="Item" value={item} onChange={(e => setItem(e.target.value)} />

  */

  // Library
  const isleZero = ["fruit/veg", "organic", "fancy cheese", "deli"];
  const isleOne = ["beer/wine", "chips", "snacks"];
  const isleTwo = ["confectionary", "magazines", "loose tubs"];
  const isleSix = [
    "male grooming",
    "personal hygiene",
    "female grooming",
    "first aid",
  ];

  const setIsle = () => {
    if (isleZero.includes(data.type)) {
      return 0;
    } else if (isleOne.includes(data.type)) {
      return 1;
    } else if (isleTwo.includes(data.type)) {
      return 2;
    } else if (isleSix.includes(data.type)) {
      return 6;
    } else {
      return -1;
    }
  };

  const sendItemHandler = e => {
    e.preventDefault();
    const id = Date.now();
    props.getItemHandler({
      item: data.item,
      type: data.type,
      isle: setIsle(),
      id: id,
      check: false,
    });
    setData({ item: "", type: "", isle: -1, id: 0 });
  };

  const addItemHandler = e => {
    const newData = { ...data };
    newData.item = e.target.value;
    setData(newData);
  };

  const addTypeHandler = e => {
    const newData = { ...data };
    newData.type = e.target.value;
    setData(newData);
  };

  return (
    <div>
      <div className="formWrapper">
        <h3>Add Item</h3>
        <div className="addItemForm">
          <form action="">
            <input
              name="item"
              type="text"
              placeholder="Item..."
              value={data.item}
              onChange={addItemHandler}
            />
            <select
              name="type"
              id=""
              value={data.type}
              onChange={addTypeHandler}>
              <option value="" selected disabled>
                Item Type
              </option>
              <option value="fruit/veg">Fruit and Veg</option>
              <option value="beer/wine">Beer / Wine</option>
              <option value="personal hygiene">Personal hygiene</option>
              <option value="?">Dont know</option>
            </select>
            <button onClick={sendItemHandler}>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItemForm;

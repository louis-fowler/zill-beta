import React, { useState } from 'react';

const AddItemForm = (props) => {
  const [data, setData] = useState(
    {item: "", type: "", isle: -1}
  );

  /* Simon example
    const [item, setItem] = useState("");
    const [type, setType] = useState(undefined);

    const submitHandler = () => [];

    const list = [];

    const sortedList = useMemo(() => { sort list here }, [list])

    <input name="item" placeholder="Item" value={item} onChange={(e => setItem(e.target.value)} />

  */

  const sendItemHandler = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 11) + 0
    props.getItemHandler({item: data.item, type: data.type, isle: randomNumber});
    setData({item: "", type: "", isle: -1})
  }

  const addItemHandler = e => {
    const newData = {...data}
    newData.item = e.target.value
    setData(newData)
  }

  const addTypeHandler = e => {
    const newData = {...data};
    newData.type = e.target.value;
    setData(newData)
  }

  return (
    <div>
      <form action="">
        <input name="item" type="text" placeholder="Item" value={data.item } onChange={addItemHandler}/>
        <select name="type" id="" value={data.type} onChange={addTypeHandler}>
          <option value="fruit/veg">Fruit and Veg</option>
          <option value="bread">Bread</option>
          <option value="personal hygiene">Personal hygiene</option>
          <option value="?">Dont know</option>
        </select>
        <button onClick={sendItemHandler}>submit</button>
      </form>
    </div>
  );
}

export default AddItemForm;

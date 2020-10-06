import React, { useState } from "react";
import List from "./List";

const App = () => {
  const [items, setItems] = useState("");
  const [add, setAdd] = useState([]);

  const handleInput = (e) => {
    setItems(e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    setAdd((oldItems) => {
      return [...oldItems, items];
    });
    setItems("");
  };

  const deleteItem = (id) =>{
    id.preventDefault();
    console.log("deleted");
    setAdd((oldItems) => {
        return oldItems.filter((arrElem,index)=>{
    return index !== id;
    });
 });
};

  return (
    <div>
      <h1>
        <b>Todo - List</b>
      </h1>
      <form>
        <input
          type="text"
          placeholder="Enter a todo..."
          value={items}
          onChange={handleInput}
        />
        <button onClick={addItem}> + </button>
        <ol>
          {
            add.map((itemVal, index) => {
              return <List
              key={index}
              text={itemVal}
              onSelect={deleteItem}
              />;
            })
          }
        </ol>
      </form>
    </div>
  );
};

export default App;

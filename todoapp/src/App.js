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
        <button onClick={addItem}>Submit</button>
        <ol>
          {
            add.map((itemVal) => {
              return <List/>
            })
          }
        </ol>
      </form>
    </div>
  );
};

export default App;

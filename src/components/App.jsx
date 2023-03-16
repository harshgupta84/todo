import React, { useState } from "react";

function App() {
  const [item,newItem]=useState([]);
  const [inputData,newData]= useState("");
  
  const inputdata=(event)=>{
    newData(event.target.value);
  }
  const addItem=()=>{
    newItem((oldItem) =>{
      return [...oldItem,inputData];
  })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text"  onChange={inputdata}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{
          item.map((inputData,index)=>{
           return <li>{inputData}</li>
      })
    }</ul>
      </div>
    </div>
  );
}

export default App;

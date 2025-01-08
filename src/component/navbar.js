import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [change, setchange] = useState({ name: "" });
  let handleChange = (e) => {
    settodo(e.target.value)
  };

  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  let handleEdit=()=>{

  }

  let handleAdd=()=>{
    settodo([...todo ,{todo, iscompleted:false}])
    settodo("")
    console.log(todos )
  }

  let handleRemove=()=>{

  }
  
  return (
    <div>
      <div className="container">
        <div className="title">Todo App</div>

        <div className="addup">
          <input 
            type="text"
            
            name="text"
            value={todo}
            onChange={handleChange}
            placeholder="Enter Title"
            className="typing"
             
           />
          <div className="button">
            <button onClick={handleAdd}>ADD</button>
          </div>
        </div>
        
        <div>
          <div className="mytodos">My Todos</div>
          {todos.map(item=>{
            
            return<div >
          
          <button onClick={handleEdit} className="btn1">Edit</button>
          <div className={item.iscompleted ?"": "line-through"}>{item.todo} 
          <button onClick={handleRemove} className="btn2">Remove </button>
        

        </div>
        
        </div>  
            })}


          </div>
      </div>
      
    </div>
  );
};

export default Navbar;

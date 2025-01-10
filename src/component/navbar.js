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
    let updatedtodos=([...todos ,{todo, iscompleted:false}])
    settodos(updatedtodos)
    settodo("");
    console.log(updatedtodos)
  }

  let handleRemove=()=>{

  }
  
  return (
    <div>
      <div className="container">
        <div className="title">Todo App</div>

        <div className="addup">
          <input onChange={handleChange}
            type="text"
            
            name="text"
            value={todo}
            
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
          
          <div className="btns">
          <button onClick={handleEdit} >Edit</button>
          <button onClick={handleRemove} >Remove </button>
          <div className="printedTodo" >{item.todo} </div>
          </div>
          

        
        
        </div>  
            })}


          </div>
      </div>
      
    </div>
  );
};

export default Navbar;

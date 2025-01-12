import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const Navbar = () => {
  const [change, setchange] = useState({ name: "" });
  let handleChange = (e) => {
    settodo(e.target.value)
  };

  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  let handleEdit=(e,id)=>{
    let t =todos.find((i)=>i.id===id)
    settodos(t[0].todo)
    
  }

  let handleAdd=()=>{
    if(todo.trim()===""){
      alert("todos can't be empty")
      return;
    }
    
    let updatedtodos=([...todos ,{id:uuidv4(),todo, iscompleted:false}])
    settodos(updatedtodos)
    settodo("");
    console.log(updatedtodos)
  }

  let handleRemove=(id)=>{
      todos.findIndex(item=>{
      return item.id ===id;
      
    })
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    settodos(newTodos)
    alert(`Do you really want to remove this todo ${newTodos}`)
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
          <button onClick={(e)=>handleEdit(e,item.id)} className="btn1" >Edit</button>
          <button onClick={()=>{handleRemove(item.id)}} className="btn2">Remove </button>
          <div className="printedTodo" >{item.todo} 
          
          </div>
          
          </div>
          

        
        
        </div>  
            })}


          </div>
      </div>
      
    </div>
  );
};

export default Navbar;

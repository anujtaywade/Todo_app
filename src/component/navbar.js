import React, {  useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const Navbar = () => {
  const [change, setchange] = useState({ name: "" });
  let handleChange = (e) => {
    settodo(e.target.value)
  };  

  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [editTab, seteditTab] = useState(null);

  useEffect(() => {
    
      const storedtodos = localStorage.getItem("todos")
        console.log(storedtodos)
        settodos(JSON.parse(storedtodos))
        
  }, []); 
 
    const setlocalstorage=()=>{
      console.log(todos)
      localStorage.setItem("todos",JSON.stringify(todos))
    }
   
    

  

  

  let handleEdit=(e,id)=>{
    
        let t =todos.find((i)=>i.id===id)
      if(t){
        settodo(t.todo)
       seteditTab(id) 
    
      } 
     
  }


  let handleAdd=()=>{
    if(todo.trim()===""){
      alert("todos can't be empty")
      return;
    }
   
    
    if(editTab!==null){
    let updatedtodos=todos.map((item)=>
          item.id===editTab?{...item,todo}:item
        )
        settodos(updatedtodos)
        seteditTab(null);
        console.log(updatedtodos)
        
    } 

     else {
      let newTodo = { id: uuidv4(), todo, isCompleted: false };
      settodos([...todos, newTodo]);
    }
   settodo("")
   setlocalstorage()
  };
  

  let handleRemove=(id)=>{
      todos.findIndex(item=>{
      return item.id ===id;
      
    })
    let confirm=window.confirm("do you really want to delete this todo")
    if(confirm){
      let finalTodoos=todos.filter((item)=>item.id!==id);
      settodos(finalTodoos)
    
    }
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
          <div >
            <button onClick={handleAdd} className="button">ADD</button>
          </div>
        </div>
        
        <div>
        
          <div className="mytodos">My Todos</div>
          
          {todos.map(item=>{
          
            return<div key={item.id} >
          
          <div className="btns" >
          <button onClick={(e)=>handleEdit(e,item.id)} className="button" >Edit</button>
          <button onClick={()=>{handleRemove(item.id)}} className="button" >Remove </button>
          
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

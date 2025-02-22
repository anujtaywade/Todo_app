import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Navbar = () => {
  let handleChange = (e) => {
    settodo(e.target.value);
  };

  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [editTab, seteditTab] = useState(null);

  useEffect(() => {
    const storedtodos = localStorage.getItem("todos");
    if (storedtodos) {
      settodos(JSON.parse(storedtodos));
    }
  }, []);

  let handleEdit = (e, id) => {
    let t = todos.find((i) => i.id === id);
    if (t) {
      settodo(t.todo);
      seteditTab(id);
    }
  };

  let handleAdd = () => {
    if (todo.trim() === "") {
      alert("todos can't be empty");
      return;
    }

    if (editTab !== null) {
      const updatedtodos =  todos.map((item) =>
        item.id === editTab ? { ...item, todo } : item
      );
      settodos(updatedtodos);
      localStorage.setItem("todos", JSON.stringify(updatedtodos));
      seteditTab(null);
    } else {
      const newTodo = { id: uuidv4(), todo, isCompleted: false };
      const newTodos = [...todos, newTodo];
      settodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    settodo("");
  };

  let handleRemove = (id) => {
    let confirm = window.confirm("do you really want to delete this todo");
    if (confirm) {
      const finalTodos = todos.filter((item) => item.id !== id);
      settodos(finalTodos);
      localStorage.setItem("todos", JSON.stringify(finalTodos));
    }
  };

  return (
    <div>
      <div className="container">
        <div className="title">Todo App</div>

        <div className="addup">
          <input
            onChange={handleChange}
            type="text"
            name="text"
            value={todo}
            placeholder="Enter Title"
            className="typing"
          />
          <div>
            <button onClick={handleAdd} className="addButton">
              ADD
            </button>
          </div>
        </div>

        <div>
          <div className="mytodos">My Todos</div>

          {todos &&
            todos.map((item) => {
              return (
                <div key={item.id} className="printedTodo">
                  
                    <button
                      onClick={(e) => handleEdit(e, item.id)}
                      className="editButton"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        handleRemove(item.id);
                      }}
                      className="removeButton"
                    >
                      Remove{" "}
                    </button>
                    
                    <div >{item.todo}</div>
                  
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
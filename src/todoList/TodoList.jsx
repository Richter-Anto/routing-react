import React, { useState } from 'react'
import "./todolist.css"

const TodoList = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    let handleSubmit = (e) => {
        e.preventDefault();
        if (task === "") return;

        setList([...list, task])
        console.log(list);
    }

    let handleDelete = () => {
        console.log(list);
        
    }

  return (
    <section className="todo-wrapper">
      <article className="todo-container">
        <form action="" onSubmit={handleSubmit}>
          <h1>What's the plan for the day</h1>
          <div>
            <input
              type="text"
              placeholder="Enter youe task"
              value={task}
              onChange={e => setTask(e.target.value)}
            />
            <button>Add</button>
          </div>
        </form>
        <div className="list-container">
          <ul>
            {list.map((item, index) => {
              return (
                <li key={index} className="single-list">
                  <h3>{item}</h3>

                  <div>
                    <button>Edit</button>
                          <button onClick={handleDelete} id={ index}>del</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </section>
  );
}

export default TodoList
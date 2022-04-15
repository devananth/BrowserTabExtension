import { useData } from "../../context";
import { DATA_ACTIONS } from "../../utils";
import { v4 as uuid } from "uuid";
import "./todo.css";
import { useState } from "react";

const Todo = () => {
  const {
    dataState: { todos },
    dataDispatch,
  } = useData();

  const [todoInput, setTodoInput] = useState("");

  const addTodosToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    const newTodo = { id: uuid(), todo: todoInput, isCompleted: false };
    dataDispatch({
      type: DATA_ACTIONS.ADD_TODO,
      payload: [...todos, newTodo],
    });
    setTodoInput("");
  };

  const completeTodoHandler = (id) => {
    const modifiedTodosList = todos.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, isCompleted: !todoItem.isCompleted };
      } else {
        return { ...todoItem };
      }
    });

    dataDispatch({
      type: DATA_ACTIONS.ADD_TODO,
      payload: modifiedTodosList,
    });
  };

  const deleteTodoHandler = (id) => {
    const modifiedTodosList = todos.filter(({ isCompleted }) => !isCompleted);

    dataDispatch({
      type: DATA_ACTIONS.DELETE_TODO,
      payload: modifiedTodosList,
    });
  };

  addTodosToLocalStorage();

  return (
    <section className="todo__container p-sm rounded">
      <span className=" txt-3xl txt-sbold">Todo List</span>
      <form className="m-sm" onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Enter your todo"
          className="txt-2xl"
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
        />
      </form>
      <ul className="todo__list">
        {todos.length > 0 &&
          todos.map(({ id, todo, isCompleted }) => {
            return (
              <li key={id} className="todo__item">
                <label
                  className={`d-flex align-center txt-2xl ${
                    isCompleted && `txt-strike-through`
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => completeTodoHandler(id)}
                  />
                  {todo}
                </label>
              </li>
            );
          })}
      </ul>
      <button className="btn txt-sbold" onClick={deleteTodoHandler}>
        <span className="icon">
          <i className="fa fa-trash"></i>
        </span>
        Completed Todos
      </button>
    </section>
  );
};

export { Todo };

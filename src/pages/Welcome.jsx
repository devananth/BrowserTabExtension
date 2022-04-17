import { useState } from "react";
import { useData } from "../context";
import { DATA_ACTIONS } from "../utils";
import "./page.css";

const Welcome = () => {
  const [userName, setUserName] = useState("");

  const { dataDispatch } = useData();

  const nameHandler = (event) => {
    const name = event.target.value.trim();
    setUserName(name);
  };

  const formHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("userName", userName);
    localStorage.setItem("todosList", JSON.stringify([]));
    dataDispatch({
      type: DATA_ACTIONS.SET_USER_NAME,
      payload: userName,
    });
  };

  return (
    <section className="d-flex col xy-center">
      <h1>Hello , What's your name ?</h1>
      <form onSubmit={formHandler}>
        <input
          type="text"
          onChange={nameHandler}
          className="m-2 txt-5xl txt-center"
          value={userName}
        />
      </form>
    </section>
  );
};

export { Welcome };

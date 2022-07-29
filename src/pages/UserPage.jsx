import { useState } from "react";
import { useData } from "../context";
import { DATA_ACTIONS } from "../utils";
import { Greetings, Time, Weather, Quote, Todo } from "../components";
import "./page.css";

const UserPage = () => {
  const [mainFocus, setMainFocus] = useState("");

  const { dataState, dataDispatch } = useData();

  const focusHandler = (event) => {
    const focus = event.target.value;
    setMainFocus(focus);
  };

  const formHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("mainFocus", mainFocus);
    dataDispatch({
      type: DATA_ACTIONS.SET_MAIN_FOCUS,
      payload: mainFocus.trim(),
    });
  };

  return (
    <section className="d-flex col xy-center">
      <Weather />
      <Time />
      <Greetings />
      {dataState.mainFocus === null ? (
        <form onSubmit={formHandler} className="txt-center m-1">
          <label className="txt-center h3">
            What's your main focus for today ?
          </label>
          <input
            type="text"
            onChange={focusHandler}
            className="w-50 m-2 p-sm txt-5xl txt-center"
            value={mainFocus}
            placeholder={"Enter your main focus"}
          />
        </form>
      ) : (
        <h4 className="txt-5xl">My Main Focus is : {dataState.mainFocus} </h4>
      )}
      <Quote />
      <Todo />
    </section>
  );
};

export { UserPage };

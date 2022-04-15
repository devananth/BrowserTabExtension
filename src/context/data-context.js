import { createContext, useContext, useEffect, useReducer } from "react";
import { initialDataState } from "../utils";
import { dataReducer } from "../reducers";
import { DATA_ACTIONS } from "../utils";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);

  useEffect(() => {
    const [userName, mainFocus, todos] = [
      localStorage.getItem("userName"),
      localStorage.getItem("mainFocus"),
      JSON.parse(localStorage.getItem("todos")),
    ];

    const date = new Date();

    dataDispatch({
      type: DATA_ACTIONS.SET_INITIAL_DATA,
      payload: { userName, mainFocus, todos },
    });

    dataDispatch({
      type: DATA_ACTIONS.SET_TIME,
      payload: {
        date: date,
        hours: date.getHours(),
        mins: date.getMinutes(),
        secs: date.getSeconds(),
      },
    });
  }, []);

  const value = { dataState, dataDispatch };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };

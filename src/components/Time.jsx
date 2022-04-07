import { useEffect } from "react";
import { useData } from "../context";
import { DATA_ACTIONS } from "../utils";

const Time = () => {
  const {
    dataState: { time },
    dataDispatch,
  } = useData();

  const getFormattedvalue = (value) => {
    return value.toString().padStart(2, "0");
  };

  useEffect(() => {
    const date = new Date();
    dataDispatch({
      type: DATA_ACTIONS.SET_TIME,
      payload: {
        date: date,
        hours: date.getHours(),
        mins: date.getMinutes(),
        secs: date.getSeconds(),
      },
    });
  }, [time]);

  const { hours, mins, secs } = time;

  return (
    <h1>{`${getFormattedvalue(hours)} : ${getFormattedvalue(
      mins
    )} : ${getFormattedvalue(secs)}`}</h1>
  );
};

export { Time };

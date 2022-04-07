export const initialDataState = {
  userName: null,
  mainFocus: null,
  time: {
    date: null,
    hours: null,
    mins: null,
    secs: null,
  },
};

export const DATA_ACTIONS = {
  SET_INITIAL_DATA: "SET_INITIAL_DATA",
  SET_USER_NAME: "SET_USER_NAME",
  SET_MAIN_FOCUS: "SET_MAIN_FOCUS",
  SET_TIME: "SET_TIME",
};

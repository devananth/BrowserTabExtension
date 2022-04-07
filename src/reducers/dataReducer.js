import { initialDataState, DATA_ACTIONS } from "../utils";

const dataReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case DATA_ACTIONS.SET_INITIAL_DATA:
      return { ...payload };
    case DATA_ACTIONS.SET_USER_NAME:
      return { ...state, userName: payload };
    case DATA_ACTIONS.SET_MAIN_FOCUS:
      return { ...state, mainFocus: payload };
    case DATA_ACTIONS.SET_TIME:
      return {
        ...state,
        time: { ...payload },
      };
    default:
      return { ...initialDataState };
  }
};

export { dataReducer };

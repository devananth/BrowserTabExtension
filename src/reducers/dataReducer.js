import { initialDataState, DATA_ACTIONS } from "../utils";

const dataReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case DATA_ACTIONS.SET_INITIAL_DATA:
      return { ...state, ...payload };
    case DATA_ACTIONS.SET_USER_NAME:
      return { ...state, userName: payload };
    case DATA_ACTIONS.SET_MAIN_FOCUS:
      return { ...state, mainFocus: payload };
    case DATA_ACTIONS.SET_TIME:
      return {
        ...state,
        time: { ...payload },
      };
    case DATA_ACTIONS.ADD_TODO:
    case DATA_ACTIONS.COMPLETE_TODO:
    case DATA_ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: payload,
      };

    default:
      return { ...initialDataState };
  }
};

export { dataReducer };

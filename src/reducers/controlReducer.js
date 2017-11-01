import { PLAY, STOP, LOAD } from "../constants/constants";

const initialState = {
  timerId: null,
  isRunning: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        timerId: action.timerId,
        isRunning: !state.isRunning
      };

    case STOP:
      return {
        ...state,
        timerId: null,
        isRunning: false
      };

    case LOAD:
      return {
        ...state,
        timerId: null,
        isRunning: false
      };

    default:
      return state;
  }
};

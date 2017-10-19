import { combineReducers } from "redux";

import formsReducer from "./reducer_forms";
import boardReducer from "./reducer_board";
import playStatusReducer from "./reducer_play_status";

// const initialState = {
//   boardVisible: false,
//   boardWidth: 0,
//   boardHeight: 0,
//   createBoard: []
// };

export default combineReducers({
  formsReducer,
  boardReducer,
  playStatusReducer
});

// export default function userstate(state = initialState) {
//   return state;
// }

// export default rootReducer;

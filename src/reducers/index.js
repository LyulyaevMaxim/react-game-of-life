import { combineReducers } from "redux";

import boardReducer from "./reducer_board";
import playStatusReducer from "./reducer_play_status";

const rootReducer = combineReducers({
  board: boardReducer,
  playState: playStatusReducer
});

export default rootReducer;

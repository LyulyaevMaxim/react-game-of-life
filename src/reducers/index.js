import { combineReducers } from "redux";

import formsReducer from "./reducer_play_status";
import boardReducer from "./reducer_board";
import playStatusReducer from "./reducer_play_status";

const rootReducer = combineReducers({
  forms: formsReducer,
  board: boardReducer,
  playState: playStatusReducer
});

export default rootReducer;

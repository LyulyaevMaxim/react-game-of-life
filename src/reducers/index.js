import { combineReducers } from "redux";
import * as grid from "../components/grid";
import boardReducer from "./boardReducer";
import formsReducer from "./formsReducer";
import controlReducer from "./controlReducer";

export default combineReducers({
  formsReducer,
  boardReducer,
  controlReducer
});

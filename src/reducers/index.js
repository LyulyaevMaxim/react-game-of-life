import { combineReducers } from "redux";
import * as grid from "../components/grid";;

const initialState = {
  formVisible: true,
  boardVisible: false,
  boardWidth: 0,
  boardHeight: 0,
  board: [],
  timerId: null,
  isRunning: false
};

function boardReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_ALIVE":
      let board = state.board;
      let cell = board[action.x][action.y];
      cell.status = !cell.status;
      cell.newBorn = !cell.newBorn;
      return {
        ...state,
        board: board
      };
    case "CLEAR":
      return {
        ...state,
        board: grid.makeGrid(state.boardHeight, state.boardWidth)
      };
    case "TICK":
      return {
        ...state,
        board: grid.advanceGrid(state.board)
      };
    case "SET_SIZES":
      return {
        ...state,
        boardWidth: +action.payload[0],
        boardHeight: +action.payload[1],
        board: grid.makeGrid(+action.payload[1], +action.payload[0]),
        formVisible: false,
        boardVisible: true
      };
    case "PLAY":
      return {
        ...state,
        timerId: action.timerId,
        isRunning: !state.isRunning
      };
    case "STOP":
      return {
        ...state,
        timerId: null,
        isRunning: false
      };
    default:
      return state;
  }
}

export default combineReducers({
  boardReducer
});
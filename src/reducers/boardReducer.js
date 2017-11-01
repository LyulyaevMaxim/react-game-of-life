import * as grid from "../components/grid";
import * as localStorage from "../components/localStorage";

import {
  TOGGLE_ALIVE,
  CLEAR,
  TICK,
  SET_SIZES,
  LOAD,
  SAVE
} from "../constants/constants";

const initialState = {
  boardVisible: false,
  boardWidth: 0,
  boardHeight: 0,
  board: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ALIVE:
      let board = state.board;
      let cell = board[action.x][action.y];
      cell.status = !cell.status;
      cell.newBorn = !cell.newBorn;
      return {
        ...state,
        board: board
      };

    case CLEAR:
      return {
        ...state,
        board: grid.makeGrid(state.boardHeight, state.boardWidth)
      };

    case TICK:
      return {
        ...state,
        board: grid.advanceGrid(state.board)
      };

    case SET_SIZES:
      return {
        ...state,
        boardWidth: +action.payload[0],
        boardHeight: +action.payload[1],
        board: grid.makeGrid(+action.payload[1], +action.payload[0])
      };

    case LOAD:
      let oldArray = localStorage.loadBoardOfLocalStorage(action.nickname);
      return {
        ...state,
        board: oldArray,
        boardHeight: oldArray.length,
        boardWidth: oldArray[0].length
      };

    case SAVE:
      return {
        ...state,
        username: localStorage.saveToLocalStorage(action.nickname, state.board)
      };

    default:
      return state;
  }
};

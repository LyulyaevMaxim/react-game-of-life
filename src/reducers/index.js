import { combineReducers } from "redux";
import * as grid from "../components/grid";;

const initialState = {
  formVisible: true,
  formForSaveVisible: false,
  formForLoadVisible: false,
  boardVisible: false,
  boardWidth: 0,
  boardHeight: 0,
  board: [],
  timerId: null,
  isRunning: false,
  firstShow: true
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
        boardVisible: true,
        firstShow: false
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

    case "SAVE":
      return {
        ...state,
        username: saveToLocalStorage(action.nickname, state.board),
        formForSaveVisible: false
      };

    case "LOAD":
      let oldArray = loadBoardOfLocalStorage(action.nickname);
      return {
        ...state,
        timerId: null,
        isRunning: false,
        formVisible: false,
        board: oldArray,
        boardHeight: oldArray.length,
        boardWidth: oldArray[0].length,
        username: action.nickname,
        firstShow: false,
        formForLoadVisible: false
      };

    case "SHOW_FORM_FOR_CREATE":
      return {
        ...state,
        formVisible: true,
        formForLoadVisible: false,
        formForSaveVisible: false
      };

    case "HIDE_FORM_FOR_CREATE":
      return {
        ...state,
        formVisible: false
      };

    case "SHOW_FORM_FOR_SAVE":
      return {
        ...state,
        formVisible: false,
        formForLoadVisible: false,
        formForSaveVisible: true
      };

    case "HIDE_FORM_FOR_SAVE":
      return {
        ...state,
        formForSaveVisible: false
      };

    case "SHOW_FORM_FOR_LOAD":
      return {
        ...state,
        formVisible: false,
        formForSaveVisible: false,
        formForLoadVisible: true
      };

    case "HIDE_FORM_FOR_LOAD":
      return {
        ...state,
        formForLoadVisible: false
      };

    default:
      return state;
  }
}

export default combineReducers({
  boardReducer
});

function saveToLocalStorage(nick, board) {
  try {
    let temp = JSON.stringify(board);
    localStorage.setItem(`${nick}`, temp);
  } catch (e) {
    if (e == 'QUOTA_EXCEEDED_ERR') {
      alert('Имейте совесть! Нельзя столько хранить в localStorage :(');
    }
  }
}

function loadBoardOfLocalStorage(nick) {
  let temp = localStorage.getItem(nick);
  return (temp === null) ? [[]] : JSON.parse(temp);
}
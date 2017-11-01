import { combineReducers } from "redux";
import * as grid from "../components/grid";
import boardReducer from "./boardReducer";
import controlReducer from "./controlReducer";
import {
  SET_SIZES,
  SAVE,
  LOAD,
  SHOW_FORM_FOR_CREATE,
  HIDE_FORM_FOR_CREATE,
  SHOW_FORM_FOR_SAVE,
  HIDE_FORM_FOR_SAVE,
  SHOW_FORM_FOR_LOAD,
  HIDE_FORM_FOR_LOAD
} from "../constants/constants";

const initialState = {
  formVisible: true,
  formForSaveVisible: false,
  formForLoadVisible: false,
  firstShow: true
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SIZES:
      return {
        ...state,
        formVisible: false,
        boardVisible: true,
        firstShow: false
      };

    case SAVE:
      return {
        ...state,
        formForSaveVisible: false
      };

    case LOAD:
      return {
        ...state,
        formVisible: false,
        username: action.nickname,
        firstShow: false,
        formForLoadVisible: false
      };

    case SHOW_FORM_FOR_CREATE:
      return {
        ...state,
        formVisible: true,
        formForLoadVisible: false,
        formForSaveVisible: false
      };

    case HIDE_FORM_FOR_CREATE:
      return {
        ...state,
        formVisible: false
      };

    case SHOW_FORM_FOR_SAVE:
      return {
        ...state,
        formVisible: false,
        formForLoadVisible: false,
        formForSaveVisible: true
      };

    case HIDE_FORM_FOR_SAVE:
      return {
        ...state,
        formForSaveVisible: false
      };

    case SHOW_FORM_FOR_LOAD:
      return {
        ...state,
        formVisible: false,
        formForSaveVisible: false,
        formForLoadVisible: true
      };

    case HIDE_FORM_FOR_LOAD:
      return {
        ...state,
        formForLoadVisible: false
      };

    default:
      return state;
  }
}

export default combineReducers({
  formReducer,
  boardReducer,
  controlReducer
});

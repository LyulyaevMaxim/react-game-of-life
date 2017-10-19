const initialState = {
  formVisible: true,
  boardVisible: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CREATE":
      return {
        formVisible: false,
        boardVisible: true
      };
    case "SET_SIZES":
      return {
        ...state,
        boardWidth: action.payload[0],
        boardHeight: 5,
        formVisible: false
      };
    case "CHANGE":
      return {
        formVisible: true
      };
    default:
      return state;
  }
};

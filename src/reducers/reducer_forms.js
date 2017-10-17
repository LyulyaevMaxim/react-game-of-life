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
    case "CHANGE":
      return {
        formVisible: true
      };
    default:
      return state;
  }
};

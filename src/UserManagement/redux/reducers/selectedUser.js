let initialState = null;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SELECT_USER":
      //   state = payload;
      //   return { ...state };
      return payload;
    default:
      return state;
  }
};

export default reducer;

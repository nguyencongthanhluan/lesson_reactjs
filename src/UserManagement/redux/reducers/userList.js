let initialState = [
  {
    id: 1,
    name: "Dinh Phuc Nguyen",
    username: "dpnguyen",
    email: "dpnguyen@gmail.com",
    phoneNumber: "1123123213",
    type: "VIP",
  },
  {
    id: 2,
    name: "Nguyen Dinh Phuc",
    username: "nguyendp",
    email: "nguyendp@gmail.com",
    phoneNumber: "1123123213",
    type: "VIP",
  },
];

const reducer = (state = initialState, { type, payload }) => {
  // const { type } = action
  switch (type) {
    case "ADD_USER":
      state.push(payload);
      return [...state];
    case "DELETE_USER":
      const index = state.findIndex((item) => item.username === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    case "UPDATE_USER":
      const Index = state.findIndex(
        (item) => item.username === payload.username
      );
      state[Index] = payload;
      return [...state];
    default:
      return state;
  }
};
export default reducer;

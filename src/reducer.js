const initialState = {
  login: ''
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG':
      return {login: action.payload};
    default:
      return state;
  }
}

export default reducer;
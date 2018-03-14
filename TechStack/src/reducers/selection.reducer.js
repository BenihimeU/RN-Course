export default (state = null, action) => {
  switch (action.type) {
    case 'select-library':
      return action.payload;
      break;

    default:
      return state;
  }
}
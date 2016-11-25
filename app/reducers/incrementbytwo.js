export default (state = 0, action) => {
  switch (action.type) {
    case 'alice/INCREMENT':
      return state + 2
    case 'alice/DECREMENT':
      return state - 2
    default:
      return state
  }
}

export default (state = 0, action) => {
  switch (action.type) {
    case 'dennis/INCREMENT':
      return state + 1
    case 'dennis/DECREMENT':
      return state - 1
    default:
      return state
  }
}

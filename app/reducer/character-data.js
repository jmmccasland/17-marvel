export default function characterData(state = null, action) {
  switch (action.type) {
    case 'CHARACTERS@FIND_ALL_COMPLETE':
      return action.data;
    default:
      return state;
  }
}

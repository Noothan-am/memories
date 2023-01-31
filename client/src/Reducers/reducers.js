
export const posts = (state = [], action) => {
  switch (action.type) {
  case 'ALLPOST':
    return action.payload;
  case 'GETPOST':
    return {}
  default: return state;
  }  
}


const initialState = {
    posts: [],
  };
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS':
        return { ...state, posts: action.payload };
      case 'ADD_POST':
        return { ...state, posts: [...state.posts,{...action.payload, id: state.posts.length + 1}] };
      default:
        return state;
    }
  };
  
  export default postsReducer;
  
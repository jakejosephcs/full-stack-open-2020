import blogServices from '../services/blogs'

const blogReducer = (state=[], action) => {
  switch(action.type) {
  case 'NEW_BLOG':
    return [...state, action.data]
  case 'DELETE_BLOG':
    return state.filter(b => b.id !== action.data.id)
  case 'INIT_BLOGS':
    return action.data
  case 'NEW_LIKE':
    // ENTER LOGIC
    return state
  default:
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogServices.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs,
    })
  }
}


export default blogReducer
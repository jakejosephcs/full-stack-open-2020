import blogServices from '../services/blogs'

const reducer = (state=[], action) => {
  switch(action.type) {
  case 'INIT':
    return action.data
  case 'LIKE': {
    const liked = action.data
    return state.map(b => b.id===liked.id ? liked : b)
  }
  case 'COMMENT': {
    const commented = action.data
    return state.map(b => b.id === commented.id ? commented : b)
  }
  case 'DELETE':
    return state.filter(b => b.id !== action.id)
  case 'CREATE':
    return [...state, action.data]
  default:
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogServices.getAll()
    dispatch({
      type: 'INIT',
      data: blogs,
    })
  }
}

export const removeBlog = (id) => {
  return async dispatch => {
    // Removes it from the actual backend
    await blogServices.deleteBlog(id)
    // Removes it from the state
    dispatch({
      type: 'DELETE',
      id
    })
  }
}

export const createBlog = (content) => {
  return async dispatch => {
    const data = await blogServices.create(content)
    dispatch({
      type:'CREATE',
      data
    })
  }
}

export const likeBlog = (blog) => {
  return async dispatch => {
    const toLike = { ...blog, likes: blog.likes + 1 }
    const data = await blogServices.update(toLike)
    dispatch({
      type:'LIKE',
      data
    })
  }
}

export const commentBlog = (id, comment) => {
  return async dispatch => {
    const data = await blogServices.comment(id, comment)
    dispatch({
      type: 'COMMENT',
      data
    })
  }
}

export default reducer
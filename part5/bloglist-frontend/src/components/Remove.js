import React from 'react'
import blogServices from '../services/blogs'

const Remove = ({
  currentUser,
  blog
}) => {

  const removeBlog = async () => {
    if (window.confirm(`Remove blog "${blog.title}" by ${blog.author}?`)) {
      await blogServices.deleteBlog(blog)
    }
  }

  if (currentUser.username === blog.user.username) {
    return (
      <button onClick={removeBlog}>Remove</button>
    )
  }
  return null
}

export default Remove
import React, {useState} from 'react'
import blogService from '../services/blogs'
import Remove from '../components/Remove'

const Blog = ({ 
  blog, 
  // handleLikes, 
  currentUser
}) => {
  const [show, setShow] = useState(true)

  const showWhenFalse = {display: show ? '' : 'none'}
  const hideWhenTrue = {display: show ? 'none' : ''}

  const handleShow = () => {
    setShow(false)
  }

  const handleHide = () => {
    setShow(true)
  }

  const increaseLikes = async () => {
    await blogService.updateLikes({
      _id: blog.id,
      user: blog.user._id,
      likes: blog.likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url
    })
  }

  // const updateLikes = async (event) => {
  //   await handleLikes({
  //     _id: blog.id,
  //     user: blog.user._id,
  //     likes: blog.likes + 1,
  //     author: blog.author,
  //     title: blog.title,
  //     url: blog.url
  //   })
  // }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const showRemoveButton = () => {
    if (currentUser.username === blog.user.username) {
      return (
        <>
          <button>Remove</button>
        </>
      ) 
    }
    return null
  }

  return(
    <div style={blogStyle}>
      {blog.title} by {blog.author}
      <div style={showWhenFalse}>
        <button onClick={handleShow}>View</button>
      </div>
      <div style={hideWhenTrue}>
        <button onClick={handleHide}>Hide</button>
        <div>{blog.url}</div>
        <div>
          {blog.likes}
          <button onClick={increaseLikes}>likes</button>
        </div>
        <div>{blog.author}</div>
        <Remove currentUser={currentUser} blog={blog} />
      </div>
    </div>
  )
}

export default Blog

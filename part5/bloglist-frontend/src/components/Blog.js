import React, { useState } from 'react'

const Blog = ({
  blog,
  handleLikes,
  currentUsersBlog,
  handleRemove
}) => {
  const [show, setShow] = useState(false)

  const label = show ? 'hide' : 'view'

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }


  return(
    <div style={blogStyle} className='blog'>
      <div>
        <i>{blog.title}</i> by {blog.author} <button onClick={() => setShow(!show)}>{label}</button>
      </div>
      {show &&
      <div>
        <div>{blog.url}</div>
        <div>
          likes {blog.likes}
          <button onClick={ () => handleLikes(blog.id) }>like</button>
        </div>
        <div>{blog.user.name}</div>
        {currentUsersBlog && <button onClick={ () => handleRemove(blog.id) }>Remove</button>}
      </div>
      }
    </div>
  )
}

export default Blog

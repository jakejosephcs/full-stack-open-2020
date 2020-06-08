import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Message from './components/Message'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import CreateBlogForm from './components/CreateBlogForm'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')
  const [addedBlog, setAddedBlog] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setMessage('Wrong Username or Password')
      setTimeout(() => {
        setMessage('')
      }, 2500)
    }
  }

  const handleLogout = async () => {
    await window.localStorage.clear()
    setUser(null)
  }

  const handleCreateBlog = async (blogObject) => {
    blogFormRef.current.toggleVisibility()
    const newBlog = await blogService.create(blogObject)
    setBlogs(blogs.concat(newBlog))
    setMessage('successful')
    setTimeout(() => {
      setMessage('')
    }, 2500)
    setAddedBlog(newBlog)
  }

  const handleLikes = async (id) => {
    const blogToLike = blogs.find(b => b.id === id)
    const likedBlog = { ...blogToLike, likes: blogToLike.likes + 1, user: blogToLike.user.id }
    await blogService.update(likedBlog)
    setBlogs(blogs.map(b => b.id === id ? { ...blogToLike, likes: blogToLike.likes + 1 } : b))
  }

  const handleRemove = async (id) => {
    const blogToRemove = blogs.find(b => b.id === id)
    const ok = window.confirm(`Remove blog "${blogToRemove.title}" by ${blogToRemove.author}?`)
    if (ok) {
      await blogService.deleteBlog(blogToRemove)
      setBlogs(blogs.filter(b => b.id !== id))
    }
  }

  const loginForm = () => {
    return(
      <LoginForm
        handleSubmit={handleLogin}
        username={username}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        password={password}
        handlePasswordChange={({ target }) => setPassword(target.value)}
      />
    )
  }

  const blogFormRef = React.createRef()

  const blogForm = () => {
    return(
      <Togglable buttonLabel='Create new Blog' ref={blogFormRef}>
        <CreateBlogForm
          handleCreateBlog={handleCreateBlog}
        />
      </Togglable>
    )
  }


  return(
    <div>
      <h1>Blogs</h1>
      <Message message={message} blog={addedBlog}/>
      {user === null ?
        loginForm() :
        <div>
          <h3>{user.name} is logged in</h3>
          <button onClick={handleLogout}>Logout</button>
          <div>
            {blogForm()}
          </div>
          {blogs.sort((a,b) => b.likes - a.likes).map(blog =>
            <Blog
              key={blog.id}
              blog={blog}
              currentUsersBlog={user.username === blog.user.username}
              handleLikes={handleLikes}
              handleRemove={handleRemove}
            />
          )}
        </div>
      }
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Message from './components/Message'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import CreateBlogForm from './components/CreateBlogForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setUrl] = useState("")
  const [message, setMessage] = useState("")
  const [addedBlog, setAddedBlog] = useState("")
  const [loginVisible, setLoginVisible] = useState(false)

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
      setMessage("Wrong Username or Password")
      setTimeout(() => {
        setMessage('')
      }, 2500)
    }
  }

  const handleLogout = async (event) => {
    await window.localStorage.clear()
    setUser(null)
  }

  const handleCreateBlog = async (event) => {
    event.preventDefault()
    const newBlog = await blogService.create({
      title, author, url,
    })
    setBlogs(blogs.concat(newBlog))
    setMessage('successful')
    setTimeout(() => {
      setMessage('')
    }, 2500)
    setAddedBlog(newBlog)
    setTitle('')
    setAuthor('')
    setUrl('')
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

  const blogForm = () => {
    return(
      <CreateBlogForm 
        handleCreateBlog={handleCreateBlog}
        title={title}
        handleTitleChange={({ target }) => setTitle(target.value)}
        author={author}
        handleAuthorChange={({ target }) => setAuthor(target.value)}
        url={url}
        handleUrlChange={({ target }) => setUrl(target.value)}
      />
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
          {blogForm()}
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
          )}
        </div>
      }
    </div>
  )
}

export default App
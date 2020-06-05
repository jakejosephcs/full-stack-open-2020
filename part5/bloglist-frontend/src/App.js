import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Message from './components/Message'
import blogService from './services/blogs'
import loginService from './services/login'

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
    setAddedBlog(newBlog)
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  if (user === null) {
    return(
      <div>
        <h2>Log in to application</h2>
        <Message message={message} blog={addedBlog}/>
        <form onSubmit={handleLogin}>
            <div>
              Username 
              <input
                type="text"
                value={username}
                name="Username"
                onChange={({ target }) => setUsername(target.value)}
              />
            </div>
            <div>
              Password
              <input
                type="password"
                value={password}
                name="Password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <button type="Submit">Login</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <h2>Blogs</h2>
      <Message message={message} blog={addedBlog}/>
      <h3>{user.name} is logged in</h3>
      <button onClick={handleLogout}>Logout</button>
      <h2>Create New</h2>
      <form onSubmit={handleCreateBlog}>
        <div>
          title:
          <input type="text" value={title} name="Title" onChange={({ target }) => setTitle(target.value)}/>
        </div>
        <div>
          author:
          <input type="text" value={author} name="Author" onChange={({ target }) => setAuthor(target.value)} />
        </div>
        <div>
          url:
          <input type="text" value={url} name="Url" onChange={({ target }) => setUrl(target.value)}/>
        </div>
        <button type="submit">Create</button>
      </form>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App
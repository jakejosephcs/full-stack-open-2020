import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/user'
import loginServices from '../services/login'
import { setNotification } from '../reducers/notification'
import storage from '../utils/storage'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginServices.login({
        username, password
      })
      setUsername('')
      setPassword('')
      dispatch(login(user))
      dispatch(setNotification(`${user.name} welcome back!`))
      storage.saveUser(user)
    } catch(exception) {
      dispatch(setNotification('Wrong username/password', 'error'))
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            id='username'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
                    password
          <input
            id="password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit" id="login">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
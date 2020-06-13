# Exercises 7.4 - 7.8. [LINK to exercises](https://fullstackopen.com/en/part7/custom_hooks#exercises-7-4-7-8)
Let's return to working with anecdotes. Use the redux-free anecdote app found in the repository https://github.com/fullstack-hy2020/routed-anecdotes as the starting point for the exercises.

## 7.4, 7.5, 7.6
Complete in ```routed-anecdotes``` folder

## 7.7
Complete in ```country-hook``` folder


## 7.8: ultimate hooks
The code of the application responsible for communicating with the backend of the note application of the previous parts looks like this:

```javascript
import axios from 'axios'
const baseUrl = '/api/notes'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = (id, newObject) => {
  const request = axios.put(`${ baseUrl } /${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update, setToken }
```

We notice that the code is in no way specific to the fact that our application deals with notes. Excluding the value of the ```baseUrl``` variable, the same code could be reused in the blog post application for dealing with the communication with the backend.

Extract the code for communicating with the backend into its own ```useResource``` hook. It is sufficient to implement fetching all resources and creating a new resource.

The ```useResource``` custom hook returns an array of two items just like the state hooks. The first item of the array contains all of the individual resources and the second item of the array is an object that can be used for manipulating the resource collection, like creating new ones.


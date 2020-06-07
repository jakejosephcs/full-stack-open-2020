import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config) // axios.post(url, data, config)
  return response.data
}

const updateLikes = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const objectToPost = {
    user: newObject.user,
    likes: newObject.likes,
    author: newObject.author,
    title: newObject.title,
    url: newObject.url
  }

  const response = await axios.put(`${baseUrl}/${newObject._id}`, objectToPost, config)
  return response.data
}

const deleteBlog = async (blogToDelete) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(`${baseUrl}/${blogToDelete.id}`, config)

  return response.data
}


export default { getAll, setToken, create, updateLikes, deleteBlog }
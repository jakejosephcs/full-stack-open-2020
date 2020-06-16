import axios from 'axios'
import storage from '../utils/storage'

const baseUrl = '/api/blogs'

const getConfig = () => {
  return {
    headers: { Authorization: `bearer ${storage.loadUser().token}` },
  }
}

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const create = async (blog) => {
  const request = await axios.post(baseUrl, blog, getConfig()) // axios.post(url, data, config)
  return request.data
}

const update = async (blog) => {
  const request = await axios.put(`${baseUrl}/${blog.id}`, blog, getConfig())
  return request.data
}

const deleteBlog = async (id) => {
  const request = await axios.delete(`${baseUrl}/${id}`, getConfig())
  return request.data
}

const comment = async (id, comment) => {
  const request = await axios.post(`${baseUrl}/${id}/comments`, { comment }, getConfig())
  return request.data
}

export default { getAll, create, update, deleteBlog, comment }
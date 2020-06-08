import React, { useState } from 'react'

const CreateBlogForm = ({
  handleCreateBlog,
}) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const addBlog = async (event) => {
    event.preventDefault()
    await handleCreateBlog({
      title, author, url
    })
    setTitle('')
    setAuthor('')
    setUrl('')
  }


  return (
    <div>
      <h2>Create New Blog</h2>
      <form onSubmit={addBlog}>
        <div>
          Title
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          Author
          <input
            type="text"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          Url
          <input
            type="text"
            value={url}
            onChange={handleUrlChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateBlogForm
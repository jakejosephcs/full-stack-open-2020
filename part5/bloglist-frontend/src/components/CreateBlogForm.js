import React from 'react'

const CreateBlogForm = ({
    handleCreateBlog,
    title,
    handleTitleChange,
    author,
    handleAuthorChange,
    url,
    handleUrlChange,
    hideForm
}) => {
    return (
        <div>
            <h2>Create New Blog</h2>
            <form onSubmit={handleCreateBlog}>
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
                <button type="submit" onClick={hideForm}>Create</button>
            </form>
        </div>
    )
}

export default CreateBlogForm
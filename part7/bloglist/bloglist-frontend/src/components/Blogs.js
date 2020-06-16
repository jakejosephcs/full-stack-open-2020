import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Blogs = () => {
    const blogs = useSelector(state => state.blogs).sort((a,b) => b.likes - a.likes)

    return (
        <div>
            {blogs.map(blog => 
                <div key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        {blog.title} by {blog.user.name}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Blogs
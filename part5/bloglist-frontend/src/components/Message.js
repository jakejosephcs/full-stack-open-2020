import React from 'react'

const Message = (props) => {
    if (props.message === 'Wrong Username or Password') {
        return (
            <div>
                Wrong Username or Password
            </div>
        )
    } else if (props.message === 'successful') {
        return (
            <div>
                a new blog "{props.blog.title}" by "{props.blog.author}" added
            </div>
        )
    }
    return null
}

export default Message
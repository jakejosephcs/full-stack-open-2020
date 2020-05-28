const lodash = require('lodash')

const totalLikes = (blogs) => {
    const likes = blogs.map(blog => blog.likes)
    return likes.length === 0 
    ? 0 
    : likes.reduce((accumulator, currentValue) => accumulator + currentValue)
}

const favoriteBlog = (blogs) => {
    const likes = blogs.map(blog => blog.likes)

    if (likes.length === 0) return 0

    const mostLikes = Math.max(...likes)

    return blogs.find(blog => blog.likes === mostLikes)
}

const mostBlogs = (blogs) => {
    const authors = blogs.map(blog => blog.author)
    const authorsSumObject = lodash.countBy(authors)

    return {
        author: Object.keys(authorsSumObject)[0] ? Object.keys(authorsSumObject)[0] : "None" ,
        blogs: Object.values(authorsSumObject)[0] ? Object.values(authorsSumObject)[0] : 0
    }

}

module.exports = {
    totalLikes,
    favoriteBlog,
    mostBlogs,
}
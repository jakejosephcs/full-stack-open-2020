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

const mostLikes = (blogs) => {
    // Receives an array of blogs
    // Returns the author who has the most amount of likes
    // Returned as:
    // {
    //      author: String,
    //      likes: Number
    // }

    const sortedByAuthor = lodash.groupBy(blogs, 'author')

    let authorAndLikes = []

    for (let key in sortedByAuthor) {
        const authorName = key
        const authorLikes = sortedByAuthor[authorName].map(authors => authors.likes)
        const authorNameLikes = [{
            author: authorName,
            likes: authorLikes.reduce((a, b) => a + b)
        }]
        authorAndLikes = authorAndLikes.concat(authorNameLikes)
    }

    const sortedAuthorAndLikes = lodash.sortBy(authorAndLikes, ['author','likes'])

    return {
        author: sortedAuthorAndLikes[0] ? sortedAuthorAndLikes[0].author : 'None',
        likes: sortedAuthorAndLikes[0] ? sortedAuthorAndLikes[0].likes : 0
    }
}

module.exports = {
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes,
}
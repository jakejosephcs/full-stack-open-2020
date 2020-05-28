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

module.exports = {
    totalLikes,
    favoriteBlog,
}
const totalLikes = (blogs) => {
    const likes = blogs.map(blog => blog.likes)
    return likes.length === 0 
    ? 0 
    : likes.reduce((accumulator, currentValue) => accumulator + currentValue)
}

module.exports = {
    totalLikes,
}
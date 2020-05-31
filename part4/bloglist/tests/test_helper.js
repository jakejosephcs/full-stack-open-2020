const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    {
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url:
        "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        _id: "5ed3feb941e6900c5705438b"
    },
    {
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        _id: "5ed3feb941e6900c5705438c"
    },
    {
        title: "Learn Basics of React.js in 11 Minutes",
        author: "Madhu Pathy",
        url:
        "https://medium.com/@madhupathy/learn-basics-of-react-js-in-3-minutes-a94cbc6f02c8",
        _id: "5ed3feb941e6900c5705438d",
        likes: 9,
    }
];

const initialUsers = [
    {
        username: 'hellas',
        name: 'Arto Hellas',
        id: '5c4857c4003ad1a6e6626932'
    },
    {
        username: 'mluukkai',
        name: 'Matti Luukkainen',
        id: '5c4857c4003ad1a6e6626932'
    }
]

const nonExisitingId = async () => {
    const blog = new Blog({
        title: 'No id in this one',
    })
    
    await blog.save()
    await blog.remove()

    return blog._id.toString()
}

const blogsinDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(user => user.toJSON())
}

module.exports = {
    initialBlogs,
    initialUsers,
    blogsinDb,
    usersInDb,
    nonExisitingId
}
const storageKey = 'loggedBlogAppUser'

const saveUser = (user) => {
    return localStorage.setItem(storageKey, JSON.stringify(user))
}

const loadUser = () => {
    return JSON.parse(localStorage.getItem(storageKey))
}

const logoutUser = () => {
    return localStorage.removeItem(storageKey)
}

export default {
    saveUser,
    loadUser,
    logoutUser
}
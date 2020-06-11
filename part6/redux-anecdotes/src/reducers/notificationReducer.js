
const notificationReducer = (state='', action) => {
    switch (action.type) {
        case 'Notification':
            return `You voted for "${action.message}"`
        case 'Create':
            return `Anecdote "${action.message}" has been created`
        case 'Clear' :
            return action.message
        default:
            return state
    }
}


export const setNotificationVote = (message) => {
    return {
        type: 'Notification',
        message
    }
}

export const setNotificationCreate = (message) => {
    return {
        type: 'Create',
        message
    }
}

export const clearNotification = (message) => {
    return {
        type: 'Clear',
        message
    }
}


export default notificationReducer
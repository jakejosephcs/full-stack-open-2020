const notificationReducer = (state='EMPTY', action) => {
    switch (action.type) {
        case 'Notification':
            return action.data.message
        default:
            return state
    }
}

export default notificationReducer

const notificationReducer = (state='', action) => {
    switch (action.type) {
        case 'Notification':
            return action.message
        case 'Clear' :
            return null
        default:
            return state
    }
}


export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch({
            type: 'Notification',
            message
        })

        setTimeout(() => {
            dispatch({
                type: 'Clear'
            })
        }, time * 1000)
    }
}

export const clearNotification = () => {
    return {
        type: 'Clear',
    }
}


export default notificationReducer
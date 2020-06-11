
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

let timeoutId


export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch({
            type: 'Notification',
            message
        })

        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
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
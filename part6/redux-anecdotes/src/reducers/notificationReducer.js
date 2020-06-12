
const notificationReducer = (state=null, action) => {
    switch (action.type) {
        case 'Notification':
            return action.message
        case 'Clear' :
            return null
        default:
            return state
    }
}

let timeoutID

export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch({
            type: 'Notification',
            message
        })

        if (timeoutID) {
            clearTimeout(timeoutID)
        }

        timeoutID = setTimeout(() => {
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
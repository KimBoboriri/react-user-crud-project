import { ADD_USER, REMOVE_USER, EDIT_USER } from "./type"

export const addUserHandler = (newUser) => {
    return {
        type: ADD_USER,
        payload: newUser
    }
}

export const removeUserHandler = (userId) => {
    return {
        type: REMOVE_USER,
        payload: userId
    }
}

export const editUserHandler = (targetUser) => {
    return {
        type: EDIT_USER,
        payload: targetUser
    }
}
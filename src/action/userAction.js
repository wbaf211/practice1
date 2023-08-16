export const addUser = (value) => {
    return {
        type: "ADD_USER",
        payload: value,
    }
}

export default {
    addUser,
}
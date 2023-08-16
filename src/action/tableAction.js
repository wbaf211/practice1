export const addNewRow = (value) => {
    return {
        type: 'ADD_NEW_ROW',
        payload: value
    }
}

export const deleteRow = (value) => {
    return {
        type: 'DELETE_ROW',
        payload: value,
    }
}

export const getID = (id, value) => {
    return {
        type: 'GET_ID',
        payload: {
            id, 
            value
        }
    }
}

export const modifyTable = (value) => {
    return {
        type: 'MODIFY_TABLE',
        payload: value
    }
}

export const searchValue = (input, brand) => {
    return {
        type: 'SEARCH_VALUE',
        payload: {
            input,
            brand
        }
    }
}

export const addCustomer = (value, id) => {
    return {
        type: 'ADD_CLIENT',
        payload: {
            value,
            id
        }
    }
}

export const chooseCustomer = (id) => {
    return {
        type: 'CHOOSE_CUS',
        payload: id
    }
}

export default {
    addNewRow,
    deleteRow, 
    modifyTable,
    getID,
    searchValue,
    addCustomer,
}
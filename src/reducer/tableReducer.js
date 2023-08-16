const initialState = {
    tableValue: [],
    updatedList: [],
    storedData: [],
    index: 0,
    selectedID: null,
    customers: [],
    customerIndex: 1,
    customerSelectedID: '',
    userItemList: [],
    temp: [],
    cid: [],
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_CLIENT': {
            const newList = [...state.customers];
            const cusList = [...state.cid];
            newList.push(action.payload.value);
            cusList.push(action.payload.id);
            ++state.customerIndex;

            return {
                ...state,
                customers: newList,
                cid: cusList,
            }
        }

        case 'CHOOSE_CUS': {
            state.customerSelectedID = action.payload;
            const displayList = state.userItemList[action.payload - 1];
            if (displayList === undefined) {
                state.temp = [];
                return {
                    ...state,
                    tableValue: state.temp
                }
            } else {
                return {
                    ...state,
                    tableValue: displayList,
                }
            }
        }

        case 'ADD_NEW_ROW': {
            state.userItemList[state.customerSelectedID - 1] = [...state.temp];
            state.userItemList[state.customerSelectedID - 1].push(action.payload);
            ++state.index; 
            state.updatedList = state.userItemList[state.customerSelectedID - 1];

            return {
                ...state,
                tableValue: state.updatedList,
                temp: state.updatedList
            }
        }

        case 'DELETE_ROW': {
            const deletedList = [...state.tableValue];
            const deletedItem = deletedList.filter(data => data.number === action.payload);
            state.userItemList[state.customerSelectedID - 1] = state.userItemList[state.customerSelectedID - 1].filter(data => data.number !== deletedItem[0].number);
            state.updatedList = state.userItemList[state.customerSelectedID - 1];
            return {
                ...state,
                tableValue: state.updatedList, 
                temp: state.updatedList
            }
        }

        case 'GET_ID': {
            return {
                ...state,
                selectedID: state.selectedID = action.payload.id,
                storedData: state.storedData = action.payload.value
            }
        }

        case 'MODIFY_TABLE': {
            const modifyList = [...state.tableValue];
            const tempList = modifyList.map(value => value.number === state.selectedID ? action.payload : value);
            if (tempList.length > 1) {
                const modifyItem = tempList.filter(value => value.number === state.selectedID);
                state.userItemList[state.customerSelectedID - 1] = state.userItemList[state.customerSelectedID - 1].map(value => value.number === state.selectedID ? modifyItem[0] : value);
            } else {
                state.userItemList[state.customerSelectedID - 1] = state.userItemList[state.customerSelectedID - 1].map(value => value.number === state.selectedID ? tempList[0] : value);
            }
            state.updatedList = state.userItemList[state.customerSelectedID - 1];
            return {
                ...state,
                tableValue: state.updatedList,
                temp: state.updatedList
            }  
        }

        case 'SEARCH_VALUE': {
            const searchList = [...state.tableValue]
            if ((action.payload.input.value === '' || action.payload.input.value === undefined) && (action.payload.brand === '' || action.payload.brand === undefined)) {
                return {
                    ...state,
                    tableValue: state.updatedList
                }
            } else if ((action.payload.input.value !== '' || action.payload.input.value !== undefined) && (action.payload.brand === '' || action.payload.brand === undefined)) {
                return {
                    ...state,
                    tableValue: searchList.filter(value => value.itemName === action.payload.input.value || value.index === action.payload.input.value)
                }
            } else if ((action.payload.input.value === '' || action.payload.input.value === undefined) && (action.payload.brand !== '' || action.payload.brand !== undefined)) {
                return {
                    ...state,
                    tableValue: searchList.filter(value => value.brand.toUpperCase() === action.payload.brand)
                }
            } else if ((action.payload.input.value !== '' || action.payload.input.value !== undefined) && (action.payload.brand !== '' || action.payload.brand !== undefined)) {
                return {
                    ...state,
                    tableValue: searchList.filter(value => (value.itemName === action.payload.input.value || value.index === action.payload.input.value) && value.brand.toUpperCase() === action.payload.brand)
                }
            }
        }

        default: 
            return state;
    }
}

export default tableReducer;
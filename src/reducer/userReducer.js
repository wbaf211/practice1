const initialState = {
    userList: [{
        uname: 'admin',
        uid: 'admin',
        pw: '1',
    }],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            state.userList.push(action.payload);
        }

        default:
            return state;
    }
}

export default userReducer;
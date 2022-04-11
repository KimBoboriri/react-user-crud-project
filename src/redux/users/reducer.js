import { ADD_USER, REMOVE_USER, EDIT_USER } from "./type"

const initialState = {
    users: [
        {no: 1, id:'kdy', name:'김동영'},
        {no: 2, id:'lee', name:'이이이'},
        {no: 3, id:'park', name:'박박박'},
    ]
}

const usersReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            return {
             users: [...state.users, action.payload]
            }
        case REMOVE_USER:
            let filterUser = state.users.filter((user) => user.id !== action.payload)
            console.log("filterUser:",filterUser);
            for(let i = 0; i < filterUser.length; i++) {
                filterUser[i].no = i + 1;
            }
            return {
                ...state,
                users: filterUser
            }
        case EDIT_USER:
            console.log('===EDIT_USER===');
            console.log(" action.payload:");
            for(let i = 0; i < state.users.length; i++) {
                 if(state.users[i].id === action.payload.id) {
                     state.users[i].name = action.payload.name;
                 }
             }
             return {
                ...state,
                users: state.users
             }
        default: return state;
    }
}

export default usersReducer;
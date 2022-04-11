import { CHANGE_MENU } from "./type"

const initialState = {
    selected_menu: 1,
    menus: [
        {key: 1, link: "/", component:"Home", name : "홈"},
        {key: 2, link: "/userlist", component: "UserList", name : "사용자 목록"}
    ]
}

const menusReducer = (state=initialState, action) => {
    console.log('payload:',action.payload);
    switch(action.type) {
        case CHANGE_MENU:
            return {
                ...state,
                selected_menu: action.payload
            }
        default: return state;
    }
}

export default menusReducer;
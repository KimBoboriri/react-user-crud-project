import { CHANGE_MENU, CHANGE_MODAL } from "./type"

const initialState = {
    selected_menu: 1,
    menus: [
        {key: 1, link: "/", component:"Home", name : "홈"},
        {key: 2, link: "/userlist", component: "UserList", name : "사용자 목록"},
        {key: 3, name : "청약정보", submenu:[{key:4, link: "/aptinfo", name: "아파트 청약"},{key:5, link: "/officeinfo", name: "오피스텔 청약"}]},
        {key: 6, name : "청약통계", submenu:[{key:7, link: "/modal/aptchart", name: "아파트 통계"},{key:8, link: "/modal/officechart", name: "오피스텔 통계"}]}
    ],
    modal_status: false,
    modal_link: '',
    modal_heading: ''
}

const menusReducer = (state=initialState, action) => {
    console.log('payload:',action.payload);
    switch(action.type) {
        case CHANGE_MENU:
            return {
                ...state,
                selected_menu: action.payload
            }
        case CHANGE_MODAL:
            if(action.payload.status) {
                console.log("==============action:",action);
                return {
                    ...state,
                    modal_status: action.payload.status,
                    modal_link: action.payload.link,
                    modal_heading: action.payload.heading
                }
            } else {
                return {
                    ...state,
                    modal_status: action.payload.status,
                    modal_link: '',
                    modal_heading: ''
                }
            }
        default: return state;
    }
}

export default menusReducer;
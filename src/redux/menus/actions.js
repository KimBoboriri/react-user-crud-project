import { CHANGE_MENU, CHANGE_MODAL } from "./type"

export const changeMenu = (menuKey) => {
    return {
        type: CHANGE_MENU,
        payload: menuKey
    }
}

export const changeModal = (modal_status, modal_link, modal_heading) => {
    console.log("============================================");

    console.log("status:",modal_status);
    console.log("link:",modal_link);
    console.log("heading:",modal_heading);
    console.log("============================================");
    return {
        type: CHANGE_MODAL,
        payload: {
            status: modal_status, 
            link: modal_link,
            heading: modal_heading
        }
    }
}
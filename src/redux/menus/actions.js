import { CHANGE_MENU } from "./type"

export const changeMenu = (menuKey) => {
    return {
        type: CHANGE_MENU,
        payload: menuKey
    }
}
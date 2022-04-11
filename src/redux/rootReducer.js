import { combineReducers } from "redux";
import menusReducer from "./menus/reducer";
import usersReducer from "./users/reducer";

const rootReducer = combineReducers({
    menuObj : menusReducer,
    userObj : usersReducer
})

export default rootReducer
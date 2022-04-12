import { combineReducers } from "redux";
import menusReducer from "./menus/reducer";
import usersReducer from "./users/reducer";
import housesReducer from './houses/reducer'

const rootReducer = combineReducers({
    menuObj : menusReducer,
    userObj : usersReducer,
    housesObj : housesReducer
})

export default rootReducer
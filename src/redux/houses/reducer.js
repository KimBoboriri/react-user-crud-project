import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAIL } from './type'

const initialState = {
    items: [],
    err: null
}

const housesReducer = (state=initialState, action) => {
    console.log('payload:',action.payload);
    switch(action.type) {
        case FETCH_LIST_REQUEST:
            return {
                ...state
            }
        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                items: action.payload
            }
        case FETCH_LIST_FAIL:
            return {
                ...state,
                err: action.payload
            }
        default: return state;
    }
}

export default housesReducer;
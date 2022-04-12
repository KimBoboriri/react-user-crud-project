import { CHANGE_AREA,
    FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAIL } from './type'

const initialState = {
    items: [],
    loading: true,
    err: null,
    areaList: [
        {key:'',name:'전체'},
        {key:'경기',name:'경기'},
        {key:'강원',name:'강원'},
        {key:'부산',name:'부산'},
        {key:'경북',name:'경북'},
        {key:'인천',name:'인천'},
        {key:'경남',name:'경남'},
        {key:'대전',name:'대전'},
        {key:'전북',name:'전북'},
        {key:'전남',name:'전남'},
        {key:'대구',name:'대구'},
        {key:'광주',name:'광주'},
        {key:'충북',name:'충북'},
        {key:'충남',name:'충남'},
        {key:'서울',name:'서울'},
        {key:'제주',name:'제주'},
        {key:'울산',name:'울산'},
        {key:'세종',name:'세종'},
    ],
    selectedArea: ''
}

const housesReducer = (state=initialState, action) => {
    switch(action.type) {
        case CHANGE_AREA:
            return {
                ...state,
                selectedArea: action.payload
            }
        case FETCH_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case FETCH_LIST_FAIL:
            return {
                ...state,
                err: action.payload,
                loading: false
            }
        default: return state;
    }
}

export default housesReducer;
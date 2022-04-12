import { CHANGE_AREA,
        FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAIL } from './type'

export const fetchListRequest = () => {
    return {
        type: FETCH_LIST_REQUEST
    }
}
export const fetchListSuccess = (list) => {
    return {
        type: FETCH_LIST_SUCCESS,
        payload: list
    }
}
export const fetchListFail = (error) => {
    return {
        type: FETCH_LIST_FAIL,
        error: error
    }
}

export const changeSelectedArea = (area) => {
    return {
        type: CHANGE_AREA,
        payload: area
    }
}

export const fetchList = (page, area) => {
    const url = (area === '') ? `https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancDetail?page=${page}&perPage=10&serviceKey=${process.env.REACT_APP_APT_INFO_OPENAPI_KEY}` : `https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancDetail?page=${page}&perPage=10&${encodeURI("cond[SUBSCRPT_AREA_CODE_NM::EQ]=" + area)}&serviceKey=${process.env.REACT_APP_APT_INFO_OPENAPI_KEY}`
    return(dispatch) => {
        dispatch(fetchListRequest())
        fetch(url)
        .then(response => response.json())
        .then(list => dispatch(fetchListSuccess(list)))
        .catch(error => dispatch(fetchListFail(error)))
    }
}

export const changeArea = (area) => {
    return(dispatch) => {
        dispatch(fetchList(1,area));
        dispatch(changeSelectedArea(area))
    }
}

export const fetchChartList = () => {
    const url = `https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancDetail?page=1&perPage=10000&serviceKey=${process.env.REACT_APP_APT_INFO_OPENAPI_KEY}`;
    return(dispatch) => {
        dispatch(fetchListRequest())
        fetch(url)
        .then(response => response.json())
        .then(list => dispatch(fetchListSuccess(list)))
        .catch(error => dispatch(fetchListFail(error)))
    }
}

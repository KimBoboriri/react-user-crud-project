import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAIL } from './type'

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

export const fetchList = () => {
    return(dispatch) => {
        dispatch(fetchListRequest())
        fetch("https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancDetail?page=1&perPage=10&serviceKey=2vPhGWswZoC8q%2FzEmfIHldIThUwTlK5L32P1PK0o05gxZdSMQF96AMO317SZQroRQFvEHTxg9ndEIkjIXd2Kyw%3D%3D")
        .then(response => response.json())
        .then(list => dispatch(fetchListSuccess(list)))
        .catch(error => dispatch(fetchListFail(error)))
    }
}
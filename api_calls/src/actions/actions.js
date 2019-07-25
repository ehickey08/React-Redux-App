import axios from 'axios'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'

export const fetchData = (url) => dispatch => {
    
    dispatch({type: FETCH_START})
    axios
        .get(url)
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err.response)
            dispatch({type: FETCH_ERROR, payload: err.response})
        })
}
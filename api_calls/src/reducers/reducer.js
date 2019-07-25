import {FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR} from '../actions/actions'

const initialState ={
    error: '',
    isLoading: false,
    data: []
}

export default (state=initialState, {type, payload}) => {
    switch(type){
        case FETCH_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        case FETCH_START:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload
            }
        default:
            return state
    }
}
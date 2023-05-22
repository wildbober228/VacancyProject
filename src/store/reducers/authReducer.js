const initialState = {
    token: null,
    loadingAuth: false,
    errorAuth: null
}

const FETCH_TOKEN = 'FETCH_TOKEN'
const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS'
const FETCH_TOKEN_ERROR = 'FETCH_TOKEN_ERROR'


export const fetchToken = (dispatch) => {
    dispatch({type: FETCH_TOKEN})
}

export const fetchTokenSuccess = (dispatch, data) => {
    dispatch({type: FETCH_TOKEN_SUCCESS, payload: data})
}

export const fetchTokenError = (dispatch, data) => {
    dispatch({type: FETCH_TOKEN_ERROR, payload: data})
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOKEN:
            return {...state, loadingAuth: true}
        case FETCH_TOKEN_SUCCESS:
            return {...state, loadingAuth: false, token: action.payload}
        case FETCH_TOKEN_ERROR:
            return {...state, loadingAuth: false, errorAuth: action.payload}
    }
    return state
}

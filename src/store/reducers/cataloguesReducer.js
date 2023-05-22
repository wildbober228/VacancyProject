const initialState = {
    catalogues: [],
    loading: false,
    error: null
}

const FETCH_CATALOGUES = 'FETCH_CATALOGUES'
const FETCH_CATALOGUES_SUCCESS = 'FETCH_CATALOGUES_SUCCESS'
const FETCH_CATALOGUES_ERROR = 'FETCH_CATALOGUES_ERROR'


export const fetchCatalogues = (dispatch) => {
    dispatch({type: FETCH_CATALOGUES})
}

export const fetchCataloguesSuccess = (dispatch, data) => {
    dispatch({type: FETCH_CATALOGUES_SUCCESS, payload: data})
}

export const fetchCataloguesError = (dispatch, data) => {
    dispatch({type: FETCH_CATALOGUES_ERROR, payload: data})
}

export const cataloguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATALOGUES:
            return {...state, loading: true}
        case FETCH_CATALOGUES_SUCCESS:
            return {...state, loading: false, catalogues: action.payload}
        case FETCH_CATALOGUES_ERROR:
            return {...state, loading: false, error: action.payload}
    }
    return state
}

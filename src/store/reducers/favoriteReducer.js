const initialState = {
    favoritesId: [],
    loading: false,
    error: null
}

const initialStateData = {
    favoritesData: [],
    loadingData: false,
    errorData: null
}

const ADD_ALL_FAVORITES = 'ADD_ALL_FAVORITES';
const ADD_ALL_FAVORITES_SUCCESS = 'ADD_ALL_FAVORITES_SUCCESS';


const ADD_FAVORITE = 'ADD_FAVORITE';
const DELETE_FAVORITE = 'DELETE_FAVORITE';
const ERROR_FAVORITE = 'DELETE_FAVORITE';

const FETCH_FAVORITE_DATA = 'FETCH_FAVORITE_DATA'
const FETCH_FAVORITE_DATA_SUCCESS = 'FETCH_FAVORITE_DATA_SUCCESS'
const FETCH_FAVORITE_DATA_ERROR = 'FETCH_FAVORITE_DATA_ERROR'

export const addAllFavoriteVacancies = (dispatch) => {
    dispatch({type: ADD_ALL_FAVORITES})
}

export const addAllFavoriteVacanciesSuccess = (dispatch, data) => {
    dispatch({type: ADD_ALL_FAVORITES_SUCCESS, payload: data})
}

export const addFavoriteVacancy = (dispatch, id) => {
    dispatch({type: ADD_FAVORITE, payload: id})
}

export const deleteFavoriteVacancy = (dispatch, id) => {
    dispatch({type: DELETE_FAVORITE, payload: id})
}

export const errorFavoriteVacancy = (dispatch, data) => {
    dispatch({type: ERROR_FAVORITE, payload: data})
}


export const fetchFavoriteData = (dispatch) => {
    dispatch({type: FETCH_FAVORITE_DATA})
}

export const fetchFavoriteDataSuccess = (dispatch, data) => {
    dispatch({type: FETCH_FAVORITE_DATA_SUCCESS, payload: data})
}

export const fetchFavoriteDataError = (dispatch, data) => {
    dispatch({type: FETCH_FAVORITE_DATA_ERROR, payload: data})
}


export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ALL_FAVORITES:
            return {...state, loading: true}
        case ADD_ALL_FAVORITES_SUCCESS:
            return {...state, loading: false, favoritesId: action.payload}
        case ADD_FAVORITE:
            return {...state, favoritesId: [...state.favoritesId, action.payload]}
        case DELETE_FAVORITE:
            const newState = state.favoritesId.filter(favorite => favorite !== action.payload)
            return {favoritesId: newState}
        case ERROR_FAVORITE:
            return {...state, error: action.payload}
    }
    return state;
}

export const favoriteDataReducer = (state = initialStateData, action) => {
    switch (action.type) {
        case FETCH_FAVORITE_DATA:
            return {...state, loadingData: true}
        case FETCH_FAVORITE_DATA_SUCCESS:
            return {...state, loadingData: false, favoritesData: action.payload}
        case FETCH_FAVORITE_DATA_ERROR:
            return {...state, loadingData: false, errorData: action.payload}
    }
    return state;
}

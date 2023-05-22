const initialAllVacanciesState = {
    vacancies: [],
    loadingAll: false,
    errorAll: null,
    page: 1,
    limit: 10,
}

const FETCH_ALL_VACANCIES = 'FETCH_ALL_VACANCIES'
const FETCH_ALL_VACANCIES_SUCCESS = 'FETCH_ALL_VACANCIES_SUCCESS'
const FETCH_ALL_VACANCIES_ERROR = 'FETCH_ALL_VACANCIES_ERROR'
const SET_VACANCY_PAGE = 'SET_VACANCY_PAGE'

export const fetchAllVacancies = (dispatch) => {
    dispatch({type: FETCH_ALL_VACANCIES})
}

export const fetchAllVacanciesSuccess = (dispatch, data) => {
    dispatch({type: FETCH_ALL_VACANCIES_SUCCESS, payload: data})
}

export const fetchAllVacanciesError = (dispatch, data) => {
    dispatch({type: FETCH_ALL_VACANCIES_ERROR, payload: data})
}

export const setVacancyPage = (dispatch, page) => {
    dispatch({type: SET_VACANCY_PAGE, payload: page})
}

export const vacanciesReducer = (state = initialAllVacanciesState, action) => {
    switch (action.type) {
        case FETCH_ALL_VACANCIES:
            return {...state, loadingAll: true}
        case FETCH_ALL_VACANCIES_SUCCESS:
            return {...state, loadingAll: false, vacancies: action.payload}
        case FETCH_ALL_VACANCIES_ERROR:
            return {...state, loadingAll: false, errorAll: action.payload}
        case SET_VACANCY_PAGE:
            return {...state, page: action.payload}
    }
    return state
}

const initialVacancyInfoState = {
    vacancy: null,
    loading: false,
    error: null,
}

const FETCH_VACANCY = 'FETCH_VACANCY'
const FETCH_VACANCY_SUCCESS = 'FETCH_VACANCY_SUCCESS'
const FETCH_VACANCY_ERROR = 'FETCH_VACANCY_ERROR'

export const fetchVacancy = (dispatch) => {
    dispatch({type: FETCH_VACANCY})
}

export const fetchVacancySuccess = (dispatch, data) => {
    dispatch({type: FETCH_VACANCY_SUCCESS, payload: data})
}

export const fetchVacancyError = (dispatch, data) => {
    dispatch({type: FETCH_VACANCY_ERROR, payload: data})
}

export const vacancyInfoReducer = (state = initialVacancyInfoState, action) => {
    switch (action.type) {
        case FETCH_VACANCY:
            return {...state, loading: true}
        case FETCH_VACANCY_SUCCESS:
            return {...state, loading: false, vacancy: action.payload}
        case FETCH_VACANCY_ERROR:
            return {...state, loading: false, error: action.payload}
    }
    return state
}

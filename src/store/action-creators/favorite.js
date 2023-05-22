import {
    addAllFavoriteVacancies, addAllFavoriteVacanciesSuccess,
    addFavoriteVacancy,
    deleteFavoriteVacancy,
    errorFavoriteVacancy, fetchFavoriteData, fetchFavoriteDataError, fetchFavoriteDataSuccess
} from "../reducers/favoriteReducer";
import axios from "axios";

export const addAllVacanciesToFavoriteList = (data) => {
    return async (dispatch) => {
        try {
            addAllFavoriteVacancies(dispatch)
            addAllFavoriteVacanciesSuccess(dispatch, data)
        } catch (e) {
            errorFavoriteVacancy(dispatch, "ERROR WITH ADDING ALL FAVORITE VACANCY" + e)
        }
    }
}

export const addVacancyToFavoriteList = (id) => {
    return async (dispatch) => {
        try {
            addFavoriteVacancy(dispatch, id)
        } catch (e) {
            errorFavoriteVacancy(dispatch, "ERROR WITH ADDING FAVORITE VACANCY" + e)
        }
    }
}

export const deleteVacancyFromFavoriteList = (id) => {
    return async (dispatch) => {
        try {
            deleteFavoriteVacancy(dispatch, id)
        } catch (e) {
            errorFavoriteVacancy(dispatch, "ERROR WITH DELETING FAVORITE VACANCY" + e)
        }
    }
}

export const fetchFavoriteVacancies = (ids) => {
    console.log("fetchFavoriteVacancies")
    return async (dispatch) => {
        try {
            if (ids.length > 0) {
                fetchFavoriteData(dispatch) // все вакансии
                const response = await axios.get('https://startup-summer-2023-proxy.onrender.com/2.0/vacancies', {
                    headers: {
                        "X-Api-App-Id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
                        "x-secret-key": "GEU4nvd3rej*jeh.eqp"
                    },
                    params: {
                        ids: ids
                    }
                })
                setTimeout(() => {
                    fetchFavoriteDataSuccess(dispatch, response.data)
                }, 5)
            } else {
                fetchFavoriteData(dispatch) // все вакансии
                setTimeout(() => {
                    fetchFavoriteDataSuccess(dispatch, null)
                }, 5)
            }
        } catch (e) {
            fetchFavoriteDataError(dispatch, "ERROR WITH FETCHING VACANCY LIST" + e)
        }
    }
}

import axios from "axios";
import {
    fetchAllVacancies,
    fetchAllVacanciesError,
    fetchAllVacanciesSuccess,
    setVacancyPage
} from "../reducers/vacanciesReducer";

export const fetchVacancies = (access_token,
                               page = 1,
                               limit = 10,
                               payment_from = 0,
                               payment_to = 0,
                               catalogues = 0,
                               keyword = ""
) => {
    console.log("fetchVacancies")
    return async (dispatch) => {
        try {
            fetchAllVacancies(dispatch) // все вакансии
            const response = await axios.get('https://startup-summer-2023-proxy.onrender.com/2.0/vacancies', {
                headers: {
                    "X-Api-App-Id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
                    "x-secret-key": "GEU4nvd3rej*jeh.eqp",
                    "Authorization": "Bearer " + access_token
                },
                params: {
                    published: 1,
                    page: page,
                    count: limit,
                    payment_from: payment_from,
                    payment_to: payment_to,
                    catalogues: catalogues,
                    keyword: keyword
                }
            })
            setTimeout(() => {
                fetchAllVacanciesSuccess(dispatch, response.data)
            }, 5)
        } catch (e) {
            fetchAllVacanciesError(dispatch, "ERROR WITH FETCHING VACANCY LIST" + e)
        }
    }
}


export function setVacancyPagePagination(page) {
    return (dispatch) => {
        setVacancyPage(dispatch, page)
    }
}

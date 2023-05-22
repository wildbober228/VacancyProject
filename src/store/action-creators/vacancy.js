import axios from "axios";
import {
    fetchVacancy,
    fetchVacancyError,
    fetchVacancySuccess
} from "../reducers/vacancyReducer";

export const fetchVacancyInfo = (id) => {
    return async (dispatch) => {
        try {
            fetchVacancy(dispatch) // в функции
            const response = await axios.get('https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/' + id, {
                headers: {
                    "X-Api-App-Id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
                    "x-secret-key": "GEU4nvd3rej*jeh.eqp"
                },
            })
            setTimeout(() => {
                fetchVacancySuccess(dispatch, response.data)
            }, 5)
        } catch (e) {
            fetchVacancyError(dispatch, "ERROR WITH VACANCY INFO" + e)
        }
    }
}

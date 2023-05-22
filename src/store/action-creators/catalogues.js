import axios from "axios";
import {fetchCatalogues, fetchCataloguesError, fetchCataloguesSuccess} from "../reducers/cataloguesReducer";

export const fetchAllCatalogues = () => {
    return async (dispatch) => {
        try {
            fetchCatalogues(dispatch)
            const response = await axios.get('https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/', {
                headers: {
                    "X-Api-App-Id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
                    "x-secret-key": "GEU4nvd3rej*jeh.eqp"
                },
            })
            fetchCataloguesSuccess(dispatch, response.data)
        } catch (e) {
            fetchCataloguesError(dispatch, "ERROR WITH FETCHING CATALOGUES" + e)
        }
    }
}

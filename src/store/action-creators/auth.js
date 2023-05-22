import {fetchToken, fetchTokenError, fetchTokenSuccess} from "../reducers/authReducer";
import axios from "axios";

export const fetchAuthToken = () => {
    return async (dispatch) => {
        try {
            fetchToken(dispatch) // в функции
            const response = await axios.get('https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password', {
                headers: {
                    "X-Api-App-Id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
                    "x-secret-key": "GEU4nvd3rej*jeh.eqp"
                },
                params: {
                    login: 'sergei.stralenia@gmail.com',
                    password: 'paralect123',
                    client_id: '2356',
                    client_secret: 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
                    hr: 0,
                }
            })
            setTimeout(() => {
                fetchTokenSuccess(dispatch, response.data)
            }, 5)
        } catch (e) {
            fetchTokenError(dispatch, "ERROR WITH AUTH" + e)
        }
    }
}


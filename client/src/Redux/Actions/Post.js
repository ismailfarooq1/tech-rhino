import axios from "axios";
import { axiosConstants } from "../../Config/constants";

export const index = (id) => {
    return async (dispatch) => {
        const response = await axios.get('api/posts',);

        dispatch({
            type: 'admin/posts',
            payload: response.data
        })
    }
}
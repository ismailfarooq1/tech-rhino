import axios from "axios";
import { axiosConstants } from '../../Config/constants';

export const login = (data) => {
    return async (dispatch) => {
        const response = await axios.post('api/login', { email: data.email, password: data.password, password_confirmation: data.password_confirmation })
        dispatch({
            type: 'admin/login',
            payload: response.data
        })
    }
}

export const logout = () => {
    return async (dispatch) => {
        const response = await axios.get('api/logout')
        dispatch({
            type: 'admin/logout',
            payload: response.data
        })
    }
}
import { LOGIN } from "../Types";
// import Cookies from "universal-cookie";
import { axiosConstants } from '../../Config/constants';

export default (state = {}, action) => {
    // let cookies = new Cookies();
    // console.log('auth action');
    // console.log(action);
    switch (action.type) {
        case 'admin/login':
            return { ...state, isAuthed: true, token: action.payload.token };

        case 'admin/logout':
            return { ...state, isAuthed: false, token: '' };
        default:
            return state;
    }
}
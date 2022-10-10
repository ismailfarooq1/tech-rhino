import Auth from './Auth'
import Config from './Config'
import Post from './Post';
import { combineReducers } from 'redux'

export default combineReducers({
    Auth: Auth,
    Config: Config,
    Post: Post,
});

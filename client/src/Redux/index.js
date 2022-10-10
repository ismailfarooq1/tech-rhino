import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers/index';
// import Cookies from 'universal-cookie';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['Auth']
};

const persistedReducer = persistReducer(persistConfig, Reducers);

// const cookie = new Cookies();
const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

export default { store, persistor };

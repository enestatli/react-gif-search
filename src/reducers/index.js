import { combineReducers } from 'redux';
import AuthReducer from './auth';
import GifsReducer from './gifs';
import ModalReducer from './modal';
//import { routerReducer } from 'react-router-redux';
import { connectRouter } from 'connected-react-router'
import { reducer as FormReducer } from 'redux-form';

export default (history) => combineReducers({
    auth: AuthReducer,
    form: FormReducer,
    gifs: GifsReducer,
    modal: ModalReducer,
    //router: routerReducer
    router: connectRouter(history)
});


import { createStore, compose, applyMiddleware } from 'redux';
//import ReduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk'
import rootReducer from '../reducers';
import { createBrowserHistory } from 'history'
//import { routerMiddleware } from 'react-router-redux';
import { routerMiddleware } from 'connected-react-router'
import * as Actions from '../actions';

export const history = createBrowserHistory();

export function configureStore(initialState) {
    const store = createStore(
        rootReducer(history),
        initialState,
        compose (
            applyMiddleware(reduxThunk, routerMiddleware(history)),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    store.dispatch(Actions.verifyAuth());

    return store;
}
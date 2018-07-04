import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route }from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import  App from './components/App';
import Welcome from './components/Welcome';
import SignUp from "./components/auth/SIgnUp";
import reducers from './reducers';
import Feature from "./components/Feature";
import SignOut from "./components/auth/SignOut";
import SignIn from "./components/auth/SignIn";

const store = createStore(
    reducers,
    {
        auth: {
            authenticated: localStorage.getItem('token')
        }
    },
    applyMiddleware(reduxThunk)
);
ReactDom.render(
    <Provider store={store}>
    <BrowserRouter>
    <App>
        <Route path ='/' exact component={Welcome} />
        <Route path = '/signup' exact component={SignUp}/>
        <Route path = '/feature' exact component={Feature}/>
        <Route path = '/signout' exact component={SignOut}/>
        <Route path = '/signin' exact component={SignIn}/>
    </App>
    </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
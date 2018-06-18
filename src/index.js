/**
 * Created by yuan on 2018/6/13.
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import {List , Login} from './components';
import { Provider } from 'react-redux';
import store from './store'
import { ConnectedRouter} from 'react-router-redux'

import { Route,Redirect,Switch} from 'react-router-dom'
import createHistory from 'history/createHashHistory'
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/Login" component={Login}/>
                <Route path="/list" component={List}/>
                <Redirect to="/Login"/>
            </Switch>
        </ConnectedRouter>
    </Provider>, document.querySelector('#root'))
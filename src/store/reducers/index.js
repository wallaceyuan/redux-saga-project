/**
 * Created by yuan on 2018/6/15.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import list from './list'
import login from './login'

export default combineReducers({
    list,
    login,
    router:routerReducer
})
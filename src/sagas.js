/**
 * Created by yuanyuan on 2018/6/16.
 */
import 'babel-polyfill'
import * as types from './store/action-types'
import { push } from 'react-router-redux'
import { takeEvery, all, call, put , take } from 'redux-saga/effects';
import ListQueryModel from './model/ListQueryModel'
const listQueryModel = new ListQueryModel();
import async from 'asyncs'



let Api = {
    request(name){
        return listQueryModel.query(name)
    }
}

function* request(name) {
    return listQueryModel.query(name)
}

function* requestApi() {
    while(true){
        var { name } = yield take(types.GET_LIST_ASYNC)//监听
        let results = yield call(Api.request,name)
        yield put({type:types.GET_LIST,results})
    }
}

function* enterName() {
    while(true){
        var { name } = yield take(types.GET_NAME_ASYNC)
        window.localStorage.setItem('gitHubName',name)
        yield put({type:types.GET_NAME,name:name})
        yield put(push('/list'))
    }
}

export function* rootSaga({dispatch,getState}) {
    yield all([
        requestApi(),enterName()
    ])
}
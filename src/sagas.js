/**
 * Created by yuanyuan on 2018/6/16.
 */
import 'babel-polyfill'
import * as types from './store/action-types'
import { push } from 'react-router-redux'
import { takeEvery, all, call, put , take } from 'redux-saga/effects';
import ListQueryModel from './model/ListQueryModel'
const listQueryModel = new ListQueryModel();

let Api = {
    request(name){
        return listQueryModel.query(name)
    },
    requestRep(name){
        return listQueryModel.queryRepos(name)
    }
}

function* requestApi() {
    while(true){
        var { name } = yield take(types.GET_LIST_ASYNC)//监听
        let info = yield call(Api.request,name)
        yield put({type:types.GET_LIST,info})
    }
}

function* getListResponseAsync() {
    while(true){
        var { name } = yield take(types.GET_LIST_REPO_ASYNC)//监听
        let reps = yield call(Api.requestRep,name)
        yield put({type:types.GET_LIST_REPO,reps})
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
        requestApi(),getListResponseAsync(),enterName()
    ])
}
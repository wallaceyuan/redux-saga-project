/**
 * Created by yuanyuan on 2018/6/16.
 */
import 'babel-polyfill'
import * as types from './store/action-types'
import { push } from 'react-router-redux'
import { takeEvery, all,call, put , take } from 'redux-saga/effects';
import ListQueryModel from './model/ListQueryModel'
const listQueryModel = new ListQueryModel();


function* request(name) {
    listQueryModel.query(name).then(data=>{
        console.log(data)
    })
}

function* requestApi() {
    while(true){
        var { name } = yield take(types.GET_LIST_ASYNC)//监听
        let data = yield request(name)
    }
}

function* enterName() {
    while(true){
        var { name } = yield take(types.GET_NAME_ASYNC)
        yield put({type:types.GET_NAME,name:name})
        yield put(push('/list'))
    }
}

export function* rootSaga({dispatch,getState}) {
    yield all([
        requestApi(),enterName()
    ])
}
/**
 * Created by yuan on 2018/6/15.
 */
import * as types from '../action-types'

export default function (state = { results:[] },action) {
    switch (action.type){
        case types.GET_LIST:
            return {...state,results:action.results}
        default:
            return state;
    }
}
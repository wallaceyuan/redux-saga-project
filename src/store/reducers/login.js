/**
 * Created by yuanyuan on 2018/6/18.
 */
import * as types from '../action-types'

export default function (state = { name:''},action) {
    switch (action.type){
        case types.GET_NAME:
            return {...state,name:action.name}
        case types.CLEAN_STATE:
            return { name:''}
        default:
            return state;
    }
}
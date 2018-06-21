/**
 * Created by yuan on 2018/6/15.
 */
import * as types from '../action-types'

export default function (state = { info: "",reps:"",followers:"" },action) {
    switch (action.type){
        case types.GET_LIST:
            return {...state,info:action.info}
        case types.GET_LIST_REPO:
            return {...state,reps:action.reps}
        case types.GET_LIST_FOLLOWER:
            return {...state,followers:action.followers}
        default:
            return state;
    }
}
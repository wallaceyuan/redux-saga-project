/**
 * Created by yuan on 2018/6/15.
 */
import * as types from '../action-types'

export default function (state = { info: "",reps:"" },action) {
    switch (action.type){
        case types.GET_LIST:
            console.log('action',action)
            return {...state,info:action.info,reps:action.reps}
        default:
            return state;
    }
}
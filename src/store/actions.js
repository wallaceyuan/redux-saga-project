/**
 * Created by yuan on 2018/6/15.
 */
import * as types from './action-types'
export default {
    getNameAsync(name){
        return {type:types.GET_NAME_ASYNC,name}
    },
    getList(name){
        return {type:types.GET_LIST_ASYNC,name}
    }
}
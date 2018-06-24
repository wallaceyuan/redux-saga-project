/**
 * Created by yuan on 2018/6/15.
 */
import * as types from './action-types'
export default {
    getNameAsync(name){
        return {type:types.GET_NAME_ASYNC,name}
    },
    getListAsync(name){
        return {type:types.GET_LIST_ASYNC,name}
    },
    getListResponseAsync(name){
        return {type:types.GET_LIST_REPO_ASYNC,name}
    },
    getListFollowerAsync(name){
        return {type:types.GET_LIST_FOLLOWER_ASYNC,name}
    },
    getListFollowingAsync(name){
        return {type:types.GET_LIST_FOLLOWING_ASYNC,name}
    },
    cleanState(){
        return {type:types.CLEAN_STATE}
    }
}
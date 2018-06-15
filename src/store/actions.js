/**
 * Created by yuan on 2018/6/15.
 */
import * as types from './action-types'
export default {
    getList(id){
        return {type:types.GET_LIST,id}
    }
}
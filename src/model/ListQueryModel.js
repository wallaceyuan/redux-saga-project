/**
 * Created by yuanyuan on 2018/6/18.
 */
import CommonModel from './CommonModel'

export default class ListQueryModel{
    query(name){
        return new Promise((resolve,reject)=>{
            CommonModel.get('https://api.github.com/users/'+name).then((data)=>{
                resolve(data)
            }).catch(reject)
        })
    }
}

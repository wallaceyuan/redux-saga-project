/**
 * Created by yuanyuan on 2018/6/18.
 */
import CommonModel from './CommonModel'

export default class ListQueryModel{
    query(name){
        return CommonModel.get('https://api.github.com/users/'+name)
    }
    queryRepos(name){
        return CommonModel.get('https://api.github.com/users/'+name+'/repos',{type:'all',sort:"created",direction:"desc"})
    }
    queryFollower(name){
        return CommonModel.get('https://api.github.com/users/'+name+'/followers')
    }
    queryFollowing(name){
        return CommonModel.get('https://api.github.com/users/'+name+'/following')
    }
}

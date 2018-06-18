/**
 * Created by yuan on 2018/6/15.
 */

import React, { Component } from 'react';
import actions from '../store/actions';
import {connect} from 'react-redux';

class List extends Component{
    componentDidMount(){
        this.props.getList(this.props.login.name || window.localStorage.getItem('gitHubName'))
    }
    render(){
        const name = this.props.login.name
        const avatar_url = this.props.login.avatar_url
        console.log(avatar_url)
        return(
            <div>
                <div className="left">
                    <div className="avatar">
                        <img src={avatar_url} width="100%" height="100%"/>
                    </div>
                    <p>{name}</p>
                </div>
                <div className="right"></div>
            </div>
        )
    }
}

export default connect(
    state=>state,
    actions
)(List)
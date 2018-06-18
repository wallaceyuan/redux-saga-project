/**
 * Created by yuan on 2018/6/15.
 */

import React, { Component } from 'react';
import actions from '../store/actions';
import {connect} from 'react-redux';
import { Input } from 'antd';
const Search = Input.Search;
import './index.scss';

class Login extends Component{
    render(){
        return(
            <div className="login">
                <Search
                    placeholder="输入github用户名"
                    enterButton="输入"
                    size="large"
                    onSearch={value => this.props.getNameAsync(value)}
                />
            </div>
        )
    }
}

export default connect(
    state=>state.login,
    actions
)(Login)
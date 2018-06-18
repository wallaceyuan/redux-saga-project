/**
 * Created by yuan on 2018/6/15.
 */

import React, { Component } from 'react';
import actions from '../store/actions';
import {connect} from 'react-redux';
import { DatePicker } from 'antd';


class List extends Component{
    componentDidMount(){
        this.props.getList(this.props.login.name)
    }
    render(){
        const name = this.props.login.name
        return(
            <div>
                <DatePicker />
                <p>{name}</p>
            </div>
        )
    }
}

export default connect(
    state=>state,
    actions
)(List)
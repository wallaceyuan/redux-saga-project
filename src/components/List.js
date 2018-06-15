/**
 * Created by yuan on 2018/6/15.
 */

import React, { Component } from 'react';
import actions from '../store/actions';
import {connect} from 'react-redux';

import { DatePicker } from 'antd';



class List extends Component{
    render(){
        return(
            <div>
                <DatePicker />
                <p>111</p>
            </div>
        )
    }
}

export default connect(
    state=>state,
    actions
)(List)
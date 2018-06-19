/**
 * Created by yuan on 2018/6/15.
 */

import React, { Component } from 'react';
import actions from '../store/actions';
import {connect} from 'react-redux';
import 'bootstrap';

class List extends Component{
    componentDidMount(){
        this.props.getListAsync(this.props.login.name || window.localStorage.getItem('gitHubName'))
    }
    render(){
        const name = this.props.login.name
        const results = this.props.list.results
        console.log(this.props)
        return(
            <div className="container clearfix px-3 mt-4">
                <div className="row ">
                    <div className="float-left col-3">
                        <div className="avatar">
                            <img src={results.avatar_url} width="230" height="230"/>
                        </div>
                        <div className="vcard-names-container py-3 js-sticky js-user-profile-sticky-fields " style={{position: 'static'}}>
                            <h1 className="vcard-names">
                                <span className="p-name vcard-fullname d-block overflow-hidden" itemProp="name">{results.login}</span>
                                <span className="p-nickname vcard-username d-block" itemProp="additionalName">{results.name}</span>
                            </h1>
                        </div>
                    </div>
                    <div className="col-9 float-left pl-2">
                        <div className="UnderlineNav user-profile-nav top-0 is-placeholder" style={{visibility: 'hidden', display: 'none',height: '55px'}}></div>
                        <div className="UnderlineNav user-profile-nav js-sticky top-0" style={{position: 'static', top: '0px', left: '403.5px', width: '727px'}}>
                            <nav className="UnderlineNav-body" data-pjax="" role="navigation">
                                <a href="#/list" className="UnderlineNav-item selected" aria-selected="true" role="tab" title="Overview">
                                    Overview
                                </a>
                                <a href="/wallaceyuan?tab=repositories" className="UnderlineNav-item " aria-selected="false" role="tab" title="Repositories">Repositories
                                    <span className="Counter">{results.public_repos}</span>
                                </a>
                                <a href="/wallaceyuan?tab=stars" className="UnderlineNav-item " aria-selected="false" role="tab" title="Stars">
                                    Stars
                                    <span className="Counter">
            122
          </span>
                                </a>
                                <a href="/wallaceyuan?tab=followers" className="UnderlineNav-item " aria-selected="false" role="tab" title="Followers">
                                    Followers
                                    <span className="Counter">{results.followers}</span>
                                </a>
                                <a href="/wallaceyuan?tab=following" className="UnderlineNav-item " aria-selected="false" role="tab" title="Following">
                                    Following
                                    <span className="Counter">{results.following}</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state=>state,
    actions
)(List)
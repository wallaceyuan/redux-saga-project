/**
 * Created by yuan on 2018/6/15.
 */

import React, { Component } from 'react';
import actions from '../store/actions';
import {connect} from 'react-redux';

import './index.scss';


class List extends Component{
    constructor(props){
        super(props)
        const t = this
    }
    componentDidMount(){
        this.props.getListAsync(this.props.login.name || window.localStorage.getItem('gitHubName'))
        this.getResponse()
    }
    getResponse = ()=>{
        this.props.list.selected = 'repo'
        this.props.getListResponseAsync(this.props.login.name || window.localStorage.getItem('gitHubName'))
    }
    getFollower = ()=>{
        this.props.list.selected = 'follower'
        this.props.getListFollowerAsync(this.props.login.name || window.localStorage.getItem('gitHubName'))
    }
    render(){
        const info = this.props.list.info
        const follower = this.props.list.follower
        console.log(this.props)
        let repoDom = [],followerDom = []
        this.props.list.reps && this.props.list.reps.forEach((rep,index)=>{
            let url = "https://github.com/" + rep.full_name
            repoDom.push(
                <li className="col-12 d-block width-full py-4 border-bottom public source" key={index}>
                    <div className="d-inline-block mb-1">
                        <h3>
                            <a href={url} itemProp="name codeRepository" target="_blank">{rep.name}</a>
                        </h3>
                    </div>
                    <div>
                        <p className="col-9 d-inline-block text-gray mb-2 pr-4" itemProp="description">{rep.description}</p>
                    </div>
                    <div className="f6 text-gray mt-2">
                        <span className="repo-language-color ml-0" style={{"backgroundColor":"#f1e05a"}}></span>
                        <span className="mr-3" itemProp="programmingLanguage">{rep.language}</span>
                        Updated <relative-time datetime={rep.pushed_at} title="2018年6月19日 GMT+8 下午11:04">{rep.updated_at}</relative-time>
                    </div>
                </li>
            )
        })
        this.props.list.followers && this.props.list.followers.forEach((follower,index)=>{
            followerDom.push(
                <div className="d-table table-fixed col-12 width-full py-4 border-bottom border-gray-light" key={index}>
                    <div className="d-table-cell col-1 v-align-top">
                        <a className="d-inline-block" href="/fengjianjunstudy">
                            <img class="avatar" src="https://avatars1.githubusercontent.com/u/11567097?s=100&amp;v=4" width="50" height="50" alt="@fengjianjunstudy" />
                        </a>
                    </div>
                    <div className="d-table-cell col-9 v-align-top pr-3">
                        <a className="d-inline-block no-underline mb-1"  href="/fengjianjunstudy" aria-describedby="hovercard-aria-description">
                            <span className="f4 link-gray-dark">coding笨妈</span>
                            <span className="link-gray pl-1">fengjianjunstudy</span>
                        </a>
                    </div>
            </div>
        )})

        return(
            <div className="container-lg clearfix px-3 mt-4 ">
                <div className="row ">
                    <div className="float-left col-3 pr-3">
                        <div className="avatar">
                            <img src={info.avatar_url} width="230" height="230"/>
                        </div>
                        <div className="vcard-names-container py-3 js-sticky js-user-profile-sticky-fields " style={{position: 'static'}}>
                            <h1 className="vcard-names">
                                <span className="p-name vcard-fullname d-block overflow-hidden" itemProp="name">{info.login}</span>
                                <span className="p-nickname vcard-username d-block" itemProp="additionalName">{info.name}</span>
                            </h1>
                        </div>
                    </div>
                    <div className="col-9 float-left pl-2">
                        <div className="UnderlineNav user-profile-nav top-0 is-placeholder" style={{visibility: 'hidden', display: 'none',height: '55px'}}></div>
                        <div className="UnderlineNav user-profile-nav js-sticky top-0" style={{position: 'static', top: '0px', left: '403.5px', width: '727px'}}>
                            <nav className="UnderlineNav-body" data-pjax="" role="navigation">
                                <a onClick={ this.getResponse } className={`UnderlineNav-item ${this.props.list.selected == 'repo'?'selected':''}`} aria-selected="true" role="tab" title="Repositories">Repositories<span className="Counter" >{info.public_repos}</span>
                                </a>
                                <a onClick={this.getFollower } className={`UnderlineNav-item ${this.props.list.selected == 'follower'?'selected':''}`} aria-selected="false" role="tab" title="Followers">Followers<span className="Counter">{info.followers}</span>
                                </a>
                                <a href="#/list?tab=following" className={`UnderlineNav-item ${this.props.list.selected == 'following'?'selected':''}`} aria-selected="false" role="tab" title="Following">Following<span className="Counter">{info.following}</span>
                                </a>
                            </nav>
                        </div>
                        <div className="position-relative">
                            <div id="user-repositories-list" style={{'display':this.props.list.selected == 'repo'?'block':'none'}}>
                                <ul data-filterable-for="your-repos-filter">
                                    { repoDom }
                                </ul>
                            </div>
                            <div id="user-repositories-list" style={{'display':this.props.list.selected == 'follower'?'block':'none'}}>
                                {followerDom}
                            </div>
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
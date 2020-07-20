import React, { Component } from 'react';
import { BrowserRouter,Redirect, Route, Switch,Link} from 'react-router-dom';
import { Layout, Menu, Icon,Avatar,Modal } from 'antd';
import '../styles/main.scss';
import history from '../plugin/history/history';

import SiderMenu from '../component/siderMenu';
import Home from'./home/home';
import ToDoList from'./todolist/index';
import GoBang from'./gobang/index';
import Echart from'./chart/echart';
import Graph from'./chart/graph';
import System from'./system/system';
import NotFound from'./404';
import {getCookie, setCookie} from "../plugin/cookie/cookie";

const { Header,  Content } = Layout;

class Main extends Component {
	constructor() {
		super();
		this.state = {
			username:'我改名要花钱',
		};
	};
	state = {
	    collapsed: getCookie("sider_collapsed") === "true",
	};
	//切换菜单
	toggle = () =>{
		this.setState({
			collapsed: !this.state.collapsed,
		});
		setCookie("sider_collapsed", this.state.collapsed);
	};
	//登出
	logout = () =>{
		Modal.confirm({
			title: '温馨提示',
			content: '确定登出系统？',
			okText: '确定',
			cancelText: '取消',
			onOk() {
				history.push({pathname:'/login'});
			},
			onCancel() {},
		});
	};
	//挂载监听-生命周期函数
	componentDidMount() {
	    //保存Sider收缩
	    if (getCookie("sider_collapsed") === null) {
	        getCookie("sider_collapsed", false);
	    }
	}
    render() {
        return (
			<div className="main">
				<Layout style={{height:'100%'}}>
					<SiderMenu collapsed={this.state.collapsed} path={this.props.location.pathname}/>

					<Layout>
						<Header style={{ background: '#fff', padding: '0 15px' }}>
							<Icon className="triggerIcon" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}/>
							<div className="userInfo" onClick={this.logout}>
								<Avatar icon="user" />
								<p>{this.state.username}</p>
							</div>
						</Header>
						<Content style={{margin: '15px',padding: 20,background: '#fff',minHeight: 700,}}>
							<Switch>     
								<Route path={"/main/home"} component={Home} />
								<Route path={"/main/todolist"} component={ToDoList} />
								<Route path={"/main/gobang"} component={GoBang} />
								<Route path={'/main/chart/echart'} component={Echart} />
								<Route path={'/main/chart/graph'} component={Graph} />
								<Route path={'/main/system'} component={System} /> 
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</div>	
        )
    }
}

export default Main;
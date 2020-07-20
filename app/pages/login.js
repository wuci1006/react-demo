import React, { Component } from 'react';
import history from '../plugin/history/history';
import { Card, Form, Icon, Input, Button, Checkbox, message, Spin,notification  } from 'antd';
import '../styles/login.scss';

const users = [
	{username:'admin',password:'123456'}
];
class Login extends Component {
	
	//登录
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				if(this.matchUser(values)){
					history.push({pathname:'/main/home'});
				}else{
					notification.error({
						message: '登录提示',
						description:'用户名或密码错误',
					});
				}
			}
		});
	};
	
	//匹配用户
	matchUser = values =>{  
	    const {username, password} = values;
	    return users.find(user => user.username === username && user.password === password);
	};
	
    render() {
		const { getFieldDecorator } = this.props.form;
        return (
			<div className='login'>
				<Card title="用户登录" extra={<a href="#"></a>} 
					style={{ width: '320px',position:'fixed',top:'50%',left:'50%',transform: 'translate(-50%,-50%)'  }}>
					
					<Form onSubmit={this.handleSubmit}>
						<Form.Item>
							{getFieldDecorator('username', {rules: [{ required: true, message: '用户名不能为空' }],})
							(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名"/>,)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {rules: [{ required: true, message: '密码不能为空' }],})
							(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码"/>,)}
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" style={{width:'100%',height:'35px'}}>登录</Button>
						</Form.Item>
					</Form>

				</Card>
			</div>
        )
    }
}

const WrapLogin = Form.create({ name: 'login' })(Login)

export default WrapLogin;
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderMenu extends Component {
	constructor(props){
	    super(props);
		const { collapsed }= props;//利用props来接收父组件中state里面设置的collapsed的值
	    this.state = {
	        collapsed: collapsed,
			selectedKey: '', //选择的路径--当前选中的菜单项 key 数组
			openKey: '', //打开的路径（选择的上一层）--当前展开的 SubMenu 菜单项 key 数组
			firstHide:true,//第一次先隐藏 暴露的子菜单
	    }
	};
	componentDidMount() {
	    this.setMenuOpen(this.props);
	}
	componentWillReceiveProps(nextProps) {
	    this.onCollapse(nextProps.collapsed);
	    this.setMenuOpen(nextProps);
	}
	setMenuOpen = props => {
	    const {path} = props;
	    this.setState({
	        openKey: path.substr(0, path.lastIndexOf('/')),
	        selectedKey: path
	    });
	};
	onCollapse = (collapsed) => {
	    this.setState({
	        collapsed,
	        firstHide: collapsed,
	    });
	};
	// 点击 MenuItem 调用此函数
	menuClick = e =>{
		this.setState({selectedKey:e.key})
		
	};
	// SubMenu 展开/关闭的回调
	openSubMenu = v =>{
		this.setState({
		    openKey: v[v.length - 1],
		    firstHide: false,
		})
	};
	render(){
		const { collapsed, firstHide, openKey, selectedKey } = this.state;
		return (	
			<div className="siderMenu">
				<Sider trigger={null} collapsed={collapsed} style={{height:'100%'}}>{/*要使用自定义触发器，可以设置 trigger={null} 来隐藏默认设定,collapsed当前收起状态*/}
				    
					<div className="logo" style={collapsed?{backgroundSize:'70%'}:{backgroundSize:'30%'}}/>,
					
					{/*onClick-点击 MenuItem 调用此函数 onOpenChange-SubMenu 展开/关闭的回调*/}
					
				    <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}
						onClick={this.menuClick} onOpenChange={this.openSubMenu} 
						openKeys={firstHide ? null : [openKey]}
						defaultSelectedKeys={['/main/home']}>
				
				        <Menu.Item key="/main/home">
				            <Link to={"/main/home"}><Icon type="home" /><span>首页</span></Link>
				        </Menu.Item>

						<Menu.Item key="/main/todolist">
				            <Link to={"/main/todolist"}><Icon type="home" /><span>todolist</span></Link>
				        </Menu.Item>

						<Menu.Item key="/main/gobang">
				            <Link to={"/main/gobang"}><Icon type="home" /><span>五子棋</span></Link>
				        </Menu.Item>
						
				        <SubMenu key="/main/chart" title={<span><Icon type="area-chart" /><span>图形图表</span></span>}>
				            <Menu.Item key="/main/chart/echart">
				                <Link to={'/main/chart/echart'}><span>echart</span></Link>
				            </Menu.Item>
							<Menu.Item key="/main/chart/graph">
								<Link to={'/main/chart/graph'}><span>graph</span></Link>
				            </Menu.Item>
				        </SubMenu>

				        <Menu.Item key="/main/system">
				            <Link to={'/main/system'}><Icon type="edit" /><span>系统设置</span></Link>
				        </Menu.Item>
						
				    </Menu>
				</Sider>
			</div>
		)
	}
}

export default SiderMenu;
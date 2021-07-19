import './dashboard.css'
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  // FileOutlined,
  // TeamOutlined,
  // UserOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom'
import { Switch, Route } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
// Sub Pages
import DashboardProfilePage from './UserProfile'
import DashboardPasswordpage from './UserPassword'

const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

export default function DashboardLayout() {
  useAuth()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };
  const pathname = location.pathname

  return (
    <Layout style={{ minHeight: '100vh' }} id="components-layout-demo-side">
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" selectedKeys={[pathname]} mode="inline">
          <Menu.Item key="/dashboard/profile" icon={<PieChartOutlined />}>
           <Link to="/dashboard/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/password" icon={<DesktopOutlined />}>
            <Link to="/dashboard/password">Change Password</Link>
          </Menu.Item>
          {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Switch>
            <Route path="/dashboard/profile" exact>
              <DashboardProfilePage />
            </Route>
            <Route path="/dashboard/password" exact>
              <DashboardPasswordpage />
            </Route>
          </Switch>
          </div>
         
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}
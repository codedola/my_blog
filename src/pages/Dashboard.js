import "../assets/css/user-detail.css"
import React, { useState } from 'react';
import {  useRouteMatch, Switch, Route, Link } from "react-router-dom";
import { Row, Col, Layout, Menu, Button} from 'antd';
import {
    LogoutOutlined, IdcardOutlined,
    FormOutlined, GlobalOutlined,
    FileDoneOutlined, ArrowLeftOutlined, UserAddOutlined,
    ArrowRightOutlined, UsergroupAddOutlined,BarChartOutlined 
} from '@ant-design/icons';
import DashboardTopic from "../components/DashboardTopic";
import { useSelector, useDispatch } from "react-redux";
import useAuth from "../hooks/useAuth";
import {actLogout } from "../store/auth/actions"
import ArticlesCurrentUser from "../components/DashboardTopic/ArticlesCurrentUser";
import NewUser from "../components/NewUser";
const { SubMenu } = Menu;

export default function Dashboard() {
    useAuth();
    const dispatch = useDispatch();
    let { path, url } = useRouteMatch();
    const [keySelected, setKeySelected] = useState("2");
    const [collapsed, setCollapsed] = useState(false);
    const [visibleForm, setVisibleForm] = useState(false);
    const currentUser = useSelector(state => state.Auth.currentUser)
    
    if (!currentUser) return null;
    function onSelectedKey(keyInfo) {
        setKeySelected(keyInfo.key)
    }

    function handleLogout() {
        dispatch(actLogout())
    }

    function openFormNewUser() {
        setVisibleForm(true);
    }

    function closeFormNewUser() {
        setVisibleForm(false);
    }

    return (
        <Layout className="user__detail">
            <Row gutter={[10, 10]} style={{ height: "100%" }}>
                <Col md={collapsed ? 2 : 5} xs={24} className="user__detail-menu">
                    <div className="arrow_menu">
                        <Button
                            type="primary"
                            shape="round"
                            
                            onClick={() => setCollapsed(!collapsed)}
                        
                        >
                            {!collapsed ? <ArrowLeftOutlined  /> :
                                <ArrowRightOutlined />}
                        </Button>
                    </div>

                    <Menu
                        mode="inline"
                        theme="light"
                        selectedKeys={keySelected}
                        onSelect={onSelectedKey}
                        inlineCollapsed={collapsed}
                    >
                        <Menu.Item key="2" icon={<FileDoneOutlined />}>
                            <Link to={`${url}`}>Bài viết</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<IdcardOutlined />}>
                            <Link to={`${url}/profile`}>Profile</Link>
                        </Menu.Item>
                        <SubMenu key="submenu_users" icon={<BarChartOutlined  />} title="Management">
                            <Menu.Item key="7" icon={<UsergroupAddOutlined />}>
                                <Link to={`${url}/users`}>All Users</Link>
                            </Menu.Item>
                            <Menu.Item
                                key="8"
                                icon={<UserAddOutlined />}
                                onClick={openFormNewUser}
                            >
                                New User
                            </Menu.Item>
                        </SubMenu>
                        
                        <Menu.Item key="4" icon={<FormOutlined />}>
                            <Link to={`${url}/change-password`}>Thay đổi mật khẩu</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<GlobalOutlined />} disabled>
                            Vietnamese
                        </Menu.Item>
                      
                        <Menu.Item key="6" icon={<LogoutOutlined />} onClick={handleLogout} danger>
                            Đăng xuất
                        </Menu.Item> 
                    </Menu>
                      
                </Col>
                <Col
                    md={collapsed ? 22 : 19} xs={24}
                    className="user__detail-content"
                    style={{ paddingRight: 15 }}
                >
                    <Switch>
                        <Route exact path={path} >
                          <ArticlesCurrentUser authorID={currentUser.id} />
                        </Route>
                        <Route
                            path={`${path}/:topicTitle`}
                        >
                            <DashboardTopic />
                        </Route>
                    </Switch>
                </Col>
            </Row>
            <NewUser
                visibleForm={visibleForm}
                closeFormNewUser={closeFormNewUser}
            />
        </Layout>      
    )
}

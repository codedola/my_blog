import "../assets/css/user-detail.css"
import React, { useState } from 'react';
import {  useRouteMatch, Switch, Route, Link } from "react-router-dom";
import { Row, Col, Layout, Menu } from 'antd';
import {
    LogoutOutlined,
    IdcardOutlined,
    FormOutlined,
    GlobalOutlined,
    FileDoneOutlined
} from '@ant-design/icons';
import UserDetailTopic from "../components/UserDetailTopic";
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import ArticlesCurrentUser from "../components/UserDetailTopic/ArticlesCurrentUser";

export default function Dashboard() {
    useAuth();
    let { path, url } = useRouteMatch();
    const [keySelected, setKeySelected] = useState("2")
    const currentUser = useSelector(state => state.Auth.currentUser)
    
    if (!currentUser) return null;
    function onSelectedKey(keyInfo) {
        setKeySelected(keyInfo.key)
    }
    return (
        <Layout className="user__detail">
            <Row gutter={[16, 16]} style={{ height: "100%" }}>
                <Col md={6} xs={24} className="user__detail-menu">
                    <Menu
                        style={{ width: "100%", height: "100%" }}
                        mode="inline"// inline || vertical || horizontal
                        theme="light"
                        selectedKeys={keySelected}
                        onSelect = {onSelectedKey}
                    >
                        <Menu.Item key="2" icon={<FileDoneOutlined />}>
                            <Link to={`${url}`}>Bài viết</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<IdcardOutlined />}>
                            <Link to={`${url}/profile`}>Profile</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<FormOutlined />}>
                            <Link to={`${url}/change-password`}>Thay đổi mật khẩu</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<GlobalOutlined />} disabled>
                            Vietnamese
                        </Menu.Item>
                       
                        <Menu.Item key="6" icon={<LogoutOutlined />} danger>
                            Đăng xuất
                        </Menu.Item> 
                    </Menu>
                      
                </Col>
                <Col md={18} xs={24} className="user__detail-content bg-white-blue">
                    <Switch>
                        <Route exact path={path} >
                          <ArticlesCurrentUser authorID={currentUser.id} />
                        </Route>
                        <Route
                            path={`${path}/:topicTitle`}
                        >
                            <UserDetailTopic />
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Layout>      
    )
}

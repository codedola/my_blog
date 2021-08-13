import React, {useEffect} from 'react'
import { Row, Col } from "antd"
import { useDispatch } from 'react-redux';
import { actFetchPostsAsync, actFetchPopularPostsAsync } from '../store/posts/actions';
import SidebarHomeBlog from '../components/HomepageBlog/SidebarHomeBlog';
import ListContentBlog from "../components/HomepageBlog/ListContentBlog"
import TaskbarBlog from '../components/HomepageBlog/TaskbarBlog';
import { ContainerHomeBlog } from "../components/StyledComponents/Homepage.Styled"
export default function HomepageBlog() {
    const dispatch = useDispatch();

    useEffect(function () {
        dispatch(actFetchPopularPostsAsync());
        dispatch(actFetchPostsAsync())
    }, [dispatch])


    return (
        <div className="wrapper_homepage bg-white-blue">
            <ContainerHomeBlog>
                <Row gutter={[16, 16]}
                    style={{ paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>
                    <Col lg={16}>
                            <TaskbarBlog />
                        <ListContentBlog />
                        <div className="spacing"></div>
                    </Col>
            
                    
                    <Col lg={8}>
                        <SidebarHomeBlog/>
                    </Col>
                </Row>
            </ContainerHomeBlog>
        </div>
    )
}

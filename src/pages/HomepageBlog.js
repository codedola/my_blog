import React, {useEffect} from 'react'
import { Col , Divider} from "antd"
import { useDispatch } from 'react-redux';
import { actFetchPostsAsync, actFetchPopularPostsAsync, actFetchLatestPostsAsync } from '../store/posts/actions';
import SidebarHomeBlog from '../components/HomepageBlog/SidebarHomeBlog';
import ListContentBlog from "../components/HomepageBlog/ListContentBlog"
import ListNewArticleBlog from '../components/HomepageBlog/ListNewArticleBlog';
import { ContainerHomeBlog, RowHomeBlog } from "../components/StyledComponents/Homepage.Styled"
export default function HomepageBlog() {
    const dispatch = useDispatch();

    useEffect(function () {
        dispatch(actFetchLatestPostsAsync());
        dispatch(actFetchPopularPostsAsync());
        dispatch(actFetchPostsAsync())
    }, [dispatch])


    return (
        <div className="wrapper_homepage bg-white-blue">
            <ContainerHomeBlog>
                <RowHomeBlog gutter={[16, 16]}>
                    <Col lg={16}>
                        <ListNewArticleBlog />
                        <Divider />
                        <ListContentBlog />
                        <div className="spacing"></div>
                    </Col>
            
                    
                    <Col lg={8}>
                        <SidebarHomeBlog/>
                    </Col>
                </RowHomeBlog>
            </ContainerHomeBlog>
        </div>
    )
}

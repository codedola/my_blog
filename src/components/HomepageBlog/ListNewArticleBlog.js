import React from 'react'
import {Row, Col } from "antd"
import { useSelector } from "react-redux"
import ArticleBlog from './AriticleBlog'

export default function ListNewArticleBlog() {
    const posts = useSelector(state => state.Posts.articlesLatest)
    return (
      
        
      <Row>
            {
                posts?.map((post, index) => {
                    return (
                        <Col span={6} key={index}>
                            <ArticleBlog
                                isStyleCard={false}
                                isStyleRow ={ false}
                                isShowDesc = {false}
                                isShowCategoies = {false}
                                isShowAvatar={true}
                                isShowInfoUser={false}
                                isShowTitle={false}
                                isShowInfo={true}
                                isNewStory={true}
                                post={post}
                            />
                        </Col>
                    )
                })
            }
        </Row> 
       
    )
}

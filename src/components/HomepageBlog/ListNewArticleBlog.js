import React from 'react'
import {Row, Col } from "antd"
import { useSelector } from "react-redux"
import ArticleBlog from './AriticleBlog'
import AriticleBlogSkeleton from "./AriticleBlogSkeleton"

export default function ListNewArticleBlog() {
    const posts = useSelector(state => state.Posts.articlesLatest)
    return (
      
        
      <Row style={{padding: "16px 4px", backgroundColor: "#fff", borderRadius: 10}}>
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

            {
                posts.length === 0 && (
                    <>
                        {
                            [1, 2, 3, 4].map(function (count) {
                                return (
                                     <Col span={6} key={count}>
                                        <AriticleBlogSkeleton
                                            isStyleCard={false}
                                            isStyleRow ={ false}
                                            isShowAvatar={true}
                                            isShowInfoUser={false}
                                            isShowTitle={false}
                                            isShowInfo={true}
                                            isNewStory={true}
                                        />
                                    </Col>
                                )
                            })
                        }
                    </>
                   
                    
                )
            }
        </Row> 
       
    )
}

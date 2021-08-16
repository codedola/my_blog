import React from 'react';
import { Col, Row } from "antd";
import { UpOutlined } from "@ant-design/icons"
import AriticleBlog from "./AriticleBlog";
import { usePostsPaging } from "../../hooks/usePostsPaging";
import { BackTopStyled} from "../StyledComponents/PostDetail.Styled"
import AriticleBlogSkeleton from "./AriticleBlogSkeleton"
export default function ListContentBlog() {
    const {
        posts,
        renderButtonLoadmore
    } = usePostsPaging();

    return (
        <>
            <Row gutter={[8, 48]}>
                {
                    posts?.map(function (post, index) {
                        return (
                            <Col lg={24} key={index}>
                                <AriticleBlog post={post} />
                            </Col>
                        )
                    })
                }
                {
                    posts.length === 0 && (
                        <Col lg={24}>
                            <AriticleBlogSkeleton />
                        </Col>
                    )
                }
            </Row>
            <div className="spacing"></div>
            {renderButtonLoadmore()}

             <BackTopStyled>
                <div className="arrow_to_top">
                    <UpOutlined />
                </div>
            </BackTopStyled>
        </>
    )
}

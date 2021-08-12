import React from 'react'
import PostCreation from "../PostCreation"
import { useDispatch } from "react-redux"
import { actEditPostAsync } from "../../store/posts/actions"
import { ModalPostEdit } from "../StyledComponents/PostCard.Styled"
export default function PostEditModal({
    isModalVisible, onCancelEditPost, post
}) {
    const dispatch = useDispatch();

    const handleEditPost = ({title, content, categories, tags, featured_media}) => {
        return (
            dispatch(actEditPostAsync({
                id: post?.id,
                title, content, categories, tags, featured_media
            }))
        )
    }
    return (
        <ModalPostEdit
            visible={isModalVisible}
            onCancel={onCancelEditPost}
            width="68%"
            centered
            footer={null}
                
        >
            <PostCreation
                post={post}
                handleEditPost={handleEditPost}
                widthEditor="100%"
                textButton="Chỉnh sửa bài viết"
            />
        </ModalPostEdit>
    )
}

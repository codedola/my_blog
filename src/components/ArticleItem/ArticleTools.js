import React, {useState} from 'react'
import { Menu, Dropdown, List } from 'antd';
import { EditOutlined } from "@ant-design/icons"
import PostEditModal from "../PostEditModal"
import { ModalStyled } from "../StyledComponents/UserProfileAvatar.styled"
import { useDispatch } from "react-redux"
import { actDeletePostAsync } from "../../store/posts/actions"
import Notification from '../shared/Notification';
//
export default function ArticleTools({ post }) {
    const dispatch = useDispatch()
    const [isModalDelete, setIsModalDelete] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)

    function onCancelModalDelete() {
        setIsModalDelete(false)
    }
    function onShowModalDelete() {
        setIsModalDelete(true)
    }
    const menu = (
        <Menu>
            <Menu.Item
                key={"edit"}
                className="edit"
                style={{ color: "#fa8c16" }}
                onClick={onShowEditPost}
            >
                Chỉnh sửa
            </Menu.Item>
            <Menu.Item
                key={"delete"}
                className="delete"
                onClick={onShowModalDelete}
                style={{ color: "#f5222d" }}>
                xóa
            </Menu.Item>
        </Menu>
    )

    function onShowEditPost() {
        setIsModalVisible(true);
    }

    function onCancelEditPost () {
        setIsModalVisible(false);
    }

    function handleDeletePost() {
        onCancelModalDelete()
        if (post) {
            dispatch(actDeletePostAsync(post.id))
                .then(function (res) {
                if (res.ok) {
                    Notification({
                        type: "success",
                        placement: "bottomRight",
                        message: "Xóa bài viết thành công"
                    })
                } else {
                    Notification({
                        type: "error",
                        placement: "bottomRight",
                        message: "Xóa bài viết thất bại"
                    })
                }
            })
        }
    }


    return (
        <>
        <div className={`edit_post post${post?.id}`}>
              <Dropdown
                getPopupContainer={() => document.querySelector(`div.post${post?.id}`)}
                overlay={menu} placement="bottomRight">
                <EditOutlined />
              </Dropdown>
        </div>

            <PostEditModal
                isModalVisible={isModalVisible}
                onCancelEditPost={onCancelEditPost}
                post={post}
            />

            <ModalStyled
                title="Xóa bài viết này ?"
                visible={isModalDelete}
                onCancel={onCancelModalDelete}
                footer={null}
                width={380}
                closable = {false}
            >
                <List
                    size="large"
                >
                    <List.Item
                        className="delete"
                        onClick={handleDeletePost}
                    >
                        Xóa bài viết
                    </List.Item>
                    <List.Item
                        className="cancel"
                        onClick={onCancelModalDelete}
                    >
                        Hủy
                    </List.Item>
                </List>
            </ModalStyled>
            
        </>
    )
}

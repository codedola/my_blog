import React, {useState} from 'react'
import { Menu, Dropdown } from 'antd';
import { EditOutlined } from "@ant-design/icons"
import PostCreation from "../PostCreation"
import { ModalPostEdit } from "../StyledComponents/PostCard.Styled"
//
export default function ArticleTools({ post }) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const menu = (
        <Menu>
            <Menu.Item
                key={"edit"}
                className="edit"
                style={{ color: "#fa8c16" }}
                onClick={onShowEditPost}
            >
                Edit
            </Menu.Item>
            <Menu.Item key={"delete"} className="delete" style={{color: "#f5222d"}}>
                Delete
            </Menu.Item>
        </Menu>
    )

    function onShowEditPost() {
        setIsModalVisible(true);
    }

    function onCancelEditPost () {
        setIsModalVisible(false);
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

        <ModalPostEdit
            visible={isModalVisible}
            onOk={onShowEditPost}
            onCancel={onCancelEditPost}
            width="68%" centered
                footer={null}
                
        >
                <PostCreation
                    post={post}
                    widthEditor="100%"
                    textButton="Chỉnh sửa bài viết"
                />
        </ModalPostEdit>
        </>
    )
}

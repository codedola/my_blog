import React, {useState, useRef} from 'react'
import { Row, Col, Image, Button, List } from "antd"
import {ModalStyled } from "../StyledComponents/UserProfileAvatar.styled";
import { useSelector } from "react-redux"
import createDefaultAvatar from "../../helpers/createDefaultAvatar"
import CheckImgBeforeUpload from '../shared/CheckImgBeforeUpload'
import MediaModal from './MediaModal';
import LoadingUpload from '../shared/LoadingUpload'
const StyleAvatar = {
    height: 80,
    width: 80,
    borderRadius: "50%"
}
export default function UserProfileAvatar({handleSetAvatarUser, loading, objFile, mediaID, setMediaID}) {
    const [urlPreview, setUrlPreview] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalLibrary, setIsModalLibrary] = useState(false);
    const inputFile = useRef(null);

    const currentUser = useSelector(state => state.Auth.currentUser);
    
    
    const avatarCurrUser = createDefaultAvatar(currentUser.id,
        currentUser?.simple_local_avatar?.full);

    const hanldeOnChangeAvatar = (event) => {
        const file = event.target.files[0];
       
        const reader = new FileReader();
    
        reader.onload = function (e) {
            const avatarCorrect = CheckImgBeforeUpload(file);
            if (avatarCorrect) {
                setUrlPreview(e.target.result);
                handleSetAvatarUser && typeof handleSetAvatarUser === "function"
                    && handleSetAvatarUser(file);
                setMediaID(null);
            } else {
                setUrlPreview(null)
            }
        };
        if (file) {
            reader.readAsDataURL(file);
            
        }
    }

    const hanleShowInputFile = () => {
        inputFile.current.click();
        handleCancel()
    }

    // Modal
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // Media Library
    const showLibraryMedia = () => {
        setIsModalVisible(false);
        setIsModalLibrary(true);
    }

    const handleSetAvatarMedia = (media) => {
        if (media) {
            setMediaID(media.id);
            setUrlPreview(media.source_url);
            handleSetAvatarUser && typeof handleSetAvatarUser === "function"
                    && handleSetAvatarUser(null)
        } else {
             setUrlPreview(null);
        }
    }


    return (
       <Row>
            <Col span="4">
                <div className="user__profile-img">
                    <Image
                        style={StyleAvatar}
                        alt="avatar"
                        src={urlPreview ? urlPreview : avatarCurrUser}
                    />
                    {
                        loading && (objFile || mediaID )?
                            <div className="profile-img_loading" style={StyleAvatar}>
                                <LoadingUpload />
                            </div> : null
                    }
                    
                </div>
            </Col>
            <Col span={20}>
                <div className="user__profile-info--img">
                    <h3>{currentUser ? currentUser.nickname : "nickname@123"}</h3>
                    <Button
                        type="text"
                        onClick={showModal}
                    >
                        Thay đổi ảnh đại diện
                    </Button>
                    <input type="file"
                        ref={inputFile} className="file_avatar"
                        onChange={hanldeOnChangeAvatar}
                    />
                </div>
            </Col>
            <MediaModal
                isModalLibrary={isModalLibrary}
                setIsModalLibrary={setIsModalLibrary}
                handleSetAvatarMedia={handleSetAvatarMedia}
            />

            <ModalStyled
                title="Chọn ảnh đại diện"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={400}
                closable = {false}
                
            >
                <List
                    size="large"
                >
                    <List.Item
                        className="upload"
                        onClick={hanleShowInputFile}
                    >
                        Tải ảnh lên
                    </List.Item>
                    <List.Item
                        className="library"
                        onClick={showLibraryMedia}
                    >
                        Ảnh từ ReactBlog
                    </List.Item>
                    <List.Item
                        className="cancel"
                        onClick={handleCancel}
                    >
                        Hủy
                    </List.Item>
                </List>
            </ModalStyled>
        </Row>
    )
}

import React, {useState, useRef} from 'react'
import { UploadOutlined } from "@ant-design/icons"
import { List } from "antd"
import CheckImgBeforeUpload from '../shared/CheckImgBeforeUpload'
import { WrapperImagePost, ImagePostStyled } from "../StyledComponents/PostCreation.Styled"
import { ModalStyled } from "../StyledComponents/UserProfileAvatar.styled"
import MediaModal from "../UserProfile/MediaModal"
export default function UploadImagePost({handleSetAvatarUser, setMediaID}) {
    const [urlPreview, setUrlPreview] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalLibrary, setIsModalLibrary] = useState(false);
    const inputFile = useRef(null);


    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const hanleShowInputFile = () => {
        inputFile.current.click();
        handleCancel()
    }

    const hanldeOnChangeAvatar = (event) => {
        const file = event.target.files[0];
       
        const reader = new FileReader();
    
        reader.onload = function (e) {
            const avatarCorrect = CheckImgBeforeUpload(file);
            if (avatarCorrect) {
                setUrlPreview(e.target.result); // base64 for review
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

        // Media Library
    const showLibraryMedia = () => {
        setIsModalVisible(false);
        setIsModalLibrary(true);
    }
    // Modal
    const showModal = () => {
        setIsModalVisible(true);
    };

    // Library
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
        <WrapperImagePost>
            <div className="post__img">
                <p>
                    Chọn ảnh
                </p>
                <UploadOutlined  onClick={showModal} />
            </div>

            {
                urlPreview ?
                    <ImagePostStyled
                        width="100%"
                        height={420}
                        preview={false}
                        src={urlPreview}
                    /> : null
            }
            

            {/* Show folder Image */}
            <input type="file"
                style={{display: "none"}}
                ref={inputFile} className="file_image"
                onChange={hanldeOnChangeAvatar}
            />

            {/* Show Imgage library */}
            <MediaModal
                isModalLibrary={isModalLibrary}
                setIsModalLibrary={setIsModalLibrary}
                handleSetAvatarMedia={handleSetAvatarMedia}
            />
            
            {/* Show Modal for Imgage */}
            <ModalStyled
                title="Chọn ảnh bài viết"
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
                        Ảnh từ thư viện
                    </List.Item>
                    <List.Item
                        className="cancel"
                        onClick={handleCancel}
                    >
                        Hủy
                    </List.Item>
                </List>
            </ModalStyled>
        </WrapperImagePost>
    )
}

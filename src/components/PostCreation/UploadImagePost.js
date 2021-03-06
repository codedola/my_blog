import React, {useState, useRef, useEffect} from 'react'
import { List} from "antd"
import { UploadOutlined } from "@ant-design/icons"
import MediaModal from "../UserProfile/MediaModal"
import CheckImgBeforeUpload from '../shared/CheckImgBeforeUpload'
import { ModalStyled } from "../StyledComponents/UserProfileAvatar.styled"
import { WrapperImagePost, ImagePostStyled } from "../StyledComponents/PostCreation.Styled"

//
export default function UploadImagePost({ handleSetAvatarUser, setMediaID, mediaURL}) {
    const [urlPreview, setUrlPreview] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalLibrary, setIsModalLibrary] = useState(false);
    const inputFile = useRef(null);

    useEffect(function () {
        if (mediaURL) {
            setUrlPreview(mediaURL);
        }
    }, [mediaURL])

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
                    Ch???n ???nh
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
                title="Ch???n ???nh b??i vi???t"
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
                        T???i ???nh l??n
                    </List.Item>
                    <List.Item
                        className="library"
                        onClick={showLibraryMedia}
                    >
                        ???nh t??? th?? vi???n
                    </List.Item>
                    <List.Item
                        className="cancel"
                        onClick={handleCancel}
                    >
                        H???y
                    </List.Item>
                </List>
            </ModalStyled>
        </WrapperImagePost>
    )
}

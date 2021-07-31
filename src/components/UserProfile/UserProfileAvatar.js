import React, {useState, useRef} from 'react'
import { Row, Col, Image, Button } from "antd"
import { useSelector } from "react-redux"
import createDefaultAvatar from "../../helpers/createDefaultAvatar"
import CheckImgBeforeUpload from '../shared/CheckImgBeforeUpload'


export default function UserProfileAvatar({handleSetAvatarUser}) {
    const [urlPreview, setUrlPreview] = useState(null)
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
                    && handleSetAvatarUser(file)
            } else {
                setUrlPreview(null)
            }
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    const hanleShowInputFile = () => {
        inputFile.current.click()
    }

    return (
       <Row>
            <Col span="4">
                <div className="user__profile-img">
                    <Image
                        width={80}
                        height={80}
                        alt="avatar"
                        src={urlPreview ? urlPreview : avatarCurrUser}
                    />
                </div>
            </Col>
            <Col span={20}>
                <div className="user__profile-info--img">
                    <h3>{currentUser ? currentUser.nickname : "nickname@123"}</h3>
                    <Button
                        type="text"
                        onClick={hanleShowInputFile}
                    >
                        Thay đổi ảnh đại diện
                    </Button>
                    <input type="file" ref={inputFile} className="file_avatar" onChange={hanldeOnChangeAvatar} />
                </div>
            </Col>
        </Row>
    )
}

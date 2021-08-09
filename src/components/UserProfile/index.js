import "./userprofile.css"
import React, {useState, useEffect} from 'react'
import { Divider } from 'antd';
import UserProfileAvatar from "./UserProfileAvatar";
import UserProfileForm from "./UserProfileForm";
import Notification from "../shared/Notification";
import { useSelector, useDispatch } from "react-redux"
import { actUploadUserProfileAsync } from "../../store/users/actions"
const initUserInfo = {
    description: "",
    nickname: "",
    first_name: "",
    last_name: ""
}
export default function UserProfile() {
    const dispatch = useDispatch();
    // objFile from "input" or media_id from "library media"
    const [objFile, setObjFile] = useState(null);
    const [mediaID, setMediaID] = useState(null);

    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState(initUserInfo);
    const currentUser = useSelector(state => state.Auth.currentUser);

    useEffect(function () {
        if (currentUser) {
            const { last_name, first_name, nickname, description} = currentUser
            setUserInfo({
                last_name, first_name, nickname, description
            })
        }
    }, [currentUser])
    
    const handleSetAvatarUser = (file) => {
        setObjFile(file);
    }

    const handleSetInfoUser = (keyField, data) => {
        setUserInfo({
            ...userInfo,
            [keyField]: data
        })
    }

    const handleUploadProfile = () => {
        setLoading(true);
        dispatch(actUploadUserProfileAsync({ file: objFile, media_id: mediaID, ...userInfo }))
            .then(function (res) {
                setLoading(false)
                setObjFile(null)
                if (res.ok) {
                    Notification({
                        type: "success", message: "Thành công",
                        description: "Bạn đã cập nhật profile thành công !",
                        placement: "bottomLeft"
                    })
                } else {
                    Notification({
                        type: "error", message: "Thất bại",
                        description: "Cập nhật profile thất bại. Xin kiểm tra lại thông tin !",
                        placement: "bottomLeft"
                    })
                }
            })
    }

 
    return (
        <div className="user__profile" style={{borderRadius: 10}}>
            <UserProfileAvatar
                loading={loading}
                objFile={objFile}
                setMediaID={setMediaID}
                mediaID={mediaID}
                handleSetAvatarUser={handleSetAvatarUser}
                userInfo = {currentUser}
            />
            <Divider />
            <UserProfileForm
                handleSetInfoUser={handleSetInfoUser}
                handleUploadProfile={handleUploadProfile}
                userInfo={userInfo}
                loading = {loading}
            />
        </div>
    );
}

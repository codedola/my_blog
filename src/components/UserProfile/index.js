import "./userprofile.css"
import React, {useState} from 'react'
import { Divider} from 'antd';
import UserProfileAvatar from "./UserProfileAvatar";
import UserProfileForm from "./UserProfileForm";
const initDataProfile = {
    file: null,

}
export default function UserProfile() {
    const [dataProfile, setDataProfile] = useState(initDataProfile)
    return (
        <div className="user__profile" style={{borderRadius: 10}}>
            <UserProfileAvatar />
            <Divider />
            <UserProfileForm />
        </div>
    );
}

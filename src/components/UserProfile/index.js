import "./userprofile.css"
import React from 'react'
import { Divider} from 'antd';
import UserProfileAvatar from "./UserProfileAvatar";
import UserProfileForm from "./UserProfileForm";

export default function UserProfile() {
    return (
        <div className="user__profile" style={{borderRadius: 10}}>
            <div className="spacing"></div>
            <UserProfileAvatar />
            <Divider />
            <UserProfileForm />
        </div>
    );
}

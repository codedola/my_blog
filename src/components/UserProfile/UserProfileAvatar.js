import React from 'react'
import { Row, Col, Image } from "antd"
import { useSelector } from "react-redux"
import createDefaultAvatar from "../../helpers/createDefaultAvatar"

export default function UserProfileAvatar() {
    const currentUser = useSelector(state => state.Auth.currentUser);
    
    const avatarCurrUser = createDefaultAvatar(currentUser.id,
        currentUser?.simple_local_avatar?.full);

    return (
       <Row>
            <Col span="4">
                <div className="user__profile-img">
                    <Image
                        width={80}
                        alt="avatar"
                        src={avatarCurrUser}
                    />
                </div>
            </Col>
            <Col span={20}>
                <div className="user__profile-info--img">
                    <h3>{currentUser ? currentUser.nickname : "Nhan123"}</h3>
                    <p>Thay doi anh dai dien</p>
                </div>
            </Col>
        </Row>
    )
}

import React, { useEffect, useState , useMemo} from 'react';
import { Row, Col, Descriptions, Divider, Skeleton } from "antd";
import { useDispatch } from "react-redux";
import { actGetInfoUserByIDAsync } from "../../store/users/actions";
import { ImageStyled, EmptyStyled, SkeletonAvatarStyled} from "../StyledComponents/UsersTable.styled";
import createDefaultAvatar from "../../helpers/createDefaultAvatar"
export default function TabUserInfo({ userInfo }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(null)
    const userID = Number(userInfo?.key)
    
    useEffect(function () {
        setLoading(true);
        dispatch(actGetInfoUserByIDAsync(userID))
            .then(function (res) {
                setLoading(false)
                if (res.ok) {
                    setUserData(res.data[0])
                }
            })
    }, [dispatch, userID])

    const avatarUser = useMemo(function () {
        return createDefaultAvatar(userData?.id, userData?.simple_local_avatar?.full)
    }, [userData])
    

    return (
        <Row>
            <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
                {
                    !loading ?
                        <ImageStyled
                            src={avatarUser}
                        /> : <SkeletonAvatarStyled active shape="circle" />
                }
            </Col>
            <Col span={16} style={{ margin: "auto" }}>
                {
                    loading ? <Skeleton active /> : (
                         <Descriptions
                            column={2}
                            contentStyle={{
                                fontWeight: 600,
                                color: "#1075a5",
                                fontSize: 16
                            }}
                            labelStyle={{
                                fontWeight: 400,
                                color: "#636363",
                                fontSize: 16
                            }}
                        >
                            <Descriptions.Item label="firstname">
                                {userData?.first_name !== "" ? userData?.first_name : " - "}
                            </Descriptions.Item>
                            <Descriptions.Item label="lastname">
                                {userData?.last_name !== "" ? userData?.last_name : " - "}
                            </Descriptions.Item>
                            <Descriptions.Item label="username">{ userData?.user_name}</Descriptions.Item>
                            <Descriptions.Item label="email">{userData?.email}</Descriptions.Item>
                            <Descriptions.Item contentStyle={{fontWeight: 400, color: "#333"}}  label="Description">
                                {userData?.description !== "" ? userData?.description : "No description"}
                            </Descriptions.Item>
                        </Descriptions>
                    )
                }
            </Col>
            <Divider />
            <Col span={24}>
                <EmptyStyled description={`${userData?.nickname} chưa tạo bài viết`} />
            </Col>
        </Row>
    )
}

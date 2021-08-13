import React, { useEffect, useState , useMemo} from 'react';
import { Row, Col, Descriptions, Divider, Skeleton} from "antd";
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { actGetInfoUserByIDAsync } from "../store/users/actions";
import { ImageStyled, SkeletonAvatarStyled} from "../components/StyledComponents/UsersTable.styled";
import createDefaultAvatar from "../helpers/createDefaultAvatar";
import ArticlesCurrentUser from '../components/DashboardTopic/ArticlesCurrentUser';

export default function UserDetail() {
    const dispatch = useDispatch();
    const paramObj = useParams();
    const userID = Number(paramObj.user_id)
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(null)
    
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

    //

    return (
        <>
            <Row justify="center">
                <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
                    {
                        !loading ?
                            <ImageStyled
                                src={avatarUser}
                            /> : <SkeletonAvatarStyled active shape="circle" />
                    }
                </Col>
                <Col lg={12} style={{display: "flex", alignItems: "center"}}>
                    {
                        loading ? <Skeleton active /> : (
                            <Descriptions
                                column={2}
                                contentStyle={{
                                    fontWeight: 600,
                                    color: "#1075a5",
                                    fontSize: 16
                                }}
                                size="small"
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
                                <Descriptions.Item label="username">
                                    {userData?.user_name}
                                </Descriptions.Item>
                                <Descriptions.Item label="email">
                                    {userData?.email}
                                </Descriptions.Item>
                                <Descriptions.Item
                                    contentStyle={{ fontWeight: 400, color: "#333" }}
                                    label="Description"
                                >
                                    {
                                        userData?.description !== "" ?
                                        userData?.description : "No description"
                                    }
                                </Descriptions.Item>
                            </Descriptions>
                        )
                    }
                </Col>
                <Divider />
                <Col span={24}>
                    {
                        userData?.id ?
                            <ArticlesCurrentUser
                                authorID={userID}
                                isShowBg={false}
                                isShowDesc={true}
                                isDashboard={false}
                            /> : null
                    }
                </Col>
            </Row>
        </>
    )
}

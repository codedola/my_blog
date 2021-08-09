import React, { useEffect, useState , useMemo, useCallback} from 'react';
import { Row, Col, Descriptions, Divider, Skeleton, Tooltip} from "antd";
import { SettingOutlined } from "@ant-design/icons"
import { useDispatch } from "react-redux";
import { actGetInfoUserByIDAsync } from "../../store/users/actions";
import { ImageStyled, SkeletonAvatarStyled, ButtonEditUser} from "../StyledComponents/UsersTable.styled";
import createDefaultAvatar from "../../helpers/createDefaultAvatar";
import ArticlesCurrentUser from '../DashboardTopic/ArticlesCurrentUser';
import EditUser from '../EditUserForm';
export default function TabUserInfo({ userInfo, getNewTitleTabPane }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(null)
    const [visibleForm, setVisibleForm] = useState(false);
    
    useEffect(function () {
        setLoading(true);
        dispatch(actGetInfoUserByIDAsync(Number(userInfo?.key)))
            .then(function (res) {
                setLoading(false)
                if (res.ok) {
                  
                    setUserData(res.data[0])
                }
            })
    }, [dispatch, userInfo])

    const avatarUser = useMemo(function () {
        return createDefaultAvatar(userData?.id, userData?.simple_local_avatar?.full)
    }, [userData])

    //

    const handleSetUserData = useCallback(
        (userdata) => {
          setUserData(userdata)
        }, []
    )
    
    // Edit Form
    function openFormEditUser() {
        setVisibleForm(true);
    }

    function closeFormEditUser() {
        setVisibleForm(false);
    }

    return (
        <>
            <Row>
                <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
                    {
                        !loading ?
                            <ImageStyled
                                src={avatarUser}
                            /> : <SkeletonAvatarStyled active shape="circle" />
                    }
                    <Tooltip title="Chỉnh sửa" placement="topLeft">
                        <ButtonEditUser type="text" size="small" shape="round" onClick={openFormEditUser}>
                            <SettingOutlined />
                        </ButtonEditUser>
                    </Tooltip>
                   
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
                        userData?.id ? <ArticlesCurrentUser authorID={userData.id} isShowBg={false} /> : null
                    }
                </Col>
            </Row>

            <EditUser
                visibleForm={visibleForm}
                closeFormEditUser={closeFormEditUser}
                userEditInfo={userData}
                handleSetUserData={handleSetUserData}
                getNewTitleTabPane={getNewTitleTabPane}
            />
        </>
    )
}

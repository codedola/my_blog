import "../UserProfile/userprofile.css"
import React, { useState, useRef } from 'react'
import UserProfileAvatar from '../UserProfile/UserProfileAvatar';
import { Drawer, Form, Button, Col, Row, Input } from 'antd';
import {actEditUserProfileAsync  } from "../../store/users/actions"
import { useDispatch } from "react-redux"


export default function EditUser({ visibleForm, closeFormEditUser, userEditInfo,
    handleSetUserData, getNewTitleTabPane }) {
    const formRef = useRef(null);
    //
    //console.log(userEditInfo)
    const dispatch = useDispatch();
    //
    const [objFile, setObjFile] = useState(null);
    const [mediaID, setMediaID] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleSetAvatarUser = (file) => {
        setObjFile(file);
    }

    const handleonSubmit = (data) => {
        setLoading(true)
        let media_id = objFile || mediaID;
        if (!media_id || media_id === null) {
            media_id = userEditInfo?.simple_local_avatar?.media_id;
        }
        console.log({ id: userEditInfo?.id, ...data, media_id })
    
        dispatch(actEditUserProfileAsync({id: userEditInfo?.id, ...data, media_id}))
            .then(function (res) {
                setLoading(false)
                if (res.ok) {
                    getNewTitleTabPane({keyId: res.data.id, newTitle: res.data.nickname})
                    handleSetUserData(res.data)
                    formRef?.current?.resetFields();
                    closeFormEditUser();
                }
            })
    }
   
    return (
        <Drawer
            title="Upload User"
            width={720}
            onClose={closeFormEditUser}
            visible={visibleForm}
            bodyStyle={{ paddingBottom: 80 }}
        >
            <UserProfileAvatar
                loading={loading}
                objFile={objFile}
                setMediaID={setMediaID} // set Media_id
                handleSetAvatarUser={handleSetAvatarUser} // set Object file
                mediaID={mediaID}
                textInputFile="Chọn ảnh đại diện"
                isShowNickname={true}
                userInfo={userEditInfo}
            />
            
            <Form
                ref={formRef}
                layout="vertical"
                style={{ marginTop: 20 }}
                hideRequiredMark
                onFinish={handleonSubmit}
            
                initialValues={
                    {
                        first_name: userEditInfo?.first_name,
                        last_name: userEditInfo?.last_name,
                        nickname: userEditInfo?.nickname,
                        email: userEditInfo?.email,
                        description: userEditInfo?.description,
                    }
                }
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                        name="first_name"
                        label="First name"
                        rules={[{ required: true, message: 'Please enter first name' }]}
                        >
                        <Input placeholder="Please enter first name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                        name="last_name"
                        label="Last name"
                        rules={[{ required: true, message: 'Please enter last name' }]}
                        >
                        <Input placeholder="Please enter last name" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="nickname"
                            label="Nickname"
                            rules={[{ required: true, message: 'Please enter nickname' }]}
                        >
                            <Input placeholder="Please enter nickname" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {type: "email", message: 'Invalid email address'},
                                {required: true, message: 'Please enter email' }
                            ]}
                        >
                            <Input placeholder="Please enter email" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                            {
                            required: true,
                            message: 'please enter url description',
                            },
                        ]}
                        >
                        <Input.TextArea rows={4} placeholder="please enter url description" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    wrapperCol={{
                    offset: 10,
                    span: 14,
                    }}
                >

                    <Button disabled={userEditInfo?.id ? false : true} type="primary" htmlType="submit" loading={loading}>
                        Upload User
                    </Button>
                </Form.Item>
            </Form>
        </Drawer>
    )
}

import "../UserProfile/userprofile.css"
import React, { useState, useRef } from 'react'
import UserProfileAvatar from '../UserProfile/UserProfileAvatar';
import { Drawer, Form, Button, Col, Row, Input, Select } from 'antd';
import { actCreateNewUserAsync } from "../../store/users/actions"
import { useDispatch } from "react-redux"
const { Option } = Select;


export default function NewUser({ visibleForm, closeFormNewUser }) {
    const formRef = useRef(null);
    //
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
        const media_id = objFile || mediaID;
        dispatch(actCreateNewUserAsync({ ...data, media_id}))
            .then(function () {
                formRef?.current?.resetFields();
                closeFormNewUser();
                setLoading(false)
            })
    }
   
    return (
        <Drawer
            title="Create a new user"
            width={720}
            onClose={closeFormNewUser}
            visible={visibleForm}
            bodyStyle={{ paddingBottom: 80 }}
        >
            <UserProfileAvatar
                loading={loading}
                objFile={objFile}
                setMediaID={setMediaID}
                mediaID={mediaID}
                handleSetAvatarUser={handleSetAvatarUser}
                textInputFile="Chọn ảnh đại diện"
                isShowNickname={false}
                isCurrentUser={false}
                isShowDeleteURLImg={true}
            />
            
            <Form
                ref={formRef}
                layout="vertical"
                style={{ marginTop: 20 }}
                hideRequiredMark
                onFinish={handleonSubmit}
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
                            name="username"
                            label="Username"
                            rules={[{ required: true, message: 'Please enter username' }]}
                        >
                            <Input placeholder="Please enter username" />
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
                    <Col span={12}>
                        <Form.Item
                        name="locale"
                        label="Locale"
                        rules={[{ required: true, message: 'Please choose the locale' }]}
                        >
                        <Select placeholder="Please choose the locale">
                            <Option value="vi">Vietname</Option>
                            <Option value="en_US">English</Option>
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
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
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Create User
                    </Button>
                </Form.Item>
            </Form>
        </Drawer>
    )
}

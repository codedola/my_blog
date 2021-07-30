import React from 'react'
import { Form, Input } from 'antd';
import Button from "../shared/Button"
import { useSelector } from "react-redux"
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 12,
  },
};
export default function UserProfileForm() {
    const currentUser = useSelector(state => state.Auth.currentUser);
    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            size="large"
            validateMessages={validateMessages}
        >
            <Form.Item
                label="First name"
                name={['user', 'first_name']}
                rules={[{ required: true }]}
                
            >
                <Input defaultValue={currentUser?.first_name}  placeholder="Your first name" />
            </Form.Item>

            <Form.Item
                label="Last name"
                name={['user', 'last_name']}
                rules={[{ required: true }]}  
            >
                <Input defaultValue={currentUser?.last_name} placeholder="Your last name" />
            </Form.Item>

            <Form.Item
                name={['user', 'nickname']}
                label="Nickname"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input defaultValue = {currentUser?.nickname}  placeholder="Your nickname" />
            </Form.Item>
          
            <Form.Item name={['user', 'description']} label="Description">
                <Input.TextArea defaultValue={currentUser.description} placeholder="Your description"/>
            </Form.Item>
                
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button
                    variant="primary"
                    size= "medium"
                    htmlType="submit"
                    //loading={loading}
                    
                >
                    Thay đổi profile
                </Button>    
            </Form.Item>
        </Form>
    )
}

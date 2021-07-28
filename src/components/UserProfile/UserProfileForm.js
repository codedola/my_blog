import React from 'react'
import { Form, Input, Button } from 'antd';
import { useSelector } from "react-redux"
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
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
        <Form {...layout}  name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'user_name']}
                label="Username"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input defaultValue = {currentUser?.user_name}  />
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
                <Input defaultValue = {currentUser?.nickname}  />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                        required: true,
                        type: 'email',
                    },
                ]}
            >
                    <Input defaultValue={currentUser.email} />
            </Form.Item>
          
            <Form.Item name={['user', 'description']} label="Description">
                <Input.TextArea defaultValue={currentUser.description} />
            </Form.Item>
                

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

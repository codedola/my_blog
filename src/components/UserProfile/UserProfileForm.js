import React, {useState, useEffect} from 'react'
import { Form, Input } from 'antd';
import Button from "../shared/Button";
import { useSelector} from "react-redux"

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 12,
  },
};


export default function UserProfileForm({ handleSetInfoUser, handleUploadProfile, userInfo }) {
    const [isData, setIsData] = useState(true)
    const currentUser = useSelector(state => state.Auth.currentUser);

    useEffect(function () {
        if (userInfo.nickname !== "") {
            setIsData(true)
        } else {
            setIsData(false)
        }
    }, [userInfo])
    
    const handleChangeValues = (objField) => {
        const [keyField, value] = Object.entries(objField)[0];
        handleSetInfoUser && typeof handleSetInfoUser === "function"
            && handleSetInfoUser(keyField, value)
    }

    const onSubmitForm = () => {
        handleUploadProfile && typeof handleUploadProfile === "function" &&
            handleUploadProfile();
    }
    return (
        <Form
            {...layout}
            name="nest-messages"
            className="user_profile-form"
            size="large"
            initialValues={{
                first_name: currentUser?.first_name,
                last_name: currentUser?.last_name,
                nickname: currentUser?.nickname,
                description: currentUser?.description
            }}
            onFinish={onSubmitForm}
            onValuesChange = {handleChangeValues}
           
        >
            <Form.Item
                label="First name"
                name='first_name'
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Last name"
                name='last_name'
            >
                <Input />
            </Form.Item>

            <Form.Item
                name='nickname'
                label="Nickname"
                hasFeedback
                validateStatus={isData ? "success" : "error"}
                help={isData ? null : "Nickname is required!"} 
            >
                <Input />
            </Form.Item>
          
            <Form.Item name='description' label="Description">
                <Input.TextArea />
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

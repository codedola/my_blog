import {
  Form,
  Input,
  Row,
  Col,
  Button,
  notification
} from 'antd';
import { actChangePasswordAsync } from '../../store/users/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

export default function DashboardPassword() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onFinish = ({
    currentPassword,
    newPassword,
    confirmNewPassword
  }) => {
    if (loading) {
      return;
    }

    setLoading(true);
    dispatch(actChangePasswordAsync({
      currentPassword,
      newPassword,
      confirmNewPassword
    }))
    .then(res => {

      if (!res.ok) {
        notification.error({
          message: 'Oops!',
          description: 'Có lỗi xảy ra. Vui lòng kiểm tra lại!',
        })
      } else {
        form.resetFields();
        notification.success({
          message: 'Success',
          description: 'Thay đổi mật khẩu thành công!'
        })
      }

      setLoading(false);
    })
  };

  function onFinishFailed({ values, errorFields }) {
    console.log("values", values);
    console.log("errorFields", errorFields);
    notification.error({
      message: 'Oops!',
      description: errorFields.map(errorField => <span style={{ display: 'block' }}>{errorField.errors.join(' ')}</span>)
    })
  }

  return (
    <div>
      <Row>
        <Col xs={12}>
          <Form
            {...formItemLayout}
            // layout="horizontal"
            form={form}
            name="change-password"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="currentPassword"
              label="Mật khẩu hiện tại"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập vào mật khẩu hiện tại của bạn!',
                },
              ]}
              validateStatus=""
              help={<span></span>}
              // hasFeedback={true}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="newPassword"
              label="Mật khẩu mới"
              rules={[
                {
                  required: true,
                  message: 'Mật khẩu mới là bắt buộc!',
                },
              ]}
              validateStatus=""
              help={<span></span>}
              // hasFeedback={true}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirmNewPassword"
              label="Xác nhận mật khẩu mới"
              dependencies={['newPassword']}
              // hasFeedback
              validateStatus=""
              help={<span></span>}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng xác nhận mật khẩu mới!',
                },
                function validateHandler({ getFieldValue }) {
                  return {
                    validator(_, value) {
                      if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve();
                      }
  
                      return Promise.reject('Xác nhận mật khẩu mới không khớp!');
                    },
                  }
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            
            <Row>
              <Col xs={24} sm={8}></Col>
              <Col xs={24} sm={16}>
                <Button loading={loading} type="primary" htmlType="submit">Đổi mật khẩu</Button>
              </Col>
            </Row>
            
          </Form>
        </Col>
      </Row>
    </div>
  )
}
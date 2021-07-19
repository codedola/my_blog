import React, { useState } from 'react';
import "../../assets/css/login.css";
import Button from "../shared/Button";
import Notification from '../shared/Notification';
import ChangePasswordItem from './ChangePasswordItem';
import { useHistory } from "react-router-dom"
import { Trans } from '@lingui/macro';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { actChangePasswordAsync } from "../../store/users/actions"

export default function ChangePasswordForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState({
        currentPassword: false,
        newPassword: false,
        confirmNewPassword: false
    });
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmitChangePassword = (formData) => {
        if (loading) return
        setLoading(true)
        dispatch(actChangePasswordAsync(formData))
            .then(res => {
                setLoading(false)
                if (res.ok) {
                    Notification({
                        type: "success", message: "Mật khẩu đã được thay đổi",
                        description: res?.message, duration: 2, placement: "bottomLeft"
                    });
                    history.push("/");
                } else {
                    Notification({
                        type: "error", message: "Thất bại, xin kiểm tra lại",
                        description: res?.message, duration: 3, placement: "bottomLeft"
                    });
                }
            })
    };

    function handleShowPassWord(keyFiled) {
        return function () {
            setShowPassword({
            ...showPassword,
            [keyFiled]: !showPassword[keyFiled]
        });
        }
        
    }

    return (
        <div className="form-login-register">
            <form onSubmit={handleSubmit(onSubmitChangePassword)}>
                <ChangePasswordItem
                    handleShowPassWord={handleShowPassWord}
                    showPassword={showPassword["currentPassword"]}
                    register={register}
                    errors={errors}
                    textLabel="Mật khẩu cũ"
                    keyField="currentPassword"
                />
                <ChangePasswordItem
                    handleShowPassWord={handleShowPassWord}
                    showPassword={showPassword["newPassword"]}
                    register={register}
                    errors={errors}
                    textLabel="Mật khẩu mới"
                    keyField="newPassword"
                />
                <ChangePasswordItem
                    handleShowPassWord={handleShowPassWord}
                    showPassword={showPassword["confirmNewPassword"]}
                    register={register}
                    errors={errors}
                    textLabel="Xác nhận mật khẩu mới"
                    keyField="confirmNewPassword"
                />
                
                <div className="d-flex tcl-jc-between tcl-ais-center">

                <Button
                    variant="primary"
                    size="large"
                    htmlType="submit"
                    loading={loading}
                   
                >
                    <Trans>Đổi Mật Khẩu</Trans>
                </Button>         
                </div>
            </form>
        </div>
    )
}

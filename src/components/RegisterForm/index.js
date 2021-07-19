import React, { useState } from 'react';
import "../../assets/css/login.css";
import Button from "../shared/Button";
import Notification from '../shared/Notification';
import { Trans } from '@lingui/macro';
import { Link, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux"
import {actRegisterAsync} from "../../store/auth/actions"
import { EyeOutlined , EyeInvisibleOutlined } from "@ant-design/icons"
//
export default function RegisterForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmitRegister = (formData) => {
        console.log("formdata register", formData)
        if (loading) return
        setLoading(true)
        dispatch(actRegisterAsync(formData))
            .then(res => {
                setLoading(false)
                if (res.ok) {
                    Notification({
                        type: "success", message: "Tài khoản hợp lệ",
                        description: res.message, duration: 2
                    })
                    history.push('/login')
                } else {
                    Notification({
                        type: "error", message: "Tài khoản không hợp lệ",
                        description: res?.message, duration: 3,
                    })
                   
                }
            })
    };

   

    return (
        <div className="form-login-register">
            <form onSubmit={handleSubmit(onSubmitRegister)}>
                <div className="form-control">
                    <label>Nickname</label>
                    <input
                        type="text"
                        placeholder="Enter nickname ..."
                        {...register("nickname", { required: true, maxLength: 16 })}
                    />
                    {errors?.nickname?.type === "required" && <span className="input-error">This field is required</span>}
                    {errors?.nickname?.type === "maxLength" && <span className="input-error">Nickname cannot exceed 16 characters</span>}
                </div>

                <div className="form-control">
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Enter @gmail.com ..."
                        {...register("email", {
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                    />
                    {errors?.email?.type === "required" && <span className="input-error">This field is required</span>}
                    {errors?.email?.type === "pattern" && <span className="input-error">Invalid email address</span>}
                </div>

                <div className="form-control">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter username ..."
                        {...register("username", { required: true })}
                    />
                    {errors?.username?.type === "required" && <span className="input-error">This field is required</span>}
                </div>
            

                <div className="form-control">
                    <label>Password</label>
              
                    <p
                        style={{ top: "28px" }}
                        className="toggle-password"
                        onClick={() => { setShowPassword(!showPassword) }}
                    >
                        {!showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                    </p>
                       
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password ..."
                        {...register("password", { required: true, maxLength: 6 })}
                    />
                    {errors?.password?.type === "required" && <span className="input-error">This field is required</span>}
                    {errors?.password?.type === "maxLength" && <span className="input-error">Password cannot exceed 6 characters</span>}
                </div>
               
                <div className="d-flex tcl-jc-between tcl-ais-center">
                <Button
                    variant="primary"
                    size="large"
                    htmlType="submit"
                    loading={loading}
                   
                >
                    <Trans>Đăng ký</Trans>
                </Button>
                  
                <Link to="/login"><Trans>Đăng nhập</Trans></Link>
                </div>
            </form>
        </div>
    )
}

import React, { useState } from 'react';
import "../../assets/css/login.css";
import Button from "../shared/Button";
import Notification from '../shared/Notification';
import { Trans } from '@lingui/macro';
import { Link, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux"
import {actLoginAsync} from "../../store/auth/actions"
import { EyeOutlined , EyeInvisibleOutlined } from "@ant-design/icons"
//
export default function LoginForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmitLogin = (formData) => {
        if (loading) return
        setLoading(true)
        dispatch(actLoginAsync(formData))
            .then(res => {
                setLoading(false)
                if (res.ok) {
                    Notification({
                        type: "success", message: "Thành Công",
                        description: res.message, duration: 2
                    })
                    history.push('/')
                } else {
                    let messagePW = null;
                    if (res.message.includes("password")) {
                        messagePW = res.message.split(".")[0].split("<strong>")
                            .join("").split("</strong>").join("");
                    }
                    console.log('Login Error', res)
                    Notification({
                        type: "error", message: !messagePW ?
                            "The Username or Password is Incorrect" : "Password is Incorrect",
                        description: messagePW || res?.message, duration: 3,
                    })
                   
                }
            })
    };

   

    return (
        <div className="form-login-register">
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <div className="form-control">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter Username ..."
                        {...register("username", { required: true } )}
                    />
                    {errors?.username && <span className="input-error">This field is required</span>}
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
                        placeholder="Enter Password ..."
                        {...register("password", { required: true })}
                    />
                    {errors?.password && <span className="input-error">This field is required</span>}
                </div>
               
                <div className="d-flex tcl-jc-between tcl-ais-center">
                <Button
                    variant="primary"
                    size="large"
                    htmlType="submit"
                    loading={loading}
                   
                >
                    <Trans>Đăng nhập</Trans>
                </Button>
                  
                <Link to="/register"><Trans>Đăng ký</Trans></Link>
                </div>
            </form>
        </div>
    )
}

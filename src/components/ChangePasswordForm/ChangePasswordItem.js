import React from 'react'
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons"

export default function ChangePasswordItem({ handleShowPassWord, showPassword = false,
    register, errors, textLabel, keyField }) {


    return (
        <div className="form-control">
            <label>{ textLabel }</label>
            <p
                style={{ top: "28px" }}
                className="toggle-password"
                onClick={handleShowPassWord(keyField)}
            >
                {!showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </p>             
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password ..."
                {...register(keyField, { required: true, maxLength: 6 })}
            />
            {errors && errors[keyField]?.type === "required"
                && <span className="input-error">This field is required</span>}
            {errors && errors[keyField]?.type === "maxLength"
                && <span className="input-error">Password cannot exceed 6 characters</span>}
        </div>
    )
}

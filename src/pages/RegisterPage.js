import React from 'react'
import { Trans } from '@lingui/macro'
// import { t } from "@lingui/macro"
import RegisterForm from '../components/RegisterForm'
export default function RegisterPage() {
    return (
        <main className="login">
            <div className="spacing" />
            <div className="tcl-container bg-white-blue">
                <div className="tcl-row">
                <div className="tcl-col-12 tcl-col-sm-6 block-center">
                    <h1 className="form-title text-center"><Trans>Đăng ký</Trans></h1>
                    <RegisterForm />
                </div>
                </div>
            </div>
            <div className="spacing" />
        </main>
    )
}

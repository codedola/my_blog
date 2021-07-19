import React from 'react'
import { Trans } from '@lingui/macro'
// import { t } from "@lingui/macro"
import ChangePasswordForm from '../components/ChangePasswordForm'
export default function ChangePassword() {
    return (
        <main className="login">
            <div className="spacing" />
            <div className="tcl-container">
                <div className="tcl-row">
                <div className="tcl-col-12 tcl-col-sm-6 block-center">
                    <h1 className="form-title text-center"><Trans>Đổi mật khẩu</Trans></h1>
                    <ChangePasswordForm />
                </div>
                </div>
            </div>
            <div className="spacing" />
        </main>
    )
}

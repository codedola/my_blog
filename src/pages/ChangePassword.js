import React from 'react'
import { Trans } from '@lingui/macro'
// import { t } from "@lingui/macro"
import ChangePasswordForm from '../components/ChangePasswordForm'
export default function ChangePassword({isShowTitle = true, isShowSpacing = true}) {
    return (
        <main className="login">
            {
                isShowSpacing ? <div className="spacing" /> : null
            }
            
            <div className="tcl-container">
                <div className="tcl-row">
                <div className="tcl-col-12 tcl-col-sm-6 block-center">
                        {isShowTitle ?
                            <h1 className="form-title text-center"><Trans>Đổi mật khẩu</Trans></h1> : null}
                    <ChangePasswordForm />
                </div>
                </div>
            </div>
            {
                isShowSpacing ? <div className="spacing" /> : null
            }
        </main>
    )
}

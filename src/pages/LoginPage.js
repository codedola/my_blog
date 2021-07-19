import "../assets/css/login.css";
import React from 'react';
import { Trans } from '@lingui/macro';
// import { t } from "@lingui/macro"
import useNotAuth from '../hooks/useNotAuth';
import LoginForm from '../components/LoginForm';
function LoginPage() {
  useNotAuth()
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center"><Trans>Đăng nhập</Trans></h1>
              <LoginForm/>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  )
}

export default LoginPage
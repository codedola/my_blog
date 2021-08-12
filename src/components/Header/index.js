import React from "react"
import HeaderLogo from './HeaderLogo';
import HeaderMenus from './HeaderMenus';
import HeaderSearch from './HeaderSearch';
import { useRouteMatch } from "react-router-dom"
export default function Header() {
  const isDashboard = useRouteMatch('/dashboard');
  const styleObj = {
    height: "7rem",
    paddingTop: "6px",
    paddingBottom: "0px",
  }
  return (
    <header id="header">
      <div className="tcl-container">
        <div className="tcl-row tcl-no-gutters header" style={styleObj}>

          <HeaderLogo />

          {!isDashboard ? <HeaderSearch /> : null}

          <HeaderMenus />
        </div>
      </div>
    </header>
  )
}
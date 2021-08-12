import React from "react"
import HeaderLogo from '../Header/HeaderLogo';
import HeaderMenus from '../Header/HeaderMenus';
import { MenuOutlined } from "@ant-design/icons"
import { ButtonToggleMenu } from '../StyledComponents/Menu.Styled'
export default function HeaderDashBoard({handleSetCollapsed}) {
  const styleObj = {
    height: "3rem",
    paddingTop: "6px",
    paddingBottom: "0px",
  }
  return (
    <header id="header">
      <div className="tcl-container">
        <div className="tcl-row tcl-no-gutters header" style={styleObj}>
          <ButtonToggleMenu onClick={handleSetCollapsed}>
            <MenuOutlined />
          </ButtonToggleMenu>

          <HeaderLogo />

          <HeaderMenus />
        </div>
      </div>
    </header>
  )
}
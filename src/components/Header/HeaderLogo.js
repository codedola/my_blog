import { Link } from 'react-router-dom';
import styled from 'styled-components';
const HeaderTitle = styled(Link)` 
    font-size: 24px;
    font-weight: 700;
    color: #4b4b4bed;
    &:hover {
      color: #4b4b4bed;
    }
`
export default function HeaderLogo() {
  return (
    <div className="tcl-col-2">
      <div className="header-logo">
        <HeaderTitle to="/">
          {/* <img src="/assets/images/logo.png" alt="Go to homepage" /> */}
          ZendSoft
        </HeaderTitle>
      </div>
    </div>
  )
}
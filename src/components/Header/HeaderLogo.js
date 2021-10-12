import { Link } from "react-router-dom";
import styled from "styled-components";
const HeaderTitle = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: #4b4b4bed;
  &:hover {
    color: #4b4b4bed;
  }
`;
export default function HeaderLogo() {
  return (
    <div>
      <div className="header-logo" style={{ width: 140 }}>
        <HeaderTitle to="/">ReactSoft</HeaderTitle>
      </div>
    </div>
  );
}

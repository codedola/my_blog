import React from "react";
import { SidebarContainer } from "../StyledComponents/Homepage.Styled";
import ListArticlePopular from "./ListArticlePopular";
import { Divider, Tag } from "antd";
import { RiseOutlined } from "@ant-design/icons";
import CategoriesSearch from "./CategoriesSearch";
import styled from "styled-components";
const TagStyled = styled(Tag)`
  margin-right: 0px;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 2px;
  font-size: 14px;
`;
export default function SidebarHomeBlog() {
  return (
    <SidebarContainer>
      <CategoriesSearch />
      <Divider>
        <TagStyled icon={<RiseOutlined />} color="#55acee">
          Top Trending
        </TagStyled>
      </Divider>
      <ListArticlePopular />
    </SidebarContainer>
  );
}

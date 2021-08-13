import React from 'react'
import { SidebarContainer } from "../StyledComponents/Homepage.Styled"
import ListArticlePopular from './ListArticlePopular'
import { Divider } from "antd"
export default function SidebarHomeBlog() {
    return (
        <SidebarContainer>
            <Divider />
          <ListArticlePopular />
        </SidebarContainer>
    )
}

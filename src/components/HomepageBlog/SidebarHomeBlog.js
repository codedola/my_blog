import React from 'react'
import { SidebarContainer } from "../StyledComponents/Homepage.Styled"
import ListArticlePopular from './ListArticlePopular'
import { Divider } from "antd"
import TaskbarBlog from './TaskbarBlog'
export default function SidebarHomeBlog() {
    return (
        <SidebarContainer>
            <TaskbarBlog />
            <Divider />
            
            <ListArticlePopular />
        </SidebarContainer>
    )
}

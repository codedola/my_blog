import React from 'react'
import {
    ReactIcon, VueIcon,
    GitIcon, GithubIcon, AngularIcon, JSIcon
} from "../shared/TaskbarIcon"
import {
    WapperTaskbarStyled, ItemIconStyled,
    ButtonSearchTashbar
} from "../StyledComponents/Homepage.Styled"

const listIcons = [
    {
        name: "react",
        icon: <ReactIcon />
    },
    {
        name: "vue",
        icon: <VueIcon />
    },
    {
        name: "git",
        icon: <GitIcon />
    },
    {
        name: "github",
        icon: <GithubIcon />
    },
    {
        name: "angular",
        icon: <AngularIcon />
    },
     {
        name: "javascript",
        icon: <JSIcon />
    },
 
]
export default function TaskbarBlog() {
    return (
        <WapperTaskbarStyled>
            {
                listIcons.map(function (item, index) {
                    return (
                        <ItemIconStyled key={ index } >
                            {item.icon}
                            <p>{item.name}</p>
                            <ButtonSearchTashbar type="default" size="small" >Tìm kiếm</ButtonSearchTashbar>
                        </ItemIconStyled>
                    )
                })
            }
        </WapperTaskbarStyled>
    )
}

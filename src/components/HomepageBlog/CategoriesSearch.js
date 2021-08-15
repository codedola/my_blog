import React from 'react'
import {
    ReactIcon, VueIcon,
    GitIcon, GithubIcon, AngularIcon, JSIcon
} from "../shared/TaskbarIcon"
import { ItemIconStyled,
    ButtonSearchTashbar
} from "../StyledComponents/Homepage.Styled"
import {Row, Col} from "antd"
import { useHistory } from "react-router-dom"
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
export default function CategoriesSearch() {
    const history = useHistory();

    function handleSearchMainTopic(keyName) {
        return function () {
            history.push("/search?q=" + keyName)
        }
    }
    return (
        <Row gutter={[16, 16]} justify="center">
            {
                listIcons.map(function (item, index) {
                    return (
                        <Col lg={8} key={ index }>
                             <ItemIconStyled onClick={handleSearchMainTopic(item.name)}>
                                {item.icon}
                                <p>{item.name}</p>
                                <ButtonSearchTashbar type="default" size="small" >Tìm kiếm</ButtonSearchTashbar>
                            </ItemIconStyled>
                        </Col>
                       
                    )
                })
            }
        </Row>
    )
}

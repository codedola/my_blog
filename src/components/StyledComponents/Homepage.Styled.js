import styled from "styled-components";
import { Link} from "react-router-dom"
import { Button } from "antd"
export const ContainerHomeBlog = styled.div` 
    min-width: 0px; 
    width: 100%;

    max-width: 1180px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0px auto;

`

export const ButtonSearchTashbar = styled(Button)` 
    border-radius: 10px;
    color: #888888;
    border-color: #888888;
    &:hover, &:active, &:focus{
        color: #888888;
        border-color: #888888;
    }
`
export const WapperTaskbarStyled = styled.div`
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    flex-wrap: wrap
`
export const ItemIconStyled = styled.div`
    padding: 16px;
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    margin-bottom: 8px;
    transition: all 200ms ease 0s;
    &:hover {
        transform: translateY(-0.25rem);
        box-shadow: rgb(46 41 51 / 8%) 0px 2px 4px, rgb(71 63 79 / 16%) 0px 5px 10px;
    }
    svg {
        width: 46px;
        height: 46px;
    }
`

export const SidebarContainer = styled.div` 
    width: 100%;
    height: auto;
    border: unset;
    border-radius: 8px;
    padding: 20px 10px;
    background-color: #fff;
    box-shadow: rgb(1 1 1 / 5%) 1px 1px 5px 0px;
    transition: all 250ms ease 0s;
    &:hover {
        transform: translateY(-0.2rem);
        box-shadow: rgb(46 41 51 / 8%) 0px 2px 4px, rgb(71 63 79 / 16%) 0px 5px 10px;
    }
`
export const ArticleBlogStyled = styled.article` 
    border-radius: 6px;

    .article-item__content {
        padding-bottom: 10px;
        .article-item__desc {
            font-size: 16px;
        }
    }
    .article-item__thumbnail {
        border-radius: 2px;
    }

`

export const ReadMoreStyled = styled(Link)` 
    color: #333;
    font-weight: 600;
   
    &:hover {
        color: #333;
        text-decoration: underline;
    }
`
import styled from "styled-components";
import { Menu } from "antd";


export const MenuStyled = styled(Menu)` 
    .ant-menu-item {
        border-radius: 4px;
        height: 50px;
        .ant-menu-title-content a, .ant-menu-item-selected a:hover{
            font-size: 14px;
            color: #535353;
            font-weight: 600;
        }
        .anticon {
            font-size: 18px;
            color: #535353;
            line-height: 50px;
        }
        &::after {
            border-right: 4px solid #b0d9ffe8;
        }
        &:hover {
            background-color: #e6f7ff;
        }
    }

    .ant-menu-submenu {
        border-radius: 4px;
        
        transform: all 0.2s;
        &:hover {
            background-color: #e6f7ff;
        }
        .ant-menu-submenu-title {
            font-size: 14px;
            color: #535353;
            font-weight: 600;
            min-height: 50px;
            .anticon  {
                font-size: 18px;
            color: #535353;
             line-height: 50px;
            }

            .ant-menu-submenu-arrow {
                color: #535353;
            }

            .ant-menu-title-content {
            font-size: 14px;
            color: #535353;
            font-weight: 600;
            }
        }
    }

`
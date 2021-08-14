import styled from "styled-components";
import { BackTop} from "antd"
export const BackTopStyled = styled(BackTop)`
    right: 60px;
   .arrow_to_top {
       height: 60px;
        width: 60px;
        background-color: #00000030;
        font-size: 30px;
        border-radius: 8px;
        position: relative;
        color: #e8e8e8;
        transition: all 0.4s;
        &:hover {
            color: #fff;
            background-color: #00000085;
        }
        .anticon {
            position: absolute;
            top: 48%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
   }

`
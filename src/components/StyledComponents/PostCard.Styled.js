import styled from "styled-components";
import { Dropdown , Modal} from "antd"

export const DropdownStyled = styled(Dropdown)` 
    color: red;
    width: 300px;
`

export const ModalPostEdit = styled(Modal)` 
   button.ant-modal-close {
       background-color: #323232c9;
       border-radius: 50%;
       right: -4%;
       top: 0%;
       .ant-modal-close-x {
            span {
                color: #fff;
                font-size: 22px;
                vertical-align: baseline;
            }
       }
   }

`
import styled from 'styled-components'
import { Modal } from "antd"

export const ModalMediaLibrary = styled(Modal)`
    width: 80vw !important;
   
    .ant-modal-content {
      
        .ant-modal-header {
            display: none;
        }
        .ant-modal-body {
            padding: 16px;
            overflow-y: scroll;
            height: 84vh;
            &::-webkit-scrollbar-track
            {
                box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                border-radius: 10px;
                background-color: #F5F5F5;
            }

            &::-webkit-scrollbar
            {
                width: 8px;
                background-color: #F5F5F5;
            }

            &::-webkit-scrollbar-thumb
            {
                border-radius: 10px;
                box-shadow: inset 0 0 6px rgba(0,0,0,.3);
                background-color: #F5F5F5;
            }

        }
    }
 `
export const ModalStyled = styled(Modal)`
    .ant-modal-content {
        border-radius: 16px;
        .ant-modal-header {
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            padding-top: 26px;
            padding-bottom: 26px;
            .ant-modal-title {
                text-align: center;
                font-size: 18px;
            }
        }
        .ant-modal-body {
            padding: 0;
            .ant-list {
                .ant-list-item {
                    justify-content: center;
                    font-weight: 700;
                    font-size: 14px;
                    cursor: pointer;
                }

                .ant-list-item.upload {
                    color: #0095f6;
                }

                .ant-list-item.library {
                    color: #09dd09;
                }

                .ant-list-item.cancel {
                    font-weight: 400;
                }
            }
        }    
    }
    

    
`
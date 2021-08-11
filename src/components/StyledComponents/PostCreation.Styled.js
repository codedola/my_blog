import styled from "styled-components";
import { Image, Tag , Collapse} from "antd"
const { CheckableTag } = Tag
const size = {
 xs: "320px",
 sm: "768px",
 lg: "1024px",
}

/**
@media only screen and ${breakpoint.device.xs}{
    display: none;
}
@media only screen and ${breakpoint.device.sm}{
    display: flex;
}
@media only screen and ${breakpoint.device.lg}{
    display: flex;
}
 */
export const CollapseStyled = styled(Collapse)`
    display: flex;
    border: unset;
    border-radius: unset;
    background-color: white;
    transition: all 0.2s;
    & > .ant-collapse-item:last-child, & > .ant-collapse-item:last-child > .ant-collapse-header {
        border-radius: 0 0 10px 10px;
    }

    & > .ant-collapse-item-active:last-child, & > .ant-collapse-item-active:last-child > .ant-collapse-header {
        border-radius: 0;
    }
    & > .ant-collapse-item > .ant-collapse-header {
        border-radius: 0 0 10px 10px;
    }
     & > .ant-collapse-item-active > .ant-collapse-header {
        border-radius: 0 0 0 0;
    }

    .ant-collapse-item, .ant-collapse-item:last-child {
        flex: 1;
        overflow: hidden;
        border-bottom: unset;
        border-radius: 10px;
        border: 2px solid transparent;
        overflow: hidden;
        transition: all 0.2s;
        .ant-collapse-header {
            background-color: #ececec;
            font-size: 14px;
            font-weight: 600;
            color: #3c3c3c;
            .anticon {
                vertical-align: middle;
                font-size: 12px;
                height: 16px;
            }
        }
        .ant-collapse-content {
            border: unset;
        }
        &.ant-collapse-item-active.categories {
            border-color: #ececec;
            
        }
        &.ant-collapse-item-active.tags {
            border-color: #ececec;
        }

        &.categories {
            margin-right: 14px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        &.tags {
            margin-left: 14px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        
    }
    
`


export const CheckableTagStyled = styled(CheckableTag)`
    font-size: 14px;
    border: 2px solid #d9d9d9;
    background: #fafafa;
    color: #8f8f8f;
    /* padding: 2px 4px; */
    font-weight: 400;
    border-radius: 8px;
    transition: all 0.1s;
    span.anticon  {
        vertical-align: middle;
        font-size: 14px;
        margin-bottom: 3px;
    }
    &.ant-tag-checkable:hover {
        color: #8f8f8f;
        
    }

     &.ant-tag-checkable:active {
         background-color: unset;
     }
    &.ant-tag-checkable-checked {
        color: #52c41a;
        background: #f6ffed;
        border-color: #b7eb8f;
        &:hover {
            color: #52c41a;
        }
    }
`

export const WrapperCategoriesTags = styled.div` 
    display: flex;

    .item {
        border: 2px solid #ececec;
        border-radius: 10px;
        overflow: hidden;
        flex: 1;
        p.title {
            border: unset;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            background-color: #ececec;
            box-sizing: border-box;
            padding: 8px 12px;
            color: #3c3c3c;
            font-weight: 600;
            margin-bottom: 0;
        }

        &.categories {
            margin-right: 14px;

        }
        &.tags {
            margin-left: 14px;
        }

        div {
            padding: 6px;
        }
    }

`

export const SpacingStyled = styled.div` 
    margin-top: 20px;
    margin-bottom: 20px;
`

export const WrapperPostCreation = styled.div` 
   width: 100%;
   height: 100%;
`
export const WrapperImagePost = styled.div`
    border: 2px solid #ececec;
    border-radius: 10px;
    overflow: hidden;
    
    div.post__img {
        display: flex;
        align-items: center;
        justify-content: space-between;
        //
        border: unset;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background-color: #ececec;
        box-sizing: border-box;
        padding: 10px 12px;
        color: #3c3c3c;
        position: relative;
        p {
            font-weight: 600;
            margin-bottom: 0;
        }

        .anticon  {
            cursor: pointer;
            display: block;
            padding: 4px 19px;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            font-size: 20px;
            bottom: 0;
            svg {
                height: 100%;
            }
            &:hover {
                background-color: #dadada;
            }
        }
    }
`

export const ImagePostStyled = styled(Image)`
    /* width: 100%;
    height: 400px; */
    object-fit: contain;
    .ant-image-mask {
        border-radius: unset;
    }

`




export const WrapperInputTitle = styled.div`
    border: 2px solid #ececec;
    border-radius: 10px;
    /*  */
    overflow: hidden;
    
    p {
        border: unset;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background-color: #ececec;
        box-sizing: border-box;
        padding: 8px 12px;
        color: #3c3c3c;
        font-weight: 600;
        margin-bottom: 0;
    }
    
    input {
        border: unset;
        padding: 10px 10px;
    }

    input:hover, input:focus {
         border-color: #ececec;
    }
`



export const ContainerEditor = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
     padding: 4px;
    /* @media only screen and (min-width: ${size.lg}) {
        
    } */

   

    .quill {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: rgb(99 99 99 / 4%) 0px 2px 6px 0px;
        /* height: inherit; */
       
        border: 2px solid #ececec;
        @media only screen and (min-width: ${size.lg}) {
           
        }

        .ql-toolbar {
            border: unset;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            
            background-color: #ececec;
        }

        .ql-container {
            border: unset;
            border-radius: 6px;
        }
    }
`

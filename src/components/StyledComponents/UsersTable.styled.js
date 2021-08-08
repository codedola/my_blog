import styled from "styled-components";
import { Image, Empty, Skeleton, Button } from "antd"

const widthAvatar = "160px";
const heightAvatar = widthAvatar;
export const ImageStyled = styled(Image)`
    border-radius: 50%;
    width: ${widthAvatar};
    height: ${heightAvatar};
    border: 4px solid #2bc0f994;
    object-fit: cover;
`
export const SkeletonAvatarStyled = styled(Skeleton.Avatar)`
    width: ${widthAvatar};
    height: ${heightAvatar};

    .ant-skeleton-avatar {
        width: 100%;
        height: 100%;
    }
`

export const EmptyStyled = styled(Empty)`
    margin-top: 20px;
    .ant-empty-image {
        height: 230px;
    }

    .ant-empty-description {
        font-size: 16px;
        font-weight: 400;
        color: #a59c9c;
    }
`

export const ButtonFilterStyled = styled(Button)`
    
    span.anticon {

        vertical-align: baseline;
    }
    & span:last-child {
        margin-left: 2px;
    }

`
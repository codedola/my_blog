import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Row, Badge } from "antd";
export const ContainerHomeBlog = styled.div`
  min-width: 0px;
  width: 100%;
  max-width: 1200px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0px auto;
  /* @media only screen and (min-width: 640px){
           background: unset;
    } */
`;

export const RowHomeBlog = styled(Row)`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
`;

export const ButtonSearchTashbar = styled(Button)`
  color: #0909094f;
  border: 1px solid transparent;
  background-color: #ffffff8c;
  border-radius: 8px;
  font-size: 12px;
  &:hover,
  &:active,
  &:focus {
    color: #0909094f;
    border: 1px solid transparent;
    background-color: #ffffff8c;
  }
`;
export const WapperTaskbarStyled = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;
export const ItemIconStyled = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 16px;
  background-color: #ffffff;

  background-color: #2ab0ff;
  background-image: linear-gradient(160deg, #5bc3ff 0%, #8ef7ec 100%);

  border-radius: 12px;
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

  .icon_name-hover {
    color: #7a7a7a;
    font-weight: 600;
    letter-spacing: -0.8px;
    margin-bottom: 0;
    /*  */
    position: absolute;
    top: -6px;
    left: -2px;
    padding: 4px 6px;
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    border-bottom-right-radius: 18px;
  }
`;

export const SidebarContainer = styled.div`
  width: 100%;
  height: auto;
  border: unset;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
`;
export const ArticleBlogStyled = styled.article`
  border-radius: 12px;

  &.style-story .article-item__thumbnail {
    @media only screen and (max-width: 640px) {
      flex-basis: 100%;
      max-width: 100%;
      margin: 0;
    }

    //max-width: 480px
  }
  &.style-story .article-item__content {
    .ant-divider {
      display: none;
    }
    @media only screen and (min-width: 640px) {
      background: unset;
    }
    @media only screen and (max-width: 640px) {
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 3;
      /* padding: 2rem; */
    }
  }
  .article-item__content {
    padding-bottom: 10px;
    .article-item__desc {
      font-size: 16px;
    }
  }
  .article-item__thumbnail {
    border-radius: 2px;
  }

  &.style-story {
    margin: 0 10px;
    cursor: pointer;
    border-radius: 8px;
    margin-bottom: 8px;
    transition: all 200ms ease 0s;
    &:hover {
      transform: translateY(-0.25rem);
      box-shadow: rgb(46 41 51 / 8%) 0px 2px 4px, rgb(71 63 79 / 16%) 0px 5px 10px;
    }
    .article-item__content {
      .article-item__info {
        position: absolute;
        top: 10px;
        left: 10px;
        .article-item__author-image {
          border: 2px solid #66c0ff;
        }
      }
    }
  }
`;

export const ReadMoreStyled = styled(Link)`
  color: #333;
  font-weight: 600;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;

export const BadgeRibbonStyled = styled(Badge.Ribbon)`
  top: -16px;

  height: 30px;
  width: 80px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  text-align: center;
  .ant-ribbon-text {
    vertical-align: middle;
    font-weight: 600;
  }
`;

export const ArticleSidebarStyled = styled.article`
  border-left-color: #15c8fe;
  /* padding: 10px 0; */
  border-radius: 2px;
  box-shadow: rgb(1 1 1 / 5%) 1px 1px 5px 0px;
  transition: all 250ms ease 0s;
  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: rgb(46 41 51 / 8%) 0px 2px 4px, rgb(71 63 79 / 16%) 0px 5px 10px;
  }
  .related-post__title {
    display: -webkit-box !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
`;

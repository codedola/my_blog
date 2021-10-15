import styled from "styled-components";
import { List, Input } from "antd";

export const WapperSearchCategories = styled.div`
  position: relative;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  input {
    color: gray;
    font-size: 16px;
  }
  .clear {
    padding: 2px;
    font-size: 14px;
    background-color: rgb(218, 218, 218);
    color: white;
    border-radius: 4px;
    position: absolute;
    right: 2px;
  }
  span {
    font-size: 18px;
    color: rgb(184, 184, 184);
    position: absolute;
    right: 4px;
  }
`;

export const ListCategories = styled(List)`
  width: 210px;
  height: 40vh;
  overflow-y: scroll;
  .MenuItemEmpty {
    justify-content: center;
    .EmptyBox {
      margin: 0;
      .ant-empty-image {
        margin-bottom: 0;
        height: 36px;
      }
    }
  }
  .MenuItemCategory {
    .YourHighlightClass {
      background-color: #fbff83;
      border-radius: 8px;
    }
    display: block;
    // padding: 10px;
    padding-left: 8px;

    border-radius: 10px;
    margin-bottom: 2px;
    border-bottom: unset;
    a {
      font-size: 16px;
      display: flex;
      align-items: center;
      color: gray;
      svg {
        transition: all ease 0.2s;
      }
    }
    transition: all ease 0.2s;
    &:hover {
      background-color: #f5f5f5c5;
      a {
        svg {
          transform: translateY(-4px);
        }
      }
    }
  }

  &::-webkit-scrollbar-track {
    // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
    margin-left: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(54, 54, 54, 0.3);
    background-color: rgb(228, 228, 228);
  }
`;

export const CategoriesBtn = styled.p`
  cursor: pointer;
  padding: 8px 10px;
  font-size: 16px;
  /* background: #b4b4b4; */
  border-radius: 6px;
  color: #696969;
  font-weight: 700;
  margin-bottom: 0;
  margin-right: 20px;
  span {
    margin-left: 2px;
    vertical-align: baseline;
  }
`;

// Search Result

export const InputSearch = styled(Input.Search)`
  .ant-input-wrapper {
    position: relative;
    display: flex;
    input {
      color: #4f4f4f;
      font-weight: 300;
    }
    .ant-input-group-addon {
      position: relative;
      cursor: auto;
      background-color: transparent;
      border: unset;
      &:first-child {
        margin-right: 6px;
      }
      svg.Search_icon__28qUk {
        position: absolute;
        /* right: 0; */
        top: 50%;
        transform: translateY(-50%);
        color: #a7a7a7;
        width: 16px;
        height: 16px;
      }
      .ant-input-suffix {
        svg {
          font-size: 20px;
        }
      }
    }
  }
`;
export const WapperInputSearch = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 70px;
  /* padding: 4px 6px 3px; */
  position: relative;
  .ant-popover {
    width: 100%;
    padding-top: 0;
    margin-top: 26px;
    border-radius: 10px;

    box-shadow: 0 0px 16px rgb(0 0 0 / 10%);
    overflow: hidden;
    .ant-popover-content {
      overflow-y: scroll;
      max-height: 80vh;
      &::-webkit-scrollbar-track {
        /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
        border-radius: 12px;
        background-color: #ffffff;
      }

      &::-webkit-scrollbar {
        width: 6px;
        background-color: #f5f5f5;
        margin-left: 4px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 12px;
        box-shadow: inset 0 0 6px rgba(54, 54, 54, 0.3);
        background-color: rgb(228, 228, 228);
      }
      .ant-popover-arrow {
        display: none;
      }
    }
  }
`;
export const TitleSearchResult = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }

  .text_search {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ListItemPostSearch = styled(List.Item)`
  border-bottom: unset !important;
  .ant-list-item-meta {
    align-items: center;
    .ant-list-item-meta-avatar {
    }

    .ant-list-item-meta-content {
      .ant-list-item-meta-title {
        margin-bottom: 0;
      }
    }
  }
`;

export const TopMorePostLastest = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: 6px;

  h5 {
    font-size: 18px;
    color: #4d4d4d;
    font-weight: 400;
    margin: 0;
  }
  a {
    color: #4d4d4d;
    font-size: 14px;
    font-weight: 200;
  }
`;

export const TitlePostItemSearch = styled.div`
  display: flex;
  align-items: center;

  .rise_view {
    margin-left: 8px;
    display: flex;
    align-items: center;
    color: #00c10f;
    font-weight: 400;
    font-size: 12px;
    padding: 0px 4px;
    border-radius: 10px;
    cursor: auto;
    background-color: #71ff7221;

    &.fall {
      color: #f03535;
      background-color: #ff85851f;
    }
    span {
      font-size: 12px;
    }
    .anticon {
      margin-right: 2px;
      margin-left: 2px;
      font-size: 16px;
    }
  }
`;

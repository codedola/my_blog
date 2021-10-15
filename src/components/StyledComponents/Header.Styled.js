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
export const FormSearch = styled.form`
  position: relative;
  .input-search-wrapper {
    /* position: relative; */
    background-color: #f8f8f8;
    border-radius: 24px;
    svg {
      color: gray;
    }
  }

  span.anticon-close {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    padding: 4px;
    background-color: #bfbfbf;
    color: white;
    border-radius: 20px;
    cursor: pointer;
  }
`;
export const SearchResult = styled.div`
  position: absolute;
  padding: 12px 24px;
  height: auto;
  width: 100%;
  box-shadow: 0 -4px 32px rgb(0 0 0 / 20%);
  background: white;
  border-radius: 10px;
  top: 120%;
  color: gray;
  display: flex;
  align-items: center;
  .anticon-search {
    color: gray;
    margin-right: 6px;
  }
  svg {
    width: 13px;
    height: 13px;
    margin-right: 6px;
    /* vertical-align: -0.4px; */
  }
`;

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
export const TitleSearchResult = styled.span`
  color: gray;
  svg {
    width: 16px;
    height: 16px;
  }
`;

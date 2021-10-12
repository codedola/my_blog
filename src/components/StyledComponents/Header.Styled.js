import styled from "styled-components";
import { List } from "antd";
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
  height: 50vh;
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
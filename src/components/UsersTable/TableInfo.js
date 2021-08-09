import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actGetListUsersAsync, actDeleteUserByIdAsync } from "../../store/users/actions"
import { Table, Space, Tag, List } from 'antd';
import useFilterTable from '../../hooks/useFilterTable';
import { ModalStyled } from "../StyledComponents/UserProfileAvatar.styled";
import Notification from '../shared/Notification';
export default function TableInfo({addNewTabUser}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false)
  const [userDelete, setUserDelete] = useState(null)
  const  [isShowDeleteUser, setIsShowDeleteUser] = useState(false)
  const listUsers = useSelector(state => state.Users.listUsers.list)
  const currentUser = useSelector(state => state.Auth.currentUser);
  const currentUserID = currentUser?.id;
  const filterNichname = useFilterTable("nickname");
  const filterFullname = useFilterTable("fullname");

  useEffect(function () {
    setLoading(true)
    dispatch(actGetListUsersAsync())
      .then(function () {
        setLoading(false)
      })
  }, [dispatch])


  
  

  const handleClickInfo = useCallback((infoUser) => () => {
    if (addNewTabUser && typeof addNewTabUser === "function") {
      addNewTabUser(infoUser)
    }
  }, [addNewTabUser])

  const dataSource = useMemo(function () {
    return listUsers?.map(function (user) {
      const { id, nickname, first_name, last_name, email } = user;
      const fullname = last_name + " " + first_name;
     
      return {
          key: id ,
          nickname,
          fullname: fullname.trim() === "" ? "-" : fullname,
          email,
        }
    })
  }, [listUsers])
  
  const handleDeleteUser = useCallback(() => {
    if (userDelete) {
      const id = userDelete.key;
      setLoadingDelete(true);
      setIsShowDeleteUser(false);
      dispatch(actDeleteUserByIdAsync(id))
        .then(function (res) {
          setLoadingDelete(false)
          setUserDelete(null);
          if (res.ok) {
            Notification({
              placement: "bottomRight",
              message: "Xóa Thành Công",
              description: `User '${res.nickname}' đã được xóa !`
            })
          } else {
            Notification({
              type: "error",
              placement: "bottomRight",
              message: "Xóa thất bại",
              description: `Xin hãy kiểm tra lại !`
            })
          }
        })
    }
  }, [userDelete, dispatch])

  // ------Start Modal functional ------
  const handleShowModalDeleteUser = useCallback((userDelete) => () => {
    console.log(userDelete)
    setUserDelete(userDelete)
    setIsShowDeleteUser(true)
  }, [])

  const handleCancel = () => {
    setIsShowDeleteUser(false)
  }
  // ------ End Modal functional ------

  const columns = useMemo(function () {
    return [
        {
          title: 'Nickname',
          dataIndex: 'nickname',
          key: 'nickname',
          ...filterNichname
        },
        {
          title: 'Fullname',
          dataIndex: 'fullname',
          key: 'fullname',
          ...filterFullname
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              
              { //
                record.key === currentUserID ?
                  <Tag color="green">
                    bạn
                  </Tag>
                  :
                  <>
                    <Tag
                      color="blue"
                      style={{ cursor: "pointer" }}
                      onClick={handleClickInfo(record)}
                    >
                      chi tiết
                    </Tag>
                    <Tag color="red" style={{ cursor: "pointer" }}
                      onClick={handleShowModalDeleteUser(record)}>
                        xóa
                    </Tag>
                  </>
                  
              }
              
            </Space>
          ),
        },
    ]
  }, [handleClickInfo, filterNichname, filterFullname, handleShowModalDeleteUser, currentUserID])

  return (
    <>
      <Table loading={loading || loadingDelete} dataSource={dataSource} columns={columns} size="small" />
      <ModalStyled
        title={`Bạn có muốn xóa "${userDelete?.nickname}"`}
        visible={isShowDeleteUser}
        onCancel={handleCancel}
        footer={null}
        width={400}
        closable = {false}
        
      >
          <List
              size="large"
          >
            <List.Item
              className="delete"
              onClick={handleDeleteUser}
            >
                Xóa
            </List.Item>
            <List.Item
                className="cancel"
                onClick={handleCancel}
            >
                Hủy
            </List.Item>
          </List>
      </ModalStyled>
    </>
  )
}

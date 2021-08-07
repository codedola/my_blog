import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actGetListUsersAsync } from "../../store/users/actions"
import { Table, Space, Tag } from 'antd';
import useFilterTable from './useFilterTable';

export default function TableInfo({addNewTabUser}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const listUsers = useSelector(state => state.Users.listUsers.list)
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
              <Tag
                color="blue"
                style={{ cursor: "pointer" }}
                onClick={handleClickInfo(record)}
              >
                chi tiết
              </Tag>
              <Tag color="red" style={{ cursor: "pointer" }}>xóa</Tag>
            </Space>
          ),
        },
    ]
  }, [handleClickInfo, filterNichname, filterFullname])

  return (
    <Table loading={loading} dataSource={dataSource} columns={columns} size="small" />
  )
}

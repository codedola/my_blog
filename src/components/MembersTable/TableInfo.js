import React from 'react'
import { Table, Button , Space} from 'antd';
const dataSource = [
  {
    key: '1',
    username: 'nhando',
    fullname: "do vu thanh nhan",
    email: 'thanhanhn@gmail.com',
    posts: 10
  },
  {
    key: '2',
    username: 'khunglongxanh',
    fullname: "khung long xanh",
    email: 'khunglongxanh@gmail.com',
    posts: 9
  },
  {
    key: '3',
    username: 'nhando 123',
    fullname: "do vu meo gau",
    email: 'gaumeo@gmail.com',
    posts: 2
  },
  {
    key: '4',
    username: 'khunglongdo',
    fullname: "khung long do",
    email: 'khunglongdo@gmail.com',
    posts: 0
  },
];
const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Fullname',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Posts',
      dataIndex: 'posts',
      key: 'posts',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        console.log(text, record)
        <Space size="middle">
          <Button type="text" size="small" style={{color: "#168cf1"}}>info</Button>
          <Button type="text" size="small" style={{color: "#fb4545"}}>delete</Button>
        </Space>
      ),
    },
  ];
export default function TableInfo() {
    return (
         <Table dataSource={dataSource} columns={columns} size="small" />
    )
}

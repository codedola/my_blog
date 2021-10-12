import React from "react";
import { List } from "antd";
import { useSelector } from "react-redux";
export default function UserOnline() {
  const listUsers = useSelector((state) => state.Users.listUsers.list);
  console.log("list user online", listUsers);
  return (
    <div>
      <List>
        {listUsers.map((user, index) => {
          return <List.Item key={index}>{user.name}</List.Item>;
        })}
      </List>
    </div>
  );
}

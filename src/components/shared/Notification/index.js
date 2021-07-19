import { notification } from 'antd';

export default function Notification({
    type = "success",
    placement = "topRight",
    message = "Hello",
    description = "",
    ...resParam
}) {
    notification[type]({
        message,
        description,
        placement,
         ...resParam
    });
};


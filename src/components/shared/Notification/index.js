import { notification } from 'antd';


export default function Notification({
    type = "success",
    placement = "topRight",
    message = "Hello",
    description = "",
    duration = 2,
    ...resParam
} = {}) {
    notification[type]({
        message,
        description,
        placement,
        duration,
         ...resParam
    });
};


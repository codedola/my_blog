import React from 'react'
import { Result, Button } from 'antd';
import { useHistory } from "react-router-dom"
export default function PageNotExit() {
    const history = useHistory()
    return (
        <Result
            status="404"
            title="Trang này không tồn tại :("
            subTitle="(Sorry, the page you visited does not exist.)"
            extra={<Button
                type="primary"
               
                onClick={() => history.push("/")}
            >
                Quay lại
            </Button>}
        />
    )
}

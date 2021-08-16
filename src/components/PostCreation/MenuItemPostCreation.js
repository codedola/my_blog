import React from 'react'
import { Row, Col } from "antd"
import { CheckCircleOutlined, MinusCircleOutlined } from "@ant-design/icons"
import { CheckableTagStyled } from "../StyledComponents/PostCreation.Styled"
export default function MenuItemPostCreation({
    keyField ="category",
    classNameItem = "categories",
    listItem = [],
    handleSetSelectedItems, selectedItems }) {
    
    function handleChangeItem(tag, checked) {
        if (checked) {
            handleSetSelectedItems(keyField, [...selectedItems, tag.id])
        } else {
            handleSetSelectedItems(keyField, selectedItems.filter(t => t !== tag.id))
        }
    }
    return (
        <div className={`item ${classNameItem}`}>
            <Row justify="start" align="middle" gutter={[16, 16]}>
                {listItem?.map((tag, index) => {
                    const isChecked = selectedItems?.indexOf(tag.id) > -1
                    return (
                        <Col md={24} lg={12} className="gutter-row" key={index}>
                            <CheckableTagStyled
                                key={tag.id}
                                checked={isChecked}
                                onChange={checked => handleChangeItem(tag, checked)}
                            >
                                {isChecked ? <CheckCircleOutlined /> :  <MinusCircleOutlined />} {tag.name}
                            </CheckableTagStyled>
                        </Col>
                    )
                    
                })}
            </Row>
        </div>
    )
}

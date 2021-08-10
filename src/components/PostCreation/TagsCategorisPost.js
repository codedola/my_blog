import React, { useState } from 'react'
import { Row, Col } from 'antd';
import { CheckCircleOutlined, MinusCircleOutlined } from "@ant-design/icons"
import { WrapperCategoriesTags, CheckableTagStyled } from "../StyledComponents/PostCreation.Styled"


export default function TagsCategorisPost() {
    const [tagsData, setTagsData] = useState(['Movies', 'Books', 'Music', 'Sports']);
    const [selectedTags, setSelectedTags] = useState(['Books']);

    function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
    }

    function handleChange(tag, checked) {
        console.log(selectedTags)
        if (checked) {
            setSelectedTags([...selectedTags, tag])
        } else {
            setSelectedTags(selectedTags.filter(t => t !== tag))
        }
    }
    
    return (
        <WrapperCategoriesTags>
            <div className="item categories">
                <p className="title">Categories</p>
                <Row>
                    {tagsData.map(tag => {
                        const isChecked = selectedTags.indexOf(tag) > -1
                        return (
                            <Col span={6}>
                                <CheckableTagStyled
                                    key={tag}
                                    checked={isChecked}
                                    onChange={checked => handleChange(tag, checked)}
                                >
                                    {isChecked ? <CheckCircleOutlined /> :  <MinusCircleOutlined />} {tag}
                                </CheckableTagStyled>
                            </Col>
                        )
                        
                    })}
                </Row>
            </div>

            <div className="item tags">
                <p className="title">Tags</p>
                <Row>
                    {tagsData.map(tag => {
                        const isChecked = selectedTags.indexOf(tag) > -1
                        return (
                            <Col span={6}>
                                <CheckableTagStyled
                                    key={tag}
                                    checked={isChecked}
                                    onChange={checked => handleChange(tag, checked)}
                                >
                                    {isChecked ? <CheckCircleOutlined /> :  <MinusCircleOutlined />} {tag}
                                </CheckableTagStyled>
                            </Col>
                        )
                        
                    })}
                </Row>
            </div>
        </WrapperCategoriesTags>
    )
}

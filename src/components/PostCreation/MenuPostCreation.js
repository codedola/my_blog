import React from 'react'
import { useSelector } from "react-redux"

import { Collapse } from 'antd';
import MenuItemPostCreation from './MenuItemPostCreation';
import {CollapseStyled} from "../StyledComponents/PostCreation.Styled"
const { Panel } = Collapse;

export default function MenuPostCreation({
    selectedTags, setSelectedTags, selectedCategories, setSelectedCategories
}) {
   
    const listTags = useSelector(state => Object.values(state.Tag.listTags));
    const listCategories = useSelector(state =>
        Object.values(state.Categories.hashCategoriesFromId)
    );

    
    function handleSetSelectedItems(keyField, selectedItems) {
        if (keyField === "tag") setSelectedTags(selectedItems);
        if (keyField === "category") setSelectedCategories(selectedItems);
    }
    
    return (
        <CollapseStyled>
            <Panel header="Categories" key={"1"} className="categories">
                <MenuItemPostCreation
                    key={Math.random()}
                    keyField="category"
                    listItem={listCategories}
                    classNameItem="categories"
                    selectedItems={selectedCategories}
                    handleSetSelectedItems = {handleSetSelectedItems}
                />
            </Panel>
            <Panel header="Tags" key={"2"} className="tags">
                <MenuItemPostCreation
                    key={Math.random()}
                    keyField="tag"
                    listItem={listTags}
                    classNameItem="tags"
                    selectedItems={selectedTags}
                    handleSetSelectedItems = {handleSetSelectedItems}
                />
            </Panel>
        </CollapseStyled>
    )
}

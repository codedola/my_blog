import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Input } from 'antd';
import {
    ContainerEditor, WrapperInputTitle,
    WrapperPostCreation, SpacingStyled
} from "../StyledComponents/PostCreation.Styled";
import TagsCategorisPost from './TagsCategorisPost';
import UploadImagePost from './UploadImagePost';
const modules = {
    toolbar: [
      [{'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'code-block'],
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 
    'list', 'bullet', 'indent',
    'link', 'code-block'
]
export default function PostCreation() {
    const [textEditor, setTextEditor] = useState("");
    const [objFile, setObjFile] = useState(null);
    const [mediaID, setMediaID] = useState(null);
    const [loading, setLoading] = useState(false);
    

    //
    const handleChange = (value, delta, source, editor) => {
        console.log(value)
        console.log(delta)
        console.log(source)
        console.log(editor)
        setTextEditor(value)
    }

    const handleSetAvatarUser = (objFileAvatar) => {
        setObjFile(objFileAvatar)
    }
    return (
        <WrapperPostCreation>
            <ContainerEditor>

                <WrapperInputTitle>
                    <p>Tiêu đề</p>
                    <Input
                        size="large"
                        placeholder="Nhập vào tiêu đề bài viết ..."
                    />
                </WrapperInputTitle>

                <SpacingStyled />

                <TagsCategorisPost />

                <SpacingStyled />
                 <ReactQuill
                    theme="snow"
                    placeholder="Soạn bài viết ..."
                    modules={modules}
                    formats={formats}
                    value={textEditor}
                    onChange={handleChange}
                />
               
                <SpacingStyled />

                <UploadImagePost
                    handleSetAvatarUser={handleSetAvatarUser}
                    setMediaID={setMediaID}
                />

                <SpacingStyled />
            </ContainerEditor>
        </WrapperPostCreation>
       
    )
}

import React, { useState, useMemo } from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Input } from 'antd';
import {
    ContainerEditor, WrapperInputTitle, ButtonCreation,
    WrapperPostCreation, SpacingStyled, SpinStyled
} from "../StyledComponents/PostCreation.Styled";
import MenuPostCreation from './MenuPostCreation';
import UploadImagePost from './UploadImagePost';
import { useDispatch } from "react-redux"
import { useHistory} from "react-router-dom"
import { actCreateNewPostAsync } from "../../store/posts/actions"
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
    const dispatch = useDispatch();
    const history = useHistory()

    const [objFile, setObjFile] = useState(null);
    const [mediaID, setMediaID] = useState(null);

    const [loading, setLoading] = useState(false);

    const [textTitle, setTextTitle] = useState("");
    const [textEditor, setTextEditor] = useState("");

    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([])
    
    

    //
    const handleChange = (value, delta, source, editor) => {
        setTextEditor(value)
    }

    const handleSetAvatarUser = (objFileAvatar) => {
        setObjFile(objFileAvatar)
    }

    const handleSetTextTitle = (e) => {
        setTextTitle(e.target.value)
    }

    const handleCreateNewPost = () => {
        let media = objFile || mediaID;
        setLoading(true);
        dispatch(actCreateNewPostAsync({
            title: textTitle,
            content: textEditor,
            categories: selectedCategories,
            tags: selectedTags,
            featured_media: media
        }))
            .then(function (res) {
                setLoading(false);
                if (res.ok) {
                    history.push(`/post/${res?.post?.slug}`)
                }
            })
    }
    
    const showDisableButton = useMemo(function () {
        let media = Boolean(objFile || mediaID);
        if (media && textTitle !== "" && textEditor !== "") {
            return false;
        }
        return true;
    }, [objFile, mediaID, textTitle, textEditor ])


    return (
        <WrapperPostCreation>
            <SpinStyled spinning={loading}>

            <ContainerEditor>

                <WrapperInputTitle>
                    <p>Tiêu đề</p>
                    <Input
                        size="large"
                        value={textTitle}
                        onChange={handleSetTextTitle}
                        placeholder="Nhập vào tiêu đề bài viết ..."
                    />
                </WrapperInputTitle>

                <SpacingStyled />

                <MenuPostCreation
                    selectedTags={selectedTags}
                    selectedCategories={selectedCategories}
                    setSelectedTags={setSelectedTags}
                    setSelectedCategories={setSelectedCategories}
                />

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
                    handleSetAvatarUser={handleSetAvatarUser} // setObj file
                    setMediaID={setMediaID}
                />
                <SpacingStyled />

                <div style={{textAlign: "center"}}>
                        <ButtonCreation
                         disabled = {showDisableButton}
                        type="default" size="large" 
                        loading={false} onClick={handleCreateNewPost}
                    >
                        Tạo bài viết
                    </ButtonCreation>
                </div>
                
                </ContainerEditor>
                </SpinStyled>
        </WrapperPostCreation>
       
    )
}

import React, { useState, useMemo, useEffect } from 'react'
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
import Notification from '../shared/Notification';
import Base64ToObjectFile from "../shared/Base64toObjectFile"
import CheckImgBeforeUpload from '../shared/CheckImgBeforeUpload';
const modules = {
    toolbar: [
      [{'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link','image', 'code-block'],
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 
    'list', 'bullet', 'indent',
    'link', 'code-block', 'image'
]
export default function PostCreation({
    widthEditor="80%", textButton = "Tạo bài viết", post = null, handleEditPost = null
}) {
    const dispatch = useDispatch();
    const history = useHistory()

    const [objFile, setObjFile] = useState(null);
    const [mediaID, setMediaID] = useState(null);

    const [loading, setLoading] = useState(false);

    const [textTitle, setTextTitle] = useState("");
    const [textEditor, setTextEditor] = useState("");

    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([])
    
    // setState for post !== null
    useEffect(function () {
        if (post !== null) {
            setTextTitle(post.title.rendered);
            setTextEditor(post.content.rendered);
            setSelectedCategories(post.categories);
            setSelectedTags(post.tags);
            setMediaID(post.featured_media);
        }
    }, [post])
    //
    

    const handleChange = (value, delta, source, editor) => {
        setTextEditor(value);

        delta.forEach(function (data) {
            const retainIndex = data?.retain;
            if (data.insert && data.insert["image"]) {
                if (data?.insert["image"].includes("base64")) {
                    const file = Base64ToObjectFile(data?.insert["image"], "imageblog");
                    const isCorrectImg = CheckImgBeforeUpload(file, "KB")
                    if (!isCorrectImg) {
                        delta?.retain(retainIndex)?.delete(1);
                        setTextEditor(textEditor?.replace(`<img src=${data.insert["image"]}>`, ""))
                    }
                }
            }
       }) 
    }

    const handleSetAvatarUser = (objFileAvatar) => {
        setObjFile(objFileAvatar)
    }

    const handleSetTextTitle = (e) => {
        setTextTitle(e.target.value)
    }

    const handleOnChangePost = () => {
        let media = objFile || mediaID;
        
        if (post && typeof handleEditPost === "function") {
            setLoading(true);
            handleEditPost({
                title: textTitle,
                content: textEditor,
                categories: selectedCategories,
                tags: selectedTags,
                featured_media: media
            }).then(function (res) {
                    setLoading(false);
                    if (res.ok) {
                        history.push(`/post/${res?.post?.slug}`)
                    } else {
                        Notification({
                            type: "error",
                            placement: "topRight",
                            message: "Lỗi hình ảnh",
                            duration: 4,
                            description: "Hình trong văn bản phải nhỏ hơn 200KB"
                        })
                    }
            })
    
        } else {
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

            <ContainerEditor widthEditor={widthEditor}>

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
                        mediaURL = {post ? post.featured_media_url : null}
                />
                <SpacingStyled />

                <div style={{textAlign: "center"}}>
                        <ButtonCreation
                         disabled = {showDisableButton}
                        type="default" size="large" 
                        loading={false} onClick={handleOnChangePost}
                    >
                        {textButton}
                    </ButtonCreation>
                </div>
                
                </ContainerEditor>
                </SpinStyled>
        </WrapperPostCreation>
       
    )
}

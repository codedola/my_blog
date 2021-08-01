import React, {useState, useEffect} from 'react'
import { Row, Col, Image } from 'antd';
import { actGetListMediaAsync } from "../../store/media/actions"
import { useDispatch } from "react-redux"
import { ModalMediaLibrary } from "../StyledComponents/UserProfileAvatar.styled"
export default function MediaModal({ isModalLibrary, setIsModalLibrary ,handleSetAvatarMedia }) {
    const dispatch = useDispatch();
    const [listMedia, setListMedia] = useState([]);
    const [avatarMedia, setAvatarMedia] = useState(null)


    useEffect(function () {
        dispatch(actGetListMediaAsync())
            .then(function (res) {
                if (res.ok) {
                    setListMedia(res.list)
                }
            })
    }, [dispatch])

    const handleChooseAvatar = (media) => {
        return () => {
            setAvatarMedia(media)
        }
    }

    const onSetAvatarMedia = () => {
        setIsModalLibrary(false);
        handleSetAvatarMedia(avatarMedia)
    }

    return (
        <ModalMediaLibrary
            cancelText="Hủy"
            okText="Chọn"
            centered
            visible={isModalLibrary}
            closable={false}
            onOk={onSetAvatarMedia}
            onCancel={() => setIsModalLibrary(false)}
            >
                <Row gutter={[8, 8]}>
                    {
                    listMedia.map(function (media) {
                        const {id, source_url } = media
                            return (
                                <Col className="gutter-row" span={6} key={id}>
                                    <Image
                                        style={{
                                            cursor: "pointer",
                                            border: `4px solid ${id === avatarMedia?.id
                                                ? "#12ff12" : "#f7f7f7"}`,
                                            borderRadius: 4
                                        }}
                                        preview={false}
                                        onClick={handleChooseAvatar(media)}
                                        src={source_url}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </ModalMediaLibrary>
    )
}

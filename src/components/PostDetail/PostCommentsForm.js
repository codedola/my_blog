import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAvatarUser } from "../../helpers"
import { actPostCommentAsync } from "../../store/comments/actions"
import Button from '../shared/Button'
import { Link } from "react-router-dom";
import { PATHS } from "../../constants";
import Notification from "../shared/Notification"
export default function PostCommentsForm({ 
  postId, 
  parentId,
  placeholder = "Nhập bình luận của bạn ở đây ...",
  isShowCancelBtn = false,
  onCancelForm = () => { }
}) {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.Auth.currentUser)
  const [commentStr, setCommentStr] = useState('')
  const [loading, setLoading] = useState(false)

  if (!currentUser) {
    return null
  }

  const userId = currentUser.id
  const userAvatar = currentUser.simple_local_avatar ? currentUser.simple_local_avatar.full : null
  const avatar = getAvatarUser(userId, userAvatar);
  const userLink = PATHS.USER_DETAIL.replace(":user_id", userId);
  function handleChangeComment(evt) {
    setCommentStr(evt.target.value)
  }

  function handleSubmit() {
    // authorId -> currentUser
    // content -> commentStr
    // postId -> 
    // parentId -> 
    if (loading) return
    setLoading(true);
    dispatch(actPostCommentAsync({
      authorId: userId,
      postId: postId,
      parentId: parentId,
      content: commentStr
    })).then(res => {
      setLoading(false);
      if (res.ok) {
        setCommentStr('');
      } else {
        Notification({
          type: "warning", placement: "bottomLeft"
          , message: "Xin Chờ 6 giây", description: res.message, duration: 6
        })
       
      }
     
    })
  }

  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <div className="comments__section--avatar">
          <Link to={userLink}>
            <img src={avatar} alt="current user" />
          </Link>
        </div>
        <textarea onChange={handleChangeComment} value={commentStr} placeholder={placeholder} />
      </div>
      <div className="text-right">
        <Button onClick={handleSubmit} loading={loading}>Đăng bình luận</Button>
        {
          isShowCancelBtn ? <Button onClick={onCancelForm} styleBtn={{marginLeft: 8}} >Hủy</Button> : null
        }
      </div>
    </div> )
}
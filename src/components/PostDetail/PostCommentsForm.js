import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAvatarUser } from "../../helpers"
import { actPostCommentAsync } from "../../store/comments/actions"
import Button from '../shared/Button'

export default function PostCommentsForm({ 
  postId, 
  parentId,
  placeholder = "Nhập bình luận của bạn ở đây ..." 
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
  const avatar = getAvatarUser(userId, userAvatar)

  function handleChangeComment(evt) {
    setCommentStr(evt.target.value)
  }

  function handleSubmit() {
    // authorId -> currentUser
    // content -> commentStr
    // postId -> 
    // parentId -> 
    if (loading) return

    setLoading(true)
    dispatch(actPostCommentAsync({
      authorId: userId,
      postId: postId,
      parentId: parentId,
      content: commentStr
    })).then(res => {

      if (res.ok) {
        setCommentStr('')
      }

      setLoading(false)
    })
  }

  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <div className="comments__section--avatar">
          <a href="/">
            <img src={avatar} alt="" />
          </a>
        </div>
        <textarea onChange={handleChangeComment} value={commentStr} placeholder={placeholder} />
      </div>
      <div className="text-right">
        <Button onClick={handleSubmit} loading={loading}>Đăng bình luận</Button>
      </div>
    </div>
  )
}
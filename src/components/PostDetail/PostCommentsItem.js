// import PostCommentsForm from './PostCommentsForm'
import { useSelector } from 'react-redux'
import Loading from '../shared/Loading'
import PostCommentSection from './PostCommentSection'
import { useCommentsPaging } from '../../hooks/useCommentsPaging'
import { genKeyChildPaging, genObjPaging } from '../../store/comments/reducer'
import { useState } from 'react'
import PostCommentsForm from './PostCommentsForm'

function PostCommentsItem({ parentId, comment }) {
  const postDetail = useSelector(state => state.Posts.postDetail)
  const [isShowForm, setIsShowForm] = useState(false)

  const postId = postDetail.id 
  const isCmtParent = parentId === 0
  
  const {
    comments: commentsChild,
    loading: loadingCmtChild,
    handleLoadMore: handleLoadMoreCmtChild
  } = useCommentsPaging({
    selectorFn: (state) => {
      const genKey = genKeyChildPaging(comment.id)
      const currentCmtChildPaging = state.Comments.commentsChildPaging[genKey]

      if (!currentCmtChildPaging) {
        return genObjPaging({ page: 0 })
      }

      return currentCmtChildPaging
    },
    extraParams: {
      postId,
      parentId: comment.id
    }
  })

  function handleToggleFormReply(evt) {
    evt.preventDefault()
    setIsShowForm(!isShowForm)
  }

  if (!comment) {
    return null
  }

  const { comment_reply_count } = comment

  const remainingCmtChild = comment_reply_count - commentsChild.length

  return (
    <li className="item">
      <PostCommentSection comment={comment} />

      {
        comment_reply_count !== 0 && remainingCmtChild !== 0 ? (
          <div className="comments__hidden">
            <a href="/" onClick={handleToggleFormReply}>
              Trả lời
            </a>
            <a href="/" onClick={handleLoadMoreCmtChild} >
              <i className="icons ion-ios-undo"></i> Xem thêm { remainingCmtChild } câu trả lời { loadingCmtChild && <Loading width="1em" /> }
            </a>
          </div>
        ) : (
          isCmtParent && (
            <div className="comments__hidden">
              <a href="/" onClick={handleToggleFormReply}>
                Trả lời
              </a>
            </div>
          )
        )
      }

      {/* Reply Comments */}

      {
        isCmtParent && comment_reply_count !== 0 && (
          <ul className="comments">
            {
              commentsChild.map(cmtChild => <PostCommentsItem comment={cmtChild} key={cmtChild.id} />)
            }
          </ul>
        )
      }

      {/* Reply form */}
      {
        isCmtParent && isShowForm && (
          <PostCommentsForm 
            postId={postId} 
            parentId={comment.id}
            placeholder={`Phản hồi bình luận của @congluc1902`}
          />
        )
      }
    </li>
  )
}

export default PostCommentsItem;
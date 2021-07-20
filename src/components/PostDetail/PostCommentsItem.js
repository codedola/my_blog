
import { useSelector } from 'react-redux'
import PostCommentSection from './PostCommentSection'
import { useCommentsPaging } from '../../hooks/useCommentsPaging'
import { genKeyChildPaging, genObjPaging } from '../../store/comments/reducer'
import { useState } from 'react'
import PostCommentsForm from './PostCommentsForm';
import { Button } from 'antd';
import { LoadingOutlined , CommentOutlined } from "@ant-design/icons"

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
            <Button type="text" size="small" className="reply" onClick={handleToggleFormReply}>
              <CommentOutlined /> Trả lời
            </Button>

            <Button  type="text" size="small" onClick={handleLoadMoreCmtChild} >
              <i className="icons ion-ios-undo"></i>
              Xem thêm {remainingCmtChild} câu trả lời {loadingCmtChild
                && <LoadingOutlined style={{verticalAlign:"baseline", marginLeft: 4}} />}
            </Button>
          </div>
        ) : (
          isCmtParent && (
            <div className="comments__hidden">
                <Button type="text" size="small" className="reply" onClick={handleToggleFormReply}>
                  <CommentOutlined /> Trả lời
                </Button>
            </div>
          )
        )
      }

      
      {/* Reply form */}
      {
        isCmtParent && isShowForm && (
          <PostCommentsForm 
            postId={postId} 
            parentId={comment.id}
            isShowCancelBtn={true}
            onCancelForm ={() => {setIsShowForm(false)}}
            placeholder={`Phản hồi bình luận của @${comment.author_data.nickname}`}
          />
        )
      }

      {/* Reply Comments */}

      {
        isCmtParent && comment_reply_count !== 0 && (
          <ul className="comments">
            {
              commentsChild.map(
                cmtChild => <PostCommentsItem comment={cmtChild} key={cmtChild.id} />
              )
            }
          </ul>
        )
      }

    </li>
  )
}

export default PostCommentsItem;
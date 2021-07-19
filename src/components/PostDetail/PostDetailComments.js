import PostCommentsForm from './PostCommentsForm'
import PostCommentsItem from './PostCommentsItem'
import { useCommentsPaging } from '../../hooks/useCommentsPaging'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function PostDetailComments() {
  const postDetail = useSelector(state => state.Posts.postDetail);
  const isLogin = useSelector(state => Boolean(state.Auth.currentUser));
  const exclude = useSelector(state => state.Comments.commentsParentPaging.exclude);
  const postId = postDetail.id 
  const totalCommentsCount = postDetail.comment_count

  const { 
    comments: commentsParent,
    renderButtonLoadmore 
  } = useCommentsPaging({
    extraParams: {
      postId: postId,
      parentId: 0,
      exclude: exclude
    },
    styleBtn: {
      marginTop: 18
    }
  })

  return (
    <div className="post-detail__comments">
      {
        isLogin 
          ? <PostCommentsForm postId={postId} parentId={0} /> 
          : <p>Vui lòng <Link to="/login">đăng nhập</Link> để bình luận bài viết này</p>
      }
      <p>{ totalCommentsCount } Comments</p>
      <ul className="comments">
        { 
          commentsParent.map(itemData => {
            return (
              <PostCommentsItem 
                comment={itemData} 
                key={itemData.id} 
                parentId={0} 
              />
            )
          }) 
        }
        { renderButtonLoadmore() }
      </ul>
    </div>

  )
}
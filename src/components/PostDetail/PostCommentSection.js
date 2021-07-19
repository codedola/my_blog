import { getAvatarUser } from "../../helpers";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants";
import { createDateTime } from "../../helpers"
function PostCommentSection({ comment }) {
  const authorId = comment.author
  const authorAvatar = comment.author_data.avatar
  const avatar = getAvatarUser(authorId, authorAvatar);
  const authorLink = PATHS.USER_DETAIL.replace(":user_id", authorId);
  const { relativeTimeStr } = createDateTime(comment.date)

  return (
    <div className="comments__section">
      <div className="comments__section--avatar">
        <Link to={authorLink}>
          <img src={ avatar } alt="author-avatar" />
        </Link>
      </div>
      <div className="comments__section--content">
        <Link to={authorLink} className="comments__section--user">
          {comment.author_data.nickname}
        </Link>
        <p className="comments__section--time">{ relativeTimeStr }</p>
        <div 
          className="comments__section--text" 
          dangerouslySetInnerHTML={{
            __html: comment.content.rendered
          }} 
        />
      </div>
    </div>
  )
}

export default PostCommentSection;
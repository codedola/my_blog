import { getAvatarUser } from "../../helpers";

function PostCommentSection({ comment }) {

  const authorId = comment.author
  const authorAvatar = comment.author_data.avatar
  const avatar = getAvatarUser(authorId, authorAvatar)

  return (
    <div className="comments__section">
      <div className="comments__section--avatar">
        <a href="/">
          <img src={ avatar } alt="" />
        </a>
      </div>
      <div className="comments__section--content">
        <a href="/" className="comments__section--user">{ comment.author_data.nickname }</a>
        <p className="comments__section--time">2 minutes ago</p>
        <div 
          className="comments__section--text" 
          dangerouslySetInnerHTML={{
            __html: comment.content.rendered
          }} 
        />
        {/* <i class="ion-reply comments__section--reply"></i> */}
      </div>
    </div>
  )
}

export default PostCommentSection;
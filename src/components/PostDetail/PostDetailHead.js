import { useSelector } from "react-redux";
import { EyeOutlined, CommentOutlined } from "@ant-design/icons";
import { createDateTime } from "../../helpers";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants"
function PostDetailHead() {
  const post = useSelector(state => state.Posts.postDetail);

  if (!post) {
    return null;
  }

  const postTitle = post.title.rendered;
  const postAuthorName = post.author_data.nickname;
  const postCmtCount = post.comment_count;
  const postViewCount = post.view_count;
  const { createdDateStr } = createDateTime(post.date)

  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">{postTitle}</h1>
        <ul className="post-detail__info">
          <li className="item author">
            Bởi <Link to={PATHS.USER_DETAIL.replace(":user_id", post.author)}>
              <strong>{postAuthorName}</strong>
            </Link>
          </li>
          <li className="item date">{createdDateStr}</li>
          <li className="item views">
            <span className="count">{postViewCount}</span>
            <EyeOutlined  />
          </li>
          <li className="item comments">
            <span className="count">{postCmtCount}</span>
            <CommentOutlined />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PostDetailHead;
import { useSelector } from "react-redux";
import dayjs from 'dayjs';


function PostDetailHead() {
  const post = useSelector(state => state.Posts.postDetail);

  if (!post) {
    return null;
  }

  const postTitle = post.title.rendered;
  const postAuthorName = post.author_data.nickname;
  const postCmtCount = post.comment_count;
  const postViewCount = post.view_count;
  const date = dayjs(new Date(post.date));
  const dateStr = date.format('DD/MM/YYYY');

  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">{postTitle}</h1>
        <ul className="post-detail__info">
          <li className="item author">
          Bởi <a href="/"><strong>{postAuthorName}</strong></a>
          </li>
          <li className="item date">{dateStr}</li>
          <li className="item views">
            {postViewCount} <i className="icons ion-ios-eye" />
          </li>
          <li className="item comments">
            {postCmtCount} <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PostDetailHead;
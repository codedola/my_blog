import React from "react";
import { PATHS } from "../../constants";
import { Link } from "react-router-dom";
import { getAvatarUser } from "../../helpers";
import { useSelector } from "react-redux";
import PostsRelatedSidebar from "./PostsRelatedSidebar";
function PostDetailSidebar() {
  const post = useSelector(state => state.Posts.postDetail);

  if (!post) return null;
  
  const authorID = post.author;
  const postID = post.id;
  const avatar = getAvatarUser(authorID, post.author_data.avatar);
  const authorName = post.author_data.nickname;
  const authorDesc = post.author_data.description;
  const authorLink = PATHS.USER_DETAIL.replace(":user_id", authorID)


  return (
    <div className="post-detail__side">
      <div className="post-author">
        <div className="post-author__bg-avatar">
          <Link to={authorLink} className="post-author__avatar">
            <img src={avatar} alt="author-avatar" />
          </Link>
        </div>
        <div className="post-author__nickname">
          <Link to={authorLink}>{authorName ? authorName : "John Smith"}</Link>
        </div>
        <p className="post-author__desc">
          {authorDesc ? authorDesc : "No Description"}
        </p>
      </div>
      <div className="spacing" />

      {/* author post related */}
      <div className="related-post">
        <h2 className="related-post__head">Bài viết liên quan</h2>
        <PostsRelatedSidebar authorID={authorID} postID={postID} />
      </div>
    </div>
  )
}

export default PostDetailSidebar;
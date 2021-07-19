import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { actFetchPostsRelatedAsync } from "../../store/posts/actions"
import { PATHS } from "../../constants"
import { ClockCircleOutlined } from '@ant-design/icons';
import {createDateTime } from "../../helpers"
//
export default function PostsRelatedSidebar({ authorID, postID }) {
  const dispatch = useDispatch()
  const [postsRelated, setPostsRelated] = useState(null)

  useEffect(function () {
    dispatch(actFetchPostsRelatedAsync({ author: authorID, exclude: postID, per_page: 4 }))
      .then(function (res) {
        if (res.ok) {
          setPostsRelated(res.posts);
        }
      })
  }, [dispatch, authorID, postID])
  
  const authorLink = PATHS.USER_DETAIL.replace(":user_id", authorID);
  
  
  return (
      <>
        {
          postsRelated && postsRelated.map(function (post) {
            return (
              <article className="related-post__card" key={post.id}>
                <Link to={PATHS.POST_DETAIL.replace(":slug", post.slug)}  className="related-post__title">
                  {post.title.rendered}
                </Link>
                
                <div className="related-post__info">
                  <Link to={authorLink} className="related-post__author">
                    {post.author_data.nickname}
                  </Link>
                  <p className="related-post__date">
                    <ClockCircleOutlined/> 
                    <span>
                      {createDateTime(post.date)?.relativeTimeStr}
                    </span>
                  </p>
                </div>
                </article>
              )
          })
        }
      </>  
    )
}

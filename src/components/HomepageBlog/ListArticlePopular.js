import React from 'react'
import { Link } from "react-router-dom";
import {  useSelector} from "react-redux"

import { PATHS } from "../../constants"
import { ClockCircleOutlined } from '@ant-design/icons';
import {createDateTime } from "../../helpers"
//
export default function ListArticlePopular() {
    const posts = useSelector(state => state.Posts.articlesPopular)
  
  
  
  return (
      <>
        {
          posts && posts.map(function (post) {
            return (
              <article className="related-post__card" key={post.id}>
                <Link to={PATHS.POST_DETAIL.replace(":slug", post.slug)}  className="related-post__title">
                  {post.title.rendered}
                </Link>
                
                <div className="related-post__info">
                  <Link to={PATHS.USER_DETAIL.replace(":user_id", post.author)} className="related-post__author">
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

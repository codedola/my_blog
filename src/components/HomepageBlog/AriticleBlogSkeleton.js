import React from "react"
import '../ArticleItem/article-item.css';
import cls from 'classnames';
import { Divider, Skeleton } from "antd"
import { ArticleBlogStyled } from "../StyledComponents/Homepage.Styled";


export default function ArticleBlog({
  isStyleCard = true,
  isStyleRow = true,
  isShowAvatar = true,
  isShowTitle = true,
  isShowInfo = true,
  isNewStory = false,
  isShowInfoUser= true,
}) {

  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
    'style-story': isNewStory
  })



  return (
    <ArticleBlogStyled className={classes} >
      <div className="article-item__content">

        {
        isShowInfo ?
              <div className="article-item__info">
          {
            isShowAvatar &&
           
            <Skeleton avatar active>
                <div
                    className="article-item__author-image"
                    style={{ borderColor: "transparent" }}
                />
            </Skeleton>
            
          }
          <div className="article-item__info-right">
            <div className="article-item__author-name">
                {
                isShowInfoUser ? <Skeleton paragraph={{ rows: 1 }} active /> : null
                }
            </div>
          </div>
        </div> : null         
        }   
       
        

        <Divider />

        {
          isShowTitle ?  <Skeleton active paragraph={{ rows: 1 }} /> : null
        }

      </div>

        <div className="article-item__thumbnail">
            <Skeleton.Image active />
        </div>
       

    </ArticleBlogStyled>
  )
}
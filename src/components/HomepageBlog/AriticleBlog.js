import React from "react"
import '../ArticleItem/article-item.css';
import cls from 'classnames';
import { PATHS} from "../../constants";
import ArticleItemDesc from '../ArticleItem/ArticleItemDesc';
import ArticleItemThumb from '../ArticleItem/ArticleItemThumb';
import ArticleItemTitle from '../ArticleItem/ArticleItemTitle';
import ArticleItemInfo from '../ArticleItem/ArticleItemInfo';
import ArticleItemCategories from '../ArticleItem/ArticleItemCategories';
import ArticleItemStats from '../ArticleItem/ArticleItemStats';
import { Divider } from "antd"
import { useHistory } from "react-router-dom"
import { ArticleBlogStyled } from "../StyledComponents/Homepage.Styled";


export default function ArticleBlog({
  isStyleCard = true,
  isShowDesc = true,
  isStyleRow = true,
  isShowCategoies = true,
  isShowAvatar = true,
  isShowTitle = true,
  isShowInfo = true,
  isNewStory = false,
  isShowInfoUser= true,
  post
}) {
  const history = useHistory();
  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
    'style-story': isNewStory
  })

  if (!post) {
    return null;
  }

  const title = post.title?.rendered;
  const slugLink = PATHS.POST_DETAIL.replace(":slug", post.slug)
  const thumbnail = post.featured_media_url;

  const authorId = post.author;
  const authorName = post.author_data.nickname;
  const authorAvatar = post.author_data.avatar;
  const authorLink = PATHS.USER_DETAIL.replace(":user_id", post.author);


  const created = post.date;

  const shortDesc = post.excerpt.rendered
  const viewCount = post.view_count;
  const categoriesId = post.categories;
  
  
  function hanldeShowPostDetail() {
    if (isNewStory) {
      history.push("/post/" + post.slug)
    }
  }

  return (
    <ArticleBlogStyled className={classes} onClick={isNewStory ? hanldeShowPostDetail : null} >
      <div className="article-item__content">
        {
          isShowInfo ?
            <ArticleItemInfo
              isShowInfoUser={isShowInfoUser}
              isShowAvatar={isShowAvatar} 
              created={created}
              authorId={authorId}
              authorName={authorName}
              authorLink={authorLink}
              authorAvatar={authorAvatar}
            /> : null
        }
        

        <Divider />

        {
          isShowTitle ?  <ArticleItemTitle 
              title={title} 
              slugLink={slugLink}
            /> : null
        }
        

        { isShowCategoies && <ArticleItemCategories categoriesId={categoriesId} /> }
        { isShowCategoies && <ArticleItemStats viewCount={viewCount} /> }

       
        { isShowDesc && <ArticleItemDesc shortDesc={shortDesc} isBlog={true} slugLink={slugLink} /> }

        

      </div>

       <ArticleItemThumb 
        title={title}
        slugLink={slugLink}
        thumbnail={thumbnail}
      />

    </ArticleBlogStyled>
  )
}
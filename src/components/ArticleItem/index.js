import './article-item.css';
import cls from 'classnames';
import { PATHS} from "../../constants";
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  isDashboard = false,
  post
}) {
  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
    'card-dashboard': isDashboard
  })

  if (!post) {
    return null;
  }

  const title = post.title.rendered;
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


  return (
    <article className={classes} style={{
      height: isDashboard ? "150px" : "100%"
    }}>
      
      <ArticleItemThumb 
        title={title}
        slugLink={slugLink}
        thumbnail={thumbnail}
      />
      <div className="article-item__content">
       
        { isShowCategoies && <ArticleItemCategories categoriesId={categoriesId} /> }
        { isShowCategoies && <ArticleItemStats viewCount={viewCount} /> }

        <ArticleItemTitle 
          title={title} 
          slugLink={slugLink}
        />

        { isShowDesc && <ArticleItemDesc shortDesc={shortDesc} /> }

         <ArticleItemInfo 
          isShowAvatar={isShowAvatar} 
          created={created}
          authorId={authorId}
          authorName={authorName}
          authorLink={authorLink}
          authorAvatar={authorAvatar}
        />
      </div>

    </article>
  )
}
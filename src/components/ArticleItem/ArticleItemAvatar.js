
import { Link } from 'react-router-dom';

export default function ArticleItemAvatar({
  avatar,
  authorLink,
  authorName
}) {
  return (
    <div className="article-item__author-image">
      <Link aria-label={authorName} to={authorLink}>
        <img src={avatar} alt={authorName} />
      </Link>
    </div>
  )
}
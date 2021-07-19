import { Link } from 'react-router-dom';

const DEFAULT_IMAGE = 'https://www.tibs.org.tw/images/default.jpg';

export default function ArticleItemThumb({
  thumbnail,
  slugLink,
  title,
}) {
  return (
    <div className="article-item__thumbnail">
      <Link to={slugLink}>
        <img src={thumbnail || DEFAULT_IMAGE} alt={title} />
      </Link>
    </div>
  )
}
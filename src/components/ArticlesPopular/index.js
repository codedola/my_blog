import './popular-news-list.css';
import MainTitle from '../shared/MainTitle';
import ArticleItem from '../ArticleItem';
import Container from '../shared/Container';
import { useSelector } from 'react-redux';

export default function ArticlesPopular() {
  const posts = useSelector(state => state.Posts.articlesPopular)

  return (
    <div className="popular-news section bg-white-blue">
      <Container>
        <MainTitle isShowBtn btnProps={{ btnText: 'Xem thêm' }}>
          Bài viết phổ biến
        </MainTitle>
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">

              <div className="popular-news__list--card">
                <ArticleItem isStyleCard isShowDesc isShowCategoies post={posts[0]} />
              </div>
              <div className="popular-news__list--card">
                <ArticleItem isStyleCard isShowDesc isShowCategoies post={posts[1]} />  
              </div>

            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                <ArticleItem isStyleCard isStyleRow isShowDesc isShowCategoies post={posts[2]} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
import './latest-news-list.css';
import ArticleItem from '../ArticleItem';
import MainTitle from '../shared/MainTitle';
import { useSelector } from 'react-redux';
import { Trans } from '@lingui/macro'
import ArticleItemSkeleton from '../ArticleItem/ArticleItemSkeleton';
import Container from '../shared/Container';
export default function ArticlesLatest() {
  const posts = useSelector(state => state.Posts.articlesLatest)

  return (
    <div className="latest-news section">
      <Container>
        
        <MainTitle>
          <Trans>Bài viết mới nhất</Trans>
        </MainTitle>

        <div className="latest-news__list spacing">

          {
            posts.map((post) => {
              return (
                <div className="latest-news__card" key={post.id}>
                  <ArticleItem post={post} />
                </div>
              )
            })
          }
          {
            posts.length === 0 && (
              <>
                <div className="latest-news__card">
                  <ArticleItemSkeleton />
                </div>
                <div className="latest-news__card">
                  <ArticleItemSkeleton />
                </div>
                <div className="latest-news__card">
                  <ArticleItemSkeleton />
                </div>
              </>
            )
          }

        </div>
      </Container>
    </div>
  )
}
import ArticleItem from '../ArticleItem';
import Col from '../shared/Col';
import Container from '../shared/Container';
import MainTitle from '../shared/MainTitle';
import Row from '../shared/Row';
import { usePostsPaging } from '../../hooks/usePostsPaging';

function handleMap(post) {
  return (
    <Col md={6} key={post.id}>
      <ArticleItem isStyleCard isShowAvatar={false} post={post} />
    </Col>
  )
}

export default function ArticlesList() {
  
  const {
    posts,
    renderButtonLoadmore
  } = usePostsPaging()

  return (
    <div className="articles-list section">
      <Container>
        <MainTitle isShowBtn btnProps={{ btnText: 'Xem thêm' }}>
          Tin tổng hợp
        </MainTitle>

        <Row>
          {
            posts.map(handleMap)
          }
        </Row>

        {renderButtonLoadmore()}
      </Container>
    </div>
  )
}
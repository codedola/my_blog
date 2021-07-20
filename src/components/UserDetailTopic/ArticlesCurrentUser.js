import { useEffect} from "react"
import ArticleItem from '../ArticleItem';
import Col from '../shared/Col';
import Container from '../shared/Container';
import Row from '../shared/Row';
import { usePostsPaging } from '../../hooks/usePostsPaging';
import { useDispatch } from "react-redux";
import { actFetchPostCurrentUserAsync } from "../../store/posts/actions"
function handleMap(post) {
  return (
    <Col md={6} key={post.id}>
      <ArticleItem isStyleCard isShowAvatar={false} post={post} />
    </Col>
  )
}

export default function ArticlesCurrentUser({authorID}) {
    const dispatch = useDispatch();
    const {
        posts,
        renderButtonLoadmore
    } = usePostsPaging({
        actionAsync: actFetchPostCurrentUserAsync,
        selectorFn: (state) => state.Posts.postUser,
        extraParams: {
            author: authorID
        }
    })
    
    useEffect(function () {
        dispatch(actFetchPostCurrentUserAsync({ author: authorID }));
    }, [dispatch, authorID])

  return (
      <div className="articles-list section bg-white-blue" style={{ height: "100%" }}>
    
      <Container>
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
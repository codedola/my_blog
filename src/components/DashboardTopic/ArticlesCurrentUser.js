import { useEffect, useState } from "react"
import ArticleItem from '../ArticleItem';
import Col from '../shared/Col';
import Container from '../shared/Container';
import Row from '../shared/Row';
import { usePostsPaging } from '../../hooks/usePostsPaging';
import { EmptyStyled  } from "../StyledComponents/UsersTable.styled"
import { useDispatch } from "react-redux";
import { actFetchPostCurrentUserAsync } from "../../store/posts/actions";
import ArticleItemSkeleton from "../ArticleItem/ArticleItemSkeleton";
import {genKeyUserPost } from "../../store/posts/reducer"
function handleMap( loading = false) {
  return function (post) {
    return (
      <Col md={6} key={post.id}>
        {
          !loading ? <ArticleItem isStyleCard
            isShowDesc={false}
            isShowAvatar={false} post={post}
            isDashboard={true} />
            : <ArticleItemSkeleton isStyleCard isShowAvatar={false} isDashboard={true} />
        }
      </Col>
  )
  }
}

export default function ArticlesCurrentUser({authorID, isShowBg = true}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const {
      posts,
      renderButtonLoadmore
  } = usePostsPaging({
      actionAsync: actFetchPostCurrentUserAsync,
      selectorFn: (state) => state.Posts.postUser[genKeyUserPost(authorID)],
      extraParams: {
        author: authorID,
      }
  })
    
  useEffect(function () {
    setLoading(true);
    dispatch(actFetchPostCurrentUserAsync({ author: authorID }))
      .then(function () {
        setLoading(false);
      })
  }, [dispatch, authorID])

  return (
    <div
      className={`articles-list section ${isShowBg ? "bg-white-gray" : ""}`}
      style={{ height: "100%", borderRadius: 10 }}
    >
      {
        posts?.length > 0 ? (
            <Container>
              <Row>
              {
                posts.map(handleMap(loading)) 
              } 
              </Row>
            {!loading ? renderButtonLoadmore() : null}
           
            </Container>
          ) : <EmptyStyled description={`Chưa tạo bài viết`} /> }
   
    </div>
  )
}
     

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router"
import ArticleItem from "../components/ArticleItem"
import PageNotFound from "../components/PageNotFound"
import Col from "../components/shared/Col"
import MainTitle from "../components/shared/MainTitle"
import Row from "../components/shared/Row"
import { Empty } from 'antd';
import queryString from 'query-string';
import { actFetchPostsAsync } from "../store/posts/actions"
import { usePostsPaging } from '../hooks/usePostsPaging';
import LoadingSearch from "../components/LoadingSearch"
export default function PostsCategory() {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchStr = queryString.parse(location.search).q;
  const [loadingFirst, setLoadingFirst] = useState(true);

  const {
    posts,
    totalElements,
    renderButtonLoadmore
  } = usePostsPaging({
    extraParams: {
      search: searchStr
    },
    actionAsync: actFetchPostsAsync
  })

  useEffect(() => {
    if (searchStr) {
      setLoadingFirst(true)
      dispatch(actFetchPostsAsync({
        search: searchStr
      })).finally(() => {
        setLoadingFirst(false)
      })
    }
  }, [dispatch, searchStr])

  if (!searchStr) {
    return (
      <div className="articles-list section">
        <div className="tcl-container">
            <PageNotFound />
        </div>
      </div>
    )
  }
  return (
    <div className="articles-list section bg-white-blue">
      <div className="tcl-container">
        <MainTitle isSearch={true}>Có {totalElements} kết quả tìm kiếm với từ khoá "{searchStr}"</MainTitle>
      
        <Row className="tcl-jc-center">
          {
            totalElements > 0 ? posts.map(post => {
              return (
                <Col md={9} xs={12} key={post.id}>
                  <ArticleItem post={post} isStyleCard isShowCategoies isShowDesc />
                </Col>
              )
            }) : <Empty description='Không tìm thấy bài viết' imageStyle={{height: 220}} />
          }
        </Row>
        
        {renderButtonLoadmore()}
        
        <LoadingSearch loading={loadingFirst} />
      </div>
    </div>
  )
}
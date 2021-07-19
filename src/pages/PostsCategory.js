import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import ArticleItem from "../components/ArticleItem"
import PageNotFound from "../components/PageNotFound"
import Col from "../components/shared/Col"
import MainTitle from "../components/shared/MainTitle"
import Row from "../components/shared/Row"
import { actFetchCategoryAsync } from "../store/categories/actions"
import { actFetchPostsAsync } from "../store/posts/actions"
import { usePostsPaging } from '../hooks/usePostsPaging';
import LoadingSearch from "../components/LoadingSearch"


export default function PostsCategory() {
  const params = useParams();
  const dispatch = useDispatch();
  const slug = params.slug;
  const [category, setCategory] = useState(null);
  // loading - error - success
  const [loadingStatus, setLoadingStatus] = useState('loading'); 
  const {
    posts,
    totalElements,
    renderButtonLoadmore
  } = usePostsPaging({
    extraParams: {
      categories: category ? category.id : null
    },
    actionAsync: actFetchPostsAsync
  })

  useEffect(() => {
    setLoadingStatus('loading');
    dispatch(actFetchCategoryAsync(slug))
      .then(res => {
        if (res.ok) {
          setCategory(res.category)
          setLoadingStatus('success')
        } else {
          setLoadingStatus('error')
        }
      })
  }, [dispatch, slug])
 
  if (loadingStatus === 'error') {
    return (
      <div className="articles-list section">
        <div className="tcl-container">
            <PageNotFound />
        </div>
      </div>
    )
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        
        <MainTitle isSearch={true}>
          Có {totalElements} kết quả tìm kiếm cho danh mục "{category?.name}"
        </MainTitle>
    
        <Row className="tcl-jc-center">
          {
            posts.map(post => {
              return (
                <Col md={9} xs={12} key={post.id}>
                  <ArticleItem post={post} isStyleCard isShowCategoies isShowDesc/>
                </Col>
              )
            })
          }
        </Row>
        
        {renderButtonLoadmore()}
        <LoadingSearch loading={loadingStatus === 'loading'} />
      </div>
    </div>
  )
}
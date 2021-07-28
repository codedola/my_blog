import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import ArticleItem from "../components/ArticleItem"
import PageNotFound from "../components/PageNotFound"
import Col from "../components/shared/Col"
import MainTitle from "../components/shared/MainTitle"
import Row from "../components/shared/Row"
import { actFetchTagBySlugAsync } from "../store/tags/actions"
import { actFetchPostsAsync } from "../store/posts/actions"
import { usePostsPaging } from '../hooks/usePostsPaging';
import LoadingSearch from "../components/LoadingSearch"


export default function PostTag() {
  const params = useParams();
  const dispatch = useDispatch();
  const slug = params.slug;
  const [tag, setTag] = useState(null);
 
  const [loadingStatus, setLoadingStatus] = useState('loading'); 
  const {
    posts,
    totalElements,
    renderButtonLoadmore
  } = usePostsPaging({
    extraParams: {
      tags: tag ? tag.id : null
    },
    actionAsync: actFetchPostsAsync
  })
 
  useEffect(() => {
    setLoadingStatus('loading');
    dispatch(actFetchTagBySlugAsync({slug}))
      .then(res => {
          if (res.ok) {
          console.log("res in PostTag", res)
          setTag(res.tag)
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
    <div className="articles-list section bg-white-blue">
      <div className="tcl-container">
        
        <MainTitle isSearch={true}>Có {totalElements} kết quả tìm kiếm cho thẻ #{tag?.name}</MainTitle>
    
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
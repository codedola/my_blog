import "../assets/css/post-detail.css";
import { useEffect, useState } from 'react';
import Container from '../components/shared/Container'
import PageNotFound from '../components/PageNotFound'
import PostDetailHead from "../components/PostDetail/PostDetailHead"
import PostDetailContent from "../components/PostDetail/PostDetailContent"
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar"
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actResetDataComment } from '../store/comments/actions';
import { actFetchPostDetailAsync } from '../store/posts/actions';
import LoadingPage from '../components/LoadingPage';

function PostDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const slug = params.slug;
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    return () => {
      dispatch(actResetDataComment())
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(actFetchPostDetailAsync({ slug }))
      .then(res => {
        if (res.ok) {
          setStatus('success')
        } else {
          setStatus('error')
        }
      })
  }, [slug, dispatch])

  if (status === 'error') {
    return (
      <Container>
        <PageNotFound />
      </Container>
    )
  }

  return (
    <>
      <main className="post-detail">
        <div className="spacing" />
        <PostDetailHead />

        <div className="spacing" />

        <div className="post-detail__fluid">
          <Container>
            <div className="post-detail__wrapper">
              <PostDetailContent />

              <PostDetailSidebar/>
            </div>
          </Container>
        </div>
      </main>
      <LoadingPage loading={ status === 'loading' ? true : false }/>
    </>
    

  )
}

export default PostDetail
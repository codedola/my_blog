import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ArticlesLatest from '../components/ArticlesLatest';
import ArticlesPopular from '../components/ArticlesPopular';
import ArticlesList from '../components/ArticlesList';

import { 
  actFetchLatestPostsAsync, 
  actFetchPopularPostsAsync, 
  actFetchPostsAsync
} from '../store/posts/actions';

export default function Homepage() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actFetchLatestPostsAsync());
    dispatch(actFetchPopularPostsAsync());
    dispatch(actFetchPostsAsync());
  }, [dispatch])

  return (
    <>
      <ArticlesLatest />
      <ArticlesPopular />
      <ArticlesList />
    </>
  )
}
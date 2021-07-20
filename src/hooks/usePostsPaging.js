import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { actFetchPostsAsync } from "../store/posts/actions";
import Button from "../components/shared/Button"

export function usePostsPaging({
  actionAsync = actFetchPostsAsync,
  selectorFn = state => state.Posts.articlesPaging,
  extraParams = {}
} = {}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const articlesPaging = useSelector(selectorFn)
  const posts = articlesPaging.list;
  const page = articlesPaging.page;
  const totalPages = articlesPaging.totalPages;
  const totalElements = articlesPaging.total;
  const hasMoreItems = page < totalPages;

  function handleLoadMore() {
    if (loading) {
      return;
    }

    setLoading(true);
    dispatch(
      actionAsync({
        page: page + 1,
        ...extraParams
      })
    ).finally(() => {
      setLoading(false);
    })
  }

  function renderButtonLoadmore() {
    if (!hasMoreItems) {
      return null;
    }

    return (
      <div className="text-center">
        <Button 
          size="large" 
          variant="primary"
          loading={loading}
          disabled={loading}
          onClick={handleLoadMore}
        >Tải thêm</Button>
      </div>
    )
  }

  return {
    posts,
    totalElements,
    renderButtonLoadmore
  }
}
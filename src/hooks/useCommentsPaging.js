
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { actFetchCommentsAsync } from "../store/comments/actions";
import Button from "../components/shared/Button"

export function useCommentsPaging({
  actionAsync = actFetchCommentsAsync,
  selectorFn = state => state.Comments.commentsParentPaging,
  extraParams = {},
  styleBtn = {}
} = {}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const commentsPaging = useSelector(selectorFn);
  //
  const comments = commentsPaging.list;
  const page = commentsPaging.page;
  const totalPages = commentsPaging.totalPages;
  const totalElements = commentsPaging.total;
  const hasMoreItems = page < totalPages;
  // page = 0, totalPages = 0 -> 0 < 0 = false

  function handleLoadMore(evt) {
    evt.preventDefault()
    if (loading) {
      return;
    }

    setLoading(true);
    dispatch(
      actionAsync({
        page: page + 1,
        ...extraParams // postId, parentId
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
          // size="large" 
          styleBtn = {styleBtn}
          variant="primary"
          loading={loading}
          disabled={loading}
          onClick={handleLoadMore}
        >Tải thêm</Button>
      </div>
    )
  }

  return {
    loading,
    comments,
    hasMoreItems,
    totalElements,
    handleLoadMore,
    renderButtonLoadmore
  }
}
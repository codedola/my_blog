import { CommentService } from "../../services/comments"

export const ACT_INIT_PAGING_OBJ_COMMENT = 'ACT_INIT_PAGING_OBJ_COMMENT'
export const ACT_FETCH_COMMENTS_PARENT = 'ACT_FETCH_COMMENTS_PARENT'
export const ACT_FETCH_COMMENTS_CHILD = 'ACT_FETCH_COMMENTS_CHILD'
export const ACT_RESET_DATA_COMMENT = 'ACT_RESET_DATA_COMMENT'
export const ACT_POST_CHILD_COMMENT = 'ACT_POST_CHILD_COMMENT'
export const ACT_POST_PARENT_COMMENT = 'ACT_POST_PARENT_COMMENT'

export function actPostComment(newComment) {
  const parentId = newComment.parent
  return {
    type: parentId === 0 ? ACT_POST_PARENT_COMMENT : ACT_POST_CHILD_COMMENT,
    payload: {
      newComment
    }
  }
}

export function actResetDataComment() {
  return { type: ACT_RESET_DATA_COMMENT }
}

export function actFetchComments({
  comments,
  total,
  page,
  totalPages,
  per_page,
  postId,
  parentId
}) {
  return {
    type: parentId === 0 ? ACT_FETCH_COMMENTS_PARENT : ACT_FETCH_COMMENTS_CHILD,
    payload: {
      comments,
      total,
      page,
      per_page,
      totalPages,
      postId,
      parentId
    }
  }
}

export function actInitPagingObjComment({ comments }) {
  return {
    type: ACT_INIT_PAGING_OBJ_COMMENT,
    payload: {
      comments
    }
  }
}

export function actFetchCommentsAsync({
  page = 1,
  per_page = 4,
  postId,
  parentId = 0,
  ...restParams
}) {
  return async dispatch => {
    try {
      if (!postId) {
        return
      }

      const response = await CommentService.getList({
        page,
        per_page,
        postId,
        parentId,
        ...restParams
      });

      const comments = response.data;
      const headers = response.headers;
      const total = Number(headers['x-wp-total']);
      const totalPages = Number(headers['x-wp-totalpages']);

      dispatch(actFetchComments({
        comments,
        total,
        page,
        per_page,
        totalPages,
        postId,
        parentId
      }))

      if (parentId === 0) {
        dispatch(actInitPagingObjComment({
          comments
        }))
      }

    } catch(err) {

    }
  }
}

export function actPostCommentAsync({
  authorId,
  content,
  postId,
  parentId
}) {
  return async dispatch => {
    try {
      if (!content || !authorId || !postId || parentId < 0) {
        throw new Error('Invalid params')
      }

      const response = await CommentService.postComment({
        authorId,
        content,
        postId,
        parentId
      })

      const newComment = response.data
      dispatch(actPostComment(newComment))

      return { ok: true }
    } catch(err) {
      return { ok: false }
    }
  }
}
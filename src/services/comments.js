import { api } from './api';

export const CommentService = {
  getList({ 
    page = 1, 
    per_page = 3,
    postId,
    parentId,
    lang,
    ...restParams
  } = {}) {
    return api.call().get('/wp/v2/comments', {
      params: {
        page,
        per_page,
        lang,
        post: postId,
        parent: parentId,
        order: 'asc',
        ...restParams
      }
    })
  },
  postComment({
    authorId,
    content,
    postId,
    parentId
  }) {
    return api.callWithToken().post('/wp/v2/comments', {
      author: authorId,
      content: content,
      post: postId,
      parent: parentId
    })
  }
}

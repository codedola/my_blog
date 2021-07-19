import { PostService } from "../../services/posts";
import { actFetchCommentsAsync } from '../comments/actions';

export const ACT_FETCH_LATEST_POSTS = 'ACT_FETCH_LATEST_POSTS';
export const ACT_FETCH_POPULAR_POSTS = 'ACT_FETCH_POPULAR_POSTS';
export const ACT_FETCH_POSTS = 'ACT_FETCH_POSTS';
export const ACT_FETCH_POST_DETAIL = 'ACT_FETCH_POST_DETAIL';

/**
 * ACTION CREATORS
 */
export function actFetchLatestPosts({ posts = [] }) {
  return {
    type: ACT_FETCH_LATEST_POSTS,
    payload: {
      posts
    }
  }
}
export function actFetchPopularPosts({ posts = [] }) {
  return {
    type: ACT_FETCH_POPULAR_POSTS,
    payload: {
      posts
    }
  }
}
export function actFetchPosts({
  posts = [],
  total,
  page,
  totalPages
}) {
  return {
    type: ACT_FETCH_POSTS,
    payload: {
      posts,
      page,
      total,
      totalPages
    }
  }
}
export function actFetchPostDetail({ post }) {
  return {
    type: ACT_FETCH_POST_DETAIL,
    payload: { post }
  }
}

/**
 * ACTION ASYNC
 */
export const actFetchLatestPostsAsync = () => {
  return async dispatch => {
    try {
      const response = await PostService.getLatest()
      const posts = response.data;
      
      dispatch(actFetchLatestPosts({
        posts
      }))

    } catch(e) {
      
    }
  }
  // return dispatch => {
  //   PostService
  //     .getLatest()
  //     .then(response => {
  //       const posts = response.data;
      
  //       dispatch(actFetchLatestPosts({
  //         posts
  //       }))
  //     })
  //     .catch(err => {

  //     })
  // }
}
export const actFetchPopularPostsAsync = () => {
  return async dispatch => {
    try {
      const response = await PostService.getPopular();
      const posts = response.data;
      
      dispatch(actFetchPopularPosts({
        posts
      }))

    } catch(e) {

    }
  }
}
export const actFetchPostsAsync = ({
  page = 1,
  per_page = 2,
  ...restParams
} = {}) => {
  return async dispatch => {
    try {
      const response = await PostService.getList({
        page,
        per_page,
        ...restParams
      });

      const posts = response.data;
      const headers = response.headers;
      const total = Number(headers['x-wp-total']);
      const totalPages = Number(headers['x-wp-totalpages']);
      
      dispatch(actFetchPosts({
        posts,
        total,
        page,
        totalPages
      }))

    } catch(e) {

    }
  }
}
export function actFetchPostDetailAsync({ slug }) {
  return async (dispatch) => {
    try {
      const response = await PostService.getPostBySlug(slug);
      const post = response.data[0];
      
      if (!post) {
        throw new Error('No post');
      }
      const postId = post.id;
      // const userId = post.author;

      dispatch(actFetchPostDetail({ post }));
      await dispatch(actFetchCommentsAsync({
        postId,
        parentId: 0
      }));
      
      return {
        ok: true,
        post,
      }

    } catch(e) {
      return {
        ok: false,
        error: e
      }
    }
  }
}


export function actFetchPostsRelatedAsync({page = 1, per_page = 3, author, exclude} = {}) {
  return async function () {
    try {
      const response = await PostService.getList({ page, per_page, author, exclude });
      if (response.status === 200) {
        return {
          ok: true,
          posts: response.data
        }
      } 
    } catch (error) {
      return {
        ok: false
      }
    }
  }
}
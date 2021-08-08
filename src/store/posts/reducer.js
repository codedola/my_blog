import { ACT_POST_CHILD_COMMENT, ACT_POST_PARENT_COMMENT } from "../comments/actions";
import { 
  ACT_FETCH_POSTS,
  ACT_FETCH_LATEST_POSTS,
  ACT_FETCH_POPULAR_POSTS,
  ACT_FETCH_POST_DETAIL,
  ACT_FETCH_POST_USER
} from "./actions";

const initPostsState = {
  articlesLatest: [],
  articlesPopular: [],
  // articlesList: [],
  articlesPaging: {
    list: [],
    page: 1,
    per_page: 2,
    total: 0
  },
  postDetail: null,
  postUser: { }
}

export function genValueUserPost() {
  return {
    list: [],
    page: 1,
    per_page: 4,
    total: 0
  }
}

export function genKeyUserPost(id) {
  return `userpost-${id}`
}
function reducer(postsState = initPostsState, action) {
  switch (action.type) {
    case ACT_POST_CHILD_COMMENT:
    case ACT_POST_PARENT_COMMENT:
      return {
        ...postsState,
        postDetail: {
          ...postsState.postDetail,
          comment_count: postsState.postDetail.comment_count + 1
        }
      }
    case ACT_FETCH_POSTS:
      return {
        ...postsState,
        articlesPaging: {
          ...postsState.articlesPaging,
          list: action.payload.page === 1 
            ? action.payload.posts 
            : [
              ...postsState.articlesPaging.list,
              ...action.payload.posts
            ],
          total: action.payload.total,
          page: action.payload.page,
          totalPages: action.payload.totalPages
        }
      }
    case ACT_FETCH_LATEST_POSTS:
      return {
        ...postsState,
        articlesLatest: action.payload.posts
      }
    case ACT_FETCH_POPULAR_POSTS:
      return {
        ...postsState,
        articlesPopular: action.payload.posts
      }
    case ACT_FETCH_POST_DETAIL:
      return {
        ...postsState,
        postDetail: action.payload.post
      }
    case ACT_FETCH_POST_USER: {
      const { posts, page, total, totalPages, author } = action.payload;
      console.log("action post user", posts, page, total, totalPages)
      const keyUserPost = genKeyUserPost(author);
      if (postsState.postUser[keyUserPost]) {
        return {
          ...postsState,
          postUser: {
            ...postsState.postUser,
            [keyUserPost]: {
              ...postsState.postUser[keyUserPost],
              list: page === 1 
                ? posts 
                : [
                  ...postsState.postUser[keyUserPost].list,
                  ...posts
                ],
              total,
              page,
              totalPages
            }
              
          }
        }
      } else {
        postsState.postUser[keyUserPost] = genValueUserPost();
        return {
          ...postsState,
          postUser: {
              ...postsState.postUser,
              [keyUserPost]: {
                ...postsState.postUser[keyUserPost],
                list: page === 1 
                  ? posts 
                  : [
                    ...postsState.postUser[keyUserPost].list,
                    ...posts
                  ],
                total,
                page,
                totalPages
              }
                
            }
        }
      }
    }
    default:
      return postsState;
  }
}

export default reducer;
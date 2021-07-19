import { 
  ACT_FETCH_COMMENTS_PARENT,
  ACT_FETCH_COMMENTS_CHILD,
  ACT_INIT_PAGING_OBJ_COMMENT,
  ACT_RESET_DATA_COMMENT,
  ACT_POST_PARENT_COMMENT,
  ACT_POST_CHILD_COMMENT
} from './actions';

export function genObjPaging({ page = 1 } = {}) {
  return {
    list: [],
    page,
    per_page: 2,
    total: 0,
    exclude: []
  }
}

export function genKeyChildPaging(parentId) {
  return `cmt-parent-${parentId}`
}

const initState = {
  commentsParentPaging: genObjPaging(),
  commentsChildPaging: { }
}

// commentsParentPaging: {
//   list: ...commentsParentPaging.list
// }

// commentsChildPaging: {
//   [key]: {
//     list: ...commentsChildPaging[key].list
//   }
// }


function commentsReducer(commentsState = initState, action) {
  switch (action.type) {
    case ACT_POST_PARENT_COMMENT:
      return {
        ...commentsState,
        commentsParentPaging: {
          ...commentsState.commentsParentPaging,
          total: commentsState.commentsParentPaging.total + 1,
          exclude: [
            ...commentsState.commentsParentPaging.exclude,
            action.payload.newComment.id
          ],
          list: [
            ...commentsState.commentsParentPaging.list,
            action.payload.newComment
          ]
        }
      }
    case ACT_POST_CHILD_COMMENT:
      const parentCmtKey = genKeyChildPaging(action.payload.newComment.parent)
      return {
        ...commentsState,
        commentsChildPaging: {
          ...commentsState.commentsChildPaging,
          [parentCmtKey]: {
            ...commentsState.commentsChildPaging[parentCmtKey],
            total: commentsState.commentsChildPaging[parentCmtKey].total + 1,
            exclude: [
              ...commentsState.commentsChildPaging[parentCmtKey].exclude,
              action.payload.newComment.id
            ],
            list: [
              ...commentsState.commentsChildPaging[parentCmtKey].list,
              action.payload.newComment
            ]
          }
        },
        commentsParentPaging: {
          ...commentsState.commentsParentPaging,
          list: commentsState.commentsParentPaging.list.map(parentCmt => {
            if (parentCmt.id === action.payload.newComment.parent) {
              return {
                ...parentCmt,
                comment_reply_count: parentCmt.comment_reply_count + 1
              }
            }
            return parentCmt
          })
        }
      }
    case ACT_RESET_DATA_COMMENT:
      return {
        ...commentsState,
        commentsParentPaging: genObjPaging(),
        commentsChildPaging: { }
      }
    case ACT_FETCH_COMMENTS_PARENT:
      return {
        ...commentsState,
        commentsParentPaging: {
          ...commentsState.commentsParentPaging,
          list: action.payload.page === 1 
            ? action.payload.comments 
            : [
              ...commentsState.commentsParentPaging.list,
              ...action.payload.comments
            ],
          total: action.payload.total,
          page: action.payload.page,
          per_page: action.payload.per_page,
          totalPages: action.payload.totalPages
        }
      }
    case ACT_FETCH_COMMENTS_CHILD:
      const genKey = genKeyChildPaging(action.payload.parentId)

      if (!commentsState.commentsChildPaging[genKey]) {
        return commentsState
      }

      return {
        ...commentsState,
        commentsChildPaging: {
          ...commentsState.commentsChildPaging,
          [genKey]: {
            ...commentsState.commentsChildPaging[genKey],
            list: action.payload.page === 1 
              ? action.payload.comments 
              : [
                ...commentsState.commentsChildPaging[genKey].list,
                ...action.payload.comments
              ],
            total: action.payload.total,
            page: action.payload.page,
            per_page: action.payload.per_page,
            totalPages: action.payload.totalPages
          }
        }
      }
    case ACT_INIT_PAGING_OBJ_COMMENT:
      const initCommentsChildPaging = {}
      action.payload.comments
        .forEach(cmtParent => {
          const genKey = genKeyChildPaging(cmtParent.id)
          const genValue = genObjPaging({ page: 0 })
          initCommentsChildPaging[genKey] = genValue
        })
      return {
        ...commentsState,
        commentsChildPaging: {
          ...commentsState.commentsChildPaging,
          ...initCommentsChildPaging
        }
      };
    default:
      return commentsState
  }
}

export default commentsReducer
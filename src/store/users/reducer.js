import { ACT_GET_LIST_USER } from "./actions"
const initUsersState = {
  listUsers: {
    list: [],
    page: 1,
    totalPages: 1,
    total: 0
  }
}

function reducer(usersState = initUsersState, action) {
  switch (action.type) {
    case ACT_GET_LIST_USER: {
      const { users, page, total, totalPages } = action.payload

      return {
        ...usersState,
        listUsers: {
          ...usersState.listUsers,
          list: page === 1 ? users : [...usersState.listUsers.list, ...users],
          totalPages,
          total
        }
       
      }
    }
      
    default: {
      return usersState
    }
    
  }
 
}

export default reducer;
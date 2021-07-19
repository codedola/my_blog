import { TOKEN_NAME } from '../../constants'
import { ACT_SAVE_TOKEN, ACT_SAVE_CURRENT_USER, ACT_LOGOUT } from './actions'

const initAuthState = {
  token: '',
  currentUser: null
}

function reducer(authState = initAuthState, action) {
  switch (action.type) {
    case ACT_LOGOUT:
      localStorage.removeItem(TOKEN_NAME, '')
      return {
        ...authState,
        token: '',
        currentUser: null
      }
    case ACT_SAVE_TOKEN:
      localStorage.setItem(TOKEN_NAME, action.payload.token)
      return {
        ...authState,
        token: action.payload.token
      }
    case ACT_SAVE_CURRENT_USER:
      return {
        ...authState,
        currentUser: action.payload.user
      }
    default:
      return authState;
  }
}

export default reducer;
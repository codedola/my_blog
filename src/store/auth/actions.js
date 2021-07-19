import { TOKEN_NAME } from "../../constants"
import { UserService } from "../../services/users"

export const ACT_LOGOUT = 'ACT_LOGOUT'
export const ACT_SAVE_TOKEN = 'ACT_SAVE_TOKEN'
export const ACT_SAVE_CURRENT_USER = 'ACT_SAVE_CURRENT_USER'

export function actLogout() {
  return {
    type: ACT_LOGOUT
  }
}

export function actSaveToken(token) {
  return {
    type: ACT_SAVE_TOKEN,
    payload: {
      token
    }
  }
}

export function actSaveCurrentUser(user) {
  return {
    type: ACT_SAVE_CURRENT_USER,
    payload: {
      user
    }
  }
}

export function actCheckLoginAsync() {
  return async dispatch => {
    try {
      const token = localStorage.getItem(TOKEN_NAME)
      
      if (token) {
        dispatch(actSaveToken(token))
        dispatch(actFetchMeAsync())
      }

    } catch(err) { }
  }
}


export function actFetchMeAsync() {
  return async dispatch => {
    try {
      const response = await UserService.me()
      dispatch(actSaveCurrentUser(response.data))
      return {
        ok: true
      }
    } catch(err) {
      dispatch(actLogout())
      return {
        ok: false
      }
    }
  }
}

export function actLoginAsync({
  username,
  password
}) {
  return async dispatch => {
    try {

      const response = await UserService.login({
        username,
        password
      });
     
      const token = response.data.token;
     
      if (token) {
        dispatch(actSaveToken(token))
        await dispatch(actFetchMeAsync())
      }
      return {
        ok: true,
        message: "Đăng Nhập Thành Công ^^"
      }
    } catch (error) {
      return {
        ok: false,
        message: error?.response?.data?.message || "Đăng nhập thất bại"
      }
    }
  }
}

export function actRegisterAsync({email, username, password, nickname}) {
  return async function () {
    try {
      const response = await UserService.register({ email, username, password, nickname });
      
      if (response.status === 201) {
        return {
          ok: true,
          message: "Tạo Tài Khoản Thành Công ^^"
        }
      } else {
        return {
          ok: false,
          message: "Tạo Tài Khoản Thất Bại :("
        }
      }
    } catch (error) {
      return {
        ok: false,
        message: error?.response?.data?.message || "Tạo Tài Khoản Thất Bại :("
      }
    }
  }
}
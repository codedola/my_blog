
import { api } from './api';

export const UserService = {
  me() {
    return api.callWithToken().get('/wp/v2/users/me');
  },
  login({
    username,
    password
  }) {
    return api.call().post('/jwt-auth/v1/token', {
      username,
      password
    })
  },
  register({ email, username, password, nickname }) {
    return api.call().post("/wp/v2/users/register", {
      email,
      username,
      password,
      nickname,
    })
  },
  changePassword: ({
    currentPassword,
    newPassword,
    confirmNewPassword
  }) => {
    return api
      .callWithToken()
      .put('/wp/v2/users/password', {
        password: currentPassword,
        new_password: newPassword,
        confirm_new_password: confirmNewPassword
      })
  },
  UploadProfile(
    { description, media_id = 127, nickname, first_name, last_name, ...restParams }
  ) {
    return api.callWithToken().put("/wp/v2/users/me", {
      description,
      simple_local_avatar: {
          media_id
      },
      nickname,
      first_name,
        last_name,
      ...restParams
    })
  },
  GetListUsers({page = 1, per_page = 20, ...restParams} = {}) {
    return api.callWithToken().get("/wp/v2/users", {
      params: {
        page,
        per_page,
        ...restParams
      }
    })
  }

}

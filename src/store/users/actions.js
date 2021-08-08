import { UserService } from "../../services/users";
import { MediaServices } from "../../services/media";
import { actSaveCurrentUser } from "../auth/actions";

export const ACT_GET_LIST_USER = "ACT_GET_LIST_USER";
export function actGetListUsers({users, page, total, totalPages}) {
  return {
    type: ACT_GET_LIST_USER,
    payload: {
      users, page, total, totalPages
    }
  }
}

export function actChangePasswordAsync({
  currentPassword,
  newPassword,
  confirmNewPassword
}) {
  return async dispatch => {
    try {
      const response = await UserService.changePassword({
        currentPassword,
        newPassword,
        confirmNewPassword
      });
      console.log("response changepassword", response)
      if (response?.data?.updated || response?.status === 200) {   
        return {
          ok: true,
          message: "Thay đổi mật khẩu thành công"
        }
      }
    } catch(err) {
      return {
        ok: false,
        message: err?.response?.data?.message || "Thay đổi mật khẩu thất bại"
      }
    }
  }
}

export function actUploadUserProfileAsync({
  file, media_id, description, nickname, first_name, last_name
}) {
  return async function (dispatch, getState) {
    try {
      let resProfileData = null;
      
      // file and media_id = null
      if ((!file || file === null) && (!media_id || media_id === null)) {
        let media_id = getState().Auth
          .currentUser?.simple_local_avatar?.media_id;
        
        media_id = media_id ? media_id : 127;
        const resProfile = await UserService.UploadProfile({
          description, nickname, first_name, last_name, media_id
        })
        resProfileData = resProfile;
      } else {

        // file !== null
        if (file) {
          const formMedia = new FormData();
          formMedia.append('file', file);

          const resMedia = await MediaServices.UploadMedia(formMedia);

          if (resMedia.status === 201) {
            const media_id = resMedia.data.id;
            
            const resProfile = await UserService.UploadProfile({
              description, nickname, first_name, last_name, media_id
            })

            resProfileData = resProfile;
          }
        }

        // Media_id !== null
        if (media_id) {
           const resProfile = await UserService.UploadProfile({
              description, nickname, first_name, last_name, media_id
            })

            resProfileData = resProfile;
        }
      }

      // finally

      if (resProfileData.status === 200) {
        dispatch(actSaveCurrentUser(resProfileData.data))
        return {
          ok: true
        }
      } else {
        return {
          ok: false
        }
      }
    } catch (error) {
      return {
        ok: false,
        error
      }
    }
  }
}

export function actGetListUsersAsync ({page = 1, ...restParam} = {}) {
  return async function (dispatch, getState) {
    try {
      //const excludeID = getState().Auth.currentUser?.id; //exclude:excludeID
      const response = await UserService.GetListUsers({page, ...restParam});

      if (response.status === 200) {
        const headers = response.headers;
        const total = Number(headers["x-wp-total"]);
        const totalPages =  Number(headers["x-wp-totalpages"]);
        const users = response.data;
        dispatch(actGetListUsers({ users, page, total, totalPages }))
        return {
          ok: true,
        }
      } else {
        return {
          ok: false,
          message: "You dont have permission admin"
        }
      }
    } catch (error) {
      return {
        ok: false,
        error
      }
    }
  }
}


export function actGetInfoUserByIDAsync(id) {
  return async function (dispatch) {
    try {
      const response = await UserService.GetListUsers({ include: id });
      if (response.status === 200) {
        return {
          ok: true,
          data: response.data
        }
      } else {
        return {
          ok: false
        }
      }
    } catch (error) {
      return {
          ok: false
        }
    }
  }
}

export function actCreateNewUserAsync({
  username,
  first_name,
  last_name,
  email,
  password,
  description,
  media_id,
  ...restParams
}) {
  return async function (dispatch) {
    try {
      let responseNewUser = null

      if (media_id !== null && typeof media_id === "object") {
          const formMedia = new FormData();
          formMedia.append('file', media_id);

          const resMedia = await MediaServices.UploadMedia(formMedia);

          if (resMedia.status === 201) {
            media_id = resMedia.data.id;
            
            responseNewUser = await UserService.UploadProfile({
              username, first_name, last_name, email, password, description, media_id, ...restParams
            })

          }
      }
      
      // media_id = number -> ok | media_id = null -> ok
      responseNewUser = await UserService.CreateNewUser({
        username, first_name, last_name, email, password, description, media_id, ...restParams
      })

     

      console.log("reponse create new user", responseNewUser)
      if (responseNewUser.status === 201 || responseNewUser.data) {
        // const newUser = responseNewUser.data;
        await dispatch(actGetListUsersAsync())
        return {
          ok: true,
          message: "Tạo thành công"
        }
      } else {
        return {
          ok: false,
         message: "Tạo thất bại"
        }
          
      }
     
    } catch (error) {
      return {
        ok: false,
        error
      }
    }
  }
}
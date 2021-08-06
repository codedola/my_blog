import { UserService } from "../../services/users";
import { MediaServices } from "../../services/media";
import { actSaveCurrentUser } from "../auth/actions";

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
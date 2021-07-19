import { UserService } from "../../services/users";

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
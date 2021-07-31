import Notification from "./Notification";

export default function CheckImgBeforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
      Notification({
          type: "error", placement: "topRight",
          message: "Có lỗi xảy ra", description: "Bạn chỉ được upload JPG/PNG file!"
      })
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
     Notification({
          type: "error", placement: "topRight",
          message: "Có lỗi xảy ra", description: "Hình ảnh phải nhỏ hơn 2MB!"
      })
  }
  return isJpgOrPng && isLt2M;
}
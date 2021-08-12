import Notification from "./Notification";

export default function CheckImgBeforeUpload(file, typeFile="MB") {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      Notification({
          type: "error", placement: "topRight",
          message: "Có lỗi xảy ra", description: "Bạn chỉ được upload JPG/PNG file!"
      })
    }
    
    if (typeFile === "MB") {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            Notification({
                type: "error", placement: "topRight",
                message: "Có lỗi xảy ra", description: "Hình ảnh phải nhỏ hơn 2MB!"
            })
        }
        return isJpgOrPng && isLt2M;
    }

    if (typeFile === "KB") {
        const isLt1K = file.size / 1024 / 1024 < 0.5;
        if (!isLt1K) {
            Notification({
                type: "error", placement: "topRight",
                message: "Có lỗi xảy ra", description: "Hình ảnh phải nhỏ hơn 500KB!"
            })
        }
        return isJpgOrPng && isLt1K;
    }
    
    
}
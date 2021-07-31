import { api } from "./api";


export const MediaServices = {
    UploadMedia(formMedia) {
        return api.callWithToken().post("/wp/v2/media", formMedia);
    }
}
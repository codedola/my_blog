import { api } from "./api";


export const MediaServices = {
    UploadMedia(formMedia) {
        return api.callWithToken().post("/wp/v2/media", formMedia);
    },
    GetList({page = 1, per_page = 100, ...restParams } = {}) {
        return api.call().get("/wp/v2/media", {
            params: {
                page,
                per_page,
                ...restParams
            }
        })
    }
}
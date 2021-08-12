import {MediaServices } from "../../services/media"

const ACT_GET_LIST_MEDIA = "ACT_GET_LIST_MEDIA";


export function actGetListMedia(list) {
    return {
        type: ACT_GET_LIST_MEDIA,
        payload: {
            list
        }
    }
}


export function actGetListMediaAsync() {
    return async function (dispatch) {
        try {
            const response = await MediaServices.GetList();
            if (response.status === 200) {
                return {
                    ok: true,
                    list: response.data
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





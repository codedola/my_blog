import { api } from "./api";
import { getLang } from '../store/app/reducer';

export const TagService = {
    getList({ page = 1, per_page = 100, lang = getLang(), ...restParams } = {}) {
        return api.call().get("/wp/v2/tags", {
            params: {
                page,
                per_page,
                lang,
                ...restParams
            }
        })
    },
    getTagBySlug({slug, lang = getLang(), ...restParams} = {}) {
        return api.call().get("/wp/v2/tags", {
            params: {
                slug,
                lang,
                ...restParams
            }
        })
    }
}
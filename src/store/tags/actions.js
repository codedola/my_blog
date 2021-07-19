
import { TagService } from "../../services/tags"
import {actFetchPostsAsync } from "../posts/actions"

export const ACT_FETCH_TAGS = "ACT_FETCH_TAGS";

// Action Creator
function actFetchTags(list) {
    return {
        type: ACT_FETCH_TAGS,
        payload: {
            list
        }
    }
}

// Action Async Function


export function actFetchTagsAsync({
    ...restParam
} = {}) {
    return async function (dispatch) {
        try {
            const response = await TagService.getList({restParam});

            if (response.status === 200) {
                const list = response.data;
                dispatch(actFetchTags(list))
                return {
                    ok: true
                }
            }
        } catch (error) {
            return {
                ok: false
            }
        }
    }
}

export function actFetchTagBySlugAsync({
    slug
} = {}) {
    return async function (dispatch) {
        try {
            const resSlugTag = await TagService.getTagBySlug({ slug });
            
            if (resSlugTag.status === 200) {
                const tag = resSlugTag.data[0]
                await dispatch(actFetchPostsAsync({
                    page: 1,
                    per_page: 2,
                    tags: tag.id
                }))
                return {
                    ok: true,
                    tag: tag
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
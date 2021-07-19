
import {  ACT_FETCH_TAGS} from "./actions";
const initalState = {
    listTags: {}
}

export function genKeyTagID(tagId) {
    return `tag-${tagId}`;
}

export default function TagReducer(tagsState = initalState, action) {
    switch (action.type) {
        case ACT_FETCH_TAGS: {
            const listHashTags = action.payload.list?.reduce(function (accTag, currTag) {
                const { id, name, slug} = currTag;
                const tagKey = genKeyTagID(id);
                const tagValue = { id, name, slug };
                return {
                    ...accTag,
                    [tagKey]: tagValue
                }
            }, {})
            return {
                ...tagsState,
               listTags: listHashTags
            };
        }
        default: {
            return tagsState;
        }
            
    }
}
import { getLang } from '../store/app/reducer';
import { api } from './api';

export const PostService = {
  getList({ 
    page = 1, 
    per_page = 3,
    ...restParams // { search: '' }
  } = {}) {
    return api.call().get('/wp/v2/posts', {
      params: {
        page,
        per_page,
        lang: getLang(),
        ...restParams
      }
    })
  },
  getLatest() {
    return PostService.getList();
  },
  getPopular() {
    return PostService.getList({
      orderby: "post_views"
    });
  },
  getListByCategories({
    page,
    per_page,
    categories,
    ...restParams
  }) {
    return PostService.getList({
      page,
      per_page,
      categories,
      ...restParams
    })
  },
  getPostBySlug: (slug) => {
    return PostService.getList({
      slug
    })
  },
}

import { getLang } from '../store/app/reducer';
import { api } from './api';

export const CategoriesService = {
  getList({ 
    page = 1, 
    per_page = 3,
    ...restParams
  } = {}) {
    return api.call().get('/wp/v2/categories', {
      params: {
        page,
        per_page,
        lang: getLang(),
        ...restParams
      }
    })
  },
  getCategoryBySlug(slug) {
    return CategoriesService.getList({
      slug: slug
    })
  }
}

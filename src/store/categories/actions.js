import { CategoriesService } from "../../services/categories";
import { actFetchPostsAsync } from "../posts/actions";

export const ACT_FETCH_CATEGORIES = 'ACT_FETCH_CATEGORIES';

export function actFetchCategories({
  categories = []
}) {
  return {
    type: ACT_FETCH_CATEGORIES,
    payload: {
      categories
    }
  }
}

export const actFetchCategoriesAsync = ({
  page = 1,
  per_page = 100
} = {}) => {
  return async dispatch => {
    try {
      const response = await CategoriesService.getList({
        page,
        per_page
      });

      const categories = response.data;

      dispatch(actFetchCategories({
        categories
      }))

    } catch(e) {

    }
  }
}

export const actFetchCategoryAsync = (slug) => {
  return async (dispatch) => {
    try {
      const response = await CategoriesService.getCategoryBySlug(slug);
       
      if (response.data && response.data.length) {
        const category = response.data[0];

        await dispatch(actFetchPostsAsync({
          page: 1,
          per_page: 2,
          categories: category.id
        }))

        return {
          ok: true,
          category
        }
      }
      
      return {
        ok: false,
        error: 'Slug invalid'
      }

    } catch(err) {
      return {
        ok: false,
        error: err
      }
    }
  }
}
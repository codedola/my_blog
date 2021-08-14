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
  getLatest({ per_page = 4, ...restParams } = {}) {
    return PostService.getList({ per_page, ...restParams });
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
  // Create New Post
  createNewPost({
    title, content, featured_media, categories = [], tags = [],
    status = "publish", lang = "vi", sticky = false, comment_status="open", ...restParams
  }) {
    return api.callWithToken().post("/wp/v2/posts", {
      title, content, featured_media, categories, tags,
      status, lang, sticky, comment_status, ...restParams
    })
  },
  // Edit Post
  EditPost({id, title, content, featured_media, categories, tags, ...restParams}) {
    return api.callWithToken().post(`/wp/v2/posts/${id}`, {
      title, content, featured_media, categories, tags, ...restParams
    })
  },
  // Delete Post
  DeletePost(id) {
    return api.callWithToken().delete(`/wp/v2/posts/${id}`, {
      force: false
    })
  }
}


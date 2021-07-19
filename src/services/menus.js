import { api } from './api';

export const MenusService = {
  getMenus(menuName = 'main-menu-vi') {
    return api.call().get('/menus/v1/menus/' + menuName)
  },
}

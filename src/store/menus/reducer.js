import { ACT_FETCH_MAIN_MENUS } from "./actions";

const initState = {
  mainMenus: [
    {
      id: 'default-1',
      title: 'Trang chủ',
      url: '/',
      childItems: []
    },
    {
      id: 'default-2',
      title: 'Front End',
      url: '/category/fe',
      childItems: []
    }
  ],
  footerMenus: []
}

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_MAIN_MENUS:
      return {
        ...state,
        mainMenus: action.payload.menus
      }
    default:
      return state
  }
}

export default reducer;
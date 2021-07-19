import { MenusService } from "../../services/menus"


// function handleMap5(menuItem) {
//   const data = {
//     id: menuItem.ID,
//     title: menuItem.title,
//     url: menuItem.url,
//     childItems: menuItem.child_items || []
//   }
  
//   data.childItems = [].map(handleMap5)

//   return data
// }

// function handleMap4(menuItem) {
//   const data = {
//     id: menuItem.ID,
//     title: menuItem.title,
//     url: menuItem.url,
//     childItems: menuItem.child_items || []
//   }

//   data.childItems = data.childItems.map(handleMap5)

//   return data
// }

// function handleMap3(menuItem) {
//   const data = {
//     id: menuItem.ID,
//     title: menuItem.title,
//     url: menuItem.url,
//     childItems: menuItem.child_items || []
//   }

//   data.childItems = data.childItems.map(handleMap4)

//   return data
// }

// function handleMap2(menuItem) {
//   const data = {
//     id: menuItem.ID,
//     title: menuItem.title,
//     url: menuItem.url,
//     childItems: menuItem.child_items || []
//   }

//   data.childItems = data.childItems.map(handleMap3)

//   return data
// }

function handleMapMenu(menuItem) {
  const data = {
    id: menuItem.ID,
    title: menuItem.title,
    url: menuItem.url,
    childItems: menuItem.child_items || []
  }

  data.childItems = data.childItems.map(handleMapMenu)

  return data
}

export const ACT_FETCH_MAIN_MENUS = 'ACT_FETCH_MAIN_MENUS';

export const actFetchMainMenus = (menus) => {
  return {
    type: ACT_FETCH_MAIN_MENUS,
    payload: {
      menus
    }
  }
}

export const actFetchMenusAsync = () => {
  return async (dispatch, getState) => {
    try {
      const lang = getState().App.lang
      const menuName = 'main-menu-' + lang
      const response = await MenusService.getMenus(menuName);
      
      let menusData = response.data.items;
      menusData = menusData.map(handleMapMenu)

      dispatch(actFetchMainMenus(menusData))

    } catch (err) {

    }
  }
}

/*
const menuArray = menusData.map(menuItem => {

  const data = {
    id: menuItem.ID,
    title: menuItem.title,
    url: menuItem.url,
    childItems: menuItem.child_items || []
  }

  data.childItems = data.childItems.map(menuItem => {

    const data = {
      id: menuItem.ID,
      title: menuItem.title,
      url: menuItem.url,
      childItems: menuItem.child_items || []
    }

    data.childItems = data.childItems.map(menuItem => {

      const data = {
        id: menuItem.ID,
        title: menuItem.title,
        url: menuItem.url,
        childItems: menuItem.child_items || []
      }

      data.childItems = data.childItems.map(menuItem => {

        const data = {
          id: menuItem.ID,
          title: menuItem.title,
          url: menuItem.url,
          childItems: menuItem.child_items || []
        }

        return data;

      })

      return data;

    })

    return data;

  })

  return data;
})
*/
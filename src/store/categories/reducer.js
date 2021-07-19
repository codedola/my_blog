import { 
  ACT_FETCH_CATEGORIES
} from "./actions";

const initCategoriesState = {
  hashCategoriesFromId: {}
}

// [
//   {
//     id: 9,
//     name: 'ABC'
//   },
//   {
//     id: 20,
//     name: 'DEF'
//   }
// ]
// -----
// {
//   'category-9': {
//     id: 9,
//     name: 'ABC'
//   },
//   'category-20': {
//     id: 20,
//     name: 'DEF'
//   }
// }

export function genHashCategoryKey(id) {
  return 'category-' + id;
}

function reducer(categoriesState = initCategoriesState, action) {
  switch (action.type) {
    case ACT_FETCH_CATEGORIES:
      let hashObj = {}
      action.payload.categories
        .forEach((categoryItem) => {
          const id = categoryItem.id;
          const name = categoryItem.name;
          const slug = categoryItem.slug;
          const key = genHashCategoryKey(id);
          const value = { id, name, slug }
          hashObj[key] = value
        })
      return {
        ...categoriesState,
        hashCategoriesFromId: hashObj
      }
    default:
      return categoriesState;
  }
}

export default reducer;
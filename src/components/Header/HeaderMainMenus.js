import cls from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function RenderSubMenu(listMenus, isRoot) {
  if (listMenus.length === 0) {
    return null;
  }

  return (
    <ul className={cls({
      'header-nav__lists': isRoot
    })}>
      {
        listMenus.map(menuItem => (
          <li key={menuItem.id}>
            {
              menuItem.url.startsWith('http') 
                ? <a href={menuItem.url} target="_blank" rel="noreferrer">{menuItem.title}</a> 
                : <Link to={menuItem.url}>{menuItem.title}</Link>
            }
            { RenderSubMenu(menuItem.childItems, false) }
          </li>
        ))
      }
    </ul>
  )
}

export default function HeaderMainMenus() {
  const mainMenus = useSelector(state => state.Menus.mainMenus)

  return RenderSubMenu(mainMenus, true)
}


/*

const data = [
  {
    id: 1,
    parent_id: 0
  },
  {
    id: 2,
    parent_id: 4
  },
  {
    id: 3,
    parent_id: 0
  },
  {
    id: 4,
    parent_id: 1
  },
  {
    id: 5,
    parent_id: 2
  },
  {
    id: 6,
    parent_id: 5
  }
]

const data = [
  {
    id: 1,
    parent_id: 0,
    child_items: [
      {
        id: 4,
        parent_id: 1,
        child_items: [
          {
            id: 2,
            parent_id: 4,
            child_items: [
              {
                id: 5,
                parent_id: 2,
                child_items: [
                  {
                    id: 6,
                    parent_id: 5
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    parent_id: 3,
    child_items: []
  }
]

*/
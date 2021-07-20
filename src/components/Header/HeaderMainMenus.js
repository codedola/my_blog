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

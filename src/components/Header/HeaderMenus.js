import HeaderMainMenus from "./HeaderMainMenus"
import { Link } from 'react-router-dom'
import { actLogout } from '../../store/auth/actions'
import { useSelector, useDispatch } from 'react-redux'
import { FlagFR, FlagUK, FlagVN } from '../../components/shared/AppIcon';
import { actChangeLange } from "../../store/app/actions";
import { useRouteMatch } from "react-router-dom"
import { Avatar } from "antd"
import createDefaultAvatar from "../../helpers/createDefaultAvatar"
const mapFlagByLang = {
  vi: <FlagVN />,
  en: <FlagUK />,
  fr: <FlagFR />,
  // zh: <FlagZH />,
}

export default function HeaderMenus() {
  const dispatch = useDispatch()
  const isDashboard = useRouteMatch('/dashboard');

  const lang = useSelector(state => state.App.lang);
  const currentUser = useSelector(state => state.Auth.currentUser)

  function handleLogout(evt) {
    evt.preventDefault()
    dispatch(actLogout())
  }

  function handleChangeLang(lang) {
    return (evt) => {
      evt.preventDefault()
      dispatch(actChangeLange(lang))
    }
  }
 
  const avatarCurrUser = createDefaultAvatar(
    currentUser?.id, currentUser?.simple_local_avatar?.full)


  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        {
          !isDashboard ? <HeaderMainMenus /> : null
        }
        
        <ul className="header-nav__lists">
          {
            !currentUser 
              ? <li className="user"><Link to="/login">
                <i className="icons ion-person" />
                Tài khoản</Link></li>
              : (
                <li className="user">
                  <Link to="/dashboard"> 
                    <Avatar
                      size={28}
                      src={ avatarCurrUser }
                      style={{marginRight: 4, verticalAlign: "middle"}}
                    />
                        <span>{currentUser.nickname}</span>
                  </Link>
                  <ul>
                    <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                  </ul>
                </li>
              )
          }
          <li className="header-nav__lang">
            <a href="/" onClick={evt => evt.preventDefault()}>{mapFlagByLang[lang]}</a>
            <ul>
                <li><a href="/" className="d-flex tcl-ais-center" onClick={handleChangeLang('vi')}><FlagVN /> Tiếng Việt</a></li>
                <li><a href="/" className="d-flex tcl-ais-center" onClick={handleChangeLang('en')}><FlagUK /> English</a></li>
                {/* <li><a href="/" className="d-flex tcl-ais-center" onClick={handleChangeLang('zh')}><FlagZH /> 中文</a></li> */}
                <li><a href="/" className="d-flex tcl-ais-center" onClick={handleChangeLang('fr')}><FlagFR /> Français</a></li>
            </ul>
        </li>
        </ul>
      </div>
    </div>
  )
}
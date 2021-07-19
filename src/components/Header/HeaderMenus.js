import HeaderMainMenus from "./HeaderMainMenus"
import { Link } from 'react-router-dom'
import { actLogout } from '../../store/auth/actions'
import { useSelector, useDispatch } from 'react-redux'
import { FlagFR, FlagUK, FlagVN } from '../../components/shared/AppIcon';
import { actChangeLange } from "../../store/app/actions";

const mapFlagByLang = {
  vi: <FlagVN />,
  en: <FlagUK />,
  fr: <FlagFR />,
  // zh: <FlagZH />,
}

export default function HeaderMenus() {
  const dispatch = useDispatch()
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

  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <HeaderMainMenus />
        <ul className="header-nav__lists">
          {
            !currentUser 
              ? <li className="user"><Link to="/login"><i className="icons ion-person" /> Tài khoản</Link></li>
              : (
                <li className="user">
                  <Link to="/dashboard"><i className="icons ion-person" /> { currentUser.nickname }</Link>
                  <ul>
                    <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                    <li><Link to="/change-password">Password</Link></li>
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
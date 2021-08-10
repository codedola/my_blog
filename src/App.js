import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from './pages/Homepage';
import PostsCategory from './pages/PostsCategory';
import LoginPage from './pages/LoginPage';
import PostsSearch from './pages/PostsSearch';
import PostDetailPage from './pages/PostDetail';
import RegisterPage from "./pages/RegisterPage";
import ChangePassword from "./pages/ChangePassword";
import PostTag from "./pages/PostTag";
import Dashboard from "./pages/Dashboard";
import PageNotExit from "./pages/PageNotExit";
// 
// import { useRouteMatch } from 'react-router-dom'
import { actFetchCategoriesAsync } from "./store/categories/actions";
import { actFetchMenusAsync } from "./store/menus/actions";
import { actCheckLoginAsync } from "./store/auth/actions";
import { actFetchTagsAsync } from "./store/tags/actions"
import { activateLang } from "./i18n";

function App() {
  const dispatch = useDispatch();
  // const isDashboard = useRouteMatch('/dashboard');
  const lang = useSelector(state => state.App.lang)

  useEffect(() => {
    activateLang(lang)
  }, [lang])

  useEffect(() => {
    dispatch(actCheckLoginAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dispatch(actFetchCategoriesAsync())
    dispatch(actFetchMenusAsync());
    dispatch(actFetchTagsAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="wrapper-content">
      {/* { !isDashboard && <Header /> } */}
      <Header />
      
      <Switch>
        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <Route path="/category/:slug" exact>
          <PostsCategory />
        </Route>

         <Route path="/tag/:slug" exact>
          <PostTag />
        </Route>

        <Route path="/search" exact>
          <PostsSearch />
        </Route>

        <Route path="/post/:slug" exact>
          <PostDetailPage />
        </Route>

        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/change-password" exact>
          <ChangePassword />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        

        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/">
          <PageNotExit />
        </Route>

      </Switch>
      {/* {
        !isDashboard && <div className="spacing" />
      } */}
      
      
      {/* { !isDashboard && <Footer /> } */}
    </div>
  )
}

export default App;

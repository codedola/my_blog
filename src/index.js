import './assets/css/bootstrap-tcl.css';
import './assets/css/main.css';
import './assets/css/header.css';
import './assets/css/footer.css';
import './assets/css/post-detail.css';
import './assets/css/post-author.css';
import './assets/css/related-posts.css';
import './assets/css/comments.css';

import 'antd/dist/antd.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { activateLang } from './i18n'
import { getLang } from './store/app/reducer';

activateLang(getLang())

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <I18nProvider i18n={i18n}>
            <App />
          </I18nProvider>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import './index.css';
import App from './App';
import store from './store/index';
import { userProfilesApi } from './store/api/apiSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApiProvider api={userProfilesApi}>
      <App />
    </ApiProvider>
  </Provider>
);

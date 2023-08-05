import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import AviaSalesApp from './components/AviaSalesApp';
import { store } from './store/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AviaSalesApp />
    </Provider>
  </React.StrictMode>,
);

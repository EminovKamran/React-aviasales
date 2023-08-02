import React from 'react';
import { createRoot } from 'react-dom/client';

import AviaSalesApp from './components/AviaSalesApp';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AviaSalesApp />
  </React.StrictMode>,
);

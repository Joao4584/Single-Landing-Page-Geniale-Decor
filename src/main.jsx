import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layout'
import "swiper/css/bundle";
import { PopupProvider } from './context/PopupContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PopupProvider>
    <App/>

    </PopupProvider>
  </React.StrictMode>
)

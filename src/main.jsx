import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layout'
import "swiper/css/bundle";
import { PopupProvider } from './context/PopupContext';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PopupProvider>
    <App/>
    </PopupProvider>
  </React.StrictMode>
)

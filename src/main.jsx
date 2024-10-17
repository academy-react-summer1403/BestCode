

import { RouterProvider } from 'react-router-dom'
import { DarkModeProvider } from '../DarkModeContext.jsx';

import ReactDOM from "react-dom/client";

import "./index.css";


import router from './config/router/router.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
    <DarkModeProvider>
      <RouterProvider  router={router}  />
    </DarkModeProvider>
)

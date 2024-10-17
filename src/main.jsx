

import { RouterProvider } from 'react-router-dom'
import { DarkModeProvider } from '../DarkModeContext.jsx';
import router from './config/router/router.jsx'





createRoot(document.getElementById('root')).render(
    <DarkModeProvider>
      <RouterProvider  router={router}  />
    </DarkModeProvider>
)

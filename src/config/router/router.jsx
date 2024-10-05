import { createBrowserRouter } from 'react-router-dom'
import Root from '../../components/Root/Root'
import App from '../../app/App'
import CourseDetail from '../../screens/CourseDetail/CourseDetail'
import Courses from '../../screens/Courses/Courses'
import Login from '../../screens/Login/Login'
import Error from '../../components/common/Error/Error'
import Register from '../../screens/Register/Register'
import NotFound from '../../components/common/NotFound/NotFound'



const router = createBrowserRouter([
    {
      path:'/',
      element: <Root />,
      children: [
        {
          path:'/',
          element: <App />,
          errorElement:<Error/> 
        },
        {
          path:'/course-detail',
          element: <CourseDetail />,
          errorElement: <Error/> ,
        },
        {
          path:'/courses',
          element:<Courses />,
          errorElement: <Error/> ,
        }
      ]
    },
    {
      path: '/login',
      element:<Login />,
      errorElement: <Error/> ,
    },
    {
      path:'/register',
      element: <Register />,
      errorElement: <Error/> ,
    },
    {
      path: "*",
      element: <NotFound />,
    }
])

export default router;

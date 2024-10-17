import { createBrowserRouter } from 'react-router-dom'
import Layout from '../../components/Layout'
import App from '../../app/App'
import CourseDetail from '../../screens/CourseDetail/CourseDetail'
import Courses from '../../screens/Courses/Courses'
import Login from '../../screens/Login/Login'
import Error from '../../components/common/Error/Error'
import Register from '../../screens/Register/Register'
import NotFound from '../../components/common/NotFound/NotFound'
import MainLayout from '../../components/MainLayout'
import Dashboard from '../../screens/Dashboard/Dashboard'
import MyCourse from '../../screens/Dashboard/MyCourse'
import FeedBackuser from '../../screens/Dashboard/FeedBackuser'
import MyReserveCourse from '../../screens/Dashboard/MyReserveCourse'
import SecuritySetting from '../../screens/Dashboard/SecuritySetting'
import UserProfile from '../../screens/Dashboard/UserProfile'
import MyFavorite from '../../screens/Dashboard/MyFavorite'
import News from '../../screens/News/News'

const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout />,
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
        },
        {
          path:'/news',
          element:<News />,
          errorElement: <Error/> ,
        }
      ]
    },
    {
      path:'/',
      element:<MainLayout />,
      children: [
        {
          path:'user',
          element:<Dashboard />,
          errorElement: <Error />
        },
        {
          path:'feedback',
          element:<FeedBackuser />,
          errorElement: <Error />
        },
        {
          path:'mycourse',
          element: <MyCourse />,
          errorElement: <Error />
        },
        {
          path:'myreservecourse',
          element: <MyReserveCourse />,
          errorElement: <Error />
        },
        {
          path:'securitysetting',
          element: <SecuritySetting />,
          errorElement: <Error />
        },
        {
          path:'userprofile',
          element: <UserProfile/>,
          errorElement: <Error />,
        },
        {
          path:'myfavorite',
          element:<MyFavorite />,
          errorElement: <Error />
        },
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

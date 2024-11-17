import React, { lazy, Suspense } from 'react';  


import { createBrowserRouter } from 'react-router-dom'
import Layout from '../../components/Layout'
import App from '../../app/App'
// import CourseDetail from '../../screens/CourseDetail/CourseDetail'
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
import NewsDetail from '../../screens/NewsDetails/NewsDetail'
// import Landing from '../../screens/Landing/Landing';

import ReactLoading from "react-loading";




const loadComponentWithTimeout = (importFunction, timeout = 3000) => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timed out loading component")), timeout)
  );

  return Promise.race([importFunction(), timeoutPromise]);
};




const Landing = lazy(() => loadComponentWithTimeout(() => import('../../screens/Landing/Landing')));;
const CourseDetail = lazy(() => loadComponentWithTimeout(() => import('../../screens/CourseDetail/CourseDetail')));



const router = createBrowserRouter([
    {
      path:'/',
      element: <App />,
      children: [
        {
          path:'/',
          element:<Landing />,
          errorElement:<Error/> 
        },
        {
          path:'/course-detail/:uuid',
          element:<CourseDetail/>,
          errorElement: <Error/> ,
        },
        {
          path:'/courses',
          element:<Courses />,
          errorElement: <Error/> ,
        },
        {
          path:'/News',
          element:<News />,
          errorElement: <Error/> ,
        },
        {
          path:'/news-Detail/:id',
          element:<NewsDetail />,
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

import images from '../../assets/dashboardpng'
import { Fragment, useState } from 'react'
import ProfileInfo from './UserProfile/ProfileInfo'
import EditProfile from './UserProfile/EditProfile'

const UserProfile = () => {
  const [profile , setProfile] = useState([
    {firstname: 'فلان فلانی زاده فلان آبادی', last: '', email:'folani99@gmail.com ', birth:' ۱۱ / ۰۵ / ۷۸ ', 
      genre:'', about:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و ', 
      number:'۰۹۳۹۲۲۲۹۹۹۹', telegram:'', linkedin:'', address:' مازندران - ساری - میدان خزر - جاده فرح آباد خیابان دیمطوران  - ساختمان هوتن ۱۲ -واحد ۱۵',
      Xloc:'', yloc:''
    },
  ])
  
  const [isactive , setIsActive] = useState(false)
  const HandleActive = () => {
     setIsActive(true)
  }
  return (
     <Fragment>
        {isactive?  
               <EditProfile />
         : 
               <ProfileInfo HandleActive={HandleActive} />  
        }
     </Fragment>
  )
}

export default UserProfile
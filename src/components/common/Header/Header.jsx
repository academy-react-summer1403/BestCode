import { useState } from 'react';
import images from '../../../assets/landingpng'
import { IoReorderThreeOutline } from "react-icons/io5";
import SideBar from './SideBar/SideBar';
import { useDarkMode } from '../../../../DarkModeContext.jsx';
import { LuSunMedium } from "react-icons/lu";
import { RiMoonFill } from "react-icons/ri";
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
 
  
   
const { isDarkMode, toggleDarkMode } = useDarkMode()
 

const [sidebar ,setSideBar] = useState(false)
const nagivate = useNavigate()
  const OpenSideMenu = () => {
   if(!sidebar) {
    setSideBar(true)
  } else {
    setSideBar(false)
  }
} 

{/*for test Project*/}
const HandleNavigate = () => {
  nagivate('/user')
}

 const HandleClose = () => {
    setSideBar(false)
 }

  return (

    <header className='h-[120px] w-full flex justify-center dark:bg-gray-800 text-nowrap'>

          <div className='xl:w-[1247px] h-[50px]   
                          lg:w-[1000px]
                          smx:w-full
                          max-sm:w-full
                          flex justify-between  mt-[58px] 
                          max-h-full box-content max-md:px-[10px] max-md:mt-[20px] max-lg:px-[60px]
                          duration-700
                          '>
               <div className='flex gap-[14px] box-border 
                               top-[3px] relative'>
                          
                    <button className='bg-[#01CEC9] flex w-[145px] 
                                       h-[44px] box-content font-primaryRegular  
                                       items-center justify-center rounded-[26px]
                                       text-white max-md:relative max-md:bottom-[7px]
                                       max-md:h-[38px] max-md:w-[140px]'
                           onClick={HandleNavigate}             
                          >
                           
                            <img 
                                src={images.profile} 
                                width={25} 
                                height={25} 
                                className='mb-[3px] '  /> 

                            <p className='w-[90px] h-[23px]
                                          mt-[5px] mb-[10px] 
                                          flex items-center 
                                          justify-center
                                          max-md:font-primaryMedium '
                                          
                            >حساب کاربری</p>
                      </button>
                     <div className='flex items-center gap-[13px] h-[50px]'>
                          <div className='w-[32px] h-[32px] mb-[15px] 
                                          mt-[7px]  flex justify-end   max-md:hidden'>
                          <img 
                               src={images.shopbag} 
                               width={32} 
                               height={32} 
                               className='w-[32px]'
                          /> 
                          <span className='absolute text-[13px] flex 
                                           items-center justify-center
                                          text-white pb-[0.7px] w-[14px] 
                                          h-[14px] rounded-full bg-[#E48900] 
                                          font-primaryMedium left-[181px] top-[24px] 
                                          pl-[0.5px]
                                          
                                          '>۲</span> 
                     </div> 
                      <div className='w-[30px] h-[30px] mb-[11px] mt-[3px]   max-md:hidden '
                         onClick={toggleDarkMode}
                      >
                      {isDarkMode? 
                        <LuSunMedium className='text-[30px] text-white' />  : 
                        <RiMoonFill className='text-[30px] text-[#cccccc]' />}

                        
                      </div>
                  </div>

                </div>
                <ul className='h-[46.8px] w-[466] text-[#555555]  
                               flex gap-[33px] text-[17px] font-bold 
                               font-primaryRegular xl:mr-[82px] pt-[7px]
                               max-md:hidden max-lg:hidden
                               lg:mr-[57px]
                               dark:text-[#f7f7f7]
                               '
                    style={{justifyContent:'right'}}
                   >
                   <NavLink className='cursor-pointer  flex ml-[10px]  '
                       style={{marginRight:'-1px'}}
                    >تماس با ما</NavLink>
                   <NavLink className='cursor-pointer  text-center '>اخبار و مقالات</NavLink>
                   <NavLink className='cursor-pointer  text-center '>اساتید</NavLink>
                   <NavLink    className={({ isActive }) =>
                                `cursor-pointer text-center relative ${isActive ? 'active-nav' : ''}` 
                           }
                   to={'/course-detail'}
                   >دوره ها</NavLink>
                   <NavLink 
                   to={'/'}
                     className={({ isActive }) =>
                    `cursor-pointer text-center relative ${isActive ? 'active-nav' : ''}` 
               }
                   
                   
                   >صفحه نخست</NavLink>
                </ul>  
                <div className='flex justify-end 
                                w-[135px] h-[50px] 
                                max-md:w-[100px] 
                                max-md:h-[30px]
                                max-md:relative 
                                max-md:gap-[10px]
                                max-lg:gap-[20px]
                                '>
                   <img 
                       src={images.logo} 
                     
                    /> 
                     {sidebar? (    
                      <div className='relative'>
                        <div className='fixed w-screen h-screen top-0 left-0 bg-white z-[999999] flex 
                          lg:hidden
                         '>
                              <SideBar HandleClose={HandleClose} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}  />
                           </div>
                      </div>
                        ) : (
                         <div className='lg:hidden max-lg:flex' >
                                <IoReorderThreeOutline className='max-md:text-[32px]
                                 max-lg:text-[50px]
                                relative' onClick={OpenSideMenu}  />
                         </div>
                        )}
                </div>
          </div>
    </header>
  )
}

export default Header
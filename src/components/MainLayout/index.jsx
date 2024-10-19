import { Outlet } from "react-router-dom"
import SideBarDashboard from "../common/SideBarDashboard/SideBarDashboard"
import images from '../../assets/dashboardpng'
import Header from '../common/Header/Header'



const MainLayout = () => {
  return (
    <div className='flex justify-center dark:bg-gray-800' >
      
      <div className='w-[1250px] mt-[144px] mb-[67px] flex justify-between h-[813px]'>
          <div className=" w-[942px] shadow-[0px_1px_10px_0px_#00000040] 
           rounded-[15px_0_0_15px]  pt-[31px] pl-[32px]" >
              <div className='w-[30px] h-[30px]'>
                 <img src={images.home} />
              </div>
              <Outlet />
           </div> 
           <SideBarDashboard />
      </div>
    </div>
  )
}

export default MainLayout
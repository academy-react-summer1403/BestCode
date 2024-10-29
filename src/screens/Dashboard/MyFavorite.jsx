import { useState } from "react"
import Group149 from "../../components/DashboardHolder/MyFavorite/Group149"
import images from '../../assets/dashboardpng'
import PagiantionDashboard from "../../components/common/PaginationDashboard/PagiantionDashboard"
const Favorite = () => {
  const [row3 , setRow3] = useState([
    {img:images.jrr,coursename:'دوره آموزش  جامع  Js' , sorting:'دوره آموزشی', timestart:'۱۴۰۳/۰۳/۰۲ , ۱۶:۲۷' , eye:images.eye , delete:images.fr12
      , writer:'ادمین'},
    {img:images.jrr,coursename:'دوره آموزش  جامع  Js' , sorting:'دوره آموزشی', timestart:'۱۴۰۳/۰۳/۰۲ , ۱۶:۲۷' , eye:images.eye , delete:images.fr12
      ,writer:'ادمین'
    },
    {img:images.fr56   ,coursename:'چگونه مدیر پروژه بهتری باشیم' , sorting:'اخبار و مقالات', timestart:'۱۴۰۳/۰۳/۰۲ , ۱۶:۲۷' , eye:images.eye,delete:images.fr12,
      writer:'مهدی اصغری'
    },

  ])
  return (
    <div className="xl:w-[875px] grid justify-center mt-[16px] justify-items-center 
    max-smx3:dark:bg-gray-800 max-smx3:w-screen max-md:w-screen max-md:dark:bg-gray-800
     max-lg:w-screen
   max-lg:dark:bg-gray-800
     max-xl:w-screen
    ">
      <div className="h-[545px] mt-[4px] flex-col
      max-smx3:w-[300px] max-smx3:overflow-x-scroll 
      max-smx3:mt-[100px] max-md:overflow-x-scroll max-md:mt-[60px]
      max-md:w-[480px] max-lg:w-[700px] max-lg:mt-[60px] max-xl:mt-[60px]
      max-xl:w-[874px]
      max-lg:overflow-x-scroll
      ">
        <div >
              <div className="w-[871px] h-[32px] border-b-[1.5px] border-b-[#007875] pl-[149px] 
              dark:border-b-[#59d7d3]
                  flex">
                <p className="mr-[104px] font-primaryMedium text-[17px] text-[#003B39]
                dark:text-[#59d7d3]
                " >نویسنده</p>
                <p className="mr-[92px] font-primaryMedium text-[17px] text-[#003B39]
                dark:text-[#59d7d3]
                " >زمان انتشار</p>
                <p className="mr-[118px] font-primaryMedium text-[17px] text-[#003B39]
                dark:text-[#59d7d3]
                ">دسته بندی</p>
                <p className=" font-primaryMedium text-[17px] text-[#003B39]
                dark:text-[#59d7d3]
                ">عنوان</p>
              </div>
              <div className="w-[874px] flex-col pt-[3px]" >
              {row3.map((item , index) => ( 
                  <Group149 
                    item={item}
                    index={index}
                    key={index}
                  />
              ))}
          
              
             
              </div>
        </div>
      </div>
      <PagiantionDashboard/>
    </div>
  )
}

export default Favorite
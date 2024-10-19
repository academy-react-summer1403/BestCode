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
    <div className="w-[875px] grid justify-center mt-[16px] justify-items-center ">
      <div className=" h-[545px] mt-[4px] flex-col">
        <div className="w-[871px] h-[32px] border-b-[1.5px] border-b-[#007875] pl-[149px] 
             flex">
          <p className="mr-[104px] font-primaryMedium text-[17px] text-[#003B39]" >نویسنده</p>
          <p className="mr-[92px] font-primaryMedium text-[17px] text-[#003B39]" >زمان انتشار</p>
          <p className="mr-[118px] font-primaryMedium text-[17px] text-[#003B39]">دسته بندی</p>
          <p className=" font-primaryMedium text-[17px] text-[#003B39]">عنوان</p>
        </div>
        <div className="w-[874px] flex-col pt-[3px]" >
        {row3.map((item , index) => ( 
             <Group149 
               item={item}
               index={index}
               key={index}
             />
        ))}
        <div className="relative top-[280px]">
         <PagiantionDashboard/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Favorite
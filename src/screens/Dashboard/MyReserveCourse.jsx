import Group145 from "../../components/DashboardHolder/MyReserveCourse/Group145"
import PagiantionDashboard from "../../components/common/PaginationDashboard/PagiantionDashboard"
import { useState } from "react"
import SelectOption  from "../../components/common/SelectOption/SelectOption"
import SearchForm from "../../components/common/SearchForm/SearchForm"

import images from '../../assets/dashboardpng'
const MyReserveCourse = () => {
  const [row1 , setRow1] = useState([
    {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.fr11 , vaziet:'در انتظار تایید' , delete:images.fr12 , color:'#E48900' },
    {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.fr11 ,vaziet:'در انتظار تایید', delete:images.fr12, color:'#E48900' },
      {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.fr11 ,vaziet:'تایید شده', delete:images.fr12, color:'#00C070'},
    {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.fr11 , vaziet:'در انتظار تایید', delete:images.fr12 , color:'#E48900'},
    {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.fr11, vaziet:'در انتظار تایید', delete:images.fr12 ,color:'#E48900'},
  ])
  

  const options = [
    { value: 'option1', label: 'جدید ترین' },
    { value: 'option2', label: 'محبوب ترین' },
    { value: 'option3', label: 'ارزان ترین' },
  ];

  const formStyle = `w-[519px] h-[40px] bg-[#FBFBFB] flex rounded-[25px] justify-between 
    items-center 
    shadow-[0px_1px_3px_0px_#00000026_inset]
   pl-[4px] pr-[27px]

  `
  const inputdivStyle = `w-[34px] h-[34px] bg-[#CC6E00] rounded-full flex justify-center items-center`
  const inputStyle =`w-[189px] placeholder:font-primaryMedium
  placeholder:text-[#AAAAAA] placeholder:text-[16px] place-holder:font-[400] text-right
  border-none outline-none bg-transparent pb-[3px]
  `
  return (
    <div className="w-[875px] grid justify-center mt-[16px] justify-items-center">
       <div className="w-[875px] h-[40px]  flex justify-between " >
       <div>
          <SelectOption  options={options} />
        </div>
        <SearchForm 
         formStyle={formStyle}
         inputdivStyle={inputdivStyle}
         inputStyle={inputStyle}
         
        />
      </div> 
      <div className="w-[874px] h-[545px]  mt-[53px] flex-col"> 
      <div className="w-[874px] h-[32px] border-b-[1.5px] border-b-[#007875] pr-[133px] pl-[126px] 
        flex justify-end">
          <p className=" font-primaryMedium text-[17px] text-[#003B39]">وضعیت</p>
          <p className="ml-[48px] font-primaryMedium text-[17px] text-[#003B39]" >قیمت(تومان)</p>
          <p className="ml-[50px] font-primaryMedium text-[17px] text-[#003B39]" >تاریخ شروع</p>
          <p className="ml-[79px] font-primaryMedium text-[17px] text-[#003B39]">مدرس دوره</p>
          <p className="ml-[100px] font-primaryMedium text-[17px] text-[#003B39]">نام دوره</p>
        </div>
        <div className="w-[874px] flex-col pt-[3px]" >
        {row1.map((item , index) => ( 
             <Group145 
               item={item}
               index={index}
               key={index}
             />
        ))}
        <div className="relative top-[180px]">
         <PagiantionDashboard />
         </div>
        </div>
      </div>
    </div>
  )
}

export default MyReserveCourse
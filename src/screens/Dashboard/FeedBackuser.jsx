import { useState } from "react"
import SelectOption from "../../components/common/SelectOption/SelectOption"
import SearchForm from "../../components/common/SearchForm/SearchForm"
import images from '../../assets/dashboardpng'
import Group146 from "../../components/DashboardHolder/FeedBackUser/Group146"
import PagiantionDashboard from "../../components/common/PaginationDashboard/PagiantionDashboard"

const FeedBack = () => {
  const [row2 , setRow2] = useState([
    {number:'#۳۶۶', coursename:'دوره آموزش  جامع  Js' , sorting:'دوره آموزشی', timestart:'۱۴۰۳/۰۳/۰۲ , ۱۶:۲۷' , eye:images.eye , vaziet:'در انتظار تایید' , delete:images.fr111 , color:'#E48900' },
    {number:'#۳۱۶', coursename:'چگونه مدیر پروژه بهتری باشیم' , sorting:'اخبار و مقالات', timestart:'۱۴۰۳/۰۲/۰۸ , ۱۵:۲۸' , eye:images.eye , vaziet:'تایید شده' , delete:images.fr111, color:'#00C070' },
    {number:'#۲۸۳', coursename:'دوره آموزش  جامع  Js' , sorting:'دوره آموزشی', timestart:'۱۴۰۳/۰۳/۰۲ , ۱۶:۲۷' , eye:images.eye , vaziet:'در انتظار تایید' , delete:images.fr111 , color:'#E48900' },

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
    <div className="w-[875px] grid justify-center mt-[29px] justify-items-center">
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
   <div className="w-[874px] h-[32px] border-b-[1.5px] border-b-[#007875] pr-[157px] pl-[126px] 
     flex justify-end">
       <p className="font-primaryMedium text-[17px] text-[#003B39]" >زمان</p>
       <p className="ml-[121px] font-primaryMedium text-[17px] text-[#003B39]" >وضعیت</p>
       <p className="ml-[90px] font-primaryMedium text-[17px] text-[#003B39]">دسته بندی</p>
       <p className="ml-[109px] font-primaryMedium text-[17px] text-[#003B39]">دیدگاه در</p>
     </div>
     <div className="w-[874px] flex-col pt-[3px]" >
        {row2.map((item , index) => ( 
             <Group146 
               item={item}
               index={index}
               key={index}
             />
        ))}
        <div className="relative top-[280px]">
         <PagiantionDashboard />
         </div>
        </div>
   </div>
 </div>
  )
}

export default FeedBack
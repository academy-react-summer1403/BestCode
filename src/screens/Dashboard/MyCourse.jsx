import { useState } from "react"
import images from '../../assets/dashboardpng'
import Group144 from "../../components/DashboardHolder/MyCourse/Group144"
import SearchForm from "../../components/common/SearchForm/SearchForm"
import SelectOption from '../../components/common/SelectOption/SelectOption'
import PagiantionDashboard from "../../components/common/PaginationDashboard/PagiantionDashboard"

const MyCourse = () => {
  const formStyle = `xl:w-[519px] h-[40px] bg-[#FBFBFB] flex rounded-[25px] justify-between 
    items-center 
    shadow-[0px_1px_3px_0px_#00000026_inset]
    pl-[4px] pr-[27px]
    max-lg:w-[400px]
    max-xl:w-[519px]
    max-md:w-[250px]
    max-smx3:w-[250px]
    `
  const inputdivStyle = `w-[34px] h-[34px] bg-[#CC6E00] rounded-full flex justify-center items-center`
  const inputStyle =`xl:w-[189px] placeholder:font-primaryMedium
  placeholder:text-[#AAAAAA] placeholder:text-[16px] place-holder:font-[400] text-right
  border-none outline-none bg-transparent pb-[3px] 
  `

  const [row , setRow] = useState([
    {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.eye},
    {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.eye},
    {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.eye},
    {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.eye},
    {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.eye},
    {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.eye},
    {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.eye},
    {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.eye},
    {img:images.jrr , coursename:'دوره آموزش  جامع  Js' , teacher:'دکتر محمدحسین بحرالعلومی' , timestart:'۱۴۰۳ / ۰۳ / ۱۸' , price:'۲,۵۰۰,۰۰۰' , eye:images.eye},


  ])

  const options = [
    { value: 'option1', label: 'جدید ترین' },
    { value: 'option2', label: 'محبوب ترین' },
    { value: 'option3', label: 'ارزان ترین' },
  ];
  return (
    <div className="xl:w-[875px] grid justify-center mt-[16px] justify-items-center
    max-smx3:dark:bg-gray-800 max-smx3:w-screen max-md:w-screen max-md:dark:bg-gray-800
     max-lg:w-screen
   max-lg:dark:bg-gray-800
     max-xl:w-screen
    ">
      <div className="xl:w-[875px] h-[40px]  flex justify-between max-smx3:grid
      max-smx3:justify-items-center max-smx3:gap-[20px] max-md:gap-[30px]
      max-lg:gap-[100px]
      max-xl:gap-[180px]
      " > 
        <div>
          <SelectOption  options={options} />
        </div> 
        <SearchForm 
         formStyle={formStyle}
         inputdivStyle={inputdivStyle}
         inputStyle={inputStyle}
         
        />
       
      </div>
    <div className="xl:w-[874px] xl:h-[545px]  xl:mt-[53px] flex-col max-smx3:w-[300px] max-smx3:overflow-x-scroll 
    max-smx3:mt-[100px] max-md:overflow-x-scroll max-md:mt-[60px]
    max-md:w-[480px] max-lg:w-[700px] max-lg:mt-[60px] max-xl:mt-[60px]
    max-xl:w-[874px]
    ">
    <div className="max-smx3:w-[700px] max-md:w-[874px]
    ">
        <div className="xl:w-[874px] h-[32px] border-b-[1.5px] border-b-[#007875]
        dark:border-b-[#59d7d3]
        xl:pr-[133px] xl:pl-[126px]  max-md:pl-[110px]
         max-smx3:pl-0 max-xl:pl-[100px]
         max-lg:pl-0
        flex">
          <p className="font-primaryMedium text-[17px] text-[#003B39]
          max-smx3:ml-[80px] dark:text-[#59d7d3] max-lg:ml-[70px] max-md:ml-0
          " >قیمت(تومان)</p>
          <p className="ml-[72px] max-smx3:ml-[26px] font-primaryMedium text-[17px] text-[#003B39]
          dark:text-[#59d7d3] max-md:ml-[72px] max-lg:ml-[30px]
          
          " >تاریخ شروع</p>
          <p className="ml-[120px] max-smx3:ml-[100px] dark:text-[#59d7d3]
          
          font-primaryMedium text-[17px] text-[#003B39]">مدرس دوره</p>
          <p className="ml-[135px] dark:text-[#59d7d3] max-smx3:ml-[100px]
           max-lg:ml-[100px] max-md:ml-[135px]
          font-primaryMedium text-[17px] text-[#003B39] ">نام دوره</p>
        </div>
        <div className="xl:w-[874px] flex-col pt-[3px]   " >
      
        {row.map((item , index) => ( 
             <Group144 
               item={item}
               index={index}
               key={index}
             />
        ))}
        </div>
       
        </div>  
       
      </div> 
        <PagiantionDashboard />    
    </div>
  )
}

export default MyCourse
import { Formik,Form,Field } from "formik"
import CourseSearch from "../../components/Courses/CourseSearch"
import { Children } from "react"
import SliderCard from "../../components/LandingHolder/CourseSection/SliderCard/SliderCard"
import { useState } from "react"
import { SwiperSlide } from "swiper/react"
import "../../components/Courses/Course.css"


const Courses = () => {

  const [openbox,setOpenBox] =useState(false)
  const handleAccordion = ()=>{
    if(!openbox){
      setOpenBox(true)
    }else{
      setOpenBox(false)
    }
  }


  const [slidercard , setSliderCard] = useState([
    {title:'دوره پیشرفته دیزاین', teacher:'حامد نظری', duration:'۷:۴۴' , price:'۱,۴۵۰,۰۰۰', student:'۵۰'},
    {title:'دوره پیشرفته دیزاین', teacher:'حامد نظری', duration:'۷:۴۴' , price:'۱,۴۵۰,۰۰۰', student:'۵۰'},
    {title:'دوره پیشرفته دیزاین', teacher:'حامد نظری', duration:'۷:۴۴' , price:'۱,۴۵۰,۰۰۰', student:'۵۰'},
    {title:'دوره پیشرفته دیزاین', teacher:'حامد نظری', duration:'۷:۴۴' , price:'۱,۴۵۰,۰۰۰', student:'۵۰'},
    {title:'دوره پیشرفته دیزاین', teacher:'حامد نظری', duration:'۷:۴۴' , price:'۱,۴۵۰,۰۰۰', student:'۵۰'},
    {title:'دوره پیشرفته دیزاین', teacher:'حامد نظری', duration:'۷:۴۴' , price:'۱,۴۵۰,۰۰۰', student:'۵۰'},
    {title:'دوره پیشرفته دیزاین', teacher:'حامد نظری', duration:'۷:۴۴' , price:'۱,۴۵۰,۰۰۰', student:'۵۰'},
    {title:'دوره پیشرفته دیزاین', teacher:'حامد نظری', duration:'۷:۴۴' , price:'۱,۴۵۰,۰۰۰', student:'۵۰'},
    {title:'دوره پیشرفته دیزاین', teacher:'حامد نظری', duration:'۷:۴۴' , price:'۱,۴۵۰,۰۰۰', student:'۵۰'},    
])


  return (
    <Formik>
    <div className="  font-BYekan1 justify-center">
        <CourseSearch/>
        {/* <div className="flex mx-auto justify-center gap-[20px] mt-[30px] ">
          <div className="h-[1252px] w-[919px] ">
                <div className="w-full h-[45px] flex justify-between ">
                  <div className="h-full w-[100px]  flex gap-[10px]">
                    <button className="h-[45px] w-[45px] rounded-b-[1px] rounded-tl-[10px] rounded-tr-[1px] bg-[#E7E7E7]
                    shadow-[0px_1px_2px_0px_#00000040] bg-[url(../33.svg)] bg-no-repeat bg-center"> </button>
                    <button className="h-[45px] w-[45px] rounded-b-[1px] rounded-tl-[1px] rounded-tr-[10px] bg-[#FFFFFF]
                    shadow-[0px_1px_2px_0px_#00000040] bg-[url(../34.svg)] bg-no-repeat bg-center "> </button>   
                  </div>
                  <div className="h-full w-[207px] flex  bg-[#FFFFFF] rounded-t-[10px] rounded-b-[1px] 
                  shadow-[0px_1px_3px_0px_#00000040]">
                    <img src="../35.svg" className="h-[12px] w-[20px] ml-4 my-auto"/>
                    <button className="text-[22px] font-[400] my-auto ml-7">جدیدترین</button>
                    <img src="../36.svg" className="h-[18px] w-[27px] ml-6 my-auto"/>
                  </div>                  
                </div>
                <div className="w-[918px] h-[1170px]  mt-[35px] grid grid-cols-3 gap-x-[36px] gap-y-[35px] ">
                    
                    {slidercard.map((item , index)=> (
               
                   <SliderCard  
                        title={item.title} 
                        price={item.price}
                        teacher={item.teacher}
                        duration={item.duration}
                        student={item.student}
                        index={index}
                    /> 
               
         ))} 
                                             
                </div>
          </div>
          <div className="w-[311px] h-[880px] bg-[#FFFFFF] shadow-[0px_1px_2px_0px_#0000004D]">
            <div className="w-[272px] h-[45px] rounded-t-[5px] rounded-b-[1px] bg-[#E7E7E7] 
            shadow-[0px_1px_2px_0px_#00000040] mx-auto mt-[14px] flex ">
              <img src="../37.svg" className="h-[25px] w-[25px] my-auto ml-[13px]"/>
              <p className="text-[18px] font-[400] my-auto ml-[150px] text-[#333333]">فیلترها</p>
              <img src="../38.svg" className="h-[22px] w-[22px] my-auto ml-2"/>

            </div>
            <div className="grid gap-[15px] mx-auto w-[273px] mt-[18px]">
              <div className={`w-[272px] h-[173px] shadow-[0px_1px_2px_0px_#00000040] bg-[#FAFAFA] ${openbox? 'h-[24px]':''}`}>
                <ul onClick={handleAccordion} className="text-right border-b-[1px] tex-[18px] font-[400] mx-auto border-[#E6E6E6] w-[237px] h-[24px]  " >
                  <span>تکنولوژی</span>
                  <img src="../35.svg" className={`mt-[-15px] ${openbox? 'rotate-180 ' : ''}`}/>
                  {openbox ?
                  (<></>)
                : (
                  <><li><label for="check1" className="text-[16px]">Boot Strap</label><Field type="checkBox" id="check1" className="size-3 ml-2 mt-5"/></li>
                  <li><label for="check2" className="text-[16px]">React</label><Field type="checkBox" id="check2" className="size-3 ml-2"/></li>                                   
                  <li><label for="check3" className="text-[16px]">Java Script</label><Field type="checkBox" id="check3" className="size-3 ml-2"/></li>
                  <li><label for="check4" className="text-[16px]">.Net Core</label><Field type="checkBox" id="check4" className="size-3 ml-2"/></li>
                  <li><label for="check5" className="text-[16px]">tailwind</label><Field type="checkBox" id="check5" className="size-3 ml-2"/></li></>
                )  
                
                }
                </ul>
              </div>
              <div className={`w-[272px] h-[123px] shadow-[0px_1px_2px_0px_#00000040] bg-[#FAFAFA]` }>
              <ul className={`text-right border-b-[1px] tex-[18px] font-[400] mx-auto border-[#E6E6E6] w-[237px] h-[24px]  ${openbox? 'h-[24px]':''}`} >
              <span>تکنولوژی</span>
              <img src="../35.svg" className={`mt-[-15px] ${openbox? 'rotate-180 ' : ''}`}/>
                  <li><label for="check4" className="text-[16px]">شروع نشده</label><Field type="checkBox" id="check4" className="size-3 ml-2"/></li>
                  <li><label for="check5" className="text-[16px]">در حال برگزاری</label><Field type="checkBox" id="check5" className="size-3 ml-2"/></li>                                   
                  <li><label for="check6" className="text-[16px]">تمام شده</label><Field type="checkBox" id="check6" className="size-3 ml-2"/></li>
                </ul>
              </div>  
              <div className="w-[272px] h-[173px] shadow-[0px_1px_2px_0px_#00000040] bg-[#FAFAFA]">
              <ul className="text-right border-b-[1px] tex-[18px] font-[400] mx-auto border-[#E6E6E6] w-[237px] h-[24px] bg-[url(../35.svg)] bg-no-repeat bg-left " >
                 امتیاز
                  <li><label for="check10" className="text-[16px]  w-[85px] h-[17px]  bg-[url(../39.svg)]"> <img src="../39.svg" className="relative left-[131px] top-[3px]"/></label><Field type="checkBox" id="check10" className="size-3 ml-2 relative bottom-4"/></li>
                  <li><label for="check11" className="text-[16px] w-[85px] bg-[url(../40.svg)]"><img src="../40.svg" className="relative left-[131px] bottom-3"/></label><Field type="checkBox" id="check11" className="size-3 ml-2 relative bottom-8"/></li>                                   
                  <li><label for="check12" className="text-[16px] w-[85px] bg-[url(../41.svg)]"><img src="../41.svg" className="relative left-[131px] bottom-7"/></label><Field type="checkBox" id="check12" className="size-3 ml-2 relative bottom-12"/></li>
                  <li><label for="check13" className="text-[16px] w-[85px] bg-[url(../42.svg)]"><img src="../42.svg" className="relative left-[131px] bottom-11"/></label><Field type="checkBox" id="check13" className="size-3 ml-2 relative bottom-16"/></li>
                  <li><label for="check14" className="text-[16px] mt-[-20px] w-[85px] bg-[url(../43.svg)]"><img src="../43.svg"className="relative left-[131px] bottom-[60px]"/></label><Field type="checkBox" id="check14" className="size-3 ml-2 relative bottom-20"/></li>
                </ul>
              </div>
              <div className="w-[272px] h-[127px] shadow-[0px_1px_2px_0px_#00000040] bg-[#FAFAFA]">
              <ul className="text-right border-b-[1px] tex-[18px] font-[400] mx-auto border-[#E6E6E6] w-[237px] h-[24px] bg-[url(../35.svg)] bg-no-repeat bg-left " >
                سطح
                  <li><label for="check7" className="text-[16px]">مقدماتی</label><Field type="checkBox" id="check7" className="size-3 ml-2"/></li>
                  <li><label for="check8" className="text-[16px]">متوسط</label><Field type="checkBox" id="check8" className="size-3 ml-2"/></li>                                   
                  <li><label for="check9" className="text-[16px]">پیشرفته</label><Field type="checkBox" id="check9" className="size-3 ml-2"/></li>
                </ul>
              </div>    
              <div className="w-[272px] h-[123px] shadow-[0px_1px_2px_0px_#00000040] bg-[#FAFAFA]">
                <div className="bg-[url(../35.svg)] bg-no-repeat bg-left my-auto mx-auto border-b-[1px] tex-[18px] font-[400] border-[#E6E6E6] w-[237px] h-[24px] text-right">(تومان)قیمت 
                        <div className="mt-12 mx-auto">
                          <div className="w-[222px] h-[4px] mx-auto z-[3000] bg-[#FEE9CA]"><div className="w-[151px] h-[4px] mx-auto bg-[#FFA31A] relative "></div></div>
                           <div className="relative w-[222px] mx-auto ">
                            <input type="range" className="w-full h-[0px] relative bottom-[17px] bg-none appearance-none range-sm"/>
                            <input type="range" className="w-full h-[0px] relative bottom-[41px] bg-none appearance-none"/>
                           </div>
                        </div> 
                         
                         
                         

                
                </div>
              </div>                                      
            </div>
          </div>
        </div> */}
    </div>
    </Formik>
  )
}

export default Courses
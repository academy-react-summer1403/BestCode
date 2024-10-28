import { Formik,Form,Field } from "formik"
import CourseSearch from "../../components/Courses/CourseSearch"
import { Children } from "react"
import SliderCard from "../../components/LandingHolder/CourseSection/SliderCard/SliderCard"
import { useState } from "react"
import { SwiperSlide } from "swiper/react"
import "../../components/Courses/Course.css"
import "./RangeSlider.css"
import SideBarFilter from "../../components/Courses/SideBarFilter"
import ListCourse from "../../components/Courses/ListCourse"
import FinalList from "../../components/Courses/FinalList"
import FinalGrid from "../../components/Courses/FinalGrid"
import {Slider} from "antd"
 


const Courses = () => {
 
  const [active, setActive]=useState(1)


  return (
    <Formik>
    <div className="overflow-visible  text-black font-BYekan1 justify-center dark:bg-gray-800 pt-[77px] pb-4">
        <CourseSearch/>
        <div className="flex mx-auto w-[92%] justify-center gap-[40px]  dark:bg-gray-800 mt-10 ">
          <div className=" lg:w-[72%] cd:w-[94%] ">
                <div className="md:w-[80%] sm:w-[70%] cd:w-full h-[45px] cd:ml-0 sm:ml-[150px] md:ml-[100px] qr:ml-3 qr:mr-0 ab:mr-24 wx:mr-40 flex ab:justify-center sm:justify-between ">
                  <div className="h-full   flex gap-[10px] cd:ml-0 md:ml-[-50px] sm:ml-[-40px]">
                    <button onClick={()=>setActive(old=>old+1)} className="h-[45px] w-[45px] rounded-b-[1px] rounded-tl-[10px] rounded-tr-[1px] bg-[#E7E7E7]
                    shadow-[0px_1px_2px_0px_#00000040] bg-[url(../33.svg)] bg-no-repeat bg-center dark:bg-gray-200"> </button>
                    <button onClick={()=>setActive(old=>old-1)} className="h-[45px] w-[45px] rounded-b-[1px] rounded-tl-[1px] rounded-tr-[10px] bg-[#FFFFFF]
                    shadow-[0px_1px_2px_0px_#00000040] bg-[url(../34.svg)] z-50  bg-no-repeat bg-center dark:bg-gray-200 "> </button>   
                        <label id="label" htmlFor="my-drawer-4" className="dark:bg-gray-200 block lg:hidden drawer-button btn bg-white border-0 shadow-[0px_1px_2px_0px_#00000040] relative "><img src="../38.svg" className="mt-3"/></label>
                  </div>
                  <div className="h-full w-[207px] dark:bg-gray-200  bg-[#FFFFFF] rounded-t-[10px] rounded-b-[1px]  ml-20 op:ml-28 sm:ml-0 qr:flex hidden
                  shadow-[0px_1px_3px_0px_#00000040]">
                    <img src="../35.svg" className="h-[12px] w-[20px] ml-4 my-auto"/>
                    <button className="text-[22px] font-[400] my-auto ml-7">جدیدترین</button>
                    <img src="../36.svg" className="h-[18px] w-[27px] ml-6 my-auto"/>
                  </div>                  
                </div>
                {/* <div className="w-[100%] mx-auto  justify-center lg:ml-20 xl:ml-0 gh:ml-0 cd:ml-10  mt-[35px] grid gh:grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-[10px] lg:gap-x-[0px] xl:gap-x-[36px] gap-y-[35px] "> */}
                 {/* <div className="w-[100%] mx-auto  justify-end   mt-[35px] grid gap-4 ">                   
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
                      {slidercard.map((item , index) =>(
                          <ListCourse  
                                title={item.title} 
                                price={item.price}
                                teacher={item.teacher}
                                duration={item.duration}
                                student={item.student}
                                index={index}
                            /> 
                      ))}


                   <div className="gap-[5px] w-[300px] h-[26px] flex text-center text-[16px] text-[#777777] relative left-[340px]">
                            <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FAFAFA] bg-[url(../Frame.svg)] bg-center bg-no-repeat  hover:bg-[#FFB800]"></div>
                            <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FFB800] hover:bg-[#FFB800]">1</div>   
                            <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FAFAFA] hover:bg-[#FFB800]">2</div>
                            <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FAFAFA] hover:bg-[#FFB800]">...</div>   
                            <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FAFAFA] hover:bg-[#FFB800]">6</div>   
                            <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FAFAFA] hover:bg-[#FFB800]">7</div>
                            <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FAFAFA] bg-[url(../Frame1.svg)] bg-center bg-no-repeat hover:bg-[#FFB800]"></div>                                                                         
                    </div>                          
                </div>  */}
                {/* <FinalList/> */}
                {/* <FinalGrid/> */}
                {active==1?<FinalGrid setActive={setActive} />  :<FinalList/>}

          </div>
            <SideBarFilter/>
            
        </div>
    </div>
    </Formik>
  )
}

export default Courses
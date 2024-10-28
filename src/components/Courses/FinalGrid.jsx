
import { useState } from "react"
import SliderCard from "../LandingHolder/CourseSection/SliderCard/SliderCard"
const FinalGrid =()=>{


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
    return(
         <div className="w-[100%] mx-auto  justify-center lg:ml-20 xl:ml-0 gh:ml-0 cd:ml-10 ml-10  mt-[35px] grid gh:grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-[10px] lg:gap-x-[0px] xl:gap-x-[36px] gap-y-[35px] ">                  
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



       <div className="gap-[5px] w-[300px] h-[26px]  mx-auto flex text-center text-[16px] text-[#777777] relative xl:left-[125%] xl:mt-0 lg:right-[50%] gh:left-[115%] gh:mt-0 sm:mt-96 sm:right-[50%] ab:right-[-10%] lg:mt-96">
                <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FAFAFA] bg-[url(../Frame.svg)] bg-center bg-no-repeat  hover:bg-[#FFB800]"></div>
                <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FFB800] hover:bg-[#FFB800]">1</div>   
                <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FAFAFA] hover:bg-[#FFB800]">2</div>
                <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FAFAFA] hover:bg-[#FFB800]">...</div>   
                <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FAFAFA] hover:bg-[#FFB800]">6</div>   
                <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FAFAFA] hover:bg-[#FFB800]">7</div>
                <div className="size-[25px] rounded-[50%] shadow-[0px_1px_2px_0px_#0000004D] bg-[#FAFAFA] bg-[url(../Frame1.svg)] bg-center bg-no-repeat hover:bg-[#FFB800]"></div>                                                                         
        </div>                          
    </div>
    )
}

export default FinalGrid
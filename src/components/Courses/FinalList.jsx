
import ListCourse from "./ListCourse"
import { useState } from "react"

const FinalList =()=>{

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
        return( <>
        
            <div className="w-full   justify-end  items-end  mt-[35px] grid gap-4 ">                   
            {/* {slidercard.map((item , index)=> (
       
           <SliderCard  
                title={item.title} 
                price={item.price}
                teacher={item.teacher}
                duration={item.duration}
                student={item.student}
                index={index}
            /> 
       
 ))}  */}
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
        </div>
        </>
        )

}

export default FinalList
import React from "react";

const CourseDetail = () => {
  
  
  return (
    <>
    <div id="ADS" className=" h-[395px] w-[1251px] border-4 border-red-600 mx-auto flex gap-[29px]" >
       
       <div className=" h-[395px] w-[624px] border-2 border-blue-500 " >
        <img src="" alt="" className=" w-full h-full " />
       </div>
       
       <div className=" h-[395px] w-[598px] border-2 border-blue-500 flex flex-wrap" >
        
           <h1 className=" h-[41px] w-[335px] border-2 border-pink-400 relative top-[31px] right-[33px] "></h1>
           <div className=" h-[27px] w-[27px] border-2 border-pink-400 relative top-[28px] left-[25px]"></div>
           <div className=" h-[84px] w-[526px] border-2 border-pink-400 relative top-[96px] right-[33px]"></div>
           
           <div className=" h-[25px] w-[162px] border-2 border-pink-400 relative top-[233px] right-[33.5px]">
              <span></span>
              <img src="" alt="" />
           </div>

           <div className=" h-[43px] w-[210px] border-2 border-pink-400 relative top-[233px] left-[40px]">
              <span></span>
              <img src="" alt="" />
           </div>

           <button className=" h-[55px] w-[347px] border-2 border-pink-400 "></button>

       </div>
       
    </div>
    
   
    
    <div id="right" className=" h-[2462px] w-[810px] border-4 border-red-600 mx-auto flex flex-wrap mr-[133px] ">

      <div className=" h-[620px] w-full border-2 border-blue-500 flex " ></div>
      <div className=" h-[890px] w-full border-2 border-blue-500 flex " ></div>
      <div className=" h-[953px] w-full border-2 border-blue-500 flex " ></div>

    </div>

    <div id="left" className=" h-[1616px] w-[412px] border-4 border-red-600 mx-auto flex flex-wrap absolute top-[420px] left-[133px] ">

      <div className=" h-[1015px] w-full border-2 border-blue-500 flex "></div>
      <div className=" h-[601px] w-full border-2 border-blue-500 flex "></div>

    </div>

    
    </>
   )
}

export default CourseDetail
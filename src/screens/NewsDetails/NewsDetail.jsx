import React from 'react'
import images from "../../assets/img/NewsDetail";

const NewsDetail = () => {
  
    return (
    <>
    
      <div className="w-full h-full flex font-['BYekan1'] justify-center bg-[#f7f7f7] ">
          
          <div className=" w-[81%] h-[1000px] flex gap-4  border-2 border-red-700">
             
             <div id='Left' className="w-[40%] h-[100%] border-2 border-blue-500">
                
                <div className="w-[100%] h-[329px] flex justify-center dark:bg-gray-800 rounded-tr-[10px]  rounded-bl-[10px] rounded-tl-[75px] rounded-br-[10px] ">
                    <img className="shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]" src={images.Women} alt="" />
                </div>
             </div>                         


             <div id='Right' className="w-[60%] h-[100%] border-2 border-blue-500">
                 
                 <div dir='rtl' className="w-[100%] h-[149px] flex justify-center relative bg-[#01CEC939] rounded-tr-[75px]  rounded-bl-[10px] rounded-tl-[5px] rounded-br-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                        
                        <div className=" w-[100%] h-[86px] flex flex-wrap absolute right-[35px] top-[32px]  ">
                            <div className=" w-[14px] h-[14px] rounded-full bg-[#01CEC9] relative top-5   "></div>

                            <div className=" w-[96%] h-[50%] font-bold text-[22px] leading-[50px] text-[#005351] mr-3 ">
                            ری اکت چیست و چه کاربرد هایی دارد؟ + ۵ دلیل استفاده از ری اکت
                            </div>

                        
                        </div>

                        <div className=" w-[60%] h-[30px] border-2 border-red-700 flex absolute left-[70px] top-[103px]  ">
                               
                               <div className=" w-[30%] h-5 flex font-normal text-[15px] leading-[16px] text-[#AAAA] border-2 border-blue-700">
                                      <span>
                                      ۵۶ بازدید
                                      </span>
                                      <img className="mr-2" src={images.eyse} alt="" />
                               </div>
                               <div className=" w-[30%] h-5 flex font-normal text-[15px] leading-[16px] text-[#AAAA] border-2 border-blue-700">
                                      <span>
                                      ۱۴۰۳/۰۱/۱۸
                                      </span>
                                      <img className="mr-2" src={images.callender} alt="" />
                               </div>
                               <div className=" w-[30%] h-5 flex font-normal text-[15px] leading-[16px] text-[#AAAA] border-2 border-blue-700">
                                      <span>
                                      مهدی اصغری
                                      </span>
                                      <img className="mr-2" src={images.person} alt="" />
                               </div>
                                <div  className=" w-[10%] pr-[17px] h-full  ">
                                  <img src={images.save} alt="" />
                                </div>
                        </div>
                 </div>
             </div>
          </div>
      </div>
    </>
  )
}

export default NewsDetail
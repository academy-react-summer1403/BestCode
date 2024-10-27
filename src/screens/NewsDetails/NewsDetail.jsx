import React from 'react'
import images from "../../assets/img/NewsDetail";
import Card from '../../components/common/SideCard/card';
import CardNewsDetail from './CardNewsDetail';
import TextBar from './TextBar';
import RateBar from './RateBar';
import Comment from '../../components/common/Comment/Comment';

const NewsDetail = () => {
  
    return (
    <>
    
      <div className="w-full h-full flex font-['BYekan1'] justify-center bg-[#F9F9F9] dark:bg-gray-800 ">
          
          <div className=" w-[81%] max-lg:w-[85%] max-cd:w-[92%] max-smx3:w-[98%] flex max-md:flex-col gap-4  border-2 border-red-700">
             
             <div id='Left' className="w-[40%] max-md:w-[100%] h-fit border-2 border-blue-500 flex flex-wrap max-md:order-2">
                
                <div className="w-[100%] h-[329px] flex justify-center dark:bg-gray-800 rounded-tr-[10px]  rounded-bl-[10px] rounded-tl-[75px] rounded-br-[10px] ">
                    <img className="shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]" src={images.Women} alt="" />
                </div>
                  

                <div className=" h-[601px] w-[100%] bg-[#FFFF] dark:bg-gray-300 rounded-[15px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] flex flex-wrap mt-7 relative ">

                  <div className=" h-[50px] w-[92%] rounded-t-xl mt-[16px] m-auto bg-[#E8E8E8] shadow-[0_1px_2px_0px_rgba(0,0,0,2)] relative">
              

                    <span className=" w-[50%] h-[21px]  text-right text-[20px] leading-[21px] font-normal text-[#555555] absolute top-[14px] right-[27px]">
                      دوره های مرتبط 
                    </span>

                  </div>

                                                            <Card />

                </div>


                                                         <CardNewsDetail />
             </div>                         


             <div id='Right' className="w-[60%] max-md:w-[100%] h-[100%] flex flex-wrap border-2 border-blue-500 max-md:order-1">
                 
                <div dir='rtl' className="w-[100%] h-[149px] flex justify-center relative bg-custom-gradient backdrop-blur-md rounded-tr-[75px]  rounded-bl-[10px] rounded-tl-[5px] rounded-br-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                        
                        <div className=" w-[94%] h-[86px] flex absolute right-[35px] max-cd:right-[20px]  top-[32px]  ">
                            <div className=" w-[14px] h-[14px] rounded-full bg-[#01CEC9] relative top-4   "></div>

                            <div className=" w-[98%] h-[50%] font-bold text-[22px] leading-[33px] dark:text-[#01CEC9] text-[#005351] mr-3 ">
                            ری اکت چیست و چه کاربرد هایی دارد؟ + ۵ دلیل استفاده از ری اکت
                            </div>

                        
                        </div>

                        <div className=" w-[60%] max-xl:w-[355px] max-xl:gap-1 h-[30px] border-2 border-red-700 flex absolute left-[10%]  max-cd:left-[6%] max-smx2:left-[1%] top-[103px]  ">
                               
                               <div className=" w-[30%] max-xl:w-[91px] h-5 flex font-normal text-[15px] leading-[16px] text-[#AAAA] border-2 border-blue-700">
                                      <span>
                                      ۵۶ بازدید
                                      </span>
                                      <img className="mr-2" src={images.eyse} alt="" />
                               </div>
                               <div className=" w-[30%]max-xl:w-[111px] h-5 flex font-normal text-[15px] leading-[16px] text-[#AAAA] border-2 border-blue-700">
                                      <span>
                                      ۱۴۰۳/۰۱/۱۸
                                      </span>
                                      <img className="mr-2" src={images.callender} alt="" />
                               </div>
                               <div className=" w-[30%] max-xl:w-[111px] h-5 flex font-normal text-[15px] leading-[16px] text-[#AAAA] border-2 border-blue-700">
                                      <span>
                                      مهدی اصغری
                                      </span>
                                      <img className="mr-2" src={images.person} alt="" />
                               </div>
                                  <img className="  pr-[15px] max-smx4:pr-[2px] h-full  " src={images.save} alt="" />
                        </div>
                </div>
                


                                                          <TextBar />

                                                          <RateBar />

                <div dir='rtl' className=" h-[953px] w-full  flex flex-wrap relative p-0 " >
                                                          <Comment />
                </div>


                  

             </div>
          </div>
      </div>
    </>
  )
}

export default NewsDetail
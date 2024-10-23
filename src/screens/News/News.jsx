import React from "react";
import images from "../../assets/img/News";
import SearchForm from "../../components/common/SearchForm/SearchForm";
import PagiantionDashboard from "../../components/common/PaginationDashboard/PagiantionDashboard";
import Card from "./Card";


const News = () => {
  
  const placeHolder ='چی میخوای یاد بدونی؟... '
const formStyle =`w-[100%] h-[64.81px] 
shadow-lg pl-[6.3px] rounded-[35px] 
py-[7.2px] flex items-center justify-between 
border border-[#DFDFDF]
font-['BYekan1']
backdrop-blur-md

`;
const inputStyle = `font-primaryRegular text-right 
                      placeholder:text-[18px] w-[159px] 
                      h-[21.25px] mr-[39.27px] border-none 
                      outline-none font-['BYekan1']
                      text-[#AAAAAA]
                      max-sm:placeholder:text-[15px]
                      dark:placeholder:dark:text-[#f7f7f7]
                      bg-transparent
                      smx:text-[18px]`            
                      
  const inputdivStyle =`w-[48.57px] h-[49.94px] bg-[#D47300] 
                                      rounded-full flex justify-center 
                                      items-center
                                      max-sm:h-[37px]
                                      max-sm:w-[37px]
                                      smx:h-[49.94px]
                                      smx:w-[48.57px] ` 
  return (
    <>
      <div className="w-[100%]   flex flex-wrap relative bg-NewsBg bg-[#F9F9F9] dark:bg-gray-800 font-['BYekan1']">
        <div className=" w-[76%] max-xl:w-[80%] max-lg:w-[90%] max-smx3:w-[95%] h-[500px] mr-auto ml-auto  ">
          <div
            dir="rtl"
            className=" w-[98%] h-[272px] flex ml-auto mt-[74px] rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[10px] rounded-br-[10px] bg-[#EBF9F982] shadow-[0_1px_2px_0px_rgba(0,0,0,0.4)] "
          >
            <div className=" w-[55%] h-[100%]  relative ">
              <div className=" w-[300px] h-[86px] flex flex-wrap absolute right-[33px] top-[40px]  ">
                <div className=" w-[14px] h-[14px] rounded-full bg-[#01CEC9] relative top-5   "></div>

                <div className=" w-[80%] h-[50%] font-bold text-[35px] leading-[50px] text-[#00000] mr-3 ">
                  اخبار و مقالات
                </div>

                <div className=" w-[60%] h-[50%] font-normal text-[20px] leading-[45px] text-[#AAAAAA] mr-6">
                  با ما خودت رو به روز کن
                </div>
              </div>
              
              <div dir='ltr' className="w-[90%] max-md:w-[160%] h-[64px]  absolute top-[158px] right-[55px] max-md:right-[35px] max-smx:right-[20px] flex ">
                
                <SearchForm 
                  placeholder={placeHolder}
                  formStyle={formStyle}
                  inputStyle={inputStyle}
                  inputdivStyle={inputdivStyle}
                />
             
              </div>
            </div>

            <img
              className="w-[45%] h-[490px] relative bottom-[46px] right-[25px] max-md:hidden "
              src={images.Student}
              alt=""
            />
          </div>
        </div>

        <div className="w-[100%]  flex max-sm:flex-col gap-7 ">
          <div
            id="left"
            className=" w-[20%] max-cd:w-[40%] max-xl:w-[30%] max-sm:w-[303px] ml-auto max-sm:mr-auto "
          >
            <div className="w-[100%] h-[407px] bg-[#ffffff]  dark:bg-gray-200  rounded-[10px] mb-9 flex flex-wrap relative shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] ">
              <div className=" w-[80%] h-16 mr-auto ml-auto  flex-col mt-3 ">
                <div className=" w-[100%] h-[50%] relative  pl-[23%] text-[20px] leading-[28px] font-bold text-[#005351] ">
                  مطالب پیشنهادی
                </div>
                <div className=" w-[100%] h-[50%] relative  pl-[10%] align-middle text-[13px] leading-[27px] font-normal text-[#AAAAAA] ">
                  این مطالب هم میتونه براتون جالب باشه
                </div>
              </div>

              <div
                dir="rtl"
                className=" w-[85%] h-[320px] relative  flex flex-col mr-auto ml-auto pt-3  "
              >
                <div className=" w-[85%] h-[70px]   relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-full pr-[3%] text-[14px] leading-[17px] font-bold text-[#006865] ">
                      چرا فیگما؟
                    </div>

                    <div className=" w-full pr-[3%] h-10 text-[11px] leading-[46px] font-normal text-[#01B4AF]">
                      مشاهده مطلب +
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.figma} alt="" />
                </div>
                <div className=" w-[85%] h-[70px] mt-9  relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[138%] pr-[3%] text-[14px] leading-[17px] font-bold text-[#006865] ">
                    چگونه یک مدیر پروژه باشیم؟
                    </div>

                    <div className=" w-full pr-[3%] h-10 text-[11px] leading-[46px] font-normal text-[#01B4AF]">
                      مشاهده مطلب +
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.employ} alt="" />
                </div>
                <div className=" w-[85%] h-[70px] mt-9  relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[130%] pr-[3%] text-[14px] leading-[17px] font-bold text-[#006865] ">
                    سرعت تکنولوژی در قرن ۲۱
                    </div>

                    <div className=" w-full pr-[3%] h-10 text-[11px] leading-[46px] font-normal text-[#01B4AF]">
                      مشاهده مطلب +
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.run} alt="" />
                </div>
                
              </div>
            </div>

            <div className="w-[100%] h-[407px] bg-[#ffffff] dark:bg-gray-200  rounded-[10px] mb-9 pt-[6px] flex-wrap relative shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] ">
              <div className=" w-[80%] h-16 mr-auto ml-auto  flex-col mt-3 ">
                <div className=" w-[100%] h-[50%] relative  pl-[23%] text-[20px] leading-[28px] font-bold text-[#005351] ">
                  مطالب پیشنهادی
                </div>
                <div className=" w-[100%] h-[50%] relative  pl-[10%] align-middle text-[13px] leading-[27px] font-normal text-[#AAAAAA] ">
                  این مطالب هم میتونه براتون جالب باشه
                </div>
              </div>

              <div
                dir="rtl"
                className=" w-[85%] h-[320px] relative  flex flex-col mr-auto ml-auto pt-3  "
              >
                <div className=" w-[85%] h-[70px]   relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[138%] pr-[2%] text-[11px] leading-[17px] font-bold text-[#006865] ">
                    شروع یادگیری توسعه وب با ری اکت
                    </div>

                    <div className=" w-[122%] pr-[74%] gap-2 h-10 flex ">
                      <div className="flex gap-[2px] text-[13px] leading-[36px] font-normal text-[#AAAA]">
                         58
                         <img src={images.heart} alt="" />

                      </div>
                      <div className="flex text-[13px] leading-[36px] font-normal text-[#AAAA]">
                         
                         124
                         <img src={images.eyseb} alt="" />
                      </div>
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.Ads} alt="" />
                </div>
                <div className=" w-[85%] h-[70px] mt-9  relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[138%] pr-[2%] text-[11px] leading-[17px] font-bold text-[#006865] ">
                    شروع یادگیری توسعه وب با ری اکت
                    </div>

                    <div className=" w-[122%] pr-[74%] gap-2 h-10 flex ">
                      <div className="flex gap-[2px] text-[13px] leading-[36px] font-normal text-[#AAAA]">
                         58
                         <img src={images.heart} alt="" />

                      </div>
                      <div className="flex text-[13px] leading-[36px] font-normal text-[#AAAA]">
                         
                         124
                         <img src={images.eyseb} alt="" />
                      </div>
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.Ads} alt="" />
                </div>
                <div className=" w-[85%] h-[70px] mt-9  relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[140%] pr-[2%] text-[11px] leading-[17px] font-bold text-[#006865] ">
                    شروع یادگیری توسعه وب با ری اکت
                    </div>

                    <div className=" w-[122%] pr-[74%] gap-2 h-10 flex ">
                      <div className="flex gap-[2px] text-[13px] leading-[36px] font-normal text-[#AAAA]">
                         58
                         <img src={images.heart} alt="" />

                      </div>
                      <div className="flex text-[13px] leading-[36px] font-normal text-[#AAAA]">
                         
                         124
                         <img src={images.eyseb} alt="" />
                      </div>
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.Ads} alt="" />
                </div>
                
              </div>
            </div>

            <div className="w-[100%] h-[407px] bg-[#ffffff] dark:bg-gray-200  rounded-[10px] mb-9 pt-[6px] flex-wrap relative shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] ">
              <div className=" w-[80%] h-16 mr-auto ml-auto  flex-col mt-3 ">
                <div className=" w-[100%] h-[50%] relative  pl-[23%] text-[20px] leading-[28px] font-bold text-[#005351] ">
                  مطالب پیشنهادی
                </div>
                <div className=" w-[100%]  h-[50%] relative  pl-[10%] align-middle text-[13px] leading-[27px] font-normal text-[#AAAAAA] ">
                  این مطالب هم میتونه براتون جالب باشه
                </div>
              </div>

              <div
                dir="rtl"
                className=" w-[85%] h-[320px] relative  flex flex-col mr-auto ml-auto pt-3  "
              >
                <div className=" w-[85%] h-[70px]   relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-full pr-[3%] text-[14px] leading-[17px] font-bold text-[#006865] ">
                    دوره جامع انگولار
                    </div>

                    <div className=" w-full pr-[3%] h-10 text-[11px] leading-[46px] font-normal text-[#01B4AF]">
                      مشاهده مطلب +
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.Angolar} alt="" />
                </div>
                <div className=" w-[85%] h-[70px] mt-9  relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[138%] pr-[3%] text-[14px] leading-[17px] font-bold text-[#006865] ">
                    دوره جامع فیگما
                    </div>

                    <div className=" w-full pr-[3%] h-10 text-[11px] leading-[46px] font-normal text-[#01B4AF]">
                      مشاهده مطلب +
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.figma} alt="" />
                </div>
                <div className=" w-[85%] h-[70px] mt-9  relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[130%] pr-[3%] text-[14px] leading-[17px] font-bold text-[#006865] ">
                    سرعت تکنولوژی در قرن ۲۱
                    </div>

                    <div className=" w-full pr-[3%] h-10 text-[11px] leading-[46px] font-normal text-[#01B4AF]">
                      مشاهده مطلب +
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.React} alt="" />
                </div>
                
              </div>
            </div>
          </div>

          <div
            id="right"
            className="  w-[62%] max-cd:w-[55%] max-sm:w-[100%]  mr-auto max-sm:ml-auto mt-[-4%] flex-wrap "
          >
            <div dir="rtl" className="w-[100%]  flex max-cd:flex-col gap-8 max-cd:gap-2 mb-6  ">
              <div className=" w-[251px] h-[38px]  relative text-[26px] leading-[39px] font-bold text-[#005351]  dark:text-gray-50 ">
                جدیدترین اخبار و مقالات  
              </div>
              <div className=" w-[207px] h-[38px]  relative ">
                <div className="h-full w-full flex justify-center bg-[#FFFFFF] rounded-[31px] shadow-[0px_1px_3px_0px_#00000025]">
                  <img src="../36.svg" className="h-[21px] w-[21px] my-auto ml-[15%] "/>
                  <button className="text-[18px] leading-4 font-normal text-[#333333] ">جدیدترین</button>
                  <img src="../35.svg" className="h-[13px] w-[15px] my-auto mr-[15%] "/>
                </div>  
              </div>
            </div>

            <div className="w-[100%]  flex flex-wrap justify-center gap-[25px] ">
                                                    
                                                    <Card />
              
                                                    
                                                     <PagiantionDashboard />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;

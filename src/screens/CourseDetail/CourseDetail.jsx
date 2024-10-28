import React from "react";
import Accordion from "../../components/CourseDetail/Accordion";
import Top from "../../components/CourseDetail/Top";
import Detail from "../../components/CourseDetail/Detail";
import images from '../../assets/img/coursDetail';
import Comment from '../../components/common/Comment/Comment.jsx';
import Card from '../../components/common/SideCard/card';

const CourseDetail = () => {
  
   
  
  return (
    <>
  <div dir="rtl" className="  font-['BYekan'] bg-[#F9F9F9] dark:bg-gray-800 ">
    <div id="ADS" className=" h-[395px] max-sm:h-fit w-[81.3%] max-xl:w-[90%] max-cd:w-[97%] max-md:w-[100%]  mx-auto flex max-sm:flex-col-reverse gap-[29px] max-cd:gap-[15px] max-md:gap-[5px] mt-[35px]" >
         
       <Top />
    </div>
    
  <div className=" flex max-md:flex-col gap-[30px] mt-7 " >
    
    <div id="right" className=" h-[2462px] w-[53.3%] max-cd:w-[58%] max-md:w-[70%] max-smx3:w-[98%] flex flex-wrap max-md:order-2 mr-auto max-md:mx-auto " >

      <div className=" h-[620px] w-full  flex  flex-wrap " >
        
        <div className=" h-[33px] w-[100%] " > 
           <p className=" text-[25px] leading-[32px] font-bold aling-right text-[#005351] dark:text-blue-400 " > توضیحات </p> 
        </div>
       

        <div className=" h-[570px] w-[810px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.3)] m-auto overflow-hidden relative rounded-2xl backdrop-opacity-60 bg-gradient-to-b from-[#ffffff] to-gray-400"
                       >
          <div className="w-[100%] border-2 m-auto pt-6 text-[18px] max-smx3:text-[14px] leading-[27px] font-normal aling-right text-slate-600 pl-10 pr-10 " > 
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </div>
          
          <button class=" absolute bottom-[44px] right-[35%] rounded-full border border-[#01CEC9] py-2 px-4 text-center text-[20px] font-normal leading-[32px] transition-all shadow-sm hover:shadow-lg text-[#006865] dark:text-blue-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
             مطالعه بیشتر +
          </button>
        </div>
        

      </div>

      <div className=" h-[890px] w-full flex flex-wrap relative " >
        
        <Accordion />

      </div>
      
      <div className=" h-[953px] w-full  flex flex-wrap relative p-0 " >
        <Comment />
      </div>

    </div>

    <div id="left" className=" h-[1616px] w-[27%] max-md:w-[70%]  max-xl:w-[33%] max-cd:w-[40%] max-smx3:w-[92%] flex flex-wrap max-md:order-1 relative ml-auto max-md:mx-auto ">

      <div className=" h-[1015px] w-[100%] bg-[#FFFF] dark:bg-gray-300 rounded-[15px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] flex flex-wrap relative">

        <div className=" w-[90%] h-[71px]  flex mt-[24px] m-auto gap-[15px]">

          <div className=" w-[49%] h-full bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">

            <div className=" w-[42px] h-[43px]  absolute top-[16px] right-[42px] flex flex-wrap
                           
                          ">
              <span className=" w-full h-[50%]  text-center text-[19px] leading-[21px] font-normal"> 216 </span>
              <span className=" w-full h-[50%]  text-center text-[15px] leading-[21px] font-normal text-[#888888] "> دانشجو </span>
            </div>

            <div className=" w-[35px] h-[35px]  absolute top-[19px] left-[20%] max-lg:left-[5%] ">
            <img src={images.peopole}/>
            </div>

          </div>

          <div className=" w-[49%] h-full bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative">

           <div className=" w-[42px] h-[43px] absolute top-[18px] right-[40px] flex flex-wrap">
              <span className=" w-full h-[50%]  text-center text-[19px] leading-[21px] font-normal"> 4.7 </span>
              <span className=" w-full h-[50%]  text-center text-[15px] leading-[21px] font-normal text-[#888888] "> رضایت</span>
            </div>

            <div className=" w-[35px] h-[35px] absolute top-[18px] left-[20%] max-lg:left-[5%]">    

            <img src={images.star} />
            </div>
            

          </div>
        </div>
        
        <div className=" w-[88%] h-[44px]   absolute top-[119px] right-[23px] flex flex-wrap  leading-[21px] font-normal text-center text-[#00504E]" >

          <div className=" w-[95px] h-[21px] text-[13px] " > درصد تکمیل دوره </div>
          <div className=" w-[27px] h-[21px] text-[15px] absolute left-2 " > 87% </div>

          <div className=" w-full h-[8px] bg-[#F0F0F0]  rounded-[7px] mb-[-7px] relative ">
            <div className=" w-[87%] h-[8px] bg-[#01CEC9] rounded-[7px] absolute left-0 "></div>
          </div>
        </div>
          
                 <Detail />

         <div className=" w-[177px] h-[199px] flex flex-wrap absolute bottom-[36px] right-[27%] ">
          
            
            <img src={images.mehdi} className="w-[135px] h-[135px] m-auto  rounded-full shadow-[0_3px_4px_0px_rgba(0,0,0,0)]"/>

            <button class=" w-[177px] h-[40px] mt-[22px]   rounded-full border border-[#E48900] py-2 px-4 text-center text-[15px] font-normal leading-[21px] transition-all shadow-sm hover:shadow-lg text-[#6B3A00] hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              پروفایل مدرس دوره           
            </button>

         </div>
      </div>

      <div className=" h-[601px] w-[100%] bg-[#FFFF] dark:bg-gray-300 rounded-[15px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] flex flex-wrap mt-7 relative 
                       ">

        <div className=" h-[50px] w-[378px] rounded-t-xl mt-[16px] m-auto bg-[#E8E8E8] shadow-[0_1px_2px_0px_rgba(0,0,0,2)] relative">
     

           <span className=" w-[114px] h-[21px]  text-center text-[20px] leading-[21px] font-normal text-[#555555] absolute top-[14px] right-[27px]">
             دوره های مرتبط 
           </span>

        </div>

        <Card />

      </div>

    </div>

  </div>

  </div> 
    </>
   )
}

export default CourseDetail
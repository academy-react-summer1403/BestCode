import React from "react";
import Accordion from "./Accordion";
import Comment from "./Comment";
import images from '../../assets/img/coursDetail'
const CourseDetail = () => {
  
   
  
  return (
    <>
  <div dir="rtl" className="bg-[url('/img/hero-pattern.svg')] font-['BYekan'] ">
    <div id="ADS" className=" h-[395px] w-[1251px]  mx-auto flex gap-[29px] mt-[35px]" >
       
       
       <div className=" h-[395px] w-[598px]  flex flex-wrap rounded-2xl shadow-[0_3px_5px_0px_rgba(0,0,0,3)]" >
        
           <div className=" h-[41px] w-[100%]  flex gap-[168px] mt-[31px] ">
           
           
               <div className=" h-[41px] w-[335px] mr-[33px] text-[25px] leading-[42px] font-bold align-middle flex flex-nowrap text-[#333333] ">
                   <p>  دوره تخصصی و جامع  React Js </p> 
               </div>
               <div className=" h-[27px] w-[27px] ml-[35px]" >
                 <img src={images.save} alt="" />
               </div>
           </div>

           <div className=" h-[84px] w-[100%]  ">
                <div className=" h-[100%] w-[526px]  m-auto text-[18px] leading-[27px] font-normal aling-right text-slate-600 "> 
               حدود 40 ساعت آموزش جامع و تخصصی ری اکت!  شما در دوره آموزش ری اکت ReactJS ، این کتابخانه قدرتمند و پر استفاده جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               </div>
           </div>
           
           <div className=" h-[50px] w-[100%]  flex gap-[154px] ">

               <div className=" h-[43px] w-[210px] ml-[40px] flex ">
               
                  <img src={images.person} alt="" className=" h-[21px] w-[18px] mr-7" />

                  <span className=" text-[20px] leading-[10px] font-normal text-[#005B58] mr-[8px] mt-[3px] "> مهدی اصغری </span>

               </div>

               <div className=" h-[25px] w-[210px] flex ">
               
                  <span className=" text-[23px] leading-[10px] font-normal text-[#005B58]"> ۳,۴۰۰,۰۰۰ </span>
                  <span className=" text-[14px] leading-[15px] font-normal ml-3 mr-1 text-[#006865] "> تومان </span>
                  <img src={images.money} alt="" className=" h-[20px] w-[23px] " />

                  
               </div>
           </div>
           
           <div className=" h-[55px] w-[100%] flex  ">
               <button className=" h-[55px] w-[347px] m-auto bg-[#FF8A00] rounded-[9px] relative "> 
               <span className=" mr-8 mt-[50px] text-[25px] text-[#FFFFFF] font-bold "> شرکت در دوره! </span>
               <img src={images.Bpik} alt="" className=" h-[20px] w-[23px] mr-[80px] mt-[-25px] " />

                </button>

           </div>
       </div>

       <div className=" h-[395px] w-[624px] " >
       <img src={images.ads} className=" w-[101%] "/>
       </div>
       
    </div>
    
  <div className=" flex gap-[30px] mt-7 " >
    
    <div id="right" className=" h-[2462px] w-[810px] flex flex-wrap mr-[133px] ">

      <div className=" h-[620px] w-full  flex  flex-wrap " >
        
        <div className=" h-[33px] w-[100%] " > 
           <p className=" text-[25px] leading-[32px] font-bold aling-right text-[#005351] " > توضیحات </p> 
        </div>
         
         <div className=" h-[570px] w-[810px]rounded-2xl shadow-[0_3px_5px_0px_rgba(0,0,0,3)] m-auto overflow-hidden relative rounded-2xl ">
          <div className="w-[710px] border-2 m-auto pt-6 text-[18px] leading-[27px] font-normal aling-right text-slate-600 pl-10 pr-10" > 
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </div>
          
          <button class=" absolute bottom-[44px] right-[315px] rounded-full border border-[#01CEC9] py-2 px-4 text-center text-[20px] font-normal leading-[32px] transition-all shadow-sm hover:shadow-lg text-[#006865] hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
             مطالعه بیشتر ^
          </button>
        </div>
        

      </div>

      <div className=" h-[890px] w-full border-2 border-blue-500 flex " >
        
        <Accordion />

      </div>
      
      <div className=" h-[953px] w-full border-2 border-blue-500 flex " >
        <Comment/>
      </div>

    </div>

    <div id="left" className=" h-[1616px] w-[412px] flex flex-wrap  ">

      <div className=" h-[1015px] w-[412px] rounded-[15px] shadow-[0_3px_5px_0px_rgba(0,0,0,3)] flex flex-wrap relative ">

        <div className=" w-[367px] h-[71px]  flex mt-[24px] m-auto gap-[15px] ">

          <div className=" w-[174px] h-full bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">

            <div className=" w-[42px] h-[43px] border absolute top-[16px] right-[42px] flex flex-wrap ">
              <span className=" w-full h-[50%]  text-center text-[19px] leading-[21px] font-normal"> 216 </span>
              <span className=" w-full h-[50%]  text-center text-[15px] leading-[21px] font-normal text-[#888888] "> دانشجو </span>
            </div>

            <div className=" w-[35px] h-[35px] border absolute top-[19px] left-[42px] ">
            <img src={images.peopole}/>
            </div>

          </div>

          <div className=" w-[177px] h-full bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative">

           <div className=" w-[42px] h-[43px] border absolute top-[18px] right-[40px] flex flex-wrap ">
              <span className=" w-full h-[50%]  text-center text-[19px] leading-[21px] font-normal"> 4.7 </span>
              <span className=" w-full h-[50%]  text-center text-[15px] leading-[21px] font-normal text-[#888888] "> رضایت</span>
            </div>

            <div className=" w-[35px] h-[35px]  border absolute top-[18px] left-[36px] ">

            <img src={images.star} />
            </div>
            

          </div>
        </div>
        
        <div className=" w-[366px] h-[44px]   absolute top-[119px] right-[23px] flex flex-wrap  leading-[21px] font-normal text-center text-[#00504E] " >

          <div className=" w-[95px] h-[21px] text-[13px] " > درصد تکمیل دوره </div>
          <div className=" w-[27px] h-[21px] text-[15px] mr-[240px]  " > 87% </div>

          <div className=" w-full h-[8px] bg-[#F0F0F0] rounded-[7px] mb-[-7px] relative ">
            <div className=" w-[87%] h-[8px] bg-[#01CEC9] rounded-[7px] absolute left-0 "></div>
          </div>
        </div>
          
        <div className=" w-[366px] h-[570px]  border-t-[#F6F6F6] border-b-[#F6F6F6] border-t-2 border-b-2 absolute top-[186px] right-[22px] flex flex-wrap">
          
          <div className=" w-full h-[71px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative mt-5"> 
          
          <div className=" w-[133px] h-[44px] border absolute top-[12px] right-[74px] flex flex-wrap " >
                <span className=" w-full h-[50%]  text-right text-[14px] leading-[23px] font-normal text-[#888888]"> دسته بندی  </span>
                <span className=" w-full h-[50%]  text-right text-[16px] leading-[23px] font-normal text-[#005351]" > فرانت اند  </span>
          </div>

          <div className=" w-[28px] h-[28px] border absolute top-[22px] right-[29px] " >
            <img src={images.file} className=" w-[28px] h-[28px]  "/>
          </div>      
          
          </div>

          <div className=" w-full h-[71px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">
            
              <div className=" w-[133px] h-[44px] border absolute top-[12px] right-[74px] flex flex-wrap " >
                <span className=" w-full h-[50%]  text-right text-[14px] leading-[23px] font-normal text-[#888888]"> پیش نیاز ها </span>
                <span className=" w-full h-[50%]  text-right text-[16px] leading-[23px] font-normal text-[#005351] " > HTML , CSS , JS </span>
              </div>
              
              <div className=" w-[28px] h-[28px]  border absolute top-[22px] right-[29px] " >
                  <img src={images.time} className=" w-[28px] h-[28px]  "/>
              </div>      
               
          </div>

          <div className=" w-full h-[71px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">
          
             <div className=" w-[150px] h-[44px] border absolute top-[12px] right-[74px] flex flex-wrap  " >
                <span className=" w-full h-[50%] text-[14px] leading-[23px] font-normal text-[#888888] "> نوع اموزش </span>
                <span className=" w-full h-[50%] text-[16px] leading-[23px] font-normal text-[#005351]" > حضوری و غیر حضوری </span>
              </div>

              <div className=" w-[28px] h-[28px] bg-[url('/img/hero-pattern.svg')] border absolute top-[22px] right-[29px] " >
                <img src={images.form} className=" w-[28px] h-[28px]  "/>
              </div>      
             </div>

          <div className=" w-full h-[71px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">
            
            <div className=" w-[133px] h-[44px] border absolute top-[12px] right-[74px] flex flex-wrap " >
                  <span className=" w-full h-[50%]  text-right text-[14px] leading-[23px] font-normal text-[#888888]"> وضعیت دوره </span>
                  <span className=" w-full h-[50%]  text-right text-[16px] leading-[23px] font-normal text-[#005351]" > درحال برگزاری </span>
                </div>

            <div className=" w-[28px] h-[28px] items-center justify-center flex border absolute top-[22px] right-[29px]  " >
              <img src={images.tik} className=" w-[28px] h-[28px]  "/>
            </div>      
          </div>

          <div className=" w-full h-[71px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative "> 
             
            <div className=" w-[133px] h-[44px] border absolute top-[12px] right-[74px] flex flex-wrap " >
                  <span className=" w-full h-[50%]  text-right text-[14px] leading-[23px] font-normal text-[#888888]"> تاریخ شروع دوره </span>
                  <span className=" w-full h-[50%]  text-right text-[16px] leading-[23px] font-normal text-[#005351]" > 1403/02/12 </span>
            </div>

            <div className=" w-[28px] h-[28px] border absolute top-[22px] right-[29px] " >
            <img src={images.time} className=" w-[28px] h-[28px]  "/>

              </div>      
            </div>

          <div className=" w-full h-[71px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">
            
            <div className=" w-[133px] h-[44px] border absolute top-[12px] right-[74px] flex flex-wrap " >
              <span className=" w-full h-[50%]  text-right text-[14px] leading-[23px] font-normal text-[#888888]"> تاریخ پایان دوره  </span>
              <span className=" w-full h-[50%]  text-right text-[16px] leading-[23px] font-normal text-[#005351]" > 1403/06/09 </span>
            </div>

            <div className=" w-[28px] h-[28px] border absolute top-[22px] right-[29px] " >
            <img src={images.time} className=" w-[28px] h-[28px]  "/>
            </div>      
         </div>

        </div>

         <div className=" w-[177px] h-[199px] flex flex-wrap absolute bottom-[36px] right-[118px] ">
          
            <div className=" w-[135px] h-[135px] m-auto border rounded-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.4)] ">
            <img src={images.mehdi} className="  w-[135px] h-[135px]   "/>

            </div>
            
            <button class=" w-[177px] h-[40px] mt-[22px]   rounded-full border border-[#E48900] py-2 px-4 text-center text-[15px] font-normal leading-[21px] transition-all shadow-sm hover:shadow-lg text-[#6B3A00] hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              پروفایل مدرس دوره           
            </button>

         </div>
      </div>

      <div className=" h-[601px] w-[412px] rounded-[15px] shadow-[0_3px_5px_0px_rgba(0,0,0,3)] flex flex-wrap mt-7 relative  ">

        <div className=" h-[50px] w-[378px] rounded-t-xl mt-[16px] m-auto bg-[#E8E8E8] shadow-[0_1px_2px_0px_rgba(0,0,0,2)] relative">
     

           <span className=" w-[114px] h-[21px]  text-center text-[20px] leading-[21px] font-normal text-[#555555] absolute top-[14px] right-[27px]">
             دوره های مرتبط 
           </span>

        </div>

        <div className=" w-[379px] h-[496px]  flex flex-wrap relative m-auto border ">
          <div className=" w-[378px] h-[112px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">
                
                <div className=" w-[126px] h-[84px] border rounded-[6px] shadow-[0_1px_1px_0px_rgba(0,0,0,0.2)] absolute top-[14px] right-[16px] ">
                <img src={images.fig}/>

                </div>
                  
                <div className=" w-[200px] h-[50px] absolute top-[14px] left-[21px] text-right text-[17px] leading-[21px] font-normal text-[#005351] ">
                  دوره تخصصی ترفند هایه طراحی فرانت اند
                </div>
  
                <span className=" w-[76px] h-[21px] absolute top-[73px] left-[21px] text-right text-[12px] leading-[21px] font-normal text-[#01B4AF]" > 
                 مشاهده دوره + 
                </span>
                
              </div>

              <div className=" w-[378px] h-[112px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">
                
                <div className=" w-[126px] h-[84px] border rounded-[6px] shadow-[0_1px_1px_0px_rgba(0,0,0,0.2)] absolute top-[14px] right-[16px] ">
                <img src={images.fig}/>

                </div>
                  
                <div className=" w-[200px] h-[50px] absolute top-[14px] left-[21px] text-right text-[17px] leading-[21px] font-normal text-[#005351] ">
                  دوره تخصصی ترفند هایه طراحی فرانت اند
                </div>
  
                <span className=" w-[76px] h-[21px] absolute top-[73px] left-[21px] text-right text-[12px] leading-[21px] font-normal text-[#01B4AF]" > 
                 مشاهده دوره + 
                </span>
                
              </div>

              <div className=" w-[378px] h-[112px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">
                
                <div className=" w-[126px] h-[84px] border rounded-[6px] shadow-[0_1px_1px_0px_rgba(0,0,0,0.2)] absolute top-[14px] right-[16px] ">
                <img src={images.fig}/>

                </div>
                  
                <div className=" w-[200px] h-[50px] absolute top-[14px] left-[21px] text-right text-[17px] leading-[21px] font-normal text-[#005351] ">
                  دوره تخصصی ترفند هایه طراحی فرانت اند
                </div>
  
                <span className=" w-[76px] h-[21px] absolute top-[73px] left-[21px] text-right text-[12px] leading-[21px] font-normal text-[#01B4AF]" > 
                 مشاهده دوره + 
                </span>
                
              </div>

              <div className=" w-[378px] h-[112px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">
                
                <div className=" w-[126px] h-[84px] border rounded-[6px] shadow-[0_1px_1px_0px_rgba(0,0,0,0.2)] absolute top-[14px] right-[16px] ">              
                  <img src={images.fig}/>
                </div>
                  
                <div className=" w-[200px] h-[50px] absolute top-[14px] left-[21px] text-right text-[17px] leading-[21px] font-normal text-[#005351] ">
                  دوره تخصصی ترفند هایه طراحی فرانت اند
                </div>
  
                <span className=" w-[76px] h-[21px] absolute top-[73px] left-[21px] text-right text-[12px] leading-[21px] font-normal text-[#01B4AF]" > 
                 مشاهده دوره + 
                </span>
                
              </div>
          </div>
      </div>

    </div>

  </div>

  </div> 
    </>
   )
}

export default CourseDetail
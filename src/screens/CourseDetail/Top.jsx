import React from 'react'
import images from '../../assets/img/coursDetail'

const Top = () => {
  return (
    <>
      <div className=" h-[101%] w-[598px]  flex flex-wrap rounded-2xl shadow-[0_3px_5px_0px_rgba(0,0,0,3)]
                    " 
      >
        
        <div className=" h-[41px] w-[100%]  flex gap-[168px] mt-[31px] 
                        
                        "
                        >
        
        
            <div className=" h-[41px] w-[335px] mr-[33px] text-[25px] leading-[42px] font-bold align-middle flex flex-nowrap text-[#333333]

                            ">
                <p>  دوره تخصصی و جامع  React Js </p> 
            </div>
            <div className=" h-[27px] w-[27px] ml-[35px]
                           " >
              <img src={images.save} alt="" />
            </div>
        </div>

        <div className=" h-[84px] w-[100%]  ">
             <div className=" h-[100%] w-[526px]  m-auto text-[18px] leading-[27px] font-normal aling-right text-slate-600
                           
                             "> 
            حدود 40 ساعت آموزش جامع و تخصصی ری اکت!  شما در دوره آموزش ری اکت ReactJS ، این کتابخانه قدرتمند و پر استفاده جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
            </div>
        </div>
        
        <div className=" h-[50px] w-[100%]  flex gap-[154px] 
                        ">

            <div className=" h-[43px] w-[210px] ml-[40px] flex
                            
                             ">
            
               <img src={images.person} alt="" className=" h-[21px] w-[18px] mr-7
                                                         
                                                         " />

               <span className=" text-[20px] leading-[10px] font-normal text-[#005B58] mr-[8px] mt-[3px] 
                                "> مهدی اصغری </span>

            </div>

            <div className=" h-[25px] w-[210px] flex
                            " 
                            >
            
               <span className=" text-[23px] leading-[10px] font-normal text-[#005B58]
                               "> ۳,۴۰۰,۰۰۰ </span>
               <span className=" text-[14px] leading-[15px] font-normal ml-3 mr-1 text-[#006865] "> تومان </span>
               <img src={images.money} alt="" className=" h-[20px] w-[23px]
                                                        " />

               
            </div>
        </div>
        
        <div className=" h-[55px] w-[100%] flex  ">
            <button className=" h-[55px] w-[347px] m-auto bg-[#FF8A00] rounded-[9px] relative
                               
                                "> 
            <span className=" mr-8 mt-[50px] text-[25px] text-[#FFFFFF] font-bold 
                            
                            "> شرکت در دوره! </span>
            <img src={images.Bpik} alt="" className=" h-[20px] w-[23px] mr-[80px] mt-[-25px] 
                                                    
                                                    " />

             </button>

        </div>
    </div>

    <div className=" h-[101%] w-[624px] 
                   
                   " >
    <img src={images.ads} className=" w-[101%] h-[103%] "/>
    </div>
    </>
  )
}

export default Top
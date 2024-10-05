import images from '../../assets'

const PodCastSection = () => {
  return (
    <section className="h-[532px] grid justify-center xl:mt-[157.34px] -mb-[36px] max-md:mt-[700px] max-md:hidden
    max-lg:hidden lg:mt-[80px]
    " >
           <div className='xl:w-[1247px] lg:w-full flex justify-center '>
           <div className=' h-[87px]  grid 
                            justify-center ml-[33px]'>
               <div className='flex justify-center items-center 
                               h-[54.38px] gap-[14.13px] ml-[33px]'>
                  <p className='font-primaryMedium text-[35px] text-[#000000] 
                                w-[147.71px] h-[54.38px] '>پادکست ها</p>
                  <div className='h-[13px] w-[13px] bg-[#01CEC9] 
                                  rounded-full'>                    
                  </div>
               </div>
               <div className=' h-[30px]'>
                   <p className='font-primaryRegular text-[#AAAAAA] text-[20px]' 
                   >مجموعه ای از تمام   آنچه شما نیاز دارید
                   </p>
               </div>
           </div> 
           </div>
           <div className='xl:w-[1247px] lg:w-full flex justify-center '>
              <div className='xl:w-[920px] lg:w-[900px] xl:h-[297px]' >
                 <div className="w-[879px] h-[350px] bg-podcast bg-cover 
                                 text-center  flex items-center
                                 mt-[-57px] ml-[0] gap-[45px] ">
                     
                    <div className='flex items-center gap-[45px] relative left-[170px]'>
                       <div className='grid gap-[4.01px] w-[9px] h-[52.66px] 
                                        relative right-[74px]
                                        mt-[173px]
                                      '>
                            <div className='h-[7px] w-[7px] rounded-full bg-white'></div>
                            <div className='h-[7px] w-[7px] rounded-full bg-white'></div>
                            <div className='h-[20px] w-[7px] rounded-full bg-[#00AFAB]'></div>
                            <div className='h-[7px] w-[7px] rounded-full bg-white'></div>
                         </div>
                      <div style={{direction:'rtl'}} className='grid mt-[76px]' >
                        <p className='font-primaryRegular text-[13px] 
                         text-[#AAAAAA] relative right-[216px]  top-[-10px]' > ۱۴ آذرماه ۱۴۰۲</p>
                       <p className='font-primaryMedium text-[26px] text-[#006865]
                              text-right     relative left-[10px] 
                       ' >شروع یادگیری توسعه وب با ری اکت</p>
                       <p className='text-[15px] font-primaryMedium text-[#828F8E] 
                                     text-right mt-[12px]  mb-[18px]
                                     relative left-[10px] 
                                     '>ری اکت (React) به عنوان یکی از محبوب‌ترین کتابخانه‌های جاوا اسکریپتی
                         <br/>
                         و یکی از مهمترین ابزارهای توسعه وب شناخته می‌شود.
                       </p>
                       <div className='flex relative right-[266px] top-[2px]'>
                          <div className='flex items-center h-[53px] gap-[7px] text-[#AAAAAA]'>
                            <p className='text-[13px] font-primaryRegular' >۵۸</p>
                            <img src={images.frame1} width={16} height={16} />
                            
                          </div>
                          <div className='flex items-center h-[53px] gap-[6.32px] text-[#AAAAAA] mr-[19px]'>
                            <p className='text-[13px] font-primaryRegular'>۱۲۴</p>
                             <img  src={images.frame2} width={16} height={16}/>
                          
                          </div>
                          <div className='flex items-center h-[53px] gap-[7px] text-[#AAAAAA] mr-[15px]'>   
                             <p className='text-[13px] font-primaryRegular' >۰۰:۲۳:۳۵</p>
                             <img  src={images.frame3} width={16} height={16}/>
                          </div>
                       </div>
                     </div>
                        <img 
                           src={images.rec36} 
                           width={207} 
                           height={207} 
                           className=' mt-[38px] relative' />

                      </div> 
                 </div>
              </div>
           </div>
    </section>
  )
}

export default PodCastSection
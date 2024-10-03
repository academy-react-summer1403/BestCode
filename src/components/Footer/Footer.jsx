import images from '../../assets'


const Footer = () => {
  return (
    <footer className=" grid  " >
      <div className="h-[352px] w-full mb-[-7.5px] " >
        <div className="bg-footerbg bg-cover h-[340px] mt-[41px] flex items-center justify-center">
           <div className='mb-[32px] flex w-[1247px] gap-[157px]   justify-end h-[257px]'>
              <div className='flex items-center gap-[20px] mt-[138px]'> 
                
                    <img src={images.enamad} width={111} height={111} className='
                    mr-[10px]
                    ' /> 
                
                 <div className='flex w-[219px] h-[104px] gap-[22px] mr-[10px]'> 
                   <div className='h-[104px] w-[219px] flex gap-[2px]'>
                     <div className='grid w-[93px] h-[104px] justify-center justify-items-end  
                      '>
                       
                          <p className='text-[16px] font-primaryRegular text-[#77A9A8]'>اساتید برتر</p>             
                      
                  
                          <p className='text-[16px] font-primaryRegular text-[#77A9A8]'>دسته بندی ها</p> 
                     
                    
                          <p className='text-[16px] font-primaryRegular text-[#77A9A8]'>خدمات ما</p>
                      
                   
                          <p className='text-[16px] font-primaryRegular text-[#77A9A8]'>ورود به حساب</p>
                          
                     </div>
                     <div className='grid items-center relative top-[2px]'>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full relative top-[3px] '></div>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full'></div>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full '></div>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full '></div>
                     </div>
                   </div>
                   <div className='h-[104px] w-[219px] flex'>
                     <div className='grid w-[93px] h-[104px] justify-center justify-items-end
                      '>
                       
                          <p className='text-[16px] font-primaryRegular text-[#77A9A8]'>دوره ها</p>             
                      
                  
                          <p className='text-[16px] font-primaryRegular text-[#77A9A8]'>اخبار و مقالات</p> 
                     
                    
                          <p className='text-[16px] font-primaryRegular text-[#77A9A8]'> پادکست ها</p>
                      
                   
                          <p className='text-[16px] font-primaryRegular text-[#77A9A8]'>تماس با ما</p>
                          
                     </div>
                     <div className='grid items-center relative top-[2px]'>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full relative top-[3px] '></div>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full'></div>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full '></div>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full '></div>
                     </div>
                   </div>
                 </div>   
              </div>
              <div className='grid justify-center gap-[37px] relative top-[20px] left-[2px]' >
                 <div className='flex justify-center items-center ml-[2px] '>
                  <img 
                      src={images.logo} 
                      width={135} 
                      height={50}
                    />
                  </div>
                  <div className='grid gap-[14px]'>
                    <div className='w-[204px] h-[35px] rounded-[20px]
                                  bg-[#008D8A] flex justify-center 
                                    items-center '>
                       <p className='font-primaryMedium text-[#FFFFFF] text-[15px]' >info@pazhooheshgah.ir</p>
                    </div>
                    <div className='flex justify-center gap-[6.22px]'>
                     <div className='w-[35px] h-[35px] bg-[#008D8A] 
                                     rounded-full flex justify-center items-center py-[6.36px] pr-[3px]'>
                            <img src={images.telegram} width={22.27} height={22.27} />
                      </div>
                      <div className='w-[35px] h-[35px] bg-[#008D8A] 
                                     rounded-full flex justify-center items-center 
                                     pr-[1px]  '>
                            <img src={images.instagram}  width={20.36} height={20.36} />
                      </div>
                      <div className='w-[35px] h-[35px] bg-[#008D8A] 
                                     rounded-full flex justify-center items-center'>
                            <img src={images.youtube} width={22.91} height={22.91} />
                      </div>
                      <div className='w-[35px] h-[35px] bg-[#008D8A] 
                                     rounded-full flex justify-center items-center'>
                            <img src={images.linkedin} width={22.27} height={22.27} />
                      </div>
                    </div>
                  </div>
              </div>
               <div className='grid gap-[9px] mt-[147px] ' >
                 <p className='text-[#006865] font-primaryRegular text-right 
                               text-[14px] w-[364px] ' >مجموعه آموزشی فلان فعالیت خود را &nbsp;از سال &nbsp;&nbsp;۱۳۹۰   &nbsp;آغاز کرده است و
                   <br />
                   امروز به بزرگترین کلونی برنامه نویسی شمال کشور تبدیل شده است</p>
                   <p className='text-[#00605D] font-primaryMedium text-right 
                               text-[16px] '>
                   ساری ، میدان خــزر ، جــاده فــرح آباد ، جنب 
                   <br />
                    مجتمع دنیای آرزو<span className='text-[15px] text-[#004F4D] mr-[43px]'
                    >۴۳۳۳۲۰۰۰ -   ۱ ۱ ۰</span>
                   </p>
              </div>
           </div>
        </div>
      </div>
      <div className="w-full h-[42px] bg-[#008D8A] mt-[16px] 
                     flex justify-center items-center
                     font-primaryMedium text-[16px] text-[#FFFFFF]
                     gap-[1px]
                     ">
         <img 
            src={images.copyright} 
            width={15} 
            height={15} 
            className='mb-[18px] mt-[9px]'
            />
        <p>کلیه حقوق این وب سایت متعلق به  آموزشگاه فلان می باشد</p>
      </div>
    </footer>
  )
}

export default Footer
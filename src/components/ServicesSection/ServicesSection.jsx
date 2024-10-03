import images from '../../assets'




const ServicesSection = () => {
  return (
    <section className='h-[516px] grid justify-center '>
        <div className='w-[1247px] flex justify-center mt-[62.34px]'>
           <div className=' h-[87px]  grid 
                            justify-center ml-[23px]'>
               <div className='flex justify-center items-center 
                               h-[54.38px] gap-[14.13px]'>
                  <p className='font-primaryMedium text-[35px] text-[#000000] 
                                w-[122.71px] h-[54.38px]'>خدمات ما</p>
                  <div className='h-[13px] w-[13px] bg-[#01CEC9] 
                                  rounded-full'>                    
                  </div>
               </div>
               <div className=' h-[30px]'>
                   <p className='font-primaryRegular text-[#AAAAAA] text-[20px]' 
                   >مجموعه ای از تمام  هر آنچه شما نیاز دارید
                   </p>
               </div>
           </div>
        </div>
        <div className='w-[1247px] flex justify-center mt-[32px]' >
           <div className="w-[1069px] h-[355.2px] flex 
                          justify-center 
                          gap-[75px]  ">
             <div>
              <div className=" w-[211px] h-[215px]">
                 <img src={images.sritem} width={211} height={170}/>
              </div>
         
            </div>
            <div>
              <div  className="mt-[140px] w-[211px] h-[215px] ">
                <img src={images.sritem2} />
              </div>
            </div>
            <div>
              <div className='w-[211px] h-[215px]   mt-[24px]'>
                  <img src={images.sritem3} />
              </div>
            </div>
            <div>
              <div className='w-[211px] h-[215px]  mt-[140px]'>
                <img src={images.sritem4} />
              </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default ServicesSection
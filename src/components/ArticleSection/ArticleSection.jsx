import React from 'react'
import images from '../../assets'



const ArticleSection = () => {
  return (
    <section className=' h-[707px] grid justify-center '>
        <div className='w-[1247px] flex justify-center mt-[126px]'>
           <div className=' h-[87px]  grid 
                            justify-center ml-[25px]'>
               <div className='flex justify-center items-center 
                               h-[54px] gap-[11.13px]'>
                  <p className='font-primaryMedium text-[35px] text-[#000000] 
                                w-[179px] h-[54px]  text-center'>اخبار و مقالات</p>
                  <div className='h-[13px] w-[13px] bg-[#01CEC9] 
                                  rounded-full'>                    
                  </div>
               </div>
               <div className=' h-[30px]' style={{direction:'rtl'}}  >
                   <p className='font-primaryRegular text-[#AAAAAA] text-[20px] text-center mr-[5px]' 
                   > خـــودت رو با خـــبر کن ! 
                   </p>
               </div>
           </div>
          
        </div> 
        <div className='w-[1247px] flex  justify-center mt-[60.5px]'>
            <div className='w-[1068px] h-[474px]' >
              <div  className='flex h-[474px] gap-[22px]'>         
                 <div className='grid gap-[24px]'>   
                    <div className='flex gap-[22px]'>
                        <img src={images.anitem1} width={250} height={250}/>
                        <img src={images.anitem2} width={250} height={250}/>
                    </div> 
                    <img src={images.anitem4} width={522} height={200}/>
                 </div>    
                 <div className='grid gap-[24px]'>
                      <img src={images.anitem3} width={522} height={200} />
                     <div className='flex gap-[23px]'>
                        <img src={images.anitem5} width={250} height={250}/>
                        <img src={images.anitem6} width={250} height={250}/>
                     </div>
                 </div>
              </div>
            </div>
        </div>
        <div className='w-[1247px]  flex justify-center'>
            <div className='mt-[28px] mb-[15px] flex h-[20px] items-center gap-[7px] ml-[35px]'>
                 <img src={images.arrowdore} width={15} height={15} />
                 <p className='text-[20px] font-primaryRegular text-[#AAAAAA]'>مشاهده بیشتر</p>
            </div>
        </div>
    </section>
  )
}

export default ArticleSection
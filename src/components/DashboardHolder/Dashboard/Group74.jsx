import { Fragment } from 'react'
import images from '../../../assets/dashboardpng'

const Group74 = () => {
  return (
    <Fragment>
       <div className='w-[424px] h-[105px]  relative mt-[5px] flex gap-[44px]'>
               <div className='w-[190px] h-[105px] relative ' >
                   <img src={images.gp87} height={57} width={57} className='absolute left-[20px]' />
                   <div className='w-[190px] h-[77px]  mt-[26px] text-right pr-[21px] 
                                   rounded-[5px]
                                   shadow-[0px_1px_2px_0px_#00000040]' 
                                  style={{direction:'rtl'}}
                    >

                    <p className='w-[63px] h-[43px] 
                    
                    font-primaryMedium 
                    text-[25px] text-[#FFB800] flex items-center
                    pt-[4px] 
                    ' >
                      <span className='text-[30px] ml-[4px]'>۲</span>    
                      دوره</p>
                    <span className='w-[86px] h-[26px] text-[#A7A7A7] text-[18px] font-primaryMedium
                    font-[400]
                    ' >رزرو کرده اید</span>
                 </div>
              </div>
              <div className='w-[190px] h-[105px] relative ' >
              <img src={images.gp86} height={57} width={57} className='absolute left-[20px]' />
              <div className='w-[190px] h-[77px]  mt-[26px] text-right pr-[21px] 
                 rounded-[5px]
                 shadow-[0px_1px_2px_0px_#00000040]
              ' 
                  style={{direction:'rtl'}}
                 >
                    <p className='w-[63px] h-[43px] 
                    
                    font-primaryMedium 
                    text-[25px] text-[#00B4AF] flex items-center
                    pt-[4px] 
                    ' >
                      <span className='text-[30px] ml-[4px]'>۴</span>    
                      دوره</p>
                    <span className='w-[86px] h-[26px] text-[#A7A7A7] text-[18px] font-primaryMedium
                    font-[400]
                    ' >شرکت کرده اید</span>
                 </div>
              </div>
            </div>
    </Fragment>
  )
}

export default Group74
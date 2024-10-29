import { Fragment } from 'react'
import images from '../../../assets/dashboardpng'
const Group73 = () => {
  return (
    <Fragment>
           <div className='md:w-[336px] md:h-[110px]  flex md:gap-[34px] 
                 max-md:grid
                 max-md:justify-items-center
                 max-md:justify-end
                 max-smx3:mt-[140px]
                 max-smx3:justify-center
                 max-md:mt-[20px]
                 '
                 style={{direction:'ltr'}}
                 >
              <div className='w-[110px] h-[110px] max-smx3:w-[100px] '>
                <img src={images.gp74} />
              </div>
              <div className='w-[192px] md:h-[69px] mt-[27px]  text-center max-md:mt-[10px] '
                style={{direction:'rtl'}} 
                >
                 <p
                  className='font-primaryMedium text-[#ABABAB] text-[16px] font-[400] leading-[22.7px]
                   max-smx3:text-[13px]
                  '
                 >برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل کنید.</p>
              </div>
            </div>
    </Fragment>
  )
}

export default Group73
import { Fragment } from 'react'
import images from '../../../assets/dashboardpng'
const Group73 = () => {
  return (
    <Fragment>
           <div className='w-[336px] h-[110px]  flex gap-[34px]'>
              <div className='w-[110px] h-[110px] '>
                <img src={images.gp74} />
              </div>
              <div className='w-[192px] h-[69px] mt-[27px]  text-center '
                style={{direction:'rtl'}} 
                >
                 <p
                  className='font-primaryMedium text-[#ABABAB] text-[16px] font-[400] leading-[22.7px]'
                 >برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل کنید.   </p>
              </div>
            </div>
    </Fragment>
  )
}

export default Group73
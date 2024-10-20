import { Fragment } from 'react'
import images from '../../../assets/dashboardpng'

const ProfileInfo = ({HandleActive}) => {
  return (
    <Fragment>
         <div className="w-[814px] h-[549px] border border-[#f7f7f7] dark:border-gray-800 mt-[50px] ml-[39px] relative ">
          <div className='w-[50px] h-[50px] left-[719px] absolute z-[555] dark:bg-gray-800 
          justify-center flex flex-col items-center gap-[2px]  shadow-[0px_1px_2px_0px_#00000040]
          rounded-[10px] bg-[#F7F7F7]
        '>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" stroke="#B5B5B5" stroke-width="2"/>
             </svg>
             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="13" viewBox="0 0 26 13" fill="none">
              <path d="M5.77011 3.03723C3.88374 4.19552 -1.06219 6.56066 1.95022 9.52033C3.42175 10.966 5.06066 12 7.12117 12H18.8788C20.9394 12 22.5783 10.966 24.0498 9.52033C27.0622 6.56066 22.1163 4.19552 20.2299 3.03723C15.8064 0.320924 10.1936 0.320924 5.77011 3.03723Z" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
        </div>
        <div className='w-[814px] h-[521px] relative'>
         <div  className='w-[814px] h-[521px]  mt-[27px]
           dark:bg-gray-800
           rounded-[10px] pr-[45px] pl-[28px] pt-[41px] flex justify-between 
            shadow-[0px_1px_3px_0px_#00000040]
            bg-[#F6FFFF]

         '>
         
            <div className='flex-col flex gap-[35px] mt-[-2px] ' style={{direction:'rtl'}}>
               <div className='flex gap-[4px]'>
                  <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]
                  ' >شماره همراه :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >۰۹۳۹۲۲۲۹۹۹۹</span>
               </div>
               <div className='flex gap-[4px]'>
                 <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]

                  ' >تلگرام :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >--</span>
               </div>
               <div className='flex gap-[4px]'>
                 <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]

                  ' >لینکداین :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >--</span>
               </div>
               <div className='flex gap-[4px] w-[334px] h-[52px]
              
               overflow-hidden leading-[24.11px]'>
                 <p className='text-[17px] font-primaryMedium text-[#CC6E00]   line-clamp-3 font-[700]
                  ' ><span className='text-[16px] text-[#ABABAB] font-[400] ml-[4px] 
                  ' >آدرس :</span> 
                   مازندران - ساری - میدان خزر - جاده فرح آباد خیابان دیمطوران  - ساختمان هوتن ۱۲ -واحد ۱۵
                    </p>
               </div>
               <div className='flex w-[319px] h-[120px]  justify-between
                      mt-[-12px] mr-[1px]
               '  >
                    <div className='flex-col flex gap-[15px]' >
                     <div className='flex-col flex gap-[4px] '>
                         <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]
                     ' >طول جغرافیایی :</p>
                     <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >--</span>
                   </div>
                    <div className='flex-col flex gap-[4px] '>
                      <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400] 
                     ' >عرض جغرافیایی :</p>
                     <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >--</span>
                    </div>
                    </div>
                    <div className='w-[120px] h-[120px] rounded-full'>
                       <img src={images.Eli51} />
                    </div>
               </div>
            </div>
           
             <div className='flex-col flex gap-[35px] mt-[-2px] ' style={{direction:'rtl'}}>
               <div className='flex gap-[4px]'>
                  <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]
                  ' >نام و نام خانوادگی :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >فلان فلانی زاده فلان آبادی</span>
               </div>
               <div className='flex gap-[4px]'>
                 <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]

                  ' >کد ملی :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >--</span>
               </div>
               <div className='flex gap-[4px]'>
                 <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]

                  ' >ایمیل :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >folani99@gmail.com</span>
               </div>
               <div className='flex gap-[4px]'>
                 <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]

                  ' >تاریخ تولد :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >۱۱ / ۰۵ / ۷۸</span>
               </div>
               <div className='flex gap-[4px]'>
                <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]

                  ' >جنسیت :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >--</span>
               </div> 
               <div className='flex gap-[4px] w-[334px] h-[70px] overflow-hidden leading-[24.11px]'>
                 <p className='text-[17px] font-primaryMedium text-[#CC6E00]   line-clamp-3 font-[700]
                  ' ><span className='text-[16px] text-[#ABABAB] font-[400] ml-[4px] 

                  ' >درباره  من :</span> 
                     لورم ایپسوم متن ساختگی با تولید سادگی  
                     نامفهوم از صنعت چاپ و با استفاده 
                     از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون 
                     و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز 
                     و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. 
                    </p>
               </div>
          
            </div>

            
         </div>
          <button className='w-[113px] h-[30px] rounded-[20px] absolute
              border border-[#01CEC9]
              left-[351px] right-[350px]
              bottom-[39px]
              z-[555] flex items-center
              gap-[12px] justify-center pb-[2px]
              '
               onClick={HandleActive}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_504_741)">
                <path d="M8.20998 2.26647C8.64468 1.79551 8.86203 1.56003 9.09298 1.42267C9.65023 1.09124 10.3365 1.08093 10.9031 1.39548C11.1379 1.52584 11.3619 1.7547 11.8099 2.2124C12.258 2.67011 12.482 2.89896 12.6096 3.13883C12.9175 3.71761 12.9075 4.41859 12.583 4.98787C12.4485 5.2238 12.218 5.44583 11.757 5.88988L6.27151 11.1733C5.39784 12.0148 4.96099 12.4356 4.41503 12.6488C3.86906 12.862 3.26886 12.8464 2.06845 12.815L1.90513 12.8107C1.53969 12.8011 1.35697 12.7964 1.25075 12.6758C1.14453 12.5553 1.15904 12.3691 1.18804 11.9969L1.20379 11.7948C1.28542 10.747 1.32623 10.2232 1.53082 9.75224C1.73542 9.28132 2.08833 8.899 2.79416 8.13425L8.20998 2.26647Z" stroke="#005653" stroke-linejoin="round"/>
                <path d="M7.58301 2.33337L11.6663 6.41671" stroke="#005653" stroke-linejoin="round"/>
                <path d="M8.16699 12.8334H12.8337" stroke="#005653" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                 <clipPath id="clip0_504_741">
                 <rect width="14" height="14" fill="white"/>
                 </clipPath>
                  </defs>
                </svg>      
                <p className='font-primaryMedium text-[15px] text-[#005653]'>ویرایش</p>
           </button>
        </div>
     </div>
    </Fragment>
  )
}

export default ProfileInfo
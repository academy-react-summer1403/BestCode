import images from '../../../../assets/landingpng'
import { IoCloseCircle } from 'react-icons/io5'

const SideBar = ({HandleClose}) => {
  return (
    <div className="h-screen w-full">
        
         <div className='flex justify-between   mt-[20px] px-6 items-center'  >
            <div className='flex items-center gap-[6px]'>
              <IoCloseCircle className='text-[30px] relative top-[1px] right-[4px] text-[#01CEC9]' onClick={HandleClose} />
             <div className='flex items-center gap-[11px] h-[50px] mt-[4px]  '>
                    <div className='flex md:hidden'>
                          <img 
                               src={images.shopbag} 
                               width={32} 
                               height={32} 
                          /> 
                         <span className='relative top-[18px] text-[13px] flex 
                                           items-center justify-center
                                          text-white pb-[0.7px] w-[14px] 
                                          h-[14px] rounded-full bg-[#E48900] 
                                          font-primaryMedium 
                                          pl-[0.5px]  right-[12px]
                                          
                                          '>۲</span>
                    </div>  
                    
               
                         <img 
                             src={images.fav} 
                             width={30} 
                             height={30}
                             className='relative right-[13px] md:hidden'
                          />
                      
                  </div>
                </div>
             <img src={images.logo} width={100} height={45}    />
             
         </div>
        <div>
          <ul className='text-[#555555]  px-6 justify-items-end mt-[50px]
                               grid  text-[17px] font-bold 
                               font-primaryRegular gap-5
                               '
                    style={{justifyContent:'right'}}
                   >
                   <li className='cursor-pointer   text-center  '>صفحه نخست</li>
                   <li className='cursor-pointer  text-center '>دوره ها</li>
                   <li className='cursor-pointer  text-center '>اساتید</li>
                   <li className='cursor-pointer  text-center '>اخبار و مقالات</li>
                   <li className='cursor-pointer  flex ml-[10px]  '
                       style={{marginRight:'-1px'}}
                    >تماس با ما</li>                   
                </ul>  
                <div className='bg-footerbg bg-cover h-[340px] bg-center'>
                </div>
             </div>
         </div>
  )
}

export default SideBar
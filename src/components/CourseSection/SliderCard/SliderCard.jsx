import images from '../../../assets'


const SliderCard = ({price, teacher, student , title , duration}) => {

  
  return (
  <div className='h-[323px] w-[266px] flex  justify-center justify-items-center items-center  pt-[18px] '>  
     <div className='w-[266px] h-[305px] bg-[#FFFFFF] rounded-[15px] shadow-lg border border-[#cccccc]   '>   
       <div className='w-[233px] h-[151px] 
         absolute bottom-[172px]
         flex justify-center items-center bg-gradient-to-r from-[#A259FF] to-[#D47300]
         rounded-[10px] z-[23232] ml-[16px]
         '>
         <img src={images.figmaicons} width={71} height={71} />
       </div>
       <div className='grid mt-[131px]'>
            <p className='
                text-[20px] 
                text-right mr-[17px] 
                font-primaryMedium 
                text-[#444444] 
                mt-[10px]
                '>
                  {title}
             </p>
            <div className='flex justify-between '>
              <div className='grid gap-[7px] mt-[24px] '>
                 <div className='flex items-center  ml-[18px] gap-[3px]'>
                    <img src={images.hat} width={15} height={15} />
                    <p className='text-[16px] text-[#888888]' >{student}</p>
                 </div>
                 <div>
                 <div className='flex items-center  ml-[18px] gap-[3px]'>
                    <img src={images.stars} width={15} height={15}/>
                    <img src={images.stars} width={15} height={15}/>
                    <img src={images.stars} width={15} height={15}/>
                    <img src={images.stars} width={15} height={15}/>
                    <img src={images.star1} width={15} height={15}/>

                 </div>
                 </div>
              </div>
              <div className='grid gap-[7px] mt-[24px] justify-end justify-items-end'>
                 <div className='flex items-center  mr-[17px] gap-[7.7px] '>
                     <p className='text-[16px] text-[#888888]'>{teacher}</p>
                     <img src={images.profile1} width={16.31} height={17}/>
                 </div>
                 <div className='flex items-center   mr-[19px] h-[16px] gap-[7.7px]'>
                     <p className='text-[15px] text-[#888888] '>{duration}</p>
                     <img src={images.time} width={12} height={12} />
                 </div>
              </div>
            </div>
            <img className='ml-[17px] mt-[10.39px] mb-[4px]'   src={images.line}  width={230}/>
            <div className='flex justify-between ml-[17px] mr-[17px] '>
              <div className='flex items-center w-[134px] h-[25px] gap-[5px]'> 
                  <span className='text-[12px] text-[#006865] 
                   mt-[7px]  pl-[2px]'>تومان</span>
                 <p  className='text-[23px] text-[#006865] mt-[-2px] '>{price}</p>
               </div>
               <div className='mt-[3px] mr-[1px]' >
                  <img src={images.buyit} width={21.9} height={23} />
               </div>
               
            </div>
      </div>
  </div>
</div>
  )
}

export default SliderCard
import images from '../../assets'


const BestTeacher = () => {
  return (
    <section className="flex justify-center mt-[93px] h-[467px]  items-center"> 
           <img 
               src={images.reco44} 
               height={402}  
               className='absolute h-[402px] w-full'  />
           <div className="w-[1247px] h-[467px] 
                           z-[8888] pl-[117.5px] pr-[93px] ">
              <div className='flex justify-between '>
                   <div className='flex'>
                         <div className='grid gap-[5.16px] w-[9px] h-[67.71px] mt-[300px] '>
                            <div className='h-[9px] w-[9px] rounded-full bg-white'></div>
                            <div className='h-[9px] w-[9px] rounded-full bg-white'></div>
                            <div className='h-[25.71px] w-[9px] rounded-full bg-[#00AFAB]'></div>
                            <div className='h-[9px] w-[9px] rounded-full bg-white'></div>
                         </div>
                        <img src={images.tslider} width={385.5} height={399.9} className='mt-[46.31px]' />
                    </div>
                    <div className='mt-[183px] '>
                        <div className='w-[447px] h-[67px] flex 
                                        justify-center  gap-[4px]
                                        items-center mt-[7px] '
                          style={{ direction:'rtl'}} 
                        >
                          <p className='font-primaryMedium text-[40px] text-[#003231]
                           
                          '>برترین اساتید</p>
                          <span className='text-[#006865] font-primaryRegular 
                                           text-[25px] mt-[11px]'>رو همینجا پیدا میکنید!!</span>
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-primaryRegular text-[20px] 
                                         text-[#777777] text-center
                                           w-[385px] h-[61px]  mt-[4px]
                                         '>
                                برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی
                                <br/>
                                استان مازندران رو بهترین بشناسیم
                            </p>
                        </div>
                    </div>
                </div>
          </div>
    </section>
  )
}

export default BestTeacher
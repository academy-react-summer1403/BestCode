import images from '../../assets'
import SwiperComponent from "../../components/CourseSection/SwiperComponent/SwiperComponent"

const CourseSection = () => {
  return (
  
    <section className='xl:mt-[112px] xl:justify-center  grid max-md:mt-[20px] max-md:w-full sm1:w-full'>
       <div className='xl:w-[1247px] justify-center grid 
                        max-md:w-full

        '>
          <div className='xl:w-[319px] h-[93px] grid xl:ml-[35px] xl:mb-[41px]
                          max-md:ml-[13px] 
          ' >
              <div className='flex h-[57.64px] items-center 
                              gap-[10px] justify-center'>
                 <p className='font-primaryMedium text-[#000000] xl:text-[35px]
                                 h-[57.64px]  xl:ml-[20px]
                                 max-md:text-[25px]
                                 md:text-[30px]
                                
                                 ' >دوره های آموزشی</p>
                 <div className='h-[13px] w-[13px] bg-[#01CEC9] rounded-md 
                                 max-md:mb-[12px] md:mb-[5px] xl:mb-0'></div>
              </div>
              <div>
                 <p className='xl:w-[319px] h-[32.02px] font-primaryRegular
                               text-[#AAAAAA] xl:text-[20px] 
                                flex justify-center mt-[2px]
                                max-md:text-[16px]
                                max-md:mt-[-15px]
                                md:text-[18px]
                                '>به روز ترین دوره هایی که میتونید پیدا کنید</p>
              </div>
          </div> 
        </div>   
         <div className='text-left max-md:flex xl:w-[1247px] 
                        max-md:w-full 
                        max-md:justify-start' >
           <div className='flex items-center gap-[6px] ml-[30px]
                           max-md:ml-0 
                           xl:px-0
                           max-md:px-3
                           max-md:mt-[20px]
                           md:mt-[20px]
                           xl:mt-0           '>
              <img 
                    src={images.arrowdore} 
                    width={15} 
                    height={15} 
              />
              <p className='font-primaryRegular text-[#AAAAAA] mb-[2px]
                            '>همه دوره ها</p>
            </div>
          </div>   

         {/* mt -420*/}
        <div className='xl:w-[1247px] xl:mt-[-420px] max-md:grid 
                        max-md:justify-center max-lg:grid max-lg:w-full
                        max-lg:justify-end sm1:w-full
                        '>  
          <div className='md:w-[324px] md:h-[420px]  
                         max-md:mt-[20px] max-md:w-[300px]'>   
            <img src={images.rec23} className='xl:relative xl:top-[397px] xl:left-[930px]' />
          </div>  
           <SwiperComponent /> 
        </div> 
    </section>
   
  )
}

export default CourseSection
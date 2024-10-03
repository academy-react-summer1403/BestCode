import images from '../../../assets'

const SwiperNavButton = ({handleNext, handlePrev}) => {
  return (
    <section className='grid gap-[9px] relative right-[600px] bottom-[111px] z-[543534]' 
    
    >
         
          <button className="w-[35px] h-[35px] rounded-full
          flex justify-center items-center bg-[#FFFFFF]
          border border-[#c3c3c3] drop-shadow-lg  z-[99999]"  onClick={handlePrev}>
                  <img src={images.rightarrow} width={18} height={18}/>
          </button>
          <button className="w-[35px] h-[35px] rounded-full border border-[#c3c3c3]
          flex justify-center items-center shadow-lg bg-[#FFFFFF] z-[99999]
          " onClick={handleNext}>
                  <img src={images.leftarrow} width={18} height={18}/>
          </button>
       
    </section>
  )
}

export default SwiperNavButton
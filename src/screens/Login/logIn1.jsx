
import HeaderSignUp from "./header"

const LogInFirstStep = () => {
    return(
        <div  className="w-[full] h-[1020px]"  >
        <HeaderSignUp/>
        <div className="w-full h-[900px]  justify-center flex" >
          <div className="w-[91%] h-[70%] mt-[102px] center ml-[4%] justify-center flex-wrap  duration-1000">
          
          <div className="xl:w-[90%] xl:h-full lg:h-full  md:h-[80%] sm:w-[90%] sm:h-full  ml-[4%]   duration-1000">
            <img src="./11.png" alt="image" className="w-full h-full" />
                <div className="flex  w-full h-full">
                <img src="./04.png" alt="image" className="  md:w-[60px] md:h-[60px] sm:h-[50px] sm:w-[50px] sm:bottom-[74%] md:ml-[23%] sm:ml-[18%] duration-1000 relative md:bottom-[72%] left-[1%]"/>
                <div className="md:w-[37%] md:h-[55%] sm:h-[70%] sm:w-[50%]  relative bottom-[83%] duration-1000  " >
                <img src="./12.png" alt="image" className="w-full h-full"/>
                <div className="relative bottom-[100%] w-full h-full">
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center   mx-auto mt-[14%] 
                text-center " > ورود به حساب کاربری</h1>

            <input type="text" placeholder="شماره همراه یا ایمیل" className="w-[74%] h-[11.5%] text-right rounded-[9px]  
                bg-[#F7F7F7]  shadow-[0px 1px 2px 0px #00000040 inset]
                 mx-auto ml-[13%] mt-[12%] "/>
            <input type="text" placeholder="رمز عبور" className="w-[74%] h-[11.5%] text-right rounded-[9px]  
                bg-[#F7F7F7]  shadow-[0px 1px 2px 0px #00000040 inset]
                mt-[3%] mx-auto ml-[13%] "/>  
                <div className="text-[11px] w-full flex mx-auto lg:gap-[3%] sm:gap-[1%] lg:ml-[14%] md:ml-[11%]" >
                    <button className="text-[#E48900] relative ">فراموشی رمز عبور</button>
                    <div className="mx-auto text-[#AAAAAA]">مرا به یاد بیاور
                <input name="reminder" type="checkBox"/> 
                </div>
                </div>              
                <button className="md:w-[40%] h-[10%] rounded-[21px] bg-[#E48900] text-center font-700 ml-[32%] mt-[8%]">
                <p className="relative top-1 text-[#ffffff] text-nowrap" >دریافت کد تایید</p>
                <button className=" mt-[11%] text-[#008E8B]">ثبت نام</button>
                </button>
                </div>
            </div>
            
                </div>
  
            
             
          </div>
          <button className="text-[#AAAAAA] relative text-[20px] bottom-[10%] left-[10%] ">صفحه اصلی</button>     
        </div>
        <button className="text-[#006865]  text-[24px] relative sm:bottom-[22%] sm:right-[3%] lg:bottom-[22%] lg:right-[3%] md:bottom-[26%] xl:right-[5%] text-nowrap " >ثبت نام</button>
        <button className="text-[#006865] text-[24px] relative sm:bottom-[12%] sm:right-[12%] lg:bottom-[12%] lg:right-[10%] md:bottom-[19%] right-[7%] " >ورود</button>          
         </div>   
      </div>

        
    )
}

export default LogInFirstStep
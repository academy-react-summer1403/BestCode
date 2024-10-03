
import HeaderSignUp from "./header"

const SignUpThirdStep = () => {
    return(
        <div  className="w-[full] h-[1020px]"  >
        <HeaderSignUp/>
        <div className="w-full h-[900px]  justify-center flex " >
          <div className="w-[91%] h-[70%] mt-[102px] center ml-[4%] justify-center flex-wrap  duration-1000 ">
          
          <div className="xl:w-[90%] xl:h-full lg:h-full  md:h-[80%] sm:w-[90%] sm:h-full  ml-[4%]   duration-1000">
            <img src="./01.png" alt="image" className="w-full h-full" />
                <div className="flex w-full h-full">
                <img src="./10.png" alt="image" className=" md:w-[60px] md:h-[60px] sm:h-[50px] sm:w-[50px] sm:bottom-[47%] md:ml-[23%] sm:ml-[18%] duration-1000 relative md:bottom-[37%] left-[1%] "/>
                <div className="md:w-[37%] md:h-[64%] sm:h-[50%] sm:w-[50%]  relative bottom-[83%] duration-1000  " >
                <img src="./09.png" alt="image" className="w-full h-full"/>
                <div className="relative bottom-[100%] w-full h-full">
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center h-[10%]  mx-auto mt-[10%] 
                text-center   " >ورود به حساب کاربری</h1>

            <input type="text" placeholder="ایمیل" className="    w-[74%] h-[11.5%] text-right rounded-[9px]  
                bg-[#F7F7F7] shadow-#00000040 box-shadow: 0px 1px 2px 0px  inset; shadow-inner;   ml-[13%] mt-[7%]  "/>
            <input type="text" placeholder="رمز عبور" className="  w-[74%] h-[11.5%] text-right rounded-[9px]  
                bg-[#F7F7F7] shadow-#00000040 box-shadow: 0px 1px 2px 0px  inset; shadow-inner;   ml-[13%] mt-[4%]  "/>  
            <input type="text" placeholder="تایید رمز عبور" className=" w-[74%] h-[11.5%] text-right rounded-[9px]  
                bg-[#F7F7F7] shadow-#00000040 box-shadow: 0px 1px 2px 0px  inset; shadow-inner;   ml-[13%] mt-[4%]  "/>  
                <div className="mx-auto ml-[35%] mt-[4%]"> مرا به یاد بیاور
                <input name="reminder" type="checkBox"/> 
                </div>
                <button className="  w-[133px] h-[35px] rounded-[21px] bg-[#E48900] text-center font-700 md:ml-[32%] sm:ml-[27%] mt-[5%]">
                <p className=" text-[13px] text-[#ffffff]" > ورود به حساب کاربری</p>
                </button> 
                </div>
            </div>
                </div>
  
            
             
          </div>
          <button className="text-[#AAAAAA] relative text-[20px]  lg:left-[80%] bottom-[10%] sm:left-[75%]">مرحله قبل</button> 
        </div>
        <button className="text-[#006865]  text-[24px] relative sm:bottom-[25%] sm:right-[3%] lg:bottom-[25%] lg:right-[3%] md:bottom-[28%] xl:right-[5%] text-nowrap " >ثبت نام</button>
        <button className="text-[#006865] text-[24px] relative sm:bottom-[15%] sm:right-[14%] lg:bottom-[15%] lg:right-[10%] md:bottom-[18%] right-[7%] " >ورود</button>  
         </div>   
      </div>

    )
}

export default SignUpThirdStep
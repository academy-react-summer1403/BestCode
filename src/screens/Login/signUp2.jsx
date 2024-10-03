import InputCode from "./inputCode";
import HeaderSignUp from "./header";

const SignUpSecondStep = () => {
    return(
        <div  className="w-[full] h-[1020px]"   >
        <HeaderSignUp/>
        <div className="w-full h-[900px]  justify-center flex" >
          <div className="w-[91%] h-[70%] mt-[102px] center ml-[4%] justify-center flex-wrap  duration-1000">
          
          <div className="xl:w-[90%] xl:h-full lg:h-full  md:h-[80%] sm:w-[90%] sm:h-full  ml-[4%]   duration-1000">
          <img src="./01.png" alt="image" className="w-full h-full" />
                <div className="flex  w-full h-full">
                <img src="./07.png" alt="image" className="  md:w-[60px] md:h-[60px] sm:h-[50px] sm:w-[50px] sm:bottom-[61%] md:ml-[23%] sm:ml-[18%] duration-1000 relative md:bottom-[56%] left-[1%]"/>
            <div className="md:w-[37%] md:h-[64%] sm:h-[50%] sm:w-[50%]  relative bottom-[83%] duration-1000 ">
            <img src="./08.png" alt="image" className="w-full h-full"/>
            <div className="relative bottom-[100%] w-full h-full">
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center h-[12%]  mx-auto mt-[9%] 
                text-center " >کد تایید </h1>
            <p className="w-[78%] h-[12%] text-[13px] text-right mt-[4%] ml-[11%] ">کد تایید به شماره ۹۸۹۱۲۱۲۳۴۵۶۷+ ارسال شده است ، در
            صورت مغایرت روی ویرایش کلیک کنید</p>
                
            <input type="text" className=" w-[67%] h-[15%] mb-10 text-right rounded-[9px]  bg-[#F7F7F7] shadow-[#00000040] shadow-[0px 1px 2px 0px  inset]   mt-[41px] ml-[55px]" /> 
                    <InputCode />
                
                <p1 className="w-[7%] h-[5%] text-[#01B4AF] text-[12px] relative bottom-[20%] left-[20%]">1:59</p1>
                
                
                
                
                <button className="w-[42%] h-[11%]  text-[#ffffff] rounded-[21px] bg-[#E48900] text-center font-700 ml-[22%] mb-[90px]">
                <p2 className="relative top-[7px]">ایجاد حساب</p2>

                <button className=" mt-[10%] text-[#008E8B] underline text-nowrap">ارسال دوباره کد</button>
                </button> 
                </div>
            </div>

                </div>
  
            
          </div>
             <button className="text-[#AAAAAA] relative text-[20px]  lg:left-[80%] bottom-[10%] sm:left-[75%]">مرحله قبل</button>         
        </div>
        <button className="text-[#006865]  text-[24px] relative sm:bottom-[25%] sm:right-[3%] lg:bottom-[25%] lg:right-[3%] md:bottom-[28%] xl:right-[5%] text-nowrap " >ثبت نام</button>
        <button className="text-[#006865] text-[24px] relative sm:bottom-[15%] sm:right-[12%] lg:bottom-[15%] lg:right-[8%] md:bottom-[18%] right-[2%] " >ورود</button>  
         </div>   
      </div>


    )
}

export default SignUpSecondStep
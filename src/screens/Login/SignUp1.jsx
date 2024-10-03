
import HeaderSignUp from "./header"
import SignUpSecondStep from "./signUp2"

const signUpFirstStep = () => {
    return(
        <div  className="w-[full] h-[1020px]"  >
        <HeaderSignUp/>
        <div className="w-full h-[900px]  justify-center flex" >
          <div className="w-[91%] h-[70%] mt-[102px] center ml-[4%] justify-center flex-wrap  duration-1000">
          
          <div className="xl:w-[90%] xl:h-full lg:h-full  md:h-[80%] sm:w-[90%] sm:h-full  ml-[4%]   duration-1000">
            <img src="./01.png" alt="image" className="w-full h-full" />
                <div className="flex  w-full h-full">
                <img src="./04.png" alt="image" className=" md:w-[60px] md:h-[60px] sm:h-[50px] sm:w-[50px] sm:bottom-[74%] md:ml-[23%] sm:ml-[18%] duration-1000 relative md:bottom-[72%] left-[1%]"/>
            <div className="md:w-[37%] md:h-[64%] sm:h-[50%] sm:w-[50%]  relative bottom-[83%] duration-1000  " >
            <img src="./02.png" alt="image" className="w-full h-full"/>
            <div className="relative bottom-[100%] w-full h-full">
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351]   justify-center h-[10%] mt-[23%]  
                text-center " >ایجاد حساب کاربری</h1>

            <input type="text" placeholder="تلفن همراه" className="  w-[70%] h-[15%] text-right rounded-[9px]  
                bg-[#F7F7F7]  shadow-[0px 1px 2px 0px #00000040 inset] ml-[15%] mt-[12%]"/>
                <button  className="w-[45%] h-[12%] sm:w-[50%] rounded-[21px] bg-[#E48900] text-center font-700 ml-[27%] mt-[10%] mb-[15%]">
                <p className="relative top-[15%] text-[#ffffff] text-nowrap" >دریافت کد تایید</p>
                <button className=" mt-[11%] text-[#008E8B]">ورود</button>
                </button>
              </div>  
           </div>

                </div>
  
            
             
          </div>
         
            <button className="text-[#AAAAAA] relative text-[20px] bottom-[10%] left-[10%] ">صفحه اصلی</button>    
        </div>
               <button className="text-[#006865]  text-[24px] relative sm:bottom-[25%] sm:right-[3%] lg:bottom-[25%] lg:right-[3%] md:bottom-[28%] xl:right-[5%] text-nowrap " >ثبت نام</button>
            <button className="text-[#006865] text-[24px] relative sm:bottom-[15%] sm:right-[14%] lg:bottom-[15%] lg:right-[10%] md:bottom-[18%] right-[7%] " >ورود</button>          
         </div>   
      </div>

        
    )
}

export default signUpFirstStep
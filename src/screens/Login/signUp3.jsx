
import HeaderSignUp from "./header"

const SignUpThirdStep = () => {
    return(
        <div id="third" className="w-[1440px] h-[1020px]"  >
        <HeaderSignUp/>
        <div className="w-[1440px] h-[900px] " >
          <div className="w-[952px] h-[631px] mt-[102px] mr-[203px] ml-[285px]   flex-wrap ">
          
          <div className="w-[869px] h-[631px]  border-black border-2
           bg-[url('./01.png')]  bg-cover">
                <div className="flex">
                <img src="./10.png" alt="image" className=" w-[60px] h-[60px] mt-[398px] ml-[200px] "/>
            <div className="w-[377px] h-[400px] mt-[110px] 
            bg-[url('./09.png')] bg-center bg-contain grid grid-flow-row gap-4 " >
            
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center h-[37px]  mx-auto mt-[30px] 
                text-center   " >ورود به حساب کاربری</h1>

            <input type="text" placeholder="ایمیل" className="   w-[266px] h-[47px] text-right rounded-[9px]  
                bg-[#F7F7F7] shadow-#00000040 box-shadow: 0px 1px 2px 0px  inset; shadow-inner;   ml-[55px]  "/>
            <input type="text" placeholder="رمز عبور" className="  w-[266px] h-[47px] text-right rounded-[9px]  
                bg-[#F7F7F7] shadow-#00000040 box-shadow: 0px 1px 2px 0px  inset; shadow-inner;   ml-[55px]  "/>  
            <input type="text" placeholder="تایید رمز عبور" className="  w-[266px] h-[47px] text-right rounded-[9px]  
                bg-[#F7F7F7] shadow-#00000040 box-shadow: 0px 1px 2px 0px  inset; shadow-inner;   ml-[55px]  "/>  
                <div className="mx-auto">مرا به یاد بیاور
                <input name="reminder" type="checkBox"/> 
                </div>
                <button className="  w-[133px] h-[35px] rounded-[21px] bg-[#E48900] text-center font-700 ml-[133px] mb-[50px]">
                <p className=" text-[13px] text-[#ffffff]" > ورود به حساب کاربری</p>
                </button> 
            </div>
            <button className="text-[#AAAAAA] relative text-[20px]  mt-[572px] ml-[48px]">مرحله قبل</button>
                </div>
  
            
             
          </div>
            <button className="text-[#006865] relative right-[-883px] top-[-530px] text-[24px] " >ثبت نام</button>
            <button className="text-[#006865] text-[24px] relative right-[-807px] top-[-425px] " >ورود</button> 
            {/* <button className="text-[#AAAAAA] relative text-[20px]  bottom-[64px] right-[77px] ">صفحه اصلی</button>     */}
        </div>
         </div>   
      </div>

    )
}

export default SignUpThirdStep
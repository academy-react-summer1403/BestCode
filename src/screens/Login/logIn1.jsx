
import HeaderSignUp from "./header"
const LogInFirstStep = () => {
    return(
        <div className="w-[1440px] h-[1020px]"  >
        <HeaderSignUp/>
        <div className="w-[1440px] h-[900px] " >
          <div className="w-[952px] h-[631px] mt-[102px] mr-[203px] ml-[285px]   flex-wrap ">
          
          <div className="w-[869px] h-[631px]  border-black border-2
           bg-[url('./11.png')]  bg-cover">
                <div className="flex">
                <img src="./04.png" alt="image" className=" w-[60px] h-[60px] mt-[190px] ml-[198px] "/>
            <div className="w-[377px] h-[350px] mt-[113px] 
            bg-[url('./12.png')] bg-center bg-contain  grid grid-flow-row " >
            
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center h-[37px]  mx-auto mt-[45px] 
                text-center " > ورود به حساب کاربری</h1>

            <input type="text" placeholder="شماره همراه یا ایمیل" className="w-[266px] h-[45px] text-right rounded-[9px]  
                bg-[#F7F7F7]  shadow-[0px 1px 2px 0px #00000040 inset]
                mt-[39px] mx-auto  "/>
            <input type="text" placeholder="رمز عبور" className="w-[266px] h-[45px] text-right rounded-[9px]  
                bg-[#F7F7F7]  shadow-[0px 1px 2px 0px #00000040 inset]
                mt-[9px] mx-auto  "/>  
                <div className="text-[11px] flex mx-auto gap-[100px] mb-10" >
                    <button className="text-[#E48900] relative bottom-1">فراموشی رمز عبور</button>
                    <div className="mx-auto text-[#AAAAAA]">مرا به یاد بیاور
                <input name="reminder" type="checkBox"/> 
                </div>
                </div>              
                <button className="w-[133px] h-[35px] rounded-[21px] bg-[#E48900] text-center font-700 ml-[117px] mb-[80px]">
                <p className="relative top-1 text-[#ffffff]" >دریافت کد تایید</p>
                <button className=" mt-[14px] text-[#008E8B]">ثبت نام</button>
                </button>
            </div>
            
                </div>
  
            
             
          </div>
            <button className="text-[#006865] relative right-[-883px] top-[-530px] text-[24px] " >ثبت نام</button>
            <button className="text-[#006865] text-[24px] relative right-[-807px] top-[-425px] " >ورود</button> 
            <button className="text-[#AAAAAA] relative text-[20px]  bottom-[64px] right-[77px] ">صفحه اصلی</button>    
        </div>
         </div>   
      </div>

        
    )
}

export default LogInFirstStep
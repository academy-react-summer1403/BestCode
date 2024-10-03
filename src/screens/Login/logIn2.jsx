import InputCode from "./inputCode";
import HeaderSignUp from "./header";

const LogInSecondStep = () => {
    return(
        <div className="w-[1440px] h-[1020px]"  >
        <HeaderSignUp/>
        <div className="w-[1440px] h-[900px] " >
          <div className="w-[952px] h-[631px] mt-[102px] mr-[203px] ml-[285px]   flex-wrap ">
          
          <div className="w-[869px] h-[631px]  border-black border-2
           bg-[url('./11.png')]  bg-cover">
                <div className="flex">
                <img src="./07.png" alt="image" className=" w-[60px] h-[60px] mt-[320px] ml-[200px] "/>
            <div className="w-[377px] h-[350px] mt-[116px]
 bg-[url('./13.png')] bg-center bg-contain grid grid-flow-row " >
            
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center h-[46px]  mx-auto mt-[27px] 
                text-center " >کد تایید </h1>
            <p className="w-[274px] h-[45px] text-[13px] text-right mb-[] ml-[51px] ">کد تایید به شماره ۹۸۹۱۲۱۲۳۴۵۶۷+ ارسال شده است ، در
            صورت مغایرت روی ویرایش کلیک کنید</p>
                
            <input type="text" className="w-[262px] h-[59px] mb-10 text-right rounded-[9px]  bg-[#F7F7F7] shadow-[#00000040] shadow-[0px 1px 2px 0px  inset]   mt-[px] ml-[55px]" /> 
                    <InputCode />
                
                <p1 className="w-[25px] h-[15px] text-[#01B4AF] text-[12px] ml-14 relative bottom-[50px] ">1:59</p1>
                
                
                
                
                <button className="w-[133px] h-[44px]  text-[#ffffff] rounded-[21px] bg-[#E48900] text-center font-700 ml-[117px] mb-[80px]">
                <p2 className="relative top-[7px]">ورود به حساب</p2>

                <button className=" mt-[25px] text-[#008E8B] underline">ارسال دوباره کد</button>
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

export default LogInSecondStep
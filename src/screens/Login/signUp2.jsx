import InputCode from "./inputCode";

const SignUpSecondStep = () => {
    return(
        <div className="flex">
        <img src="./07.png" alt="image" className=" w-[60px] h-[60px] mt-[292px] ml-[200px] "/>
       <div className="w-[377px] h-[400px] mt-[116px]
       bg-[url('./08.png')] bg-center bg-contain grid " >
      
       <h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center h-[46px]  mx-auto mt-[34px] 
        text-center " >کد تایید </h1>
       <p className="w-[274px] h-[45px] text-[13px] text-right mb-[] ml-[51px] ">کد تایید به شماره ۹۸۹۱۲۱۲۳۴۵۶۷+ ارسال شده است ، در
       صورت مغایرت روی ویرایش کلیک کنید</p>
        
       <input type="text" className="w-[262px] h-[59px] mb-10 text-right rounded-[9px]  bg-[#F7F7F7] shadow-[#00000040] shadow-[0px 1px 2px 0px  inset]   mt-[41px] ml-[55px]" /> 
            <InputCode />
         
         <p1 className="w-[25px] h-[15px] text-[#01B4AF] text-[12px] ml-14 relative bottom-[50px] ">1:59</p1>
        
        
        
        
        <button className="w-[133px] h-[44px]  text-[#ffffff] rounded-[21px] bg-[#E48900] text-center font-700 ml-[117px] mb-[90px]">
         <p2 className="relative top-[7px]">ایجاد حساب</p2>

        <button className=" mt-[25px] text-[#008E8B] underline">ارسال دوباره کد</button>
        </button> 
      </div>
      <button className="text-[#AAAAAA] relative text-[20px]  mt-[572px] ml-[48px]">صفحه قبلی</button>
        </div>

    )
}

export default SignUpSecondStep
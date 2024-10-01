
import HeaderSignUp from "./header"
import SignUpSecondStep from "./signUp2"

const signUpFirstStep = () => {
    return(
        <div id="first" className="w-[1440px] h-[1020px]"  >
        <HeaderSignUp/>
        <div className="w-[1440px] h-[900px] " >
          <div className="w-[952px] h-[631px] mt-[102px] mr-[203px] ml-[285px]   flex-wrap ">
          
          <div className="w-[869px] h-[631px]  border-black border-2
           bg-[url('./01.png')]  bg-cover">
                <div className="flex">
                <img src="./04.png" alt="image" className=" w-[60px] h-[60px] mt-[185px] ml-[198px] "/>
            <div className="w-[377px] h-[400px] mt-[113px] 
            bg-[url('./02.png')] bg-center bg-contain  " >
            
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center h-[37px]  mx-auto mt-[94px] 
                text-center " >ایجاد حساب کاربری</h1>

            <input type="text" placeholder="تلفن همراه" className="w-[266px] h-[47px] text-right rounded-[9px]  
                bg-[#F7F7F7]  shadow-[0px 1px 2px 0px #00000040 inset]
                mt-[41px] ml-[55px]  "/>
                <button  className="w-[133px] h-[35px] rounded-[21px] bg-[#E48900] text-center font-700 ml-[117px] mt-[44px]">
                <p className="relative top-1 text-[#ffffff]" >دریافت کد تایید</p>
                <button className=" mt-[14px] text-[#008E8B]">ورود</button>
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

export default signUpFirstStep
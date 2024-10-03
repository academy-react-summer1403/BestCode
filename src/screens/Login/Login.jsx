import HeaderSignUp from "./header";
import React from "react";
import {Field} from "formik";
import SignUpFirstStep from "./SignUp1";
import SignUpSecondStep from "./signUp2";
import SignUpThirdStep from "./signUp3";
import HorizontalLinearStepper from "./stepper";
import LogInFirstStep from "./logIn1";
import LogInSecondStep from "./logIn2";
import Stepper1 from "./stepper";

const Login = () => {
  return (
     
    // <div className="w-[1440px] h-[1020px]"  >
    //   <HeaderSignUp/>
    //   <div className="w-[1440px] h-[900px] " >
    //     <div className="w-[952px] h-[631px] mt-[102px] mr-[203px] ml-[285px]   flex-wrap ">
        
    //     <div className="w-[869px] h-[631px]  border-black border-2
    //      bg-[url('./01.png')]  bg-cover">
    //      {/* <HorizontalLinearStepper/> */}
    //      {/*   */}
    //       {/* {  } */}
    <div>

          {/* <SignUpFirstStep/>       */}
      {/* <SignUpSecondStep/>  */}
          {/* <SignUpThirdStep/>            */}
        { <LogInFirstStep/> }
        {/* <LogInSecondStep/> */}
        {/* {  <Stepper1/> } */}
           
         </div>
    //       <button className="text-[#006865] relative right-[-883px] top-[-530px] text-[24px] " >ثبت نام</button>
    //       <button className="text-[#006865] text-[24px] relative right-[-807px] top-[-425px] " >ورود</button> 
    //       <button className="text-[#AAAAAA] relative text-[20px]  bottom-[64px] right-[77px] ">صفحه اصلی</button>    
    //   </div>
    //    </div>   
    // </div>
  )
}

export default Login
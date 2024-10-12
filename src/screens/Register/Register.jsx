import HeaderSignUp from "../../components/Register/header";
import React, { useState } from "react";
import {Field} from "formik";
import SignUpFirstStep from "../../components/Register/SignUp1";
import SignUpSecondStep from "../../components/Register/signUp2";
import SignUpThirdStep from "../../components/Register/signUp3";
import HorizontalLinearStepper from "../../components/Register/stepper";
import Stepper1 from "../../components/Register/stepper";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [active, setActive]=useState(1)
  const navigate=useNavigate()
  return (
    <>
           <div  className="w-full h-screen flex font-BYekan dark  "   >
        {/* <HeaderSignUp/> */}
        <div className="w-full h-screen  justify-center flex " >
          <div className="lg:w-[869px] lg:h-[631px] cd:h-[550px] cd:w-[650px] duration-1000 
          md:w-[550px] md:h-[450px] sm:w-[500px] sm:h-[400px] xl:ml-0 lg:ml-[9%] cd:ml-[2%] pt-3 pl-10">
          
          <div className="w-[869px] h-full  sm:bg-[url(../01.png)] bg-contain bg-no-repeat duration-1000">
            {/* <img src="./01.png" alt="image" className="w-full h-full relative " /> */}
       {active==1?<SignUpFirstStep  setActive={setActive} />:null }
       {active==2?<SignUpSecondStep setActive={setActive} />:null }
       {active==3?<SignUpThirdStep  />:null }



    </div>
         
       

  
     </div>
            <button className="text-[#006865] md:text-[24px] sm:text-[20px] text-nowrap relative xl:bottom-[190px] xl:right-[-40px]
            lg:bottom-[230px] lg:right-[-50px] ef:bottom-[230px] ef:right-[-50px] cd:bottom-[250px] cd:right-[-60px] md:bottom-[270px] md:right-[-120px] sm:bottom-[280px]
            ab:right-[450px] ab:bottom-[300px] md:ml-0 sm:ml-4 sm:right-[-80px] cd:ml-24 lg:ml-0 " >ثبت نام </button>
            <button onClick={()=>setActive(old=>old-1)} className="text-[#AAAAAA] sm:text-[18px] md:text-[20px] text-nowrap relative lg:right-[190px] 
            cd:mt-[310px] cd:right-[170px] xl:mt-[550px] lg:mt-[460px] ab:right-[350px] ab:mt-[70px] sm:right-[100px] sm:mt-[20px] md:right-[100px] md:mt-[120px] xl:right-[190px] dark:text-[#006865]">مرحله قبل</button> 
            
           <button onClick={()=>navigate("/Login")} className="text-[#006865] md:text-[24px] sm:text-[20px] relative xl:bottom-[90px] xl:right-[110px]
           lg:bottom-[120px] lg:right-[100px] ef:right-[100px] cd:bottom-[150px] cd:right-[90px] md:bottom-[190px] md:right-[30px] sm:bottom-[200px] sm:right-[50px] 
           ab:right-[450px] ab:bottom-[300px]" >ورود</button>         
      </div>   
                         
   </div>
    </>
  )
}

export default Register
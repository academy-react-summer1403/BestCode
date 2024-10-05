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
           <div  className="w-full h-screen"  >
        {/* <HeaderSignUp/> */}
        <div className="w-full h-screen  justify-center flex" >
          <div className="xl:w-[952px] xl:h-[631px]
          relative max-ab:left-[-30px] ab:left-[-30px]
          lg:h-[550px] lg:w-[850px]
           md:h-[500px] md:w-[550px]
           sm:h-[450px]
           sm:w-[470px]
           ab:h-[450px]
           ab:mt-[50px]
           ab:w-[300px]
           cd:w-[650px]
           sm:mt-[102px] 
           center  justify-center flex-wrap  duration-1000">
          
          <div className="w-[869px] h-screen      duration-1000">
            <img src="./01.png" alt="image" className="w-full h-full relative" />
       {active==1?<SignUpFirstStep setActive={setActive} />:null }
       {active==2?<SignUpSecondStep setActive={setActive} />:null }
       {active==3?<SignUpThirdStep  />:null }



    </div>
         
         <button onClick={()=>setActive(old=>old-1)} className="text-[#AAAAAA] relative ab:text-[17px] md:text-[20px] bottom-[10%] left-[10%] ">مرحله قبل</button>   
                  <button className="text-[#006865] ab:text-[18px] sm:text-[24px] relative bottom-[85%] xl:left-[95%] lg:left-[92%]
                  cd:left-[91%] md:left-[89%] sm:left-[84%] ab:left-[77%] text-nowrap " >ثبت نام</button>
         <button onClick={()=>navigate("/Login")} className="text-[#006865] ab:text-[18px]  sm:text-[24px] relative bottom-[73%] xl:left-[88%] 
         cd:left-[80%] lg:left-[85%]  md:left-[77%] sm:left-[70%] ab:left-[58%]" >ورود</button>     
     </div>
        
      </div>   
   </div>
    </>
  )
}

export default Register
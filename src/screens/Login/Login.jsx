
import HeaderSignUp from "../../components/Login/header"
import LogInFirstStep from "../../components/Login/Register1"
import LogInSecondStep from "../../components/Login/register2"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const  Login = () => {
  
    const [active, setActive]=useState(1)
    const navigate=useNavigate()
    return (
      <>
             <div  className="w-[full] h-[1020px]"  >
          <HeaderSignUp/>
          <div className="w-full h-[900px]  justify-center flex" >
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
             sm:mt-[102px] center  justify-center flex-wrap  duration-1000">
            
            <div className="w-[869] h-full      duration-1000">
              <img src="./11.png" alt="image" className="w-full h-full" />
         {active==1?<LogInFirstStep setActive={setActive} />:<LogInSecondStep/>}


  
  
      </div>
           
           <button onClick={()=>setActive(old=>old-1)} className="text-[#AAAAAA] relative ab:text-[17px] md:text-[20px] bottom-[10%] left-[10%] ">مرحله قبل</button>   
                    <button onClick={()=>navigate("/register")} className="text-[#006865] ab:text-[18px] sm:text-[24px] relative bottom-[85%] xl:left-[95%] lg:left-[92%]
                    cd:left-[91%] md:left-[89%] sm:left-[84%] ab:left-[77%] text-nowrap " >ثبت نام</button>
           <button  className="text-[#006865] ab:text-[18px]  sm:text-[24px] relative bottom-[66%] xl:left-[88%] 
           cd:left-[80%] lg:left-[85%]  md:left-[77%] sm:left-[70%] ab:left-[58%]" >ورود</button>     
       </div>
          
        </div>   
     </div>
      </>
  )
}

export default Login

import HeaderSignUp from "../../components/Login/header"
import LogInFirstStep from "../../components/Login/Login1"
import LogInSecondStep from "../../components/Login/Login2"
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { data } from "autoprefixer";

const  Login = () => {
  
    const [active, setActive]=useState(1)
    const navigate=useNavigate()
    const handleNavigate = () =>{
        navigate("/register")
    }
   

    
    
    
    return (
      <>
            <div  className="w-full h-screen flex font-primaryRegular pt-[50px] overflow-hidden"    >
        {/* <HeaderSignUp/> */}
        <div className="w-full h-screen  justify-center flex dark:bg-gray-800" >
          <div className="lg:w-[869px] lg:h-[631px] cd:h-[550px] cd:w-[650px] duration-1000 
          md:w-[550px] md:h-[450px] sm:w-[500px] sm:h-[400px] xl:ml-0 lg:ml-[9%] cd:ml-[2%] pt-3 pl-10">
          
          <div className="w-[869px] h-full  sm:bg-[url(../11.png)] dark:sm:bg-[url(../74.png)] bg-contain bg-no-repeat duration-1000">
         {active==1?<LogInFirstStep setActive={setActive} />:<LogInSecondStep/>}


  
  
      </div>
           
 
       </div>
          <NavLink to={"/register"} className=" text-[#006865] md:text-[24px] sm:text-[20px] text-nowrap relative xl:mt-[110px]
          xl:left-[60px] lg:mt-[110px] lg:left-[54px] cd:mt-[100px] cd:left-[125px] md:mt-[70px] md:left-[120px]
          sm:mt-[60px] sm:left-[85px] ab:right-[450px] ab:mt-[52px]" >ثبت نام</NavLink>
            
            <button onClick={()=>setActive(old=>old-1)} className="dark:text-[#005351] text-[#AAAAAA] ab:text-[18px] md:text-[20px] text-nowrap relative xl:right-[200px] ef:right-[200px] lg:right-[200px]
            cd:mt-[300px] font-BYekan cd:right-[80px] xl:mt-[460px]  lg:mt-[440px] ab:right-[340px] ab:mt-[70px] sm:right-[90px] sm:mt-[10px] md:right-[90px] md:mt-[100px]">مرحله قبل</button> 
            
           <button  className="text-[#006865] md:text-[24px] sm:text-[20px] relative xl:bottom-[115px] xl:right-[90px]
           lg:bottom-[17%] lg:right-[90px]  cd:bottom-[150px] cd:right-[10px] md:bottom-[190px] md:right-[23px] sm:bottom-[210px] sm:right-[40px] 
           ab:right-[410px] font-BYekan ab:bottom-[300px]" >ورود</button>
        </div>   

     </div>
     
      </>
  )
}

export default Login
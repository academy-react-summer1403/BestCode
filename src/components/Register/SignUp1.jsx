
import HeaderSignUp from "../../components/Register/header"
import SignUpSecondStep from "./signUp2"
import { Form,Formik,Field } from "formik"
import { NavLink, useNavigate } from "react-router-dom";



const signUpFirstStep = ({setActive}) => {
    const navigate=useNavigate()
    return(
    <Formik>
               <div className="flex  font-BYekan1 ab:ml-[90px] sm:ml-0  ">
                <img src="./04.png" alt="image" className=" cd:w-[60px] cd:h-[60px] lg:mt-[21%] cd:left-[2%] relative lg:ml-[22%]
                cd:mt-[14%] cd:ml-[14%] md:ml-[10%] md:mt-[11%] md:w-[55px] md:h-[55px] ab:w-[50px] ab:h-[50px] ab:ml-[28%] ab:mt-[15%] ab:left-[1%]
                sm:mt-[10%] sm:left-[1%] sm:ml-[8%]  md:left-[1%] duration-1000  dark:hidden "/>
                <img src="./70.png" alt="image" className=" cd:w-[60px] cd:h-[60px] lg:mt-[21%] cd:left-[2%] relative lg:ml-[22%]
                cd:mt-[14%] cd:ml-[14%] md:ml-[10%] md:mt-[11%] md:w-[55px] md:h-[55px] ab:w-[50px] ab:h-[50px] ab:ml-[28%] ab:mt-[15%] ab:left-[1%]
                sm:mt-[10%] sm:left-[1%] sm:ml-[8%]  md:left-[1%] duration-1000  hidden dark:block "/>                
            <div className="cd:w-[377px] cd:h-[400px] bg-[url(../02.png)] dark:bg-[url(../44.png)] bg-contain bg-no-repeat  cd:mt-[50px] lg:mt-[113px] 
            md:w-[320px] md:h-[350px]  ab:w-[280px] ab:h-[310px] md:mt-[40px]  sm:mt-[40px] ab:mt-[70px] drop-shadow shadow-[#00000040]  " >
            {/* <img src="./02.png" alt="image" className="w-full h-full"/> */}
            <div className=" w-full h-full font-BYekan">
                <Form>
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351]   justify-center h-[10%] mt-[23%]  
                text-center " >ایجاد حساب کاربری</h1>

            <Field type="text" placeholder="تلفن همراه" className="  w-[70%] md:h-[47px] h-[40px] text-right rounded-[9px]  
                bg-[#F7F7F7]  shadow-5xxx ml-[15%] mt-[12%]"/>
                <button onClick={()=>setActive(old=>old+1)} className="w-[45%] h-[35px] sm:w-[50%] rounded-[21px] bg-[#E48900] text-white text-center font-700 ml-[27%] mt-[10%] mb-[15%]">
                دریافت کد تایید
                </button>
                <button onClick={()=>navigate("/Login")} className="text-[#008E8B] text-[12px] relative top-[25px] right-[65px] sm:right-[84px]
                sm:top-[31px] ab:right-[75px] ab:top-[31px] cd:right-[105px] md:right-[92px] md:top-[35px] ">
                    ورود
                </button>
                </Form>
              </div>  
           </div>
                    <NavLink className="text-[#AAAAAA] sm:text-[18px] md:text-[20px] text-nowrap relative
                    xl:mt-[570px] xl:right-[590px] lg:mt-[568px] lg:right-[580px] cd:mt-[490px] cd:right-[520px]
                    md:mt-[400px] md:right-[430px] sm:mt-[350px] sm:right-[370px] ab:mt-[376px] ab:right-[270px] dark:text-[#006865]">صفحه اصلی</NavLink>
                </div>
    </Formik>
            
             


        
    )
}

export default signUpFirstStep
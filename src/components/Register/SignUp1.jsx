
import HeaderSignUp from "../../components/Register/header"
import SignUpSecondStep from "./signUp2"
import { Form,Formik,Field } from "formik"
import { useNavigate } from "react-router-dom";



const signUpFirstStep = ({setActive}) => {
    const navigate=useNavigate()
    return(
    <Formik>
               <div className="flex  w-full h-full">
                <img src="./04.png" alt="image" className=" md:w-[60px] md:h-[60px] ab:h-[50px] ab:w-[50px] sm:bottom-[76%] sm:right-[9%] md:ml-[23%] sm:ml-[18%] duration-1000 relative z-10 cd:right-[8%] 
                md:right-[13%] md:bottom-[76%] lg:right-0 lg:left-[1%] cd:bottom-[76%] lg:bottom-[70%] ab:bottom-[79%] ab:right-[2%] xl:bottom-[72%] "/>
            <div className="md:w-[377px] md:h-[400px]  relative lg:bottom-[83%] cd:bottom-[90%] lg:right-0
             cd:right-[10%] md:bottom-[90%] md:right-[15%] sm:bottom-[90%] sm:right-[12%] sm:h-[350px] sm:w-[320px] ab:bottom-[90%] ab:right-[5%] ab:h-[300px] ab:w-[280px]
            duration-1000  " >
            <img src="./02.png" alt="image" className="w-full h-full"/>
            <div className="relative bottom-[100%] w-full h-full">
                <Form>
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351]   justify-center h-[10%] mt-[23%]  
                text-center " >ایجاد حساب کاربری</h1>

            <Field type="text" placeholder="تلفن همراه" className="  w-[70%] md:h-[47px] h-[40px] text-right rounded-[9px]  
                bg-[#F7F7F7]  shadow-5xxx ml-[15%] mt-[12%]"/>
                <button onClick={()=>setActive(old=>old+1)} className="w-[45%] h-[35px] sm:w-[50%] rounded-[21px] bg-[#E48900] text-[#ffffff] text-center font-700 ml-[27%] mt-[10%] mb-[15%]">
                دریافت کد تایید
                </button>
                <button onClick={()=>navigate("/Login")} className="text-[#008E8B] text-[12px] relative top-[25px] right-[65px] sm:right-[90px] cd:right-[105px]  ">
                    ورود
                </button>
                </Form>
              </div>  
           </div>

                </div>
    </Formik>
            
             


        
    )
}

export default signUpFirstStep
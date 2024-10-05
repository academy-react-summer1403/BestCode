
import HeaderSignUp from "../../components/Register/header"
import { Form,Formik,Field } from "formik"

const SignUpThirdStep = () => {
    return(
        <Formik>
                  <div className="flex  w-full h-full">
                  <img src="./10.png" alt="image" className=" md:w-[60px] md:h-[60px] ab:h-[50px] ab:w-[50px] sm:bottom-[34%] sm:right-[9%] md:ml-[23%] sm:ml-[18%] duration-1000 relative z-10 cd:right-[8%] 
                      md:right-[13%] md:bottom-[33%] lg:right-0 lg:left-[1%] cd:bottom-[33%] lg:bottom-[31%] ab:bottom-[43%] ab:right-[2%] xl:bottom-[37%] "/>
                <div className="md:w-[377px] md:h-[400px]  relative lg:bottom-[83%] cd:bottom-[90%] lg:right-0
                 cd:right-[10%] md:bottom-[90%] md:right-[15%] sm:bottom-[90%] sm:right-[12%] sm:h-[350px] sm:w-[320px] ab:bottom-[90%] ab:right-[5%] ab:h-[300px] ab:w-[280px]
                duration-1000  " >
                <img src="./09.png" alt="image" className="w-full h-full"/>
                <div className="relative bottom-[100%] w-full h-full">  
                    <Form>
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center h-[10%]  mx-auto mt-[10%] 
                text-center   " >ورود به حساب کاربری</h1>

            <Field type="text" placeholder="ایمیل" className="    w-[74%] md:h-[47px] ab:h-[35px] text-right rounded-[9px]  
                bg-[#F7F7F7] shadow-#00000040 box-shadow: 0px 1px 2px 0px  inset; shadow-inner;   ml-[13%] mt-[7%]  "/>
            <Field type="text" placeholder="رمز عبور" className="  w-[74%] md:h-[47px] ab:h-[35px] text-right rounded-[9px]  
                bg-[#F7F7F7] shadow-#00000040 box-shadow: 0px 1px 2px 0px  inset; shadow-inner;   ml-[13%] mt-[4%]  "/>  
            <Field type="text" placeholder="تایید رمز عبور" className=" w-[74%] md:h-[47px] ab:h-[35px] text-right rounded-[9px]  
                bg-[#F7F7F7] shadow-#00000040 box-shadow: 0px 1px 2px 0px  inset; shadow-inner;   ml-[13%] mt-[4%]  "/>  
                <div className="mx-auto sm:ml-[37%] ab:ml-[32%] mt-[4%] text-[#AAAAAA] text-[12px]"> مرا به خاطر بسپار
                <input name="reminder" type="checkBox"/> 
                </div>
                <button className=" text-[13px] text-[#ffffff] w-[133px] h-[35px] rounded-[21px] bg-[#E48900] text-center font-700 md:ml-[33%] sm:ml-[31%] ab:ml-[24%] mt-[5%]">
                 ورود به حساب کاربری
                </button> 
                </Form>
                </div>
            </div>
                </div>
  
        
      </Formik>

    )
}

export default SignUpThirdStep
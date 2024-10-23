
import HeaderSignUp from "../../components/Register/header"
import { Form,Formik,Field } from "formik"

const SignUpThirdStep = () => {
    return(
        <Formik>
               <div className="flex   ab:ml-[90px] sm:ml-0 ">
                <img src="./10.png" alt="image" className=" cd:w-[60px] cd:h-[60px] lg:mt-[46%] cd:left-[2%] relative lg:ml-[22%]
                cd:mt-[38.5%] cd:ml-[14%] md:ml-[10%] md:mt-[32%] md:w-[55px] md:h-[55px] ab:w-[50px] ab:h-[50px] ab:ml-[28%] ab:mt-[36%] ab:left-[1%]
                sm:mt-[28.5%] sm:left-[1%] sm:ml-[8%]  md:left-[1%] duration-1000 dark:hidden  "/>
                <img src="./76.png" alt="image" className=" cd:w-[60px] cd:h-[60px] lg:mt-[46%] cd:left-[2%] relative lg:ml-[22%]
                cd:mt-[38.5%] cd:ml-[14%] md:ml-[10%] md:mt-[32%] md:w-[55px] md:h-[55px] ab:w-[50px] ab:h-[50px] ab:ml-[28%] ab:mt-[36%] ab:left-[1%]
                sm:mt-[28.5%] sm:left-[1%] sm:ml-[8%]  md:left-[1%] duration-1000 hidden dark:block  "/>                
            <div className="cd:w-[377px] cd:h-[400px] bg-[url(../09.png)] dark:bg-[url(../79.png)] bg-contain bg-no-repeat  cd:mt-[50px] lg:mt-[113px] 
            md:w-[320px] md:h-[350px]  ab:w-[280px] ab:h-[310px] md:mt-[40px]  sm:mt-[40px] ab:mt-[70px] drop-shadow shadow-[#00000040]  " >
            {/* <img src="./02.png" alt="image" className="w-full h-full"/> */}
            <div className=" w-full h-full"> 
                    <Form>
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center h-[10%]  mx-auto mt-[10%] 
                text-center   " >ورود به حساب کاربری</h1>

            <Field type="text" placeholder="ایمیل" className="    w-[74%] md:h-[38px] cd:h-[47px] ab:h-[35px] text-right rounded-[9px]  
                bg-[#F7F7F7] shadow-#00000040 box-shadow: 0px 1px 2px 0px  inset; shadow-inner; md:text-[17px] ab:text-[13px]  ml-[13%] mt-[7%]  "/>
            <Field type="text" placeholder="رمز عبور" className="  w-[74%] md:h-[38px] cd:h-[47px] ab:h-[35px] text-right rounded-[9px]  
                bg-[#F7F7F7] shadow-#00000040 box-shadow: 0px 1px 2px 0px  inset; shadow-inner; md:text-[17px] ab:text-[13px]  ml-[13%] mt-[4%]  "/>  
            <Field type="text" placeholder="تایید رمز عبور" className=" w-[74%] md:h-[38px] cd:h-[47px] ab:h-[35px] text-right rounded-[9px]  
                bg-[#F7F7F7] shadow-#00000040 box-shadow: 0px 1px 2px 0px  inset; shadow-inner; md:text-[17px] ab:text-[13px]  ml-[13%] mt-[4%]  "/>  
                <div className="mx-auto sm:ml-[37%] ab:ml-[32%] mt-[4%] text-[#AAAAAA] text-[12px]"> مرا به خاطر بسپار
                <input name="reminder" type="checkBox" className="size-3 relative top-[2px] left-[5px]"/> 
                </div>
                <button className=" text-[13px] text-[#ffffff] w-[133px] ab:h-[30px] md:h-[35px] rounded-[21px] bg-[#E48900] text-center font-700 md:ml-[31%] cd:ml-[33%] sm:ml-[29%] ab:ml-[26%] ab:mt-[3%] sm:mt-[3%] md:mt-[5%]">
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
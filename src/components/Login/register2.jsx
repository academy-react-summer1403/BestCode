import InputCode from "../../components/Login/inputCode";
import HeaderSignUp from "./header";
import { Form,Formik,Field } from "formik"
const LogInSecondStep = () => {
    return(
<>
<Formik>
<div className="flex  w-full h-full">
        <img src="./07.png" alt="image" className=" md:w-[60px] md:h-[60px] ab:h-[50px] ab:w-[50px] sm:bottom-[71%] sm:right-[9%] md:ml-[23%] sm:ml-[18%] duration-1000 relative z-10 cd:right-[8%] 
        md:right-[13%] md:bottom-[74%] lg:right-0 lg:left-[1%] cd:bottom-[74%] lg:bottom-[68%] ab:bottom-[75%] ab:right-[2%] xl:bottom-[70%] "/>
    <div className="md:w-[377px] md:h-[350px]  relative lg:bottom-[83%] cd:bottom-[90%] lg:right-0
     cd:right-[10%] md:bottom-[90%] md:right-[15%] sm:bottom-[90%] sm:right-[12%] sm:h-[350px] sm:w-[320px] ab:bottom-[90%] ab:right-[5%] ab:h-[300px] ab:w-[250px]
    duration-1000  " >
    <img src="./12.png" alt="image" className="w-full h-full"/>
    <div className="relative bottom-[100%] w-full h-full">
    <Form>
    <h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center h-[46px]  mx-auto mt-[27px] 
        text-center " >کد تایید </h1>
    <p className="w-[84%] h-[45px] text-[13px] text-right mt-[12px] ml-[8%] ">کد تایید به شماره ۹۸۹۱۲۱۲۳۴۵۶۷+ ارسال شده است ، در
    صورت مغایرت روی ویرایش کلیک کنید</p>
        
    <Field type="text" className="w-[84%] h-[59px] mt-[13px] text-right rounded-[9px]  bg-[#F7F7F7] shadow-[#00000040] shadow-[0px 1px 2px 0px  inset]   mt-[px] ml-[8%]" /> 
            <InputCode />
        
        <p1 className="w-[25px] h-[15px] text-[#01B4AF] text-[12px] sm:ml-14 ab:ml-8 relative sm:bottom-[10px]  ">1:59</p1>
        
        
        
        <div className="grid">
        <button className="w-[133px] h-[44px]  text-[#ffffff] rounded-[21px] bg-[#E48900] text-center font-700 relative 
        ab:top-[-5px] md:top-[8%] md:left-[32%] ab:left-[22%] ">
         ورود به حساب 
        </button> 
        <button className=" mt-[25px] text-[#008E8B] underline relative md:top-[-7%] ab:top-[-30px] left-[%]">ارسال دوباره کد</button>  
         </div>     
        </Form>
    </div>
    <button className="text-[#AAAAAA] relative text-[20px]  mt-[572px] ml-[48px]">مرحله قبل</button>
        
        </div>
        </div>
        </Formik>
    </>
        
  

)
}

export default LogInSecondStep
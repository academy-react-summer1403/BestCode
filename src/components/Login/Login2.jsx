import InputCode from "./inputCode";
import HeaderSignUp from "./header";
import { Form,Formik,Field } from "formik"
const LogInSecondStep = ({setActive}) => {
    return(
<>
<Formik>
<div className="flex  sm:ml-0 ab:ml-[12%] font-BYekan ">
                <img src="./07.png" alt="image" className=" cd:w-[60px] cd:h-[60px] lg:mt-[36%] cd:left-[2%] relative lg:ml-[22%]
                cd:mt-[29%] cd:ml-[14%] md:ml-[10%] md:mt-[24%] md:w-[55px] md:h-[55px] ab:w-[50px] ab:h-[50px] ab:ml-[28%] ab:mt-[28%] ab:left-[1%]
                sm:mt-[21.5%] sm:left-[1%] sm:ml-[8%]  md:left-[1%] duration-1000 dark:hidden  "/>
                <img src="./24.png" alt="image" className=" cd:w-[60px] cd:h-[60px] lg:mt-[36%] cd:left-[2%] relative lg:ml-[22%]
                cd:mt-[29%] cd:ml-[14%] md:ml-[10%] md:mt-[24%] md:w-[55px] md:h-[55px] ab:w-[50px] ab:h-[50px] ab:ml-[28%] ab:mt-[28%] ab:left-[1%]
                sm:mt-[21.5%] sm:left-[1%] sm:ml-[8%]  md:left-[1%] duration-1000  hidden dark:block "/>
            <div className="cd:w-[377px] cd:h-[400px] bg-[url(../13.png)] dark:bg-[url(../23.png)] bg-contain bg-no-repeat  cd:mt-[50px] lg:mt-[113px] 
            md:w-[320px] md:h-[350px]  ab:w-[280px] ab:h-[310px] md:mt-[40px]  sm:mt-[40px] ab:mt-[70px] drop-shadow shadow-[#00000040]  " >
            {/* <img src="./02.png" alt="image" className="w-full h-full"/> */}
            <div className=" w-full h-full">
    <Form>
    <h1 className=" ab:text-[20px] md:text-[25px] leading-[35.46px] text-[#005351] justify-center h-[46px]  mx-auto mt-[27px] 
        text-center " >کد تایید </h1>
    <p className="w-[84%] h-[45px] dark:text-white ab:text-[10px] md:text-[13px] text-right ab:mt-[2px] md:mt-[12px] ml-[8%] ">کد تایید به شماره ۹۸۹۱۲۱۲۳۴۵۶۷+ ارسال شده است ، در
    صورت مغایرت روی ویرایش کلیک کنید</p>
        
    <Field type="text" className="w-[70%] md:h-[48px] ab:h-[40px] cd:h-[58px] ab:mt-[8px] md:mt-[13px] text-right rounded-[9px]  bg-[#F7F7F7] shadow-[#00000040] shadow-[0px 1px 2px 0px  inset]   mt-[px] ml-[15%]" /> 
            <InputCode />
        
        <p1 className="w-[25px] h-[15px] text-[#01B4AF] text-[12px] sm:ml-14 ab:ml-8 relative sm:bottom-[10px]  ">1:59</p1>
        
        
        
        <div className="grid">
        <button className="ab:w-[110px] md:w-[133px] ab:h-[30px] md:h-[38px] cd:h-[44px]  text-[#ffffff] rounded-[21px] bg-[#E48900] text-center font-700 relative 
        ab:top-[-5px] md:top-[-7px] cd:top-[8%]  cd:left-[32%] md:left-[30%] ab:left-[30%] text-[]">
         ورود به حساب 
        </button> 
        <button className=" mt-[25px] text-[#008E8B] underline md:text-[16px] ab:text-[12px] relative cd:top-[-7%] md:top-[] ab:top-[-25px] left-[%]">ارسال دوباره کد</button>  
         </div>     
        </Form>
    </div>
        
        </div>
        
        </div>
        </Formik>
    </>
        
  

)
}

export default LogInSecondStep
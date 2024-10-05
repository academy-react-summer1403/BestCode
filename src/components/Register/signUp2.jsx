import InputCode from "../../components/Register/inputCode";
import HeaderSignUp from "../../components/Register/header";
import { Form,Formik,Field } from "formik"

const SignUpSecondStep = ({setActive}) => {
    return(
       <Formik>
                <div className="flex  w-full h-full">
                <img src="./07.png" alt="image" className=" md:w-[60px] md:h-[60px] ab:h-[50px] ab:w-[50px] sm:bottom-[56%] sm:right-[9%] md:ml-[23%] sm:ml-[18%] duration-1000 relative z-10 cd:right-[8%] 
                md:right-[13%] md:bottom-[55%] lg:right-0 lg:left-[1%] cd:bottom-[55%] lg:bottom-[52%] ab:bottom-[61%] ab:right-[2%] xl:bottom-[56%] "/>
            <div className="md:w-[377px] md:h-[400px]  relative lg:bottom-[83%] cd:bottom-[90%] lg:right-0
             cd:right-[10%] md:bottom-[90%] md:right-[15%] sm:bottom-[90%] sm:right-[12%] sm:h-[350px] sm:w-[320px] ab:bottom-[90%] ab:right-[5%] ab:h-[300px] ab:w-[280px]
            duration-1000  " >
            <img src="./08.png" alt="image" className="w-full h-full"/>
            <div className="relative bottom-[100%] w-full h-full">
                <Form>
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center h-[12%]  mx-auto mt-[9%] 
                text-center " >کد تایید </h1>
            <p className="w-[78%] h-[12%] text-[13px] text-right mt-[4%] ml-[11%] ">کد تایید به شماره ۹۸۹۱۲۱۲۳۴۵۶۷+ ارسال شده است ، در
            صورت مغایرت روی ویرایش کلیک کنید</p>
                
            <Field type="text" className=" w-[67%] sm:h-[50px] ab:h-[40px] md:h-[59px] ab:mb-7 sm:mb-10 text-right rounded-[9px]  bg-[#F7F7F7] shadow-[#00000040] shadow-[0px 1px 2px 0px  inset]   mt-[41px] ml-[16%]" /> 
                    <InputCode />
                
                <p1 className="w-[7%] h-[5%] text-[#01B4AF] text-[12px] relative md:bottom-[60px] ab:bottom-[50px] left-[20%]">1:59</p1>
                
                
                <button  onClick={()=>setActive(old=>old+1)} className="w-[42%] h-[44px]  text-[#ffffff] rounded-[21px] bg-[#E48900] text-center font-700 ml-[22%] mb-[110px] md:mb-[90px] relative bottom-4">
                ایجاد حساب
           </button> 
                <button className=" mt-[20%] text-[#008E8B] underline relative ab:top-[-180px] ab:left-[80px] md:top-[-170px] sm:left-[110px] md:left-[110px] md:ml-7 text-nowrap">ارسال دوباره کد</button>
                </Form>
                </div>
        </div>
      </div>
      </Formik> 

    )
}

export default SignUpSecondStep
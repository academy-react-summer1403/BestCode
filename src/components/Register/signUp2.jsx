import InputCode from "../../components/Register/inputCode";
import HeaderSignUp from "../../components/Register/header";
import { Form,Formik,Field } from "formik"

const SignUpSecondStep = ({setActive}) => {
    return(
       <Formik>
               <div className="flex  ab:ml-[90px] sm:ml-0 ">
                <img src="./07.png" alt="image" className=" cd:w-[60px] cd:h-[60px] lg:mt-[33%] cd:left-[2%] relative lg:ml-[22%]
                cd:mt-[26%] cd:ml-[14%] md:ml-[10%] md:mt-[21%] md:w-[55px] md:h-[55px] ab:w-[50px] ab:h-[50px] ab:ml-[28%] ab:mt-[25%] ab:left-[1%]
                sm:mt-[19%] sm:left-[1%] sm:ml-[8%]  md:left-[1%] duration-1000 dark:hidden  "/>
                <img src="./24.png" alt="image" className=" cd:w-[60px] cd:h-[60px] lg:mt-[33%] cd:left-[2%] relative lg:ml-[22%]
                cd:mt-[26%] cd:ml-[14%] md:ml-[10%] md:mt-[21%] md:w-[55px] md:h-[55px] ab:w-[50px] ab:h-[50px] ab:ml-[28%] ab:mt-[25%] ab:left-[1%]
                sm:mt-[19%] sm:left-[1%] sm:ml-[8%]  md:left-[1%] duration-1000 hidden dark:block  "/>                
            <div className="cd:w-[377px] cd:h-[400px] bg-[url(../08.png)] dark:bg-[url(../25.png)] bg-contain bg-no-repeat  cd:mt-[50px] lg:mt-[113px] 
            md:w-[320px] md:h-[350px]  ab:w-[280px] ab:h-[310px] md:mt-[40px]  sm:mt-[40px] ab:mt-[70px] drop-shadow shadow-[#00000040]  " >
            {/* <img src="./02.png" alt="image" className="w-full h-full"/> */}
            <div className=" w-full h-full">
                <Form>
            <h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center h-[12%]  mx-auto mt-[9%] 
                text-center " >کد تایید </h1>
            <p className="w-[78%] h-[12%] text-[13px] text-right mt-[4%] ml-[11%] dark:text-white">کد تایید به شماره ۹۸۹۱۲۱۲۳۴۵۶۷+ ارسال شده است ، در
            صورت مغایرت روی ویرایش کلیک کنید</p>
                
            <Field type="text" className=" w-[67%] sm:h-[35px] ab:h-[40px] md:h-[59px] ab:mb-7 sm:mb-10 text-right rounded-[9px]  bg-[#F7F7F7] shadow-[#00000040] shadow-[0px 1px 2px 0px  inset]  ab:mt-[20px] md:mt-[35px] lg:mt-[41px] sm:mt-[20px] ml-[16%]" /> 
                    <InputCode />
                
                <p1 className="w-[7%] h-[5%] text-[#01B4AF] text-[12px] relative md:bottom-[60px] ab:bottom-[45px] left-[20%]">1:59</p1>
                
                
                <button  onClick={()=>setActive(old=>old+1)} className="sm:w-[42%] sm:h-[35px] md:h-[44px] ab:w-[50%] ab:h-[35px]  text-[#ffffff] rounded-[21px] bg-[#E48900] text-center font-700 sm:ml-[22%] ab:ml-[18%]  mb-[110px] md:mb-[90px] relative sm:bottom-5 ab:bottom-2 md:bottom-6 cd:bottom-4">
                ایجاد حساب
           </button> 
                <button className=" mt-[20%] text-[#008E8B] underline relative ab:top-[-170px] sm:top-[-180px] ab:left-[96px] md:top-[-170px] sm:left-[96px] cd:left-[110px] md:left-[85px]  md:ml-7 text-nowrap">ارسال دوباره کد</button>
                </Form>
                </div>
        </div>
      </div>
      </Formik> 

    )
}

export default SignUpSecondStep
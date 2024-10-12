import { NavLink } from "react-router-dom"
import HeaderSignUp from "./header"
import { Form,Formik,Field } from "formik"

const LogInFirstStep = ({setActive}) => {
    return(
        <Formik>
               <div className="flex  sm:ml-0 ab:ml-[12%] font-BYekan  ">
                <img src="./04.png"  alt="image" className=" cd:w-[60px] cd:h-[60px] lg:mt-[21%] cd:left-[2%] relative lg:ml-[22%]
                cd:mt-[14%] cd:ml-[14%] md:ml-[10%] md:mt-[11%] md:w-[55px] md:h-[55px] ab:w-[50px] ab:h-[50px] ab:ml-[28%] ab:mt-[16%] ab:left-[1%]
                sm:mt-[10%] sm:left-[1%] sm:ml-[8%]  md:left-[1%] duration-1000  dark:hidden "/>
                <img src="./22.png"  alt="image" className=" cd:w-[60px] cd:h-[60px] lg:mt-[21%] cd:left-[2%] relative lg:ml-[22%]
                cd:mt-[14%] cd:ml-[14%] md:ml-[10%] md:mt-[11%] md:w-[55px] md:h-[55px] ab:w-[50px] ab:h-[50px] ab:ml-[28%] ab:mt-[16%] ab:left-[1%]
                sm:mt-[10%] sm:left-[1%] sm:ml-[8%]  md:left-[1%] duration-1000  hidden dark:block "/>                

            <div className="cd:w-[377px] cd:h-[400px] bg-[url(../02.png)] dark:bg-[url(../21.png)] 
  bg-contain bg-no-repeat  cd:mt-[50px] lg:mt-[113px] 
            md:w-[320px] md:h-[350px]  ab:w-[280px] ab:h-[310px] md:mt-[40px]  sm:mt-[40px] ab:mt-[70px] drop-shadow shadow-[#00000040]  " >
            {/* <img src="./02.png" alt="image" className="w-full h-full"/> */}
            <div className=" w-full h-full">
        <Form>
<h1 className=" font-BYekan sm:text-[20px] md:text-[25px] leading-[35.46px] text-[#005351] justify-center   mx-auto cd:mt-[14%] md:mt-[12%] sm:mt-[10%] ab:mt-[8%]
text-center " > ورود به حساب کاربری</h1>

<Field  type="text" placeholder="شماره همراه یا ایمیل" className="w-[74%] ab:h-[35px] md:h-[45px] text-right rounded-[9px]  font-BYekan
bg-[#F7F7F7]  shadow-[0px 1px 2px 0px #00000040 inset] md:text-[17px] ab:text-[13px]
 mx-auto ml-[13%] cd:mt-[10%] sm:mt-[5%] ab:mt-[5%] md:mt-[8%] "/>
<Field  type="text" placeholder="رمز عبور" className="w-[74%] ab:h-[35px] md:h-[45px] text-right rounded-[9px] font-BYekan 
bg-[#F7F7F7]  shadow-[0px 1px 2px 0px #00000040 inset] md:text-[17px] ab:text-[13px]
 mt-[3%] mx-auto ml-[13%] "/>  
<div className="text-[11px] sm:w-[90%] md:w-full flex mx-auto justify-between md:mt-0 sm:mt-2 xl:ml-[16%] lg:ml-[16%] cd:ml-[15%] md:ml-[13%] ab:ml-[15%]" >
    <button  className="text-[#E48900] relative sm:text-[10.5px] md:text-[11px] font-BYekan">فراموشی رمز عبور</button>
    <div  className="mx-auto text-[#AAAAAA] sm:text-[10.5px] md:text-[11px]  font-BYekan">مرا به یاد بیاور
    <input name="reminder" type="checkBox" className="size-3 relative left-[3px] top-[2px]"/> 
</div>
</div>              
<button onClick={()=>setActive(old=>old+1)} className="w-[40%] font-BYekan cd:h-[35px] md:h-[30px] text-[#ffffff] text-nowrap rounded-[21px] bg-[#E48900] text-center font-700 cd:ml-[32%] md:ml-[30%] relative 
ab:ml-[30%] ab:bottom-2  md:bottom-2  cd:bottom-2 lg:bottom-0 lg:mt-[8%] sm:text-[15px] md:text-[16px]">
دریافت کد تایید</button>
<button className=" mt-[11%] text-[#008E8B] relative ab:top-[22px] md:top-[27px] cd:top-[30px] xl:top-[37px] lg:top-[35px] cd:right-[100px] md:right-[90px] sm:right-[80px] ab:right-[80px]">ثبت نام</button>
    </Form>
</div>
</div>
<button className=" dark:text-[#005351] relative cd:top-[280px] cd:right-[500px] md:top-[210px] md:right-[440px] 
 sm:top-[185px] sm:right-[370px]  ab:top-[190px] ab:right-[280px] lg:top-[320px] lg:right-[580px] xl:top-[320px] xl:right-[580px] text-[#AAAAAA] ab:text-[18px] md:text-[20px] text-nowrap">صفحه اصلی</button>
</div>

</Formik>

)
}

export default LogInFirstStep
import HeaderSignUp from "./header"
import { Form,Formik,Field } from "formik"

const LogInFirstStep = ({setActive}) => {
    return(
        <Formik>
        <div className="flex  w-full h-full">
        <img src="./04.png" alt="image" className=" md:w-[60px] md:h-[60px] ab:h-[50px] ab:w-[50px] sm:bottom-[71%] sm:right-[9%] md:ml-[23%] sm:ml-[18%] duration-1000 relative z-10 cd:right-[8%] 
        md:right-[13%] md:bottom-[74%] lg:right-0 lg:left-[1%] cd:bottom-[74%] lg:bottom-[68%] ab:bottom-[75%] ab:right-[2%] xl:bottom-[70%] "/>
    <div className="md:w-[377px] md:h-[350px]  relative lg:bottom-[83%] cd:bottom-[90%] lg:right-0
     cd:right-[10%] md:bottom-[90%] md:right-[15%] sm:bottom-[90%] sm:right-[12%] sm:h-[350px] sm:w-[320px] ab:bottom-[90%] ab:right-[5%] ab:h-[300px] ab:w-[280px]
    duration-1000  " >
    <img src="./12.png" alt="image" className="w-full h-full"/>
    <div className="relative bottom-[100%] w-full h-full">
        <Form>
<h1 className=" text-[25px] leading-[35.46px] text-[#005351] justify-center   mx-auto mt-[14%] 
text-center " > ورود به حساب کاربری</h1>

<Field type="text" placeholder="شماره همراه یا ایمیل" className="w-[74%] h-[45px] text-right rounded-[9px]  
bg-[#F7F7F7]  shadow-[0px 1px 2px 0px #00000040 inset]
 mx-auto ml-[13%] mt-[12%] "/>
<Field type="text" placeholder="رمز عبور" className="w-[74%] h-[45px] text-right rounded-[9px]  
bg-[#F7F7F7]  shadow-[0px 1px 2px 0px #00000040 inset]
mt-[3%] mx-auto ml-[13%] "/>  
<div className="text-[11px] w-full flex mx-auto justify-between lg:ml-[14%] md:ml-[13%] ab:ml-[13%]" >
    <button className="text-[#E48900] relative ">فراموشی رمز عبور</button>
    <div className="mx-auto text-[#AAAAAA]">مرا به یاد بیاور
<input name="reminder" type="checkBox"/> 
</div>
</div>              
<button onClick={()=>setActive(old=>old+1)} className="w-[40%]  h-[35px] text-[#ffffff] text-nowrap rounded-[21px] bg-[#E48900] text-center font-700 ml-[32%] mt-[8%]">
دریافت کد تایید</button>
<button className=" mt-[11%] text-[#008E8B] relative top-[30px] md:right-[100px] sm:right-[90px] ab:right-[70px]">ثبت نام</button>
    </Form>
</div>
</div>

</div>

</Formik>

)
}

export default LogInFirstStep
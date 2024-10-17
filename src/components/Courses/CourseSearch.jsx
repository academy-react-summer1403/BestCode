import { Form, Field } from "formik";
import { CoursesSvg,CourseSvg1 } from "./CoursesSvg";

const CourseSearch = () => {
  return (
    <Form>
      <div className="w-full m-0 h-[412px] border border-yellow-300 flex justify-center mt-[77px] ">
        <div className="w-[70%] m-0 h-[271px] mx-0 bg-[#EBF9F982] flex justify-center backdrop-blur-[4px]
            shadow-[0px_2px_2px_0px_#00000040]">
          <div className="border border-red-600  flex">
            <div className="mt-[15px]  w-[507px] h-[397px] bg-[url(../81.svg)] bg-no-repeat bg-contain backdrop-filter: blur(8px)"></div>
            {/* <div className="bg-[url(../29.svg)] w-[490px] h-[190px]  ml-[20px]  bg-no-repeat bg-contain"></div>
            <div className="bg-[url(../31.svg)] w-[279px] h-[442px]   bg-no-repeat ml-[104px]"></div> */}
          </div>
          <div className="border border-blue-500 w-[80%] lg:w-1/2 "></div>
        </div>

        {/* <div className="w-[342px] h-[93px]  relative bottom-[1262px] ml-[769px]">
          <img src="../32.svg" className="ml-[340px] relative top-[23px]" />
          <p1 className="font-bold text-[35px] text-nowrap text-right right-[240px] relative bottom-3 ">
            دوره های آموزشی
          </p1>
          <p2 className="font-[400] text-[20px] text-nowrap relative top-7 ml-3 text-[#AAAAAA]">
            به روز ترین دوره هایی که میتونید پیدا کنید
          </p2>
          <div>
            <Field
              placeholder="...چی میخوای یاد بگیری؟"
              className="w-[558px] h-[65px] rounded-[35px] bg-[#FAFAFA] border-[1px] border-[#DFDFDF80] backdrop-blur-[5px] 
          relative bottom-[1230px] ml-[530px] text-right pr-[48px] shadow-[0px_1px_2px_0px_#00000033]
"
            />
            <button className="w-[50px] h-[50px] rounded-[25px] bg-[#D47300] bg-[url(../Search.svg)] bg-auto bg-center bg-no-repeat relative bottom-[1234px] right-[544px]"></button>
          </div>
        </div> */}
      </div>
    </Form>
  );
};

export default CourseSearch;

import React from "react";
import images from "../../assets/img/coursDetail";

const Comment = () => {
  return (
    <>
      <p className="relative top-[17px] right-[3px] w-[105px] h-[32px] text-[#005351] dark:text-blue-400 font-bold  text-2xl">
        {" "}
        نظرات{" "}
      </p>

      <div className=" w-full h-[832px] bg-[#FFFF] mb-5 flex flex-wrap relative rounded-2xl shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
        <button
          class=" w-[185px] h-[37px] flex absolute left-5 top-4 rounded-lg border  py-2 px-4 text-center text-[15px] font-normal leading-[21px] transition-all shadow-sm hover:shadow-lg bg-[#00E2DC] text-[#005653] hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="sumbit"
        >
          <img src={images.pm} className="w-[16px] h-[14px] mr-[10px] " />

          <p className=" w-28 h-full relative bottom-[3px] right-1">
            {" "}
            ارسال دیدگاه جدید{" "}
          </p>
        </button>

        <div class=" w-[95%] h-[313px] mt-[70px] mx-auto px-4 bg-[#F9F9F9] rounded-lg shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] ">
          <article class="p-2 text-base   dark:bg-gray-900 ">
            <footer class="flex justify-between items-center mb-2 border-b-2 relative">
              <div class="flex flex-wrap items-center w-[202px] h-[62px]  relative ">
                <div className="w-[28%] h-[95%] rounded-full border-2 border-[#E4E4E4] ">
                  <img
                    class=" w-[85%] h-[85%] m-auto mt-[3.5px] rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough"
                  />
                </div>
                <p class="inline-flex items-center w-[70%] h-[50%] text-[15px] max-smx2:text-[13px] text-[#003B39] dark:text-white relative bottom-3 right-2 ">
                  کاربر | ali@gmail.com
                </p>
                <p class="text-sm text-[#888888] dark:text-gray-400 w-[70%] h-[50%] absolute bottom-[0px] right-[65px]">
                  <time
                    pubdate
                    datetime="2022-02-08"
                    title="February 8th, 2022"
                  >
                    ۱۴۰۳/۰۱/۲۵
                  </time>
                </p>
              </div>
              <div className="flex w-[126px] h-[33px] cursor-pointer ">
                <div className="h-[100%] w-[30%]  flex gap-1">
                  <span className="text-[#888888] text-[18px]"> ۶ </span>
                  <img
                    src={images.disLike}
                    alt=""
                    className="h-[73%] w-[56%]"
                  />
                </div>
                <div className="h-[100%] w-[30%]  flex gap-1">
                  <span className="text-[#888888] text-[18px]"> ۲۵ </span>
                  <img src={images.Like} alt="" className="h-[73%] w-[56%]" />
                </div>
                <div className="h-[100%] w-[40%]  flex">
                  <img
                    src={images.Replay}
                    alt=""
                    className="h-[60%] w-[40%] mr-7 "
                  />
                </div>
              </div>
            </footer>
            <p class="text-gray-500 dark:text-gray-400 max-smx3:text-[11px]">
              سلام. من خيلي دوست دارم اين دوره رو بخرم ولي قيمتش خيلي بالاست، چه
              زماني دوباره اين دوره تخفيف ميخوره؟
            </p>
            <div class="flex items-center mt-4 space-x-4"></div>
          </article>

          <article class="p-6 mb-3 mx-auto relative bottom-4 shadow-[0_-2px_4px_0px_rgba(0,0,0,0.2)] text-base bg-[#ECECEC] rounded-xl border-r-4 border-[#01CEC9] dark:bg-gray-900
                          
                          max-xl:h-[170px] max-xl:
                         ">
            <footer class="flex justify-between items-center mb-2 border-b-2 border-[#DDDDDD] relative">
              <div class="flex flex-wrap items-center w-[202px] h-[62px]  relative ">
                <div className="w-[28%] h-[95%] rounded-full border-2 border-[#01CEC9] ">
                  <img
                    class=" w-[85%] h-[85%] m-auto mt-[3.5px] rounded-full"
                    src={images.mehdi}
                    alt="Michael Gough"
                  />
                </div>
                <p class="inline-flex items-center w-[70%] h-[50%] text-[15px] max-smx2:text-[13px] text-[#003B39] dark:text-white relative bottom-3 right-2 ">
                  مهدی اصغری | مدرس
                </p>
                <p class="text-sm text-[#888888] dark:text-gray-400 w-[70%] h-[50%] absolute bottom-[0px] right-[65px]">
                  <time
                    pubdate
                    datetime="2022-02-08"
                    title="February 8th, 2022"
                  >
                    ۱۴۰۳/۰۱/۲۵
                  </time>
                </p>
              </div>
              <div className="flex w-[141px] h-[33px] cursor-pointer ">
                <div className="h-[100%] w-[30%]  flex gap-1">
                  <span className="text-[#888888] text-[18px]"> ۶ </span>
                  <img
                    src={images.disLike}
                    alt=""
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="h-[100%] w-[30%]  flex gap-1">
                  <span className="text-[#888888] text-[18px]"> ۲۵ </span>
                  <img src={images.Like} alt="" className="h-[22px] w-[22px]" />
                </div>
                <div className="h-[100%] w-[40%]  flex">
                  <img
                    src={images.Replay}
                    alt=""
                    className="h-[22px] w-[22px] mr-7 "
                  />
                </div>
              </div>
            </footer>
            <p class="text-gray-500 dark:text-gray-400 max-smx3:text-[11px]">
              سلام عزیز. حدودا 9 روز دیگه (1 اردیبهشت) برای این دوره تخفیف
              خواهیم داشت. برای مطلع شدن از تخفیف‌ها و جشنواره‌ها لطفا خود سایت
              و سوشال های سبزلرن رو دنبال کنین 👌❤️{" "}
            </p>
            <div class="flex items-center mt-4 space-x-4"></div>
          </article>
        </div>

        <div class="  h-[313px] w-[95%]  mx-auto px-4 bg-[#F9F9F9] rounded-lg shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
          <article class="p-2 text-base   dark:bg-gray-900 ">
            <footer class="flex justify-between items-center mb-2 border-b-2 relative">
              <div class="flex flex-wrap items-center w-[202px] h-[62px]  relative ">
                <div className="w-[28%] h-[95%] rounded-full border-2 border-[#FFBD59] ">
                  <img
                    class=" w-[85%] h-[85%] m-auto mt-[3.5px] rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough"
                  />
                </div>
                <p class="inline-flex items-center w-[70%] h-[50%] text-[15px] max-smx2:text-[13px] text-[#003B39] dark:text-white relative bottom-3 right-2 ">
                  کاربر | ali@gmail.com
                </p>
                <p class="text-sm text-[#888888] dark:text-gray-400 w-[70%] h-[50%] absolute bottom-[0px] right-[65px]">
                  <time
                    pubdate
                    datetime="2022-02-08"
                    title="February 8th, 2022"
                  >
                    ۱۴۰۳/۰۱/۲۵
                  </time>
                </p>
              </div>
              <div className="flex w-[141px] h-[33px] cursor-pointer ">
                <div className="h-[100%] w-[30%]  flex gap-1">
                  <span className="text-[#888888] text-[18px]"> ۶ </span>
                  <img
                    src={images.disLike}
                    alt=""
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="h-[100%] w-[30%]  flex gap-1">
                  <span className="text-[#888888] text-[18px]"> ۲۵ </span>
                  <img src={images.Like} alt="" className="h-[22px] w-[22px]" />
                </div>
                <div className="h-[100%] w-[40%]  flex">
                  <img
                    src={images.Replay}
                    alt=""
                    className="h-[22px] w-[22px] mr-7 "
                  />
                </div>
              </div>
            </footer>
            <p class="text-gray-500 dark:text-gray-400 max-smx3:text-[11px]">
              سلام. من خيلي دوست دارم اين دوره رو بخرم ولي قيمتش خيلي بالاست، چه
              زماني دوباره اين دوره تخفيف ميخوره؟
            </p>
            <div class="flex items-center mt-4 space-x-4"></div>
          </article>

          <article class="p-6 mb-3 mx-auto relative bottom-4 shadow-[0_-2px_4px_0px_rgba(0,0,0,0.2)] text-base bg-[#ECECEC] rounded-xl border-r-4 border-[#01CEC9] dark:bg-gray-900
                         smx1:
                         smx:
                         smx2:
                         smx3:
                         max-sm:  
                         max-md:  
                         max-lg:
                         max-xl:h-[170px] max-xl:">
            <footer class="flex justify-between items-center mb-2 border-b-2 border-[#DDDDDD] relative">
              <div class="flex flex-wrap items-center w-[202px] h-[62px]  relative ">
                <div className="w-[28%] h-[95%] rounded-full border-2 border-[#01CEC9] ">
                  <img
                    class=" w-[85%] h-[85%] m-auto mt-[3.5px] rounded-full"
                    src={images.mehdi}
                    alt="Michael Gough"
                  />
                </div>
                <p class="inline-flex items-center w-[70%] h-[50%] text-[15px] max-smx2:text-[13px] text-[#003B39] dark:text-white relative bottom-3 right-2 ">
                  مهدی اصغری | مدرس
                </p>
                <p class="text-sm text-[#888888] dark:text-gray-400 w-[70%] h-[50%] absolute bottom-[0px] right-[65px]">
                  <time
                    pubdate
                    datetime="2022-02-08"
                    title="February 8th, 2022"
                  >
                    ۱۴۰۳/۰۱/۲۵
                  </time>
                </p>
              </div>
              <div className="flex w-[141px] h-[33px] cursor-pointer ">
                <div className="h-[100%] w-[30%]  flex gap-1">
                  <span className="text-[#888888] text-[18px]"> ۶ </span>
                  <img
                    src={images.disLike}
                    alt=""
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="h-[100%] w-[30%]  flex gap-1">
                  <span className="text-[#888888] text-[18px]"> ۲۵ </span>
                  <img src={images.Like} alt="" className="h-[22px] w-[22px]" />
                </div>
                <div className="h-[100%] w-[40%]  flex">
                  <img
                    src={images.Replay}
                    alt=""
                    className="h-[22px] w-[22px] mr-7 "
                  />
                </div>
              </div>
            </footer>
            <p class="text-gray-500 dark:text-gray-400 max-smx3:text-[11px]">
              سلام عزیز. حدودا 9 روز دیگه (1 اردیبهشت) برای این دوره تخفیف
              خواهیم داشت. برای مطلع شدن از تخفیف‌ها و جشنواره‌ها لطفا خود سایت
              و سوشال های سبزلرن رو دنبال کنین 👌❤️{" "}
            </p>
            <div class="flex items-center mt-4 space-x-4"></div>
          </article>
        </div>

        <button
          class=" w-[177px] h-[40px] mt-[22px]  m-auto rounded-full border border-[#E48900] py-2 px-4 text-center text-[15px] font-normal leading-[21px] transition-all shadow-sm hover:shadow-lg text-[#6B3A00] hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          مشاهده بیشتر +
        </button>
      </div>
    </>
  );
};

export default Comment;

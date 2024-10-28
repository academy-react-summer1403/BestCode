import React from "react";
import PagiantionDashboard from "../../components/common/PaginationDashboard/PagiantionDashboard";
import Card from "../../components/News/Card";
import HeroSection from "../../components/News/HeroSection";
import SideMenu from "../../components/News/SideMenu";
import Selection from "../../components/News/Selection";




const News = () => {
  
   
  return (
    <>
      <div className="w-[100%]   flex flex-wrap relative bg-NewsBg bg-[#F9F9F9] dark:bg-gray-800 font-['BYekan1']">
        
                                                          <HeroSection />


        <div className="w-[100%]  flex max-sm:flex-col gap-7 ">
          <div
            id="left"
            className=" w-[20%] max-cd:w-[40%] max-xl:w-[30%] max-sm:w-[303px] ml-auto max-sm:mr-auto "
          >
                                                          <SideMenu />
          </div>

          <div
            id="right"
            className="  w-[62%] max-cd:w-[55%] max-sm:w-[100%]  mr-auto max-sm:ml-auto mt-[-4%] flex-wrap "
          >
                                            
                                                   <Selection/>

            <div className="w-[100%]  flex flex-wrap justify-center gap-[25px] ">
                                                    
                                                    <Card />
              
                                                    
                                                     <PagiantionDashboard />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;

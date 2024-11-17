import {useState, useEffect}from "react";
import PagiantionDashboard from "../../components/common/PaginationDashboard/PagiantionDashboard";
import Card from "../../components/News/Card";
import HeroSection from "../../components/News/HeroSection";
import SideMenu from "../../components/News/SideMenu";
import Selection from "../../components/News/Selection";

import { getNewsFilter } from "../../core/services/api/course";


const News = () => {
 const [card , setCard] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = card.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
 const GetallCardNew = async () => {
    const data = await getNewsFilter()
    setCard(data?.news)
 }
    useEffect(()=> {
       GetallCardNew()
    }, [])
  return (
    <>
  
      <div className="w-[100%]   flex flex-wrap relative bg-NewsBg bg-[#F9F9F9] dark:bg-gray-800 font-primaryRegular">
        
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

            <div className="w-[100%] h-[600px] flex flex-wrap justify-center gap-[25px] max-md:grid max-md:justify-items-center">
                                                    
            {currentItems.map((item, index) =>(
              <Card 
                item={item}
              /> 
              ))} 
              
                                           
              
            </div>
            <div className="absolute top-[1400px] left-[900px]">
                                                     <PagiantionDashboard
                                                       paginate={paginate}
                                                       row={card}
                                                       itemsPerPage={itemsPerPage}
                                                       currentPage={currentPage}
                                                     
                                                     />
                                                </div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default News;

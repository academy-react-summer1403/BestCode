import {Fragment}from 'react'

const Group149 = ({item , index}) => {
  return (
    <Fragment>
        
                <div className="w-[874px] h-[40px]  flex  items-center  bg-[#F6FFFF]
                shadow-[0px_1px_2px_0px_#00000026] mt-[9px] pr-[27px] pl-[28px] dark:bg-gray-800
                " >
                    <div className=" flex gap-[14px]" >
                      <img src={item.delete}/>  
                      <img src={item.eye} />
                    </div>
                    <div className="w-[65px] text-center ml-[68.69px] ">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white
                      '>{item.writer}</p>
                    </div>
                    <div className="ml-[75px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white
                      ' >{item.timestart}</p>
                    </div>
                    <div className="ml-[77px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white
                      ' >{item.sorting}</p>
                    </div>
                    <div className="
                    ml-[63px]
                    w-[156px] text-center" style={{direction:'rtl'}} >
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white
                      ' >{item.coursename}</p>
                    </div>
                    <div className="h-[30px] w-[30px] ml-[55px]" >
                      <img src={item.img} />
                    </div>
                  </div>
    </Fragment>
  )
}

export default Group149
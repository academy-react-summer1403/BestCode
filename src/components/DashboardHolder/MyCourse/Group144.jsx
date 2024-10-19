import {Fragment}from 'react'

const Group144 = ({item , index}) => {
  return (
    <Fragment>
        
                <div className="w-[874px] h-[40px] px-[27px] flex  items-center justify-between bg-[#F6FFFF]
                shadow-[0px_1px_2px_0px_#00000026] mt-[9px]
                " >
                    <div className="mr-[98.11px]" >
                      <img src={item.eye} />
                    </div>
                    <div className="mr-[88px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]'>{item.price}</p>
                    </div>
                    <div className="mr-[82px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]' >{item.timestart}</p>
                    </div>
                    <div className="mr-[68px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]' >{item.teacher}</p>
                    </div>
                    <div className="mr-[49px]" style={{direction:'rtl'}} >
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]' >{item.coursename}</p>
                    </div>
                    <div className="h-[30px] w-[30px]" >
                      <img src={item.img} />
                    </div>
                  </div>
    </Fragment>
  )
}

export default Group144
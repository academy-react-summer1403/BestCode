import {Fragment , useState} from 'react'


const Group145 = ({item , index}) => {
  return (
    <Fragment>   
                <div className="w-[874px] h-[40px] ] flex  items-center justify-between bg-[#F6FFFF]
                shadow-[0px_1px_2px_0px_#00000026] mt-[9px] pr-[27px] pl-[26px]
                " >
                    <div className="mr-[49px] flex gap-[12px]"  >
                      <img src={item.delete}/>
                      <img src={item.eye} />
                      
                    </div>
                    <div className='mr-[53px]'>
                        <p className='font-primaryRegular  text-[14px] font-[700] w-[72px] text-center'
                        style={{color:item.color}}
                        >{item.vaziet}</p>
                    </div>
                    <div className="mr-[66px] ">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]'>{item.price}</p>
                    </div>
                    <div className="mr-[41px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]' >{item.timestart}</p>
                    </div>
                    <div className="mr-[33px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]' >{item.teacher}</p>
                    </div>
                    <div className="mr-[42px] " style={{direction:'rtl'}} >
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]' >{item.coursename}</p>
                    </div>
                    <div className="h-[30px] w-[30px]" >
                      <img src={item.img} />
                    </div>
                  </div>
    </Fragment>
  )
}

export default Group145
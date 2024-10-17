import { useState } from 'react'
import images from '../../assets/dashboardpng'
import { DashCard, Group73, Group74, Group85 } from '../../components/DashboardHolder/Dashboard/index.js'
import DashCardDore from '../../components/DashboardHolder/Dashboard/DashCardDore.jsx'

const Dashboard = () => {
  const [card , setCard] = useState([
    {namedore:'آموزش جامع ری اکت جی اس' , teacher: 'مهدی اصغری', time: 'چهارشنبه ها . ۱۷:۳۰', img:images.rec111},
    {namedore: 'پکیج آموزش کار با API های کاربری' , teacher: 'محسن اسفندیاری', time: '' ,img:images.rec113},
    
  ])
  const [cardore , setCardore] = useState([
    {namedore: 'آموزش کامل کار با figma' , teacher:'' ,time:'' ,img:images.rec115},
    {namedore:'آموزش کتابخانه های کاربردی js', teacher:'',time:'' , img:images.rec117}
  ])

  return (
    <div className='flex justify-center pr-[32px] pt-[27px] '>
      <div className='w-[797px] h-[661px] ' >
         <div className='flex gap-[37px]'>
            <Group73 />
            <Group74 />
           </div>
            <Group85 />
            <div className='w-[751px] h-[252px]  mt-[59px]  ml-[20px]
                            grid
            '> 
              <div className='flex justify-between '>
                  <div className='w-[342px]'>   
                     <p className='font-primaryMedium text-[18px] h-[26px] text-[#777777]
                     mb-[4px]
                   '
                  style={{direction:'rtl'}} 
                  >دوره های پیشنهادی:</p></div>
                 <div className='w-[342px]'>
                 <p className='font-primaryMedium text-[18px] h-[26px] text-[#777777]
                    mb-[4px]
                  '
                  style={{direction:'rtl'}} 
                  >دوره های در حال برگزاری:</p>
                 </div>
              </div>
              <div className='flex gap-[68px] mt-[12px] relative left-[5px]'>
                 <div className='grid  gap-[15px] '  
                 >
                
                   {cardore.map((item , index) => (
                     <>
                        <DashCardDore
                          namedore={item.namedore}
                          teacher={item.teacher}
                          time={item.time}
                          img={item.img}
                       />
                    </>
                    ))}
                    <div>
                      
                    </div>
                  </div>
                 <div className='grid gap-[-22px] '>
              
                   {card.map((item , index) => (
                      <>
                         <DashCard
                           namedore={item.namedore}
                           teacher={item.teacher}
                           time={item.time}
                           img={item.img}
                       />
                    </>
                    ))}
                 </div>
              </div>
              <div className='flex justify-between mb-[-4px] relative top-[7px] left-[4px] '>
                 <div className='flex w-[342px] justify-center gap-[5px]  '> 
                     <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                       <path d="M9.30869 9.75L4.87598 6L9.30869 2.25" stroke="#B7B7B7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                    <p className='text-[11px] font-primaryMedium text-[#B7B7B7] font-[400]
                      mt-[-4px] cursor-pointer
                    ' >مشاهده همه</p>
                   
                 </div>
                 <div className='flex w-[342px] justify-center gap-[5px]  '>
                 
                     <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                       <path d="M9.30869 9.75L4.87598 6L9.30869 2.25" stroke="#B7B7B7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>  
                     <p className='text-[11px] font-primaryMedium text-[#B7B7B7] font-[400]
                      mt-[-4px] cursor-pointer
                    ' >مشاهده همه</p>
                 </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Dashboard
import images from '../../assets/img/coursDetail'
import { useState } from 'react';

const Accordion = () => {
   
  const [isactive,setIsActive]=useState(false)

  const [buttonstate,setButtonState]=useState([
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
  ])
  
     const handelevalue = (e) =>{

      console.log(e.value);
     }


  const OnClick = () => {
      

        if (!isactive) {
          setIsActive(true)
        }else{
          setIsActive(false)
        }

      }
       


     
  return (
    <> 
        <div className=" relative top-[17px] right-[3px] w-[105px] h-[32px] text-[#005351] font-bold  text-2xl "> سرفصل ها </div>
    
        <div className="flex flex-wrap w-full mb-[565px] ">
          <div className=" flex flex-col w-full gap-3 mt-7">
            
            {buttonstate.map((state,index) => (
              <div onChange={ (e)=>handelevalue(e.target.value) } key={index} className={`collapse collapse-arrow bg-base-200 shadow-[0_1px_2px_0px_rgba(0,0,0,0.3)] ${buttonstate? '' :  'bg-blue1' } `}>
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-[#555555] flex relativ pr-9 "> معرفی و نحوه استفاده از متد LifeCycle 
                <div className=" absolute left-14 text-lg text-[#888888]">
                ۲۰ جلسه . ۴ ساعت
                </div>
              </div>
              
              <div className="collapse-content bg-[#EEFFFF]">
                <div className="collapse-title text-xl font-medium text-[#006865] flex relativ  border-b border-[#E5E5E5] h-10 "> معرفی Ajax
                  <div className=" absolute left-9 text-lg text-[#006865]">
                  15:36
                  </div>
                  <img src={images.play} alt="" className=" absolute left-2 h-5 w-5 mt-1"/>
                </div>
                
              </div>
              </div>
            ))}
            
            {/*<div onClick={ Onclick } className={`collapse collapse-arrow bg-base-200 shadow-[0_1px_2px_0px_rgba(0,0,0,0.3)] ${isactive? 'bg-blue1' :  '' } `}>
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-[#555555] flex relativ pr-9"> معرفی و نحوه استفاده از متد LifeCycle 
                <div className=" absolute left-14 text-lg text-[#888888]">
                ۲۰ جلسه . ۴ ساعت
                </div>
              </div>
              
              <div className="collapse-content bg-[#EEFFFF]">
                <div className="collapse-title text-xl font-medium text-[#006865] flex relativ  border-b border-[#E5E5E5] h-10 "> معرفی Ajax
                  <div className=" absolute left-9 text-lg text-[#006865]">
                  15:36
                  </div>
                  <img src={images.play} alt="" className=" absolute left-2 h-5 w-5 mt-1"/>
                </div>
                <div className="collapse-title text-xl font-medium text-[#006865] flex relativ  border-b border-[#E5E5E5] h-10 "> معرفی Ajax
                  <div className=" absolute left-9 text-lg text-[#006865]">
                  15:36
                  </div>
                  <img src={images.play} alt="" className=" absolute left-2 h-5 w-5 mt-1"/>
                </div>
                <div className="collapse-title text-xl font-medium text-[#006865] flex relativ  border-b border-[#E5E5E5] h-10 "> معرفی Ajax
                  <div className=" absolute left-9 text-lg text-[#006865]">
                  15:36
                  </div>
                  <img src={images.play} alt="" className=" absolute left-2 h-5 w-5 mt-1"/>
                </div>
                <div className="collapse-title text-xl font-medium text-[#006865] flex relativ  border-b border-[#E5E5E5] h-10 "> معرفی Ajax
                  <div className=" absolute left-9 text-lg text-[#006865]">
                  15:36
                  </div>
                  <img src={images.play} alt="" className=" absolute left-2 h-5 w-5 mt-1"/>
                </div>
                <div className="collapse-title text-xl font-medium text-[#006865] flex relativ  border-b border-[#E5E5E5] h-10 "> معرفی Ajax
                  <div className=" absolute left-9 text-lg text-[#006865]">
                  15:36
                  </div>
                  <img src={images.play} alt="" className=" absolute left-2 h-5 w-5 mt-1"/>
                </div>
                <div className="collapse-title text-xl font-medium text-[#006865] flex relativ  border-b border-[#E5E5E5] h-10 "> معرفی Ajax
                  <div className=" absolute left-9 text-lg text-[#006865]">
                  15:36
                  </div>
                  <img src={images.play} alt="" className=" absolute left-2 h-5 w-5 mt-1"/>
                </div>
              </div>
            </div>
            <div onClick={ Onclick } className={`collapse collapse-arrow bg-base-200 shadow-[0_1px_2px_0px_rgba(0,0,0,0.3)]  ${isactive? 'bg-blue1' :  '' } `}>
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-[#555555] flex relativ pr-9"> معرفی و نحوه استفاده از متد LifeCycle 
                <div className=" absolute left-14 text-lg text-[#888888]">
                ۲۰ جلسه . ۴ ساعت
                </div>
              </div>
              
              <div className="collapse-content bg-[#EEFFFF]">
                <div className="collapse-title text-xl font-medium text-[#006865] flex relativ  border-b border-[#E5E5E5] h-10 "> معرفی Ajax
                  <div className=" absolute left-9 text-lg text-[#006865]">
                  15:36
                  </div>
                  <img src={images.play} alt="" className=" absolute left-2 h-5 w-5 mt-1"/>
                </div>
                
              </div>
            </div>
            <div onClick={ Onclick } className={`collapse collapse-arrow bg-base-200 shadow-[0_1px_2px_0px_rgba(0,0,0,0.3)]  ${isactive? 'bg-blue1' :  '' } `}>
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-[#555555] flex relativ pr-9"> معرفی و نحوه استفاده از متد LifeCycle 
                <div className=" absolute left-14 text-lg text-[#888888]">
                ۲۰ جلسه . ۴ ساعت
                </div>
              </div>
              
              <div className="collapse-content bg-[#EEFFFF]">
                <div className="collapse-title text-xl font-medium text-[#006865] flex relativ  border-b border-[#E5E5E5] h-10 "> معرفی Ajax
                  <div className=" absolute left-9 text-lg text-[#006865]">
                  15:36
                  </div>
                  <img src={images.play} alt="" className=" absolute left-2 h-5 w-5 mt-1"/>
                </div>
                
              </div>
            </div>
            <div onClick={ Onclick } className={`collapse collapse-arrow bg-base-200 shadow-[0_1px_2px_0px_rgba(0,0,0,0.3)]  ${isactive? 'bg-blue1' :  '' } `}>
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-[#555555] flex relativ pr-9"> معرفی و نحوه استفاده از متد LifeCycle 
                <div className=" absolute left-14 text-lg text-[#888888]">
                ۲۰ جلسه . ۴ ساعت
                </div>
              </div>
              
              <div className="collapse-content bg-[#EEFFFF]">
                <div className="collapse-title text-xl font-medium text-[#006865] flex relativ  border-b border-[#E5E5E5] h-10 "> معرفی Ajax
                  <div className=" absolute left-9 text-lg text-[#006865]">
                  15:36
                  </div>
                  <img src={images.play} alt="" className=" absolute left-2 h-5 w-5 mt-1"/>
                </div>
                
              </div>
            </div>
            <div onClick={ Onclick } className={`collapse collapse-arrow bg-base-200 shadow-[0_1px_2px_0px_rgba(0,0,0,0.3)]  ${isactive? 'bg-blue1' :  '' } `}>
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-[#555555] flex relativ pr-9"> معرفی و نحوه استفاده از متد LifeCycle 
                <div className=" absolute left-14 text-lg text-[#888888]">
                ۲۰ جلسه . ۴ ساعت
                </div>
              </div>
              
              <div className="collapse-content bg-[#EEFFFF]">
                <div className="collapse-title text-xl font-medium text-[#006865] flex relativ  border-b border-[#E5E5E5] h-10 "> معرفی Ajax
                  <div className=" absolute left-9 text-lg text-[#006865]">
                  15:36
                  </div>
                  <img src={images.play} alt="" className=" absolute left-2 h-5 w-5 mt-1"/>
                </div>
                
              </div>
            </div>
             <div onClick={ Onclick } className={`collapse collapse-arrow bg-base-200 shadow-[0_1px_2px_0px_rgba(0,0,0,0.3)]  ${isactive? 'bg-blue1' :  '' } `}> 
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-[#555555] flex relativ pr-9"> معرفی و نحوه استفاده از متد LifeCycle 
                <div className=" absolute left-14 text-lg text-[#888888]">
                ۲۰ جلسه . ۴ ساعت
                </div>
              </div>
              
              <div className="collapse-content bg-[#EEFFFF]">
                <div className="collapse-title text-xl font-medium text-[#006865] flex relativ  border-b border-[#E5E5E5] h-10 "> معرفی Ajax
                  <div className=" absolute left-9 text-lg text-[#006865]">
                  15:36
                  </div>
                  <img src={images.play} alt="" className=" absolute left-2 h-5 w-5 mt-1"/>
                </div>
                
              </div>
            </div> */}

            </div>
          </div>

          <div className={``}>

          </div>
    </>
      
  )
}
export default Accordion
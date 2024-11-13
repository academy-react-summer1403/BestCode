import { Fragment, useEffect ,useState } from "react"
import { Field, Formik , Form } from 'formik'
import images from '../../assets/Login'
import { loginAPI } from "../../core/services/api/auth"
import { setItem } from "../../core/services/common/storage.services"
import { NavLink, useNavigate } from 'react-router-dom';

const LoginStep1 = ({HandleLoginConfirm}) => {
  const navigate = useNavigate()
  const [userValues, setUserValues] = useState(null);

    const HandleSubmit = async  (values) => {
        const user = await loginAPI(values)
        navigate('/user')
        if (user?.token) {
          setItem("token", user.token);
      }
    } 

  
  return (
    <Fragment>
         <div className='relative bottom-[65px] left-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                        <g filter="url(#filter0_d_281_498)">
                        <rect x="-3" y="25.8198" width="42" height="42" rx="13" transform="rotate(-45 -3 25.8198)" fill="#FCFCFC"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_281_498" x="0.384766" y="0.506084" width="52.6274" height="52.6274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_281_498"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_281_498" result="shape"/>
                        </filter>
                        </defs>
                      </svg>
                      <p className='absolute bottom-[15px] left-[23.5px] font-primaryMedium text-[20px]
                      text-[#D47300] font-[700]
                      '>۱</p>
         </div>
           <div className='w-[377px] h-[400px] mb-[3px] flex justify-center justify-items-center items-center
                      pt-[94px] pb-[81px] pl-[55px] pr-[56px]
                    '
                      style={{backgroundImage: `url(${images.bgloginbox})`,
                        backgroundRepeat:'no-repeat', backgroundPosition:'center', 
                                    backgroundSize: 'auto'
                   }}
                
                   >
                    <div className='grid justify-items-center '>
                      <p className='text-[25px] font-primaryMedium text-[#005351] mb-[31px]' >ورود به حساب کاربری</p>
                      <Formik initialValues={{phoneOrGmail:'' , password:'' , rememberMe:false}} 
                          onSubmit={(e) =>HandleSubmit(e)}
                      >
                           <Form >
                           <div 
                              className='w-[277px] h-[47px] bg-transparent shadow-[0px_1px_2px_0px_#00000040_inset]
                              rounded-[9px]
                              text-right
                              outline-none
                              border-none
                              placeholder:mr-[19px]
                              placeholder:text-right
                              pt-[14px] font-primaryMedium
                              pb-[15px]
                              flex justify-between
                              gap-[3px]
                              px-[12px]
                              
                              
                              '
                           >
                              <Field
                               className='bg-transparent outline-none  placeholder:bg-transparent
                               w-[100px] border border-black
                               '
                               name='phoneOrGmail'
                            />
                            <p className='text-[12px]'>شماره همراه یا ایمیل</p>
                            </div>
                            <div 
                              className='w-[277px] h-[47px] bg-transparent shadow-[0px_1px_2px_0px_#00000040_inset]
                              rounded-[9px]
                              text-right
                              outline-none
                              border-none
                              placeholder:mr-[19px]
                              placeholder:text-right
                              pt-[14px] font-primaryMedium
                              pb-[15px]
                              flex justify-between
                              gap-[3px]
                              px-[12px]
                              '
                           >
                              <Field
                               className='bg-transparent outline-none  placeholder:bg-transparent
                               w-[100px] border border-black
                               '
                               name='password'
                            />
                            <p className='text-[12px]'>رمز عبور</p>
                            </div>
                    <div className="flex justify-between">  
                    <p className="font-primaryMedium text-[11px] text-[#E48900]">فراموشی رمز عبور</p>
                   <label className="w-[104px] flex justify-center   items-center gap-[7px]">
                        <span className="text-[#AAAAAA] font-[400] font-primaryMedium text-[12px] mb-[3px]
                          dark:text-white
                          "> مرا بخاطر بسپار</span> 
                          <Field type="checkbox" name="rememberMe" className=' focus:ring-blue-500
                          appearance-none h-[15px] w-[15px] rounded-[3px] shadow-[0px_1px_3px_0px_#00000040_inset] bg-white 
                          checked:bg-blue-600 ' />
                        </label>
                    
                    </div>
                      <div className='grid justify-items-center mt-[44px]'>
                       <button className='font-primaryMedium text-[13px] bg-[#E48900]
                       w-[133px] h-[35px] rounded-[21px] text-[#FFFFFF]
                       ' type='submit'  >دریافت کد تایید</button>
                        <p className='text-[12px] text-[#008E8B] font-primaryRegular font-[700] mt-[4px]'>ثبت نام</p>
                       </div>      
                       </Form>
                    </Formik>  
                    </div>
                    </div> 
    </Fragment>
  )
}

export default LoginStep1
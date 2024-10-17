import { Fragment , useState , useRef } from 'react'
import { Box } from "@mui/material";
import {Form , Formik , Field} from 'formik'
import images from '../../../assets/dashboardpng'
import Calender from './Calender1';
import ImageField1 from '../../../components/DashboardHolder/Dashboard/ImageField1';
import MapReact1 from '../../../components/DashboardHolder/Dashboard/MapReact1';
const EditProfile = () => {
  const [submittedDate, setSubmittedDate] = useState();
  const [previewImage, setPreviewImage] = useState(images.profile)
  // const mapStyles = {
  //   height: "400px",
  //   width: "100%"
  // };

  // const defaultCenter = {
  //   lat: 35.6892, 
  //   lng: 51.3890
  // };

  // const handleMapClick = (e, setFieldValue) => {
  //   const lat = e.latLng.lat();
  //   const lng = e.latLng.lng();
  //   setSelectedPosition({ lat, lng });
  //   setFieldValue("location", { lat, lng });
  // };

  const handleFormSubmit = (values) => {
    console.log(values.birthday);
    setSubmittedDate(values.birthday)
  };
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setPreviewImage(reader.result)
      };
      
      reader.readAsDataURL(file)
    }
    
  };
  
  console.log(submittedDate?.format?.("D MMMM YYYY"))
  const initialValues = {
    firstName: "",
    lastName: "",
    codemeli: "",
    genre: "",
    birthday: null,
    phonenumber: "",
    email:"",
    telegram:"",
    linkdin:"",
    address:"",
    img: "",
    about:"",
    location: { lat: "", lng: "" }
  };
  return (
    <Fragment>
        <div className='w-[800px] h-[681px]  ml-[38px] mt-[13px] '>
            <div className='w-[800px] h-[50px]  top-[2px] relative flex justify-center items-center mb-[-4px]'>
            <div>
              <p className=' h-[28px]  text-[#9D9D9D]
               font-primaryRegular text-[20px] mt-[16px] relative left-[9px]
              ' >ویرایش اطلاعات کاربری</p>
            </div>
            <div className='w-[50px] h-[50px] left-[272px] relative z-[555] dark:bg-gray-800 
          justify-center flex flex-col items-center gap-[2px]  shadow-[0px_1px_2px_0px_#00000040]
          rounded-[10px] bg-[#F7F7F7]
            '>
           <div className='flex relative left-[7.5px] gap-[2px]'>
            <svg 
                
                width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" stroke="#B5B5B5" stroke-width="2"/>
             </svg>
             <svg 
                className='relative top-[2px]'
                xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7.03683 1.94273C7.4095 1.53903 7.59566 1.3372 7.79366 1.21946C8.27133 0.935379 8.85949 0.926546 9.34516 1.19616C9.54649 1.3079 9.73849 1.50406 10.1225 1.89638C10.5065 2.2887 10.6987 2.48486 10.808 2.69046C11.0718 3.18657 11.0633 3.7874 10.7852 4.27535C10.6698 4.47758 10.4723 4.66789 10.0772 5.0485L5.37533 9.57716C4.62649 10.2984 4.25199 10.6591 3.78399 10.8419C3.31599 11.0247 2.80166 11.0112 1.77266 10.9843L1.63266 10.9806C1.31949 10.9724 1.16282 10.9684 1.07182 10.865C0.980822 10.7617 0.993154 10.6022 1.01799 10.2831L1.03149 10.1098C1.10149 9.21178 1.13649 8.76276 1.31182 8.35912C1.48715 7.95547 1.78966 7.62774 2.39466 6.97226L7.03683 1.94273Z" stroke="#B5B5B5" stroke-width="2" stroke-linejoin="round"/>
              </svg>
             </div>
             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="13" viewBox="0 0 26 13" fill="none">
              <path d="M5.77011 3.03723C3.88374 4.19552 -1.06219 6.56066 1.95022 9.52033C3.42175 10.966 5.06066 12 7.12117 12H18.8788C20.9394 12 22.5783 10.966 24.0498 9.52033C27.0622 6.56066 22.1163 4.19552 20.2299 3.03723C15.8064 0.320924 10.1936 0.320924 5.77011 3.03723Z" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
            </div>
            </div>
                 
              
                    <Formik 
                        onSubmit={handleFormSubmit}
                        initialValues={initialValues}
                       
                    >
                       
                      {({ setFieldValue }) => (
                       <Form  className='flex w-[800px] h-[631px]  pr-[15px] pl-[17px] pt-[27px]
                       justify-between' >                        
                       <div className='w-[308px] h-[604px] 
                       justify-center flex-col justify-items-center'>
                                <div className='w-[308px] grid justify-center
                                  justify-items-center
                                '>
                                <ImageField1 previewImage={previewImage} 
                                            handleImageClick={handleImageClick} 
                                            handleFileChange={handleFileChange} 
                                            fileInputRef={fileInputRef}
                                            setPreviewImage={setPreviewImage}
                                  />
                                      <div className='mt-[-36px] relative top-[5px]' >
                                          <label className='text-[#979797] font-primaryMedium
                                              text-[13px]  ml-[-12px]
                                              w-[308px] flex justify-end 
                                            ' >درباره من</label>
                                          <Field
                                            name='about'
                                            placeholder='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز با هدف بهبود ابزارهای کاربردی می باشد. '
                                            as='textarea'
                                            className='w-[308px] h-[148px] text-right outline-none
                                            shadow-[0px_1px_2px_0px_#00000033_inset] 
                                            width-[200px]
                                            rounded-[5px] resize-none
                                            placeholder:text-[14px]
                                            placeholder:font-primaryMedium
                                            placeholder:text-[#005351]
                                            placeholder:pt-[5px]
                                            placeholder:pl-[14px]
                                            placeholder:pr-[17px]
                                            '
                                            style={{direction:'rtl'}}
                                          />
                                      </div>
                                      <div className='grid justify-center justify-items-center
                                      w-[308px] mt-[43px] ml-[3px] relative
                                      '>
                                     <MapReact1 setFieldValue={setFieldValue} />
                                        <div className='w-[277px] h-[35px]  mt-[-8px] flex justify-between'>
                                            <button className='w-[95px] h-[35px] flex justify-center
                                              items-center rounded-[25px] gap-[9px] 
                                            '>
                                              
                                                <span>
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                  <path d="M11.8121 11.25L7.3125 6.75M7.31298 11.25L11.8125 6.75" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <path d="M17.0625 9C17.0625 4.85786 13.7046 1.5 9.5625 1.5C5.42036 1.5 2.0625 4.85786 2.0625 9C2.0625 13.1421 5.42036 16.5 9.5625 16.5C13.7046 16.5 17.0625 13.1421 17.0625 9Z" stroke="#D9D9D9" stroke-width="1.5"/>
                                                  </svg>
                                                </span> 
                                                <span 
                                                
                                                className='text-[15px] font-primaryMedium text-[#D4D4D4] mb-[4px]
                                                h-[21px] 
                                                '>لغـــو</span>
                                            </button>
                                            <button  className='w-[152px] h-[35px] flex justify-center gap-[12px]
                                              rounded-[25px] bg-[#00E0DB] items-center'>         
                                                <span className='mt-[-0.5px]' >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                    <path d="M5.99316 16.5V14.25C5.99316 12.8358 5.99316 12.1287 6.43239 11.6894C6.87162 11.25 7.57856 11.25 8.99239 11.25C10.4062 11.25 11.1131 11.25 11.5524 11.6894C11.9916 12.1287 11.9916 12.8358 11.9916 14.25V16.5" stroke="#003B39" stroke-width="1.5" stroke-linejoin="round"/>
                                                    <path d="M7.49316 5.25H10.4924" stroke="#003B39" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M2.24414 8.8938C2.24414 5.46149 2.24414 3.74532 3.28393 2.65795C3.32234 2.61778 3.36164 2.57848 3.4018 2.54005C4.48888 1.5 6.20462 1.5 9.63604 1.5C10.4493 1.5 10.8411 1.50282 11.2139 1.64202C11.573 1.77607 11.8738 2.02679 12.4754 2.52824L14.1219 3.90069C14.9179 4.56421 15.3159 4.89596 15.5283 5.34949C15.7407 5.80303 15.7407 6.32125 15.7407 7.35769V9.75C15.7407 12.5623 15.7407 13.9684 15.0247 14.9542C14.7934 15.2725 14.5135 15.5525 14.1952 15.7838C13.2098 16.5 11.804 16.5 8.99241 16.5C6.18083 16.5 4.77504 16.5 3.78955 15.7838C3.47128 15.5525 3.19138 15.2725 2.96014 14.9542C2.24414 13.9684 2.24414 12.5623 2.24414 9.75V8.8938Z" stroke="#003B39" stroke-width="1.5"/>
                                                </svg>
                                                </span> 
                                                <span className='font-primaryMedium text-[#003B39] h-[21px]
                                                  flex items-center mt-[-2px]
                                                '>ذخیره تغییرات</span>
                                            </button>
                                        </div>
                                      </div> 
                          </div>
                        </div>
                        <div className='grid grid-cols-2  text-right
                         gap-y-[11px] gap-x-[30px] w-[430px] h-[496px] 
                       ' >
                          <div className='flex-col' >
                            <label className='text-[#979797] font-primaryMedium
                             text-[13px]  mr-[12px] 
                            ' >نام خانوادگی</label>
                            <Field
                              type='text'
                              name='lastname'
                              placeholder='فلان زاده فلان آبادی'
                              className='w-[200px] text-right outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px]
                              rounded-[5px]
                              h-[36px] 
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              placeholder:pt-[5px]
                              placeholder:pr-[13px]
                              '
                            />
                           </div>
                           <div className='flex-col'>
                            <label className='text-[#979797] font-primaryMedium
                             text-[13px]  mr-[12px]
                            ' >نام</label>
                            <Field
                              type='text'
                              name='firstname'
                              placeholder='فلان'
                              className='w-[200px] text-right outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px]
                              rounded-[5px] placeholder:text-[16px]
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              h-[36px] 
                              placeholder:pt-[5px]
                              placeholder:pr-[13px]
                              '
                            />
                            </div>
                           <div>
                           <label className='text-[#979797] font-primaryMedium
                             text-[13px]  mr-[12px]
                            ' >جنسیت</label>
                            <Field
                              as='select'
                              name='gender'
                              placeholder='gender'
                              className='w-[200px] outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px]
                              rounded-[5px]
                              text-right
                              text-[16px]
                              font-primaryMedium
                              text-[#005351]
                              h-[36px]
                              
                              '
                          >
                            <option value='' disabled  className=' text-[16px]
                              font-primaryMedium
                              text-[#005351]'>
                                انتخاب جنسیت
                            </option>
                            <option value='male' 
                             className=' text-[16px]
                              font-primaryMedium
                              text-[#005351]'
                            >مرد</option>
                            <option value='female'
                             className=' text-[16px]
                              font-primaryMedium
                              text-[#005351]'
                            >زن</option>
                            </Field >
                           </div>
                           <div>
                            <label className='text-[#979797] font-primaryMedium
                             text-[13px]  mr-[12px]
                            ' >کد ملی</label>
                            <Field
                              name='codemeli'
                              placeholder='کد ملی'
                              className='w-[200px] text-right outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px]
                              rounded-[5px]
                              placeholder:text-[16px]
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              h-[36px] 
                              placeholder:pt-[5px]
                              placeholder:pr-[13px]

                              '
                            />
                           </div>
                           <div>
                            <label className='text-[#979797] font-primaryMedium
                                text-[13px]  mr-[12px]
                              ' >شماره تلفن</label>
                            <Field
                              name='phonenumber'
                              placeholder='۰۹۳۹۶۴۲۱۲۳۴'
                              className='w-[200px]  outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px]
                              rounded-[5px]
                              h-[36px] 
                              items-center
                              pl-[12px]
                              pb-[6px]
                              text-left
                              placeholder:text-[16px]
                              font-primaryMedium
                               placeholder:text-[#005351]
                              '
                            />
                           </div>
                           <div>
                           <label className='text-[#979797] font-primaryMedium
                                text-[13px] mr-[12px]
                              ' >تاریخ تولد</label>
                            <div className='flex w-[200px] 
                                 h-[36px] 
                                justify-between
                                items-center
                                shadow-[0px_1px_2px_0px_#00000033_inset] 
                                rounded-[5px]'>                              
                            
                            <Field name="birthday">
                          {({ field }) => (
                             <Calender
                                    value={field.value}
                                    onChange={(value) => setFieldValue("birthday", value)} 
                             />
                             )}
                          </Field>    
                             </div>
                           </div>
                           <div>
                           <label className='text-[#979797] font-primaryMedium
                                text-[13px]  mr-[12px]
                              ' >تلگرام</label>
                            <Field
                              name='telegram'
                              placeholder='https://t.me/..'
                              className='w-[200px] text-left outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px]
                              rounded-[5px]
                              h-[36px] 
                              placeholder:text-[16px]
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              placeholder:pt-[5px]
                              placeholder:pl-[13px]
                              '
                            />
                           </div>
                           <div>
                           <label className='text-[#979797] font-primaryMedium
                                text-[13px]  mr-[12px] 
                              ' >ایمیل</label>
                            <Field
                              name='email'
                              placeholder='folani99@gmail.com'
                              className='w-[200px] text-left outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px]
                              h-[36px] 
                              rounded-[5px]
                              placeholder:text-[16px]
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              placeholder:pt-[5px]
                              placeholder:pl-[13px]
                              '
                            />
                           </div>
                           <div className='grid gap-[70px]'>
                            <div>
                            <label className='text-[#979797] font-primaryMedium
                                text-[13px]  ml-[-12px]
                                 w-[430px] flex justify-end
                               ' >لینکداین</label>
                             <Field
                              name='linkdin'
                              placeholder='https://www.linkedin.com/in/...'
                              className='w-[430px] text-left outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px] 
                              rounded-[5px]
                              h-[35px] 
                              placeholder:text-[16px]
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              placeholder:pt-[5px]
                              placeholder:pl-[13px]
                              '
                            />
                            </div>
                            <div>
                            <label className='text-[#979797] font-primaryMedium
                                text-[13px]  ml-[-12px]
                                 w-[430px] flex justify-end 
                              ' >آدرس</label>
                            <Field
                              name='address'
                              placeholder='مازندران - ساری - میدان خزر - جاده فرح آباد - خیابان دیمطوران - ساختمان هوتن ۱۲ - واحد ۱۵'
                              as='textarea'
                              className='w-[430px] h-[65px] text-right outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px]
                              rounded-[5px] resize-none
                              placeholder:text-[16px]
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              placeholder:pt-[5px]
                              placeholder:pr-[14px]
                              '
                            />
                            </div>
                           </div>
                        </div>
                       </Form>
                        )}
                       
                    </Formik>
             
            
         </div>
    </Fragment >
  )
}

export default EditProfile
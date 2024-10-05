import { Fragment } from "react"
import HeroSection from "../../components/HeroSection/HeroSection"
import CategorySection from "../../components/CategorySection/CategorySection"
import CourseSection from "../../components/CourseSection/CourseSection"
import BestTeacher from "../../components/BestTeacher/BestTeacher"
import ServicesSection from "../../components/ServicesSection/ServicesSection"
import ArticleSection from "../../components/ArticleSection/ArticleSection"
import PodCastSection from "../../components/PodCastSection/PodCastSection"


const Landing = () => {
  return (
   <Fragment>
      <HeroSection /> 
      <CategorySection /> 
      <CourseSection /> 
      <BestTeacher />
       <ServicesSection /> 
      <ArticleSection /> 
      <PodCastSection />      
   </Fragment>
  )
}

export default Landing
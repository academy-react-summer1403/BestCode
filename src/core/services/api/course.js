import { baseUrl } from '../../../config';
import http from '../interceptor'

export const getCourseList = async (count) => {
        try {
          const result = await http.get(
            `/Home/GetCoursesTop?${count}`,
         );
  
          return result
          
        } catch (error) {
            return []
        }
};
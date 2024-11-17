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



export const getCourseDetail = async (params) => {
  try {
     const result = await http.get(`/Home/GetCourseDetails?CourseId=${params}`)

     return result
  } catch(err) {
    return []
  }
}





export  const getNewsFilter = async () => {
  try {
    const result = await http.get('/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC')
    console.log(result)
    return result
  } catch(err) {
    return []
  }
}




export const getAllCourse = async () => {
  try {
    const result = await http.get('/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0')

    return result

  } catch(err) {
     return []
  }
}

export const GetNewsById = async (params) => {
  try {
    const result = await http.get(`/News/${params}`)

    return result
  } catch(err) {
    return []
  }
}



export const getCommentById = async (params) => {
  try {
    const result = await http.get(`/Course/GetCourseCommnets/${params}`)
    return result
  } catch(error) {
    return []
  }
}

export const getReplyComment = async (commentId , courseId) => {
  try {
    const result = await http.get(`/Course/GetCourseReplyCommnets/${courseId}/${commentId}`)
    return result
  } catch(err) {
    return []
  }
}


export const getFilterCourseBytech = async () => {
  try {
    const result = await http.get('/Home/GetTechnologies')
    return result
  } catch(err) {
    return []
  }
}

export const getTech = async (params) => {
  try {
    const result = await http.get(`/Home/GetCoursesWithPagination?TechCount=${params}`)

    return result
  } catch(err) {
    return []
  }
}
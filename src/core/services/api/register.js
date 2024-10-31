import http from '../interceptor'


export const registerLevel1 = async (user) => {
    try {
       const result = await http.post('/Sign/SendVerifyMessage',user,
      ) 

       return result

    } catch (error) {
       
       console.log('test',error)
       return []

    }

}
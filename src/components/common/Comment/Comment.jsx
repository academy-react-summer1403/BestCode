import CommentComp from './CommentComp';


const Comment = ({comment , uuid}) => {
  return (
    <div className='w-[809px] h-[953px] border border-blue-400 flex-col mt-[30px]'>
         <div className='h-[67px] w-[809px] border border-green-400'></div>
         <div className='h-[67px] w-[809px] border border-green-600'></div>
         <div className='w-[768px] h-[313px] border mr-[20px] grid gap-[10px]
         px-[23px] 
         '>
            {comment.slice(0,2).map((item , index) => (
               <CommentComp
                 item={item}
                 uuid={uuid}
               />
            ))}
          
         </div>
    </div>
  )
}

export default Comment
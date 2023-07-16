import { PostModel, CommentModel } from "@/lib/model";
import CommentField from "./commentField";
import CommentCard from "./comment";

export default function PostCard({ data ,updateData} : {data:PostModel, updateData:any}) {
    // const addComment =()=>{
    //     data.comment.push({} as CommentModel);
    // }

    return (
        <div className="rounded overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.username} says</div>
                <p className="text-gray-700 text-base">
                    {data.message}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 div-comments">
                <h6 className="text-lg font-bold dark:text-white">Comments</h6>
                

                {data.comment.length != 0 ? 
                data.comment.map((comment,i) => {                        
                    return (
                        <div className="comment" key={"comment-"+i}>
                            <CommentCard data={comment}/>
                        </div>
                    );
                })
                :                         
                <div className="comment">
                        <p className="text-gray-900 leading-none">Be first to comment</p>
                </div>
                }
            </div>

            <div className="px-6 pt-4 pb-2 div-comments">
                <div className="comment">
                    <CommentField postId={data.id} updateData={updateData}/>
                </div>
            </div>
        </div>
    );
}
  
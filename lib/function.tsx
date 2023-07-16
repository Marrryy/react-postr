// import 'server-only'
import { PostModel, CommentModel } from "./model";
import _uniqueId from 'lodash/uniqueId';


export function getUsername(){
    let data = localStorage.getItem("usn")
    
    if(!data){
        localStorage.setItem("usn", _uniqueId('anon-'))
    };
}

export function getData() :  PostModel[]{
//   const res = await fetch('https://external-service.com/data', {
//     headers: {
//       authorization: process.env.API_KEY,
//     },
//   })
 
//   return res.json()
    let data = localStorage.getItem("data")
    
    return data ? JSON.parse(data):[];
}

export function postData(data : PostModel) {
    let allData = getData()
    allData.push(data);
    replaceData(allData)
}

export function replaceData(data : Array<PostModel>) {
    localStorage.setItem("data", JSON.stringify(data));
}

export function postComment(comment : CommentModel) : String {
    let data =getData();
    
    //Find the PostModel to concat the CommentModel
    let selectedPost = data.find(x=> x.id == comment.postId);
    if(!selectedPost){
        return "Failed";
    }
    selectedPost.comment.push(comment);


    //Find the index & Replacing
    let replaceInd =data.findIndex(x => x.id == comment.postId);
    data[replaceInd]= selectedPost;
    replaceData(data);

    return "Success";
}
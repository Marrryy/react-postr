import { postComment } from "@/lib/function";
import { CommentModel } from "@/lib/model";
import { useState } from "react";
import _uniqueId from 'lodash/uniqueId';

export default function CommentField({ postId } : {postId:string}) {
    const [message, setMessage] = useState("");
    const [id] = useState(_uniqueId('prefix-'));

    const handleSubmit = async (event:any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        var username = localStorage.getItem("usn");

        // Get data from the form.
        const newData : CommentModel = {
            postId,
            id,
            username,
            message,
        }
        postComment(newData);
        setMessage("");
    }
    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
          id="message" name="message" required value={message}
          maxLength={100} onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="submit">Submit</button>
        </div>
      </form>
    );
}
  